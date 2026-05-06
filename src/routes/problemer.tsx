import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, AlertCircle, Database, FileText, FileSearch, Sprout, Activity } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { CardGrid, FlowSection, MicroStrip, SectionHeader } from "@/components/site/sections";
import { PROBLEMS } from "@/data/problems";
import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  "esg-dokumentation": <FileText className="w-5 h-5" />,
  "fragmenterede-data": <Database className="w-5 h-5" />,
  "manglende-audit-trail": <FileSearch className="w-5 h-5" />,
  "manuelle-esg-rapporter": <AlertCircle className="w-5 h-5" />,
  "naturdata-uden-struktur": <Sprout className="w-5 h-5" />,
  "beslutninger-uden-realtidsdata": <Activity className="w-5 h-5" />,
};

export const Route = createFileRoute("/problemer")({
  head: () =>
    buildHead({
      title: "Problemer GoFreyra løser — ESG, miljødata og dokumentation",
      description:
        "Se hvordan GoFreyra hjælper med ESG-dokumentation, fragmenterede data, audit trail, manuelle rapporter og naturdata uden struktur.",
      path: "/problemer",
    }),
  component: ProblemsPage,
});

function ProblemsPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Problemer</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1]">
            Problemer GoFreyra hjælper med at løse
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Fra fragmenterede miljødata til bedre ESG-dokumentation, audit trail og beslutningsgrundlag.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Mange organisationer arbejder allerede med bæredygtighed, natur, klima og ESG. Udfordringen er sjældent ambitionen — det er datagrundlaget. Data ligger spredt, rapporteringen er manuel, og dokumentationen er svær at spore tilbage til kilden.
          </p>
        </div>
      </section>

      <MicroStrip items={["Audit trail og ESRS-mapping", "Fælles datamodel", "Pilot på 2-4 uger", "Dansk leverandør"]} />

      <section className="container-page py-16">
        <SectionHeader eyebrow="De 6 hyppigste udfordringer" title="Vælg det problem, der ligner jeres." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEMS.map((p) => (
            <Link
              key={p.slug}
              to="/problemer/$slug"
              params={{ slug: p.slug }}
              className="card-soft p-6 bg-card hover:border-primary/40 transition group flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">
                {ICONS[p.slug]}
              </div>
              <div className="mt-4 text-lg font-semibold">{p.name}</div>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.cardTeaser}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">
                {p.cardCta} <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FlowSection
        beige
        eyebrow="Sådan hjælper GoFreyra"
        title="Fem trin fra spredt data til dokumenteret resultat."
        steps={[
          { n: "01", t: "Saml datakilder", d: "Sensor, drift, felt, satellit og åbne registre." },
          { n: "02", t: "Strukturér og validér", d: "Fælles datamodel og kvalitetskontrol." },
          { n: "03", t: "Analysér mønstre", d: "Risici, afvigelser og udvikling over tid." },
          { n: "04", t: "Dokumentér impact", d: "Audit trail og ESRS-mapping." },
          { n: "05", t: "Del rapporter", d: "Til ledelse, revisor, partnere og myndigheder." },
        ]}
      />

      <CardGrid
        eyebrow="Beslægtede områder"
        title="Hvor data og problemer mødes."
        cols={3}
        cards={[
          { t: "Brancher", d: "Se den konkrete anvendelse i jeres sektor." },
          { t: "Datakilder", d: "Hvilke datatyper kan kobles på platformen." },
          { t: "Use cases", d: "Konkrete eksempler fra naturprojekter og ESG." },
        ]}
      />

      <section className="container-page py-12">
        <div className="rounded-3xl bg-primary/10 border border-primary/30 p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-brand-deep">
              Vil I gøre jeres datagrundlag lettere at bruge?
            </div>
            <p className="mt-3 text-foreground/80 max-w-xl">
              Book en demo, og se hvordan GoFreyra kan samle miljødata, ESG-dokumentation og dokumentationsflow i én platform.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link to="/book-demo" className="inline-flex items-center justify-center rounded-full h-11 px-5 bg-primary text-primary-foreground font-medium hover:bg-primary/90">
              Book demo <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
            <Link to="/platform" className="inline-flex items-center justify-center rounded-full h-11 px-5 border border-border font-medium hover:bg-secondary">
              Se platformen
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
