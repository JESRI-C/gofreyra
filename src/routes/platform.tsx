import { createFileRoute, Link } from "@tanstack/react-router";
import { Database, Brain, ShieldCheck, Globe2, ArrowRight, LayoutDashboard, Plug, Lock } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { Button } from "@/components/ui/button";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/platform")({
  head: () => buildHead({
    title: "GoFreyra Platform — Miljødata, AI og ESG-dokumentation",
    description: "Én SaaS-platform til at indsamle miljødata, analysere mønstre og dokumentere bæredygtighedsindsatser med audit-klar sporbarhed.",
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
            <span className="eyebrow">Platform</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">GoFreyra Platform</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Miljødata, AI-indsigt og verificerbar dokumentation i ét samlet system.
            </p>
            <div className="mt-7 flex gap-3">
              <Button asChild className="rounded-full h-11 px-5"><Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-5"><Link to="/dashboard">Se dashboard</Link></Button>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <section className="container-page py-16 grid md:grid-cols-2 gap-5">
        {[
          { icon: <Database className="w-5 h-5" />, t: "Datakilder", d: "Sensorer, dronedata, satellitdata, feltobservationer og driftsdata samles i ét sikkert lag." },
          { icon: <Brain className="w-5 h-5" />, t: "AI-analyse", d: "Find mønstre, afvigelser og risici på tværs af miljødata, drift og ESG-indikatorer." },
          { icon: <ShieldCheck className="w-5 h-5" />, t: "Dokumentationslag", d: "Audit trail og kildehenvisning for hvert datapunkt og hver impact-claim." },
          { icon: <LayoutDashboard className="w-5 h-5" />, t: "Dashboardoplevelse", d: "Operationelt overblik for projektledere, ESG-teams og beslutningstagere." },
          { icon: <Plug className="w-5 h-5" />, t: "Integrationer", d: "Forbind eksisterende IoT-platforme, ERP-systemer og rapporteringsværktøjer." },
          { icon: <Lock className="w-5 h-5" />, t: "Sikkerhed og sporbarhed", d: "Sikker datahåndtering, rollestyring og verificerbare audit trails." },
          { icon: <Globe2 className="w-5 h-5" />, t: "Impact-modul", d: "Forbered natur- og klimaprojekter til verificerbar rapportering og fremtidige markeder." },
          { icon: <ArrowRight className="w-5 h-5" />, t: "Skalering", d: "Start med et pilotprojekt — udvid til portefølje, koncern eller kommune." },
        ].map((c) => (
          <div key={c.t} className="card-soft p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{c.icon}</div>
            <div className="mt-3 font-semibold">{c.t}</div>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="container-page py-12">
        <div className="surface-beige rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold">Modulerne i platformen</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              { to: "/platform/smartconnect", t: "SmartConnect+", d: "Dataindsamling og realtidsmonitorering." },
              { to: "/platform/decisionsiq", t: "DecisionsIQ", d: "AI-analyse og beslutningsstøtte." },
              { to: "/platform/esg-ledger", t: "ESG Ledger", d: "Audit-klar dokumentation." },
              { to: "/platform/impact-exchange", t: "Impact Exchange", d: "Verificeret impact og fremtidens marked." },
            ].map((m) => (
              <Link key={m.to} to={m.to} className="card-soft p-5 bg-card hover:border-primary/40 transition">
                <div className="font-semibold">{m.t}</div>
                <p className="text-sm text-muted-foreground mt-1">{m.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
