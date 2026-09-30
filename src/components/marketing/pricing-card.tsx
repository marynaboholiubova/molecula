import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

interface PricingCardProps {
  name: string;
  purpose: string;
  /** Formatted price string (e.g. "€29"), or `null` for custom pricing. */
  priceDisplay: string | null;
  periodLabel: string;
  customLabel: string;
  features: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

export function PricingCard({
  name,
  purpose,
  priceDisplay,
  periodLabel,
  customLabel,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border p-8",
        highlighted
          ? "border-accent/60 bg-surface-raised shadow-[0_0_0_1px_var(--color-accent)]"
          : "border-border bg-surface",
      )}
    >
      <h3 className="font-display text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{purpose}</p>

      <div className="mt-6 flex items-baseline gap-2">
        {priceDisplay ? (
          <>
            <span className="font-display text-4xl font-semibold">
              {priceDisplay}
            </span>
            <span className="text-sm text-muted-foreground">{periodLabel}</span>
          </>
        ) : (
          <span className="font-display text-4xl font-semibold">
            {customLabel}
          </span>
        )}
      </div>

      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-sm text-muted-foreground"
          >
            <span aria-hidden className="text-accent">
              —
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={cn(
          buttonVariants({
            variant: highlighted ? "primary" : "outline",
            size: "default",
          }),
          "mt-8 w-full",
        )}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
