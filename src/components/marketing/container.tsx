import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const SIZES = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

interface ContainerProps extends ComponentProps<"div"> {
  size?: keyof typeof SIZES;
}

export function Container({
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        SIZES[size],
        className,
      )}
      {...props}
    />
  );
}
