import { createFileRoute } from "@tanstack/react-router";
import { EnStubPage, stubHead } from "@/components/site/EnStubPage";

export const Route = createFileRoute("/en/pricing")({
  head: () => stubHead({
    title: "Pricing — GoFreyra",
    description: "Fixed packages with included usage: pilot, platform, growth and enterprise. Sensors and bespoke integrations priced separately.",
    path: "/en/pricing",
  }),
  component: () => <EnStubPage
    eyebrow="Pricing"
    title="Start with a pilot. Scale when you're ready."
    description="From DKK 25,000 for a pilot, from DKK 7,500/month for the ongoing platform. Growth and Enterprise tiers cover larger rollouts. All prices excl. VAT."
    daHref="/priser"
    daLabel="See full pricing (Danish)"
  />,
});
