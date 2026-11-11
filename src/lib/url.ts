import { isLang, type Lang } from '../i18n/utils';

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

/**
 * The same page in another language: swaps the language segment of `pathname`
 * (which includes `base`) and returns a `url()`-style path.
 *
 *   localizedPath('/cv/en/projects/amorby/', 'de') -> '/cv/de/projects/amorby/'
 *   localizedPath('/cv/', 'cs')                    -> '/cv/cs/'
 */
export function localizedPath(pathname: string, lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const rest = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const segments = rest.split('/').filter(Boolean);
  if (isLang(segments[0])) segments.shift();
  const tail = segments.length ? `${segments.join('/')}/` : '';
  return url(`/${lang}/${tail}`);
}
