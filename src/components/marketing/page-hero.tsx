import type { ReactNode } from "react";

import { AmbientGlow } from "@/components/marketing/ambient-glow";
import { Eyebrow } from "@/components/marketing/eyebrow";

interface PageHeroProps {
  eyebrow: string;
  heading: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

/** The shared hero pattern for inner pages (Features, Studios, ...) — lighter
 * than the home hero, but sharing its atmospheric background treatment. */
export function PageHero({
  eyebrow,
  heading,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:px-12">
      <AmbientGlow />
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-balance sm:text-6xl lg:text-7xl">
          {heading}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
            {description}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
