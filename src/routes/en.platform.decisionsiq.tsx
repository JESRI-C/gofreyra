import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";
import decisionsiqHero from "@/assets/decisionsiq-hero.png";

const FAQ = [
  { q: "What kind of AI does DecisionsIQ use?", a: "A combination of statistical methods, anomaly detection and machine learning. We don't use AI as a black box — every recommendation can be traced back to the underlying data points." },
  { q: "Does DecisionsIQ make decisions for us?", a: "No. DecisionsIQ doesn't replace expert judgement. It helps surface patterns, ask better questions and prioritise the next action." },
  { q: "How much data does it need?", a: "We start with the data foundation you have. The module improves with time and volume — but delivers value early on basic patterns and quality checks." },
  { q: "How is explainability ensured?", a: "Every recommendation shows the data points, sources and periods it builds on. That makes it usable in ESG work and in front of auditors." },
];

export const Route = createFileRoute("/en/platform/decisionsiq")({
  head: () => buildHead({
    title: "DecisionsIQ — AI analysis and recommendations | GoFreyra",
    description: "DecisionsIQ analyses data from SmartConnect+ and delivers patterns, risk flags and prioritised actions — with explanations for every recommendation.",
    path: "/platform/decisionsiq",
    locale: "en",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: () => (
    <ProductPage
      eyebrow="Module 2 · Analyse data"
      title="DecisionsIQ"
      subtitle="Analyses data and delivers concrete recommendations, risk flags and prioritised actions."
      intro="DecisionsIQ takes the data from SmartConnect+ and surfaces what people overlook: anomalies, patterns and early risks. Every recommendation is tied to the underlying data points — not a black-box AI oracle."
      visual={
        <img
          src={decisionsiqHero}
          alt="DecisionsIQ dashboard with CO2e trend, anomaly markers, risk overview, ESG score and AI recommendations based on environmental data"
          className="w-full h-auto rounded-2xl border border-border shadow-elegant"
          loading="eager"
        />
      }
      features={[
        { title: "Anomaly detection", desc: "Spot unusual patterns in environmental and operational data before they become problems." },
        { title: "Risk indicators", desc: "Forecast risks on water, biodiversity, resource use and emissions." },
        { title: "Concrete recommendations", desc: "Get prioritised proposals for action based on your own data." },
        { title: "Data quality checks", desc: "Find gaps, errors and inconsistencies before they hit a report." },
        { title: "Workflow triggers", desc: "Automatically kick off actions when something needs attention." },
        { title: "Explainable analysis", desc: "Every recommendation can be traced back to its source." },
      ]}
      flow={{
        eyebrow: "Decision support",
        title: "From signal to action",
        steps: [
          { n: "01", t: "Data signal", d: "Measurement, operations or satellite." },
          { n: "02", t: "Anomaly", d: "Patterns outside the norm are flagged." },
          { n: "03", t: "Risk matrix", d: "Assessment of impact and likelihood." },
          { n: "04", t: "Recommendation", d: "Prioritised proposal — with reasoning." },
          { n: "05", t: "Action", d: "Trigger a workflow or document a decision." },
        ],
      }}
      useCases={[
        { t: "Examples of anomalies", d: "Sudden pH change in a stream, drop in a biodiversity indicator in an area, or a rise in emissions on a specific operational process." },
        { t: "Recommendation panel", d: "A sorted overview of the next 5–10 things that need attention across areas and departments." },
      ]}
      notDoing={[
        "DecisionsIQ doesn't replace expert judgement — it supports it.",
        "The module doesn't issue certificates or verifications.",
        "AI recommendations don't automate decisions that humans should make.",
      ]}
      bullets={[
        "Less time spent interpreting data",
        "Better prioritisation of sustainability work",
        "Stronger decision foundation for operations and leadership",
      ]}
      dataSources={["Time-series data from sensors", "Operational data from SCADA / ERP", "Satellite and drone data", "Field observations", "Weather and climate data", "Emission factors (IPCC EFDB)", "History from ESG Ledger"]}
      relatedModules={[
        { name: "SmartConnect+", to: "/en/platform/smartconnect", d: "Provides the validated data foundation DecisionsIQ analyses." },
        { name: "ESG Ledger", to: "/en/platform/esg-ledger", d: "Every recommendation can be documented with source and method." },
        { name: "GoFreyra Dashboard", to: "/en/dashboard", d: "Risk flags and the prioritised action queue shown together for ops, ESG and leadership." },
      ]}
      faq={FAQ}
    />
  ),
});
