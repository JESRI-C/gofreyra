import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { getProblem, PROBLEMS, type ProblemPage } from "@/data/problems";

export const Route = createFileRoute("/problemer/$slug")({
  loader: ({ params }) => {
    const problem = getProblem(params.slug);
    if (!problem) throw notFound();
    return { problem };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const p = loaderData.problem;
    return buildHead({
      title: p.seoTitle,
      description: p.seoDescription,
      path: `/problemer/${p.slug}`,
      jsonLd: [
        faqJsonLd(p.faq),
        breadcrumbJsonLd([
          { name: "Forside", path: "/" },
          { name: "Problemer", path: "/problemer" },
          { name: p.name, path: `/problemer/${p.slug}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: p.h1,
          description: p.seoDescription,
          provider: { "@type": "Organization", name: "GoFreyra" },
          areaServed: "DK",
        },
      ],
    });
  },
  notFoundComponent: () => (
    <PageLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Problem ikke fundet</h1>
        <Link to="/problemer" className="mt-4 inline-block text-brand-deep underline">
          Se alle problemer
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
  component: ProblemPageView,
});

function ProblemPageView() {
  const { problem: p } = Route.useLoaderData() as { problem: ProblemPage };

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-12 md:py-20 max-w-3xl">
          <Link to="/problemer" className="inline-flex items-center text-sm text-brand-deep font-medium hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Alle problemer
          </Link>
          <span className="eyebrow mt-6 inline-block">Problem · {p.name}</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-[1.05]">{p.h1}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{p.subheadline}</p>
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
          <h2 className="text-2xl md:text-3xl font-bold">Hvad er problemet?</h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">{p.whatIs}</p>
          <h2 className="mt-10 text-2xl md:text-3xl font-bold">Hvorfor opstår det?</h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">{p.whyHappens}</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Hvad betyder det i praksis?</h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">{p.inPractice}</p>
          <h2 className="mt-10 text-2xl md:text-3xl font-bold">Hvordan GoFreyra hjælper</h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">{p.solution}</p>
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Relevante moduler</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold">Modulerne der typisk er i spil</h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.modules.map((m) => (
              <span key={m} className="px-3.5 py-1.5 rounded-full bg-card border border-border text-sm font-medium">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 grid md:grid-cols-3 gap-8">
        <div>
          <span className="eyebrow">Relevante brancher</span>
          <ul className="mt-4 space-y-2">
            {p.sectors.map((s) => (
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
            {p.useCases.map((u) => (
              <li key={u.slug}>
                <Link to="/use-cases/$slug" params={{ slug: u.slug }} className="inline-flex items-center text-sm font-medium text-brand-deep hover:underline">
                  <Check className="w-4 h-4 mr-1.5 text-primary" /> {u.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="eyebrow">Relevante datakilder</span>
          <ul className="mt-4 space-y-2">
            {p.dataPages.map((d) => (
              <li key={d.slug}>
                <Link to="/data/$slug" params={{ slug: d.slug }} className="inline-flex items-center text-sm font-medium text-brand-deep hover:underline">
                  <Check className="w-4 h-4 mr-1.5 text-primary" /> {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection items={p.faq} />

      <section className="container-page my-16">
        <div className="rounded-3xl bg-primary/10 border border-primary/30 p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-brand-deep">
              Vil I se, hvordan GoFreyra adresserer {p.name.toLowerCase()}?
            </div>
            <p className="mt-2 text-foreground/80 max-w-xl">
              På en demo gennemgår vi jeres data, dokumentationsbehov og første pilotforløb.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button asChild className="rounded-full h-11 px-5">
              <Link to="/book-demo">Book demo <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-11 px-5">
              <Link to="/priser">Se priser</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="max-w-3xl">
          <span className="eyebrow">Andre problemer</span>
          <h2 className="mt-4 text-xl font-bold">Se også</h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {PROBLEMS.filter((o) => o.slug !== p.slug).map((o) => (
            <Link
              key={o.slug}
              to="/problemer/$slug"
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
