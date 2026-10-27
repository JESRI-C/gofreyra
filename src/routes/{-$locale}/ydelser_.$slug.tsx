import { LLink } from "@/components/site/LLink";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA } from "@/components/site/sections";
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
      <section className="container-page py-12 md:py-16 max-w-3xl">
        <LLink to="/ydelser" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 w-4 h-4" /> {t.allServices}
        </LLink>
        <h1 className="mt-5 text-3xl md:text-5xl leading-[1.12]">{s.title}</h1>
        <p className="mt-6 text-lg text-muted-foreground">{s.intro}</p>
      </section>

      <section className="container-page pb-4">
        <figure className="card-soft overflow-hidden p-0 bg-card">
          <img {...photoProps(photo.url, "100vw")} alt={photo.alt} width={2000} height={photo.url.includes("freyra-luftfoto") ? 1500 : 1333} loading="lazy" className="w-full aspect-[21/9] object-cover" />
          <figcaption className="p-3 text-xs text-muted-foreground">{photo.caption}</figcaption>
        </figure>
      </section>

      <section className="container-page py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl">{t.whatYouGet}</h2>
          <ul className="mt-5 space-y-2">
            {s.gets.map((g) => (
              <li key={g} className="flex gap-2 items-start text-sm">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
          <h2 className="mt-10 text-2xl md:text-3xl">{t.whenItMakesSense}</h2>
          <p className="mt-4 text-muted-foreground">{s.when}</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl">{t.whatWeNeed}</h2>
          <ul className="mt-5 space-y-2">
            {s.needs.map((n) => (
              <li key={n} className="flex gap-2 items-start text-sm">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep shrink-0" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 card-soft p-5 bg-card">
            <div className="text-xs font-medium uppercase tracking-wider text-foreground/70">{t.price}</div>
            <div className="mt-1 text-lg font-semibold text-brand-deep">{s.price}</div>
            <p className="mt-2 text-xs text-muted-foreground">{t.excludingVat}</p>
          </div>
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl">{t.steps}</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {s.steps.map((st) => (
              <div key={st.n} className="card-soft p-5 bg-card">
                <div className="text-sm font-mono text-brand-deep">{st.n}</div>
                <div className="mt-2 font-semibold">{st.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-2xl md:text-3xl">{t.relatedServices}</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {related.map((r) => (
            <LLink key={r.slug} to="/ydelser/$slug" params={{ slug: r.slug }} className="card-soft p-6 bg-card group hover:border-primary/40 transition">
              <div className="font-semibold group-hover:text-brand-deep transition">{r.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">{t.readMore} <ArrowRight className="ml-1 w-4 h-4" /></span>
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
