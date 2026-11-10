import type { Certificate } from './types';

/**
 * Exactly what LinkedIn lists. Unknown dates, issuers, verify links and files are left out
 * on purpose — the UI hides empty fields.
 * TODO(Vít): add dates, verify links (Bloomberg credential URLs) or files (put them in content-inbox/).
 */
export const certificates: Certificate[] = [
  { id: 'bloomberg-bmc', name: 'Bloomberg Market Concepts (BMC)', issuer: 'Bloomberg', category: 'finance' },
  { id: 'bloomberg-finance', name: 'Bloomberg Finance Fundamentals', issuer: 'Bloomberg', category: 'finance' },
  { id: 'bloomberg-esg', name: 'Bloomberg ESG Certificate', issuer: 'Bloomberg', category: 'esg' },
  {
    id: 'german-b2',
    name: {
      en: 'German language certificate — B2',
      cs: 'Jazykový certifikát z němčiny – B2',
      de: 'Sprachzertifikat Deutsch – B2',
      es: 'Certificado de alemán – B2',
      sk: 'Jazykový certifikát z nemčiny – B2',
    },
    category: 'language',
    // TODO(Vít): who issued it (Goethe, ÖSD, school…)?
  },
  {
    id: 'english-b2',
    name: {
      en: 'English language certificate — B2',
      cs: 'Jazykový certifikát z angličtiny – B2',
      de: 'Sprachzertifikat Englisch – B2',
      es: 'Certificado de inglés – B2',
      sk: 'Jazykový certifikát z angličtiny – B2',
    },
    category: 'language',
    // TODO(Vít): who issued it (Cambridge, school…)?
  },
];
