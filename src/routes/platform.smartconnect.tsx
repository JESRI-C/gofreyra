import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";
import smartconnectHero from "@/assets/smartconnect-hero.png";

export const Route = createFileRoute("/platform/smartconnect")({
  head: () => buildHead({
    title: "SmartConnect+ — Indsaml miljø- og driftsdata i realtid | GoFreyra",
    description: "SmartConnect+ samler data fra sensorer, drone, satellit, felt og drift i ét struktureret lag — klar til analyse og dokumentation.",
    path: "/platform/smartconnect",
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
      bullets={[
        "Færre manuelle aflæsninger og eksporter",
        "Hurtigere reaktion på driftsafvigelser",
        "Renere datagrundlag for ESG og naturdokumentation",
      ]}
    />
  ),
});
