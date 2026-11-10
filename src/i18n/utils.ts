import { ui, type UIKey } from './ui';

/**
 * Site languages. The key is the URL segment (`/en/`, `/cs/`, …).
 * `short` is what the language switcher shows (CZ, not CS).
 * `monthStyle` keeps month names readable: Slovak "short" would give "7/2024".
 */
export const languages = {
  en: { label: 'English', short: 'EN', locale: 'en-GB', ogLocale: 'en_GB', monthStyle: 'short' },
  cs: { label: 'Čeština', short: 'CZ', locale: 'cs-CZ', ogLocale: 'cs_CZ', monthStyle: 'long' },
  de: { label: 'Deutsch', short: 'DE', locale: 'de-DE', ogLocale: 'de_DE', monthStyle: 'long' },
  es: { label: 'Español', short: 'ES', locale: 'es-ES', ogLocale: 'es_ES', monthStyle: 'short' },
  sk: { label: 'Slovenčina', short: 'SK', locale: 'sk-SK', ogLocale: 'sk_SK', monthStyle: 'long' },
} as const satisfies Record<
  string,
  { label: string; short: string; locale: string; ogLocale: string; monthStyle: 'short' | 'long' }
>;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
/** All language codes, default first. */
export const langs = Object.keys(languages) as Lang[];

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && value in languages;
}

/* ---------------------------------------------------------------------------
   Translatable values
   --------------------------------------------------------------------------- */

/** A text in all five languages. Use this in data files so a missing translation is a type error. */
export type L10n = Record<Lang, string>;

/** What `pick()` accepts: a plain string (same in every language) or a partial translation with EN. */
export type Translatable = string | ({ en: string } & Partial<Record<Lang, string>>);

/** Pick the text for `lang`, falling back to English when it is missing or empty. */
export function pick(value: Translatable, lang: Lang): string {
  if (typeof value === 'string') return value;
  const text = value[lang];
  return text && text.trim() !== '' ? text : value.en;
}

/* ---------------------------------------------------------------------------
   UI labels
   --------------------------------------------------------------------------- */

type Params = Record<string, string | number>;

function interpolate(text: string, params?: Params): string {
  if (!params) return text;
  return text.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in params ? String(params[name]) : match,
  );
}

/** UI label for `key` in `lang` (EN fallback). `{name}` placeholders are filled from `params`. */
export function t(key: UIKey, lang: Lang, params?: Params): string {
  const text = ui[lang][key] || ui[defaultLang][key];
  return interpolate(text, params);
}

/** `const tr = useTranslations(lang); tr('nav.about')` */
export function useTranslations(lang: Lang) {
  return (key: UIKey, params?: Params) => t(key, lang, params);
}

/* ---------------------------------------------------------------------------
   Dates
   --------------------------------------------------------------------------- */

type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';
/** Month-precision date used in data files, e.g. `'2024-07'`. */
export type YearMonth = `${number}-${Month}`;

/** `'2024-07'` → "Jul 2024" (EN), "červenec 2024" (CS), "Juli 2024" (DE), "jul 2024" (ES), "júl 2024" (SK). */
export function formatYearMonth(value: YearMonth, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  return new Intl.DateTimeFormat(languages[lang].locale, {
    year: 'numeric',
    month: languages[lang].monthStyle,
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}

/** "Jul 2024 – present". Leave `end` out for an ongoing role. */
export function formatDateRange(start: YearMonth, end: YearMonth | undefined, lang: Lang): string {
  const to = end ? formatYearMonth(end, lang) : t('date.present', lang);
  return `${formatYearMonth(start, lang)} – ${to}`;
}

/** Full date, e.g. for "Last updated": "10 November 2026", "10. listopadu 2026", … */
export function formatDate(date: Date | string, lang: Lang): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(languages[lang].locale, { dateStyle: 'long', timeZone: 'UTC' }).format(d);
}
