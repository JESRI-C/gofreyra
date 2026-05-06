// pSEO content templates for GoFreyra.
// Keep copy concrete, kommerciel og dansk — undgå floskler.

export type PseoModule =
  | "SmartConnect+"
  | "DecisionsIQ"
  | "ESG Ledger"
  | "Impact Exchange"
  | "GoFreyra Dashboard";

export interface PseoTemplate {
  slug: string;
  /** Short label shown as eyebrow. */
  eyebrow: string;
  /** SEO title (under 60 chars when muligt). */
  seoTitle: string;
  /** Meta description (under 160 chars). */
  seoDescription: string;
  /** H1. */
  h1: string;
  /** Kort intro. */
  intro: string;
  /** Konkrete problemer. */
  problems: string[];
  /** Hvordan GoFreyra løser det. */
  solution: string;
  /** Konkrete outcomes. */
  outcomes: { title: string; desc: string }[];
  /** Relevante moduler. */
  modules: PseoModule[];
  /** FAQ. */
  faq: { q: string; a: string }[];
}

export const SECTOR_TEMPLATES: PseoTemplate[] = [
  {
    slug: "vandselskaber",
    eyebrow: "Branche · Vand & forsyning",
    seoTitle: "GoFreyra til vandselskaber — driftsdata, ESG og dokumentation",
    seoDescription:
      "Saml driftsdata fra vand- og spildevandsanlæg, kobl dem til ESG-rapportering og få audit-klar dokumentation. Bygget til danske forsyningsselskaber.",
    h1: "GoFreyra til vandselskaber og spildevandsforsyninger",
    intro:
      "Vand- og spildevandsselskaber skal dokumentere stadigt mere — udledninger, energiforbrug, klimatilpasning og biodiversitet. GoFreyra samler driftsdata, miljømålinger og ESG i ét datagrundlag.",
    problems: [
      "Udlednings- og energidata ligger i SCADA, regneark og rapporter",
      "Klimatilpasningsprojekter er svære at følge over tid",
      "ESG-rapporten bygger på estimater frem for målinger",
      "Manuelle indrapporteringer til myndigheder tager uger",
    ],
    solution:
      "SmartConnect+ kobler SCADA, sensorer og målere ind i platformen. DecisionsIQ analyserer drift og udledning og finder tidlige afvigelser. ESG Ledger lægger audit trail på hvert datapunkt, så rapporteringen til myndigheder, ESG og bestyrelse hviler på sporbar data.",
    outcomes: [
      { title: "Drift og ESG i samme datalag", desc: "Udledninger, energi og vandkvalitet kobles til ESG-indikatorer." },
      { title: "Sporbar dokumentation", desc: "Hver måleværdi har kilde, tidsstempel og ændringshistorik." },
      { title: "Tidlig risikoindsigt", desc: "AI finder unormale mønstre i udledning, kvalitet og forbrug." },
      { title: "Mindre manuelt arbejde", desc: "Strukturerede flows fra måling til rapport." },
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    faq: [
      {
        q: "Kan GoFreyra integrere med vores SCADA?",
        a: "Ja. SmartConnect+ understøtter integration med eksisterende SCADA-, IoT- og driftssystemer via standardprotokoller og API.",
      },
      {
        q: "Erstatter GoFreyra vores rapporteringsværktøj?",
        a: "Nej. GoFreyra leverer det datagrundlag og den audit trail, jeres rapporteringsværktøj mangler.",
      },
    ],
  },
  {
    slug: "energiselskaber",
    eyebrow: "Branche · Energi & varme",
    seoTitle: "GoFreyra til energi- og varmeselskaber — ESG og driftsdata",
    seoDescription:
      "Træk ESG-tal direkte ud af energiproduktion og distribution. Audit-klar dokumentation, risikoindsigt og rapportering til CSRD og myndigheder.",
    h1: "GoFreyra til energi- og varmeselskaber",
    intro:
      "Energi- og varmeselskaber sidder på enorme mængder driftsdata — men ofte ikke i et format, der kan bruges til ESG-rapportering. GoFreyra forbinder produktion, distribution og emissionsdata med dokumentationen.",
    problems: [
      "Emissioner beregnes via faktorer i stedet for målte data",
      "Drifts- og ESG-team arbejder i adskilte systemer",
      "Risikoindsigt på distribution og energimix er fragmenteret",
      "CSRD-rapportering kræver dokumentation, der ikke findes i ERP",
    ],
    solution:
      "SmartConnect+ kobler målere, drift og distribution sammen. DecisionsIQ analyserer mønstre og risici. ESG Ledger gør hvert datapunkt sporbart og rapporteringsklart efter ESRS.",
    outcomes: [
      { title: "Målte emissioner", desc: "Reducer afhængighed af generiske emissionsfaktorer." },
      { title: "Drift kobles til ESG", desc: "Energimix, distribution og forbrug i samme datamodel." },
      { title: "Risikoindsigt", desc: "AI flagger afvigelser i produktion og distribution tidligt." },
      { title: "CSRD-klar audit trail", desc: "ESRS-mappet datalag med komplet sporbarhed." },
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    faq: [
      {
        q: "Hvilke datakilder kan GoFreyra bruge i energisektoren?",
        a: "Målere, SCADA, drifts- og distributionssystemer, samt eksterne kilder som DMI, Energinet og Eurostat.",
      },
      {
        q: "Er platformen klar til CSRD?",
        a: "Ja. ESG Ledger er bygget med en datamodel, der mapper til ESRS-temaer og rapporteringskrav.",
      },
    ],
  },
  {
    slug: "landbrug",
    eyebrow: "Branche · Landbrug & arealdrift",
    seoTitle: "GoFreyra til landbrug og arealdrift — natur, jord og ESG",
    seoDescription:
      "Dokumentér jordkvalitet, biodiversitet og arealdrift med felt-, drone- og satellitdata. Klar til ESG-rapportering og fremtidige naturordninger.",
    h1: "GoFreyra til landbrug og arealdrift",
    intro:
      "Landbrug og lodsejere mødes med stigende krav fra aftagere, banker og myndigheder om at dokumentere jordkvalitet, biodiversitet og driftspåvirkning. GoFreyra gør dokumentationen praktisk.",
    problems: [
      "Driftsdata findes i markprogrammer, men kobles ikke til natur- eller ESG-data",
      "Biodiversitetsindsatser er svære at vise effekten af",
      "Aftagere efterspørger dokumentation, der ikke findes",
      "Naturordninger kræver baseline og opfølgning over tid",
    ],
    solution:
      "SmartConnect+ samler markdata, sensorer, drone og satellit. DecisionsIQ analyserer udvikling i jord, vegetation og biodiversitet. ESG Ledger og Impact Exchange gør indsatsen verificerbar over for aftagere og fremtidige naturmarkeder.",
    outcomes: [
      { title: "Jord-, vand- og biodiversitetsdata", desc: "Strukturerede data fra felt, sensor, drone og Sentinel-2." },
      { title: "Verificerbar udvikling", desc: "Følg effekten af tiltag over tid med sporbart bevisgrundlag." },
      { title: "Aftager-klar dokumentation", desc: "Pakker data til mejerier, kornhandlere og banker." },
      { title: "Klar til naturordninger", desc: "Forberedt til biodiversitets- og kulstofmarkeder." },
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    faq: [
      {
        q: "Skal vi bruge sensorer i marken?",
        a: "Ikke nødvendigvis. GoFreyra kan starte med satellit-, drone- og driftsdata og udvides med sensorer, hvis det giver mening.",
      },
      {
        q: "Kan platformen bruges til naturordninger?",
        a: "Ja. Impact Exchange er forberedt til biodiversitets- og kulstofordninger og kan dokumentere baseline og udvikling.",
      },
    ],
  },
  {
    slug: "byggebranchen",
    eyebrow: "Branche · Byggeri & fast ejendom",
    seoTitle: "GoFreyra til bygge- og ejendomsbranchen — ESG og data",
    seoDescription:
      "Dokumentér energi-, materiale- og emissionsdata fra projekter og porteføljer. Audit-klar rapportering til CSRD, taksonomi og långivere.",
    h1: "GoFreyra til byggeri og fast ejendom",
    intro:
      "Bygge- og ejendomsselskaber skal kunne dokumentere energi, materialer og emissioner — både i projekter og over hele porteføljen. GoFreyra samler kilderne og leverer audit trail.",
    problems: [
      "Energi- og emissionsdata spredes på tværs af projekter og rådgivere",
      "Taksonomi- og CSRD-krav øger dokumentationsbyrden",
      "Långivere efterspørger sporbar data",
      "Ejendomsporteføljer mangler ensartet dataopsamling",
    ],
    solution:
      "SmartConnect+ samler energimålinger, drift og leverandørdata. ESG Ledger struktur­erer data efter ESRS og taksonomi-krav. GoFreyra Dashboard giver ledelse og långivere et fælles billede.",
    outcomes: [
      { title: "Projekt- og porteføljedata", desc: "Samme datamodel på tværs af bygninger og projekter." },
      { title: "Taksonomi- og CSRD-mapping", desc: "Datapunkter struktureret til EU-rapportering." },
      { title: "Långiver-klar dokumentation", desc: "Sporbart bevisgrundlag for grøn finansiering." },
      { title: "Drift- og asset-overblik", desc: "Følg energi, vand og emissioner per asset." },
    ],
    modules: ["SmartConnect+", "ESG Ledger", "DecisionsIQ", "GoFreyra Dashboard"],
    faq: [
      {
        q: "Kan vi starte med én ejendom?",
        a: "Ja. Pilot kan startes på ét projekt eller én ejendom og udvides til hele porteføljen.",
      },
      {
        q: "Understøtter GoFreyra EU-taksonomien?",
        a: "Ja. ESG Ledger kan strukturere data efter EU-taksonomi og CSRD/ESRS.",
      },
    ],
  },
];

export const PROBLEM_TEMPLATES: PseoTemplate[] = [
  {
    slug: "csrd-dokumentation",
    eyebrow: "Problem · CSRD",
    seoTitle: "CSRD-dokumentation i praksis — sådan bygger I bevisbyrden",
    seoDescription:
      "Sådan bygger I et CSRD-klart datagrundlag med audit trail, ESRS-mapping og sporbar dokumentation. Praktisk guide og platform i ét.",
    h1: "CSRD-dokumentation: fra estimater til sporbart datagrundlag",
    intro:
      "CSRD øger kravet til både omfang og kvalitet af ESG-data. Det er ikke nok at fortælle — det skal kunne dokumenteres og revideres.",
    problems: [
      "Datagrundlaget er fragmenteret på tværs af systemer",
      "Audit trail er sjælden komplet",
      "ESRS-mapping laves manuelt i regneark",
      "Revisorer kan ikke spore tal tilbage til kilden",
    ],
    solution:
      "ESG Ledger lægger kilde, tidsstempel og ændringshistorik på hvert datapunkt og mapper data til ESRS. SmartConnect+ samler kilderne automatisk. DecisionsIQ tjekker datakvalitet og finder huller.",
    outcomes: [
      { title: "ESRS-mapping ud af kassen", desc: "Datapunkter struktureret efter ESRS-temaer." },
      { title: "Komplet audit trail", desc: "Hvert tal kan spores til den oprindelige kilde." },
      { title: "Hurtigere rapportering", desc: "Mindre manuelt arbejde i kvartals- og årshjul." },
      { title: "Stærkere revisionssvar", desc: "Forsvarlig dokumentation, ikke estimater." },
    ],
    modules: ["ESG Ledger", "SmartConnect+", "DecisionsIQ", "GoFreyra Dashboard"],
    faq: [
      { q: "Er GoFreyra et CSRD-rapporteringsværktøj?", a: "Nej. GoFreyra leverer datagrundlaget og audit trail, som rapporteringsværktøjerne mangler." },
      { q: "Kan I starte med ét ESRS-tema?", a: "Ja. Mange piloter starter med E1 (klima) eller E4 (biodiversitet) og udvides derfra." },
    ],
  },
  {
    slug: "biodiversitetsovervaagning",
    eyebrow: "Problem · Biodiversitet",
    seoTitle: "Biodiversitetsovervågning — fra observation til dokumentation",
    seoDescription:
      "Mål biodiversitet med felt-, drone- og satellitdata. Følg udviklingen over tid og pak dokumentationen til myndigheder, aftagere og naturmarkeder.",
    h1: "Biodiversitetsovervågning med data fra virkeligheden",
    intro:
      "Biodiversitet kan kun styres, hvis den måles. GoFreyra kombinerer feltobservationer, drone, satellit og officielle datakilder til en strukturer­et baseline og udvikling over tid.",
    problems: [
      "Observationer ligger i notesbøger og PDF'er",
      "Det er svært at vise reel udvikling over tid",
      "Lodsejere, rådgivere og myndigheder arbejder i adskilte systemer",
      "Impact-claims mangler troværdighed",
    ],
    solution:
      "SmartConnect+ samler felt-, drone- og satellitdata samt offentlige kilder som GBIF, Natura 2000 og DMI. DecisionsIQ analyserer NDVI, habitatudvikling og artsindikatorer. Impact Exchange pakker bevisgrundlaget.",
    outcomes: [
      { title: "Strukturer­ede naturdata", desc: "Felt, drone, satellit og GBIF i samme model." },
      { title: "Udvikling over tid", desc: "Se reel udvikling, ikke øjebliksbilleder." },
      { title: "Verificerbar baseline", desc: "Bevisgrundlag projektet kan bygges op omkring." },
      { title: "Klar til naturmarkeder", desc: "Forberedt til biodiversitets- og kulstofordninger." },
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    faq: [
      { q: "Hvilke arter kan I følge?", a: "Vi kombinerer åbne kilder som GBIF og DanBIF med jeres egne feltobservationer. Det er ikke artsbegrænset." },
      { q: "Skal vi bruge drone?", a: "Nej, men det kan styrke dokumentationen markant. Satellit alene rækker langt." },
    ],
  },
  {
    slug: "esg-data-fra-drift",
    eyebrow: "Problem · Drift & ESG",
    seoTitle: "ESG-tal direkte fra driften — uden regneark",
    seoDescription:
      "Forbind drifts-, energi- og forsyningsdata med ESG-rapporteringen. Færre manuelle processer, stærkere audit trail og bedre risikoindsigt.",
    h1: "ESG-data direkte fra driften",
    intro:
      "ESG-rapporten skal kunne følge tilbage til driften. Når data lever i SCADA, ERP og regneark, bliver bevisbyrden tung og rapporten langsom.",
    problems: [
      "Driftsdata og ESG-data er adskilte verdener",
      "Energi-, vand- og emissionsdata er fragmenterede",
      "Manuelle flows skaber forsinkelser og fejl",
      "Risikostyring mangler datadrevet grundlag",
    ],
    solution:
      "SmartConnect+ kobler drifts­systemer ind i platformen. DecisionsIQ finder mønstre og afvigelser. ESG Ledger lægger audit trail på hvert datapunkt.",
    outcomes: [
      { title: "Drift som ESG-kilde", desc: "Energi, vand og emissioner i samme datamodel." },
      { title: "Bedre risikoindsigt", desc: "AI flagger afvigelser tidligt." },
      { title: "Audit-klar dokumentation", desc: "Sporbart datagrundlag for ESG og compliance." },
      { title: "Mindre manuelt arbejde", desc: "Strukturerede flows fra måling til rapport." },
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    faq: [
      { q: "Hvilke driftssystemer kan I integrere med?", a: "SCADA, IoT-platforme, ERP og almindelige driftsdatabaser via API og standardprotokoller." },
      { q: "Hvor hurtigt kan vi se data i platformen?", a: "Pilotopsætning er typisk klar på 2-4 uger." },
    ],
  },
];

export const ALL_PSEO = [...SECTOR_TEMPLATES, ...PROBLEM_TEMPLATES];

// =====================================================================
// GEO / Glossary — definitioner skrevet til AI-søgemaskiner og mennesker
// =====================================================================

export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDefinition: string; // 1-2 sætninger, klar definition
  longExplanation: string;
  related: string[]; // slugs
  faq: { q: string; a: string }[];
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "esg-dokumentation",
    term: "ESG-dokumentation",
    shortDefinition:
      "ESG-dokumentation er det sporbare datagrundlag bag en virksomheds ESG-rapportering — kilder, tidsstempler, beregninger og ændringshistorik, der gør tallene revisionsklare.",
    longExplanation:
      "Hvor ESG-rapportering er det færdige output (fx en CSRD-rapport), er ESG-dokumentation selve fundamentet. Det dækker datakilder, audit trail, ESRS-mapping og kontroller, der gør det muligt at bevise, hvor hvert tal stammer fra. Uden ordentlig dokumentation kan rapporten ikke forsvares over for revisorer, banker eller myndigheder.",
    related: ["esg-rapportering", "csrd", "audit-trail", "miljoedata"],
    faq: [
      {
        q: "Hvad er forskellen på ESG-rapportering og ESG-dokumentation?",
        a: "ESG-rapportering er det færdige output — fx en årsrapport eller CSRD-rapport. ESG-dokumentation er det underliggende, sporbare datagrundlag, der gør rapporten revisionsklar.",
      },
      {
        q: "Hvorfor er ESG-dokumentation vigtig?",
        a: "Fordi revisorer, banker og myndigheder i stigende grad efterspørger sporbar data, ikke estimater. Mangelfuld dokumentation kan betyde forbehold i revisionen og risiko for greenwashing-kritik.",
      },
    ],
  },
  {
    slug: "esg-rapportering",
    term: "ESG-rapportering",
    shortDefinition:
      "ESG-rapportering er den strukturerede afrapportering af en virksomheds påvirkning på miljø, sociale forhold og ledelse — typisk efter rammeværk som CSRD/ESRS, GRI eller TCFD.",
    longExplanation:
      "ESG-rapportering omfatter både kvantitative datapunkter (emissioner, energi, vand, biodiversitet) og kvalitative beskrivelser. CSRD og ESRS gør rapporteringen lovpligtig for et stort antal danske virksomheder fra 2024-2026 og kræver, at data kan revideres.",
    related: ["esg-dokumentation", "csrd", "miljoedata"],
    faq: [
      {
        q: "Hvilke rammeværk bruges til ESG-rapportering?",
        a: "De mest brugte er CSRD/ESRS, GRI, TCFD og SASB. CSRD er obligatorisk i EU og bygger på ESRS-standarderne.",
      },
    ],
  },
  {
    slug: "miljoedata",
    term: "Miljødata",
    shortDefinition:
      "Miljødata er målte data om naturen og det fysiske miljø — fx vand, luft, jord, biodiversitet, vejr og arealanvendelse — typisk fra sensorer, drone, satellit eller feltobservationer.",
    longExplanation:
      "Miljødata bruges som grundlag for ESG-dokumentation, naturprojekter, forskning og myndighedsrapportering. De adskiller sig fra estimater og emissionsfaktorer ved at være målt i virkeligheden.",
    related: ["esg-data", "biodiversitetsovervaagning", "sensordata"],
    faq: [
      {
        q: "Hvad er forskellen på ESG-data og miljødata?",
        a: "Miljødata er målinger af det fysiske miljø (vand, luft, jord, biodiversitet). ESG-data er bredere og dækker også sociale og ledelsesmæssige forhold. Miljødata er ofte den mest objektive del af ESG-grundlaget.",
      },
      {
        q: "Hvordan bruger man miljødata i ESG?",
        a: "Miljødata bruges til at dokumentere klima- (E1), vand- (E3), biodiversitets- (E4) og forureningsindikatorer (E2) i ESRS. De erstatter estimater med målte værdier og gør rapporteringen mere troværdig.",
      },
    ],
  },
  {
    slug: "esg-data",
    term: "ESG-data",
    shortDefinition:
      "ESG-data er kvantitative og kvalitative data om en virksomheds påvirkning på miljø (E), sociale forhold (S) og ledelse (G) — brugt til både intern styring og ekstern rapportering.",
    longExplanation:
      "ESG-data omfatter alt fra emissioner og energiforbrug til medarbejdertrivsel, leverandørkæde og bestyrelsessammensætning. Kvaliteten af ESG-data afgør, om rapporteringen kan revideres og forsvares.",
    related: ["miljoedata", "esg-rapportering", "csrd"],
    faq: [],
  },
  {
    slug: "biodiversitetsovervaagning",
    term: "Biodiversitetsovervågning",
    shortDefinition:
      "Biodiversitetsovervågning er systematisk indsamling og analyse af data om plante- og dyreliv samt levesteder — typisk via felt, drone, satellit og åbne datakilder som GBIF.",
    longExplanation:
      "Formålet er at etablere en baseline og følge udviklingen over tid, så naturindsatser kan dokumenteres og styres. Det bruges af kommuner, naturprojekter, lodsejere og virksomheder med ESRS E4-rapporteringspligt.",
    related: ["miljoedata", "naturprojekt", "impact"],
    faq: [
      {
        q: "Hvad er biodiversitetsovervågning?",
        a: "Det er systematisk måling af biodiversitet — arter, levesteder og økosystemfunktioner — typisk over tid, så udvikling og effekt af indsatser kan dokumenteres.",
      },
      {
        q: "Hvilke datakilder bruges til biodiversitetsovervågning?",
        a: "Feltobservationer, drone-ortofotos, satellitdata (Sentinel-2, Satlas), åbne kilder som GBIF og Natura 2000 samt sensorer.",
      },
    ],
  },
  {
    slug: "audit-trail",
    term: "Audit trail",
    shortDefinition:
      "En audit trail er en sporbar historik over alle ændringer, kilder og godkendelser bag et datapunkt — afgørende for, at en ESG-rapport kan revideres.",
    longExplanation:
      "I praksis betyder det, at hver måleværdi har en kilde, et tidsstempel og en ændringshistorik. Det er det, revisorer beder om, når de skal verificere ESG-tal.",
    related: ["esg-dokumentation", "csrd"],
    faq: [],
  },
  {
    slug: "csrd",
    term: "CSRD",
    shortDefinition:
      "CSRD (Corporate Sustainability Reporting Directive) er EU's bæredygtighedsrapporteringsdirektiv, der gør ESG-rapportering efter ESRS-standarderne lovpligtig og revisionspligtig.",
    longExplanation:
      "CSRD træder i kraft i bølger fra 2024 og dækker tusindvis af danske virksomheder. Det stiller krav om dobbelt væsentlighed, sporbar data og uafhængig revision af ESG-rapporten.",
    related: ["esg-rapportering", "esg-dokumentation"],
    faq: [
      {
        q: "Hvornår gælder CSRD for vores virksomhed?",
        a: "CSRD indfases fra 2024 til 2028 afhængigt af virksomhedsstørrelse. Store børsnoterede selskaber er først, herefter store virksomheder generelt og derefter børsnoterede SMV'er.",
      },
    ],
  },
  {
    slug: "sensordata",
    term: "Sensordata",
    shortDefinition:
      "Sensordata er målinger fra fysiske sensorer i felten eller i drift — fx vandkvalitet, energiforbrug, temperatur, jordfugt eller luftkvalitet.",
    longExplanation:
      "Sensordata leverer høj-frekvent og objektiv måling, der kan bruges som bevisgrundlag i både ESG-dokumentation og naturovervågning.",
    related: ["miljoedata", "esg-dokumentation"],
    faq: [
      {
        q: "Hvordan kan sensordata bruges i ESG-dokumentation?",
        a: "Sensordata erstatter estimater med målte værdier, fx for energi, vand, udledninger og luftkvalitet. Når sensordata kobles til en audit trail, kan det bruges direkte som bevis i ESG-rapporten.",
      },
    ],
  },
  {
    slug: "ai-i-baeredygtighed",
    term: "AI i bæredygtighedsrapportering",
    shortDefinition:
      "AI bruges i bæredygtighedsrapportering til at finde mønstre, afvigelser og risici i miljø- og driftsdata — og til at automatisere datakvalitetstjek.",
    longExplanation:
      "I GoFreyra bruges AI (DecisionsIQ) til at flage afvigelser, foreslå handlinger og tjekke datakvalitet. Hver anbefaling er knyttet til de underliggende datapunkter, så analysen kan forklares og revideres.",
    related: ["esg-dokumentation", "miljoedata"],
    faq: [
      {
        q: "Hvordan kan AI hjælpe med bæredygtighedsrapportering?",
        a: "AI kan automatisere datakvalitetstjek, finde afvigelser i miljø- og driftsdata og foreslå konkrete handlinger. Det reducerer manuelt arbejde og styrker bevisbyrden — forudsat at hver anbefaling kan forklares ud fra data.",
      },
    ],
  },
  {
    slug: "gofreyra",
    term: "GoFreyra",
    shortDefinition:
      "GoFreyra er en dansk SaaS-platform, der samler, analyserer og dokumenterer miljø- og driftsdata, så virksomheder, kommuner og naturprojekter kan bevise deres bæredygtighedsarbejde med data fra virkeligheden.",
    longExplanation:
      "Platformen består af fire moduler: SmartConnect+ (indsamler data), DecisionsIQ (analyserer data), ESG Ledger (dokumenterer data) og Impact Exchange (synliggør og aktiverer impact). Det hele samles i GoFreyra Dashboard.",
    related: ["esg-dokumentation", "miljoedata", "biodiversitetsovervaagning"],
    faq: [
      {
        q: "Hvad er GoFreyra?",
        a: "GoFreyra er en dansk SaaS-platform til miljødata, ESG-dokumentation og verificerbar impact. Den er bygget til virksomheder, kommuner, industri, forsyningsselskaber, lodsejere og naturprojekter.",
      },
      {
        q: "Hvem er GoFreyra til?",
        a: "Virksomheder med CSRD-pligt, kommuner med natur- og klimaprojekter, industri og forsyningsselskaber, lodsejere og naturprojektejere — alle der har brug for sporbar dokumentation af bæredygtighedsarbejdet.",
      },
    ],
  },
];
