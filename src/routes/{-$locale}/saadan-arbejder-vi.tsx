import { LLink } from "@/components/site/LLink";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA } from "@/components/site/sections";
import sectionPhoto from "@/assets/freyra-luftfoto-02.jpg.asset.json";
import { photoProps } from "@/lib/photo-variants";

const FASER = [
  { n: "01", t: "Afklaring af område og formål", d: "Vi aftaler områdets afgrænsning, projektets formål og hvad dokumentationen skal kunne bruges til. Først når det er klart, planlægger vi flyvning." },
  { n: "02", t: "Droneflyvning", d: "Vi flyver området med GPS-stemplede fotos og registrerer delstrækninger og gentagelsespunkter, så samme sted kan fotograferes igen senere." },
  { n: "03", t: "Automatisk hentning af offentlige data", d: "Ortofoto, matrikel og højdemodel fra Dataforsyningen. §3-natur og beskyttede områder fra Danmarks Arealinformation. Jordart og lavbund fra GEUS. Vejr fra DMI. Satellit fra Copernicus Sentinel-2." },
  { n: "04", t: "Verifikation", d: "AI assisterer sammenligningen af offentlige data og dronefotos. Derefter laver en fagperson vurderingen, og den logges." },
  { n: "05", t: "Baseline", d: "Resultatet samles i en versioneret rapport som PDF og ZIP med SHA-256 fingeraftryk, så den kan dokumenteres uændret." },
  { n: "06", t: "Opfølgning", d: "Ved efterflyvning fotograferer vi fra de samme gentagelsespunkter, så før og efter kan sammenlignes direkte." },
];

const KVALITET = [
  { t: "Revisionsspor", d: "Hver vurdering logges med tidspunkt og ansvarlig fagperson." },
  { t: "Versionering", d: "Hver ændring gemmes som en ny version. Intet overskrives." },
  { t: "Kildeangivelse", d: "Hvert datalag har kilde og hentedato." },
  { t: "Effekter som intervaller", d: "Vi viser effekter som intervaller fra forskningslitteraturen, aldrig som præcise tal." },
  { t: "Skitse til validering", d: "Beplantningsanalyser er skitser, som en fagperson hos jer skal validere." },
  { t: "Et lag oven på", d: "Freyra er et lag oven på MARS, GATE og Miljøportalen, ikke en erstatning." },
];

export const Route = createFileRoute("/{-$locale}/saadan-arbejder-vi")({
  head: () =>
    buildHead({
      title: "Sådan arbejder vi | Freyra Evidence Workspace",
      description: "Metoden fra droneflyvning til evidenspakke i seks faser. Alt kan spores til kilde, og en fagperson står bag hver konklusion.",
      path: "/saadan-arbejder-vi",
      jsonLd: breadcrumbJsonLd([{ name: "Forside", path: "/" }, { name: "Sådan arbejder vi", path: "/saadan-arbejder-vi" }]),
    }),
  component: MethodPage,
});

function MethodPage() {
  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 max-w-3xl">
        <span className="eyebrow">Metoden</span>
        <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">Fra flyvning til evidenspakke i seks faser.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Hver leverance følger den samme metode. Det gør resultatet forudsigeligt, og det gør det muligt at efterprøve hvert skridt.
        </p>
      </section>

      <section className="container-page pb-4">
        <figure className="card-soft overflow-hidden p-0 bg-card">
          <img {...photoProps(sectionPhoto.url, "100vw")} alt="Åbent vandløb mellem træer og eng, set fra drone" width={2000} height={1500} loading="lazy" className="w-full aspect-[21/9] object-cover" />
          <figcaption className="p-3 text-xs text-muted-foreground">Eget dronefoto, august 2022.</figcaption>
        </figure>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FASER.map((f) => (
            <div key={f.n} className="card-soft p-6 bg-card">
              <div className="text-sm font-mono text-brand-deep">{f.n}</div>
              <div className="mt-2 font-semibold">{f.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow">Kvalitet og sporbarhed</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Det, der gør dokumentationen efterprøvelig.</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {KVALITET.map((k) => (
              <div key={k.t} className="card-soft p-6 bg-card">
                <div className="font-semibold">{k.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24 max-w-3xl">
        <span className="eyebrow">Hvad vi ikke gør</span>
        <h2 className="mt-4 text-3xl md:text-4xl">Vi kender vores rolle.</h2>
        <ul className="mt-6 space-y-3">
          {[
            "Vi erstatter ikke myndighedsbehandling. Sager skal stadig behandles hos de relevante myndigheder.",
            "Vi erstatter ikke faglig rådgivning. Vores analyser er skitser, som jeres rådgiver skal validere.",
            "Vi beregner ikke effekter som præcise tal. Effekter vises som intervaller fra forskningslitteraturen.",
          ].map((b) => (
            <li key={b} className="flex gap-3 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted-foreground">
          Vil du se, hvad metoden ender i? Se <LLink to="/ydelser" className="text-brand-deep font-medium hover:underline">vores ydelser</LLink> eller <LLink to="/luftfoto" className="text-brand-deep font-medium hover:underline">billeder fra vores flyvninger</LLink>.
        </p>
      </section>

      <GreenCTA
        title="Skal vi bruge metoden på jeres område?"
        subtitle="Fortæl os om projektet, så vender vi tilbage med en konkret vurdering."
        primary={{ to: "/kontakt", label: "Book en snak" }}
      />

      <CTASection />
    </PageLayout>
  );
}
