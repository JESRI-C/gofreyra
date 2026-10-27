import { describe, expect, test } from "bun:test";
import { contactErrorKey } from "../i18n/contact-schema";
import { COPY } from "../i18n/pages/kontakt";

const ok = { name: "A", email: "a@example.com", company: "", subject: "", message: "Hej" };

describe("contact form validation (no network)", () => {
  test("each rule returns its own error key", () => {
    expect(contactErrorKey(ok)).toBeNull();
    expect(contactErrorKey({ ...ok, name: " " })).toBe("nameRequired");
    expect(contactErrorKey({ ...ok, name: "x".repeat(121) })).toBe("nameTooLong");
    expect(contactErrorKey({ ...ok, email: "nope" })).toBe("emailInvalid");
    expect(contactErrorKey({ ...ok, email: `${"a".repeat(195)}@ex.dk` })).toBe("emailTooLong");
    expect(contactErrorKey({ ...ok, company: "x".repeat(161) })).toBe("companyTooLong");
    expect(contactErrorKey({ ...ok, subject: "x".repeat(201) })).toBe("subjectTooLong");
    expect(contactErrorKey({ ...ok, message: "" })).toBe("messageRequired");
    expect(contactErrorKey({ ...ok, message: "x".repeat(2001) })).toBe("messageTooLong");
  });
  test("every error key has distinct text in da, en and de", () => {
    for (const key of Object.keys(COPY.da.validation)) {
      const texts = ["da", "en", "de"].map((l) => COPY[l].validation[key]);
      expect(texts.every((t) => typeof t === "string" && t.length > 0)).toBe(true);
      expect(new Set(texts).size).toBe(3);
    }
  });
});
