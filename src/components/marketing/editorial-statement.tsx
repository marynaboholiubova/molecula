import type { ReactNode } from "react";

import { Eyebrow } from "@/components/marketing/eyebrow";
import { cn } from "@/lib/utils";

interface EditorialStatementProps {
  eyebrow?: string;
  statement: ReactNode;
  body?: ReactNode;
  className?: string;
}

/** A large serif statement paired with a short supporting body — the
 * asymmetric "editorial moment" pattern used between production sections. */
export function EditorialStatement({
  eyebrow,
  statement,
  body,
  className,
}: EditorialStatementProps) {
  return (
    <div
      className={cn("grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16", className)}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : <span aria-hidden />}
      <div className="max-w-3xl">
        <p className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl">
          {statement}
        </p>
        {body && (
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            {body}
          </div>
        )}
      </div>
    </div>
  );
}
