import { describe, expect, test } from "bun:test";
import { alleArtikler, alleTermer } from "../data/content";
import { getArtikel, getTerm, getService, clusters, articlesForService } from "./viden-helpers";
import { PHOTO_VARIANTS, photoProps } from "./photo-variants";
import { sitemapEntries } from "./sitemap";

describe("Runde 2 content integration", () => {
  test("both batches are available without duplicate slugs in either URL namespace", () => {
    expect(alleArtikler.length).toBe(46);
    expect(alleTermer.length).toBe(66);
    expect(new Set(alleArtikler.map((a) => a.slug)).size).toBe(46);
    expect(new Set(alleTermer.map((t) => t.slug)).size).toBe(66);
    expect(getArtikel("de-23-lokale-groenne-treparter-oversigt")?.updated).toBe("2026-10-22");
    expect(getTerm("formandskommune")?.updated).toBe("2026-10-22");
  });
  test("sitemap uses each page's updated date and rejects duplicate URLs", () => {
    const entries = sitemapEntries([{ slug: "one", updated: "2026-10-21" }], [{ slug: "two", updated: "2026-10-22" }]);
    expect(entries.find((x) => x.path === "/viden/one")?.updated).toBe("2026-10-21");
    expect(entries.find((x) => x.path === "/ordbog/two")?.updated).toBe("2026-10-22");
    expect(entries.find((x) => x.path === "/")?.updated).toBeUndefined();
    expect(sitemapEntries().length).toBe(131);
    expect(() => sitemapEntries([{ slug: "one", updated: "2026-10-21" }, { slug: "one", updated: "2026-10-22" }], [])).toThrow();
  });
  test("unresolved references cannot produce linked records", () => {
    expect(getArtikel("missing-article")).toBeUndefined();
    expect(getTerm("missing-term")).toBeUndefined();
    expect(getService("missing-service")).toBeUndefined();
    expect(articlesForService("missing-service")).toEqual([]);
    for (const a of alleArtikler) {
      for (const record of a.related.map(getArtikel).filter((x) => !!x)) expect(alleArtikler).toContain(record);
      for (const record of a.terms.map(getTerm).filter((x) => !!x)) expect(alleTermer).toContain(record);
    }
  });
  test("clusters include new articles and retain pillars first", () => {
    const groups = clusters();
    expect(groups.flatMap((g) => g.items).length).toBe(46);
    expect(groups.find((g) => g.name === "Natur og lovgivning")?.items.some((a) => a.slug === "naturnationalparker")).toBe(true);
    for (const g of groups.filter((x) => x.items.some((a) => a.kind === "pillar"))) expect(g.items[0]?.kind).toBe("pillar");
    expect(articlesForService("datagrundlag").length).toBeLessThanOrEqual(4);
  });
  test("drone photos offer only 800 and 1400 px variants, never originals", () => {
    for (const v of Object.values(PHOTO_VARIANTS)) {
      const props = photoProps(v.src);
      expect(props.src).toBe(v.w1400);
      expect(props.srcSet).toBe(`${v.w800} 800w, ${v.w1400} 1400w`);
      expect(props.srcSet).not.toContain(v.src);
    }
  });
});