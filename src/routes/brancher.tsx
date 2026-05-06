import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Factory, Droplets, Sprout, Trees, Leaf, Briefcase, Building, Zap, HeartHandshake } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { CardGrid, FlowSection, MicroStrip, SectionHeader } from "@/components/site/sections";
import { SECTORS } from "@/data/sectors";
import type { ReactNode } from "react";

const ICONS: Record<string, ReactNode> = {
  kommuner: <Building2 className="w-5 h-5" />,
  industri: <Factory className="w-5 h-5" />,
  forsyning: <Droplets className="w-5 h-5" />,
  landbrug: <Sprout className="w-5 h-5" />,
  skovbrug: <Trees className="w-5 h-5" />,
  naturprojekter: <Leaf className="w-5 h-5" />,
  raadgivere: <Briefcase className="w-5 h-5" />,
  "ejendomme-og-byggeri": <Building className="w-5 h-5" />,
  energi: <Zap className="w-5 h-5" />,
  "ngo-og-fonde": <HeartHandshake className="w-5 h-5" />,
};

export const Route = createFileRoute("/brancher")({
  head: () =>
    buildHead({
      title: "Brancher — GoFreyra til miljødata og ESG-dokumentation",
      description:
        "Se hvordan GoFreyra hjælper kommuner, industri, forsyning, landbrug, skovbrug og naturprojekter med miljødata, ESG-dokumentation og sporbar impact.",
      path: "/brancher",
    }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Brancher</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1]">
            GoFreyra til brancher med behov for bedre miljødata
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Fra kommunale naturprojekter til industri, forsyning og landbrug. GoFreyra samler data, analyse og dokumentation i én platform.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Miljødata og ESG-dokumentation ser forskellig ud fra branche til branche. En kommune har brug for overblik over naturprojekter og biodiversitet. En industrivirksomhed har brug for driftsnære ESG-data. Et forsyningsselskab har brug for dokumentation af vand, energi, klima og ressourcer. GoFreyra er bygget til at samle datakilder, skabe overblik og gøre dokumentation brugbar på tværs af sektorer.
          </p>
        </div>
      </section>

      <MicroStrip items={["Pilot på 2-4 uger", "Dansk leverandør", "Audit trail og ESRS-mapping", "Skalerbar fra ét område"]} />

      <section className="container-page py-16">
        <SectionHeader eyebrow="Find din branche" title="Vælg jeres sektor — og se en konkret løsningsmodel." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTORS.map((s) => (
            <Link
              key={s.slug}
              to="/brancher/$slug"
              params={{ slug: s.slug }}
              className="card-soft p-6 bg-card hover:border-primary/40 transition group flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">
                {ICONS[s.slug]}
              </div>
              <div className="mt-4 text-lg font-semibold">{s.name}</div>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{s.cardTeaser}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">
                {s.cardCta} <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CardGrid
        beige
        eyebrow="Fælles udfordringer"
        title="De samme mønstre går igen på tværs af brancher."
        cols={3}
        cards={[
          { t: "Data ligger spredt", d: "På tværs af systemer, regneark, leverandører og rapporter." },
          { t: "ESG-dokumentation er manuel", d: "Hver kvartal samles tal i hånden — uden audit trail." },
          { t: "Naturdata bruges for lidt", d: "Værdifuld viden bliver liggende i feltrapporter og PDF’er." },
          { t: "Dokumentation mangler audit trail", d: "Tal kan ikke spores tilbage til kilden." },
          { t: "Ledelsen mangler ét overblik", d: "Drift, ESG og naturdata lever i adskilte verdener." },
          { t: "Pilotprojekter bliver svære at skalere", d: "God indsats — men ingen fælles datamodel at bygge videre på." },
        ]}
      />

      <FlowSection
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

      <section className="container-page py-16">
        <div className="rounded-3xl bg-primary/10 border border-primary/30 p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-brand-deep">
              Find den rigtige indgang for jeres branche
            </div>
            <p className="mt-3 text-foreground/80 max-w-xl">
              Book en demo, og se hvordan GoFreyra kan tilpasses jeres datakilder, dokumentationsbehov og første pilotforløb.
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
