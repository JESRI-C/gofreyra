import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { GreenCTA, MicroStrip, SectionHeader } from "@/components/site/sections";
import { Trees, FileCheck, Activity, Sprout, CloudRain, Factory, Layers, BarChart3 } from "lucide-react";
import type { ReactNode } from "react";

const cases: { i: ReactNode; t: string; d: string; to: string }[] = [
  { i: <Trees className="w-5 h-5" />, t: "Biodiversitetsovervågning", d: "Følg arter, levesteder og naturindikatorer med felt-, drone- og satellitdata.", to: "/loesninger/naturprojekter" },
  { i: <FileCheck className="w-5 h-5" />, t: "CSRD-dokumentation", d: "ESRS-mapping, audit trail og rapportklart datagrundlag.", to: "/loesninger/esg-compliance" },
  { i: <Activity className="w-5 h-5" />, t: "Sensorer til ESG", d: "IoT-data koblet direkte til ESG-indikatorer og risikostyring.", to: "/platform/smartconnect" },
  { i: <Sprout className="w-5 h-5" />, t: "Naturgenopretning", d: "Dokumentér effekten af genopretningsprojekter over tid.", to: "/loesninger/kommuner" },
  { i: <CloudRain className="w-5 h-5" />, t: "Klimatilpasning", d: "Følg vand, vejrdata og infrastrukturpåvirkning i kommunale projekter.", to: "/loesninger/kommuner" },
  { i: <Factory className="w-5 h-5" />, t: "Industriel miljømonitorering", d: "Drift, energi, vand og emissioner i ét lag med ESG-data.", to: "/loesninger/industri" },
  { i: <Layers className="w-5 h-5" />, t: "Projektbaseret impactdokumentation", d: "Dokumentér effekt pr. projekt — klar til partnere og markeder.", to: "/platform/impact-exchange" },
  { i: <BarChart3 className="w-5 h-5" />, t: "Rapportklar ESG-data", d: "Træk audit-klar dokumentation til revision og bestyrelse.", to: "/platform/esg-ledger" },
];

export const Route = createFileRoute("/use-cases")({
  head: () => buildHead({
    title: "Use cases — Sådan bruges GoFreyra i praksis",
    description: "Otte konkrete use cases: biodiversitet, CSRD, sensorer til ESG, naturgenopretning, klimatilpasning, industri og impactdokumentation.",
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
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Sådan bruges GoFreyra i praksis.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Otte områder, hvor GoFreyra omsætter miljødata til operationelt arbejdsgrundlag og revisionsklar dokumentation.
          </p>
        </div>
      </section>

      <MicroStrip items={["Pilot på 2-4 uger", "Modulær opsætning", "Bygget til CSRD og naturkrav", "Dansk leverandør"]} />

      <section className="container-page py-16">
        <SectionHeader eyebrow="Otte konkrete områder" title="Find den use case, der ligner jeres." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c) => (
            <Link key={c.t} to={c.to} className="card-soft p-6 bg-card hover:border-primary/40 transition">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{c.i}</div>
              <div className="mt-3 font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <GreenCTA title="Vil I se en use case med jeres egne data?" subtitle="Vi tilpasser demoen til jeres område og datakilder." />

      <CTASection />
    </PageLayout>
  );
}
