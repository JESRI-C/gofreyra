// Industry universe — 10 sectors with a full pSEO structure for /brancher/{slug}.
// Kept separate from src/data/pseo.ts so the old template system can be phased out gradually.

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
  name: string;            // Short name for cards, navigation
  h1: string;              // GoFreyra for X
  subheadline: string;
  cardTeaser: string;      // Text on industry card
  cardCta: string;         // CTA label on industry card
  seoTitle: string;
  seoDescription: string;
  problem: string[];       // 2-4 paragraphs
  solution: string[];      // 2-3 paragraphs
  dataSources: string[];   // customised per industry
  modules: string[];       // SmartConnect+, DecisionsIQ, ESG Ledger, Impact Exchange, GoFreyra Dashboard
  pilot: { t: string; d: string }[]; // 5 steps
  useCases: { label: string; slug: string }[]; // links to /use-cases/{slug}
  faq: { q: string; a: string }[]; // 5 items
  imageAlt: string;
}

const ALL_DATA_SOURCES = [
  "Sensors",
  "Field data",
  "Satellite data",
  "Drone data",
  "Operational data",
  "Weather data",
  "Manual entries",
  "External registries",
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
    name: "Municipalities",
    h1: "GoFreyra for Municipalities",
    subheadline: "Better data for nature, climate, biodiversity and public documentation.",
    cardTeaser:
      "Get a better data foundation for biodiversity, nature restoration, climate adaptation and project follow-up.",
    cardCta: "See solution for municipalities",
    seoTitle: "GoFreyra for Municipalities — Nature, Climate and Documentation",
    seoDescription:
      "Consolidate nature data, climate data and project documentation in one platform. Built for municipal administrations, nature projects and political decisions.",
    problem: [
      "Municipalities work on many nature, climate and environmental projects, but data is often scattered across administrations, advisors, external reports and manual entries.",
      "This makes it difficult to track progress, document the impact and create a unified basis for decisions across politicians, citizens and partners.",
    ],
    solution: [
      "GoFreyra consolidates project data, nature data, field registrations, sensor data and documentation into a single dashboard, allowing the municipality to track initiatives over time.",
      "With an audit trail and source referencing, the documentation becomes useful for administration, political dialogue and public communication.",
    ],
    dataSources: ["Field data", "Satellite data", "Drone data", "Sensors", "Weather data", "External registries", "Manual entries"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    pilot: [
      { t: "Clarify goals", d: "Choose one specific area — e.g. biodiversity, aquatic environment or nature restoration." },
      { t: "Select location", d: "Start with one area, one river valley or one project portfolio." },
      { t: "Map data sources", d: "Field, satellite, existing reports and sensor data are connected." },
      { t: "Build dashboard", d: "A consolidated view for administration, politicians and partners." },
      { t: "Evaluate and scale", d: "Expand to more areas or more administrations." },
    ],
    useCases: [
      { label: "Biodiversity Monitoring", slug: "biodiversitetsovervaagning" },
      { label: "Nature Restoration", slug: "naturgenopretning" },
      { label: "Climate Adaptation", slug: "klimatilpasning" },
      { label: "Environmental Data Dashboard", slug: "miljoedata-dashboard" },
    ],
    faq: [
      { q: "Can we start with a single project?", a: "Yes. A pilot project typically covers one area or one administration and is expanded from there." },
      { q: "Does GoFreyra replace our specialist systems?", a: "No. GoFreyra sits on top of specialist systems and consolidates data from them into a single overview." },
      { q: "Can the platform be used politically?", a: "Yes. Dashboards and reports are built to support the decision-making basis for both the administration and politicians." },
      { q: "Can we share data with citizens and partners?", a: "Yes. Selected dashboards and reports can be shared externally with controlled access." },
      { q: "What data sources do you typically use?", a: "Field, satellite, drone, sensors, municipal GIS layers and open registries like DMI, the Danish Environment Portal and GBIF." },
    ],
    imageAlt: "GoFreyra for municipalities with biodiversity monitoring and nature data",
  },
  {
    slug: "industri",
    name: "Industry",
    h1: "GoFreyra for Industry",
    subheadline: "Connect operational data, environmental data and ESG documentation in one consolidated overview.",
    cardTeaser:
      "Connect operational data with ESG documentation, resource consumption, environmental indicators and reporting needs.",
    cardCta: "See solution for industry",
    seoTitle: "GoFreyra for Industry — Operational Data, Environmental Data and ESG",
    seoDescription:
      "Connect operations, energy, water and emissions with your ESG documentation. Audit trail, risk insight and reporting-ready data for CSRD.",
    problem: [
      "Industrial companies often have large amounts of operational data, but this data is not always directly linked to ESG documentation and environmental reporting.",
      "This creates manual processes, makes improvements difficult to document over time and provides a weaker basis for decisions for both operations and management.",
    ],
    solution: [
      "GoFreyra connects operations-related data sources with ESG documentation, giving you a single overview of environmental indicators, resource consumption, risks and reporting status.",
      "An audit trail and ESRS mapping make the figures audit-ready, and DecisionsIQ flags deviations early on.",
    ],
    dataSources: ["Operational data", "Sensors", "Manual entries", "Weather data", "External registries"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    pilot: [
      { t: "Clarify goals", d: "Select the ESG category with the greatest documentation pressure." },
      { t: "Select area", d: "One production line, one plant or one supply type." },
      { t: "Map data sources", d: "SCADA, energy meters, ERP and ESG inputs." },
      { t: "Build dashboard", d: "A consolidated ESG, operational and risk overview." },
      { t: "Evaluate and scale", d: "Expand to the entire organisation." },
    ],
    useCases: [
      { label: "ESG Documentation", slug: "esg-dokumentation" },
      { label: "Sensor Data for ESG", slug: "sensordata-til-esg" },
      { label: "Audit Trail in ESG", slug: "audit-trail-esg" },
      { label: "Report-Ready Documentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Which operational systems can you integrate with?", a: "SCADA, IoT platforms, ERP and common operational databases via API and standard protocols." },
      { q: "Does GoFreyra replace our ESG reporting tool?", a: "No. GoFreyra provides the data foundation and audit trail that reporting tools lack." },
      { q: "Is the platform ready for CSRD?", a: "Yes. ESG Ledger is built with a data model that maps to ESRS themes." },
      { q: "How long does a pilot project take?", a: "Typically 2-4 weeks. Heavy operational integrations may take longer." },
      { q: "Can we start with one ESG category?", a: "Yes. Many pilots start with E1 (climate) or E5 (resources) and expand from there." },
    ],
    imageAlt: "GoFreyra for industry with environmental data and ESG documentation",
  },
  {
    slug: "forsyning",
    name: "Utilities",
    h1: "GoFreyra for Utilities",
    subheadline: "Consolidate data on water, energy, climate and environmental impact in one documentable platform.",
    cardTeaser: "Consolidate data on water, energy, climate, operations and environmental impact in one documentable overview.",
    cardCta: "See solution for utilities",
    seoTitle: "GoFreyra for Utilities — Water, Energy and Documentation",
    seoDescription:
      "Utility companies can consolidate operations, environmental data and ESG documentation in one platform. Audit trail and authority-ready workflows.",
    problem: [
      "Utility companies work with critical infrastructure and large amounts of data from SCADA, meters and reports.",
      "The challenge is to consolidate operations, environmental data and ESG documentation into a format that can be used both operationally and strategically.",
    ],
    solution: [
      "GoFreyra acts as an overview layer where operational data, environmental indicators, project data and reporting workflows are connected.",
      "This results in faster documentation, better risk management and less manual reporting work.",
    ],
    dataSources: ["Operational data", "Sensors", "Weather data", "Manual entries", "External registries"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    pilot: [
      { t: "Clarify goals", d: "E.g. water quality, climate adaptation or energy consumption." },
      { t: "Select location", d: "A plant, a supply area or a project portfolio." },
      { t: "Map data sources", d: "SCADA, meters, sensors and open data sources." },
      { t: "Build dashboard", d: "Operations, environment and documentation in a single view." },
      { t: "Evaluate and scale", d: "Expand to more plants or supply areas." },
    ],
    useCases: [
      { label: "Environmental Data Dashboard", slug: "miljoedata-dashboard" },
      { label: "Climate Adaptation", slug: "klimatilpasning" },
      { label: "Sensor Data for ESG", slug: "sensordata-til-esg" },
      { label: "Report-Ready Documentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Can GoFreyra integrate with our SCADA?", a: "Yes. SmartConnect+ supports SCADA, IoT and operational systems via standard protocols and API." },
      { q: "Can we start with one plant?", a: "Yes. A pilot typically starts with one plant or supply area." },
      { q: "Does the platform support reporting to authorities?", a: "Yes. The audit trail and structured workflows make reporting faster and more consistent." },
      { q: "Is the platform GDPR and security compliant?", a: "Yes. Data is hosted in the EU and GoFreyra complies with current requirements for critical infrastructure." },
      { q: "How quickly can we get started?", a: "Typically 2-4 weeks for pilot setup." },
    ],
    imageAlt: "GoFreyra for utilities with water data, energy data and documentation flow",
  },
  {
    slug: "landbrug",
    name: "Agriculture",
    h1: "GoFreyra for Agriculture",
    subheadline: "Track soil, water, biodiversity and climate initiatives with better data and documentation.",
    cardTeaser:
      "Track soil, water, biodiversity, climate initiatives and nature-based measures with better data and documentation.",
    cardCta: "See solution for agriculture",
    seoTitle: "GoFreyra for Agriculture — Soil, Nature and Documentation",
    seoDescription:
      "Structure area data, biodiversity, soil and water indicators. Ready for ESG, buyer requirements and future nature schemes.",
    problem: [
      "The agricultural sector faces increasing demands for documentation, consideration for nature, climate initiatives and area-based environmental data.",
      "Many initiatives are already happening in practice, but the documentation is often scattered or difficult to use strategically.",
    ],
    solution: [
      "GoFreyra consolidates area data, field data, sensors, biodiversity indicators and documentation, so farms and partners can track progress over time.",
      "This enables better dialogue with buyers, banks and advisors — and prepares you for nature schemes and future impact models.",
    ],
    dataSources: ["Field data", "Satellite data", "Drone data", "Sensors", "Weather data", "External registries"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    pilot: [
      { t: "Clarify goals", d: "E.g. soil quality, biodiversity or nature-based measures." },
      { t: "Select area", d: "One farm, one set of fields or one nature area." },
      { t: "Map data sources", d: "Field, satellite, drone and open registries." },
      { t: "Build dashboard", d: "Development in soil, water and biodiversity over time." },
      { t: "Evaluate and scale", d: "Expand to more areas and partners." },
    ],
    useCases: [
      { label: "Biodiversity Monitoring", slug: "biodiversitetsovervaagning" },
      { label: "Nature Restoration", slug: "naturgenopretning" },
      { label: "Environmental Data Dashboard", slug: "miljoedata-dashboard" },
      { label: "ESG Documentation", slug: "esg-dokumentation" },
    ],
    faq: [
      { q: "Do we need to use sensors in the field?", a: "Not necessarily. We can start with satellite, drone and operational data and expand with sensors if it makes sense." },
      { q: "Can the platform be used for nature schemes?", a: "Yes. Impact Exchange is prepared for biodiversity and carbon schemes." },
      { q: "What buyer requirements do you support?", a: "We typically package documentation for dairies, grain merchants and banks with relevant ESG indicators." },
      { q: "Who owns the data?", a: "You do. GoFreyra is a platform — not a data buyer." },
      { q: "Can we start small?", a: "Yes. A pilot can start with one farm or one area." },
    ],
    imageAlt: "GoFreyra for agriculture with soil, water and biodiversity data",
  },
  {
    slug: "skovbrug",
    name: "Forestry",
    h1: "GoFreyra for Forestry",
    subheadline: "Document forest development, biodiversity, CO₂ sequestration and nature value over time.",
    cardTeaser:
      "Document biodiversity, forest development, CO₂ sequestration, operational areas and nature value over time.",
    cardCta: "See solution for forestry",
    seoTitle: "GoFreyra for Forestry — Biodiversity and Nature Value",
    seoDescription:
      "Track forest development with satellite, drone and field data. Documentation for biodiversity, CO₂ and nature value over time.",
    problem: [
      "Forestry and nature management require knowledge of development over long time series.",
      "Data on biodiversity, land use, forest condition and nature value are often collected in different formats, making them difficult to compare.",
    ],
    solution: [
      "GoFreyra combines field data, satellite data, drone data and project entries into a unified data model.",
      "This makes the forest's development traceable, documentable and useful for reporting and certification.",
    ],
    dataSources: ["Satellite data", "Drone data", "Field data", "Sensors", "Weather data", "External registries"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    pilot: [
      { t: "Clarify goals", d: "E.g. biodiversity, CO₂ sequestration or nature value." },
      { t: "Select area", d: "One property or one forest section." },
      { t: "Map data sources", d: "Satellite, drone, field, FSC/PEFC data." },
      { t: "Build dashboard", d: "Development in biodiversity, growth and nature value." },
      { t: "Evaluate and scale", d: "Expand to the entire portfolio." },
    ],
    useCases: [
      { label: "Biodiversity Monitoring", slug: "biodiversitetsovervaagning" },
      { label: "Nature Restoration", slug: "naturgenopretning" },
      { label: "Environmental Data Dashboard", slug: "miljoedata-dashboard" },
      { label: "Report-Ready Documentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Can you document CO₂ sequestration?", a: "Yes. We combine area data, growth models and measurements to create traceable CO₂ indicators." },
      { q: "Do you support FSC and PEFC?", a: "We prepare data so it can be used in certification documentation." },
      { q: "How far back can we track development?", a: "Satellite data typically goes back 10+ years and can be combined with existing records." },
      { q: "Can the platform be used for nature markets?", a: "Yes. Impact Exchange is prepared for biodiversity and carbon schemes." },
      { q: "Do we need to use drones?", a: "It strengthens the documentation but is not a requirement. Satellite and field data go a long way." },
    ],
    imageAlt: "GoFreyra for forestry with satellite, biodiversity and nature value",
  },
  {
    slug: "naturprojekter",
    name: "Nature Projects",
    h1: "GoFreyra for Nature Projects",
    subheadline: "Track nature impact where it actually happens.",
    cardTeaser:
      "Track the development of habitats, species, soil, water and impact indicators in specific project areas.",
    cardCta: "See solution for nature projects",
    seoTitle: "GoFreyra for Nature Projects — Impact and Documentation",
    seoDescription:
      "Structure nature projects with data sources, indicators and an audit trail. Track progress — and document impact over time.",
    problem: [
      "Nature projects often create great value, but the effect can be difficult to document on an ongoing basis.",
      "Data is typically collected in reports, photos, field entries and external assessments, and lacks a common system.",
    ],
    solution: [
      "GoFreyra provides nature projects with a digital data backbone, where project areas, data sources, indicators and documentation status can be tracked over time.",
      "This strengthens operations, partner dialogue and access to future nature markets.",
    ],
    dataSources: ["Field data", "Satellite data", "Drone data", "Sensors", "Weather data", "Manual entries", "External registries"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    pilot: [
      { t: "Clarify goals", d: "Define the project's impact indicators." },
      { t: "Select project area", d: "One location or one project package." },
      { t: "Map data sources", d: "Field, satellite, drone and baseline reports." },
      { t: "Build dashboard", d: "Status, progress and documentation consolidated." },
      { t: "Evaluate and scale", d: "Expand to more projects and partners." },
    ],
    useCases: [
      { label: "Biodiversity Monitoring", slug: "biodiversitetsovervaagning" },
      { label: "Nature Restoration", slug: "naturgenopretning" },
      { label: "Environmental Data Dashboard", slug: "miljoedata-dashboard" },
      { label: "Audit Trail in ESG", slug: "audit-trail-esg" },
    ],
    faq: [
      { q: "Can we use data from existing reports?", a: "Yes. Existing reports and baselines can be structured into the platform." },
      { q: "What indicators do you work with?", a: "It depends on the project, but typically biodiversity, water, soil and habitat development." },
      { q: "Can we share dashboards with partners?", a: "Yes. Access can be controlled per project and per role." },
      { q: "Is the data ready for nature markets?", a: "Yes. Impact Exchange is prepared for biodiversity and carbon schemes." },
      { q: "Who owns the data?", a: "The project owner or the partnership behind it." },
    ],
    imageAlt: "GoFreyra for nature projects with biodiversity and impact documentation",
  },
  {
    slug: "raadgivere",
    name: "Advisors",
    h1: "GoFreyra for Advisors",
    subheadline: "Use GoFreyra as the data backbone for ESG, nature and environmental projects.",
    cardTeaser:
      "Use GoFreyra as the data backbone in advisory services, ESG processes, nature projects and documentation tasks.",
    cardCta: "See solution for advisors",
    seoTitle: "GoFreyra for Advisors — ESG, Nature and Documentation",
    seoDescription:
      "Stronger advisory deliverables with structured data, an audit trail and a common platform across clients.",
    problem: [
      "Advisors often spend many hours collecting data, validating information and converting it into reports.",
      "It can be difficult to create consistent workflows and quality across clients, projects and advisors.",
    ],
    solution: [
      "GoFreyra acts as a common platform layer where advisors can structure client data, track documentation status and deliver a stronger basis for decisions.",
      "This results in shorter delivery times, better data quality and a scalable method across tasks.",
    ],
    dataSources: ["Operational data", "Field data", "Satellite data", "Manual entries", "External registries"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    pilot: [
      { t: "Clarify goals", d: "Choose an advisory task or client case." },
      { t: "Select client and scope", d: "One area, one project or one process." },
      { t: "Map data sources", d: "Client data, open registries and measurements." },
      { t: "Build client dashboard", d: "Access for you and the client — with an audit trail." },
      { t: "Evaluate and scale", d: "Use the template on the next client." },
    ],
    useCases: [
      { label: "ESG Documentation", slug: "esg-dokumentation" },
      { label: "Audit Trail in ESG", slug: "audit-trail-esg" },
      { label: "Report-Ready Documentation", slug: "rapportklar-dokumentation" },
      { label: "Environmental Data Dashboard", slug: "miljoedata-dashboard" },
    ],
    faq: [
      { q: "Can we use GoFreyra across multiple clients?", a: "Yes. The platform is built to be multi-tenant, so you can work on multiple client projects." },
      { q: "Can the client get access?", a: "Yes. Access can be controlled per role and per project." },
      { q: "Is there a partner model?", a: "Yes. We have a partner model for advisors and consultancies — contact us for details." },
      { q: "Can you help with implementation?", a: "Yes. We offer pilot setup and training for advisors." },
      { q: "Does the client or the advisor own the data?", a: "This is agreed upon per task. The platform supports both models." },
    ],
    imageAlt: "GoFreyra for advisors with a client dashboard and ESG documentation",
  },
  {
    slug: "ejendomme-og-byggeri",
    name: "Real Estate and Construction",
    h1: "GoFreyra for Real Estate and Construction",
    subheadline: "Connect operations, energy, green areas and ESG data to property portfolios.",
    cardTeaser:
      "Connect operations, energy, green areas, biodiversity and ESG data to property and project portfolios.",
    cardCta: "See solution for real estate and construction",
    seoTitle: "GoFreyra for Real Estate and Construction — ESG and Operations",
    seoDescription:
      "Consolidate energy, operational and nature data across property and project portfolios. Ready for CSRD and the Taxonomy.",
    problem: [
      "The real estate and construction industry works with energy, materials, operations, biodiversity and documentation.",
      "Data is often scattered between buildings, projects, suppliers and reports — and becomes difficult to consolidate.",
    ],
    solution: [
      "GoFreyra consolidates environmental data, operational data and documentation workflows so that portfolios and projects can be tracked systematically.",
      "This provides a better overview for management, lenders and tenants — and structure for CSRD and the EU Taxonomy.",
    ],
    dataSources: ["Operational data", "Sensors", "Manual entries", "Satellite data", "External registries"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    pilot: [
      { t: "Clarify goals", d: "E.g. energy, biodiversity or portfolio overview." },
      { t: "Select portfolio", d: "One property, one project or one part of a portfolio." },
      { t: "Map data sources", d: "Energy meters, operations, supplier data and GIS." },
      { t: "Build dashboard", d: "Per-asset and portfolio dashboard." },
      { t: "Evaluate and scale", d: "Expand to the entire portfolio." },
    ],
    useCases: [
      { label: "ESG Documentation", slug: "esg-dokumentation" },
      { label: "Sensor Data for ESG", slug: "sensordata-til-esg" },
      { label: "Environmental Data Dashboard", slug: "miljoedata-dashboard" },
      { label: "Report-Ready Documentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Can we start with one property?", a: "Yes. A pilot typically starts with one project or one property." },
      { q: "Do you support the EU Taxonomy?", a: "Yes. ESG Ledger can structure data according to the EU Taxonomy and CSRD/ESRS." },
      { q: "Can lenders get access?", a: "Yes. External dashboards and reports can be shared with controlled access." },
      { q: "Can we track biodiversity on the areas?", a: "Yes. We can combine field, satellite and open registries for green areas." },
      { q: "How quickly is the pilot up and running?", a: "Typically 2-4 weeks for the first dashboard." },
    ],
    imageAlt: "GoFreyra for real estate and construction with energy, biodiversity and portfolio",
  },
  {
    slug: "energi",
    name: "Energy",
    h1: "GoFreyra for Energy",
    subheadline: "Document environmental data, nature considerations and ESG indicators in energy projects.",
    cardTeaser:
      "Document environmental data, project impact, nature considerations and ESG indicators in energy projects.",
    cardCta: "See solution for energy",
    seoTitle: "GoFreyra for Energy — Environmental Data and Project Impact",
    seoDescription:
      "Energy projects documented end-to-end: environmental data, nature considerations, ESG indicators and stakeholder dialogue in one platform.",
    problem: [
      "Energy projects increasingly need to document nature considerations, environmental impact, local conditions and ESG indicators.",
      "This requires a data foundation that can be used in operations, reporting and dialogue with authorities, local communities and owners.",
    ],
    solution: [
      "GoFreyra consolidates project data, environmental indicators, nature data and documentation into a single common overview.",
      "This supports internal management, external reporting and dialogue with stakeholders.",
    ],
    dataSources: ["Operational data", "Sensors", "Satellite data", "Drone data", "Field data", "Weather data", "External registries"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    pilot: [
      { t: "Clarify goals", d: "E.g. environmental impact, nature considerations or project impact." },
      { t: "Select project", d: "A plant, a park or a project portfolio." },
      { t: "Map data sources", d: "SCADA, environmental measurements, satellite and field observations." },
      { t: "Build dashboard", d: "Operations, environment and documentation in a single view." },
      { t: "Evaluate and scale", d: "Expand to the entire portfolio." },
    ],
    useCases: [
      { label: "ESG Documentation", slug: "esg-dokumentation" },
      { label: "Sensor Data for ESG", slug: "sensordata-til-esg" },
      { label: "Environmental Data Dashboard", slug: "miljoedata-dashboard" },
      { label: "Report-Ready Documentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Can we document nature considerations for a wind or solar farm?", a: "Yes. We combine baseline data with satellite, field and operational data over time." },
      { q: "Do you support CSRD?", a: "Yes. ESG Ledger is built with a data model that maps to ESRS." },
      { q: "Can the platform be used for stakeholder dialogue?", a: "Yes. External dashboards and reports can be shared with authorities and local communities." },
      { q: "What data sources do you typically use?", a: "SCADA, environmental measurements, satellite, drone, weather data and open registries." },
      { q: "How quickly is the pilot up and running?", a: "Typically 2-4 weeks." },
    ],
    imageAlt: "GoFreyra for energy with environmental data and project impact",
  },
  {
    slug: "ngo-og-fonde",
    name: "NGOs and Foundations",
    h1: "GoFreyra for NGOs and Foundations",
    subheadline: "Create stronger documentation for nature, climate and impact projects.",
    cardTeaser:
      "Create stronger documentation for nature, climate and impact projects so that results can be tracked and shared.",
    cardCta: "See solution for NGOs and foundations",
    seoTitle: "GoFreyra for NGOs and Foundations — Impact and Documentation",
    seoDescription:
      "Structure impact projects, donor reporting and nature data in one platform. Stronger documentation, more credible communication.",
    problem: [
      "NGOs and foundations often need to show the actual effect their projects create.",
      "This is difficult when data is scattered across reports, images, field entries and partner updates.",
    ],
    solution: [
      "GoFreyra consolidates project status, data sources, indicators and impact documentation into a single overview.",
      "This makes it easier to track results, communicate with donors and share learnings across projects.",
    ],
    dataSources: ["Field data", "Satellite data", "Drone data", "Manual entries", "External registries"],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    pilot: [
      { t: "Clarify goals", d: "What type of impact needs to be documented?" },
      { t: "Select project", d: "One project or one portfolio." },
      { t: "Map data sources", d: "Field, satellite, partner data and baseline." },
      { t: "Build dashboard", d: "Impact, status and documentation consolidated." },
      { t: "Evaluate and scale", d: "Expand to more projects and partners." },
    ],
    useCases: [
      { label: "Biodiversity Monitoring", slug: "biodiversitetsovervaagning" },
      { label: "Nature Restoration", slug: "naturgenopretning" },
      { label: "Environmental Data Dashboard", slug: "miljoedata-dashboard" },
      { label: "Report-Ready Documentation", slug: "rapportklar-dokumentation" },
    ],
    faq: [
      { q: "Can we use the platform for donor reporting?", a: "Yes. Dashboards and reports are built to document impact over time." },
      { q: "Can partners contribute data?", a: "Yes. Access can be controlled per role and per project." },
      { q: "Is there a model for NGOs and foundations?", a: "Yes. We have special terms — contact us for details." },
      { q: "Can we share results publicly?", a: "Yes. Selected dashboards and reports can be shared externally." },
      { q: "What indicators do you typically work with?", a: "Biodiversity, water, soil, habitats and project-specific impact indicators." },
    ],
    imageAlt: "GoFreyra for NGOs and foundations with impact documentation",
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