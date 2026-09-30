import { useTranslations } from "next-intl";

import { AutoDirector } from "@/components/marketing/home/auto-director";
import { AutoEdit } from "@/components/marketing/home/auto-edit";
import { ConnectedStudios } from "@/components/marketing/home/connected-studios";
import { Continuity } from "@/components/marketing/home/continuity";
import { Hero } from "@/components/marketing/home/hero";
import { MovieProjectTeaser } from "@/components/marketing/home/movie-project-teaser";
import { Positioning } from "@/components/marketing/home/positioning";
import { ProductSystem } from "@/components/marketing/home/product-system";
import { ProjectTypes } from "@/components/marketing/home/project-types";
import { Quality } from "@/components/marketing/home/quality";
import { CallToAction } from "@/components/marketing/call-to-action";
import { ROUTES } from "@/config/routes";

export default function HomePage() {
  const t = useTranslations("home.finalCta");

  return (
    <>
      <Hero />
      <Positioning />
      <ProductSystem />
      <MovieProjectTeaser />
      <ConnectedStudios />
      <Continuity />
      <AutoDirector />
      <AutoEdit />
      <ProjectTypes />
      <Quality />
      <CallToAction
        heading={
          <>
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </>
        }
        primary={{ label: t("primaryCta"), href: ROUTES.features }}
        secondary={{ label: t("secondaryCta"), href: ROUTES.pricing }}
      />
    </>
  );
}
