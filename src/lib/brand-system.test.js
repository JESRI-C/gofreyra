import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const css = readFileSync(join(root, "styles.css"), "utf8");
const rootBlock = css.slice(css.indexOf(":root {"), css.indexOf("@layer base"));
const pointer = (name) => JSON.parse(readFileSync(join(root, "assets/brand", `${name}.svg.asset.json`), "utf8"));

describe("approved Freyra family brand system", () => {
  test("GoFreyra greens are the approved values", () => {
    expect(rootBlock).toContain("--primary: #245A38;");
    expect(rootBlock).toContain("--brand-mid: #69A275;");
    expect(rootBlock).toContain("--brand-pale: #E2EFE4;");
    expect(rootBlock).toContain("--brand-dark: #173D28;");
  });
  test("shared family neutrals are the approved values", () => {
    expect(rootBlock).toContain("--brand-ink: #24272B;");
    expect(rootBlock).toContain("--foreground: #303338;");
    expect(rootBlock).toContain("--background: #FBFAF8;");
    expect(rootBlock).toContain("--brand-sand: #F5F3ED;");
    expect(rootBlock).toContain("--card: #FFFFFF;");
    expect(rootBlock).toContain("--border: #DFE1E4;");
  });
  test("UI radius stays restrained at 4px", () => {
    expect(rootBlock).toContain("--radius: 4px;");
  });
  test("logos point at the exact supplied SVG files", () => {
    expect(pointer("gofreyra-vandret").original_filename).toBe("gofreyra-vandret.svg");
    expect(pointer("gofreyra-ejerlinje").original_filename).toBe("gofreyra-ejerlinje.svg");
    expect(pointer("freyra-group-vandret").original_filename).toBe("freyra-group-vandret.svg");
    expect(pointer("gofreyra-vandret").content_type).toBe("image/svg+xml");
  });
});
