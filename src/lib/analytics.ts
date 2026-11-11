/**
 * Umami custom events. The Umami script itself is added by BaseLayout (production only,
 * only when PUBLIC_UMAMI_WEBSITE_ID is set, only on the real domain). Without it every
 * call here does nothing.
 *
 * Events: cv-download {lang} · email-click · linkedin-click · github-click
 *         project-open {project} · certificate-verify {certificate}
 *         language-switch {from, to} · contact-submit {via}  (sent from the contact form)
 */
type EventData = Record<string, string | number>;

declare global {
  interface Window {
    umami?: { track: (event: string, data?: EventData) => void };
  }
}

export function track(event: string, data?: EventData): void {
  try {
    window.umami?.track(event, data);
  } catch {
    /* analytics must never break the page */
  }
}

/** Work out which event (if any) a click on this link stands for. */
function eventFor(link: HTMLAnchorElement): [string, EventData?] | null {
  const href = link.getAttribute('href') ?? '';

  if (link.dataset.langLink) {
    const from = document.documentElement.lang;
    const to = link.dataset.langLink;
    return from === to ? null : ['language-switch', { from, to }];
  }
  if (link.dataset.certificate) return ['certificate-verify', { certificate: link.dataset.certificate }];
  if (href.startsWith('mailto:')) return ['email-click'];

  let target: URL;
  try {
    target = new URL(href, location.href);
  } catch {
    return null;
  }
  if (/(^|\.)linkedin\.com$/.test(target.hostname)) return ['linkedin-click'];
  if (/(^|\.)github\.com$/.test(target.hostname)) return ['github-click'];

  if (target.origin === location.origin) {
    const pdf = target.pathname.match(/\/cv\/[^/]+-CV-(\w+)\.pdf$/);
    if (pdf) return ['cv-download', { lang: pdf[1] }];
    const project = target.pathname.match(/\/projects\/([^/]+)\/?$/);
    if (project) return ['project-open', { project: project[1] }];
  }
  return null;
}

document.addEventListener(
  'click',
  (event) => {
    const link = (event.target as Element | null)?.closest?.('a');
    if (!link) return;
    const found = eventFor(link);
    if (found) track(...found);
  },
  { capture: true },
);
