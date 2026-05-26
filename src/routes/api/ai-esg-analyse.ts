import { createFileRoute } from "@tanstack/react-router";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

// Very simple in-memory rate limit (per IP) — best-effort, demo only.
const RATE: Map<string, { count: number; reset: number }> = (globalThis as any).__gf_ai_rate ?? new Map();
(globalThis as any).__gf_ai_rate = RATE;
const LIMIT = 8;
const WINDOW_MS = 60 * 60 * 1000;

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = RATE.get(ip);
  if (!entry || entry.reset < now) {
    RATE.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMIT;
}

type Body = {
  scenario: { title: string; location: string; context: string; data: { label: string; value: string; status?: string }[] };
};

export const Route = createFileRoute("/api/ai-esg-analyse")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("AI er ikke konfigureret", { status: 500 });

        const ip =
          request.headers.get("cf-connecting-ip") ??
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
          "anon";
        if (rateLimited(ip)) {
          return new Response("For mange forespørgsler. Prøv igen senere.", { status: 429 });
        }

        let body: Body;
        try {
          body = (await request.json()) as Body;
        } catch {
          return new Response("Ugyldig forespørgsel", { status: 400 });
        }
        const s = body?.scenario;
        if (!s?.title || !Array.isArray(s.data)) {
          return new Response("Manglende scenarie-data", { status: 400 });
        }

        const dataLines = s.data
          .map((d) => `- ${d.label}: ${d.value}${d.status ? ` [${d.status}]` : ""}`)
          .join("\n");

        const userPrompt = `Scenarie: ${s.title}
Lokation: ${s.location}
Kontekst: ${s.context}

Datapunkter:
${dataLines}

Lav en kort, professionel ESG-analyse på dansk i markdown med præcis disse afsnit:
**Risikoflag** (én linje: 🟢 Grøn / 🟡 Gul / 🔴 Rød + 1 sætnings begrundelse)
**Vurdering** (2–3 sætninger, faglig tone)
**Anbefalinger** (3 konkrete punkter som bullet list — handlingsorienterede)
**Dokumentation & rapportering** (1–2 bullets med relevante CSRD/ESRS-referencer eller dansk lovgivning, fx ESRS E1, E4, vandområdeplan)

Vær konkret. Ingen indledning, ingen disclaimers, ingen afslutning — kun de fire afsnit.`;

        const gateway = createLovableAiGatewayProvider(key);
        const model = gateway("google/gemini-3-flash-preview");

        const messages: UIMessage[] = [
          {
            id: "u1",
            role: "user",
            parts: [{ type: "text", text: userPrompt }],
          },
        ];

        try {
          const result = streamText({
            model,
            system:
              "Du er en erfaren dansk ESG- og bæredygtighedsanalytiker hos GoFreyra. Du arbejder med CSRD, ESRS, biodiversitet, vandkvalitet, klima og naturprojekter. Du skriver kort, præcist og handlingsorienteret på dansk.",
            messages: await convertToModelMessages(messages),
          });
          return result.toTextStreamResponse();
        } catch (err) {
          const msg = err instanceof Error ? err.message : "Ukendt fejl";
          if (msg.includes("429")) return new Response("AI-tjenesten er travl. Prøv igen om lidt.", { status: 429 });
          if (msg.includes("402")) return new Response("AI-kredit opbrugt.", { status: 402 });
          return new Response("AI-analyse fejlede: " + msg, { status: 500 });
        }
      },
    },
  },
});
