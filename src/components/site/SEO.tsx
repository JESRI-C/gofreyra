import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  /** The path for the page, e.g. "/ydelser". */
  path: string;
  /** Absolute https URL. Omit unless the page shows a meaningful share image. */
  ogImage?: string;
  ogType?: "website" | "article";
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SITE_NAME = "Freyra";
export const SITE_URL = "https://gofreyra.com";

export function buildHead({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
  jsonLd,
  noindex = false,
}: SEOProps) {
  const url = `${SITE_URL}${path}`;

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
    { property: "og:locale", content: "da_DK" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (ogImage && ogImage.startsWith("https://")) {
    meta.push(
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: title },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: title },
    );
  }

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

/** Organization schema for Gofreyra ApS. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gofreyra ApS",
    alternateName: "Freyra",
    url: SITE_URL,
    taxID: "45384489",
    vatID: "DK45384489",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bøgevej 4",
      postalCode: "7160",
      addressLocality: "Tørring",
      addressCountry: "DK",
    },
    parentOrganization: { "@type": "Organization", name: "Freyra Group ApS" },
  };
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
      item: `${SITE_URL}${it.path}`,
    })),
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
