import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border/60 px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.14em] uppercase">
            {t("brand")}
          </p>
          <p className="text-sm text-muted-foreground">{t("tagline")}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          {t("rights", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
