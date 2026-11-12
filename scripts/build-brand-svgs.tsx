// Regenerates the downloadable brand files in public/brand/ and the favicon
// from the single geometry in src/components/brand/marks.tsx.
// Run: bun scripts/build-brand-svgs.tsx
import { renderToStaticMarkup } from "react-dom/server";
import { writeFileSync, mkdirSync } from "node:fs";
import { BRAND_HEX, BrandMark, MARK_NAMES, type BrandMarkId, type MarkVariant } from "../src/components/brand/marks";

const OUT = "public/brand";
mkdirSync(OUT, { recursive: true });
const head = '<?xml version="1.0" encoding="UTF-8"?>\n';

const ids: BrandMarkId[] = ["group", "gofreyra", "isen"];
const slug: Record<BrandMarkId, string> = { group: "freyra-group", gofreyra: "gofreyra", isen: "isen" };
const variants: { v: MarkVariant; name: string; mono?: string }[] = [
  { v: "color", name: "farve" },
  { v: "reverse", name: "negativ" },
  { v: "mono", name: "mono-skovgroen", mono: BRAND_HEX.forest },
  { v: "mono", name: "mono-elfenben", mono: BRAND_HEX.ivory },
];

for (const id of ids) {
  for (const { v, name, mono } of variants) {
    const svg = renderToStaticMarkup(<BrandMark id={id} variant={v} monoColor={mono} size={512} title={MARK_NAMES[id]} />);
    writeFileSync(`${OUT}/${slug[id]}-${name}.svg`, head + svg);
  }
  // Lockup: mark + wordmark (live text in Fraunces; outline the text before print).
  for (const dark of [false, true]) {
    const text = dark ? BRAND_HEX.ivory : id === "isen" ? BRAND_HEX.isen : BRAND_HEX.forest;
    const mark = renderToStaticMarkup(<BrandMark id={id} variant={dark ? "reverse" : "color"} size={64} />)
      .replace("<svg ", '<svg x="0" y="0" ');
    const w = 64 + 16 + MARK_NAMES[id].length * 21;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} 64" width="${w * 4}" height="256" role="img" aria-label="${MARK_NAMES[id]}"><title>${MARK_NAMES[id]}</title>${mark}<text x="80" y="43" font-family="Fraunces, Georgia, serif" font-weight="600" font-size="36" letter-spacing="-0.7" fill="${text}">${MARK_NAMES[id]}</text></svg>`;
    writeFileSync(`${OUT}/${slug[id]}-lockup-${dark ? "negativ" : "farve"}.svg`, head + svg);
  }
}

// Ribbon (bookmark) as a standalone shape.
const ribbon = (fill: string, markFill: string) => {
  const mark = renderToStaticMarkup(<BrandMark id="group" variant="mono" monoColor={markFill} size={40} />).replace("<svg ", '<svg x="12" y="316" ');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 400" width="128" height="800"><path d="M0 0H64V400L32 376L0 400Z" fill="${fill}"/>${mark}</svg>`;
};
writeFileSync(`${OUT}/baand-ler.svg`, head + ribbon(BRAND_HEX.clay, BRAND_HEX.ivory));
writeFileSync(`${OUT}/baand-skovgroen.svg`, head + ribbon(BRAND_HEX.forest, BRAND_HEX.sage));

// Favicon.
writeFileSync("public/favicon.svg", head + renderToStaticMarkup(<BrandMark id="gofreyra" size={64} />));
console.log("brand files written");
