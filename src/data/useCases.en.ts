// Use case universe — specific applications, each with its own page at /use-cases/{slug}.

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
  title: string;            // GoFreyra for {usecase}
  shortTitle: string;       // named briefly
  subheadline: string;
  seoTitle: string;
  seoDescription: string;
  problem: string[];
  solution: string[];
  modules: string[];
  sectors: { slug: string; name: string }[]; // related sectors
  faq: { q: string; a: string }[];
}

export const USE_CASES: UseCase[] = [
  {
    slug: "biodiversitetsovervaagning",
    title: "Biodiversity Monitoring",
    shortTitle: "Biodiversity Monitoring",
    subheadline: "Structure data on species, habitats, and ecological conditions over time.",
    seoTitle: "Biodiversity Monitoring with GoFreyra — Nature in Data",
    seoDescription:
      "Track species, habitats, and habitat development with field, drone, and satellite data. Ready for ESG, nature schemes, and fund documentation.",
    problem: [
      "Biodiversity data is stored in notebooks, PDFs, and separate systems.",
      "It is difficult to show real development over time and to document the effect of specific nature conservation efforts.",
    ],
    solution: [
      "GoFreyra combines field observations, drone data, satellite imagery, and open registries like GBIF and DanBIF into a common data model.",
      "DecisionsIQ analyses NDVI, habitat development, and species indicators, and the ESG Ledger makes every data point traceable.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    sectors: [
      { slug: "kommuner", name: "Municipalities" },
      { slug: "naturprojekter", name: "Nature Projects" },
      { slug: "skovbrug", name: "Forestry" },
      { slug: "ngo-og-fonde", name: "NGOs and Foundations" },
    ],
    faq: [
      { q: "Which species can you track?", a: "We combine open sources like GBIF and DanBIF with your own field observations. It is not limited by species." },
      { q: "Do we need to use a drone?", a: "No, but it strengthens the documentation. Satellite and field data go a long way." },
      { q: "How long does it take to get a baseline?", a: "Typically 2-4 weeks using satellite data and open sources. Field data expands over seasons." },
    ],
  },
  {
    slug: "esg-dokumentation",
    title: "ESG Documentation",
    shortTitle: "ESG Documentation",
    subheadline: "A traceable data foundation for your ESG and CSRD reporting.",
    seoTitle: "ESG Documentation with GoFreyra — Traceable and Audit-Ready",
    seoDescription:
      "Collect ESG data from operations, sensors, and suppliers. An audit trail and ESRS mapping make the figures audit-ready.",
    problem: [
      "ESG data exists in spreadsheets, PDFs, and supplier emails—and can rarely be traced back to the source.",
      "This makes the report vulnerable to scrutiny from auditors, banks, and authorities.",
    ],
    solution: [
      "GoFreyra collects ESG data from operations, sensors, suppliers, and the field, and adds an audit trail to every data point.",
      "The ESG Ledger maps data to ESRS topics, making reporting faster and more consistent.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    sectors: [
      { slug: "industri", name: "Industry" },
      { slug: "forsyning", name: "Utilities" },
      { slug: "energi", name: "Energy" },
      { slug: "ejendomme-og-byggeri", name: "Real Estate and Construction" },
    ],
    faq: [
      { q: "Does GoFreyra replace our reporting tool?", a: "No. We provide the data foundation and audit trail that reporting tools lack." },
      { q: "Is the platform ready for CSRD?", a: "Yes. The ESG Ledger is built with a data model that maps to ESRS topics." },
      { q: "Can we start with one category?", a: "Yes. Many pilots start with E1 (climate) or E4 (biodiversity)." },
    ],
  },
  {
    slug: "miljoedata-dashboard",
    title: "Environmental Data Dashboard",
    shortTitle: "Environmental Data Dashboard",
    subheadline: "A single operational overview of your environmental data.",
    seoTitle: "Environmental Data Dashboard with GoFreyra — Overview and Insight",
    seoDescription:
      "Collect environmental indicators from operations, sensors, the field, and open sources in a single dashboard for management, operations, and reporting.",
    problem: [
      "Environmental data is stored in different systems and is typically only collected when a report is due.",
      "This means management lacks real-time insight and efforts cannot be managed continuously.",
    ],
    solution: [
      "The GoFreyra Dashboard consolidates environmental data across sources and roles—so operations, management, and the ESG team work with the same figures.",
      "Indicators can be broken down by area, project, or facility.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "GoFreyra Dashboard"],
    sectors: [
      { slug: "kommuner", name: "Municipalities" },
      { slug: "industri", name: "Industry" },
      { slug: "forsyning", name: "Utilities" },
      { slug: "energi", name: "Energy" },
    ],
    faq: [
      { q: "Can we have a dashboard per department?", a: "Yes. Access and views can be controlled by role and by area." },
      { q: "Can we share dashboards externally?", a: "Yes. Selected dashboards can be shared with partners, donors, or lenders." },
      { q: "Which data sources can be displayed?", a: "Operations, sensor, field, satellite, drone, and open registries." },
    ],
  },
  {
    slug: "sensordata-til-esg",
    title: "Sensor Data for ESG",
    shortTitle: "Sensor Data for ESG",
    subheadline: "Use IoT and operational sensors as an ESG source.",
    seoTitle: "Sensor Data for ESG with GoFreyra — Measured Instead of Estimated",
    seoDescription:
      "Connect sensors, SCADA, and IoT to your ESG foundation. Reduce reliance on generic emission factors.",
    problem: [
      "Many ESG figures are calculated using generic factors instead of measured data.",
      "This provides a weaker burden of proof and makes it difficult to show real progress.",
    ],
    solution: [
      "SmartConnect+ links sensors, meters, and operational systems directly into the ESG foundation.",
      "This provides measured figures, an audit trail, and better risk insight.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    sectors: [
      { slug: "industri", name: "Industry" },
      { slug: "forsyning", name: "Utilities" },
      { slug: "energi", name: "Energy" },
      { slug: "ejendomme-og-byggeri", name: "Real Estate and Construction" },
    ],
    faq: [
      { q: "Which sensors can you integrate?", a: "We support standard protocols and can integrate with existing IoT platforms." },
      { q: "Do we need to replace sensors?", a: "Rarely. We build on top of your existing setup." },
      { q: "How quickly can we see the data?", a: "Typically within 2-4 weeks for a standard integration." },
    ],
  },
  {
    slug: "naturgenopretning",
    title: "Nature Restoration",
    shortTitle: "Nature Restoration",
    subheadline: "Track the impact of nature restoration projects over time.",
    seoTitle: "Nature Restoration with GoFreyra — From Effort to Impact",
    seoDescription:
      "Structure the baseline, effort, and impact of nature restoration projects. Ready for ESG, fund documentation, and nature markets.",
    problem: [
      "Nature restoration projects are complex, with long time horizons and many data sources.",
      "The impact is difficult to demonstrate if data is not structured from the start.",
    ],
    solution: [
      "GoFreyra structures the baseline, effort, and impact, and combines field, satellite, drone, and open source data.",
      "This makes the impact documentable over time and useful in dialogues with authorities and partners.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"],
    sectors: [
      { slug: "kommuner", name: "Municipalities" },
      { slug: "naturprojekter", name: "Nature Projects" },
      { slug: "landbrug", name: "Agriculture" },
      { slug: "ngo-og-fonde", name: "NGOs and Foundations" },
    ],
    faq: [
      { q: "How long should we track the impact?", a: "It depends on the project, but often 5-10 years are needed to see real natural development." },
      { q: "Can we use existing baseline reports?", a: "Yes. They can be structured within the platform." },
      { q: "Is the data ready for nature markets?", a: "Yes. Impact Exchange is prepared for biodiversity and carbon schemes." },
    ],
  },
  {
    slug: "klimatilpasning",
    title: "Climate Adaptation",
    shortTitle: "Climate Adaptation",
    subheadline: "Track water levels, weather data, and infrastructure impact in climate adaptation projects.",
    seoTitle: "Climate Adaptation with GoFreyra — Data and Documentation",
    seoDescription:
      "Collect water, weather, and infrastructure impact data in climate adaptation projects. Built for municipalities and utilities.",
    problem: [
      "Climate adaptation projects have many data sources—weather, water, soil, and infrastructure.",
      "It is difficult to get a complete picture and document the impact over time.",
    ],
    solution: [
      "GoFreyra consolidates weather data, sensor data, and GIS layers into a single overview, allowing projects to be managed and documented.",
      "This enables better planning and a stronger dialogue with politicians and citizens.",
    ],
    modules: ["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"],
    sectors: [
      { slug: "kommuner", name: "Municipalities" },
      { slug: "forsyning", name: "Utilities" },
      { slug: "ejendomme-og-byggeri", name: "Real Estate and Construction" },
    ],
    faq: [
      { q: "Can you integrate DMI data?", a: "Yes. We use DMI and other open sources." },
      { q: "Can we track rainwater and flooding?", a: "Yes. We combine sensor, operational, and GIS data." },
      { q: "Can dashboards be shared with politicians?", a: "Yes. Access can be controlled by role." },
    ],
  },
  {
    slug: "audit-trail-esg",
    title: "ESG Audit Trail",
    shortTitle: "ESG Audit Trail",
    subheadline: "Traceability for every data point—from source to report.",
    seoTitle: "ESG Audit Trail with GoFreyra — from Source to Report",
    seoDescription:
      "Source, timestamp, methodology, and change history for every data point. Built for auditors, management, and authorities.",
    problem: [
      "Without an audit trail, ESG figures cannot be defended to auditors and stakeholders.",
      "Manual workflows create gaps in the burden of proof.",
    ],
    solution: [
      "The ESG Ledger adds the source, timestamp, methodology, and change history to every data point.",
      "This makes figures traceable from the report back to the source.",
    ],
    modules: ["SmartConnect+", "ESG Ledger", "GoFreyra Dashboard"],
    sectors: [
      { slug: "industri", name: "Industry" },
      { slug: "forsyning", name: "Utilities" },
      { slug: "raadgivere", name: "Consultants" },
      { slug: "ejendomme-og-byggeri", name: "Real Estate and Construction" },
    ],
    faq: [
      { q: "Does the audit trail replace our auditor?", a: "No. It gives the auditor a stronger foundation to work from." },
      { q: "Can we see who changed what?", a: "Yes. Every change is logged with a user and a timestamp." },
      { q: "Does the platform support ESRS?", a: "Yes. The data model maps to ESRS topics." },
    ],
  },
  {
    slug: "rapportklar-dokumentation",
    title: "Report-Ready Documentation",
    shortTitle: "Report-Ready Documentation",
    subheadline: "Extract audit-ready documentation for audits, the board, and authorities.",
    seoTitle: "Report-Ready Documentation with GoFreyra",
    seoDescription:
      "Extract audit-ready documentation directly from the platform—without manual clean-up and source hunting before each report.",
    problem: [
      "Documentation is typically only collected when a report is due—which causes time pressure and errors.",
      "The manual work of hunting for sources can take up the entire quarter.",
    ],
    solution: [
      "GoFreyra keeps the documentation continuously report-ready.",
      "When the report is due, it is extracted directly from the platform with an audit trail and ESRS mapping.",
    ],
    modules: ["SmartConnect+", "ESG Ledger", "GoFreyra Dashboard"],
    sectors: [
      { slug: "industri", name: "Industry" },
      { slug: "forsyning", name: "Utilities" },
      { slug: "energi", name: "Energy" },
      { slug: "raadgivere", name: "Consultants" },
    ],
    faq: [
      { q: "Which report formats do you support?", a: "PDF and structured data extracts for ESG and reporting tools." },
      { q: "Can the report be generated automatically?", a: "Yes. Templates can be set up per organisation." },
      { q: "Can we customise the report?", a: "Yes. Layout, sections, and indicators can be customised." },
    ],
  },
];

export function getUseCase(slug: string): UseCase | undefined {
  return USE_CASES.find((u) => u.slug === slug);
}