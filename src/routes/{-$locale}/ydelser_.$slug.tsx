import { LLink } from "@/components/site/LLink";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA, PageHero, HeroActions } from "@/components/site/sections";
import { getYdelse, YDELSER } from "@/data/ydelser";
import photoDrone from "@/assets/drone-vandloeb-07.jpg.asset.json";
import photoData from "@/assets/freyra-luftfoto-03.jpg.asset.json";
import photoMon from "@/assets/freyra-luftfoto-04.jpg.asset.json";
import photoBepl from "@/assets/freyra-luftfoto-07.jpg.asset.json";
import photoEvi from "@/assets/drone-vandloeb-11.jpg.asset.json";
import photoPilot from "@/assets/drone-vandloeb-05.jpg.asset.json";
import { photoProps, ogImageFor } from "@/lib/photo-variants";
import { articlesForService } from "@/lib/viden-helpers";
import { localizePath, toLocale } from "@/i18n/locale";
import { useCopy, useLocale } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/ydelse";

const PHOTOS: Record<string, { url: string }> = {
  dronefoerregistrering: {
    url: photoDrone.url,
  },
  datagrundlag: {
    url: photoData.url,
  },
  monitorering: {
    url: photoMon.url,
  },
  beplantningsanalyse: {
    url: photoBepl.url,
  },
  evidenspakke: {
    url: photoEvi.url,
  },
  pilot: {
    url: photoPilot.url,
  },
};

export const Route = createFileRoute("/{-$locale}/ydelser_/$slug")({
  beforeLoad: ({ params }) => {
    const locale = toLocale(params.locale);
    if (!getYdelse(params.slug, locale)) throw notFound();
  },
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    const s = getYdelse(params.slug, locale);
    const seoText: Record<string, { title: string; description: string }> = t.seo;
    if (!s) return buildHead({ title: t.fallbackTitle, description: t.fallbackDescription, path: `/ydelser/${params.slug}`, locale, noindex: true });
    return buildHead({
      title: seoText[s.slug]?.title ?? `${s.title} | Freyra`,
      description: seoText[s.slug]?.description ?? s.short,
      ogImage: PHOTOS[s.slug] ? ogImageFor(PHOTOS[s.slug].url) : undefined,
      path: `/ydelser/${s.slug}`,
      locale,
      jsonLd: breadcrumbJsonLd([
        { name: t.home, path: localizePath("/", locale) },
        { name: t.services, path: localizePath("/ydelser", locale) },
        { name: s.title, path: localizePath(`/ydelser/${s.slug}`, locale) },
      ]),
    });
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const locale = useLocale();
  const t = useCopy(COPY);
  const s = getYdelse(slug, locale);
  if (!s) return null;
  const photoCopy: Record<string, { alt: string; caption: string }> = t.photos;
  const photo = { ...PHOTOS[s.slug], ...photoCopy[s.slug] };
  const reading = articlesForService(s.slug, 4, locale);
  const related = s.related.map((r) => getYdelse(r, locale)).filter(Boolean) as typeof YDELSER;

  return (
    <PageLayout>
      <PageHero
        top={
          <nav aria-label={t.services} className="eyebrow gap-2">
            <LLink to="/ydelser" className="hover:underline">{t.services}</LLink>
            <span aria-hidden>/</span>
            <span className="sr-only">{s.title}</span>
          </nav>
        }
        title={s.title}
        body={<p>{s.intro}</p>}
        actions={<HeroActions primary={{ to: "/kontakt", label: t.ctaLabel }} />}
      />

      <section className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <h2 className="display-2">{t.whatYouGet}</h2>
          <ul className="mt-8 border-t border-brand-rule">
            {s.gets.map((g) => (
              <li key={g} className="py-3 border-b border-border text-base">{g}</li>
            ))}
          </ul>
          <div className="mt-8 grid sm:grid-cols-[auto_1fr] gap-x-10 gap-y-2 border-b border-border pb-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-deep">{t.price}</div>
              <div className="mt-2 text-lg font-semibold text-brand-ink">{s.price}</div>
            </div>
            <p className="text-xs text-muted-foreground sm:self-end">{t.excludingVat}</p>
          </div>
        </div>
        <figure className="photo-figure">
          <img {...photoProps(photo.url, "(min-width: 1024px) 50vw, 100vw")} alt={photo.alt} width={2000} height={photo.url.includes("freyra-luftfoto") ? 1500 : 1333} loading="lazy" className="w-full aspect-[4/3] object-cover" />
          <figcaption className="pt-3 text-xs text-muted-foreground">{photo.caption}</figcaption>
        </figure>
      </section>

      <section className="container-page pb-16 md:pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h2 className="text-2xl md:text-[32px]">{t.whenItMakesSense}</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-foreground/85">{s.when}</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-[32px]">{t.whatWeNeed}</h2>
          <ul className="mt-5 border-t border-brand-rule">
            {s.needs.map((n) => (
              <li key={n} className="py-3 border-b border-border text-base">{n}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-16 md:py-20">
          <h2 className="display-2">{t.steps}</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {s.steps.map((st) => (
              <div key={st.n} className="rule-step">
                <div className="text-[13px] text-brand-deep">{st.n}</div>
                <h3 className="mt-5 text-xl">{st.t}</h3>
                <p className="mt-3 text-[15px] text-foreground/85">{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <h2 className="display-2">{t.relatedServices}</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-x-8 gap-y-8">
          {related.map((r) => (
            <LLink key={r.slug} to="/ydelser/$slug" params={{ slug: r.slug }} className="rule-card group hover:border-primary transition-colors">
              <h3 className="text-xl group-hover:text-brand-deep transition-colors">{r.title}</h3>
              <p className="mt-3 text-[15px] text-foreground/85">{r.short}</p>
              <span className="mt-4 inline-flex items-center text-[15px] font-semibold text-brand-deep underline underline-offset-4 decoration-1">{t.readMore} <ArrowRight className="ml-1 w-4 h-4" aria-hidden /></span>
            </LLink>
          ))}
        </div>
      </section>

      {reading.length > 0 && (
        <section className="container-page pb-16">
          <h2 className="text-2xl md:text-3xl">{t.readMore}</h2>
          <ul className="mt-5 space-y-2">
            {reading.map((a) => (
              <li key={a.slug}>
                <LLink to="/viden/$slug" params={{ slug: a.slug }} className="inline-flex items-center text-brand-deep hover:text-foreground">
                  <ArrowRight className="mr-2 w-4 h-4 shrink-0" /> {a.h1}
                </LLink>
              </li>
            ))}
          </ul>
        </section>
      )}

      <GreenCTA
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primary={{ to: "/kontakt", label: t.ctaLabel }}
      />

      <CTASection />
    </PageLayout>
  );
}
