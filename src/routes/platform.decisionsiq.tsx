import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";
import decisionsiqHero from "@/assets/decisionsiq-hero.png";

const FAQ = [
  { q: "Hvad slags AI bruger DecisionsIQ?", a: "En kombination af statistiske metoder, anomalidetektion og maskinlæring. Vi bruger ikke AI som black box — hver anbefaling kan spores tilbage til de underliggende datapunkter." },
  { q: "Træffer DecisionsIQ beslutninger for os?", a: "Nej. DecisionsIQ erstatter ikke faglig vurdering. Det hjælper med at finde mønstre, stille bedre spørgsmål og prioritere næste handling." },
  { q: "Hvor meget data kræver det?", a: "Vi starter med det datagrundlag, I har. Modulet bliver bedre med tid og volumen — men leverer værdi tidligt på basale mønstre og kvalitetstjek." },
  { q: "Hvordan er forklarligheden sikret?", a: "Hver anbefaling viser hvilke datapunkter, kilder og perioder den bygger på. Det gør den brugbar i ESG-arbejde og over for revision." },
];

export const Route = createFileRoute("/platform/decisionsiq")({
  head: () => buildHead({
    title: "DecisionsIQ — Analyser miljødata og få konkrete anbefalinger | GoFreyra",
    description: "DecisionsIQ analyserer data fra SmartConnect+ og giver mønstre, risikoflag og prioriterede handlinger — med forklaring på hver anbefaling.",
    path: "/platform/decisionsiq",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: () => (
    <ProductPage
      eyebrow="Modul 2 · Analysér data"
      title="DecisionsIQ"
      subtitle="Analyserer data og leverer konkrete anbefalinger, risikoflag og prioriterede handlinger."
      intro="DecisionsIQ tager dataen fra SmartConnect+ og finder det, mennesker overser: afvigelser, mønstre og tidlige risici. Hver anbefaling er knyttet til de underliggende datapunkter — ikke et sort AI-orakel."
      visual={
        <img
          src={decisionsiqHero}
          alt="DecisionsIQ-dashboard med CO2e-trend, anomalimarkører, risikooverblik, ESG-score og AI-anbefalinger baseret på miljødata"
          className="w-full h-auto rounded-2xl border border-border shadow-elegant"
          loading="eager"
        />
      }
      features={[
        { title: "Afvigelsesdetektion", desc: "Find unormale mønstre i miljø- og driftsdata, før de bliver til problemer." },
        { title: "Risikoindikatorer", desc: "Forudsig risici på vand, biodiversitet, ressourceforbrug og emissioner." },
        { title: "Konkrete anbefalinger", desc: "Få prioriterede forslag til handling baseret på jeres egne data." },
        { title: "Datakvalitetstjek", desc: "Find huller, fejl og inkonsistens før det lander i en rapport." },
        { title: "Workflow-triggers", desc: "Sæt automatiske handlinger i gang, når noget kræver opmærksomhed." },
        { title: "Forklarlig analyse", desc: "Hver anbefaling kan spores tilbage til datakilden." },
      ]}
      flow={{
        eyebrow: "Beslutningsstøtte",
        title: "Fra signal til handling",
        steps: [
          { n: "01", t: "Datasignal", d: "Måleværdi, drift eller satellit." },
          { n: "02", t: "Afvigelse", d: "Mønstre uden for normalen markeres." },
          { n: "03", t: "Risikomatrix", d: "Vurdering af konsekvens og sandsynlighed." },
          { n: "04", t: "Anbefaling", d: "Prioriteret forslag — med forklaring." },
          { n: "05", t: "Handling", d: "Trigger workflow eller dokumentér beslutning." },
        ],
      }}
      useCases={[
        { t: "Eksempler på afvigelser", d: "Pludselig pH-ændring i vandløb, fald i biodiversitetsindikator i et område, eller stigning i emissioner ved en specifik driftsproces." },
        { t: "Anbefalingspanel", d: "Et sorteret overblik over de næste 5-10 ting, der kræver opmærksomhed på tværs af områder og afdelinger." },
      ]}
      notDoing={[
        "DecisionsIQ erstatter ikke faglig vurdering — den støtter den.",
        "Modulet udsteder ikke certifikater eller verificeringer.",
        "AI-anbefalinger automatiserer ikke beslutninger, der bør tages af mennesker.",
      ]}
      bullets={[
        "Mindre tid på datafortolkning",
        "Bedre prioritering af bæredygtighedsindsatser",
        "Stærkere beslutningsgrundlag for drift og ledelse",
      ]}
      dataSources={["Tidsseriedata fra sensorer", "Driftsdata fra SCADA / ERP", "Satellit- og dronedata", "Feltobservationer", "Vejr- og klimadata", "Emissionsfaktorer (IPCC EFDB)", "Historik fra ESG Ledger"]}
      relatedModules={[
        { name: "SmartConnect+", to: "/platform/smartconnect", d: "Leverer det validerede datagrundlag, DecisionsIQ analyserer." },
        { name: "ESG Ledger", to: "/platform/esg-ledger", d: "Hver anbefaling kan dokumenteres med kilde og metode." },
        { name: "GoFreyra Dashboard", to: "/dashboard", d: "Risikoflag og prioriteret handlingskø vises samlet for drift, ESG og ledelse." },
      ]}
      faq={FAQ}
    />
  ),
});
