import { toLocale, localizePath, SCHEMA_LANG } from "@/i18n/locale";
import { useLocale } from "@/i18n/useLocale";
import { KNOWLEDGE_COPY } from "@/i18n/pages/knowledge";
import { LLink } from "@/components/site/LLink";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead, breadcrumbJsonLd, SITE_URL } from "@/components/site/SEO";
import { brandTitle, getArtikel, getTerm, heroFor } from "@/lib/viden-helpers";

export const Route = createFileRoute("/{-$locale}/ordbog/$slug")({
  beforeLoad: ({ params }) => {
    if (!getTerm(params.slug, toLocale(params.locale))) throw notFound();
  },
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const k = KNOWLEDGE_COPY[locale];
    const t = getTerm(params.slug, locale);
    if (!t)
      return buildHead({
        title: k.term.notFoundTitle,
        description: k.term.notFoundDescription,
        path: `/ordbog/${params.slug}`,
        locale,
        noindex: true,
      });
    const url = `${SITE_URL}${localizePath(`/ordbog/${t.slug}`, locale)}`;
    return buildHead({
      title: brandTitle(t.metaTitle),
      description: t.metaDescription,
      path: `/ordbog/${t.slug}`,
      locale,
      ogImage: heroFor(t.slug).ogAbs,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: t.term,
          description: t.short,
          inDefinedTermSet: `${SITE_URL}${localizePath("/ordbog", locale)}`,
          url,
          inLanguage: SCHEMA_LANG[locale],
        },
        breadcrumbJsonLd([
          { name: k.home, path: localizePath("/", locale) },
          { name: k.ordbog, path: localizePath("/ordbog", locale) },
          { name: t.term, path: localizePath(`/ordbog/${t.slug}`, locale) },
        ]),
      ],
    });
  },
  component: TermPage,
  notFoundComponent: TermNotFound,
});

function TermNotFound() {
  const k = KNOWLEDGE_COPY[useLocale()];
  return (
    <PageLayout>
      <section className="container-page py-24 max-w-2xl">
        <h1 className="text-3xl md:text-4xl">{k.term.notFoundH1}</h1>
        <p className="mt-4 text-muted-foreground">{k.term.notFoundBody}</p>
        <LLink to="/ordbog" className="mt-6 inline-flex items-center text-brand-deep font-medium">{k.term.toGlossary} <ArrowRight className="ml-1 w-4 h-4" /></LLink>
      </section>
    </PageLayout>
  );
}

function TermPage() {
  const { slug } = Route.useParams();
  const locale = useLocale();
  const k = KNOWLEDGE_COPY[locale];
  const t = getTerm(slug, locale);
  if (!t) return null;
  const related = t.related.map((x) => getTerm(x, locale)).filter((x) => !!x);
  const articles = t.articles.map((x) => getArtikel(x, locale)).filter((x) => !!x);

  return (
    <PageLayout>
      <article className="container-page py-12 md:py-16 max-w-3xl">
        <nav aria-label={k.breadcrumb} className="text-sm text-muted-foreground">
          <LLink to="/" className="hover:text-foreground">{k.home}</LLink> <span aria-hidden>/</span>{" "}
          <LLink to="/ordbog" className="hover:text-foreground">{k.ordbog}</LLink> <span aria-hidden>/</span>{" "}
          <span className="text-foreground/80">{t.term}</span>
        </nav>
        <h1 className="mt-5 text-3xl md:text-5xl leading-[1.12]">{t.term}</h1>
        <p className="mt-6 card-soft p-5 surface-beige text-lg text-foreground/90 border-l-4 border-l-primary">{t.short}</p>
        {t.body.map((p, i) => (
          <p key={i} className="mt-5 text-foreground/85 leading-relaxed">{p}</p>
        ))}

        {t.sources.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl">{k.term.sources}</h2>
            <ol className="mt-4 list-decimal pl-5 space-y-2 text-sm">
              {t.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener" className="text-brand-deep underline underline-offset-2 hover:text-foreground break-words">{s.title}</a>
                </li>
              ))}
            </ol>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl">{k.term.related}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <LLink to="/ordbog/$slug" params={{ slug: r.slug }} className="inline-block rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-brand-deep transition">{r.term}</LLink>
                </li>
              ))}
            </ul>
          </section>
        )}

        {articles.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl">{k.term.readMore}</h2>
            <ul className="mt-4 space-y-2">
              {articles.map((a) => (
                <li key={a.slug}>
                  <LLink to="/viden/$slug" params={{ slug: a.slug }} className="inline-flex items-center text-brand-deep hover:text-foreground">
                    <ArrowRight className="mr-2 w-4 h-4 shrink-0" /> {a.h1}
                  </LLink>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-14 text-sm text-muted-foreground">
          {k.term.ctaLead}{" "}
          <LLink to="/kontakt" className="text-brand-deep font-medium hover:text-foreground">{k.term.ctaLink}</LLink>.
        </p>
      </article>
    </PageLayout>
  );
}
