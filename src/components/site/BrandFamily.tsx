import { ArrowUpRight } from "lucide-react";
import { BRAND_FAMILY, CURRENT_BRAND, type BrandId } from "@/data/brand-family";
import { LLink } from "@/components/site/LLink";
import { useLocale } from "@/i18n/useLocale";
import { CHROME_COPY } from "@/i18n/pages/chrome";

/** Restrained accent per brand; GoFreyra keeps the site's green. */
const ACCENT: Record<BrandId, string> = {
  gofreyra: "text-brand-deep",
  isen: "text-brand-isen decoration-brand-isen",
};

/**
 * Link group to the Freyra Group brands. `bar` spreads label and links across the
 * family bar above the header (as in the approved prototype); `inline` is used in the footer.
 */
export function BrandFamily({ className = "", variant = "inline" }: { className?: string; variant?: "bar" | "inline" }) {
  const locale = useLocale();
  const t = CHROME_COPY[locale].family;
  const bar = variant === "bar";

  return (
    <nav aria-label={t.navLabel} className={`flex items-center gap-x-3 text-xs tracking-[0.03em] ${bar ? "w-full justify-between" : ""} ${className}`}>
      <span className="text-muted-foreground">{t.label}</span>
      <ul className={`flex items-center ${bar ? "gap-x-3 md:gap-x-5" : "gap-x-2"}`}>
        {BRAND_FAMILY.map((b) => {
          const current = b.id === CURRENT_BRAND;
          return (
            <li key={b.id} className="flex items-center">
              {current || !b.href ? (
                <LLink
                  to="/"
                  aria-current="true"
                  className="inline-flex items-center rounded-sm py-1 font-semibold text-brand-deep underline decoration-primary decoration-1 underline-offset-4"
                >
                  {b.name}
                  <span className="sr-only"> ({t.current})</span>
                </LLink>
              ) : (
                <a
                  href={b.href}
                  rel="noopener"
                  className={`inline-flex items-center gap-0.5 rounded-sm py-1 font-medium ${ACCENT[b.id]} underline-offset-4 hover:underline`}
                >
                  {b.name}
                  <ArrowUpRight className="h-3 w-3" aria-hidden />
                  <span className="sr-only"> ({t.external})</span>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
