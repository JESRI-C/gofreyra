import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, organizationJsonLd } from "@/components/site/SEO";
import { FaqSection, FlowSection, GreenCTA, MicroStrip, SectionHeader, CardGrid } from "@/components/site/sections";
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
      {/* HERO med eget dronefoto */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            {...photoProps(heroAsset.url, "100vw")}
            fetchPriority="high"
            alt={t.hero.alt}
            width={2000}
            height={1500}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,30,25,0.55) 0%, rgba(20,30,25,0.35) 50%, rgba(20,30,25,0.65) 100%)" }} />
        </div>
        <div className="relative container-page py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="eyebrow" style={{ color: "#fff" }}>{t.hero.eyebrow}</span>
            <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08] text-white">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg text-white/85">
              {t.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-md h-12 px-6 text-base bg-white text-brand-deep hover:bg-white/90"><LLink to="/kontakt">{t.hero.primary}{" "}<ArrowRight className="ml-1.5 w-4 h-4" /></LLink></Button>
              <Button asChild variant="outline" className="rounded-md h-12 px-6 text-base bg-transparent border-white/50 text-white hover:bg-white/10"><LLink to="/ydelser">{t.hero.secondary}</LLink></Button>
            </div>
            <p className="mt-6 text-xs text-white/60">{t.hero.credit}</p>
          </div>
        </div>
      </section>

      <MicroStrip items={t.microStrip} />

      {/* PROBLEM */}
      <section className="container-page py-20 md:py-24">
        <SectionHeader
          eyebrow={t.problem.eyebrow}
          title={t.problem.title}
          body={t.problem.body}
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {t.problem.cards.map((p) => (
            <div key={p.t} className="card-soft p-6">
              <div className="font-semibold">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
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
      <section className="container-page py-20 md:py-24">
        <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((y) => (
            <LLink key={y.anchor} to="/ydelser" hash={y.anchor} className="card-soft p-6 bg-card group hover:border-primary/40 transition">
              <div className="font-semibold group-hover:text-brand-deep transition">{y.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{y.d}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">{t.services.readMore}{" "}<ArrowRight className="ml-1 w-4 h-4" /></span>
            </LLink>
          ))}
        </div>
      </section>

      {/* LEVERANCE med billedgalleri */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow">{t.delivery.eyebrow}</span>
              <h2 className="mt-4 text-3xl md:text-4xl">{t.delivery.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t.delivery.body}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.delivery.bullets.map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {GALLERY.map((g) => (
                <figure key={g.caption} className="card-soft overflow-hidden p-0 bg-card">
                  <img {...photoProps(g.img, "(min-width: 1024px) 50vw, 100vw")} alt={g.alt} width={2000} height={1333} loading="lazy" className="w-full aspect-[3/2] object-cover" />
                  <figcaption className="p-3 text-xs text-muted-foreground">{g.caption}{t.delivery.galleryCredit}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFENTLIGE DATA */}
      <section className="container-page py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">{t.publicData.eyebrow}</span>
          <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
            {t.publicData.sources}
          </p>
        </div>
      </section>

      {/* SÅDAN ARBEJDER VI */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <SectionHeader eyebrow={t.principles.eyebrow} title={t.principles.title} />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.principles.cards.map((c) => (
              <div key={c.t} className="card-soft p-6 bg-card">
                <div className="font-semibold">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <FaqSection items={t.faq} />

      <CTASection />
    </PageLayout>
  );
}
