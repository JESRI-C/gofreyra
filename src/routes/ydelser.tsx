import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Plane, TreePine, FolderOpen, Repeat, Building2, Compass } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA } from "@/components/site/sections";

const SERVICES = [
  {
    icon: <Plane className="w-5 h-5" />,
    name: "Førregistrering af natur- og arealprojekter",
    desc: "Vi flyver området med drone, henter de relevante offentlige data og samler det hele i en versioneret baseline. I får et dokumenteret udgangspunkt, før der bliver truffet beslutninger.",
    gets: ["Droneflyvning med GPS-stemplet billedmateriale", "Offentlige data: kort, jordart, vejr og satellit", "Faglig verifikation af materialet", "Versioneret baselinerapport som PDF og evidenspakke"],
    price: "Pris efter aftale",
  },
  {
    icon: <TreePine className="w-5 h-5" />,
    name: "Beplantnings- og etableringsanalyse",
    desc: "En regelbaseret vurdering af, hvor beplantning og etablering er egnet, betinget egnet eller uegnet. Vurderingen bygger på jord, vand, beskyttede områder og eksisterende natur.",
    gets: ["Egnethedskort i hektar: egnet, betinget, uegnet", "Begrundelse pr. areal med kildehenvisning", "Effekter vist som intervaller fra forskningslitteraturen, ikke som løfter", "Grundlag til dialog med lodsejere og trepart"],
    price: "Pris efter aftale",
  },
  {
    icon: <FolderOpen className="w-5 h-5" />,
    name: "Evidenspakker til trepart og fonde",
    desc: "Et samlet, efterprøveligt grundlag til ansøgninger, fondsmidler og den lokale trepart. Hver påstand kan spores tilbage til sin kilde.",
    gets: ["Samlet evidenspakke med kildehenvisninger", "Versionering, så ændringer kan følges", "Revisionsspor over data, beregninger og vurderinger", "Klar til deling med fonde og samarbejdspartnere"],
    price: "Pris efter aftale",
  },
  {
    icon: <Repeat className="w-5 h-5" />,
    name: "Opfølgning og genbesøg",
    desc: "Vi etablerer gentagelsespunkter ved førregistreringen, så I kan dokumentere udviklingen over tid med før/efter-materiale fra de samme positioner.",
    gets: ["Faste gentagelsespunkter med GPS", "Før/efter-fotos fra samme positioner", "Opdateret evidenspakke efter hvert genbesøg", "Grundlag til status over for fonde og trepart"],
    price: "Pris efter aftale",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    name: "Kommunalt evidens-setup",
    desc: "Et fast setup i Freyra Evidence Workspace, så kommunen altid kan finde, genbruge og videreudvikle sin dokumentation på tværs af projekter.",
    gets: ["Login for kommunen til egne projekter", "Faste workflows for registrering og opfølgning", "Samlet overblik over områder og evidenspakker", "Overdragelse og introduktion til jeres team"],
    price: "Pris efter aftale",
  },
  {
    icon: <Compass className="w-5 h-5" />,
    name: "Rådgivning om data og metoder",
    desc: "Hjælp til at vælge datakilder, metoder og dokumentationsniveau, før I går i gang. Vi siger også fra, hvis en opgave ikke kræver drone eller nye data.",
    gets: ["Gennemgang af jeres eksisterende datagrundlag", "Anbefaling af metode og dokumentationsniveau", "Afværgning af, hvad der kan og ikke kan dokumenteres", "Konkret plan for næste skridt"],
    price: "Pris efter aftale",
  },
];

const FAQ = [
  { q: "Hvad koster et pilotprojekt?", a: "Et pilotprojekt starter fra 125.000 kr. Det dækker en førregistrering af et afgrænset område med droneflyvning, offentlige data, verifikation og en versioneret baseline." },
  { q: "Hvad koster de øvrige ydelser?", a: "Pris efter aftale. Prisen afhænger af områdets størrelse, datagrundlag og omfang. I får altid en fast pris, før vi går i gang." },
  { q: "Skal vi bruge alle seks ydelser?", a: "Nej. De fleste starter med en førregistrering eller et pilotprojekt og bygger videre derfra." },
  { q: "Kan I arbejde sammen med vores rådgiver?", a: "Ja. Vi leverer datagrundlag og evidenspakker, som jeres rådgiver kan bygge videre på. Vi erstatter ikke rådgivningen, vi gør den lettere at dokumentere." },
];

export const Route = createFileRoute("/ydelser")({
  head: () =>
    buildHead({
      title: "Ydelser | Freyra Evidence Workspace",
      description: "Førregistrering, beplantningsanalyse, evidenspakker og opfølgning for natur- og arealprojekter. Pilotprojekt fra 125.000 kr.",
      path: "/ydelser",
      jsonLd: [
        breadcrumbJsonLd([{ name: "Forside", path: "/" }, { name: "Ydelser", path: "/ydelser" }]),
        faqJsonLd(FAQ),
      ],
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageLayout>
      <section className="gradient-hero">
        <div className="container-page py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Ydelser</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Seks ydelser. <span className="text-brand-deep">Én evidenskæde.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Fra første droneflyvning til løbende opfølgning. Alle ydelser ender i det samme: dokumentation, der kan efterprøves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-full h-12 px-6 text-base"><Link to="/kontakt">Book en snak <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <div key={s.name} className="card-soft p-6 md:p-8 bg-card flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-brand-deep grid place-items-center">{s.icon}</div>
              <h2 className="mt-4 text-xl font-bold">{s.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">Det får I</div>
                <ul className="space-y-2">
                  {s.gets.map((g) => (
                    <li key={g} className="flex gap-2 items-start text-sm">
                      <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-brand-deep">{s.price}</span>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/kontakt">Hør mere <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-beige">
        <div className="container-page py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <span className="eyebrow">Pilotprojekt</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Start med et pilotprojekt fra 125.000 kr.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Et pilotprojekt er en førregistrering af et afgrænset område. I får hele evidenskæden fra dronefoto til versioneret baseline, og I kan vurdere værdien, før I beslutter jer for mere.
            </p>
            <div className="mt-6">
              <Button asChild className="rounded-full h-12 px-6"><Link to="/kontakt">Tal med os om et pilotprojekt <ArrowRight className="ml-1.5 w-4 h-4" /></Link></Button>
            </div>
          </div>
          <div className="card-soft p-6 bg-card">
            <div className="text-sm font-semibold text-brand-deep">Et pilotprojekt indeholder</div>
            <ul className="mt-4 space-y-2.5">
              {[
                "Droneflyvning af et afgrænset område",
                "Hentning af relevante offentlige data",
                "Faglig verifikation af materialet",
                "Versioneret baselinerapport og evidenspakke",
                "Gennemgang af resultatet med jeres team",
              ].map((b) => (
                <li key={b} className="flex gap-2 items-start text-sm">
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" /><span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">Prisen er ekskl. moms og afhænger af områdets størrelse og tilgængelighed.</p>
          </div>
        </div>
      </section>

      <FaqSection items={FAQ} />

      <GreenCTA
        title="Fortæl os om jeres projekt."
        subtitle="Så vender vi tilbage med en konkret vurdering af, hvad der kan dokumenteres, og hvad det kræver."
        primary={{ to: "/kontakt", label: "Book en snak" }}
      />

      <CTASection />
    </PageLayout>
  );
}
