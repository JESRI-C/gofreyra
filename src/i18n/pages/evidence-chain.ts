import type { Locale } from "@/i18n/locale";

const da = {
  heading: "Evidenskæden",
  droneTitle: "Dronefoto",
  droneDescription: "Felt- og dronedata med GPS",
  publicDataTitle: "Offentlige data",
  publicDataDescription: "Kort, jord, vejr og satellit",
  verificationTitle: "Verifikation",
  verificationDescription: "AI-assisteret og faglig vurdering",
  baselineTitle: "Baseline",
  baselineDescription: "Versioneret rapport og evidenspakke",
  plantingTitle: "Beplantning",
  plantingDescription: "Egnethed pr. areal og opfølgning",
  footer: "Hvert trin er versioneret og kan spores tilbage til kilden.",
};

export type Copy = typeof da;

const en: Copy = {
  heading: "The evidence chain",
  droneTitle: "Drone imagery",
  droneDescription: "Field and drone data with GPS",
  publicDataTitle: "Public data",
  publicDataDescription: "Maps, soil, weather and satellite data",
  verificationTitle: "Verification",
  verificationDescription: "AI-assisted and professional assessment",
  baselineTitle: "Baseline",
  baselineDescription: "Versioned report and evidence package",
  plantingTitle: "Planting",
  plantingDescription: "Suitability for each land area and follow-up",
  footer: "Each step is versioned and can be traced back to its source.",
};

const de: Copy = {
  heading: "Die Nachweiskette",
  droneTitle: "Drohnenaufnahmen",
  droneDescription: "Feld- und Drohnendaten mit GPS",
  publicDataTitle: "Öffentliche Daten",
  publicDataDescription: "Karten, Boden-, Wetter- und Satellitendaten",
  verificationTitle: "Verifizierung",
  verificationDescription: "KI-gestützte und fachliche Bewertung",
  baselineTitle: "Ausgangszustand",
  baselineDescription: "Versionierter Bericht und Nachweispaket",
  plantingTitle: "Bepflanzung",
  plantingDescription: "Eignung je Fläche und Nachverfolgung",
  footer: "Jeder Schritt ist versioniert und lässt sich bis zur Quelle zurückverfolgen.",
};

export const COPY: Record<Locale, Copy> = { da, en, de };
