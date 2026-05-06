import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/platform/impact-exchange")({
  head: () => buildHead({
    title: "Impact Exchange — Synliggør og aktivér jeres impact | GoFreyra",
    description: "Impact Exchange gør verificeret natur- og klimaeffekt synlig for partnere, kunder og fremtidige biodiversitets- og kulstofmarkeder.",
    path: "/platform/impact-exchange",
  }),
  component: () => (
    <ProductPage
      eyebrow="Modul 4 · Aktivér impact"
      title="Impact Exchange"
      subtitle="Synliggør verificeret natur- og klimaeffekt — klar til rapportering, partnere og fremtidige markeder."
      intro="Impact Exchange tager den dokumenterede effekt fra ESG Ledger og pakker den, så I kan vise den til kunder, partnere og myndigheder — og være klar, når nye biodiversitets- og kulstofmarkeder modnes."
      features={[
        { title: "Projektregister", desc: "Registrér natur- og impactprojekter med dokumentation og indikatorer." },
        { title: "Verificerede impactdata", desc: "Brug data fra SmartConnect+ og ESG Ledger som bevisgrundlag." },
        { title: "Biodiversitets- og CO₂-indikatorer", desc: "Følg udviklingen i centrale natur- og klimaindikatorer over tid." },
        { title: "Køber-/partner-pakke", desc: "Strukturér data, så projekter er klar til markedsdialog og partnerskaber." },
        { title: "Marketplace-klar", desc: "Forberedt til kommende natur- og biodiversitetsmarkeder." },
        { title: "Storytelling med tal bag", desc: "Visualisér impact for ledelse, kunder og interessenter." },
      ]}
      bullets={[
        "Naturprojekter bliver mere troværdige",
        "Bedre forberedelse til biodiversitets- og klimamarkeder",
        "Tydeligere kommunikation af reel effekt",
      ]}
    />
  ),
});
