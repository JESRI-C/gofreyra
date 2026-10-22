import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Map, Mountain, CloudRain, Satellite, Layers, History, Fingerprint, Camera, TreePine, Lock } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { EvidenceChain } from "@/components/site/EvidenceChain";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA, SectionHeader } from "@/components/site/sections";

const KILDER = [
  { icon: <Map className="w-4 h-4" />, t: "Dataforsyningen", d: "Ortofoto, matrikel og dansk højdemodel (DHM)." },
  { icon: <Layers className="w-4 h-4" />, t: "Danmarks Arealinformation", d: "§3-registrerede natur- og beskyttede områder." },
  { icon: <Mountain className="w-4 h-4" />, t: "GEUS", d: "Jordart og lavbundskort." },
  { icon: <CloudRain className="w-4 h-4" />, t: "DMI", d: "Vejrdata til kontekst for feltobservationer." },
  { icon: <Satellite className="w-4 h-4" />, t: "Sentinel-2", d: "Satellitbilleder til vegetation og arealdække." },
];

const FAQ = [
  { q: "Hvad er Freyra Evidence Workspace?", a: "Det er den platform, hvor jeres projekter, baseliner og evidenspakker ligger. Her samler vi dronefotos, offentlige data og faglig verifikation i én evidenskæde pr. projekt." },
  { q: "Er Freyra en erstatning for MARS, GATE eller Miljøportalen?", a: "Nej. Freyra er et lag oven på de systemer, I allerede bruger. Vi samler og verificerer data, så de kan bruges videre i jeres eksisterende arbejdsgange." },
  { q: "Hvad betyder versionering?", a: "Hver ændring i et projekt gemmes som en ny version. I kan altid se, hvad der er ændret, hvornår og af hvem, og I kan gå tilbage til en tidligere version." },
  { q: "Hvad er et SHA-256 fingeraftryk?", a: "Det er en digital kontrolsum på en fil eller en evidenspakke. Hvis indholdet ændres, ændres fingeraftrykket. Det gør det muligt at dokumentere, at en pakke er uændret siden den blev lavet." },
  { q: "Hvem har adgang?", a: "Kommunen eller projektejeren får login og styrer selv, hvem der skal have adgang. Vi giver ikke andre adgang til jeres data." },
];

export const Route = createFileRoute("/platformen")({
  head: () =>
    buildHead({
      title: "Platformen | Freyra Evidence Workspace",
      description: "Sådan virker Freyra Evidence Workspace: evidenskæde, offentlige datakilder, versionering, SHA-256 fingeraftryk og beplantningsegnethed.",
      path: "/platformen",
      jsonLd: [
        breadcrumbJsonLd([{ name: "Forside", path: "/" }, { name: "Platformen", path: "/platformen" }]),
        faqJsonLd(FAQ),
      ],
    }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <span className="eyebrow">Platformen</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Freyra Evidence Workspace.{" "}
              <span className="text-brand-deep">Én evidenskæde pr. projekt.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Platformen samler feltdata, offentlige data og faglig verifikation, så hver konklusion kan spores tilbage til sin kilde. Ikke et dashboard med flotte tal. Et arbejdsredskab med sporbarhed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full h-12 px-6 text-base"><Link to="/kontakt">Book en snak <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-12 px-6 text-base"><Link to="/ydelser">Se ydelserne</Link></Button>
            </div>
          </div>
          <EvidenceChain />
        </div>
      </section>

      {/* EVIDENSKÆDE */}
      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Evidenskæden"
          title="Hver påstand kan spores tilbage til kilden."
          body="En evidenskæde binder feltdata, offentlige data, beregninger og faglige vurderinger sammen. Når nogen spørger hvorfor, kan I vise det."
        />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <Camera className="w-5 h-5" />, t: "Feltdata med GPS", d: "Dronefotos og referencefotos med position og tidspunkt fra EXIF-data." },
            { icon: <Layers className="w-5 h-5" />, t: "Offentlige data", d: "Hentes automatisk fra danske datakilder og kobles på det konkrete areal." },
            { icon: <History className="w-5 h-5" />, t: "Versionering", d: "Hver ændring gemmes som en ny version med tidspunkt og ansvarlig." },
            { icon: <Fingerprint className="w-5 h-5" />, t: "SHA-256 fingeraftryk", d: "Evidenspakker får en digital kontrolsum, så det kan dokumenteres, at de er uændrede." },
          ].map((c) => (
            <div key={c.t} className="card-soft p-6 bg-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{c.icon}</div>
              <div className="mt-4 font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DATAKILDER */}
      <section className="surface-beige">
        <div className="container-page py-20">
          <SectionHeader
            eyebrow="Datakilder"
            title="Bygget på offentlige danske data."
            body="Vi henter data fra etablerede kilder, så grundlaget er det samme, som myndigheder og rådgivere bruger."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {KILDER.map((k) => (
              <div key={k.t} className="card-soft p-5 bg-card">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{k.icon}</div>
                <div className="mt-3 font-semibold text-sm">{k.t}</div>
                <p className="mt-1.5 text-xs text-muted-foreground">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIKATION */}
      <section className="container-page py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">Verifikation</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">AI assisterer. Mennesker vurderer.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Materialet gennemgås først maskinelt for at finde det, der kræver opmærksomhed. Derefter vurderer en fagperson resultatet, før det bliver en del af baselinen. Ingen konklusion står uden en faglig vurdering bag.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Maskinel gennemgang markerer afvigelser og områder, der kræver et nærmere kig",
              "Faglig vurdering af hvert punkt, før det indgår i baselinen",
              "Revisionsspor viser, hvad der er vurderet, af hvem og hvornår",
            ].map((b) => (
              <li key={b} className="flex gap-2 items-start text-sm">
                <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" /><span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-soft p-6 bg-card">
          <div className="text-sm font-semibold text-brand-deep">Gentagelsespunkter</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Ved førregistreringen etablerer vi faste positioner med GPS. Ved genbesøg fotograferes fra de samme punkter, så før/efter-materialet kan sammenlignes direkte.
          </p>
          <div className="mt-5 pt-4 border-t border-border text-sm font-semibold text-brand-deep">Revisionsspor</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Hvert datapunkt, hver beregning og hver vurdering i en evidenspakke har kilde, tidspunkt og ansvarlig. Det er det, der gør pakken efterprøvelig.
          </p>
        </div>
      </section>

      {/* BEPLANTNING */}
      <section className="surface-beige">
        <div className="container-page py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">Beplantningsegnethed</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Egnet, betinget eller uegnet. Med begrundelse.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Beplantningsanalysen er regelbaseret og bygger på jord, vand, beskyttede områder og eksisterende natur. Hvert areal får en vurdering i hektar med begrundelse og kildehenvisning.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Effekter vises som intervaller fra forskningslitteraturen, ikke som løfter. Det gør vurderingen egnet til dialog med lodsejere, rådgivere og treparten.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { icon: <TreePine className="w-4 h-4" />, t: "Egnet", d: "Forholdene understøtter beplantning uden særlige forbehold." },
              { icon: <TreePine className="w-4 h-4" />, t: "Betinget egnet", d: "Beplantning er mulig under konkrete forudsætninger, som beskrives." },
              { icon: <TreePine className="w-4 h-4" />, t: "Uegnet", d: "Forholdene taler imod beplantning, fx beskyttet natur eller lavbund." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-5 bg-card flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-brand-deep grid place-items-center shrink-0">{c.icon}</div>
                <div>
                  <div className="font-semibold text-sm">{c.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADGANG */}
      <section className="container-page py-20 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
        <div>
          <span className="eyebrow">Adgang</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Login for kommunen.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Jeres team får login til egne projekter med versioneret historik og deling af evidenspakker. Materialet ligger hos jer, ikke i en mailboks.
          </p>
        </div>
        <div className="card-soft p-6 bg-card flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center shrink-0"><Lock className="w-5 h-5" /></div>
          <div>
            <div className="font-semibold">Kontrolleret adgang</div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Kommunen eller projektejeren styrer, hvem der har adgang. Data deles ikke med andre uden jeres accept.
            </p>
          </div>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <GreenCTA
        title="Vil I se platformen med jeres eget område?"
        subtitle="Et pilotprojekt starter fra 125.000 kr. og viser hele evidenskæden i praksis."
        primary={{ to: "/kontakt", label: "Book en snak" }}
        secondary={{ to: "/ydelser", label: "Se ydelserne" }}
      />

      <CTASection />
    </PageLayout>
  );
}
