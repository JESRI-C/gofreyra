import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/loesninger/naturprojekter")({
  head: () => buildHead({
    title: "Løsninger til lodsejere og naturprojekter | GoFreyra",
    description: "Mål biodiversitet, jord og vand med felt-, drone- og satellitdata. Få verificerbar dokumentation — klar til myndigheder, partnere og impactmarkeder.",
    path: "/loesninger/naturprojekter",
  }),
  component: () => (
    <SolutionPage
      eyebrow="Løsning · Lodsejere & naturprojekter"
      title="Følg naturimpact dér, hvor den faktisk sker."
      subtitle="Biodiversitet, levesteder, jord og vand — målt med felt, drone og satellit, dokumenteret over tid og klar til markeder."
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
    />
  ),
});
