import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const t = useTranslations("header");

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <span className="font-display text-xl font-semibold tracking-[0.18em] uppercase">
          {t("brand")}
        </span>

        <nav aria-label="Primary" className="flex items-center gap-3">
          <Button variant="primary" size="sm">
            {t("primaryCta")}
          </Button>
        </nav>
      </div>
    </header>
  );
}
