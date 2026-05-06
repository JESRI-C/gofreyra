import { createFileRoute } from "@tanstack/react-router";

const URLS = [
  "/", "/platform",
  "/platform/smartconnect", "/platform/decisionsiq", "/platform/esg-ledger", "/platform/impact-exchange",
  "/dashboard",
  "/loesninger/kommuner", "/loesninger/industri", "/loesninger/esg-compliance", "/loesninger/naturprojekter",
  "/use-cases", "/datakilder", "/indsigter", "/om", "/book-demo", "/kontakt",
];

const SITE = "https://gofreyra.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const xml =
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          URLS.map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>`).join("\n") +
          `\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
