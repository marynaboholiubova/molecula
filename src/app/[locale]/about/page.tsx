import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { CallToAction } from "@/components/marketing/call-to-action";
import { Container } from "@/components/marketing/container";
import { EditorialStatement } from "@/components/marketing/editorial-statement";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/marketing/section";
import { ROUTES } from "@/config/routes";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function AboutPage() {
  const t = useTranslations("about");
  const tCommon = useTranslations("common");
  const lines = t.raw("statement.lines") as string[];

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} heading={t("hero.heading")} />

      <Section>
        <Container size="wide">
          <EditorialStatement
            eyebrow={t("philosophy.eyebrow")}
            statement={t("philosophy.statement")}
            body={<p>{t("philosophy.body")}</p>}
          />
        </Container>
      </Section>

      <Section>
        <Container size="default">
          <Eyebrow>{t("statement.eyebrow")}</Eyebrow>
          <div className="mt-8 space-y-3">
            {lines.map((line) => (
              <p
                key={line}
                className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="mt-12 font-display text-2xl font-semibold tracking-[0.08em] text-accent uppercase sm:text-3xl">
            {t("closing.line")}
          </p>
        </Container>
      </Section>

      <CallToAction
        heading={t("finalCta.heading")}
        description={t("finalCta.description")}
        primary={{ label: tCommon("cta.platform"), href: ROUTES.features }}
        secondary={{
          label: tCommon("cta.movieProject"),
          href: ROUTES.movieProject,
        }}
      />
    </>
  );
}
