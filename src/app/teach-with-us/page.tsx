import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { CONTACT, whatsappHref } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Teach with Us | Techicious Education',
  description: 'Techicious Education is built by working engineers. If you build software for a living, help teach the next cohort.',
};

export default function TeachWithUsPage() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          title="Teach with us"
          dek="This curriculum is written and taught by engineers who ship, not full-time instructors. If that's you, we'd like to talk."
        />
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-foreground/90">
          <p>
            We&apos;re looking for working software engineers who can teach a module, review
            student projects, or run a cohort session, in Software Engineering or Applied AI
            Engineering. You don&apos;t need prior teaching experience; you need to have actually
            built the kind of systems this curriculum covers.
          </p>
          <p>
            Tell us what you work on day to day, which track fits you, and how much time you
            could realistically give a cohort, and we&apos;ll get back to you.
          </p>

          <Link
            href={CONTACT.teachWithUsFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Apply to teach
          </Link>

          <div className="mt-4 flex flex-col gap-3 rounded-lg border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-headline text-base font-bold">Prefer to chat first?</div>
              <p className="mt-1 text-sm text-muted-foreground">
                A short message about your background is enough to start.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:items-end">
              <Link
                href={whatsappHref("Hi! I'd like to teach with Techicious Education.")}
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
        </div>
      </div>
    </section>
  );
}
