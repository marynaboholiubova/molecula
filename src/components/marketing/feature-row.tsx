import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface FeatureRowProps {
  label?: string;
  title: string;
  description: ReactNode;
  className?: string;
}

/** An asymmetric label/content row — used for use-case breakdowns,
 * security foundation vs. architecture-direction items, and similar
 * structured lists that shouldn't be identical cards. */
export function FeatureRow({
  label,
  title,
  description,
  className,
}: FeatureRowProps) {
  return (
    <div
      className={cn(
        "grid gap-3 border-t border-border/60 py-10 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-8",
        className,
      )}
    >
      {label ? (
        <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          {label}
        </span>
      ) : (
        <span aria-hidden />
      )}
      <div>
        <h3 className="font-display text-xl font-semibold sm:text-2xl">
          {title}
        </h3>
        <div className="mt-2 leading-relaxed text-muted-foreground">
          {description}
        </div>
      </div>
    </div>
  );
}
