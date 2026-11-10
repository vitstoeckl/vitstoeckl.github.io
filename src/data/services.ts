import type { Service } from './types';

/** Freelance offers ("Work with me"). The section-wide button uses `cta.letsTalk` from `ui.ts`. */
export const services: Service[] = [
  {
    id: 'websites',
    icon: 'web',
    title: {
      en: 'Websites',
      cs: 'Webové stránky',
      de: 'Websites',
      es: 'Sitios web',
      sk: 'Webové stránky',
    },
    description: {
      en: 'Modern, fast and multilingual websites — like this one.',
      cs: 'Moderní, rychlé a vícejazyčné weby – jako je tento.',
      de: 'Moderne, schnelle und mehrsprachige Websites – so wie diese hier.',
      es: 'Sitios web modernos, rápidos y multilingües, como este.',
      sk: 'Moderné, rýchle a viacjazyčné weby – ako je tento.',
    },
    includes: [
      {
        en: 'Design that works on every screen, from phone to desktop',
        cs: 'Design, který funguje na každé obrazovce, od mobilu po počítač',
        de: 'Design, das auf jedem Bildschirm funktioniert – vom Handy bis zum Desktop',
        es: 'Un diseño que funciona en cualquier pantalla, del móvil al ordenador',
        sk: 'Dizajn, ktorý funguje na každej obrazovke, od mobilu po počítač',
      },
      {
        en: 'As many languages as you need',
        cs: 'Tolik jazyků, kolik potřebujete',
        de: 'So viele Sprachen, wie Sie brauchen',
        es: 'Tantos idiomas como necesites',
        sk: 'Toľko jazykov, koľko potrebujete',
      },
      {
        en: 'Fast loading and solid SEO basics',
        cs: 'Rychlé načítání a dobré základy SEO',
        de: 'Schnelle Ladezeiten und solide SEO-Grundlagen',
        es: 'Carga rápida y una buena base de SEO',
        sk: 'Rýchle načítanie a dobré základy SEO',
      },
      {
        en: 'Publishing and hosting set up for you',
        cs: 'Zveřejnění a hosting nastavím za vás',
        de: 'Veröffentlichung und Hosting richte ich für Sie ein',
        es: 'Me encargo de la publicación y el alojamiento',
        sk: 'Zverejnenie a hosting nastavím za vás',
      },
    ],
    proof: [
      {
        label: { en: 'This website', cs: 'Tento web', de: 'Diese Website', es: 'Este sitio', sk: 'Tento web' },
        url: '/',
      },
      { label: 'amorby.app', url: 'https://amorby.app', projectSlug: 'amorby' },
    ],
    cta: {
      en: "Let's build your website",
      cs: 'Pojďme postavit váš web',
      de: 'Lassen Sie uns Ihre Website bauen',
      es: 'Construyamos tu web',
      sk: 'Poďme postaviť váš web',
    },
  },
  {
    id: 'ai-automation',
    icon: 'automation',
    title: {
      en: 'AI automation with Claude',
      cs: 'AI automatizace s Claude',
      de: 'KI-Automatisierung mit Claude',
      es: 'Automatización con IA (Claude)',
      sk: 'AI automatizácia s Claude',
    },
    description: {
      en: 'Small apps and workflows built with Claude that take repetitive work off your plate.',
      cs: 'Malé aplikace a workflow postavené s Claude, které za vás převezmou opakovanou práci.',
      de: 'Kleine Apps und Workflows mit Claude, die Ihnen wiederkehrende Arbeit abnehmen.',
      es: 'Pequeñas aplicaciones y flujos de trabajo con Claude que te quitan de encima el trabajo repetitivo.',
      sk: 'Malé aplikácie a workflow postavené s Claude, ktoré za vás prevezmú opakovanú prácu.',
    },
    includes: [
      {
        en: 'Finding the tasks that eat up your time',
        cs: 'Najdeme úkoly, které vám zabírají nejvíc času',
        de: 'Wir finden die Aufgaben, die Ihnen am meisten Zeit rauben',
        es: 'Detectamos las tareas que más tiempo te quitan',
        sk: 'Nájdeme úlohy, ktoré vám berú najviac času',
      },
      {
        en: 'A custom tool or workflow built with Claude',
        cs: 'Nástroj nebo workflow na míru, postavený s Claude',
        de: 'Ein maßgeschneidertes Tool oder ein Workflow mit Claude',
        es: 'Una herramienta o un flujo de trabajo a medida con Claude',
        sk: 'Nástroj alebo workflow na mieru, postavený s Claude',
      },
      {
        en: 'A simple hand-over so you can run it on your own',
        cs: 'Jednoduché předání, abyste to zvládli používat sami',
        de: 'Eine einfache Übergabe, damit Sie es selbst nutzen können',
        es: 'Una entrega sencilla para que puedas usarlo por tu cuenta',
        sk: 'Jednoduché odovzdanie, aby ste to zvládli používať sami',
      },
    ],
    proof: [
      {
        label: {
          en: 'Automations at Juwelakvarium',
          cs: 'Automatizace v Juwelakvarium',
          de: 'Automatisierungen bei Juwelakvarium',
          es: 'Automatizaciones en Juwelakvarium',
          sk: 'Automatizácie v Juwelakvarium',
        },
        projectSlug: 'ai-automation-juwelakvarium',
      },
    ],
    cta: {
      en: "Let's automate your work",
      cs: 'Pojďme automatizovat vaši práci',
      de: 'Lassen Sie uns Ihre Arbeit automatisieren',
      es: 'Automaticemos tu trabajo',
      sk: 'Poďme automatizovať vašu prácu',
    },
  },
];
