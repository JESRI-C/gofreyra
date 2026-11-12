import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
import { Band, PageHero, RuleGrid } from "@/components/site/blocks";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA } from "@/components/site/sections";
import sectionPhoto from "@/assets/freyra-luftfoto-02.jpg.asset.json";
import { photoProps } from "@/lib/photo-variants";
import { localizePath, toLocale } from "@/i18n/locale";
import { useCopy } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/saadan";

export const Route = createFileRoute("/{-$locale}/saadan-arbejder-vi")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    return buildHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/saadan-arbejder-vi",
      locale,
      jsonLd: breadcrumbJsonLd([{ name: t.breadcrumbHome, path: localizePath("/", locale) }, { name: t.breadcrumbPage, path: localizePath("/saadan-arbejder-vi", locale) }]),
    });
  },
  component: MethodPage,
});

function MethodPage() {
  const t = useCopy(COPY);

  return (
    <PageLayout>
      <PageHero tone="sage" eyebrow={t.methodEyebrow} title={t.heading} body={t.introduction} />

      <Band tone="paper"><div className="container-page py-20 md:py-28">
        <figure className="m-0">
          <img {...photoProps(sectionPhoto.url, "100vw")} alt={t.photoAlt} width={2000} height={1500} loading="lazy" className="w-full aspect-[21/9] object-cover" />
          <figcaption className="mt-2.5 text-xs text-muted-foreground">{t.photoCaption}</figcaption>
        </figure>
      </div></Band>

      <Band tone="ivory"><div className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.phases.map((f) => (
            <div key={f.n} className="rule-item">
              <div className="display-num mb-4">{f.n}</div>
              <div className="mt-2 font-display text-2xl">{f.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div></Band>

      <Band tone="forest">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow">{t.qualityEyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-5xl">{t.qualityHeading}</h2>
          </div>
          <RuleGrid items={t.quality} cols={3} className="mt-14" />
        </div>
      </Band>

      <Band tone="sky"><div className="container-page py-20 md:py-28 max-w-3xl">
        <span className="eyebrow">{t.limitationsEyebrow}</span>
        <h2 className="mt-4 text-3xl md:text-5xl">{t.limitationsHeading}</h2>
        <ul className="mt-6 space-y-3">
          {t.limitations.map((b) => (
            <li key={b} className="flex gap-3 items-start border-t border-border py-4">
              <span className="mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-eyebrow shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted-foreground">
          {t.resultsBefore}<LLink to="/ydelser" className="text-foreground font-medium hover:underline">{t.servicesLink}</LLink>{t.resultsBetween}<LLink to="/luftfoto" className="text-foreground font-medium hover:underline">{t.photosLink}</LLink>{t.resultsAfter}
        </p>
      </div></Band>

      <GreenCTA
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primary={{ to: "/kontakt", label: t.ctaLabel }}
      />

      <CTASection />
    </PageLayout>
  );
}
