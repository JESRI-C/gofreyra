import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, FolderOpen, Landmark, Handshake, Lock, MapPin, Camera, CalendarCheck, FileText } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA, MicroStrip, SectionHeader } from "@/components/site/sections";
import kommunerHero from "@/assets/kommuner-hero.png";

const FAQ = [
  { q: "Er Freyra en erstatning for MARS, GATE eller Miljøportalen?", a: "Nej. Freyra er et lag oven på de systemer, I allerede bruger. Vi samler og verificerer data, så de kan bruges videre i jeres eksisterende arbejdsgange." },
  { q: "Kan kommunen selv tilgå materialet?", a: "Ja. Kommunen får login til Freyra Evidence Workspace og kan altid finde sine projekter, baseliner og evidenspakker." },
  { q: "Kan evidenspakkerne bruges til fondsansøgninger?", a: "Ja. Evidenspakkerne er bygget til at kunne deles med fonde, treparter og samarbejdspartnere. Hver påstand kan spores tilbage til sin kilde." },
  { q: "Hvad koster det for en kommune?", a: "Et pilotprojekt starter fra 125.000 kr. Et fast kommunalt setup prissættes efter aftale, afhængigt af antal projekter og omfang." },
  { q: "Hvem ejer data?", a: "Kommunen ejer sine egne data og evidenspakker. Vi opbevarer dem sikkert og gør dem tilgængelige via jeres login." },
];

export const Route = createFileRoute("/kommuner")({
  head: () =>
    buildHead({
      title: "Til kommuner og treparter | Freyra Evidence Workspace",
      description: "Dokumentation af natur- og arealprojekter i Grøn Trepart, som kommunen kan stå på mål for. Login, evidenspakker og versionerede baseliner.",
      path: "/kommuner",
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
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <span className="eyebrow">Til kommuner og treparter</span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Naturprojekter med dokumentation,{" "}
              <span className="text-brand-deep">der holder til gennemsyn.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              I Grøn Trepart skal kommunen kunne vise, hvad der er besluttet, hvorfor, og hvad det har flyttet. Freyra samler dronefotos, offentlige data og faglig verifikation i én evidenskæde.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full h-12 px-6 text-base"><Link to="/kontakt">Book en snak <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
              <Button asChild variant="outline" className="rounded-full h-12 px-6 text-base"><Link to="/ydelser">Se ydelserne</Link></Button>
            </div>
          </div>
          <div className="card-soft overflow-hidden p-0 bg-card">
            <img src={kommunerHero} alt="Oversigt over et kommunalt naturområde med registreringspunkter og dokumentationskort" className="w-full object-cover" />
          </div>
        </div>
      </section>

      <MicroStrip items={["Login for kommunen", "Evidenspakker til fonde og trepart", "Lag oven på MARS, GATE og Miljøportalen"]} />

      {/* HVORFOR */}
      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Hvorfor det er vigtigt"
          title="Kommunen skal kunne stå på mål for tallene."
          body="Natur- og arealprojekter møder krav fra fonde, borgere, politikere og samarbejdspartnere. Når grundlaget er spredt, bliver hvert spørgsmål en opgave i sig selv."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { icon: <Landmark className="w-5 h-5" />, t: "Krav om dokumentation", d: "Fonde og tilskudsordninger kræver et efterprøveligt grundlag, før og efter projektet." },
            { icon: <Handshake className="w-5 h-5" />, t: "Dialog i treparten", d: "Lodsejere, rådgivere og interessenter skal kunne se det samme faktagrundlag." },
            { icon: <FolderOpen className="w-5 h-5" />, t: "Spredt materiale", d: "Fotos, kort og rapporter ligger i mapper og mails og er svære at finde igen om to år." },
          ].map((p) => (
            <div key={p.t} className="card-soft p-6">
              <div className="w-10 h-10 rounded-lg bg-secondary text-brand-deep grid place-items-center">{p.icon}</div>
              <div className="mt-4 font-semibold">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HVAD I FÅR */}
      <section className="surface-beige">
        <div className="container-page py-20">
          <SectionHeader eyebrow="Hvad I får" title="Et fælles, efterprøveligt grundlag." />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              { t: "Versioneret baseline", d: "En baselinerapport pr. område med dronefotos, offentlige data og faglig verifikation. Altid den samme struktur." },
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
      <section className="container-page py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Eksempel</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Førregistrering af et vandløb i Sønderjylland.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sådan så en faktisk leverance ud. Området er anonymiseret.
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
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" /><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LOGIN */}
      <section className="surface-beige">
        <div className="container-page py-20 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">Adgang</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Kommunen har altid adgang til sit eget materiale.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Med login til Freyra Evidence Workspace kan jeres team finde projekter, baseliner og evidenspakker ét sted. Uden at skulle spørge os først.
            </p>
          </div>
          <div className="card-soft p-6 bg-card flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center shrink-0"><Lock className="w-5 h-5" /></div>
            <div>
              <div className="font-semibold">Login for kommunen</div>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Adgang til egne projekter, versioneret historik og deling af evidenspakker med fonde og samarbejdspartnere.
              </p>
            </div>
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

      <CTASection />
    </PageLayout>
  );
}
