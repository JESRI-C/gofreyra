import { describe, expect, test } from "bun:test";
import { contrast, rate, PAIRINGS } from "./brand-contrast";

describe("brand colour pairings", () => {
  test("body text on paper, ivory, sage and sky passes AA (4.5:1)", () => {
    expect(contrast("#13261F", "#FAF6EE")).toBeGreaterThanOrEqual(4.5);
    expect(contrast("#13261F", "#F3EBDD")).toBeGreaterThanOrEqual(4.5);
    expect(contrast("#13261F", "#B8C8A3")).toBeGreaterThanOrEqual(4.5);
    expect(contrast("#13261F", "#BFD8DF")).toBeGreaterThanOrEqual(4.5);
  });
  test("ivory and sky text on forest #173F35 pass AA", () => {
    expect(contrast("#F3EBDD", "#173F35")).toBeGreaterThanOrEqual(4.5);
    expect(contrast("#BFD8DF", "#173F35")).toBeGreaterThanOrEqual(4.5);
  });
  test("clay #B9684B is below 4.5:1 on light fields, so it is rated decoration / large text only", () => {
    expect(contrast("#B9684B", "#FAF6EE")).toBeLessThan(4.5);
    expect(rate(contrast("#B9684B", "#FAF6EE"))).toBe("AA stor tekst");
    expect(rate(contrast("#173F35", "#B9684B"))).toBe("Kun dekoration");
  });
  test("deep clay used for small text passes AA on ivory", () => {
    expect(contrast("#8F4A31", "#F3EBDD")).toBeGreaterThanOrEqual(4.5);
  });
  test("contrast is symmetric", () => {
    for (const p of PAIRINGS) expect(contrast(p.fg, p.bg)).toBe(contrast(p.bg, p.fg));
  });
});
