import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA } from "@/components/site/sections";
import { localizePath, toLocale } from "@/i18n/locale";
import { useCopy, useLocale } from "@/i18n/useLocale";
import { COPY } from "@/i18n/pages/luftfoto";
import p01 from "@/assets/drone-vandloeb-01.jpg.asset.json";
import p02 from "@/assets/drone-vandloeb-02.jpg.asset.json";
import p03 from "@/assets/drone-vandloeb-03.jpg.asset.json";
import p04 from "@/assets/drone-vandloeb-04.jpg.asset.json";
import p05 from "@/assets/drone-vandloeb-05.jpg.asset.json";
import p06 from "@/assets/drone-vandloeb-06.jpg.asset.json";
import p07 from "@/assets/drone-vandloeb-07.jpg.asset.json";
import p08 from "@/assets/drone-vandloeb-08.jpg.asset.json";
import p09 from "@/assets/drone-vandloeb-09.jpg.asset.json";
import p10 from "@/assets/drone-vandloeb-10.jpg.asset.json";
import p11 from "@/assets/drone-vandloeb-11.jpg.asset.json";
import f01 from "@/assets/freyra-luftfoto-01.jpg.asset.json";
import f02 from "@/assets/freyra-luftfoto-02.jpg.asset.json";
import f03 from "@/assets/freyra-luftfoto-03.jpg.asset.json";
import f04 from "@/assets/freyra-luftfoto-04.jpg.asset.json";
import f05 from "@/assets/freyra-luftfoto-05.jpg.asset.json";
import f06 from "@/assets/freyra-luftfoto-06.jpg.asset.json";
import f07 from "@/assets/freyra-luftfoto-07.jpg.asset.json";
import f08 from "@/assets/freyra-luftfoto-08.jpg.asset.json";
import { photoProps } from "@/lib/photo-variants";

interface Foto {
  url: string;
  alt: string;
  caption: string;
  month: string;
  h?: number;
}

const PHOTO_ASSETS: Pick<Foto, "url" | "h">[] = [
  { url: p10.url },
  { url: p11.url },
  { url: p01.url },
  { url: p02.url },
  { url: p03.url },
  { url: p04.url },
  { url: p05.url },
  { url: p06.url },
  { url: p07.url },
  { url: p08.url },
  { url: p09.url },
  { url: f06.url, h: 1500 },
  { url: f01.url, h: 1500 },
  { url: f04.url, h: 1500 },
  { url: f07.url, h: 1500 },
  { url: f08.url, h: 1500 },
  { url: f03.url, h: 1500 },
  { url: f05.url, h: 1500 },
  { url: f02.url, h: 1500 },
];

export const Route = createFileRoute("/{-$locale}/luftfoto")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const t = COPY[locale];
    return buildHead({
      title: t.metaTitle,
      description: t.metaDescription,
      path: "/luftfoto",
      locale,
      jsonLd: breadcrumbJsonLd([{ name: t.home, path: localizePath("/", locale) }, { name: t.pageName, path: localizePath("/luftfoto", locale) }]),
    });
  },
  component: GalleryPage,
});

function GalleryPage() {
  const locale = useLocale();
  const t = useCopy(COPY);
  const FOTOS: Foto[] = PHOTO_ASSETS.map((asset, i) => ({ ...asset, ...t.photos[i] }));
  const formatMonth = (month: string) => locale === "da" ? month.toLowerCase() : month;
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? null : (i + FOTOS.length - 1) % FOTOS.length)), [FOTOS.length]);
  const next = useCallback(() => setOpen((i) => (i === null ? null : (i + 1) % FOTOS.length)), [FOTOS.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const current = open === null ? null : FOTOS[open];

  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 max-w-3xl">
        <span className="eyebrow">{t.pageName}</span>
        <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">{t.heading}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          {t.introduction}
        </p>
      </section>

      <section className="container-page pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FOTOS.map((f, i) => (
            <figure key={f.url} className="card-soft overflow-hidden p-0 bg-card">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-deep"
                aria-label={`${t.viewImage}${f.caption}`}
              >
                <img {...photoProps(f.url, "(min-width: 1024px) 50vw, 100vw")} alt={f.alt} width={2000} height={f.h ?? 1333} loading="lazy" className="w-full aspect-[3/2] object-cover" />
              </button>
              <figcaption className="p-3 text-xs text-muted-foreground">
                {f.caption}{t.photoCredit}{formatMonth(f.month)}.
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[100] bg-black/85 flex flex-col items-center justify-center p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label={t.close}
            className="absolute top-4 right-4 p-2 rounded-md bg-white/10 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label={t.previousImage}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 rounded-md bg-white/10 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label={t.nextImage}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 rounded-md bg-white/10 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
          <img
            {...photoProps(current.url, "100vw")}
            alt={current.alt}
            className="max-h-[78vh] max-w-full object-contain rounded-md"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 text-sm text-white/80 text-center">
            {current.caption}{t.photoCredit}{formatMonth(current.month)}.
          </p>
        </div>
      )}

      <GreenCTA
        title={t.ctaTitle}
        subtitle={t.ctaSubtitle}
        primary={{ to: "/kontakt", label: t.ctaLabel }}
      />
    </PageLayout>
  );
}
