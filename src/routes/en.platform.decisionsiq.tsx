import { createFileRoute } from "@tanstack/react-router";
import { EnStubPage, stubHead } from "@/components/site/EnStubPage";

export const Route = createFileRoute("/en/platform/decisionsiq")({
  head: () => stubHead({
    title: "DecisionsIQ — AI analysis and decision support for ESG and operations",
    description: "DecisionsIQ turns environmental and operational data into patterns, anomalies and explainable recommendations — so action gets prioritised, not buried.",
    path: "/en/platform/decisionsiq",
  }),
  component: () => <EnStubPage
    eyebrow="DecisionsIQ"
    title="From data to prioritised action."
    description="AI-driven anomaly detection, pattern recognition and explainable recommendations — built for ESG teams, operations and leadership."
    daHref="/platform/decisionsiq"
    daLabel="See full module page (Danish)"
  />,
});
