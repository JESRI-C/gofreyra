import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA } from "@/components/site/sections";
import sectionPhoto from "@/assets/drone-vandloeb-10.jpg.asset.json";

const PAKKE = [
  "Dronefotos med GPS og tidspunkt fra før og efter indsatsen",
  "Kortdata fra offentlige kilder med kilde og hentedato",
  "Faglige vurderinger med log over, hvem der har vurderet hvad",
  "Versionering og SHA-256 fingeraftryk, så pakken kan dokumenteres uændret",
];

export const Route = createFileRoute("/fonde-og-lodsejere")({
  head: () =>
    buildHead({
      title: "Til naturfonde og lodsejere | Freyra Evidence Workspace",
      description: "Dokumentation før og efter indsatsen. Evidenspakker til ansøgninger og lokal trepart for naturfonde og større lodsejere.",
      path: "/fonde-og-lodsejere",
      jsonLd: breadcrumbJsonLd([{ name: "Forside", path: "/" }, { name: "Til naturfonde og lodsejere", path: "/fonde-og-lodsejere" }]),
    }),
  component: FondePage,
});

function FondePage() {
  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 max-w-3xl">
        <span className="eyebrow">Til naturfonde og lodsejere</span>
        <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">Dokumentation, der kan følge pengene.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Når en fond støtter et naturprojekt, eller en lodsejer investerer i egne arealer, opstår det samme spørgsmål: hvad er der sket, og hvordan kan det efterprøves? Det svarer vi på.
        </p>
      </section>

      <section className="container-page pb-4">
        <figure className="card-soft overflow-hidden p-0 bg-card">
          <img src={sectionPhoto.url} alt="Vandløbskorridor mellem marker med majs, set fra drone ved efterflyvning" width={2000} height={1333} loading="lazy" className="w-full aspect-[21/9] object-cover" />
          <figcaption className="p-3 text-xs text-muted-foreground">Eget dronefoto, september 2026.</figcaption>
        </figure>
      </section>

      <section className="container-page py-20 md:py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow">Hvorfor før og efter</span>
          <h2 className="mt-4 text-3xl md:text-4xl">Uden en baseline kan man ikke vise forandring.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hvis området ikke er dokumenteret, før indsatsen går i gang, kan man bagefter kun beskrive, hvordan det ser ud nu. Med en versioneret baseline og efterflyvning fra de samme punkter kan I vise, hvad midlerne har flyttet.
          </p>
        </div>
        <div className="card-soft p-6 bg-card">
          <div className="text-xs font-medium uppercase tracking-wider text-foreground/70 mb-3">Hvad en evidenspakke indeholder</div>
          <ul className="space-y-2">
            {PAKKE.map((p) => (
              <li key={p} className="flex gap-2 items-start text-sm">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-20 md:py-24 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Ansøgninger</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Et grundlag, der kan efterprøves.</h2>
            <p className="mt-4 text-muted-foreground">
              En ansøgning bliver stærkere, når grundlaget kan kontrolleres. Evidenspakken samler fotos, kortdata og vurderinger med kildehenvisning på hver påstand, så den kan deles direkte med fonden.
            </p>
          </div>
          <div>
            <span className="eyebrow">Lokal trepart</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Det samme billede for alle parter.</h2>
            <p className="mt-4 text-muted-foreground">
              Når kommune, lodsejere og organisationer skal enes, hjælper det at se på det samme materiale. Evidenspakken giver treparten et fælles, efterprøveligt grundlag for dialog og beslutninger.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">Relevante ydelser</span>
          <h2 className="mt-4 text-3xl md:text-4xl">Her starter de fleste.</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { slug: "dronefoerregistrering", t: "Droneførregistrering og baseline", d: "Det dokumenterede udgangspunkt, som alt andet bygger på." },
            { slug: "monitorering", t: "Gentagen monitorering (før/efter)", d: "Efterflyvning fra de samme punkter, så udviklingen kan vises." },
            { slug: "evidenspakke", t: "Evidenspakke til fonde og trepart", d: "Den samlede pakke til ansøgninger og lokal trepart." },
          ].map((y) => (
            <Link key={y.slug} to="/ydelser/$slug" params={{ slug: y.slug }} className="card-soft p-6 bg-card group hover:border-primary/40 transition">
              <div className="font-semibold group-hover:text-brand-deep transition">{y.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{y.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <GreenCTA
        title="Fortæl os om projektet."
        subtitle="Så vender vi tilbage med en konkret vurdering af, hvad der kan dokumenteres, og hvad det kræver."
        primary={{ to: "/kontakt", label: "Book en snak" }}
      />

      <CTASection />
    </PageLayout>
  );
}
