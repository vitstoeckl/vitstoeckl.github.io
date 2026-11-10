/**
 * Build an internal URL that respects Astro's `base` (BASE_PATH env var).
 * Use this for every internal link and every asset in `public/`.
 *
 *   url('/')                 -> '/'        or '/cv/'
 *   url('/en/')              -> '/en/'     or '/cv/en/'
 *   url('favicon.svg')       -> '/favicon.svg' or '/cv/favicon.svg'
 *   url('https://x.com')     -> unchanged (external)
 */
export function url(path = '/'): string {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path)) return path;

  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');
  return `${base}/${clean}`;
}
