import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';
import { CONTACT, whatsappHref } from '@/lib/contact';

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-secondary/40">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col leading-none">
            <span className="font-headline text-lg font-bold tracking-tight">Techicious</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-primary">
              Education
            </span>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Techicious builds software for a living. These tracks teach the same process we use
            to ship — on a real flagship build, not a classroom simulation.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Tracks
          </span>
          <Link href="/software-engineering" className="text-sm text-foreground/80 hover:text-foreground">
            Software Engineering
          </Link>
          <Link href="/applied-ai-engineering" className="text-sm text-foreground/80 hover:text-foreground">
            Applied AI Engineering
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Get in touch
          </span>
          <p className="text-sm text-foreground/80">
            Interested in a cohort? Reach out and we&apos;ll walk you through prerequisites,
            schedule, and enrollment.
          </p>
          <Link
            href={whatsappHref("Hi! I'd like to know more about Techicious Education.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <MessageCircle className="h-4 w-4" />
            {CONTACT.whatsappDisplay}
          </Link>
          <Link
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Mail className="h-4 w-4" />
            {CONTACT.email}
          </Link>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="container flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Techicious Innovations Pvt. Ltd. — Education Department.</span>
          <span>{CONTACT.website}</span>
        </div>
      </div>
    </footer>
  );
}
