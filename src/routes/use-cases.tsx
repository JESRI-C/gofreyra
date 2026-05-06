import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";

const cases = [
  { to: "/loesninger/kommuner", t: "Kommuner", d: "Bedre data til natur, klima og offentlige beslutninger." },
  { to: "/loesninger/industri", t: "Industri og forsyning", d: "Forbind driftsdata med bæredygtighed og ESG-performance." },
  { to: "/loesninger/esg-compliance", t: "ESG og compliance", d: "Byg stærkere ESG-dokumentation på bedre data." },
  { to: "/loesninger/naturprojekter", t: "Naturprojekter", d: "Følg naturimpact dér, hvor den faktisk sker." },
];

export const Route = createFileRoute("/use-cases")({
  head: () => buildHead({
    title: "Use cases — Bæredygtighedsdata i praksis | GoFreyra",
    description: "Se hvordan kommuner, industri, ESG-teams og naturprojekter bruger GoFreyra til at gøre bæredygtighedsdata operationelle.",
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
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Bygget til organisationer, der skal bruge bæredygtighedsdata i praksis.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Fire områder hvor GoFreyra gør miljødata til operationelt arbejdsgrundlag.
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
