import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Check, Database } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { getSector, SECTORS, type SectorPage } from "@/data/sectors";

export const Route = createFileRoute("/brancher/$slug")({
  loader: ({ params }) => {
    const sector = getSector(params.slug);
    if (!sector) throw notFound();
    return { sector };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const s = loaderData.sector;
    return buildHead({
      title: s.seoTitle,
      description: s.seoDescription,
      path: `/brancher/${s.slug}`,
      jsonLd: [
        faqJsonLd(s.faq),
        breadcrumbJsonLd([
          { name: "Forside", path: "/" },
          { name: "Brancher", path: "/brancher" },
          { name: s.name, path: `/brancher/${s.slug}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.h1,
          description: s.seoDescription,
          provider: { "@type": "Organization", name: "GoFreyra" },
          areaServed: "DK",
        },
      ],
    });
  },
  notFoundComponent: () => (
    <PageLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Branche ikke fundet</h1>
        <Link to="/brancher" className="mt-4 inline-block text-brand-deep underline">
          Se alle brancher
        </Link>
      </div>
    </PageLayout>
  ),
  errorComponent: () => (
    <PageLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Noget gik galt</h1>
      </div>
    </PageLayout>
  ),
  component: SectorPageView,
});

function SectorPageView() {
  const { sector: s } = Route.useLoaderData() as { sector: SectorPage };

  return (
    <PageLayout>
      {/* HERO */}
      <section className="gradient-hero">
        <div className="container-page py-12 md:py-20 max-w-3xl">
          <Link to="/brancher" className="inline-flex items-center text-sm text-brand-deep font-medium hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Alle brancher
          </Link>
          <span className="eyebrow mt-6 inline-block">Branche · {s.name}</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-[1.05]">{s.h1}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{s.subheadline}</p>
          <div className="mt-7 flex gap-3 flex-wrap">
            <Button asChild className="rounded-full h-11 px-5">
              <Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-11 px-5">
              <Link to="/platform">Se platformen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROBLEM + SOLUTION */}
      <section className="container-page py-14 grid lg:grid-cols-2 gap-10 max-w-6xl">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Hvad er udfordringen?</h2>
          <div className="mt-5 space-y-4">
            {s.problem.map((p, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Hvordan GoFreyra hjælper</h2>
          <div className="mt-5 space-y-4">
            {s.solution.map((p, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* DATA SOURCES */}
      <section className="surface-beige">
        <div className="container-page py-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Relevante datakilder</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold">Datakilder vi typisk arbejder med</h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {s.dataSources.map((d) => (
              <div key={d} className="card-soft p-5 bg-card">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-brand-deep grid place-items-center mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <div className="font-semibold">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="container-page py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Relevante moduler</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">Modulerne der typisk er i spil</h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {s.modules.map((m) => (
            <span key={m} className="px-3.5 py-1.5 rounded-full bg-card border border-border text-sm font-medium">
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* PILOT */}
      <section className="surface-beige">
        <div className="container-page py-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Pilotforløb</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold">Sådan ser et pilotforløb ud</h2>
            <p className="mt-3 text-muted-foreground">Et typisk pilotforløb varer 2-4 uger og dækker ét afgrænset område.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {s.pilot.map((p, i) => (
              <div key={p.t} className="card-soft p-5 bg-card">
                <div className="text-sm font-mono text-primary">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-2 font-semibold">{p.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="container-page py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Typiske use cases</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">Konkrete anvendelser i {s.name.toLowerCase()}</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.useCases.map((u) => (
            <Link
              key={u.slug}
              to="/use-cases/$slug"
              params={{ slug: u.slug }}
              className="card-soft p-5 bg-card hover:border-primary/40 transition group"
            >
              <Check className="w-4 h-4 text-primary" />
              <div className="mt-2 font-semibold">{u.label}</div>
              <div className="mt-3 inline-flex items-center text-sm font-medium text-brand-deep">
                Se use case <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FaqSection items={s.faq} />

      {/* FINAL CTA */}
      <section className="container-page my-16">
        <div className="rounded-3xl bg-primary/10 border border-primary/30 p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-brand-deep">
              Vil I se, hvordan GoFreyra passer til {s.name.toLowerCase()}?
            </div>
            <p className="mt-2 text-foreground/80 max-w-xl">
              På en demo gennemgår vi jeres datakilder, dokumentationsbehov og muligheder for et første pilotforløb.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button asChild className="rounded-full h-11 px-5">
              <Link to="/book-demo">Book demo <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-11 px-5">
              <Link to="/platform">Se platformen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* OTHER SECTORS */}
      <section className="container-page py-12">
        <div className="max-w-3xl">
          <span className="eyebrow">Andre brancher</span>
          <h2 className="mt-4 text-xl font-bold">Se også</h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {SECTORS.filter((o) => o.slug !== s.slug).slice(0, 6).map((o) => (
            <Link
              key={o.slug}
              to="/brancher/$slug"
              params={{ slug: o.slug }}
              className="px-3.5 py-1.5 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/40"
            >
              {o.name}
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
