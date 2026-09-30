import { describe, expect, it } from "vitest";

import {
  formatPlanAmount,
  getPricingPlan,
  PRICING_PLANS,
  type PlanId,
} from "./pricing";

describe("PRICING_PLANS", () => {
  it("defines exactly the five required plan ids, in order", () => {
    const ids = PRICING_PLANS.map((plan) => plan.id);
    expect(ids).toEqual(["free", "creator", "pro", "studio", "enterprise"]);
  });

  it("prices free, creator, pro, and studio as fixed monthly EUR amounts", () => {
    const expected: Record<Exclude<PlanId, "enterprise">, number> = {
      free: 0,
      creator: 29,
      pro: 59,
      studio: 149,
    };

    for (const [id, amount] of Object.entries(expected)) {
      const plan = getPricingPlan(id as PlanId);
      expect(plan.price).toEqual({ amount, currency: "EUR", period: "month" });
    }
  });

  it("prices enterprise as custom", () => {
    expect(getPricingPlan("enterprise").price).toBe("custom");
  });

  it("marks exactly one plan as highlighted", () => {
    const highlighted = PRICING_PLANS.filter((plan) => plan.highlighted);
    expect(highlighted).toHaveLength(1);
    expect(highlighted[0]?.id).toBe("pro");
  });

  it("points every plan's CTA at a real route (starting with '/')", () => {
    for (const plan of PRICING_PLANS) {
      expect(plan.ctaHref.startsWith("/")).toBe(true);
    }
  });
});

describe("getPricingPlan", () => {
  it("throws for an id outside the known plan set", () => {
    // @ts-expect-error deliberately invalid id
    expect(() => getPricingPlan("unknown")).toThrow();
  });
});

describe("formatPlanAmount", () => {
  it("formats a fixed price as locale-aware EUR currency", () => {
    const formatted = formatPlanAmount(
      { amount: 29, currency: "EUR", period: "month" },
      "en",
    );
    expect(formatted).toContain("29");
    expect(formatted).toContain("€");
  });

  it("returns null for custom pricing", () => {
    expect(formatPlanAmount("custom", "en")).toBeNull();
  });
});
