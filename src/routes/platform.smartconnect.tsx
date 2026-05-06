import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";
import smartconnectHero from "@/assets/smartconnect-hero.png";

const FAQ = [
  { q: "Hvilke datatyper kan SmartConnect+ håndtere?", a: "Tidsseriedata fra IoT-sensorer, billed- og rasterdata fra drone og satellit, vektordata fra felt, struktureret driftsdata og manuelle observationer." },
  { q: "Skal vi købe sensorer hos jer?", a: "Nej. SmartConnect+ er hardwareneutral. I bruger jeres egne sensorer, eller vi anbefaler partnere ud fra behov." },
  { q: "Kan modulet bruges uden internetdækning i felten?", a: "Ja. Edge-opsamling og buffer giver lokal dataopsamling, der synkroniseres når forbindelsen er tilbage." },
  { q: "Hvor hurtigt kan en datakilde være på?", a: "De fleste standardkilder kobles på i timer til dage. Tunge driftsintegrationer kan tage et par uger." },
];

export const Route = createFileRoute("/platform/smartconnect")({
  head: () => buildHead({
    title: "SmartConnect+ — Indsaml miljø- og driftsdata i realtid | GoFreyra",
    description: "SmartConnect+ samler data fra sensorer, drone, satellit, felt og drift i ét struktureret lag — klar til analyse og dokumentation.",
    path: "/platform/smartconnect",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: () => (
    <ProductPage
      eyebrow="Modul 1 · Indsaml data"
      title="SmartConnect+"
      subtitle="Indsamler data fra sensorer, drone, satellit, felt og drift — så det kan bruges, ikke bare arkiveres."
      intro="SmartConnect+ er datalaget i GoFreyra. Det forbinder jeres datakilder, validerer kvaliteten og gør strømmen klar til DecisionsIQ og ESG Ledger. Ingen flere regneark og manuelle eksporter."
      visual={
        <img
          src={smartconnectHero}
          alt="SmartConnect+ — IoT-sensorer til vand, jord, luft og miljø forbundet til GoFreyra-dashboard med realtidsdata, kort og alarmer"
          className="w-full h-auto rounded-2xl border border-border shadow-elegant"
          loading="eager"
        />
      }
      features={[
        { title: "Realtidsmonitorering", desc: "Følg sensorer, måleværdier og projektområder med tydelig status." },
        { title: "Sensorstatus og alarmer", desc: "Få besked når en node mister forbindelse eller måleværdier afviger." },
        { title: "Drone-, satellit- og feltdata", desc: "Indlæs ortofotos, Sentinel-pas og feltobservationer i samme datamodel." },
        { title: "Integrationer til drift og ERP", desc: "Forbind eksisterende IoT-platforme, dataloggere og driftssystemer." },
        { title: "Edge-ready", desc: "Lokal dataopsamling i områder uden stabil forbindelse." },
        { title: "Datavalidering", desc: "Automatisk kvalitetstjek inden data går videre." },
      ]}
      flow={{
        eyebrow: "Dataflow",
        title: "Sådan rejser data gennem SmartConnect+",
        steps: [
          { n: "01", t: "Sensor / kilde", d: "Sensor, drone, satellit, felt eller driftsystem." },
          { n: "02", t: "Edge / gateway", d: "Lokal opsamling og buffer, hvor det er nødvendigt." },
          { n: "03", t: "Validering", d: "Strukturering, tidsstempel og kvalitetstjek." },
          { n: "04", t: "Datalag", d: "Klar til DecisionsIQ og ESG Ledger." },
          { n: "05", t: "Dashboard", d: "Live status, alarmer og kortvisning." },
        ],
      }}
      useCases={[
        { t: "Naturområde med biodiversitetsmonitorering", d: "Sensorer for vand, jord og luft kombineres med satellitpas og feltobservationer for at følge tilstand og forandring." },
        { t: "Industri og forsyning med driftsdata", d: "Energi-, vand- og emissionsdata strømmer fra eksisterende SCADA og dataloggere ind i samme datalag som ESG-indikatorerne." },
      ]}
      bullets={[
        "Færre manuelle aflæsninger og eksporter",
        "Hurtigere reaktion på driftsafvigelser",
        "Renere datagrundlag for ESG og naturdokumentation",
      ]}
      faq={FAQ}
    />
  ),
});
