import { LLink } from "@/components/site/LLink";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { COPY } from "@/i18n/pages/cta";
import { useCopy } from "@/i18n/useLocale";
import { ForgreningMark, LandskabMotif } from "@/components/site/brand";

/** Closing call to action: dark green full-width band with the white Landskab motif. */
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
    <section className="relative overflow-hidden bg-brand-dark text-primary-foreground">
      <div className="relative z-10 container-page pt-14 pb-28 md:pt-20 md:pb-24">
        <div className="max-w-[740px]">
          <div className="flex items-center gap-3">
            <ForgreningMark white className="w-8" />
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground/80">{ey}</p>
          </div>
          <h2 className="mt-6 display-2 text-primary-foreground">{ti}</h2>
          <p className="mt-5 text-lg text-primary-foreground/85">{su}</p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Button asChild className="h-12 px-6 text-[15px] bg-card text-brand-deep border-card hover:bg-brand-pale hover:border-brand-pale">
              <LLink to="/kontakt">{t.bookCall} <ArrowRight className="w-4 h-4" aria-hidden /></LLink>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6 text-[15px] bg-transparent border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <LLink to="/platformen">{t.viewPlatform}</LLink>
            </Button>
          </div>
        </div>
      </div>
      <LandskabMotif white className="absolute right-0 -bottom-16 w-[clamp(220px,36vw,500px)] opacity-35" />
    </section>
  );
}
