import { createFileRoute } from "@tanstack/react-router";
import { EnStubPage, stubHead } from "@/components/site/EnStubPage";

export const Route = createFileRoute("/en/about")({
  head: () => stubHead({
    title: "About GoFreyra — Danish SaaS platform for environmental data and ESG",
    description: "Freyra is the brand. GoFreyra is the platform. ISEN is the nature and impact layer. We sell traceable, verifiable sustainability — not storytelling.",
    path: "/en/about",
  }),
  component: () => <EnStubPage
    eyebrow="About GoFreyra"
    title="We don't sell sustainability as a story. We sell verifiable action."
    description="GoFreyra is the Danish SaaS platform that brings environmental data, AI analysis and ESG documentation into one system — from sensor to report. EU-hosted, modular, built for practice."
    daHref="/om"
    daLabel="Read the full Danish version"
  />,
});
