interface UseCaseRowProps {
  index: string;
  name: string;
  goal: string;
  workflow: string;
  studios: string;
  deliverables: string;
  labels: {
    goal: string;
    workflow: string;
    studios: string;
    deliverables: string;
  };
}

/** One use case's goal/workflow/studios/deliverables breakdown — the
 * structured-fact counterpart to `FeatureRow`'s single description. */
export function UseCaseRow({
  index,
  name,
  goal,
  workflow,
  studios,
  deliverables,
  labels,
}: UseCaseRowProps) {
  return (
    <div className="grid gap-6 border-t border-border/60 py-10 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-8">
      <div>
        <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          {index}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
          {name}
        </h3>
      </div>

      <dl className="grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            {labels.goal}
          </dt>
          <dd className="mt-1 leading-relaxed">{goal}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            {labels.workflow}
          </dt>
          <dd className="mt-1 leading-relaxed">{workflow}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            {labels.studios}
          </dt>
          <dd className="mt-1 leading-relaxed">{studios}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            {labels.deliverables}
          </dt>
          <dd className="mt-1 leading-relaxed">{deliverables}</dd>
        </div>
      </dl>
    </div>
  );
}
