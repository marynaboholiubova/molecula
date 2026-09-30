"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Isolated Client Component boundary: tracks whether the page has scrolled
 * past the top so the header can go from transparent/quiet to a separated
 * surface. Deliberately minimal — one boolean, one passive listener — so
 * `SiteHeader` itself (brand, nav, translations) stays a Server Component.
 */
export function HeaderSurface({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="sticky top-0 z-50 border-b border-transparent bg-transparent transition-colors duration-300 data-[scrolled=true]:border-border/60 data-[scrolled=true]:bg-background/80 data-[scrolled=true]:backdrop-blur-md"
    >
      {children}
    </header>
  );
}
