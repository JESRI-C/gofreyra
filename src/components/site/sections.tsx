import { LLink } from "@/components/site/LLink";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { COPY } from "@/i18n/pages/sections";
import { useCopy } from "@/i18n/useLocale";
import { Band, RuleGrid, type Tone } from "@/components/site/blocks";
import { BrandGlyph } from "@/components/brand/marks";

/* ---------- FAQ ---------- */
export type FAQItem = { q: string; a: string };

export function FaqSection({ items, eyebrow: eyebrowProp, title, subtitle, tone = "paper" }: { items: FAQItem[]; eyebrow?: string; title?: string; subtitle?: string; tone?: Tone }) {
  const t = useCopy(COPY);
  const eyebrow = eyebrowProp === undefined ? t.faqEyebrow : eyebrowProp;
  const ti = title ?? t.faqTitle;
  return (
    <Band tone={tone}>
      <div className="container-page py-20 md:py-28 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 self-start">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-4 text-3xl md:text-4xl">{ti}</h2>
          {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
        </div>
        <Accordion type="single" collapsible className="border-t border-foreground/25">
          {items.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-foreground/25">
              <AccordionTrigger className="py-5 text-left font-display text-lg md:text-xl font-normal hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Band>
  );
}

/* ---------- Flow steps: a node timeline in the brand's line grammar ---------- */
export function FlowSection({ eyebrow, title, subtitle, steps, beige, tone }: { eyebrow?: string; title: string; subtitle?: string; steps: { n: string; t: string; d: string }[]; beige?: boolean; tone?: Tone }) {
  const tn: Tone = tone ?? (beige ? "ivory" : "paper");
  return (
    <Band tone={tn}>
      <div className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-4 text-3xl md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
        </div>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <span aria-hidden className="absolute left-[11px] top-3 bottom-3 w-px bg-foreground/25 lg:left-3 lg:right-3 lg:top-[11px] lg:bottom-auto lg:h-px lg:w-auto md:hidden lg:block" />
          {steps.map((s) => (
            <li key={s.n} className="relative pl-10 lg:pl-0 lg:pt-12">
              <span aria-hidden className="absolute left-0 top-0 h-6 w-6 rounded-full border-2 border-eyebrow bg-background" />
              <div className="font-display text-sm tracking-wide text-eyebrow">{s.n}</div>
              <div className="mt-1.5 font-display text-xl leading-snug">{s.t}</div>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </Band>
  );
}

/* ---------- Page-specific CTA: forest panel with a cropped brand ring ---------- */
export function GreenCTA({ title, subtitle, primary, secondary }: { title: string; subtitle?: string; primary?: { to: string; label: string }; secondary?: { to: string; label: string } }) {
  const t = useCopy(COPY);
  const p = primary ?? { to: "/kontakt", label: t.ctaPrimaryLabel };
  return (
    <section className="container-page py-16 md:py-20">
      <div className="tone-forest relative overflow-hidden rounded-sm p-8 md:p-14">
        <BrandGlyph id="gofreyra" strokeWidth={1} className="pointer-events-none absolute -right-20 -top-24 hidden h-60 w-60 text-sage/30 md:block" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <div className="font-display text-3xl md:text-4xl leading-tight text-sky text-balance">{title}</div>
            {subtitle && <p className="mt-3 text-foreground/85 max-w-xl">{subtitle}</p>}
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button asChild className="rounded-sm h-12 px-6 text-base"><LLink to={p.to}>{p.label} <ArrowRight className="ml-1 w-4 h-4" /></LLink></Button>
            {secondary && <Button asChild variant="outline" className="rounded-sm h-12 px-6 text-base bg-transparent"><LLink to={secondary.to}>{secondary.label}</LLink></Button>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Microcopy strip ---------- */
export function MicroStrip({ items }: { items: string[] }) {
  return (
    <div className="tone-sage">
      <ul className="container-page py-5 flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium justify-center">
        {items.map((t) => (
          <li key={t} className="inline-flex items-center gap-2.5">
            <span aria-hidden className="h-2 w-2 rounded-full border-[1.5px] border-forest" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Two-column block ---------- */
export function SplitBlock({ eyebrow, title, body, items, beige, tone }: { eyebrow?: string; title: string; body?: string; items: { t: string; d: string }[]; beige?: boolean; tone?: Tone }) {
  return (
    <Band tone={tone ?? (beige ? "ivory" : "paper")}>
      <div className="container-page py-20 md:py-28 grid lg:grid-cols-2 gap-12">
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
          {body && <p className="mt-4 text-lg text-muted-foreground">{body}</p>}
        </div>
        <RuleGrid items={items} cols={2} className="md:grid-cols-1" />
      </div>
    </Band>
  );
}

/* ---------- Card grid (now an editorial, numbered rule grid) ---------- */
export function CardGrid({ eyebrow, title, subtitle, cards, cols = 3, beige, tone, icon: I, glyph }: { eyebrow?: string; title: string; subtitle?: string; cards: { t: string; d: string }[]; cols?: 2 | 3 | 4; beige?: boolean; tone?: Tone; icon?: ReactNode; glyph?: boolean }) {
  return (
    <Band tone={tone ?? (beige ? "ivory" : "paper")} glyph={glyph ? "group" : undefined}>
      <div className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-4 text-3xl md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        {I && <div aria-hidden className="mt-8 text-eyebrow">{I}</div>}
        <RuleGrid items={cards} cols={cols} numbered className="mt-12" />
      </div>
    </Band>
  );
}

/* ---------- Page intro ---------- */
export function SectionHeader({ eyebrow, title, body, center }: { eyebrow?: string; title: string; body?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl md:text-5xl">{title}</h2>
      {body && <p className="mt-4 text-lg text-muted-foreground">{body}</p>}
    </div>
  );
}
