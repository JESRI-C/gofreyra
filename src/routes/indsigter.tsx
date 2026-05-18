import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd } from "@/components/site/SEO";
import { ArrowRight, Clock, Lock } from "lucide-react";
import { SectionHeader, MicroStrip, FaqSection } from "@/components/site/sections";
import { INSIGHTS, INSIGHT_CATEGORIES } from "@/data/insights";

const FAQ = [
  { q: "Hvorfor skal jeg udfylde en formular?", a: "Indledningen er altid frit tilgængelig. Fuld adgang får du ved at oplyse, hvem du er — så vi ved, hvilken viden vi sender, og hvor den lander." },
  { q: "Hvor ofte udgiver I nye indsigter?", a: "Løbende — når en pilot, en datakilde eller en regulatorisk ændring giver konkret læring." },
  { q: "Kan jeg dele artiklerne internt?", a: "Ja. Skal tekst eller grafik bruges i en rapport, så skriv kort til os først." },
  { q: "Skriver I på engelsk?", a: "Primært dansk. Udvalgte artikler oversættes efter behov." },
];

export const Route = createFileRoute("/indsigter")({
  head: () => buildHead({
    title: "Indsigter — ESG, miljødata og dokumentation | GoFreyra",
    description: "Praktisk B2B-viden om ESG-dokumentation, miljødata, biodiversitet, AI og audit trail. Læs indledningen frit — få adgang til hele analysen.",
    path: "/indsigter",
    jsonLd: faqJsonLd(FAQ),
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const [cat, setCat] = useState<(typeof INSIGHT_CATEGORIES)[number]>("Alle");
  const filtered = cat === "Alle" ? INSIGHTS : INSIGHTS.filter((a) => a.category === cat);

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Indsigter</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1]">Viden om data, natur og dokumentation</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Konkret B2B-viden om ESG, miljødata, biodiversitet og audit trail. Læs indledningen frit — få adgang til hele analysen.
          </p>
        </div>
      </section>

      <MicroStrip items={["Skrevet af praktikere", "Konkrete eksempler", "Til ESG, drift og naturprojekter"]} />

      <section className="container-page pt-12 pb-4">
        <div className="flex flex-wrap gap-2">
          {INSIGHT_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3.5 h-9 rounded-full text-xs font-medium border transition ${
                cat === c ? "bg-foreground text-background border-foreground" : "bg-card border-border text-foreground/70 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeader eyebrow={cat === "Alle" ? "Alle indsigter" : cat} title={`${filtered.length} ${filtered.length === 1 ? "indsigt" : "indsigter"}`} />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((a) => (
            <article key={a.slug} className="card-soft p-6 bg-card group hover:border-primary/40 transition flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-deep">{a.category}</div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-brand-deep">
                  <Lock className="w-3 h-3" /> Gratis adgang
                </span>
              </div>
              <h2 className="mt-3 text-lg font-semibold leading-snug">{a.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{a.teaser}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{a.readTime}</span>
              </div>
              <Link
                to="/indsigter/$slug"
                params={{ slug: a.slug }}
                className="mt-5 inline-flex items-center text-sm font-medium text-brand-deep"
              >
                Læs indledning <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <FaqSection items={FAQ} />

      <CTASection title="Fra indsigt til opsætning" subtitle="Book en demo og få en konkret gennemgang af, hvordan GoFreyra arbejder med jeres data." />
    </PageLayout>
  );
}
