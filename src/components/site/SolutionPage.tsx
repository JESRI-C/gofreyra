import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Database } from "lucide-react";
import { PageLayout } from "./PageLayout";
import { CTASection } from "./CTASection";
import { FaqSection, type FAQItem, FlowSection, SectionHeader } from "./sections";

export interface SolutionPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  problems: string[];
  outcomes: { title: string; desc: string }[];
  modules: string[];
  heroImage?: string;
  heroImageAlt?: string;
  /** Optional richer sections */
  dataSources?: string[];
  pilotSteps?: { n: string; t: string; d: string }[];
  faq?: FAQItem[];
  pilotIntro?: string;
}

export function SolutionPage({ eyebrow, title, subtitle, problems, outcomes, modules, heroImage, heroImageAlt, dataSources, pilotSteps, faq, pilotIntro }: SolutionPageProps) {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className={`container-page py-16 md:py-24 ${heroImage ? "grid lg:grid-cols-2 gap-10 items-center" : "max-w-3xl"}`}>
          <div>
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
          {heroImage && (
            <img
              src={heroImage}
              alt={heroImageAlt ?? ""}
              width={1536}
              height={1024}
              className="w-full h-auto rounded-2xl border border-border shadow-elegant"
            />
          )}
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

      {dataSources && dataSources.length > 0 && (
        <section className="surface-beige">
          <div className="container-page py-16">
            <SectionHeader eyebrow="Relevante datakilder" title="Bygget til data fra virkeligheden." body="Datakilder kobles gradvist. Platformen kræver ikke perfekt datamodenhed fra dag ét." />
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

      <section className="container-page py-14">
        <SectionHeader eyebrow="Relevante moduler" title="Modulerne, der typisk kobles på." />
        <div className="mt-6 flex flex-wrap gap-2">
          {modules.map((m) => (
            <span key={m} className="px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium">{m}</span>
          ))}
        </div>
      </section>

      {pilotSteps && pilotSteps.length > 0 && (
        <FlowSection beige eyebrow="Pilotforløb" title="Et pilotprojekt kan starte med ét område." subtitle={pilotIntro} steps={pilotSteps} />
      )}

      {faq && faq.length > 0 && <FaqSection items={faq} />}

      <CTASection />
    </PageLayout>
  );
}
