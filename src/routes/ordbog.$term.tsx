import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd, definedTermJsonLd } from "@/components/site/SEO";
import { GLOSSARY } from "@/data/pseo";

export const Route = createFileRoute("/ordbog/$term")({
  loader: ({ params }) => {
    const term = GLOSSARY.find((t) => t.slug === params.term);
    if (!term) throw notFound();
    return { term };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { term } = loaderData;
    const path = `/ordbog/${term.slug}`;
    return buildHead({
      title: `${term.term} — Definition | GoFreyra`,
      description: term.shortDefinition.slice(0, 158),
      path,
      ogType: "article",
      jsonLd: [
        definedTermJsonLd(term.term, term.shortDefinition, path),
        ...(term.faq.length ? [faqJsonLd(term.faq)] : []),
        breadcrumbJsonLd([
          { name: "Forside", path: "/" },
          { name: "Ordbog", path: "/ordbog" },
          { name: term.term, path },
        ]),
      ],
    });
  },
  notFoundComponent: () => (
    <PageLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Begreb ikke fundet</h1>
        <Link to="/ordbog" className="mt-4 inline-block text-brand-deep underline">Se ordbogen</Link>
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
  component: TermPage,
});

function TermPage() {
  const { term } = Route.useLoaderData();
  const related = term.related
    .map((slug) => GLOSSARY.find((g) => g.slug === slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Ordbog · Definition</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">{term.term}</h1>
          <p className="mt-5 text-lg text-foreground/85">{term.shortDefinition}</p>
        </div>
      </section>

      <section className="container-page py-12 max-w-3xl">
        <h2 className="text-2xl font-bold">Uddybning</h2>
        <p className="mt-4 text-foreground/80">{term.longExplanation}</p>
      </section>

      {term.faq.length > 0 && (
        <section className="container-page py-12 max-w-3xl">
          <h2 className="text-2xl font-bold">Ofte stillede spørgsmål</h2>
          <Accordion type="single" collapsible className="mt-6 space-y-2">
            {term.faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="card-soft px-5 border-0">
                <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      {related.length > 0 && (
        <section className="container-page py-12 max-w-3xl">
          <h2 className="text-2xl font-bold">Relaterede begreber</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/ordbog/$term"
                params={{ term: r.slug }}
                className="px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/40 transition"
              >
                {r.term}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="container-page py-12 max-w-3xl">
        <div className="card-soft p-6 flex flex-wrap items-center justify-between gap-4 bg-secondary/40">
          <div className="text-sm">
            Vil du se, hvordan GoFreyra arbejder med <strong>{term.term.toLowerCase()}</strong> i praksis?
          </div>
          <Button asChild className="rounded-full">
            <Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
