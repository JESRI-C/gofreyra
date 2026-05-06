import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Database, Brain, FileBarChart, Plug, Star } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd } from "@/components/site/SEO";
import { FaqSection, SectionHeader, GreenCTA } from "@/components/site/sections";

const FAQ = [
  { q: "Afregnes GoFreyra efter forbrug?", a: "Platformspakkerne inkluderer et aftalt niveau af forbrug. Ved større datamængder, hyppigere AI-analyser, flere rapporter eller ekstra integrationer kan forbruget tilpasses og afregnes efter aftale." },
  { q: "Hvad tæller som ekstra forbrug?", a: "Ekstra forbrug kan være flere projekter, flere brugere, flere datakilder, hyppigere analyser, flere rapporteksporter, API-kald eller særlige integrationer." },
  { q: "Kan vi starte uden sensorer?", a: "Ja. Et pilotforløb kan starte med eksisterende data, manuelle registreringer, offentlige datakilder eller simple uploads. Sensorer kan tilføjes senere." },
  { q: "Hvor lang tid tager et pilotforløb?", a: "Et afgrænset pilotforløb kan typisk sættes op på 2-4 uger, afhængigt af datakilder, scope og ønsket dashboard." },
  { q: "Hvorfor er der ikke én fast pris for alle?", a: "Behovet varierer meget mellem én lokation, et kommunalt naturprojekt, en industrivirksomhed og en enterprise-løsning med mange datakilder. Derfor kombinerer GoFreyra faste pakker med fleksibel forbrugsbaseret tilpasning." },
  { q: "Hvad er inkluderet i platformspakken?", a: "Platformspakken inkluderer standard dashboard, projektoversigt, datakildeoverblik, ESG-dokumentationsstatus, standard analysekapacitet, rapporteksport og support." },
  { q: "Hvad koster sensorer?", a: "Sensorer, installation og eventuelle eksterne datakilder prissættes særskilt, fordi behovet afhænger af område, datatyper, strøm, netværk og driftskrav." },
  { q: "Kan vi opgradere senere?", a: "Ja. GoFreyra kan starte som pilot, fortsætte som platform og udvides til Growth eller Enterprise, når der kommer flere projekter, datakilder eller brugere." },
];

const TIERS = [
  {
    name: "Pilotforløb",
    price: "Fra 25.000 kr.",
    unit: "engangspris",
    label: "Til første afklaring og test",
    desc: "Til organisationer, der vil teste GoFreyra på ét område, én lokation eller én dokumentationscase.",
    features: [
      "Afklaringsworkshop",
      "Kortlægning af datakilder",
      "Første dashboardopsætning",
      "Simpelt dokumentationsflow",
      "Pilotrapport med anbefalinger",
      "Plan for næste fase",
    ],
    fit: [
      "Kommuner med et naturprojekt",
      "Virksomheder med ESG-dokumentationsbehov",
      "Naturprojekter med behov for bedre datagrundlag",
      "Organisationer der vil teste før skalering",
    ],
    cta: { to: "/book-demo", label: "Tal med os om pilot" },
  },
  {
    name: "Platform",
    price: "Fra 7.500 kr.",
    unit: "/md.",
    label: "Til løbende brug",
    desc: "Til teams, der vil samle miljødata, ESG-dokumentation og impact-overblik i én løbende platform.",
    features: [
      "1-3 projekter",
      "Standard dashboard",
      "Standard datakilder",
      "ESG-dokumentationsstatus",
      "Audit trail-logik",
      "Standard AI-analysekapacitet",
      "Rapporteksport",
      "Løbende support",
    ],
    fit: [
      "ESG-teams",
      "Mindre organisationer",
      "Et konkret projektområde",
      "Første løbende GoFreyra-setup",
    ],
    cta: { to: "/book-demo", label: "Book demo" },
  },
  {
    name: "Growth",
    price: "Fra 15.000 kr.",
    unit: "/md.",
    label: "Anbefalet til skalering",
    desc: "Til organisationer med flere projekter, flere datakilder og behov for mere analysekapacitet.",
    features: [
      "Flere projekter og lokationer",
      "Flere datakilder",
      "Udvidet AI-analysekapacitet",
      "Flere brugere",
      "Avanceret rapportstatus",
      "Udvidet support",
      "Roadmap for skalering",
      "Prioriteret opsætning af nye workflows",
    ],
    fit: [
      "Kommuner med flere projekter",
      "Industri og forsyning",
      "Organisationer med flere teams",
      "Aktører med voksende ESG-dokumentationsbehov",
    ],
    cta: { to: "/book-demo", label: "Book demo" },
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Efter behov",
    unit: "",
    label: "Til komplekse organisationer",
    desc: "Til kommuner, industri, forsyning og større organisationer med komplekse datakilder, integrationer og rapporteringsbehov.",
    features: [
      "Tilpassede integrationer",
      "API og datamodel",
      "Roller og rettigheder",
      "Sensor- og datakildeopsætning",
      "Tilpassede dashboards",
      "Governance og compliance-support",
      "Strategisk sparring",
      "Avanceret rapporteringsflow",
    ],
    fit: [
      "Større kommuner",
      "Forsyningsselskaber",
      "Industrivirksomheder",
      "Organisationer med mange lokationer",
      "Strategiske partnerskaber",
    ],
    cta: { to: "/kontakt", label: "Kontakt os" },
  },
];

export const Route = createFileRoute("/priser")({
  head: () =>
    buildHead({
      title: "GoFreyra priser - ESG-data, miljødata og dokumentation",
      description: "Se GoFreyra-priser for pilotforløb, platform og enterprise. Start med miljødata, ESG-dokumentation og AI-analyse i én SaaS-platform.",
      path: "/priser",
      jsonLd: [
        faqJsonLd(FAQ),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "GoFreyra",
          serviceType: "SaaS-platform til miljødata, ESG-dokumentation og impact",
          provider: { "@type": "Organization", name: "GoFreyra" },
          areaServed: "DK",
          offers: TIERS.map((t) => ({
            "@type": "Offer",
            name: t.name,
            description: t.desc,
            priceCurrency: "DKK",
            price: t.price,
          })),
        },
      ],
    }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-4xl">
          <span className="eyebrow">Priser</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Priser der passer til <span className="text-brand-deep">jeres datamodenhed</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Start med et afgrænset pilotforløb, og skalér GoFreyra i takt med flere projekter, datakilder og dokumentationsbehov.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-page py-12">
        <div className="card-soft p-6 md:p-8 bg-card max-w-4xl">
          <p className="text-foreground/80 text-base md:text-lg">
            GoFreyra kan begynde småt og udvides gradvist. I behøver ikke have alle sensorer, integrationer og rapporteringsflows klar fra dag ét. Et pilotforløb hjælper med at afklare datakilder, behov og den rigtige platformsløsning.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="container-page pb-8">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl bg-card border p-6 flex flex-col ${
                t.featured ? "border-primary shadow-elegant ring-1 ring-primary/30" : "border-border shadow-sm"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Star className="w-3 h-3" /> Anbefalet
                </div>
              )}
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.label}</div>
              <div className="mt-2 text-2xl font-bold text-brand-deep">{t.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <div className="text-3xl font-bold text-foreground">{t.price}</div>
                {t.unit && <div className="text-sm text-muted-foreground">{t.unit}</div>}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>

              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">Inkluderer</div>
                <ul className="space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2 items-start text-sm">
                      <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">Velegnet til</div>
                <ul className="space-y-1.5">
                  {t.fit.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground">— {f}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <Button
                  asChild
                  className={`w-full rounded-full h-11 ${t.featured ? "" : ""}`}
                  variant={t.featured ? "default" : "outline"}
                >
                  <Link to={t.cta.to}>
                    {t.cta.label} <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-3xl">
          Alle priser er ekskl. moms. Sensorer, installation, eksterne datakilder, særlige integrationer og ekstra forbrug prissættes særskilt. Endelig pris afhænger af antal projekter, datakilder, brugere, analysebehov og supportniveau.
        </p>
      </section>

      {/* FORBRUG */}
      <section className="surface-beige">
        <div className="container-page py-20">
          <SectionHeader
            eyebrow="Forbrug og skalering"
            title="Hvordan fungerer forbrug i GoFreyra?"
            body="Alle platformspakker inkluderer et aftalt niveau af datakilder, AI-analyser, rapportgenereringer og brugere. Ved større datamængder, hyppigere analyser eller særlige integrationer tilpasses prisen efter forbrug og behov."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Database className="w-5 h-5" />, t: "Datakilder", d: "Antal sensorer, feltdata, satellitdata, driftsdata og manuelle input kan påvirke behovet for opsætning og databehandling." },
              { icon: <Brain className="w-5 h-5" />, t: "AI-analyser", d: "Hyppigere analyser, anbefalinger og afvigelsesdetektion kan kræve mere analysekapacitet." },
              { icon: <FileBarChart className="w-5 h-5" />, t: "Rapportering", d: "Flere rapporter, eksportformater og dokumentationsflows kan tilpasses efter kundens behov." },
              { icon: <Plug className="w-5 h-5" />, t: "Integrationer", d: "API'er, eksterne systemer og særlige datamodeller prissættes efter kompleksitet." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-5 bg-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{c.icon}</div>
                <div className="mt-3 font-semibold">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILOT FIRST */}
      <section className="container-page py-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">Start trygt</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Start med pilot, før I låser jer fast.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Et pilotforløb bruges til at forstå jeres datakilder, dokumentationsbehov og den rigtige prisstruktur. Det giver et mere realistisk grundlag end en standardpris, der ikke passer til virkeligheden.
            </p>
            <div className="mt-6">
              <Button asChild className="rounded-full h-12 px-6">
                <Link to="/book-demo">Book en afklaringssamtale <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
          <div className="card-soft p-6 bg-card">
            <div className="text-sm font-semibold text-brand-deep">Pilotforløb · 2-4 uger</div>
            <ul className="mt-4 space-y-2.5">
              {[
                "Afklar datakilder og scope",
                "Første dashboard-opsætning",
                "Test af dokumentationsflow",
                "Anbefaling til løbende setup",
                "Plan for næste fase",
              ].map((b) => (
                <li key={b} className="flex gap-2 items-start text-sm">
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" /><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <GreenCTA
        title="Find det rigtige startniveau for jeres organisation."
        subtitle="På en kort demo gennemgår vi jeres datakilder, dokumentationsbehov og muligheder for et første pilotforløb."
        primary={{ to: "/book-demo", label: "Book demo" }}
        secondary={{ to: "/book-demo", label: "Tal med os om pilot" }}
      />

      <CTASection
        title="Se GoFreyra med jeres egne data."
        subtitle="30 minutter med en specialist. Vi gennemgår jeres datakilder og hvordan platformen passer ind."
      />
    </PageLayout>
  );
}
