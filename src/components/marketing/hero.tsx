import { useTranslations } from "next-intl";

import { Button, buttonVariants } from "@/components/ui/button";
import { HeroReveal } from "@/components/marketing/hero-reveal";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-6 pt-24 pb-28 sm:px-8 sm:pt-32 sm:pb-36 lg:px-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklch, var(--color-accent) 14%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(70% 60% at 50% 20%, black, transparent)",
        }}
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <HeroReveal>
          <p className="text-sm font-medium tracking-[0.28em] text-muted-foreground uppercase">
            {t("eyebrow")}
          </p>
        </HeroReveal>

        <HeroReveal delay={0.08}>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold text-balance sm:text-7xl lg:text-8xl">
            {t("headline")}
          </h1>
        </HeroReveal>

        <HeroReveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
            {t("subhead")}
          </p>
        </HeroReveal>

        <HeroReveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg">
              {t("primaryCta")}
            </Button>
            <a
              href="#philosophy"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {t("secondaryCta")}
            </a>
          </div>
        </HeroReveal>
      </div>
    </section>
  );
}
