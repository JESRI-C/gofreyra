// pSEO content templates for GoFreyra.
// Keep the copy concrete, commercial, and direct — avoid clichés.

export type PseoModule =
  | "SmartConnect+"
  | "DecisionsIQ"
  | "ESG Ledger"
  | "Impact Exchange"
  | "GoFreyra Dashboard";

export interface PseoTemplate {
  slug: string;
  /** Short label shown as eyebrow. */
  eyebrow: string;
  /** SEO title (under 60 chars where possible). */
  seoTitle: string;
  /** Meta description (under 160 chars). */
  seoDescription: string;
  /** H1. */
  h1: string;
  /** Short intro. */
  intro: string;
  /** Specific problems. */
  problems: string[];
  /** How GoFreyra solves it. */
  solution: string;
  /** Specific outcomes. */
  outcomes: { title: string; desc: string }[];
  /** Relevant modules. */
  modules: PseoModule[];
  /** FAQ. */
  faq: { q: string; a: string }[];
}

export const SECTOR_TEMPLATES: PseoTemplate[] = [
  {
    slug: "vandselskaber",
    eyebrow: "Industry · Water & Utilities",
    seoTitle: "GoFreyra for Water Companies — Operational Data, ESG, and Documentation",
    seoDescription:
      "Collect operational data from water and wastewater plants, link it to ESG reporting, and get audit-ready documentation. Built for Danish utility companies.",
    h1: "GoFreyra for Water and Wastewater Utilities",
    intro:
      "Water and wastewater companies need to document more and more — discharges, energy consumption, climate adaptation, and biodiversity. GoFreyra consolidates operational data, environmental measurements, and ESG into a single data foundation.",
    problems: [
      "Discharge and energy data are siloed in SCADA, spreadsheets, and reports",
      "Climate adaptation projects are difficult to track over time",
      "The ESG report is based on estimates rather than actual measurements",
      "Manual reporting to authorities takes weeks",
    ],
    solution:
      "SmartConnect+ connects SCADA, sensors, and meters to the platform. DecisionsIQ analyses operations and discharges, identifying early deviations. ESG Ledger creates an audit trail for every data point, ensuring that reports to authorities, for ESG purposes, and for the board are based on traceable data.",
    outcomes: [
      { title: "Operations and ESG in the same data layer", desc: "Discharges, energy, and water quality are linked to ESG indicators." },
      { title: "Traceable documentation", desc: "Every measured value has a source, timestamp, and change history." },
      { title: "Early risk insight", desc: "AI finds abnormal patterns in discharges, quality, and consumption." },
      { title: "Less manual work", desc: "Structured workflows from measurement to report." },
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    faq: [
      {
        q: "Can GoFreyra integrate with our SCADA system?",
        a: "Yes. SmartConnect+ supports integration with existing SCADA, IoT, and operational systems via standard protocols and APIs.",
      },
      {
        q: "Does GoFreyra replace our reporting tool?",
        a: "No. GoFreyra provides the data foundation and audit trail that your reporting tool lacks.",
      },
    ],
  },
  {
    slug: "energiselskaber",
    eyebrow: "Industry · Energy & Heating",
    seoTitle: "GoFreyra for Energy and Heating Companies — ESG and Operational Data",
    seoDescription:
      "Extract ESG figures directly from energy production and distribution. Audit-ready documentation, risk insight, and reporting for CSRD and authorities.",
    h1: "GoFreyra for Energy and Heating Companies",
    intro:
      "Energy and heating companies possess vast amounts of operational data — but often not in a format suitable for ESG reporting. GoFreyra connects production, distribution, and emissions data with documentation.",
    problems: [
      "Emissions are calculated using factors instead of measured data",
      "Operations and ESG teams work in separate systems",
      "Risk insight into distribution and the energy mix is fragmented",
      "CSRD reporting requires documentation not found in the ERP system",
    ],
    solution:
      "SmartConnect+ connects meters, operations, and distribution. DecisionsIQ analyses patterns and risks. ESG Ledger makes every data point traceable and ready for reporting according to ESRS.",
    outcomes: [
      { title: "Measured emissions", desc: "Reduce reliance on generic emission factors." },
      { title: "Operations linked to ESG", desc: "Energy mix, distribution, and consumption in the same data model." },
      { title: "Risk insight", desc: "AI flags deviations in production and distribution early." },
      { title: "CSRD-ready audit trail", desc: "ESRS-mapped data layer with complete traceability." },
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    faq: [
      {
        q: "What data sources can GoFreyra use in the energy sector?",
        a: "Meters, SCADA, operational and distribution systems, as well as external sources like DMI, Energinet, and Eurostat.",
      },
      {
        q: "Is the platform ready for CSRD?",
        a: "Yes. ESG Ledger is built with a data model that maps to ESRS topics and reporting requirements.",
      },
    ],
  },
  {
    slug: "landbrug",
    eyebrow: "Industry · Agriculture & Land Management",
    seoTitle: "GoFreyra for Agriculture and Land Management — Nature, Soil, and ESG",
    seoDescription:
      "Document soil quality, biodiversity, and land management with field, drone, and satellite data. Ready for ESG reporting and future nature schemes.",
    h1: "GoFreyra for Agriculture and Land Management",
    intro:
      "Farms and landowners face increasing demands from buyers, banks, and authorities to document soil quality, biodiversity, and operational impact. GoFreyra makes this documentation practical.",
    problems: [
      "Operational data exists in farm management software but isn't linked to nature or ESG data",
      "The effects of biodiversity initiatives are difficult to demonstrate",
      "Buyers request documentation that does not exist",
      "Nature schemes require a baseline and long-term monitoring",
    ],
    solution:
      "SmartConnect+ gathers field data, sensors, drone, and satellite imagery. DecisionsIQ analyses trends in soil, vegetation, and biodiversity. ESG Ledger and Impact Exchange make the efforts verifiable for buyers and future nature markets.",
    outcomes: [
      { title: "Soil, water, and biodiversity data", desc: "Structured data from the field, sensors, drones, and Sentinel-2." },
      { title: "Verifiable progress", desc: "Track the effect of initiatives over time with a traceable evidence base." },
      { title: "Buyer-ready documentation", desc: "Packages data for dairies, grain merchants, and banks." },
      { title: "Ready for nature schemes", desc: "Prepared for biodiversity and carbon markets." },
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    faq: [
      {
        q: "Do we need to use sensors in the field?",
        a: "Not necessarily. GoFreyra can start with satellite, drone, and operational data, and be expanded with sensors if it makes sense.",
      },
      {
        q: "Can the platform be used for nature schemes?",
        a: "Yes. Impact Exchange is prepared for biodiversity and carbon schemes and can document baseline data and progress.",
      },
    ],
  },
  {
    slug: "byggebranchen",
    eyebrow: "Industry · Construction & Real Estate",
    seoTitle: "GoFreyra for the Construction and Real Estate Industry — ESG and Data",
    seoDescription:
      "Document energy, material, and emissions data from projects and portfolios. Audit-ready reporting for CSRD, the Taxonomy, and lenders.",
    h1: "GoFreyra for Construction and Real Estate",
    intro:
      "Construction and real estate companies must be able to document energy, materials, and emissions — both in projects and across the entire portfolio. GoFreyra consolidates the sources and provides an audit trail.",
    problems: [
      "Energy and emissions data are scattered across projects and consultants",
      "Taxonomy and CSRD requirements increase the documentation burden",
      "Lenders demand traceable data",
      "Real estate portfolios lack consistent data collection",
    ],
    solution:
      "SmartConnect+ consolidates energy measurements, operational data, and supplier data. ESG Ledger structures data according to ESRS and Taxonomy requirements. The GoFreyra Dashboard provides management and lenders with a unified view.",
    outcomes: [
      { title: "Project and portfolio data", desc: "The same data model across buildings and projects." },
      { title: "Taxonomy and CSRD mapping", desc: "Data points structured for EU reporting." },
      { title: "Lender-ready documentation", desc: "A traceable evidence base for green financing." },
      { title: "Operational and asset overview", desc: "Track energy, water, and emissions per asset." },
    ],
    modules: ["SmartConnect+", "ESG Ledger", "DecisionsIQ", "GoFreyra Dashboard"],
    faq: [
      {
        q: "Can we start with a single property?",
        a: "Yes. A pilot can be started on one project or one property and expanded to the entire portfolio.",
      },
      {
        q: "Does GoFreyra support the EU Taxonomy?",
        a: "Yes. ESG Ledger can structure data according to the EU Taxonomy and CSRD/ESRS.",
      },
    ],
  },
];

export const PROBLEM_TEMPLATES: PseoTemplate[] = [
  {
    slug: "csrd-dokumentation",
    eyebrow: "Problem · CSRD",
    seoTitle: "CSRD Documentation in Practice — How to Build Your Evidence Base",
    seoDescription:
      "How to build a CSRD-ready data foundation with an audit trail, ESRS mapping, and traceable documentation. A practical guide and platform in one.",
    h1: "CSRD Documentation: From Estimates to a Traceable Data Foundation",
    intro:
      "CSRD increases the requirements for both the scope and quality of ESG data. It's not enough to tell; it must be documented and auditable.",
    problems: [
      "The data foundation is fragmented across systems",
      "The audit trail is rarely complete",
      "ESRS mapping is done manually in spreadsheets",
      "Auditors cannot trace figures back to the source",
    ],
    solution:
      "ESG Ledger adds a source, timestamp, and change history to every data point and maps data to ESRS. SmartConnect+ automatically collects data from sources. DecisionsIQ checks data quality and finds gaps.",
    outcomes: [
      { title: "Out-of-the-box ESRS mapping", desc: "Data points structured according to ESRS topics." },
      { title: "Complete audit trail", desc: "Every figure can be traced to its original source." },
      { title: "Faster reporting", desc: "Less manual work in quarterly and annual cycles." },
      { title: "Stronger audit responses", desc: "Defensible documentation, not estimates." },
    ],
    modules: ["ESG Ledger", "SmartConnect+", "DecisionsIQ", "GoFreyra Dashboard"],
    faq: [
      { q: "Is GoFreyra a CSRD reporting tool?", a: "No. GoFreyra provides the data foundation and audit trail that reporting tools lack." },
      { q: "Can you start with one ESRS topic?", a: "Yes. Many pilots start with E1 (climate) or E4 (biodiversity) and expand from there." },
    ],
  },
  {
    slug: "biodiversitetsovervaagning",
    eyebrow: "Problem · Biodiversity",
    seoTitle: "Biodiversity Monitoring — From Observation to Documentation",
    seoDescription:
      "Measure biodiversity with field, drone, and satellite data. Track progress over time and package the documentation for authorities, buyers, and nature markets.",
    h1: "Biodiversity Monitoring with Real-World Data",
    intro:
      "Biodiversity can only be managed if it's measured. GoFreyra combines field observations, drone and satellite imagery, and official data sources to create a structured baseline and track progress over time.",
    problems: [
      "Observations are stuck in notebooks and PDFs",
      "It is difficult to show real progress over time",
      "Landowners, consultants, and authorities work in separate systems",
      "Impact claims lack credibility",
    ],
    solution:
      "SmartConnect+ gathers field, drone, and satellite data, as well as public sources like GBIF, Natura 2000, and DMI. DecisionsIQ analyses NDVI, habitat development, and species indicators. Impact Exchange packages the evidence base.",
    outcomes: [
      { title: "Structured nature data", desc: "Field, drone, satellite, and GBIF data in the same model." },
      { title: "Progress over time", desc: "See real progress, not just snapshots." },
      { title: "Verifiable baseline", desc: "An evidence base to build the project around." },
      { title: "Ready for nature markets", desc: "Prepared for biodiversity and carbon schemes." },
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    faq: [
      { q: "What species can you track?", a: "We combine open sources like GBIF and DanBIF with your own field observations. It's not limited to specific species." },
      { q: "Do we need to use a drone?", a: "No, but it can significantly strengthen the documentation. Satellite imagery alone goes a long way." },
    ],
  },
  {
    slug: "esg-data-fra-drift",
    eyebrow: "Problem · Operations & ESG",
    seoTitle: "ESG Figures Directly from Operations — Without Spreadsheets",
    seoDescription:
      "Connect operational, energy, and utility data to your ESG reporting. Fewer manual processes, a stronger audit trail, and better risk insight.",
    h1: "ESG Data Directly from Operations",
    intro:
      "The ESG report must be traceable back to operations. When data lives in SCADA, ERP systems, and spreadsheets, the burden of proof becomes heavy and reporting slows down.",
    problems: [
      "Operational data and ESG data are separate worlds",
      "Energy, water, and emissions data are fragmented",
      "Manual workflows cause delays and errors",
      "Risk management lacks a data-driven foundation",
    ],
    solution:
      "SmartConnect+ connects operational systems to the platform. DecisionsIQ finds patterns and deviations. ESG Ledger creates an audit trail for every data point.",
    outcomes: [
      { title: "Operations as an ESG source", desc: "Energy, water, and emissions in the same data model." },
      { title: "Better risk insight", desc: "AI flags deviations early." },
      { title: "Audit-ready documentation", desc: "A traceable data foundation for ESG and compliance." },
      { title: "Less manual work", desc: "Structured workflows from measurement to report." },
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    faq: [
      { q: "Which operational systems can you integrate with?", a: "SCADA, IoT platforms, ERP systems, and common operational databases via APIs and standard protocols." },
      { q: "How quickly can we see data in the platform?", a: "A pilot setup is typically ready in 2-4 weeks." },
    ],
  },
];

export const ALL_PSEO = [...SECTOR_TEMPLATES, ...PROBLEM_TEMPLATES];

// =====================================================================
// GEO / Glossary — definitions written for AI search engines and humans
// =====================================================================

export interface GlossaryTerm {
  slug: string;
  term: string;
  /** 1-2 sentences, clear definition */
  shortDefinition: string;
  longExplanation: string;
  /** slugs */
  related: string[];
  faq: { q: string; a: string }[];
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "esg-dokumentation",
    term: "ESG Documentation",
    shortDefinition:
      "ESG documentation is the traceable data foundation behind a company's ESG reporting — the sources, timestamps, calculations, and change history that make the figures audit-ready.",
    longExplanation:
      "Whereas ESG reporting is the final output (e.g., a CSRD report), ESG documentation is the foundation itself. It covers data sources, the audit trail, ESRS mapping, and controls that make it possible to prove where each figure originates. Without proper documentation, the report cannot be defended to auditors, banks, or authorities.",
    related: ["esg-rapportering", "csrd", "audit-trail", "miljoedata"],
    faq: [
      {
        q: "What is the difference between ESG reporting and ESG documentation?",
        a: "ESG reporting is the final output — e.g., an annual report or CSRD report. ESG documentation is the underlying, traceable data foundation that makes the report audit-ready.",
      },
      {
        q: "Why is ESG documentation important?",
        a: "Because auditors, banks, and authorities increasingly demand traceable data, not estimates. Inadequate documentation can lead to qualifications in the audit opinion and a risk of greenwashing accusations.",
      },
    ],
  },
  {
    slug: "esg-rapportering",
    term: "ESG Reporting",
    shortDefinition:
      "ESG reporting is the structured reporting of a company's impact on Environmental, Social, and Governance factors — typically following frameworks like CSRD/ESRS, GRI, or TCFD.",
    longExplanation:
      "ESG reporting includes both quantitative data points (emissions, energy, water, biodiversity) and qualitative descriptions. CSRD and ESRS make reporting mandatory for a large number of Danish companies from 2024-2026 and require that the data be auditable.",
    related: ["esg-dokumentation", "csrd", "miljoedata"],
    faq: [
      {
        q: "Which frameworks are used for ESG reporting?",
        a: "The most commonly used are CSRD/ESRS, GRI, TCFD, and SASB. CSRD is mandatory in the EU and is based on the ESRS standards.",
      },
    ],
  },
  {
    slug: "miljoedata",
    term: "Environmental Data",
    shortDefinition:
      "Environmental data is measured data about nature and the physical environment — e.g., water, air, soil, biodiversity, weather, and land use — typically from sensors, drones, satellites, or field observations.",
    longExplanation:
      "Environmental data is used as the basis for ESG documentation, nature projects, research, and reporting to authorities. It differs from estimates and emission factors by being measured in the real world.",
    related: ["esg-data", "biodiversitetsovervaagning", "sensordata"],
    faq: [
      {
        q: "What is the difference between ESG data and environmental data?",
        a: "Environmental data consists of measurements of the physical environment (water, air, soil, biodiversity). ESG data is broader and also covers social and governance matters. Environmental data is often the most objective part of the ESG foundation.",
      },
      {
        q: "How is environmental data used in ESG?",
        a: "Environmental data is used to document climate (E1), water (E3), biodiversity (E4), and pollution (E2) indicators in ESRS. It replaces estimates with measured values and makes reporting more credible.",
      },
    ],
  },
  {
    slug: "esg-data",
    term: "ESG Data",
    shortDefinition:
      "ESG data is quantitative and qualitative data about a company's impact on the Environment (E), Social matters (S), and Governance (G) — used for both internal management and external reporting.",
    longExplanation:
      "ESG data covers everything from emissions and energy consumption to employee well-being, the supply chain, and board composition. The quality of ESG data determines whether the reporting can be audited and defended.",
    related: ["miljoedata", "esg-rapportering", "csrd"],
    faq: [],
  },
  {
    slug: "biodiversitetsovervaagning",
    term: "Biodiversity Monitoring",
    shortDefinition:
      "Biodiversity monitoring is the systematic collection and analysis of data on flora, fauna, and habitats — typically via field observations, drones, satellites, and open data sources like GBIF.",
    longExplanation:
      "The purpose is to establish a baseline and track progress over time, so that nature-based initiatives can be documented and managed. It is used by municipalities, nature projects, landowners, and companies with ESRS E4 reporting obligations.",
    related: ["miljoedata", "naturprojekt", "impact"],
    faq: [
      {
        q: "What is biodiversity monitoring?",
        a: "It is the systematic measurement of biodiversity — species, habitats, and ecosystem functions — typically over time, so that progress and the effect of initiatives can be documented.",
      },
      {
        q: "What data sources are used for biodiversity monitoring?",
        a: "Field observations, drone orthophotos, satellite data (Sentinel-2, Satlas), open sources such as GBIF and Natura 2000, and sensors.",
      },
    ],
  },
  {
    slug: "audit-trail",
    term: "Audit Trail",
    shortDefinition:
      "An audit trail is a traceable history of all changes, sources, and approvals behind a data point — crucial for an ESG report to be auditable.",
    longExplanation:
      "In practice, this means that every measured value has a source, a timestamp, and a change history. This is what auditors request when they need to verify ESG figures.",
    related: ["esg-dokumentation", "csrd"],
    faq: [],
  },
  {
    slug: "csrd",
    term: "CSRD",
    shortDefinition:
      "CSRD (Corporate Sustainability Reporting Directive) is the EU's sustainability reporting directive, which makes ESG reporting according to the ESRS standards mandatory and subject to audit.",
    longExplanation:
      "CSRD comes into effect in waves from 2024, covering thousands of Danish companies. It requires double materiality, traceable data, and an independent audit of the ESG report.",
    related: ["esg-rapportering", "esg-dokumentation"],
    faq: [
      {
        q: "When does CSRD apply to our company?",
        a: "CSRD is being phased in from 2024 to 2028, depending on company size. Large listed companies are first, followed by large companies in general, and then listed SMEs.",
      },
    ],
  },
  {
    slug: "sensordata",
    term: "Sensor Data",
    shortDefinition:
      "Sensor data is measurements from physical sensors in the field or in operations — e.g., water quality, energy consumption, temperature, soil moisture, or air quality.",
    longExplanation:
      "Sensor data provides high-frequency and objective measurements that can be used as an evidence base for both ESG documentation and nature monitoring.",
    related: ["miljoedata", "esg-dokumentation"],
    faq: [
      {
        q: "How can sensor data be used in ESG documentation?",
        a: "Sensor data replaces estimates with measured values, for example, for energy, water, discharges, and air quality. When sensor data is linked to an audit trail, it can be used directly as evidence in the ESG report.",
      },
    ],
  },
  {
    slug: "ai-i-baeredygtighed",
    term: "AI in Sustainability Reporting",
    shortDefinition:
      "In sustainability reporting, AI is used to find patterns, deviations, and risks in environmental and operational data — and to automate data quality checks.",
    longExplanation:
      "In GoFreyra, AI (DecisionsIQ) is used to flag deviations, suggest actions, and check data quality. Each recommendation is linked to the underlying data points, so the analysis is explainable and auditable.",
    related: ["esg-dokumentation", "miljoedata"],
    faq: [
      {
        q: "How can AI help with sustainability reporting?",
        a: "AI can automate data quality checks, find deviations in environmental and operational data, and suggest specific actions. This reduces manual work and strengthens the evidence base — provided that each recommendation can be explained by the data.",
      },
    ],
  },
  {
    slug: "gofreyra",
    term: "GoFreyra",
    shortDefinition:
      "GoFreyra is a Danish SaaS platform that collects, analyses, and documents environmental and operational data, enabling companies, municipalities, and nature projects to prove their sustainability efforts with real-world data.",
    longExplanation:
      "The platform consists of four modules: SmartConnect+ (collects data), DecisionsIQ (analyses data), ESG Ledger (documents data), and Impact Exchange (visualises and activates impact). Everything is brought together in the GoFreyra Dashboard.",
    related: ["esg-dokumentation", "miljoedata", "biodiversitetsovervaagning"],
    faq: [
      {
        q: "What is GoFreyra?",
        a: "GoFreyra is a Danish SaaS platform for environmental data, ESG documentation, and verifiable impact. It is built for companies, municipalities, industry, utility companies, landowners, and nature projects.",
      },
      {
        q: "Who is GoFreyra for?",
        a: "Companies with CSRD obligations, municipalities with nature and climate projects, industrial and utility companies, landowners, and nature project owners — anyone who needs traceable documentation of their sustainability work.",
      },
    ],
  },
];