import { LLink } from "@/components/site/LLink";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { EvidenceChain } from "@/components/site/EvidenceChain";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA, SectionHeader } from "@/components/site/sections";
import s1 from "@/assets/drone-vandloeb-08.jpg.asset.json";
import s2 from "@/assets/drone-vandloeb-09.jpg.asset.json";
import s3 from "@/assets/drone-vandloeb-10.jpg.asset.json";
import s4 from "@/assets/freyra-luftfoto-08.jpg.asset.json";
import { photoProps } from "@/lib/photo-variants";

const KILDER = [
  { t: "Dataforsyningen", d: "Ortofoto, matrikel og dansk højdemodel (DHM)." },
  { t: "Danmarks Arealinformation", d: "§3-registrerede natur- og beskyttede områder." },
  { t: "GEUS", d: "Jordart og lavbundskort." },
  { t: "DMI", d: "Vejrdata til kontekst for feltobservationer." },
  { t: "Copernicus Sentinel-2", d: "Satellitbilleder til vegetation og arealdække." },
];

const SCREENS = [
  { src: s1.url, alt: "Vandløb med åbne vandflader og bevoksning, set fra drone", caption: "Fotopunkter placeres ud fra billedets GPS." },
  { src: s2.url, alt: "Vandløb gennem græs og bevoksning, set fra drone", caption: "Offentlige data hentes for området." },
  { src: s3.url, alt: "Vandløbskorridor mellem marker, set fra drone", caption: "Dronefoto og offentlige data sammenlignes og vurderes fagligt." },
  { src: s4.url, alt: "Vandløb mellem eng og bevoksning, set fra drone", caption: "Baseline samles i en versioneret rapport." },
];

const FAQ = [
  { q: "Hvad er Freyra Evidence Workspace?", a: "Det er den platform, hvor jeres projekter, baseliner og evidenspakker ligger. Her samler vi dronefotos, offentlige data og faglig verifikation i én evidenskæde pr. projekt." },
  { q: "Er Freyra en erstatning for MARS, GATE eller Miljøportalen?", a: "Nej. Freyra er et lag oven på de systemer, I allerede bruger. Vi samler og verificerer data, så de kan bruges videre i jeres eksisterende arbejdsgange." },
  { q: "Hvad betyder versionering?", a: "Hver ændring i et projekt gemmes som en ny version. I kan se, hvad der er ændret, hvornår og af hvem, og I kan gå tilbage til en tidligere version." },
  { q: "Hvad er et SHA-256 fingeraftryk?", a: "Det er en digital kontrolsum på en fil eller en evidenspakke. Hvis indholdet ændres, ændres fingeraftrykket. Det gør det muligt at dokumentere, at en pakke er uændret siden den blev lavet." },
  { q: "Hvem har adgang?", a: "Kommunen eller projektejeren får login og styrer selv, hvem der skal have adgang. Vi giver ikke andre adgang til jeres data." },
];

export const Route = createFileRoute("/{-$locale}/platformen")({
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
      <section className="container-page py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <span className="eyebrow">Platformen</span>
          <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">
            Freyra Evidence Workspace. Én evidenskæde pr. projekt.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Platformen samler feltdata, offentlige data og faglig verifikation, så hver konklusion kan spores tilbage til sin kilde. Ikke et dashboard med flotte tal. Et arbejdsredskab med sporbarhed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-md h-12 px-6 text-base"><LLink to="/kontakt">Book en snak <ArrowRight className="ml-1.5 w-4 h-4" /></LLink></Button>
            <Button asChild variant="outline" className="rounded-md h-12 px-6 text-base"><LLink to="/ydelser">Se ydelserne</LLink></Button>
          </div>
        </div>
        <EvidenceChain />
      </section>

      {/* EVIDENSKÆDE */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <SectionHeader
            eyebrow="Evidenskæden"
            title="Hver påstand kan spores tilbage til kilden."
            body="En evidenskæde binder feltdata, offentlige data, beregninger og faglige vurderinger sammen. Når nogen spørger hvorfor, kan I vise det."
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Feltdata med GPS", d: "Dronefotos og referencefotos med position og tidspunkt fra EXIF-data." },
              { t: "Offentlige data", d: "Hentes automatisk fra danske datakilder og kobles på det konkrete areal." },
              { t: "Versionering", d: "Hver ændring gemmes som en ny version med tidspunkt og ansvarlig." },
              { t: "SHA-256 fingeraftryk", d: "Evidenspakker får en digital kontrolsum, så det kan dokumenteres, at de er uændrede." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-6 bg-card">
                <div className="font-semibold">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <SectionHeader
          eyebrow="Arbejdsgangen"
          title="Fra dronefoto til baseline i fire trin."
          body="Billederne er egne dronefotos."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {SCREENS.map((s) => (
            <figure key={s.src} className="card-soft overflow-hidden p-0 bg-card">
              <img {...photoProps(s.src, "100vw")} alt={s.alt} width={1600} height={1000} loading="lazy" className="w-full aspect-[8/5] object-cover" />
              <figcaption className="p-4 text-sm text-muted-foreground">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* DATAKILDER */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <SectionHeader
            eyebrow="Datakilder"
            title="Bygget på offentlige danske data."
            body="Vi henter data fra etablerede kilder, så grundlaget er det samme, som myndigheder og rådgivere bruger."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {KILDER.map((k) => (
              <div key={k.t} className="card-soft p-5 bg-card">
                <div className="font-semibold text-sm">{k.t}</div>
                <p className="mt-1.5 text-xs text-muted-foreground">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIKATION */}
      <section className="container-page py-20 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">Verifikation</span>
          <h2 className="mt-4 text-3xl md:text-4xl">AI assisterer. Mennesker vurderer.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Materialet gennemgås først maskinelt for at finde det, der kræver opmærksomhed. Derefter vurderer en fagperson resultatet, før det bliver en del af baselinen. Ingen konklusion står uden en faglig vurdering bag.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm">
            {[
              "Maskinel gennemgang markerer afvigelser og områder, der kræver et nærmere kig",
              "Faglig vurdering af hvert punkt, før det indgår i baselinen",
              "Revisionsspor viser, hvad der er vurderet, af hvem og hvornår",
            ].map((b) => (
              <li key={b} className="flex gap-2 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" /><span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-soft p-6 bg-card">
          <div className="font-semibold text-brand-deep">Gentagelsespunkter</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Ved førregistreringen etablerer vi faste positioner med GPS. Ved genbesøg fotograferes fra de samme punkter, så før/efter-materialet kan sammenlignes direkte.
          </p>
          <div className="mt-5 pt-4 border-t border-border font-semibold text-brand-deep">Revisionsspor</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Hvert datapunkt, hver beregning og hver vurdering i en evidenspakke har kilde, tidspunkt og ansvarlig. Det er det, der gør pakken efterprøvelig.
          </p>
        </div>
      </section>

      {/* BEPLANTNING */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">Beplantningsegnethed</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Egnet, betinget eller uegnet. Med begrundelse.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Beplantningsanalysen er regelbaseret og bygger på jord, vand, beskyttede områder og eksisterende natur. Hvert areal får en vurdering i hektar med begrundelse og kildehenvisning.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Effekter vises som intervaller fra forskningslitteraturen, ikke som løfter. Det gør vurderingen egnet til dialog med lodsejere, rådgivere og treparten.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { t: "Egnet", d: "Forholdene understøtter beplantning uden særlige forbehold." },
              { t: "Betinget egnet", d: "Beplantning er mulig under konkrete forudsætninger, som beskrives." },
              { t: "Uegnet", d: "Forholdene taler imod beplantning, fx beskyttet natur eller lavbund." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-5 bg-card">
                <div className="font-semibold text-sm">{c.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADGANG */}
      <section className="container-page py-20 md:py-24 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
        <div>
          <span className="eyebrow">Adgang</span>
          <h2 className="mt-4 text-3xl md:text-4xl">Login for kommunen.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Jeres team får login til egne projekter med versioneret historik og deling af evidenspakker. Materialet ligger hos jer, ikke i en mailboks.
          </p>
        </div>
        <div className="card-soft p-6 bg-card">
          <div className="font-semibold">Kontrolleret adgang</div>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Kommunen eller projektejeren styrer, hvem der har adgang. Data deles ikke med andre uden jeres accept.
          </p>
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
