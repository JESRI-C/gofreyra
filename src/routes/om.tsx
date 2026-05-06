import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/om")({
  head: () => buildHead({
    title: "Om GoFreyra — Dansk SaaS-platform til miljødata og ESG",
    description: "GoFreyra er den danske SaaS-platform, der gør miljødata, drift og ESG-dokumentation operationel — bygget til CSRD, naturkrav og verificerbar impact.",
    path: "/om",
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Om GoFreyra</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Vi gør bæredygtighed målbar — ikke fortællbar.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            GoFreyra er en dansk SaaS-platform, der samler, analyserer og dokumenterer miljø- og driftsdata, så virksomheder, kommuner og naturprojekter kan bevise deres indsats.
          </p>
        </div>
      </section>

      <section className="container-page py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5 text-foreground/85">
          <p>
            Vi er bygget til organisationer, der står med CSRD, naturkrav og stigende dokumentationspres — og som er trætte af, at ESG-arbejdet bor i regneark, PDF'er og spredte systemer.
          </p>
          <p>
            GoFreyra dækker hele værdikæden: SmartConnect+ samler data fra felten, DecisionsIQ analyserer dem, ESG Ledger dokumenterer dem, og Impact Exchange aktiverer effekten. Det hele samles i GoFreyra Dashboard.
          </p>
          <p>
            Vi tror på, at bæredygtighed kun bliver troværdig, når den kan spores tilbage til kilden. Det er det, vi bygger.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { t: "Vores fokus", d: "Miljødata, ESG-dokumentation og verificerbar natur- og klimaeffekt." },
            { t: "Vores tilgang", d: "Sporbar data, praktiske arbejdsgange og operationelle dashboards." },
            { t: "Vores brugere", d: "Virksomheder, kommuner, industri, forsyning, lodsejere og naturprojekter." },
            { t: "Vores fundament", d: "Modulær SaaS — start med ét modul, skalér til hele organisationen." },
          ].map((c) => (
            <div key={c.t} className="card-soft p-6">
              <div className="font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
