import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Database } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { MicroStrip, SectionHeader } from "@/components/site/sections";
import { DATA_PAGES } from "@/data/dataTypes";

export const Route = createFileRoute("/data")({
  head: () =>
    buildHead({
      title: "Datakilder — GoFreyra til miljødata og ESG",
      description:
        "Se hvordan GoFreyra kan arbejde med biodiversitet, vandkvalitet, jorddata, CO₂, sensordata, satellitdata og dronedata.",
      path: "/data",
    }),
  component: DataHubPage,
});

function DataHubPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Data</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.1]">
            Datakilder i GoFreyra
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            GoFreyra kan samle miljødata fra sensorer, feltregistreringer, satellitter, droner, driftssystemer og manuelle input.
          </p>
          <p className="mt-4 text-base text-foreground/80">
            Et stærkt datagrundlag behøver ikke starte perfekt. GoFreyra er bygget til at samle datakilder gradvist, så I kan starte med det, I allerede har, og udvide over tid.
          </p>
        </div>
      </section>

      <MicroStrip items={["Sensorer og IoT", "Satellit og drone", "Felt og driftsdata", "Eksterne registre"]} />

      <section className="container-page py-16">
        <SectionHeader eyebrow="10 datatyper" title="Vælg en datatype og se hvordan den indgår i GoFreyra." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DATA_PAGES.map((d) => (
            <Link
              key={d.slug}
              to="/data/$slug"
              params={{ slug: d.slug }}
              className="card-soft p-6 bg-card hover:border-primary/40 transition group flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">
                <Database className="w-5 h-5" />
              </div>
              <div className="mt-4 text-lg font-semibold">{d.name}</div>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{d.cardTeaser}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-brand-deep">
                Se datatype <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-12">
        <div className="rounded-3xl bg-primary/10 border border-primary/30 p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-brand-deep">
              Vil I se, hvilke datakilder der giver mening først?
            </div>
            <p className="mt-3 text-foreground/80 max-w-xl">
              Vi gennemgår jeres eksisterende kilder og foreslår en pragmatisk vej i et pilotforløb.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link to="/book-demo" className="inline-flex items-center justify-center rounded-full h-11 px-5 bg-primary text-primary-foreground font-medium hover:bg-primary/90">
              Book demo <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
            <Link to="/problemer" className="inline-flex items-center justify-center rounded-full h-11 px-5 border border-border font-medium hover:bg-secondary">
              Se problemer
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
