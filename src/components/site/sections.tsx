import { LLink } from "@/components/site/LLink";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { COPY } from "@/i18n/pages/sections";
import { useCopy } from "@/i18n/useLocale";

/* ---------- FAQ ---------- */
export type FAQItem = { q: string; a: string };

export function FaqSection({ items, eyebrow: eyebrowProp, title, subtitle }: { items: FAQItem[]; eyebrow?: string; title?: string; subtitle?: string }) {
  const t = useCopy(COPY);
  const eyebrow = eyebrowProp === undefined ? t.faqEyebrow : eyebrowProp;
  const ti = title ?? t.faqTitle;
  return (
    <section className="container-page py-20 md:py-24">
      <div className="max-w-3xl">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 text-3xl md:text-4xl">{ti}</h2>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="mt-8 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-2">
          {items.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="card-soft px-5 border-0">
              <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
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
      <div className="container-page py-20 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-muted-foreground text-lg">{subtitle}</p>}
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="card-soft p-5 bg-card">
              <div className="text-sm font-mono text-brand-deep">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Green CTA strip ---------- */
export function GreenCTA({ title, subtitle, primary, secondary }: { title: string; subtitle?: string; primary?: { to: string; label: string }; secondary?: { to: string; label: string } }) {
  const t = useCopy(COPY);
  const p = primary ?? { to: "/kontakt", label: t.ctaPrimaryLabel };
  return (
    <section className="container-page my-16">
      <div className="rounded-lg bg-brand-deep text-white p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <div className="text-2xl md:text-3xl text-white" style={{ fontFamily: "var(--font-display)" }}>{title}</div>
          {subtitle && <p className="mt-2 text-white/80 max-w-xl">{subtitle}</p>}
        </div>
        <div className="flex gap-3 flex-wrap">
          <Button asChild className="rounded-md h-11 px-5 bg-white text-brand-deep hover:bg-white/90"><LLink to={p.to}>{p.label} <ArrowRight className="ml-1 w-4 h-4" /></LLink></Button>
          {secondary && <Button asChild variant="outline" className="rounded-md h-11 px-5 bg-transparent border-white/40 text-white hover:bg-white/10"><LLink to={secondary.to}>{secondary.label}</LLink></Button>}
        </div>
      </div>
    </section>
  );
}

/* ---------- Microcopy strip ---------- */
export function MicroStrip({ items }: { items: string[] }) {
  return (
    <div className="border-y border-border bg-secondary/40">
      <div className="container-page py-4 flex flex-wrap gap-x-8 gap-y-2 text-xs md:text-sm text-muted-foreground justify-center">
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
      <div className="container-page py-20 md:py-24 grid lg:grid-cols-2 gap-12">
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
          {body && <p className="mt-4 text-lg text-muted-foreground">{body}</p>}
        </div>
        <div className="space-y-3">
          {items.map((c) => (
            <div key={c.t} className="card-soft p-5 bg-card">
              <div className="font-semibold">{c.t}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
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
      <div className="container-page py-20 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        <div className={`mt-10 grid gap-5 ${gridCls}`}>
          {cards.map((c) => (
            <div key={c.t} className="card-soft p-6 bg-card">
              {I && <div className="w-10 h-10 rounded-md bg-accent text-brand-deep grid place-items-center mb-3">{I}</div>}
              <div className="font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Page intro ---------- */
export function SectionHeader({ eyebrow, title, body, center }: { eyebrow?: string; title: string; body?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-lg text-muted-foreground">{body}</p>}
    </div>
  );
}
