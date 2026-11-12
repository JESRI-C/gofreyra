import { useId, type CSSProperties } from "react";

/**
 * Freyra brand marks. One geometric grammar shared by the family:
 * a flat silhouette, 3.2-unit linework with round caps, "node" rings and
 * horizon bands. Each brand keeps its own silhouette:
 *   Freyra Group (owner)  arch with bookmark notch, an F built from nodes
 *   GoFreyra              disk, circuit tree over land and water
 *   Isen (proposal)       hexagon, A-frame energy mast over a water band
 * The raw geometry also feeds scripts/build-brand-svgs.tsx (public/brand/*.svg).
 */

export type BrandMarkId = "group" | "gofreyra" | "isen";
export type MarkVariant = "color" | "reverse" | "mono";

export const BRAND_HEX = {
  forest: "#173F35",
  ivory: "#F3EBDD",
  sage: "#B8C8A3",
  sky: "#BFD8DF",
  clay: "#B9684B",
  ink: "#13261F",
  isen: "#0860A4",
} as const;

type Band = { d: string; tone: "land" | "water" };
type Geometry = {
  silhouette: string;
  bands: Band[];
  lines: string[];
  nodes: { cx: number; cy: number; r: number }[];
  /** Silhouette colour in the full-colour version. */
  base: string;
};

export const MARK_GEOMETRY: Record<BrandMarkId, Geometry> = {
  gofreyra: {
    silhouette: "M2 32a30 30 0 1 0 60 0a30 30 0 1 0 -60 0Z",
    bands: [
      { d: "M-2 45C12 38 22 38 32 42.5C42 47 52 45 66 37V66H-2Z", tone: "land" },
      { d: "M-2 53C10 49 22 49 32 52.5C42 56 54 55 66 50V66H-2Z", tone: "water" },
    ],
    lines: ["M32 44V20.5", "M32 36.5L21.6 28.2", "M32 36.5L42.4 28.2"],
    nodes: [
      { cx: 32, cy: 16.3, r: 4.2 },
      { cx: 19.1, cy: 26.2, r: 3.2 },
      { cx: 44.9, cy: 26.2, r: 3.2 },
    ],
    base: BRAND_HEX.forest,
  },
  group: {
    silhouette: "M8 30A24 24 0 0 1 56 30V61L32 51L8 61Z",
    bands: [],
    lines: ["M22.5 46V22.5", "M22.5 27H40.5", "M22.5 36H35.5"],
    nodes: [
      { cx: 22.5, cy: 18.3, r: 4.2 },
      { cx: 43.7, cy: 27, r: 3.2 },
      { cx: 38.7, cy: 36, r: 3.2 },
    ],
    base: BRAND_HEX.forest,
  },
  isen: {
    silhouette: "M32 2L58 17V47L32 62L6 47V17Z",
    bands: [{ d: "M-2 47C14 43 22 43 32 46C42 49 52 48 66 44V66H-2Z", tone: "water" }],
    lines: ["M20.5 47L32 21.8L43.5 47", "M16 34H48"],
    nodes: [
      { cx: 32, cy: 17.6, r: 4.2 },
      { cx: 12.8, cy: 34, r: 3.2 },
      { cx: 51.2, cy: 34, r: 3.2 },
    ],
    base: BRAND_HEX.isen,
  },
};

export const MARK_NAMES: Record<BrandMarkId, string> = {
  group: "Freyra Group",
  gofreyra: "GoFreyra",
  isen: "Isen",
};

type MarkProps = {
  id: BrandMarkId;
  variant?: MarkVariant;
  /** Colour for the mono variant; defaults to currentColor. */
  monoColor?: string;
  size?: number | string;
  title?: string;
  className?: string;
  style?: CSSProperties;
};

/** Full brand mark. Decorative by default (aria-hidden) unless a title is given. */
export function BrandMark({ id, variant = "color", monoColor = "currentColor", size = 48, title, className, style }: MarkProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const g = MARK_GEOMETRY[id];
  const clip = `c${uid}`;
  const mask = `m${uid}`;
  const a11y = title ? { role: "img", "aria-label": title } : { "aria-hidden": true as const };

  if (variant === "mono") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} className={className} style={style} {...a11y}>
        {title && <title>{title}</title>}
        <defs>
          <clipPath id={clip}><path d={g.silhouette} /></clipPath>
          <mask id={mask} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
            <path d={g.silhouette} fill="#fff" />
            <g clipPath={`url(#${clip})`} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
              {g.bands.map((b) => <path key={b.d} d={b.d} strokeWidth={2.6} />)}
              {g.lines.map((d) => <path key={d} d={d} strokeWidth={3.2} />)}
              {g.nodes.map((n) => <circle key={`${n.cx}-${n.cy}`} cx={n.cx} cy={n.cy} r={n.r} strokeWidth={2.6} />)}
            </g>
          </mask>
        </defs>
        <rect width="64" height="64" fill={monoColor} mask={`url(#${mask})`} />
      </svg>
    );
  }

  const reverse = variant === "reverse";
  const base = reverse ? BRAND_HEX.ivory : g.base;
  const line = reverse ? g.base : BRAND_HEX.ivory;
  const land = BRAND_HEX.sage;
  const water = BRAND_HEX.sky;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} className={className} style={style} {...a11y}>
      {title && <title>{title}</title>}
      <defs>
        <clipPath id={clip}><path d={g.silhouette} /></clipPath>
      </defs>
      <path d={g.silhouette} fill={base} />
      <g clipPath={`url(#${clip})`}>
        {g.lines.map((d) => <path key={d} d={d} fill="none" stroke={line} strokeWidth={3.2} strokeLinecap="round" />)}
        {g.bands.map((b) => <path key={b.d} d={b.d} fill={b.tone === "land" ? land : water} />)}
        {g.nodes.map((n) => <circle key={`${n.cx}-${n.cy}`} cx={n.cx} cy={n.cy} r={n.r} fill="none" stroke={line} strokeWidth={2.6} />)}
      </g>
    </svg>
  );
}

/**
 * Outline-only, oversized version of a mark for decorative crops.
 * Always aria-hidden; inherits currentColor so tones control it.
 */
export function BrandGlyph({ id, className, style, strokeWidth = 1.4 }: { id: BrandMarkId; className?: string; style?: CSSProperties; strokeWidth?: number }) {
  const g = MARK_GEOMETRY[id];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 68 68" className={className} style={style} aria-hidden focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d={g.silhouette} />
        {g.lines.map((d) => <path key={d} d={d} />)}
        {g.nodes.map((n) => <circle key={`${n.cx}-${n.cy}`} cx={n.cx} cy={n.cy} r={n.r} />)}
      </g>
    </svg>
  );
}

/** Horizontal lockup: mark + wordmark set in the display face. */
export function BrandLockup({ id, variant = "color", size = 44, className, label }: { id: BrandMarkId; variant?: MarkVariant; size?: number; className?: string; label?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <BrandMark id={id} variant={variant} size={size} />
      <span className="font-display font-semibold leading-none tracking-[-0.02em]" style={{ fontSize: size * 0.58 }}>
        {label ?? MARK_NAMES[id]}
      </span>
    </span>
  );
}
