import { createFileRoute, Link } from "@tanstack/react-router";
import { Database, Brain, ShieldCheck, Globe2, ArrowRight, LayoutDashboard, Plug, Lock } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { Button } from "@/components/ui/button";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/platform")({
  head: () => buildHead({
    title: "GoFreyra Platform — Én SaaS til miljødata, ESG og impact",
    description: "Indsaml, analysér, dokumentér og aktivér miljø- og driftsdata i én platform. Modulær, sporbar og bygget til CSRD og naturrapportering.",
    path: "/platform",
  }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow">Platformen</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">Én platform — fra rådata til revisionsklar dokumentation.</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              GoFreyra Platform binder sensorer, drift, AI-analyse og ESG-dokumentation sammen i ét system, så ESG-team, drift og ledelse arbejder i samme datagrundlag.
            </p>
            <div className="mt-7 flex gap-3">
              <Button asChild className="rounded-full h-11 px-5"><Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-5"><Link to="/dashboard">Se dashboardet</Link></Button>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      {/* MODULE FLOW */}
      <section className="container-page py-16">
        <div className="max-w-3xl">
          <span className="eyebrow">Sådan hænger modulerne sammen</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Data flyder ét sted hen — og ud i den dokumentation, I skal bruge.</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {[
            { to: "/platform/smartconnect", t: "1. SmartConnect+", d: "Indsamler data fra sensorer, drone, satellit, felt og driftsystemer." },
            { to: "/platform/decisionsiq", t: "2. DecisionsIQ", d: "Analyserer data og leverer mønstre, risici og konkrete anbefalinger." },
            { to: "/platform/esg-ledger", t: "3. ESG Ledger", d: "Dokumenterer hvert datapunkt med kilde, tidsstempel og audit trail." },
            { to: "/platform/impact-exchange", t: "4. Impact Exchange", d: "Synliggør verificeret effekt for partnere, markeder og rapportering." },
          ].map((m) => (
            <Link key={m.to} to={m.to} className="card-soft p-6 hover:border-primary/40 transition">
              <div className="font-semibold text-lg">{m.t}</div>
              <p className="text-sm text-muted-foreground mt-1">{m.d}</p>
              <div className="mt-3 inline-flex items-center text-sm font-medium text-brand-deep">Se modulet <ArrowRight className="ml-1 w-4 h-4" /></div>
            </Link>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="surface-beige">
        <div className="container-page py-16">
          <div className="max-w-3xl">
            <span className="eyebrow">Det får I i platformen</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Konkrete kapabiliteter — ikke buzzwords.</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Database className="w-5 h-5" />, t: "Datakilder uden bøvl", d: "Sensorer, drone, satellit, felt og driftssystemer i ét struktureret lag." },
              { icon: <Brain className="w-5 h-5" />, t: "AI-analyse med forklaring", d: "Hver anbefaling er knyttet til de underliggende datapunkter." },
              { icon: <ShieldCheck className="w-5 h-5" />, t: "Audit trail på alt", d: "Kilde, tidsstempel og ændringshistorik på hvert tal i rapporten." },
              { icon: <LayoutDashboard className="w-5 h-5" />, t: "Operationelt dashboard", d: "Ét overblik for ESG-team, drift, projektledelse og ledelse." },
              { icon: <Plug className="w-5 h-5" />, t: "Integrationer", d: "Forbind eksisterende IoT-platforme, ERP og rapporteringsværktøjer." },
              { icon: <Lock className="w-5 h-5" />, t: "Sikkerhed og rollestyring", d: "Klar adgangsstyring for ESG, drift, revisorer og eksterne partnere." },
              { icon: <Globe2 className="w-5 h-5" />, t: "Impact-modul", d: "Klar til natur- og klimarapportering og kommende biodiversitetsmarkeder." },
              { icon: <ArrowRight className="w-5 h-5" />, t: "Pilot på 2-4 uger", d: "Start med ét datasæt eller ét område — udvid herfra." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-6 bg-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{c.icon}</div>
                <div className="mt-3 font-semibold">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
