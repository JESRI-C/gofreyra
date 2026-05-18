import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";
import esgLedgerHero from "@/assets/esg-ledger-hero.png";

const FAQ = [
  { q: "Hvad er audit trail?", a: "En komplet, sporbar historik over hvor et datapunkt kommer fra, hvornår det er indsamlet, hvem der har ændret det, og hvordan det er brugt i en rapport." },
  { q: "Hvordan understøtter ESG Ledger CSRD?", a: "Datapunkter struktureres efter ESRS-temaer og tilknyttes kilde, metode og dokumentation. Det gør CSRD-rapportering hurtigere og lettere at forsvare." },
  { q: "Bruger I blockchain?", a: "ESG Ledger anvender ledger-logik som tillidslag for dataintegritet. Hovedværdien er sporbarhed, dokumentation og bedre revisionsgrundlag — ikke krypto eller spekulation." },
  { q: "Erstatter I revisor?", a: "Nej. Vi gør revisionen lettere ved at levere et sporbart datagrundlag, så revisor kan fokusere på vurdering frem for datalegning." },
];

export const Route = createFileRoute("/platform/esg-ledger")({
  head: () => buildHead({
    title: "ESG Ledger — Audit-klar ESG-dokumentation | GoFreyra",
    description: "ESG Ledger lægger kilde, tidsstempel og audit trail på hvert datapunkt. Bygget til CSRD, ESRS, revision og naturrapportering.",
    path: "/platform/esg-ledger",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
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
      flow={{
        eyebrow: "Kilde til rapport",
        title: "Sådan dokumenteres et datapunkt",
        steps: [
          { n: "01", t: "Kilde", d: "Sensor, observation eller systemkilde." },
          { n: "02", t: "Tidsstempel", d: "Hvornår er data indsamlet og af hvem." },
          { n: "03", t: "Validering", d: "Kvalitetstjek og metodeangivelse." },
          { n: "04", t: "Audit trail", d: "Versionshistorik og godkendelser." },
          { n: "05", t: "Rapport", d: "Klar til CSRD, revision og ledelse." },
        ],
      }}
      useCases={[
        { t: "Dokumentationsstatus pr. KPI", d: "Se for hver indikator, om datakilde, metode og godkendelse er på plads — eller hvor I mangler bevisførelse." },
        { t: "CSRD-relateret datalogik", d: "Mapping til ESRS-temaer, så det er tydeligt hvilke datapunkter der dækker hvilke krav." },
      ]}
      notDoing={[
        "ESG Ledger udsteder ikke certifikater.",
        "Vi erstatter ikke jeres rapporteringsværktøj — vi forstærker datagrundlaget bag det.",
        "Blockchain bruges som tillidslag, ikke som krypto eller spekulationsobjekt.",
      ]}
      bullets={[
        "Stærkere svar når revisor stiller spørgsmål",
        "Mindre risiko for greenwashing-kritik",
        "Et fælles datagrundlag på tværs af afdelinger",
      ]}
      dataSources={["Sensordata via SmartConnect+", "Driftsdata fra ERP og SCADA", "Manuelle ESG-input", "Eksterne registre (DMI, Eurostat, GBIF)", "Leverandørdata", "Emissionsfaktorer (IPCC EFDB)", "Eksisterende ESG-værktøjer", "Revisionsspor og godkendelser"]}
      relatedModules={[
        { name: "SmartConnect+", to: "/platform/smartconnect", d: "Leverer struktureret data med tidsstempel og kilde." },
        { name: "DecisionsIQ", to: "/platform/decisionsiq", d: "Anbefalinger og afvigelser logges i samme audit trail." },
        { name: "Impact Exchange", to: "/platform/impact-exchange", d: "Bruger den dokumenterede impact som bevisgrundlag." },
      ]}
      faq={FAQ}
    />
  ),
});
