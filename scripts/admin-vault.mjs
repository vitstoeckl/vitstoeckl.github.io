/**
 * `npm run admin:vault` — locks the Umami share link with your admin passphrase.
 *
 * Asks for the share URL and a passphrase, prints one line: PUBLIC_ADMIN_VAULT=v1.…
 * Put that value in GitHub (Settings → Secrets and variables → Actions → Variables) and/or .env.
 * The /admin page asks for the same passphrase and decrypts the link in the browser.
 * Neither the passphrase nor the share link is stored anywhere in readable form.
 *
 * Crypto: PBKDF2-SHA-256 (310 000 rounds, random salt) → AES-256-GCM (random IV).
 * Must match src/pages/admin.astro.
 */
import { createInterface } from 'node:readline';
import { webcrypto as crypto } from 'node:crypto';

const ITERATIONS = 310_000;

function ask(question, { hidden = false } = {}) {
  const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: true });
  if (hidden) {
    rl._writeToOutput = (text) => {
      // Show the question, hide what is typed.
      if (text.startsWith(question)) rl.output.write(question);
      else if (text.includes('\n')) rl.output.write('\n');
    };
  }
  return new Promise((resolve) => rl.question(question, (answer) => (rl.close(), resolve(answer.trim()))));
}

const b64 = (bytes) => Buffer.from(bytes).toString('base64url');

const shareUrl = await ask('Umami share URL: ');
if (!/^https:\/\/\S+$/.test(shareUrl)) throw new Error('That does not look like an https:// link.');

const passphrase = await ask('Admin passphrase (min. 10 characters): ', { hidden: true });
if (passphrase.length < 10) throw new Error('Use at least 10 characters.');
const again = await ask('Repeat passphrase: ', { hidden: true });
if (again !== passphrase) throw new Error('The passphrases do not match.');

const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const baseKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(passphrase), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITERATIONS },
  baseKey,
  { name: 'AES-GCM', length: 256 },
  false,
  ['encrypt'],
);
const cipher = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(shareUrl));

console.log(`\nPUBLIC_ADMIN_VAULT=v1.${b64(salt)}.${b64(iv)}.${b64(new Uint8Array(cipher))}\n`);
