import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

const SITE = "https://gofreyra.lovable.app";

export function buildHead({ title, description, path, ogImage, jsonLd }: SEOProps) {
  const url = `${SITE}${path}`;
  const image = ogImage ?? `${SITE}/og-default.jpg`;
  const meta = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:locale", content: "da_DK" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
  const links = [{ rel: "canonical", href: url }];
  const scripts = jsonLd
    ? [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonLd),
        },
      ]
    : undefined;
  return { meta, links, scripts };
}

// Optional client-side fallback (in case route head() isn't used)
export function SEO({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", description);
  }, [title, description]);
  return null;
}
