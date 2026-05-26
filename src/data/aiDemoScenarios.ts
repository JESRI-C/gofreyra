export type DemoScenario = {
  id: string;
  title: string;
  short: string;
  location: string;
  context: string;
  data: { label: string; value: string; status?: "ok" | "warn" | "alert" }[];
};

export const aiDemoScenarios: DemoScenario[] = [
  {
    id: "hede-mols",
    title: "Naturprojekt – heden ved Mols",
    short: "Genopretning af hedeområde, biodiversitetsmonitorering",
    location: "Mols Bjerge, Syddjurs",
    context:
      "Genopretningsprojekt på 142 ha hede. Mål: øget biodiversitet, reduceret tilgroning, dokumentation til CSRD ESRS E4 (biodiversitet) og fondsrapportering.",
    data: [
      { label: "Vegetationsdække (lyng)", value: "61% (mål: 70%)", status: "warn" },
      { label: "Artsrigdom (insekter, 12 mdr)", value: "+18% vs. baseline", status: "ok" },
      { label: "Tilgroning (birk/fyr)", value: "9% (op fra 6%)", status: "warn" },
      { label: "Sjældne arter registreret", value: "3 (markfirben, hedelærke, ulvefod)", status: "ok" },
      { label: "Sidste afgræsning", value: "47 dage siden", status: "alert" },
      { label: "Nedbør seneste 30 dage", value: "23 mm (under normal)", status: "warn" },
    ],
  },
  {
    id: "vandkvalitet-kommune",
    title: "Kommunal vandkvalitet – å-system",
    short: "Realtids-sensorer på recipient, nitrat og ilt",
    location: "Storå, vestjysk kommune",
    context:
      "12 sensorer langs 28 km vandløb. Måler nitrat, fosfor, ilt og temperatur. Anvendes til vandområdeplan-rapportering og dialog med landbrug.",
    data: [
      { label: "Nitrat (gns. 7 dage)", value: "8.4 mg/L (grænse: 8.0)", status: "alert" },
      { label: "Iltindhold", value: "7.2 mg/L", status: "ok" },
      { label: "Vandtemperatur", value: "14.8 °C (+1.3 vs. normal)", status: "warn" },
      { label: "Fosfor total", value: "0.12 mg/L", status: "ok" },
      { label: "Sensor-oppetid", value: "11/12 aktive", status: "warn" },
      { label: "Nedbørshændelse seneste 48t", value: "Ja (38 mm)", status: "warn" },
    ],
  },
  {
    id: "industri-co2",
    title: "Industri – CO2 og spildevand",
    short: "Produktionsanlæg med Scope 1+2 emissioner",
    location: "Fødevareproduktion, Jylland",
    context:
      "Produktionsanlæg med årlig CSRD-rapporteringspligt. Følger Scope 1 (naturgas), Scope 2 (el) og spildevandsudledning. Mål: -30% CO2 i 2027 vs. 2024.",
    data: [
      { label: "Scope 1 (måned)", value: "412 tCO2e (-4% YoY)", status: "ok" },
      { label: "Scope 2 (måned, location-based)", value: "287 tCO2e (+2%)", status: "warn" },
      { label: "Andel grøn el", value: "64%", status: "warn" },
      { label: "Spildevand COD", value: "184 mg/L (grænse: 200)", status: "ok" },
      { label: "Energi pr. produceret ton", value: "1.42 MWh (-1% YoY)", status: "ok" },
      { label: "Datadækning (sensorer)", value: "94%", status: "ok" },
    ],
  },
  {
    id: "vindmoelle-bio",
    title: "Vindmøllepark – biodiversitet",
    short: "Påvirkningsmonitorering, fugle og flagermus",
    location: "Onshore park, Vestjylland",
    context:
      "14 møller. Krav om biodiversitetsmonitorering jf. miljøgodkendelse. Akustiske sensorer og radar registrerer aktivitet døgnet rundt.",
    data: [
      { label: "Flagermus-aktivitet (nat)", value: "+22% vs. sæson-baseline", status: "warn" },
      { label: "Fuglekollisioner (kvartal)", value: "2 registreret", status: "warn" },
      { label: "Møller med shut-down aktiv", value: "4/14", status: "ok" },
      { label: "Akustiske sensorer aktive", value: "13/14", status: "ok" },
      { label: "Rovfugle-observationer", value: "Stabil", status: "ok" },
      { label: "Rapporteringsfrist næste", value: "21 dage", status: "warn" },
    ],
  },
];
