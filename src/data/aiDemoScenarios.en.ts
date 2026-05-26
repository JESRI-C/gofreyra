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
    title: "Nature Project – The Heath at Mols",
    short: "Heathland restoration, biodiversity monitoring",
    location: "Mols Bjerge, Syddjurs",
    context:
      "Restoration project on 142 ha of heathland. Goal: increased biodiversity, reduced encroachment, documentation for CSRD ESRS E4 (biodiversity) and fund reporting.",
    data: [
      { label: "Vegetation cover (heather)", value: "61% (target: 70%)", status: "warn" },
      { label: "Species richness (insects, 12 months)", value: "+18% vs. baseline", status: "ok" },
      { label: "Encroachment (birch/pine)", value: "9% (up from 6%)", status: "warn" },
      { label: "Rare species recorded", value: "3 (sand lizard, woodlark, stag's-horn clubmoss)", status: "ok" },
      { label: "Last grazing", value: "47 days ago", status: "alert" },
      { label: "Precipitation last 30 days", value: "23 mm (below normal)", status: "warn" },
    ],
  },
  {
    id: "vandkvalitet-kommune",
    title: "Municipal Water Quality – River System",
    short: "Real-time sensors on recipient water body, nitrate and oxygen",
    location: "Storå, a West Jutland municipality",
    context:
      "12 sensors along 28 km of watercourse. Measures nitrate, phosphorus, oxygen and temperature. Used for river basin management plan reporting and dialogue with the agricultural sector.",
    data: [
      { label: "Nitrate (avg. 7 days)", value: "8.4 mg/L (limit: 8.0)", status: "alert" },
      { label: "Oxygen content", value: "7.2 mg/L", status: "ok" },
      { label: "Water temperature", value: "14.8 °C (+1.3 vs. normal)", status: "warn" },
      { label: "Total phosphorus", value: "0.12 mg/L", status: "ok" },
      { label: "Sensor uptime", value: "11/12 active", status: "warn" },
      { label: "Precipitation event last 48h", value: "Yes (38 mm)", status: "warn" },
    ],
  },
  {
    id: "industri-co2",
    title: "Industry – CO2 and Wastewater",
    short: "Production plant with Scope 1+2 emissions",
    location: "Food production, Jutland",
    context:
      "Production plant subject to annual CSRD reporting requirements. Monitors Scope 1 (natural gas), Scope 2 (electricity) and wastewater discharge. Target: -30% CO2 in 2027 vs. 2024.",
    data: [
      { label: "Scope 1 (month)", value: "412 tCO2e (-4% YoY)", status: "ok" },
      { label: "Scope 2 (month, location-based)", value: "287 tCO2e (+2%)", status: "warn" },
      { label: "Share of green electricity", value: "64%", status: "warn" },
      { label: "Wastewater COD", value: "184 mg/L (limit: 200)", status: "ok" },
      { label: "Energy per tonne produced", value: "1.42 MWh (-1% YoY)", status: "ok" },
      { label: "Data coverage (sensors)", value: "94%", status: "ok" },
    ],
  },
  {
    id: "vindmoelle-bio",
    title: "Wind Farm – Biodiversity",
    short: "Impact monitoring, birds and bats",
    location: "Onshore park, West Jutland",
    context:
      "14 turbines. Biodiversity monitoring required as per environmental permit. Acoustic sensors and radar record activity around the clock.",
    data: [
      { label: "Bat activity (night)", value: "+22% vs. seasonal baseline", status: "warn" },
      { label: "Bird collisions (quarter)", value: "2 recorded", status: "warn" },
      { label: "Turbines with active shut-down", value: "4/14", status: "ok" },
      { label: "Acoustic sensors active", value: "13/14", status: "ok" },
      { label: "Bird of prey observations", value: "Stable", status: "ok" },
      { label: "Next reporting deadline", value: "21 days", status: "warn" },
    ],
  },
];