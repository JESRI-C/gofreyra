import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Activity, Brain, FileCheck, Globe2, Download, Users, LayoutDashboard, ShieldCheck, Gauge, ClipboardCheck } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { FaqSection, GreenCTA, MicroStrip, SectionHeader, FlowSection, CardGrid } from "@/components/site/sections";

const FAQ = [
  { q: "Hvem er dashboardet til?", a: "ESG-team, drift, projektledere og ledelse — med rolletilpassede visninger, så hver bruger ser det relevante." },
  { q: "Kan vi tilpasse visningen?", a: "Ja. Dashboardet konfigureres til projekt, område, KPI'er og roller." },
  { q: "Kan vi eksportere data og rapporter?", a: "Ja. Træk audit-klar dokumentation og rapporter til revision, ledelse og myndigheder." },
  { q: "Vises data i realtid?", a: "Ja, hvor datakilden tillader det. Andre data vises med tydeligt timestamp og opdateringsfrekvens." },
];

export const Route = createFileRoute("/dashboard")({
  head: () => buildHead({
    title: "GoFreyra Dashboard — Ét overblik for ESG, drift og ledelse",
    description: "Følg miljødata, AI-anbefalinger og dokumentationsstatus i ét operationelt dashboard. Bygget til ESG-team, drift og projektledere.",
    path: "/dashboard",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const sections = [
    { i: <Activity className="w-5 h-5" />, t: "Live overblik", d: "Hurtigt status på alarmer, datakilder og igangværende dokumentation." },
    { i: <MapPin className="w-5 h-5" />, t: "Kortbaseret monitorering", d: "Sensor-noder, projektområder og indikatorer vist geografisk." },
    { i: <LayoutDashboard className="w-5 h-5" />, t: "Sensorstatus", d: "Se hvilke sensorer der leverer data, hvilke der har afvigelser, og hvor handling kræves." },
    { i: <Brain className="w-5 h-5" />, t: "AI insight panel", d: "Risikoflag og prioriteret handlingskø fra DecisionsIQ." },
    { i: <FileCheck className="w-5 h-5" />, t: "ESG documentation tracker", d: "Følg fremdrift på ESG-flows og rapporteringspligt fra ESG Ledger." },
    { i: <Globe2 className="w-5 h-5" />, t: "Impact metrics", d: "Følg biodiversitets-, klima- og miljøindikatorer over tid." },
    { i: <Download className="w-5 h-5" />, t: "Report export", d: "Generér audit-klar dokumentation til revision, ledelse og myndigheder." },
    { i: <Users className="w-5 h-5" />, t: "Roller og visninger", d: "Tilpassede dashboards for ESG, drift, projekt og ledelse." },
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

      <MicroStrip items={["Rolletilpassede visninger", "Kortbaseret monitorering", "Audit trail på datapunkter", "Eksport til rapport"]} />

      <section className="container-page py-16">
        <SectionHeader eyebrow="Dashboard tour" title="Det får I i overblikket." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((s) => (
            <div key={s.t} className="card-soft p-6 bg-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{s.i}</div>
              <div className="mt-3 font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FlowSection
        beige
        eyebrow="Sådan bruges dashboardet"
        title="Fra signal til dokumenteret handling."
        steps={[
          { n: "01", t: "Se status", d: "Live overblik på områder, sensorer og dokumentation." },
          { n: "02", t: "Find afvigelser", d: "AI-panel viser, hvor noget kræver handling." },
          { n: "03", t: "Prioritér", d: "Sortér og tildel ansvarlige." },
          { n: "04", t: "Dokumentér", d: "ESG Ledger logger handling og kilde." },
          { n: "05", t: "Rapportér", d: "Eksport til ESG, ledelse eller myndigheder." },
        ]}
      />

      <GreenCTA title="Vil I se dashboardet med jeres egne data?" subtitle="Vi gør jeres datakilder klar til en konkret demo." />

      <FaqSection items={FAQ} />

      <CTASection />
    </PageLayout>
  );
}
