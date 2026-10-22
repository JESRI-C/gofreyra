import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Database, ShieldCheck, FileText, TreePine, MapPin, Camera, CalendarCheck, Building2, Handshake, Users, Landmark, Home } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { EvidenceChain } from "@/components/site/EvidenceChain";
import { buildHead, faqJsonLd, organizationJsonLd } from "@/components/site/SEO";
import { FaqSection, FlowSection, GreenCTA, MicroStrip, SectionHeader, CardGrid } from "@/components/site/sections";
import stream from "@/assets/project-stream.jpg";

const FAQ = [
  { q: "Hvad er Freyra?", a: "Freyra er et evidence workspace for natur- og arealprojekter. Vi samler dronefotos, offentlige data og faglig verifikation i én evidenskæde, så kommunen kan stå på mål for sin dokumentation." },
  { q: "Hvad er en evidenskæde?", a: "En evidenskæde betyder, at hver påstand i en rapport kan spores tilbage til sin kilde. Et dronefoto, et offentligt datasæt, en beregning og en faglig vurdering hænger sammen og er versioneret." },
  { q: "Er Freyra en erstatning for MARS, GATE eller Miljøportalen?", a: "Nej. Freyra er et lag oven på de systemer, I allerede bruger. Vi samler og verificerer data, så de kan bruges videre i jeres eksisterende arbejdsgange." },
  { q: "Hvem bruger Freyra?", a: "Kommuner, lokale treparter, rådgivere, naturfonde og større lodsejere, der arbejder med natur- og arealprojekter i Grøn Trepart." },
  { q: "Hvad koster det?", a: "Et pilotprojekt starter fra 125.000 kr. De øvrige ydelser prissættes efter aftale, afhængigt af område, datagrundlag og omfang." },
  { q: "Hvor hurtigt kan vi komme i gang?", a: "Et pilotprojekt kan typisk gennemføres på få uger, afhængigt af område og vejrforhold til droneflyvning." },
];

const YDELSER = [
  { t: "Førregistrering af natur- og arealprojekter", d: "Droneflyvning, offentlige data og faglig verifikation samlet i en versioneret baseline." },
  { t: "Beplantnings- og etableringsanalyse", d: "Regelbaseret vurdering af, hvor beplantning er egnet, betinget egnet eller uegnet." },
  { t: "Evidenspakker til trepart og fonde", d: "Et samlet, efterprøveligt grundlag til ansøgninger, fonde og den lokale trepart." },
  { t: "Opfølgning og genbesøg", d: "Gentagelsespunkter og før/efter-dokumentation, så udviklingen kan følges over tid." },
  { t: "Kommunalt evidens-setup", d: "Faste workflows og login, så kommunen altid kan finde og genbruge sin dokumentation." },
  { t: "Rådgivning om data og metoder", d: "Hjælp til at vælge datakilder, metoder og dokumentationsniveau, før I går i gang." },
];

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: "Freyra Evidence Workspace | Dokumentation af natur- og arealprojekter",
      description: "Freyra samler dronefotos, offentlige data og faglig verifikation i én evidenskæde for natur- og arealprojekter i Grøn Trepart.",
      path: "/",
      jsonLd: [
        organizationJsonLd(),
        { "@context": "https://schema.org", "@type": "WebSite", name: "Freyra", url: "https://gofreyra.com", inLanguage: "da-DK" },
        faqJsonLd(FAQ),
      ],
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <span className="eyebrow">Freyra Evidence Workspace</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Dokumentation af naturprojekter,{" "}
              <span className="text-brand-deep">kommunen kan stå på mål for.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Freyra samler dronefotos, offentlige data og faglig verifikation i én evidenskæde. Fra første flyvning til en baseline, der kan bruges i Grøn Trepart.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full h-12 px-6 text-base"><Link to="/kontakt">Book en snak <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-12 px-6 text-base"><Link to="/ydelser">Se ydelserne</Link></Button>
            </div>
          </div>
          <EvidenceChain />
        </div>
      </section>

      <MicroStrip items={["Bygget til Grøn Trepart", "Offentlige datakilder", "Versionerede evidenspakker", "Dansk virksomhed"]} />

      {/* PROBLEM */}
      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Problemet"
          title="Dokumentationen er spredt, og den er svær at efterprøve."
          body="Natur- og arealprojekter dokumenteres i dag med fotos i mapper, regneark og PDF'er. Når en fond, en trepart eller en borger spørger til grundlaget, skal kommunen kunne svare præcist."
        />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <Camera className="w-5 h-5" />, t: "Fotos uden kontekst", d: "Feltdokumentation ligger spredt uden GPS, tidspunkt og kobling til det konkrete areal." },
            { icon: <Database className="w-5 h-5" />, t: "Data fra mange kilder", d: "Kort, jorddata, vejr og satellit skal hentes hvert sit sted og samles manuelt." },
            { icon: <FileText className="w-5 h-5" />, t: "Svag sporbarhed", d: "Det er svært at vise, hvordan en konklusion i en rapport er nået, og hvem der har vurderet hvad." },
          ].map((p) => (
            <div key={p.t} className="card-soft p-6">
              <div className="w-10 h-10 rounded-lg bg-secondary text-brand-deep grid place-items-center">{p.icon}</div>
              <div className="mt-4 font-semibold">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FLOW */}
      <FlowSection
        beige
        eyebrow="Sådan virker det"
        title="Fra dronefoto til dokumenteret beslutning."
        subtitle="Fem trin. Hvert trin er versioneret og kan spores tilbage til kilden."
        steps={[
          { n: "01", t: "Dronefoto", d: "Flyvning af området med GPS-stemplet billedmateriale." },
          { n: "02", t: "Offentlige data", d: "Ortofoto, matrikel, jordart, vejr og satellit hentes automatisk." },
          { n: "03", t: "Verifikation", d: "AI-assisteret gennemgang med faglig vurdering oven på." },
          { n: "04", t: "Baseline", d: "Versioneret rapport og evidenspakke klar til brug." },
          { n: "05", t: "Beplantning", d: "Egnethed pr. areal og gentagelsespunkter til opfølgning." },
        ]}
      />

      {/* YDELSER */}
      <section className="container-page py-20">
        <div className="flex items-end justify-between gap-6 max-w-4xl">
          <SectionHeader eyebrow="Ydelser" title="Seks ydelser. Én evidenskæde." />
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {YDELSER.map((y) => (
            <Link key={y.t} to="/ydelser" className="card-soft p-6 bg-card group hover:border-primary/40 transition">
              <div className="font-semibold group-hover:text-brand-deep transition">{y.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{y.d}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">Læs mere <ArrowRight className="ml-1 w-4 h-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* LEVERANCE */}
      <section className="surface-beige">
        <div className="container-page py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Sådan ser en leverance ud</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Førregistrering af et vandløb i Sønderjylland.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Et konkret eksempel på, hvad en førregistrering indeholder. Tallene er fra en faktisk leverance.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: <CalendarCheck className="w-4 h-4" />, t: "Droneflyvning gennemført 24.08.2026" },
                { icon: <MapPin className="w-4 h-4" />, t: "5 delstrækninger registreret langs vandløbet" },
                { icon: <Camera className="w-4 h-4" />, t: "6 gentagelsespunkter til før/efter-dokumentation" },
                { icon: <FileText className="w-4 h-4" />, t: "21 referencefotos med GPS, klar til genbesøg" },
              ].map((b) => (
                <li key={b.t} className="flex gap-3 items-start text-sm">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-brand-deep grid place-items-center shrink-0">{b.icon}</span>
                  <span className="pt-1.5 font-medium">{b.t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft overflow-hidden p-0 bg-card">
            <img src={stream} alt="Dansk vandløb med engarealer, eksempel på område til førregistrering" loading="lazy" className="w-full aspect-[4/3] object-cover" />
            <div className="p-5 text-sm text-muted-foreground">
              Feltmateriale fra flyvning kobles med offentlige data og samles i en versioneret baselinerapport.
            </div>
          </div>
        </div>
      </section>

      {/* HVEM */}
      <CardGrid
        eyebrow="Hvem"
        title="Bygget til dem, der skal kunne bevise det."
        cols={3}
        cards={[
          { t: "Kommuner", d: "Natur- og arealprojekter i Grøn Trepart med dokumentation, der holder til gennemsyn." },
          { t: "Lokale treparter", d: "Et fælles, efterprøveligt grundlag for dialog og beslutninger." },
          { t: "Rådgivere", d: "Struktureret felt- og kortdata som fundament for jeres rådgivning." },
          { t: "Naturfonde", d: "Evidenspakker, der viser, hvad midlerne er brugt til, og hvad de har flyttet." },
          { t: "Større lodsejere", d: "Overblik over egne arealer og dokumentation for tiltag." },
          { t: "Projektejere", d: "Én baseline og ét sted at finde alt materiale over tid." },
        ]}
      />

      <GreenCTA
        title="Skal vi se på jeres område?"
        subtitle="Fortæl os om projektet, så vender vi tilbage med et konkret forslag til en førregistrering."
        primary={{ to: "/kontakt", label: "Book en snak" }}
        secondary={{ to: "/platformen", label: "Se platformen" }}
      />

      <FaqSection items={FAQ} />

      <CTASection />
    </PageLayout>
  );
}
