import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";
import decisionsiqHero from "@/assets/decisionsiq-hero.png";

export const Route = createFileRoute("/platform/decisionsiq")({
  head: () => buildHead({
    title: "DecisionsIQ — Analyser miljødata og få konkrete anbefalinger | GoFreyra",
    description: "DecisionsIQ analyserer data fra SmartConnect+ og giver jer mønstre, risikoflag og prioriterede handlinger — med forklaring på hver anbefaling.",
    path: "/platform/decisionsiq",
  }),
  component: () => (
    <ProductPage
      eyebrow="Modul 2 · Analysér data"
      title="DecisionsIQ"
      subtitle="Analyserer data og leverer konkrete anbefalinger, risikoflag og prioriterede handlinger."
      intro="DecisionsIQ tager dataen fra SmartConnect+ og finder det, mennesker overser: afvigelser, mønstre og tidlige risici. Ikke som et sort AI-orakel — hver anbefaling er knyttet til de underliggende datapunkter."
      visual={
        <img
          src={decisionsiqHero}
          alt="DecisionsIQ-dashboard med CO2e-trend, anomalimarkører, risikooverblik, ESG-score og AI-anbefalinger baseret på miljødata"
          className="w-full h-auto rounded-2xl border border-border shadow-elegant"
          loading="eager"
        />
      }
      features={[
        { title: "Afvigelsesdetektion", desc: "Find unormale mønstre i miljø- og driftsdata, før de bliver til problemer." },
        { title: "Risikoindikatorer", desc: "Forudsig risici på vand, biodiversitet, ressourceforbrug og emissioner." },
        { title: "Konkrete anbefalinger", desc: "Få prioriterede forslag til handling baseret på jeres egne data." },
        { title: "Datakvalitetstjek", desc: "Find huller, fejl og inkonsistens før det lander i en rapport." },
        { title: "Workflow-triggers", desc: "Sæt automatiske handlinger i gang, når noget kræver opmærksomhed." },
        { title: "Forklarlig analyse", desc: "Hver anbefaling kan spores tilbage til datakilden." },
      ]}
      bullets={[
        "Mindre tid på datafortolkning",
        "Bedre prioritering af bæredygtighedsindsatser",
        "Stærkere beslutningsgrundlag for drift og ledelse",
      ]}
    />
  ),
});
