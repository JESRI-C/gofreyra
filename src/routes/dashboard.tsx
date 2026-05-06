import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/dashboard")({
  head: () => buildHead({
    title: "GoFreyra Dashboard — Operationelt bæredygtighedsoverblik",
    description: "Følg miljødata, AI-indsigter og dokumentationsflows fra ét operationelt SaaS-dashboard. Designet til ESG-teams, drift og projektledere.",
    path: "/dashboard",
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const sections = [
    { t: "Live overview", d: "Det hurtige overblik over status, alarmer og igangværende dokumentation." },
    { t: "Kortbaseret monitorering", d: "Følg sensor-noder, projektområder og miljøindikatorer geografisk." },
    { t: "Sensorstatus", d: "Se hvilke sensorer der leverer data, hvilke der har afvigelser, og hvor handling kræves." },
    { t: "AI insight panel", d: "AI-anbefalinger, risikoflag og prioriteret handlingskø." },
    { t: "ESG documentation tracker", d: "Følg fremdrift på dokumentationsflows og rapporteringspligt." },
    { t: "Impact metrics", d: "Følg udviklingen i biodiversitets-, klima- og miljøindikatorer." },
    { t: "Rapporteksport", d: "Generér audit-klar dokumentation til intern og ekstern brug." },
  ];

  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow">Dashboard</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">GoFreyra Dashboard</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Ét samlet overblik over miljødata, ESG og verificerbar impact. Bygget til drift, ikke til powerpoints.
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
