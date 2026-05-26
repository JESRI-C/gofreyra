import { createFileRoute } from "@tanstack/react-router";
import { EnStubPage, stubHead } from "@/components/site/EnStubPage";

export const Route = createFileRoute("/en/contact")({
  head: () => stubHead({
    title: "Contact — GoFreyra",
    description: "Get in touch with the GoFreyra team. Ask about a pilot, partner integration or how the platform fits your data sources.",
    path: "/en/contact",
  }),
  component: () => <EnStubPage
    eyebrow="Contact"
    title="Let's talk."
    description="Reach out about a pilot, a partner integration or how GoFreyra fits the environmental data you already have."
    daHref="/kontakt"
    daLabel="See contact details (Danish)"
  />,
});
