import { describe, expect, it } from "vitest";

import { getLocaleDirection, isRtlLocale } from "./locale-direction";

describe("getLocaleDirection", () => {
  it("returns ltr for the active English locale", () => {
    expect(getLocaleDirection("en")).toBe("ltr");
  });

  it("returns rtl for planned right-to-left languages", () => {
    expect(getLocaleDirection("ar")).toBe("rtl");
    expect(getLocaleDirection("fa")).toBe("rtl");
    expect(getLocaleDirection("he")).toBe("rtl");
    expect(getLocaleDirection("ur")).toBe("rtl");
  });

  it("returns ltr for a locale not present in the catalog", () => {
    expect(getLocaleDirection("xx-not-real")).toBe("ltr");
  });
});

describe("isRtlLocale", () => {
  it("mirrors getLocaleDirection as a boolean", () => {
    expect(isRtlLocale("ar")).toBe(true);
    expect(isRtlLocale("en")).toBe(false);
  });
});
