import { createFileRoute } from "@tanstack/react-router";
import { EnStubPage, stubHead } from "@/components/site/EnStubPage";

export const Route = createFileRoute("/en/dashboard")({
  head: () => stubHead({
    title: "GoFreyra Dashboard — One overview for ESG, operations and leadership",
    description: "Follow environmental data, AI recommendations and documentation status in one operational dashboard. Built for ESG teams, operations and project leads.",
    path: "/en/dashboard",
  }),
  component: () => <EnStubPage
    eyebrow="GoFreyra Dashboard"
    title="One overview. The whole platform."
    description="GoFreyra Dashboard brings data from SmartConnect+, DecisionsIQ, ESG Ledger and Impact Exchange together — so operations, ESG and leadership work from the same picture."
    daHref="/dashboard"
    daLabel="Open dashboard tour (Danish)"
  />,
});
