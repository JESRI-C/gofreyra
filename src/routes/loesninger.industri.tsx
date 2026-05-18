import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { buildHead } from "@/components/site/SEO";

const FAQ = [
  { q: "Kan I trække data fra eksisterende SCADA og dataloggere?", a: "Ja. SmartConnect+ understøtter standard industrielle protokoller og kobles på via gateway eller direkte API." },
  { q: "Hvordan håndterer I følsomme driftsdata?", a: "Data hostes inden for EU og adgangsstyres pr. rolle. Driftsdata kan holdes adskilt fra eksterne ESG-rapporter." },
  { q: "Understøtter I scope 1, 2 og 3 emissioner?", a: "Ja. Vi strukturerer datapunkter, så de kan kobles til relevante scope-kategorier og emissionsfaktorer." },
  { q: "Hvor hurtigt er ROI?", a: "Pilotforløb leverer typisk værdi inden for første kvartal — primært gennem reduceret manuelt arbejde og tidligere afvigelsesdetektion." },
];

export const Route = createFileRoute("/loesninger/industri")({
  head: () => buildHead({
    title: "Industri og forsyning — ESG og driftsdata | GoFreyra",
    description: "Træk ESG-indikatorer direkte ud af driften. Følg energi, vand, emissioner og ressourceforbrug — med audit trail og uden regneark.",
    path: "/loesninger/industri",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: () => (
    <SolutionPage
      eyebrow="Løsning · Industri & forsyning"
      title="ESG-tal direkte fra driften — ikke fra regneark."
      subtitle="Forbind drifts-, energi- og forsyningsdata med ESG-rapportering og risikostyring. Færre manuelle processer, stærkere bevisbyrde."
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
      modules={["SmartConnect+", "DecisionsIQ", "ESG Ledger", "GoFreyra Dashboard"]}
      dataSources={["SCADA / driftsdata", "Energimålere", "Vandmålere", "Emissionsdata", "IoT-sensorer", "Vejrdata", "ERP", "Manuelle registreringer"]}
      pilotIntro="Et pilotforløb starter typisk med én produktionslokation eller én forsyningsenhed."
      pilotSteps={[
        { n: "01", t: "Afgræns scope", d: "Vælg lokation, proces eller forsyning." },
        { n: "02", t: "Datakilder", d: "SCADA, målere og driftssystemer kobles på." },
        { n: "03", t: "ESG-mapping", d: "Indikatorer kobles til ESRS-temaer." },
        { n: "04", t: "Dashboard", d: "Drifts- og ESG-visninger opsættes." },
        { n: "05", t: "Skalér", d: "Udvid til flere lokationer og processer." },
      ]}
      faq={FAQ}
    />
  ),
});
