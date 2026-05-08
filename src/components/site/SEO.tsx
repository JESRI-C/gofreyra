import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SITE = "https://gofreyra.com";
const SITE_NAME = "GoFreyra";
const DEFAULT_OG = `${SITE}/og-default.jpg`;
const TWITTER_HANDLE = "@gofreyra";

function abs(url?: string) {
  if (!url) return DEFAULT_OG;
  if (url.startsWith("http")) return url;
  return `${SITE}${url.startsWith("/") ? "" : "/"}${url}`;
}

export function buildHead({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
  jsonLd,
  noindex = false,
}: SEOProps) {
  const url = `${SITE}${path}`;
  const image = abs(ogImage);
  const meta = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" },
    { name: "author", content: SITE_NAME },

    // Open Graph
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: title },
    { property: "og:locale", content: "da_DK" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: title },
  ];
  const links = [
    { rel: "canonical", href: url },
    { rel: "alternate", hreflang: "da", href: url },
    { rel: "alternate", hreflang: "x-default", href: url },
  ];
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

/** Build a JSON-LD FAQPage block from Q/A pairs. */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Build a JSON-LD BreadcrumbList. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

/** Build a JSON-LD DefinedTerm for glossary entries (GEO). */
export function definedTermJsonLd(term: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term,
    description,
    inDefinedTermSet: `${SITE}/ordbog`,
    url: `${SITE}${path}`,
  };
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
