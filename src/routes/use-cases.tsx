import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";

const cases = [
  { to: "/loesninger/kommuner", t: "Kommuner", d: "Naturgenopretning, klimatilpasning og biodiversitet — dokumenteret over tid." },
  { to: "/loesninger/industri", t: "Industri og forsyning", d: "ESG-tal direkte ud af driften, med audit trail og uden regneark." },
  { to: "/loesninger/esg-compliance", t: "ESG og compliance", d: "CSRD-klar dokumentation, ESRS-mapping og komplet sporbarhed." },
  { to: "/loesninger/naturprojekter", t: "Lodsejere og naturprojekter", d: "Mål biodiversitet og effekt med felt-, drone- og satellitdata." },
];

export const Route = createFileRoute("/use-cases")({
  head: () => buildHead({
    title: "Use cases — Sådan bruges GoFreyra i praksis",
    description: "Se hvordan kommuner, industri, ESG-teams og lodsejere bruger GoFreyra til at gøre miljødata operationelle og dokumentationen revisionsklar.",
    path: "/use-cases",
  }),
  component: UseCasesPage,
});

function UseCasesPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Use cases</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Bygget til organisationer, der skal kunne bevise deres indsats.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Fire områder, hvor GoFreyra omsætter miljødata til operationelt arbejdsgrundlag og revisionsklar dokumentation.
          </p>
        </div>
      </section>

      <section className="container-page py-16 grid md:grid-cols-2 gap-5">
        {cases.map((c) => (
          <Link key={c.to} to={c.to} className="card-soft p-7 hover:border-primary/40 transition">
            <div className="text-xl font-semibold">{c.t}</div>
            <p className="mt-2 text-muted-foreground">{c.d}</p>
          </Link>
        ))}
      </section>

      <CTASection />
    </PageLayout>
  );
}
