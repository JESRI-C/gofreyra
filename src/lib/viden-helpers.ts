import type { Artikel } from "@/data/viden";
import type { Term } from "@/data/ordbog";
import { artiklerFor, termerFor } from "@/data/content";
import { ydelserFor } from "@/data/ydelser";
import { DATE_LOCALE, type Locale } from "@/i18n/locale";
import { PHOTO_VARIANTS } from "@/lib/photo-variants";

export const SITE = "https://gofreyra.com";

export function getArtikel(slug: string, locale: Locale = "da"): Artikel | undefined {
  return artiklerFor(locale).find((a) => a.slug === slug);
}
export function getTerm(slug: string, locale: Locale = "da"): Term | undefined {
  return termerFor(locale).find((t) => t.slug === slug);
}
export function getService(slug: string, locale: Locale = "da") {
  return ydelserFor(locale).find((y) => y.slug === slug);
}

/** Append " | Freyra" only when the full title stays within 60 characters. */
export function brandTitle(metaTitle: string): string {
  const t = `${metaTitle} | Freyra`;
  return t.length <= 60 ? t : metaTitle;
}

/** "2026-10-22" -> "22.10.2026" (da/de) or "22 October 2026" (en) */
export function formatDate(iso: string, locale: Locale = "da"): string {
  const [y, m, d] = iso.split("-");
  if (locale === "en") {
    return new Date(Date.UTC(+y, +m - 1, +d)).toLocaleDateString(DATE_LOCALE.en, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  }
  return `${d}.${m}.${y}`;
}

export function shorten(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const i = cut.lastIndexOf(" ");
  return `${cut.slice(0, i > 0 ? i : max).replace(/[,.;:]$/, "")} …`;
}

/** Clusters in first-seen order, pillars first within each cluster. */
export function clusters(locale: Locale = "da"): { name: string; items: Artikel[] }[] {
  const list = artiklerFor(locale);
  const order: string[] = [];
  for (const a of list) if (!order.includes(a.cluster)) order.push(a.cluster);
  return order.map((name) => ({
    name,
    items: list
      .filter((a) => a.cluster === name)
      .sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "pillar" ? -1 : 1)),
  }));
}

/** Articles whose services include the given service slug, pillars first. */
export function articlesForService(serviceSlug: string, max = 4, locale: Locale = "da"): Artikel[] {
  if (!getService(serviceSlug)) return [];
  return artiklerFor(locale)
    .filter((a) => a.services.includes(serviceSlug))
    .sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "pillar" ? -1 : 1))
    .slice(0, max);
}

const HERO_PHOTOS: { key: string; alt: string; en: string; de: string }[] = [
  { key: "drone-vandloeb-01", alt: "Tæt bevoksning langs vandløb, set fra drone" , en: "Dense vegetation along a stream, seen from a drone", de: "Dichter Bewuchs entlang eines Bachs, aus der Drohne gesehen" },
  { key: "drone-vandloeb-02", alt: "Vandløb med hegn og bevoksning mellem marker, set fra drone" , en: "Stream with hedgerows and vegetation between fields, seen from a drone", de: "Bach mit Hecken und Bewuchs zwischen Feldern, aus der Drohne gesehen" },
  { key: "drone-vandloeb-03", alt: "Mark og hegn i åbent landskab, set fra drone" , en: "Field and hedgerow in open landscape, seen from a drone", de: "Feld und Hecke in offener Landschaft, aus der Drohne gesehen" },
  { key: "drone-vandloeb-04", alt: "Vandløbskorridor gennem græsarealer, set fra drone" , en: "Stream corridor through grassland, seen from a drone", de: "Bachkorridor durch Grünland, aus der Drohne gesehen" },
  { key: "drone-vandloeb-05", alt: "Græsstrimmel mellem dyrkede marker, set fra drone" , en: "Grass strip between cultivated fields, seen from a drone", de: "Grasstreifen zwischen bewirtschafteten Feldern, aus der Drohne gesehen" },
  { key: "drone-vandloeb-06", alt: "Vandløb med bevoksning mellem marker, set fra drone" , en: "Stream with vegetation between fields, seen from a drone", de: "Bach mit Bewuchs zwischen Feldern, aus der Drohne gesehen" },
  { key: "drone-vandloeb-07", alt: "Vandløb med små åbne vandflader og græs, set fra drone" , en: "Stream with small open water surfaces and grass, seen from a drone", de: "Bach mit kleinen offenen Wasserflächen und Gras, aus der Drohne gesehen" },
  { key: "drone-vandloeb-08", alt: "Vandløbsstrækning med græs og bevoksning, set fra drone" , en: "Stretch of stream with grass and vegetation, seen from a drone", de: "Bachabschnitt mit Gras und Bewuchs, aus der Drohne gesehen" },
  { key: "drone-vandloeb-09", alt: "Græsareal og bevoksning langs vandløb, set fra drone" , en: "Grassland and vegetation along a stream, seen from a drone", de: "Grünland und Bewuchs entlang eines Bachs, aus der Drohne gesehen" },
  { key: "drone-vandloeb-10", alt: "Vandløbskorridor mellem marker, set fra drone" , en: "Stream corridor between fields, seen from a drone", de: "Bachkorridor zwischen Feldern, aus der Drohne gesehen" },
  { key: "drone-vandloeb-11", alt: "Vandløbskorridor mellem dyrkede marker, set fra drone" , en: "Stream corridor between cultivated fields, seen from a drone", de: "Bachkorridor zwischen bewirtschafteten Feldern, aus der Drohne gesehen" },
  { key: "freyra-luftfoto-01", alt: "Slyngende vandløb gennem eng, set fra drone" , en: "Meandering stream through a meadow, seen from a drone", de: "Mäandrierender Bach durch eine Wiese, aus der Drohne gesehen" },
  { key: "freyra-luftfoto-02", alt: "Åbent vandløb mellem træer og eng, set fra drone" , en: "Open stream between trees and meadow, seen from a drone", de: "Offener Bach zwischen Bäumen und Wiese, aus der Drohne gesehen" },
  { key: "freyra-luftfoto-03", alt: "Vandløb gennem skov, set oppefra med drone" , en: "Stream through woodland, seen from above by drone", de: "Bach durch Wald, von oben mit der Drohne gesehen" },
  { key: "freyra-luftfoto-04", alt: "Lige vandløb mellem eng og krat, set fra drone" , en: "Straight stream between meadow and scrub, seen from a drone", de: "Gerader Bach zwischen Wiese und Gebüsch, aus der Drohne gesehen" },
  { key: "freyra-luftfoto-05", alt: "Landskab i solnedgang, set fra drone" , en: "Landscape at sunset, seen from a drone", de: "Landschaft bei Sonnenuntergang, aus der Drohne gesehen" },
  { key: "freyra-luftfoto-06", alt: "Sø med skov i efterårsfarver, set fra drone" , en: "Lake with woodland in autumn colours, seen from a drone", de: "See mit Wald in Herbstfarben, aus der Drohne gesehen" },
  { key: "freyra-luftfoto-07", alt: "Naturgenopretning med jordarbejde, set fra drone" , en: "Nature restoration with earthworks, seen from a drone", de: "Renaturierung mit Erdarbeiten, aus der Drohne gesehen" },
  { key: "freyra-luftfoto-08", alt: "Overdrev og krat, set fra drone" , en: "Dry grassland and scrub, seen from a drone", de: "Magerrasen und Gebüsch, aus der Drohne gesehen" },
];

/** Deterministic hero photo chosen from the slug. */
export function heroFor(slug: string, locale: Locale = "da") {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const p = HERO_PHOTOS[h % HERO_PHOTOS.length];
  const v = PHOTO_VARIANTS[p.key];
  return { ...v, alt: locale === "da" ? p.alt : p[locale], ogAbs: `${SITE}${v.og}`, srcAbs: `${SITE}${v.w1400}` };
}
