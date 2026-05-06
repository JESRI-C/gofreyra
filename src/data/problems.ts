// Problem-univers — pSEO/GEO-sider om de problemer GoFreyra løser.

export type ProblemSlug =
  | "esg-dokumentation"
  | "fragmenterede-data"
  | "manglende-audit-trail"
  | "manuelle-esg-rapporter"
  | "naturdata-uden-struktur"
  | "beslutninger-uden-realtidsdata";

export interface ProblemPage {
  slug: ProblemSlug;
  name: string;
  cardTeaser: string;
  cardCta: string;
  h1: string;
  subheadline: string;
  seoTitle: string;
  seoDescription: string;
  whatIs: string;
  whyHappens: string;
  inPractice: string;
  solution: string;
  modules: string[];
  sectors: { slug: string; label: string }[];
  useCases: { slug: string; label: string }[];
  dataPages: { slug: string; label: string }[];
  faq: { q: string; a: string }[];
}

const M = {
  smartconnect: "SmartConnect+",
  decisionsiq: "DecisionsIQ",
  ledger: "ESG Ledger",
  exchange: "Impact Exchange",
  dashboard: "GoFreyra Dashboard",
};

export const PROBLEMS: ProblemPage[] = [
  {
    slug: "esg-dokumentation",
    name: "ESG-dokumentation",
    cardTeaser: "Når ESG-data ikke kan spores, bliver rapporteringen tungere og mindre troværdig.",
    cardCta: "Læs om ESG-dokumentation",
    h1: "ESG-dokumentation kræver bedre data",
    subheadline:
      "GoFreyra hjælper med at gøre ESG-data mere sporbare, brugbare og lettere at dokumentere.",
    seoTitle: "ESG-dokumentation — sporbar og rapportklar med GoFreyra",
    seoDescription:
      "Gør ESG-dokumentation sporbar fra kilde til rapport. GoFreyra samler miljødata, kilder og dokumentationsstatus i ét dashboard.",
    whatIs:
      "ESG-dokumentation er det datagrundlag, der ligger bag rapportering om miljø, klima og natur. Det dækker både tal, kilder, metoder og tidsstempler — og kravet om at kunne efterprøve dem.",
    whyHappens:
      "ESG-dokumentation bliver ofte tung, fordi data kommer fra mange forskellige kilder. Nogle ligger i regneark, andre i rapporter, mails, systemer eller hos eksterne rådgivere. Når kilder, metoder og tidsstempler ikke er tydelige, bliver rapporteringen sværere at forsvare.",
    inPractice:
      "Konsekvensen er længere rapporteringscyklusser, mere manuelt arbejde og en større risiko for fejl. ESG-teamet bruger tid på at jagte tal i stedet for at bruge dem.",
    solution:
      "GoFreyra samler miljødata, datakilder og dokumentationsstatus i ét dashboard. Platformen kobler datapunkter til kilde, tidspunkt, metode og rapporteringsbehov, så ESG bliver et løbende arbejde — ikke en kvartalsmæssig brandslukning.",
    modules: [M.ledger, M.smartconnect, M.decisionsiq, M.dashboard],
    sectors: [
      { slug: "kommuner", label: "Kommuner" },
      { slug: "industri", label: "Industri" },
      { slug: "forsyning", label: "Forsyning" },
      { slug: "raadgivere", label: "Rådgivere" },
      { slug: "ejendomme-og-byggeri", label: "Ejendomme og byggeri" },
    ],
    useCases: [
      { slug: "esg-dokumentation", label: "ESG-dokumentation" },
      { slug: "audit-trail", label: "Audit trail i ESG" },
    ],
    dataPages: [
      { slug: "co2", label: "CO₂ og klimaindikatorer" },
      { slug: "driftsdata", label: "Driftsdata" },
      { slug: "sensordata", label: "Sensordata" },
    ],
    faq: [
      { q: "Hvad er ESG-dokumentation?", a: "Det er datagrundlaget bag ESG-rapporteringen — tal, kilder, metoder og tidsstempler, der gør tallene mulige at efterprøve." },
      { q: "Hvorfor er sporbarhed vigtig i ESG?", a: "Sporbarhed gør det muligt at forklare, hvor data kommer fra, og at stå inde for rapporten over for revisor, ledelse og myndigheder." },
      { q: "Kan GoFreyra erstatte ESG-rapporteringsværktøjer?", a: "GoFreyra fungerer som datalag og dokumentationsspor. Rapporteringsværktøjer kan kobles på, så de trækker fra ét sporbart grundlag." },
      { q: "Kan man starte med eksisterende data?", a: "Ja. De fleste organisationer starter med de data, de allerede har, og udvider gradvist med nye kilder." },
      { q: "Hvordan hjælper audit trail i rapportering?", a: "Audit trail viser kilde, metode og tidspunkt for hvert datapunkt, så rapporteringen kan dokumenteres og efterprøves." },
    ],
  },
  {
    slug: "fragmenterede-data",
    name: "Fragmenterede data",
    cardTeaser: "Miljødata, driftsdata og projektdata ligger ofte i forskellige systemer.",
    cardCta: "Læs om fragmenterede data",
    h1: "Når miljødata ligger spredt, bliver beslutninger langsommere",
    subheadline:
      "GoFreyra samler miljødata, ESG-data og projektdata i ét fælles datagrundlag.",
    seoTitle: "Fragmenterede miljødata — saml dem i én platform | GoFreyra",
    seoDescription:
      "Saml spredte miljødata, driftsdata og projektdata i ét fælles datagrundlag. GoFreyra kobler kilder gradvist og gør data brugbare.",
    whatIs:
      "Fragmenterede data er data, der eksisterer — men ligger spredt i forskellige systemer, formater, regneark og rapporter, så det kræver manuelt arbejde at få overblik.",
    whyHappens:
      "Mange organisationer har allerede relevante data. Problemet er, at de ofte ligger i forskellige systemer, formater og afdelinger. Det gør det svært at skabe overblik, sammenligne udvikling og dokumentere effekt.",
    inPractice:
      "Beslutninger bliver langsommere, rapporter bliver dyrere at lave, og analyser bygger på et mindre udsnit af virkeligheden, end de burde.",
    solution:
      "GoFreyra fungerer som et samlende platformslag, hvor datakilder kan kobles gradvist — sensorer, feltdata, satellitdata, driftsdata, manuelle registreringer og eksterne registre. Data struktureres i én fælles model.",
    modules: [M.smartconnect, M.dashboard, M.decisionsiq, M.ledger],
    sectors: [
      { slug: "industri", label: "Industri" },
      { slug: "forsyning", label: "Forsyning" },
      { slug: "kommuner", label: "Kommuner" },
      { slug: "naturprojekter", label: "Naturprojekter" },
      { slug: "landbrug", label: "Landbrug" },
    ],
    useCases: [
      { slug: "datadrevet-naturprojekt", label: "Datadrevet naturprojekt" },
      { slug: "smartconnect-integration", label: "Datakilder samlet ét sted" },
    ],
    dataPages: [
      { slug: "sensordata", label: "Sensordata" },
      { slug: "driftsdata", label: "Driftsdata" },
      { slug: "feltregistreringer", label: "Feltregistreringer" },
    ],
    faq: [
      { q: "Hvad betyder fragmenterede data?", a: "Det betyder, at relevant data findes — men ligger spredt på en måde, der gør den svær at bruge samlet." },
      { q: "Hvilke datakilder kan GoFreyra samle?", a: "Sensorer, satellitdata, dronedata, feltregistreringer, driftsdata, vejrdata, eksterne registre og manuelle input." },
      { q: "Skal alle integrationer være klar fra start?", a: "Nej. De fleste kunder starter med de vigtigste kilder og udvider over tid." },
      { q: "Kan man bruge manuelle data?", a: "Ja. Manuelle registreringer kan struktureres og kobles til samme datamodel som automatiske kilder." },
      { q: "Hvordan bliver data gjort brugbare?", a: "Gennem en fælles datamodel, validering, kobling til projekter og visning i dashboards." },
    ],
  },
  {
    slug: "manglende-audit-trail",
    name: "Manglende audit trail",
    cardTeaser: "Uden audit trail bliver det svært at forklare, hvor data kommer fra, og hvordan de bruges.",
    cardCta: "Læs om audit trail",
    h1: "Uden audit trail bliver dokumentation svær at stole på",
    subheadline:
      "GoFreyra hjælper med at forbinde datapunkter med kilde, metode, tidspunkt og anvendelse.",
    seoTitle: "Audit trail på miljødata og ESG | GoFreyra",
    seoDescription:
      "Skab audit trail fra kilde til rapport. GoFreyra dokumenterer hvor data kommer fra, hvordan de er indsamlet, og hvordan de bruges.",
    whatIs:
      "Audit trail er en sammenhængende dokumentation af et datapunkt: hvor det kommer fra, hvordan det er målt, hvornår det er registreret, og hvordan det indgår i en rapport.",
    whyHappens:
      "Et datapunkt har størst værdi, når man kan forklare, hvor det kommer fra, hvordan det er indsamlet, og hvordan det bruges. Uden audit trail bliver ESG-dokumentation, naturdata og impact-claims sværere at efterprøve.",
    inPractice:
      "Revisor, ledelse eller partnere stiller spørgsmål, som ikke kan besvares hurtigt. Det forsinker beslutninger og svækker tilliden til rapporten.",
    solution:
      "ESG Ledger skaber et dokumentationsspor fra kilde til rapport. Målet er at gøre dokumentationen mere gennemsigtig og lettere at anvende i ESG, rapportering og dialog med partnere.",
    modules: [M.ledger, M.dashboard, M.smartconnect, M.exchange],
    sectors: [
      { slug: "raadgivere", label: "Rådgivere" },
      { slug: "industri", label: "Industri" },
      { slug: "forsyning", label: "Forsyning" },
      { slug: "ngo-og-fonde", label: "NGO'er og fonde" },
    ],
    useCases: [
      { slug: "audit-trail", label: "Audit trail i ESG" },
      { slug: "feltdata-til-rapportklar-dokumentation", label: "Feltdata til rapportklar dokumentation" },
    ],
    dataPages: [
      { slug: "feltregistreringer", label: "Feltregistreringer" },
      { slug: "sensordata", label: "Sensordata" },
      { slug: "co2", label: "CO₂ og klimaindikatorer" },
    ],
    faq: [
      { q: "Hvad er audit trail?", a: "En sammenhængende dokumentation af et datapunkts kilde, metode, tidspunkt og anvendelse." },
      { q: "Hvorfor er audit trail vigtigt i ESG?", a: "Fordi rapportering bliver mere troværdig, når hvert tal kan spores tilbage til en kilde og en metode." },
      { q: "Hvordan kan man spore data tilbage til kilden?", a: "Ved at registrere kilde, metode og tidspunkt på datapunktet, og holde sammenhængen ind i rapporteringslaget." },
      { q: "Hvad betyder rapportklar dokumentation?", a: "At data og deres dokumentation er struktureret på en måde, der direkte kan bruges i ESG- og ledelsesrapportering." },
      { q: "Er blockchain nødvendigt for audit trail?", a: "Nej. Audit trail handler om sammenhæng mellem data, kilde og rapport. Blockchain er ikke en forudsætning." },
    ],
  },
  {
    slug: "manuelle-esg-rapporter",
    name: "Manuelle ESG-rapporter",
    cardTeaser: "Manuelle rapporteringsprocesser bruger tid og øger risikoen for fejl.",
    cardCta: "Læs om manuelle ESG-rapporter",
    h1: "Manuelle ESG-rapporter stjæler tid og skaber usikkerhed",
    subheadline:
      "GoFreyra hjælper med at gøre datagrundlaget mere samlet, sporbart og rapportklar.",
    seoTitle: "Reducer manuelt arbejde med ESG-rapportering | GoFreyra",
    seoDescription:
      "Gør ESG-rapportering mindre manuel. GoFreyra samler datagrundlag, kilder og dokumentation løbende — ikke kun ved rapporteringstidspunktet.",
    whatIs:
      "Manuelle ESG-rapporter er rapporter, der bygger på regneark, mails og gentagne forespørgsler om data — i stedet for et løbende, samlet datagrundlag.",
    whyHappens:
      "Mange ESG-processer bygger stadig på manuelle indsamlinger, regneark og gentagne opfølgninger. Det gør rapporteringen tung og øger risikoen for fejl, forsinkelser og uklare datakilder.",
    inPractice:
      "ESG-teamet bruger uger på at samle tal, validere dem og lave rapporten. Det giver mindre tid til faktisk at bruge data til beslutninger.",
    solution:
      "GoFreyra samler relevante miljø- og ESG-data i et dashboard, så status, datakilder og dokumentation kan følges løbende — ikke kun ved rapporteringstidspunktet.",
    modules: [M.dashboard, M.ledger, M.decisionsiq, M.smartconnect],
    sectors: [
      { slug: "industri", label: "Industri" },
      { slug: "forsyning", label: "Forsyning" },
      { slug: "ejendomme-og-byggeri", label: "Ejendomme og byggeri" },
      { slug: "raadgivere", label: "Rådgivere" },
    ],
    useCases: [
      { slug: "esg-dokumentation", label: "ESG-dokumentation" },
      { slug: "audit-trail", label: "Audit trail i ESG" },
    ],
    dataPages: [
      { slug: "co2", label: "CO₂ og klimaindikatorer" },
      { slug: "driftsdata", label: "Driftsdata" },
      { slug: "sensordata", label: "Sensordata" },
    ],
    faq: [
      { q: "Hvorfor er manuelle ESG-rapporter et problem?", a: "De bruger tid, øger fejlrisikoen og gør det svært at dokumentere kilder og metoder." },
      { q: "Kan GoFreyra reducere manuelt arbejde?", a: "Ja. Ved at samle data løbende og strukturere dem fra start, så rapporten ikke skal bygges fra bunden hver gang." },
      { q: "Kan platformen bruges før man har fuld datamodenhed?", a: "Ja. De fleste starter et sted — typisk med ét område, ét pilotforløb og udvalgte datakilder." },
      { q: "Hvordan håndteres rapporteksport?", a: "Data kan eksporteres struktureret og kobles til ESRS- og rapporteringsbehov." },
      { q: "Hvordan kobles data til ESG-rapportering?", a: "Via den fælles datamodel og audit trail, så rapporten trækker fra ét sporbart grundlag." },
    ],
  },
  {
    slug: "naturdata-uden-struktur",
    name: "Naturdata uden struktur",
    cardTeaser: "Naturdata mister værdi, når observationer, billeder og målinger ikke samles systematisk.",
    cardCta: "Læs om naturdata",
    h1: "Naturdata mister værdi, når den ikke struktureres",
    subheadline:
      "GoFreyra gør naturdata lettere at samle, følge og bruge i dokumentation.",
    seoTitle: "Strukturer naturdata til dokumentation og opfølgning | GoFreyra",
    seoDescription:
      "Saml feltdata, billeder, artsobservationer og målinger i én struktur. GoFreyra gør naturdata anvendelig i projektopfølgning og rapportering.",
    whatIs:
      "Naturdata er feltregistreringer, artsobservationer, sensormålinger, billeder, kort og rapporter, der beskriver naturens tilstand og udvikling.",
    whyHappens:
      "Naturprojekter skaber ofte mange forskellige typer data: feltregistreringer, billeder, artsobservationer, sensormålinger, kort og rapporter. Uden en fælles struktur bliver det svært at følge udviklingen over tid.",
    inPractice:
      "Vigtige observationer bliver liggende i mapper og PDF'er. Effekt og udvikling bliver svære at vise — både internt og over for finansierende parter.",
    solution:
      "GoFreyra samler naturdata i projektområder, kobler indikatorer til datakilder og viser udvikling i et dashboard. Det gør naturdata mere anvendelig i projektopfølgning, rapportering og dialog.",
    modules: [M.smartconnect, M.dashboard, M.decisionsiq, M.exchange],
    sectors: [
      { slug: "kommuner", label: "Kommuner" },
      { slug: "naturprojekter", label: "Naturprojekter" },
      { slug: "skovbrug", label: "Skovbrug" },
      { slug: "landbrug", label: "Landbrug" },
      { slug: "ngo-og-fonde", label: "NGO'er og fonde" },
    ],
    useCases: [
      { slug: "datadrevet-naturprojekt", label: "Datadrevet naturprojekt" },
      { slug: "biodiversitetsovervaagning", label: "Biodiversitetsovervågning" },
    ],
    dataPages: [
      { slug: "biodiversitet", label: "Biodiversitet" },
      { slug: "feltregistreringer", label: "Feltregistreringer" },
      { slug: "satellitdata", label: "Satellitdata" },
    ],
    faq: [
      { q: "Hvad er naturdata?", a: "Data om naturens tilstand og udvikling — typisk arter, levesteder, vand, jord og vegetation." },
      { q: "Hvordan kan naturdata struktureres?", a: "Ved at koble observationer til projektområder, indikatorer og fælles datamodel." },
      { q: "Kan man bruge feltregistreringer?", a: "Ja. Feltregistreringer er ofte rygraden i naturdata og kan struktureres direkte i platformen." },
      { q: "Kan sensorer tilføjes senere?", a: "Ja. Sensorer kan kobles på, når projektet er klar — uden at man skal starte forfra." },
      { q: "Hvordan kan naturdata bruges i ESG?", a: "Naturdata kan dokumentere biodiversitets- og naturindsatser, der indgår i ESG- og bæredygtighedsrapportering." },
    ],
  },
  {
    slug: "beslutninger-uden-realtidsdata",
    name: "Beslutninger uden realtidsdata",
    cardTeaser: "Når data først samles efter projektet, bliver det svært at handle i tide.",
    cardCta: "Læs om realtidsdata",
    h1: "Når data kommer for sent, kommer beslutningerne også for sent",
    subheadline:
      "GoFreyra hjælper organisationer med at følge miljødata og projektstatus tættere på virkeligheden.",
    seoTitle: "Realtidsdata til miljø, drift og naturprojekter | GoFreyra",
    seoDescription:
      "Følg miljødata, drift og projektstatus tættere på virkeligheden. GoFreyra kobler datakilder til dashboards og advarsler.",
    whatIs:
      "Realtidsdata er data, der opdateres løbende, så status og afvigelser kan ses tæt på det tidspunkt, hvor de opstår.",
    whyHappens:
      "Hvis data først samles, når rapporten skal skrives, bliver det svært at handle undervejs. Det gælder både for drift, naturprojekter, ESG og miljøopfølgning.",
    inPractice:
      "Afvigelser opdages for sent, projekter mister momentum, og dokumentationen bliver bagudrettet i stedet for styrende.",
    solution:
      "GoFreyra kobler relevante datakilder til dashboards og advarsler, så organisationen kan se status, afvigelser og dokumentationsbehov tidligere i processen.",
    modules: [M.smartconnect, M.decisionsiq, M.dashboard, M.ledger],
    sectors: [
      { slug: "forsyning", label: "Forsyning" },
      { slug: "industri", label: "Industri" },
      { slug: "kommuner", label: "Kommuner" },
      { slug: "naturprojekter", label: "Naturprojekter" },
      { slug: "energi", label: "Energi" },
    ],
    useCases: [
      { slug: "smartconnect-integration", label: "Datakilder samlet ét sted" },
      { slug: "datadrevet-naturprojekt", label: "Datadrevet naturprojekt" },
    ],
    dataPages: [
      { slug: "sensordata", label: "Sensordata" },
      { slug: "driftsdata", label: "Driftsdata" },
      { slug: "vejrdata", label: "Vejrdata" },
    ],
    faq: [
      { q: "Hvad er realtidsdata?", a: "Data, der opdateres løbende, så status og afvigelser bliver synlige tæt på det tidspunkt, hvor de opstår." },
      { q: "Skal data altid være live?", a: "Nej. Mange beslutninger er fint dækket af daglige eller ugentlige opdateringer." },
      { q: "Kan GoFreyra bruge periodiske data?", a: "Ja. Platformen kombinerer både løbende og periodiske kilder i samme overblik." },
      { q: "Hvordan hjælper AI med afvigelser?", a: "AI kan markere mønstre og udsving, der ellers ville drukne i datamængden." },
      { q: "Hvordan bruges realtidsdata i ESG?", a: "Realtidsdata gør ESG til en løbende styringsdisciplin frem for en kvartalsvis rapporteringsøvelse." },
    ],
  },
];

export const getProblem = (slug: string): ProblemPage | undefined =>
  PROBLEMS.find((p) => p.slug === (slug as ProblemSlug));
