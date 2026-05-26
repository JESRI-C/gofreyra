import type { Locale } from "./config";

/**
 * Translations for site chrome (header, footer, CTA, common UI strings).
 * Page-specific copy lives in each /en/ route file.
 */
export const chrome = {
  da: {
    nav: {
      platform: "Platform",
      brancher: "Brancher",
      useCases: "Use cases",
      data: "Data",
      problemer: "Problemer",
      indsigter: "Indsigter",
      priser: "Priser",
      om: "Om",
      kontakt: "Kontakt",
    },
    cta: {
      bookDemo: "Book demo",
      login: "Log ind",
      loginMobile: "Log ind på dashboard",
      seePlatform: "Se platformen",
    },
    platformMenu: {
      title: "Platform",
      items: [
        { to: "/platform", label: "GoFreyra Platform", desc: "Hele platformen i ét overblik" },
        { to: "/platform/smartconnect", label: "SmartConnect+", desc: "Indsamler data fra sensor, drone, satellit og felt" },
        { to: "/platform/decisionsiq", label: "DecisionsIQ", desc: "Analyserer data og giver konkrete anbefalinger" },
        { to: "/platform/esg-ledger", label: "ESG Ledger", desc: "Dokumenterer data med audit trail og kildehenvisning" },
        { to: "/platform/impact-exchange", label: "Impact Exchange", desc: "Synliggør og aktiverer verificeret impact" },
        { to: "/dashboard", label: "GoFreyra Dashboard", desc: "Samler det hele i ét operationelt overblik" },
      ],
    },
    footer: {
      tagline: "Dansk SaaS-platform, der gør miljødata, drift og ESG-dokumentation operationel — fra felten til revisionen.",
      newsletterTitle: "Nyhedsbrev",
      newsletterBody: "Få viden om ESG, miljødata og bæredygtighed direkte i din indbakke.",
      colPlatform: "Platform",
      colSolutions: "Løsninger",
      colCompany: "Selskab",
      rights: "Alle rettigheder forbeholdes.",
      built: "Bygget til målbar — og dokumenterbar — bæredygtighed.",
    },
    ctaSection: {
      eyebrow: "Book demo",
      title: "Se GoFreyra med jeres egne data.",
      subtitle:
        "30 minutter med en specialist. Vi gennemgår jeres datakilder, dokumentationsbehov og hvordan platformen passer ind.",
    },
    languageLabel: "Sprog",
  },
  en: {
    nav: {
      platform: "Platform",
      brancher: "Industries",
      useCases: "Use cases",
      data: "Data",
      problemer: "Problems",
      indsigter: "Insights",
      priser: "Pricing",
      om: "About",
      kontakt: "Contact",
    },
    cta: {
      bookDemo: "Book a demo",
      login: "Log in",
      loginMobile: "Log in to dashboard",
      seePlatform: "See the platform",
    },
    platformMenu: {
      title: "Platform",
      items: [
        { to: "/en/platform", label: "GoFreyra Platform", desc: "The whole platform in one overview" },
        { to: "/en/platform/smartconnect", label: "SmartConnect+", desc: "Collects data from sensors, drones, satellites and the field" },
        { to: "/en/platform/decisionsiq", label: "DecisionsIQ", desc: "Analyses data and turns it into concrete recommendations" },
        { to: "/en/platform/esg-ledger", label: "ESG Ledger", desc: "Documents data with full audit trail and source references" },
        { to: "/en/platform/impact-exchange", label: "Impact Exchange", desc: "Surfaces and activates verified impact" },
        { to: "/en/dashboard", label: "GoFreyra Dashboard", desc: "Brings it all together in one operational overview" },
      ],
    },
    footer: {
      tagline:
        "Danish SaaS platform that makes environmental data, operations and ESG documentation operational — from the field to the audit.",
      newsletterTitle: "Newsletter",
      newsletterBody: "Get insights on ESG, environmental data and sustainability — straight to your inbox.",
      colPlatform: "Platform",
      colSolutions: "Solutions",
      colCompany: "Company",
      rights: "All rights reserved.",
      built: "Built for measurable — and verifiable — sustainability.",
    },
    ctaSection: {
      eyebrow: "Book a demo",
      title: "See GoFreyra with your own data.",
      subtitle:
        "30 minutes with a specialist. We walk through your data sources, documentation needs and how the platform fits in.",
    },
    languageLabel: "Language",
  },
} as const;

export function t(locale: Locale) {
  return chrome[locale];
}
