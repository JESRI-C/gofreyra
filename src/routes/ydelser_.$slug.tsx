import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA } from "@/components/site/sections";
import { getYdelse, YDELSER } from "@/data/ydelser";
import photoDrone from "@/assets/drone-vandloeb-07.jpg.asset.json";
import photoData from "@/assets/freyra-luftfoto-03.jpg.asset.json";
import photoMon from "@/assets/freyra-luftfoto-04.jpg.asset.json";
import photoBepl from "@/assets/freyra-luftfoto-07.jpg.asset.json";
import photoEvi from "@/assets/drone-vandloeb-11.jpg.asset.json";
import photoPilot from "@/assets/drone-vandloeb-05.jpg.asset.json";
import { photoProps, ogImageFor } from "@/lib/photo-variants";
import { articlesForService } from "@/lib/viden-helpers";

const PHOTOS: Record<string, { url: string; alt: string; caption: string }> = {
  dronefoerregistrering: {
    url: photoDrone.url,
    alt: "Vandløb med små åbne vandflader, græs og bevoksning, set fra drone",
    caption: "Eget dronefoto, august 2026.",
  },
  datagrundlag: {
    url: photoData.url,
    alt: "Vandløb gennem skov, set oppefra med drone",
    caption: "Eget dronefoto, august 2023.",
  },
  monitorering: {
    url: photoMon.url,
    alt: "Lige vandløb mellem eng og krat, set fra drone",
    caption: "Eget dronefoto, august 2024.",
  },
  beplantningsanalyse: {
    url: photoBepl.url,
    alt: "Naturgenopretning med jordarbejde, set fra drone",
    caption: "Eget dronefoto, august 2024.",
  },
  evidenspakke: {
    url: photoEvi.url,
    alt: "Vandløbskorridor mellem dyrkede marker, set fra drone ved efterflyvning",
    caption: "Eget dronefoto, september 2026.",
  },
  pilot: {
    url: photoPilot.url,
    alt: "Græsstrimmel mellem dyrkede marker, referencefoto fra drone",
    caption: "Eget dronefoto, august 2026.",
  },
};


const SEO_TEXT: Record<string, { title: string; description: string }> = {
  dronefoerregistrering: {
    title: "Droneførregistrering og baseline af arealer | Freyra",
    description: "Førregistrering af vandløb og arealer før projektstart: droneflyvning, relevante offentlige data og faglig verifikation samlet i en versioneret baseline.",
  },
  datagrundlag: {
    title: "Datagrundlag og screening fra offentlige data | Freyra",
    description: "Offentlige data fra Dataforsyningen, Danmarks Arealinformation, GEUS, DMI og Sentinel-2 samlet på jeres areal med kildeangivelse og hentedato.",
  },
  monitorering: {
    title: "Gentagen monitorering og efterflyvning | Freyra",
    description: "Efterflyvning fra de samme gentagelsespunkter som ved førregistreringen, så før og efter kan sammenlignes direkte og udviklingen kan følges over tid.",
  },
  beplantningsanalyse: {
    title: "Beplantnings- og naturegnethedsanalyse | Freyra",
    description: "Regelbaseret vurdering af, hvor beplantning og naturtiltag er egnet, betinget egnet eller uegnet. En skitse med kilder, som jeres rådgiver kan validere.",
  },
  evidenspakke: {
    title: "Evidenspakke til fonde og lokal trepart | Freyra",
    description: "Dronefotos, kortdata og vurderinger samlet med kilde på hver påstand. Versioneret og med SHA-256 fingeraftryk til fonde, ansøgninger og lokal trepart.",
  },
  pilot: {
    title: "Pilotforløb og licens til Evidence Workspace | Freyra",
    description: "Et afgrænset pilotforløb på jeres eget område med hele evidenskæden fra dronefoto til versioneret baseline. Pilotforløb fra 125.000 kr. ekskl. moms.",
  },
};

export const Route = createFileRoute("/ydelser_/$slug")({
  beforeLoad: ({ params }) => {
    if (!getYdelse(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const s = getYdelse(params.slug);
    if (!s) return buildHead({ title: "Ydelse | Freyra", description: "Ydelse fra Freyra.", path: `/ydelser/${params.slug}`, noindex: true });
    return buildHead({
      title: SEO_TEXT[s.slug]?.title ?? `${s.title} | Freyra`,
      description: SEO_TEXT[s.slug]?.description ?? s.short,
      ogImage: PHOTOS[s.slug] ? ogImageFor(PHOTOS[s.slug].url) : undefined,
      path: `/ydelser/${s.slug}`,
      jsonLd: breadcrumbJsonLd([
        { name: "Forside", path: "/" },
        { name: "Ydelser", path: "/ydelser" },
        { name: s.title, path: `/ydelser/${s.slug}` },
      ]),
    });
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const s = getYdelse(slug);
  if (!s) return null;
  const photo = PHOTOS[s.slug];
  const reading = articlesForService(s.slug, 4);
  const related = s.related.map((r) => getYdelse(r)).filter(Boolean) as typeof YDELSER;

  return (
    <PageLayout>
      <section className="container-page py-12 md:py-16 max-w-3xl">
        <Link to="/ydelser" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 w-4 h-4" /> Alle ydelser
        </Link>
        <h1 className="mt-5 text-3xl md:text-5xl leading-[1.12]">{s.title}</h1>
        <p className="mt-6 text-lg text-muted-foreground">{s.intro}</p>
      </section>

      <section className="container-page pb-4">
        <figure className="card-soft overflow-hidden p-0 bg-card">
          <img {...photoProps(photo.url, "100vw")} alt={photo.alt} width={2000} height={photo.url.includes("freyra-luftfoto") ? 1500 : 1333} loading="lazy" className="w-full aspect-[21/9] object-cover" />
          <figcaption className="p-3 text-xs text-muted-foreground">{photo.caption}</figcaption>
        </figure>
      </section>

      <section className="container-page py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl">Hvad du får</h2>
          <ul className="mt-5 space-y-2">
            {s.gets.map((g) => (
              <li key={g} className="flex gap-2 items-start text-sm">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
          <h2 className="mt-10 text-2xl md:text-3xl">Hvornår det giver mening</h2>
          <p className="mt-4 text-muted-foreground">{s.when}</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl">Hvad vi skal bruge fra jer</h2>
          <ul className="mt-5 space-y-2">
            {s.needs.map((n) => (
              <li key={n} className="flex gap-2 items-start text-sm">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 card-soft p-5 bg-card">
            <div className="text-xs font-medium uppercase tracking-wider text-foreground/70">Pris</div>
            <div className="mt-1 text-lg font-semibold text-brand-deep">{s.price}</div>
            <p className="mt-2 text-xs text-muted-foreground">Alle priser er ekskl. moms.</p>
          </div>
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl">Forløbet i trin</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {s.steps.map((st) => (
              <div key={st.n} className="card-soft p-5 bg-card">
                <div className="text-sm font-mono text-brand-deep">{st.n}</div>
                <div className="mt-2 font-semibold">{st.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl md:text-3xl">Relaterede ydelser</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {related.map((r) => (
            <Link key={r.slug} to="/ydelser/$slug" params={{ slug: r.slug }} className="card-soft p-6 bg-card group hover:border-primary/40 transition">
              <div className="font-semibold group-hover:text-brand-deep transition">{r.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">Læs mere <ArrowRight className="ml-1 w-4 h-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      {reading.length > 0 && (
        <section className="container-page pb-16">
          <h2 className="text-2xl md:text-3xl">Læs mere</h2>
          <ul className="mt-5 space-y-2">
            {reading.map((a) => (
              <li key={a.slug}>
                <Link to="/viden/$slug" params={{ slug: a.slug }} className="inline-flex items-center text-brand-deep hover:text-foreground">
                  <ArrowRight className="mr-2 w-4 h-4 shrink-0" /> {a.h1}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <GreenCTA
        title="Skal vi tage en snak om jeres område?"
        subtitle="Fortæl os om projektet, så vender vi tilbage med en konkret vurdering."
        primary={{ to: "/kontakt", label: "Book en snak" }}
      />

      <CTASection />
    </PageLayout>
  );
}
