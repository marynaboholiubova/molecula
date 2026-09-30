import { useTranslations } from "next-intl";

import { Container } from "@/components/marketing/container";
import { ProductionFlow } from "@/components/marketing/production-flow";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { Link } from "@/i18n/navigation";

export function MovieProjectTeaser() {
  const t = useTranslations("home.movieProjectTeaser");
  const steps = t.raw("steps") as string[];

  return (
    <Section>
      <Container size="wide">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} />
          <Link
            href={ROUTES.movieProject}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            {t("cta")}
          </Link>
        </div>

        <ProductionFlow steps={steps} className="mt-14" />
      </Container>
    </Section>
  );
}
