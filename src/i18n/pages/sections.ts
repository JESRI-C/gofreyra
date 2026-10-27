import type { Locale } from "@/i18n/locale";

const da = {
  faqEyebrow: "FAQ",
  faqTitle: "Ofte stillede spørgsmål",
  ctaPrimaryLabel: "Book en snak",
};

export type Copy = typeof da;

const en: Copy = {
  faqEyebrow: "FAQ",
  faqTitle: "Frequently asked questions",
  ctaPrimaryLabel: "Book a chat",
};

const de: Copy = {
  faqEyebrow: "FAQ",
  faqTitle: "Häufig gestellte Fragen",
  ctaPrimaryLabel: "Gespräch vereinbaren",
};

export const COPY: Record<Locale, Copy> = { da, en, de };
