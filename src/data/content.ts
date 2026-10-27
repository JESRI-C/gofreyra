import { artikler } from "./viden";
import { artiklerBatch2 } from "./viden-batch2";
import { ordbog } from "./ordbog";
import { ordbogBatch2 } from "./ordbog-batch2";
import { artiklerEn } from "./i18n/viden.en";
import { artiklerDe } from "./i18n/viden.de";
import { artiklerBatch2En } from "./i18n/viden-batch2.en";
import { artiklerBatch2De } from "./i18n/viden-batch2.de";
import { ordbogEn } from "./i18n/ordbog.en";
import { ordbogDe } from "./i18n/ordbog.de";
import { ordbogBatch2En } from "./i18n/ordbog-batch2.en";
import { ordbogBatch2De } from "./i18n/ordbog-batch2.de";
import type { Locale } from "@/i18n/locale";
import type { Artikel } from "./viden";
import type { Term } from "./ordbog";

// Fremtidige batches tilføjes kun her (dansk original + en/de oversættelser).
export const alleArtikler = [...artikler, ...artiklerBatch2];
export const alleTermer = [...ordbog, ...ordbogBatch2];

const ARTIKLER: Record<Locale, Artikel[]> = {
  da: alleArtikler,
  en: [...artiklerEn, ...artiklerBatch2En],
  de: [...artiklerDe, ...artiklerBatch2De],
};
const TERMER: Record<Locale, Term[]> = {
  da: alleTermer,
  en: [...ordbogEn, ...ordbogBatch2En],
  de: [...ordbogDe, ...ordbogBatch2De],
};

export function artiklerFor(locale: Locale): Artikel[] {
  return ARTIKLER[locale];
}
export function termerFor(locale: Locale): Term[] {
  return TERMER[locale];
}
