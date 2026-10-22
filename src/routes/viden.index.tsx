import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { clusters, shorten } from "@/lib/viden-helpers";
import { DEFAULT_OG_IMAGE } from "@/lib/photo-variants";

export const Route = createFileRoute("/viden/")({
  head: () =>
    buildHead({
      title: "Viden om Grøn Trepart og naturprojekter | Freyra",
      description:
        "Artikler og guides om Grøn Trepart, lavbundsprojekter, § 3-natur, offentlige data og dokumentation af naturprojekter. Med kilder.",
      path: "/viden",
      ogImage: DEFAULT_OG_IMAGE,
      jsonLd: breadcrumbJsonLd([
        { name: "Forside", path: "/" },
        { name: "Viden", path: "/viden" },
      ]),
    }),
  component: VidenHub,
});

function VidenHub() {
  return (
    <PageLayout>
      <section className="container-page py-12 md:py-16 max-w-3xl">
        <nav aria-label="Brødkrumme" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Forside</Link> <span aria-hidden>/</span> <span>Viden</span>
        </nav>
        <h1 className="mt-5 text-3xl md:text-5xl leading-[1.12]">Viden om Grøn Trepart, lavbund og dokumentation</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Her samler vi forklaringer og guides om de regler, data og arbejdsgange, der præger natur- og arealprojekter i Grøn Trepart. Hver artikel henviser til de officielle kilder, så du kan gå videre derfra.
        </p>
      </section>

      {clusters().map((c, ci) => (
        <section key={c.name} className={ci % 2 === 1 ? "surface-beige" : ""}>
          <div className="container-page py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl">{c.name}</h2>
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.items.map((a) => {
                const pillar = a.kind === "pillar";
                return (
                  <article key={a.slug} className={`card-soft p-6 bg-card ${pillar ? "md:col-span-2 lg:col-span-3 border-primary/30" : ""}`}>
                    {pillar && <div className="text-xs font-medium uppercase tracking-wider text-brand-deep">Overblik</div>}
                    <h3 className={`mt-1 font-semibold ${pillar ? "text-xl md:text-2xl" : "text-base"}`}>
                      <Link to="/viden/$slug" params={{ slug: a.slug }} className="hover:text-brand-deep transition">{a.h1}</Link>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{shorten(a.intro, 160)}</p>
                    <Link to="/viden/$slug" params={{ slug: a.slug }} className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep" aria-label={`Læs artiklen: ${a.h1}`}>
                      Læs artiklen <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="container-page py-12">
        <div className="card-soft p-6 bg-card flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Ordbog</h2>
            <p className="mt-1 text-sm text-muted-foreground">Korte forklaringer på begreber som MARS, VLP, § 3-natur og baseline.</p>
          </div>
          <Link to="/ordbog" className="inline-flex items-center text-sm font-medium text-brand-deep">
            Gå til ordbogen <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
