import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const PayloadSchema = z.object({
  name: z.string().min(1).max(120),
  company: z.string().min(1).max(160),
  email: z.string().email().max(200),
  role: z.string().max(120).nullable().optional(),
  interest_area: z.string().max(80).nullable().optional(),
  article_title: z.string().min(1).max(250),
  article_slug: z.string().min(1).max(200),
  source_page: z.string().max(500).nullable().optional(),
  consent: z.literal(true),
});

/**
 * Forward an insight lead to a Make.com / Zapier webhook that pipes into
 * the Google Sheet "GoFreyra Insight Leads".
 *
 * Setup (Make.com or Zapier):
 *   1. Opret Google Sheet "GoFreyra Insight Leads" med kolonner:
 *      Timestamp, Name, Company, Email, Role, Interest Area,
 *      Article Title, Article Slug, Consent, Source Page, Status
 *   2. Opret scenarie: Webhook → Google Sheets (Add Row)
 *   3. Sæt secret INSIGHT_ACCESS_WEBHOOK_URL til webhook-URL'en
 *
 * Hvis webhook ikke er sat, fejler funktionen lydløst — artiklen låses
 * stadig op lokalt og leadet er gemt i Lovable Cloud.
 */
export const forwardInsightLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => PayloadSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.INSIGHT_ACCESS_WEBHOOK_URL;
    if (!url) {
      console.warn("[insight-lead] INSIGHT_ACCESS_WEBHOOK_URL not configured — skipping forward");
      return { forwarded: false as const, reason: "not_configured" as const };
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name: data.name,
      company: data.company,
      email: data.email,
      role: data.role ?? "",
      interest_area: data.interest_area ?? "",
      article_title: data.article_title,
      article_slug: data.article_slug,
      consent: true,
      source_page: data.source_page ?? "",
      status: "new",
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error(`[insight-lead] webhook failed [${res.status}]`);
        return { forwarded: false as const, reason: "http_error" as const };
      }
      return { forwarded: true as const };
    } catch (err) {
      console.error("[insight-lead] webhook error:", err);
      return { forwarded: false as const, reason: "network_error" as const };
    }
  });
