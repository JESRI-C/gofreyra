import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import type { ReactNode } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { Band, PageHero } from "@/components/site/blocks";
import { BrandGlyph, BrandMark, MARK_NAMES, type BrandMarkId } from "@/components/brand/marks";
import { BrandRibbon } from "@/components/brand/Ribbon";
import { PALETTE, PAIRINGS, contrast, rate } from "@/lib/brand-contrast";
import oldIcon from "@/assets/freyra-icon.png";

const TITLE = "Brandstudio | Freyra";
const DESCRIPTION = "Intern oversigt over Freyras logofamilie, farver, typografi, bånd og SVG-filer til download. Siden indekseres ikke.";

export const Route = createFileRoute("/brandstudio")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: BrandStudio,
});

const FAMILY: { id: BrandMarkId; file: string; role: string; status: string; idea: string }[] = [
  { id: "group", file: "freyra-group", role: "Ejer og moderselskab", status: "I brug som ejermærke", idea: "Bue med bogmærke-hak. Et F bygget af knudepunkter: det fælles fundament for familien." },
  { id: "gofreyra", file: "gofreyra", role: "Evidence Workspace", status: "I brug på gofreyra.com", idea: "Det kendte kredsløbstræ, tegnet fladt og stærkere: data der vokser op af land og vand." },
  { id: "isen", file: "isen", role: "Energi", status: "Forslag, kun i brandstudiet", idea: "Sekskant og energimast over et vandbånd. Bruges ikke på isenenergy.com uden godkendelse." },
];

const DOWNLOADS = [
  { suffix: "farve", label: "Farve" },
  { suffix: "negativ", label: "Negativ" },
  { suffix: "mono-skovgroen", label: "Mono skovgrøn" },
  { suffix: "mono-elfenben", label: "Mono elfenben" },
  { suffix: "lockup-farve", label: "Logo med navn" },
  { suffix: "lockup-negativ", label: "Logo med navn, negativ" },
];

function DownloadLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} download className="inline-flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1.5 text-xs font-medium hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <Download className="h-3.5 w-3.5" aria-hidden />
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl md:text-5xl">{title}</h2>
      {body && <p className="mt-4 text-lg text-muted-foreground">{body}</p>}
    </div>
  );
}

function BrandStudio() {
  return (
    <PageLayout>
      <PageHero
        tone="forest"
        eyebrow="Brandstudio · intern"
        title="Freyras visuelle familie"
        body="Logoer, farver, typografi og grafiske elementer til Freyra Group og GoFreyra. Siden vises ikke i menuen og indekseres ikke af søgemaskiner."
        glyph="group"
      >
        <p className="mt-6 max-w-xl text-sm text-muted-foreground">Isen-mærket er et forslag. Det vises kun her og ændrer ikke isenenergy.com.</p>
      </PageHero>

      {/* FAMILIEN */}
      <Band tone="paper">
        <div className="container-page py-20 md:py-28">
          <SectionTitle eyebrow="Logofamilie" title="Tre mærker, én geometri." body="Alle mærker bygger på samme grammatik: en flad silhuet, linjer i samme tykkelse med runde ender, knudepunkter som ringe og horisontbånd. Silhuetten skiller dem ad." />
          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            {FAMILY.map((f) => (
              <article key={f.id} className="rule-item">
                <div className="grid grid-cols-3 gap-2">
                  <div className="tone-paper grid aspect-square place-items-center border border-border"><BrandMark id={f.id} size="70%" title={`${MARK_NAMES[f.id]}, farve`} /></div>
                  <div className={`${f.id === "isen" ? "bg-brand-isen" : "tone-forest"} grid aspect-square place-items-center`}><BrandMark id={f.id} variant="reverse" size="70%" title={`${MARK_NAMES[f.id]}, negativ`} /></div>
                  <div className="tone-sage grid aspect-square place-items-center"><BrandMark id={f.id} variant="mono" size="70%" className="text-forest" title={`${MARK_NAMES[f.id]}, mono`} /></div>
                </div>
                <h3 className="mt-6 text-2xl">{MARK_NAMES[f.id]}</h3>
                <div className="mt-1 text-sm font-medium text-eyebrow">{f.role} · {f.status}</div>
                <p className="mt-3 text-muted-foreground">{f.idea}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {DOWNLOADS.map((d) => (
                    <DownloadLink key={d.suffix} href={`/brand/${f.file}-${d.suffix}.svg`}>{d.label}</DownloadLink>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">Logo med navn bruger skriften Fraunces som levende tekst. Konvertér teksten til kurver før tryk.</p>
        </div>
      </Band>

      {/* GENKENDELIGHED */}
      <Band tone="ivory">
        <div className="container-page py-20 md:py-28 grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
          <SectionTitle eyebrow="GoFreyra" title="Samme træ, mere nærvær." body="Det eksisterende cirkulære træ med kredsløbsgrene er bevaret som idé. Bladene og de mange tynde linjer er skåret væk, så mærket står fladt og tydeligt i 16 px og i stor skala." />
          <div className="grid grid-cols-2 gap-6">
            <figure>
              <div className="tone-paper grid aspect-square place-items-center border border-border">
                <img src={oldIcon} alt="Tidligere GoFreyra-ikon med blade og tynde kredsløbslinjer" width={160} height={160} className="h-2/3 w-2/3 object-contain" loading="lazy" />
              </div>
              <figcaption className="mt-2.5 text-xs text-muted-foreground">Tidligere ikon</figcaption>
            </figure>
            <figure>
              <div className="tone-paper grid aspect-square place-items-center border border-border">
                <BrandMark id="gofreyra" size="66%" title="Nyt GoFreyra-mærke" />
              </div>
              <figcaption className="mt-2.5 text-xs text-muted-foreground">Nyt mærke, fladt og i to farver til land og vand</figcaption>
            </figure>
          </div>
          <div className="lg:col-span-2 flex flex-wrap items-end gap-8 border-t border-foreground/20 pt-8">
            {[64, 44, 32, 24, 16].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <BrandMark id="gofreyra" size={s} />
                <span className="text-xs text-muted-foreground">{s} px</span>
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2.5">
                <BrandMark id="gofreyra" size={44} />
                <span className="font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em] text-forest">Freyra</span>
              </span>
              <span className="text-xs text-muted-foreground">Header-logo, 44 px mærke</span>
            </div>
            <p className="basis-full text-sm text-muted-foreground">Mindste størrelse: 16 px på skærm. Frirum omkring mærket: mindst en knudepunktsring (ca. 15 % af mærkets bredde).</p>
          </div>
        </div>
      </Band>

      {/* FARVER */}
      <Band tone="paper">
        <div className="container-page py-20 md:py-28">
          <SectionTitle eyebrow="Farver" title="Skov, elfenben, salvie, himmel og ler." />
          <ul className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {PALETTE.map((c) => (
              <li key={c.key} className="flex gap-4">
                <span aria-hidden className="h-20 w-20 shrink-0 border border-border" style={{ backgroundColor: c.hex }} />
                <div>
                  <div className="font-display text-lg">{c.name}</div>
                  <div className="font-mono text-sm">{c.hex}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.role}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="mt-20 text-2xl">Kontrastpar</h3>
          <p className="mt-2 text-muted-foreground">Beregnet efter WCAG 2. AA kræver 4,5:1 for brødtekst og 3:1 for stor tekst. Ler bruges derfor kun til bånd, dekoration og stor display-tekst.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-foreground/25 text-left">
                  <th scope="col" className="py-3 pr-4 font-semibold">Eksempel</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Brug</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Kontrast</th>
                  <th scope="col" className="py-3 font-semibold">Vurdering</th>
                </tr>
              </thead>
              <tbody>
                {PAIRINGS.map((p) => {
                  const r = contrast(p.fg, p.bg);
                  return (
                    <tr key={p.use} className="border-b border-border">
                      <td className="py-3 pr-4">
                        <span className="inline-flex h-10 w-28 items-center justify-center font-display text-lg" style={{ color: p.fg, backgroundColor: p.bg }}>Aa Freyra</span>
                      </td>
                      <td className="py-3 pr-4">{p.use}<div className="font-mono text-xs text-muted-foreground">{p.fg} på {p.bg}</div></td>
                      <td className="py-3 pr-4 font-mono">{r.toFixed(2).replace(".", ",")}:1</td>
                      <td className="py-3">{rate(r)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Band>

      {/* TYPOGRAFI */}
      <Band tone="forest">
        <div className="container-page py-20 md:py-28 grid gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Typografi · Display</span>
            <p className="mt-6 max-w-none font-display text-6xl md:text-8xl leading-none tracking-[-0.04em] text-sky">Fraunces</p>
            <p className="mt-6 max-w-none font-display text-3xl md:text-4xl leading-tight">Dokumentation, kommunen kan stå på mål for.</p>
            <p className="mt-4 text-sm text-muted-foreground">Overskrifter, tal og citater. Vægt 300 til 600, optisk størrelse automatisk. Varm og redaktionel, men stram.</p>
          </div>
          <div>
            <span className="eyebrow">Typografi · Tekst</span>
            <p className="mt-6 max-w-none text-6xl md:text-7xl font-semibold leading-none tracking-[-0.03em]">Instrument Sans</p>
            <p className="mt-6 text-lg leading-relaxed">Freyra samler dronefotos, offentlige data og faglig verifikation i én evidenskæde. Brødtekst, menuer, knapper og formularer.</p>
            <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
              <dt className="text-muted-foreground">H1</dt><dd>Fraunces 400, 48 til 64 px</dd>
              <dt className="text-muted-foreground">H2</dt><dd>Fraunces 450, 30 til 48 px</dd>
              <dt className="text-muted-foreground">Overlinje</dt><dd>Instrument Sans 600, 12 px, versaler, spærret</dd>
              <dt className="text-muted-foreground">Brødtekst</dt><dd>Instrument Sans 400, 16 til 20 px</dd>
            </dl>
          </div>
        </div>
      </Band>

      {/* BÅND */}
      <Band tone="sky">
        <div className="container-page py-20 md:py-28 grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
          <div>
            <SectionTitle eyebrow="Bånd" title="Et bogmærke, der krydser sektionerne." body="Båndet hænger fra toppen af en sektion og fortsætter ned i den næste. Det har ejermærket i bunden og samme hak som Freyra Group-silhuetten." />
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Kun i højre margen, uden for tekstspalten.",
                "Vises fra 1280 px. På mobil og tablet skjules det.",
                "Aldrig over tekst, knapper, formularer eller billeder med billedtekst.",
                "Højst ét bånd pr. side, normalt i toppen.",
              ].map((r) => (
                <li key={r} className="flex gap-3"><span aria-hidden className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-eyebrow" />{r}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              <DownloadLink href="/brand/baand-ler.svg">Bånd, ler</DownloadLink>
              <DownloadLink href="/brand/baand-skovgroen.svg">Bånd, skovgrøn</DownloadLink>
            </div>
          </div>
          <div aria-hidden className="grid grid-cols-2 gap-4">
            {(["clay", "forest", "sage", "sky"] as const).map((r) => (
              <div key={r} className="relative overflow-hidden">
                <div className={`${r === "forest" ? "tone-sage" : "tone-forest"} relative h-40`}>
                  <div className="absolute right-6 top-0 z-10 h-full w-10 [&_.brand-ribbon]:!block [&_.brand-ribbon]:!right-0 [&_.brand-ribbon]:!w-10">
                    <BrandRibbon tone={r} extend="5rem" />
                  </div>
                </div>
                <div className="tone-paper h-32" />
              </div>
            ))}
          </div>
        </div>
      </Band>

      {/* DEKORATIVE MÆRKER */}
      <Band tone="paper">
        <div className="container-page py-20 md:py-28">
          <SectionTitle eyebrow="Dekorative mærker" title="Store, beskårne konturer." body="Mærkerne kan bruges som tynde konturer i stor skala, beskåret af kanten. De ligger kun i tomme områder, aldrig bag tekst." />
          <div aria-hidden className="mt-12 grid gap-4 md:grid-cols-3">
            {([
              ["forest", "gofreyra", "text-sage/40"],
              ["sage", "group", "text-forest/30"],
              ["ivory", "isen", "text-forest/25"],
            ] as const).map(([tone, id, cls]) => (
              <div key={id} className={`tone-${tone} relative aspect-[4/3] overflow-hidden`}>
                <BrandGlyph id={id} strokeWidth={1} className={`absolute -bottom-1/3 -right-1/4 h-[130%] w-[130%] ${cls}`} />
              </div>
            ))}
          </div>
        </div>
      </Band>

      {/* EKSEMPLER */}
      <Band tone="ivory">
        <div className="container-page py-20 md:py-28">
          <SectionTitle eyebrow="Eksempler" title="Sådan spiller det sammen." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="tone-forest relative overflow-hidden p-8 md:p-10 aspect-[1200/630]">
              <BrandGlyph id="gofreyra" strokeWidth={1} className="absolute -right-16 -bottom-24 h-80 w-80 text-sage/30" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="inline-flex items-center gap-2.5"><BrandMark id="gofreyra" variant="reverse" size={36} /><span className="font-display text-2xl font-semibold">Freyra</span></span>
                <p className="max-w-[16ch] font-display text-3xl md:text-4xl leading-tight text-sky">Fra dronefoto til baseline.</p>
              </div>
              <span className="sr-only">Eksempel på delingsbillede 1200 x 630</span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="tone-paper border border-border p-6 flex flex-col justify-between aspect-[85/55]">
                <span className="inline-flex items-center gap-2"><BrandMark id="group" size={28} /><span className="font-display text-lg font-semibold">Freyra Group</span></span>
                <div className="text-sm text-muted-foreground">Gofreyra ApS · Bøgevej 4, 7160 Tørring</div>
              </div>
              <div className="tone-sage p-6 flex flex-col justify-between aspect-[85/55]">
                <span className="eyebrow">Evidenspakke</span>
                <span className="inline-flex items-center gap-2"><BrandMark id="gofreyra" size={28} /><span className="font-display text-lg font-semibold">GoFreyra</span></span>
              </div>
              <div className="bg-brand-isen relative overflow-hidden p-6 flex flex-col justify-between aspect-[85/55] sm:col-span-2 text-ivory">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-sky">Forslag</span>
                <span className="inline-flex items-center gap-2.5"><BrandMark id="isen" variant="reverse" size={32} /><span className="font-display text-2xl font-semibold">Isen</span></span>
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* REGLER */}
      <Band tone="paper">
        <div className="container-page py-20 md:py-28 grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Gør</span>
            <ul className="mt-6 border-t border-foreground/20">
              {[
                "Brug mærkerne fladt i de angivne farver.",
                "Skift mellem store farveflader: skovgrøn, elfenben, salvie og himmelblå.",
                "Brug egne dronefotos som dokumentation, med billedtekst og dato.",
                "Brug ler sparsomt: bånd, tal og små accenter.",
              ].map((r) => <li key={r} className="border-b border-foreground/20 py-3">{r}</li>)}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Undgå</span>
            <ul className="mt-6 border-t border-foreground/20">
              {[
                "Skygger, forløb eller konturer på selve mærket.",
                "At strække, dreje eller ændre mærkets proportioner.",
                "Stockfotos eller genererede billeder præsenteret som egne fotos eller projektdokumentation.",
                "Lertekst under 24 px på lyse flader.",
              ].map((r) => <li key={r} className="border-b border-foreground/20 py-3">{r}</li>)}
            </ul>
          </div>
        </div>
      </Band>
    </PageLayout>
  );
}
