import type { Locale } from "@/i18n/locale";

const da = {
  metaTitle: "Ressourcer og FAQ | Freyra Evidence Workspace",
  metaDescription: "Svar på ofte stillede spørgsmål om metode, data, leverancer, pris og teknik i Freyra Evidence Workspace, plus en ordliste over centrale begreber.",
  breadcrumbs: { home: "Forside", faq: "FAQ" },
  eyebrow: "Ressourcer",
  title: "Spørgsmål og svar.",
  introduction: "Samlet om metode, data, leverancer, samarbejde og teknik. Finder du ikke svaret, er du velkommen til at kontakte os.",
  glossaryEyebrow: "Ordliste",
  glossaryTitle: "Centrale begreber, kort forklaret.",
  ctaTitle: "Har du et spørgsmål, der ikke står her?",
  ctaSubtitle: "Skriv til os, så vender vi tilbage med et konkret svar.",
  ctaLabel: "Kontakt os",
  groups: [
    {
      title: "Metode",
      items: [
        { q: "Hvordan foregår en førregistrering?", a: "Vi flyver området med drone, registrerer delstrækninger og gentagelsespunkter, henter offentlige data og samler det hele i en versioneret baseline." },
        { q: "Hvad betyder verifikation hos Freyra?", a: "AI assisterer sammenligningen af offentlige data og dronefotos. Derefter laver en fagperson vurderingen, og den logges." },
        { q: "Er Freyra en erstatning for MARS, GATE eller Miljøportalen?", a: "Nej. Freyra er et lag oven på de systemer, I allerede bruger. Vi samler og verificerer data, så de kan bruges videre i jeres eksisterende arbejdsgange." },
        { q: "Hvor hurtigt kan vi komme i gang?", a: "Det afhænger af området og vejret til droneflyvning. Vi aftaler en plan i første samtale." },
      ],
    },
    {
      title: "Data og kilder",
      items: [
        { q: "Hvilke datakilder bruger I?", a: "Dataforsyningen (ortofoto, matrikel, højdemodel), Danmarks Arealinformation (§3-natur og beskyttede områder), GEUS (jordart og lavbund), DMI (vejr) og Copernicus Sentinel-2 (satellit)." },
        { q: "Kan vi se, hvor data kommer fra?", a: "Ja. Hvert datalag har kildeangivelse og hentedato, og hver påstand i en leverance kan spores tilbage til sin kilde." },
        { q: "Hvem ejer de data, I samler om vores område?", a: "Det aftaler vi i kontrakten. Udgangspunktet er, at materialet tilhører jer som kunde." },
      ],
    },
    {
      title: "Leverancer",
      items: [
        { q: "Hvad er en evidenspakke?", a: "En samlet pakke med dronefotos, kortdata og vurderinger, hvor hver påstand har kildehenvisning. Pakken er versioneret og forsynet med et SHA-256 fingeraftryk." },
        { q: "Hvad er en baseline?", a: "En versioneret rapport, der dokumenterer området, som det så ud, før projektet gik i gang. Den leveres som PDF og evidenspakke." },
        { q: "Kan I beregne, hvor meget et tiltag flytter?", a: "Vi viser effekter som intervaller fra forskningslitteraturen, ikke som præcise tal. Beplantningsanalyser er skitser til faglig validering hos jeres rådgiver." },
      ],
    },
    {
      title: "Samarbejde og pris",
      items: [
        { q: "Hvad koster et pilotforløb?", a: "Et pilotforløb starter fra 125.000 kr. Det dækker et afgrænset område med aftalt omfang." },
        { q: "Hvad koster de øvrige ydelser?", a: "Pris efter aftale. Prisen afhænger af områdets størrelse, datagrundlag og omfang. Vi aftaler omfang og pris, før vi går i gang." },
        { q: "Kan I arbejde sammen med vores rådgiver?", a: "Ja. Vi leverer datagrundlag og evidenspakker, som jeres rådgiver kan bygge videre på. Egnethedsanalyser leveres som skitser til faglig validering hos jeres rådgiver." },
        { q: "Hvem bruger Freyra?", a: "Kommuner, lokale treparter, rådgivere, naturfonde og større lodsejere, der arbejder med natur- og arealprojekter i Grøn Trepart." },
      ],
    },
    {
      title: "Teknik og adgang",
      items: [
        { q: "Hvad er Freyra Evidence Workspace?", a: "Det er arbejdspladsen, hvor jeres team kan se fotos, kortdata, rapporter og versioner for jeres projekter samlet ét sted." },
        { q: "Skal vi installere noget?", a: "Nej. Evidence Workspace kører i browseren. Jeres team får adgang med login." },
        { q: "Hvordan dokumenteres det, at en pakke er uændret?", a: "Hver version af en evidenspakke får et SHA-256 fingeraftryk. Hvis indholdet ændres, ændres fingeraftrykket, og det kan kontrolleres." },
      ],
    },
  ],
  glossary: [
    { t: "Grøn Trepart", d: "Aftalen mellem staten, landbruget, natur- og miljøorganisationer og kommunerne om omstilling af arealer til natur, skov og klima. Indsatsen gennemføres lokalt i lokale treparter." },
    { t: "Lokal trepart", d: "Det lokale samarbejde, typisk ledet af kommunerne, der omsætter Grøn Trepart til konkrete projekter med lodsejere og organisationer." },
    { t: "Baseline", d: "Det dokumenterede udgangspunkt for et område, før et projekt går i gang. Uden baseline kan forandring ikke vises." },
    { t: "Førregistrering", d: "Registrering af et områdes tilstand før en indsats, typisk med dronefotos, kortdata og faglig vurdering." },
    { t: "Gentagelsespunkt", d: "Et fast punkt med kendt position, hvorfra der tages fotos ved hver flyvning, så før og efter kan sammenlignes." },
    { t: "Evidenspakke", d: "En samlet, versioneret pakke af fotos, data og vurderinger med kildehenvisning på hver påstand." },
    { t: "SHA-256", d: "En metode til at beregne et entydigt fingeraftryk af en fil. Ændres filen, ændres fingeraftrykket, og manipulation kan afsløres." },
    { t: "Ortofoto", d: "Et luftfoto, der er retvinklet og målsat, så det kan bruges som kort. I Danmark hentes det fra Dataforsyningen." },
    { t: "§3-natur", d: "Naturtyper, der er beskyttet efter naturbeskyttelseslovens §3, fx søer, vandløb, heder og overdrev." },
    { t: "Lavbund", d: "Lavtliggende jorde med højt indhold af organisk materiale. Data om lavbund hentes fra GEUS." },
  ],
};

export type Copy = typeof da;

const en: Copy = {
  metaTitle: "Resources and FAQ | Freyra Evidence Workspace",
  metaDescription: "Answers to common questions about methods, data, deliverables, pricing and technology in Freyra Evidence Workspace, plus a glossary of key terms.",
  breadcrumbs: { home: "Home", faq: "FAQ" },
  eyebrow: "Resources",
  title: "Questions and answers.",
  introduction: "An overview of methods, data, deliverables, collaboration and technology. If you cannot find the answer, please contact us.",
  glossaryEyebrow: "Glossary",
  glossaryTitle: "Key terms, briefly explained.",
  ctaTitle: "Have a question that is not covered here?",
  ctaSubtitle: "Write to us and we will get back to you with a specific answer.",
  ctaLabel: "Contact us",
  groups: [
    {
      title: "Methods",
      items: [
        { q: "How is a pre-intervention survey carried out?", a: "We fly a drone over the area, record subsections and repeat photography points, retrieve public data and bring it all together in a versioned baseline." },
        { q: "What does verification mean at Freyra?", a: "AI assists with comparing public data and drone photographs. A specialist then makes the assessment, which is logged." },
        { q: "Does Freyra replace MARS, GATE or Danmarks Miljøportal (Denmark's environmental data portal)?", a: "No. Freyra is a layer on top of the systems you already use. We collect and verify data so that it can be used in your existing workflows." },
        { q: "How quickly can we get started?", a: "That depends on the area and the weather conditions for drone flights. We agree on a plan during our first conversation." },
      ],
    },
    {
      title: "Data and sources",
      items: [
        { q: "Which data sources do you use?", a: "Dataforsyningen (orthophotos, cadastral data, elevation model), Danmarks Arealinformation (habitats protected under § 3 of the Danish Nature Protection Act and protected areas), GEUS (soil types and low-lying organic soils), DMI (weather) and Copernicus Sentinel-2 (satellite)." },
        { q: "Can we see where the data comes from?", a: "Yes. Each data layer has a source reference and retrieval date, and every claim in a deliverable can be traced back to its source." },
        { q: "Who owns the data you collect about our area?", a: "We agree on this in the contract. The starting point is that the material belongs to you as the client." },
      ],
    },
    {
      title: "Deliverables",
      items: [
        { q: "What is an evidence package?", a: "A consolidated package of drone photographs, map data and assessments, with a source reference for every claim. The package is versioned and assigned a SHA-256 fingerprint." },
        { q: "What is a baseline?", a: "A versioned report documenting the area as it was before the project began. It is delivered as a PDF and an evidence package." },
        { q: "Can you calculate how much difference an intervention makes?", a: "We present effects as ranges from research literature, not as precise figures. Planting analyses are preliminary outlines for professional validation by your adviser." },
      ],
    },
    {
      title: "Collaboration and pricing",
      items: [
        { q: "How much does a pilot project cost?", a: "A pilot project starts from DKK 125,000. This covers a defined area with an agreed scope." },
        { q: "How much do the other services cost?", a: "Prices are agreed individually. The price depends on the size of the area, the available data and the scope. We agree on the scope and price before we start." },
        { q: "Can you work with our adviser?", a: "Yes. We provide data and evidence packages that your adviser can build on. Suitability analyses are delivered as preliminary outlines for professional validation by your adviser." },
        { q: "Who uses Freyra?", a: "Municipalities, local tripartite partnerships, advisers, nature conservation foundations and larger landowners working on nature and land-use projects under the Green Tripartite (Grøn Trepart)." },
      ],
    },
    {
      title: "Technology and access",
      items: [
        { q: "What is Freyra Evidence Workspace?", a: "It is the workspace where your team can view photographs, map data, reports and versions for your projects, all in one place." },
        { q: "Do we need to install anything?", a: "No. Evidence Workspace runs in the browser. Your team accesses it using a login." },
        { q: "How do you document that a package is unchanged?", a: "Each version of an evidence package is assigned a SHA-256 fingerprint. If the content changes, the fingerprint changes, and this can be checked." },
      ],
    },
  ],
  glossary: [
    { t: "Green Tripartite (Grøn Trepart)", d: "The agreement between the Danish state, the agricultural sector, nature and environmental organisations and municipalities on converting land for nature, forests and climate purposes. The work is carried out locally through local tripartite partnerships." },
    { t: "Local tripartite partnership", d: "The local collaboration, typically led by municipalities, that turns the Green Tripartite into concrete projects with landowners and organisations." },
    { t: "Baseline", d: "The documented starting point for an area before a project begins. Without a baseline, change cannot be demonstrated." },
    { t: "Pre-intervention survey", d: "Recording the condition of an area before an intervention, typically using drone photographs, map data and professional assessment." },
    { t: "Repeat photography point", d: "A fixed point with a known position from which photographs are taken on each flight, allowing before-and-after comparisons." },
    { t: "Evidence package", d: "A consolidated, versioned package of photographs, data and assessments with a source reference for every claim." },
    { t: "SHA-256", d: "A method for calculating a unique fingerprint for a file. If the file changes, the fingerprint changes, and tampering can be detected." },
    { t: "Orthophoto", d: "An aerial photograph that has been geometrically corrected and scaled so that it can be used as a map. In Denmark, it is obtained from Dataforsyningen." },
    { t: "§ 3 protected habitats", d: "Habitat types protected under § 3 of the Danish Nature Protection Act, such as lakes, watercourses, heathland and dry grassland." },
    { t: "Low-lying organic soils", d: "Low-lying soils with a high organic matter content. Data on these soils is obtained from GEUS." },
  ],
};

const de: Copy = {
  metaTitle: "Ressourcen und FAQ | Freyra Evidence Workspace",
  metaDescription: "Antworten zu Methoden, Daten, Ergebnissen, Preisen und Technik in Freyra Evidence Workspace sowie ein Glossar der wichtigsten Begriffe.",
  breadcrumbs: { home: "Startseite", faq: "FAQ" },
  eyebrow: "Ressourcen",
  title: "Fragen und Antworten.",
  introduction: "Ein Überblick über Methoden, Daten, Ergebnisse, Zusammenarbeit und Technik. Falls Sie die Antwort nicht finden, kontaktieren Sie uns gerne.",
  glossaryEyebrow: "Glossar",
  glossaryTitle: "Zentrale Begriffe, kurz erklärt.",
  ctaTitle: "Haben Sie eine Frage, die hier nicht beantwortet wird?",
  ctaSubtitle: "Schreiben Sie uns, und wir melden uns mit einer konkreten Antwort bei Ihnen.",
  ctaLabel: "Kontaktieren Sie uns",
  groups: [
    {
      title: "Methoden",
      items: [
        { q: "Wie läuft eine Bestandsaufnahme vor Maßnahmenbeginn ab?", a: "Wir befliegen das Gebiet mit einer Drohne, erfassen Teilabschnitte und Wiederholungsaufnahmepunkte, rufen öffentliche Daten ab und führen alles in einer versionierten Baseline zusammen." },
        { q: "Was bedeutet Verifizierung bei Freyra?", a: "KI unterstützt den Vergleich öffentlicher Daten mit Drohnenfotos. Anschließend nimmt eine Fachperson die Bewertung vor, die protokolliert wird." },
        { q: "Ersetzt Freyra MARS, GATE oder Danmarks Miljøportal (Dänemarks Umweltdatenportal)?", a: "Nein. Freyra ergänzt die Systeme, die Sie bereits nutzen, um eine zusätzliche Ebene. Wir sammeln und verifizieren Daten, damit sie in Ihren bestehenden Arbeitsabläufen weiterverwendet werden können." },
        { q: "Wie schnell können wir beginnen?", a: "Das hängt vom Gebiet und den Wetterbedingungen für Drohnenflüge ab. Wir vereinbaren im ersten Gespräch einen Plan." },
      ],
    },
    {
      title: "Daten und Quellen",
      items: [
        { q: "Welche Datenquellen nutzen Sie?", a: "Dataforsyningen (Orthofotos, Kataster, Höhenmodell), Danmarks Arealinformation (nach § 3 des dänischen Naturschutzgesetzes geschützte Biotope und Schutzgebiete), GEUS (Bodenarten und tief liegende organische Böden), DMI (Wetter) und Copernicus Sentinel-2 (Satellit)." },
        { q: "Können wir sehen, woher die Daten stammen?", a: "Ja. Jede Datenebene enthält eine Quellenangabe und ein Abrufdatum, und jede Aussage in einem gelieferten Ergebnis lässt sich bis zu ihrer Quelle zurückverfolgen." },
        { q: "Wem gehören die Daten, die Sie über unser Gebiet sammeln?", a: "Das vereinbaren wir im Vertrag. Grundsätzlich gehört das Material Ihnen als Kunde." },
      ],
    },
    {
      title: "Gelieferte Ergebnisse",
      items: [
        { q: "Was ist ein Evidenzpaket?", a: "Ein zusammengeführtes Paket aus Drohnenfotos, Kartendaten und Bewertungen, in dem jede Aussage einen Quellenverweis hat. Das Paket ist versioniert und mit einem SHA-256-Fingerabdruck versehen." },
        { q: "Was ist eine Baseline?", a: "Ein versionierter Bericht, der das Gebiet in seinem Zustand vor Projektbeginn dokumentiert. Er wird als PDF und Evidenzpaket geliefert." },
        { q: "Können Sie berechnen, wie viel eine Maßnahme bewirkt?", a: "Wir stellen Wirkungen als Bandbreiten aus der Forschungsliteratur dar, nicht als genaue Zahlen. Pflanzungsanalysen sind Entwürfe zur fachlichen Validierung durch Ihre Beratung." },
      ],
    },
    {
      title: "Zusammenarbeit und Preise",
      items: [
        { q: "Was kostet ein Pilotprojekt?", a: "Ein Pilotprojekt ist ab 125.000 DKK möglich. Es umfasst ein abgegrenztes Gebiet mit vereinbartem Leistungsumfang." },
        { q: "Was kosten die übrigen Leistungen?", a: "Preise nach Vereinbarung. Der Preis hängt von der Größe des Gebiets, der Datengrundlage und dem Leistungsumfang ab. Wir vereinbaren Umfang und Preis, bevor wir beginnen." },
        { q: "Können Sie mit unserer Beratung zusammenarbeiten?", a: "Ja. Wir liefern Datengrundlagen und Evidenzpakete, auf denen Ihre Beratung aufbauen kann. Eignungsanalysen werden als Entwürfe zur fachlichen Validierung durch Ihre Beratung geliefert." },
        { q: "Wer nutzt Freyra?", a: "Kommunen, lokale Dreiparteienpartnerschaften, Beratungsfachleute, Naturschutzstiftungen und größere Grundeigentümer, die im Rahmen der Grünen Dreiparteienvereinbarung (Grøn Trepart) an Natur- und Flächenprojekten arbeiten." },
      ],
    },
    {
      title: "Technik und Zugang",
      items: [
        { q: "Was ist Freyra Evidence Workspace?", a: "Es ist der Arbeitsbereich, in dem Ihr Team Fotos, Kartendaten, Berichte und Versionen zu Ihren Projekten an einem Ort einsehen kann." },
        { q: "Müssen wir etwas installieren?", a: "Nein. Evidence Workspace läuft im Browser. Ihr Team erhält Zugang über eine Anmeldung." },
        { q: "Wie wird dokumentiert, dass ein Paket unverändert ist?", a: "Jede Version eines Evidenzpakets erhält einen SHA-256-Fingerabdruck. Wenn sich der Inhalt ändert, ändert sich der Fingerabdruck. Das lässt sich überprüfen." },
      ],
    },
  ],
  glossary: [
    { t: "Grüne Dreiparteienvereinbarung (Grøn Trepart)", d: "Die Vereinbarung zwischen dem dänischen Staat, der Landwirtschaft, Natur- und Umweltorganisationen sowie den Kommunen zur Umwandlung von Flächen für Natur, Wald und Klimaziele. Die Umsetzung erfolgt vor Ort in lokalen Dreiparteienpartnerschaften." },
    { t: "Lokale Dreiparteienpartnerschaft", d: "Die lokale Zusammenarbeit, meist unter Leitung der Kommunen, die die Grüne Dreiparteienvereinbarung gemeinsam mit Grundeigentümern und Organisationen in konkrete Projekte umsetzt." },
    { t: "Baseline", d: "Der dokumentierte Ausgangszustand eines Gebiets vor Projektbeginn. Ohne Baseline lassen sich Veränderungen nicht nachweisen." },
    { t: "Bestandsaufnahme vor Maßnahmenbeginn", d: "Erfassung des Zustands eines Gebiets vor einer Maßnahme, in der Regel anhand von Drohnenfotos, Kartendaten und fachlicher Bewertung." },
    { t: "Wiederholungsaufnahmepunkt", d: "Ein fester Punkt mit bekannter Position, von dem aus bei jedem Flug Fotos aufgenommen werden, sodass sich der Zustand vorher und nachher vergleichen lässt." },
    { t: "Evidenzpaket", d: "Ein zusammengeführtes, versioniertes Paket aus Fotos, Daten und Bewertungen mit einem Quellenverweis für jede Aussage." },
    { t: "SHA-256", d: "Ein Verfahren zur Berechnung eines eindeutigen Fingerabdrucks einer Datei. Ändert sich die Datei, ändert sich der Fingerabdruck, und Manipulationen lassen sich erkennen." },
    { t: "Orthofoto", d: "Ein Luftbild, das geometrisch entzerrt und maßstabsgetreu aufbereitet wurde, sodass es als Karte genutzt werden kann. In Dänemark wird es von Dataforsyningen bezogen." },
    { t: "Nach § 3 geschützte Biotope", d: "Biotoptypen, die nach § 3 des dänischen Naturschutzgesetzes geschützt sind, zum Beispiel Seen, Fließgewässer, Heiden und Magerrasen." },
    { t: "Tief liegende organische Böden", d: "Tief liegende Böden mit einem hohen Gehalt an organischer Substanz. Daten zu diesen Böden werden von GEUS bezogen." },
  ],
};

export const COPY: Record<Locale, Copy> = { da, en, de };
