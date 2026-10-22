import { createFileRoute } from "@tanstack/react-router";

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
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PAGES.map(
          (p) => `  <url><loc>${BASE}${p}</loc><changefreq>monthly</changefreq></url>`,
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
