import { BrandMark } from "@/components/brand/marks";

/**
 * Vertical bookmark ribbon that hangs from the top of a section and crosses
 * into the next one. It lives in the right page gutter (outside .container-page
 * content) and only renders from xl, so it never covers text or touch targets.
 * The parent section needs `relative z-10` so the ribbon paints above the next band.
 */
export function BrandRibbon({ tone = "clay", extend = "8rem" }: { tone?: "clay" | "sky" | "sage" | "forest"; extend?: string }) {
  return (
    <div aria-hidden className={`brand-ribbon ribbon-${tone}`} style={{ height: `calc(100% + ${extend})` }}>
      <div className="brand-ribbon-mark">
        <BrandMark id="group" variant="mono" size="100%" />
      </div>
    </div>
  );
}
