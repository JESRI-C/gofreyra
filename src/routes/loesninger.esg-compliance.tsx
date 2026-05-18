import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { buildHead } from "@/components/site/SEO";

const FAQ = [
  { q: "Hvordan understøtter I CSRD?", a: "Vi strukturerer datapunkter efter ESRS-temaer og leverer audit trail på hvert tal — så jeres rapporteringsværktøj og revisor får et stærkere grundlag." },
  { q: "Erstatter GoFreyra vores ESG-rapporteringsværktøj?", a: "Nej. Vi spiller sammen med eksisterende rapporteringsværktøjer ved at levere det datagrundlag, de mangler." },
  { q: "Hvad reducerer I i manuelt arbejde?", a: "Indsamling, validering, kildehenvisning og versionering automatiseres, så ESG-teamet kan bruge tid på vurdering frem for datalegning." },
  { q: "Kan vi bruge GoFreyra til double materiality?", a: "Vi leverer datagrundlaget — vurderingen ligger hos jer og jeres rådgivere. Vi gør grundlaget mere konsistent og sporbart." },
];

export const Route = createFileRoute("/loesninger/esg-compliance")({
  head: () => buildHead({
    title: "ESG og compliance — CSRD-dokumentation | GoFreyra",
    description: "Stærkere ESG-dokumentation på bedre data. Komplet audit trail, ESRS-mapping og rapporter, der kan holde til revision.",
    path: "/loesninger/esg-compliance",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: () => (
    <SolutionPage
      eyebrow="Løsning · ESG & compliance"
      title="Stærkere ESG-rapporter — uden flere regneark."
      subtitle="Reducer manuelt arbejde og skab dokumentation, der står mål med CSRD, revision, banker og bestyrelse."
      problems={[
        "CSRD-pres øger kravet om sporbar dokumentation",
        "Datagrundlaget bag ESG-rapporter er ofte svagt",
        "ESG-teamet bruger uforholdsmæssig meget tid på dataindsamling",
        "Audit trail er sjældent komplet",
      ]}
      outcomes={[
        { title: "ESRS-mapping ud af kassen", desc: "Datapunkter struktureret efter ESRS-temaer og rapporteringsbehov." },
        { title: "Komplet audit trail", desc: "Hver datakilde, ændring og godkendelse er sporbar." },
        { title: "Mindre manuelt arbejde", desc: "Automatiserede flows for indsamling, validering og rapportering." },
        { title: "Stærkere bevisbyrde", desc: "Dokumentation, der kan forsvares over for revisorer og interessenter." },
      ]}
      modules={["ESG Ledger", "DecisionsIQ", "SmartConnect+", "GoFreyra Dashboard"]}
      dataSources={["Driftsdata", "ERP", "Sensorer", "Manuelle ESG-input", "Eksterne registre", "Energi- og vandmålere", "Leverandørdata", "Eksisterende ESG-værktøj"]}
      pilotIntro="Et pilotforløb starter typisk med ét rapporteringsområde — fx scope 1+2, vand eller medarbejderdata."
      pilotSteps={[
        { n: "01", t: "Vælg ESRS-tema", d: "Hvilket område skal struktureres først?" },
        { n: "02", t: "Datakilder", d: "Identificér og kobl relevante kilder." },
        { n: "03", t: "Audit trail", d: "Sæt sporbarhed op pr. datapunkt." },
        { n: "04", t: "Dashboard & rapport", d: "Mapping og eksportflow på plads." },
        { n: "05", t: "Skalér", d: "Udvid til flere temaer og afdelinger." },
      ]}
      faq={FAQ}
    />
  ),
});
