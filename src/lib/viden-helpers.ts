import { artikler, type Artikel } from "@/data/viden";
import { ordbog, type Term } from "@/data/ordbog";
import { YDELSER } from "@/data/ydelser";
import { PHOTO_VARIANTS } from "@/lib/photo-variants";

export const SITE = "https://gofreyra.com";

export function getArtikel(slug: string): Artikel | undefined {
  return artikler.find((a) => a.slug === slug);
}
export function getTerm(slug: string): Term | undefined {
  return ordbog.find((t) => t.slug === slug);
}
export function getService(slug: string) {
  return YDELSER.find((y) => y.slug === slug);
}

/** Append " | Freyra" only when the full title stays within 60 characters. */
export function brandTitle(metaTitle: string): string {
  const t = `${metaTitle} | Freyra`;
  return t.length <= 60 ? t : metaTitle;
}

/** "2026-10-22" -> "22.10.2026" */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

export function shorten(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const i = cut.lastIndexOf(" ");
  return `${cut.slice(0, i > 0 ? i : max).replace(/[,.;:]$/, "")} …`;
}

/** Clusters in first-seen order, pillars first within each cluster. */
export function clusters(): { name: string; items: Artikel[] }[] {
  const order: string[] = [];
  for (const a of artikler) if (!order.includes(a.cluster)) order.push(a.cluster);
  return order.map((name) => ({
    name,
    items: artikler
      .filter((a) => a.cluster === name)
      .sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "pillar" ? -1 : 1)),
  }));
}

/** Articles whose services include the given service slug, pillars first. */
export function articlesForService(serviceSlug: string, max = 4): Artikel[] {
  return artikler
    .filter((a) => a.services.includes(serviceSlug))
    .sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "pillar" ? -1 : 1))
    .slice(0, max);
}

const HERO_PHOTOS: { key: string; alt: string }[] = [
  { key: "drone-vandloeb-01", alt: "Tæt bevoksning langs vandløb, set fra drone" },
  { key: "drone-vandloeb-02", alt: "Vandløb med hegn og bevoksning mellem marker, set fra drone" },
  { key: "drone-vandloeb-03", alt: "Mark og hegn i åbent landskab, set fra drone" },
  { key: "drone-vandloeb-04", alt: "Vandløbskorridor gennem græsarealer, set fra drone" },
  { key: "drone-vandloeb-05", alt: "Græsstrimmel mellem dyrkede marker, set fra drone" },
  { key: "drone-vandloeb-06", alt: "Vandløb med bevoksning mellem marker, set fra drone" },
  { key: "drone-vandloeb-07", alt: "Vandløb med små åbne vandflader og græs, set fra drone" },
  { key: "drone-vandloeb-08", alt: "Vandløbsstrækning med græs og bevoksning, set fra drone" },
  { key: "drone-vandloeb-09", alt: "Græsareal og bevoksning langs vandløb, set fra drone" },
  { key: "drone-vandloeb-10", alt: "Vandløbskorridor mellem marker, set fra drone" },
  { key: "drone-vandloeb-11", alt: "Vandløbskorridor mellem dyrkede marker, set fra drone" },
  { key: "freyra-luftfoto-01", alt: "Slyngende vandløb gennem eng, set fra drone" },
  { key: "freyra-luftfoto-02", alt: "Åbent vandløb mellem træer og eng, set fra drone" },
  { key: "freyra-luftfoto-03", alt: "Vandløb gennem skov, set oppefra med drone" },
  { key: "freyra-luftfoto-04", alt: "Lige vandløb mellem eng og krat, set fra drone" },
  { key: "freyra-luftfoto-05", alt: "Landskab i solnedgang, set fra drone" },
  { key: "freyra-luftfoto-06", alt: "Sø med skov i efterårsfarver, set fra drone" },
  { key: "freyra-luftfoto-07", alt: "Naturgenopretning med jordarbejde, set fra drone" },
  { key: "freyra-luftfoto-08", alt: "Overdrev og krat, set fra drone" },
];

/** Deterministic hero photo chosen from the slug. */
export function heroFor(slug: string) {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const p = HERO_PHOTOS[h % HERO_PHOTOS.length];
  const v = PHOTO_VARIANTS[p.key];
  return { ...v, alt: p.alt, ogAbs: `${SITE}${v.og}`, srcAbs: `${SITE}${v.src}` };
}
