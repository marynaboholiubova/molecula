import { describe, expect, it } from "vitest";

import {
  EXPLORE_ACTION,
  FOOTER_NAV,
  PRIMARY_NAV,
  SECONDARY_NAV,
} from "@/config/navigation";
import { PRICING_PLANS } from "@/config/pricing";

import messages from "./en.json";

/** Resolves "a.b.c" against a nested object, returning `undefined` if any
 * segment is missing along the way. */
function resolve(path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (value, key) =>
        value && typeof value === "object" && key in value
          ? (value as Record<string, unknown>)[key]
          : undefined,
      messages,
    );
}

describe("en.json — navigation message coverage", () => {
  it("has a translation for every nav item's label key", () => {
    const labelKeys = new Set([
      ...PRIMARY_NAV.map((item) => item.labelKey),
      ...SECONDARY_NAV.map((item) => item.labelKey),
      ...FOOTER_NAV.map((item) => item.labelKey),
      EXPLORE_ACTION.labelKey,
    ]);

    for (const labelKey of labelKeys) {
      const value = resolve(`navigation.${labelKey}`);
      expect(typeof value, `navigation.${labelKey}`).toBe("string");
    }
  });

  it("has brand, openMenu, closeMenu, and mobileMenuLabel strings", () => {
    for (const key of ["brand", "openMenu", "closeMenu", "mobileMenuLabel"]) {
      expect(typeof resolve(`navigation.${key}`), `navigation.${key}`).toBe(
        "string",
      );
    }
  });
});

describe("en.json — pricing message coverage", () => {
  it("has name, purpose, a non-empty features list, and cta copy for every plan", () => {
    for (const plan of PRICING_PLANS) {
      const base = `pricing.plans.${plan.id}`;
      expect(typeof resolve(`${base}.name`), `${base}.name`).toBe("string");
      expect(typeof resolve(`${base}.purpose`), `${base}.purpose`).toBe(
        "string",
      );
      expect(typeof resolve(`${base}.cta`), `${base}.cta`).toBe("string");

      const features = resolve(`${base}.features`);
      expect(Array.isArray(features), `${base}.features`).toBe(true);
      expect((features as unknown[]).length).toBeGreaterThan(0);
    }
  });
});

describe("en.json — every route's page namespace", () => {
  it("has meta.title and meta.description for every content namespace", () => {
    const namespaces = [
      "features",
      "movieProject",
      "studios",
      "useCases",
      "templates",
      "pricing",
      "security",
      "about",
    ];

    for (const namespace of namespaces) {
      expect(
        typeof resolve(`${namespace}.meta.title`),
        `${namespace}.meta.title`,
      ).toBe("string");
      expect(
        typeof resolve(`${namespace}.meta.description`),
        `${namespace}.meta.description`,
      ).toBe("string");
    }
  });
});
