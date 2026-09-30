"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  EXPLORE_ACTION,
  PRIMARY_NAV,
  SECONDARY_NAV,
} from "@/config/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNavigation() {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const close = useCallback(() => setOpen(false), []);

  // Close whenever navigation actually happens. Adjusting state during
  // render (rather than in an Effect) avoids the extra cascading render an
  // Effect-based reset would cause. See https://react.dev/learn/you-might-not-need-an-effect
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const panelNode = panelRef.current;
    const triggerNode = triggerRef.current;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstLink = panelNode?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    firstLink?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      triggerNode?.focus();
    };
  }, [open]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        close();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable =
        panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (!focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [close],
  );

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? t("closeMenu") : t("openMenu")}
        onClick={() => setOpen((value) => !value)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        <span
          aria-hidden
          className={cn(
            "absolute h-px w-5 bg-foreground transition-transform duration-200",
            open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
          )}
        />
        <span
          aria-hidden
          className={cn(
            "absolute h-px w-5 bg-foreground transition-opacity duration-150",
            open && "opacity-0",
          )}
        />
        <span
          aria-hidden
          className={cn(
            "absolute h-px w-5 bg-foreground transition-transform duration-200",
            open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={t("mobileMenuLabel")}
            onKeyDown={handleKeyDown}
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-background px-6 pt-8 pb-12 sm:px-8"
          >
            <nav
              aria-label={t("mobileMenuLabel")}
              className="flex flex-col gap-1"
            >
              {PRIMARY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-border/60 py-4 font-display text-2xl font-semibold"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              {SECONDARY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-border/60 py-4 text-lg text-muted-foreground"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
            </nav>

            <Link
              href={EXPLORE_ACTION.href}
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "mt-8 w-full",
              )}
            >
              {t(EXPLORE_ACTION.labelKey)}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
