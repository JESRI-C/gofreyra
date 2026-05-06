import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Database, Brain, ShieldCheck, Globe2, Activity, FileCheck, AlertTriangle, Layers, Workflow } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import coastal from "@/assets/project-coastal.jpg";
import stream from "@/assets/project-stream.jpg";
import field from "@/assets/project-field.jpg";

const FAQ = [
  {
    q: "Hvad er GoFreyra?",
    a: "GoFreyra er en dansk SaaS-platform, der samler, analyserer og dokumenterer miljø- og driftsdata, så virksomheder, kommuner og naturprojekter kan bevise deres bæredygtighedsarbejde med data fra virkeligheden — ikke estimater.",
  },
  {
    q: "Hvem er platformen til?",
    a: "Virksomheder med CSRD-pligt, kommuner med natur- og klimaprojekter, industri og forsyningsselskaber, lodsejere og naturprojektejere, der har brug for sporbar dokumentation.",
  },
  {
    q: "Hvad gør platformen konkret?",
    a: "SmartConnect+ samler data fra sensorer, drone, satellit og felt. DecisionsIQ analyserer data og finder mønstre og risici. ESG Ledger dokumenterer det med audit trail. Impact Exchange synliggør effekten. Det hele samles i GoFreyra Dashboard.",
  },
  {
    q: "Erstatter GoFreyra vores ESG-rapporteringsværktøj?",
    a: "Nej. GoFreyra leverer det datagrundlag og den sporbarhed, som rapporteringsværktøjerne mangler. Vi styrker datakvaliteten bag rapporten.",
  },
  {
    q: "Hvor hurtigt kan vi komme i gang?",
    a: "Pilotopsætning kan være kørende på 2-4 uger. Book en demo, så afklarer vi scope og datakilder.",
  },
];

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: "GoFreyra — Mål, dokumentér og bevis jeres bæredygtighedsarbejde",
      description:
        "GoFreyra er den danske SaaS-platform, der gør miljødata, drift og ESG-dokumentation operationel. Sporbart, audit-klart og klar til CSRD.",
      path: "/",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "GoFreyra",
          url: "https://gofreyra.lovable.app",
          description: "Dansk SaaS-platform til miljødata, ESG-dokumentation og verificerbar impact.",
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <div>
            <span className="eyebrow">SaaS-platform · Miljødata · ESG · Impact</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Bevis jeres bæredygtighed<br />
              <span className="text-brand-deep">med data fra virkeligheden.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              GoFreyra samler sensor-, drone-, satellit- og driftsdata i én platform — og leverer den sporbare dokumentation, jeres ESG-rapport, revision og bestyrelse skal kunne stole på.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full h-12 px-6 text-base">
                <Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full h-12 px-6 text-base">
                <Link to="/platform">Se platformen</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Audit trail på hvert datapunkt</span>
              <span className="inline-flex items-center gap-1.5"><Activity className="w-4 h-4 text-primary" /> Realtidsdata fra felten</span>
              <span className="inline-flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-primary" /> CSRD- og ESRS-orienteret</span>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container-page py-20">
        <div className="max-w-3xl">
          <span className="eyebrow">Problemet</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            ESG- og naturarbejdet drukner i regneark, manuelle indtastninger og data, ingen kan spore.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Med CSRD, naturkrav og stigende pres fra revisorer, banker og kunder er det ikke længere nok at fortælle en grøn historie. Den skal kunne dokumenteres — og det er her, de fleste organisationer rammer muren.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <Layers className="w-5 h-5" />, t: "Data ligger spredt", d: "Sensordata, driftsdata og ESG-felter findes i 5-10 forskellige systemer." },
            { icon: <Workflow className="w-5 h-5" />, t: "Rapportering tager uger", d: "ESG-teamet bruger måneder på at samle data, der burde være klar med ét klik." },
            { icon: <AlertTriangle className="w-5 h-5" />, t: "Claims kan ikke forsvares", d: "Når revisor spørger til kilden, mangler både versionshistorik og kildehenvisning." },
            { icon: <Activity className="w-5 h-5" />, t: "Indsigt kommer for sent", d: "Når rapporten er færdig, er chancen for at handle og forbedre ofte allerede passeret." },
          ].map((p) => (
            <div key={p.t} className="card-soft p-6">
              <div className="w-10 h-10 rounded-lg bg-secondary text-brand-deep grid place-items-center">{p.icon}</div>
              <div className="mt-4 font-semibold">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM */}
      <section className="surface-beige">
        <div className="container-page py-20">
          <div className="max-w-3xl">
            <span className="eyebrow">Sådan virker GoFreyra</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Indsaml. Analysér. Dokumentér. Aktivér.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fire skridt — én platform. Bygget så ESG-, drifts- og projektteams kan arbejde i samme datagrundlag.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Indsaml", d: "SmartConnect+ trækker data fra sensorer, drone, satellit, felt og driftsystemer." },
              { n: "02", t: "Analysér", d: "DecisionsIQ finder mønstre, afvigelser og risici før de bliver dyre." },
              { n: "03", t: "Dokumentér", d: "ESG Ledger lægger audit trail og kildehenvisning på hvert datapunkt." },
              { n: "04", t: "Aktivér", d: "Impact Exchange gør jeres dokumenterede effekt synlig for kunder, partnere og markeder." },
            ].map((s) => (
              <div key={s.n} className="card-soft p-6 bg-card">
                <div className="text-sm font-mono text-primary">{s.n}</div>
                <div className="mt-2 text-xl font-semibold">{s.t}</div>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="container-page py-20">
        <div className="max-w-3xl">
          <span className="eyebrow">Platformen</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Fire moduler, der arbejder sammen.</h2>
          <p className="mt-4 text-muted-foreground">Brug det hele eller start med ét. Modulerne deler det samme datagrundlag.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {[
            { to: "/platform/smartconnect", icon: <Database className="w-5 h-5" />, t: "SmartConnect+", d: "Indsamler data fra sensorer, drone, satellit, felt og drift — i realtid." },
            { to: "/platform/decisionsiq", icon: <Brain className="w-5 h-5" />, t: "DecisionsIQ", d: "Analyserer data og leverer konkrete anbefalinger, risikoflag og prioriterede handlinger." },
            { to: "/platform/esg-ledger", icon: <ShieldCheck className="w-5 h-5" />, t: "ESG Ledger", d: "Dokumenterer hvert datapunkt med kilde, tidsstempel og audit trail. Bygget til CSRD og revision." },
            { to: "/platform/impact-exchange", icon: <Globe2 className="w-5 h-5" />, t: "Impact Exchange", d: "Synliggør verificeret natur- og klimaeffekt — klar til rapportering, partnere og fremtidige markeder." },
          ].map((m) => (
            <Link key={m.to} to={m.to} className="card-soft p-7 group hover:border-primary/40 transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{m.icon}</div>
                <div className="text-xl font-semibold">{m.t}</div>
              </div>
              <p className="mt-3 text-muted-foreground">{m.d}</p>
              <div className="mt-5 inline-flex items-center text-sm font-medium text-brand-deep">
                Se modulet <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 card-soft p-5 bg-secondary/40 text-sm text-foreground/80">
          Alt samles i <strong>GoFreyra Dashboard</strong> — ét operationelt overblik for ESG-team, drift og ledelse.{" "}
          <Link to="/dashboard" className="text-brand-deep font-medium underline-offset-2 hover:underline">Se dashboardet →</Link>
        </div>
      </section>

      {/* USE CASES */}
      <section className="surface-beige">
        <div className="container-page py-20">
          <div className="max-w-3xl">
            <span className="eyebrow">Hvem bruger GoFreyra</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Bygget til organisationer, der skal kunne bevise deres indsats.</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              { to: "/loesninger/kommuner", t: "Kommuner", d: "Naturgenopretning, klimatilpasning og biodiversitet — dokumenteret over tid og synligt for borgere og politikere." },
              { to: "/loesninger/industri", t: "Industri og forsyning", d: "Driftsdata, energi, vand og emissioner kobles direkte til ESG-indikatorer og risikostyring." },
              { to: "/loesninger/esg-compliance", t: "ESG- og compliance-teams", d: "Færre regneark, komplet audit trail og dokumentation, der kan holde til CSRD og revision." },
              { to: "/loesninger/naturprojekter", t: "Lodsejere og naturprojekter", d: "Mål biodiversitet, jord og vand med felt-, drone- og satellitdata. Klar til impactmarkeder." },
            ].map((u) => (
              <Link key={u.to} to={u.to} className="card-soft p-6 bg-card hover:border-primary/40 transition">
                <div className="text-xl font-semibold">{u.t}</div>
                <p className="mt-2 text-muted-foreground">{u.d}</p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">Se løsning <ArrowRight className="ml-1 w-4 h-4" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJEKTER STRIBE */}
      <section className="container-page py-20">
        <div className="flex items-end justify-between gap-6 max-w-4xl">
          <div>
            <span className="eyebrow">Fra felten</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Eksempler på projekter, hvor data kommer fra virkeligheden.</h2>
            <p className="mt-3 text-muted-foreground">Drone, satellit, sensor og felt — koblet til officielle datakilder og fuld evidence trail.</p>
          </div>
          <Link to="/projekter" className="hidden md:inline-flex items-center text-sm font-medium text-brand-deep whitespace-nowrap">
            Se alle projekter <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[
            { img: coastal, t: "Tidevandszone", d: "Dige- og kystmonitorering med drone og Sentinel-2." },
            { img: stream, t: "Vandløb og eng", d: "Naturbaseline med GBIF, Satlas og feltobservationer." },
            { img: field, t: "Areal og drift", d: "ESG-startgrundlag med SoilGrids og IPCC EFDB." },
          ].map((p) => (
            <Link key={p.t} to="/projekter" className="card-soft overflow-hidden p-0 bg-card group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="font-semibold">{p.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY NOW */}
      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow">Hvorfor nu</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">CSRD, naturkrav og købspres rammer samtidig.</h2>
            <p className="mt-4 text-muted-foreground">
              Revisorer, banker, kunder og myndigheder forventer nu sporbar dokumentation, ikke estimater. De organisationer, der har data og audit trail på plads, vinder tid, troværdighed og adgang til kapital. De, der ikke har, betaler dyrt for greenwashing-risiko og forsinkede rapporter.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 self-center">
            {[
              "Sporbart datagrundlag bag hver KPI",
              "Komplet audit trail til revision",
              "Reduktion af manuelt rapporteringsarbejde",
              "Modulær SaaS — start lille, skalér bredt",
              "Dansk leverandør, dansk support",
              "Klar til CSRD, ESRS og naturrapportering",
            ].map((b) => (
              <li key={b} className="card-soft p-4 text-sm font-medium">{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-20">
        <div className="max-w-3xl">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Ofte stillede spørgsmål</h2>
        </div>
        <div className="mt-8 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="card-soft px-5 border-0">
                <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
