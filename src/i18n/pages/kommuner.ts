import type { Locale } from "@/i18n/locale";

const da = {
  metaTitle: "Til kommuner og treparter | Freyra Evidence Workspace",
  metaDescription: "Dokumentation af natur- og arealprojekter i Grøn Trepart, som kommunen kan stå på mål for. Login, evidenspakker og versionerede baseliner.",
  breadcrumbs: { home: "Forside", municipalities: "Til kommuner" },
  hero: {
    eyebrow: "Til kommuner og treparter",
    title: "Naturprojekter med dokumentation, der holder til gennemsyn.",
    body: "I Grøn Trepart skal kommunen kunne vise, hvad der er besluttet, hvorfor, og hvad det har flyttet. Freyra samler dronefotos, offentlige data og faglig verifikation i én evidenskæde.",
    primary: "Book en snak",
    secondary: "Se ydelserne",
    imageAlt: "Landbrugslandskab med vandløb og markarealer set fra drone",
    caption: "Eget dronefoto, august 2026.",
  },
  microStrip: ["Login for kommunen", "Evidenspakker til fonde og trepart", "Lag oven på MARS, GATE og Miljøportalen"],
  why: {
    eyebrow: "Hvorfor det er vigtigt",
    title: "Kommunen skal kunne stå på mål for tallene.",
    body: "Natur- og arealprojekter møder krav fra fonde, borgere, politikere og samarbejdspartnere. Når grundlaget er spredt, bliver hvert spørgsmål en opgave i sig selv.",
    cards: [
      { t: "Krav om dokumentation", d: "Fonde og tilskudsordninger kræver et efterprøveligt grundlag, før og efter projektet." },
      { t: "Dialog i treparten", d: "Lodsejere, rådgivere og interessenter skal kunne se det samme faktagrundlag." },
      { t: "Spredt materiale", d: "Fotos, kort og rapporter ligger i mapper og mails og er svære at finde igen om to år." },
    ],
  },
  deliverables: {
    eyebrow: "Hvad I får",
    title: "Et fælles, efterprøveligt grundlag.",
    cards: [
      { t: "Versioneret baseline", d: "En baselinerapport pr. område med dronefotos, offentlige data og faglig verifikation. Den har samme struktur fra område til område." },
      { t: "Evidenspakker til deling", d: "Pakker til fondsansøgninger, trepartsmøder og politisk behandling. Hver påstand har en kilde." },
      { t: "Gentagelsespunkter", d: "Faste positioner til før/efter-dokumentation, så udviklingen kan følges over tid." },
      { t: "Login for kommunen", d: "Adgang til egne projekter i Freyra Evidence Workspace. Materialet forsvinder ikke, når en medarbejder skifter job." },
    ],
  },
  example: {
    eyebrow: "Eksempel",
    title: "Førregistrering af et vandløb i Sønderjylland.",
    body: "Sådan så en faktisk leverance ud. Området er anonymiseret.",
    items: [
      "Droneflyvning gennemført 24.08.2026",
      "5 delstrækninger registreret langs vandløbet",
      "6 gentagelsespunkter til før/efter-dokumentation",
      "21 referencefotos med GPS, klar til genbesøg",
    ],
    usesTitle: "Det kan kommunen bruge det til",
    uses: [
      "Grundlag til den lokale trepart",
      "Bilag til fondsansøgninger",
      "Fast udgangspunkt for opfølgning om et år",
      "Svar til borgere og politikere med kildehenvisning",
    ],
  },
  access: {
    eyebrow: "Adgang",
    title: "Kommunen har adgang til sit eget materiale.",
    body: "Med login til Freyra Evidence Workspace kan jeres team finde projekter, baseliner og evidenspakker ét sted. Uden at skulle spørge os først.",
    cardTitle: "Login for kommunen",
    cardBody: "Adgang til egne projekter, versioneret historik og deling af evidenspakker med fonde og samarbejdspartnere. Kommunen styrer selv, hvem der har adgang.",
  },
  faq: [
    { q: "Er Freyra en erstatning for MARS, GATE eller Miljøportalen?", a: "Nej. Freyra er et lag oven på de systemer, I allerede bruger. Vi samler og verificerer data, så de kan bruges videre i jeres eksisterende arbejdsgange." },
    { q: "Kan kommunen selv tilgå materialet?", a: "Ja. Kommunen får login til Freyra Evidence Workspace og kan selv finde sine projekter, baseliner og evidenspakker." },
    { q: "Kan evidenspakkerne bruges til fondsansøgninger?", a: "Ja. Evidenspakkerne er bygget til at kunne deles med fonde, treparter og samarbejdspartnere. Hver påstand kan spores tilbage til sin kilde." },
    { q: "Hvad koster det for en kommune?", a: "Et pilotprojekt starter fra 125.000 kr. Et fast kommunalt setup prissættes efter aftale, afhængigt af antal projekter og omfang." },
    { q: "Hvem ejer data?", a: "Kommunen ejer sine egne data og evidenspakker. Vi opbevarer dem sikkert og gør dem tilgængelige via jeres login." },
  ],
  greenCta: {
    title: "Skal vi se på et af jeres områder?",
    subtitle: "Et pilotprojekt starter fra 125.000 kr. og giver jer en komplet evidenskæde at vurdere værdien på.",
    primary: "Book en snak",
    secondary: "Se platformen",
  },
  readMore: "Læs mere",
};

export type Copy = typeof da;

const en: Copy = {
  metaTitle: "For municipalities | Freyra Evidence Workspace",
  metaDescription: "Defensible nature and land project records for Green Tripartite (Grøn Trepart). Municipal login, evidence packages and versioned baselines.",
  breadcrumbs: { home: "Home", municipalities: "For municipalities" },
  hero: {
    eyebrow: "For municipalities and tripartite partnerships",
    title: "Nature projects with documentation that stands up to scrutiny.",
    body: "Under the Green Tripartite (Grøn Trepart), municipalities must be able to show what has been decided, why, and what difference it has made. Freyra brings drone photographs, public data and expert verification together in a single evidence chain.",
    primary: "Book a conversation",
    secondary: "View services",
    imageAlt: "Drone view of an agricultural landscape with a watercourse and fields",
    caption: "Our own drone photograph, August 2026.",
  },
  microStrip: ["Municipal login", "Evidence packages for foundations and tripartite partnerships", "A layer on top of MARS, GATE and Miljøportalen (Denmark's environmental data portal)"],
  why: {
    eyebrow: "Why it matters",
    title: "The municipality must be able to stand behind the figures.",
    body: "Nature and land projects face requirements from foundations, residents, politicians and partners. When the underlying material is scattered, each question becomes a task in its own right.",
    cards: [
      { t: "Documentation requirements", d: "Foundations and grant schemes require a verifiable basis, before and after the project." },
      { t: "Dialogue within the tripartite partnership", d: "Landowners, advisers and stakeholders need access to the same factual basis." },
      { t: "Scattered material", d: "Photographs, maps and reports are stored in folders and emails and are difficult to find again two years later." },
    ],
  },
  deliverables: {
    eyebrow: "What you receive",
    title: "A shared, verifiable basis.",
    cards: [
      { t: "Versioned baseline", d: "One baseline report per area with drone photographs, public data and expert verification. It follows the same structure across all areas." },
      { t: "Evidence packages for sharing", d: "Packages for funding applications, tripartite meetings and political consideration. Every claim has a source." },
      { t: "Repeat survey points", d: "Fixed positions for before-and-after documentation, so changes can be tracked over time." },
      { t: "Municipal login", d: "Access to your own projects in Freyra Evidence Workspace. The material does not disappear when a member of staff changes jobs." },
    ],
  },
  example: {
    eyebrow: "Example",
    title: "Baseline survey of a watercourse in Southern Jutland.",
    body: "This is what an actual deliverable looked like. The area has been anonymised.",
    items: [
      "Drone flight completed on 24.08.2026",
      "5 sections surveyed along the watercourse",
      "6 repeat survey points for before-and-after documentation",
      "21 reference photographs with GPS, ready for return visits",
    ],
    usesTitle: "How the municipality can use it",
    uses: [
      "A basis for the local tripartite partnership",
      "Supporting documents for funding applications",
      "A fixed starting point for follow-up in a year's time",
      "Answers to residents and politicians with source references",
    ],
  },
  access: {
    eyebrow: "Access",
    title: "The municipality has access to its own material.",
    body: "With a login to Freyra Evidence Workspace, your team can find projects, baselines and evidence packages in one place. Without having to ask us first.",
    cardTitle: "Municipal login",
    cardBody: "Access to your own projects, version history and sharing of evidence packages with foundations and partners. The municipality controls who has access.",
  },
  faq: [
    { q: "Does Freyra replace MARS, GATE or Miljøportalen?", a: "No. Freyra is a layer on top of the systems you already use. We collect and verify data so it can be used in your existing workflows." },
    { q: "Can the municipality access the material itself?", a: "Yes. The municipality receives a login to Freyra Evidence Workspace and can find its own projects, baselines and evidence packages." },
    { q: "Can the evidence packages be used for funding applications?", a: "Yes. The evidence packages are designed to be shared with foundations, tripartite partnerships and partners. Every claim can be traced back to its source." },
    { q: "What does it cost for a municipality?", a: "A pilot project starts from DKK 125,000. An ongoing municipal setup is priced by agreement, depending on the number of projects and the scope." },
    { q: "Who owns the data?", a: "The municipality owns its own data and evidence packages. We store them securely and make them available through your login." },
  ],
  greenCta: {
    title: "Shall we look at one of your areas?",
    subtitle: "A pilot project starts from DKK 125,000 and gives you a complete evidence chain on which to assess its value.",
    primary: "Book a conversation",
    secondary: "View the platform",
  },
  readMore: "Read more",
};

const de: Copy = {
  metaTitle: "Für Kommunen | Freyra Evidence Workspace",
  metaDescription: "Belegbare Natur- und Flächenprojekte der Grünen Dreiparteienvereinbarung (Grøn Trepart): kommunaler Login, Evidenzpakete und versionierte Baselines.",
  breadcrumbs: { home: "Startseite", municipalities: "Für Kommunen" },
  hero: {
    eyebrow: "Für Kommunen und Dreiparteienpartnerschaften",
    title: "Naturprojekte mit Dokumentation, die einer Prüfung standhält.",
    body: "Im Rahmen der Grünen Dreiparteienvereinbarung (Grøn Trepart) muss die Kommune zeigen können, was beschlossen wurde, warum und was es bewirkt hat. Freyra führt Drohnenaufnahmen, öffentliche Daten und fachliche Verifizierung zu einer einzigen Evidenzkette zusammen.",
    primary: "Gespräch vereinbaren",
    secondary: "Leistungen ansehen",
    imageAlt: "Drohnenansicht einer Agrarlandschaft mit einem Wasserlauf und Ackerflächen",
    caption: "Eigene Drohnenaufnahme, August 2026.",
  },
  microStrip: ["Login für die Kommune", "Evidenzpakete für Stiftungen und Dreiparteienpartnerschaften", "Eine ergänzende Ebene über MARS, GATE und Miljøportalen (Dänemarks Umweltdatenportal)"],
  why: {
    eyebrow: "Warum das wichtig ist",
    title: "Die Kommune muss für die Zahlen einstehen können.",
    body: "Natur- und Flächenprojekte müssen Anforderungen von Stiftungen, Bürgerinnen und Bürgern, Politik und Kooperationspartnern erfüllen. Wenn die Grundlagen verstreut sind, wird jede Frage zu einer eigenen Aufgabe.",
    cards: [
      { t: "Anforderungen an die Dokumentation", d: "Stiftungen und Förderprogramme verlangen eine überprüfbare Grundlage, vor und nach dem Projekt." },
      { t: "Dialog in der Dreiparteienpartnerschaft", d: "Grundeigentümer, Beratende und Interessengruppen müssen dieselbe Faktengrundlage einsehen können." },
      { t: "Verstreute Unterlagen", d: "Fotos, Karten und Berichte liegen in Ordnern und E-Mails und lassen sich zwei Jahre später nur schwer wiederfinden." },
    ],
  },
  deliverables: {
    eyebrow: "Was Sie erhalten",
    title: "Eine gemeinsame, überprüfbare Grundlage.",
    cards: [
      { t: "Versionierte Baseline", d: "Ein Baseline-Bericht pro Gebiet mit Drohnenaufnahmen, öffentlichen Daten und fachlicher Verifizierung. Die Struktur ist für alle Gebiete einheitlich." },
      { t: "Evidenzpakete zum Teilen", d: "Pakete für Förderanträge, Dreiparteientreffen und die Beratung in politischen Gremien. Jede Aussage hat eine Quelle." },
      { t: "Wiederholungsaufnahmepunkte", d: "Feste Positionen für die Vorher-Nachher-Dokumentation, damit sich die Entwicklung über die Zeit verfolgen lässt." },
      { t: "Login für die Kommune", d: "Zugriff auf eigene Projekte in Freyra Evidence Workspace. Die Unterlagen gehen nicht verloren, wenn Mitarbeitende die Stelle wechseln." },
    ],
  },
  example: {
    eyebrow: "Beispiel",
    title: "Erfassung des Ausgangszustands eines Wasserlaufs in Sønderjylland.",
    body: "So sah eine tatsächliche Lieferung aus. Das Gebiet wurde anonymisiert.",
    items: [
      "Drohnenflug am 24.08.2026 durchgeführt",
      "5 Teilabschnitte entlang des Wasserlaufs erfasst",
      "6 Wiederholungsaufnahmepunkte für die Vorher-Nachher-Dokumentation",
      "21 Referenzfotos mit GPS, für erneute Begehungen vorbereitet",
    ],
    usesTitle: "Dafür kann die Kommune die Unterlagen nutzen",
    uses: [
      "Grundlage für die lokale Dreiparteienpartnerschaft",
      "Anlagen zu Förderanträgen",
      "Fester Ausgangspunkt für eine Folgeerhebung in einem Jahr",
      "Antworten an Bürgerschaft und Politik mit Quellenangaben",
    ],
  },
  access: {
    eyebrow: "Zugang",
    title: "Die Kommune hat Zugriff auf ihre eigenen Unterlagen.",
    body: "Mit einem Login für Freyra Evidence Workspace findet Ihr Team Projekte, Baselines und Evidenzpakete an einem Ort. Ohne vorher bei uns nachfragen zu müssen.",
    cardTitle: "Login für die Kommune",
    cardBody: "Zugriff auf eigene Projekte und die Versionshistorie sowie Teilen von Evidenzpaketen mit Stiftungen und Kooperationspartnern. Die Kommune bestimmt selbst, wer Zugang hat.",
  },
  faq: [
    { q: "Ersetzt Freyra MARS, GATE oder Miljøportalen?", a: "Nein. Freyra ist eine ergänzende Ebene über den Systemen, die Sie bereits nutzen. Wir sammeln und verifizieren Daten, damit sie in Ihren bestehenden Arbeitsabläufen weiterverwendet werden können." },
    { q: "Kann die Kommune selbst auf die Unterlagen zugreifen?", a: "Ja. Die Kommune erhält einen Login für Freyra Evidence Workspace und kann ihre Projekte, Baselines und Evidenzpakete selbst finden." },
    { q: "Können die Evidenzpakete für Förderanträge verwendet werden?", a: "Ja. Die Evidenzpakete sind so aufgebaut, dass sie mit Stiftungen, Dreiparteienpartnerschaften und Kooperationspartnern geteilt werden können. Jede Aussage lässt sich bis zu ihrer Quelle zurückverfolgen." },
    { q: "Was kostet das für eine Kommune?", a: "Ein Pilotprojekt beginnt ab 125.000 DKK. Ein dauerhaftes kommunales Setup wird nach Vereinbarung bepreist, abhängig von der Anzahl der Projekte und dem Umfang." },
    { q: "Wem gehören die Daten?", a: "Die Kommune ist Eigentümerin ihrer eigenen Daten und Evidenzpakete. Wir speichern sie sicher und machen sie über Ihren Login zugänglich." },
  ],
  greenCta: {
    title: "Sollen wir uns eines Ihrer Gebiete ansehen?",
    subtitle: "Ein Pilotprojekt beginnt ab 125.000 DKK und liefert Ihnen eine vollständige Evidenzkette, anhand derer Sie den Nutzen beurteilen können.",
    primary: "Gespräch vereinbaren",
    secondary: "Plattform ansehen",
  },
  readMore: "Weiterlesen",
};

export const COPY: Record<Locale, Copy> = { da, en, de };
