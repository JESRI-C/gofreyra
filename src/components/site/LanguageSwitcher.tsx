import { Link, useRouterState } from "@tanstack/react-router";
import { switchLocalePath } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleContext";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = useLocale();
  const other = locale === "da" ? "en" : "da";
  const otherHref = switchLocalePath(pathname, other);
  const otherLabel = other === "en" ? "EN" : "DA";
  const currentLabel = locale === "en" ? "EN" : "DA";

  return (
    <Link
      to={otherHref}
      aria-label={`Switch to ${otherLabel}`}
      className={`inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition px-2 py-1 rounded-md ${className}`}
    >
      <Globe className="w-4 h-4" aria-hidden />
      <span className="tabular-nums">
        <span className="text-foreground">{currentLabel}</span>
        <span className="text-muted-foreground"> / {otherLabel}</span>
      </span>
    </Link>
  );
}
