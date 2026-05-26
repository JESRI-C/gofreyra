import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";
import esgLedgerHero from "@/assets/esg-ledger-hero.png";

const FAQ = [
  { q: "What is an audit trail?", a: "A complete, traceable history of where a data point comes from, when it was collected, who changed it, and how it was used in a report." },
  { q: "How does ESG Ledger support CSRD?", a: "Data points are structured by ESRS topic and tied to source, method and documentation. That makes CSRD reporting faster and easier to defend." },
  { q: "Do you use blockchain?", a: "ESG Ledger uses ledger logic as a trust layer for data integrity. The main value is traceability, documentation and better audit foundations — not crypto or speculation." },
  { q: "Do you replace the auditor?", a: "No. We make the audit easier by providing a traceable data foundation, so the auditor can focus on judgement rather than data plumbing." },
];

export const Route = createFileRoute("/en/platform/esg-ledger")({
  head: () => buildHead({
    title: "ESG Ledger — Audit-ready ESG documentation | GoFreyra",
    description: "ESG Ledger attaches source, timestamp and audit trail to every data point. Built for CSRD, ESRS, audit and nature reporting.",
    path: "/platform/esg-ledger",
    locale: "en",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: () => (
    <ProductPage
      eyebrow="Module 3 · Document data"
      title="ESG Ledger"
      subtitle="Documents every data point with source, timestamp and full audit trail."
      intro="ESG Ledger is the trust foundation your report rests on. Every number can be traced back to the original sensor, observation or data source — so you can answer auditors and the board without digging through spreadsheets."
      visual={
        <img
          src={esgLedgerHero}
          alt="ESG Ledger dashboard with verified documents, audit trail, data sources and report-ready documentation status"
          className="w-full h-auto rounded-2xl border border-border shadow-elegant"
          loading="eager"
        />
      }
      features={[
        { title: "Source documentation", desc: "Every data point is tied to the originating sensor, observation or system source." },
        { title: "Complete audit trail", desc: "Traceable history of changes, approvals and reporting flows." },
        { title: "Verifiable data integrity", desc: "Prove that data hasn't been altered after collection — e.g. via cryptographic hashing." },
        { title: "CSRD and ESRS mapping", desc: "Data points structured by ESRS topic and reporting requirement." },
        { title: "Report-ready structure", desc: "Pull data straight into an ESG report, audit or internal review." },
        { title: "Roles and access", desc: "Access control for ESG, operations, auditors and external partners." },
      ]}
      flow={{
        eyebrow: "Source to report",
        title: "How a data point is documented",
        steps: [
          { n: "01", t: "Source", d: "Sensor, observation or system source." },
          { n: "02", t: "Timestamp", d: "When data was collected and by whom." },
          { n: "03", t: "Validation", d: "Quality check and method statement." },
          { n: "04", t: "Audit trail", d: "Version history and approvals." },
          { n: "05", t: "Report", d: "Ready for CSRD, audit and leadership." },
        ],
      }}
      useCases={[
        { t: "Documentation status per KPI", d: "See for every indicator whether source, method and approval are in place — or where evidence is missing." },
        { t: "CSRD-related data logic", d: "Mapping to ESRS topics so it's clear which data points cover which requirements." },
      ]}
      notDoing={[
        "ESG Ledger doesn't issue certificates.",
        "We don't replace your reporting tool — we strengthen the data foundation behind it.",
        "Blockchain is used as a trust layer, not as crypto or speculation.",
      ]}
      bullets={[
        "Stronger answers when the auditor asks",
        "Less risk of greenwashing criticism",
        "A shared data foundation across departments",
      ]}
      dataSources={["Sensor data via SmartConnect+", "Operational data from ERP and SCADA", "Manual ESG input", "External registries (DMI, Eurostat, GBIF)", "Supplier data", "Emission factors (IPCC EFDB)", "Existing ESG tools", "Audit logs and approvals"]}
      relatedModules={[
        { name: "SmartConnect+", to: "/en/platform/smartconnect", d: "Provides structured data with timestamps and sources." },
        { name: "DecisionsIQ", to: "/en/platform/decisionsiq", d: "Recommendations and anomalies are logged in the same audit trail." },
        { name: "Impact Exchange", to: "/en/platform/impact-exchange", d: "Uses the documented impact as evidence." },
      ]}
      faq={FAQ}
    />
  ),
});
