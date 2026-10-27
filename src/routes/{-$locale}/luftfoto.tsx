import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { buildHead, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA } from "@/components/site/sections";
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

const FOTOS: Foto[] = [
  { url: p10.url, alt: "Vandløbskorridor mellem marker med majs, set fra drone ved efterflyvning", caption: "Efterflyvning, vandløbskorridor", month: "September 2026" },
  { url: p11.url, alt: "Vandløbskorridor mellem dyrkede marker, set fra drone ved efterflyvning", caption: "Efterflyvning, korridor mellem marker", month: "September 2026" },
  { url: p01.url, alt: "Delstrækning med tæt bevoksning langs vandløb, set fra drone", caption: "Delstrækning, set fra drone", month: "August 2026" },
  { url: p02.url, alt: "Vandløb med hegn og bevoksning mellem marker, fotograferet fra drone", caption: "Vandløb med hegn og bevoksning", month: "August 2026" },
  { url: p03.url, alt: "Gentagelsespunkt ved mark og hegn, referencefoto fra drone", caption: "Gentagelsespunkt, referencefoto", month: "August 2026" },
  { url: p04.url, alt: "Vandløbskorridor gennem græsarealer, set fra drone", caption: "Vandløbskorridor, oversigt", month: "August 2026" },
  { url: p05.url, alt: "Græsstrimmel mellem dyrkede marker, referencefoto fra drone", caption: "Græsstrimmel mellem marker", month: "August 2026" },
  { url: p06.url, alt: "Vandløb med bevoksning mellem marker, set fra drone", caption: "Vandløb med bevoksning", month: "August 2026" },
  { url: p07.url, alt: "Vandløb med små åbne vandflader, græs og bevoksning, set fra drone", caption: "Åbne vandflader langs vandløb", month: "August 2026" },
  { url: p08.url, alt: "Vandløbsstrækning med græs og bevoksning, set fra drone", caption: "Delstrækning med græs og bevoksning", month: "August 2026" },
  { url: p09.url, alt: "Græsareal og bevoksning langs vandløb, set fra drone", caption: "Græsareal langs vandløb", month: "August 2026" },
  { url: f06.url, alt: "Sø med skov i efterårsfarver, set fra drone", caption: "Sø med skov i efterårsfarver", month: "Oktober 2024", h: 1500 },
  { url: f01.url, alt: "Slyngende vandløb gennem eng, set fra drone", caption: "Slyngende vandløb gennem eng", month: "September 2024", h: 1500 },
  { url: f04.url, alt: "Lige vandløb mellem eng og krat, set fra drone", caption: "Lige vandløb mellem eng og krat", month: "August 2024", h: 1500 },
  { url: f07.url, alt: "Naturgenopretning med jordarbejde, set fra drone", caption: "Naturgenopretning med jordarbejde", month: "August 2024", h: 1500 },
  { url: f08.url, alt: "Overdrev og krat, set fra drone", caption: "Overdrev og krat", month: "August 2024", h: 1500 },
  { url: f03.url, alt: "Vandløb gennem skov, set oppefra med drone", caption: "Vandløb gennem skov, set oppefra", month: "August 2023", h: 1500 },
  { url: f05.url, alt: "Landskab i solnedgang, set fra drone", caption: "Landskab i solnedgang", month: "August 2023", h: 1500 },
  { url: f02.url, alt: "Åbent vandløb mellem træer og eng, set fra drone", caption: "Åbent vandløb mellem træer og eng", month: "August 2022", h: 1500 },
];

export const Route = createFileRoute("/{-$locale}/luftfoto")({
  head: () =>
    buildHead({
      title: "Luftfoto | Freyra Evidence Workspace",
      description: "Billeder fra vores egne droneflyvninger af vandløb, enge, skov og arealer ved førregistrering og efterflyvning. Lokaliteter er udeladt.",
      path: "/luftfoto",
      jsonLd: breadcrumbJsonLd([{ name: "Forside", path: "/" }, { name: "Luftfoto", path: "/luftfoto" }]),
    }),
  component: GalleryPage,
});

function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? null : (i + FOTOS.length - 1) % FOTOS.length)), []);
  const next = useCallback(() => setOpen((i) => (i === null ? null : (i + 1) % FOTOS.length)), []);

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
        <span className="eyebrow">Luftfoto</span>
        <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">Billeder fra vores egne flyvninger.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Alle billeder er taget med vores egen drone ved førregistreringer og efterflyvninger af vandløb. Lokaliteter er udeladt.
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
                aria-label={`Vis billede: ${f.caption}`}
              >
                <img {...photoProps(f.url, "(min-width: 1024px) 50vw, 100vw")} alt={f.alt} width={2000} height={f.h ?? 1333} loading="lazy" className="w-full aspect-[3/2] object-cover" />
              </button>
              <figcaption className="p-3 text-xs text-muted-foreground">
                {f.caption}. Eget dronefoto, {f.month.toLowerCase()}.
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
            aria-label="Luk"
            className="absolute top-4 right-4 p-2 rounded-md bg-white/10 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Forrige billede"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 rounded-md bg-white/10 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Næste billede"
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
            {current.caption}. Eget dronefoto, {current.month.toLowerCase()}.
          </p>
        </div>
      )}

      <GreenCTA
        title="Vil du se jeres eget område fra luften?"
        subtitle="En førregistrering starter med en flyvning. Fortæl os om området, så vender vi tilbage."
        primary={{ to: "/kontakt", label: "Book en snak" }}
      />
    </PageLayout>
  );
}
