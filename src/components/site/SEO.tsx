import { useEffect } from "react";
import { DA_TO_EN, EN_TO_DA, SITE_URL, type Locale } from "@/i18n/config";

export interface SEOProps {
  title: string;
  description: string;
  /** The path for the current locale, e.g. "/priser" or "/en/pricing". */
  path: string;
  /** Defaults to "da". Pass "en" for English pages. */
  locale?: Locale;
  ogImage?: string;
  ogType?: "website" | "article";
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SITE_NAME = "GoFreyra";
const DEFAULT_OG = `${SITE_URL}/og-default.jpg`;
const TWITTER_HANDLE = "@gofreyra";

function abs(url?: string) {
  if (!url) return DEFAULT_OG;
  if (url.startsWith("http")) return url;
  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

/** Given any localized path, return both DA and EN absolute URLs (or null if no alternate exists). */
function buildAlternates(path: string, locale: Locale): { da: string | null; en: string | null } {
  if (locale === "da") {
    const da = `${SITE_URL}${path}`;
    const enPath = DA_TO_EN[path];
    return { da, en: enPath ? `${SITE_URL}${enPath}` : null };
  }
  const en = `${SITE_URL}${path}`;
  const daPath = EN_TO_DA[path];
  return { da: daPath ? `${SITE_URL}${daPath}` : null, en };
}

export function buildHead({
  title,
  description,
  path,
  locale = "da",
  ogImage,
  ogType = "website",
  jsonLd,
  noindex = false,
}: SEOProps) {
  const url = `${SITE_URL}${path}`;
  const image = abs(ogImage);
  const ogLocale = locale === "en" ? "en_US" : "da_DK";
  const alternates = buildAlternates(path, locale);

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
    { property: "og:locale", content: ogLocale },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: title },
  ];

  const links: Array<{ rel: string; href: string; hreflang?: string }> = [
    { rel: "canonical", href: url },
  ];
  if (alternates.da) {
    links.push({ rel: "alternate", hreflang: "da", href: alternates.da });
    links.push({ rel: "alternate", hreflang: "x-default", href: alternates.da });
  }
  if (alternates.en) {
    links.push({ rel: "alternate", hreflang: "en", href: alternates.en });
  }

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
      item: `${SITE_URL}${it.path}`,
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
    inDefinedTermSet: `${SITE_URL}/ordbog`,
    url: `${SITE_URL}${path}`,
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
