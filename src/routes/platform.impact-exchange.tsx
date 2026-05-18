import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { buildHead } from "@/components/site/SEO";
import impactExchangeHero from "@/assets/impact-exchange-hero.png";

const FAQ = [
  { q: "Er Impact Exchange en handelsbørs for naturkreditter?", a: "Nej. Impact Exchange er et projekt- og impactlag, der gør dokumenterede natur- og klimaindsatser klar til fremtidige markedsmodeller. Vi handler ikke kreditter på platformen i dag." },
  { q: "Hvad er live nu?", a: "Projektregister, dokumentation, biodiversitets- og CO₂-indikatorer samt struktur til partner- og rapporteringsdialog er live. Markedstilkobling er på roadmap." },
  { q: "Hvilke standarder følger I?", a: "Vi struktureret data, så det er kompatibelt med relevante natur- og klimastandarder, efterhånden som de modnes — uden at låse jer til én udbyder." },
  { q: "Kan vi bruge modulet alene?", a: "Det giver mest værdi sammen med SmartConnect+ og ESG Ledger, men det kan tilkobles eksisterende projekter med minimum dokumentation." },
];

export const Route = createFileRoute("/platform/impact-exchange")({
  head: () => buildHead({
    title: "Impact Exchange — Synliggør jeres impact | GoFreyra",
    description: "Impact Exchange gør verificeret natur- og klimaeffekt synlig for partnere, kunder og fremtidige biodiversitets- og kulstofmarkeder.",
    path: "/platform/impact-exchange",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  }),
  component: () => (
    <ProductPage
      eyebrow="Modul 4 · Aktivér impact"
      title="Impact Exchange"
      subtitle="Synliggør verificeret natur- og klimaeffekt — klar til rapportering, partnere og fremtidige markeder."
      intro="Impact Exchange tager den dokumenterede effekt fra ESG Ledger og pakker den, så I kan vise den til kunder, partnere og myndigheder — og være klar, når nye biodiversitets- og kulstofmarkeder modnes."
      visual={
        <img
          src={impactExchangeHero}
          alt="Impact Exchange-dashboard med verificerede natur- og klimaprojekter, verdenskort, biodiversitets- og CO2-indikatorer samt verifikationsstatus"
          className="w-full h-auto rounded-2xl border border-border shadow-elegant"
          loading="eager"
        />
      }
      features={[
        { title: "Projektregister", desc: "Registrér natur- og impactprojekter med dokumentation og indikatorer." },
        { title: "Verificerede impactdata", desc: "Brug data fra SmartConnect+ og ESG Ledger som bevisgrundlag." },
        { title: "Biodiversitets- og CO₂-indikatorer", desc: "Følg udviklingen i centrale natur- og klimaindikatorer over tid." },
        { title: "Køber-/partner-pakke", desc: "Strukturér data, så projekter er klar til markedsdialog og partnerskaber." },
        { title: "Marketplace-klar", desc: "Forberedt til kommende natur- og biodiversitetsmarkeder." },
        { title: "Storytelling med tal bag", desc: "Visualisér impact for ledelse, kunder og interessenter." },
      ]}
      flow={{
        eyebrow: "Roadmap",
        title: "Hvad der er live nu — og hvad der kommer",
        steps: [
          { n: "Live", t: "Projektregister", d: "Registrér og strukturér natur- og impactprojekter." },
          { n: "Live", t: "Indikatorer", d: "Biodiversitets- og CO₂-indikatorer over tid." },
          { n: "Live", t: "Dokumentation", d: "Verificerbar dokumentation pr. projekt." },
          { n: "Roadmap", t: "Partnerflow", d: "Struktureret dialog med købere og partnere." },
          { n: "Roadmap", t: "Markedstilkobling", d: "Klar til kommende biodiversitets- og kulstofmarkeder." },
        ],
      }}
      useCases={[
        { t: "Natur- og klimaprojekter", d: "Lodsejere og projektejere bruger modulet til at vise effekt over tid og forberede projekter til fremtidige markeder." },
        { t: "Partner- og rapporteringsmodel", d: "Større aktører bruger modulet til at vise dokumenterede indsatser i ESG-rapporter og partnerskaber." },
      ]}
      notDoing={[
        "Vi handler ikke naturkreditter på platformen i dag.",
        "Vi udsteder ikke certifikater — vi strukturerer data, så projekter er klar til verificering.",
        "Modulet er ikke en garanti for marked — det er en forberedelse.",
      ]}
      bullets={[
        "Naturprojekter bliver mere troværdige",
        "Bedre forberedelse til biodiversitets- og klimamarkeder",
        "Tydeligere kommunikation af reel effekt",
      ]}
      dataSources={["Feltobservationer", "Drone (RGB / multispektral)", "Satellit (Sentinel-2, Satlas)", "Naturdatabasen", "GBIF / DanBIF", "Jord- og vandsensorer", "Verificerede ESG Ledger-poster", "Projektdokumentation"]}
      relatedModules={[
        { name: "SmartConnect+", to: "/platform/smartconnect", d: "Leverer felt-, drone- og satellitdata fra projekter." },
        { name: "ESG Ledger", to: "/platform/esg-ledger", d: "Bevisgrundlaget bag hver impact-indikator." },
        { name: "GoFreyra Dashboard", to: "/dashboard", d: "Projekt- og impactvisninger samlet for ledelse, partnere og lodsejere." },
      ]}
      faq={FAQ}
    />
  ),
});
