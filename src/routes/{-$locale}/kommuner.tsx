import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA, MicroStrip, SectionHeader } from "@/components/site/sections";
import heroPhoto from "@/assets/drone-vandloeb-06.jpg.asset.json";
import { photoProps, ogImageFor } from "@/lib/photo-variants";
import { getArtikel } from "@/lib/viden-helpers";
import { localizePath, toLocale } from "@/i18n/locale";
import { useCopy, useLocale } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/kommuner";

export const Route = createFileRoute("/{-$locale}/kommuner")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    return buildHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/kommuner",
      locale,
      ogImage: ogImageFor(heroPhoto.url),
      jsonLd: [
        breadcrumbJsonLd([
          { name: t.breadcrumbs.home, path: localizePath("/", locale) },
          { name: t.breadcrumbs.municipalities, path: localizePath("/kommuner", locale) },
        ]),
        faqJsonLd(t.faq),
      ],
    });
  },
  component: MunicipalitiesPage,
});

function MunicipalitiesPage() {
  const locale = useLocale();
  const t = useCopy(COPY);
  const LAES_MERE = [
    "groen-trepart",
    "lokale-groenne-treparter",
    "lavbundsprojekter",
    "dokumentation-af-naturprojekter",
  ].map((slug) => getArtikel(slug, locale)).filter((a) => !!a);

  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            {t.hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-md h-12 px-6 text-base"><LLink to="/kontakt">{t.hero.primary}{" "}<ArrowRight className="ml-1.5 w-4 h-4" /></LLink></Button>
            <Button asChild variant="outline" className="rounded-md h-12 px-6 text-base"><LLink to="/ydelser">{t.hero.secondary}</LLink></Button>
          </div>
        </div>
        <figure className="card-soft overflow-hidden p-0 bg-card">
          <img
            {...photoProps(heroPhoto.url, "100vw")}
            alt={t.hero.imageAlt}
            width={2000}
            height={1333}
            className="w-full aspect-[4/3] object-cover"
          />
          <figcaption className="p-3 text-xs text-muted-foreground">{t.hero.caption}</figcaption>
        </figure>
      </section>

      <MicroStrip items={t.microStrip} />

      {/* HVORFOR */}
      <section className="container-page py-20 md:py-24">
        <SectionHeader
          eyebrow={t.why.eyebrow}
          title={t.why.title}
          body={t.why.body}
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {t.why.cards.map((p) => (
            <div key={p.t} className="card-soft p-6">
              <div className="font-semibold">{p.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HVAD I FÅR */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <SectionHeader eyebrow={t.deliverables.eyebrow} title={t.deliverables.title} />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {t.deliverables.cards.map((c) => (
              <div key={c.t} className="card-soft p-6 bg-card">
                <div className="font-semibold">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EKSEMPEL */}
      <section className="container-page py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">{t.example.eyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-4xl">{t.example.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.example.body}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {t.example.items.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft p-6 bg-card">
            <div className="text-sm font-semibold text-brand-deep">{t.example.usesTitle}</div>
            <ul className="mt-4 space-y-2.5">
              {t.example.uses.map((b) => (
                <li key={b} className="flex gap-2 items-start text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" /><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ADGANG */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">{t.access.eyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-4xl">{t.access.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.access.body}
            </p>
          </div>
          <div className="card-soft p-6 bg-card">
            <div className="font-semibold">{t.access.cardTitle}</div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {t.access.cardBody}
            </p>
          </div>
        </div>
      </section>

      <FaqSection items={t.faq} />

      <GreenCTA
        title={t.greenCta.title}
        subtitle={t.greenCta.subtitle}
        primary={{ to: "/kontakt", label: t.greenCta.primary }}
        secondary={{ to: "/platformen", label: t.greenCta.secondary }}
      />

      <section className="container-page py-12">
        <h2 className="text-2xl md:text-3xl">{t.readMore}</h2>
        <ul className="mt-5 grid md:grid-cols-2 gap-3">
          {LAES_MERE.map((a) => (
            <li key={a.slug}>
              <LLink to="/viden/$slug" params={{ slug: a.slug }} className="card-soft p-4 bg-card flex items-center gap-2 text-brand-deep hover:border-primary/40 transition">
                <ArrowRight className="w-4 h-4 shrink-0" /> <span>{a.h1}</span>
              </LLink>
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </PageLayout>
  );
}
