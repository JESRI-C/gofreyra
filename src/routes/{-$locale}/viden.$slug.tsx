import { toLocale, localizePath, SCHEMA_LANG } from "@/i18n/locale";
import { useLocale } from "@/i18n/useLocale";
import { KNOWLEDGE_COPY } from "@/i18n/pages/knowledge";
import { LLink } from "@/components/site/LLink";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd, faqJsonLd, SITE_URL } from "@/components/site/SEO";
import { artiklerFor } from "@/data/content";
import { photoProps } from "@/lib/photo-variants";
import {
  brandTitle,
  formatDate,
  getArtikel,
  getService,
  getTerm,
  heroFor,
} from "@/lib/viden-helpers";

export const Route = createFileRoute("/{-$locale}/viden/$slug")({
  beforeLoad: ({ params }) => {
    if (!getArtikel(params.slug, toLocale(params.locale))) throw notFound();
  },
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const k = KNOWLEDGE_COPY[locale];
    const a = getArtikel(params.slug, locale);
    if (!a)
      return buildHead({
        title: k.article.notFoundTitle,
        description: k.article.notFoundDescription,
        path: `/viden/${params.slug}`,
        locale,
        noindex: true,
      });
    const url = `${SITE_URL}${localizePath(`/viden/${a.slug}`, locale)}`;
    const hero = heroFor(a.slug, locale);
    const jsonLd: object[] = [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: a.h1,
        description: a.metaDescription,
        datePublished: a.updated,
        dateModified: a.updated,
        inLanguage: SCHEMA_LANG[locale],
        author: { "@type": "Organization", name: "Gofreyra ApS", url: SITE_URL },
        publisher: { "@type": "Organization", name: "Gofreyra ApS", url: SITE_URL },
        mainEntityOfPage: url,
        image: hero.srcAbs,
      },
      breadcrumbJsonLd([
        { name: k.home, path: localizePath("/", locale) },
        { name: k.viden, path: localizePath("/viden", locale) },
        { name: a.h1, path: localizePath(`/viden/${a.slug}`, locale) },
      ]),
    ];
    if (a.faq.length) jsonLd.push(faqJsonLd(a.faq));
    return buildHead({
      title: brandTitle(a.metaTitle),
      description: a.metaDescription,
      path: `/viden/${a.slug}`,
      locale,
      ogType: "article",
      ogImage: hero.ogAbs,
      jsonLd,
    });
  },
  component: ArticlePage,
  notFoundComponent: ArticleNotFound,
});

function ArticleNotFound() {
  const k = KNOWLEDGE_COPY[useLocale()];
  return (
    <PageLayout>
      <section className="container-page py-24 max-w-2xl">
        <h1 className="text-3xl md:text-4xl">{k.article.notFoundH1}</h1>
        <p className="mt-4 text-muted-foreground">{k.article.notFoundBody}</p>
        <LLink to="/viden" className="mt-6 inline-flex items-center text-brand-deep font-medium">{k.article.toViden} <ArrowRight className="ml-1 w-4 h-4" /></LLink>
      </section>
    </PageLayout>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 items-start">
      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function ArticlePage() {
  const { slug } = Route.useParams();
  const locale = useLocale();
  const k = KNOWLEDGE_COPY[locale];
  const a = getArtikel(slug, locale);
  if (!a) return null;
  const hero = heroFor(a.slug, locale);
  const terms = a.terms.map((x) => getTerm(x, locale)).filter((t) => !!t);
  const related = a.related.map((x) => getArtikel(x, locale)).filter((r) => !!r);
  const services = a.services.map((x) => getService(x, locale)).filter((s) => !!s);
  const inCluster = a.kind === "pillar" ? artiklerFor(locale).filter((x) => x.cluster === a.cluster && x.slug !== a.slug) : [];

  return (
    <PageLayout>
      <article>
        <header className="container-page pt-12 md:pt-16 max-w-3xl">
          <nav aria-label={k.breadcrumb} className="text-sm text-muted-foreground">
            <LLink to="/" className="hover:text-foreground">{k.home}</LLink> <span aria-hidden>/</span>{" "}
            <LLink to="/viden" className="hover:text-foreground">{k.viden}</LLink> <span aria-hidden>/</span>{" "}
            <span className="text-foreground/80">{a.h1}</span>
          </nav>
          <h1 className="mt-5 text-3xl md:text-5xl leading-[1.12]">{a.h1}</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {k.article.updated} <time dateTime={a.updated}>{formatDate(a.updated, locale)}</time>
          </p>
          <p className="mt-6 text-lg md:text-xl text-foreground/85">{a.intro}</p>
        </header>

        <figure className="container-page mt-10">
          <div className="card-soft overflow-hidden p-0 bg-card">
            <img
              {...photoProps(hero.src, "100vw")}
              loading="lazy"
              alt={hero.alt}
              decoding="async"
              className="w-full aspect-[21/9] object-cover"
            />
            <figcaption className="p-3 text-xs text-muted-foreground">{k.article.caption}</figcaption>
          </div>
        </figure>

        <div className="container-page py-12 max-w-3xl">
          {a.sections.map((s) => (
            <section key={s.h2} className="mt-10 first:mt-0">
              <h2 className="text-2xl md:text-3xl">{s.h2}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-foreground/85 leading-relaxed">{p}</p>
              ))}
              {s.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 text-foreground/85">
                  {s.bullets.map((b) => <Bullet key={b}>{b}</Bullet>)}
                </ul>
              )}
            </section>
          ))}

          {a.faq.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl md:text-3xl">{k.article.faq}</h2>
              <div className="mt-6 space-y-3">
                {a.faq.map((f) => (
                  <details key={f.q} className="card-soft px-5 py-4 bg-card group">
                    <summary className="cursor-pointer font-medium list-none flex justify-between gap-4">
                      <h3 className="text-base font-medium">{f.q}</h3>
                      <span aria-hidden className="text-brand-deep group-open:rotate-45 transition">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {a.sources.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl md:text-3xl">{k.article.sources}</h2>
              <ol className="mt-5 list-decimal pl-5 space-y-2 text-sm">
                {a.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener" className="text-brand-deep underline underline-offset-2 hover:text-foreground break-words">{s.title}</a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {terms.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl md:text-3xl">{k.article.terms}</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {terms.map((t) => (
                  <li key={t.slug}>
                    <LLink to="/ordbog/$slug" params={{ slug: t.slug }} className="inline-block rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-brand-deep transition">{t.term}</LLink>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {inCluster.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl md:text-3xl">{k.article.inCluster}</h2>
              <ul className="mt-5 space-y-2">
                {inCluster.map((r) => (
                  <li key={r.slug}>
                    <LLink to="/viden/$slug" params={{ slug: r.slug }} className="inline-flex items-center text-brand-deep hover:text-foreground">
                      <ArrowRight className="mr-2 w-4 h-4 shrink-0" /> {r.h1}
                    </LLink>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl md:text-3xl">{k.article.related}</h2>
              <ul className="mt-5 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <LLink to="/viden/$slug" params={{ slug: r.slug }} className="inline-flex items-center text-brand-deep hover:text-foreground">
                      <ArrowRight className="mr-2 w-4 h-4 shrink-0" /> {r.h1}
                    </LLink>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {services.length > 0 && (
            <aside className="mt-14 card-soft p-6 surface-beige">
              <h2 className="text-xl font-semibold">{k.article.services}</h2>
              <ul className="mt-4 space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <LLink to="/ydelser/$slug" params={{ slug: s.slug }} className="inline-flex items-center text-sm font-medium text-brand-deep hover:text-foreground">
                      <ArrowRight className="mr-2 w-4 h-4 shrink-0" /> {s.title}
                    </LLink>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </article>

      <CTASection />
    </PageLayout>
  );
}
