import { cn } from '@/lib/utils';

export function Chip({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'accent' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        tone === 'accent'
          ? 'border-primary/30 bg-primary/10 text-primary'
          : 'border-border bg-secondary/60 text-secondary-foreground'
      )}
    >
      {children}
    </span>
  );
}
