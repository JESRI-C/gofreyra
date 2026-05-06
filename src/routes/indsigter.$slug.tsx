import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead, faqJsonLd } from "@/components/site/SEO";
import { InsightAccessGate } from "@/components/site/InsightAccessGate";
import { FaqSection, GreenCTA } from "@/components/site/sections";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar, Tag, ArrowLeft } from "lucide-react";
import { getInsight, INSIGHTS } from "@/data/insights";

export const Route = createFileRoute("/indsigter/$slug")({
  loader: ({ params }) => {
    const insight = getInsight(params.slug);
    if (!insight) throw notFound();
    return { insight };
  },
  head: ({ loaderData }) => {
    const i = loaderData?.insight;
    if (!i) return {};
    const desc = i.summary.slice(0, 155);
    return buildHead({
      title: `${i.title} | GoFreyra Indsigter`,
      description: desc,
      path: `/indsigter/${i.slug}`,
      ogType: "article",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: i.title,
          datePublished: i.date,
          dateModified: i.date,
          author: { "@type": "Organization", name: "GoFreyra" },
          publisher: { "@type": "Organization", name: "GoFreyra" },
          articleSection: i.category,
          description: desc,
        },
        ...(i.faq && i.faq.length ? [faqJsonLd(i.faq)] : []),
      ],
    });
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <PageLayout>
      <section className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Indsigt ikke fundet</h1>
        <p className="mt-3 text-muted-foreground">Artiklen findes ikke længere.</p>
        <Link to="/indsigter" className="mt-6 inline-flex items-center text-brand-deep font-medium">
          <ArrowLeft className="w-4 h-4 mr-1" /> Tilbage til indsigter
        </Link>
      </section>
    </PageLayout>
  ),
});

function ArticlePage() {
  const { insight } = Route.useLoaderData();
  const [unlocked, setUnlocked] = useState(false);
  const related = insight.related
    .map((s) => INSIGHTS.find((i) => i.slug === s))
    .filter((x): x is (typeof INSIGHTS)[number] => Boolean(x))
    .slice(0, 3);

  const dateFmt = new Date(insight.date).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" });

  return (
    <PageLayout>
      {/* HERO */}
      <section className="gradient-hero">
        <div className="container-page py-12 md:py-16 max-w-3xl">
          <Link to="/indsigter" className="inline-flex items-center text-sm text-brand-deep font-medium hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Alle indsigter
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 text-brand-deep uppercase tracking-wider"><Tag className="w-3.5 h-3.5" />{insight.category}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{insight.readTime}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{dateFmt}</span>
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">{insight.title}</h1>
        </div>
      </section>

      {/* CONTENT */}
      <article className="container-page py-12 max-w-3xl">
        {/* Executive summary */}
        <div className="card-soft p-6 bg-card border-l-4 border-l-primary">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-deep">Executive summary</div>
          <p className="mt-2 text-foreground/85 text-lg leading-relaxed">{insight.summary}</p>
        </div>

        {/* GEO definition */}
        {insight.geo && (
          <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-6">
            <div className="text-sm font-semibold text-brand-deep">{insight.geo.q}</div>
            <p className="mt-2 text-sm text-foreground/80">{insight.geo.a}</p>
          </div>
        )}

        {/* Intro + first section (always visible for SEO) */}
        <div className="mt-10 prose-content">
          <p className="text-lg leading-relaxed text-foreground/90">{insight.intro}</p>

          <h2 className="mt-10 text-2xl font-bold">{insight.visibleSection.h}</h2>
          {insight.visibleSection.p.map((p, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-foreground/85">{p}</p>
          ))}
        </div>

        {/* Locked content / Gate */}
        {!unlocked ? (
          <div className="relative mt-8">
            {/* Fade preview of next section */}
            <div className="relative max-h-48 overflow-hidden">
              <h2 className="text-2xl font-bold">{insight.lockedSections[0]?.h}</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/85">{insight.lockedSections[0]?.p[0]}</p>
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />
            </div>
            <div className="mt-6">
              <InsightAccessGate insight={insight} onUnlock={() => setUnlocked(true)} />
            </div>
          </div>
        ) : (
          <div className="mt-10 prose-content">
            {insight.lockedSections.map((s, i) => (
              <section key={i}>
                <h2 className="mt-10 text-2xl font-bold">{s.h}</h2>
                {s.p.map((p, j) => (
                  <p key={j} className="mt-4 text-base leading-relaxed text-foreground/85">{p}</p>
                ))}
              </section>
            ))}
          </div>
        )}
      </article>

      {/* DEMO CTA */}
      <GreenCTA
        title="Vil du se, hvordan det kan bruges i praksis?"
        subtitle="Book en demo og se, hvordan GoFreyra kan omsætte miljødata, ESG-dokumentation og analyse til et konkret dashboard."
        primary={{ to: "/book-demo", label: "Book demo" }}
        secondary={{ to: "/platform", label: "Se platformen" }}
      />

      {/* RELATED */}
      {related.length > 0 && (
        <section className="container-page py-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Relaterede indsigter</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold">Læs videre</h2>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link key={r.slug} to="/indsigter/$slug" params={{ slug: r.slug }} className="card-soft p-6 bg-card group hover:border-primary/40 transition">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-deep">{r.category}</div>
                <div className="mt-2 font-semibold">{r.title}</div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{r.teaser}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">
                  Læs indledning <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {insight.faq && insight.faq.length > 0 && <FaqSection items={insight.faq} title="Spørgsmål til artiklen" />}

      <CTASection
        title="Vil du se, hvordan GoFreyra kan bruges i jeres organisation?"
        subtitle="På en demo gennemgår vi jeres datakilder, dokumentationsbehov og muligheder for et første pilotforløb."
      />
    </PageLayout>
  );
}
