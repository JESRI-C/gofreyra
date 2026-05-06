import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Brain, ShieldCheck, Globe2, Activity, FileCheck, AlertTriangle, Layers, Workflow, Building2, Factory, ClipboardCheck, Trees, Wheat, Handshake, Satellite, Wifi, Plane, MapPin, CloudRain, ClipboardList, Server, Combine } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { DashboardMockup } from "@/components/site/DashboardMockup";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { FaqSection, FlowSection, GreenCTA, MicroStrip, SectionHeader, ModuleBenefits, CardGrid } from "@/components/site/sections";
import coastal from "@/assets/project-coastal.jpg";
import stream from "@/assets/project-stream.jpg";
import field from "@/assets/project-field.jpg";

const FAQ = [
  { q: "Hvad er GoFreyra?", a: "GoFreyra er en dansk SaaS-platform, der samler miljødata, AI-analyse og ESG-dokumentation ét sted. Freyra er brandet, GoFreyra er platformen, og ISEN er natur- og impactlaget. Tilsammen gør vi bæredygtighedsarbejdet operationelt og dokumenterbart." },
  { q: "Hvem bruger GoFreyra?", a: "Kommuner, industri og forsyning, ESG- og compliance-teams, naturprojektejere, lodsejere, landbrug, skovbrug og rådgivere bruger GoFreyra til at gøre miljødata operationelle." },
  { q: "Hvilke datakilder kan platformen bruge?", a: "IoT-sensorer, feltobservationer, satellit- og dronedata, vejrdata, driftsdata, manuelle registreringer og eksterne registre. Datakilder kobles gradvist — vi kræver ikke perfekt datamodenhed fra dag ét." },
  { q: "Er GoFreyra et ESG-rapporteringsværktøj?", a: "Nej, GoFreyra er datagrundlaget bag rapporten. Vi leverer den sporbarhed og struktur, som rapporteringsværktøjer mangler. Vi spiller godt sammen med eksisterende ESG-værktøjer." },
  { q: "Hvordan adskiller GoFreyra sig fra et almindeligt dashboard?", a: "Et dashboard viser tal. GoFreyra binder hvert datapunkt til kilde, tidspunkt, metode og anvendelse — og kobler indsamling, analyse, dokumentation og impact i samme platform." },
  { q: "Kan vi starte med et pilotprojekt?", a: "Ja. Et pilotforløb starter typisk med ét område, ét datasæt eller én afdeling og kan være kørende på 2-4 uger." },
  { q: "Skal vi have sensorer fra start?", a: "Nej. Mange kommer i gang med felt-, drifts- eller satellitdata. Sensorer kan tilføjes løbende, hvor de skaber mest værdi." },
  { q: "Hvordan arbejder GoFreyra med dokumentation?", a: "ESG Ledger lægger audit trail på hvert datapunkt med kilde, tidsstempel, metode og ændringshistorik — så dokumentationen kan stå mål med revision, CSRD og interessenter." },
];

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: "GoFreyra — Data fra virkeligheden. Dokumentation du kan bruge.",
      description: "GoFreyra samler miljødata, AI-analyse og ESG-dokumentation i én platform, så organisationer kan måle, styre og bevise deres impact.",
      path: "/",
      jsonLd: [
        { "@context": "https://schema.org", "@type": "Organization", name: "GoFreyra", url: "https://gofreyra.com", description: "Dansk SaaS-platform til miljødata, ESG-dokumentation og verificerbar impact." },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
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
              Data fra virkeligheden.<br />
              <span className="text-brand-deep">Dokumentation du kan bruge.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              GoFreyra samler miljødata, AI-analyse og ESG-dokumentation i én platform, så organisationer kan måle, styre og bevise deres impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full h-12 px-6 text-base"><Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-12 px-6 text-base"><Link to="/platform">Se platformen</Link></Button>
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

      <MicroStrip items={["Pilot på 2-4 uger", "Dansk leverandør", "Modulær SaaS", "Bygget til CSRD og naturkrav"]} />

      {/* PROBLEM */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Problemet" title="Bæredygtighedsdata er ofte spredt, forsinket og svær at stole på." body="Mange ESG- og miljøteams arbejder stadig med regneark, manuelle indsamlinger og rapporter, der først bliver færdige, når muligheden for at handle er passeret." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <Layers className="w-5 h-5" />, t: "Data ligger i siloer", d: "Sensordata, driftsdata og ESG-felter findes i 5-10 forskellige systemer." },
            { icon: <Workflow className="w-5 h-5" />, t: "Rapportering er manuel", d: "ESG-teamet bruger måneder på at samle data, der burde være klar med ét klik." },
            { icon: <AlertTriangle className="w-5 h-5" />, t: "Dokumentation er svær at efterprøve", d: "Når revisor spørger til kilden, mangler både versionshistorik og kildehenvisning." },
            { icon: <FileCheck className="w-5 h-5" />, t: "Ledelsen mangler ét overblik", d: "Status, fremdrift og risici findes i hver sin præsentation." },
            { icon: <Trees className="w-5 h-5" />, t: "Naturdata er sjældent koblet til ESG", d: "Biodiversitet og naturindikatorer lever adskilt fra rapporteringen." },
            { icon: <ShieldCheck className="w-5 h-5" />, t: "Audit trail mangler i processen", d: "Uden sporbarhed bliver claims svære at forsvare." },
          ].map((p) => (
            <div key={p.t} className="card-soft p-6">
              <div className="w-10 h-10 rounded-lg bg-secondary text-brand-deep grid place-items-center">{p.icon}</div>
              <div className="mt-4 font-semibold">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE */}
      <CardGrid
        beige
        eyebrow="Hvor GoFreyra skaber værdi"
        title="Fra fragmenteret data til beslutningsklart grundlag."
        cols={4}
        cards={[
          { t: "Saml miljødata ét sted", d: "Sensorer, drift, felt, satellit og manuelle registreringer i én datamodel." },
          { t: "Gør ESG-dokumentation sporbar", d: "Hvert datapunkt med kilde, tidsstempel og metode." },
          { t: "Brug AI til mønstre og risici", d: "Find afvigelser og prioritér handling — med forklaring." },
          { t: "Følg impact på projektniveau", d: "Mål effekten af konkrete natur- og klimaindsatser over tid." },
        ]}
      />

      {/* PLATFORM CHAIN */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Platformen" title="Én platform. Ét datagrundlag. Flere anvendelser." body="SmartConnect+ indsamler data. DecisionsIQ analyserer data. ESG Ledger dokumenterer data. Impact Exchange synliggør impact. Dashboardet samler det hele." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: <Database className="w-5 h-5" />, t: "SmartConnect+", d: "Indsaml data fra felt, drift, sensor og satellit." },
            { icon: <Brain className="w-5 h-5" />, t: "DecisionsIQ", d: "Find mønstre, afvigelser og anbefalinger." },
            { icon: <ShieldCheck className="w-5 h-5" />, t: "ESG Ledger", d: "Audit trail og rapportklar dokumentation." },
            { icon: <Globe2 className="w-5 h-5" />, t: "Impact Exchange", d: "Synliggør natur- og klimaeffekt." },
            { icon: <Combine className="w-5 h-5" />, t: "Dashboard", d: "Ét overblik for ESG, drift og ledelse." },
          ].map((m) => (
            <div key={m.t} className="card-soft p-5 bg-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{m.icon}</div>
              <div className="mt-3 font-semibold">{m.t}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES with benefits */}
      <section className="surface-beige">
        <div className="container-page py-4">
          <div className="pt-16">
            <SectionHeader eyebrow="Modulerne" title="Fire moduler, der arbejder sammen." body="Brug det hele eller start med ét. Modulerne deler det samme datagrundlag." />
          </div>
        </div>
        <ModuleBenefits
          modules={[
            { icon: <Database className="w-5 h-5" />, t: "SmartConnect+", to: "/platform/smartconnect", d: "Forbind sensorer, feltdata, driftsdata, satellitdata og manuelle observationer i ét samlet datalag.", bullets: ["Realtidsdata fra felt og drift", "Sensorstatus og advarsler", "Klar struktur til videre analyse"] },
            { icon: <Brain className="w-5 h-5" />, t: "DecisionsIQ", to: "/platform/decisionsiq", d: "Brug AI til at identificere mønstre, afvigelser og anbefalede handlinger.", bullets: ["Risiko- og afvigelsesdetektion", "Beslutningsstøtte til ESG og drift", "Forklarlige anbefalinger"] },
            { icon: <ShieldCheck className="w-5 h-5" />, t: "ESG Ledger", to: "/platform/esg-ledger", d: "Skab dokumentationsspor fra datakilde til rapport.", bullets: ["Audit trail på datapunkter", "Kilde- og tidsstempling", "Rapportklar dokumentation"] },
            { icon: <Globe2 className="w-5 h-5" />, t: "Impact Exchange", to: "/platform/impact-exchange", d: "Gør natur- og impactprojekter klar til rapportering, partnere og fremtidige markedsmodeller.", bullets: ["Projektkort og impactdata", "Status på dokumentation", "Struktur til fremtidige creditmodeller"] },
          ]}
        />
        <div className="container-page pb-16 -mt-10">
          <div className="card-soft p-5 bg-card text-sm text-foreground/80">
            Alt samles i <strong>GoFreyra Dashboard</strong> — ét operationelt overblik for ESG-team, drift og ledelse.{" "}
            <Link to="/dashboard" className="text-brand-deep font-medium underline-offset-2 hover:underline">Se dashboardet →</Link>
          </div>
        </div>
      </section>

      {/* PILOT */}
      <FlowSection
        eyebrow="Pilotforløb"
        title="Start småt. Byg datagrundlaget rigtigt."
        subtitle="Et pilotforløb kan starte med ét område, én afdeling eller ét datasæt. Målet er ikke at bygge alt på én gang, men at skabe et datagrundlag, der kan bruges i praksis."
        steps={[
          { n: "01", t: "Afklar mål", d: "Hvad skal måles, dokumenteres og bruges?" },
          { n: "02", t: "Vælg område", d: "Ét område, ét projekt eller én afdeling." },
          { n: "03", t: "Forbind data", d: "Kobl relevante datakilder gradvist på." },
          { n: "04", t: "Byg flow", d: "Dashboard og dokumentationsflow opsættes." },
          { n: "05", t: "Evaluér og skalér", d: "Læring tages med, scope udvides." },
        ]}
      />

      {/* AUDIENCES */}
      <CardGrid
        beige
        eyebrow="Hvem platformen er bygget til"
        title="Bygget til organisationer, der skal kunne bevise deres indsats."
        cols={3}
        cards={[
          { t: "Kommuner", d: "Naturgenopretning, klimatilpasning, biodiversitet og borgervendt dokumentation." },
          { t: "Industri og forsyning", d: "Drift, energi, vand, emissioner og ESG-indikatorer i ét lag." },
          { t: "ESG og compliance", d: "CSRD, ESRS-mapping, audit trail og mindre manuelt arbejde." },
          { t: "Naturprojekter", d: "Felt-, drone- og satellitdata til biodiversitet og levesteder." },
          { t: "Landbrug og skovbrug", d: "Areal, jord, vand og emissioner — fra drift til dokumentation." },
          { t: "Rådgivere og partnere", d: "Et fælles datagrundlag på tværs af kunder og projekter." },
        ]}
      />

      {/* DATA SOURCES */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Datakilder" title="Bygget til data fra virkeligheden." body="Datakilder kan kobles gradvist. Platformen skal ikke kræve perfekt datamodenhed fra dag ét." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Wifi className="w-4 h-4" />, t: "IoT-sensorer" },
            { icon: <ClipboardList className="w-4 h-4" />, t: "Feltobservationer" },
            { icon: <Satellite className="w-4 h-4" />, t: "Satellitdata" },
            { icon: <Plane className="w-4 h-4" />, t: "Dronedata" },
            { icon: <CloudRain className="w-4 h-4" />, t: "Vejrdata" },
            { icon: <Server className="w-4 h-4" />, t: "Driftsdata" },
            { icon: <ClipboardCheck className="w-4 h-4" />, t: "Manuelle registreringer" },
            { icon: <Database className="w-4 h-4" />, t: "Eksterne registre" },
          ].map((d) => (
            <Link key={d.t} to="/datakilder" className="card-soft p-4 bg-card flex items-center gap-3 hover:border-primary/40 transition">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{d.icon}</div>
              <span className="text-sm font-medium">{d.t}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* TRUST / DOCUMENTATION */}
      <section className="surface-beige">
        <div className="container-page py-20 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">Dokumentation og tillid</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Mindre påstand. Mere sporbarhed.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              GoFreyra hjælper med at koble hvert datapunkt til kilde, tidspunkt, metode og anvendelse. Det gør dokumentationen lettere at bruge i ESG, ledelse, rapportering og dialog med partnere.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Sporbart datagrundlag bag hver KPI",
              "Komplet audit trail til revision",
              "Reduktion af manuelt rapporteringsarbejde",
              "Modulær SaaS — start lille, skalér bredt",
              "Dansk leverandør, dansk support",
              "Klar til CSRD, ESRS og naturrapportering",
            ].map((b) => (
              <li key={b} className="card-soft p-4 text-sm font-medium bg-card">{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJECTS STRIP */}
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

      <GreenCTA title="Vil I se, hvordan jeres data kan samles?" subtitle="Vi gennemgår jeres datakilder og dokumentationsbehov på en kort demo." secondary={{ to: "/platform", label: "Se platformen" }} />

      <FaqSection items={FAQ} />

      <CTASection title="Se GoFreyra med jeres egne data." subtitle="På en kort demo gennemgår vi jeres datakilder, dokumentationsbehov og hvordan platformen kan bygges op omkring jeres virkelighed." />
    </PageLayout>
  );
}
