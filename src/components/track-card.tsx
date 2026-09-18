import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Chip } from '@/components/chip';
import { MilestoneLadder, type Milestone } from '@/components/milestone-ladder';

export function TrackCard({
  trackNumber,
  href,
  name,
  tagline,
  duration,
  commitment,
  flagship,
  stack,
  milestones,
}: {
  trackNumber: string;
  href: string;
  name: string;
  tagline: string;
  duration: string;
  commitment: string;
  flagship: string;
  stack: string[];
  milestones: Milestone[];
}) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-8">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Track {trackNumber}
        </span>
        <h3 className="font-headline text-2xl font-bold tracking-tight">{name}</h3>
        <p className="text-sm text-muted-foreground">{tagline}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 border-y border-border py-5">
        <div>
          <div className="text-lg font-bold">{duration}</div>
          <div className="text-xs text-muted-foreground">Job-Ready + Mastery</div>
        </div>
        <div>
          <div className="text-lg font-bold">{commitment}</div>
          <div className="text-xs text-muted-foreground">per week</div>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-foreground/90">{flagship}</p>

      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>

      <div>
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Milestone ladder
        </div>
        <MilestoneLadder milestones={milestones} />
      </div>

      <Link
        href={href}
        className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        View full curriculum
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
