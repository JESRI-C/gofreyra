import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  type ErrorComponentProps,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { useEffect } from "react";
import appCss from "../styles.css?url";
import { NotFoundPage } from "@/components/site/NotFoundPage";
import { CHROME_COPY } from "@/i18n/pages/chrome";
import { HTML_LANG, STORAGE_KEY, localizePath, splitLocale } from "@/i18n/locale";

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  const locale = useRouterState({ select: (st) => splitLocale(st.location.pathname).locale });
  const t = CHROME_COPY[locale].error;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">{t.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.retry}
          </button>
          <a
            href={localizePath("/", locale)}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t.home}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#2BC48A" },
      { title: "Freyra Evidence Workspace" },
      { property: "og:title", content: "Freyra Evidence Workspace" },
      { name: "twitter:title", content: "Freyra Evidence Workspace" },
      { name: "description", content: "Freyra er en verificerbar evidenskæde for natur- og arealprojekter i Grøn Trepart. Fra dronefoto og offentlige data til en baseline, kommunen kan stå på mål for." },
      { property: "og:description", content: "Freyra er en verificerbar evidenskæde for natur- og arealprojekter i Grøn Trepart. Fra dronefoto og offentlige data til en baseline, kommunen kan stå på mål for." },
      { name: "twitter:description", content: "Freyra er en verificerbar evidenskæde for natur- og arealprojekter i Grøn Trepart. Fra dronefoto og offentlige data til en baseline, kommunen kan stå på mål for." },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const locale = useRouterState({ select: (s) => splitLocale(s.location.pathname).locale });
  return (
    <html lang={HTML_LANG[locale]}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  // Remember language: only on a fresh entry to the Danish home page "/" do we restore a
  // previously chosen en/de version. Explicit locale URLs are always respected.
  useEffect(() => {
    if (window.location.pathname !== "/") return;
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      return;
    }
    if (saved === "en" || saved === "de") {
      const href = `${localizePath("/", saved)}${window.location.search}${window.location.hash}`;
      // Full replace avoids racing the router while the Danish home page is hydrating.
      window.location.replace(href);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
