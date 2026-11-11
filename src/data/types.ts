/**
 * Shapes of all content in `src/data/`.
 * - `L10n` = text in all five languages (en, cs, de, es, sk) — missing one is a type error.
 * - `Translatable` = a plain string (same everywhere, e.g. "HTML5") or an `L10n`.
 * - Fields marked `?` are optional: when empty, the UI hides them (no "TBD" text).
 */
import type { L10n, Translatable, YearMonth } from '../i18n/utils';

export type { L10n, Translatable, YearMonth };

/* Profile ----------------------------------------------------------------- */

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  initials: string;
  /** ASCII name for file names: `Vit-Stockl-CV-en.pdf`. */
  fileSlug: string;
  title: L10n;
  headline: L10n;
  /** About text, one entry per paragraph. */
  summary: L10n[];
  motto?: L10n;
  status: {
    available: boolean;
    label: L10n;
    /** Longer sentence: what kind of work Vít is looking for. */
    lookingFor: L10n;
  };
  location: L10n;
  email: string;
  socials: {
    linkedin: string;
    github?: string;
  };
  /** Path inside `public/`, e.g. `images/vit.jpg`. Hero shows initials when empty. */
  photo?: string;
}

/* Experience -------------------------------------------------------------- */

export interface Experience {
  id: string;
  role: L10n;
  company: string;
  companyUrl?: string;
  location: L10n;
  start: YearMonth;
  /** Leave out while the role is ongoing ("– present"). */
  end?: YearMonth;
  employmentType?: L10n;
  /** 2–4 results-style lines. Never invent numbers. */
  bullets: L10n[];
  tags?: string[];
}

/* Education --------------------------------------------------------------- */

export interface Education {
  id: string;
  kind: 'degree' | 'exchange' | 'school';
  school: string;
  schoolUrl?: string;
  location: L10n;
  degree: L10n;
  field: L10n;
  start: YearMonth;
  end?: YearMonth;
  /** True when `end` is a planned graduation date. */
  endExpected?: boolean;
  courses?: L10n[];
  thesis?: L10n;
  gpa?: string;
}

/* Skills ------------------------------------------------------------------ */

export interface Skill {
  name: Translatable;
  /** Shown in emerald. */
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  title: L10n;
  skills: Skill[];
}

/* Languages --------------------------------------------------------------- */

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface SpokenLanguage {
  /** ISO 639-1 code. */
  code: string;
  name: L10n;
  /** A CEFR level, a range between two (e.g. `A2–B1`), or `native`. */
  level: CefrLevel | `${CefrLevel}–${CefrLevel}` | 'native';
  /** Level backed by a certificate, if any. */
  certified?: CefrLevel;
}

/* Projects ---------------------------------------------------------------- */

export type ProjectCategory = 'finance' | 'data' | 'web' | 'automation';

export interface ProjectLink {
  kind: 'website' | 'github' | 'demo' | 'store';
  url: string;
  /** Text after "Visit …", e.g. `amorby.app`. */
  label?: string;
}

export interface ProjectImage {
  /** Path inside `public/`. */
  src: string;
  alt: L10n;
}

export interface Project {
  /** URL segment: `/en/projects/{slug}/`. */
  slug: string;
  category: ProjectCategory;
  featured?: boolean;
  year?: number;
  title: Translatable;
  /** One line for the card. */
  summary: L10n;
  /** Short state, e.g. "Live on the web". */
  status?: L10n;
  problem: L10n;
  solution: L10n;
  result: L10n;
  /** One headline number — only if it is real. */
  kpi?: { value: string; label: L10n };
  tags: string[];
  links?: ProjectLink[];
  images?: ProjectImage[];
}

/* Certificates ------------------------------------------------------------ */

export interface Certificate {
  id: string;
  name: Translatable;
  category: 'finance' | 'esg' | 'language' | 'tech';
  issuer?: string;
  date?: YearMonth;
  verifyUrl?: string;
  /** Path inside `public/`, e.g. `certificates/bmc.pdf`. */
  file?: string;
}

/* Achievements ------------------------------------------------------------ */

export interface Achievement {
  id: string;
  kind: 'award' | 'competition' | 'club' | 'volunteering';
  title: L10n;
  organization?: string;
  date?: YearMonth;
  description?: L10n;
  url?: string;
}

/* Testimonials ------------------------------------------------------------ */

export interface Testimonial {
  quote: L10n;
  name: string;
  role: L10n;
  company?: string;
  photo?: string;
  linkedin?: string;
}

/* Services ---------------------------------------------------------------- */

export interface ServiceProof {
  label: Translatable;
  /** External URL or internal path (goes through `url()`). */
  url?: string;
  /** Links to a project detail page instead. */
  projectSlug?: string;
}

export interface Service {
  id: string;
  icon: 'web' | 'automation';
  title: L10n;
  description: L10n;
  includes: L10n[];
  proof?: ServiceProof[];
  cta: L10n;
}
