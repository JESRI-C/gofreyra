# GoFreyra brand reference (approved Freyra family brandguide, 13.11.2026)

Source: freyra-web-brandkit.zip (assets/, web/gofreyra-forside.html, web/gofreyra-ydelse.html, web/web.css, kilder/Kilder-og-beslutninger.txt).
Marks are outlined from the original artwork. Never redraw, recolour, stretch or flip them; never recreate a mark from its name.

## Assets in use (exact files, unchanged)
| File in kit | In project | Where |
|---|---|---|
| assets/gofreyra-vandret.svg (305x100) | src/assets/brand/gofreyra-vandret.svg.asset.json (CDN) | Header logo |
| assets/gofreyra-ejerlinje.svg (305x106) | src/assets/brand/gofreyra-ejerlinje.svg.asset.json (CDN) | Footer logo ("GoFreyra by Freyra") |
| assets/freyra-group-vandret.svg (406x100) | src/assets/brand/freyra-group-vandret.svg.asset.json (CDN) | Footer company column only (use sparingly) |
| assets/forgrening.svg / forgrening-hvid.svg | src/assets/brand/ (copied byte-identical) | Home services intro, light CTA band, white on dark CTA |
| assets/landskab.svg / landskab-hvid.svg | src/assets/brand/ (copied byte-identical) | Lower-right of home hero drone photo; lower-right of page heroes; white at 35% in dark CTA |

Available but not used yet: white logo lockups (-hvid), vertical lockups, ejerlinje-side, symbol-only vectors, ordmaerke-only vectors, Isen assets (belong to the Isen site). Kit inter.woff2 is the same Inter family already self-hosted via @fontsource-variable/inter. Kit photos landskab-foto.webp / vandloeb.webp are not used; the site keeps its own drone photos through photoProps().

## Tokens (src/styles.css :root)
- GoFreyra: primary #245A38, mid #69A275, pale #E2EFE4 (heroes, alternating sections), dark #173D28 (closing CTA), rule #9BB5A4 (thin list rules).
- Family: ink #24272B (headings), body #303338, paper #FBFAF8 (page), sand #F5F3ED, white #FFFFFF (panels), border #DFE1E4.
- Isen blue #0860A4 only on the Isen family link.
- Inter everywhere incl. headings, weight 550, tight tracking. .display-1 ~40px mobile / 64px desktop; .display-2 ~32/43px.
- Radii 2-4px (buttons 3px), no shadows on panels, 8px-based spacing, 1200px content region (.container-page).

## Layout decisions
- Family bar above header: "Del af Freyra Group" left, GoFreyra (current) / Isen right.
- Header: logo, nav, "Book en snak" button, language switcher top right; mobile uses a bordered "Menu" button. The Kontakt nav item yields to the button where the button is shown (DA from 1280px, EN/DE from 1440px).
- Home hero: editorial two columns (heading left, intro + actions right) over the own drone photo with Landskab at its lower-right edge and a photo credit tag.
- Internal pages share PageHero (pale band, eyebrow, display heading, intro, actions; Landskab lower-right in reserved space, or a photo/diagram aside).
- Content lists use thin top rules (.rule-card, .rule-step) instead of shadowed cards; photos are unframed (.photo-figure).
- Closing CTA is a full-width dark green band (CTASection); GreenCTA is a light ruled band with Forgrening.
- Prototype demo bar, draft notes and shortened prototype copy are intentionally not used.
