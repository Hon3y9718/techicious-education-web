import { cn } from '@/lib/utils';

export function SectionHeading({
  title,
  dek,
  className,
}: {
  title: string;
  dek?: string;
  className?: string;
}) {
  return (
    <div className={cn('mb-10 flex max-w-2xl flex-col gap-3', className)}>
      <h2 className="text-balance font-headline text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {dek && <p className="text-muted-foreground">{dek}</p>}
    </div>
  );
}
