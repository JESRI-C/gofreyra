// Data universe — pSEO pages about the data types GoFreyra works with.

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
  { q: `What is ${name.toLowerCase()}?`, a: `${name} covers data on environmental and project conditions used for monitoring, documentation, and ESG.` },
  { q: "What sources can GoFreyra use?", a: "Sensors, satellite data, drone data, field recordings, operational data, weather data, and external registries — depending on availability." },
  { q: "Do you need all the data from the start?", a: "No. Most people start with one area and expand gradually." },
  { q: "How is data used for documentation?", a: "Data is linked to projects, indicators, and the audit trail, allowing it to be used directly in ESG and management reporting." },
  { q: "How do you get started?", a: "Typically with a 2-4 week pilot project, where we jointly select the first sources and indicators." },
];

export const DATA_PAGES: DataPage[] = [
  {
    slug: "biodiversitet",
    name: "Biodiversity",
    cardTeaser: "Track species, habitats, and nature development with a structured data foundation.",
    h1: "Biodiversity Data in GoFreyra",
    subheadline: "Track species, habitats, and nature development with a more structured data foundation.",
    seoTitle: "Biodiversity Data — Collect and Document | GoFreyra",
    seoDescription: "Consolidate species observations, habitat mapping, sensors, and satellite data into a single, unified data foundation for biodiversity.",
    whatIs: "Biodiversity data describes species, habitats, and the evolution of nature over time.",
    whyRelevant: "Biodiversity is becoming an increasingly important area in ESG, nature projects, and municipal management. Without a structured data foundation, demonstrating impact becomes difficult.",
    howGoFreyra: "Biodiversity data can come from field recordings, species observations, habitat mapping, sensors, acoustic measurements, cameras, satellite data, and drone data. GoFreyra collects data in project areas, making it easier to track development over time.",
    sources: ["Field Recordings", "Species Observations", "Acoustic Sensors", "Wildlife Cameras", "Satellite Data", "Drone Data"],
    sectors: [
      { slug: "kommuner", label: "Municipalities" },
      { slug: "naturprojekter", label: "Nature Projects" },
      { slug: "skovbrug", label: "Forestry" },
      { slug: "landbrug", label: "Agriculture" },
      { slug: "ngo-og-fonde", label: "NGOs and Foundations" },
    ],
    useCases: [
      { slug: "biodiversitetsovervaagning", label: "Biodiversity Monitoring" },
      { slug: "naturgenopretning", label: "Data-driven Nature Project" },
    ],
    problems: [
      { slug: "naturdata-uden-struktur", label: "Unstructured Nature Data" },
      { slug: "fragmenterede-data", label: "Fragmented Data" },
    ],
    modules: [M.smartconnect, M.dashboard, M.decisionsiq],
    faq: baseFaq("Biodiversity data"),
  },
  {
    slug: "vandkvalitet",
    name: "Water Quality",
    cardTeaser: "Collect measurements on the aquatic environment, quality, development, and documentation.",
    h1: "Water Quality Data in GoFreyra",
    subheadline: "Collect measurements on the aquatic environment, quality, development, and documentation.",
    seoTitle: "Water Quality Data for Utilities, Municipalities, and Industry | GoFreyra",
    seoDescription: "Consolidate sensor data, samples, and field measurements on water quality in a single platform — for operations, documentation, and nature projects.",
    whatIs: "Water quality data describes the condition of water in lakes, streams, drinking water, rainwater, and wastewater.",
    whyRelevant: "Water quality is crucial for utilities, nature projects, climate adaptation, industry, and environmental monitoring.",
    howGoFreyra: "Data can come from sensors, field measurements, samples, external registries, or manual observations. GoFreyra consolidates it and links it to indicators and documentation.",
    sources: ["Sensors", "Field Measurements", "Sample Data", "External Registries", "Manual Observations"],
    sectors: [
      { slug: "forsyning", label: "Utilities" },
      { slug: "kommuner", label: "Municipalities" },
      { slug: "industri", label: "Industry" },
      { slug: "naturprojekter", label: "Nature Projects" },
      { slug: "landbrug", label: "Agriculture" },
    ],
    useCases: [
      { slug: "miljoedata-dashboard", label: "Data Sources in One Place" },
      { slug: "naturgenopretning", label: "Data-driven Nature Project" },
    ],
    problems: [
      { slug: "fragmenterede-data", label: "Fragmented Data" },
      { slug: "beslutninger-uden-realtidsdata", label: "Decisions Without Real-time Data" },
    ],
    modules: [M.smartconnect, M.decisionsiq, M.dashboard],
    faq: baseFaq("Water quality data"),
  },
  {
    slug: "jorddata",
    name: "Soil Data",
    cardTeaser: "Track soil conditions, moisture, structure, and environmental indicators over time.",
    h1: "Soil Data in GoFreyra",
    subheadline: "Track soil conditions, moisture, structure, and environmental indicators over time.",
    seoTitle: "Soil Data for Agriculture, Forestry, and Nature Projects | GoFreyra",
    seoDescription: "Consolidate soil samples, sensors, and field measurements in one platform. GoFreyra documents area-based initiatives.",
    whatIs: "Soil data describes the physical, chemical, and biological properties of soil.",
    whyRelevant: "Soil data is relevant for agriculture, nature projects, forestry, climate projects, and documenting area-based initiatives.",
    howGoFreyra: "GoFreyra can consolidate soil data from sensors, field measurements, samples, and external data sources — and link them to project areas.",
    sources: ["Soil Sensors", "Field Measurements", "Sample Data", "External Registries"],
    sectors: [
      { slug: "landbrug", label: "Agriculture" },
      { slug: "skovbrug", label: "Forestry" },
      { slug: "naturprojekter", label: "Nature Projects" },
      { slug: "kommuner", label: "Municipalities" },
    ],
    useCases: [
      { slug: "naturgenopretning", label: "Data-driven Nature Project" },
    ],
    problems: [
      { slug: "naturdata-uden-struktur", label: "Unstructured Nature Data" },
      { slug: "fragmenterede-data", label: "Fragmented Data" },
    ],
    modules: [M.smartconnect, M.dashboard, M.decisionsiq],
    faq: baseFaq("Soil data"),
  },
  {
    slug: "co2",
    name: "CO₂ and Climate",
    cardTeaser: "Gain an overview of climate indicators, project data, and documentation needs.",
    h1: "CO₂ and Climate Indicators in GoFreyra",
    subheadline: "Gain a better overview of climate indicators, project data, and documentation needs.",
    seoTitle: "CO₂ and Climate Data for ESG and Projects | GoFreyra",
    seoDescription: "Consolidate CO₂-related indicators and link them to data sources, projects, and documentation status.",
    whatIs: "CO₂ and climate indicators describe emissions, sequestration, and climate-related effects linked to operations, land areas, and projects.",
    whyRelevant: "CO₂ data is central to ESG reporting, climate projects, nature-based solutions, and strategic climate initiatives.",
    howGoFreyra: "GoFreyra helps consolidate CO₂-related indicators and link them to data sources, projects, and documentation status.",
    sources: ["Operational Data", "Energy Consumption", "External Registries", "Project Registrations"],
    sectors: [
      { slug: "industri", label: "Industry" },
      { slug: "energi", label: "Energy" },
      { slug: "forsyning", label: "Utilities" },
      { slug: "landbrug", label: "Agriculture" },
      { slug: "skovbrug", label: "Forestry" },
    ],
    useCases: [
      { slug: "esg-dokumentation", label: "ESG Documentation" },
    ],
    problems: [
      { slug: "esg-dokumentation", label: "ESG Documentation" },
      { slug: "manuelle-esg-rapporter", label: "Manual ESG Reports" },
    ],
    modules: [M.ledger, M.dashboard, M.decisionsiq, M.smartconnect],
    faq: baseFaq("CO₂ data"),
  },
  {
    slug: "sensordata",
    name: "Sensor Data",
    cardTeaser: "Connect IoT sensors and environmental measurements to dashboards and documentation.",
    h1: "Sensor Data in GoFreyra",
    subheadline: "Connect IoT sensors and environmental measurements to dashboards, analysis, and documentation.",
    seoTitle: "Sensor Data and IoT for Environment and Operations | GoFreyra",
    seoDescription: "Connect IoT sensors to dashboards, analysis, and documentation. SmartConnect+ consolidates and structures sensor input.",
    whatIs: "Sensor data is continuous measurements from IoT sensors in the field, operations, buildings, or infrastructure.",
    whyRelevant: "Sensor data can provide continuous insight into environmental conditions, operations, water, soil, climate, and project development.",
    howGoFreyra: "SmartConnect+ can be used as a data layer to consolidate and structure sensor input, making it available in dashboards and for documentation.",
    sources: ["IoT Sensors", "Environmental Sensors", "Operational Sensors", "External APIs"],
    sectors: [
      { slug: "industri", label: "Industry" },
      { slug: "forsyning", label: "Utilities" },
      { slug: "kommuner", label: "Municipalities" },
      { slug: "naturprojekter", label: "Nature Projects" },
    ],
    useCases: [
      { slug: "miljoedata-dashboard", label: "Data Sources in One Place" },
    ],
    problems: [
      { slug: "beslutninger-uden-realtidsdata", label: "Decisions Without Real-time Data" },
      { slug: "fragmenterede-data", label: "Fragmented Data" },
    ],
    modules: [M.smartconnect, M.decisionsiq, M.dashboard],
    faq: baseFaq("Sensor data"),
  },
  {
    slug: "satellitdata",
    name: "Satellite Data",
    cardTeaser: "Use satellite data to track land areas, vegetation, water, and environmental development.",
    h1: "Satellite Data in GoFreyra",
    subheadline: "Use satellite data to track land areas, vegetation, water, and environmental development over time.",
    seoTitle: "Satellite Data for Nature, Land, and Environment | GoFreyra",
    seoDescription: "Use satellite data as part of a unified data foundation, alongside field data, sensors, and project data.",
    whatIs: "Satellite data consists of observations of the Earth's surface from satellites, often used for land areas, vegetation, and water.",
    whyRelevant: "Satellite data can provide a broad overview of landscapes, land use, vegetation, and changes over time.",
    howGoFreyra: "GoFreyra can use satellite data as part of a unified data foundation, alongside field data, sensors, and project data.",
    sources: ["Sentinel", "Landsat", "Commercial Satellite Sources"],
    sectors: [
      { slug: "landbrug", label: "Agriculture" },
      { slug: "skovbrug", label: "Forestry" },
      { slug: "naturprojekter", label: "Nature Projects" },
      { slug: "kommuner", label: "Municipalities" },
    ],
    useCases: [
      { slug: "naturgenopretning", label: "Data-driven Nature Project" },
    ],
    problems: [
      { slug: "naturdata-uden-struktur", label: "Unstructured Nature Data" },
    ],
    modules: [M.smartconnect, M.dashboard, M.decisionsiq],
    faq: baseFaq("Satellite data"),
  },
  {
    slug: "dronedata",
    name: "Drone Data",
    cardTeaser: "High-resolution imagery and mapping for nature, environment, and project monitoring.",
    h1: "Drone Data in GoFreyra",
    subheadline: "Use high-resolution imagery and mapping for nature, environment, and project monitoring.",
    seoTitle: "Drone Data for Nature Projects and Environmental Monitoring | GoFreyra",
    seoDescription: "Use drone data for detailed imagery of project areas, nature development, vegetation, and water conditions.",
    whatIs: "Drone data includes images, video, and 3D mapping collected by drones.",
    whyRelevant: "Drone data can provide detailed imagery of project areas, nature development, vegetation, water conditions, and changes in the landscape.",
    howGoFreyra: "GoFreyra can link drone data with other data sources and documentation workflows within the same project area.",
    sources: ["RGB Imagery", "Multispectral", "Thermal", "LiDAR"],
    sectors: [
      { slug: "naturprojekter", label: "Nature Projects" },
      { slug: "skovbrug", label: "Forestry" },
      { slug: "landbrug", label: "Agriculture" },
      { slug: "kommuner", label: "Municipalities" },
    ],
    useCases: [
      { slug: "naturgenopretning", label: "Data-driven Nature Project" },
    ],
    problems: [
      { slug: "naturdata-uden-struktur", label: "Unstructured Nature Data" },
    ],
    modules: [M.smartconnect, M.dashboard],
    faq: baseFaq("Drone data"),
  },
  {
    slug: "feltregistreringer",
    name: "Field Recordings",
    cardTeaser: "Make manual observations more structured and useful for documentation.",
    h1: "Field Recordings in GoFreyra",
    subheadline: "Make manual observations more structured and useful for documentation.",
    seoTitle: "Field Recordings and Nature Data | GoFreyra",
    seoDescription: "Structure field recordings, images, notes, and measurements for ESG and project documentation.",
    whatIs: "Field recordings are manual observations from the field — typically notes, images, measurements, and species observations.",
    whyRelevant: "Field recordings are often a crucial part of nature, environmental, and ESG work — especially in the pilot phase before sensors are in place.",
    howGoFreyra: "GoFreyra helps structure observations, images, notes, measurements, and project documentation into a single data model.",
    sources: ["Field Apps", "Manual Notes", "Images", "Mobile Samples"],
    sectors: [
      { slug: "naturprojekter", label: "Nature Projects" },
      { slug: "kommuner", label: "Municipalities" },
      { slug: "skovbrug", label: "Forestry" },
      { slug: "ngo-og-fonde", label: "NGOs and Foundations" },
    ],
    useCases: [
      { slug: "rapportklar-dokumentation", label: "Field Data for Report-ready Documentation" },
    ],
    problems: [
      { slug: "naturdata-uden-struktur", label: "Unstructured Nature Data" },
      { slug: "manglende-audit-trail", label: "Missing Audit Trail" },
    ],
    modules: [M.smartconnect, M.ledger, M.dashboard],
    faq: baseFaq("Field recordings"),
  },
  {
    slug: "vejrdata",
    name: "Weather Data",
    cardTeaser: "Use weather data as context for environmental data, nature development, and project status.",
    h1: "Weather Data in GoFreyra",
    subheadline: "Use weather data as context for environmental data, nature development, and project status.",
    seoTitle: "Weather Data as Context for Environment and Operations | GoFreyra",
    seoDescription: "Link weather data with other data sources and see correlations over time in GoFreyra.",
    whatIs: "Weather data consists of measurements and forecasts for temperature, precipitation, wind, and other meteorological conditions.",
    whyRelevant: "Weather data can provide important context for water, soil, biodiversity, operations, and climate initiatives.",
    howGoFreyra: "GoFreyra can link weather data with other data sources and show correlations over time.",
    sources: ["DMI", "Local Weather Stations", "External APIs"],
    sectors: [
      { slug: "landbrug", label: "Agriculture" },
      { slug: "forsyning", label: "Utilities" },
      { slug: "naturprojekter", label: "Nature Projects" },
      { slug: "kommuner", label: "Municipalities" },
    ],
    useCases: [
      { slug: "miljoedata-dashboard", label: "Data Sources in One Place" },
    ],
    problems: [
      { slug: "beslutninger-uden-realtidsdata", label: "Decisions Without Real-time Data" },
    ],
    modules: [M.smartconnect, M.decisionsiq, M.dashboard],
    faq: baseFaq("Weather data"),
  },
  {
    slug: "driftsdata",
    name: "Operational Data",
    cardTeaser: "Link operations, resource consumption, and ESG documentation in a single view.",
    h1: "Operational Data in GoFreyra",
    subheadline: "Link operations, resource consumption, and ESG documentation in one consolidated view.",
    seoTitle: "Operational Data and ESG Documentation | GoFreyra",
    seoDescription: "Connect operations-related data with ESG documentation and management reporting.",
    whatIs: "Operational data is data from operations, production, energy, water, buildings, utilities, and logistics.",
    whyRelevant: "Operational data is often already available — but is rarely used directly for ESG documentation.",
    howGoFreyra: "GoFreyra helps connect operations-related data with ESG documentation and management reporting in a single overview.",
    sources: ["ERP Systems", "Energy Meters", "Production Data", "Building Data"],
    sectors: [
      { slug: "industri", label: "Industry" },
      { slug: "forsyning", label: "Utilities" },
      { slug: "ejendomme-og-byggeri", label: "Real Estate and Construction" },
      { slug: "energi", label: "Energy" },
    ],
    useCases: [
      { slug: "esg-dokumentation", label: "ESG Documentation" },
    ],
    problems: [
      { slug: "esg-dokumentation", label: "ESG Documentation" },
      { slug: "manuelle-esg-rapporter", label: "Manual ESG Reports" },
    ],
    modules: [M.smartconnect, M.ledger, M.dashboard, M.decisionsiq],
    faq: baseFaq("Operational data"),
  },
];

export const getDataPage = (slug: string): DataPage | undefined =>
  DATA_PAGES.find((d) => d.slug === (slug as DataSlug));