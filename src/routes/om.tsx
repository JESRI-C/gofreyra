import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, organizationJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { GreenCTA, MicroStrip, CardGrid } from "@/components/site/sections";

export const Route = createFileRoute("/om")({
  head: () =>
    buildHead({
      title: "Om Freyra | Gofreyra ApS",
      description: "Freyra er bygget af Gofreyra ApS i Tørring. Mød holdet bag Freyra Evidence Workspace og læs, hvordan vi arbejder.",
      path: "/om",
      jsonLd: [
        organizationJsonLd(),
        breadcrumbJsonLd([{ name: "Forside", path: "/" }, { name: "Om", path: "/om" }]),
      ],
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 max-w-3xl">
        <span className="eyebrow">Om Freyra</span>
        <h1 className="mt-4 text-4xl md:text-5xl leading-[1.1]">Vi bygger dokumentation, der kan efterprøves.</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Freyra Evidence Workspace er udviklet af Gofreyra ApS. Vi hjælper kommuner, treparter og projektejere med at dokumentere natur- og arealprojekter, så hver konklusion kan spores tilbage til sin kilde.
        </p>
      </section>

      <MicroStrip items={["Dansk virksomhed", "Bygget til Grøn Trepart", "Offentlige datakilder", "Faglig verifikation"]} />

      <section className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5 text-foreground/85">
          <h2 className="text-2xl md:text-3xl">Hvorfor Freyra findes</h2>
          <p>
            Natur- og arealprojekter dokumenteres ofte med fotos i mapper, regneark og rapporter, der er svære at efterprøve. Når en fond, en trepart eller en borger spørger til grundlaget, skal svaret kunne findes.
          </p>
          <p>
            Vi bygger Freyra som en evidenskæde: dronefotos, offentlige data, beregninger og faglige vurderinger hænger sammen og er versionerede. Platformen er et lag oven på de systemer, kommunen allerede bruger, som MARS, GATE og Miljøportalen.
          </p>
          <p>
            Vi siger ikke mere, end data understøtter. Effekter vises som intervaller fra forskningslitteraturen, og enhver konklusion har en faglig vurdering bag sig.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl">Holdet</h2>
          <div className="mt-5 space-y-4">
            {[
              { t: "Jesper Brøchner Riel", r: "Founder", d: "Står for produkt, metode og den faglige kvalitet i evidenskæden." },
              { t: "Dan Sommer", r: "Co-Founder, Director of Business Development", d: "Står for samarbejder med kommuner, treparter og partnere." },
            ].map((c) => (
              <div key={c.t} className="card-soft p-5 bg-card">
                <div className="font-semibold">{c.t}</div>
                <div className="text-xs font-medium text-brand-deep mt-0.5">{c.r}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="card-soft p-5 bg-card mt-4">
            <div className="font-semibold">Gofreyra ApS</div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              CVR 45384489 · Bøgevej 4, 7160 Tørring · Ejet af Freyra Group ApS
            </p>
          </div>
        </div>
      </section>

      <CardGrid
        beige
        eyebrow="Vores principper"
        title="Sådan arbejder vi."
        cols={4}
        cards={[
          { t: "Alt kan spores til kilde", d: "Hver påstand skal kunne spores tilbage til kilde, metode og vurdering." },
          { t: "Ingen tal uden belæg", d: "Vi viser effekter som litteraturintervaller, ikke som løfter." },
          { t: "Fagperson godkender", d: "AI assisterer gennemgangen. En fagperson står bag hver konklusion." },
          { t: "Versioneret og reproducerbart", d: "Hver ændring gemmes. En evidenspakke kan genskabes og efterprøves." },
        ]}
      />

      <GreenCTA
        title="Vil I høre mere om, hvordan vi arbejder?"
        subtitle="Book en uforpligtende snak om jeres projekt og vores tilgang."
        primary={{ to: "/kontakt", label: "Book en snak" }}
      />

      <CTASection />
    </PageLayout>
  );
}
