import { ROUTES } from "@/config/routes";

/**
 * A nav item's `labelKey` is looked up in the `navigation` messages
 * namespace (`src/messages/en.json`). Keeping label keys and hrefs here,
 * separate from the components that render them, means the header, mobile
 * menu, and footer can never disagree about what the real routes are.
 */
export interface NavItem {
  labelKey: string;
  href: string;
}

/** Primary desktop/mobile navigation, in display order. */
export const PRIMARY_NAV: readonly NavItem[] = [
  { labelKey: "platform", href: ROUTES.features },
  { labelKey: "movieProject", href: ROUTES.movieProject },
  { labelKey: "studios", href: ROUTES.studios },
  { labelKey: "useCases", href: ROUTES.useCases },
  { labelKey: "pricing", href: ROUTES.pricing },
];

/** Secondary navigation, shown alongside the primary items. */
export const SECONDARY_NAV: readonly NavItem[] = [
  { labelKey: "about", href: ROUTES.about },
];

/** The header/mobile-menu primary action. */
export const EXPLORE_ACTION: NavItem = {
  labelKey: "explore",
  href: ROUTES.features,
};

/** Footer navigation — every real public route, in one place. */
export const FOOTER_NAV: readonly NavItem[] = [
  { labelKey: "features", href: ROUTES.features },
  { labelKey: "movieProject", href: ROUTES.movieProject },
  { labelKey: "studios", href: ROUTES.studios },
  { labelKey: "useCases", href: ROUTES.useCases },
  { labelKey: "templates", href: ROUTES.templates },
  { labelKey: "pricing", href: ROUTES.pricing },
  { labelKey: "security", href: ROUTES.security },
  { labelKey: "about", href: ROUTES.about },
];
