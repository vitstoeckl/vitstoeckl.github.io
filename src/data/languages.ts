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
    level: 'C1', // Confirmed by Vít (LinkedIn says "native or bilingual").
    certified: 'B2',
  },
  {
    code: 'de',
    name: { en: 'German', cs: 'Němčina', de: 'Deutsch', es: 'Alemán', sk: 'Nemčina' },
    level: 'B2', // Confirmed by Vít.
    certified: 'B2',
  },
  {
    code: 'sk',
    name: { en: 'Slovak', cs: 'Slovenština', de: 'Slowakisch', es: 'Eslovaco', sk: 'Slovenčina' },
    level: 'C1', // Confirmed by Vít.
  },
  {
    code: 'es',
    name: { en: 'Spanish', cs: 'Španělština', de: 'Spanisch', es: 'Español', sk: 'Španielčina' },
    level: 'A2–B1', // Confirmed by Vít.
  },
];
