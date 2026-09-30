import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends ComponentProps<"section"> {
  /** Draws the hairline that separates this section from the one above. */
  border?: boolean;
  /** Use for sections that need less breathing room than the default rhythm. */
  compact?: boolean;
}

export function Section({
  border = true,
  compact = false,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "px-6 sm:px-8 lg:px-12",
        compact ? "py-16 sm:py-20" : "py-24 sm:py-32",
        border && "border-t border-border/60",
        className,
      )}
      {...props}
    />
  );
}
