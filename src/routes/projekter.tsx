import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Calendar, Database, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { Button } from "@/components/ui/button";
import { FaqSection, MicroStrip, CardGrid } from "@/components/site/sections";
import coastal from "@/assets/freyra/nature-river.jpg";
import stream from "@/assets/freyra/nature-stream.jpg";
import field from "@/assets/freyra/nature-restoration.jpg";
import forest from "@/assets/freyra/nature-forest.jpg";
import pasture from "@/assets/freyra/nature-autumn.jpg";
import lake from "@/assets/freyra/nature-wetland.jpg";
import coastRestoration from "@/assets/freyra/nature-sunset.jpg";

const FAQ = [
  { q: "Er det kunder eller egne projekter?", a: "Begge dele. Listen blander piloter, kundeprojekter og egne reference-arealer, hvor vi bygger og tester platformen." },
  { q: "Hvor henter I data fra?", a: "En kombination af felt, drone, satellit (Sentinel-2, Satlas), sensorer og officielle registre (DMI, GBIF, Naturdatabasen, Natura 2000, IPCC, SoilGrids)." },
  { q: "Kan vi lave et lignende projekt på vores areal?", a: "Ja. Et pilotforløb starter typisk med ét areal og en afgrænset baseline. Skriv til os, så foreslår vi et scope." },
  { q: "Hvor lang tid tager en baseline?", a: "Typisk 2-6 uger afhængigt af areal, datakilder og adgang til feltdata. Drone- og satellitbaselines kan etableres hurtigt." },
];

export const Route = createFileRoute("/projekter")({
  head: () =>
    buildHead({
      title: "Projekter — Felt-, drone- og satellitdata i drift | GoFreyra",
      description:
        "Eksempler på naturprojekter, kystgenopretning og arealmonitorering hvor GoFreyra kombinerer feltdata, drone, satellit og officielle kilder til dokumenterbar impact.",
      path: "/projekter",
      jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    }),
  component: ProjekterPage,
});

type Project = {
  img: string;
  alt: string;
  tag: string;
  title: string;
  location: string;
  period: string;
  summary: string;
  sources: string[];
  metrics: { k: string; v: string }[];
};

const PROJECTS: Project[] = [
  {
    img: coastal,
    alt: "Drone-luftfoto af snoet å gennem dansk natur og engareal",
    tag: "Kystgenopretning",
    title: "Tidevandszone — baseline og dige-monitorering",
    location: "Vestkysten, Danmark",
    period: "2023 – løbende",
    summary:
      "Drone- og satellitdata kombineres med DMI-vejr og Natura 2000-lag for at dokumentere ændringer i tidevandszone, sedimenttransport og diget over tid.",
    sources: ["Drone (RGB)", "Copernicus Sentinel-2", "DMI Open Data", "Natura 2000"],
    metrics: [
      { k: "Areal", v: "184 ha" },
      { k: "Datapunkter", v: "12.4k" },
      { k: "Evidence events", v: "327" },
    ],
  },
  {
    img: stream,
    alt: "Vandløb gennem eng med tæt vegetation — drone-perspektiv",
    tag: "Naturprojekt",
    title: "Vandløb og engareal — biodiversitetsbaseline",
    location: "Midtjylland, Danmark",
    period: "2022 – løbende",
    summary:
      "Artsobservationer fra GBIF kombineres med dronefotos, NDVI fra Satlas og feltregistreringer for at etablere en dokumenteret naturbaseline før restaurering.",
    sources: ["GBIF / DanBIF", "Satlas 2.0", "Naturdatabasen", "Feltobservationer"],
    metrics: [
      { k: "Arter registreret", v: "76" },
      { k: "Observationer", v: "1.2k" },
      { k: "NDVI-trend", v: "+0,08" },
    ],
  },
  {
    img: field,
    alt: "Naturareal under restaurering set fra drone — jordarbejde og randzoner",
    tag: "Areal & ESG",
    title: "Arealdrift og ESG-dokumentation",
    location: "Sønderjylland, Danmark",
    period: "2024 – løbende",
    summary:
      "Driftsdata, jordbundsmodeller fra SoilGrids og emissionsfaktorer fra IPCC bruges til at etablere et CO₂-startgrundlag og evidence trail for arealet.",
    sources: ["SoilGrids", "IPCC EFDB", "Driftsdata", "Danmarks Arealinformation"],
    metrics: [
      { k: "Felter", v: "23" },
      { k: "Scope 1+2", v: "beregnet" },
      { k: "Coverage", v: "92 %" },
    ],
  },
  {
    img: forest,
    alt: "Skovbryn med fyrretræer og åbent landskab i efterårslys",
    tag: "Skov & habitat",
    title: "Skovbryn — habitatkortlægning og kulstoflager",
    location: "Sydsverige",
    period: "2024 – løbende",
    summary:
      "Drone og Sentinel-2 bruges til at kortlægge habitatstruktur, træhøjde og kulstoflager. GBIF-observationer kobles til polygonen for at dokumentere artsdiversitet over tid.",
    sources: ["Drone (RGB)", "Copernicus Sentinel-2", "GBIF / DanBIF", "EEA Datahub"],
    metrics: [
      { k: "Areal", v: "47 ha" },
      { k: "Habitattyper", v: "5" },
      { k: "Kulstoflager", v: "estimeret" },
    ],
  },
  {
    img: lake,
    alt: "Vådområde og krat fotograferet med drone i sommerlys",
    tag: "Sø & opland",
    title: "Sø-opland — vandkvalitet og arealmosaik",
    location: "Värmland, Sverige",
    period: "2024 – løbende",
    summary:
      "Drone-ortofotos kombineres med Sentinel-2 og DMI-nedbørsdata for at følge vandkvalitet, randzoner og arealanvendelse omkring søen — med fuld evidence trail pr. observation.",
    sources: ["Drone (RGB)", "Copernicus Sentinel-2", "DMI Open Data", "Danmarks Arealinformation"],
    metrics: [
      { k: "Opland", v: "112 ha" },
      { k: "Randzoner", v: "kortlagt" },
      { k: "Sentinel-pas", v: "48/år" },
    ],
  },
  {
    img: coastRestoration,
    alt: "Risgærde af træpæle på vade — kystsikring og marskdannelse i aftenlys",
    tag: "Marsk & kystsikring",
    title: "Risgærder — marskdannelse og sedimentfangst",
    location: "Vadehavet, Danmark",
    period: "2023 – løbende",
    summary:
      "Risgærder dokumenteres med felt, drone og Sentinel-2 for at måle sedimentaflejring, vegetationsudbredelse og marskdannelse over tid — koblet til Natura 2000 og DMI-vandstand.",
    sources: ["Feltobservationer", "Drone (RGB)", "Copernicus Sentinel-2", "DMI Open Data", "Natura 2000"],
    metrics: [
      { k: "Strækning", v: "2,4 km" },
      { k: "Sediment", v: "+11 cm/år" },
      { k: "Evidence events", v: "184" },
    ],
  },
  {
    img: pasture,
    alt: "Græsningslandskab med birketræer og grusvej i efterårsfarver",
    tag: "Græsning & biodiversitet",
    title: "Ekstensiv græsning — naturpleje og dokumentation",
    location: "Småland, Sverige",
    period: "2023 – løbende",
    summary:
      "Feltregistreringer fra græsningsareal kombineres med NDVI-trend fra Satlas og artsdata fra GBIF for at dokumentere effekten af ekstensiv naturpleje på biodiversitet.",
    sources: ["Feltobservationer", "Satlas 2.0", "GBIF / DanBIF", "DMI Open Data"],
    metrics: [
      { k: "Areal", v: "62 ha" },
      { k: "Plantearter", v: "138" },
      { k: "NDVI-stabilitet", v: "høj" },
    ],
  },
];

function ProjekterPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Projekter fra felten</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
            Sådan ser GoFreyra ud, når data kommer fra virkeligheden.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Drone, satellit, felt og officielle kilder samlet ét sted — med kilde,
            tidspunkt og metode på hvert datapunkt.
          </p>
          <div className="mt-7 flex gap-3">
            <Button asChild className="rounded-full h-11 px-5">
              <Link to="/book-demo">
                Book demo <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-11 px-5">
              <Link to="/datakilder">Se datakilder</Link>
            </Button>
          </div>
        </div>
      </section>

      <MicroStrip items={["Felt + drone + satellit", "Officielle datakilder", "Audit trail på datapunkter", "Klar til biodiversitets- og kulstofmarkeder"]} />

      <CardGrid
        beige
        eyebrow="Sådan arbejder vi med projekter"
        title="Baseline. Drift. Dokumentation."
        cols={3}
        cards={[
          { t: "Baseline", d: "Etablér et dokumenteret startpunkt med felt, drone og satellit." },
          { t: "Drift og monitorering", d: "Følg udvikling over tid med faste indikatorer og evidence events." },
          { t: "Rapport og impact", d: "Træk dokumentation til myndigheder, partnere og fremtidige markeder." },
        ]}
      />

      <section className="container-page py-12 space-y-10">
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            className={`grid lg:grid-cols-2 gap-8 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="card-soft overflow-hidden p-0 bg-card">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="w-full h-72 md:h-[420px] object-cover"
              />
            </div>
            <div>
              <span className="eyebrow">{p.tag}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold">{p.title}</h2>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> {p.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {p.period}
                </span>
              </div>
              <p className="mt-4 text-foreground/80">{p.summary}</p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {p.metrics.map((m) => (
                  <div key={m.k} className="card-soft p-3 bg-card">
                    <div className="text-lg font-bold">{m.v}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{m.k}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground inline-flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" /> Datakilder
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.sources.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full text-xs bg-secondary text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <FaqSection items={FAQ} />

      <CTASection />
    </PageLayout>
  );
}
