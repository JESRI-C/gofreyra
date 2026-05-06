import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/om")({
  head: () => buildHead({
    title: "Om GoFreyra — Digital infrastruktur for målbar bæredygtighed",
    description: "GoFreyra bygger digital infrastruktur for målbar bæredygtighed. Vi forbinder miljødata fra virkeligheden med analyse, beslutninger og dokumentation.",
    path: "/om",
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Om</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Om GoFreyra</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Vi bygger digital infrastruktur for målbar bæredygtighed.
          </p>
        </div>
      </section>

      <section className="container-page py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5 text-foreground/85">
          <p>
            GoFreyra er en del af Freyra-økosystemet og fokuserer på at forbinde miljødata fra virkeligheden med analyse,
            beslutninger og dokumentation. Vi tror på, at bæredygtighed skal være målbar — ikke en historie om gode intentioner.
          </p>
          <p>
            Vi arbejder i krydsfeltet mellem natur, drift og rapportering. Det betyder, at vi designer platformen til at
            håndtere både feltdata fra et naturprojekt, driftsdata fra et forsyningsselskab og strukturerede ESG-data fra en koncern.
          </p>
          <p>
            Vores ambition er at gøre bæredygtighedsarbejde lettere at styre, lettere at dokumentere og lettere at forsvare —
            med data, der kan spores tilbage til kilden.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { t: "Vores fokus", d: "Miljødata, ESG-dokumentation og verificerbar impact." },
            { t: "Vores tilgang", d: "Praktiske arbejdsgange, sporbare data og operationelle dashboards." },
            { t: "Vores brugere", d: "Virksomheder, kommuner, industri, forsyning, lodsejere og naturprojekter." },
            { t: "Vores fundament", d: "En modulær SaaS-platform bygget til pilotprojekter og skalering." },
          ].map((c) => (
            <div key={c.t} className="card-soft p-6">
              <div className="font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
