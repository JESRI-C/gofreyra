import type { Locale } from "@/i18n/locale";

const da = {
  eyebrow: "Book en snak",
  title: "Skal vi se på jeres projektområde?",
  subtitle: "En uforpligtende samtale om jeres område, jeres data og hvad en førregistrering kan give jer.",
  bookCall: "Book en snak",
  viewPlatform: "Se platformen",
};

export type Copy = typeof da;

const en: Copy = {
  eyebrow: "Book a conversation",
  title: "Shall we look at your project area?",
  subtitle: "A no-obligation conversation about your area, your data and what a baseline survey can offer you.",
  bookCall: "Book a conversation",
  viewPlatform: "View the platform",
};

const de: Copy = {
  eyebrow: "Gespräch vereinbaren",
  title: "Sollen wir uns Ihr Projektgebiet ansehen?",
  subtitle: "Ein unverbindliches Gespräch über Ihr Gebiet, Ihre Daten und darüber, was Ihnen eine Erfassung des Ausgangszustands bieten kann.",
  bookCall: "Gespräch vereinbaren",
  viewPlatform: "Plattform ansehen",
};

export const COPY: Record<Locale, Copy> = { da, en, de };
