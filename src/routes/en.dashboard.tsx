import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Activity, Brain, FileCheck, Globe2, Download, Users, LayoutDashboard, ShieldCheck, Gauge, ClipboardCheck } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { AIDemoPanel } from "@/components/site/AIDemoPanel";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { FaqSection, GreenCTA, MicroStrip, SectionHeader, FlowSection, CardGrid } from "@/components/site/sections";

const FAQ = [
  { q: "Who is the dashboard for?", a: "ESG teams, operations, project managers and leadership — with role-tailored views so each user sees what's relevant." },
  { q: "Can we customise the view?", a: "Yes. The dashboard is configured by project, area, KPIs and roles." },
  { q: "Can we export data and reports?", a: "Yes. Pull audit-ready documentation and reports for audit, leadership and authorities." },
  { q: "Is data shown in real time?", a: "Yes, where the data source allows it. Other data is shown with clear timestamps and update frequency." },
];

export const Route = createFileRoute("/en/dashboard")({
  head: () => buildHead({
    title: "GoFreyra Dashboard — One overview for ESG, operations and leadership",
    description: "Follow environmental data, AI recommendations and documentation status in one operational dashboard. Built for ESG teams, operations and project managers.",
    path: "/dashboard",
    locale: "en",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const sections = [
    { i: <Activity className="w-5 h-5" />, t: "Live overview", d: "Quick status on alerts, data sources and ongoing documentation." },
    { i: <MapPin className="w-5 h-5" />, t: "Map-based monitoring", d: "Sensor nodes, project areas and indicators shown geographically." },
    { i: <LayoutDashboard className="w-5 h-5" />, t: "Sensor status", d: "See which sensors are delivering data, which have anomalies, and where action is needed." },
    { i: <Brain className="w-5 h-5" />, t: "AI insight panel", d: "Risk flags and a prioritised action queue from DecisionsIQ." },
    { i: <FileCheck className="w-5 h-5" />, t: "ESG documentation tracker", d: "Track progress on ESG flows and reporting obligations from ESG Ledger." },
    { i: <Globe2 className="w-5 h-5" />, t: "Impact metrics", d: "Follow biodiversity, climate and environmental indicators over time." },
    { i: <Download className="w-5 h-5" />, t: "Report export", d: "Generate audit-ready documentation for audit, leadership and authorities." },
    { i: <Users className="w-5 h-5" />, t: "Roles and views", d: "Tailored dashboards for ESG, operations, project and leadership." },
  ];

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow">GoFreyra Dashboard</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">One overview. The whole platform.</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              GoFreyra Dashboard brings data from SmartConnect+, DecisionsIQ, ESG Ledger and Impact Exchange together — so operations, ESG and leadership work from the same picture.
            </p>
            <div className="mt-7 flex gap-3">
              <Button asChild className="rounded-full h-11 px-5"><Link to="/en/book-demo">Book a demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-5"><Link to="/en/platform">See the platform</Link></Button>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <MicroStrip items={["Role-tailored views", "Map-based monitoring", "Audit trail on every data point", "Export to report"]} />

      <AIDemoPanel />

      <section className="container-page py-16">
        <SectionHeader eyebrow="Dashboard tour" title="What the overview gives you." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((s) => (
            <div key={s.t} className="card-soft p-6 bg-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{s.i}</div>
              <div className="mt-3 font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FlowSection
        beige
        eyebrow="How the dashboard is used"
        title="From signal to documented action."
        steps={[
          { n: "01", t: "See status", d: "Live overview of areas, sensors and documentation." },
          { n: "02", t: "Spot anomalies", d: "The AI panel shows where action is needed." },
          { n: "03", t: "Prioritise", d: "Sort and assign owners." },
          { n: "04", t: "Document", d: "ESG Ledger logs the action and source." },
          { n: "05", t: "Report", d: "Export for ESG, leadership or authorities." },
        ]}
      />

      <section className="container-page py-16">
        <SectionHeader eyebrow="Roles" title="Three entry points — one data foundation." body="The dashboard shows what's relevant for each role. No-one needs to interpret spreadsheets or switch systems to get an overview." />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { i: <ShieldCheck className="w-5 h-5" />, t: "The ESG team", d: "Reporting progress, source references, missing documentation and status by ESRS topic." },
            { i: <Gauge className="w-5 h-5" />, t: "Operations", d: "Live status on sensors, areas and anomalies. Assign action and close tasks without switching systems." },
            { i: <ClipboardCheck className="w-5 h-5" />, t: "Leadership", d: "A consolidated status, risks and progress across projects — ready for the board and partners." },
          ].map((c) => (
            <div key={c.t} className="card-soft p-7 bg-card">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-brand-deep grid place-items-center">{c.i}</div>
              <div className="mt-4 text-xl font-semibold">{c.t}</div>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CardGrid
        beige
        eyebrow="Module relations"
        title="The dashboard brings the whole platform together."
        cols={4}
        cards={[
          { t: "SmartConnect+", d: "Live data sources, sensor status and map view." },
          { t: "DecisionsIQ", d: "Risk flags, anomalies and prioritised action queue." },
          { t: "ESG Ledger", d: "Documentation status and audit trail per KPI." },
          { t: "Impact Exchange", d: "Nature projects, indicators and verification status." },
        ]}
      />

      <GreenCTA title="Want to see the dashboard with your own data?" subtitle="We'll prepare your data sources for a concrete demo." />

      <FaqSection items={FAQ} />

      <CTASection />
    </PageLayout>
  );
}
