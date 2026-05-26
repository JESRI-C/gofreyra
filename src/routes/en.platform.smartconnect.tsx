import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";
import smartconnectHero from "@/assets/smartconnect-hero.png";

const FAQ = [
  { q: "What data types can SmartConnect+ handle?", a: "Time-series data from IoT sensors, image and raster data from drones and satellites, vector data from the field, structured operational data and manual observations." },
  { q: "Do we have to buy sensors from you?", a: "No. SmartConnect+ is hardware-neutral. You use your own sensors, or we recommend partners based on your needs." },
  { q: "Can the module be used without connectivity in the field?", a: "Yes. Edge collection and buffering enable local data capture that syncs when the connection is back." },
  { q: "How quickly can a data source go live?", a: "Most standard sources connect in hours to days. Heavy operational integrations can take a few weeks." },
];

export const Route = createFileRoute("/en/platform/smartconnect")({
  head: () => buildHead({
    title: "SmartConnect+ — Environmental and operational data in real time | GoFreyra",
    description: "SmartConnect+ brings data from sensors, drones, satellites, the field and operations into one structured layer — ready for analysis and documentation.",
    path: "/platform/smartconnect",
    locale: "en",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: () => (
    <ProductPage
      eyebrow="Module 1 · Collect data"
      title="SmartConnect+"
      subtitle="Collects data from sensors, drones, satellites, the field and operations — so it can be used, not just archived."
      intro="SmartConnect+ is the data layer in GoFreyra. It connects your data sources, validates quality and makes the stream ready for DecisionsIQ and ESG Ledger. No more spreadsheets and manual exports."
      visual={
        <img
          src={smartconnectHero}
          alt="SmartConnect+ — IoT sensors for water, soil, air and environment connected to the GoFreyra dashboard with real-time data, maps and alerts"
          className="w-full h-auto rounded-2xl border border-border shadow-elegant"
          loading="eager"
        />
      }
      features={[
        { title: "Real-time monitoring", desc: "Follow sensors, measurements and project areas with clear status." },
        { title: "Sensor status and alerts", desc: "Get notified when a node loses connection or readings drift." },
        { title: "Drone, satellite and field data", desc: "Ingest orthophotos, Sentinel passes and field observations into the same data model." },
        { title: "Integrations with operations and ERP", desc: "Connect existing IoT platforms, data loggers and operational systems." },
        { title: "Edge-ready", desc: "Local data capture in areas without stable connectivity." },
        { title: "Data validation", desc: "Automatic quality checks before data moves on." },
      ]}
      flow={{
        eyebrow: "Data flow",
        title: "How data moves through SmartConnect+",
        steps: [
          { n: "01", t: "Sensor / source", d: "Sensor, drone, satellite, field or operational system." },
          { n: "02", t: "Edge / gateway", d: "Local capture and buffering where needed." },
          { n: "03", t: "Validation", d: "Structuring, timestamps and quality checks." },
          { n: "04", t: "Data layer", d: "Ready for DecisionsIQ and ESG Ledger." },
          { n: "05", t: "Dashboard", d: "Live status, alerts and map view." },
        ],
      }}
      useCases={[
        { t: "Nature area with biodiversity monitoring", d: "Water, soil and air sensors combined with satellite passes and field observations to track state and change." },
        { t: "Industry and utilities with operational data", d: "Energy, water and emissions data flow from existing SCADA and data loggers into the same data layer as ESG indicators." },
      ]}
      bullets={[
        "Fewer manual readings and exports",
        "Faster reaction to operational anomalies",
        "Cleaner data foundation for ESG and nature documentation",
      ]}
      dataSources={["IoT sensors (LoRaWAN, NB-IoT, MQTT)", "SCADA and data loggers", "Drone data (RGB / multispectral)", "Satellite (Sentinel-2, Satlas)", "Field observations", "Weather data (DMI)", "ERP and operational systems", "Manual records"]}
      relatedModules={[
        { name: "DecisionsIQ", to: "/en/platform/decisionsiq", d: "Uses data from SmartConnect+ to surface patterns, anomalies and risks." },
        { name: "ESG Ledger", to: "/en/platform/esg-ledger", d: "Adds an audit trail to every data point — source, timestamp and method." },
        { name: "GoFreyra Dashboard", to: "/en/dashboard", d: "Live status, sensor overview and alerts in one view." },
      ]}
      faq={FAQ}
    />
  ),
});
