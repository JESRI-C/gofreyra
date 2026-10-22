export interface Ydelse {
  slug: string;
  title: string;
  short: string;
  intro: string;
  gets: string[];
  when: string;
  needs: string[];
  steps: { n: string; t: string; d: string }[];
  price: string;
  related: string[];
}

export const YDELSER: Ydelse[] = [
  {
    slug: "dronefoerregistrering",
    title: "Droneførregistrering og baseline af vandløb og arealer",
    short: "Droneflyvning, offentlige data og faglig verifikation samlet i en versioneret baseline.",
    intro:
      "En førregistrering dokumenterer området, som det ser ud, før projektet går i gang. Vi flyver området med drone, henter de relevante offentlige data og samler det hele i en versioneret baseline, som både kommunen, lodsejere og treparten kan forholde sig til.",
    gets: [
      "Droneflyvning af området med GPS-stemplet billedmateriale",
      "Delstrækninger og gentagelsespunkter registreret med position",
      "Referencefotos klar til genbesøg",
      "Versioneret baselinerapport som PDF og evidenspakke",
    ],
    when:
      "Når et projekt skal i gang, og I mangler et dokumenteret udgangspunkt, som både kommunen, lodsejere og treparten kan forholde sig til.",
    needs: [
      "En afgrænsning af området, fx som kortudsnit eller matrikelnumre",
      "Adgang og tilladelser til droneflyvning på arealet",
      "En kontaktperson, der kender området og projektet",
    ],
    steps: [
      { n: "01", t: "Afklaring", d: "Vi aftaler område, formål og hvad baselinen skal kunne bruges til." },
      { n: "02", t: "Flyvning", d: "Vi flyver området og registrerer delstrækninger og gentagelsespunkter." },
      { n: "03", t: "Verifikation", d: "Dronefotos sammenlignes med offentlige data og vurderes fagligt." },
      { n: "04", t: "Baseline", d: "I får en versioneret rapport og evidenspakke klar til brug." },
    ],
    price: "Pris efter aftale",
    related: ["datagrundlag", "monitorering"],
  },
  {
    slug: "datagrundlag",
    title: "Datagrundlag og screening fra offentlige data",
    short: "Kort, jord, vejr og satellit hentet og samlet på det konkrete areal.",
    intro:
      "Før I investerer i feltarbejde, kan meget afgrænses med offentlige data. Vi henter de relevante lag fra Dataforsyningen, Danmarks Arealinformation, GEUS, DMI og Copernicus Sentinel-2 og samler dem på jeres areal med kildeangivelse og hentedato.",
    gets: [
      "Ortofoto, matrikel og højdemodel fra Dataforsyningen",
      "§3-registrerede natur- og beskyttede områder fra Danmarks Arealinformation",
      "Jordart og lavbund fra GEUS, vejr fra DMI, satellit fra Copernicus Sentinel-2",
      "Samlet kildeoversigt med status pr. datalag",
    ],
    when:
      "Tidligt i forløbet, før I investerer i feltarbejde, eller når I skal screene flere arealer og prioritere, hvor det giver mening at gå videre.",
    needs: [
      "En afgrænsning af det eller de arealer, der skal screenes",
      "En kort beskrivelse af, hvad screeningen skal bruges til",
      "En kontaktperson til spørgsmål undervejs",
    ],
    steps: [
      { n: "01", t: "Afgrænsning", d: "Vi aftaler arealer og hvilke spørgsmål screeningen skal besvare." },
      { n: "02", t: "Hentning", d: "De relevante datalag hentes automatisk fra de offentlige kilder." },
      { n: "03", t: "Samling", d: "Data samles på arealet med kilde og hentedato pr. lag." },
      { n: "04", t: "Leverance", d: "I får en oversigt med status pr. datalag og vores vurdering." },
    ],
    price: "Pris efter aftale",
    related: ["dronefoerregistrering", "beplantningsanalyse"],
  },
  {
    slug: "monitorering",
    title: "Gentagen monitorering og efterflyvning (før/efter)",
    short: "Gentagelsespunkter og før/efter-dokumentation, så udviklingen kan følges over tid.",
    intro:
      "Når et projekt er igangsat, opstår spørgsmålet: hvad har indsatsen flyttet? Vi flyver igen fra de samme gentagelsespunkter som ved førregistreringen, så før og efter kan sammenlignes direkte.",
    gets: [
      "Efterflyvning fra de samme gentagelsespunkter som ved førregistreringen",
      "Før/efter-fotos, der kan sammenlignes direkte",
      "Opdateret evidenspakke efter hvert genbesøg",
      "Grundlag til status over for fonde og trepart",
    ],
    when:
      "Når et projekt er igangsat, og I skal kunne vise, hvad indsatsen har flyttet, fx over for en fond eller den lokale trepart.",
    needs: [
      "En eksisterende førregistrering eller aftale om at etablere en",
      "Adgang og tilladelser til fornyet droneflyvning",
      "En kontaktperson, der kender projektets status",
    ],
    steps: [
      { n: "01", t: "Plan", d: "Vi aftaler tidspunkt og omfang for efterflyvningen." },
      { n: "02", t: "Flyvning", d: "Vi flyver fra de samme gentagelsespunkter som sidst." },
      { n: "03", t: "Sammenligning", d: "Før og efter stilles op side om side og vurderes." },
      { n: "04", t: "Opdatering", d: "Evidenspakken opdateres som en ny version." },
    ],
    price: "Pris efter aftale",
    related: ["dronefoerregistrering", "evidenspakke"],
  },
  {
    slug: "beplantningsanalyse",
    title: "Beplantnings- og naturegnethedsanalyse (skitse til faglig validering)",
    short: "Regelbaseret vurdering af, hvor beplantning er egnet, betinget egnet eller uegnet.",
    intro:
      "Vi laver en regelbaseret vurdering af, hvor beplantning og naturtiltag er egnet, betinget egnet eller uegnet. Resultatet er en skitse med begrundelser og kildehenvisninger, som jeres rådgiver kan validere fagligt.",
    gets: [
      "Egnethedskort i hektar: egnet, betinget egnet, uegnet",
      "Begrundelse pr. areal med kildehenvisning",
      "Effekter vist som intervaller fra forskningslitteraturen, ikke som løfter",
      "Skitse klar til faglig validering hos jeres rådgiver",
    ],
    when:
      "Når I overvejer beplantning eller naturtiltag og har brug for et struktureret udkast, som en fagperson kan tage stilling til.",
    needs: [
      "En afgrænsning af de arealer, der skal vurderes",
      "Oplysninger om jeres overvejelser, fx beplantning eller vådområder",
      "En rådgiver eller fagperson, der kan validere skitsen",
    ],
    steps: [
      { n: "01", t: "Datagrundlag", d: "Jordart, lavbund, højde og beskyttede områder samles på arealet." },
      { n: "02", t: "Regler", d: "Vi anvender dokumenterede regler for egnethed pr. areal." },
      { n: "03", t: "Skitse", d: "I får et egnethedskort med begrundelse og kilder pr. areal." },
      { n: "04", t: "Validering", d: "Jeres rådgiver gennemgår og godkender skitsen fagligt." },
    ],
    price: "Pris efter aftale",
    related: ["datagrundlag", "evidenspakke"],
  },
  {
    slug: "evidenspakke",
    title: "Evidenspakke til fonde, ansøgninger og lokal trepart",
    short: "Et samlet, efterprøveligt grundlag, hvor hver påstand kan spores til sin kilde.",
    intro:
      "En evidenspakke samler dronefotos, kortdata og vurderinger ét sted, med kildehenvisning på hver påstand. Pakken er versioneret og forsynet med et SHA-256 fingeraftryk, så den kan dokumenteres uændret.",
    gets: [
      "Samlet pakke med dronefotos, kortdata og vurderinger",
      "Kildehenvisning på hver påstand",
      "Versionering og SHA-256 fingeraftryk, så pakken kan dokumenteres uændret",
      "Klar til deling med fonde, ansøgninger og den lokale trepart",
    ],
    when:
      "Når I skal søge midler, indsende en ansøgning eller præsentere et projekt for treparten, og grundlaget skal kunne efterprøves.",
    needs: [
      "Det materiale, pakken skal bygge på, fx en førregistrering",
      "Oplysning om, hvem pakken skal bruges over for",
      "En kontaktperson til faglige spørgsmål",
    ],
    steps: [
      { n: "01", t: "Indhold", d: "Vi aftaler, hvad pakken skal indeholde, og hvem den henvender sig til." },
      { n: "02", t: "Samling", d: "Fotos, data og vurderinger samles med kildehenvisninger." },
      { n: "03", t: "Versionering", d: "Pakken versioneres og forsynes med SHA-256 fingeraftryk." },
      { n: "04", t: "Leverance", d: "I får pakken som PDF og ZIP, klar til deling." },
    ],
    price: "Pris efter aftale",
    related: ["monitorering", "pilot"],
  },
  {
    slug: "pilot",
    title: "Pilotforløb og projekt-/porteføljelicens til Evidence Workspace (fra 125.000 kr.)",
    short: "Et afgrænset forløb, der viser hele evidenskæden i praksis på jeres eget område.",
    intro:
      "Et pilotforløb er en afgrænset leverance på jeres eget område, hvor I får hele evidenskæden fra dronefoto til versioneret baseline. Bagefter har I noget konkret at vurdere, før I binder jer til mere.",
    gets: [
      "Et afgrænset forløb på jeres eget område",
      "Hele evidenskæden fra dronefoto til versioneret baseline",
      "Adgang til Freyra Evidence Workspace for jeres team",
      "Gennemgang af resultatet og plan for videre brug",
    ],
    when:
      "Når I vil se værdien i praksis, før I binder jer til mere. Et pilotforløb giver jer en komplet leverance at vurdere på.",
    needs: [
      "Et konkret område, der egner sig til et afgrænset forløb",
      "Adgang og tilladelser til droneflyvning",
      "En kontaktperson og et lille team, der skal have adgang",
    ],
    steps: [
      { n: "01", t: "Aftale", d: "Vi aftaler område, omfang og fast pris, før vi går i gang." },
      { n: "02", t: "Gennemførelse", d: "Flyvning, datahentning, verifikation og baseline." },
      { n: "03", t: "Adgang", d: "Jeres team får adgang til Evidence Workspace." },
      { n: "04", t: "Evaluering", d: "Vi gennemgår resultatet og lægger en plan for videre brug." },
    ],
    price: "Fra 125.000 kr.",
    related: ["dronefoerregistrering", "evidenspakke"],
  },
];

export function getYdelse(slug: string): Ydelse | undefined {
  return YDELSER.find((y) => y.slug === slug);
}
