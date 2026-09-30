import type { ComponentProps } from "react";

import {
  GoldAtmosphere,
  type GoldVariant,
} from "@/components/marketing/gold-atmosphere";
import { cn } from "@/lib/utils";

interface SectionProps extends ComponentProps<"section"> {
  /** Draws the hairline that separates this section from the one above. */
  border?: boolean;
  /** Use for sections that need less breathing room than the default rhythm. */
  compact?: boolean;
  /** The gold atmosphere tier behind this section's content. Every
   * ordinary content section gets the quiet tier by default, so the gold
   * identity reaches the whole site, not just hero/CTA moments; pass
   * `"standard"` for a flagship page's secondary sections, or `"none"` to
   * opt out entirely. */
  atmosphere?: "quiet" | "standard" | "none";
  /** Which gold composition this section uses. Sections repeating down a
   * page get automatic variety from CSS (see globals.css); pass this only
   * to deliberately override that. */
  variant?: GoldVariant;
}

export function Section({
  border = true,
  compact = false,
  atmosphere = "quiet",
  variant,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden px-6 sm:px-8 lg:px-12",
        compact ? "py-16 sm:py-20" : "py-24 sm:py-32",
        border && "border-t border-border/60",
        className,
      )}
      {...props}
    >
      {atmosphere !== "none" && (
        <GoldAtmosphere tier={atmosphere} variant={variant} />
      )}
      {children}
    </section>
  );
}
