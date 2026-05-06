import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { buildHead } from "@/components/site/SEO";
import kommunerHero from "@/assets/kommuner-hero.png";

const FAQ = [
  { q: "Kan GoFreyra håndtere både natur- og klimaprojekter?", a: "Ja. Platformen er bygget til biodiversitet, naturgenopretning, klimatilpasning og kommunale ESG-data i samme datamodel." },
  { q: "Hvordan understøtter I borgerinddragelse?", a: "Dokumentation og indikatorer kan visualiseres i borgervendte oversigter, hvor det giver mening — uden at frigive følsomme data." },
  { q: "Kan vi bruge eksisterende sensorer og data?", a: "Ja. SmartConnect+ kobler eksisterende kilder, og I kan tilføje nye, hvor de giver mest værdi." },
  { q: "Hvor stort skal et pilotforløb være?", a: "Typisk ét naturområde, ét klimaprojekt eller én indsats. 2-4 uger til opsætning." },
];

export const Route = createFileRoute("/loesninger/kommuner")({
  head: () => buildHead({
    title: "Løsninger til kommuner — Naturdata, klima og dokumentation | GoFreyra",
    description: "Saml naturdata, klimaprojekter og borgervendt dokumentation ét sted. Følg effekten over tid og giv politikere og borgere et klart billede.",
    path: "/loesninger/kommuner",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
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
      dataSources={["IoT-sensorer", "Feltobservationer", "Satellitdata", "Dronedata", "Vejrdata", "Kommunale registre", "Naturdatabasen", "Manuelle registreringer"]}
      pilotIntro="Pilotforløb starter typisk med ét naturområde, en klimaindsats eller et udvalgt projekt."
      pilotSteps={[
        { n: "01", t: "Mål og scope", d: "Hvilken indsats og hvilke indikatorer?" },
        { n: "02", t: "Vælg område", d: "Naturområde, vådområde eller projektarea." },
        { n: "03", t: "Forbind data", d: "Sensorer, felt og eksterne kilder kobles på." },
        { n: "04", t: "Dashboard", d: "Borger- og fagvendte visninger sættes op." },
        { n: "05", t: "Evaluér", d: "Læring tages med, scope udvides." },
      ]}
      faq={FAQ}
    />
  ),
});
