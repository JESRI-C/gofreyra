import type { Locale } from "@/i18n/locale";

const da = {
  fallbackTitle: "Ydelse | Freyra",
  fallbackDescription: "Ydelse fra Freyra.",
  home: "Forside",
  services: "Ydelser",
  allServices: "Alle ydelser",
  whatYouGet: "Hvad du får",
  whenItMakesSense: "Hvornår det giver mening",
  whatWeNeed: "Hvad vi skal bruge fra jer",
  price: "Pris",
  excludingVat: "Alle priser er ekskl. moms.",
  steps: "Forløbet i trin",
  relatedServices: "Relaterede ydelser",
  readMore: "Læs mere",
  ctaTitle: "Skal vi tage en snak om jeres område?",
  ctaSubtitle: "Fortæl os om projektet, så vender vi tilbage med en konkret vurdering.",
  ctaLabel: "Book en snak",
  photos: {
    dronefoerregistrering: {
      alt: "Vandløb med små åbne vandflader, græs og bevoksning, set fra drone",
      caption: "Eget dronefoto, august 2026.",
    },
    datagrundlag: {
      alt: "Vandløb gennem skov, set oppefra med drone",
      caption: "Eget dronefoto, august 2023.",
    },
    monitorering: {
      alt: "Lige vandløb mellem eng og krat, set fra drone",
      caption: "Eget dronefoto, august 2024.",
    },
    beplantningsanalyse: {
      alt: "Naturgenopretning med jordarbejde, set fra drone",
      caption: "Eget dronefoto, august 2024.",
    },
    evidenspakke: {
      alt: "Vandløbskorridor mellem dyrkede marker, set fra drone ved efterflyvning",
      caption: "Eget dronefoto, september 2026.",
    },
    pilot: {
      alt: "Græsstrimmel mellem dyrkede marker, referencefoto fra drone",
      caption: "Eget dronefoto, august 2026.",
    },
  },
  seo: {
    dronefoerregistrering: {
      title: "Droneførregistrering og baseline af arealer | Freyra",
      description: "Førregistrering af vandløb og arealer før projektstart: droneflyvning, relevante offentlige data og faglig verifikation samlet i en versioneret baseline.",
    },
    datagrundlag: {
      title: "Datagrundlag og screening fra offentlige data | Freyra",
      description: "Offentlige data fra Dataforsyningen, Danmarks Arealinformation, GEUS, DMI og Sentinel-2 samlet på jeres areal med kildeangivelse og hentedato.",
    },
    monitorering: {
      title: "Gentagen monitorering og efterflyvning | Freyra",
      description: "Efterflyvning fra de samme gentagelsespunkter som ved førregistreringen, så før og efter kan sammenlignes direkte og udviklingen kan følges over tid.",
    },
    beplantningsanalyse: {
      title: "Beplantnings- og naturegnethedsanalyse | Freyra",
      description: "Regelbaseret vurdering af, hvor beplantning og naturtiltag er egnet, betinget egnet eller uegnet. En skitse med kilder, som jeres rådgiver kan validere.",
    },
    evidenspakke: {
      title: "Evidenspakke til fonde og lokal trepart | Freyra",
      description: "Dronefotos, kortdata og vurderinger samlet med kilde på hver påstand. Versioneret og med SHA-256 fingeraftryk til fonde, ansøgninger og lokal trepart.",
    },
    pilot: {
      title: "Pilotforløb og licens til Evidence Workspace | Freyra",
      description: "Et afgrænset pilotforløb på jeres eget område med hele evidenskæden fra dronefoto til versioneret baseline. Pilotforløb fra 125.000 kr. ekskl. moms.",
    },
  },
};

export type Copy = typeof da;

const en: Copy = {
  fallbackTitle: "Service | Freyra",
  fallbackDescription: "Service from Freyra.",
  home: "Home",
  services: "Services",
  allServices: "All services",
  whatYouGet: "What you get",
  whenItMakesSense: "When it makes sense",
  whatWeNeed: "What we need from you",
  price: "Price",
  excludingVat: "All prices exclude VAT.",
  steps: "The process step by step",
  relatedServices: "Related services",
  readMore: "Read more",
  ctaTitle: "Shall we discuss your site?",
  ctaSubtitle: "Tell us about the project and we will get back to you with a specific assessment.",
  ctaLabel: "Book a conversation",
  photos: {
    dronefoerregistrering: {
      alt: "Watercourse with small areas of open water, grass and vegetation, viewed by drone",
      caption: "Our own drone photograph, August 2026.",
    },
    datagrundlag: {
      alt: "Watercourse through woodland, viewed from above by drone",
      caption: "Our own drone photograph, August 2023.",
    },
    monitorering: {
      alt: "Straight watercourse between meadow and scrub, viewed by drone",
      caption: "Our own drone photograph, August 2024.",
    },
    beplantningsanalyse: {
      alt: "Nature restoration with earthworks, viewed by drone",
      caption: "Our own drone photograph, August 2024.",
    },
    evidenspakke: {
      alt: "Watercourse corridor between cultivated fields, viewed by drone during a follow-up flight",
      caption: "Our own drone photograph, September 2026.",
    },
    pilot: {
      alt: "Grass strip between cultivated fields, reference photograph taken by drone",
      caption: "Our own drone photograph, August 2026.",
    },
  },
  seo: {
    dronefoerregistrering: {
      title: "Pre-project drone surveys and site baselines | Freyra",
      description: "Pre-project surveys of watercourses and land: drone flights, relevant public data and professional verification combined in a versioned baseline.",
    },
    datagrundlag: {
      title: "Data foundations and public-data screening | Freyra",
      description: "Public data from Dataforsyningen, Danmarks Arealinformation, GEUS, DMI and Sentinel-2 for your site, with sources and retrieval dates.",
    },
    monitorering: {
      title: "Repeated monitoring and follow-up flights | Freyra",
      description: "Follow-up flights from the same repeat points as the initial survey, allowing direct before-and-after comparisons and tracking of change over time.",
    },
    beplantningsanalyse: {
      title: "Planting and nature suitability analysis | Freyra",
      description: "Rule-based assessment: planting and nature measures rated suitable, conditionally suitable or unsuitable. A sourced outline for your adviser to validate.",
    },
    evidenspakke: {
      title: "Evidence for funds and local tripartite groups | Freyra",
      description: "Drone photos, map data and assessments, each claim sourced. Versioned with SHA-256 fingerprints for funds, applications and local tripartite groups.",
    },
    pilot: {
      title: "Pilot project and Evidence Workspace licence | Freyra",
      description: "A defined pilot on your own site with the full evidence chain from drone photographs to a versioned baseline. Pilots from DKK 125,000 excluding VAT.",
    },
  },
};

const de: Copy = {
  fallbackTitle: "Leistung | Freyra",
  fallbackDescription: "Leistung von Freyra.",
  home: "Startseite",
  services: "Leistungen",
  allServices: "Alle Leistungen",
  whatYouGet: "Was Sie erhalten",
  whenItMakesSense: "Wann es sinnvoll ist",
  whatWeNeed: "Was wir von Ihnen benötigen",
  price: "Preis",
  excludingVat: "Alle Preise verstehen sich zzgl. MwSt.",
  steps: "Der Ablauf in Schritten",
  relatedServices: "Verwandte Leistungen",
  readMore: "Mehr erfahren",
  ctaTitle: "Sprechen wir über Ihr Gebiet?",
  ctaSubtitle: "Erzählen Sie uns von Ihrem Projekt. Wir melden uns mit einer konkreten Einschätzung zurück.",
  ctaLabel: "Gespräch vereinbaren",
  photos: {
    dronefoerregistrering: {
      alt: "Fließgewässer mit kleinen offenen Wasserflächen, Gras und Bewuchs, aus Drohnenperspektive",
      caption: "Eigene Drohnenaufnahme, August 2026.",
    },
    datagrundlag: {
      alt: "Fließgewässer durch einen Wald, mit einer Drohne von oben aufgenommen",
      caption: "Eigene Drohnenaufnahme, August 2023.",
    },
    monitorering: {
      alt: "Gerades Fließgewässer zwischen Wiese und Gebüsch, aus Drohnenperspektive",
      caption: "Eigene Drohnenaufnahme, August 2024.",
    },
    beplantningsanalyse: {
      alt: "Renaturierung mit Erdarbeiten, aus Drohnenperspektive",
      caption: "Eigene Drohnenaufnahme, August 2024.",
    },
    evidenspakke: {
      alt: "Gewässerkorridor zwischen bewirtschafteten Feldern, bei einer Nachbefliegung mit einer Drohne aufgenommen",
      caption: "Eigene Drohnenaufnahme, September 2026.",
    },
    pilot: {
      alt: "Grasstreifen zwischen bewirtschafteten Feldern, Referenzaufnahme einer Drohne",
      caption: "Eigene Drohnenaufnahme, August 2026.",
    },
  },
  seo: {
    dronefoerregistrering: {
      title: "Drohnen-Ersterfassung und Flächenbaseline | Freyra",
      description: "Gewässer- und Flächenerfassung vor Projektstart: Drohnenflug, relevante öffentliche Daten und fachliche Prüfung in einer versionierten Baseline.",
    },
    datagrundlag: {
      title: "Datengrundlage und Screening öffentlicher Daten | Freyra",
      description: "Öffentliche Daten von Dataforsyningen, Danmarks Arealinformation, GEUS, DMI und Sentinel-2 für Ihre Fläche mit Quellenangabe und Abrufdatum.",
    },
    monitorering: {
      title: "Wiederholtes Monitoring und Nachbefliegung | Freyra",
      description: "Nachbefliegung an denselben Wiederholungspunkten wie bei der Ersterfassung für direkte Vorher-Nachher-Vergleiche und die Beobachtung der Entwicklung.",
    },
    beplantningsanalyse: {
      title: "Eignungsanalyse für Bepflanzung und Natur | Freyra",
      description: "Regelbasierte Eignung für Pflanz- und Naturmaßnahmen: geeignet, bedingt geeignet oder ungeeignet. Skizze mit Quellen zur Prüfung durch Ihre Beratung.",
    },
    evidenspakke: {
      title: "Nachweispaket für Fonds und lokale Dreiparteien | Freyra",
      description: "Drohnenfotos, Kartendaten, Bewertungen: jede Aussage belegt, versioniert mit SHA-256-Fingerabdruck für Fonds, Anträge und lokale Dreiparteiengremien.",
    },
    pilot: {
      title: "Pilotprojekt und Evidence Workspace-Lizenz | Freyra",
      description: "Begrenzter Pilot auf Ihrer Fläche: vollständige Nachweiskette vom Drohnenfoto zur versionierten Baseline. Pilotprojekte ab 125.000 DKK zzgl. MwSt.",
    },
  },
};

export const COPY: Record<Locale, Copy> = { da, en, de };
