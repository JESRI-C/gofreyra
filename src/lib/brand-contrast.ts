/** WCAG 2.x contrast helpers for the brand palette (used by /brandstudio and tests). */
function channel(v: number) {
  const c = v / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
export function luminance(hex: string) {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}
export function contrast(a: string, b: string) {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return Math.round(((x + 0.05) / (y + 0.05)) * 100) / 100;
}
export type Rating = "AAA" | "AA" | "AA stor tekst" | "Kun dekoration";
export function rate(ratio: number): Rating {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return "AA stor tekst";
  return "Kun dekoration";
}

export const PALETTE = [
  { key: "forest", name: "Skovgrøn", hex: "#173F35", role: "Primær flade, logo, knapper og tekst på lyse flader" },
  { key: "ivory", name: "Elfenben", hex: "#F3EBDD", role: "Varm baggrund, tekst og linjer på skovgrøn" },
  { key: "paper", name: "Papir", hex: "#FAF6EE", role: "Standardbaggrund for lange tekster" },
  { key: "sage", name: "Salvie", hex: "#B8C8A3", role: "Sektionsflader, land i GoFreyra-mærket" },
  { key: "sky", name: "Himmelblå", hex: "#BFD8DF", role: "Sektionsflader, overskrifter på skovgrøn, vand i mærket" },
  { key: "clay", name: "Ler", hex: "#B9684B", role: "Bånd, dekoration og stor display-tekst" },
  { key: "clayDeep", name: "Mørk ler", hex: "#8F4A31", role: "Små accenter og overlinjer på lyse flader" },
  { key: "ink", name: "Blæk", hex: "#13261F", role: "Brødtekst" },
  { key: "isen", name: "Isen-blå", hex: "#0860A4", role: "Kun Isen" },
] as const;

/** Text-on-background pairings used on the site. */
export const PAIRINGS: { fg: string; bg: string; use: string }[] = [
  { fg: "#13261F", bg: "#FAF6EE", use: "Brødtekst på papir" },
  { fg: "#173F35", bg: "#F3EBDD", use: "Overskrift og knap på elfenben" },
  { fg: "#F3EBDD", bg: "#173F35", use: "Tekst på skovgrøn" },
  { fg: "#BFD8DF", bg: "#173F35", use: "Display-overskrift på skovgrøn" },
  { fg: "#B8C8A3", bg: "#173F35", use: "Overlinje på skovgrøn" },
  { fg: "#13261F", bg: "#B8C8A3", use: "Tekst på salvie" },
  { fg: "#13261F", bg: "#BFD8DF", use: "Tekst på himmelblå" },
  { fg: "#8F4A31", bg: "#F3EBDD", use: "Overlinje på elfenben" },
  { fg: "#0860A4", bg: "#F3EBDD", use: "Isen-link i brandbjælken" },
  { fg: "#F3EBDD", bg: "#B9684B", use: "Elfenben på ler" },
  { fg: "#B9684B", bg: "#FAF6EE", use: "Ler på papir" },
  { fg: "#173F35", bg: "#B9684B", use: "Skovgrøn på ler" },
];
