import { createFileRoute } from "@tanstack/react-router";
import { EnStubPage, stubHead } from "@/components/site/EnStubPage";

export const Route = createFileRoute("/en/platform")({
  head: () => stubHead({
    title: "GoFreyra Platform — Environmental data, AI, ESG and impact in one system",
    description: "Four modules that share one data foundation: SmartConnect+, DecisionsIQ, ESG Ledger and Impact Exchange — all surfaced in GoFreyra Dashboard.",
    path: "/en/platform",
  }),
  component: () => <EnStubPage
    eyebrow="The platform"
    title="One platform. One data foundation."
    description="SmartConnect+ collects data. DecisionsIQ analyses it. ESG Ledger documents it. Impact Exchange surfaces impact. The dashboard brings it all together."
    daHref="/platform"
    daLabel="See full platform tour (Danish)"
  />,
});
