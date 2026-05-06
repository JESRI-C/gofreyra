import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Database } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { getDataPage, DATA_PAGES, type DataPage } from "@/data/dataTypes";

export const Route = createFileRoute("/data/$slug")({
  loader: ({ params }) => {
    const data = getDataPage(params.slug);
    if (!data) throw notFound();
    return { data };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const d = loaderData.data;
    return buildHead({
      title: d.seoTitle,
      description: d.seoDescription,
      path: `/data/${d.slug}`,
      jsonLd: [
        faqJsonLd(d.faq),
        breadcrumbJsonLd([
          { name: "Forside", path: "/" },
          { name: "Data", path: "/data" },
          { name: d.name, path: `/data/${d.slug}` },
        ]),
      ],
    });
  },
  notFoundComponent: () => (
    <PageLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Datatype ikke fundet</h1>
        <Link to="/data" className="mt-4 inline-block text-brand-deep underline">
          Se alle datatyper
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
  component: DataPageView,
});

function DataPageView() {
  const { data: d } = Route.useLoaderData() as { data: DataPage };

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-12 md:py-20 max-w-3xl">
          <Link to="/data" className="inline-flex items-center text-sm text-brand-deep font-medium hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Alle datatyper
          </Link>
          <span className="eyebrow mt-6 inline-block">Datatype · {d.name}</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-[1.05]">{d.h1}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{d.subheadline}</p>
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

      <section className="container-page py-14 grid lg:grid-cols-2 gap-10 max-w-6xl">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Hvad er {d.name.toLowerCase()}?</h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">{d.whatIs}</p>
          <h2 className="mt-10 text-2xl md:text-3xl font-bold">Hvorfor er den relevant?</h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">{d.whyRelevant}</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Hvordan GoFreyra bruger den</h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">{d.howGoFreyra}</p>
          <div className="mt-8">
            <span className="eyebrow">Relevante moduler</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {d.modules.map((m) => (
                <span key={m} className="px-3.5 py-1.5 rounded-full bg-card border border-border text-sm font-medium">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Typiske datakilder</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold">Hvor data typisk kommer fra</h2>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {d.sources.map((s) => (
              <div key={s} className="card-soft p-5 bg-card">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-brand-deep grid place-items-center mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <div className="font-semibold">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 grid md:grid-cols-3 gap-8">
        <div>
          <span className="eyebrow">Relevante brancher</span>
          <ul className="mt-4 space-y-2">
            {d.sectors.map((s) => (
              <li key={s.slug}>
                <Link to="/brancher/$slug" params={{ slug: s.slug }} className="inline-flex items-center text-sm font-medium text-brand-deep hover:underline">
                  <Check className="w-4 h-4 mr-1.5 text-primary" /> {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="eyebrow">Relaterede use cases</span>
          <ul className="mt-4 space-y-2">
            {d.useCases.map((u) => (
              <li key={u.slug}>
                <Link to="/use-cases/$slug" params={{ slug: u.slug }} className="inline-flex items-center text-sm font-medium text-brand-deep hover:underline">
                  <Check className="w-4 h-4 mr-1.5 text-primary" /> {u.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="eyebrow">Beslægtede problemer</span>
          <ul className="mt-4 space-y-2">
            {d.problems.map((p) => (
              <li key={p.slug}>
                <Link to="/problemer/$slug" params={{ slug: p.slug }} className="inline-flex items-center text-sm font-medium text-brand-deep hover:underline">
                  <Check className="w-4 h-4 mr-1.5 text-primary" /> {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection items={d.faq} />

      <section className="container-page my-16">
        <div className="rounded-3xl bg-primary/10 border border-primary/30 p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-brand-deep">
              Vil I bruge {d.name.toLowerCase()} mere systematisk?
            </div>
            <p className="mt-2 text-foreground/80 max-w-xl">
              Book en demo, og se hvordan GoFreyra kobler {d.name.toLowerCase()} til projekter og dokumentation.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button asChild className="rounded-full h-11 px-5">
              <Link to="/book-demo">Book demo <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-11 px-5">
              <Link to="/data">Andre datatyper</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="max-w-3xl">
          <span className="eyebrow">Andre datatyper</span>
          <h2 className="mt-4 text-xl font-bold">Se også</h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {DATA_PAGES.filter((o) => o.slug !== d.slug).map((o) => (
            <Link
              key={o.slug}
              to="/data/$slug"
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
