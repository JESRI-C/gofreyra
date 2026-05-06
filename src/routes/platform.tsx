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

      {/* FOUR LAYERS — fra rådata til dokumentation */}
      <section className="bg-background">
        <div className="container-page py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono tracking-[0.18em] text-primary uppercase">Fra rådata til dokumentation</div>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-deep">Platformens fire lag gør data brugbar.</h2>
              <p className="mt-5 text-lg text-foreground/75 max-w-3xl">
                GoFreyra er bygget som en sammenhængende platform, hvor data fra virkeligheden kan indsamles, struktureres, analyseres og omsættes til dokumentation. Det betyder, at ESG-team, drift og ledelse arbejder ud fra samme datagrundlag.
              </p>
            </div>
            {/* mini datastream illustration */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="card-soft bg-card p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Datastream · live</div>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
                <svg viewBox="0 0 240 80" className="mt-3 w-full h-16">
                  <defs>
                    <linearGradient id="ds-fill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#2BC48A" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#2BC48A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 55 L30 48 L60 52 L90 32 L120 38 L150 22 L180 28 L210 14 L240 20 L240 80 L0 80 Z" fill="url(#ds-fill)" />
                  <path d="M0 55 L30 48 L60 52 L90 32 L120 38 L150 22 L180 28 L210 14 L240 20" fill="none" stroke="#2BC48A" strokeWidth="1.75" />
                </svg>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  {[{l:"Kilder",v:"14"},{l:"Punkter",v:"3,2k"},{l:"Audit",v:"OK"}].map(s=>(
                    <div key={s.l} className="rounded-lg bg-[#F5F1E8] py-2">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{s.l}</div>
                      <div className="text-sm font-semibold text-brand-deep">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Four layers */}
          <div className="mt-14 relative">
            <div className="hidden lg:block absolute top-[58px] left-[8%] right-[8%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  i: <Network className="w-6 h-6" />, n: "Lag 1", t: "Dataindsamling",
                  d: "GoFreyra kan samle data fra sensorer, feltregistreringer, satellitdata, dronedata, vejrdata, driftsdata og manuelle input. Det gør det muligt at starte med de datakilder, organisationen allerede har, og udvide gradvist.",
                  ex: ["IoT-sensorer", "Feltobservationer", "Satellit- og dronedata", "Driftsdata", "Manuelle registreringer"],
                },
                {
                  i: <ShieldCheck className="w-6 h-6" />, n: "Lag 2", t: "Datavalidering",
                  d: "Data bliver først værdifuld, når den kan forstås og bruges. GoFreyra strukturerer datakilder, tilføjer kildeinformation, tidsstempler og kvalitetsspor, så data kan indgå i et samlet dokumentationsflow.",
                  ex: ["Kildeangivelse", "Tidsstempling", "Datakvalitet", "Strukturering", "Sporbarhed"],
                },
                {
                  i: <Brain className="w-6 h-6" />, n: "Lag 3", t: "Analyse og indsigt",
                  d: "Med DecisionsIQ kan platformen hjælpe med at finde mønstre, afvigelser, risici og mulige handlinger. AI-laget skal ikke erstatte faglig vurdering, men gøre det lettere at se, hvor der bør handles først.",
                  ex: ["Afvigelser", "Risikoindikatorer", "Trendanalyse", "AI-anbefalinger", "Beslutningsstøtte"],
                },
                {
                  i: <FileText className="w-6 h-6" />, n: "Lag 4", t: "Dokumentation og handling",
                  d: "Når data, analyse og kontekst samles, bliver det muligt at skabe bedre ESG-dokumentation, audit trails, rapportstatus og projektopfølgning. Målet er at gøre bæredygtighed lettere at styre og lettere at forklare.",
                  ex: ["ESG-dokumentation", "Audit trail", "Rapporteksport", "Impact-overblik", "Ledelsesrapportering"],
                },
              ].map((l) => (
                <div key={l.t} className="card-soft p-7 bg-card relative shadow-sm hover:shadow-elegant transition-all flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#2BC48A]/12 text-brand-deep grid place-items-center border border-primary/20 relative z-10">{l.i}</div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-primary px-2 py-1 rounded-full bg-primary/10">{l.n}</span>
                  </div>
                  <div className="mt-5 font-semibold text-xl text-brand-deep">{l.t}</div>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{l.d}</p>
                  <div className="mt-5 pt-5 border-t border-border space-y-2">
                    {l.ex.map((e) => (
                      <div key={e} className="flex items-center gap-2 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="font-mono text-foreground/75">{e}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-sm text-foreground/65 max-w-2xl">
            GoFreyra kan starte med få datakilder og udvides, når organisationens behov og datamodenhed vokser.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/dashboard">Se dashboardet <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/book-demo">Book demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PILOT TIMELINE — Sådan starter et pilotforløb */}
      <section className="bg-background">
        <div className="container-page py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono tracking-[0.18em] text-primary uppercase">Pilotklar platform</div>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-deep">Start småt. Byg datagrundlaget rigtigt.</h2>
              <p className="mt-5 text-lg text-foreground/75 max-w-3xl">
                Et GoFreyra-pilotforløb kan starte med ét naturområde, én afdeling, én lokation eller ét dokumentationsbehov. Målet er ikke at bygge alt på én gang, men at skabe et brugbart datagrundlag, der hurtigt kan testes i praksis.
              </p>

              {/* Timeline */}
              <ol className="mt-12 relative space-y-5">
                <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />
                {[
                  { t: "Afklar mål og databehov", d: "Vi starter med at forstå, hvad I skal dokumentere, hvem der skal bruge data, og hvilke beslutninger platformen skal understøtte.", out: ["Målsætning", "Databehov", "Første use case"] },
                  { t: "Vælg område eller use case", d: "Pilotprojektet afgrænses til et konkret område, projekt eller datasæt. Det kan være biodiversitet, vand, jord, CO₂, drift, rapportering eller ESG-dokumentation.", out: ["Pilotområde", "Datakilder", "Succeskriterier"] },
                  { t: "Forbind datakilder", d: "Eksisterende data kan kobles på først. Sensorer, feltdata, satellitdata eller manuelle registreringer kan tilføjes efter behov.", out: ["Datakildeoversigt", "Integrationer", "Første datastruktur"] },
                  { t: "Byg dashboard og dokumentationsflow", d: "Data omsættes til et visuelt overblik, så ESG-team, drift og ledelse kan følge status, se afvigelser og forstå dokumentationsgrundlaget.", out: ["Dashboard", "Dokumentationsstatus", "Audit trail-logik"] },
                  { t: "Evaluer, lær og skaler", d: "Når pilotforløbet er testet, kan løsningen udvides til flere områder, datakilder, moduler eller rapporteringsbehov.", out: ["Læringsrapport", "Skaleringstrin", "Næste roadmap"] },
                ].map((s, i) => (
                  <li key={s.t} className="relative pl-16">
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-mono text-sm shadow-md ring-4 ring-background">{String(i + 1).padStart(2, "0")}</div>
                    <div className="card-soft bg-card p-6 shadow-sm hover:shadow-elegant transition-all">
                      <div className="font-semibold text-lg text-brand-deep">Trin {i + 1}: {s.t}</div>
                      <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">Output</div>
                        <div className="flex flex-wrap gap-2">
                          {s.out.map((o) => (
                            <span key={o} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-brand-deep border border-primary/20">{o}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sidekort */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="card-soft bg-card p-7 shadow-sm border-primary/30">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary px-2 py-1 rounded-full bg-primary/10">Pilotklar</span>
                  </div>
                  <div className="mt-4 text-2xl font-semibold text-brand-deep">Pilot på 2-4 uger</div>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                    Et første pilotforløb kan startes med få datakilder og et afgrænset formål. Det vigtigste er at få datagrundlaget i gang og teste, hvor platformen skaber mest værdi.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {["Start med ét område", "Brug eksisterende data", "Udvid med sensorer senere", "Skab første dashboard", "Test dokumentationsflow"].map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-foreground/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-2.5">
                    <Button asChild size="lg" className="rounded-full w-full">
                      <Link to="/book-demo">Tal med os om pilot <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full w-full">
                      <Link to="/book-demo">Book demo</Link>
                    </Button>
                  </div>
                </div>

                {/* Mini projekt-/dashboardkort */}
                <div className="card-soft bg-card p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Pilot · status</div>
                    <span className="text-[10px] font-mono text-primary">Uge 2/4</span>
                  </div>
                  <div className="mt-3 font-semibold text-brand-deep">Naturområde Nord</div>
                  <div className="mt-3 space-y-2.5">
                    {[
                      { l: "Datakilder forbundet", v: 80 },
                      { l: "Dashboard bygget", v: 55 },
                      { l: "Audit trail aktiv", v: 30 },
                    ].map((p) => (
                      <div key={p.l}>
                        <div className="flex justify-between text-xs mb-1"><span className="text-foreground/70">{p.l}</span><span className="font-mono text-muted-foreground">{p.v}%</span></div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${p.v}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* TEAMS — Én platform, tre forskellige behov */}
      <section className="surface-beige">
        <div className="container-page py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-xs font-mono tracking-[0.18em] text-primary uppercase">Samme data — flere brugere</div>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-deep">GoFreyra samler ESG-team, drift og ledelse om samme datagrundlag.</h2>
            <p className="mt-5 text-lg text-foreground/75">
              Når bæredygtighedsdata ligger spredt, arbejder teams ofte ud fra forskellige versioner af sandheden. GoFreyra samler datagrundlaget, så organisationen kan se status, forstå risici og dokumentere fremdrift på tværs af funktioner.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "ESG", i: <ShieldCheck className="w-6 h-6" />,
                role: "For ESG-teamet",
                t: "Mindre manuel indsamling. Stærkere dokumentation.",
                d: "ESG-teamet får et samlet sted at arbejde med miljødata, dokumentationsstatus og rapporteringsgrundlag. Det reducerer afhængigheden af manuelle regneark og gør det lettere at følge, hvilke data der er klar, mangler eller skal valideres.",
                b: ["Samlet overblik over ESG-relevante datakilder", "Dokumentationsstatus på tværs af projekter", "Audit trail fra datakilde til rapport", "Bedre grundlag til CSRD og ESG-rapportering", "Mindre manuelt opfølgningsarbejde"],
              },
              {
                tag: "Drift", i: <Gauge className="w-6 h-6" />,
                role: "For driften",
                t: "Data tættere på virkeligheden.",
                d: "Drift og projektteams kan følge miljødata, sensorer, områder og afvigelser i et operationelt dashboard. Det gør det lettere at reagere tidligere og arbejde mere datadrevet i hverdagen.",
                b: ["Live status på områder og datakilder", "Sensorstatus og advarsler", "Kortbaseret monitorering", "Overblik over ændringer og afvigelser", "Bedre kobling mellem drift og dokumentation"],
              },
              {
                tag: "Ledelse", i: <ClipboardCheck className="w-6 h-6" />,
                role: "For ledelsen",
                t: "Et bedre beslutningsgrundlag.",
                d: "Ledelsen får et samlet overblik over fremdrift, risici, dokumentation og impact. Det gør bæredygtighedsarbejdet lettere at styre, forklare og prioritere.",
                b: ["Status på ESG og impact", "Risici og anbefalede handlinger", "Rapportklar dokumentation", "Overblik over projekter og fremdrift", "Klarere grundlag for investeringer og prioriteringer"],
              },
            ].map((c) => (
              <div key={c.role} className="card-soft p-7 bg-card shadow-sm hover:shadow-elegant transition-all flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-brand-deep grid place-items-center border border-primary/20">{c.i}</div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">{c.tag}</span>
                </div>
                <div className="mt-5 text-xs font-mono uppercase tracking-wider text-muted-foreground">{c.role}</div>
                <div className="mt-1.5 text-xl font-semibold text-brand-deep leading-snug">{c.t}</div>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.d}</p>
                <ul className="mt-5 pt-5 border-t border-border space-y-2.5">
                  {c.b.map((x) => (
                    <li key={x} className="flex gap-2.5 items-start text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><span className="text-foreground/80">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sammenligningsboks */}
          <div className="mt-14 card-soft bg-card overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="p-7 md:p-8">
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Før GoFreyra</div>
                <div className="mt-2 text-lg font-semibold text-foreground/80">Spredt data, manuel opfølgning</div>
                <ul className="mt-5 space-y-2.5">
                  {["Data i siloer", "Manuelle rapporter", "Uklare kilder", "Sent overblik", "Svær dokumentation"].map((x) => (
                    <li key={x} className="flex items-start gap-2.5 text-sm text-foreground/70">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />{x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-7 md:p-8 bg-primary/5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary">Med GoFreyra</span>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="mt-2 text-lg font-semibold text-brand-deep">Ét datagrundlag, sporbar dokumentation</div>
                <ul className="mt-5 space-y-2.5">
                  {["Ét samlet datagrundlag", "Sporbare datapunkter", "Live dashboards", "Audit trail", "Beslutningsklar dokumentation"].map((x) => (
                    <li key={x} className="flex items-start gap-2.5 text-sm">
                      <BadgeCheck className="mt-0.5 w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/85">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Afsluttende grøn CTA-boks */}
          <div className="mt-12 rounded-3xl bg-brand-deep text-primary-foreground p-8 md:p-10 grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight">Se hvordan GoFreyra passer ind i jeres organisation.</h3>
              <p className="mt-3 text-white/80 max-w-xl">
                På en demo gennemgår vi jeres datakilder, jeres dokumentationsbehov og hvor et første pilotforløb giver mest mening.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild className="rounded-full h-11 px-6 bg-white text-brand-deep hover:bg-white/90"><Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-5 bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"><Link to="/platform">Se platformen</Link></Button>
            </div>
          </div>
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
