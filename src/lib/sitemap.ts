import { alleArtikler, alleTermer, artiklerFor, termerFor } from "@/data/content";
import { LOCALES, localizePath } from "@/i18n/locale";
import type { Artikel } from "@/data/viden";
import type { Term } from "@/data/ordbog";

const staticPaths = [
  "/", "/ydelser", "/ydelser/dronefoerregistrering", "/ydelser/datagrundlag",
  "/ydelser/monitorering", "/ydelser/beplantningsanalyse", "/ydelser/evidenspakke",
  "/ydelser/pilot", "/kommuner", "/fonde-og-lodsejere", "/platformen",
  "/saadan-arbejder-vi", "/luftfoto", "/faq", "/om", "/kontakt",
  "/privatlivspolitik", "/viden", "/ordbog",
];

export function sitemapEntries(articles: Pick<Artikel, "slug" | "updated">[] = alleArtikler, terms: Pick<Term, "slug" | "updated">[] = alleTermer) {
  const entries: { path: string; updated?: string }[] = [
    ...staticPaths.map((path) => ({ path })),
    ...articles.map((a) => ({ path: `/viden/${a.slug}`, updated: a.updated })),
    ...terms.map((t) => ({ path: `/ordbog/${t.slug}`, updated: t.updated })),
  ];
  const paths = new Set<string>();
  for (const entry of entries) {
    if (paths.has(entry.path)) throw new Error(`Duplicate sitemap URL: ${entry.path}`);
    paths.add(entry.path);
  }
  return entries;
}

/** Danish base paths that have a real en/de translation (articles/terms must exist in every locale). */
export function translatedBasePaths() {
  const all = sitemapEntries();
  return all.filter(({ path }) => {
    const m = path.match(/^\/(viden|ordbog)\/(.+)$/);
    if (!m) return true;
    const list = m[1] === "viden" ? (["en", "de"] as const).map((l) => artiklerFor(l)) : (["en", "de"] as const).map((l) => termerFor(l));
    return list.every((arr) => arr.some((x) => x.slug === m[2]));
  });
}

export function sitemapXml() {
  const translated = new Set(translatedBasePaths().map((e) => e.path));
  const urls = sitemapEntries().flatMap(({ path, updated }) => {
    const locales = translated.has(path) ? LOCALES : (["da"] as const);
    const alts = translated.has(path)
      ? [...LOCALES.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="https://gofreyra.com${localizePath(path, l)}"/>`),
         `<xhtml:link rel="alternate" hreflang="x-default" href="https://gofreyra.com${path}"/>`].join("")
      : "";
    return locales.map((l) =>
      `  <url><loc>https://gofreyra.com${localizePath(path, l)}</loc>${updated ? `<lastmod>${updated}</lastmod>` : ""}${alts}</url>`,
    );
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}
