import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { PageLayout } from "./PageLayout";
import { CTASection } from "./CTASection";

export interface SolutionPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  problems: string[];
  outcomes: { title: string; desc: string }[];
  modules: string[];
}

export function SolutionPage({ eyebrow, title, subtitle, problems, outcomes, modules }: SolutionPageProps) {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1]">{title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>
          <div className="mt-7 flex gap-3">
            <Button asChild className="rounded-full h-11 px-5">
              <Link to="/book-demo">Book demo <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-11 px-5">
              <Link to="/platform">Se platformen</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Typiske udfordringer</h2>
          <ul className="mt-5 space-y-3">
            {problems.map((p) => (
              <li key={p} className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Sådan hjælper GoFreyra</h2>
          <div className="mt-5 space-y-3">
            {outcomes.map((o) => (
              <div key={o.title} className="card-soft p-5">
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{o.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{o.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="surface-beige rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold">Relevante moduler</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {modules.map((m) => (
              <span key={m} className="px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium">{m}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
