import { useLocale, useTranslations } from "next-intl";

import { PricingCard } from "@/components/marketing/pricing-card";
import { formatPlanAmount, PRICING_PLANS } from "@/config/pricing";

export function PricingGrid() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {PRICING_PLANS.map((plan) => (
        <PricingCard
          key={plan.id}
          name={t(`plans.${plan.id}.name`)}
          purpose={t(`plans.${plan.id}.purpose`)}
          priceDisplay={formatPlanAmount(plan.price, locale)}
          periodLabel={t("perMonth")}
          customLabel={t("customPrice")}
          features={t.raw(`plans.${plan.id}.features`) as string[]}
          ctaLabel={t(`plans.${plan.id}.cta`)}
          ctaHref={plan.ctaHref}
          highlighted={plan.highlighted}
        />
      ))}
    </div>
  );
}
