import type { Lang } from '../i18n/utils';
import type { Profile } from './types';

export const profile: Profile = {
  // The name is defined only here. LinkedIn spells it "Stoeckl"; the site uses "Stöckl".
  name: 'Vít Stöckl',
  firstName: 'Vít',
  lastName: 'Stöckl',
  initials: 'VS',
  fileSlug: 'Vit-Stockl',

  title: {
    en: 'Finance student & Product Manager',
    cs: 'Student financí a produktový manažer',
    de: 'Finanzstudent & Product Manager',
    es: 'Estudiante de Finanzas y Product Manager',
    sk: 'Študent financií a produktový manažér',
  },

  // TODO(Vít): happy with this headline, or would you like a different one?
  headline: {
    en: 'Where finance meets technology.',
    cs: 'Kde se finance potkávají s technologiemi.',
    de: 'Wo Finanzen auf Technologie treffen.',
    es: 'Donde las finanzas se encuentran con la tecnología.',
    sk: 'Kde sa financie stretávajú s technológiami.',
  },

  summary: [
    {
      en: "I've always needed to understand why things work the way they do — not just the surface answer, but the logic underneath. That curiosity led me to economics. I'm fascinated by how macroeconomic events such as interest-rate decisions, currency shifts and trade policy ripple outward and affect entire industries. For me it's not a subject, it's a lens.",
      cs: 'Vždycky jsem potřeboval pochopit, proč věci fungují tak, jak fungují – ne jen povrchní odpověď, ale logiku, která za tím stojí. Tahle zvědavost mě přivedla k ekonomii. Fascinuje mě, jak se makroekonomické události, jako je rozhodování o úrokových sazbách, pohyby měn nebo obchodní politika, šíří dál a ovlivňují celá odvětví. Pro mě to není jen předmět, ale způsob, jak se dívat na svět.',
      de: 'Ich wollte schon immer verstehen, warum Dinge so funktionieren, wie sie funktionieren – nicht nur die Antwort an der Oberfläche, sondern die Logik dahinter. Diese Neugier hat mich zur Wirtschaft gebracht. Mich fasziniert, wie makroökonomische Ereignisse wie Zinsentscheidungen, Währungsschwankungen und Handelspolitik Kreise ziehen und ganze Branchen verändern. Für mich ist das kein Fach, sondern eine Art, die Welt zu sehen.',
      es: 'Siempre he necesitado entender por qué las cosas funcionan como funcionan: no solo la respuesta superficial, sino la lógica que hay detrás. Esa curiosidad me llevó a la economía. Me fascina cómo acontecimientos macroeconómicos como las decisiones sobre las tasas de interés, los movimientos de las divisas o la política comercial se propagan y afectan a sectores enteros. Para mí no es una asignatura, es una forma de mirar el mundo.',
      sk: 'Vždy som potreboval pochopiť, prečo veci fungujú tak, ako fungujú – nie len povrchnú odpoveď, ale logiku, ktorá je za tým. Táto zvedavosť ma priviedla k ekonómii. Fascinuje ma, ako sa makroekonomické udalosti, napríklad rozhodnutia o úrokových sadzbách, pohyby mien či obchodná politika, šíria ďalej a ovplyvňujú celé odvetvia. Pre mňa to nie je len predmet, ale spôsob, ako sa pozerať na svet.',
    },
    {
      en: "The same instinct pulls me toward technology: I want to understand how things are built, what problems they solve and where they're heading. And learning a language has never been about vocabulary lists for me. It's about understanding how people in a culture actually think.",
      cs: 'Stejný instinkt mě táhne k technologiím: chci rozumět tomu, jak se věci staví, jaké problémy řeší a kam směřují. A učit se jazyk pro mě nikdy nebylo o seznamech slovíček. Jde o to pochopit, jak lidé v dané kultuře doopravdy přemýšlejí.',
      de: 'Derselbe Instinkt zieht mich zur Technologie: Ich will verstehen, wie Dinge gebaut werden, welche Probleme sie lösen und wohin sie sich entwickeln. Und beim Sprachenlernen ging es mir nie um Vokabellisten, sondern darum zu verstehen, wie Menschen in einer Kultur wirklich denken.',
      es: 'El mismo instinto me atrae hacia la tecnología: quiero entender cómo se construyen las cosas, qué problemas resuelven y hacia dónde van. Y aprender un idioma nunca ha sido para mí cuestión de listas de vocabulario, sino de entender cómo piensa de verdad la gente de una cultura.',
      sk: 'Rovnaký inštinkt ma ťahá k technológiám: chcem rozumieť tomu, ako sa veci stavajú, aké problémy riešia a kam smerujú. A učiť sa jazyk pre mňa nikdy nebolo o zoznamoch slovíčok. Ide o to pochopiť, ako ľudia v danej kultúre naozaj rozmýšľajú.',
    },
  ],

  motto: {
    en: 'Responsibility and discipline lead to a happy life.',
    cs: 'Zodpovědnost a disciplína vedou ke šťastnému životu.',
    de: 'Verantwortung und Disziplin führen zu einem glücklichen Leben.',
    es: 'La responsabilidad y la disciplina llevan a una vida feliz.',
    sk: 'Zodpovednosť a disciplína vedú k šťastnému životu.',
  },

  status: {
    available: true,
    label: {
      en: 'Open to part-time roles & freelance projects',
      cs: 'Hledám práci na částečný úvazek a freelance projekty',
      de: 'Offen für Teilzeitstellen & Freelance-Projekte',
      es: 'Disponible para empleo a tiempo parcial y proyectos freelance',
      sk: 'Hľadám prácu na čiastočný úväzok a freelance projekty',
    },
    lookingFor: {
      en: "I'm looking for a part-time role in fintech, finance or tech — and I build websites and AI automations with Claude as a freelancer.",
      cs: 'Hledám práci na částečný úvazek ve fintechu, financích nebo technologiích – a jako freelancer tvořím weby a AI automatizace s Claude.',
      de: 'Ich suche eine Teilzeitstelle in Fintech, Finanzen oder Tech – und baue als Freelancer Websites und KI-Automatisierungen mit Claude.',
      es: 'Busco un puesto a tiempo parcial en fintech, finanzas o tecnología, y como freelance creo sitios web y automatizaciones con IA usando Claude.',
      sk: 'Hľadám prácu na čiastočný úväzok vo fintechu, financiách alebo technológiách – a ako freelancer tvorím weby a AI automatizácie s Claude.',
    },
  },

  location: {
    en: 'Prague, Czechia',
    cs: 'Praha, Česko',
    de: 'Prag, Tschechien',
    es: 'Praga, Chequia',
    sk: 'Praha, Česko',
  },

  email: 'vitstoeckl@gmail.com',

  socials: {
    linkedin: 'https://www.linkedin.com/in/vitstock',
    // TODO(Vít): GitHub username? Leave empty to hide the GitHub link.
    github: undefined,
  },

  // TODO(Vít): drop a headshot into content-inbox/; until then the hero shows initials.
  photo: undefined,
};

/** `Vit-Stockl-CV-en.pdf` */
export function cvFileName(lang: Lang): string {
  return `${profile.fileSlug}-CV-${lang}.pdf`;
}
