import type { SpokenLanguage } from './types';

/** Languages Vít speaks (not the site languages — those are in `src/i18n/utils.ts`). */
export const spokenLanguages: SpokenLanguage[] = [
  {
    code: 'cs',
    name: { en: 'Czech', cs: 'Čeština', de: 'Tschechisch', es: 'Checo', sk: 'Čeština' },
    level: 'native',
  },
  {
    code: 'en',
    name: { en: 'English', cs: 'Angličtina', de: 'Englisch', es: 'Inglés', sk: 'Angličtina' },
    level: 'C1', // TODO(Vít): LinkedIn says "native or bilingual", certified B2 — is C1 right?
    certified: 'B2',
  },
  {
    code: 'de',
    name: { en: 'German', cs: 'Němčina', de: 'Deutsch', es: 'Alemán', sk: 'Nemčina' },
    level: 'B2', // TODO(Vít): LinkedIn says "full professional", certified B2 — B2 or C1?
    certified: 'B2',
  },
  {
    code: 'sk',
    name: { en: 'Slovak', cs: 'Slovenština', de: 'Slowakisch', es: 'Eslovaco', sk: 'Slovenčina' },
    level: 'C1', // TODO(Vít): LinkedIn says "full professional" — is C1 right?
  },
  {
    code: 'es',
    name: { en: 'Spanish', cs: 'Španělština', de: 'Spanisch', es: 'Español', sk: 'Španielčina' },
    level: 'B2', // TODO(Vít): LinkedIn says "professional working" — is B2 right?
  },
];
