import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { ArrowRight } from "lucide-react";
import { SectionHeader, MicroStrip } from "@/components/site/sections";

const categories = ["Alle", "ESG-dokumentation", "Biodiversitetsovervågning", "Naturdata", "AI og analyse", "CSRD og compliance", "Datakilder", "Pilotprojekter"] as const;

const articles = [
  { t: "Bæredygtighed uden data bliver hurtigt en fortælling", c: "ESG-dokumentation", d: "Hvorfor dokumenteret bæredygtighed slår grøn storytelling — hver gang." },
  { t: "Natur skal kunne måles for at kunne styres", c: "Biodiversitetsovervågning", d: "Forskellen mellem en naturhistorie og et naturprojekt med tal bag." },
  { t: "Hvad er ESG-dokumentation?", c: "ESG-dokumentation", d: "Definition, krav og hvad der adskiller god dokumentation fra svag." },
  { t: "Hvad er biodiversitetsovervågning?", c: "Biodiversitetsovervågning", d: "Praktisk indføring i felt-, drone- og satellitbaseret monitorering." },
  { t: "Sådan kan sensordata styrke ESG-arbejdet", c: "AI og analyse", d: "Tre konkrete eksempler på, hvor IoT flytter rapporteringen." },
  { t: "Hvorfor manuelle ESG-processer bliver et problem", c: "CSRD og compliance", d: "Hvor regnearksbaseret ESG-arbejde kammer over." },
  { t: "Fra feltdata til rapportklar dokumentation", c: "ESG-dokumentation", d: "En arbejdsgang, der reducerer manuelt arbejde markant." },
  { t: "Hvordan AI kan hjælpe med miljødata", c: "AI og analyse", d: "Realistisk gennemgang af, hvad AI kan og ikke kan i ESG-arbejdet." },
  { t: "Hvad er audit trail i ESG?", c: "ESG-dokumentation", d: "Praktisk indføring i sporbar dokumentation." },
  { t: "Sådan starter man et datadrevet naturprojekt", c: "Pilotprojekter", d: "Fra baseline til skalerbar dokumentation på 90 dage." },
  { t: "Hvilke datakilder kan bruges til biodiversitet?", c: "Datakilder", d: "Felt, drone, satellit, sensorer og åbne registre — kombineret." },
  { t: "Fra pilotprojekt til skalerbar platform", c: "Pilotprojekter", d: "Sådan bygges et pilotforløb, der kan vokse uden at skulle bygges om." },
];

export const Route = createFileRoute("/indsigter")({
  head: () => buildHead({
    title: "Indsigter — CSRD, ESG-data, biodiversitet og naturdokumentation | GoFreyra",
    description: "Praktisk viden om CSRD, ESG-data, biodiversitet, AI og audit trail. Artikler, whitepapers og guides fra GoFreyra.",
    path: "/indsigter",
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Alle");
  const filtered = cat === "Alle" ? articles : articles.filter((a) => a.c === cat);
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Indsigter</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Praktisk viden om data, dokumentation og natur.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Artikler, whitepapers og guides skrevet til ESG-team, drift og naturprojekter — uden floskler.
          </p>
        </div>
      </section>

      <MicroStrip items={["Konkrete eksempler", "Skrevet af praktikere", "Til ESG, drift og naturprojekter"]} />

      <section className="container-page pt-12 pb-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-3.5 h-9 rounded-full text-xs font-medium border transition ${cat === c ? "bg-foreground text-background border-foreground" : "bg-card border-border text-foreground/70 hover:text-foreground"}`}>{c}</button>
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <SectionHeader eyebrow={cat === "Alle" ? "Alle artikler" : cat} title={`${filtered.length} indsigter`} />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((a) => (
            <article key={a.t} className="card-soft p-6 group hover:border-primary/40 transition">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-deep">{a.c}</div>
              <h2 className="mt-2 text-lg font-semibold">{a.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
              <Link to="/book-demo" className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">
                Læs mere <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="Vil du gå fra teori til opsætning?" subtitle="Book en demo og få en konkret gennemgang af, hvordan GoFreyra arbejder med jeres data." />
    </PageLayout>
  );
}
