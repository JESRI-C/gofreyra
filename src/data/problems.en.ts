// Problem universe — pSEO/GEO pages about the problems GoFreyra solves.

export type ProblemSlug =
  | "esg-dokumentation"
  | "fragmenterede-data"
  | "manglende-audit-trail"
  | "manuelle-esg-rapporter"
  | "naturdata-uden-struktur"
  | "beslutninger-uden-realtidsdata";

export interface ProblemPage {
  slug: ProblemSlug;
  name: string;
  cardTeaser: string;
  cardCta: string;
  h1: string;
  subheadline: string;
  seoTitle: string;
  seoDescription: string;
  whatIs: string;
  whyHappens: string;
  inPractice: string;
  solution: string;
  modules: string[];
  sectors: { slug: string; label: string }[];
  useCases: { slug: string; label: string }[];
  dataPages: { slug: string; label: string }[];
  faq: { q: string; a: string }[];
}

const M = {
  smartconnect: "SmartConnect+",
  decisionsiq: "DecisionsIQ",
  ledger: "ESG Ledger",
  exchange: "Impact Exchange",
  dashboard: "GoFreyra Dashboard",
};

export const PROBLEMS: ProblemPage[] = [
  {
    slug: "esg-dokumentation",
    name: "ESG documentation",
    cardTeaser: "When ESG data isn't traceable, reporting becomes more cumbersome and less credible.",
    cardCta: "Read about ESG documentation",
    h1: "ESG documentation requires better data",
    subheadline:
      "GoFreyra helps make ESG data more traceable, usable, and easier to document.",
    seoTitle: "ESG Documentation — Traceable and Report-Ready with GoFreyra",
    seoDescription:
      "Make ESG documentation traceable from source to report. GoFreyra gathers environmental data, sources, and documentation status in a single dashboard.",
    whatIs:
      "ESG documentation is the data foundation behind reporting on the environment, climate, and nature. It covers figures, sources, methods, and timestamps — and the requirement to be able to verify them.",
    whyHappens:
      "ESG documentation often becomes cumbersome because data comes from many different sources. Some reside in spreadsheets, others in reports, emails, systems, or with external consultants. When sources, methods, and timestamps aren't clear, the reporting becomes harder to defend.",
    inPractice:
      "The consequence is longer reporting cycles, more manual work, and a greater risk of errors. The ESG team spends time chasing numbers instead of using them.",
    solution:
      "GoFreyra gathers environmental data, data sources, and documentation status in a single dashboard. The platform links data points to their source, time, method, and reporting requirements, making ESG an ongoing process — not a quarterly firefighting exercise.",
    modules: [M.ledger, M.smartconnect, M.decisionsiq, M.dashboard],
    sectors: [
      { slug: "kommuner", label: "Municipalities" },
      { slug: "industri", label: "Industry" },
      { slug: "forsyning", label: "Utilities" },
      { slug: "raadgivere", label: "Consultants" },
      { slug: "ejendomme-og-byggeri", label: "Real Estate and Construction" },
    ],
    useCases: [
      { slug: "esg-dokumentation", label: "ESG documentation" },
      { slug: "audit-trail-esg", label: "Audit trail in ESG" },
    ],
    dataPages: [
      { slug: "co2", label: "CO₂ and climate indicators" },
      { slug: "driftsdata", label: "Operational data" },
      { slug: "sensordata", label: "Sensor data" },
    ],
    faq: [
      { q: "What is ESG documentation?", a: "It's the data foundation behind ESG reporting — figures, sources, methods, and timestamps that make the figures verifiable." },
      { q: "Why is traceability important in ESG?", a: "Traceability makes it possible to explain where data comes from and to vouch for the report to auditors, management, and authorities." },
      { q: "Can GoFreyra replace ESG reporting tools?", a: "GoFreyra functions as a data layer and documentation trail. Reporting tools can be connected to it, so they draw from a single, traceable foundation." },
      { q: "Can you start with existing data?", a: "Yes. Most organisations start with the data they already have and gradually expand with new sources." },
      { q: "How does an audit trail help in reporting?", a: "An audit trail shows the source, method, and time for each data point, so the reporting can be documented and verified." },
    ],
  },
  {
    slug: "fragmenterede-data",
    name: "Fragmented data",
    cardTeaser: "Environmental data, operational data, and project data are often stored in different systems.",
    cardCta: "Read about fragmented data",
    h1: "When environmental data is scattered, decision-making slows down",
    subheadline:
      "GoFreyra gathers environmental data, ESG data, and project data into a single, common data foundation.",
    seoTitle: "Fragmented Environmental Data — Unify It in One Platform | GoFreyra",
    seoDescription:
      "Unify scattered environmental data, operational data, and project data into a single, common data foundation. GoFreyra gradually connects sources and makes data usable.",
    whatIs:
      "Fragmented data is data that exists — but is scattered across different systems, formats, spreadsheets, and reports, requiring manual work to get an overview.",
    whyHappens:
      "Many organisations already have relevant data. The problem is that it's often located in different systems, formats, and departments. This makes it difficult to create an overview, compare progress, and document impact.",
    inPractice:
      "Decisions become slower, reports become more expensive to produce, and analyses are based on a smaller slice of reality than they should be.",
    solution:
      "GoFreyra acts as a unifying platform layer where data sources can be connected gradually — sensors, field data, satellite data, operational data, manual entries, and external registries. Data is structured into a single, common model.",
    modules: [M.smartconnect, M.dashboard, M.decisionsiq, M.ledger],
    sectors: [
      { slug: "industri", label: "Industry" },
      { slug: "forsyning", label: "Utilities" },
      { slug: "kommuner", label: "Municipalities" },
      { slug: "naturprojekter", label: "Nature projects" },
      { slug: "landbrug", label: "Agriculture" },
    ],
    useCases: [
      { slug: "naturgenopretning", label: "Data-driven nature project" },
      { slug: "miljoedata-dashboard", label: "Data sources in one place" },
    ],
    dataPages: [
      { slug: "sensordata", label: "Sensor data" },
      { slug: "driftsdata", label: "Operational data" },
      { slug: "feltregistreringer", label: "Field registrations" },
    ],
    faq: [
      { q: "What does fragmented data mean?", a: "It means that relevant data exists — but is scattered in a way that makes it difficult to use collectively." },
      { q: "Which data sources can GoFreyra unify?", a: "Sensors, satellite data, drone data, field registrations, operational data, weather data, external registries, and manual inputs." },
      { q: "Do all integrations need to be ready from the start?", a: "No. Most customers start with the most important sources and expand over time." },
      { q: "Can manual data be used?", a: "Yes. Manual registrations can be structured and connected to the same data model as automatic sources." },
      { q: "How is data made usable?", a: "Through a common data model, validation, connection to projects, and visualisation in dashboards." },
    ],
  },
  {
    slug: "manglende-audit-trail",
    name: "Missing audit trail",
    cardTeaser: "Without an audit trail, it becomes difficult to explain where data comes from and how it's used.",
    cardCta: "Read about audit trail",
    h1: "Without an audit trail, documentation is hard to trust",
    subheadline:
      "GoFreyra helps connect data points with their source, method, time, and use.",
    seoTitle: "Audit Trail for Environmental Data and ESG | GoFreyra",
    seoDescription:
      "Create an audit trail from source to report. GoFreyra documents where data comes from, how it's collected, and how it's used.",
    whatIs:
      "An audit trail is a continuous record of a data point: where it comes from, how it was measured, when it was recorded, and how it is included in a report.",
    whyHappens:
      "A data point has the most value when you can explain where it comes from, how it was collected, and how it is used. Without an audit trail, ESG documentation, nature data, and impact claims become harder to verify.",
    inPractice:
      "Auditors, management, or partners ask questions that can't be answered quickly. This delays decisions and weakens trust in the report.",
    solution:
      "ESG Ledger creates a documentation trail from source to report. The goal is to make documentation more transparent and easier to use in ESG, reporting, and dialogue with partners.",
    modules: [M.ledger, M.dashboard, M.smartconnect, M.exchange],
    sectors: [
      { slug: "raadgivere", label: "Consultants" },
      { slug: "industri", label: "Industry" },
      { slug: "forsyning", label: "Utilities" },
      { slug: "ngo-og-fonde", label: "NGOs and foundations" },
    ],
    useCases: [
      { slug: "audit-trail-esg", label: "Audit trail in ESG" },
      { slug: "rapportklar-dokumentation", label: "Field data for report-ready documentation" },
    ],
    dataPages: [
      { slug: "feltregistreringer", label: "Field registrations" },
      { slug: "sensordata", label: "Sensor data" },
      { slug: "co2", label: "CO₂ and climate indicators" },
    ],
    faq: [
      { q: "What is an audit trail?", a: "A continuous record of a data point's source, method, time, and use." },
      { q: "Why is an audit trail important in ESG?", a: "Because reporting becomes more credible when every figure can be traced back to a source and a method." },
      { q: "How can you trace data back to its source?", a: "By recording the source, method, and time on the data point and maintaining that link into the reporting layer." },
      { q: "What does report-ready documentation mean?", a: "That data and its documentation are structured in a way that can be directly used in ESG and management reporting." },
      { q: "Is blockchain necessary for an audit trail?", a: "No. An audit trail is about the connection between data, source, and report. Blockchain is not a prerequisite." },
    ],
  },
  {
    slug: "manuelle-esg-rapporter",
    name: "Manual ESG reports",
    cardTeaser: "Manual reporting processes are time-consuming and increase the risk of errors.",
    cardCta: "Read about manual ESG reports",
    h1: "Manual ESG reports waste time and create uncertainty",
    subheadline:
      "GoFreyra helps make the data foundation more unified, traceable, and report-ready.",
    seoTitle: "Reduce Manual Work in ESG Reporting | GoFreyra",
    seoDescription:
      "Make ESG reporting less manual. GoFreyra gathers the data foundation, sources, and documentation continuously — not just at the time of reporting.",
    whatIs:
      "Manual ESG reports are reports based on spreadsheets, emails, and repeated data requests — instead of a continuous, unified data foundation.",
    whyHappens:
      "Many ESG processes still rely on manual collections, spreadsheets, and repeated follow-ups. This makes reporting cumbersome and increases the risk of errors, delays, and unclear data sources.",
    inPractice:
      "The ESG team spends weeks gathering figures, validating them, and creating the report. This leaves less time to actually use data for decision-making.",
    solution:
      "GoFreyra gathers relevant environmental and ESG data in a dashboard, so status, data sources, and documentation can be tracked continuously — not just at the time of reporting.",
    modules: [M.dashboard, M.ledger, M.decisionsiq, M.smartconnect],
    sectors: [
      { slug: "industri", label: "Industry" },
      { slug: "forsyning", label: "Utilities" },
      { slug: "ejendomme-og-byggeri", label: "Real Estate and Construction" },
      { slug: "raadgivere", label: "Consultants" },
    ],
    useCases: [
      { slug: "esg-dokumentation", label: "ESG documentation" },
      { slug: "audit-trail-esg", label: "Audit trail in ESG" },
    ],
    dataPages: [
      { slug: "co2", label: "CO₂ and climate indicators" },
      { slug: "driftsdata", label: "Operational data" },
      { slug: "sensordata", label: "Sensor data" },
    ],
    faq: [
      { q: "Why are manual ESG reports a problem?", a: "They are time-consuming, increase the risk of errors, and make it difficult to document sources and methods." },
      { q: "Can GoFreyra reduce manual work?", a: "Yes. By gathering data continuously and structuring it from the start, so the report doesn't have to be built from scratch every time." },
      { q: "Can the platform be used before achieving full data maturity?", a: "Yes. Most start somewhere — typically with one area, one pilot project, and selected data sources." },
      { q: "How are report exports handled?", a: "Data can be exported in a structured format and linked to ESRS and reporting requirements." },
      { q: "How is data linked to ESG reporting?", a: "Via the common data model and audit trail, so the report draws from a single, traceable foundation." },
    ],
  },
  {
    slug: "naturdata-uden-struktur",
    name: "Unstructured nature data",
    cardTeaser: "Nature data loses value when observations, images, and measurements are not collected systematically.",
    cardCta: "Read about nature data",
    h1: "Nature data loses value when it isn't structured",
    subheadline:
      "GoFreyra makes nature data easier to collect, track, and use in documentation.",
    seoTitle: "Structure Nature Data for Documentation and Monitoring | GoFreyra",
    seoDescription:
      "Unify field data, images, species observations, and measurements into a single structure. GoFreyra makes nature data useful for project monitoring and reporting.",
    whatIs:
      "Nature data includes field registrations, species observations, sensor measurements, images, maps, and reports that describe the state and development of nature.",
    whyHappens:
      "Nature projects often generate many different types of data: field registrations, images, species observations, sensor measurements, maps, and reports. Without a common structure, it becomes difficult to track progress over time.",
    inPractice:
      "Important observations end up left in folders and PDFs. Impact and progress become difficult to demonstrate — both internally and to funding partners.",
    solution:
      "GoFreyra gathers nature data into project areas, links indicators to data sources, and visualises progress in a dashboard. This makes nature data more useful for project monitoring, reporting, and dialogue.",
    modules: [M.smartconnect, M.dashboard, M.decisionsiq, M.exchange],
    sectors: [
      { slug: "kommuner", label: "Municipalities" },
      { slug: "naturprojekter", label: "Nature projects" },
      { slug: "skovbrug", label: "Forestry" },
      { slug: "landbrug", label: "Agriculture" },
      { slug: "ngo-og-fonde", label: "NGOs and foundations" },
    ],
    useCases: [
      { slug: "naturgenopretning", label: "Data-driven nature project" },
      { slug: "biodiversitetsovervaagning", label: "Biodiversity monitoring" },
    ],
    dataPages: [
      { slug: "biodiversitet", label: "Biodiversity" },
      { slug: "feltregistreringer", label: "Field registrations" },
      { slug: "satellitdata", label: "Satellite data" },
    ],
    faq: [
      { q: "What is nature data?", a: "Data about the state and development of nature — typically species, habitats, water, soil, and vegetation." },
      { q: "How can nature data be structured?", a: "By linking observations to project areas, indicators, and a common data model." },
      { q: "Can field registrations be used?", a: "Yes. Field registrations are often the backbone of nature data and can be structured directly in the platform." },
      { q: "Can sensors be added later?", a: "Yes. Sensors can be connected when the project is ready — without having to start over." },
      { q: "How can nature data be used in ESG?", a: "Nature data can document biodiversity and nature-related initiatives that are part of ESG and sustainability reporting." },
    ],
  },
  {
    slug: "beslutninger-uden-realtidsdata",
    name: "Decisions without real-time data",
    cardTeaser: "When data is only collected after the project, it's hard to act in time.",
    cardCta: "Read about real-time data",
    h1: "When data arrives late, decisions are also late",
    subheadline:
      "GoFreyra helps organisations monitor environmental data and project status closer to reality.",
    seoTitle: "Real-time Data for Environment, Operations, and Nature Projects | GoFreyra",
    seoDescription:
      "Monitor environmental data, operations, and project status closer to reality. GoFreyra connects data sources to dashboards and alerts.",
    whatIs:
      "Real-time data is data that is updated continuously, so status and deviations can be seen close to the time they occur.",
    whyHappens:
      "If data is only collected when the report is due, it becomes difficult to act along the way. This applies to operations, nature projects, ESG, and environmental monitoring.",
    inPractice:
      "Deviations are detected too late, projects lose momentum, and documentation becomes backward-looking instead of guiding.",
    solution:
      "GoFreyra connects relevant data sources to dashboards and alerts, allowing the organisation to see status, deviations, and documentation needs earlier in the process.",
    modules: [M.smartconnect, M.decisionsiq, M.dashboard, M.ledger],
    sectors: [
      { slug: "forsyning", label: "Utilities" },
      { slug: "industri", label: "Industry" },
      { slug: "kommuner", label: "Municipalities" },
      { slug: "naturprojekter", label: "Nature projects" },
      { slug: "energi", label: "Energy" },
    ],
    useCases: [
      { slug: "miljoedata-dashboard", label: "Data sources in one place" },
      { slug: "naturgenopretning", label: "Data-driven nature project" },
    ],
    dataPages: [
      { slug: "sensordata", label: "Sensor data" },
      { slug: "driftsdata", label: "Operational data" },
      { slug: "vejrdata", label: "Weather data" },
    ],
    faq: [
      { q: "What is real-time data?", a: "Data that is updated continuously, so status and deviations become visible close to the time they occur." },
      { q: "Does data always have to be live?", a: "No. Many decisions are well-supported by daily or weekly updates." },
      { q: "Can GoFreyra use periodic data?", a: "Yes. The platform combines both continuous and periodic sources in the same overview." },
      { q: "How does AI help with deviations?", a: "AI can highlight patterns and fluctuations that would otherwise be lost in the volume of data." },
      { q: "How is real-time data used in ESG?", a: "Real-time data turns ESG into an ongoing management discipline rather than a quarterly reporting exercise." },
    ],
  },
];

export const getProblem = (slug: string): ProblemPage | undefined =>
  PROBLEMS.find((p) => p.slug === (slug as ProblemSlug));