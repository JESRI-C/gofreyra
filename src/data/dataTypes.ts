// Data-univers — pSEO-sider om de datatyper GoFreyra arbejder med.

export type DataSlug =
  | "biodiversitet"
  | "vandkvalitet"
  | "jorddata"
  | "co2"
  | "sensordata"
  | "satellitdata"
  | "dronedata"
  | "feltregistreringer"
  | "vejrdata"
  | "driftsdata";

export interface DataPage {
  slug: DataSlug;
  name: string;
  cardTeaser: string;
  h1: string;
  subheadline: string;
  seoTitle: string;
  seoDescription: string;
  whatIs: string;
  whyRelevant: string;
  howGoFreyra: string;
  sources: string[];
  sectors: { slug: string; label: string }[];
  useCases: { slug: string; label: string }[];
  problems: { slug: string; label: string }[];
  modules: string[];
  faq: { q: string; a: string }[];
}

const M = {
  smartconnect: "SmartConnect+",
  decisionsiq: "DecisionsIQ",
  ledger: "ESG Ledger",
  exchange: "Impact Exchange",
  dashboard: "GoFreyra Dashboard",
};

const baseFaq = (name: string) => [
  { q: `Hvad er ${name.toLowerCase()}?`, a: `${name} dækker data om miljø- og projektforhold, der bruges i opfølgning, dokumentation og ESG.` },
  { q: "Hvilke kilder kan GoFreyra bruge?", a: "Sensorer, satellitdata, dronedata, feltregistreringer, driftsdata, vejrdata og eksterne registre — alt efter hvad der er tilgængeligt." },
  { q: "Skal man have alle data fra start?", a: "Nej. De fleste starter med ét område og udvider gradvist." },
  { q: "Hvordan bruges data i dokumentation?", a: "Data kobles til projekter, indikatorer og audit trail, så de kan bruges direkte i ESG- og ledelsesrapportering." },
  { q: "Hvordan kommer man i gang?", a: "Typisk med et pilotforløb på 2-4 uger, hvor vi sammen vælger de første kilder og indikatorer." },
];

export const DATA_PAGES: DataPage[] = [
  {
    slug: "biodiversitet",
    name: "Biodiversitet",
    cardTeaser: "Følg arter, levesteder og naturudvikling med et struktureret datagrundlag.",
    h1: "Biodiversitetsdata i GoFreyra",
    subheadline: "Følg arter, levesteder og naturudvikling med et mere struktureret datagrundlag.",
    seoTitle: "Biodiversitetsdata — saml og dokumentér | GoFreyra",
    seoDescription: "Saml artsobservationer, habitatkortlægning, sensorer og satellitdata i ét fælles datagrundlag for biodiversitet.",
    whatIs: "Biodiversitetsdata beskriver arter, levesteder og naturens udvikling over tid.",
    whyRelevant: "Biodiversitet bliver et stadigt vigtigere område i ESG, naturprojekter og kommunal forvaltning. Uden et struktureret datagrundlag bliver effekten svær at vise.",
    howGoFreyra: "Biodiversitetsdata kan komme fra feltregistreringer, artsobservationer, habitatkortlægning, sensorer, akustiske målinger, kameraer, satellitdata og dronedata. GoFreyra samler data i projektområder og gør udviklingen lettere at følge over tid.",
    sources: ["Feltregistreringer", "Artsobservationer", "Akustiske sensorer", "Vildtkameraer", "Satellitdata", "Dronedata"],
    sectors: [
      { slug: "kommuner", label: "Kommuner" },
      { slug: "naturprojekter", label: "Naturprojekter" },
      { slug: "skovbrug", label: "Skovbrug" },
      { slug: "landbrug", label: "Landbrug" },
      { slug: "ngo-og-fonde", label: "NGO'er og fonde" },
    ],
    useCases: [
      { slug: "biodiversitetsovervaagning", label: "Biodiversitetsovervågning" },
      { slug: "naturgenopretning", label: "Datadrevet naturprojekt" },
    ],
    problems: [
      { slug: "naturdata-uden-struktur", label: "Naturdata uden struktur" },
      { slug: "fragmenterede-data", label: "Fragmenterede data" },
    ],
    modules: [M.smartconnect, M.dashboard, M.decisionsiq],
    faq: baseFaq("Biodiversitetsdata"),
  },
  {
    slug: "vandkvalitet",
    name: "Vandkvalitet",
    cardTeaser: "Saml målinger om vandmiljø, kvalitet, udvikling og dokumentation.",
    h1: "Vandkvalitetsdata i GoFreyra",
    subheadline: "Saml målinger om vandmiljø, kvalitet, udvikling og dokumentation.",
    seoTitle: "Vandkvalitetsdata til forsyning, kommuner og industri | GoFreyra",
    seoDescription: "Saml sensordata, prøver og feltmålinger om vandkvalitet i én platform — til drift, dokumentation og naturprojekter.",
    whatIs: "Vandkvalitetsdata beskriver tilstanden af vand i søer, vandløb, drikkevand, regnvand og spildevand.",
    whyRelevant: "Vandkvalitet er central i forsyning, naturprojekter, klimatilpasning, industri og miljøopfølgning.",
    howGoFreyra: "Data kan komme fra sensorer, feltmålinger, prøver, eksterne registre eller manuelle observationer. GoFreyra samler dem og kobler dem til indikatorer og dokumentation.",
    sources: ["Sensorer", "Feltmålinger", "Prøvedata", "Eksterne registre", "Manuelle observationer"],
    sectors: [
      { slug: "forsyning", label: "Forsyning" },
      { slug: "kommuner", label: "Kommuner" },
      { slug: "industri", label: "Industri" },
      { slug: "naturprojekter", label: "Naturprojekter" },
      { slug: "landbrug", label: "Landbrug" },
    ],
    useCases: [
      { slug: "miljoedata-dashboard", label: "Datakilder samlet ét sted" },
      { slug: "naturgenopretning", label: "Datadrevet naturprojekt" },
    ],
    problems: [
      { slug: "fragmenterede-data", label: "Fragmenterede data" },
      { slug: "beslutninger-uden-realtidsdata", label: "Beslutninger uden realtidsdata" },
    ],
    modules: [M.smartconnect, M.decisionsiq, M.dashboard],
    faq: baseFaq("Vandkvalitetsdata"),
  },
  {
    slug: "jorddata",
    name: "Jorddata",
    cardTeaser: "Følg jordforhold, fugtighed, struktur og miljøindikatorer over tid.",
    h1: "Jorddata i GoFreyra",
    subheadline: "Følg jordforhold, fugtighed, struktur og miljøindikatorer over tid.",
    seoTitle: "Jorddata til landbrug, skovbrug og naturprojekter | GoFreyra",
    seoDescription: "Saml jordprøver, sensorer og feltmålinger i én platform. GoFreyra dokumenterer arealbaserede indsatser.",
    whatIs: "Jorddata beskriver jordens fysiske, kemiske og biologiske egenskaber.",
    whyRelevant: "Jorddata er relevant for landbrug, naturprojekter, skovbrug, klimaprojekter og dokumentation af arealbaserede indsatser.",
    howGoFreyra: "GoFreyra kan samle jorddata fra sensorer, feltmålinger, prøver og eksterne datakilder — og koble dem til projektområder.",
    sources: ["Jordsensorer", "Feltmålinger", "Prøvedata", "Eksterne registre"],
    sectors: [
      { slug: "landbrug", label: "Landbrug" },
      { slug: "skovbrug", label: "Skovbrug" },
      { slug: "naturprojekter", label: "Naturprojekter" },
      { slug: "kommuner", label: "Kommuner" },
    ],
    useCases: [
      { slug: "naturgenopretning", label: "Datadrevet naturprojekt" },
    ],
    problems: [
      { slug: "naturdata-uden-struktur", label: "Naturdata uden struktur" },
      { slug: "fragmenterede-data", label: "Fragmenterede data" },
    ],
    modules: [M.smartconnect, M.dashboard, M.decisionsiq],
    faq: baseFaq("Jorddata"),
  },
  {
    slug: "co2",
    name: "CO₂ og klima",
    cardTeaser: "Skab overblik over klimaindikatorer, projektdata og dokumentationsbehov.",
    h1: "CO₂- og klimaindikatorer i GoFreyra",
    subheadline: "Skab bedre overblik over klimaindikatorer, projektdata og dokumentationsbehov.",
    seoTitle: "CO₂- og klimadata til ESG og projekter | GoFreyra",
    seoDescription: "Saml CO₂-relaterede indikatorer og koble dem til datakilder, projekter og dokumentationsstatus.",
    whatIs: "CO₂- og klimaindikatorer beskriver udledninger, optag og klimarelaterede effekter knyttet til drift, arealer og projekter.",
    whyRelevant: "CO₂-data er centralt i ESG-rapportering, klimaprojekter, naturtiltag og strategiske klimaindsatser.",
    howGoFreyra: "GoFreyra hjælper med at samle CO₂-relaterede indikatorer og koble dem til datakilder, projekter og dokumentationsstatus.",
    sources: ["Driftsdata", "Energiforbrug", "Eksterne registre", "Projektregistreringer"],
    sectors: [
      { slug: "industri", label: "Industri" },
      { slug: "energi", label: "Energi" },
      { slug: "forsyning", label: "Forsyning" },
      { slug: "landbrug", label: "Landbrug" },
      { slug: "skovbrug", label: "Skovbrug" },
    ],
    useCases: [
      { slug: "esg-dokumentation", label: "ESG-dokumentation" },
    ],
    problems: [
      { slug: "esg-dokumentation", label: "ESG-dokumentation" },
      { slug: "manuelle-esg-rapporter", label: "Manuelle ESG-rapporter" },
    ],
    modules: [M.ledger, M.dashboard, M.decisionsiq, M.smartconnect],
    faq: baseFaq("CO₂-data"),
  },
  {
    slug: "sensordata",
    name: "Sensordata",
    cardTeaser: "Forbind IoT-sensorer og miljømålinger til dashboards og dokumentation.",
    h1: "Sensordata i GoFreyra",
    subheadline: "Forbind IoT-sensorer og miljømålinger til dashboards, analyse og dokumentation.",
    seoTitle: "Sensordata og IoT til miljø og drift | GoFreyra",
    seoDescription: "Forbind IoT-sensorer til dashboards, analyse og dokumentation. SmartConnect+ samler og strukturerer sensorinput.",
    whatIs: "Sensordata er løbende målinger fra IoT-sensorer i felten, drift, bygninger eller infrastruktur.",
    whyRelevant: "Sensordata kan give løbende indsigt i miljøforhold, drift, vand, jord, klima og projektudvikling.",
    howGoFreyra: "SmartConnect+ kan bruges som datalag til at samle og strukturere sensorinput og gøre dem tilgængelige i dashboards og dokumentation.",
    sources: ["IoT-sensorer", "Miljøsensorer", "Driftssensorer", "Eksterne API'er"],
    sectors: [
      { slug: "industri", label: "Industri" },
      { slug: "forsyning", label: "Forsyning" },
      { slug: "kommuner", label: "Kommuner" },
      { slug: "naturprojekter", label: "Naturprojekter" },
    ],
    useCases: [
      { slug: "miljoedata-dashboard", label: "Datakilder samlet ét sted" },
    ],
    problems: [
      { slug: "beslutninger-uden-realtidsdata", label: "Beslutninger uden realtidsdata" },
      { slug: "fragmenterede-data", label: "Fragmenterede data" },
    ],
    modules: [M.smartconnect, M.decisionsiq, M.dashboard],
    faq: baseFaq("Sensordata"),
  },
  {
    slug: "satellitdata",
    name: "Satellitdata",
    cardTeaser: "Brug satellitdata til at følge arealer, vegetation, vand og miljøudvikling.",
    h1: "Satellitdata i GoFreyra",
    subheadline: "Brug satellitdata til at følge arealer, vegetation, vand og miljøudvikling over tid.",
    seoTitle: "Satellitdata til natur, areal og miljø | GoFreyra",
    seoDescription: "Brug satellitdata som del af et samlet datagrundlag sammen med feltdata, sensorer og projektdata.",
    whatIs: "Satellitdata er observationer af jordens overflade fra satellitter, ofte brugt til arealer, vegetation og vand.",
    whyRelevant: "Satellitdata kan give bredt overblik over landskaber, arealanvendelse, vegetation og ændringer over tid.",
    howGoFreyra: "GoFreyra kan bruge satellitdata som en del af et samlet datagrundlag sammen med feltdata, sensorer og projektdata.",
    sources: ["Sentinel", "Landsat", "Kommercielle satellitkilder"],
    sectors: [
      { slug: "landbrug", label: "Landbrug" },
      { slug: "skovbrug", label: "Skovbrug" },
      { slug: "naturprojekter", label: "Naturprojekter" },
      { slug: "kommuner", label: "Kommuner" },
    ],
    useCases: [
      { slug: "naturgenopretning", label: "Datadrevet naturprojekt" },
    ],
    problems: [
      { slug: "naturdata-uden-struktur", label: "Naturdata uden struktur" },
    ],
    modules: [M.smartconnect, M.dashboard, M.decisionsiq],
    faq: baseFaq("Satellitdata"),
  },
  {
    slug: "dronedata",
    name: "Dronedata",
    cardTeaser: "Højopløselige billeder og kortlægning til natur, miljø og projektopfølgning.",
    h1: "Dronedata i GoFreyra",
    subheadline: "Brug højopløselige billeder og kortlægning til natur, miljø og projektopfølgning.",
    seoTitle: "Dronedata til naturprojekter og miljøopfølgning | GoFreyra",
    seoDescription: "Brug dronedata til detaljerede billeder af projektområder, naturudvikling, vegetation og vandforhold.",
    whatIs: "Dronedata er billeder, video og 3D-kortlægning indsamlet med droner.",
    whyRelevant: "Dronedata kan give detaljerede billeder af projektområder, naturudvikling, vegetation, vandforhold og ændringer i landskabet.",
    howGoFreyra: "GoFreyra kan koble dronedata med andre datakilder og dokumentationsflows i samme projektområde.",
    sources: ["RGB-billeder", "Multispektral", "Termisk", "LiDAR"],
    sectors: [
      { slug: "naturprojekter", label: "Naturprojekter" },
      { slug: "skovbrug", label: "Skovbrug" },
      { slug: "landbrug", label: "Landbrug" },
      { slug: "kommuner", label: "Kommuner" },
    ],
    useCases: [
      { slug: "naturgenopretning", label: "Datadrevet naturprojekt" },
    ],
    problems: [
      { slug: "naturdata-uden-struktur", label: "Naturdata uden struktur" },
    ],
    modules: [M.smartconnect, M.dashboard],
    faq: baseFaq("Dronedata"),
  },
  {
    slug: "feltregistreringer",
    name: "Feltregistreringer",
    cardTeaser: "Gør manuelle observationer mere strukturerede og brugbare i dokumentation.",
    h1: "Feltregistreringer i GoFreyra",
    subheadline: "Gør manuelle observationer mere strukturerede og brugbare i dokumentation.",
    seoTitle: "Feltregistreringer og naturdata | GoFreyra",
    seoDescription: "Strukturér feltregistreringer, billeder, noter og målinger til ESG- og projektdokumentation.",
    whatIs: "Feltregistreringer er manuelle observationer fra felten — typisk noter, billeder, målinger og artsobservationer.",
    whyRelevant: "Feltregistreringer er ofte en vigtig del af natur-, miljø- og ESG-arbejde — særligt i pilotfasen, før sensorer er på plads.",
    howGoFreyra: "GoFreyra hjælper med at strukturere observationer, billeder, noter, målinger og projektdokumentation i én datamodel.",
    sources: ["Feltapps", "Manuelle noter", "Billeder", "Mobile prøver"],
    sectors: [
      { slug: "naturprojekter", label: "Naturprojekter" },
      { slug: "kommuner", label: "Kommuner" },
      { slug: "skovbrug", label: "Skovbrug" },
      { slug: "ngo-og-fonde", label: "NGO'er og fonde" },
    ],
    useCases: [
      { slug: "rapportklar-dokumentation", label: "Feltdata til rapportklar dokumentation" },
    ],
    problems: [
      { slug: "naturdata-uden-struktur", label: "Naturdata uden struktur" },
      { slug: "manglende-audit-trail", label: "Manglende audit trail" },
    ],
    modules: [M.smartconnect, M.ledger, M.dashboard],
    faq: baseFaq("Feltregistreringer"),
  },
  {
    slug: "vejrdata",
    name: "Vejrdata",
    cardTeaser: "Brug vejrdata som kontekst for miljødata, naturudvikling og projektstatus.",
    h1: "Vejrdata i GoFreyra",
    subheadline: "Brug vejrdata som kontekst for miljødata, naturudvikling og projektstatus.",
    seoTitle: "Vejrdata som kontekst for miljø og drift | GoFreyra",
    seoDescription: "Kobl vejrdata med andre datakilder og se sammenhænge over tid i GoFreyra.",
    whatIs: "Vejrdata er målinger og prognoser om temperatur, nedbør, vind og andre meteorologiske forhold.",
    whyRelevant: "Vejrdata kan give vigtig kontekst for vand, jord, biodiversitet, drift og klimaindsatser.",
    howGoFreyra: "GoFreyra kan koble vejrdata med andre datakilder og vise sammenhænge over tid.",
    sources: ["DMI", "Lokale vejrstationer", "Eksterne API'er"],
    sectors: [
      { slug: "landbrug", label: "Landbrug" },
      { slug: "forsyning", label: "Forsyning" },
      { slug: "naturprojekter", label: "Naturprojekter" },
      { slug: "kommuner", label: "Kommuner" },
    ],
    useCases: [
      { slug: "miljoedata-dashboard", label: "Datakilder samlet ét sted" },
    ],
    problems: [
      { slug: "beslutninger-uden-realtidsdata", label: "Beslutninger uden realtidsdata" },
    ],
    modules: [M.smartconnect, M.decisionsiq, M.dashboard],
    faq: baseFaq("Vejrdata"),
  },
  {
    slug: "driftsdata",
    name: "Driftsdata",
    cardTeaser: "Kobl drift, ressourceforbrug og ESG-dokumentation i én visning.",
    h1: "Driftsdata i GoFreyra",
    subheadline: "Kobl drift, ressourceforbrug og ESG-dokumentation i én samlet visning.",
    seoTitle: "Driftsdata og ESG-dokumentation | GoFreyra",
    seoDescription: "Forbind driftsnære data med ESG-dokumentation og ledelsesrapportering.",
    whatIs: "Driftsdata er data fra drift, produktion, energi, vand, bygninger, forsyning og logistik.",
    whyRelevant: "Driftsdata er ofte allerede tilgængelig — men bruges sjældent direkte i ESG-dokumentation.",
    howGoFreyra: "GoFreyra hjælper med at forbinde driftsnære data med ESG-dokumentation og ledelsesrapportering i ét overblik.",
    sources: ["ERP-systemer", "Energimålere", "Produktionsdata", "Bygningsdata"],
    sectors: [
      { slug: "industri", label: "Industri" },
      { slug: "forsyning", label: "Forsyning" },
      { slug: "ejendomme-og-byggeri", label: "Ejendomme og byggeri" },
      { slug: "energi", label: "Energi" },
    ],
    useCases: [
      { slug: "esg-dokumentation", label: "ESG-dokumentation" },
    ],
    problems: [
      { slug: "esg-dokumentation", label: "ESG-dokumentation" },
      { slug: "manuelle-esg-rapporter", label: "Manuelle ESG-rapporter" },
    ],
    modules: [M.smartconnect, M.ledger, M.dashboard, M.decisionsiq],
    faq: baseFaq("Driftsdata"),
  },
];

export const getDataPage = (slug: string): DataPage | undefined =>
  DATA_PAGES.find((d) => d.slug === (slug as DataSlug));
