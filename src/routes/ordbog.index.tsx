import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd, SITE_URL } from "@/components/site/SEO";
import { ordbog } from "@/data/ordbog";
import { DEFAULT_OG_IMAGE } from "@/lib/photo-variants";

const sorted = [...ordbog].sort((a, b) => a.term.localeCompare(b.term, "da"));

function letterOf(term: string) {
  const c = term.replace(/^[^A-Za-zÆØÅæøå0-9]+/, "").charAt(0).toLocaleUpperCase("da");
  return /[0-9]/.test(c) ? "0-9" : c;
}

const groups: { letter: string; items: typeof sorted }[] = [];
for (const t of sorted) {
  const l = letterOf(t.term);
  const g = groups.find((x) => x.letter === l);
  if (g) g.items.push(t);
  else groups.push({ letter: l, items: [t] });
}

export const Route = createFileRoute("/ordbog/")({
  head: () =>
    buildHead({
      title: "Ordbog: Grøn Trepart, lavbund og natur | Freyra",
      description:
        "Korte forklaringer på begreber som MARS, VLP, § 3-natur, kulstofrig lavbundsjord, baseline og SHA-256. Med henvisning til officielle kilder.",
      path: "/ordbog",
      ogImage: DEFAULT_OG_IMAGE,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "@id": `${SITE_URL}/ordbog`,
          name: "Ordbog: begreber i natur- og arealprojekter",
          url: `${SITE_URL}/ordbog`,
          inLanguage: "da-DK",
          hasDefinedTerm: sorted.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.short,
            url: `${SITE_URL}/ordbog/${t.slug}`,
          })),
        },
        breadcrumbJsonLd([
          { name: "Forside", path: "/" },
          { name: "Ordbog", path: "/ordbog" },
        ]),
      ],
    }),
  component: OrdbogPage,
});

function OrdbogPage() {
  return (
    <PageLayout>
      <section className="container-page py-12 md:py-16 max-w-3xl">
        <nav aria-label="Brødkrumme" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Forside</Link> <span aria-hidden>/</span> <span>Ordbog</span>
        </nav>
        <h1 className="mt-5 text-3xl md:text-5xl leading-[1.12]">Ordbog: begreber i natur- og arealprojekter</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Korte forklaringer på de begreber, der går igen i Grøn Trepart, lavbundsprojekter og dokumentation. Hvert opslag henviser til officielle kilder.
        </p>
        <nav aria-label="Bogstaver" className="mt-8 flex flex-wrap gap-2">
          {groups.map((g) => (
            <a key={g.letter} href={`#bogstav-${g.letter}`} className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-border bg-card text-sm font-medium hover:border-primary/40 hover:text-brand-deep">{g.letter}</a>
          ))}
        </nav>
      </section>

      <section className="container-page pb-12 max-w-3xl">
        {groups.map((g) => (
          <div key={g.letter} id={`bogstav-${g.letter}`} className="mt-10 first:mt-0 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl text-brand-deep">{g.letter}</h2>
            <dl className="mt-4 divide-y divide-border border-y border-border">
              {g.items.map((t) => (
                <div key={t.slug} className="py-4">
                  <dt className="font-semibold">
                    <Link to="/ordbog/$slug" params={{ slug: t.slug }} className="hover:text-brand-deep transition">{t.term}</Link>
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{t.short}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
        <p className="mt-10 text-sm">
          <Link to="/viden" className="text-brand-deep font-medium hover:text-foreground">Læs artiklerne på Viden</Link>
        </p>
      </section>

      <CTASection />
    </PageLayout>
  );
}
