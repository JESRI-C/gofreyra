import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { buildHead } from "@/components/site/SEO";
import naturHero from "@/assets/freyra/nature-river.jpg";

const FAQ = [
  { q: "Hvilke data bruger I til biodiversitet?", a: "En kombination af feltobservationer, satellitdata, droneflyvninger, sensorer og åbne registre som GBIF og Natura 2000." },
  { q: "Hvordan dokumenterer I udvikling over tid?", a: "Hvert datapunkt får tidsstempel og kilde, så I kan vise baseline, ændring og effekt over år." },
  { q: "Er vi klar til biodiversitetsmarkeder?", a: "Modulet Impact Exchange strukturerer projekter, så de kan gøres klar til kommende markeder, efterhånden som standarder modnes." },
  { q: "Kan rådgivere arbejde i samme platform som lodsejer?", a: "Ja. Adgangsstyring tillader, at lodsejere, projektejere og rådgivere deler datagrundlag uden at miste kontrol." },
];

export const Route = createFileRoute("/loesninger/naturprojekter")({
  head: () => buildHead({
    title: "Løsninger til lodsejere og naturprojekter | GoFreyra",
    description: "Mål biodiversitet, jord og vand med felt-, drone- og satellitdata. Få verificerbar dokumentation — klar til myndigheder, partnere og impactmarkeder.",
    path: "/loesninger/naturprojekter",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: () => (
    <SolutionPage
      eyebrow="Løsning · Lodsejere & naturprojekter"
      title="Følg naturimpact dér, hvor den faktisk sker."
      subtitle="Biodiversitet, levesteder, jord og vand — målt med felt, drone og satellit, dokumenteret over tid og klar til markeder."
      heroImage={naturHero}
      heroImageAlt="Luftfoto af snoet å gennem naturområde med eng og våde levesteder"
      problems={[
        "Naturdata indsamles ofte usystematisk",
        "Det er svært at vise reel udvikling over tid",
        "Lodsejere, projektejere og rådgivere arbejder i adskilte systemer",
        "Impact-claims mangler troværdighed over for købere og myndigheder",
      ]}
      outcomes={[
        { title: "Biodiversitetsovervågning", desc: "Strukturerede naturdata fra felt, satellit, drone og sensorer." },
        { title: "Levesteder og økosystemer", desc: "Følg udvikling i jord, vand, plante- og dyreliv over tid." },
        { title: "Verificerbar dokumentation", desc: "Bevisgrundlag projektet kan bygges op omkring." },
        { title: "Klar til impactmarkeder", desc: "Forbered projekter til biodiversitets- og kulstofordninger." },
      ]}
      modules={["SmartConnect+", "Impact Exchange", "ESG Ledger", "GoFreyra Dashboard"]}
      dataSources={["Feltobservationer", "Drone (RGB / multispektral)", "Satellit (Sentinel-2, Satlas)", "GBIF / DanBIF", "Jord- og vandsensorer", "Vejrdata", "Naturdatabasen", "Manuelle artsregistreringer"]}
      pilotIntro="Pilotforløb starter typisk med ét areal eller ét naturprojekt."
      pilotSteps={[
        { n: "01", t: "Baseline", d: "Etablér dokumenteret startpunkt." },
        { n: "02", t: "Datakilder", d: "Felt, drone og satellit kobles på." },
        { n: "03", t: "Indikatorer", d: "Vælg natur- og klimaindikatorer." },
        { n: "04", t: "Impact-flow", d: "Klar til partner- og rapporteringsmodeller." },
        { n: "05", t: "Skalér", d: "Udvid til flere arealer og projekter." },
      ]}
      faq={FAQ}
    />
  ),
});
