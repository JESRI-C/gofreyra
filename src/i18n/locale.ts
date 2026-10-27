export const LOCALES = ["da", "en", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "da";

/** Autonyms shown in the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = { da: "Dansk", en: "English", de: "Deutsch" };
export const HTML_LANG: Record<Locale, string> = { da: "da", en: "en", de: "de" };
export const OG_LOCALE: Record<Locale, string> = { da: "da_DK", en: "en_GB", de: "de_DE" };
export const SCHEMA_LANG: Record<Locale, string> = { da: "da-DK", en: "en", de: "de" };
export const DATE_LOCALE: Record<Locale, string> = { da: "da", en: "en", de: "de" };
export const STORAGE_KEY = "freyra-locale";

export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (LOCALES as readonly string[]).includes(v);
}

/** Route param value -> locale. Undefined means Danish (no prefix). */
export function toLocale(param: string | undefined): Locale {
  return param === "en" || param === "de" ? param : "da";
}

/** "/kommuner" + "en" -> "/en/kommuner"; "/" + "de" -> "/de". Danish keeps its URL. */
export function localizePath(path: string, locale: Locale): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (locale === "da") return p;
  return p === "/" ? `/${locale}` : `/${locale}${p}`;
}

/** "/en/kommuner" -> { locale: "en", path: "/kommuner" } */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const m = pathname.match(/^\/(en|de)(?=\/|$)(.*)$/);
  if (!m) return { locale: "da", path: pathname || "/" };
  return { locale: m[1] as Locale, path: m[2] || "/" };
}
