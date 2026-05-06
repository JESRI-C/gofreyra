import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/loesninger/esg-compliance")({
  head: () => buildHead({
    title: "Løsninger til ESG og compliance — CSRD-dokumentation | GoFreyra",
    description: "Stærkere ESG-dokumentation på bedre data. Komplet audit trail, ESRS-mapping og rapporter, der kan holde til revision.",
    path: "/loesninger/esg-compliance",
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
    />
  ),
});
