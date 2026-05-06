import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/platform/decisionsiq")({
  head: () => buildHead({
    title: "DecisionsIQ — AI-indsigt til ESG og bæredygtighed | GoFreyra",
    description: "DecisionsIQ analyserer miljødata, driftsdata og ESG-data for at finde risici, mønstre og anbefalede handlinger.",
    path: "/platform/decisionsiq",
  }),
  component: () => (
    <ProductPage
      eyebrow="Modul · AI-analyse"
      title="DecisionsIQ"
      subtitle="AI-indsigt til bæredygtighed, risiko og rapportering."
      intro="DecisionsIQ omsætter komplekse miljø- og driftsdata til konkrete anbefalinger, risici og handlingsmønstre — så ESG-arbejdet bliver beslutningsnært."
      features={[
        { title: "Afvigelsesdetektion", desc: "Identificér unormale mønstre i miljødata og driftsdata før de bliver til problemer." },
        { title: "Predictive indicators", desc: "Forudse risici på vand, biodiversitet, ressourceforbrug og emissioner." },
        { title: "ESG-anbefalinger", desc: "Få konkrete forslag til forbedringer baseret på dine egne data." },
        { title: "Datakvalitetstjek", desc: "Find huller, fejl og inkonsistens før dataen lander i en rapport." },
        { title: "Workflow triggers", desc: "Sæt automatiske handlinger i gang når noget kræver opmærksomhed." },
        { title: "Forklarlig analyse", desc: "Hver anbefaling er knyttet til de underliggende datapunkter." },
      ]}
      bullets={[
        "Mindre tid på datafortolkning",
        "Bedre prioritering af bæredygtighedsindsatser",
        "Stærkere beslutningsgrundlag for ledelsen",
      ]}
    />
  ),
});
