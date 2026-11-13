import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, organizationJsonLd } from "@/components/site/SEO";
import { FaqSection, FlowSection, GreenCTA, MicroStrip, SectionHeader, CardGrid, HeroActions } from "@/components/site/sections";
import { LandskabMotif } from "@/components/site/brand";
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
      {/* HERO: editorial two columns over own drone photo with the Landskab motif */}
      <section className="bg-brand-pale">
        <div className="container-page pt-10 md:pt-16">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <div className="mt-6 grid lg:grid-cols-[1.25fr_0.75fr] gap-6 lg:gap-16 items-start">
            <h1 className="display-1 max-w-[850px]">{t.hero.title}</h1>
            <div className="lg:pt-2">
              <p className="text-[17px] md:text-[19px] leading-relaxed text-foreground max-w-[450px]">{t.hero.body}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <HeroActions primary={{ to: "/kontakt", label: t.hero.primary }} secondary={{ to: "/ydelser", label: t.hero.secondary }} />
              </div>
            </div>
          </div>
          <figure className="relative mt-8 md:mt-11 h-[260px] md:h-[405px] overflow-hidden">
            <img
              {...photoProps(heroAsset.url, "(min-width: 1280px) 1200px, 100vw")}
              fetchPriority="high"
              alt={t.hero.alt}
              width={2000}
              height={1500}
              className="w-full h-full object-cover"
            />
            <LandskabMotif className="absolute -right-1 -bottom-px w-[240px] md:w-[500px]" />
            <figcaption className="absolute left-2.5 bottom-2.5 md:left-5 md:bottom-4 bg-background/95 px-2.5 py-1 text-[10px] md:text-xs text-brand-ink">{t.hero.credit}</figcaption>
          </figure>
        </div>
      </section>

      <MicroStrip items={t.microStrip} />

      {/* PROBLEM */}
      <section className="container-page py-16 md:py-20">
        <SectionHeader
          eyebrow={t.problem.eyebrow}
          title={t.problem.title}
          body={t.problem.body}
        />
        <div className="mt-10 grid md:grid-cols-3 gap-x-8 gap-y-6">
          {t.problem.cards.map((p, i) => (
            <div key={p.t} className="rule-card">
              <span className="block text-[13px] text-brand-deep">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-xl md:text-2xl">{p.t}</h3>
              <p className="mt-3 text-[15px] md:text-base text-foreground/85">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FLOW */}
      <FlowSection
        beige
        eyebrow={t.flow.eyebrow}
        title={t.flow.title}
        subtitle={t.flow.subtitle}
        steps={t.flow.steps}
      />

      {/* YDELSER */}
      <section className="container-page py-16 md:py-20">
        <SectionHeader mark eyebrow={t.services.eyebrow} title={t.services.title} />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {t.services.items.map((y, i) => (
            <LLink key={y.anchor} to="/ydelser" hash={y.anchor} className="rule-card group hover:border-primary transition-colors">
              <span className="block text-[13px] text-brand-deep">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-xl group-hover:text-brand-deep transition-colors">{y.t}</h3>
              <p className="mt-3 text-[15px] text-foreground/85">{y.d}</p>
              <span className="mt-4 inline-flex items-center text-[15px] font-semibold text-brand-deep underline underline-offset-4 decoration-1">{t.services.readMore}{" "}<ArrowRight className="ml-1 w-4 h-4" aria-hidden /></span>
            </LLink>
          ))}
        </div>
      </section>

      {/* LEVERANCE med billedgalleri */}
      <section className="surface-beige">
        <div className="container-page py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="eyebrow">{t.delivery.eyebrow}</p>
              <h2 className="mt-5 display-2">{t.delivery.title}</h2>
              <p className="mt-5 text-lg text-foreground/85">
                {t.delivery.body}
              </p>
              <ul className="mt-8 border-t border-brand-rule">
                {t.delivery.bullets.map((b) => (
                  <li key={b} className="py-3 border-b border-brand-rule/60 font-medium text-brand-ink">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {GALLERY.map((g) => (
                <figure key={g.caption} className="photo-figure">
                  <img {...photoProps(g.img, "(min-width: 1024px) 25vw, 50vw")} alt={g.alt} width={2000} height={1333} loading="lazy" className="w-full aspect-[3/2] object-cover" />
                  <figcaption className="pt-2 text-xs text-muted-foreground">{g.caption}{t.delivery.galleryCredit}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFENTLIGE DATA */}
      <section className="border-b border-border">
        <div className="container-page py-12 md:py-14 grid md:grid-cols-[auto_1fr] gap-3 md:gap-10 md:items-baseline">
          <p className="eyebrow">{t.publicData.eyebrow}</p>
          <p className="text-base md:text-lg text-brand-ink leading-relaxed">
            {t.publicData.sources}
          </p>
        </div>
      </section>

      {/* SÅDAN ARBEJDER VI */}
      <section className="container-page py-16 md:py-20">
        <SectionHeader eyebrow={t.principles.eyebrow} title={t.principles.title} />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {t.principles.cards.map((c) => (
            <div key={c.t} className="rule-step">
              <h3 className="text-xl">{c.t}</h3>
              <p className="mt-3 text-[15px] text-foreground/85">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HVEM */}
      <CardGrid
        beige
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

      <FaqSection items={t.faq} />

      <CTASection />
    </PageLayout>
  );
}
