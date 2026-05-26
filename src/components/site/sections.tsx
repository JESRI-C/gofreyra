import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check, Database, Brain, ShieldCheck, Globe2, Activity } from "lucide-react";
import type { ReactNode } from "react";
import { useLocale } from "@/i18n/LocaleContext";

/* ---------- FAQ ---------- */
export type FAQItem = { q: string; a: string };

export function FaqSection({ items, eyebrow = "FAQ", title, subtitle }: { items: FAQItem[]; eyebrow?: string; title?: string; subtitle?: string }) {
  const isEn = useLocale() === "en";
  const ti = title ?? (isEn ? "Frequently asked questions" : "Ofte stillede spørgsmål");
  return (
    <section className="container-page py-20">
      <div className="max-w-3xl">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">{ti}</h2>
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
      <div className="container-page py-20">
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">{title}</h2>
          {subtitle && <p className="mt-3 text-muted-foreground text-lg">{subtitle}</p>}
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="card-soft p-5 bg-card relative">
              <div className="text-sm font-mono text-primary">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Green CTA strip ---------- */
export function GreenCTA({ title, subtitle, primary, secondary }: { title: string; subtitle?: string; primary?: { to: string; label: string }; secondary?: { to: string; label: string } }) {
  const isEn = useLocale() === "en";
  const p = primary ?? { to: isEn ? "/en/book-demo" : "/book-demo", label: isEn ? "Book a demo" : "Book demo" };
  return (
    <section className="container-page my-16">
      <div className="rounded-3xl bg-primary/10 border border-primary/30 p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <div className="text-2xl md:text-3xl font-bold text-brand-deep">{title}</div>
          {subtitle && <p className="mt-2 text-foreground/80 max-w-xl">{subtitle}</p>}
        </div>
        <div className="flex gap-3 flex-wrap">
          <Button asChild className="rounded-full h-11 px-5"><Link to={p.to}>{p.label} <ArrowRight className="ml-1 w-4 h-4" /></Link></Button>
          {secondary && <Button asChild variant="outline" className="rounded-full h-11 px-5"><Link to={secondary.to}>{secondary.label}</Link></Button>}
        </div>
      </div>
    </section>
  );
}

/* ---------- Microcopy strip ---------- */
export function MicroStrip({ items }: { items: string[] }) {
  return (
    <div className="border-y border-border bg-secondary/30">
      <div className="container-page py-4 flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-muted-foreground justify-center">
        {items.map((t) => (
          <span key={t} className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" /> {t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Two-column block ---------- */
export function SplitBlock({ eyebrow, title, body, items, beige }: { eyebrow?: string; title: string; body?: string; items: { t: string; d: string }[]; beige?: boolean }) {
  return (
    <section className={beige ? "surface-beige" : ""}>
      <div className="container-page py-20 grid lg:grid-cols-2 gap-12">
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">{title}</h2>
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
      <div className="container-page py-20">
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">{title}</h2>
          {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        <div className={`mt-10 grid gap-5 ${gridCls}`}>
          {cards.map((c) => (
            <div key={c.t} className="card-soft p-6 bg-card">
              {I && <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center mb-3">{I}</div>}
              <div className="font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Module benefits row ---------- */
export function ModuleBenefits({ modules }: { modules: { icon: ReactNode; t: string; to: string; d: string; bullets: string[] }[] }) {
  const seeModule = useLocale() === "en" ? "See module" : "Se modulet";
  return (
    <section className="container-page py-20">
      <div className="grid md:grid-cols-2 gap-5">
        {modules.map((m) => (
          <div key={m.t} className="card-soft p-7 bg-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{m.icon}</div>
              <div>
                <div className="text-xl font-semibold">{m.t}</div>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground">{m.d}</p>
            <ul className="mt-4 space-y-2">
              {m.bullets.map((b) => (
                <li key={b} className="flex gap-2 items-start text-sm">
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" /><span>{b}</span>
                </li>
              ))}
            </ul>
            <Link to={m.to} className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">{seeModule} <ArrowRight className="ml-1 w-4 h-4" /></Link>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Stat row ---------- */
export function MiniIcons() {
  return [<Database className="w-5 h-5" />, <Brain className="w-5 h-5" />, <ShieldCheck className="w-5 h-5" />, <Globe2 className="w-5 h-5" />, <Activity className="w-5 h-5" />];
}

/* ---------- Page intro (used to enrich solution pages) ---------- */
export function SectionHeader({ eyebrow, title, body, center }: { eyebrow?: string; title: string; body?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl md:text-4xl font-bold">{title}</h2>
      {body && <p className="mt-4 text-lg text-muted-foreground">{body}</p>}
    </div>
  );
}
