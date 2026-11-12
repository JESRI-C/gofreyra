import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, organizationJsonLd } from "@/components/site/SEO";
import { FaqSection, FlowSection, GreenCTA, MicroStrip, SectionHeader, CardGrid } from "@/components/site/sections";
import { Band, PageHero, RuleGrid } from "@/components/site/blocks";
import heroAsset from "@/assets/freyra-luftfoto-01.jpg.asset.json";
import g2 from "@/assets/drone-vandloeb-02.jpg.asset.json";
import g1 from "@/assets/drone-vandloeb-01.jpg.asset.json";
import g3 from "@/assets/drone-vandloeb-03.jpg.asset.json";
import g4 from "@/assets/drone-vandloeb-04.jpg.asset.json";
import { photoProps, ogImageFor } from "@/lib/photo-variants";
import { toLocale } from "@/i18n/locale";
import { useCopy } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/home";

export const Route = createFileRoute("/{-$locale}/")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    return buildHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/",
      locale,
      ogImage: ogImageFor(heroAsset.url),
      jsonLd: [
        organizationJsonLd(),
        { "@context": "https://schema.org", "@type": "WebSite", name: t.websiteName, url: "https://gofreyra.com", inLanguage: t.websiteLanguage },
        faqJsonLd(t.faq),
      ],
    });
  },
  component: HomePage,
});

function HomePage() {
  const t = useCopy(COPY);
  const galleryImages = [g1.url, g3.url, g4.url, g2.url];
  const GALLERY = t.delivery.gallery.map((g, index) => ({
    img: galleryImages[index],
    ...g,
  }));

  return (
    <PageLayout>
      <PageHero
        tone="forest"
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        body={t.hero.body}
        photo={{ src: heroAsset.url, alt: t.hero.alt, width: 2000, height: 1500, aspect: "aspect-[4/3] lg:aspect-[5/6]", caption: t.hero.credit }}
        actions={
          <>
            <Button asChild className="rounded-sm h-12 px-6 text-base"><LLink to="/kontakt">{t.hero.primary}{" "}<ArrowRight className="ml-1.5 w-4 h-4" /></LLink></Button>
            <Button asChild variant="outline" className="rounded-sm h-12 px-6 text-base bg-transparent"><LLink to="/ydelser">{t.hero.secondary}</LLink></Button>
          </>
        }
      />

      <MicroStrip items={t.microStrip} />

      {/* PROBLEM */}
      <Band tone="paper">
        <div className="container-page py-20 md:py-28">
          <SectionHeader eyebrow={t.problem.eyebrow} title={t.problem.title} body={t.problem.body} />
          <RuleGrid items={t.problem.cards} numbered className="mt-14" />
        </div>
      </Band>

      {/* FLOW */}
      <FlowSection
        tone="forest"
        eyebrow={t.flow.eyebrow}
        title={t.flow.title}
        subtitle={t.flow.subtitle}
        steps={t.flow.steps}
      />

      {/* YDELSER: editorial index */}
      <Band tone="ivory">
        <div className="container-page py-20 md:py-28">
          <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} />
          <ul className="mt-12 border-b border-foreground/20">
            {t.services.items.map((y, i) => (
              <li key={y.anchor} className="border-t border-foreground/20">
                <LLink
                  to="/ydelser"
                  hash={y.anchor}
                  className="group grid gap-x-8 gap-y-2 py-7 md:grid-cols-[4rem_1fr_1.3fr_auto] md:items-baseline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span aria-hidden className="font-display text-lg text-eyebrow">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl md:text-[1.7rem] leading-tight group-hover:underline decoration-clay decoration-2 underline-offset-[6px]">{y.t}</span>
                  <span className="text-muted-foreground leading-relaxed">{y.d}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-forest whitespace-nowrap">{t.services.readMore}<ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" /></span>
                </LLink>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* LEVERANCE med billedgalleri */}
      <Band tone="sky">
        <div className="container-page py-20 md:py-28">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">{t.delivery.eyebrow}</span>
              <h2 className="mt-4 text-3xl md:text-5xl">{t.delivery.title}</h2>
              <p className="mt-5 text-lg text-foreground/85">
                {t.delivery.body}
              </p>
              <ul className="mt-8 border-t border-foreground/20">
                {t.delivery.bullets.map((b) => (
                  <li key={b} className="flex gap-3 items-start border-b border-foreground/20 py-3">
                    <span aria-hidden className="mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-forest shrink-0" />
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
              {GALLERY.map((g, i) => (
                <figure key={g.caption} className={i % 2 === 1 ? "sm:mt-12" : ""}>
                  <img {...photoProps(g.img, "(min-width: 1024px) 28vw, 50vw")} alt={g.alt} width={2000} height={1333} loading="lazy" className="w-full aspect-[4/5] object-cover" />
                  <figcaption className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{g.caption}{t.delivery.galleryCredit}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </Band>

      {/* OFFENTLIGE DATA */}
      <Band tone="paper">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="eyebrow">{t.publicData.eyebrow}</span>
            <p className="mt-6 mx-auto max-w-none font-display text-xl md:text-3xl leading-snug text-foreground/90">
              {t.publicData.sources}
            </p>
          </div>
        </div>
      </Band>

      {/* SÅDAN ARBEJDER VI */}
      <Band tone="sage">
        <div className="container-page py-20 md:py-28">
          <SectionHeader eyebrow={t.principles.eyebrow} title={t.principles.title} />
          <RuleGrid items={t.principles.cards} cols={4} className="mt-14" />
        </div>
      </Band>

      {/* HVEM */}
      <CardGrid
        eyebrow={t.audience.eyebrow}
        title={t.audience.title}
        cols={3}
        cards={t.audience.cards}
      />

      <GreenCTA
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        primary={{ to: "/kontakt", label: t.cta.primary }}
        secondary={{ to: "/platformen", label: t.cta.secondary }}
      />

      <FaqSection items={t.faq} tone="ivory" />

      <CTASection />
    </PageLayout>
  );
}
