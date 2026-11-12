import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { EvidenceChain } from "@/components/site/EvidenceChain";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA, SectionHeader } from "@/components/site/sections";
import s1 from "@/assets/drone-vandloeb-08.jpg.asset.json";
import s2 from "@/assets/drone-vandloeb-09.jpg.asset.json";
import s3 from "@/assets/drone-vandloeb-10.jpg.asset.json";
import s4 from "@/assets/freyra-luftfoto-08.jpg.asset.json";
import { photoProps } from "@/lib/photo-variants";
import { localizePath, toLocale } from "@/i18n/locale";
import { useCopy } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/platformen";

export const Route = createFileRoute("/{-$locale}/platformen")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    return buildHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/platformen",
      locale,
      jsonLd: [
        breadcrumbJsonLd([{ name: t.home, path: localizePath("/", locale) }, { name: t.platform, path: localizePath("/platformen", locale) }]),
        faqJsonLd(t.faq),
      ],
    });
  },
  component: PlatformPage,
});

function PlatformPage() {
  const t = useCopy(COPY);
  const KILDER = t.sources.items;
  const SCREENS = [s1, s2, s3, s4].map((image, index) => ({
    src: image.url,
    ...t.screens[index],
  }));
  const FAQ = t.faq;

  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <span className="eyebrow">{t.platform}</span>
          <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">
            {t.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            {t.heroBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-md h-12 px-6 text-base"><LLink to="/kontakt">{t.book} <ArrowRight className="ml-1.5 w-4 h-4" /></LLink></Button>
            <Button asChild variant="outline" className="rounded-md h-12 px-6 text-base"><LLink to="/ydelser">{t.services}</LLink></Button>
          </div>
        </div>
        <EvidenceChain />
      </section>

      {/* EVIDENSKÆDE */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <SectionHeader
            eyebrow={t.evidence.eyebrow}
            title={t.evidence.title}
            body={t.evidence.body}
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.evidence.cards.map((c) => (
              <div key={c.t} className="card-soft p-6 bg-card">
                <div className="font-semibold">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <SectionHeader
          eyebrow={t.workflow.eyebrow}
          title={t.workflow.title}
          body={t.workflow.body}
        />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {SCREENS.map((s) => (
            <figure key={s.src} className="card-soft overflow-hidden p-0 bg-card">
              <img {...photoProps(s.src, "100vw")} alt={s.alt} width={1600} height={1000} loading="lazy" className="w-full aspect-[8/5] object-cover" />
              <figcaption className="p-4 text-sm text-muted-foreground">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* DATAKILDER */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <SectionHeader
            eyebrow={t.sources.eyebrow}
            title={t.sources.title}
            body={t.sources.body}
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {KILDER.map((k) => (
              <div key={k.t} className="card-soft p-5 bg-card">
                <div className="font-semibold text-sm">{k.t}</div>
                <p className="mt-1.5 text-xs text-muted-foreground">{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIKATION */}
      <section className="container-page py-20 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">{t.verification.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-4xl">{t.verification.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.verification.body}
          </p>
          <ul className="mt-6 space-y-2.5 text-sm">
            {t.verification.bullets.map((b) => (
              <li key={b} className="flex gap-2 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" /><span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-soft p-6 bg-card">
          <div className="font-semibold text-brand-deep">{t.verification.repeatTitle}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            {t.verification.repeatBody}
          </p>
          <div className="mt-5 pt-4 border-t border-border font-semibold text-brand-deep">{t.verification.auditTitle}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            {t.verification.auditBody}
          </p>
        </div>
      </section>

      {/* BEPLANTNING */}
      <section className="surface-beige">
        <div className="container-page py-20 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">{t.planting.eyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-4xl">{t.planting.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.planting.body}
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.planting.effects}
            </p>
          </div>
          <div className="space-y-3">
            {t.planting.cards.map((c) => (
              <div key={c.t} className="card-soft p-5 bg-card">
                <div className="font-semibold text-sm">{c.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADGANG */}
      <section className="container-page py-20 md:py-24 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
        <div>
          <span className="eyebrow">{t.access.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-4xl">{t.access.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.access.body}
          </p>
        </div>
        <div className="card-soft p-6 bg-card">
          <div className="font-semibold">{t.access.controlTitle}</div>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {t.access.controlBody}
          </p>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <GreenCTA
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primary={{ to: "/kontakt", label: t.book }}
        secondary={{ to: "/ydelser", label: t.services }}
      />

      <CTASection />
    </PageLayout>
  );
}
