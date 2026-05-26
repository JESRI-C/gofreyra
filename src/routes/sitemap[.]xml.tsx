import { createFileRoute } from "@tanstack/react-router";
import { SECTOR_TEMPLATES, GLOSSARY } from "@/data/pseo";
import { INSIGHTS } from "@/data/insights";
import { PROBLEMS } from "@/data/problems";
import { DATA_PAGES } from "@/data/dataTypes";

const SITE = "https://gofreyra.com";

type SitemapEntry = { path: string; lastmod: string; changefreq: string; priority: string };

const STATIC_ENTRIES: SitemapEntry[] = [
  { path: "/",                              lastmod: "2026-05-06", changefreq: "daily",   priority: "1.0" },
  { path: "/platform",                      lastmod: "2026-05-06", changefreq: "weekly",  priority: "0.9" },
  { path: "/platform/smartconnect",         lastmod: "2026-05-06", changefreq: "monthly", priority: "0.8" },
  { path: "/platform/decisionsiq",          lastmod: "2026-05-06", changefreq: "monthly", priority: "0.8" },
  { path: "/platform/esg-ledger",           lastmod: "2026-05-06", changefreq: "monthly", priority: "0.8" },
  { path: "/platform/impact-exchange",      lastmod: "2026-05-06", changefreq: "monthly", priority: "0.8" },
  { path: "/loesninger/kommuner",           lastmod: "2026-05-06", changefreq: "monthly", priority: "0.8" },
  { path: "/loesninger/industri",           lastmod: "2026-05-06", changefreq: "monthly", priority: "0.8" },
  { path: "/loesninger/esg-compliance",     lastmod: "2026-05-06", changefreq: "monthly", priority: "0.8" },
  { path: "/loesninger/naturprojekter",     lastmod: "2026-05-06", changefreq: "monthly", priority: "0.8" },
  { path: "/use-cases",                     lastmod: "2026-05-06", changefreq: "weekly",  priority: "0.7" },
  { path: "/indsigter",                     lastmod: "2026-05-06", changefreq: "weekly",  priority: "0.8" },
  { path: "/datakilder",                    lastmod: "2026-05-06", changefreq: "monthly", priority: "0.6" },
  { path: "/brancher",                      lastmod: "2026-05-06", changefreq: "monthly", priority: "0.7" },
  { path: "/ordbog",                        lastmod: "2026-05-06", changefreq: "monthly", priority: "0.6" },
  { path: "/problemer",                     lastmod: "2026-05-06", changefreq: "monthly", priority: "0.7" },
  { path: "/data",                          lastmod: "2026-05-06", changefreq: "monthly", priority: "0.6" },
  { path: "/projekter",                     lastmod: "2026-05-06", changefreq: "monthly", priority: "0.6" },
  { path: "/om",                            lastmod: "2026-05-06", changefreq: "monthly", priority: "0.5" },
  { path: "/priser",                        lastmod: "2026-05-06", changefreq: "monthly", priority: "0.7" },
  { path: "/book-demo",                     lastmod: "2026-05-06", changefreq: "monthly", priority: "0.8" },
  { path: "/kontakt",                       lastmod: "2026-05-06", changefreq: "monthly", priority: "0.5" },
  // English versions
  { path: "/en",                            lastmod: "2026-05-26", changefreq: "weekly",  priority: "0.9" },
  { path: "/en/platform",                   lastmod: "2026-05-26", changefreq: "monthly", priority: "0.8" },
  { path: "/en/platform/smartconnect",      lastmod: "2026-05-26", changefreq: "monthly", priority: "0.7" },
  { path: "/en/platform/decisionsiq",       lastmod: "2026-05-26", changefreq: "monthly", priority: "0.7" },
  { path: "/en/platform/esg-ledger",        lastmod: "2026-05-26", changefreq: "monthly", priority: "0.7" },
  { path: "/en/platform/impact-exchange",   lastmod: "2026-05-26", changefreq: "monthly", priority: "0.7" },
  { path: "/en/dashboard",                  lastmod: "2026-05-26", changefreq: "monthly", priority: "0.7" },
  { path: "/en/pricing",                    lastmod: "2026-05-26", changefreq: "monthly", priority: "0.7" },
  { path: "/en/book-demo",                  lastmod: "2026-05-26", changefreq: "monthly", priority: "0.7" },
  { path: "/en/about",                      lastmod: "2026-05-26", changefreq: "monthly", priority: "0.5" },
  { path: "/en/contact",                    lastmod: "2026-05-26", changefreq: "monthly", priority: "0.5" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const dynamic: SitemapEntry[] = [
          ...SECTOR_TEMPLATES.map((t) => ({ path: `/brancher/${t.slug}`,   lastmod: "2026-05-06", changefreq: "monthly", priority: "0.7" })),
          ...GLOSSARY.map((t)          => ({ path: `/ordbog/${t.slug}`,    lastmod: "2026-05-06", changefreq: "monthly", priority: "0.6" })),
          ...INSIGHTS.map((i)          => ({ path: `/indsigter/${i.slug}`, lastmod: i.date ?? "2026-05-06", changefreq: "monthly", priority: "0.8" })),
          ...PROBLEMS.map((p)          => ({ path: `/problemer/${p.slug}`, lastmod: "2026-05-06", changefreq: "monthly", priority: "0.7" })),
          ...DATA_PAGES.map((d)        => ({ path: `/data/${d.slug}`,      lastmod: "2026-05-06", changefreq: "monthly", priority: "0.6" })),
        ];
        const all = [...STATIC_ENTRIES, ...dynamic];
        const xml =
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          all.map((e) =>
            `  <url><loc>${SITE}${e.path}</loc><lastmod>${e.lastmod}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`
          ).join("\n") +
          `\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
