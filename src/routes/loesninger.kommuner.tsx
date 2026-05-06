import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { buildHead } from "@/components/site/SEO";
import kommunerHero from "@/assets/kommuner-hero.png";

export const Route = createFileRoute("/loesninger/kommuner")({
  head: () => buildHead({
    title: "Løsninger til kommuner — Naturdata og klima | GoFreyra",
    description: "Saml naturdata, klimaprojekter og borgervendt dokumentation ét sted. Følg effekten over tid og giv politikere og borgere et klart billede.",
    path: "/loesninger/kommuner",
  }),
  component: () => (
    <SolutionPage
      eyebrow="Løsning · Kommuner"
      title="Bedre data til natur, klima og offentlige beslutninger."
      subtitle="Følg biodiversitet, naturgenopretning, klimatilpasning og projektstatus med dokumentation, der kan stå mål med politikere, borgere og tilsyn."
      problems={[
        "Naturdata ligger spredt på projekter, afdelinger og leverandører",
        "Borger- og politikervendt dokumentation er svær at samle",
        "Manuel rapportering forsinker beslutninger og tilskudsansøgninger",
        "Effekten af naturindsatser er svær at vise over tid",
      ]}
      outcomes={[
        { title: "Samlet natur- og klimadata", desc: "Én datamodel på tværs af projekter, områder og leverandører." },
        { title: "Borgervendt gennemsigtighed", desc: "Vis hvad der sker, hvor det sker, og hvilken effekt det har." },
        { title: "Projektdokumentation", desc: "Audit-klar dokumentation for naturgenopretning og klimaindsatser." },
        { title: "Driftsnær monitorering", desc: "Følg vand, jord, biodiversitet og klimatilpasning løbende." },
      ]}
      modules={["SmartConnect+", "DecisionsIQ", "ESG Ledger", "Impact Exchange", "GoFreyra Dashboard"]}
      heroImage={kommunerHero}
      heroImageAlt="SaaS-dashboard for kommuner med kort over offentligt naturområde, sensornoder, biodiversitetsindikatorer, projektstatus og dokumentationskort"
    />
  ),
});
