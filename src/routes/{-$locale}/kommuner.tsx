import { LLink } from "@/components/site/LLink";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA, MicroStrip, SectionHeader } from "@/components/site/sections";
import heroPhoto from "@/assets/drone-vandloeb-06.jpg.asset.json";
import { photoProps, ogImageFor } from "@/lib/photo-variants";
import { getArtikel } from "@/lib/viden-helpers";

const LAES_MERE = [
  "groen-trepart",
  "lokale-groenne-treparter",
  "lavbundsprojekter",
  "dokumentation-af-naturprojekter",
].map(getArtikel).filter((a) => !!a);

const FAQ = [
  { q: "Er Freyra en erstatning for MARS, GATE eller Miljøportalen?", a: "Nej. Freyra er et lag oven på de systemer, I allerede bruger. Vi samler og verificerer data, så de kan bruges videre i jeres eksisterende arbejdsgange." },
  { q: "Kan kommunen selv tilgå materialet?", a: "Ja. Kommunen får login til Freyra Evidence Workspace og kan selv finde sine projekter, baseliner og evidenspakker." },
  { q: "Kan evidenspakkerne bruges til fondsansøgninger?", a: "Ja. Evidenspakkerne er bygget til at kunne deles med fonde, treparter og samarbejdspartnere. Hver påstand kan spores tilbage til sin kilde." },
  { q: "Hvad koster det for en kommune?", a: "Et pilotprojekt starter fra 125.000 kr. Et fast kommunalt setup prissættes efter aftale, afhængigt af antal projekter og omfang." },
  { q: "Hvem ejer data?", a: "Kommunen ejer sine egne data og evidenspakker. Vi opbevarer dem sikkert og gør dem tilgængelige via jeres login." },
];

export const Route = createFileRoute("/{-$locale}/kommuner")({
  head: () =>
    buildHead({
      title: "Til kommuner og treparter | Freyra Evidence Workspace",
      description: "Dokumentation af natur- og arealprojekter i Grøn Trepart, som kommunen kan stå på mål for. Login, evidenspakker og versionerede baseliner.",
      path: "/kommuner",
      ogImage: ogImageFor(heroPhoto.url),
      jsonLd: [
        breadcrumbJsonLd([{ name: "Forside", path: "/" }, { name: "Til kommuner", path: "/kommuner" }]),
        faqJsonLd(FAQ),
      ],
    }),
  component: MunicipalitiesPage,
});

function MunicipalitiesPage() {
  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <span className="eyebrow">Til kommuner og treparter</span>
          <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">
            Naturprojekter med dokumentation, der holder til gennemsyn.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            I Grøn Trepart skal kommunen kunne vise, hvad der er besluttet, hvorfor, og hvad det har flyttet. Freyra samler dronefotos, offentlige data og faglig verifikation i én evidenskæde.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-md h-12 px-6 text-base"><LLink to="/kontakt">Book en snak <ArrowRight className="ml-1.5 w-4 h-4" /></LLink></Button>
            <Button asChild variant="outline" className="rounded-md h-12 px-6 text-base"><LLink to="/ydelser">Se ydelserne</LLink></Button>
          </div>
        </div>
        <figure className="card-soft overflow-hidden p-0 bg-card">
          <img
            {...photoProps(heroPhoto.url, "100vw")}
            alt="Landbrugslandskab med vandløb og markarealer set fra drone"
            width={2000}
            height={1333}
            className="w-full aspect-[4/3] object-cover"
          />
          <figcaption className="p-3 text-xs text-muted-foreground">Eget dronefoto, august 2026.</figcaption>
        </figure>
      </section>

      <MicroStrip items={["Login for kommunen", "Evidenspakker til fonde og trepart", "Lag oven på MARS, GATE og Miljøportalen"]} />

      {/* HVORFOR */}
      <section className="container-page py-20 md:py-24">
        <SectionHeader
          eyebrow="Hvorfor det er vigtigt"
          title="Kommunen skal kunne stå på mål for tallene."
          body="Natur- og arealprojekter møder krav fra fonde, borgere, politikere og samarbejdspartnere. Når grundlaget er spredt, bliver hvert spørgsmål en opgave i sig selv."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { t: "Krav om dokumentation", d: "Fonde og tilskudsordninger kræver et efterprøveligt grundlag, før og efter projektet." },
            { t: "Dialog i treparten", d: "Lodsejere, rådgivere og interessenter skal kunne se det samme faktagrundlag." },
            { t: "Spredt materiale", d: "Fotos, kort og rapporter ligger i mapper og mails og er svære at finde igen om to år." },
          ].map((p) => (
            <div key={p.t} className="card-soft p-6">
              <div className="font-semibold">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HVAD I FÅR */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <SectionHeader eyebrow="Hvad I får" title="Et fælles, efterprøveligt grundlag." />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              { t: "Versioneret baseline", d: "En baselinerapport pr. område med dronefotos, offentlige data og faglig verifikation. Den har samme struktur fra område til område." },
              { t: "Evidenspakker til deling", d: "Pakker til fondsansøgninger, trepartsmøder og politisk behandling. Hver påstand har en kilde." },
              { t: "Gentagelsespunkter", d: "Faste positioner til før/efter-dokumentation, så udviklingen kan følges over tid." },
              { t: "Login for kommunen", d: "Adgang til egne projekter i Freyra Evidence Workspace. Materialet forsvinder ikke, når en medarbejder skifter job." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-6 bg-card">
                <div className="font-semibold">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EKSEMPEL */}
      <section className="container-page py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Eksempel</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Førregistrering af et vandløb i Sønderjylland.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sådan så en faktisk leverance ud. Området er anonymiseret.
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
          <div className="card-soft p-6 bg-card">
            <div className="text-sm font-semibold text-brand-deep">Det kan kommunen bruge det til</div>
            <ul className="mt-4 space-y-2.5">
              {[
                "Grundlag til den lokale trepart",
                "Bilag til fondsansøgninger",
                "Fast udgangspunkt for opfølgning om et år",
                "Svar til borgere og politikere med kildehenvisning",
              ].map((b) => (
                <li key={b} className="flex gap-2 items-start text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" /><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ADGANG */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">Adgang</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Kommunen har adgang til sit eget materiale.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Med login til Freyra Evidence Workspace kan jeres team finde projekter, baseliner og evidenspakker ét sted. Uden at skulle spørge os først.
            </p>
          </div>
          <div className="card-soft p-6 bg-card">
            <div className="font-semibold">Login for kommunen</div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Adgang til egne projekter, versioneret historik og deling af evidenspakker med fonde og samarbejdspartnere. Kommunen styrer selv, hvem der har adgang.
            </p>
          </div>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <GreenCTA
        title="Skal vi se på et af jeres områder?"
        subtitle="Et pilotprojekt starter fra 125.000 kr. og giver jer en komplet evidenskæde at vurdere værdien på."
        primary={{ to: "/kontakt", label: "Book en snak" }}
        secondary={{ to: "/platformen", label: "Se platformen" }}
      />

      <section className="container-page py-12">
        <h2 className="text-2xl md:text-3xl">Læs mere</h2>
        <ul className="mt-5 grid md:grid-cols-2 gap-3">
          {LAES_MERE.map((a) => (
            <li key={a.slug}>
              <LLink to="/viden/$slug" params={{ slug: a.slug }} className="card-soft p-4 bg-card flex items-center gap-2 text-brand-deep hover:border-primary/40 transition">
                <ArrowRight className="w-4 h-4 shrink-0" /> <span>{a.h1}</span>
              </LLink>
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </PageLayout>
  );
}
