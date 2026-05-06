import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";
import { buildHead } from "@/components/site/SEO";

export const Route = createFileRoute("/loesninger/naturprojekter")({
  head: () => buildHead({
    title: "Løsninger til naturprojekter — Biodiversitetsovervågning | GoFreyra",
    description: "Følg naturimpact dér, hvor den faktisk sker. Biodiversitet, levesteder, jord og vand — målt, dokumenteret og verificerbar.",
    path: "/loesninger/naturprojekter",
  }),
  component: () => (
    <SolutionPage
      eyebrow="Løsning · Naturprojekter"
      title="Følg naturimpact dér, hvor den faktisk sker."
      subtitle="Biodiversitet, levesteder, jord og vand — fulgt over tid, dokumenteret med data og forberedt til verificerbar impactrapportering."
      problems={[
        "Naturdata indsamles ofte usystematisk",
        "Det er svært at vise reel udvikling over tid",
        "Lodsejere, projektejere og rådgivere arbejder i adskilte systemer",
        "Impact-claims mangler troværdighed",
      ]}
      outcomes={[
        { title: "Biodiversitetsovervågning", desc: "Strukturerede naturdata fra felt, satellit, drone og sensorer." },
        { title: "Levesteder og økosystemer", desc: "Følg udvikling i jord, vand, plante- og dyreliv over tid." },
        { title: "Verificerbar miljøudvikling", desc: "Dokumentation som naturprojekter kan bygges op omkring." },
        { title: "Klar til impactmarkeder", desc: "Forbered projekter til fremtidige biodiversitets- og klimaordninger." },
      ]}
      modules={["SmartConnect+", "Impact Exchange", "ESG Ledger", "Dashboard"]}
    />
  ),
});
