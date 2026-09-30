/**
 * Central registry of real, implemented public routes (relative to the
 * locale prefix — `next-intl`'s navigation helpers add `/en` etc.
 * automatically). Every nav item, footer link, and cross-page CTA must
 * resolve its `href` from here — never a hand-typed path string — so a
 * route can never silently drift out of sync with what's actually built.
 */
export const ROUTES = {
  home: "/",
  features: "/features",
  movieProject: "/movie-project",
  studios: "/studios",
  useCases: "/use-cases",
  templates: "/templates",
  pricing: "/pricing",
  security: "/security",
  about: "/about",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
