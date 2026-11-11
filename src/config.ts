/**
 * Site settings that are not content.
 * Set PUBLIC_FORMSPREE_ENDPOINT in `.env` (or the GitHub Actions env) to send the contact form
 * through Formspree. Empty → the form opens the visitor's email app with the message filled in.
 */
export const formspreeEndpoint: string = (import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? '').trim();
