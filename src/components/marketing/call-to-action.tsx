import type { ReactNode } from "react";

import { AmbientGlow } from "@/components/marketing/ambient-glow";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

interface CtaAction {
  label: string;
  href: string;
}

interface CallToActionProps {
  eyebrow?: string;
  heading: ReactNode;
  description?: ReactNode;
  primary: CtaAction;
  secondary?: CtaAction;
}

export function CallToAction({
  eyebrow,
  heading,
  description,
  primary,
  secondary,
}: CallToActionProps) {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/60 px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <AmbientGlow intensity="featured" />
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-balance sm:text-5xl">
          {heading}
        </h2>
        {description && (
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {description}
          </p>
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primary.href}
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
