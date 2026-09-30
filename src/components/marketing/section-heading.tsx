import type { ReactNode } from "react";

import { Eyebrow } from "@/components/marketing/eyebrow";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl",
          eyebrow && "mt-4",
        )}
      >
        {heading}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
