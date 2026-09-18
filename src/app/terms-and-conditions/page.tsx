import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { CONTACT } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Techicious Education',
  description: 'The terms that apply to using this website and applying to a Techicious Education track.',
};

export default function TermsAndConditionsPage() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeading title="Terms & Conditions" dek="Last updated 18 September 2026." />
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-foreground/90">
          <p>
            These terms apply when you use this website or submit an application to Techicious
            Education, the training arm of Techicious Innovations Pvt. Ltd. By applying, you
            agree to them.
          </p>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Applications and admissions</h2>
            <p>
              Submitting an application does not guarantee a seat in a cohort. We review
              applications and reach out to shortlisted applicants over WhatsApp or email.
              Admission is at our discretion, and cohort start dates, batch sizes, and
              prerequisites may change between when you apply and when a cohort opens.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Program content</h2>
            <p>
              Track curricula, milestones, and timelines described on this site reflect the
              current program design and may be revised as we improve the tracks. We&apos;ll
              communicate material changes to enrolled students directly.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Intellectual property</h2>
            <p>
              Curriculum materials, project specs, and course content belong to Techicious
              Innovations Pvt. Ltd. They&apos;re provided to enrolled students for personal,
              non-commercial learning use and aren&apos;t to be redistributed or resold.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">No guaranteed outcomes</h2>
            <p>
              We build the tracks around real, job-relevant work, but we can&apos;t guarantee
              employment, salary, or specific career outcomes at the end of a program. Results
              depend on your own effort, prior experience, and the job market.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Communication</h2>
            <p>
              By submitting an application, you agree that we may contact you on the WhatsApp
              number and email address you provide, regarding your application and the program.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Changes to these terms</h2>
            <p>
              If we make meaningful changes to these terms, we&apos;ll update the date at the top
              of this page.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Governing law</h2>
            <p>These terms are governed by the laws of India.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-lg font-bold">Contact</h2>
            <p>
              Questions about these terms can go to{' '}
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
