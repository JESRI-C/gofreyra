import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { ArrowRight } from "lucide-react";

const articles = [
  { t: "Bæredygtighed uden data bliver hurtigt en fortælling", c: "Artikel", d: "Hvorfor datagrundlag er forskellen mellem reel impact og grøn historiefortælling." },
  { t: "Natur skal kunne måles for at kunne styres", c: "Artikel", d: "Hvad betyder det at gøre naturindsatser målbare i praksis?" },
  { t: "Hvorfor ESG-teams har brug for real-world data", c: "Whitepaper", d: "Tre konkrete områder hvor real-world data ændrer ESG-arbejdet." },
  { t: "Fra biodiversitetsovervågning til dokumenterbar impact", c: "Guide", d: "Praktisk guide til at gøre naturdata til verificerbar dokumentation." },
  { t: "Hvordan AI kan understøtte miljødata og ESG-dokumentation", c: "Artikel", d: "Hvor giver AI reel værdi — og hvor er det stadig støj?" },
  { t: "CSRD i praksis — datakrav og dokumentationsflows", c: "Whitepaper", d: "Et overblik over de mest praksisnære krav til datagrundlaget." },
];

export const Route = createFileRoute("/indsigter")({
  head: () => buildHead({
    title: "Indsigter — Bæredygtighedsdata, ESG og naturintelligens | GoFreyra",
    description: "Praktisk viden om bæredygtighedsdata, ESG-dokumentation og naturintelligens. Artikler, whitepapers, guides og webinarer.",
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
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Indsigter</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Praktisk viden om bæredygtighedsdata, ESG-dokumentation og naturintelligens.
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

      <CTASection title="Vil du dykke dybere?" subtitle="Book en demo og få en konkret gennemgang af, hvordan GoFreyra arbejder med jeres data." />
    </PageLayout>
  );
}
