import { useRouterState } from "@tanstack/react-router";
import { splitLocale, localizePath } from "@/i18n/locale";
import { CHROME_COPY } from "@/i18n/pages/chrome";

/** Localized 404, language taken from the URL prefix. Uses a plain anchor so it works outside layouts. */
export function NotFoundPage() {
  const locale = useRouterState({ select: (s) => splitLocale(s.location.pathname).locale });
  const t = CHROME_COPY[locale].notFound;
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
        <div className="mt-6">
          <a
            href={localizePath("/", locale)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.home}
          </a>
        </div>
      </div>
    </div>
  );
}
