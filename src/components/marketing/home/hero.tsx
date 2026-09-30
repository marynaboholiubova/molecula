import { useTranslations } from "next-intl";

import { AmbientGlow } from "@/components/marketing/ambient-glow";
import { Container } from "@/components/marketing/container";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { HeroReveal } from "@/components/marketing/hero-reveal";
import { MoleculeVisual } from "@/components/marketing/molecule-visual";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("home.hero");
  const headline = t.raw("headline") as string[];

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-6 pt-24 pb-20 sm:px-8 sm:pt-32 sm:pb-28 lg:px-12"
    >
      <AmbientGlow intensity="hero" variant="wave-bottom" />

      <Container size="wide">
        <div className="grid items-center gap-16 lg:grid-cols-[3fr_2fr]">
          <div>
            <HeroReveal>
              <Eyebrow>{t("eyebrow")}</Eyebrow>
            </HeroReveal>

            <HeroReveal delay={0.08}>
              <h1 className="mt-6 font-display text-6xl leading-[0.95] font-semibold sm:text-7xl lg:text-8xl">
                {headline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.16}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
                {t("subhead")}
              </p>
            </HeroReveal>

            <HeroReveal delay={0.24}>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href={ROUTES.features}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  {t("primaryCta")}
                </Link>
                <Link
                  href={ROUTES.movieProject}
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  {t("secondaryCta")}
                </Link>
              </div>
            </HeroReveal>
          </div>

          <HeroReveal
            delay={0.2}
            className="mx-auto w-full max-w-sm lg:max-w-none"
          >
            <MoleculeVisual
              ariaLabel={t("visual.ariaLabel")}
              center={t("visual.center")}
              nodes={t.raw("visual.nodes") as string[]}
            />
          </HeroReveal>
        </div>
      </Container>
    </section>
  );
}
