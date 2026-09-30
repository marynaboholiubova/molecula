import type { ReactNode } from "react";

import { AmbientGlow } from "@/components/marketing/ambient-glow";
import { Eyebrow } from "@/components/marketing/eyebrow";
import type { GoldVariant } from "@/components/marketing/gold-atmosphere";

interface PageHeroProps {
  eyebrow: string;
  heading: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** The gold atmosphere tier behind this hero. Defaults to the lightest
   * tier; Movie Project and Pricing opt into `"featured"`. */
  atmosphere?: "quiet" | "featured";
  /** Which gold composition this hero uses — lets otherwise-identical
   * inner-page heroes relate without looking cloned. */
  variant?: GoldVariant;
}

/** The shared hero pattern for inner pages (Features, Studios, ...) — lighter
 * than the home hero, but sharing its atmospheric background treatment. */
export function PageHero({
  eyebrow,
  heading,
  description,
  children,
  atmosphere = "quiet",
  variant = "wave-bottom",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:px-12">
      <AmbientGlow intensity={atmosphere} variant={variant} />
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
