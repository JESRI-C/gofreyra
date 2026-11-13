import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, organizationJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA, MicroStrip, CardGrid, PageHero } from "@/components/site/sections";
import moodPhoto from "@/assets/freyra-luftfoto-05.jpg.asset.json";
import { photoProps } from "@/lib/photo-variants";
import { localizePath, toLocale } from "@/i18n/locale";
import { useCopy } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/om";

export const Route = createFileRoute("/{-$locale}/om")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    return buildHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/om",
      locale,
      jsonLd: [
        organizationJsonLd(),
        breadcrumbJsonLd([{ name: t.breadcrumbHome, path: localizePath("/", locale) }, { name: t.breadcrumbAbout, path: localizePath("/om", locale) }]),
      ],
    });
  },
  component: AboutPage,
});

function AboutPage() {
  const t = useCopy(COPY);

  return (
    <PageLayout>
      <PageHero eyebrow={t.eyebrow} title={t.heading} body={<p>{t.introduction}</p>} />

      <section className="container-page pt-16 md:pt-20 pb-4">
        <figure className="photo-figure">
          <img {...photoProps(moodPhoto.url, "(min-width: 1280px) 1200px, 100vw")} alt={t.photoAlt} width={2000} height={1500} loading="lazy" className="w-full aspect-[16/9] md:aspect-[21/9] object-cover" />
          <figcaption className="pt-3 text-xs text-muted-foreground">{t.photoCaption}</figcaption>
        </figure>
      </section>

      <MicroStrip items={t.microItems} />

      <section className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5 text-foreground/85">
          <h2 className="text-2xl md:text-3xl">{t.whyHeading}</h2>
          <p>
            {t.whyDocumentation}
          </p>
          <p>
            {t.whyEvidence}
          </p>
          <p>
            {t.whyClaims}
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl">{t.teamHeading}</h2>
          <div className="mt-5 space-y-4">
            {t.team.map((c) => (
              <div key={c.t} className="rule-card">
                <div className="font-semibold">{c.t}</div>
                <div className="text-xs font-medium text-brand-deep mt-0.5">{c.r}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="card-soft p-5 bg-card mt-4">
            <div className="font-semibold">{t.companyName}</div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {t.companyDetails}
            </p>
          </div>
        </div>
      </section>

      <CardGrid
        beige
        eyebrow={t.principlesEyebrow}
        title={t.principlesHeading}
        cols={4}
        cards={t.principles}
      />

      <GreenCTA
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primary={{ to: "/kontakt", label: t.ctaLabel }}
      />

      <CTASection />
    </PageLayout>
  );
}
