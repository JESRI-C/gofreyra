import { LLink } from "@/components/site/LLink";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { COPY } from "@/i18n/pages/sections";
import { useCopy } from "@/i18n/useLocale";
import { ForgreningMark, LandskabMotif } from "@/components/site/brand";

/* ---------- Page hero (pale green, editorial) ---------- */
/**
 * Shared hero for internal pages, following the approved service prototype:
 * pale green band, eyebrow, large heading, intro and actions. With `aside` the hero
 * becomes two columns; without it the Landskab motif sits at the lower right edge,
 * in reserved space so it never covers text.
 */
export function PageHero({
  eyebrow,
  top,
  title,
  body,
  actions,
  aside,
  children,
  motif = true,
}: {
  eyebrow?: ReactNode;
  /** Replaces the eyebrow, e.g. a breadcrumb. */
  top?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
  motif?: boolean;
}) {
  const showMotif = motif && !aside;
  return (
    <section className={`relative overflow-hidden bg-brand-pale ${showMotif ? "pb-28 md:pb-32 lg:pb-36" : "pb-14 md:pb-20"}`}>
      <div className={`relative z-10 container-page pt-10 md:pt-16 ${aside ? "grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center" : ""}`}>
        <div className="min-w-0">
          {top ?? (eyebrow ? <p className="eyebrow">{eyebrow}</p> : null)}
          <h1 className={`mt-6 display-1 ${aside ? "max-w-[640px]" : "max-w-[820px]"}`}>{title}</h1>
          {body && <div className="mt-6 text-lg md:text-[19px] leading-relaxed text-foreground max-w-[650px]">{body}</div>}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          {children}
        </div>
        {aside && <div className="min-w-0">{aside}</div>}
      </div>
      {showMotif && (
        <LandskabMotif className="absolute right-0 -bottom-6 w-[clamp(190px,30vw,420px)]" />
      )}
    </section>
  );
}

/** Standard primary / secondary hero actions. */
export function HeroActions({ primary, secondary, onPhoto = false }: { primary?: { to: string; label: string }; secondary?: { to: string; label: string }; onPhoto?: boolean }) {
  return (
    <>
      {primary && (
        <Button asChild className="h-12 px-6 text-[15px]"><LLink to={primary.to}>{primary.label} <ArrowRight className="w-4 h-4" aria-hidden /></LLink></Button>
      )}
      {secondary && (
        <Button asChild variant="outline" className={`h-12 px-6 text-[15px] ${onPhoto ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-brand-deep" : ""}`}><LLink to={secondary.to}>{secondary.label}</LLink></Button>
      )}
    </>
  );
}

/* ---------- FAQ ---------- */
export type FAQItem = { q: string; a: string };

export function FaqSection({ items, eyebrow: eyebrowProp, title, subtitle }: { items: FAQItem[]; eyebrow?: string; title?: string; subtitle?: string }) {
  const t = useCopy(COPY);
  const eyebrow = eyebrowProp === undefined ? t.faqEyebrow : eyebrowProp;
  const ti = title ?? t.faqTitle;
  return (
    <section className="container-page py-16 md:py-20">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-20">
        <div>
          {eyebrow && eyebrow !== ti && <p className="eyebrow">{eyebrow}</p>}
          <h2 className={`${eyebrow && eyebrow !== ti ? "mt-5" : ""} display-2`}>{ti}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </div>
        <Accordion type="single" collapsible className="border-t border-brand-rule">
          {items.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-5 text-left text-base md:text-[17px] font-semibold text-brand-ink hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/85 text-[15px] leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- Flow steps ---------- */
export function FlowSection({ eyebrow, title, subtitle, steps, beige }: { eyebrow?: string; title: string; subtitle?: string; steps: { n: string; t: string; d: string }[]; beige?: boolean }) {
  return (
    <section className={beige ? "surface-beige" : ""}>
      <div className="container-page py-16 md:py-20">
        <SectionHeader eyebrow={eyebrow} title={title} body={subtitle} />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8">
          {steps.map((s) => (
            <div key={s.n} className="rule-step">
              <div className="text-[13px] text-brand-deep">{s.n}</div>
              <h3 className="mt-5 text-xl">{s.t}</h3>
              <p className="mt-2 text-[15px] text-foreground/85">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Light CTA band (the dark CTA is CTASection) ---------- */
export function GreenCTA({ title, subtitle, primary, secondary }: { title: string; subtitle?: string; primary?: { to: string; label: string }; secondary?: { to: string; label: string } }) {
  const t = useCopy(COPY);
  const p = primary ?? { to: "/kontakt", label: t.ctaPrimaryLabel };
  return (
    <section className="container-page py-12 md:py-16">
      <div className="border-y border-brand-rule py-10 md:py-12 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
        <ForgreningMark className="w-12 md:w-14" />
        <div>
          <h2 className="text-2xl md:text-[32px]">{title}</h2>
          {subtitle && <p className="mt-3 text-foreground/85 max-w-xl">{subtitle}</p>}
        </div>
        <div className="flex gap-3 flex-wrap">
          <HeroActions primary={p} secondary={secondary} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Microcopy strip ---------- */
export function MicroStrip({ items }: { items: string[] }) {
  return (
    <div className="border-b border-border bg-background">
      <div className="container-page py-4 md:py-5 grid grid-cols-2 gap-x-6 gap-y-2 md:flex md:flex-wrap md:justify-between text-xs md:text-[13px] text-brand-ink">
        {items.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Two-column block ---------- */
export function SplitBlock({ eyebrow, title, body, items, beige }: { eyebrow?: string; title: string; body?: string; items: { t: string; d: string }[]; beige?: boolean }) {
  return (
    <section className={beige ? "surface-beige" : ""}>
      <div className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-12">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="mt-5 display-2">{title}</h2>
          {body && <p className="mt-5 text-lg text-foreground/85">{body}</p>}
        </div>
        <div>
          {items.map((c) => (
            <div key={c.t} className="rule-card pb-5">
              <h3 className="text-lg">{c.t}</h3>
              <p className="mt-1.5 text-[15px] text-foreground/85">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Card grid ---------- */
export function CardGrid({ eyebrow, title, subtitle, cards, cols = 3, beige, icon: I }: { eyebrow?: string; title: string; subtitle?: string; cards: { t: string; d: string }[]; cols?: 2 | 3 | 4; beige?: boolean; icon?: ReactNode }) {
  const gridCls = cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <section className={beige ? "surface-beige" : ""}>
      <div className="container-page py-16 md:py-20">
        <SectionHeader eyebrow={eyebrow} title={title} body={subtitle} />
        <div className={`mt-10 grid gap-x-8 gap-y-6 ${gridCls}`}>
          {cards.map((c) => (
            <div key={c.t} className="rule-card">
              {I && <div className="w-10 h-10 rounded-sm bg-accent text-brand-deep grid place-items-center mb-4">{I}</div>}
              <h3 className="text-xl">{c.t}</h3>
              <p className="mt-2 text-[15px] text-foreground/85">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section intro ---------- */
/**
 * Editorial section intro: heading left, short body right on wide screens.
 * `mark` adds the Forgrening secondary mark; use it sparingly.
 */
export function SectionHeader({ eyebrow, title, body, center, mark }: { eyebrow?: string; title: string; body?: string; center?: boolean; mark?: boolean }) {
  if (center) {
    return (
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-5 display-2">{title}</h2>
        {body && <p className="mt-5 mx-auto text-lg text-foreground/85">{body}</p>}
      </div>
    );
  }
  return (
    <div className={body ? "grid lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-20 lg:items-end" : "max-w-3xl"}>
      <div>
        {mark && <ForgreningMark className="w-11 mb-6" />}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className={`${eyebrow ? "mt-5" : ""} display-2 max-w-[760px]`}>{title}</h2>
      </div>
      {body && <p className="text-[17px] leading-relaxed text-foreground/85 max-w-[460px]">{body}</p>}
    </div>
  );
}
