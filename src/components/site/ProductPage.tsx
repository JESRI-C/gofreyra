import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Database } from "lucide-react";
import { PageLayout } from "./PageLayout";
import { CTASection } from "./CTASection";
import { FaqSection, type FAQItem, FlowSection, GreenCTA, SectionHeader } from "./sections";

export interface ProductPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro?: string;
  features: { title: string; desc: string }[];
  bullets?: string[];
  visual?: ReactNode;
  /** Optional richer sections */
  flow?: { eyebrow?: string; title: string; subtitle?: string; steps: { n: string; t: string; d: string }[] };
  useCases?: { t: string; d: string }[];
  notDoing?: string[];
  faq?: FAQItem[];
  extra?: ReactNode;
  /** New: data sources used by the module */
  dataSources?: string[];
  /** New: related modules in the platform */
  relatedModules?: { name: string; to: string; d: string }[];
}

export function ProductPage({ eyebrow, title, subtitle, intro, features, bullets, visual, flow, useCases, notDoing, faq, extra, dataSources, relatedModules }: ProductPageProps) {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1]">{title}</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">{subtitle}</p>
            <div className="mt-7 flex gap-3">
              <Button asChild className="rounded-full h-11 px-5">
                <Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-5">
                <Link to="/platform">Se platformen</Link>
              </Button>
            </div>
          </div>
          <div>{visual ?? <DefaultVisual />}</div>
        </div>
      </section>

      {intro && (
        <section className="container-page py-14">
          <p className="max-w-3xl text-lg text-foreground/80">{intro}</p>
        </section>
      )}

      <section className="container-page py-12">
        <SectionHeader eyebrow="Funktioner" title="Hvad modulet gør" />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card-soft p-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-brand-deep grid place-items-center mb-3">
                <Check className="w-4 h-4" />
              </div>
              <div className="font-semibold">{f.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {flow && <FlowSection beige eyebrow={flow.eyebrow} title={flow.title} subtitle={flow.subtitle} steps={flow.steps} />}

      {extra}

      {useCases && useCases.length > 0 && (
        <section className="container-page py-16">
          <SectionHeader eyebrow="Anvendelse" title="Sådan bruges modulet i praksis" />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {useCases.map((u) => (
              <div key={u.t} className="card-soft p-6">
                <div className="font-semibold">{u.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{u.d}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {bullets && bullets.length > 0 && (
        <section className="container-page py-12">
          <div className="surface-beige rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Hvad I får ud af det</h2>
              <p className="mt-3 text-muted-foreground">Konkrete effekter, drift og ESG-team kan mærke fra første pilot.</p>
            </div>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 items-start text-foreground/85">
                  <Check className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {notDoing && notDoing.length > 0 && (
        <section className="container-page py-12">
          <div className="card-soft p-8 md:p-10 bg-card max-w-4xl">
            <span className="eyebrow">Hvad modulet ikke gør</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold">Vi siger det rent ud.</h2>
            <ul className="mt-5 space-y-2">
              {notDoing.map((n) => (
                <li key={n} className="flex gap-2 text-sm text-foreground/80"><span className="text-muted-foreground">—</span> <span>{n}</span></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {dataSources && dataSources.length > 0 && (
        <section className="surface-beige">
          <div className="container-page py-16">
            <SectionHeader eyebrow="Datakilder" title="Hvilke data modulet typisk arbejder med." body="Datakilder kobles gradvist. Vi kræver ikke perfekt datamodenhed fra dag ét." />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {dataSources.map((d) => (
                <div key={d} className="card-soft p-4 bg-card flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-brand-deep grid place-items-center"><Database className="w-4 h-4" /></div>
                  <span className="text-sm font-medium">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedModules && relatedModules.length > 0 && (
        <section className="container-page py-16">
          <SectionHeader eyebrow="Modulrelation" title="Sådan spiller modulet sammen med resten af platformen." body="Modulerne deler datagrundlag. Start med ét — kobl flere på, når det giver værdi." />
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {relatedModules.map((m) => (
              <Link key={m.to} to={m.to} className="card-soft p-5 bg-card hover:border-primary/40 transition">
                <div className="font-semibold">{m.name}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{m.d}</p>
                <div className="mt-3 inline-flex items-center text-sm font-medium text-brand-deep">Se modulet <ArrowRight className="ml-1 w-4 h-4" /></div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {faq && faq.length > 0 && <FaqSection items={faq} />}

      <GreenCTA title="Vil I se modulet i jeres egen kontekst?" subtitle="Vi sætter en demo op med relevante datakilder for jer." secondary={{ to: "/platform", label: "Se hele platformen" }} />

      <CTASection />
    </PageLayout>
  );
}

function DefaultVisual() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="text-xs font-semibold uppercase tracking-wider text-brand-deep">Modul</div>
      <div className="mt-2 text-2xl font-bold">GoFreyra Platform</div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {["Realtidsdata", "AI-anbefalinger", "Audit trail", "Impact-metrics"].map((x) => (
          <div key={x} className="rounded-lg border border-border p-3 text-sm font-medium">{x}</div>
        ))}
      </div>
    </div>
  );
}
