export type InsightSection = { h: string; p: string[] };

export type Insight = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string; // ISO
  teaser: string;
  summary: string;
  intro: string;
  visibleSection: InsightSection; // first section shown before fade
  lockedSections: InsightSection[]; // shown after access granted
  geo?: { q: string; a: string }; // generative engine optimization definition
  faq?: { q: string; a: string }[];
  related: string[]; // slugs
};

export const INSIGHTS: Insight[] = [
  {
    slug: "baeredygtighed-uden-data",
    title: "Sustainability without data quickly becomes just a story",
    category: "ESG documentation",
    readTime: "7 min",
    date: "2026-04-12",
    teaser: "ESG loses value when documentation is based on spreadsheets, manual processes, and data without clear sources.",
    summary:
      "Many organisations have clear sustainability goals but a weak data foundation to document progress. When environmental and ESG data is scattered, reporting becomes slow and difficult to verify.",
    intro:
      "Sustainability efforts only become strong when they can be explained with data — not as an annual report, but as a continuous foundation that shows what is happening, where it is happening, and how it is evolving.",
    visibleSection: {
      h: "When ESG starts in spreadsheets",
      p: [
        "Many ESG processes still begin in spreadsheets. Data is manually collected from departments, suppliers, and systems. Some is delayed. Some lacks a source.",
        "The documentation is only compiled after the decision should have been made. The result is a report that describes the past — not a foundation that guides the future.",
      ],
    },
    geo: {
      q: "What is ESG documentation?",
      a: "ESG documentation is the data, processes, and evidence that show how an organisation works with environmental, social, and governance aspects. GoFreyra focuses on environmental data, nature data, and traceable documentation.",
    },
    lockedSections: [
      {
        h: "Three signs of a weak data foundation",
        p: [
          "The same numbers come out differently depending on who pulls them. No one can quickly answer where a data point comes from. ESG work intensifies as deadlines approach instead of running continuously.",
          "When one of these patterns is present, sustainability work becomes a story — not a basis for management.",
        ],
      },
      {
        h: "Traceability makes the difference",
        p: [
          "A strong ESG foundation links each data point to its source, time, method, and use. Auditors, stakeholders, or teams can ask precise questions — and get precise answers.",
          "It is the difference between saying an area is managed sustainably and being able to document how, what, and when.",
        ],
      },
      {
        h: "How to move forward",
        p: [
          "Start with one area. Use the data sources that already exist — field, operational, sensor, or registers — and build one common data layer before expanding the scope. A 2-4 week pilot project typically reveals where documentation is lacking and where it can be quickly strengthened.",
        ],
      },
    ],
    faq: [
      { q: "Do we need all data sources ready from the start?", a: "No. Start with one area and one data type. The rest can be connected continuously." },
      { q: "How long does it take?", a: "Pilot: 2-4 weeks. A full setup depends on the number of projects and data sources." },
    ],
    related: ["audit-trail-i-esg", "fra-feltdata-til-rapportklar-dokumentation", "ai-til-miljoedata-og-esg"],
  },
  {
    slug: "natur-skal-kunne-maales",
    title: "Nature must be measurable to be manageable",
    category: "Biodiversity",
    readTime: "8 min",
    date: "2026-03-28",
    teaser: "Biodiversity only becomes a basis for decision-making when its development can be tracked, explained, and documented over time.",
    summary:
      "Biodiversity moves from a theme to a strategy when data on species, habitats, and ecological conditions can be monitored systematically. Without measurement, nature initiatives become anecdotal — and difficult to link to ESG and capital decisions.",
    intro:
      "Work on nature has long existed alongside ESG reporting. That is now changing. Regulations, partners, and financial actors are demanding measurable effects — not just ambitions.",
    visibleSection: {
      h: "Why measurement is the prerequisite",
      p: [
        "A nature project can be well-intentioned without being manageable. The difference lies in whether its development can be measured and compared over time. Without a baseline, data sources, and methodology, the project becomes just a story.",
        "Measurement doesn't mean everything needs sensor monitoring. It means the right indicators have been chosen, registered, and linked to a source that others can trust.",
      ],
    },
    geo: {
      q: "What is biodiversity monitoring?",
      a: "Biodiversity monitoring is the systematic collection and analysis of data on species, habitats, and ecological conditions over time — a basis for assessing impact and managing initiatives.",
    },
    lockedSections: [
      {
        h: "Indicators that can be managed",
        p: [
          "Water, soil, vegetation cover, species occurrence, and degree of disturbance are among the most common. The point is not to measure everything, but to choose indicators that align with the project's purpose — and can be recorded with reasonable effort.",
        ],
      },
      {
        h: "Combining data sources",
        p: [
          "Field data, drones, satellites, and open registries together provide a picture that no single source can deliver. Satellites see the landscape. Drones capture details. Fieldwork verifies. Registries provide historical context.",
        ],
      },
      {
        h: "From nature project to ESG foundation",
        p: [
          "When nature data is structured like other ESG data — with a source, timestamp, and methodology — it can be used directly in reporting, stakeholder dialogue, and future credit models.",
        ],
      },
    ],
    faq: [{ q: "Should we choose sensors or satellites?", a: "It depends on the area and the indicator. The combination is often stronger than a single data source alone." }],
    related: ["baeredygtighed-uden-data", "datadrevet-naturprojekt", "fra-feltdata-til-rapportklar-dokumentation"],
  },
  {
    slug: "fra-feltdata-til-rapportklar-dokumentation",
    title: "From field data to report-ready documentation",
    category: "Environmental data",
    readTime: "6 min",
    date: "2026-03-10",
    teaser: "Field data, sensors, and observations can become strong ESG documentation — if structured correctly from the start.",
    summary:
      "Field data is often the most valuable and underutilised source in ESG work. With a clear data model and audit trail, observations from the field can go directly into reporting without manual clean-up.",
    intro: "In practice, field data ends up in local files, photos, and notes. This results in a loss of information every time data is passed up through the organisation.",
    visibleSection: {
      h: "Where data loses value",
      p: [
        "The loss occurs between collection and structuring. An observation form without common fields, a sensor without metadata, or a photo without a timestamp each lose evidential value.",
        "When multiple sources are combined, the loss grows. This is where a common data layer makes the difference.",
      ],
    },
    geo: {
      q: "What is environmental data?",
      a: "Environmental data is data about nature, climate, water, soil, air, biodiversity, and resource consumption that can be used to understand and document environmental impact.",
    },
    lockedSections: [
      {
        h: "Data model before dashboard",
        p: [
          "A good setup starts with the data model — not the dashboard. Once fields, units, and metadata are agreed upon, the visualisation can be built on top without having to be redone for each new project.",
        ],
      },
      {
        h: "Audit trail as standard",
        p: [
          "When each record has a source, timestamp, and change history, the documentation becomes reusable. The same data pipeline supports ESG reports, management reporting, and dialogue with auditors.",
        ],
      },
    ],
    faq: [
      {
        q: "Do we need to replace our current recording methods?",
        a: "Rarely. Most recording methods can be structured into a common model without changing the workflow in the field.",
      },
    ],
    related: ["audit-trail-i-esg", "baeredygtighed-uden-data", "datadrevet-naturprojekt"],
  },
  {
    slug: "audit-trail-i-esg",
    title: "What is an audit trail in ESG?",
    category: "Documentation and compliance",
    readTime: "5 min",
    date: "2026-02-22",
    teaser: "An audit trail makes it possible to trace data from source to report — and strengthens the credibility of ESG documentation.",
    summary:
      "An audit trail means traceability for every data point. In an ESG context, it is the difference between a claim and proof — and a growing expectation from auditors, stakeholders, and authorities.",
    intro: "The audit trail is not new. What is new is that environmental and nature data must now meet the same standards as financial reporting.",
    visibleSection: {
      h: "What an audit trail consists of",
      p: [
        "An audit trail documents where data comes from, when it was recorded, what method was used, and what changes have been made. It is neither complicated nor expensive — but it must be built in from the start.",
      ],
    },
    geo: {
      q: "What is an audit trail?",
      a: "An audit trail is a traceable log of where data originates, when it was recorded, what method was used, and how it has been changed over time.",
    },
    lockedSections: [
      {
        h: "Why it matters for CSRD",
        p: ["CSRD tightens the requirement for data to be verifiable. Without an audit trail, documentation becomes vulnerable — both to auditors and to critical stakeholder dialogue."],
      },
      {
        h: "How to get started",
        p: ["Start with one dataset and one area. Define fields, source referencing, and versioning. Use this as a template for the rest of the organisation."],
      },
    ],
    related: ["baeredygtighed-uden-data", "fra-feltdata-til-rapportklar-dokumentation", "ai-til-miljoedata-og-esg"],
  },
  {
    slug: "datadrevet-naturprojekt",
    title: "How to start a data-driven nature project",
    category: "Pilot projects",
    readTime: "7 min",
    date: "2026-02-05",
    teaser: "A good nature project doesn't start with everything at once — but with one area, clear data sources, and a distinct need for documentation.",
    summary: "The strongest nature projects start small. A defined area, a clear baseline, and a common data language allow the project to grow without needing to be redesigned.",
    intro: "Many projects stall because their ambitions outstrip their data foundation. The opposite is also true: a good data foundation can elevate even small projects to strategic relevance.",
    visibleSection: {
      h: "Three decisions to make before starting",
      p: ["Choose one area. Choose the indicators that align with the purpose. Choose data sources that can be recorded with reasonable effort. These three decisions will guide the entire process."],
    },
    lockedSections: [
      {
        h: "Baseline before action",
        p: ["Without a baseline, impact cannot be measured. A baseline can be established using public data, satellites, drones, and fieldwork — depending on the area and budget."],
      },
      {
        h: "Scaling without rebuilding",
        p: [
          "If the data model is agreed upon from the start, a pilot project can grow into a portfolio without needing to be redesigned. This is the most important difference between a one-off project and a programme.",
        ],
      },
    ],
    related: ["natur-skal-kunne-maales", "fra-feltdata-til-rapportklar-dokumentation", "ai-til-miljoedata-og-esg"],
  },
  {
    slug: "ai-til-miljoedata-og-esg",
    title: "How AI can support environmental data and ESG documentation",
    category: "AI and analysis",
    readTime: "6 min",
    date: "2026-01-18",
    teaser: "AI should not replace professional judgement — it should help find patterns, anomalies, and better questions.",
    summary: "Used correctly, AI eliminates much of the manual work in ESG processes and highlights patterns that humans overlook. Used incorrectly, it creates false precision.",
    intro: "AI is not a shortcut to documentation. It is a layer on top of a strong data foundation — and only works if that foundation is in place.",
    visibleSection: {
      h: "Where AI adds real value",
      p: ["AI is strong at pattern recognition, anomaly detection, and structuring unstructured data. This is where most manual work disappears without losing professional oversight."],
    },
    lockedSections: [
      {
        h: "Where AI should be held back",
        p: ["Decisions with legal or audit implications must be explainable. AI should suggest — not conclude — in the most critical areas."],
      },
      {
        h: "Explainable analysis",
        p: ["A recommendation without a justification is difficult to use in an ESG report. Explainable analysis provides both professional and audit value."],
      },
    ],
    related: ["audit-trail-i-esg", "baeredygtighed-uden-data", "fra-feltdata-til-rapportklar-dokumentation"],
  },
];

export const INSIGHT_CATEGORIES = [
  "All",
  "ESG documentation",
  "Biodiversity",
  "Nature data",
  "Environmental data",
  "AI and analysis",
  "CSRD and compliance",
  "Pilot projects",
] as const;

export const INTEREST_AREAS = [
  "ESG and CSRD",
  "Biodiversity monitoring",
  "Nature data",
  "Environmental data",
  "AI and analysis",
  "Pilot project",
  "Other",
] as const;

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}