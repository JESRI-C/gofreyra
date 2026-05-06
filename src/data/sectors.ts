// Branche-univers — 10 sektorer med fuld pSEO-struktur for /brancher/{slug}.
// Holdes adskilt fra src/data/pseo.ts så det gamle template-system kan udfases gradvist.

export type SectorSlug =
  | "kommuner"
  | "industri"
  | "forsyning"
  | "landbrug"
  | "skovbrug"
  | "naturprojekter"
  | "raadgivere"
  | "ejendomme-og-byggeri"
  | "energi"
  | "ngo-og-fonde";

export interface SectorPage {
  slug: SectorSlug;
  name: string;            // Kort navn til kort, navigation
  h1: string;              // GoFreyra til X
  subheadline: string;
  cardTeaser: string;      // Tekst på branchekort
  cardCta: string;         // CTA-label på branchekort
  seoTitle: string;
  seoDescription: string;
  problem: string[];       // 2-4 afsnit
  solution: string[];      // 2-3 afsnit
  dataSources: string[];   // tilpasset pr. branche
  modules: string[];       // SmartConnect+, DecisionsIQ, ESG Ledger, Impact Exchange, GoFreyra Dashboard
  pilot: { t: string; d: string }[]; // 5 trin
  useCases: { label: string; slug: string }[]; // links til /use-cases/{slug}
  faq: { q: string; a: string }[]; // 5 stk
  imageAlt: string;
}

const ALL_DATA_SOURCES = [
  "Sensorer",
  "Feltdata",
  "Satellitdata",
  "Dronedata",
  "Driftsdata",
  "Vejrdata",
  "Manuelle registreringer",
  "Eksterne registre",
];

const ALL_MODULES = [
  "SmartConnect+",
  "DecisionsIQ",
  "ESG Ledger",
  "Impact Exchange",
  "GoFreyra Dashboard",
];

export const SECTORS: SectorPage[] = [
  {
    slug: "kommuner",
    name: "Kommuner",
    h1: "GoFreyra til kommuner",
    subheadline: "Bedre data til natur, klima, biodiversitet og offentlig dokumentation.",
    cardTeaser:
      "Få bedre datagrundlag til biodiversitet, naturgenopretning, klimatilpasning og projektopfølgning.",
    cardCta: "Se løsning til kommuner",
    seoTitle: "GoFreyra til kommuner — natur, klima og dokumentation",
    seoDescription:
      "Saml naturdata, klimadata og projektdokumentation i én platform. Bygget til kommunale forvaltninger, naturprojekter og politiske beslutninger.",
    problem: [
      "Kommuner arbejder med mange natur-, klima- og miljøprojekter, men data ligger ofte spredt mellem forvaltninger, rådgivere, eksterne rapporter og manuelle registreringer.",
      "Det gør det svært at følge udviklingen, dokumentere effekten og skabe et samlet beslutningsgrundlag på tværs af politikere, borgere og samarbejdspartnere.",
    ],
    solution: [
      "GoFreyra samler projektdata, naturdata, feltregistreringer, sensordata og dokumentation i ét dashboard, så kommunen kan følge indsatser over tid.",
      "Med audit trail og kildehenvisning bliver dokumentationen brugbar både i forvaltning, politisk dialog og borgerkommunikation.",
    ],
    dataSources: ["Feltdata", "Satellitdata", "Dronedata", "Sensorer", "Vejrdata", "Eksterne registre", "Manuelle registreringer"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    pilot: [
      { t: "Afklar mål", d: "Vælg ét konkret område — fx biodiversitet, vandmiljø eller naturgenopretning." },
      { t: "Vælg lokation", d: "Start med ét område, én ådal eller én projektportefølje." },
      { t: "Kortlæg datakilder", d: "Felt, satellit, eksisterende rapporter og sensor­data kobles på." },
      { t: "Byg dashboard", d: "Samlet billede til forvaltning, politikere og samarbejdspartnere." },
      { t: "Evaluer og skalér", d: "Udvid til flere områder eller flere forvaltninger." },
    ],
    useCases: [
      { label: "Biodiversitetsovervågning", slug: "biodiversitetsovervaagning" },
      { label: "Naturgenopretning", slug: "naturgenopretning" },
      { label: "Klimatilpasning", slug: "klimatilpasning" },
      { label: "Miljødata-dashboard", slug: "miljoedata-dashboard" },
    ],
    faq: [
      { q: "Kan vi starte med ét enkelt projekt?", a: "Ja. Et pilotforløb dækker typisk ét område eller én forvaltning og udvides derfra." },
      { q: "Erstatter GoFreyra vores fagsystemer?", a: "Nej. GoFreyra ligger oven på fagsystemer og samler data fra dem til ét overblik." },
      { q: "Kan platformen bruges politisk?", a: "Ja. Dashboards og rapporter er bygget til at understøtte både forvaltningens og politikernes beslutningsgrundlag." },
      { q: "Kan vi dele data med borgere og partnere?", a: "Ja. Udvalgte dashboards og rapporter kan deles eksternt med kontrolleret adgang." },
      { q: "Hvilke datakilder bruger I typisk?", a: "Felt, satellit, drone, sensorer, kommunale GIS-lag og åbne registre som DMI, Miljøportalen og GBIF." },
    ],
    imageAlt: "GoFreyra til kommuner med biodiversitetsovervågning og naturdata",
  },
  {
    slug: "industri",
    name: "Industri",
    h1: "GoFreyra til industri",
    subheadline: "Forbind driftsdata, miljødata og ESG-dokumentation i ét samlet overblik.",
    cardTeaser:
      "Forbind driftsdata med ESG-dokumentation, ressourceforbrug, miljøindikatorer og rapporteringsbehov.",
    cardCta: "Se løsning til industri",
    seoTitle: "GoFreyra til industri — driftsdata, miljødata og ESG",
    seoDescription:
      "Forbind drift, energi, vand og emissioner med ESG-dokumentationen. Audit trail, risikoindsigt og rapporteringsklar data til CSRD.",
    problem: [
      "Industrivirksomheder har ofte store mængder driftsdata, men data bliver ikke altid koblet direkte til ESG-dokumentation og miljørapportering.",
      "Det skaber manuelle processer, gør forbedringer svære at dokumentere over tid og giver et svagere beslutningsgrundlag for både drift og ledelse.",
    ],
    solution: [
      "GoFreyra forbinder driftsnære datakilder med ESG-dokumentation, så I får ét overblik over miljøindikatorer, ressourceforbrug, risici og rapporteringsstatus.",
      "Audit trail og ESRS-mapping gør tallene revisionsklare, og DecisionsIQ flagger afvigelser tidligt.",
    ],
    dataSources: ["Driftsdata", "Sensorer", "Manuelle registreringer", "Vejrdata", "Eksterne registre"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    pilot: [
      { t: "Afklar mål", d: "Vælg den ESG-kategori med størst dokumentationspres." },
      { t: "Vælg område", d: "Én produktionslinje, ét anlæg eller én forsyningstype." },
      { t: "Kortlæg datakilder", d: "SCADA, energimålere, ERP og ESG-input." },
      { t: "Byg dashboard", d: "ESG-, drifts- og risikooverblik samlet." },
      { t: "Evaluer og skalér", d: "Udvid til hele organisationen." },
    ],
    useCases: [
      { label: "ESG-dokumentation", slug: "esg-dokumentation" },
      { label: "Sensordata til ESG", slug: "sensordata-til-esg" },
      { label: "Audit trail i ESG", slug: "audit-trail-esg" },
      { label: "Rapportklar dokumentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Hvilke driftssystemer kan I integrere med?", a: "SCADA, IoT-platforme, ERP og almindelige driftsdatabaser via API og standardprotokoller." },
      { q: "Erstatter GoFreyra vores ESG-rapporteringsværktøj?", a: "Nej. GoFreyra leverer det datagrundlag og audit trail, som rapporteringsværktøjerne mangler." },
      { q: "Er platformen klar til CSRD?", a: "Ja. ESG Ledger er bygget med en datamodel, der mapper til ESRS-temaer." },
      { q: "Hvor lang tid tager et pilotforløb?", a: "Typisk 2-4 uger. Tunge driftsintegrationer kan tage længere." },
      { q: "Kan vi starte med én ESG-kategori?", a: "Ja. Mange piloter starter med E1 (klima) eller E5 (ressourcer) og udvides derfra." },
    ],
    imageAlt: "GoFreyra til industri med miljødata og ESG-dokumentation",
  },
  {
    slug: "forsyning",
    name: "Forsyning",
    h1: "GoFreyra til forsyning",
    subheadline: "Saml data om vand, energi, klima og miljøpåvirkning i én dokumenterbar platform.",
    cardTeaser: "Saml data om vand, energi, klima, drift og miljøpåvirkning i ét dokumenterbart overblik.",
    cardCta: "Se løsning til forsyning",
    seoTitle: "GoFreyra til forsyning — vand, energi og dokumentation",
    seoDescription:
      "Forsyningsselskaber kan samle drift, miljødata og ESG-dokumentation i én platform. Audit trail og myndighedsklare flows.",
    problem: [
      "Forsyningsselskaber arbejder med kritisk infrastruktur og store datamængder fra SCADA, målere og rapporter.",
      "Udfordringen er at samle drift, miljødata og ESG-dokumentation i et format, der kan bruges både operationelt og strategisk.",
    ],
    solution: [
      "GoFreyra fungerer som overblikslag, hvor driftsdata, miljøindikatorer, projektdata og rapporteringsflows kobles sammen.",
      "Det giver hurtigere dokumentation, bedre risikostyring og mindre manuelt rapporteringsarbejde.",
    ],
    dataSources: ["Driftsdata", "Sensorer", "Vejrdata", "Manuelle registreringer", "Eksterne registre"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    pilot: [
      { t: "Afklar mål", d: "Fx vandkvalitet, klimatilpasning eller energiforbrug." },
      { t: "Vælg lokation", d: "Et anlæg, ét forsyningsområde eller én projektportefølje." },
      { t: "Kortlæg datakilder", d: "SCADA, målere, sensorer og åbne datakilder." },
      { t: "Byg dashboard", d: "Drift, miljø og dokumentation i ét billede." },
      { t: "Evaluer og skalér", d: "Udvid til flere anlæg eller forsyningsområder." },
    ],
    useCases: [
      { label: "Miljødata-dashboard", slug: "miljoedata-dashboard" },
      { label: "Klimatilpasning", slug: "klimatilpasning" },
      { label: "Sensordata til ESG", slug: "sensordata-til-esg" },
      { label: "Rapportklar dokumentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Kan GoFreyra integrere med vores SCADA?", a: "Ja. SmartConnect+ understøtter SCADA, IoT- og driftssystemer via standardprotokoller og API." },
      { q: "Kan vi starte med ét anlæg?", a: "Ja. Pilot starter typisk på ét anlæg eller forsyningsområde." },
      { q: "Understøtter platformen myndighedsrapportering?", a: "Ja. Audit trail og strukturerede flows gør indberetning hurtigere og mere konsistent." },
      { q: "Er platformen GDPR- og sikkerhedsklar?", a: "Ja. Data hostes i EU og GoFreyra følger gældende krav til kritisk infrastruktur." },
      { q: "Hvor hurtigt kan vi være i gang?", a: "Typisk 2-4 uger til pilotopsætning." },
    ],
    imageAlt: "GoFreyra til forsyning med vanddata, energidata og dokumentationsflow",
  },
  {
    slug: "landbrug",
    name: "Landbrug",
    h1: "GoFreyra til landbrug",
    subheadline: "Følg jord, vand, biodiversitet og klimaindsatser med bedre data og dokumentation.",
    cardTeaser:
      "Følg jord, vand, biodiversitet, klimaindsatser og naturtiltag med bedre data og dokumentation.",
    cardCta: "Se løsning til landbrug",
    seoTitle: "GoFreyra til landbrug — jord, natur og dokumentation",
    seoDescription:
      "Strukturér arealdata, biodiversitet, jord- og vandindikatorer. Klar til ESG, aftagerkrav og fremtidige naturordninger.",
    problem: [
      "Landbruget står over for stigende krav om dokumentation, naturhensyn, klimaindsatser og arealbaserede miljødata.",
      "Mange indsatser sker allerede i praksis, men dokumentationen er ofte spredt eller vanskelig at bruge strategisk.",
    ],
    solution: [
      "GoFreyra samler arealdata, feltdata, sensorer, biodiversitetsindikatorer og dokumentation, så bedrifter og samarbejdspartnere kan følge udviklingen over tid.",
      "Det giver bedre dialog med aftagere, banker og rådgivere — og gør jer klar til naturordninger og fremtidige impactmodeller.",
    ],
    dataSources: ["Feltdata", "Satellitdata", "Dronedata", "Sensorer", "Vejrdata", "Eksterne registre"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    pilot: [
      { t: "Afklar mål", d: "Fx jordkvalitet, biodiversitet eller naturtiltag." },
      { t: "Vælg areal", d: "Én bedrift, ét marksæt eller ét naturområde." },
      { t: "Kortlæg datakilder", d: "Mark, satellit, drone og åbne registre." },
      { t: "Byg dashboard", d: "Udvikling i jord, vand og biodiversitet over tid." },
      { t: "Evaluer og skalér", d: "Udvid til flere arealer og partnere." },
    ],
    useCases: [
      { label: "Biodiversitetsovervågning", slug: "biodiversitetsovervaagning" },
      { label: "Naturgenopretning", slug: "naturgenopretning" },
      { label: "Miljødata-dashboard", slug: "miljoedata-dashboard" },
      { label: "ESG-dokumentation", slug: "esg-dokumentation" },
    ],
    faq: [
      { q: "Skal vi bruge sensorer i marken?", a: "Ikke nødvendigvis. Vi kan starte med satellit-, drone- og driftsdata og udvide med sensorer, hvis det giver mening." },
      { q: "Kan platformen bruges til naturordninger?", a: "Ja. Impact Exchange er forberedt til biodiversitets- og kulstofordninger." },
      { q: "Hvilke aftagerkrav understøtter I?", a: "Vi pakker typisk dokumentation til mejerier, kornhandlere og banker med relevante ESG-indikatorer." },
      { q: "Hvem ejer data?", a: "Det gør I. GoFreyra er en platform — ikke en datakøber." },
      { q: "Kan vi starte småt?", a: "Ja. Pilot kan starte på én bedrift eller ét område." },
    ],
    imageAlt: "GoFreyra til landbrug med jord-, vand- og biodiversitetsdata",
  },
  {
    slug: "skovbrug",
    name: "Skovbrug",
    h1: "GoFreyra til skovbrug",
    subheadline: "Dokumentér skovudvikling, biodiversitet, CO₂-binding og naturværdi over tid.",
    cardTeaser:
      "Dokumentér biodiversitet, skovudvikling, CO₂-binding, driftsområder og naturværdi over tid.",
    cardCta: "Se løsning til skovbrug",
    seoTitle: "GoFreyra til skovbrug — biodiversitet og naturværdi",
    seoDescription:
      "Følg skovens udvikling med satellit, drone og felt. Dokumentation til biodiversitet, CO₂ og naturværdi over tid.",
    problem: [
      "Skovbrug og naturforvaltning kræver viden om udvikling over lange tidsserier.",
      "Data om biodiversitet, arealanvendelse, skovtilstand og naturværdi samles ofte i forskellige formater og bliver svære at sammenligne.",
    ],
    solution: [
      "GoFreyra kombinerer feltdata, satellitdata, dronedata og projektregistreringer til en samlet datamodel.",
      "Det gør skovens udvikling sporbar, dokumenterbar og brugbar i rapportering og certificering.",
    ],
    dataSources: ["Satellitdata", "Dronedata", "Feltdata", "Sensorer", "Vejrdata", "Eksterne registre"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    pilot: [
      { t: "Afklar mål", d: "Fx biodiversitet, CO₂-binding eller naturværdi." },
      { t: "Vælg område", d: "Én ejendom eller ét skovparti." },
      { t: "Kortlæg datakilder", d: "Satellit, drone, felt, FSC/PEFC-data." },
      { t: "Byg dashboard", d: "Udvikling i biodiversitet, vækst og naturværdi." },
      { t: "Evaluer og skalér", d: "Udvid til hele porteføljen." },
    ],
    useCases: [
      { label: "Biodiversitetsovervågning", slug: "biodiversitetsovervaagning" },
      { label: "Naturgenopretning", slug: "naturgenopretning" },
      { label: "Miljødata-dashboard", slug: "miljoedata-dashboard" },
      { label: "Rapportklar dokumentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Kan I dokumentere CO₂-binding?", a: "Ja. Vi kombinerer arealdata, vækstmodeller og målinger til sporbare CO₂-indikatorer." },
      { q: "Understøtter I FSC og PEFC?", a: "Vi tilrettelægger data, så de kan bruges i certificeringsdokumentation." },
      { q: "Hvor langt tilbage kan vi følge udviklingen?", a: "Satellitdata rækker typisk 10+ år tilbage og kan kombineres med eksisterende registreringer." },
      { q: "Kan platformen bruges til naturmarkeder?", a: "Ja. Impact Exchange er forberedt til biodiversitets- og kulstofordninger." },
      { q: "Skal vi bruge drone?", a: "Det styrker dokumentationen, men er ikke et krav. Satellit og felt rækker langt." },
    ],
    imageAlt: "GoFreyra til skovbrug med satellit, biodiversitet og naturværdi",
  },
  {
    slug: "naturprojekter",
    name: "Naturprojekter",
    h1: "GoFreyra til naturprojekter",
    subheadline: "Følg naturimpact dér, hvor den faktisk sker.",
    cardTeaser:
      "Følg udviklingen i levesteder, arter, jord, vand og impactindikatorer i konkrete projektområder.",
    cardCta: "Se løsning til naturprojekter",
    seoTitle: "GoFreyra til naturprojekter — impact og dokumentation",
    seoDescription:
      "Strukturér naturprojekter med datakilder, indikatorer og audit trail. Følg udviklingen — og dokumentér impact over tid.",
    problem: [
      "Naturprojekter skaber ofte stor værdi, men effekten kan være svær at dokumentere løbende.",
      "Data samles typisk i rapporter, fotos, feltregistreringer og eksterne vurderinger og mangler et fælles system.",
    ],
    solution: [
      "GoFreyra giver naturprojekter en digital dataryggrad, hvor projektområder, datakilder, indikatorer og dokumentationsstatus kan følges over tid.",
      "Det styrker både drift, partnerdialog og adgang til fremtidige naturmarkeder.",
    ],
    dataSources: ["Feltdata", "Satellitdata", "Dronedata", "Sensorer", "Vejrdata", "Manuelle registreringer", "Eksterne registre"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    pilot: [
      { t: "Afklar mål", d: "Definér projektets impactindikatorer." },
      { t: "Vælg projektområde", d: "Én lokation eller én projektpakke." },
      { t: "Kortlæg datakilder", d: "Felt, satellit, drone og baseline-rapporter." },
      { t: "Byg dashboard", d: "Status, udvikling og dokumentation samlet." },
      { t: "Evaluer og skalér", d: "Udvid til flere projekter og partnere." },
    ],
    useCases: [
      { label: "Biodiversitetsovervågning", slug: "biodiversitetsovervaagning" },
      { label: "Naturgenopretning", slug: "naturgenopretning" },
      { label: "Miljødata-dashboard", slug: "miljoedata-dashboard" },
      { label: "Audit trail i ESG", slug: "audit-trail-esg" },
    ],
    faq: [
      { q: "Kan vi bruge data fra eksisterende rapporter?", a: "Ja. Eksisterende rapporter og baselines kan struktureres ind i platformen." },
      { q: "Hvilke indikatorer arbejder I med?", a: "Det afhænger af projektet, men typisk biodiversitet, vand, jord og habitatudvikling." },
      { q: "Kan vi dele dashboards med partnere?", a: "Ja. Adgang kan styres pr. projekt og pr. rolle." },
      { q: "Er data klar til naturmarkeder?", a: "Ja. Impact Exchange er forberedt til biodiversitets- og kulstofordninger." },
      { q: "Hvem ejer data?", a: "Det gør projektets ejer eller partnerskabet bag." },
    ],
    imageAlt: "GoFreyra til naturprojekter med biodiversitet og impactdokumentation",
  },
  {
    slug: "raadgivere",
    name: "Rådgivere",
    h1: "GoFreyra til rådgivere",
    subheadline: "Brug GoFreyra som dataryggrad i ESG-, natur- og miljøprojekter.",
    cardTeaser:
      "Brug GoFreyra som dataryggrad i rådgivning, ESG-forløb, naturprojekter og dokumentationsopgaver.",
    cardCta: "Se løsning til rådgivere",
    seoTitle: "GoFreyra til rådgivere — ESG, natur og dokumentation",
    seoDescription:
      "Stærkere rådgivningsleverancer med struktureret data, audit trail og fælles platform på tværs af kunder.",
    problem: [
      "Rådgivere bruger ofte mange timer på at samle data, validere information og omsætte det til rapporter.",
      "Det kan være svært at skabe ensartede workflows og kvalitet på tværs af kunder, projekter og rådgivere.",
    ],
    solution: [
      "GoFreyra fungerer som et fælles platformslag, hvor rådgivere kan strukturere kundedata, følge dokumentationsstatus og levere stærkere beslutningsgrundlag.",
      "Det giver kortere leverancetid, bedre datakvalitet og en skalerbar metode på tværs af opgaver.",
    ],
    dataSources: ["Driftsdata", "Feltdata", "Satellitdata", "Manuelle registreringer", "Eksterne registre"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    pilot: [
      { t: "Afklar mål", d: "Vælg en rådgivningsopgave eller kundecase." },
      { t: "Vælg kunde og scope", d: "Et område, ét projekt eller ét forløb." },
      { t: "Kortlæg datakilder", d: "Kundedata, åbne registre og målinger." },
      { t: "Byg kundedashboard", d: "Adgang for jer og kunden — med audit trail." },
      { t: "Evaluer og skalér", d: "Brug skabelonen på næste kunde." },
    ],
    useCases: [
      { label: "ESG-dokumentation", slug: "esg-dokumentation" },
      { label: "Audit trail i ESG", slug: "audit-trail-esg" },
      { label: "Rapportklar dokumentation", slug: "rapportklar-dokumentation" },
      { label: "Miljødata-dashboard", slug: "miljoedata-dashboard" },
    ],
    faq: [
      { q: "Kan vi bruge GoFreyra på tværs af flere kunder?", a: "Ja. Platformen er bygget multi-tenant så I kan arbejde på flere kundeprojekter." },
      { q: "Kan kunden få adgang?", a: "Ja. Adgang kan styres pr. rolle og pr. projekt." },
      { q: "Findes der en partnermodel?", a: "Ja. Vi har en partnermodel for rådgivere og konsulenthuse — kontakt os for detaljer." },
      { q: "Kan I hjælpe med implementering?", a: "Ja. Vi tilbyder pilotopsætning og oplæring til rådgivere." },
      { q: "Ejer kunden eller rådgiveren data?", a: "Det aftales pr. opgave. Platformen understøtter begge modeller." },
    ],
    imageAlt: "GoFreyra til rådgivere med kundedashboard og ESG-dokumentation",
  },
  {
    slug: "ejendomme-og-byggeri",
    name: "Ejendomme og byggeri",
    h1: "GoFreyra til ejendomme og byggeri",
    subheadline: "Kobl drift, energi, grønne arealer og ESG-data til ejendomsporteføljer.",
    cardTeaser:
      "Kobl drift, energi, grønne områder, biodiversitet og ESG-data til ejendoms- og projektporteføljer.",
    cardCta: "Se løsning til ejendomme og byggeri",
    seoTitle: "GoFreyra til ejendomme og byggeri — ESG og drift",
    seoDescription:
      "Saml energi-, drifts- og naturdata på tværs af ejendoms- og projektporteføljer. Klar til CSRD og taksonomi.",
    problem: [
      "Ejendoms- og byggebranchen arbejder med energi, materialer, drift, biodiversitet og dokumentation.",
      "Data ligger ofte spredt mellem bygninger, projekter, leverandører og rapporter — og bliver svære at konsolidere.",
    ],
    solution: [
      "GoFreyra samler miljødata, driftsdata og dokumentationsflows, så porteføljer og projekter kan følges systematisk.",
      "Det giver bedre overblik for ledelse, långivere og lejere — og struktur til CSRD og EU-taksonomi.",
    ],
    dataSources: ["Driftsdata", "Sensorer", "Manuelle registreringer", "Satellitdata", "Eksterne registre"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    pilot: [
      { t: "Afklar mål", d: "Fx energi, biodiversitet eller porteføljeoverblik." },
      { t: "Vælg portefølje", d: "Én ejendom, ét projekt eller én porteføljedel." },
      { t: "Kortlæg datakilder", d: "Energimålere, drift, leverandørdata og GIS." },
      { t: "Byg dashboard", d: "Per-asset og porteføljedashboard." },
      { t: "Evaluer og skalér", d: "Udvid til hele porteføljen." },
    ],
    useCases: [
      { label: "ESG-dokumentation", slug: "esg-dokumentation" },
      { label: "Sensordata til ESG", slug: "sensordata-til-esg" },
      { label: "Miljødata-dashboard", slug: "miljoedata-dashboard" },
      { label: "Rapportklar dokumentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Kan vi starte med én ejendom?", a: "Ja. Pilot starter typisk med ét projekt eller én ejendom." },
      { q: "Understøtter I EU-taksonomien?", a: "Ja. ESG Ledger kan strukturere data efter EU-taksonomi og CSRD/ESRS." },
      { q: "Kan långivere få adgang?", a: "Ja. Eksterne dashboards og rapporter kan deles med kontrolleret adgang." },
      { q: "Kan vi følge biodiversitet på arealerne?", a: "Ja. Vi kan kombinere felt, satellit og åbne registre på grønne arealer." },
      { q: "Hvor hurtigt er pilot oppe?", a: "Typisk 2-4 uger til første dashboard." },
    ],
    imageAlt: "GoFreyra til ejendomme og byggeri med energi, biodiversitet og portefølje",
  },
  {
    slug: "energi",
    name: "Energi",
    h1: "GoFreyra til energi",
    subheadline: "Dokumentér miljødata, naturhensyn og ESG-indikatorer i energiprojekter.",
    cardTeaser:
      "Dokumentér miljødata, projektimpact, naturhensyn og ESG-indikatorer i energiprojekter.",
    cardCta: "Se løsning til energi",
    seoTitle: "GoFreyra til energi — miljødata og projektimpact",
    seoDescription:
      "Energiprojekter dokumenteret end-to-end: miljødata, naturhensyn, ESG-indikatorer og interessentdialog i én platform.",
    problem: [
      "Energiprojekter skal i stigende grad dokumentere naturhensyn, miljøpåvirkning, lokale forhold og ESG-indikatorer.",
      "Det kræver et datagrundlag, der både kan bruges i drift, rapportering og dialog med myndigheder, lokalsamfund og ejere.",
    ],
    solution: [
      "GoFreyra samler projektdata, miljøindikatorer, naturdata og dokumentation i ét fælles overblik.",
      "Det understøtter både intern styring, ekstern rapportering og dialog med interessenter.",
    ],
    dataSources: ["Driftsdata", "Sensorer", "Satellitdata", "Dronedata", "Feltdata", "Vejrdata", "Eksterne registre"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    pilot: [
      { t: "Afklar mål", d: "Fx miljøpåvirkning, naturhensyn eller projektimpact." },
      { t: "Vælg projekt", d: "Et anlæg, en park eller en projektportefølje." },
      { t: "Kortlæg datakilder", d: "SCADA, miljømålinger, satellit og feltobservationer." },
      { t: "Byg dashboard", d: "Drift, miljø og dokumentation i én visning." },
      { t: "Evaluer og skalér", d: "Udvid til hele porteføljen." },
    ],
    useCases: [
      { label: "ESG-dokumentation", slug: "esg-dokumentation" },
      { label: "Sensordata til ESG", slug: "sensordata-til-esg" },
      { label: "Miljødata-dashboard", slug: "miljoedata-dashboard" },
      { label: "Rapportklar dokumentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Kan vi dokumentere naturhensyn på en vindmølle- eller solpark?", a: "Ja. Vi kombinerer baseline-data med satellit, felt og driftsdata over tid." },
      { q: "Understøtter I CSRD?", a: "Ja. ESG Ledger er bygget med en datamodel, der mapper til ESRS." },
      { q: "Kan platformen bruges i interessentdialog?", a: "Ja. Eksterne dashboards og rapporter kan deles med myndigheder og lokalsamfund." },
      { q: "Hvilke datakilder bruger I typisk?", a: "SCADA, miljømålinger, satellit, drone, vejrdata og åbne registre." },
      { q: "Hvor hurtigt er pilot oppe?", a: "Typisk 2-4 uger." },
    ],
    imageAlt: "GoFreyra til energi med miljødata og projektimpact",
  },
  {
    slug: "ngo-og-fonde",
    name: "NGO’er og fonde",
    h1: "GoFreyra til NGO’er og fonde",
    subheadline: "Skab stærkere dokumentation for natur-, klima- og impactprojekter.",
    cardTeaser:
      "Skab stærkere dokumentation for natur-, klima- og impactprojekter, så resultater kan følges og deles.",
    cardCta: "Se løsning til NGO’er og fonde",
    seoTitle: "GoFreyra til NGO’er og fonde — impact og dokumentation",
    seoDescription:
      "Strukturér impactprojekter, donorrapportering og naturdata i én platform. Stærkere dokumentation, mere troværdig kommunikation.",
    problem: [
      "NGO’er og fonde skal ofte vise, hvad projekter faktisk skaber af effekt.",
      "Det er vanskeligt, når data ligger spredt i rapporter, billeder, feltregistreringer og partneropdateringer.",
    ],
    solution: [
      "GoFreyra samler projektstatus, datakilder, indikatorer og impactdokumentation i ét overblik.",
      "Det gør det lettere at følge resultater, kommunikere med donorer og dele læring på tværs af projekter.",
    ],
    dataSources: ["Feltdata", "Satellitdata", "Dronedata", "Manuelle registreringer", "Eksterne registre"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    pilot: [
      { t: "Afklar mål", d: "Hvilken type impact skal dokumenteres?" },
      { t: "Vælg projekt", d: "Ét projekt eller én portefølje." },
      { t: "Kortlæg datakilder", d: "Felt, satellit, partnerdata og baseline." },
      { t: "Byg dashboard", d: "Impact, status og dokumentation samlet." },
      { t: "Evaluer og skalér", d: "Udvid til flere projekter og partnere." },
    ],
    useCases: [
      { label: "Biodiversitetsovervågning", slug: "biodiversitetsovervaagning" },
      { label: "Naturgenopretning", slug: "naturgenopretning" },
      { label: "Miljødata-dashboard", slug: "miljoedata-dashboard" },
      { label: "Rapportklar dokumentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Kan vi bruge platformen til donorrapportering?", a: "Ja. Dashboards og rapporter er bygget til at dokumentere impact over tid." },
      { q: "Kan partnere bidrage med data?", a: "Ja. Adgang kan styres pr. rolle og pr. projekt." },
      { q: "Er der en model for NGO’er og fonde?", a: "Ja. Vi har særlige vilkår — kontakt os for detaljer." },
      { q: "Kan vi dele resultater offentligt?", a: "Ja. Udvalgte dashboards og rapporter kan deles eksternt." },
      { q: "Hvilke indikatorer arbejder I typisk med?", a: "Biodiversitet, vand, jord, habitater og projektspecifikke impactindikatorer." },
    ],
    imageAlt: "GoFreyra til NGO’er og fonde med impactdokumentation",
  },
];

export const SECTOR_NAV_ITEMS = SECTORS.map((s) => ({
  to: `/brancher/${s.slug}` as const,
  label: s.name,
}));

export function getSector(slug: string): SectorPage | undefined {
  return SECTORS.find((s) => s.slug === slug);
}

export { ALL_DATA_SOURCES, ALL_MODULES };
