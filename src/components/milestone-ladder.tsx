export type Milestone = {
  mark: string;
  label: string;
};

export function MilestoneLadder({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="flex w-full items-start">
      {milestones.map((m, i) => (
        <div key={m.mark} className="flex flex-1 items-start last:flex-none">
          <div className="flex w-16 flex-shrink-0 flex-col items-center gap-2 text-center sm:w-24">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-[11px] font-bold text-primary">
              {m.mark}
            </div>
            <span className="text-[11px] leading-tight text-muted-foreground sm:text-xs">
              {m.label}
            </span>
          </div>
          {i < milestones.length - 1 && (
            <div className="mt-[18px] h-0.5 min-w-3 flex-1 bg-border" />
          )}
        </div>
      ))}
    </div>
  );
}
