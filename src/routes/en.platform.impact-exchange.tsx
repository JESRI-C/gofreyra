import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";
import impactExchangeHero from "@/assets/impact-exchange-hero.png";

const FAQ = [
  { q: "Is Impact Exchange a trading venue for nature credits?", a: "No. Impact Exchange is a project and impact layer that makes documented nature and climate work ready for future market models. We don't trade credits on the platform today." },
  { q: "What's live now?", a: "Project registry, documentation, biodiversity and CO₂ indicators, and the structure for partner and reporting dialogue are live. Market connectivity is on the roadmap." },
  { q: "Which standards do you follow?", a: "We structure data to be compatible with relevant nature and climate standards as they mature — without locking you into a single provider." },
  { q: "Can we use the module alone?", a: "It creates the most value together with SmartConnect+ and ESG Ledger, but it can be added to existing projects with minimal documentation." },
];

export const Route = createFileRoute("/en/platform/impact-exchange")({
  head: () => buildHead({
    title: "Impact Exchange — Surface your impact | GoFreyra",
    description: "Impact Exchange makes verified nature and climate impact visible for partners, customers and future biodiversity and carbon markets.",
    path: "/platform/impact-exchange",
    locale: "en",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: () => (
    <ProductPage
      eyebrow="Module 4 · Activate impact"
      title="Impact Exchange"
      subtitle="Surface verified nature and climate impact — ready for reporting, partners and future markets."
      intro="Impact Exchange takes the documented effect from ESG Ledger and packages it so you can show it to customers, partners and authorities — and be ready when new biodiversity and carbon markets mature."
      visual={
        <img
          src={impactExchangeHero}
          alt="Impact Exchange dashboard with verified nature and climate projects, world map, biodiversity and CO2 indicators and verification status"
          className="w-full h-auto rounded-2xl border border-border shadow-elegant"
          loading="eager"
        />
      }
      features={[
        { title: "Project registry", desc: "Register nature and impact projects with documentation and indicators." },
        { title: "Verified impact data", desc: "Use data from SmartConnect+ and ESG Ledger as evidence." },
        { title: "Biodiversity and CO₂ indicators", desc: "Track the development of key nature and climate indicators over time." },
        { title: "Buyer / partner package", desc: "Structure data so projects are ready for market dialogue and partnerships." },
        { title: "Marketplace-ready", desc: "Prepared for upcoming nature and biodiversity markets." },
        { title: "Storytelling backed by numbers", desc: "Visualise impact for leadership, customers and stakeholders." },
      ]}
      flow={{
        eyebrow: "Roadmap",
        title: "What's live now — and what's coming",
        steps: [
          { n: "Live", t: "Project registry", d: "Register and structure nature and impact projects." },
          { n: "Live", t: "Indicators", d: "Biodiversity and CO₂ indicators over time." },
          { n: "Live", t: "Documentation", d: "Verifiable documentation per project." },
          { n: "Roadmap", t: "Partner flow", d: "Structured dialogue with buyers and partners." },
          { n: "Roadmap", t: "Market connectivity", d: "Ready for upcoming biodiversity and carbon markets." },
        ],
      }}
      useCases={[
        { t: "Nature and climate projects", d: "Landowners and project owners use the module to show effect over time and prepare projects for future markets." },
        { t: "Partner and reporting model", d: "Larger organisations use the module to show documented work in ESG reports and partnerships." },
      ]}
      notDoing={[
        "We don't trade nature credits on the platform today.",
        "We don't issue certificates — we structure data so projects are ready for verification.",
        "The module is not a guarantee of a market — it's preparation.",
      ]}
      bullets={[
        "More credible nature projects",
        "Better readiness for biodiversity and climate markets",
        "Clearer communication of real impact",
      ]}
      dataSources={["Field observations", "Drone (RGB / multispectral)", "Satellite (Sentinel-2, Satlas)", "Naturdatabasen", "GBIF / DanBIF", "Soil and water sensors", "Verified ESG Ledger entries", "Project documentation"]}
      relatedModules={[
        { name: "SmartConnect+", to: "/en/platform/smartconnect", d: "Delivers field, drone and satellite data from projects." },
        { name: "ESG Ledger", to: "/en/platform/esg-ledger", d: "The evidence behind every impact indicator." },
        { name: "GoFreyra Dashboard", to: "/en/dashboard", d: "Project and impact views collected for leadership, partners and landowners." },
      ]}
      faq={FAQ}
    />
  ),
});
