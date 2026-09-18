import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { CONTACT } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Privacy Policy | Techicious Education',
  description: 'How Techicious Education collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeading title="Privacy Policy" dek="Last updated 18 September 2026." />
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-foreground/90">
          <p>
            This policy explains what information Techicious Education (a part of Techicious
            Innovations Pvt. Ltd.) collects when you use this website or apply to a track, and
            how that information is used.
          </p>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Information we collect</h2>
            <p>
              When you submit an application, we collect the information you provide directly:
              your name, email address, WhatsApp number, the track you&apos;re interested in,
              your background, and your answers to the application questions. If you message us
              on WhatsApp or email, we receive whatever you send us there.
            </p>
            <p>
              This site does not run analytics or advertising trackers, and does not use tracking
              cookies. Your browser&apos;s local storage is used only to remember your light/dark
              theme preference.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">How we use it</h2>
            <p>
              We use application information to review and respond to your application, to
              contact you about admissions, cohort scheduling, and enrollment, and to answer
              questions you send us directly. We don&apos;t sell or rent your information to
              third parties.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Where it&apos;s stored</h2>
            <p>
              Applications are collected through a Google Form and stored in a Google Sheet
              accessible only to the Techicious Education team. Direct messages are stored in
              WhatsApp and email, subject to those platforms&apos; own privacy terms.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">How long we keep it</h2>
            <p>
              We retain application data for as long as it&apos;s useful for admissions and
              program communication, and delete or anonymize it on request.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Your rights</h2>
            <p>
              You can ask us what information we hold about you, ask us to correct it, or ask us
              to delete it, at any time, by emailing{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
                {CONTACT.email}
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Changes to this policy</h2>
            <p>
              If we make meaningful changes to how we handle your information, we&apos;ll update
              the date at the top of this page.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Contact</h2>
            <p>
              Questions about this policy can go to{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
