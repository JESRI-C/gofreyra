import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA } from "@/components/site/sections";
import { getYdelse, YDELSER } from "@/data/ydelser";
import photoDrone from "@/assets/drone-vandloeb-07.jpg.asset.json";
import photoData from "@/assets/drone-vandloeb-08.jpg.asset.json";
import photoMon from "@/assets/drone-vandloeb-10.jpg.asset.json";
import photoBepl from "@/assets/drone-vandloeb-09.jpg.asset.json";
import photoEvi from "@/assets/drone-vandloeb-11.jpg.asset.json";
import photoPilot from "@/assets/drone-vandloeb-05.jpg.asset.json";

const PHOTOS: Record<string, { url: string; alt: string; caption: string }> = {
  dronefoerregistrering: {
    url: photoDrone.url,
    alt: "Vandløb med små åbne vandflader, græs og bevoksning, set fra drone",
    caption: "Eget dronefoto, august 2026.",
  },
  datagrundlag: {
    url: photoData.url,
    alt: "Vandløbsstrækning med græs og bevoksning, set fra drone",
    caption: "Eget dronefoto, august 2026.",
  },
  monitorering: {
    url: photoMon.url,
    alt: "Vandløbskorridor mellem marker med majs, set fra drone ved efterflyvning",
    caption: "Eget dronefoto, september 2026.",
  },
  beplantningsanalyse: {
    url: photoBepl.url,
    alt: "Græsareal og bevoksning langs vandløb, set fra drone",
    caption: "Eget dronefoto, august 2026.",
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

export const Route = createFileRoute("/ydelser_/$slug")({
  beforeLoad: ({ params }) => {
    if (!getYdelse(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const s = getYdelse(params.slug);
    if (!s) return buildHead({ title: "Ydelse | Freyra", description: "Ydelse fra Freyra.", path: `/ydelser/${params.slug}`, noindex: true });
    return buildHead({
      title: `${s.title} | Freyra`,
      description: s.short,
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
          <img src={photo.url} alt={photo.alt} width={2000} height={1333} loading="lazy" className="w-full aspect-[21/9] object-cover" />
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

      <GreenCTA
        title="Skal vi tage en snak om jeres område?"
        subtitle="Fortæl os om projektet, så vender vi tilbage med en konkret vurdering."
        primary={{ to: "/kontakt", label: "Book en snak" }}
      />

      <CTASection />
    </PageLayout>
  );
}
