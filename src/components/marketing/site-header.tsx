import { useTranslations } from "next-intl";

import { buttonVariants } from "@/components/ui/button";
import { HeaderSurface } from "@/components/marketing/header-surface";
import { MobileNavigation } from "@/components/marketing/mobile-navigation";
import {
  EXPLORE_ACTION,
  PRIMARY_NAV,
  SECONDARY_NAV,
} from "@/config/navigation";
import { ROUTES } from "@/config/routes";
import { Link } from "@/i18n/navigation";

export function SiteHeader() {
  const t = useTranslations("navigation");

  return (
    <HeaderSurface>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href={ROUTES.home}
          className="font-display text-xl font-semibold tracking-[0.18em] uppercase"
        >
          {t("brand")}
        </Link>

        <nav
          aria-label={t("primaryLabel")}
          className="hidden items-center gap-8 md:flex"
        >
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <span aria-hidden className="h-4 w-px bg-border" />
          {SECONDARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={EXPLORE_ACTION.href}
            className={`${buttonVariants({ variant: "primary", size: "sm" })} hidden md:inline-flex`}
          >
            {t(EXPLORE_ACTION.labelKey)}
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </HeaderSurface>
  );
}
