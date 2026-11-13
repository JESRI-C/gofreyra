import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA, PageHero, HeroActions } from "@/components/site/sections";
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
      <PageHero
        eyebrow={t.servicesLabel}
        title={t.heading}
        body={<p>{t.introduction}</p>}
        actions={<HeroActions primary={{ to: "/kontakt", label: t.bookCall }} />}
      />

      {/* Sektionsbillede: eget dronefoto */}
      <section className="container-page pt-16 md:pt-20">
        <figure className="photo-figure">
          <img
            {...photoProps(sectionPhoto.url, "(min-width: 1280px) 1200px, 100vw")}
            alt={t.photoAlt}
            width={2000}
            height={1333}
            loading="lazy"
            className="w-full aspect-[16/9] md:aspect-[21/9] object-cover"
          />
          <figcaption className="pt-3 text-xs text-muted-foreground">{t.photoCaption}</figcaption>
        </figure>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="border-b border-brand-rule">
          {t.services.map((s, i) => (
            <article key={s.anchor} id={s.anchor} className="border-t border-brand-rule py-10 md:py-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 scroll-mt-32">
              <div className="flex flex-col">
                <span className="text-[13px] text-brand-deep">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 text-2xl md:text-[28px]">
                  <LLink to="/ydelser/$slug" params={{ slug: s.anchor }} className="hover:text-brand-deep hover:underline decoration-1">{s.name}</LLink>
                </h2>
                <div className="mt-6 text-base font-semibold text-brand-deep">{s.price}</div>
                <div className="mt-6">
                  <Button asChild variant="outline" className="h-11 px-5">
                    <LLink to="/ydelser/$slug" params={{ slug: s.anchor }}>{t.readMore} <ArrowRight className="w-4 h-4" aria-hidden /></LLink>
                  </Button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="eyebrow">{t.whatYouGet}</h3>
                  <ul className="mt-4 border-t border-border">
                    {s.gets.map((g) => (
                      <li key={g} className="py-2.5 border-b border-border text-[15px]">{g}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="eyebrow">{t.whenItMakesSense}</h3>
                  <p className="mt-4 text-[15px] text-foreground/85 leading-relaxed">{s.when}</p>
                </div>
              </div>
            </article>
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
