import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/loesninger/esg-compliance")({
  head: () => buildHead({
    title: "Løsninger til ESG og compliance — CSRD-dokumentation | GoFreyra",
    description: "Byg stærkere ESG-dokumentation på bedre data. Reducer manuelt arbejde, skab audit trail og forbered jer til CSRD.",
    path: "/loesninger/esg-compliance",
  }),
  component: () => (
    <SolutionPage
      eyebrow="Løsning · ESG & compliance"
      title="Byg stærkere ESG-dokumentation på bedre data."
      subtitle="Reducer manuelt rapporteringsarbejde og skab dokumentation, der kan stå mål med revision, CSRD og interessenter."
      problems={[
        "CSRD-pres øger behovet for sporbar dokumentation",
        "Datagrundlaget bag ESG-rapporter er ofte svagt",
        "ESG-teams bruger uforholdsmæssig meget tid på manuelt arbejde",
        "Audit trail er sjældent komplet",
      ]}
      outcomes={[
        { title: "CSRD-orienteret datamodel", desc: "Datapunkter struktureret efter ESRS-temaer og rapporteringsbehov." },
        { title: "Komplet audit trail", desc: "Hver datakilde, ændring og godkendelse er sporbar." },
        { title: "Mindre manuelt arbejde", desc: "Automatiserede flows for indsamling, validering og rapportering." },
        { title: "Stærkere bevisbyrde", desc: "Dokumentation, der kan forsvares over for revisorer og interessenter." },
      ]}
      modules={["ESG Ledger", "DecisionsIQ", "SmartConnect+", "Dashboard"]}
    />
  ),
});
