import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-sm font-medium tracking-[0.28em] text-muted-foreground uppercase",
        className,
      )}
      {...props}
    />
  );
}
