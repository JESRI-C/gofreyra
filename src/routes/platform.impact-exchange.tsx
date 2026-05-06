import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/platform/impact-exchange")({
  head: () => buildHead({
    title: "Impact Exchange — Verificerbar natur- og klimaimpact | GoFreyra",
    description: "Impact Exchange forbinder dokumenterede miljøforbedringer med rapportering, projektvisibilitet og fremtidige credit-modeller.",
    path: "/platform/impact-exchange",
  }),
  component: () => (
    <ProductPage
      eyebrow="Modul · Impact"
      title="Impact Exchange"
      subtitle="Gør natur- og impactprojekter klar til fremtidens markedsmodeller."
      intro="Impact Exchange forbinder dokumenterede miljøforbedringer med rapportering, projektvisibilitet og fremtidige credit-modeller for natur og klima."
      features={[
        { title: "Projektregister", desc: "Registrér natur- og impactprojekter med dokumentation og indikatorer." },
        { title: "Verificerede impactdata", desc: "Brug data fra SmartConnect+ og ESG Ledger som bevisgrundlag." },
        { title: "Biodiversitets- og CO₂-indikatorer", desc: "Følg udviklingen i centrale natur- og klimaindikatorer over tid." },
        { title: "Køber/sælger-forberedelse", desc: "Strukturer data så projekter er klar til markedsdialog og partnerskaber." },
        { title: "Fremtidig marketplace-logik", desc: "Klar til at understøtte kommende natur- og biodiversitetsmarkeder." },
        { title: "Projekt-storytelling", desc: "Visualisér impact for interessenter, ledelse og partnere." },
      ]}
      bullets={[
        "Naturprojekter bliver mere troværdige",
        "Bedre forberedelse til fremtidige biodiversitets- og klimamarkeder",
        "Tydeligere kommunikation af reel impact",
      ]}
    />
  ),
});
