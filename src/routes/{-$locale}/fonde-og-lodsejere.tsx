import { LLink } from "@/components/site/LLink";
import { ArrowRight } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA } from "@/components/site/sections";
import sectionPhoto from "@/assets/freyra-luftfoto-06.jpg.asset.json";
import { photoProps, ogImageFor } from "@/lib/photo-variants";
import { getArtikel } from "@/lib/viden-helpers";
import { localizePath, toLocale } from "@/i18n/locale";
import { useCopy, useLocale } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/fonde";

export const Route = createFileRoute("/{-$locale}/fonde-og-lodsejere")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    return buildHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/fonde-og-lodsejere",
      locale,
      ogImage: ogImageFor(sectionPhoto.url),
      jsonLd: breadcrumbJsonLd([{ name: t.home, path: localizePath("/", locale) }, { name: t.audience, path: localizePath("/fonde-og-lodsejere", locale) }]),
    });
  },
  component: FondePage,
});

function FondePage() {
  const locale = useLocale();
  const t = useCopy(COPY);
  const LAES_MERE = [
    "evidenspakke-til-fonde",
    "tilskud-vaadomraader-lavbundsprojekter",
    "skovrejsning-groen-trepart",
    "baseline-foer-projektstart",
  ].map((s) => getArtikel(s, locale)).filter((a) => !!a);

  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 max-w-3xl">
        <span className="eyebrow">{t.audience}</span>
        <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">{t.heading}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          {t.intro}
        </p>
      </section>

      <section className="container-page pb-4">
        <figure className="card-soft overflow-hidden p-0 bg-card">
          <img {...photoProps(sectionPhoto.url, "100vw")} alt={t.photoAlt} width={2000} height={1500} loading="lazy" className="w-full aspect-[21/9] object-cover" />
          <figcaption className="p-3 text-xs text-muted-foreground">{t.photoCaption}</figcaption>
        </figure>
      </section>

      <section className="container-page py-20 md:py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow">{t.baselineEyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-4xl">{t.baselineHeading}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.baselineText}
          </p>
        </div>
        <div className="card-soft p-6 bg-card">
          <div className="text-xs font-medium uppercase tracking-wider text-foreground/70 mb-3">{t.packageHeading}</div>
          <ul className="space-y-2">
            {t.packageItems.map((p) => (
              <li key={p} className="flex gap-2 items-start text-sm">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-20 md:py-24 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">{t.applicationsEyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-4xl">{t.applicationsHeading}</h2>
            <p className="mt-4 text-muted-foreground">
              {t.applicationsText}
            </p>
          </div>
          <div>
            <span className="eyebrow">{t.tripartiteEyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-4xl">{t.tripartiteHeading}</h2>
            <p className="mt-4 text-muted-foreground">
              {t.tripartiteText}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">{t.servicesEyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-4xl">{t.servicesHeading}</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {t.services.map((y) => (
            <LLink key={y.slug} to="/ydelser/$slug" params={{ slug: y.slug }} className="card-soft p-6 bg-card group hover:border-primary/40 transition">
              <div className="font-semibold group-hover:text-brand-deep transition">{y.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{y.d}</p>
            </LLink>
          ))}
        </div>
      </section>

      <GreenCTA
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primary={{ to: "/kontakt", label: t.ctaLabel }}
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
