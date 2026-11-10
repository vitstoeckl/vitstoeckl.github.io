import type { Experience } from './types';

/** Newest first. No metrics on purpose: there are none to report, and none are invented. */
export const experience: Experience[] = [
  {
    id: 'juwelakvarium',
    role: {
      en: 'Product Manager',
      cs: 'Produktový manažer',
      de: 'Product Manager',
      es: 'Product Manager',
      sk: 'Produktový manažér',
    },
    company: 'Juwelakvarium CZ/SK',
    // TODO(Vít): company website URL, and is the role part-time or full-time?
    location: {
      en: 'Prague, Czechia',
      cs: 'Praha, Česko',
      de: 'Prag, Tschechien',
      es: 'Praga, Chequia',
      sk: 'Praha, Česko',
    },
    start: '2024-07',
    bullets: [
      {
        en: 'Handle communication with international partners in English and German, and look after day-to-day customer communication.',
        cs: 'Komunikuji se zahraničními partnery v angličtině a němčině a starám se o každodenní komunikaci se zákazníky.',
        de: 'Kommunikation mit internationalen Partnern auf Englisch und Deutsch sowie tägliche Betreuung der Kundenanfragen',
        es: 'Gestiono la comunicación con socios internacionales en inglés y alemán, además de la atención diaria al cliente.',
        sk: 'Komunikujem so zahraničnými partnermi v angličtine a nemčine a starám sa o každodennú komunikáciu so zákazníkmi.',
      },
      {
        en: 'Set product prices backed by market and data analysis.',
        cs: 'Stanovuji ceny produktů na základě analýzy trhu a dat.',
        de: 'Preisgestaltung der Produkte auf Basis von Markt- und Datenanalysen',
        es: 'Fijo los precios de los productos a partir de análisis de mercado y de datos.',
        sk: 'Stanovujem ceny produktov na základe analýzy trhu a dát.',
      },
      {
        en: 'Create e-commerce content: modern product descriptions in HTML5 & Bootstrap, social-media posts and newsletters.',
        cs: 'Tvořím obsah pro e-shop: moderní popisy produktů v HTML5 a Bootstrapu, příspěvky na sociální sítě a newslettery.',
        de: 'Erstellung von E-Commerce-Inhalten: moderne Produktbeschreibungen in HTML5 & Bootstrap, Social-Media-Beiträge und Newsletter',
        es: 'Creo contenido para el e-commerce: descripciones de producto modernas en HTML5 y Bootstrap, publicaciones en redes sociales y newsletters.',
        sk: 'Tvorím obsah pre e-shop: moderné popisy produktov v HTML5 a Bootstrape, príspevky na sociálne siete a newslettre.',
      },
      {
        en: 'Build apps with Claude (AI) that automate repetitive business processes.',
        cs: 'Pomocí Claude (AI) vyvíjím aplikace, které automatizují opakující se firemní procesy.',
        de: 'Entwicklung von Apps mit Claude (KI), die wiederkehrende Geschäftsprozesse automatisieren',
        es: 'Desarrollo aplicaciones con Claude (IA) que automatizan procesos de negocio repetitivos.',
        sk: 'Pomocou Claude (AI) vyvíjam aplikácie, ktoré automatizujú opakujúce sa firemné procesy.',
      },
    ],
    tags: ['E-commerce', 'Pricing', 'HTML5', 'Bootstrap', 'Claude'],
  },
];
