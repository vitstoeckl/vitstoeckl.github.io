/**
 * Site settings that are not content.
 * Set PUBLIC_FORMSPREE_ENDPOINT in `.env` (or the GitHub Actions env) to send the contact form
 * through Formspree. Empty → the form opens the visitor's email app with the message filled in.
 */
export const formspreeEndpoint: string = (import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? '').trim();

/**
 * Umami Cloud analytics (Step 7). PUBLIC_UMAMI_WEBSITE_ID = the "Website ID" from umami.is.
 * Empty → no tracking script at all. The script is also left out in `astro dev`, and it only
 * counts visits on the real domain (so local builds and PDF generation are never counted).
 */
export const umami = {
  websiteId: (import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '').trim(),
  scriptSrc: (import.meta.env.PUBLIC_UMAMI_SCRIPT_URL ?? '').trim() || 'https://cloud.umami.is/script.js',
};

/**
 * /admin gate (Step 7): the Umami share link, encrypted with your admin passphrase.
 * Make it with `npm run admin:vault` and store the output as PUBLIC_ADMIN_VAULT.
 */
export const adminVault: string = (import.meta.env.PUBLIC_ADMIN_VAULT ?? '').trim();
