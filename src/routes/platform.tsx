import { createFileRoute, Link } from "@tanstack/react-router";
import { Database, Brain, ShieldCheck, Globe2, ArrowRight, LayoutDashboard, Plug, Lock, FileText, Layers, Activity, Users, Satellite, Cpu, LineChart, BadgeCheck, Sparkles, Workflow, Map, Leaf, ClipboardCheck, Rocket, Target, Network, Gauge } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { Button } from "@/components/ui/button";
import { buildHead } from "@/components/site/SEO";
import { FaqSection, GreenCTA, MicroStrip, SectionHeader } from "@/components/site/sections";
import type { ReactNode } from "react";

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

/* ---------- HERO ---------- */
function HeroVisual() {
  return (
    <div className="relative">
      {/* Soft glow */}
      <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,_color-mix(in_oklab,_var(--primary)_15%,_transparent),_transparent_70%)] blur-2xl pointer-events-none" />

      {/* Dataflow line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 600 460" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flow" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M30 80 C 180 60, 220 240, 360 230 S 560 380, 580 400" stroke="url(#flow)" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />
      </svg>

      <div className="relative scale-100 md:scale-105 origin-center">
        <DashboardMockup />
      </div>

      {/* Floating cards */}
      <div className="absolute -top-3 -left-3 md:-left-8 card-soft bg-card p-3 pr-4 shadow-lg hidden sm:flex items-center gap-2.5 animate-fade-in">
        <div className="w-8 h-8 rounded-md bg-primary/10 grid place-items-center text-brand-deep"><Satellite className="w-4 h-4" /></div>
        <div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">Datakilde</div>
          <div className="text-xs font-semibold">Sensor · live</div>
        </div>
        <span className="ml-1 w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>

      <div className="absolute top-1/3 -right-2 md:-right-10 card-soft bg-card p-3 pr-4 shadow-lg hidden sm:flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-primary/10 grid place-items-center text-brand-deep"><Brain className="w-4 h-4" /></div>
        <div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">AI-analyse</div>
          <div className="text-xs font-semibold">Afvigelse fundet</div>
        </div>
      </div>

      <div className="absolute -bottom-4 left-6 md:-left-6 card-soft bg-card p-3 pr-4 shadow-lg hidden sm:flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-primary/10 grid place-items-center text-brand-deep"><BadgeCheck className="w-4 h-4" /></div>
        <div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">Dokumentation</div>
          <div className="text-xs font-semibold">Audit trail · OK</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Module card ---------- */
function ModuleCard({ icon, n, t, to, d, bullets }: { icon: ReactNode; n: string; t: string; to: string; d: string; bullets: string[] }) {
  return (
    <div className="card-soft p-7 bg-card group hover:border-primary/40 hover:shadow-elegant transition-all flex flex-col">
      <div className="flex items-center justify-between">
        <div className="w-11 h-11 rounded-xl bg-primary/10 text-brand-deep grid place-items-center">{icon}</div>
        <span className="text-xs font-mono text-primary">{n}</span>
      </div>
      <div className="mt-4 text-xl font-semibold">{t}</div>
      <p className="mt-2 text-sm text-muted-foreground">{d}</p>
      <ul className="mt-4 space-y-1.5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 items-start text-sm">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="text-foreground/80">{b}</span>
          </li>
        ))}
      </ul>
      <Link to={to} className="mt-5 inline-flex items-center justify-center rounded-full h-10 px-4 text-sm font-medium bg-primary/10 text-brand-deep hover:bg-primary hover:text-primary-foreground transition w-full sm:w-auto sm:self-start">
        Se modulet <ArrowRight className="ml-1.5 w-4 h-4" />
      </Link>
    </div>
  );
}

/* ---------- Capability card ---------- */
function CapCard({ icon, t, d, badge, span }: { icon: ReactNode; t: string; d: string; badge?: string; span?: boolean }) {
  return (
    <div className={`card-soft p-6 bg-card relative ${span ? "lg:col-span-2" : ""}`}>
      {badge && (
        <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wide px-2 py-0.5 rounded-full bg-primary/15 text-brand-deep border border-primary/30">{badge}</span>
      )}
      <div className="w-11 h-11 rounded-full bg-primary/12 text-brand-deep grid place-items-center ring-4 ring-primary/5">{icon}</div>
      <div className="mt-4 font-semibold">{t}</div>
      <p className="mt-2 text-sm text-muted-foreground">{d}</p>
    </div>
  );
}

function PlatformPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="container-page py-16 md:py-28 grid lg:grid-cols-[1.05fr_1.15fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="eyebrow">Platformen</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Én platform — fra rådata til revisionsklar dokumentation.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              GoFreyra Platform binder sensorer, feltdata, driftsdata, AI-analyse og ESG-dokumentation sammen i ét system, så ESG-team, drift og ledelse arbejder i samme datagrundlag.
            </p>
            <div className="mt-7 flex gap-3 flex-wrap">
              <Button asChild className="rounded-full h-11 px-6"><Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-5"><Link to="/dashboard">Se dashboardet</Link></Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs md:text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-primary" /> Pilotklar</span>
              <span className="inline-flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5 text-primary" /> ESG-orienteret</span>
              <span className="inline-flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-primary" /> Bygget til real-world data</span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <MicroStrip items={["Modulær arkitektur", "EU-hosting", "Audit trail på alt", "Bygget til CSRD og naturrapportering"]} />

      {/* MODULES */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Modulerne" title="Fire moduler. Ét datagrundlag." body="Data flyder ét sted hen — og ud i den dokumentation, I skal bruge." />

        {/* mini flow */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-mono text-muted-foreground">
          {["Data", "Analyse", "Dokumentation", "Impact"].map((s, i) => (
            <span key={s} className="inline-flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-primary/10 text-brand-deep border border-primary/20">{s}</span>
              {i < 3 && <ArrowRight className="w-4 h-4 text-primary/60" />}
            </span>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <ModuleCard
            icon={<Plug className="w-5 h-5" />}
            n="01"
            t="SmartConnect+"
            to="/platform/smartconnect"
            d="Indsamler data fra sensorer, drone, satellit, felt og driftsystemer."
            bullets={["Edge-ready datafangst", "Forbind IoT, ERP og fillager", "Strukturer ustruktureret data"]}
          />
          <ModuleCard
            icon={<Brain className="w-5 h-5" />}
            n="02"
            t="DecisionsIQ"
            to="/platform/decisionsiq"
            d="Analyserer data og leverer mønstre, risici og konkrete anbefalinger."
            bullets={["Forklarbar AI", "Anomali- og risikoscoring", "Prioriterede handlinger"]}
          />
          <ModuleCard
            icon={<ShieldCheck className="w-5 h-5" />}
            n="03"
            t="ESG Ledger"
            to="/platform/esg-ledger"
            d="Dokumenterer hvert datapunkt med kilde, tidsstempel og audit trail."
            bullets={["Sporbarhed til kilden", "Versionering og historik", "Klar til revision og CSRD"]}
          />
          <ModuleCard
            icon={<Globe2 className="w-5 h-5" />}
            n="04"
            t="Impact Exchange"
            to="/platform/impact-exchange"
            d="Synliggør verificeret effekt for partnere, markeder og rapportering."
            bullets={["Naturprojekter og biodiversitet", "Verificerbar impact-data", "Klar til kommende markeder"]}
          />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="surface-beige">
        <div className="container-page py-20">
          <SectionHeader eyebrow="Kapabiliteter" title="Konkrete evner — ikke buzzwords." />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            <CapCard icon={<Database className="w-5 h-5" />} t="Datakilder uden bøvl" d="Sensorer, drone, satellit, felt og driftssystemer i ét struktureret lag — kan kobles gradvist." badge="Pilotklar" span />
            <CapCard icon={<Brain className="w-5 h-5" />} t="AI-analyse med forklaring" d="Hver anbefaling er knyttet til de underliggende datapunkter, så I kan stille kvalificerede spørgsmål." badge="Forklarbar" />
            <CapCard icon={<ShieldCheck className="w-5 h-5" />} t="Audit trail på alt" d="Kilde, tidsstempel og ændringshistorik på hvert tal i rapporten." badge="Audit" />
            <CapCard icon={<LayoutDashboard className="w-5 h-5" />} t="Operationelt dashboard" d="Ét overblik for ESG-team, drift, projektledelse og ledelse." />
            <CapCard icon={<Plug className="w-5 h-5" />} t="Integrationer" d="Forbind eksisterende IoT-platforme, ERP, dataloggere og rapporteringsværktøjer." />
            <CapCard icon={<Lock className="w-5 h-5" />} t="Sikkerhed og rollestyring" d="EU-hosting, GDPR og adgangsstyring til ESG, drift, revisorer og partnere." badge="EU-hosting" />
            <CapCard icon={<Globe2 className="w-5 h-5" />} t="Impact-modul" d="Klar til natur- og klimarapportering og kommende biodiversitetsmarkeder." />
            <CapCard icon={<Layers className="w-5 h-5" />} t="Pilot på 2-4 uger" d="Start med ét datasæt eller ét område — udvid herfra." badge="Hurtig start" span />
            <CapCard icon={<FileText className="w-5 h-5" />} t="Rapporteksport" d="Træk audit-klar dokumentation direkte til revision, ledelse og myndigheder." />
            <CapCard icon={<Activity className="w-5 h-5" />} t="Projektstyring" d="Følg fremdrift på dokumentations- og dataopgaver pr. projekt." />
            <CapCard icon={<Database className="w-5 h-5" />} t="Datahistorik" d="Bevar tidligere versioner af data, beregninger og rapporter." />
            <CapCard icon={<Users className="w-5 h-5" />} t="Brugervenlig visning" d="Bygget også til ikke-tekniske brugere — felt, drift og ledelse." />
          </div>
        </div>
      </section>

      {/* FOUR LAYERS — horizontal visual */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Arkitektur" title="Platformens fire lag." body="Fire lag, der hænger sammen. Intet datapunkt rejser uden kilde, tidsstempel og kontekst." />
        <div className="mt-12 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-[42px] left-[8%] right-[8%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { i: <Network className="w-5 h-5" />, n: "Lag 1", t: "Dataindsamling", d: "Sensorer, satellit, droner, feltregistreringer og driftsdata.", ex: ["Temperatur · 14,2 °C", "Vandstand · 0,82 m", "NDVI · 0,71"] },
              { i: <ShieldCheck className="w-5 h-5" />, n: "Lag 2", t: "Datavalidering", d: "Rensning, strukturering, tidsstempling og kvalitetskontrol.", ex: ["Kilde verificeret", "Tidsstempel · UTC", "Outlier flag · 2"] },
              { i: <Brain className="w-5 h-5" />, n: "Lag 3", t: "Analyse og indsigt", d: "AI-understøttet mønstergenkendelse, risici og anbefalinger.", ex: ["Afvigelse · medium", "Trend · stigende", "Risiko · 0,34"] },
              { i: <FileText className="w-5 h-5" />, n: "Lag 4", t: "Dokumentation", d: "Audit trail, rapportstatus, eksport og ledelsesoverblik.", ex: ["Audit trail · OK", "CSRD-felt · klar", "Eksport · PDF/CSV"] },
            ].map((l, i) => (
              <div key={l.t} className="card-soft p-6 bg-card relative">
                <div className="w-12 h-12 rounded-full bg-card border-2 border-primary/30 text-brand-deep grid place-items-center mx-auto lg:mx-0 relative z-10">{l.i}</div>
                <div className="text-xs font-mono text-primary mt-3">{l.n}</div>
                <div className="font-semibold text-lg">{l.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{l.d}</p>
                <div className="mt-4 pt-4 border-t border-border space-y-1.5">
                  {l.ex.map((e) => (
                    <div key={e} className="text-xs font-mono text-foreground/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />{e}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILOT TIMELINE */}
      <section className="surface-beige">
        <div className="container-page py-20">
          <SectionHeader eyebrow="Pilotforløb" title="Sådan ser et pilotforløb ud." body="Fem trin — typisk på 2-4 uger. Vi starter med ét område og bygger op derfra." />
          <ol className="mt-12 relative grid md:grid-cols-5 gap-6">
            <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-0.5 bg-primary/25" />
            {[
              { i: <Target className="w-4 h-4" />, t: "Afklar databehov", d: "Hvilke KPI'er, rapporter eller områder skal i fokus?" },
              { i: <Map className="w-4 h-4" />, t: "Vælg use case", d: "Et naturområde, en lokation eller en driftsproces." },
              { i: <Plug className="w-4 h-4" />, t: "Forbind datakilder", d: "Sensorer, ERP, dataloggere, fillager og felt." },
              { i: <LayoutDashboard className="w-4 h-4" />, t: "Byg dashboard", d: "Indikatorer, audit trail og handlingsoverblik." },
              { i: <Rocket className="w-4 h-4" />, t: "Evaluer og skaler", d: "Læring tilbage i platformen — næste område kobles på." },
            ].map((s, i) => (
              <li key={s.t} className="relative">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-mono text-sm relative z-10 mx-auto md:mx-0">{i + 1}</div>
                <div className="mt-4 card-soft bg-card p-5">
                  <div className="flex items-center gap-2 text-brand-deep">{s.i}<span className="font-semibold">{s.t}</span></div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TEAMS */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Roller" title="Hvad betyder det for forskellige teams?" body="Samme datagrundlag — tre forskellige indgange." />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { i: <ShieldCheck className="w-5 h-5" />, t: "ESG-teamet", d: "Mindre manuel indsamling, bedre dokumentation og lettere rapportflow.", b: ["Sporbar dokumentation", "Klar til CSRD og revision", "Færre regneark"] },
            { i: <Gauge className="w-5 h-5" />, t: "Driften", d: "Bedre indsigt i miljødata, ressourceforbrug og afvigelser i hverdagen.", b: ["Live-status på områder", "Tidlig varsling om afvigelser", "Konkrete handlingsforslag"] },
            { i: <ClipboardCheck className="w-5 h-5" />, t: "Ledelsen", d: "Ét samlet overblik over status, risici og fremdrift på tværs af projekter.", b: ["Beslutningsklart overblik", "Risikoindikatorer", "Eksport til bestyrelse"] },
          ].map((c) => (
            <div key={c.t} className="card-soft p-7 bg-card">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-brand-deep grid place-items-center">{c.i}</div>
              <div className="mt-4 text-xl font-semibold">{c.t}</div>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
              <ul className="mt-4 space-y-2">
                {c.b.map((x) => (
                  <li key={x} className="flex gap-2 items-start text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="text-foreground/80">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA — deep green */}
      <section className="container-page my-16">
        <div className="relative rounded-3xl overflow-hidden bg-brand-deep text-primary-foreground p-8 md:p-12 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_color-mix(in_oklab,_var(--primary)_30%,_transparent),_transparent_60%)] pointer-events-none" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" /> Pilotklar
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">Klar til at se det på jeres data?</h2>
            <p className="mt-4 text-white/80 max-w-lg">
              Vi gennemgår jeres datakilder, dokumentationsbehov og muligheder for et første pilotforløb.
            </p>
            <div className="mt-7 flex gap-3 flex-wrap">
              <Button asChild className="rounded-full h-11 px-6 bg-white text-brand-deep hover:bg-white/90"><Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-5 bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"><Link to="/kontakt">Tal med os om pilot</Link></Button>
            </div>
          </div>

          {/* Mini dashboard */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl bg-white/8 border border-white/15 backdrop-blur-sm p-5 shadow-2xl">
              <div className="flex items-center justify-between text-xs text-white/70 font-mono">
                <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> GoFreyra · Live</span>
                <span>v1.0</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[{ l: "Datakilder", v: "12" }, { l: "Audit OK", v: "98%" }, { l: "Risici", v: "3" }].map((k) => (
                  <div key={k.l} className="rounded-lg bg-white/8 border border-white/10 p-3">
                    <div className="text-[10px] uppercase tracking-wide text-white/60 font-mono">{k.l}</div>
                    <div className="mt-1 text-2xl font-bold">{k.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-white/60 font-mono">
                  <span>Trend · 30d</span><span>NDVI</span>
                </div>
                <svg viewBox="0 0 200 60" className="mt-2 w-full h-14">
                  <polyline fill="none" stroke="var(--primary)" strokeWidth="2" points="0,45 20,40 40,42 60,30 80,32 100,22 120,26 140,18 160,20 180,12 200,14" />
                  <polyline fill="var(--primary)" fillOpacity="0.15" stroke="none" points="0,45 20,40 40,42 60,30 80,32 100,22 120,26 140,18 160,20 180,12 200,14 200,60 0,60" />
                </svg>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/80">
                <BadgeCheck className="w-4 h-4 text-primary" /> Audit trail dokumenteret
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <CTASection />
    </PageLayout>
  );
}
