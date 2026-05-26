import { createFileRoute } from "@tanstack/react-router";
import { EnStubPage, stubHead } from "@/components/site/EnStubPage";

export const Route = createFileRoute("/en/platform/impact-exchange")({
  head: () => stubHead({
    title: "Impact Exchange — Surface and activate verified nature and climate impact",
    description: "Impact Exchange makes nature and climate projects ready for reporting, partners and future market models — with documentation and impact data in one place.",
    path: "/en/platform/impact-exchange",
  }),
  component: () => <EnStubPage
    eyebrow="Impact Exchange"
    title="Make verified impact usable."
    description="Project maps, impact data and documentation status — structured for reporting, partners and future credit models."
    daHref="/platform/impact-exchange"
    daLabel="See full module page (Danish)"
  />,
});
