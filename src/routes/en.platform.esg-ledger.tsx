import { createFileRoute } from "@tanstack/react-router";
import { EnStubPage, stubHead } from "@/components/site/EnStubPage";

export const Route = createFileRoute("/en/platform/esg-ledger")({
  head: () => stubHead({
    title: "ESG Ledger — Audit trail and report-ready ESG documentation",
    description: "ESG Ledger ties every data point to source, timestamp, method and change history — so ESG documentation stands up to audit, CSRD and stakeholders.",
    path: "/en/platform/esg-ledger",
  }),
  component: () => <EnStubPage
    eyebrow="ESG Ledger"
    title="Less claim. More traceability."
    description="A full audit trail on every data point: source, timestamp, method, change history. Built for CSRD, ESRS and partner-grade documentation."
    daHref="/platform/esg-ledger"
    daLabel="See full module page (Danish)"
  />,
});
