import type { ReactNode } from "react";
import { BrandGlyph, type BrandMarkId } from "@/components/brand/marks";
import { BrandRibbon } from "@/components/brand/Ribbon";
import { photoProps } from "@/lib/photo-variants";

export type Tone = "paper" | "ivory" | "sage" | "sky" | "forest";

/**
 * Full-bleed colour field. Tones remap the semantic colour tokens, so anything
 * inside (cards, buttons, muted text) stays legible without per-page colours.
 */
export function Band({
  tone = "paper",
  className = "",
  children,
  glyph,
  glyphPosition = "right",
  id,
  labelledBy,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
  glyph?: BrandMarkId;
  glyphPosition?: "right" | "left";
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`tone-${tone} relative ${className}`}>
      {glyph && <CroppedGlyph id={glyph} position={glyphPosition} tone={tone} />}
      <div className="relative">{children}</div>
    </section>
  );
}

/** Oversized outline mark, cropped by the section edge. Decorative only. */
export function CroppedGlyph({ id, position = "right", tone = "paper" }: { id: BrandMarkId; position?: "right" | "left"; tone?: Tone }) {
  const color = tone === "forest" ? "text-sage/25" : tone === "paper" || tone === "ivory" ? "text-forest/[0.09]" : "text-forest/15";
  const pos = position === "right" ? "-right-40 md:-right-24" : "-left-40 md:-left-24";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <BrandGlyph id={id} className={`absolute top-1/2 -translate-y-1/2 ${pos} h-[440px] w-[440px] md:h-[620px] md:w-[620px] ${color}`} strokeWidth={0.9} />
    </div>
  );
}

type HeroPhoto = { src: string; alt: string; caption?: ReactNode; width?: number; height?: number; aspect?: string };

/**
 * Shared page hero: a confident colour field, display headline and (optionally)
 * one of our own photos, with a brand ring crossing the photo edge and the
 * bookmark ribbon crossing into the next section.
 */
export function PageHero({
  tone = "forest",
  eyebrow,
  title,
  body,
  actions,
  photo,
  breadcrumb,
  meta,
  glyph = "gofreyra",
  ribbon = "clay",
  children,
  narrow,
}: {
  tone?: Exclude<Tone, "paper">;
  eyebrow?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  actions?: ReactNode;
  photo?: HeroPhoto;
  breadcrumb?: ReactNode;
  meta?: ReactNode;
  glyph?: BrandMarkId | false;
  ribbon?: "clay" | "sky" | "sage" | "forest" | false;
  children?: ReactNode;
  narrow?: boolean;
}) {
  const headline = tone === "forest" ? "text-sky" : "";
  return (
    <section className={`tone-${tone} relative z-10`}>
      {glyph && !photo && <CroppedGlyph id={glyph} tone={tone} />}
      {ribbon && <BrandRibbon tone={ribbon} />}
      <div
        className={`relative container-page py-14 md:py-24 ${photo ? "grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 items-center" : ""}`}
      >
        <div className={narrow || !photo ? "max-w-3xl" : ""}>
          {breadcrumb && <div className="mb-6 text-sm text-muted-foreground">{breadcrumb}</div>}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className={`mt-5 text-4xl sm:text-5xl md:text-6xl leading-[1.04] ${headline}`}>{title}</h1>
          {meta && <div className="mt-4 text-sm text-muted-foreground">{meta}</div>}
          {body && <div className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/85 max-w-2xl">{body}</div>}
          {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
          {children}
        </div>
        {photo && (
          <figure className="relative">
            <img
              {...photoProps(photo.src, "(min-width: 1024px) 50vw, 100vw")}
              fetchPriority="high"
              alt={photo.alt}
              width={photo.width ?? 2000}
              height={photo.height ?? 1333}
              className={`relative w-full ${photo.aspect ?? "aspect-[4/3]"} object-cover`}
            />
            {glyph && (
              <BrandGlyph
                id={glyph}
                strokeWidth={1.6}
                className={`pointer-events-none absolute -bottom-10 -left-10 hidden h-40 w-40 md:block lg:-left-16 lg:h-52 lg:w-52 ${tone === "forest" ? "text-sky" : "text-forest"}`}
              />
            )}
            {photo.caption && <figcaption className="relative mt-3 text-xs text-muted-foreground md:pl-36 lg:pl-40">{photo.caption}</figcaption>}
          </figure>
        )}
      </div>
    </section>
  );
}

/** Editorial list of items separated by hairline rules, optionally numbered. */
export function RuleGrid({
  items,
  cols = 3,
  numbered,
  className = "",
}: {
  items: { t: ReactNode; d?: ReactNode; key?: string }[];
  cols?: 2 | 3 | 4;
  numbered?: boolean;
  className?: string;
}) {
  const grid = cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-x-10 gap-y-10 ${grid} ${className}`}>
      {items.map((c, i) => (
        <div key={c.key ?? (typeof c.t === "string" ? c.t : i)} className="rule-item">
          {numbered && <div className="display-num mb-4" aria-hidden>{String(i + 1).padStart(2, "0")}</div>}
          <div className="font-display text-xl leading-snug">{c.t}</div>
          {c.d && <div className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">{c.d}</div>}
        </div>
      ))}
    </div>
  );
}
