import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/loesninger/kommuner")({
  head: () => buildHead({
    title: "Løsninger til kommuner — Naturdata og klima | GoFreyra",
    description: "Bedre data til natur, klima og offentlige beslutninger. Følg biodiversitet, naturgenopretning og klimatilpasning med dokumentation, der holder.",
    path: "/loesninger/kommuner",
  }),
  component: () => (
    <SolutionPage
      eyebrow="Løsning · Kommuner"
      title="Bedre data til natur, klima og offentlige beslutninger."
      subtitle="Følg biodiversitet, naturgenopretning, klimatilpasning og projektstatus med stærkere dokumentation og tydeligere overblik."
      problems={[
        "Naturdata ligger spredt i forskellige projekter og afdelinger",
        "Politisk og borgervendt dokumentation er svær at samle",
        "Manuel rapportering forsinker beslutninger",
        "Effekten af naturindsatser er svær at vise over tid",
      ]}
      outcomes={[
        { title: "Samlet natur- og klimadata", desc: "Saml miljødata på tværs af projekter, områder og leverandører." },
        { title: "Borgervendt gennemsigtighed", desc: "Vis hvad der sker, hvor det sker, og hvilken effekt det har." },
        { title: "Projektdokumentation", desc: "Audit-klar dokumentation for naturgenopretning og klimaindsatser." },
        { title: "Driftsnær monitorering", desc: "Følg vand, jord, biodiversitet og klimatilpasningsindsatser løbende." },
      ]}
      modules={["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "Dashboard"]}
    />
  ),
});
