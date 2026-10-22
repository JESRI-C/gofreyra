import { createFileRoute } from "@tanstack/react-router";
import { artikler } from "@/data/viden";
import { ordbog } from "@/data/ordbog";

const BASE = "https://gofreyra.com";

const PAGES = [
  "/",
  "/ydelser",
  "/ydelser/dronefoerregistrering",
  "/ydelser/datagrundlag",
  "/ydelser/monitorering",
  "/ydelser/beplantningsanalyse",
  "/ydelser/evidenspakke",
  "/ydelser/pilot",
  "/kommuner",
  "/fonde-og-lodsejere",
  "/platformen",
  "/saadan-arbejder-vi",
  "/luftfoto",
  "/faq",
  "/om",
  "/kontakt",
  "/privatlivspolitik",
  "/viden",
  "/ordbog",
  ...artikler.map((a) => `/viden/${a.slug}`),
  ...ordbog.map((t) => `/ordbog/${t.slug}`),
];

const LASTMOD = "2026-10-22";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PAGES.map(
          (p) => `  <url><loc>${BASE}${p}</loc><lastmod>${LASTMOD}</lastmod></url>`,
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
