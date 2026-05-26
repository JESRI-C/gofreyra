import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Database, Brain, FileBarChart, Plug, Star } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd } from "@/components/site/SEO";
import { FaqSection, SectionHeader, GreenCTA } from "@/components/site/sections";

const FAQ = [
  { q: "Is GoFreyra billed by usage?", a: "Each package includes a set level of projects, data sources, AI analyses and reports. If you use more, the agreement is adjusted — no invoice surprises." },
  { q: "What counts as extra usage?", a: "More projects, users or data sources, more frequent AI analyses, extra reports, API calls and special integrations." },
  { q: "Can we start without sensors?", a: "Yes. Pilots can run on existing data, manual records, public sources or uploads. Sensors are added when they create value." },
  { q: "How long does a pilot take?", a: "2–4 weeks, depending on data sources and scope." },
  { q: "Why isn't there one fixed price for everyone?", a: "The need at one location isn't the same as in a municipality with ten projects or an industrial company. Fixed packages cover the typical case — the rest is tailored." },
  { q: "What's included in the Platform package?", a: "Dashboard, project and data-source overview, ESG documentation status, audit trail, AI analyses, report export and Danish support." },
  { q: "What do sensors cost?", a: "Sensors and installation are priced separately — it depends on area, data type, power and connectivity." },
  { q: "Can we upgrade later?", a: "Yes. You can start with a pilot, move to Platform and grow into Growth or Enterprise as the need grows." },
];

const TIERS = [
  {
    name: "Pilot",
    price: "From DKK 25,000",
    unit: "one-off",
    label: "Discovery and test",
    desc: "Test GoFreyra on a single area, location or specific documentation case.",
    features: [
      "Discovery workshop",
      "Data source mapping",
      "First dashboard",
      "Documentation flow set up",
      "Pilot report with recommendations",
      "Plan for the next phase",
    ],
    fit: [
      "Municipalities with a nature project",
      "Companies with ESG needs",
      "Nature projects without a unified data foundation",
      "Organisations that want to test before scaling",
    ],
    cta: { to: "/en/book-demo", label: "Talk to us about a pilot" },
  },
  {
    name: "Platform",
    price: "From DKK 7,500",
    unit: "/mo",
    label: "Ongoing operations",
    desc: "Bring environmental data, ESG documentation and impact overview into one platform.",
    features: [
      "1–3 projects",
      "Standard dashboard",
      "Standard data sources",
      "ESG documentation status",
      "Audit trail",
      "AI analyses",
      "Report export",
      "Danish support",
    ],
    fit: [
      "ESG teams",
      "Smaller organisations",
      "A single project area",
      "First ongoing setup",
    ],
    cta: { to: "/en/book-demo", label: "Book a demo" },
  },
  {
    name: "Growth",
    price: "From DKK 15,000",
    unit: "/mo",
    label: "Recommended for scaling",
    desc: "For organisations with several projects, data sources and users.",
    features: [
      "Multiple projects and locations",
      "More data sources",
      "Expanded AI analysis capacity",
      "More users",
      "Advanced reporting",
      "Priority support",
      "Roadmap for scaling",
      "Fast setup of new flows",
    ],
    fit: [
      "Municipalities with several projects",
      "Industry and utilities",
      "Organisations with multiple teams",
      "Growing ESG documentation needs",
    ],
    cta: { to: "/en/book-demo", label: "Book a demo" },
    featured: true,
  },
  {
    name: "Enterprise",
    price: "On request",
    unit: "",
    label: "Complex organisations",
    desc: "For larger organisations with many data sources, integrations and governance requirements.",
    features: [
      "Custom integrations",
      "API and data model",
      "Roles and permissions",
      "Sensor and data source setup",
      "Tailored dashboards",
      "Governance and compliance",
      "Strategic sparring",
      "SLA and dedicated contact",
    ],
    fit: [
      "Larger municipalities",
      "Utilities",
      "Industrial companies",
      "Many locations",
      "Strategic partnerships",
    ],
    cta: { to: "/en/contact", label: "Contact us" },
  },
];

export const Route = createFileRoute("/en/pricing")({
  head: () =>
    buildHead({
      title: "GoFreyra pricing — ESG data, environmental data and documentation",
      description: "See GoFreyra pricing for pilot, platform and enterprise. Start with environmental data, ESG documentation and AI analysis in one SaaS platform.",
      path: "/priser",
      locale: "en",
      jsonLd: [
        faqJsonLd(FAQ),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "GoFreyra",
          serviceType: "SaaS platform for environmental data, ESG documentation and impact",
          provider: { "@type": "Organization", name: "GoFreyra" },
          areaServed: "DK",
          offers: TIERS.map((t) => ({
            "@type": "Offer",
            name: t.name,
            description: t.desc,
            priceCurrency: "DKK",
            price: t.price,
          })),
        },
      ],
    }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-4xl">
          <span className="eyebrow">Pricing</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Pricing that follows your <span className="text-brand-deep">data maturity</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Start with a scoped pilot. Scale as you add projects, data sources and documentation needs.
          </p>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="card-soft p-6 md:p-8 bg-card max-w-4xl">
          <p className="text-foreground/80 text-base md:text-lg">
            You don't need all sensors, integrations and reporting flows in place on day one. A pilot clarifies data sources, needs and the right platform tier — before you commit.
          </p>
        </div>
      </section>

      <section className="container-page pb-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl bg-card border p-6 flex flex-col ${
                t.featured ? "border-primary shadow-elegant ring-1 ring-primary/30" : "border-border shadow-sm"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Star className="w-3 h-3" /> Recommended
                </div>
              )}
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.label}</div>
              <div className="mt-2 text-2xl font-bold text-brand-deep">{t.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <div className="text-3xl font-bold text-foreground">{t.price}</div>
                {t.unit && <div className="text-sm text-muted-foreground">{t.unit}</div>}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>

              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">Includes</div>
                <ul className="space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2 items-start text-sm">
                      <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">Best for</div>
                <ul className="space-y-1.5">
                  {t.fit.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground">— {f}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <Button
                  asChild
                  className="w-full rounded-full h-11"
                  variant={t.featured ? "default" : "outline"}
                >
                  <Link to={t.cta.to}>
                    {t.cta.label} <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-3xl">
          All prices exclude VAT. Sensors, installation, external data sources and special integrations are priced separately. Final pricing depends on projects, data sources, users, analysis needs and support level.
        </p>
      </section>

      <section className="surface-beige">
        <div className="container-page py-20">
          <SectionHeader
            eyebrow="Usage and scaling"
            title="How does usage work?"
            body="Each package includes a set level of data sources, AI analyses, reports and users. When the need grows, the agreement is adjusted — with no hidden fees."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Database className="w-5 h-5" />, t: "Data sources", d: "Sensors, field data, satellite, operations and manual input — the number drives setup and data processing." },
              { icon: <Brain className="w-5 h-5" />, t: "AI analyses", d: "More frequent analysis and anomaly detection require more analysis capacity." },
              { icon: <FileBarChart className="w-5 h-5" />, t: "Reporting", d: "More reports, export formats and documentation flows as needed." },
              { icon: <Plug className="w-5 h-5" />, t: "Integrations", d: "APIs and special data models are priced by complexity." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-5 bg-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{c.icon}</div>
                <div className="mt-3 font-semibold">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">Start safely</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Start with a pilot — not with an off-the-shelf price.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A pilot uncovers your data sources, documentation needs and the right price tier. A far more realistic foundation than a package picked at random.
            </p>
            <div className="mt-6">
              <Button asChild className="rounded-full h-12 px-6">
                <Link to="/en/book-demo">Book a discovery call <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
          <div className="card-soft p-6 bg-card">
            <div className="text-sm font-semibold text-brand-deep">Pilot · 2–4 weeks</div>
            <ul className="mt-4 space-y-2.5">
              {[
                "Data sources and scope clarified",
                "First dashboard live",
                "Documentation flow tested",
                "Recommendation for ongoing setup",
                "Plan for the next phase",
              ].map((b) => (
                <li key={b} className="flex gap-2 items-start text-sm">
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" /><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <GreenCTA
        title="Find the right starting tier."
        subtitle="On a short demo we walk through your data sources, documentation needs and options for a pilot."
        primary={{ to: "/en/book-demo", label: "Book a demo" }}
        secondary={{ to: "/en/book-demo", label: "Talk to us about a pilot" }}
      />

      <CTASection
        title="See GoFreyra with your own data."
        subtitle="30 minutes with a specialist. We walk through your data sources and how the platform fits in."
      />
    </PageLayout>
  );
}
