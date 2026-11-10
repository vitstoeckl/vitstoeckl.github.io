import type { SkillGroup } from './types';

/**
 * Only skills evidenced by LinkedIn and the experience section.
 * TODO(Vít): tools (Excel level, Python / SQL / Power BI, Bloomberg Terminal…) — add a "Tools" group once confirmed.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'finance',
    title: {
      en: 'Finance & business',
      cs: 'Finance a byznys',
      de: 'Finanzen & Business',
      es: 'Finanzas y negocios',
      sk: 'Financie a biznis',
    },
    skills: [
      {
        name: {
          en: 'Market & data analysis',
          cs: 'Analýza trhu a dat',
          de: 'Markt- & Datenanalyse',
          es: 'Análisis de mercado y datos',
          sk: 'Analýza trhu a dát',
        },
        highlight: true,
      },
      {
        name: { en: 'Pricing', cs: 'Cenotvorba', de: 'Preisgestaltung', es: 'Fijación de precios', sk: 'Tvorba cien' },
        highlight: true,
      },
      { name: 'ESG', highlight: true },
      {
        name: {
          en: 'International business',
          cs: 'Mezinárodní obchod',
          de: 'Internationales Business',
          es: 'Negocios internacionales',
          sk: 'Medzinárodný obchod',
        },
      },
      // TODO(Vít): LinkedIn lists "Law" — which area (business law, EU law…)?
      { name: { en: 'Law', cs: 'Právo', de: 'Recht', es: 'Derecho', sk: 'Právo' } },
    ],
  },
  {
    id: 'web-ai',
    title: { en: 'Web & AI', cs: 'Web a AI', de: 'Web & KI', es: 'Web e IA', sk: 'Web a AI' },
    skills: [
      {
        name: {
          en: 'AI automation with Claude',
          cs: 'AI automatizace s Claude',
          de: 'KI-Automatisierung mit Claude',
          es: 'Automatización con IA (Claude)',
          sk: 'AI automatizácia s Claude',
        },
        highlight: true,
      },
      {
        name: {
          en: 'Web app development',
          cs: 'Vývoj webových aplikací',
          de: 'Web-App-Entwicklung',
          es: 'Desarrollo de aplicaciones web',
          sk: 'Vývoj webových aplikácií',
        },
      },
      { name: 'HTML5' },
      { name: 'Bootstrap' },
    ],
  },
  {
    id: 'communication',
    title: {
      en: 'Communication & marketing',
      cs: 'Komunikace a marketing',
      de: 'Kommunikation & Marketing',
      es: 'Comunicación y marketing',
      sk: 'Komunikácia a marketing',
    },
    skills: [
      {
        name: {
          en: 'B2B communication (EN / DE)',
          cs: 'B2B komunikace (EN / DE)',
          de: 'B2B-Kommunikation (EN / DE)',
          es: 'Comunicación B2B (EN / DE)',
          sk: 'B2B komunikácia (EN / DE)',
        },
      },
      {
        name: {
          en: 'Customer communication',
          cs: 'Komunikace se zákazníky',
          de: 'Kundenkommunikation',
          es: 'Atención al cliente',
          sk: 'Komunikácia so zákazníkmi',
        },
      },
      {
        name: {
          en: 'Content marketing & newsletters',
          cs: 'Obsahový marketing a newslettery',
          de: 'Content-Marketing & Newsletter',
          es: 'Marketing de contenidos y newsletters',
          sk: 'Obsahový marketing a newslettre',
        },
      },
      { name: { en: 'Social media', cs: 'Sociální sítě', de: 'Social Media', es: 'Redes sociales', sk: 'Sociálne siete' } },
    ],
  },
];
