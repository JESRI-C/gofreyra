import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA } from "@/components/site/sections";
import sectionPhoto from "@/assets/drone-vandloeb-03.jpg.asset.json";
import { photoProps } from "@/lib/photo-variants";

const SERVICES = [
  {
    anchor: "dronefoerregistrering",
    name: "Droneførregistrering og baseline af vandløb og arealer",
    gets: [
      "Droneflyvning af området med GPS-stemplet billedmateriale",
      "Delstrækninger og gentagelsespunkter registreret med position",
      "Referencefotos klar til genbesøg",
      "Versioneret baselinerapport som PDF og evidenspakke",
    ],
    when: "Når et projekt skal i gang, og I mangler et dokumenteret udgangspunkt, som både kommunen, lodsejere og treparten kan forholde sig til.",
    price: "Pris efter aftale",
  },
  {
    anchor: "datagrundlag",
    name: "Datagrundlag og screening fra offentlige data",
    gets: [
      "Ortofoto, matrikel og højdemodel fra Dataforsyningen",
      "§3-registrerede natur- og beskyttede områder fra Danmarks Arealinformation",
      "Jordart og lavbund fra GEUS, vejr fra DMI, satellit fra Copernicus Sentinel-2",
      "Samlet kildeoversigt med status pr. datalag",
    ],
    when: "Tidligt i forløbet, før I investerer i feltarbejde, eller når I skal screene flere arealer og prioritere, hvor det giver mening at gå videre.",
    price: "Pris efter aftale",
  },
  {
    anchor: "monitorering",
    name: "Gentagen monitorering og efterflyvning (før/efter)",
    gets: [
      "Efterflyvning fra de samme gentagelsespunkter som ved førregistreringen",
      "Før/efter-fotos, der kan sammenlignes direkte",
      "Opdateret evidenspakke efter hvert genbesøg",
      "Grundlag til status over for fonde og trepart",
    ],
    when: "Når et projekt er igangsat, og I skal kunne vise, hvad indsatsen har flyttet, fx over for en fond eller den lokale trepart.",
    price: "Pris efter aftale",
  },
  {
    anchor: "beplantningsanalyse",
    name: "Beplantnings- og naturegnethedsanalyse (skitse til faglig validering)",
    gets: [
      "Egnethedskort i hektar: egnet, betinget egnet, uegnet",
      "Begrundelse pr. areal med kildehenvisning",
      "Effekter vist som intervaller fra forskningslitteraturen, ikke som løfter",
      "Skitse klar til faglig validering hos jeres rådgiver",
    ],
    when: "Når I overvejer beplantning eller naturtiltag og har brug for et struktureret udkast, som en fagperson kan tage stilling til.",
    price: "Pris efter aftale",
  },
  {
    anchor: "evidenspakke",
    name: "Evidenspakke til fonde, ansøgninger og lokal trepart",
    gets: [
      "Samlet pakke med dronefotos, kortdata og vurderinger",
      "Kildehenvisning på hver påstand",
      "Versionering og SHA-256 fingeraftryk, så pakken kan dokumenteres uændret",
      "Klar til deling med fonde, ansøgninger og den lokale trepart",
    ],
    when: "Når I skal søge midler, indsende en ansøgning eller præsentere et projekt for treparten, og grundlaget skal kunne efterprøves.",
    price: "Pris efter aftale",
  },
  {
    anchor: "pilot",
    name: "Pilotforløb og projekt-/porteføljelicens til Evidence Workspace (fra 125.000 kr.)",
    gets: [
      "Et afgrænset forløb på jeres eget område",
      "Hele evidenskæden fra dronefoto til versioneret baseline",
      "Adgang til Freyra Evidence Workspace for jeres team",
      "Gennemgang af resultatet og plan for videre brug",
    ],
    when: "Når I vil se værdien i praksis, før I binder jer til mere. Et pilotforløb giver jer en komplet leverance at vurdere på.",
    price: "Fra 125.000 kr.",
  },
];

const FAQ = [
  { q: "Hvad koster et pilotforløb?", a: "Et pilotforløb starter fra 125.000 kr. Det dækker et afgrænset område med aftalt omfang." },
  { q: "Hvad koster de øvrige ydelser?", a: "Pris efter aftale. Prisen afhænger af områdets størrelse, datagrundlag og omfang. Vi aftaler omfang og pris, før vi går i gang." },
  { q: "Skal vi bruge alle seks ydelser?", a: "Nej. De fleste starter med en droneførregistrering eller et pilotforløb og bygger videre derfra." },
  { q: "Kan I arbejde sammen med vores rådgiver?", a: "Ja. Vi leverer datagrundlag og evidenspakker, som jeres rådgiver kan bygge videre på. Egnethedsanalyser leveres som skitser til faglig validering hos jeres rådgiver." },
];

export const Route = createFileRoute("/{-$locale}/ydelser")({
  head: () =>
    buildHead({
      title: "Ydelser | Freyra Evidence Workspace",
      description: "Droneførregistrering, datagrundlag, monitorering, egnethedsanalyse og evidenspakker for natur- og arealprojekter. Pilotforløb fra 125.000 kr.",
      path: "/ydelser",
      jsonLd: [
        breadcrumbJsonLd([{ name: "Forside", path: "/" }, { name: "Ydelser", path: "/ydelser" }]),
        faqJsonLd(FAQ),
      ],
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 max-w-3xl">
        <span className="eyebrow">Ydelser</span>
        <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">
          Seks ydelser. Én evidenskæde.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Fra første droneflyvning til løbende opfølgning. Alle ydelser ender i det samme: dokumentation, der kan efterprøves.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="rounded-md h-12 px-6 text-base"><Link to="/kontakt">Book en snak <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
        </div>
      </section>

      {/* Sektionsbillede: eget dronefoto */}
      <section className="container-page pb-4">
        <figure className="card-soft overflow-hidden p-0 bg-card">
          <img
            {...photoProps(sectionPhoto.url, "100vw")}
            alt="Mark med hegn og bevoksning set fra drone under en førregistrering"
            width={2000}
            height={1333}
            loading="lazy"
            className="w-full aspect-[21/9] object-cover"
          />
          <figcaption className="p-3 text-xs text-muted-foreground">Eget dronefoto, august 2026.</figcaption>
        </figure>
      </section>

      <section className="container-page py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <div key={s.anchor} id={s.anchor} className="card-soft p-6 md:p-8 bg-card flex flex-col scroll-mt-24">
              <h2 className="text-xl font-semibold">
                <Link to="/ydelser/$slug" params={{ slug: s.anchor }} className="hover:text-brand-deep transition">{s.name}</Link>
              </h2>
              <div className="mt-5">
                <div className="text-xs font-medium uppercase tracking-wider text-foreground/70 mb-2">Hvad du får</div>
                <ul className="space-y-2">
                  {s.gets.map((g) => (
                    <li key={g} className="flex gap-2 items-start text-sm">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <div className="text-xs font-medium uppercase tracking-wider text-foreground/70 mb-2">Hvornår det giver mening</div>
                <p className="text-sm text-muted-foreground">{s.when}</p>
              </div>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-4 mt-auto">
                <span className="text-sm font-semibold text-brand-deep">{s.price}</span>
                <Button asChild variant="outline" className="rounded-md">
                  <Link to="/ydelser/$slug" params={{ slug: s.anchor }}>Læs mere <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Alle priser er ekskl. moms.</p>
      </section>

      <FaqSection items={FAQ} />

      <GreenCTA
        title="Fortæl os om jeres projekt."
        subtitle="Så vender vi tilbage med en konkret vurdering af, hvad der kan dokumenteres, og hvad det kræver."
        primary={{ to: "/kontakt", label: "Book en snak" }}
      />

      <CTASection />
    </PageLayout>
  );
}
