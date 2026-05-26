import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Brain, ShieldCheck, Globe2, Activity, FileCheck, AlertTriangle, Layers, Workflow, ClipboardCheck, Trees, Satellite, Wifi, Plane, CloudRain, ClipboardList, Server, Combine } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { FaqSection, FlowSection, GreenCTA, MicroStrip, SectionHeader, ModuleBenefits, CardGrid } from "@/components/site/sections";
import coastal from "@/assets/project-coastal.jpg";
import stream from "@/assets/project-stream.jpg";
import field from "@/assets/project-field.jpg";

const FAQ = [
  { q: "What is GoFreyra?", a: "GoFreyra is a Danish SaaS platform that brings environmental data, AI analysis and ESG documentation together in one place. Freyra is the brand, GoFreyra is the platform, and ISEN is the nature and impact layer. Together they make sustainability work operational and verifiable." },
  { q: "Who uses GoFreyra?", a: "Municipalities, industry and utilities, ESG and compliance teams, nature project owners, landowners, agriculture, forestry and advisors use GoFreyra to put environmental data to work." },
  { q: "What data sources can the platform use?", a: "IoT sensors, field observations, satellite and drone data, weather data, operational data, manual records and external registries. Sources are connected gradually — we don't require perfect data maturity on day one." },
  { q: "Is GoFreyra an ESG reporting tool?", a: "No, GoFreyra is the data foundation behind the report. We provide the traceability and structure that reporting tools lack — and we play well with existing ESG tooling." },
  { q: "How is GoFreyra different from a regular dashboard?", a: "A dashboard shows numbers. GoFreyra ties every data point to its source, timestamp, method and use — and connects collection, analysis, documentation and impact in the same platform." },
  { q: "Can we start with a pilot?", a: "Yes. A pilot typically starts with one area, one dataset or one team and can be live in 2-4 weeks." },
  { q: "Do we need sensors from the start?", a: "No. Many customers begin with field, operational or satellite data. Sensors are added gradually where they create the most value." },
  { q: "How does GoFreyra handle documentation?", a: "ESG Ledger attaches an audit trail to every data point — source, timestamp, method and change history — so documentation can stand up to audit, CSRD and stakeholders." },
];

export const Route = createFileRoute("/en/")({
  head: () =>
    buildHead({
      title: "GoFreyra — Environmental data and ESG documentation you can trust",
      description: "GoFreyra brings environmental data, AI analysis and ESG documentation into one platform, so organisations can measure, manage and prove their impact.",
      path: "/en",
      locale: "en",
      jsonLd: [
        { "@context": "https://schema.org", "@type": "Organization", name: "GoFreyra", url: "https://gofreyra.com", description: "Danish SaaS platform for environmental data, ESG documentation and verifiable impact." },
        { "@context": "https://schema.org", "@type": "WebSite", name: "GoFreyra", url: "https://gofreyra.com/en", inLanguage: "en" },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      ],
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <div>
            <span className="eyebrow">SaaS platform · Environmental data · ESG · Impact</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Data from the real world.<br />
              <span className="text-brand-deep">Documentation you can use.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              GoFreyra brings environmental data, AI analysis and ESG documentation into one platform, so organisations can measure, manage and prove their impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full h-12 px-6 text-base"><Link to="/en/book-demo">Book a demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-12 px-6 text-base"><Link to="/en/platform">See the platform</Link></Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Audit trail on every data point</span>
              <span className="inline-flex items-center gap-1.5"><Activity className="w-4 h-4 text-primary" /> Real-time data from the field</span>
              <span className="inline-flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-primary" /> Built for CSRD and ESRS</span>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <MicroStrip items={["Pilot in 2-4 weeks", "Danish vendor", "Modular SaaS", "Built for CSRD and nature reporting"]} />

      {/* PROBLEM */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="The problem" title="Sustainability data is too often scattered, late and hard to trust." body="Many ESG and environmental teams still work with spreadsheets, manual collection and reports that arrive only after the window for action has closed." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <Layers className="w-5 h-5" />, t: "Data lives in silos", d: "Sensor data, operational data and ESG fields sit in 5-10 different systems." },
            { icon: <Workflow className="w-5 h-5" />, t: "Reporting is manual", d: "ESG teams spend months stitching together data that should be one click away." },
            { icon: <AlertTriangle className="w-5 h-5" />, t: "Documentation is hard to verify", d: "When the auditor asks for the source, version history and references are missing." },
            { icon: <FileCheck className="w-5 h-5" />, t: "Leadership lacks one overview", d: "Status, progress and risks live in different presentations." },
            { icon: <Trees className="w-5 h-5" />, t: "Nature data is rarely tied to ESG", d: "Biodiversity and nature indicators sit apart from reporting." },
            { icon: <ShieldCheck className="w-5 h-5" />, t: "Audit trail is missing from the process", d: "Without traceability, claims are hard to defend." },
          ].map((p) => (
            <div key={p.t} className="card-soft p-6">
              <div className="w-10 h-10 rounded-lg bg-secondary text-brand-deep grid place-items-center">{p.icon}</div>
              <div className="mt-4 font-semibold">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE */}
      <CardGrid
        beige
        eyebrow="Where GoFreyra creates value"
        title="From fragmented data to a decision-ready foundation."
        cols={4}
        cards={[
          { t: "Bring environmental data together", d: "Sensors, operations, field, satellite and manual records in one data model." },
          { t: "Make ESG documentation traceable", d: "Every data point carries its source, timestamp and method." },
          { t: "Use AI to surface patterns and risk", d: "Spot anomalies and prioritise action — with explanation." },
          { t: "Track impact at project level", d: "Measure the effect of concrete nature and climate work over time." },
        ]}
      />

      {/* PLATFORM CHAIN */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="The platform" title="One platform. One data foundation. Many uses." body="SmartConnect+ collects data. DecisionsIQ analyses data. ESG Ledger documents data. Impact Exchange surfaces impact. The dashboard brings it all together." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: <Database className="w-5 h-5" />, t: "SmartConnect+", d: "Collect data from field, operations, sensors and satellites." },
            { icon: <Brain className="w-5 h-5" />, t: "DecisionsIQ", d: "Find patterns, anomalies and recommendations." },
            { icon: <ShieldCheck className="w-5 h-5" />, t: "ESG Ledger", d: "Audit trail and report-ready documentation." },
            { icon: <Globe2 className="w-5 h-5" />, t: "Impact Exchange", d: "Surface nature and climate impact." },
            { icon: <Combine className="w-5 h-5" />, t: "Dashboard", d: "One overview for ESG, operations and leadership." },
          ].map((m) => (
            <div key={m.t} className="card-soft p-5 bg-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{m.icon}</div>
              <div className="mt-3 font-semibold">{m.t}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section className="surface-beige">
        <div className="container-page py-4">
          <div className="pt-16">
            <SectionHeader eyebrow="The modules" title="Four modules that work together." body="Use them all or start with one. The modules share the same data foundation." />
          </div>
        </div>
        <ModuleBenefits
          modules={[
            { icon: <Database className="w-5 h-5" />, t: "SmartConnect+", to: "/en/platform/smartconnect", d: "Connect sensors, field data, operational data, satellite data and manual observations in one unified data layer.", bullets: ["Real-time data from field and operations", "Sensor status and alerts", "Clear structure for downstream analysis"] },
            { icon: <Brain className="w-5 h-5" />, t: "DecisionsIQ", to: "/en/platform/decisionsiq", d: "Use AI to identify patterns, anomalies and recommended actions.", bullets: ["Risk and anomaly detection", "Decision support for ESG and operations", "Explainable recommendations"] },
            { icon: <ShieldCheck className="w-5 h-5" />, t: "ESG Ledger", to: "/en/platform/esg-ledger", d: "Build a documentation trail from data source to report.", bullets: ["Audit trail on data points", "Source and time stamping", "Report-ready documentation"] },
            { icon: <Globe2 className="w-5 h-5" />, t: "Impact Exchange", to: "/en/platform/impact-exchange", d: "Make nature and impact projects ready for reporting, partners and future market models.", bullets: ["Project map and impact data", "Documentation status", "Structure for future credit models"] },
          ]}
        />
        <div className="container-page pb-16 -mt-10">
          <div className="card-soft p-5 bg-card text-sm text-foreground/80">
            It all comes together in <strong>GoFreyra Dashboard</strong> — one operational overview for ESG teams, operations and leadership.{" "}
            <Link to="/en/dashboard" className="text-brand-deep font-medium underline-offset-2 hover:underline">See the dashboard →</Link>
          </div>
        </div>
      </section>

      {/* PILOT */}
      <FlowSection
        eyebrow="Pilot programme"
        title="Start small. Build the data foundation the right way."
        subtitle="A pilot can start with a single area, a single team or a single dataset. The goal is not to build everything at once, but to create a data foundation that works in practice."
        steps={[
          { n: "01", t: "Clarify the goal", d: "What needs to be measured, documented and used?" },
          { n: "02", t: "Pick the area", d: "One area, one project or one team." },
          { n: "03", t: "Connect data", d: "Bring relevant data sources online gradually." },
          { n: "04", t: "Build the flow", d: "Dashboard and documentation flow are set up." },
          { n: "05", t: "Evaluate and scale", d: "Take the learnings forward and expand the scope." },
        ]}
      />

      {/* AUDIENCES */}
      <CardGrid
        beige
        eyebrow="Who the platform is built for"
        title="Built for organisations that need to prove their work."
        cols={3}
        cards={[
          { t: "Municipalities", d: "Nature restoration, climate adaptation, biodiversity and citizen-facing documentation." },
          { t: "Industry and utilities", d: "Operations, energy, water, emissions and ESG indicators in one layer." },
          { t: "ESG and compliance", d: "CSRD, ESRS mapping, audit trail and less manual work." },
          { t: "Nature projects", d: "Field, drone and satellite data for biodiversity and habitats." },
          { t: "Agriculture and forestry", d: "Land, soil, water and emissions — from operations to documentation." },
          { t: "Advisors and partners", d: "A shared data foundation across clients and projects." },
        ]}
      />

      {/* DATA SOURCES */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Data sources" title="Built for real-world data." body="Data sources can be connected gradually. The platform should not require perfect data maturity from day one." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Wifi className="w-4 h-4" />, t: "IoT sensors" },
            { icon: <ClipboardList className="w-4 h-4" />, t: "Field observations" },
            { icon: <Satellite className="w-4 h-4" />, t: "Satellite data" },
            { icon: <Plane className="w-4 h-4" />, t: "Drone data" },
            { icon: <CloudRain className="w-4 h-4" />, t: "Weather data" },
            { icon: <Server className="w-4 h-4" />, t: "Operational data" },
            { icon: <ClipboardCheck className="w-4 h-4" />, t: "Manual records" },
            { icon: <Database className="w-4 h-4" />, t: "External registries" },
          ].map((d) => (
            <Link key={d.t} to="/datakilder" className="card-soft p-4 bg-card flex items-center gap-3 hover:border-primary/40 transition">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{d.icon}</div>
              <span className="text-sm font-medium">{d.t}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="surface-beige">
        <div className="container-page py-20 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">Documentation and trust</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Less claim. More traceability.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              GoFreyra helps tie every data point to source, timestamp, method and use. That makes documentation easier to put to work in ESG, leadership, reporting and partner conversations.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Traceable data foundation behind every KPI",
              "Complete audit trail ready for review",
              "Less manual reporting work",
              "Modular SaaS — start small, scale wide",
              "Danish vendor, Danish support",
              "Ready for CSRD, ESRS and nature reporting",
            ].map((b) => (
              <li key={b} className="card-soft p-4 text-sm font-medium bg-card">{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container-page py-20">
        <div className="flex items-end justify-between gap-6 max-w-4xl">
          <div>
            <span className="eyebrow">From the field</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Examples of projects where data comes from the real world.</h2>
            <p className="mt-3 text-muted-foreground">Drone, satellite, sensor and field — connected to official data sources with a full evidence trail.</p>
          </div>
          <Link to="/projekter" className="hidden md:inline-flex items-center text-sm font-medium text-brand-deep whitespace-nowrap">
            See all projects <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[
            { img: coastal, t: "Tidal zone", d: "Dike and coastal monitoring with drone and Sentinel-2." },
            { img: stream, t: "Stream and meadow", d: "Nature baseline with GBIF, Satlas and field observations." },
            { img: field, t: "Land and operations", d: "ESG starting baseline with SoilGrids and IPCC EFDB." },
          ].map((p) => (
            <Link key={p.t} to="/projekter" className="card-soft overflow-hidden p-0 bg-card group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="font-semibold">{p.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <GreenCTA title="Want to see how your data could come together?" subtitle="We'll walk through your data sources and documentation needs on a short demo." secondary={{ to: "/en/platform", label: "See the platform" }} />

      <FaqSection items={FAQ} />

      {/* PRICING TEASER */}
      <section className="surface-beige">
        <div className="container-page py-20">
          <div className="max-w-3xl">
            <span className="eyebrow">Pricing</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Start with a pilot. Scale when you're ready.</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Fixed packages with included usage — from pilot to ongoing platform and enterprise. Sensors and bespoke integrations are priced separately.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "Pilot", p: "From DKK 25,000", u: "one-off", d: "Try GoFreyra on one area or one case." },
              { n: "Platform", p: "From DKK 7,500", u: "/month", d: "Ongoing platform for 1-3 projects." },
              { n: "Growth", p: "From DKK 15,000", u: "/month", d: "More projects, data sources and analysis capacity.", featured: true },
              { n: "Enterprise", p: "On request", u: "", d: "Complex organisations and integrations." },
            ].map((tier) => (
              <div key={tier.n} className={`relative rounded-2xl bg-card p-6 ${tier.featured ? "border border-primary ring-1 ring-primary/30 shadow-elegant" : "border border-border shadow-sm"}`}>
                {tier.featured && <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Recommended</div>}
                <div className="text-sm font-semibold text-brand-deep">{tier.n}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <div className="text-2xl font-bold">{tier.p}</div>
                  {tier.u && <div className="text-sm text-muted-foreground">{tier.u}</div>}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{tier.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full h-12 px-6"><Link to="/en/pricing">See all pricing <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
            <Button asChild variant="outline" className="rounded-full h-12 px-6"><Link to="/en/book-demo">Book a demo</Link></Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">All prices excl. VAT.</p>
        </div>
      </section>

      <CTASection title="See GoFreyra with your own data." subtitle="In a short demo we walk through your data sources, documentation needs and how the platform can be shaped around your reality." />
    </PageLayout>
  );
}
