import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { PageLayout } from "./PageLayout";
import { CTASection } from "./CTASection";

export interface ProductPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro?: string;
  features: { title: string; desc: string }[];
  bullets?: string[];
  visual?: React.ReactNode;
}

export function ProductPage({ eyebrow, title, subtitle, intro, features, bullets, visual }: ProductPageProps) {
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
        <section className="container-page py-12">
          <p className="max-w-3xl text-lg text-foreground/80">{intro}</p>
        </section>
      )}

      <section className="container-page py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Funktioner</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
