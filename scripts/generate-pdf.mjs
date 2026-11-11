/**
 * Runs after `astro build` (`npm run build`):
 *   - dist/cv/{fileSlug}-CV-{lang}.pdf  ← each /{lang}/cv/ page printed to A4
 *   - dist/og/{lang}.png                ← each /og-card/{lang}/ page as a 1200×630 preview image
 *
 * It serves `dist/` on a local port and drives Chrome through playwright-core
 * (no browser download: uses the installed Google Chrome, or CHROME_PATH if set).
 */
import { createServer } from 'node:http';
import { readFile, mkdir, rm, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { chromium } from 'playwright-core';
import { loadEnv } from 'vite';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');

// Same BASE_PATH rules as astro.config.mjs.
const env = { ...loadEnv('production', root, ''), ...process.env };
const rawBase = (env.BASE_PATH || '/').trim();
const base = rawBase === '/' ? '' : `/${rawBase.replace(/^\/+|\/+$/g, '')}`;

// Languages and the file-name slug come from the source, so there is one place to change them.
const utilsSource = await readFile(join(root, 'src/i18n/utils.ts'), 'utf8');
const langs = [...utilsSource.matchAll(/^\s{2}(\w{2}): \{ label:/gm)].map((m) => m[1]);
const profileSource = await readFile(join(root, 'src/data/profile.ts'), 'utf8');
const fileSlug = profileSource.match(/fileSlug:\s*'([^']+)'/)?.[1];
if (!langs.length || !fileSlug) throw new Error('Could not read languages or fileSlug from src/.');

/* ---------- Tiny static server for dist/ ---------- */
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

const server = createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url ?? '/', 'http://x').pathname);
    if (base && path.startsWith(base)) path = path.slice(base.length) || '/';
    let file = normalize(join(dist, path));
    if (!file.startsWith(dist)) throw new Error('outside dist');
    if ((await stat(file).catch(() => null))?.isDirectory()) file = join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end('Not found');
  }
});
await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
const origin = `http://127.0.0.1:${server.address().port}${base}`;

/* ---------- Chrome ---------- */
const browser = await chromium.launch(
  env.CHROME_PATH ? { executablePath: env.CHROME_PATH } : { channel: 'chrome' },
);

try {
  await mkdir(join(dist, 'cv'), { recursive: true });
  await mkdir(join(dist, 'og'), { recursive: true });

  const pdfPage = await browser.newPage();
  for (const lang of langs) {
    await pdfPage.goto(`${origin}/${lang}/cv/`, { waitUntil: 'networkidle' });
    await pdfPage.evaluate(() => document.fonts.ready);
    const out = join(dist, 'cv', `${fileSlug}-CV-${lang}.pdf`);
    await pdfPage.pdf({ path: out, format: 'A4', preferCSSPageSize: true, printBackground: true });
    console.log(`  PDF  ${out.slice(root.length + 1)}`);
  }

  const ogPage = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const lang of langs) {
    await ogPage.goto(`${origin}/og-card/${lang}/`, { waitUntil: 'networkidle' });
    await ogPage.evaluate(() => document.fonts.ready);
    const out = join(dist, 'og', `${lang}.png`);
    await ogPage.screenshot({ path: out, clip: { x: 0, y: 0, width: 1200, height: 630 } });
    console.log(`  PNG  ${out.slice(root.length + 1)}`);
  }

  // The card pages were only a template for the images; don't publish them.
  await rm(join(dist, 'og-card'), { recursive: true, force: true });
} finally {
  await browser.close();
  server.close();
}
