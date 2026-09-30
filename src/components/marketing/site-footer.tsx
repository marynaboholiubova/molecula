import { useTranslations } from "next-intl";

import { Container } from "@/components/marketing/container";
import { FOOTER_NAV } from "@/config/navigation";
import { ROUTES } from "@/config/routes";
import { Link } from "@/i18n/navigation";

export function SiteFooter() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navigation");

  return (
    <footer className="border-t border-border/60">
      <Container className="py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Link
              href={ROUTES.home}
              className="font-display text-lg font-semibold tracking-[0.14em] uppercase"
            >
              {tNav("brand")}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("statement")}
            </p>
          </div>

          <nav aria-label={t("navigationLabel")}>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-4">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {tNav(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">{t("tagline")}</p>
          <p className="text-sm text-muted-foreground">
            {t("rights", { year: new Date().getFullYear() })}
          </p>
        </div>
      </Container>
    </footer>
  );
}
