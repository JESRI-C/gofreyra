import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";
import esgLedgerHero from "@/assets/esg-ledger-hero.png";

export const Route = createFileRoute("/platform/esg-ledger")({
  head: () => buildHead({
    title: "ESG Ledger — Audit-klar ESG- og naturdokumentation | GoFreyra",
    description: "ESG Ledger lægger kilde, tidsstempel og audit trail på hvert datapunkt. Bygget til CSRD, ESRS, revision og naturrapportering.",
    path: "/platform/esg-ledger",
  }),
  component: () => (
    <ProductPage
      eyebrow="Modul 3 · Dokumentér data"
      title="ESG Ledger"
      subtitle="Dokumenterer hvert datapunkt med kilde, tidsstempel og audit trail."
      intro="ESG Ledger er det tillidsgrundlag, jeres rapport hviler på. Hvert tal kan spores tilbage til den oprindelige sensor, observation eller datakilde — så I kan svare revisor og bestyrelse uden at lede i regneark."
      visual={
        <img
          src={esgLedgerHero}
          alt="ESG Ledger-dashboard med verificerede dokumenter, audit trail, datakilder og rapportklar dokumentationsstatus"
          className="w-full h-auto rounded-2xl border border-border shadow-elegant"
          loading="eager"
        />
      }
      features={[
        { title: "Kildedokumentation", desc: "Hvert datapunkt knyttes til den oprindelige sensor, observation eller systemkilde." },
        { title: "Komplet audit trail", desc: "Sporbar historik over ændringer, godkendelser og rapporteringsflows." },
        { title: "Verificerbar dataintegritet", desc: "Bevis at data ikke er ændret efter indsamling — fx via kryptografisk hash." },
        { title: "CSRD- og ESRS-mapping", desc: "Datapunkter struktureret efter ESRS-temaer og rapporteringskrav." },
        { title: "Rapportklar struktur", desc: "Træk data direkte ind i ESG-rapport, revision eller intern audit." },
        { title: "Roller og adgang", desc: "Adgangsstyring for ESG, drift, revisorer og eksterne partnere." },
      ]}
      bullets={[
        "Stærkere svar når revisor stiller spørgsmål",
        "Mindre risiko for greenwashing-kritik",
        "Et fælles datagrundlag på tværs af afdelinger",
      ]}
    />
  ),
});
