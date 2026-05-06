import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { GreenCTA, MicroStrip, SectionHeader, FaqSection, CardGrid } from "@/components/site/sections";
import { Trees, FileCheck, Activity, Sprout, CloudRain, Factory, Layers, BarChart3 } from "lucide-react";
import type { ReactNode } from "react";

const cases: { i: ReactNode; t: string; d: string; to: string; sources: string }[] = [
  { i: <Trees className="w-5 h-5" />, t: "Biodiversitetsovervågning", d: "Følg arter, levesteder og naturindikatorer med felt-, drone- og satellitdata.", to: "/loesninger/naturprojekter", sources: "GBIF, Sentinel-2, drone, felt" },
  { i: <FileCheck className="w-5 h-5" />, t: "CSRD-dokumentation", d: "ESRS-mapping, audit trail og rapportklart datagrundlag.", to: "/loesninger/esg-compliance", sources: "ERP, ESG-input, leverandørdata" },
  { i: <Activity className="w-5 h-5" />, t: "Sensorer til ESG", d: "IoT-data koblet direkte til ESG-indikatorer og risikostyring.", to: "/platform/smartconnect", sources: "IoT, SCADA, dataloggere" },
  { i: <Sprout className="w-5 h-5" />, t: "Naturgenopretning", d: "Dokumentér effekten af genopretningsprojekter over tid.", to: "/loesninger/kommuner", sources: "Felt, satellit, jord-/vandsensorer" },
  { i: <CloudRain className="w-5 h-5" />, t: "Klimatilpasning", d: "Følg vand, vejrdata og infrastrukturpåvirkning i kommunale projekter.", to: "/loesninger/kommuner", sources: "DMI, sensorer, GIS-lag" },
  { i: <Factory className="w-5 h-5" />, t: "Industriel miljømonitorering", d: "Drift, energi, vand og emissioner i ét lag med ESG-data.", to: "/loesninger/industri", sources: "SCADA, energimålere, ERP" },
  { i: <Layers className="w-5 h-5" />, t: "Projektbaseret impactdokumentation", d: "Dokumentér effekt pr. projekt — klar til partnere og markeder.", to: "/platform/impact-exchange", sources: "Drone, satellit, ESG Ledger" },
  { i: <BarChart3 className="w-5 h-5" />, t: "Rapportklar ESG-data", d: "Træk audit-klar dokumentation til revision og bestyrelse.", to: "/platform/esg-ledger", sources: "ERP, sensorer, manuelle ESG-input" },
];

const FAQ = [
  { q: "Hvilken use case passer bedst at starte med?", a: "Den, hvor I har det største dokumentationspres eller det mest afgrænsede datagrundlag. Et pilotforløb dækker typisk ét område, én lokation eller én ESG-kategori." },
  { q: "Kan vi kombinere flere use cases?", a: "Ja. Modulerne deler datagrundlag, så fx ESG-rapportering og naturprojekter kan køre i samme platform." },
  { q: "Hvor hurtigt er en use case oppe?", a: "Typisk 2-4 uger fra opsætning til første dokumenterbare resultater. Tunge driftsintegrationer kan tage længere." },
  { q: "Hvilke datakilder skal vi bruge?", a: "Det afhænger af use case. Vi gennemgår jeres eksisterende kilder i demoen og foreslår, hvilke der skal kobles på først." },
];

export const Route = createFileRoute("/use-cases")({
  head: () => buildHead({
    title: "Use cases — Sådan bruges GoFreyra i praksis",
    description: "Otte konkrete use cases: biodiversitet, CSRD, sensorer til ESG, naturgenopretning, klimatilpasning, industri og impactdokumentation.",
    path: "/use-cases",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
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
            Otte områder, hvor GoFreyra omsætter miljødata til operationelt arbejdsgrundlag og revisionsklar dokumentation. Hver use case kan starte med ét område og udvides, når data og organisation er klar.
          </p>
        </div>
      </section>

      <MicroStrip items={["Pilot på 2-4 uger", "Modulær opsætning", "Bygget til CSRD og naturkrav", "Dansk leverandør"]} />

      <section className="container-page py-16">
        <SectionHeader eyebrow="Otte konkrete områder" title="Find den use case, der ligner jeres." body="Hver use case viser, hvilke moduler og datakilder der typisk er i spil." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c) => (
            <Link key={c.t} to={c.to} className="card-soft p-6 bg-card hover:border-primary/40 transition group flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{c.i}</div>
              <div className="mt-3 font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{c.d}</p>
              <div className="mt-4 pt-3 border-t border-border text-[11px] uppercase tracking-wide font-mono text-muted-foreground">Datakilder</div>
              <div className="text-xs text-foreground/75 mt-1">{c.sources}</div>
            </Link>
          ))}
        </div>
      </section>

      <CardGrid
        beige
        eyebrow="Sådan bruges en use case"
        title="Fra valgt område til dokumenteret resultat."
        cols={4}
        cards={[
          { t: "1. Vælg område", d: "Ét areal, én lokation eller én rapporteringskategori." },
          { t: "2. Kobl datakilder", d: "Sensorer, drift, felt eller satellit kobles på gradvist." },
          { t: "3. Byg dashboard", d: "Indikatorer, audit trail og handlingsoverblik for relevante roller." },
          { t: "4. Dokumentér og skalér", d: "Træk rapport ud, læring tages med — næste område kobles på." },
        ]}
      />

      <FaqSection items={FAQ} />

      <GreenCTA title="Vil I se en use case med jeres egne data?" subtitle="Vi tilpasser demoen til jeres område og datakilder." />

      <CTASection />
    </PageLayout>
  );
}
