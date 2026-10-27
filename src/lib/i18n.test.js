import { describe, expect, test } from "bun:test";
import { artiklerFor, termerFor } from "../data/content";
import { ydelserFor } from "../data/ydelser";
import { localizePath, splitLocale } from "../i18n/locale";
import { switchHref } from "../components/site/LanguageSwitcher";
import { sitemapXml } from "./sitemap";

describe("multilingual site", () => {
  test("Danish keeps its URLs, English uses /en and German /de", () => {
    expect(localizePath("/kommuner", "da")).toBe("/kommuner");
    expect(localizePath("/kommuner", "en")).toBe("/en/kommuner");
    expect(localizePath("/", "de")).toBe("/de");
    expect(splitLocale("/de/viden/groen-trepart")).toEqual({ locale: "de", path: "/viden/groen-trepart" });
    expect(splitLocale("/ydelser")).toEqual({ locale: "da", path: "/ydelser" });
  });
  test("switching language keeps the same subpage, query and hash", () => {
    expect(switchHref("/ydelser/pilot", "?utm=x", "trin", "en")).toBe("/en/ydelser/pilot?utm=x#trin");
    expect(switchHref("/en/ydelser/pilot", "", "", "da")).toBe("/ydelser/pilot");
  });
  test("every article, term and service exists in en and de with the same slugs and sources", () => {
    for (const l of ["en", "de"]) {
      expect(artiklerFor(l).map((a) => a.slug)).toEqual(artiklerFor("da").map((a) => a.slug));
      expect(termerFor(l).map((t) => t.slug)).toEqual(termerFor("da").map((t) => t.slug));
      expect(ydelserFor(l).map((y) => y.slug)).toEqual(ydelserFor("da").map((y) => y.slug));
      artiklerFor(l).forEach((a, i) => expect(a.sources).toEqual(artiklerFor("da")[i].sources));
      termerFor(l).forEach((t, i) => expect(t.sources).toEqual(termerFor("da")[i].sources));
    }
  });
  test("sitemap lists all three language versions with hreflang", () => {
    const xml = sitemapXml();
    expect((xml.match(/<loc>/g) ?? []).length).toBe(131 * 3);
    expect(xml).toContain("<loc>https://gofreyra.com/en/kommuner</loc>");
    expect(xml).toContain('hreflang="x-default" href="https://gofreyra.com/kommuner"');
  });
});
