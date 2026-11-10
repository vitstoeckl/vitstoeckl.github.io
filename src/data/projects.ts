import type { Project } from './types';

/**
 * Real projects only. To add one, copy a block, give it a new `slug`, and fill the texts.
 * The first `featured: true` project becomes the large tile.
 */
export const projects: Project[] = [
  {
    slug: 'amorby',
    category: 'web',
    featured: true,
    // TODO(Vít): launch year?
    title: 'Amorby',
    summary: {
      en: 'A private, end-to-end encrypted photo album for couples — with love letters, a travel map and a shared calendar.',
      cs: 'Soukromé fotoalbum pro páry s end-to-end šifrováním – s milostnými dopisy, cestovatelskou mapou a společným kalendářem.',
      de: 'Ein privates, Ende-zu-Ende-verschlüsseltes Fotoalbum für Paare – mit Liebesbriefen, Reisekarte und gemeinsamem Kalender.',
      es: 'Un álbum de fotos privado y con cifrado de extremo a extremo para parejas, con cartas de amor, un mapa de viajes y un calendario compartido.',
      sk: 'Súkromný fotoalbum pre páry s end-to-end šifrovaním – s ľúbostnými listami, cestovateľskou mapou a spoločným kalendárom.',
    },
    status: {
      en: 'Live on the web',
      cs: 'Běží na webu',
      de: 'Live im Web',
      es: 'Disponible en la web',
      sk: 'Beží na webe',
    },
    problem: {
      en: "A couple's photos and memories end up scattered across two phones and chat threads, and most places that store them are not truly private.",
      cs: 'Fotky a vzpomínky páru bývají roztroušené po dvou telefonech a chatech a většina míst, kde jsou uložené, není doopravdy soukromá.',
      de: 'Fotos und Erinnerungen eines Paares liegen verstreut auf zwei Handys und in Chatverläufen – und die meisten Orte, an denen sie gespeichert werden, sind nicht wirklich privat.',
      es: 'Las fotos y los recuerdos de una pareja acaban repartidos entre dos móviles y varios chats, y la mayoría de los sitios donde se guardan no son realmente privados.',
      sk: 'Fotky a spomienky páru bývajú roztrúsené po dvoch telefónoch a chatoch a väčšina miest, kde sú uložené, nie je naozaj súkromná.',
    },
    solution: {
      en: "I built Amorby: one shared album that sorts itself by the date each photo was taken on either partner's phone, grouped by month. Photos, letters and chat are encrypted on the phone first, so the server only ever stores scrambled data. Around the album: love letters in a handwriting font with voice messages (they can be sealed until a chosen date), a travel map with postage stamps, a shared calendar with countdowns and a bucket list, a question of the day, a private chat with hand-drawn stickers, and a long-distance mode with time zones and days until the next visit.",
      cs: 'Postavil jsem Amorby: jedno společné album, které se samo řadí podle data pořízení fotek z telefonů obou partnerů a seskupuje je po měsících. Fotky, dopisy i chat se šifrují už v telefonu, takže server ukládá jen nečitelná data. Kolem alba jsou milostné dopisy psacím písmem s hlasovými zprávami (dají se zapečetit do zvoleného data), cestovatelská mapa s poštovními známkami, společný kalendář s odpočty a bucket listem, otázka dne, soukromý chat s ručně kreslenými nálepkami a režim na dálku s časovými pásmy a počtem dní do další návštěvy.',
      de: 'Ich habe Amorby gebaut: ein gemeinsames Album, das sich automatisch nach dem Aufnahmedatum der Fotos von beiden Handys sortiert und nach Monaten gruppiert. Fotos, Briefe und Chat werden schon auf dem Handy verschlüsselt – der Server speichert nur unlesbare Daten. Dazu kommen Liebesbriefe in Handschrift mit Sprachnachrichten (versiegelbar bis zu einem gewählten Datum), eine Reisekarte mit Briefmarken, ein gemeinsamer Kalender mit Countdowns und Bucket List, eine Frage des Tages, ein privater Chat mit handgezeichneten Stickern und ein Fernbeziehungsmodus mit Zeitzonen und den Tagen bis zum nächsten Wiedersehen.',
      es: 'Creé Amorby: un álbum compartido que se ordena solo, por meses, según la fecha en que se tomó cada foto en el móvil de cualquiera de los dos. Las fotos, las cartas y el chat se cifran en el propio teléfono, así que el servidor solo guarda datos ilegibles. Alrededor del álbum hay cartas de amor con letra manuscrita y mensajes de voz (se pueden sellar hasta una fecha), un mapa de viajes con sellos postales, un calendario compartido con cuentas atrás y una lista de deseos, una pregunta del día, un chat privado con stickers dibujados a mano y un modo a distancia con zonas horarias y los días que faltan para la próxima visita.',
      sk: 'Postavil som Amorby: jeden spoločný album, ktorý sa sám radí podľa dátumu odfotenia z telefónov oboch partnerov a zoskupuje fotky po mesiacoch. Fotky, listy aj chat sa šifrujú už v telefóne, takže server ukladá iba nečitateľné dáta. Okolo albumu sú ľúbostné listy písaným písmom s hlasovými správami (dajú sa zapečatiť do zvoleného dátumu), cestovateľská mapa s poštovými známkami, spoločný kalendár s odpočtami a bucket listom, otázka dňa, súkromný chat s ručne kreslenými nálepkami a režim na diaľku s časovými pásmami a počtom dní do ďalšej návštevy.',
    },
    result: {
      en: 'The web app is live in 8 languages, with sign-in via Google, Apple or email and a partner invite link. It runs on a freemium model: a free tier (up to 300 photos, ads on a few screens that are never personalised) and a one-time Premium purchase per couple — no subscription, with a 14-day trial. Google Play is coming soon, the App Store later.',
      cs: 'Webová aplikace běží v 8 jazycích, s přihlášením přes Google, Apple nebo e-mail a pozvánkou pro partnera přes odkaz. Funguje na freemium modelu: bezplatná verze (až 300 fotek, reklamy na několika obrazovkách, nikdy personalizované) a jednorázový nákup Premium pro pár – bez předplatného a se 14denní zkušební dobou. Google Play brzy, App Store později.',
      de: 'Die Web-App ist in 8 Sprachen live, mit Anmeldung über Google, Apple oder E-Mail und einem Einladungslink für den Partner. Das Geschäftsmodell ist Freemium: eine kostenlose Version (bis zu 300 Fotos, Werbung auf wenigen Screens, nie personalisiert) und ein einmaliger Premium-Kauf pro Paar – kein Abo, mit 14 Tagen Testphase. Google Play folgt bald, der App Store später.',
      es: 'La aplicación web ya funciona en 8 idiomas, con inicio de sesión con Google, Apple o correo y un enlace para invitar a la pareja. Sigue un modelo freemium: un plan gratuito (hasta 300 fotos, anuncios en algunas pantallas y nunca personalizados) y una compra Premium única por pareja, sin suscripción y con 14 días de prueba. Pronto llegará a Google Play y, más adelante, a la App Store.',
      sk: 'Webová aplikácia beží v 8 jazykoch, s prihlásením cez Google, Apple alebo e-mail a pozvánkou pre partnera cez odkaz. Funguje na freemium modeli: bezplatná verzia (až 300 fotiek, reklamy na niekoľkých obrazovkách, nikdy personalizované) a jednorazový nákup Premium pre pár – bez predplatného a so 14-dňovou skúšobnou dobou. Google Play čoskoro, App Store neskôr.',
    },
    kpi: {
      value: '8',
      label: { en: 'languages', cs: 'jazyků', de: 'Sprachen', es: 'idiomas', sk: 'jazykov' },
    },
    // TODO(Vít): confirm the tech stack (framework, database, hosting) to add as tags.
    tags: ['Web app', 'End-to-end encryption', 'i18n', 'Freemium', 'Built with Claude'],
    links: [{ kind: 'website', url: 'https://amorby.app', label: 'amorby.app' }],
    // TODO(Vít): screenshots → content-inbox/, then they go to public/images/projects/amorby/.
  },
  {
    slug: 'ai-automation-juwelakvarium',
    category: 'automation',
    title: {
      en: 'AI process automation',
      cs: 'AI automatizace procesů',
      de: 'KI-Prozessautomatisierung',
      es: 'Automatización de procesos con IA',
      sk: 'AI automatizácia procesov',
    },
    summary: {
      en: 'Small internal apps built with Claude that automate business processes at Juwelakvarium CZ/SK.',
      cs: 'Malé interní aplikace postavené s Claude, které automatizují firemní procesy v Juwelakvarium CZ/SK.',
      de: 'Kleine interne Apps, mit Claude gebaut, die Geschäftsprozesse bei Juwelakvarium CZ/SK automatisieren.',
      es: 'Pequeñas aplicaciones internas creadas con Claude que automatizan procesos de negocio en Juwelakvarium CZ/SK.',
      sk: 'Malé interné aplikácie postavené s Claude, ktoré automatizujú firemné procesy v Juwelakvarium CZ/SK.',
    },
    // TODO(Vít): name 1–2 concrete processes you automated, to make this card more specific.
    problem: {
      en: 'Running an online shop involves a lot of repetitive manual work that takes time away from pricing, partners and customers.',
      cs: 'Provoz e-shopu obnáší spoustu opakované ruční práce, která ubírá čas na ceny, partnery a zákazníky.',
      de: 'Der Betrieb eines Onlineshops bringt viel wiederkehrende Handarbeit mit sich, die Zeit für Preise, Partner und Kunden kostet.',
      es: 'Gestionar una tienda online implica mucho trabajo manual repetitivo que resta tiempo a los precios, los socios y los clientes.',
      sk: 'Prevádzka e-shopu prináša veľa opakovanej ručnej práce, ktorá uberá čas na ceny, partnerov a zákazníkov.',
    },
    solution: {
      en: 'I find processes that can be automated, build small apps for them with Claude and put them to use in daily work.',
      cs: 'Hledám procesy, které jde automatizovat, stavím pro ně s Claude malé aplikace a zavádím je do každodenní práce.',
      de: 'Ich finde automatisierbare Prozesse, baue mit Claude kleine Apps dafür und setze sie im Arbeitsalltag ein.',
      es: 'Identifico procesos que se pueden automatizar, creo pequeñas aplicaciones para ellos con Claude y las pongo en marcha en el trabajo diario.',
      sk: 'Hľadám procesy, ktoré sa dajú automatizovať, staviam pre ne s Claude malé aplikácie a zavádzam ich do každodennej práce.',
    },
    result: {
      en: 'Repetitive tasks are handled by software instead of by hand, leaving more time for the work that needs a person.',
      cs: 'Opakované úkoly místo ruční práce zvládá software, takže zbývá víc času na práci, kterou musí udělat člověk.',
      de: 'Wiederkehrende Aufgaben erledigt Software statt Handarbeit – so bleibt mehr Zeit für das, was ein Mensch tun muss.',
      es: 'El software se encarga de las tareas repetitivas en lugar de hacerlas a mano, y queda más tiempo para el trabajo que necesita a una persona.',
      sk: 'Opakované úlohy namiesto ručnej práce zvláda softvér, takže zostáva viac času na prácu, ktorú musí urobiť človek.',
    },
    tags: ['Claude', 'AI automation', 'E-commerce'],
  },
];
