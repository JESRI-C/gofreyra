import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Calendar, Database, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { Button } from "@/components/ui/button";
import coastal from "@/assets/project-coastal.jpg";
import stream from "@/assets/project-stream.jpg";
import field from "@/assets/project-field.jpg";

export const Route = createFileRoute("/projekter")({
  head: () =>
    buildHead({
      title: "Projekter — Felt-, drone- og satellitdata i drift | GoFreyra",
      description:
        "Eksempler på naturprojekter, kystgenopretning og arealmonitorering hvor GoFreyra kombinerer feltdata, drone, satellit og officielle kilder til dokumenterbar impact.",
      path: "/projekter",
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
    alt: "Kystnær naturgenopretning fotograferet med drone — vand, slik og dige",
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
    alt: "Markareal i Danmark med vejskilt A 630 og grusvej",
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

      <CTASection />
    </PageLayout>
  );
}
