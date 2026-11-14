/**
 * Freyra Group brand family shown in the header bar and footer.
 * Add a new brand (e.g. Idos) here only once it has a live public URL;
 * never list a brand without a working link.
 */
export type BrandId = "gofreyra" | "isen";

export interface FamilyBrand {
  id: BrandId;
  name: string;
  /** Absolute URL of the brand's site; null for the site the visitor is on. */
  href: string | null;
}

export const CURRENT_BRAND: BrandId = "gofreyra";
export const FREYRA_GROUP_URL = "https://freyra.dk/";

export const BRAND_FAMILY: FamilyBrand[] = [
  { id: "gofreyra", name: "GoFreyra", href: null },
  { id: "isen", name: "Isen", href: "https://www.isenenergy.com/da" },
];
