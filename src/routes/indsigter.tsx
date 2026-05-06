import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { ArrowRight } from "lucide-react";

const articles = [
  { t: "CSRD i praksis: hvad revisor faktisk spørger om", c: "Whitepaper", d: "De konkrete dokumentationskrav, der oftest stopper rapporten." },
  { t: "Hvorfor naturindsatser skal kunne måles for at kunne styres", c: "Artikel", d: "Forskellen mellem en naturhistorie og et naturprojekt med tal bag." },
  { t: "Real-world data i ESG-arbejdet — tre praksiseksempler", c: "Whitepaper", d: "Hvor sensor-, drone- og satellitdata flytter rapporteringen mest." },
  { t: "Fra biodiversitetsmåling til verificerbar impact", c: "Guide", d: "Sådan bygges en naturbaseline, der kan stå mål med købere og myndigheder." },
  { t: "AI i miljødata: hvor giver det værdi — og hvor er det støj?", c: "Artikel", d: "Realistisk gennemgang af, hvad AI kan og ikke kan i ESG-arbejdet." },
  { t: "Audit trail: hvad det er, og hvorfor jeres rapport ikke holder uden", c: "Guide", d: "Praktisk indføring i sporbar dokumentation." },
];

export const Route = createFileRoute("/indsigter")({
  head: () => buildHead({
    title: "Indsigter — CSRD, ESG-data og naturdokumentation | GoFreyra",
    description: "Praktisk viden om CSRD, ESG-data, biodiversitetsdokumentation og audit trail. Artikler, whitepapers og guides fra GoFreyra.",
    path: "/indsigter",
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Indsigter</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Praktisk viden om data, dokumentation og CSRD.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Artikler, whitepapers og guides skrevet til ESG-team, drift og naturprojekter — uden floskler.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Artikler", "Whitepapers", "Guides", "Webinarer", "FAQ"].map((c) => (
              <span key={c} className="px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((a) => (
          <article key={a.t} className="card-soft p-6 group hover:border-primary/40 transition">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-deep">{a.c}</div>
            <h2 className="mt-2 text-lg font-semibold">{a.t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
            <Link to="/book-demo" className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">
              Læs mere <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
            </Link>
          </article>
        ))}
      </section>

      <CTASection title="Vil du gå fra teori til opsætning?" subtitle="Book en demo og få en konkret gennemgang af, hvordan GoFreyra arbejder med jeres data." />
    </PageLayout>
  );
}
