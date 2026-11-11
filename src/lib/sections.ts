import type { UIKey } from '../i18n/ui';

/**
 * Sections shown in the nav pill menu, in page order.
 * Each section element on the page uses the same `id` (e.g. `<section id="about">`),
 * so the nav can scroll to it and highlight it while it is on screen.
 */
export const navSections = [
  { id: 'about', label: 'nav.about' },
  { id: 'experience', label: 'nav.experience' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'services', label: 'nav.services' },
  { id: 'certificates', label: 'nav.certificates' },
  { id: 'contact', label: 'nav.contact' },
] as const satisfies readonly { id: string; label: UIKey }[];

export type SectionId = (typeof navSections)[number]['id'];
