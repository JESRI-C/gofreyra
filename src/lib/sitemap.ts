import { alleArtikler, alleTermer } from "@/data/content";
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

export function sitemapXml() {
  const urls = sitemapEntries().map(({ path, updated }) =>
    `  <url><loc>https://gofreyra.com${path}</loc>${updated ? `<lastmod>${updated}</lastmod>` : ""}</url>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}