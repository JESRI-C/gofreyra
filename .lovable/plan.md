## Mål
Hele sitet tilgængeligt på engelsk under `gofreyra.com/en/...`, med dansk som standard på root. AI-genereret oversættelse som udgangspunkt, du retter til efterfølgende.

## Arkitekturvalg

**URL-struktur:** Dansk forbliver på root (`/platform`, `/priser`, `/ordbog/...`). Engelsk spejles under `/en/` (`/en/platform`, `/en/pricing`, `/en/glossary/...`). Det bevarer al eksisterende SEO-autoritet på de danske URL'er.

**Kode-struktur:** Ét sæt komponenter — to sæt tekster. Vi undgår at duplikere 30+ route-filer som copy-paste.

```text
src/
  i18n/
    config.ts            # 'da' | 'en', defaultLocale, locales[]
    LocaleContext.tsx    # useLocale() hook + Provider
    dictionaries/
      da/                # nuværende tekster løftet ud af komponenter
      en/                # AI-oversat, du finpudser
    utils.ts             # localizedPath(), useT(), Link wrapper
  routes/
    (eksisterende DA-routes uændret)
    en.tsx               # layout: <LocaleProvider locale="en"><Outlet/></LocaleProvider>
    en.index.tsx         # render samme Home-komponent
    en.platform.tsx      # render samme Platform-komponent
    en.pricing.tsx       # = priser
    en.glossary.tsx      # = ordbog
    en.glossary.$term.tsx
    ... (én per DA-route)
  components/site/       # uændret — læser tekst via useT()
  data/
    insights.ts          # udvides: { da: {...}, en: {...} } per felt
    sectors.ts, useCases.ts, problems.ts, sources.ts, pseo.ts, dataTypes.ts
    aiDemoScenarios.ts
```

Route-filerne under `en.*` indeholder kun ~5 linjer hver: importer page-komponenten og sæt locale + `head()` med engelsk title/description.

## Implementeringsfaser

**Fase 1 — Fundament (foundation)**
- Opret `src/i18n/` med locale-config, context, `useT()` hook og en `<LocalizedLink>` der oversætter slugs automatisk.
- Tilføj sprog-switcher i `Header.tsx` (DA / EN) og `Footer.tsx`.
- Mount `LocaleProvider` i `__root.tsx` baseret på første URL-segment.

**Fase 2 — Tekst-ekstraktion**
- Gå hver route-fil igennem og flyt hardcoded dansk tekst til `dictionaries/da/<route>.ts`.
- Komponenten læser via `const t = useT('platform')` → `t.hero.title`.
- Samme for delte komponenter (`Header`, `Footer`, `CTASection`, `sections.tsx`, `AIDemoPanel`, `DashboardMockup`).

**Fase 3 — AI-oversættelse**
- Engangs-script (`scripts/translate.ts`) der kører alle DA-dictionaries gennem Lovable AI (`google/gemini-2.5-pro` for kvalitet på fagsprog) og genererer `dictionaries/en/`.
- Samme script oversætter dynamisk content i `data/*.ts` til parallelle `en`-felter — bevarer slugs men oversætter titler, beskrivelser, body.
- Slugs for dynamiske routes: behold danske slugs på `/ordbog/audit-trail`, oversæt til `/en/glossary/audit-trail` (engelsk slug). Mapping ligger i samme data-fil.

**Fase 4 — EN-route-filer**
- Generér `en.<route>.tsx` for hver eksisterende route med engelsk SEO-`head()`.
- Dynamiske routes (`en.glossary.$term.tsx` mv.) bruger oversatte slugs til lookup.

**Fase 5 — SEO**
- `hreflang`-tags: hver side får `<link rel="alternate" hreflang="da" href="..."/>`, `hreflang="en"`, og `hreflang="x-default"` (DA).
- Canonical URL pr. sprog (DA-side canonical → DA-URL; EN-side canonical → EN-URL).
- `sitemap.xml` udvides med alle EN-URL'er.
- `llms.txt` får en EN-sektion.
- `<html lang>` opdateres dynamisk pr. locale.

**Fase 6 — Kvalitetscheck**
- Visuel gennemgang af de vigtigste EN-sider (forside, platform, priser, kontakt, book demo).
- Tjek at sprog-switcher bevarer side-kontekst (`/platform` ↔ `/en/platform`).

## Hvad du skal gøre bagefter
Rette AI-oversættelserne i `src/i18n/dictionaries/en/` og `data/*` til. Filerne er rene TS-objekter — én linje per streng. Ingen kodeændringer nødvendige for tekstrettelser.

## Estimat & risici
- 30+ route-filer + 9 data-filer skal igennem ekstraktion. Det er en stor ændring (mange filer), men mekanisk.
- Vigtigt at gøre i én sammenhængende implementering — halvfærdig i18n efterlader sitet i mixed state.
- AI-oversættelse af fagtermer (ESG, ESRS, audit trail, datakilder) skal verificeres af dig — Gemini kan ramme ved siden af branche-specifikt sprog.

## Alternativer der blev fravalgt
- **`$lang`-param på alle routes** (`/$lang/platform`): Ville flytte eksisterende DA-URL'er til `/da/platform` — bryder al indekseret SEO.
- **Subdomæne `en.gofreyra.com`**: Du valgte undermappe — bedre for SEO-deling.
- **i18next-bibliotek**: Overkill her; vi har ikke pluralization, dato-formatering eller nested namespaces der retfærdiggør ekstra dependency. Letvægts custom `useT()` er nok.
