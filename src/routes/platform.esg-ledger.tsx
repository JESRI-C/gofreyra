import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/platform/esg-ledger")({
  head: () => buildHead({
    title: "ESG Ledger — Audit-klar ESG-dokumentation | GoFreyra",
    description: "ESG Ledger skaber et sikkert audit trail for bæredygtighedsdata, impact-claims og rapporteringsflows — bygget med en CSRD-orienteret datamodel.",
    path: "/platform/esg-ledger",
  }),
  component: () => (
    <ProductPage
      eyebrow="Modul · Dokumentation"
      title="ESG Ledger"
      subtitle="ESG-dokumentation, der kan spores tilbage til kilden."
      intro="ESG Ledger skaber et sikkert audit trail for bæredygtighedsdata, impact-claims og rapporteringsflows. Et tillidslag, der gør dokumentationen verificerbar."
      features={[
        { title: "Kildedokumentation", desc: "Hvert datapunkt er knyttet til den oprindelige kilde — sensor, observation eller system." },
        { title: "Audit trail", desc: "Sporbar historik over ændringer, godkendelser og rapporteringsflows." },
        { title: "Verificerbart datalag", desc: "Et tillidslag, der gør det muligt at bevise, at data ikke er manipuleret." },
        { title: "Rapportklar struktur", desc: "Strukturer data klar til ESG-rapportering, revision og intern audit." },
        { title: "CSRD-orienteret datamodel", desc: "Datapunkter, der mapper til ESRS-temaer og rapporteringskrav." },
        { title: "Roller og adgang", desc: "Klar adgangsstyring for ESG-team, drift, revisorer og eksterne partnere." },
      ]}
      bullets={[
        "Stærkere svar når revisor stiller spørgsmål",
        "Mindre frygt for greenwashing-kritik",
        "Et fælles tillidsgrundlag på tværs af afdelinger",
      ]}
    />
  ),
});
