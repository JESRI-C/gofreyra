## Mål

Tilføj en interaktiv AI-drevet ESG-analyse demo direkte på `/dashboard` — så besøgende kan prøve GoFreyras AI på rigtige data og se en analyse genereret live. Det bliver det stærkeste "wow"-element på siden og driver mod /book-demo.

## Hvad bygges

En ny sektion på `/dashboard` (placeret lige under hero, før "Det får I i overblikket"): **"Prøv DecisionsIQ live"**.

Brugeren kan:
1. Vælge et **scenarie** fra 3-4 forudbyggede dummy-datasæt (fx "Naturprojekt – heden ved Mols", "Vindmøllepark – biodiversitet", "Kommunal vandkvalitet", "Industri – CO2 & spildevand").
2. Se datapunkter (sensorværdier, afvigelser, kontekst) i et lille panel.
3. Klikke **"Kør AI-analyse"** → får en streamet, AI-genereret ESG-vurdering med:
   - Risikoflag (rød/gul/grøn)
   - 3 konkrete anbefalinger
   - Forslag til dokumentation/rapportering (CSRD-vinklet)
4. CTA under output: "Vil du se det på dine egne data? → Book demo".

## Teknisk

**Backend** — TanStack server route (streaming):
- `src/routes/api/ai-esg-analyse.ts` (POST, streaming)
- Bruger Lovable AI Gateway via `@ai-sdk/openai-compatible` + `ai` (streamText)
- Model: `google/gemini-3-flash-preview` (hurtig, billig, godt nok til demo)
- System prompt: "Du er en ESG-analytiker for GoFreyra. Vurder data, flag risici, foreslå handlinger og dokumentation iht. CSRD/ESRS." (på dansk)
- Input: valgt scenarie + dets datapunkter (sendes fra klient)
- Output: streamet markdown
- Rate limit (simpel in-memory per IP) for at undgå misbrug
- Håndterer 429/402 fra gateway og returnerer pæn fejl

**Frontend** — ny komponent:
- `src/components/site/AIDemoPanel.tsx`
- Scenarie-vælger (tabs/cards), datavisning, "Kør analyse"-knap, streamet svar med `ReactMarkdown` (allerede i projektet hvis ikke, så installeres)
- Bruger `fetch` med `ReadableStream` til at vise svaret token-for-token
- Loading/skeleton state, fejlhåndtering, "prøv igen"
- Designet matcher resten af dashboardet (card-soft, brand-deep, gradient accents)

**Dummy-data**:
- `src/data/aiDemoScenarios.ts` — 3-4 scenarier med navn, kort beskrivelse, datapunkter (JSON), pre-baked kontekst

**Integration**:
- Importeres i `src/routes/dashboard.tsx` lige efter hero-sektionen
- Får eyebrow "AI live demo" og SectionHeader "Prøv DecisionsIQ på et eksempel"

## Sekundær: skab tryghed

- Lille disclaimer under panelet: "Demoen kører på syntetiske data. AI-output er illustrativt."
- Link til /platform/decisionsiq for at læse mere

## Hvad det IKKE er

- Ingen persistering, ingen login, ingen brugerupload af egne data (det er hvad book-demo er til)
- Ikke en fuld chatbot — én-shot analyse pr. scenarie (kan evt. udvides senere)

## Filer

**Nye:**
- `src/routes/api/ai-esg-analyse.ts`
- `src/lib/ai-gateway.server.ts` (provider helper, genbrugelig)
- `src/components/site/AIDemoPanel.tsx`
- `src/data/aiDemoScenarios.ts`

**Ændrede:**
- `src/routes/dashboard.tsx` (indsæt `<AIDemoPanel />` efter hero)
- evt. `package.json` (tilføj `ai`, `@ai-sdk/openai-compatible`, `react-markdown` hvis ikke til stede)

## Krav fra Lovable AI

`LOVABLE_API_KEY` er allerede sat i projektet — ingen ekstra opsætning nødvendig.
