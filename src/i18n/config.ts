export type Locale = "da" | "en";

export const DEFAULT_LOCALE: Locale = "da";
export const LOCALES: Locale[] = ["da", "en"];

/**
 * Map of DA path → EN path for routes that exist in English.
 * Routes not in this map will fall back to /en (home) when the user switches.
 */
export const DA_TO_EN: Record<string, string> = {
  "/": "/en",
  "/om": "/en/about",
  "/kontakt": "/en/contact",
  "/priser": "/en/pricing",
  "/book-demo": "/en/book-demo",
  "/dashboard": "/en/dashboard",
  "/platform": "/en/platform",
  "/platform/smartconnect": "/en/platform/smartconnect",
  "/platform/decisionsiq": "/en/platform/decisionsiq",
  "/platform/esg-ledger": "/en/platform/esg-ledger",
  "/platform/impact-exchange": "/en/platform/impact-exchange",
};

export const EN_TO_DA: Record<string, string> = Object.fromEntries(
  Object.entries(DA_TO_EN).map(([da, en]) => [en, da]),
);

export function detectLocaleFromPath(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "da";
}

/**
 * Translate the current pathname to the target locale.
 * Falls back to the locale's home if no direct mapping exists.
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (target === "en") {
    return DA_TO_EN[clean] ?? "/en";
  }
  return EN_TO_DA[clean] ?? "/";
}

export const SITE_URL = "https://gofreyra.com";

/** Build the absolute alternate URL for the *other* locale on a given DA path. */
export function alternateUrlFor(daPath: string, target: Locale): string | null {
  if (target === "da") return `${SITE_URL}${daPath}`;
  const en = DA_TO_EN[daPath];
  return en ? `${SITE_URL}${en}` : null;
}
