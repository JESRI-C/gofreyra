import { LLink } from "@/components/site/LLink";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Band, PageHero, RuleGrid } from "@/components/site/blocks";
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
      <PageHero
        tone="forest"
        eyebrow={t.platform}
        title={t.heroTitle}
        body={t.heroBody}
        actions={
          <>
            <Button asChild className="rounded-sm h-12 px-6 text-base"><LLink to="/kontakt">{t.book} <ArrowRight className="ml-1.5 w-4 h-4" /></LLink></Button>
            <Button asChild variant="outline" className="rounded-sm h-12 px-6 text-base bg-transparent"><LLink to="/ydelser">{t.services}</LLink></Button>
          </>
        }
      >
        <div className="mt-14"><EvidenceChain /></div>
      </PageHero>

      {/* EVIDENSKÆDE */}
      <Band tone="ivory">
        <div className="container-page py-20 md:py-28">
          <SectionHeader
            eyebrow={t.evidence.eyebrow}
            title={t.evidence.title}
            body={t.evidence.body}
          />
          <RuleGrid items={t.evidence.cards} cols={4} numbered className="mt-14" />
        </div>
      </Band>

      <Band tone="sky"><div className="container-page py-20 md:py-28">
        <SectionHeader
          eyebrow={t.workflow.eyebrow}
          title={t.workflow.title}
          body={t.workflow.body}
        />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {SCREENS.map((s, i) => (
            <figure key={s.src} className="rule-item">
              <div aria-hidden className="display-num mb-4">{String(i + 1).padStart(2, "0")}</div>
              <img {...photoProps(s.src, "100vw")} alt={s.alt} width={1600} height={1000} loading="lazy" className="w-full aspect-[8/5] object-cover" />
              <figcaption className="mt-2.5 text-xs text-muted-foreground">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div></Band>

      {/* DATAKILDER */}
      <Band tone="paper">
        <div className="container-page py-20 md:py-28">
          <SectionHeader
            eyebrow={t.sources.eyebrow}
            title={t.sources.title}
            body={t.sources.body}
          />
          <RuleGrid items={KILDER} cols={3} className="mt-14" />
        </div>
      </Band>

      {/* VERIFIKATION */}
      <Band tone="sage"><div className="container-page py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow">{t.verification.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-5xl">{t.verification.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.verification.body}
          </p>
          <ul className="mt-6 space-y-2.5 text-sm">
            {t.verification.bullets.map((b) => (
              <li key={b} className="flex gap-2 items-start">
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-eyebrow shrink-0" /><span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-border pt-8">
          <div className="font-semibold text-foreground">{t.verification.repeatTitle}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            {t.verification.repeatBody}
          </p>
          <div className="mt-5 pt-4 border-t border-border font-semibold text-foreground">{t.verification.auditTitle}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            {t.verification.auditBody}
          </p>
        </div>
      </div></Band>

      {/* BEPLANTNING */}
      <Band tone="ivory">
        <div className="container-page py-20 md:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">{t.planting.eyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-5xl">{t.planting.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.planting.body}
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.planting.effects}
            </p>
          </div>
          <div className="space-y-3">
            {t.planting.cards.map((c) => (
              <div key={c.t} className="rule-item">
                <div className="font-semibold text-sm">{c.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Band>

      {/* ADGANG */}
      <Band tone="forest"><div className="container-page py-20 md:py-28 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
        <div>
          <span className="eyebrow">{t.access.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-5xl">{t.access.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.access.body}
          </p>
        </div>
        <div className="border-t border-border pt-8">
          <div className="font-semibold">{t.access.controlTitle}</div>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {t.access.controlBody}
          </p>
        </div>
      </div></Band>

      <FaqSection items={FAQ} tone="ivory" />

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
