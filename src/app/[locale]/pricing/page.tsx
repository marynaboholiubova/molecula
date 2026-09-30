import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { CallToAction } from "@/components/marketing/call-to-action";
import { Container } from "@/components/marketing/container";
import { PageHero } from "@/components/marketing/page-hero";
import { PricingGrid } from "@/components/marketing/pricing-grid";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ROUTES } from "@/config/routes";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/pricing">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pricing" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function PricingPage() {
  const t = useTranslations("pricing");
  const studios = t.raw("credits.studios") as string[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        heading={t("hero.heading")}
        description={t("hero.description")}
        atmosphere="featured"
        variant="corner-right"
      />

      <Section atmosphere="standard">
        <Container size="wide">
          <SectionHeading
            eyebrow={t("plansHeading.eyebrow")}
            heading={t("plansHeading.heading")}
          />
          <div className="mt-12">
            <PricingGrid />
          </div>
        </Container>
      </Section>

      <Section atmosphere="standard">
        <Container size="default">
          <SectionHeading
            eyebrow={t("credits.eyebrow")}
            heading={t("credits.heading")}
            description={t("credits.description")}
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {studios.map((studio) => (
              <li
                key={studio}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
              >
                {studio}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CallToAction
        heading={t("finalCta.heading")}
        description={t("finalCta.description")}
        primary={{ label: t("plans.free.cta"), href: ROUTES.features }}
        secondary={{ label: t("plans.enterprise.cta"), href: ROUTES.security }}
      />
    </>
  );
}
