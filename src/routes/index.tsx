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
  { q: "Hvad er GoFreyra?", a: "GoFreyra er en SaaS-platform, der forbinder miljødata, AI-analyse og dokumentationsflows til ESG, natur og verificerbar impact." },
  { q: "Hvem er GoFreyra til?", a: "GoFreyra er bygget til virksomheder, kommuner, industri, forsyningsselskaber, lodsejere og naturprojekter, der har brug for bedre data og stærkere dokumentation." },
  { q: "Erstatter GoFreyra ESG-rapporteringsværktøjer?", a: "GoFreyra kan understøtte ESG-rapportering ved at forbedre datagrundlaget, sporbarheden og dokumentationen bag rapporteringen." },
  { q: "Hvilke data kan platformen bruge?", a: "Platformen kan arbejde med sensordata, feltobservationer, satellitdata, dronedata, driftsdata og strukturerede ESG-data." },
  { q: "Er GoFreyra klar til pilotprojekter?", a: "Ja. GoFreyra er klar til demoer, pilotdialoger og tidlig kundevalidering." },
];

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: "GoFreyra — Miljødata, ESG-dokumentation og verificerbar impact",
      description:
        "GoFreyra er en dansk SaaS-platform, der omsætter miljødata fra virkeligheden til brugbar indsigt, ESG-dokumentation og verificerbar impact.",
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
            <span className="eyebrow">Miljødata · ESG · Impact</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Data fra virkeligheden.<br />
              <span className="text-brand-deep">Dokumentation du kan bruge.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              GoFreyra forbinder miljødata, AI-analyse og ESG-dokumentation i én operationel SaaS-platform.
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
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Audit-klar dokumentation</span>
              <span className="inline-flex items-center gap-1.5"><Activity className="w-4 h-4 text-primary" /> Realtidsdata</span>
              <span className="inline-flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-primary" /> CSRD-orienteret</span>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container-page py-20">
        <div className="max-w-3xl">
          <span className="eyebrow">Problem</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            ESG-arbejde er stadig for manuelt, fragmenteret og svært at dokumentere.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mange organisationer samler stadig bæredygtighedsdata i regneark, rapporter og adskilte systemer.
            Det gør dokumentationen langsom, dyr og svær at stole på.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <Layers className="w-5 h-5" />, t: "Fragmenterede data", d: "Miljødata, driftsdata og ESG-data ligger ofte i forskellige systemer." },
            { icon: <Workflow className="w-5 h-5" />, t: "Manuel rapportering", d: "Teams bruger for meget tid på at indsamle, rense og formatere data." },
            { icon: <AlertTriangle className="w-5 h-5" />, t: "Svag dokumentation", d: "Impact-claims bliver svære at forsvare uden sporbare data." },
            { icon: <Activity className="w-5 h-5" />, t: "Forsinket indsigt", d: "Når rapporten er færdig, er muligheden for at handle ofte allerede passeret." },
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
            <span className="eyebrow">Platform</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              GoFreyra gør miljødata til operationel bæredygtighedsindsigt.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Indsaml data, analyser mønstre og dokumentér impact i én samlet platform.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { n: "01", t: "Indsaml", d: "Forbind sensorer, feltdata, satellitdata, dronedata og driftsdata." },
              { n: "02", t: "Analysér", d: "Brug AI til at finde mønstre, risici, afvigelser og forbedringsmuligheder." },
              { n: "03", t: "Dokumentér", d: "Skab sporbar og audit-klar dokumentation til ESG, natur og impact-rapportering." },
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
          <span className="eyebrow">Moduler</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Én platform. Fire forbundne moduler.</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {[
            { to: "/platform/smartconnect", icon: <Database className="w-5 h-5" />, t: "SmartConnect+", d: "Forbind sensorer, enheder og miljødata i realtid." },
            { to: "/platform/decisionsiq", icon: <Brain className="w-5 h-5" />, t: "DecisionsIQ", d: "Omsæt komplekse bæredygtighedsdata til AI-understøttet indsigt og anbefalinger." },
            { to: "/platform/esg-ledger", icon: <ShieldCheck className="w-5 h-5" />, t: "ESG Ledger", d: "Skab sporbar og audit-klar dokumentation for ESG-data og impact-claims." },
            { to: "/platform/impact-exchange", icon: <Globe2 className="w-5 h-5" />, t: "Impact Exchange", d: "Gør verificerede natur- og impactprojekter klar til fremtidige markedsmodeller." },
          ].map((m) => (
            <Link key={m.to} to={m.to} className="card-soft p-7 group hover:border-primary/40 transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{m.icon}</div>
                <div className="text-xl font-semibold">{m.t}</div>
              </div>
              <p className="mt-3 text-muted-foreground">{m.d}</p>
              <div className="mt-5 inline-flex items-center text-sm font-medium text-brand-deep">
                Læs mere <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-page py-20">
        <div className="max-w-3xl">
          <span className="eyebrow">Sådan virker det</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Fra feltdata til dokumenterbar impact.</h2>
        </div>
        <ol className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Forbind datakilder fra virkeligheden",
            "Valider og strukturér data",
            "Analysér mønstre og risici",
            "Skab dokumentationsflows",
            "Følg impact over tid",
            "Eksportér eller del rapporter",
          ].map((step, i) => (
            <li key={step} className="card-soft p-5 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-deep text-white grid place-items-center font-semibold text-sm flex-shrink-0">{i + 1}</div>
              <div className="text-foreground/90">{step}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* USE CASES */}
      <section className="surface-beige">
        <div className="container-page py-20">
          <div className="max-w-3xl">
            <span className="eyebrow">Use cases</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Bygget til organisationer, der skal bruge bæredygtighedsdata i praksis.</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              { to: "/loesninger/kommuner", t: "Kommuner", d: "Følg biodiversitet, naturgenopretning, klimaindsatser og projektstatus med bedre dokumentation." },
              { to: "/loesninger/industri", t: "Industri og forsyning", d: "Forbind driftsdata med ESG, ressourceforbrug, risikostyring og dokumentation." },
              { to: "/loesninger/esg-compliance", t: "ESG og compliance-teams", d: "Reducer manuelt rapporteringsarbejde og skab stærkere dokumentation." },
              { to: "/loesninger/naturprojekter", t: "Naturprojekter", d: "Følg biodiversitet, levesteder, jord, vand og miljøindikatorer over tid." },
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
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Projekter, hvor data kommer fra virkeligheden.</h2>
            <p className="mt-3 text-muted-foreground">Drone, satellit, sensor og felt — koblet til officielle datakilder og evidence trail.</p>
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

      {/* TRUST */}
      <section className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow">Troværdighed</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Bygget til målbar impact — ikke grønne påstande.</h2>
            <p className="mt-4 text-muted-foreground">
              GoFreyra er bygget omkring sporbare data, praktiske arbejdsgange og gennemsigtig dokumentation.
              Målet er enkelt: gøre bæredygtighed lettere at måle, lettere at styre og lettere at dokumentere.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 self-center">
            {[
              "Data fra virkelige kilder",
              "Tydelige audit trails",
              "AI-understøttet analyse",
              "Modulær SaaS-arkitektur",
              "Klar til pilotprojekter og skalering",
              "Designet til ESG- og CSRD-dokumentation",
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
