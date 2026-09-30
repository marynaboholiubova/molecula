import { ROUTES } from "@/config/routes";

/**
 * Structural pricing truth only — no user-facing copy. Plan names,
 * purposes, and feature bullets live in `src/messages/en.json` under the
 * `pricing.plans.<id>` namespace, keyed by the same `id` used here, so
 * copy never has to duplicate (or drift from) these values, and a future
 * billing integration can key off the same `PlanId`s.
 */
export type PlanId = "free" | "creator" | "pro" | "studio" | "enterprise";

export interface FixedPlanPrice {
  amount: number;
  currency: "EUR";
  period: "month";
}

export type PlanPrice = FixedPlanPrice | "custom";

export interface PricingPlan {
  id: PlanId;
  price: PlanPrice;
  /** Visually emphasized as the natural professional tier. */
  highlighted: boolean;
  /** Where this plan's call to action leads — always a real public route. */
  ctaHref: string;
}

export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    id: "free",
    price: { amount: 0, currency: "EUR", period: "month" },
    highlighted: false,
    ctaHref: ROUTES.features,
  },
  {
    id: "creator",
    price: { amount: 29, currency: "EUR", period: "month" },
    highlighted: false,
    ctaHref: ROUTES.features,
  },
  {
    id: "pro",
    price: { amount: 59, currency: "EUR", period: "month" },
    highlighted: true,
    ctaHref: ROUTES.features,
  },
  {
    id: "studio",
    price: { amount: 149, currency: "EUR", period: "month" },
    highlighted: false,
    ctaHref: ROUTES.features,
  },
  {
    id: "enterprise",
    price: "custom",
    highlighted: false,
    ctaHref: ROUTES.security,
  },
];

/**
 * Formats a plan's price as a locale-aware currency string, or `null` for
 * "custom" pricing (Enterprise) — callers render the translated "custom"
 * label themselves rather than this module ever returning English text.
 */
export function formatPlanAmount(
  price: PlanPrice,
  locale: string,
): string | null {
  if (price === "custom") {
    return null;
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount);
}

export function getPricingPlan(id: PlanId): PricingPlan {
  const plan = PRICING_PLANS.find((candidate) => candidate.id === id);

  if (!plan) {
    throw new Error(`Unknown pricing plan id: ${id}`);
  }

  return plan;
}
