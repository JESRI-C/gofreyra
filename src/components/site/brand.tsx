/**
 * Approved Freyra family brand artwork (November 2026).
 * Always render the supplied SVG files as they are: no redrawing, recolouring,
 * stretching or flipping. Width follows height via the file's own viewBox.
 */
import gofreyraLogo from "@/assets/brand/gofreyra-vandret.svg.asset.json";
import gofreyraOwnerLogo from "@/assets/brand/gofreyra-ejerlinje.svg.asset.json";
import groupLogo from "@/assets/brand/freyra-group-vandret.svg.asset.json";
import forgrening from "@/assets/brand/forgrening.svg";
import forgreningWhite from "@/assets/brand/forgrening-hvid.svg";
import landskab from "@/assets/brand/landskab.svg";
import landskabWhite from "@/assets/brand/landskab-hvid.svg";

/** Primary horizontal lockup: family symbol + GoFreyra wordmark (viewBox 305 x 100). */
export function GoFreyraLogo({ className = "", alt = "GoFreyra" }: { className?: string; alt?: string }) {
  return <img src={gofreyraLogo.url} alt={alt} width={305} height={100} className={`w-auto ${className}`} />;
}

/** Owner-line lockup "GoFreyra by Freyra" for the footer (viewBox 305 x 106). */
export function GoFreyraOwnerLogo({ className = "", alt = "GoFreyra by Freyra" }: { className?: string; alt?: string }) {
  return <img src={gofreyraOwnerLogo.url} alt={alt} width={305} height={106} loading="lazy" className={`w-auto ${className}`} />;
}

/** Freyra Group horizontal lockup (viewBox 406 x 100). Use sparingly. */
export function FreyraGroupLogo({ className = "", alt = "Freyra Group" }: { className?: string; alt?: string }) {
  return <img src={groupLogo.url} alt={alt} width={406} height={100} loading="lazy" className={`w-auto ${className}`} />;
}

/** Forgrening: compact secondary mark. Decorative, so hidden from assistive tech. */
export function ForgreningMark({ white = false, className = "" }: { white?: boolean; className?: string }) {
  return <img src={white ? forgreningWhite : forgrening} alt="" aria-hidden width={223} height={163} className={`h-auto select-none pointer-events-none ${className}`} />;
}

/** Landskab: broad graphic motif (viewBox 312 x 151). Decorative only. */
export function LandskabMotif({ white = false, className = "" }: { white?: boolean; className?: string }) {
  return <img src={white ? landskabWhite : landskab} alt="" aria-hidden width={312} height={151} className={`h-auto select-none pointer-events-none ${className}`} />;
}
