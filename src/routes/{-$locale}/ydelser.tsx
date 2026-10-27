import { LLink } from "@/components/site/LLink";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA } from "@/components/site/sections";
import sectionPhoto from "@/assets/drone-vandloeb-03.jpg.asset.json";
import { photoProps } from "@/lib/photo-variants";
import { localizePath, toLocale } from "@/i18n/locale";
import { useCopy } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/ydelser";

export const Route = createFileRoute("/{-$locale}/ydelser")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    return buildHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/ydelser",
      locale,
      jsonLd: [
        breadcrumbJsonLd([{ name: t.home, path: localizePath("/", locale) }, { name: t.servicesLabel, path: localizePath("/ydelser", locale) }]),
        faqJsonLd(t.faq),
      ],
    });
  },
  component: ServicesPage,
});

function ServicesPage() {
  const t = useCopy(COPY);

  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 max-w-3xl">
        <span className="eyebrow">{t.servicesLabel}</span>
        <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">
          {t.heading}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          {t.introduction}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="rounded-md h-12 px-6 text-base"><LLink to="/kontakt">{t.bookCall} <ArrowRight className="ml-1.5 w-4 h-4" /></LLink></Button>
        </div>
      </section>

      {/* Sektionsbillede: eget dronefoto */}
      <section className="container-page pb-4">
        <figure className="card-soft overflow-hidden p-0 bg-card">
          <img
            {...photoProps(sectionPhoto.url, "100vw")}
            alt={t.photoAlt}
            width={2000}
            height={1333}
            loading="lazy"
            className="w-full aspect-[21/9] object-cover"
          />
          <figcaption className="p-3 text-xs text-muted-foreground">{t.photoCaption}</figcaption>
        </figure>
      </section>

      <section className="container-page py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {t.services.map((s) => (
            <div key={s.anchor} id={s.anchor} className="card-soft p-6 md:p-8 bg-card flex flex-col scroll-mt-24">
              <h2 className="text-xl font-semibold">
                <LLink to="/ydelser/$slug" params={{ slug: s.anchor }} className="hover:text-brand-deep transition">{s.name}</LLink>
              </h2>
              <div className="mt-5">
                <div className="text-xs font-medium uppercase tracking-wider text-foreground/70 mb-2">{t.whatYouGet}</div>
                <ul className="space-y-2">
                  {s.gets.map((g) => (
                    <li key={g} className="flex gap-2 items-start text-sm">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <div className="text-xs font-medium uppercase tracking-wider text-foreground/70 mb-2">{t.whenItMakesSense}</div>
                <p className="text-sm text-muted-foreground">{s.when}</p>
              </div>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-4 mt-auto">
                <span className="text-sm font-semibold text-brand-deep">{s.price}</span>
                <Button asChild variant="outline" className="rounded-md">
                  <LLink to="/ydelser/$slug" params={{ slug: s.anchor }}>{t.readMore} <ArrowRight className="ml-1 w-4 h-4" /></LLink>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">{t.pricesExcludeVat}</p>
      </section>

      <FaqSection items={t.faq} />

      <GreenCTA
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primary={{ to: "/kontakt", label: t.bookCall }}
      />

      <CTASection />
    </PageLayout>
  );
}
