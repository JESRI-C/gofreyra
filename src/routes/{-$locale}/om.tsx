import { createFileRoute } from "@tanstack/react-router";
import { Band, PageHero } from "@/components/site/blocks";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, organizationJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA, MicroStrip, CardGrid } from "@/components/site/sections";
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
      <PageHero tone="ivory" eyebrow={t.eyebrow} title={t.heading} body={t.introduction} />

      <Band tone="paper"><div className="container-page py-20 md:py-28">
        <figure className="m-0">
          <img {...photoProps(moodPhoto.url, "100vw")} alt={t.photoAlt} width={2000} height={1500} loading="lazy" className="w-full aspect-[21/9] object-cover" />
          <figcaption className="mt-2.5 text-xs text-muted-foreground">{t.photoCaption}</figcaption>
        </figure>
      </div></Band>

      <MicroStrip items={t.microItems} />

      <Band tone="forest"><div className="container-page py-20 md:py-28 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5 text-foreground/85">
          <h2 className="text-3xl md:text-5xl">{t.whyHeading}</h2>
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
          <h2 className="text-3xl md:text-5xl">{t.teamHeading}</h2>
          <div className="mt-5 space-y-4">
            {t.team.map((c) => (
              <div key={c.t} className="rule-item">
                <div className="font-semibold">{c.t}</div>
                <div className="text-xs font-medium text-eyebrow mt-0.5">{c.r}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="rule-item mt-8">
            <div className="font-semibold">{t.companyName}</div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {t.companyDetails}
            </p>
          </div>
        </div>
      </div></Band>

      <CardGrid
        tone="sky"
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
