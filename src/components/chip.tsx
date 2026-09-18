import { cn } from '@/lib/utils';

export function Chip({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'accent' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs',
        tone === 'accent'
          ? 'border-accent/40 bg-accent/10 text-accent'
          : 'border-border bg-secondary/60 text-secondary-foreground'
      )}
    >
      {children}
    </span>
  );
}
