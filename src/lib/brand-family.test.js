import { describe, expect, test } from "bun:test";
import { BRAND_FAMILY, CURRENT_BRAND, FREYRA_GROUP_URL } from "../data/brand-family";
import { CHROME_COPY } from "../i18n/pages/chrome";

describe("Freyra Group brand family", () => {
  test("shows only GoFreyra (current) and Isen, no Idos yet", () => {
    expect(BRAND_FAMILY.map((b) => b.id)).toEqual(["gofreyra", "isen"]);
    expect(CURRENT_BRAND).toBe("gofreyra");
  });
  test("Freyra Group links to https://freyra.dk/", () => {
    expect(FREYRA_GROUP_URL).toBe("https://freyra.dk/");
  });
  test("Isen links to https://www.isenenergy.com/da", () => {
    expect(BRAND_FAMILY.find((b) => b.id === "isen")?.href).toBe("https://www.isenenergy.com/da");
  });
  test("every other brand has a live https URL, never a placeholder", () => {
    for (const b of BRAND_FAMILY.filter((x) => x.id !== CURRENT_BRAND)) {
      expect(b.href).toMatch(/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}/);
    }
  });
  test("labels exist in Danish, English and German", () => {
    expect(CHROME_COPY.da.family.label).toBe("Del af Freyra Group");
    expect(CHROME_COPY.en.family.label).toBe("Part of Freyra Group");
    expect(CHROME_COPY.de.family.label).toBe("Teil der Freyra Group");
  });
});
