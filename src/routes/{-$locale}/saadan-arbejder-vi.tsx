import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
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
      <section className="container-page py-16 md:py-24 max-w-3xl">
        <span className="eyebrow">{t.methodEyebrow}</span>
        <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">{t.heading}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          {t.introduction}
        </p>
      </section>

      <section className="container-page pb-4">
        <figure className="card-soft overflow-hidden p-0 bg-card">
          <img {...photoProps(sectionPhoto.url, "100vw")} alt={t.photoAlt} width={2000} height={1500} loading="lazy" className="w-full aspect-[21/9] object-cover" />
          <figcaption className="p-3 text-xs text-muted-foreground">{t.photoCaption}</figcaption>
        </figure>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.phases.map((f) => (
            <div key={f.n} className="card-soft p-6 bg-card">
              <div className="text-sm font-mono text-brand-deep">{f.n}</div>
              <div className="mt-2 font-semibold">{f.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow">{t.qualityEyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-4xl">{t.qualityHeading}</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.quality.map((k) => (
              <div key={k.t} className="card-soft p-6 bg-card">
                <div className="font-semibold">{k.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24 max-w-3xl">
        <span className="eyebrow">{t.limitationsEyebrow}</span>
        <h2 className="mt-4 text-3xl md:text-4xl">{t.limitationsHeading}</h2>
        <ul className="mt-6 space-y-3">
          {t.limitations.map((b) => (
            <li key={b} className="flex gap-3 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted-foreground">
          {t.resultsBefore}<LLink to="/ydelser" className="text-brand-deep font-medium hover:underline">{t.servicesLink}</LLink>{t.resultsBetween}<LLink to="/luftfoto" className="text-brand-deep font-medium hover:underline">{t.photosLink}</LLink>{t.resultsAfter}
        </p>
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
