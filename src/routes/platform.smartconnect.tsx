import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/platform/smartconnect")({
  head: () => buildHead({
    title: "SmartConnect+ — Realtidsdata fra sensorer og IoT | GoFreyra",
    description: "SmartConnect+ samler IoT-enheder, feltdata og driftsdata i ét sikkert monitoreringslag med realtidsindsigt og alarmer.",
    path: "/platform/smartconnect",
  }),
  component: () => (
    <ProductPage
      eyebrow="Modul · Dataindsamling"
      title="SmartConnect+"
      subtitle="Forbind sensorer, enheder og miljødata i realtid."
      intro="SmartConnect+ samler IoT-enheder, feltdata og driftsdata i ét sikkert monitoreringslag, så miljødata kan bruges aktivt — ikke bare arkiveres."
      features={[
        { title: "Realtidsmonitorering", desc: "Følg sensorer, miljødata og projektområder i realtid med tydelig status og alarmer." },
        { title: "Sensorstatus og alarmer", desc: "Få besked når en node mister forbindelse, batteriniveau falder eller måleværdier afviger." },
        { title: "Miljødata-streams", desc: "Strukturerede datastrømme klar til analyse og dokumentation." },
        { title: "Sikre integrationer", desc: "Forbind til eksisterende IoT-platforme, dataloggere og driftsystemer." },
        { title: "Edge-ready arkitektur", desc: "Understøtter lokal dataopsamling i områder uden stabil forbindelse." },
        { title: "Datavalidering", desc: "Automatisk kvalitetssikring inden data går videre til analyse og rapportering." },
      ]}
      bullets={[
        "Færre manuelle aflæsninger og regneark",
        "Hurtigere reaktion på driftsafvigelser",
        "Renere datagrundlag for ESG og naturdokumentation",
      ]}
    />
  ),
});
