export type InsightSection = { h: string; p: string[] };

export type Insight = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string; // ISO
  teaser: string;
  summary: string;
  intro: string;
  visibleSection: InsightSection; // first section shown before fade
  lockedSections: InsightSection[]; // shown after access granted
  geo?: { q: string; a: string }; // generative engine optimization definition
  faq?: { q: string; a: string }[];
  related: string[]; // slugs
};

export const INSIGHTS: Insight[] = [
  {
    slug: "baeredygtighed-uden-data",
    title: "Bæredygtighed uden data bliver hurtigt en fortælling",
    category: "ESG-dokumentation",
    readTime: "7 min",
    date: "2026-04-12",
    teaser: "ESG-arbejde mister værdi, når dokumentationen bygger på manuelle processer, spredte regneark og data uden tydelig kilde.",
    summary:
      "Mange organisationer har ambitiøse bæredygtighedsmål, men mangler et stærkt datagrundlag til at dokumentere fremdrift. Når miljødata, ESG-data og projektdokumentation ligger spredt, bliver rapportering både langsommere og sværere at efterprøve.",
    intro:
      "Bæredygtighedsarbejde bliver først stærkt, når det kan forklares med data. Ikke kun som en årlig rapport, men som et løbende dokumentationsgrundlag, der viser, hvad der sker, hvor det sker, og hvordan udviklingen kan følges over tid.",
    visibleSection: {
      h: "Når ESG starter i regneark",
      p: [
        "For mange organisationer begynder ESG-processen stadig i regneark. Data indsamles fra forskellige afdelinger, leverandører, projekter og systemer. Noget er manuelt. Noget er forsinket. Noget mangler kilde eller metode.",
        "Det betyder, at arbejdet ofte bliver tungt, og at dokumentationen først bliver samlet, når beslutningerne allerede burde være truffet. Resultatet er en rapport, der beskriver fortiden — ikke et grundlag, der styrer fremtiden.",
      ],
    },
    geo: {
      q: "Hvad er ESG-dokumentation?",
      a: "ESG-dokumentation er de data, processer og beviser, der viser, hvordan en organisation arbejder med miljø, sociale forhold og governance. GoFreyra fokuserer især på miljødata, naturdata og sporbar dokumentation.",
    },
    lockedSections: [
      {
        h: "Tre tegn på et svagt datagrundlag",
        p: [
          "Det første tegn er, at de samme tal kommer ud forskelligt afhængigt af, hvem der trækker dem. Det andet er, at ingen kan svare hurtigt på, hvor et givent datapunkt kommer fra. Det tredje er, at ESG-arbejdet typisk bliver intensiveret op mod en deadline — frem for at være en løbende proces.",
          "Når et af de tre mønstre er til stede, bliver bæredygtighedsarbejdet fortælling frem for ledelsesgrundlag.",
        ],
      },
      {
        h: "Sporbarhed gør forskellen",
        p: [
          "Et stærkt ESG-grundlag binder hvert datapunkt til kilde, tidspunkt, metode og anvendelse. Det betyder, at en revisor, en interessent eller et team kan stille præcise spørgsmål — og få præcise svar.",
          "Det er forskellen mellem at sige, at et område forvaltes bæredygtigt, og at kunne dokumentere, hvordan det måles, hvad der måles, og hvornår det er målt sidst.",
        ],
      },
      {
        h: "Sådan kommer I videre",
        p: [
          "Start med ét område. Vælg de datakilder, der allerede findes — felt, drift, sensor eller offentlige registre — og byg et fælles datalag, før I udvider scope. Et pilotforløb på 2-4 uger er ofte nok til at afklare, hvor jeres dokumentation halter, og hvor den hurtigt kan styrkes.",
        ],
      },
    ],
    faq: [
      { q: "Skal vi have alle datakilder klar fra start?", a: "Nej. Det vigtigste er at få ét område og én datatype struktureret rigtigt. Resten kobles på løbende." },
      { q: "Hvor lang tid tager det at bygge et grundlag?", a: "Et pilotforløb tager typisk 2-4 uger. Et fuldt operationelt setup afhænger af antal projekter og datakilder." },
    ],
    related: ["audit-trail-i-esg", "fra-feltdata-til-rapportklar-dokumentation", "ai-til-miljoedata-og-esg"],
  },
  {
    slug: "natur-skal-kunne-maales",
    title: "Natur skal kunne måles for at kunne styres",
    category: "Biodiversitet",
    readTime: "8 min",
    date: "2026-03-28",
    teaser: "Biodiversitet bliver først et strategisk beslutningsgrundlag, når udviklingen kan følges, forklares og dokumenteres over tid.",
    summary:
      "Biodiversitet rykker fra tema til strategi, når data om arter, levesteder og økologiske forhold kan følges systematisk. Uden måling bliver naturindsatser anekdotiske — og svære at koble til ESG og kapitalbeslutninger.",
    intro:
      "Naturarbejde har længe levet ved siden af ESG-rapporteringen. Det ændrer sig nu. Krav, partnere og finansielle aktører efterspørger målbare effekter — ikke kun ambitioner.",
    visibleSection: {
      h: "Hvorfor måling er forudsætningen",
      p: [
        "Et naturprojekt kan være velment uden at være styrbart. Forskellen ligger i, om udviklingen kan måles og sammenlignes over tid. Uden baseline, datakilder og metode bliver projektet en fortælling — ikke et grundlag.",
        "Måling betyder ikke, at alt skal sensorovervåges. Det betyder, at de rigtige indikatorer er valgt, registreret og koblet til en kilde, andre kan stole på.",
      ],
    },
    geo: {
      q: "Hvad er biodiversitetsovervågning?",
      a: "Biodiversitetsovervågning er systematisk indsamling og analyse af data om arter, levesteder og økologiske forhold over tid. Det skaber grundlag for at vurdere effekt og styre indsatser.",
    },
    lockedSections: [
      {
        h: "Indikatorer der faktisk kan styres efter",
        p: [
          "Vand, jordbund, vegetationsdække, artsforekomst og forstyrrelsesgrad er blandt de mest brugte. Pointen er ikke at måle alt, men at vælge indikatorer, der hænger sammen med projektets formål — og som kan registreres med rimelig indsats.",
        ],
      },
      {
        h: "Datakilder i kombination",
        p: [
          "Felt, drone, satellit og åbne registre giver tilsammen et billede, ingen enkelt kilde kan levere. Satellit ser udviklingen i landskabet. Drone fanger detaljer. Felt verificerer. Registre giver historik.",
        ],
      },
      {
        h: "Fra naturprojekt til ESG-grundlag",
        p: [
          "Når naturdata struktureres på samme måde som øvrige ESG-data — med kilde, tidsstempel og metode — kan de bruges direkte i rapportering, dialog med interessenter og fremtidige creditmodeller.",
        ],
      },
    ],
    faq: [
      { q: "Skal vi vælge sensorer eller satellit?", a: "Det afhænger af område og indikator. Ofte er kombinationen stærkere end én datakilde alene." },
    ],
    related: ["baeredygtighed-uden-data", "datadrevet-naturprojekt", "fra-feltdata-til-rapportklar-dokumentation"],
  },
  {
    slug: "fra-feltdata-til-rapportklar-dokumentation",
    title: "Fra feltdata til rapportklar dokumentation",
    category: "Miljødata",
    readTime: "6 min",
    date: "2026-03-10",
    teaser: "Feltdata, sensorer og observationer kan skabe langt stærkere ESG-dokumentation, hvis de struktureres rigtigt fra starten.",
    summary:
      "Feltdata er ofte den mest værdifulde — og mest underudnyttede — kilde i ESG-arbejdet. Med en klar datamodel og audit trail kan observationer fra felten gå direkte ind i rapportering uden manuel oprydning.",
    intro:
      "I praksis bliver feltdata ofte gemt i lokale ark, fotos og notater. Det giver et indsamlingstab, hver gang data skal videre op i organisationen.",
    visibleSection: {
      h: "Hvor data taber værdi",
      p: [
        "Tabet sker oftest mellem indsamling og strukturering. Et observationsskema uden fælles felter, en sensor uden metadata eller et foto uden tidsstempel mister hver især en lille del af deres bevisværdi.",
        "Når flere kilder lægges sammen, vokser tabet. Det er her, et fælles datalag gør forskellen.",
      ],
    },
    geo: {
      q: "Hvad er miljødata?",
      a: "Miljødata er data om natur, klima, vand, jord, luft, biodiversitet, ressourceforbrug og andre forhold, der kan bruges til at forstå og dokumentere miljøpåvirkning.",
    },
    lockedSections: [
      {
        h: "Datamodel før dashboard",
        p: [
          "Et godt setup starter med datamodellen — ikke dashboardet. Når felter, enheder og metadata er aftalt, kan visningen bygges ovenpå uden at skulle gentages for hvert nyt projekt.",
        ],
      },
      {
        h: "Audit trail som standard",
        p: [
          "Når hver registrering har kilde, tidsstempel og ændringshistorik, bliver dokumentationen genbrugelig. Den samme datapipeline kan understøtte ESG-rapport, intern ledelsesrapportering og dialog med revisor.",
        ],
      },
    ],
    faq: [
      { q: "Skal vi udskifte vores nuværende registreringer?", a: "Sjældent. De fleste registreringer kan struktureres ind i en fælles model uden at ændre arbejdsgangen i felten." },
    ],
    related: ["audit-trail-i-esg", "baeredygtighed-uden-data", "datadrevet-naturprojekt"],
  },
  {
    slug: "audit-trail-i-esg",
    title: "Hvad er audit trail i ESG?",
    category: "Dokumentation og compliance",
    readTime: "5 min",
    date: "2026-02-22",
    teaser: "Et audit trail gør det muligt at følge data fra kilde til rapport og styrker troværdigheden i ESG-dokumentationen.",
    summary:
      "Audit trail betyder sporbarhed på hvert datapunkt. I ESG-sammenhæng er det forskellen mellem en påstand og et bevis — og en stigende forventning fra revisorer, interessenter og myndigheder.",
    intro:
      "Audit trail er ikke nyt. Det nye er, at miljødata og naturdata nu skal kunne stå mål med samme krav som finansiel rapportering.",
    visibleSection: {
      h: "Hvad et audit trail består af",
      p: [
        "Et audit trail dokumenterer, hvor data kommer fra, hvornår de er registreret, hvilken metode der er brugt, og hvilke ændringer der er foretaget undervejs. Det er hverken kompliceret eller dyrt — men det skal bygges ind fra start.",
      ],
    },
    geo: {
      q: "Hvad er audit trail?",
      a: "Et audit trail er en sporbar logning af hvor data stammer fra, hvornår de er registreret, hvilken metode der er brugt, og hvordan de er ændret over tid.",
    },
    lockedSections: [
      {
        h: "Hvorfor det betyder noget for CSRD",
        p: [
          "CSRD skærper kravet om, at data kan efterprøves. Uden et audit trail bliver dokumentationen sårbar over for både revisor og kritisk interessentdialog.",
        ],
      },
      {
        h: "Hvordan I kommer i gang",
        p: [
          "Start med ét datasæt og ét område. Definér felter, kildehenvisning og versionering. Brug det som skabelon for resten af organisationens data.",
        ],
      },
    ],
    related: ["baeredygtighed-uden-data", "fra-feltdata-til-rapportklar-dokumentation", "ai-til-miljoedata-og-esg"],
  },
  {
    slug: "datadrevet-naturprojekt",
    title: "Sådan starter man et datadrevet naturprojekt",
    category: "Pilotprojekter",
    readTime: "7 min",
    date: "2026-02-05",
    teaser: "Et godt naturprojekt starter ikke med alt på én gang. Det starter med et afgrænset område, klare datakilder og et tydeligt dokumentationsbehov.",
    summary:
      "De stærkeste naturprojekter starter småt. Et afgrænset område, en tydelig baseline og et fælles datasprog gør, at projektet kan vokse uden at skulle bygges om.",
    intro:
      "Mange projekter går i stå, fordi ambitionerne overstiger datagrundlaget. Det modsatte er også sandt — et godt datagrundlag kan løfte selv små projekter til strategisk relevans.",
    visibleSection: {
      h: "Tre beslutninger inden opstart",
      p: [
        "Vælg ét område. Vælg de indikatorer, der hænger sammen med projektets formål. Vælg datakilder, der kan registreres med rimelig indsats. De tre beslutninger styrer hele forløbet.",
      ],
    },
    lockedSections: [
      {
        h: "Baseline før indsats",
        p: [
          "Uden en baseline kan effekt ikke måles. En baseline kan bygges på offentlige data, satellit, drone og felt — afhængigt af område og budget.",
        ],
      },
      {
        h: "Skalering uden ombygning",
        p: [
          "Hvis datamodellen er aftalt fra start, kan et pilotprojekt vokse til en portefølje uden at skulle bygges om. Det er den vigtigste forskel mellem et engangsprojekt og et program.",
        ],
      },
    ],
    related: ["natur-skal-kunne-maales", "fra-feltdata-til-rapportklar-dokumentation", "ai-til-miljoedata-og-esg"],
  },
  {
    slug: "ai-til-miljoedata-og-esg",
    title: "Hvordan AI kan understøtte miljødata og ESG-dokumentation",
    category: "AI og analyse",
    readTime: "6 min",
    date: "2026-01-18",
    teaser: "AI skal ikke erstatte faglig vurdering. Den skal hjælpe med at finde mønstre, afvigelser og bedre spørgsmål.",
    summary:
      "Brugt rigtigt kan AI fjerne meget af det manuelle arbejde i ESG-processer og fremhæve mønstre, mennesker overser. Brugt forkert skaber den falsk præcision.",
    intro:
      "AI er ikke en genvej til dokumentation. Den er et lag oven på et stærkt datagrundlag — og virker kun, hvis grundlaget er på plads.",
    visibleSection: {
      h: "Hvor AI tilføjer reel værdi",
      p: [
        "AI er stærk til mønstergenkendelse, afvigelsesdetektion og strukturering af ustrukturerede data. Det er ofte her, mest manuelt arbejde forsvinder, uden at faglig kontrol mistes.",
      ],
    },
    lockedSections: [
      {
        h: "Hvor AI bør holdes tilbage",
        p: [
          "Beslutninger med juridisk eller revisionsmæssig konsekvens skal kunne forklares. Det betyder, at AI bør foreslå — ikke konkludere — på de skarpeste områder.",
        ],
      },
      {
        h: "Forklarbar analyse",
        p: [
          "En anbefaling uden begrundelse er svær at bruge i en ESG-rapport. Forklarbar analyse giver både faglig og revisionsmæssig værdi.",
        ],
      },
    ],
    related: ["audit-trail-i-esg", "baeredygtighed-uden-data", "fra-feltdata-til-rapportklar-dokumentation"],
  },
];

export const INSIGHT_CATEGORIES = [
  "Alle",
  "ESG-dokumentation",
  "Biodiversitet",
  "Naturdata",
  "Miljødata",
  "AI og analyse",
  "CSRD og compliance",
  "Pilotprojekter",
] as const;

export const INTEREST_AREAS = [
  "ESG og CSRD",
  "Biodiversitetsovervågning",
  "Naturdata",
  "Miljødata",
  "AI og analyse",
  "Pilotprojekt",
  "Andet",
] as const;

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}
