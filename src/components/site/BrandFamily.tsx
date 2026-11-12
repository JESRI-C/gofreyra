import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand/marks";
import { BRAND_FAMILY, CURRENT_BRAND, type BrandId } from "@/data/brand-family";
import { LLink } from "@/components/site/LLink";
import { useLocale } from "@/i18n/useLocale";
import { CHROME_COPY } from "@/i18n/pages/chrome";

/** Restrained accent per brand; GoFreyra keeps the site's green. */
const ACCENT: Record<BrandId, string> = {
  gofreyra: "text-brand-deep",
  isen: "text-brand-isen decoration-brand-isen",
};

/** Link group to the other Freyra Group brands. Used in the header bar and footer. */
export function BrandFamily({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const t = CHROME_COPY[locale].family;

  return (
    <nav aria-label={t.navLabel} className={`flex items-center gap-x-3 text-xs ${className}`}>
      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
        <BrandMark id="group" variant="mono" size={13} className="text-forest" />
        {t.label}
      </span>
      <ul className="flex items-center gap-x-1">
        {BRAND_FAMILY.map((b) => {
          const current = b.id === CURRENT_BRAND;
          return (
            <li key={b.id} className="flex items-center">
              {current || !b.href ? (
                <LLink
                  to="/"
                  aria-current="true"
                  className="inline-flex items-center gap-1.5 rounded-sm px-1.5 py-1 font-semibold text-brand-deep underline decoration-primary decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <BrandMark id="gofreyra" size={14} />
                  {b.name}
                  <span className="sr-only"> ({t.current})</span>
                </LLink>
              ) : (
                <a
                  href={b.href}
                  rel="noopener"
                  className={`inline-flex items-center gap-0.5 rounded-sm px-1.5 py-1 font-medium ${ACCENT[b.id]} underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
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
