import { z } from "zod";

/** Messages are keys into the active locale's `validation` copy, so a shown error follows a language switch. */
export type ContactErrorKey =
  | "nameRequired" | "nameTooLong" | "emailInvalid" | "emailTooLong"
  | "companyTooLong" | "subjectTooLong" | "messageRequired" | "messageTooLong";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "nameRequired").max(120, "nameTooLong"),
  email: z.string().trim().email("emailInvalid").max(200, "emailTooLong"),
  company: z.string().trim().max(160, "companyTooLong").optional().or(z.literal("")),
  subject: z.string().trim().max(200, "subjectTooLong").optional().or(z.literal("")),
  message: z.string().trim().min(1, "messageRequired").max(2000, "messageTooLong"),
});

export function contactErrorKey(raw: Record<string, string>): ContactErrorKey | null {
  const r = contactSchema.safeParse(raw);
  return r.success ? null : ((r.error.issues[0]?.message as ContactErrorKey) ?? "messageRequired");
}
