import type { Lang } from './utils';

/**
 * Every UI label on the site, in all five languages.
 * English defines the keys; the other languages must provide every key (type-checked).
 * `{name}`-style placeholders are filled by `t(key, lang, { name: … })`.
 *
 * Tone: CZ/SK/DE address the visitor formally (vy / Sie); ES uses tú.
 */
const en = {
  // Navigation
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.education': 'Education',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.services': 'Services',
  'nav.certificates': 'Certificates',
  'nav.contact': 'Contact',
  'nav.menu': 'Menu',
  'nav.close': 'Close menu',
  'nav.skip': 'Skip to content',

  // Section titles
  'section.about': 'About me',
  'section.keyNumbers': 'At a glance',
  'section.experience': 'Experience',
  'section.education': 'Education',
  'section.skills': 'Skills',
  'section.languages': 'Languages',
  'section.projects': 'Projects',
  'section.services': 'Work with me',
  'section.certificates': 'Certificates',
  'section.achievements': 'Achievements & activities',
  'section.testimonials': 'What people say',
  'section.contact': 'Contact',

  // Hero
  'hero.greeting': "Hi, I'm",

  // Buttons & links
  'cta.downloadCv': 'Download CV',
  'cta.contact': 'Get in touch',
  'cta.viewProjects': 'See my projects',
  'cta.letsTalk': "Have a project? Let's talk",
  'cta.viewProject': 'View project',
  'cta.visit': 'Visit {site}',
  'cta.verify': 'Verify',
  'cta.view': 'View',
  'cta.backHome': 'Back to home',
  'cta.nextProject': 'Next project',
  'cta.backToTop': 'Back to top',

  // Key numbers
  'stats.projects': 'Projects',
  'stats.certificates': 'Certificates',
  'stats.languages': 'Languages',

  // Project filters & categories
  'filter.all': 'All',
  'category.finance': 'Finance',
  'category.data': 'Data',
  'category.web': 'Web',
  'category.automation': 'AI automation',

  // Project detail
  'project.problem': 'Problem',
  'project.solution': 'Solution',
  'project.result': 'Result',
  'project.gallery': 'Screenshots',
  'project.featured': 'Featured',
  'project.allProjects': 'All projects',
  'cv.profile': 'Profile',
  'cv.selectedProjects': 'Selected projects',
  'cv.print': 'Print or save as PDF',
  'cv.metaTitle': 'CV — {name}',

  // Dates
  'date.present': 'present',
  'date.expected': 'expected',

  // Languages
  'level.native': 'Native',
  'level.certified': 'Certified {level}',

  // Education
  'education.exchange': 'Study exchange',
  'education.courses': 'Relevant courses',
  'education.thesis': 'Thesis',
  'education.gpa': 'GPA',

  // Services
  'services.includes': "What's included",
  'services.proof': 'See it in action',

  // Certificates
  'certificates.issuedBy': 'Issued by {issuer}',

  // Achievements
  'achievement.award': 'Award',
  'achievement.competition': 'Competition',
  'achievement.club': 'Club',
  'achievement.volunteering': 'Volunteering',

  // Contact & form
  'contact.lead': "Have a part-time role or a project in mind? I'd love to hear from you.",
  'contact.email': 'Email',
  'form.name': 'Your name',
  'form.email': 'Your email',
  'form.message': 'Message',
  'form.send': 'Send message',
  'form.sending': 'Sending…',
  'form.success': "Thanks! Your message is on its way. I'll reply soon.",
  'form.error': 'Something went wrong. Please email me directly.',
  'form.fallback': 'Your email app will open with the message ready to send.',

  // Theme & language
  'theme.toggle': 'Switch light/dark mode',
  'theme.light': 'Light',
  'theme.dark': 'Dark',
  'lang.label': 'Language',

  // Footer
  'footer.copyright': '© {year} {name}',
  'footer.lastUpdated': 'Last updated {date}',
  'footer.builtBy': 'Designed & built by {name}',

  // Accessibility
  'a11y.newTab': '(opens in a new tab)',

  // SEO
  'meta.title': '{name} — Finance & Technology',
  'meta.description':
    'CV and portfolio of {name}: finance student, Product Manager and builder of web apps and AI automations.',
} as const;

export type UIKey = keyof typeof en;
type Dictionary = Record<UIKey, string>;

const cs: Dictionary = {
  'nav.about': 'O mně',
  'nav.experience': 'Zkušenosti',
  'nav.education': 'Vzdělání',
  'nav.skills': 'Dovednosti',
  'nav.projects': 'Projekty',
  'nav.services': 'Služby',
  'nav.certificates': 'Certifikáty',
  'nav.contact': 'Kontakt',
  'nav.menu': 'Menu',
  'nav.close': 'Zavřít menu',
  'nav.skip': 'Přeskočit na obsah',

  'section.about': 'O mně',
  'section.keyNumbers': 'V kostce',
  'section.experience': 'Pracovní zkušenosti',
  'section.education': 'Vzdělání',
  'section.skills': 'Dovednosti',
  'section.languages': 'Jazyky',
  'section.projects': 'Projekty',
  'section.services': 'Spolupráce',
  'section.certificates': 'Certifikáty',
  'section.achievements': 'Úspěchy a aktivity',
  'section.testimonials': 'Řekli o mně',
  'section.contact': 'Kontakt',

  'hero.greeting': 'Ahoj, jsem',

  'cta.downloadCv': 'Stáhnout CV',
  'cta.contact': 'Napište mi',
  'cta.viewProjects': 'Moje projekty',
  'cta.letsTalk': 'Máte projekt? Pojďme to probrat',
  'cta.viewProject': 'Zobrazit projekt',
  'cta.visit': 'Navštívit {site}',
  'cta.verify': 'Ověřit',
  'cta.view': 'Zobrazit',
  'cta.backHome': 'Zpět na úvod',
  'cta.nextProject': 'Další projekt',
  'cta.backToTop': 'Nahoru',

  'stats.projects': 'Projekty',
  'stats.certificates': 'Certifikáty',
  'stats.languages': 'Jazyky',

  'filter.all': 'Vše',
  'category.finance': 'Finance',
  'category.data': 'Data',
  'category.web': 'Web',
  'category.automation': 'AI automatizace',

  'project.problem': 'Problém',
  'project.solution': 'Řešení',
  'project.result': 'Výsledek',
  'project.gallery': 'Ukázky',
  'project.featured': 'Hlavní projekt',
  'project.allProjects': 'Všechny projekty',
  'cv.profile': 'Profil',
  'cv.selectedProjects': 'Vybrané projekty',
  'cv.print': 'Vytisknout nebo uložit jako PDF',
  'cv.metaTitle': 'Životopis — {name}',

  'date.present': 'dosud',
  'date.expected': 'předpoklad',

  'level.native': 'Rodilý mluvčí',
  'level.certified': 'Certifikát {level}',

  'education.exchange': 'Studijní pobyt v zahraničí',
  'education.courses': 'Vybrané předměty',
  'education.thesis': 'Závěrečná práce',
  'education.gpa': 'Studijní průměr',

  'services.includes': 'Co dostanete',
  'services.proof': 'Ukázky práce',

  'certificates.issuedBy': 'Vydal: {issuer}',

  'achievement.award': 'Ocenění',
  'achievement.competition': 'Soutěž',
  'achievement.club': 'Spolek',
  'achievement.volunteering': 'Dobrovolnictví',

  'contact.lead': 'Máte pro mě práci na částečný úvazek nebo projekt? Budu rád, když se ozvete.',
  'contact.email': 'E-mail',
  'form.name': 'Vaše jméno',
  'form.email': 'Váš e-mail',
  'form.message': 'Zpráva',
  'form.send': 'Odeslat zprávu',
  'form.sending': 'Odesílám…',
  'form.success': 'Díky! Zpráva je odeslaná, brzy se ozvu.',
  'form.error': 'Něco se pokazilo. Napište mi prosím přímo e-mailem.',
  'form.fallback': 'Otevře se vám e-mailová aplikace s připravenou zprávou.',

  'theme.toggle': 'Přepnout světlý/tmavý režim',
  'theme.light': 'Světlý',
  'theme.dark': 'Tmavý',
  'lang.label': 'Jazyk',

  'footer.copyright': '© {year} {name}',
  'footer.lastUpdated': 'Naposledy aktualizováno {date}',
  'footer.builtBy': 'Navrhl a vytvořil {name}',

  'a11y.newTab': '(otevře se v nové kartě)',

  'meta.title': '{name} — finance a technologie',
  'meta.description':
    'Životopis a portfolio – {name}: student financí, produktový manažer a tvůrce webových aplikací a AI automatizací.',
};

const de: Dictionary = {
  'nav.about': 'Über mich',
  'nav.experience': 'Erfahrung',
  'nav.education': 'Ausbildung',
  'nav.skills': 'Kenntnisse',
  'nav.projects': 'Projekte',
  'nav.services': 'Leistungen',
  'nav.certificates': 'Zertifikate',
  'nav.contact': 'Kontakt',
  'nav.menu': 'Menü',
  'nav.close': 'Menü schließen',
  'nav.skip': 'Zum Inhalt springen',

  'section.about': 'Über mich',
  'section.keyNumbers': 'Auf einen Blick',
  'section.experience': 'Berufserfahrung',
  'section.education': 'Ausbildung',
  'section.skills': 'Kenntnisse',
  'section.languages': 'Sprachen',
  'section.projects': 'Projekte',
  'section.services': 'Zusammenarbeit',
  'section.certificates': 'Zertifikate',
  'section.achievements': 'Erfolge & Engagement',
  'section.testimonials': 'Was andere sagen',
  'section.contact': 'Kontakt',

  'hero.greeting': 'Hallo, ich bin',

  'cta.downloadCv': 'Lebenslauf herunterladen',
  'cta.contact': 'Kontakt aufnehmen',
  'cta.viewProjects': 'Meine Projekte',
  'cta.letsTalk': 'Sie haben ein Projekt? Sprechen wir darüber',
  'cta.viewProject': 'Projekt ansehen',
  'cta.visit': '{site} besuchen',
  'cta.verify': 'Prüfen',
  'cta.view': 'Ansehen',
  'cta.backHome': 'Zurück zur Startseite',
  'cta.nextProject': 'Nächstes Projekt',
  'cta.backToTop': 'Nach oben',

  'stats.projects': 'Projekte',
  'stats.certificates': 'Zertifikate',
  'stats.languages': 'Sprachen',

  'filter.all': 'Alle',
  'category.finance': 'Finanzen',
  'category.data': 'Daten',
  'category.web': 'Web',
  'category.automation': 'KI-Automatisierung',

  'project.problem': 'Problem',
  'project.solution': 'Lösung',
  'project.result': 'Ergebnis',
  'project.gallery': 'Screenshots',
  'project.featured': 'Highlight',
  'project.allProjects': 'Alle Projekte',
  'cv.profile': 'Profil',
  'cv.selectedProjects': 'Ausgewählte Projekte',
  'cv.print': 'Drucken oder als PDF speichern',
  'cv.metaTitle': 'Lebenslauf — {name}',

  'date.present': 'heute',
  'date.expected': 'voraussichtlich',

  'level.native': 'Muttersprache',
  'level.certified': 'Zertifikat {level}',

  'education.exchange': 'Auslandssemester',
  'education.courses': 'Relevante Kurse',
  'education.thesis': 'Abschlussarbeit',
  'education.gpa': 'Notendurchschnitt',

  'services.includes': 'Das ist inklusive',
  'services.proof': 'Beispiele',

  'certificates.issuedBy': 'Ausgestellt von {issuer}',

  'achievement.award': 'Auszeichnung',
  'achievement.competition': 'Wettbewerb',
  'achievement.club': 'Verein',
  'achievement.volunteering': 'Ehrenamt',

  'contact.lead':
    'Sie haben eine Teilzeitstelle oder ein Projekt im Kopf? Ich freue mich auf Ihre Nachricht.',
  'contact.email': 'E-Mail',
  'form.name': 'Ihr Name',
  'form.email': 'Ihre E-Mail-Adresse',
  'form.message': 'Nachricht',
  'form.send': 'Nachricht senden',
  'form.sending': 'Wird gesendet…',
  'form.success': 'Danke! Ihre Nachricht ist unterwegs – ich melde mich bald.',
  'form.error': 'Etwas ist schiefgelaufen. Bitte schreiben Sie mir direkt per E-Mail.',
  'form.fallback': 'Ihr E-Mail-Programm öffnet sich mit der fertigen Nachricht.',

  'theme.toggle': 'Hell-/Dunkelmodus wechseln',
  'theme.light': 'Hell',
  'theme.dark': 'Dunkel',
  'lang.label': 'Sprache',

  'footer.copyright': '© {year} {name}',
  'footer.lastUpdated': 'Zuletzt aktualisiert: {date}',
  'footer.builtBy': 'Design & Umsetzung: {name}',

  'a11y.newTab': '(öffnet in neuem Tab)',

  'meta.title': '{name} – Finanzen & Technologie',
  'meta.description':
    'Lebenslauf und Portfolio von {name}: Finanzstudent, Product Manager und Entwickler von Web-Apps und KI-Automatisierungen.',
};

const es: Dictionary = {
  'nav.about': 'Sobre mí',
  'nav.experience': 'Experiencia',
  'nav.education': 'Formación',
  'nav.skills': 'Habilidades',
  'nav.projects': 'Proyectos',
  'nav.services': 'Servicios',
  'nav.certificates': 'Certificados',
  'nav.contact': 'Contacto',
  'nav.menu': 'Menú',
  'nav.close': 'Cerrar menú',
  'nav.skip': 'Saltar al contenido',

  'section.about': 'Sobre mí',
  'section.keyNumbers': 'De un vistazo',
  'section.experience': 'Experiencia',
  'section.education': 'Formación',
  'section.skills': 'Habilidades',
  'section.languages': 'Idiomas',
  'section.projects': 'Proyectos',
  'section.services': 'Trabajemos juntos',
  'section.certificates': 'Certificados',
  'section.achievements': 'Logros y actividades',
  'section.testimonials': 'Lo que dicen de mí',
  'section.contact': 'Contacto',

  'hero.greeting': 'Hola, soy',

  'cta.downloadCv': 'Descargar CV',
  'cta.contact': 'Escríbeme',
  'cta.viewProjects': 'Ver mis proyectos',
  'cta.letsTalk': '¿Tienes un proyecto? Hablemos',
  'cta.viewProject': 'Ver proyecto',
  'cta.visit': 'Visitar {site}',
  'cta.verify': 'Verificar',
  'cta.view': 'Ver',
  'cta.backHome': 'Volver al inicio',
  'cta.nextProject': 'Siguiente proyecto',
  'cta.backToTop': 'Volver arriba',

  'stats.projects': 'Proyectos',
  'stats.certificates': 'Certificados',
  'stats.languages': 'Idiomas',

  'filter.all': 'Todos',
  'category.finance': 'Finanzas',
  'category.data': 'Datos',
  'category.web': 'Web',
  'category.automation': 'Automatización con IA',

  'project.problem': 'Problema',
  'project.solution': 'Solución',
  'project.result': 'Resultado',
  'project.gallery': 'Capturas',
  'project.featured': 'Destacado',
  'project.allProjects': 'Todos los proyectos',
  'cv.profile': 'Perfil',
  'cv.selectedProjects': 'Proyectos destacados',
  'cv.print': 'Imprimir o guardar como PDF',
  'cv.metaTitle': 'CV — {name}',

  'date.present': 'actualidad',
  'date.expected': 'previsto',

  'level.native': 'Lengua materna',
  'level.certified': 'Certificado {level}',

  'education.exchange': 'Intercambio académico',
  'education.courses': 'Asignaturas relevantes',
  'education.thesis': 'Trabajo de fin de grado',
  'education.gpa': 'Nota media',

  'services.includes': 'Qué incluye',
  'services.proof': 'Ejemplos',

  'certificates.issuedBy': 'Emitido por {issuer}',

  'achievement.award': 'Premio',
  'achievement.competition': 'Competición',
  'achievement.club': 'Club',
  'achievement.volunteering': 'Voluntariado',

  'contact.lead': '¿Tienes un puesto a tiempo parcial o un proyecto en mente? Me encantará saber de ti.',
  'contact.email': 'Correo',
  'form.name': 'Tu nombre',
  'form.email': 'Tu correo electrónico',
  'form.message': 'Mensaje',
  'form.send': 'Enviar mensaje',
  'form.sending': 'Enviando…',
  'form.success': '¡Gracias! Tu mensaje está en camino, te responderé pronto.',
  'form.error': 'Algo salió mal. Escríbeme directamente por correo.',
  'form.fallback': 'Se abrirá tu aplicación de correo con el mensaje listo para enviar.',

  'theme.toggle': 'Cambiar modo claro/oscuro',
  'theme.light': 'Claro',
  'theme.dark': 'Oscuro',
  'lang.label': 'Idioma',

  'footer.copyright': '© {year} {name}',
  'footer.lastUpdated': 'Última actualización: {date}',
  'footer.builtBy': 'Diseñado y desarrollado por {name}',

  'a11y.newTab': '(se abre en una pestaña nueva)',

  'meta.title': '{name} — Finanzas y tecnología',
  'meta.description':
    'CV y portafolio de {name}: estudiante de Finanzas, Product Manager y creador de aplicaciones web y automatizaciones con IA.',
};

const sk: Dictionary = {
  'nav.about': 'O mne',
  'nav.experience': 'Skúsenosti',
  'nav.education': 'Vzdelanie',
  'nav.skills': 'Zručnosti',
  'nav.projects': 'Projekty',
  'nav.services': 'Služby',
  'nav.certificates': 'Certifikáty',
  'nav.contact': 'Kontakt',
  'nav.menu': 'Menu',
  'nav.close': 'Zavrieť menu',
  'nav.skip': 'Preskočiť na obsah',

  'section.about': 'O mne',
  'section.keyNumbers': 'V skratke',
  'section.experience': 'Pracovné skúsenosti',
  'section.education': 'Vzdelanie',
  'section.skills': 'Zručnosti',
  'section.languages': 'Jazyky',
  'section.projects': 'Projekty',
  'section.services': 'Spolupráca',
  'section.certificates': 'Certifikáty',
  'section.achievements': 'Úspechy a aktivity',
  'section.testimonials': 'Povedali o mne',
  'section.contact': 'Kontakt',

  'hero.greeting': 'Ahoj, som',

  'cta.downloadCv': 'Stiahnuť CV',
  'cta.contact': 'Napíšte mi',
  'cta.viewProjects': 'Moje projekty',
  'cta.letsTalk': 'Máte projekt? Poďme sa porozprávať',
  'cta.viewProject': 'Zobraziť projekt',
  'cta.visit': 'Navštíviť {site}',
  'cta.verify': 'Overiť',
  'cta.view': 'Zobraziť',
  'cta.backHome': 'Späť na úvod',
  'cta.nextProject': 'Ďalší projekt',
  'cta.backToTop': 'Hore',

  'stats.projects': 'Projekty',
  'stats.certificates': 'Certifikáty',
  'stats.languages': 'Jazyky',

  'filter.all': 'Všetko',
  'category.finance': 'Financie',
  'category.data': 'Dáta',
  'category.web': 'Web',
  'category.automation': 'AI automatizácia',

  'project.problem': 'Problém',
  'project.solution': 'Riešenie',
  'project.result': 'Výsledok',
  'project.gallery': 'Ukážky',
  'project.featured': 'Hlavný projekt',
  'project.allProjects': 'Všetky projekty',
  'cv.profile': 'Profil',
  'cv.selectedProjects': 'Vybrané projekty',
  'cv.print': 'Vytlačiť alebo uložiť ako PDF',
  'cv.metaTitle': 'Životopis — {name}',

  'date.present': 'doteraz',
  'date.expected': 'predpoklad',

  'level.native': 'Materinský jazyk',
  'level.certified': 'Certifikát {level}',

  'education.exchange': 'Študijný pobyt v zahraničí',
  'education.courses': 'Vybrané predmety',
  'education.thesis': 'Záverečná práca',
  'education.gpa': 'Študijný priemer',

  'services.includes': 'Čo dostanete',
  'services.proof': 'Ukážky práce',

  'certificates.issuedBy': 'Vydal: {issuer}',

  'achievement.award': 'Ocenenie',
  'achievement.competition': 'Súťaž',
  'achievement.club': 'Spolok',
  'achievement.volunteering': 'Dobrovoľníctvo',

  'contact.lead': 'Máte pre mňa prácu na čiastočný úväzok alebo projekt? Budem rád, keď sa ozvete.',
  'contact.email': 'E-mail',
  'form.name': 'Vaše meno',
  'form.email': 'Váš e-mail',
  'form.message': 'Správa',
  'form.send': 'Odoslať správu',
  'form.sending': 'Odosielam…',
  'form.success': 'Vďaka! Správa je odoslaná, čoskoro sa ozvem.',
  'form.error': 'Niečo sa pokazilo. Napíšte mi prosím priamo e-mailom.',
  'form.fallback': 'Otvorí sa vám e-mailová aplikácia s pripravenou správou.',

  'theme.toggle': 'Prepnúť svetlý/tmavý režim',
  'theme.light': 'Svetlý',
  'theme.dark': 'Tmavý',
  'lang.label': 'Jazyk',

  'footer.copyright': '© {year} {name}',
  'footer.lastUpdated': 'Naposledy aktualizované {date}',
  'footer.builtBy': 'Navrhol a vytvoril {name}',

  'a11y.newTab': '(otvorí sa na novej karte)',

  'meta.title': '{name} — financie a technológie',
  'meta.description':
    'Životopis a portfólio – {name}: študent financií, produktový manažér a tvorca webových aplikácií a AI automatizácií.',
};

export const ui: Record<Lang, Dictionary> = { en, cs, de, es, sk };
