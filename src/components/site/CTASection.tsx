import { LLink } from "@/components/site/LLink";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { COPY } from "@/i18n/pages/cta";
import { useCopy } from "@/i18n/useLocale";
import { BrandGlyph } from "@/components/brand/marks";

/** Closing call to action: full-bleed sage field that hands over to the forest footer. */
export function CTASection({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const t = useCopy(COPY);
  const ey = eyebrow ?? t.eyebrow;
  const ti = title ?? t.title;
  const su = subtitle ?? t.subtitle;

  return (
    <section className="tone-sage relative overflow-hidden">
      <BrandGlyph
        id="gofreyra"
        strokeWidth={0.9}
        className="pointer-events-none absolute -right-40 -top-64 hidden h-[480px] w-[480px] text-forest/20 lg:block"
      />
      <div className="relative container-page py-20 md:py-28 grid md:grid-cols-[1fr_auto] gap-10 items-end">
        <div className="min-w-0">
          <span className="eyebrow">{ey}</span>
          <h2 className="mt-4 text-4xl md:text-6xl max-w-3xl leading-[1.05]">{ti}</h2>
          <p className="mt-5 text-lg text-foreground/85 max-w-xl">{su}</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Button asChild className="rounded-sm h-12 px-6 text-base">
            <LLink to="/kontakt">{t.bookCall} <ArrowRight className="ml-1.5 w-4 h-4" /></LLink>
          </Button>
          <Button asChild variant="outline" className="rounded-sm h-12 px-6 text-base bg-transparent border-forest/40 hover:bg-forest/10 hover:text-foreground">
            <LLink to="/platformen">{t.viewPlatform}</LLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
