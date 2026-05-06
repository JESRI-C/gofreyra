import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead } from "@/components/site/SEO";
import { GreenCTA, MicroStrip, SectionHeader, CardGrid } from "@/components/site/sections";

export const Route = createFileRoute("/om")({
  head: () => buildHead({
    title: "Om GoFreyra — Dansk SaaS-platform til miljødata og ESG",
    description: "Freyra er brandet. GoFreyra er platformen. ISEN er natur- og impactlaget. Læs om vores principper og fokus på sporbar bæredygtighed.",
    path: "/om",
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Om GoFreyra</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Vi gør bæredygtighed målbar — ikke fortællbar.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            GoFreyra er den danske SaaS-platform, der samler miljødata, AI-analyse og ESG-dokumentation i ét system, så organisationer kan måle, styre og bevise deres impact.
          </p>
        </div>
      </section>

      <MicroStrip items={["Dansk leverandør", "EU-hosting", "Modulær SaaS", "Bygget til praksis"]} />

      <section className="container-page py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5 text-foreground/85">
          <h2 className="text-2xl md:text-3xl font-bold">Hvorfor platformen er bygget</h2>
          <p>
            Vi mødte for mange organisationer, der havde ambitioner — men hvor ESG- og naturarbejdet boede i regneark, PDF'er og spredte systemer. Når CSRD, naturkrav og købspres rammer samtidig, holder det ikke længere.
          </p>
          <p>
            GoFreyra dækker hele værdikæden: SmartConnect+ samler data fra felten, DecisionsIQ analyserer dem, ESG Ledger dokumenterer dem, og Impact Exchange aktiverer effekten. Det hele samles i GoFreyra Dashboard.
          </p>
          <p>
            Vi tror på, at bæredygtighed kun bliver troværdig, når den kan spores tilbage til kilden. Det er det, vi bygger.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Brand, platform og naturlag</h2>
          <div className="mt-5 space-y-4">
            {[
              { t: "Freyra", d: "Brandet. Det vi står for: dokumenteret, ærlig bæredygtighed." },
              { t: "GoFreyra", d: "Platformen. Hvor data bliver til indsigt, dokumentation og handling." },
              { t: "ISEN", d: "Natur- og impactlaget. Det der gør natur- og klimaindsatser målbare og verificerbare." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-5 bg-card">
                <div className="font-semibold">{c.t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CardGrid
        beige
        eyebrow="Vores principper"
        title="Sådan arbejder vi."
        cols={4}
        cards={[
          { t: "Sporbarhed før storytelling", d: "Hvert datapunkt med kilde, tidsstempel og metode." },
          { t: "Mindre påstand, mere bevis", d: "Vi siger ikke mere, end data understøtter." },
          { t: "Fra data til handling", d: "Værdien ligger i operationelt arbejde — ikke i smukke rapporter alene." },
          { t: "Modulær og praktisk", d: "Start lille, skalér når data og organisation er klar." },
        ]}
      />

      <GreenCTA title="Vil I høre mere om vores tilgang?" subtitle="Book en kort samtale, så fortæller vi gerne mere." secondary={{ to: "/kontakt", label: "Kontakt os" }} />

      <CTASection />
    </PageLayout>
  );
}
