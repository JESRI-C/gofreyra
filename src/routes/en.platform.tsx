import { createFileRoute, Link } from "@tanstack/react-router";
import { Database, Brain, ShieldCheck, Globe2, ArrowRight, LayoutDashboard, Plug, Lock, FileText, Layers, Activity, Users, Satellite, Cpu, BadgeCheck, Sparkles, Leaf, ClipboardCheck, Network, Gauge } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { Button } from "@/components/ui/button";
import { buildHead } from "@/components/site/SEO";
import { FaqSection, MicroStrip, SectionHeader } from "@/components/site/sections";
import type { ReactNode } from "react";

const FAQ = [
  { q: "What is GoFreyra Platform?", a: "The platform where data becomes insight, documentation and action. It ties data collection, validation, AI analysis and audit trail together in one system." },
  { q: "What's the difference between GoFreyra and Freyra?", a: "Freyra is the brand. GoFreyra is the platform. ISEN is the nature and impact layer inside the platform." },
  { q: "Can we start with a single module?", a: "Yes. The modules share a data foundation but can be rolled out one at a time." },
  { q: "Which integrations are supported?", a: "IoT platforms, ERP, data loggers, weather data, satellite APIs, ESG reporting tools and file storage. We adapt to your setup." },
  { q: "Is the platform GDPR-compliant?", a: "Yes. Data is hosted within the EU, and roles, access and logging are built for both GDPR and audit." },
];

export const Route = createFileRoute("/en/platform")({
  head: () => buildHead({
    title: "GoFreyra Platform — From raw data to audit-ready ESG",
    description: "GoFreyra Platform connects sensors, field data, operational data, AI analysis and ESG documentation in one system. Modular SaaS for ESG teams, operations and leadership.",
    path: "/platform",
    locale: "en",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: PlatformPage,
});

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,_color-mix(in_oklab,_var(--primary)_15%,_transparent),_transparent_70%)] blur-2xl pointer-events-none" />
      <div className="relative scale-100 md:scale-105 origin-center">
        <DashboardMockup />
      </div>
      <div className="absolute -top-3 -left-3 md:-left-8 card-soft bg-card p-3 pr-4 shadow-lg hidden sm:flex items-center gap-2.5 animate-fade-in">
        <div className="w-8 h-8 rounded-md bg-primary/10 grid place-items-center text-brand-deep"><Satellite className="w-4 h-4" /></div>
        <div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">Data source</div>
          <div className="text-xs font-semibold">Sensor · live</div>
        </div>
        <span className="ml-1 w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>
      <div className="absolute top-1/3 -right-2 md:-right-10 card-soft bg-card p-3 pr-4 shadow-lg hidden sm:flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-primary/10 grid place-items-center text-brand-deep"><Brain className="w-4 h-4" /></div>
        <div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">AI analysis</div>
          <div className="text-xs font-semibold">Anomaly found</div>
        </div>
      </div>
      <div className="absolute -bottom-4 left-6 md:-left-6 card-soft bg-card p-3 pr-4 shadow-lg hidden sm:flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-primary/10 grid place-items-center text-brand-deep"><BadgeCheck className="w-4 h-4" /></div>
        <div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">Documentation</div>
          <div className="text-xs font-semibold">Audit trail · OK</div>
        </div>
      </div>
    </div>
  );
}

function ModuleCard({ icon, n, t, to, d, bullets }: { icon: ReactNode; n: string; t: string; to: string; d: string; bullets: string[] }) {
  return (
    <div className="card-soft p-7 bg-card group hover:border-primary/40 hover:shadow-elegant transition-all flex flex-col">
      <div className="flex items-center justify-between">
        <div className="w-11 h-11 rounded-xl bg-primary/10 text-brand-deep grid place-items-center">{icon}</div>
        <span className="text-xs font-mono text-primary">{n}</span>
      </div>
      <div className="mt-4 text-xl font-semibold">{t}</div>
      <p className="mt-2 text-sm text-muted-foreground">{d}</p>
      <ul className="mt-4 space-y-1.5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 items-start text-sm">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="text-foreground/80">{b}</span>
          </li>
        ))}
      </ul>
      <Link to={to} className="mt-5 inline-flex items-center justify-center rounded-full h-10 px-4 text-sm font-medium bg-primary/10 text-brand-deep hover:bg-primary hover:text-primary-foreground transition w-full sm:w-auto sm:self-start">
        See module <ArrowRight className="ml-1.5 w-4 h-4" />
      </Link>
    </div>
  );
}

function CapCard({ icon, t, d, badge, span }: { icon: ReactNode; t: string; d: string; badge?: string; span?: boolean }) {
  return (
    <div className={`card-soft p-6 bg-card relative ${span ? "lg:col-span-2" : ""}`}>
      {badge && (
        <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wide px-2 py-0.5 rounded-full bg-primary/15 text-brand-deep border border-primary/30">{badge}</span>
      )}
      <div className="w-11 h-11 rounded-full bg-primary/12 text-brand-deep grid place-items-center ring-4 ring-primary/5">{icon}</div>
      <div className="mt-4 font-semibold">{t}</div>
      <p className="mt-2 text-sm text-muted-foreground">{d}</p>
    </div>
  );
}

function PlatformPage() {
  return (
    <PageLayout>
      <section className="gradient-hero relative overflow-hidden">
        <div className="container-page py-16 md:py-28 grid lg:grid-cols-[1.05fr_1.15fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="eyebrow">The platform</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              One platform — from raw data to audit-ready documentation.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              GoFreyra Platform connects sensors, field data, operational data, AI analysis and ESG documentation in one system, so ESG teams, operations and leadership work from the same data foundation.
            </p>
            <div className="mt-7 flex gap-3 flex-wrap">
              <Button asChild className="rounded-full h-11 px-6"><Link to="/en/book-demo">Book a demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-5"><Link to="/en/dashboard">See the dashboard</Link></Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs md:text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-primary" /> Pilot-ready</span>
              <span className="inline-flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5 text-primary" /> ESG-oriented</span>
              <span className="inline-flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-primary" /> Built for real-world data</span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <MicroStrip items={["Modular architecture", "EU hosting", "Audit trail on everything", "Built for CSRD and nature reporting"]} />

      <section className="container-page py-20">
        <SectionHeader eyebrow="The modules" title="Four modules. One data foundation." body="Data flows to one place — and out into the documentation you need." />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-mono text-muted-foreground">
          {["Data", "Analysis", "Documentation", "Impact"].map((s, i) => (
            <span key={s} className="inline-flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-primary/10 text-brand-deep border border-primary/20">{s}</span>
              {i < 3 && <ArrowRight className="w-4 h-4 text-primary/60" />}
            </span>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <ModuleCard
            icon={<Plug className="w-5 h-5" />}
            n="01"
            t="SmartConnect+"
            to="/en/platform/smartconnect"
            d="Collects data from sensors, drones, satellites, the field and operational systems."
            bullets={["Edge-ready data capture", "Connects IoT, ERP and file storage", "Structures unstructured data"]}
          />
          <ModuleCard
            icon={<Brain className="w-5 h-5" />}
            n="02"
            t="DecisionsIQ"
            to="/en/platform/decisionsiq"
            d="Analyses data and delivers patterns, risks and concrete recommendations."
            bullets={["Explainable AI", "Anomaly and risk scoring", "Prioritised actions"]}
          />
          <ModuleCard
            icon={<ShieldCheck className="w-5 h-5" />}
            n="03"
            t="ESG Ledger"
            to="/en/platform/esg-ledger"
            d="Documents every data point with source, timestamp and audit trail."
            bullets={["Traceability to the source", "Versioning and history", "Ready for audit and CSRD"]}
          />
          <ModuleCard
            icon={<Globe2 className="w-5 h-5" />}
            n="04"
            t="Impact Exchange"
            to="/en/platform/impact-exchange"
            d="Surfaces verified impact for partners, markets and reporting."
            bullets={["Nature projects and biodiversity", "Verifiable impact data", "Ready for emerging markets"]}
          />
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-20">
          <SectionHeader eyebrow="Capabilities" title="Concrete capabilities — not buzzwords." />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            <CapCard icon={<Database className="w-5 h-5" />} t="Data sources without the hassle" d="Sensors, drone, satellite, field and operational systems in one structured layer — connected gradually." badge="Pilot-ready" span />
            <CapCard icon={<Brain className="w-5 h-5" />} t="AI analysis with explanation" d="Every recommendation is tied to the underlying data points, so you can ask qualified questions." badge="Explainable" />
            <CapCard icon={<ShieldCheck className="w-5 h-5" />} t="Audit trail on everything" d="Source, timestamp and change history on every number in the report." badge="Audit" />
            <CapCard icon={<LayoutDashboard className="w-5 h-5" />} t="Operational dashboard" d="One overview for ESG teams, operations, project leads and leadership." />
            <CapCard icon={<Plug className="w-5 h-5" />} t="Integrations" d="Connect existing IoT platforms, ERP, data loggers and reporting tools." />
            <CapCard icon={<Lock className="w-5 h-5" />} t="Security and role management" d="EU hosting, GDPR and access control for ESG, operations, auditors and partners." badge="EU hosting" />
            <CapCard icon={<Globe2 className="w-5 h-5" />} t="Impact module" d="Ready for nature and climate reporting and emerging biodiversity markets." />
            <CapCard icon={<Layers className="w-5 h-5" />} t="Pilot in 2–4 weeks" d="Start with one dataset or one area — expand from there." badge="Fast start" span />
            <CapCard icon={<FileText className="w-5 h-5" />} t="Report export" d="Pull audit-ready documentation straight to audit, leadership and authorities." />
            <CapCard icon={<Activity className="w-5 h-5" />} t="Project management" d="Track progress on documentation and data tasks per project." />
            <CapCard icon={<Database className="w-5 h-5" />} t="Data history" d="Keep previous versions of data, calculations and reports." />
            <CapCard icon={<Users className="w-5 h-5" />} t="User-friendly views" d="Built also for non-technical users — field, operations and leadership." />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-page py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono tracking-[0.18em] text-primary uppercase">From raw data to documentation</div>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-deep">The platform's four layers make data usable.</h2>
              <p className="mt-5 text-lg text-foreground/75 max-w-3xl">
                GoFreyra is built as a connected platform where real-world data can be collected, structured, analysed and turned into documentation. That means ESG teams, operations and leadership work from the same data foundation.
              </p>
            </div>
          </div>

          <div className="mt-14 relative">
            <div className="hidden lg:block absolute top-[58px] left-[8%] right-[8%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  i: <Network className="w-6 h-6" />, n: "Layer 1", t: "Data collection",
                  d: "GoFreyra can collect data from sensors, field records, satellite, drone, weather, operational data and manual input. That makes it possible to start with the data sources your organisation already has and expand gradually.",
                  ex: ["IoT sensors", "Field observations", "Satellite and drone data", "Operational data", "Manual records"],
                },
                {
                  i: <ShieldCheck className="w-6 h-6" />, n: "Layer 2", t: "Data validation",
                  d: "Data only becomes valuable when it can be understood and used. GoFreyra structures data sources, adds source information, timestamps and quality trails, so data can flow into a consolidated documentation process.",
                  ex: ["Source attribution", "Timestamping", "Data quality", "Structuring", "Traceability"],
                },
                {
                  i: <Brain className="w-6 h-6" />, n: "Layer 3", t: "Analysis and insight",
                  d: "With DecisionsIQ the platform can help surface patterns, anomalies, risks and possible actions. The AI layer doesn't replace expert judgement — it makes it easier to see where action is needed first.",
                  ex: ["Anomalies", "Risk indicators", "Trend analysis", "AI recommendations", "Decision support"],
                },
                {
                  i: <FileText className="w-6 h-6" />, n: "Layer 4", t: "Documentation and action",
                  d: "When data, analysis and context come together, you can produce better ESG documentation, audit trails, report status and project follow-up. The goal is to make sustainability easier to manage and easier to explain.",
                  ex: ["ESG documentation", "Audit trail", "Report export", "Impact overview", "Leadership reporting"],
                },
              ].map((l) => (
                <div key={l.t} className="card-soft p-7 bg-card relative shadow-sm hover:shadow-elegant transition-all flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#2BC48A]/12 text-brand-deep grid place-items-center border border-primary/20 relative z-10">{l.i}</div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-primary px-2 py-1 rounded-full bg-primary/10">{l.n}</span>
                  </div>
                  <div className="mt-5 font-semibold text-xl text-brand-deep">{l.t}</div>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{l.d}</p>
                  <div className="mt-5 pt-5 border-t border-border space-y-2">
                    {l.ex.map((e) => (
                      <div key={e} className="flex items-center gap-2 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="font-mono text-foreground/75">{e}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-border">
            <p className="text-sm text-foreground/65 max-w-2xl">
              Start with a few data sources. Expand as the organisation's needs and data maturity grow.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { to: "/en/platform/smartconnect", t: "SmartConnect+" },
                { to: "/en/platform/decisionsiq", t: "DecisionsIQ" },
                { to: "/en/platform/esg-ledger", t: "ESG Ledger" },
                { to: "/en/platform/impact-exchange", t: "Impact Exchange" },
              ].map((m) => (
                <Link key={m.to} to={m.to} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-brand-deep hover:bg-primary hover:text-primary-foreground transition border border-primary/20">
                  {m.t} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-xs font-mono tracking-[0.18em] text-primary uppercase">Same data — different users</div>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-deep">GoFreyra brings ESG, operations and leadership onto the same data foundation.</h2>
            <p className="mt-5 text-lg text-foreground/75">
              When sustainability data is scattered, teams often work from different versions of the truth. GoFreyra consolidates the data foundation so the organisation can see status, understand risks and document progress across functions.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "ESG", i: <ShieldCheck className="w-6 h-6" />,
                role: "For the ESG team",
                t: "Less manual collection. Stronger documentation.",
                d: "The ESG team gets one place to work with environmental data, documentation status and the reporting foundation. It reduces reliance on manual spreadsheets and makes it easier to track which data is ready, missing or needs validation.",
                b: ["A consolidated overview of ESG-relevant data sources", "Documentation status across projects", "Audit trail from source to report", "Stronger foundation for CSRD and ESG reporting", "Less manual follow-up work"],
              },
              {
                tag: "Ops", i: <Gauge className="w-6 h-6" />,
                role: "For operations",
                t: "Data closer to reality.",
                d: "Operations and project teams can follow environmental data, sensors, areas and anomalies in an operational dashboard. That makes it easier to react earlier and work in a more data-driven way day to day.",
                b: ["Live status on areas and data sources", "Sensor status and alerts", "Map-based monitoring", "Overview of changes and anomalies", "Better link between operations and documentation"],
              },
              {
                tag: "Leadership", i: <ClipboardCheck className="w-6 h-6" />,
                role: "For leadership",
                t: "A better decision foundation.",
                d: "Leadership gets a consolidated overview of progress, risks, documentation and impact. That makes sustainability work easier to manage, explain and prioritise.",
                b: ["Status on ESG and impact", "Risks and recommended actions", "Report-ready documentation", "Overview of projects and progress", "Clearer foundation for investments and priorities"],
              },
            ].map((c) => (
              <div key={c.role} className="card-soft p-7 bg-card shadow-sm hover:shadow-elegant transition-all flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-brand-deep grid place-items-center border border-primary/20">{c.i}</div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">{c.tag}</span>
                </div>
                <div className="mt-5 text-xs font-mono uppercase tracking-wider text-muted-foreground">{c.role}</div>
                <div className="mt-1.5 text-xl font-semibold text-brand-deep leading-snug">{c.t}</div>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.d}</p>
                <ul className="mt-5 pt-5 border-t border-border space-y-2.5">
                  {c.b.map((x) => (
                    <li key={x} className="flex gap-2.5 items-start text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="text-foreground/80">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page my-16">
        <div className="relative rounded-3xl overflow-hidden bg-brand-deep text-primary-foreground p-8 md:p-12 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_color-mix(in_oklab,_var(--primary)_30%,_transparent),_transparent_60%)] pointer-events-none" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" /> Pilot-ready
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">Book a demo and see how your data can become documentable action.</h2>
            <p className="mt-4 text-white/80 max-w-lg">
              We walk through your data sources, documentation needs and where a first pilot would create the most value.
            </p>
            <div className="mt-7 flex gap-3 flex-wrap">
              <Button asChild className="rounded-full h-11 px-6 bg-white text-brand-deep hover:bg-white/90"><Link to="/en/book-demo">Book a demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-5 bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"><Link to="/en/dashboard">See the dashboard</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <CTASection />
    </PageLayout>
  );
}
