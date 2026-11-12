import { toLocale, localizePath, SCHEMA_LANG } from "@/i18n/locale";
import { useLocale } from "@/i18n/useLocale";
import { KNOWLEDGE_COPY } from "@/i18n/pages/knowledge";
import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
import { Band, PageHero } from "@/components/site/blocks";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd, SITE_URL } from "@/components/site/SEO";
import { termerFor } from "@/data/content";
import type { Locale } from "@/i18n/locale";
import { DEFAULT_OG_IMAGE } from "@/lib/photo-variants";

function letterOf(term: string, locale: Locale) {
  const c = term.replace(/^[^A-Za-zÆØÅæøåÄÖÜäöü0-9]+/, "").charAt(0).toLocaleUpperCase(locale);
  return /[0-9]/.test(c) ? "0-9" : c;
}

function grouped(locale: Locale) {
  const sorted = [...termerFor(locale)].sort((a, b) => a.term.localeCompare(b.term, locale));
  const groups: { letter: string; items: typeof sorted }[] = [];
  for (const t of sorted) {
    const l = letterOf(t.term, locale);
    const g = groups.find((x) => x.letter === l);
    if (g) g.items.push(t);
    else groups.push({ letter: l, items: [t] });
  }
  return { sorted, groups };
}

export const Route = createFileRoute("/{-$locale}/ordbog/")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const k = KNOWLEDGE_COPY[locale];
    const { sorted } = grouped(locale);
    const base = `${SITE_URL}${localizePath("/ordbog", locale)}`;
    return buildHead({
      title: k.glossary.title,
      description: k.glossary.description,
      path: "/ordbog",
      locale,
      ogImage: DEFAULT_OG_IMAGE,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "@id": base,
          name: k.glossary.setName,
          url: base,
          inLanguage: SCHEMA_LANG[locale],
          hasDefinedTerm: sorted.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.short,
            url: `${base}/${t.slug}`,
          })),
        },
        breadcrumbJsonLd([
          { name: k.home, path: localizePath("/", locale) },
          { name: k.ordbog, path: localizePath("/ordbog", locale) },
        ]),
      ],
    });
  },
  component: OrdbogPage,
});

function OrdbogPage() {
  const locale = useLocale();
  const k = KNOWLEDGE_COPY[locale];
  const { groups } = grouped(locale);
  return (
    <PageLayout>
      <PageHero
        tone="sage"
        title={k.glossary.h1}
        body={k.glossary.intro}
        breadcrumb={(
        <nav aria-label={k.breadcrumb} className="text-sm text-muted-foreground">
          <LLink to="/" className="hover:text-foreground">{k.home}</LLink> <span aria-hidden>/</span> <span>{k.ordbog}</span>
        </nav>
        )}
      >
        <nav aria-label={k.glossary.letters} className="mt-8 flex flex-wrap gap-2">
          {groups.map((g) => (
            <a key={g.letter} href={`#${k.glossary.anchor}-${g.letter}`} className="w-9 h-9 inline-flex items-center justify-center rounded-sm border border-border bg-transparent text-sm font-medium hover:border-primary/40 hover:text-foreground">{g.letter}</a>
          ))}
        </nav>
      </PageHero>

      <Band tone="paper">
      <div className="container-page py-20 md:py-28">
        {groups.map((g) => (
          <div key={g.letter} id={`${k.glossary.anchor}-${g.letter}`} className="mt-16 first:mt-0 scroll-mt-24 grid gap-6 md:grid-cols-[8rem_1fr]">
            <h2 className="font-display text-6xl md:text-8xl text-eyebrow">{g.letter}</h2>
            <dl className="divide-y divide-border border-y border-border min-w-0">
              {g.items.map((t) => (
                <div key={t.slug} className="py-6">
                  <dt className="font-display text-2xl">
                    <LLink to="/ordbog/$slug" params={{ slug: t.slug }} className="hover:text-forest transition">{t.term}</LLink>
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{t.short}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
        <p className="mt-10 text-sm">
          <LLink to="/viden" className="text-forest font-medium hover:text-foreground">{k.glossary.readArticles}</LLink>
        </p>
      </div>
      </Band>

      <CTASection />
    </PageLayout>
  );
}
