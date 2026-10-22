import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead, breadcrumbJsonLd, SITE_URL } from "@/components/site/SEO";
import { brandTitle, getArtikel, getTerm, heroFor } from "@/lib/viden-helpers";

export const Route = createFileRoute("/ordbog/$slug")({
  beforeLoad: ({ params }) => {
    if (!getTerm(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const t = getTerm(params.slug);
    if (!t)
      return buildHead({
        title: "Begreb ikke fundet | Freyra",
        description: "Begrebet findes ikke i ordbogen. Se alle begreber om Grøn Trepart, lavbund, offentlige data og dokumentation af naturprojekter.",
        path: `/ordbog/${params.slug}`,
        noindex: true,
      });
    const url = `${SITE_URL}/ordbog/${t.slug}`;
    return buildHead({
      title: brandTitle(t.metaTitle),
      description: t.metaDescription,
      path: `/ordbog/${t.slug}`,
      ogImage: heroFor(t.slug).ogAbs,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: t.term,
          description: t.short,
          inDefinedTermSet: `${SITE_URL}/ordbog`,
          url,
          inLanguage: "da-DK",
        },
        breadcrumbJsonLd([
          { name: "Forside", path: "/" },
          { name: "Ordbog", path: "/ordbog" },
          { name: t.term, path: `/ordbog/${t.slug}` },
        ]),
      ],
    });
  },
  component: TermPage,
  notFoundComponent: () => (
    <PageLayout>
      <section className="container-page py-24 max-w-2xl">
        <h1 className="text-3xl md:text-4xl">Begrebet findes ikke</h1>
        <p className="mt-4 text-muted-foreground">Se alle begreber i ordbogen.</p>
        <Link to="/ordbog" className="mt-6 inline-flex items-center text-brand-deep font-medium">Til ordbogen <ArrowRight className="ml-1 w-4 h-4" /></Link>
      </section>
    </PageLayout>
  ),
});

function TermPage() {
  const { slug } = Route.useParams();
  const t = getTerm(slug);
  if (!t) return null;
  const related = t.related.map(getTerm).filter((x) => !!x);
  const articles = t.articles.map(getArtikel).filter((x) => !!x);

  return (
    <PageLayout>
      <article className="container-page py-12 md:py-16 max-w-3xl">
        <nav aria-label="Brødkrumme" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Forside</Link> <span aria-hidden>/</span>{" "}
          <Link to="/ordbog" className="hover:text-foreground">Ordbog</Link> <span aria-hidden>/</span>{" "}
          <span className="text-foreground/80">{t.term}</span>
        </nav>
        <h1 className="mt-5 text-3xl md:text-5xl leading-[1.12]">{t.term}</h1>
        <p className="mt-6 card-soft p-5 surface-beige text-lg text-foreground/90 border-l-4 border-l-primary">{t.short}</p>
        {t.body.map((p, i) => (
          <p key={i} className="mt-5 text-foreground/85 leading-relaxed">{p}</p>
        ))}

        {t.sources.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl">Kilder</h2>
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
            <h2 className="text-2xl md:text-3xl">Relaterede begreber</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to="/ordbog/$slug" params={{ slug: r.slug }} className="inline-block rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-brand-deep transition">{r.term}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {articles.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl">Læs mere</h2>
            <ul className="mt-4 space-y-2">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link to="/viden/$slug" params={{ slug: a.slug }} className="inline-flex items-center text-brand-deep hover:text-foreground">
                    <ArrowRight className="mr-2 w-4 h-4 shrink-0" /> {a.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-14 text-sm text-muted-foreground">
          Har du et konkret projekt, hvor begrebet er relevant?{" "}
          <Link to="/kontakt" className="text-brand-deep font-medium hover:text-foreground">Skriv til os via kontaktformularen</Link>.
        </p>
      </article>
    </PageLayout>
  );
}
