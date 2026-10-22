import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, organizationJsonLd } from "@/components/site/SEO";
import { FaqSection, FlowSection, GreenCTA, MicroStrip, SectionHeader, CardGrid } from "@/components/site/sections";
import heroAsset from "@/assets/drone-vandloeb-02.jpg.asset.json";
import g1 from "@/assets/drone-vandloeb-01.jpg.asset.json";
import g3 from "@/assets/drone-vandloeb-03.jpg.asset.json";
import g4 from "@/assets/drone-vandloeb-04.jpg.asset.json";
import g5 from "@/assets/drone-vandloeb-05.jpg.asset.json";

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

const GALLERY = [
  { img: g1.url, alt: "Delstrækning med tæt bevoksning langs vandløb, set fra drone", caption: "Delstrækning, set fra drone" },
  { img: g3.url, alt: "Gentagelsespunkt ved mark og hegn, referencefoto fra drone", caption: "Gentagelsespunkt, referencefoto" },
  { img: g4.url, alt: "Vandløbskorridor gennem græsarealer, set fra drone", caption: "Vandløbskorridor, oversigt" },
  { img: g5.url, alt: "Græsstrimmel mellem dyrkede marker, referencefoto fra drone", caption: "Delstrækning, referencefoto" },
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
      {/* HERO med eget dronefoto */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroAsset.url}
            alt="Vandløb med hegn og bevoksning mellem marker, fotograferet fra drone"
            width={2000}
            height={1333}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,30,25,0.55) 0%, rgba(20,30,25,0.35) 50%, rgba(20,30,25,0.65) 100%)" }} />
        </div>
        <div className="relative container-page py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "#fff" }}>Freyra Evidence Workspace</span>
            <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08] text-white">
              Dokumentation af naturprojekter, kommunen kan stå på mål for.
            </h1>
            <p className="mt-6 text-lg text-white/85">
              Freyra samler dronefotos, offentlige data og faglig verifikation i én evidenskæde. Fra første flyvning til en baseline, der kan bruges i Grøn Trepart.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-md h-12 px-6 text-base bg-white text-brand-deep hover:bg-white/90"><Link to="/kontakt">Book en snak <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-md h-12 px-6 text-base bg-transparent border-white/50 text-white hover:bg-white/10"><Link to="/ydelser">Se ydelserne</Link></Button>
            </div>
            <p className="mt-6 text-xs text-white/60">Eget dronefoto, august 2026.</p>
          </div>
        </div>
      </section>

      <MicroStrip items={["Bygget til Grøn Trepart", "Offentlige datakilder", "Versionerede evidenspakker", "Dansk virksomhed"]} />

      {/* PROBLEM */}
      <section className="container-page py-20 md:py-24">
        <SectionHeader
          eyebrow="Problemet"
          title="Dokumentationen er spredt, og den er svær at efterprøve."
          body="Natur- og arealprojekter dokumenteres i dag med fotos i mapper, regneark og PDF'er. Når en fond, en trepart eller en borger spørger til grundlaget, skal kommunen kunne svare præcist."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { t: "Fotos uden kontekst", d: "Feltdokumentation ligger spredt uden GPS, tidspunkt og kobling til det konkrete areal." },
            { t: "Data fra mange kilder", d: "Kort, jorddata, vejr og satellit skal hentes hvert sit sted og samles manuelt." },
            { t: "Svag sporbarhed", d: "Det er svært at vise, hvordan en konklusion i en rapport er nået, og hvem der har vurderet hvad." },
          ].map((p) => (
            <div key={p.t} className="card-soft p-6">
              <div className="font-semibold">{p.t}</div>
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
      <section className="container-page py-20 md:py-24">
        <SectionHeader eyebrow="Ydelser" title="Seks ydelser. Én evidenskæde." />
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

      {/* LEVERANCE med billedgalleri */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow">Sådan ser en leverance ud</span>
              <h2 className="mt-4 text-3xl md:text-4xl">Førregistrering af et vandløb i Sønderjylland.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Et konkret eksempel på, hvad en førregistrering indeholder. Tallene er fra en faktisk leverance. Området er anonymiseret.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Droneflyvning gennemført 24.08.2026",
                  "5 delstrækninger registreret langs vandløbet",
                  "6 gentagelsespunkter til før/efter-dokumentation",
                  "21 referencefotos med GPS, klar til genbesøg",
                ].map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {GALLERY.map((g) => (
                <figure key={g.caption} className="card-soft overflow-hidden p-0 bg-card">
                  <img src={g.img} alt={g.alt} width={2000} height={1333} loading="lazy" className="w-full aspect-[3/2] object-cover" />
                  <figcaption className="p-3 text-xs text-muted-foreground">{g.caption}. Eget dronefoto, august 2026.</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFENTLIGE DATA */}
      <section className="container-page py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Bygget på offentlige data</span>
          <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
            Dataforsyningen · Danmarks Arealinformation · GEUS · DMI · Copernicus Sentinel-2
          </p>
        </div>
      </section>

      {/* SÅDAN ARBEJDER VI */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <SectionHeader eyebrow="Sådan arbejder vi" title="Fire principper. Ingen undtagelser." />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Alt kan spores til kilde", d: "Hver påstand i en leverance har kilde, tidspunkt og metode." },
              { t: "Ingen tal uden belæg", d: "Vi viser kun tal, der kan dokumenteres. Effekter vises som intervaller fra forskningslitteraturen." },
              { t: "Fagperson godkender", d: "AI assisterer gennemgangen. En fagperson står bag hver konklusion." },
              { t: "Versioneret og reproducerbart", d: "Hver ændring gemmes som en ny version. En evidenspakke kan genskabes og efterprøves." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-6 bg-card">
                <div className="font-semibold">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
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
