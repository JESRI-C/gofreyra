import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { getUseCase, USE_CASES, type UseCase } from "@/data/useCases";

export const Route = createFileRoute("/use-cases/$slug")({
  loader: ({ params }) => {
    const uc = getUseCase(params.slug);
    if (!uc) throw notFound();
    return { uc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const u = loaderData.uc;
    return buildHead({
      title: u.seoTitle,
      description: u.seoDescription,
      path: `/use-cases/${u.slug}`,
      jsonLd: [
        faqJsonLd(u.faq),
        breadcrumbJsonLd([
          { name: "Forside", path: "/" },
          { name: "Use cases", path: "/use-cases" },
          { name: u.shortTitle, path: `/use-cases/${u.slug}` },
        ]),
      ],
    });
  },
  notFoundComponent: () => (
    <PageLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Use case ikke fundet</h1>
        <Link to="/use-cases" className="mt-4 inline-block text-brand-deep underline">
          Se alle use cases
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
  component: UseCasePage,
});

function UseCasePage() {
  const { uc } = Route.useLoaderData() as { uc: UseCase };
  const related = USE_CASES.filter((o) => o.slug !== uc.slug).slice(0, 3);

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-12 md:py-20 max-w-3xl">
          <Link to="/use-cases" className="inline-flex items-center text-sm text-brand-deep font-medium hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Alle use cases
          </Link>
          <span className="eyebrow mt-6 inline-block">Use case</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-[1.05]">{uc.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{uc.subheadline}</p>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-2 gap-10 max-w-6xl">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Hvad er problemet?</h2>
          <div className="mt-5 space-y-4">
            {uc.problem.map((p, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Hvordan GoFreyra hjælper</h2>
          <div className="mt-5 space-y-4">
            {uc.solution.map((p, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-14">
          <div className="max-w-3xl">
            <span className="eyebrow">Relevante brancher</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold">Hvor bruges den typisk?</h2>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {uc.sectors.map((s) => (
              <Link
                key={s.slug}
                to="/brancher/$slug"
                params={{ slug: s.slug }}
                className="card-soft p-5 bg-card hover:border-primary/40 transition group"
              >
                <Check className="w-4 h-4 text-primary" />
                <div className="mt-2 font-semibold">{s.name}</div>
                <div className="mt-3 inline-flex items-center text-sm font-medium text-brand-deep">
                  Se branche <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="max-w-3xl">
          <span className="eyebrow">Relevante moduler</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">Modulerne der er i spil</h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {uc.modules.map((m) => (
            <span key={m} className="px-3.5 py-1.5 rounded-full bg-card border border-border text-sm font-medium">{m}</span>
          ))}
        </div>
      </section>

      <FaqSection items={uc.faq} />

      <section className="container-page my-16">
        <div className="rounded-3xl bg-primary/10 border border-primary/30 p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-brand-deep">Se {uc.shortTitle.toLowerCase()} i praksis</div>
            <p className="mt-2 text-foreground/80 max-w-xl">
              Book en demo og se, hvordan GoFreyra omsætter datakilder til dokumentation, indsigt og handling.
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

      {related.length > 0 && (
        <section className="container-page py-12">
          <div className="max-w-3xl">
            <span className="eyebrow">Andre use cases</span>
            <h2 className="mt-4 text-xl font-bold">Se også</h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {related.map((o) => (
              <Link
                key={o.slug}
                to="/use-cases/$slug"
                params={{ slug: o.slug }}
                className="px-3.5 py-1.5 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/40"
              >
                {o.shortTitle}
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </PageLayout>
  );
}
