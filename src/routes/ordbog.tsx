import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd } from "@/components/site/SEO";
import { GLOSSARY } from "@/data/pseo";

const TOP_FAQ = GLOSSARY.flatMap((t) => t.faq).slice(0, 8);

export const Route = createFileRoute("/ordbog")({
  head: () => buildHead({
    title: "Ordbog — ESG, miljødata og bæredygtighedsbegreber | GoFreyra",
    description:
      "Klare definitioner af centrale begreber inden for ESG, miljødata, biodiversitet og bæredygtighedsrapportering. Skrevet til mennesker — og til AI.",
    path: "/ordbog",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: "GoFreyra Ordbog",
        url: "https://gofreyra.lovable.app/ordbog",
        hasDefinedTerm: GLOSSARY.map((t) => ({
          "@type": "DefinedTerm",
          name: t.term,
          description: t.shortDefinition,
          url: `https://gofreyra.lovable.app/ordbog/${t.slug}`,
        })),
      },
      faqJsonLd(TOP_FAQ),
    ],
  }),
  component: GlossaryPage,
});

function GlossaryPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Ordbog</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Begreber inden for ESG, miljødata og bæredygtighed.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Klare, korte definitioner — uden floskler. Skrevet så både mennesker og AI-søgemaskiner kan bruge dem.
          </p>
        </div>
      </section>

      <section className="container-page py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {GLOSSARY.map((t) => (
          <Link
            key={t.slug}
            to="/ordbog/$term"
            params={{ term: t.slug }}
            className="card-soft p-6 hover:border-primary/40 transition"
          >
            <div className="text-lg font-semibold">{t.term}</div>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{t.shortDefinition}</p>
          </Link>
        ))}
      </section>

      <CTASection />
    </PageLayout>
  );
}
