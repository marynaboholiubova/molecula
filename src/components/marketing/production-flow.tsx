import { cn } from "@/lib/utils";

interface ProductionFlowProps {
  steps: readonly string[];
  className?: string;
}

/** A numbered, wrapping production sequence — used for the Movie Project
 * pipeline teaser and the Movie Project page's full flow. */
export function ProductionFlow({ steps, className }: ProductionFlowProps) {
  return (
    <ol className={cn("flex flex-wrap gap-x-2 gap-y-6", className)}>
      {steps.map((step, index) => (
        <li key={step} className="flex items-center">
          <span className="flex items-center gap-3 rounded-full border border-border px-4 py-2 text-sm">
            <span className="font-display text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{step}</span>
          </span>
          {index < steps.length - 1 && (
            <span
              aria-hidden
              className="mx-2 hidden h-px w-6 bg-border-strong sm:block"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
