import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/dashboard")({
  head: () => buildHead({
    title: "GoFreyra Dashboard — Ét overblik for ESG, drift og ledelse",
    description: "Følg miljødata, AI-anbefalinger og dokumentationsstatus i ét operationelt dashboard. Bygget til ESG-team, drift og projektledere.",
    path: "/dashboard",
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const sections = [
    { t: "Live overblik", d: "Hurtigt status på alarmer, datakilder og igangværende dokumentation." },
    { t: "Kortbaseret monitorering", d: "Sensor-noder, projektområder og indikatorer vist geografisk." },
    { t: "Sensorstatus", d: "Se hvilke sensorer der leverer data, hvilke der har afvigelser, og hvor handling kræves." },
    { t: "AI-anbefalinger", d: "Risikoflag og prioriteret handlingskø fra DecisionsIQ." },
    { t: "Dokumentationsstatus", d: "Følg fremdrift på ESG-flows og rapporteringspligt fra ESG Ledger." },
    { t: "Impact-metrics", d: "Følg biodiversitets-, klima- og miljøindikatorer over tid." },
    { t: "Rapporteksport", d: "Generér audit-klar dokumentation til revision, ledelse og myndigheder." },
  ];

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow">GoFreyra Dashboard</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">Ét overblik. Hele platformen.</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              GoFreyra Dashboard samler data fra SmartConnect+, DecisionsIQ, ESG Ledger og Impact Exchange — så drift, ESG-team og ledelse arbejder i samme billede.
            </p>
            <div className="mt-7 flex gap-3">
              <Button asChild className="rounded-full h-11 px-5"><Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-5"><Link to="/platform">Se platformen</Link></Button>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <section className="container-page py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((s) => (
          <div key={s.t} className="card-soft p-6">
            <div className="font-semibold">{s.t}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>

      <CTASection />
    </PageLayout>
  );
}
