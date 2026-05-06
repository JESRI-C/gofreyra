import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/loesninger/industri")({
  head: () => buildHead({
    title: "Løsninger til industri og forsyning — ESG og driftsdata | GoFreyra",
    description: "Forbind driftsdata med bæredygtighed og ESG-performance. Følg emissioner, energi, vand og ressourceforbrug med audit-klar dokumentation.",
    path: "/loesninger/industri",
  }),
  component: () => (
    <SolutionPage
      eyebrow="Løsning · Industri & forsyning"
      title="Forbind driftsdata med bæredygtighed og ESG-performance."
      subtitle="Få ESG-indikatorer ud af driften — ikke ud af regneark. Stærkere data, færre manuelle processer, bedre risikostyring."
      problems={[
        "Driftsdata og ESG-data lever i hver sin verden",
        "Energi-, vand- og emissionsdata er fragmenterede",
        "Manuelle rapporteringsflows skaber forsinkelser og fejl",
        "Risikostyring mangler datadrevet grundlag",
      ]}
      outcomes={[
        { title: "Driftsnære ESG-indikatorer", desc: "Saml emissioner, energi, vand og ressourceforbrug ét sted." },
        { title: "Bedre risikoindsigt", desc: "AI-analyse af driftsdata afslører mønstre og afvigelser tidligt." },
        { title: "Audit-klar dokumentation", desc: "Sporbart datagrundlag for ESG- og compliance-rapportering." },
        { title: "Mindre manuelt arbejde", desc: "Strukturerede flows fra dataindsamling til rapport." },
      ]}
      modules={["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Dashboard"]}
    />
  ),
});
