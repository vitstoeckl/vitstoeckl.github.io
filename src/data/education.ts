import type { Education } from './types';

/** Newest first. */
export const education: Education[] = [
  {
    id: 'usil',
    kind: 'exchange',
    school: 'Universidad San Ignacio de Loyola',
    schoolUrl: 'https://www.usil.edu.pe',
    location: {
      en: 'Lima, Peru',
      cs: 'Lima, Peru',
      de: 'Lima, Peru',
      es: 'Lima, Perú',
      sk: 'Lima, Peru',
    },
    degree: {
      en: 'Study exchange',
      cs: 'Zahraniční studijní pobyt',
      de: 'Auslandssemester',
      es: 'Intercambio académico',
      sk: 'Zahraničný študijný pobyt',
    },
    field: {
      en: 'International Finance',
      cs: 'Mezinárodní finance',
      de: 'Internationale Finanzen',
      es: 'Finanzas Internacionales',
      sk: 'Medzinárodné financie',
    },
    start: '2026-08',
    end: '2026-12',
    // TODO(Vít): courses you are taking in Lima?
  },
  {
    id: 'mup',
    kind: 'degree',
    school: 'Metropolitní univerzita Praha',
    schoolUrl: 'https://www.mup.cz',
    location: {
      en: 'Prague, Czechia',
      cs: 'Praha, Česko',
      de: 'Prag, Tschechien',
      es: 'Praga, Chequia',
      sk: 'Praha, Česko',
    },
    degree: {
      en: "Bachelor's degree",
      cs: 'Bakalářské studium',
      de: 'Bachelorstudium',
      es: 'Grado',
      sk: 'Bakalárske štúdium',
    },
    // TODO(Vít): official programme name (LinkedIn shows "Finance and Financial Management Services").
    field: {
      en: 'Finance and Financial Management Services',
      cs: 'Finance a finanční služby',
      de: 'Finanzen und Finanzmanagement',
      es: 'Finanzas y Gestión Financiera',
      sk: 'Financie a finančné služby',
    },
    start: '2025-10',
    end: '2028-09',
    endExpected: true,
    // TODO(Vít): relevant courses? GPA (only if good)? High school worth listing?
  },
];
