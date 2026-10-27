import { useRouter, useRouterState } from "@tanstack/react-router";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HTML_LANG, LOCALES, LOCALE_NAMES, STORAGE_KEY, localizePath, splitLocale, type Locale } from "@/i18n/locale";
import { CHROME_COPY } from "@/i18n/pages/chrome";

/** Href of the same page in another language, keeping query string and hash. */
export function switchHref(pathname: string, searchStr: string, hash: string, target: Locale) {
  const { path } = splitLocale(pathname);
  return `${localizePath(path, target)}${searchStr}${hash ? `#${hash.replace(/^#/, "")}` : ""}`;
}

export function LanguageSwitcher() {
  const router = useRouter();
  const loc = useRouterState({ select: (s) => s.location });
  const current = splitLocale(loc.pathname).locale;
  const t = CHROME_COPY[current].nav;

  const choose = (target: Locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, target);
    } catch {
      /* storage unavailable */
    }
    if (target === current) return;
    router.navigate({ href: switchHref(loc.pathname, loc.searchStr, loc.hash, target) });
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className="inline-flex h-10 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`${t.chooseLanguage}: ${LOCALE_NAMES[current]}`}
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span className="uppercase">{current}</span>
        <ChevronDown className="h-3.5 w-3.5" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">{t.language}</DropdownMenuLabel>
        {LOCALES.map((l) => (
          <DropdownMenuItem
            key={l}
            onSelect={() => choose(l)}
            lang={HTML_LANG[l]}
            aria-current={l === current ? "true" : undefined}
            className="flex cursor-pointer items-center justify-between gap-3"
          >
            <span>{LOCALE_NAMES[l]}</span>
            {l === current && <Check className="h-4 w-4 text-brand-deep" aria-hidden />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
