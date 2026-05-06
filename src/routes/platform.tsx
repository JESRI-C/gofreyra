import { createFileRoute, Link } from "@tanstack/react-router";
import { Database, Brain, ShieldCheck, Globe2, ArrowRight, LayoutDashboard, Plug, Lock, FileText, Layers, Activity, Users } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { Button } from "@/components/ui/button";
import { buildHead } from "@/components/site/SEO";
import { FaqSection, FlowSection, GreenCTA, MicroStrip, SectionHeader, CardGrid } from "@/components/site/sections";

const FAQ = [
  { q: "Hvad er GoFreyra Platform?", a: "Platformen, hvor data bliver til indsigt, dokumentation og handling. Den binder dataindsamling, validering, AI-analyse og audit trail sammen i ét system." },
  { q: "Hvad er forskellen på GoFreyra og Freyra?", a: "Freyra er brandet. GoFreyra er platformen. ISEN er natur- og impactlaget i platformen." },
  { q: "Kan vi starte med ét modul?", a: "Ja. Modulerne deler datagrundlag, men kan rulles ud trinvist." },
  { q: "Hvilke integrationer er understøttet?", a: "IoT-platforme, ERP, dataloggere, vejrdata, satellit-API'er, ESG-rapporteringsværktøjer og fillager. Vi tilpasser efter setup." },
  { q: "Er platformen GDPR-compliant?", a: "Ja. Data hostes inden for EU og roller, adgang og logning er bygget til både GDPR og audit." },
];

export const Route = createFileRoute("/platform")({
  head: () => buildHead({
    title: "GoFreyra Platform — Fra rådata til revisionsklar dokumentation",
    description: "GoFreyra Platform binder sensorer, feltdata, driftsdata, AI-analyse og ESG-dokumentation sammen i ét system. Modulær SaaS for ESG-team, drift og ledelse.",
    path: "/platform",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
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
              GoFreyra Platform binder sensorer, feltdata, driftsdata, AI-analyse og ESG-dokumentation sammen i ét system, så ESG-team, drift og ledelse arbejder i samme datagrundlag.
            </p>
            <div className="mt-7 flex gap-3">
              <Button asChild className="rounded-full h-11 px-5"><Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-5"><Link to="/dashboard">Se dashboardet</Link></Button>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <MicroStrip items={["Modulær arkitektur", "EU-hosting", "Audit trail på alt", "Bygget til CSRD og naturrapportering"]} />

      {/* FOUR LAYERS */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Platformens fire lag" title="Sådan er GoFreyra bygget op." body="Fire lag, der hænger sammen. Intet datapunkt rejser uden kilde, tidsstempel og kontekst." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: <Database className="w-5 h-5" />, n: "Lag 1", t: "Dataindsamling", d: "Sensorer, satellitdata, droner, feltregistreringer, driftsdata og manuelle input." },
            { i: <ShieldCheck className="w-5 h-5" />, n: "Lag 2", t: "Datavalidering", d: "Rensning, strukturering, tidsstempling, kildeangivelse og kvalitetskontrol." },
            { i: <Brain className="w-5 h-5" />, n: "Lag 3", t: "Analyse og indsigt", d: "AI-understøttet mønstergenkendelse, afvigelser, risici og anbefalinger." },
            { i: <FileText className="w-5 h-5" />, n: "Lag 4", t: "Dokumentation og handling", d: "Audit trail, rapportstatus, projektopfølgning, eksport og ledelsesoverblik." },
          ].map((l) => (
            <div key={l.t} className="card-soft p-6 bg-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{l.i}</div>
              <div className="text-xs font-mono text-primary mt-3">{l.n}</div>
              <div className="font-semibold">{l.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{l.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IN PRACTICE */}
      <section className="surface-beige">
        <div className="container-page py-20">
          <SectionHeader eyebrow="Det betyder platformen i praksis" title="Tre roller. Samme datagrundlag." />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { i: <ShieldCheck className="w-5 h-5" />, t: "For ESG-teamet", d: "Mindre manuel indsamling, bedre dokumentation, lettere rapportflow. Hver KPI kan spores til kilden." },
              { i: <Activity className="w-5 h-5" />, t: "For driften", d: "Bedre indsigt i miljødata, ressourceforbrug, områder og afvigelser — direkte i det daglige arbejde." },
              { i: <Users className="w-5 h-5" />, t: "For ledelsen", d: "Ét samlet overblik over status, risici, dokumentation og fremdrift på tværs af projekter og afdelinger." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-7 bg-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{c.i}</div>
                <div className="mt-4 text-xl font-semibold">{c.t}</div>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE FLOW */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Sådan hænger modulerne sammen" title="Data flyder ét sted hen — og ud i den dokumentation, I skal bruge." />
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

      {/* RAW TO REPORT */}
      <FlowSection
        beige
        eyebrow="Fra rådata til rapport"
        title="Sådan bevæger data sig gennem platformen."
        steps={[
          { n: "01", t: "Datakilde", d: "Sensor, felt, satellit, drift eller manuelt input." },
          { n: "02", t: "Validering", d: "Strukturering, tidsstempel og kvalitetstjek." },
          { n: "03", t: "Analyse", d: "AI finder mønstre, afvigelser og risici." },
          { n: "04", t: "Dashboard", d: "Status, indikatorer og prioriteret handling." },
          { n: "05", t: "Audit trail & rapport", d: "Sporbar dokumentation og eksport." },
        ]}
      />

      {/* CAPABILITIES */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Kapabiliteter" title="Konkrete evner — ikke buzzwords." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <Database className="w-5 h-5" />, t: "Datakilder uden bøvl", d: "Sensorer, drone, satellit, felt og driftssystemer i ét struktureret lag — kan kobles gradvist." },
            { icon: <Brain className="w-5 h-5" />, t: "AI-analyse med forklaring", d: "Hver anbefaling er knyttet til de underliggende datapunkter, så I kan stille kvalificerede spørgsmål." },
            { icon: <ShieldCheck className="w-5 h-5" />, t: "Audit trail på alt", d: "Kilde, tidsstempel og ændringshistorik på hvert tal i rapporten." },
            { icon: <LayoutDashboard className="w-5 h-5" />, t: "Operationelt dashboard", d: "Ét overblik for ESG-team, drift, projektledelse og ledelse." },
            { icon: <Plug className="w-5 h-5" />, t: "Integrationer", d: "Forbind eksisterende IoT-platforme, ERP, dataloggere og rapporteringsværktøjer." },
            { icon: <Lock className="w-5 h-5" />, t: "Sikkerhed og rollestyring", d: "EU-hosting, GDPR og adgangsstyring til ESG, drift, revisorer og partnere." },
            { icon: <Globe2 className="w-5 h-5" />, t: "Impact-modul", d: "Klar til natur- og klimarapportering og kommende biodiversitetsmarkeder." },
            { icon: <Layers className="w-5 h-5" />, t: "Pilot på 2-4 uger", d: "Start med ét datasæt eller ét område — udvid herfra." },
            { icon: <FileText className="w-5 h-5" />, t: "Rapporteksport", d: "Træk audit-klar dokumentation direkte til revision, ledelse og myndigheder." },
            { icon: <Activity className="w-5 h-5" />, t: "Projektstyring", d: "Følg fremdrift på dokumentations- og dataopgaver pr. projekt." },
            { icon: <Database className="w-5 h-5" />, t: "Datahistorik", d: "Bevar tidligere versioner af data, beregninger og rapporter." },
            { icon: <Users className="w-5 h-5" />, t: "Brugervenlig visning", d: "Bygget også til ikke-tekniske brugere — felt, drift og ledelse." },
          ].map((c) => (
            <div key={c.t} className="card-soft p-6 bg-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{c.icon}</div>
              <div className="mt-3 font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PILOT EXAMPLE */}
      <CardGrid
        beige
        eyebrow="Eksempel på pilot"
        title="Et pilotprojekt kan starte med ét område."
        subtitle="Eksempelvis et naturområde, en produktionslokation, en kommuneindsats eller et driftsområde. Her kobles få centrale datakilder på, og platformen bruges til at skabe overblik, dokumentation og læring."
        cols={4}
        cards={[
          { t: "Naturområde", d: "Sensorer, feltdata og satellit til biodiversitet og vand." },
          { t: "Produktion", d: "Drifts-, energi- og emissionsdata koblet til ESG." },
          { t: "Kommuneindsats", d: "Klimatilpasning og naturgenopretning dokumenteret over tid." },
          { t: "Driftsområde", d: "Ressourceforbrug og afvigelser i ét overblik." },
        ]}
      />

      <GreenCTA title="Vil I se, hvordan jeres data kan samles?" subtitle="Book en demo eller tal med os om et pilotforløb." secondary={{ to: "/kontakt", label: "Tal med os om pilot" }} />

      <FaqSection items={FAQ} />

      <CTASection />
    </PageLayout>
  );
}
