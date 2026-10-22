import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { CTASection } from "@/components/site/CTASection";
import { buildHead, faqJsonLd, breadcrumbJsonLd } from "@/components/site/SEO";
import { FaqSection, GreenCTA } from "@/components/site/sections";

const GRUPPER: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Metode",
    items: [
      { q: "Hvordan foregår en førregistrering?", a: "Vi flyver området med drone, registrerer delstrækninger og gentagelsespunkter, henter offentlige data og samler det hele i en versioneret baseline." },
      { q: "Hvad betyder verifikation hos Freyra?", a: "AI assisterer sammenligningen af offentlige data og dronefotos. Derefter laver en fagperson vurderingen, og den logges." },
      { q: "Er Freyra en erstatning for MARS, GATE eller Miljøportalen?", a: "Nej. Freyra er et lag oven på de systemer, I allerede bruger. Vi samler og verificerer data, så de kan bruges videre i jeres eksisterende arbejdsgange." },
      { q: "Hvor hurtigt kan vi komme i gang?", a: "Det afhænger af området og vejret til droneflyvning. Vi aftaler en plan i første samtale." },
    ],
  },
  {
    title: "Data og kilder",
    items: [
      { q: "Hvilke datakilder bruger I?", a: "Dataforsyningen (ortofoto, matrikel, højdemodel), Danmarks Arealinformation (§3-natur og beskyttede områder), GEUS (jordart og lavbund), DMI (vejr) og Copernicus Sentinel-2 (satellit)." },
      { q: "Kan vi se, hvor data kommer fra?", a: "Ja. Hvert datalag har kildeangivelse og hentedato, og hver påstand i en leverance kan spores tilbage til sin kilde." },
      { q: "Hvem ejer de data, I samler om vores område?", a: "Det aftaler vi i kontrakten. Udgangspunktet er, at materialet tilhører jer som kunde." },
    ],
  },
  {
    title: "Leverancer",
    items: [
      { q: "Hvad er en evidenspakke?", a: "En samlet pakke med dronefotos, kortdata og vurderinger, hvor hver påstand har kildehenvisning. Pakken er versioneret og forsynet med et SHA-256 fingeraftryk." },
      { q: "Hvad er en baseline?", a: "En versioneret rapport, der dokumenterer området, som det så ud, før projektet gik i gang. Den leveres som PDF og evidenspakke." },
      { q: "Kan I beregne, hvor meget et tiltag flytter?", a: "Vi viser effekter som intervaller fra forskningslitteraturen, ikke som præcise tal. Beplantningsanalyser er skitser til faglig validering hos jeres rådgiver." },
    ],
  },
  {
    title: "Samarbejde og pris",
    items: [
      { q: "Hvad koster et pilotforløb?", a: "Et pilotforløb starter fra 125.000 kr. Det dækker et afgrænset forløb på jeres eget område med hele evidenskæden fra dronefoto til versioneret baseline." },
      { q: "Hvad koster de øvrige ydelser?", a: "Pris efter aftale. Prisen afhænger af områdets størrelse, datagrundlag og omfang. I får altid en fast pris, før vi går i gang." },
      { q: "Kan I arbejde sammen med vores rådgiver?", a: "Ja. Vi leverer datagrundlag og evidenspakker, som jeres rådgiver kan bygge videre på. Egnethedsanalyser leveres som skitser til faglig validering hos jeres rådgiver." },
      { q: "Hvem bruger Freyra?", a: "Kommuner, lokale treparter, rådgivere, naturfonde og større lodsejere, der arbejder med natur- og arealprojekter i Grøn Trepart." },
    ],
  },
  {
    title: "Teknik og adgang",
    items: [
      { q: "Hvad er Freyra Evidence Workspace?", a: "Det er arbejdspladsen, hvor jeres team kan se fotos, kortdata, rapporter og versioner for jeres projekter samlet ét sted." },
      { q: "Skal vi installere noget?", a: "Nej. Evidence Workspace kører i browseren. Jeres team får adgang med login." },
      { q: "Hvordan dokumenteres det, at en pakke er uændret?", a: "Hver version af en evidenspakke får et SHA-256 fingeraftryk. Hvis indholdet ændres, ændres fingeraftrykket, og det kan kontrolleres." },
    ],
  },
];

const ORDLISTE = [
  { t: "Grøn Trepart", d: "Samarbejdet mellem kommuner, landbrug og naturorganisationer om natur- og klimaprojekter på landarealer." },
  { t: "Lokal trepart", d: "Det lokale samarbejde om et konkret projekt, typisk mellem kommunen, lodsejere og lokale organisationer." },
  { t: "Baseline", d: "Det dokumenterede udgangspunkt for et område, før et projekt går i gang. Uden baseline kan forandring ikke vises." },
  { t: "Førregistrering", d: "Registrering af et områdes tilstand før en indsats, typisk med dronefotos, kortdata og faglig vurdering." },
  { t: "Gentagelsespunkt", d: "Et fast punkt med kendt position, hvorfra der tages fotos ved hver flyvning, så før og efter kan sammenlignes." },
  { t: "Evidenspakke", d: "En samlet, versioneret pakke af fotos, data og vurderinger med kildehenvisning på hver påstand." },
  { t: "SHA-256", d: "En metode til at beregne et entydigt fingeraftryk af en fil. Ændres filen, ændres fingeraftrykket, og manipulation kan afsløres." },
  { t: "Ortofoto", d: "Et luftfoto, der er retvinklet og målsat, så det kan bruges som kort. I Danmark hentes det fra Dataforsyningen." },
  { t: "§3-natur", d: "Naturtyper, der er beskyttet efter naturbeskyttelseslovens §3, fx søer, vandløb, heder og overdrev." },
  { t: "Lavbund", d: "Lavtliggende jorde med højt indhold af organisk materiale. Data om lavbund hentes fra GEUS." },
];

const ALL_FAQ = GRUPPER.flatMap((g) => g.items);

export const Route = createFileRoute("/faq")({
  head: () =>
    buildHead({
      title: "Ressourcer og FAQ | Freyra Evidence Workspace",
      description: "Svar på ofte stillede spørgsmål om metode, data, leverancer, pris og teknik, plus en ordliste over centrale begreber.",
      path: "/faq",
      jsonLd: [
        breadcrumbJsonLd([{ name: "Forside", path: "/" }, { name: "FAQ", path: "/faq" }]),
        faqJsonLd(ALL_FAQ),
      ],
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <PageLayout>
      <section className="container-page py-16 md:py-24 max-w-3xl">
        <span className="eyebrow">Ressourcer</span>
        <h1 className="mt-5 text-4xl md:text-6xl leading-[1.08]">Spørgsmål og svar.</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Samlet om metode, data, leverancer, samarbejde og teknik. Finder du ikke svaret, er du velkommen til at kontakte os.
        </p>
      </section>

      {GRUPPER.map((g) => (
        <FaqSection key={g.title} items={g.items} eyebrow={g.title} title={g.title} />
      ))}

      <section className="surface-beige">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow">Ordliste</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Centrale begreber, kort forklaret.</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {ORDLISTE.map((o) => (
              <div key={o.t} className="card-soft p-6 bg-card">
                <div className="font-semibold">{o.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreenCTA
        title="Har du et spørgsmål, der ikke står her?"
        subtitle="Skriv til os, så vender vi tilbage med et konkret svar."
        primary={{ to: "/kontakt", label: "Kontakt os" }}
      />

      <CTASection />
    </PageLayout>
  );
}
