import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { SECTOR_TEMPLATES, type PseoTemplate } from "@/data/pseo";

export const Route = createFileRoute("/brancher/$slug")({
  loader: ({ params }) => {
    const tpl = SECTOR_TEMPLATES.find((t) => t.slug === params.slug);
    if (!tpl) throw notFound();
    return { tpl };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { tpl } = loaderData;
    return buildHead({
      title: tpl.seoTitle,
      description: tpl.seoDescription,
      path: `/brancher/${tpl.slug}`,
      jsonLd: [
        faqJsonLd(tpl.faq),
        breadcrumbJsonLd([
          { name: "Forside", path: "/" },
          { name: "Brancher", path: "/brancher" },
          { name: tpl.h1, path: `/brancher/${tpl.slug}` },
        ]),
      ],
    });
  },
  notFoundComponent: () => (
    <PageLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Branche ikke fundet</h1>
        <Link to="/brancher" className="mt-4 inline-block text-brand-deep underline">Se alle brancher</Link>
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
  component: SectorPage,
});

function SectorPage() {
  const { tpl } = Route.useLoaderData() as { tpl: PseoTemplate };
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">{tpl.eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">{tpl.h1}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{tpl.intro}</p>
          <div className="mt-7 flex gap-3">
            <Button asChild className="rounded-full h-11 px-5">
              <Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-11 px-5">
              <Link to="/platform">Se platformen</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Typiske udfordringer</h2>
          <ul className="mt-5 space-y-3">
            {tpl.problems.map((p) => (
              <li key={p} className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Sådan hjælper GoFreyra</h2>
          <p className="mt-4 text-foreground/80">{tpl.solution}</p>
          <div className="mt-5 space-y-3">
            {tpl.outcomes.map((o) => (
              <div key={o.title} className="card-soft p-5">
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{o.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{o.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="surface-beige rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold">Relevante moduler</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {tpl.modules.map((m) => (
              <span key={m} className="px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {tpl.faq.length > 0 && (
        <section className="container-page py-14 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
          <Accordion type="single" collapsible className="mt-6 space-y-2">
            {tpl.faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="card-soft px-5 border-0">
                <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      <CTASection />
    </PageLayout>
  );
}
