import { describe, expect, it } from "vitest";

import {
  EXPLORE_ACTION,
  FOOTER_NAV,
  PRIMARY_NAV,
  SECONDARY_NAV,
} from "./navigation";
import { ROUTES } from "./routes";

const REAL_ROUTES = new Set<string>(Object.values(ROUTES));

describe("navigation configuration", () => {
  it("resolves every primary nav item's href from ROUTES", () => {
    for (const item of PRIMARY_NAV) {
      expect(REAL_ROUTES.has(item.href)).toBe(true);
    }
  });

  it("resolves every secondary nav item's href from ROUTES", () => {
    for (const item of SECONDARY_NAV) {
      expect(REAL_ROUTES.has(item.href)).toBe(true);
    }
  });

  it("resolves the explore action's href from ROUTES", () => {
    expect(REAL_ROUTES.has(EXPLORE_ACTION.href)).toBe(true);
  });

  it("lists every real public route exactly once in the footer nav", () => {
    const footerHrefs = FOOTER_NAV.map((item) => item.href);
    const allRoutesExceptHome = Object.values(ROUTES).filter(
      (route) => route !== ROUTES.home,
    );

    expect(new Set(footerHrefs).size).toBe(footerHrefs.length);
    expect(footerHrefs.sort()).toEqual([...allRoutesExceptHome].sort());
  });

  it("gives every nav item a non-empty label key", () => {
    for (const item of [
      ...PRIMARY_NAV,
      ...SECONDARY_NAV,
      ...FOOTER_NAV,
      EXPLORE_ACTION,
    ]) {
      expect(item.labelKey.length).toBeGreaterThan(0);
    }
  });
});
