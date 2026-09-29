"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface HeroRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Fades and lifts its children into place on mount. Isolated as its own
 * Client Component so the surrounding hero markup stays server-rendered.
 * No-ops instantly when the user prefers reduced motion.
 */
export function HeroReveal({
  children,
  delay = 0,
  className,
}: HeroRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
