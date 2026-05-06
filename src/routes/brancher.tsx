import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { SECTOR_TEMPLATES } from "@/data/pseo";

export const Route = createFileRoute("/brancher")({
  head: () => buildHead({
    title: "Brancher — GoFreyra til vand, energi, landbrug og byggeri",
    description: "Se hvordan GoFreyra bruges i forskellige brancher: vandselskaber, energi, landbrug og byggeri. Konkrete løsninger og dokumentationsflows.",
    path: "/brancher",
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Brancher</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">GoFreyra på tværs af brancher.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Samme platform — branche­specifikke datakilder, indikatorer og dokumentationsflows.
          </p>
        </div>
      </section>

      <section className="container-page py-16 grid md:grid-cols-2 gap-5">
        {SECTOR_TEMPLATES.map((t) => (
          <Link
            key={t.slug}
            to="/brancher/$slug"
            params={{ slug: t.slug }}
            className="card-soft p-7 hover:border-primary/40 transition group"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-deep">{t.eyebrow}</div>
            <div className="mt-2 text-xl font-semibold">{t.h1}</div>
            <p className="mt-2 text-muted-foreground">{t.intro}</p>
            <div className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">
              Se branche <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
            </div>
          </Link>
        ))}
      </section>

      <CTASection />
    </PageLayout>
  );
}
