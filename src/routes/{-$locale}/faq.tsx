import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA } from "@/components/site/sections";
import { localizePath, toLocale } from "@/i18n/locale";
import { useCopy } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/faq";

export const Route = createFileRoute("/{-$locale}/faq")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    return buildHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/faq",
      locale,
      jsonLd: [
        breadcrumbJsonLd([{ name: t.breadcrumbs.home, path: localizePath("/", locale) }, { name: t.breadcrumbs.faq, path: localizePath("/faq", locale) }]),
        faqJsonLd(t.groups.flatMap((g) => g.items)),
      ],
    });
  },
  component: FaqPage,
});

function FaqPage() {
  const t = useCopy(COPY);

  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 max-w-3xl">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">{t.title}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          {t.introduction}
        </p>
      </section>

      {t.groups.map((g) => (
        <FaqSection key={g.title} items={g.items} eyebrow={g.title} title={g.title} />
      ))}

      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow">{t.glossaryEyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-4xl">{t.glossaryTitle}</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {t.glossary.map((o) => (
              <div key={o.t} className="card-soft p-6 bg-card">
                <div className="font-semibold">{o.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreenCTA
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primary={{ to: "/kontakt", label: t.ctaLabel }}
      />

      <CTASection />
    </PageLayout>
  );
}
