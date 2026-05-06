// Use case-univers — konkrete anvendelser, hver med egen side under /use-cases/{slug}.

export type UseCaseSlug =
  | "biodiversitetsovervaagning"
  | "esg-dokumentation"
  | "miljoedata-dashboard"
  | "sensordata-til-esg"
  | "naturgenopretning"
  | "klimatilpasning"
  | "audit-trail-esg"
  | "rapportklar-dokumentation";

export interface UseCase {
  slug: UseCaseSlug;
  title: string;            // GoFreyra til {usecase}
  shortTitle: string;       // navngivet kort
  subheadline: string;
  seoTitle: string;
  seoDescription: string;
  problem: string[];
  solution: string[];
  modules: string[];
  sectors: { slug: string; name: string }[]; // relaterede brancher
  faq: { q: string; a: string }[];
}

export const USE_CASES: UseCase[] = [
  {
    slug: "biodiversitetsovervaagning",
    title: "Biodiversitetsovervågning",
    shortTitle: "Biodiversitetsovervågning",
    subheadline: "Strukturér data om arter, levesteder og økologiske forhold over tid.",
    seoTitle: "Biodiversitetsovervågning med GoFreyra — natur i data",
    seoDescription:
      "Følg arter, levesteder og habitatudvikling med felt-, drone- og satellitdata. Klar til ESG, naturordninger og fondsdokumentation.",
    problem: [
      "Biodiversitetsdata ligger i notesbøger, PDF’er og adskilte systemer.",
      "Det er svært at vise reel udvikling over tid og at dokumentere effekten af konkrete naturindsatser.",
    ],
    solution: [
      "GoFreyra kombinerer feltobservationer, drone, satellit og åbne registre som GBIF og DanBIF til en fælles datamodel.",
      "DecisionsIQ analyserer NDVI, habitatudvikling og artsindikatorer, og ESG Ledger gør hvert datapunkt sporbart.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    sectors: [
      { slug: "kommuner", name: "Kommuner" },
      { slug: "naturprojekter", name: "Naturprojekter" },
      { slug: "skovbrug", name: "Skovbrug" },
      { slug: "ngo-og-fonde", name: "NGO’er og fonde" },
    ],
    faq: [
      { q: "Hvilke arter kan I følge?", a: "Vi kombinerer åbne kilder som GBIF og DanBIF med jeres egne feltobservationer. Det er ikke artsbegrænset." },
      { q: "Skal vi bruge drone?", a: "Nej, men det styrker dokumentationen. Satellit og felt rækker langt." },
      { q: "Hvor lang tid tager det at få en baseline?", a: "Typisk 2-4 uger med satellit og åbne kilder. Felt udvider over sæsoner." },
    ],
  },
  {
    slug: "esg-dokumentation",
    title: "ESG-dokumentation",
    shortTitle: "ESG-dokumentation",
    subheadline: "Sporbart datagrundlag for jeres ESG- og CSRD-rapportering.",
    seoTitle: "ESG-dokumentation med GoFreyra — sporbar og audit-klar",
    seoDescription:
      "Saml ESG-data fra drift, sensorer og leverandører. Audit trail og ESRS-mapping gør tallene revisionsklare.",
    problem: [
      "ESG-data lever i regneark, PDF’er og leverandørmails — og kan sjældent spores tilbage til kilden.",
      "Det gør rapporten sårbar over for revisor, banker og myndigheder.",
    ],
    solution: [
      "GoFreyra samler ESG-data fra drift, sensorer, leverandører og felt og lægger audit trail på hvert datapunkt.",
      "ESG Ledger mapper data til ESRS-temaer, så rapporteringen bliver hurtigere og mere konsistent.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    sectors: [
      { slug: "industri", name: "Industri" },
      { slug: "forsyning", name: "Forsyning" },
      { slug: "energi", name: "Energi" },
      { slug: "ejendomme-og-byggeri", name: "Ejendomme og byggeri" },
    ],
    faq: [
      { q: "Erstatter GoFreyra vores rapporteringsværktøj?", a: "Nej. Vi leverer datagrundlaget og audit trail, som rapporteringsværktøjerne mangler." },
      { q: "Er platformen klar til CSRD?", a: "Ja. ESG Ledger er bygget med en datamodel, der mapper til ESRS-temaer." },
      { q: "Kan vi starte med én kategori?", a: "Ja. Mange piloter starter med E1 (klima) eller E4 (biodiversitet)." },
    ],
  },
  {
    slug: "miljoedata-dashboard",
    title: "Miljødata-dashboard",
    shortTitle: "Miljødata-dashboard",
    subheadline: "Ét operationelt overblik over jeres miljødata.",
    seoTitle: "Miljødata-dashboard med GoFreyra — overblik og indsigt",
    seoDescription:
      "Saml miljøindikatorer fra drift, sensor, felt og åbne kilder i ét dashboard for ledelse, drift og rapportering.",
    problem: [
      "Miljødata ligger i forskellige systemer og bliver typisk først samlet, når en rapport skal afleveres.",
      "Det betyder, at ledelsen mangler reel-tid indsigt og at indsatsen ikke kan styres løbende.",
    ],
    solution: [
      "GoFreyra Dashboard samler miljødata på tværs af kilder og roller — så drift, ledelse og ESG-team arbejder med samme tal.",
      "Indikatorer kan brydes ned pr. område, projekt eller anlæg.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "GoFreyra Dashboard"],
    sectors: [
      { slug: "kommuner", name: "Kommuner" },
      { slug: "industri", name: "Industri" },
      { slug: "forsyning", name: "Forsyning" },
      { slug: "energi", name: "Energi" },
    ],
    faq: [
      { q: "Kan vi få et dashboard pr. afdeling?", a: "Ja. Adgang og visninger kan styres pr. rolle og pr. område." },
      { q: "Kan vi dele dashboards eksternt?", a: "Ja. Udvalgte dashboards kan deles med partnere, donorer eller långivere." },
      { q: "Hvilke datakilder kan vises?", a: "Drift, sensor, felt, satellit, drone og åbne registre." },
    ],
  },
  {
    slug: "sensordata-til-esg",
    title: "Sensordata til ESG",
    shortTitle: "Sensordata til ESG",
    subheadline: "Brug IoT- og driftssensorer som ESG-kilde.",
    seoTitle: "Sensordata til ESG med GoFreyra — målt frem for estimeret",
    seoDescription:
      "Forbind sensorer, SCADA og IoT med jeres ESG-grundlag. Mindre afhængighed af generiske emissionsfaktorer.",
    problem: [
      "Mange ESG-tal beregnes via generiske faktorer i stedet for målt data.",
      "Det giver svagere bevisbyrde og gør det svært at vise reel udvikling.",
    ],
    solution: [
      "SmartConnect+ kobler sensorer, målere og driftssystemer direkte ind i ESG-grundlaget.",
      "Det giver målte tal, audit trail og bedre risikoindsigt.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    sectors: [
      { slug: "industri", name: "Industri" },
      { slug: "forsyning", name: "Forsyning" },
      { slug: "energi", name: "Energi" },
      { slug: "ejendomme-og-byggeri", name: "Ejendomme og byggeri" },
    ],
    faq: [
      { q: "Hvilke sensorer kan I integrere?", a: "Vi understøtter standardprotokoller og kan integrere med eksisterende IoT-platforme." },
      { q: "Skal vi udskifte sensorer?", a: "Sjældent. Vi arbejder oven på jeres eksisterende setup." },
      { q: "Hvor hurtigt kan vi se data?", a: "Typisk 2-4 uger ved standardintegration." },
    ],
  },
  {
    slug: "naturgenopretning",
    title: "Naturgenopretning",
    shortTitle: "Naturgenopretning",
    subheadline: "Følg effekten af naturgenopretningsprojekter over tid.",
    seoTitle: "Naturgenopretning med GoFreyra — fra indsats til effekt",
    seoDescription:
      "Strukturér baseline, indsats og effekt i naturgenopretningsprojekter. Klar til ESG, fondsdokumentation og naturmarkeder.",
    problem: [
      "Naturgenopretning er komplekse projekter med lang tidshorisont og mange datakilder.",
      "Effekten er svær at vise, hvis data ikke struktureres fra start.",
    ],
    solution: [
      "GoFreyra strukturerer baseline, indsats og effekt og kombinerer felt, satellit, drone og åbne kilder.",
      "Det gør effekten dokumenterbar over tid og brugbar i dialog med myndigheder og partnere.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    sectors: [
      { slug: "kommuner", name: "Kommuner" },
      { slug: "naturprojekter", name: "Naturprojekter" },
      { slug: "landbrug", name: "Landbrug" },
      { slug: "ngo-og-fonde", name: "NGO’er og fonde" },
    ],
    faq: [
      { q: "Hvor lang tid bør vi følge effekten?", a: "Det afhænger af projektet, men ofte 5-10 år for at se reel naturudvikling." },
      { q: "Kan vi bruge eksisterende baseline-rapporter?", a: "Ja. De kan struktureres ind i platformen." },
      { q: "Er data klar til naturmarkeder?", a: "Ja. Impact Exchange er forberedt til biodiversitets- og kulstofordninger." },
    ],
  },
  {
    slug: "klimatilpasning",
    title: "Klimatilpasning",
    shortTitle: "Klimatilpasning",
    subheadline: "Følg vand, vejrdata og infrastrukturpåvirkning i klimatilpasningsprojekter.",
    seoTitle: "Klimatilpasning med GoFreyra — data og dokumentation",
    seoDescription:
      "Saml vand, vejrdata og infrastrukturpåvirkning i klimatilpasningsprojekter. Bygget til kommuner og forsyning.",
    problem: [
      "Klimatilpasningsprojekter har mange datakilder — vejr, vand, jord og infrastruktur.",
      "Det er svært at få et samlet billede og dokumentere effekten over tid.",
    ],
    solution: [
      "GoFreyra samler vejrdata, sensordata og GIS-lag i ét overblik, så projekter kan styres og dokumenteres.",
      "Det giver bedre planlægning og en stærkere dialog med politikere og borgere.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    sectors: [
      { slug: "kommuner", name: "Kommuner" },
      { slug: "forsyning", name: "Forsyning" },
      { slug: "ejendomme-og-byggeri", name: "Ejendomme og byggeri" },
    ],
    faq: [
      { q: "Kan I integrere DMI-data?", a: "Ja. Vi bruger DMI og andre åbne kilder." },
      { q: "Kan vi følge regnvand og oversvømmelser?", a: "Ja. Vi kombinerer sensor-, drift- og GIS-data." },
      { q: "Kan dashboards deles politisk?", a: "Ja. Adgang kan styres pr. rolle." },
    ],
  },
  {
    slug: "audit-trail-esg",
    title: "Audit trail i ESG",
    shortTitle: "Audit trail i ESG",
    subheadline: "Sporbarhed på hvert datapunkt — fra kilde til rapport.",
    seoTitle: "Audit trail i ESG med GoFreyra — fra kilde til rapport",
    seoDescription:
      "Kilde, tidsstempel, metode og ændringshistorik på hvert datapunkt. Bygget til revisor, ledelse og myndigheder.",
    problem: [
      "Uden audit trail kan ESG-tal ikke forsvares over for revisor og interessenter.",
      "Manuelle flows giver huller i bevisbyrden.",
    ],
    solution: [
      "ESG Ledger lægger kilde, tidsstempel, metode og ændringshistorik på hvert datapunkt.",
      "Det gør tal sporbare fra rapport tilbage til kilden.",
    ],
    modules: ["SmartConnect+", "ESG Ledger", "GoFreyra Dashboard"],
    sectors: [
      { slug: "industri", name: "Industri" },
      { slug: "forsyning", name: "Forsyning" },
      { slug: "raadgivere", name: "Rådgivere" },
      { slug: "ejendomme-og-byggeri", name: "Ejendomme og byggeri" },
    ],
    faq: [
      { q: "Erstatter audit trail vores revisor?", a: "Nej. Det giver revisor et stærkere grundlag at arbejde på." },
      { q: "Kan vi se hvem der har ændret hvad?", a: "Ja. Hver ændring er logget med bruger og tidsstempel." },
      { q: "Understøtter platformen ESRS?", a: "Ja. Datamodellen mapper til ESRS-temaer." },
    ],
  },
  {
    slug: "rapportklar-dokumentation",
    title: "Rapportklar dokumentation",
    shortTitle: "Rapportklar dokumentation",
    subheadline: "Træk audit-klar dokumentation til revision, bestyrelse og myndigheder.",
    seoTitle: "Rapportklar dokumentation med GoFreyra",
    seoDescription:
      "Træk audit-klar dokumentation direkte fra platformen — uden manuel oprydning og kildejagt før hver rapport.",
    problem: [
      "Dokumentation samles typisk først, når en rapport skal afleveres — og det giver tidspres og fejl.",
      "Det manuelle arbejde med kildejagt kan fylde hele kvartalet.",
    ],
    solution: [
      "GoFreyra holder dokumentationen rapportklar løbende.",
      "Når rapporten skal afleveres, trækkes den direkte fra platformen med audit trail og ESRS-mapping.",
    ],
    modules: ["SmartConnect+", "ESG Ledger", "GoFreyra Dashboard"],
    sectors: [
      { slug: "industri", name: "Industri" },
      { slug: "forsyning", name: "Forsyning" },
      { slug: "energi", name: "Energi" },
      { slug: "raadgivere", name: "Rådgivere" },
    ],
    faq: [
      { q: "Hvilke rapportformater understøtter I?", a: "PDF og strukturerede dataudtræk til ESG- og rapporteringsværktøjer." },
      { q: "Kan rapporten genereres automatisk?", a: "Ja. Skabeloner kan opsættes pr. organisation." },
      { q: "Kan vi tilpasse rapporten?", a: "Ja. Layout, sektioner og indikatorer kan tilpasses." },
    ],
  },
];

export function getUseCase(slug: string): UseCase | undefined {
  return USE_CASES.find((u) => u.slug === slug);
}
