import { useRouterState } from "@tanstack/react-router";
import { splitLocale, type Locale } from "./locale";

/** Current locale, derived from the URL prefix (works in SSR and on the client). */
export function useLocale(): Locale {
  return useRouterState({ select: (s) => splitLocale(s.location.pathname).locale });
}

/** Pick the active locale's entry from a { da, en, de } copy object. */
export function useCopy<T>(copy: Record<Locale, T>): T {
  return copy[useLocale()];
}
