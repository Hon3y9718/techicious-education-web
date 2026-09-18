import Link from 'next/link';
import { ArrowRight, Layers, Target, Trophy } from 'lucide-react';
import { TrackCard } from '@/components/track-card';
import { SectionHeading } from '@/components/section-heading';
import { Chip } from '@/components/chip';
import { whatsappHref } from '@/lib/contact';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-grid">
        <div className="container flex flex-col items-start gap-6 py-20 sm:py-28">
          <span className="text-sm text-muted-foreground">From Techicious, a software company</span>
          <h1 className="max-w-3xl text-balance font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            We build software for a living. Now we&apos;ll teach you how.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Techicious ships web, mobile, and AI products for real clients — that&apos;s the day
            job. These two tracks put you through the same process on the same kind of flagship
            build, so what you learn is what we actually do, not a simulation of it.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/software-engineering"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore Software Engineering
            </Link>
            <Link
              href="/applied-ai-engineering"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Explore Applied AI Engineering
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            <Chip>Taught by engineers who ship</Chip>
            <Chip>Live, project-first cohorts</Chip>
            <Chip>20–25 hrs/week commitment</Chip>
          </div>
        </div>
      </section>

      {/* Why Techicious */}
      <section id="about" className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeading
            title="We're not a school that added a coding course"
            className="mb-0 max-w-none"
          />
          <div className="flex flex-col gap-4 text-muted-foreground">
            <p>
              Most programs are staffed by full-time instructors. Techicious builds production
              software first — client apps, internal platforms, AI systems — and the same
              engineers who do that work wrote this curriculum. You&apos;re not learning a
              syllabus designed to be taught; you&apos;re learning the process we use to ship,
              applied to a flagship build modeled on our own work.
            </p>
            <p>
              Two tracks are open right now: Software Engineering and Applied AI Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="container pb-20">
        <SectionHeading
          title="Two tracks, open for enrollment"
          dek="Start from zero with Software Engineering, or move straight into Applied AI Engineering if you already have backend fundamentals. Additional tracks are in development."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <TrackCard
            trackNumber="01"
            href="/software-engineering"
            name="Software Engineering"
            tagline="Zero to Software Engineer. 6-month job-ready track, with a 12-month Mastery option."
            duration="6–12 mo"
            commitment="20–25 hrs"
            flagship="Build one flagship LMS — from a to-do app to a deployed, cached, search-enabled, horizontally-scalable platform."
            stack={['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'System Design']}
            milestones={[
              { mark: 'M3', label: 'Frontend Developer' },
              { mark: 'M6', label: 'Full-Stack Developer' },
              { mark: 'M9', label: 'System Designer' },
              { mark: 'M12', label: 'Senior-Track Engineer' },
            ]}
          />
          <TrackCard
            trackNumber="02"
            href="/applied-ai-engineering"
            name="Applied AI Engineering"
            tagline="Applied AI Engineer. 6-month job-ready track, with a 3-month Mastery extension."
            duration="6–9 mo"
            commitment="20–25 hrs"
            flagship="Grow one AI assistant — from a single prompt call to a multi-agent, evaluated, guardrailed, production-deployed system."
            stack={['Python', 'LangChain', 'LangGraph', 'CrewAI', 'LlamaIndex', 'Ragas']}
            milestones={[
              { mark: 'M3', label: 'Prompt & RAG Engineer' },
              { mark: 'M6', label: 'Agentic AI Developer' },
              { mark: 'M9', label: 'AI Systems Specialist' },
            ]}
          />
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          Applied AI Engineering is designed for students who&apos;ve completed (or placed out
          of) Months 1–4 of Software Engineering — working knowledge of REST APIs, basic backend,
          and comfort reading someone else&apos;s code.
        </p>
      </section>

      {/* Philosophy */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container py-20">
          <SectionHeading
            title="Depth over breadth, proof over demos"
            dek="The same principles we use to ship client work, built into how we teach."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
              <Layers className="h-6 w-6 text-primary" />
              <h3 className="font-headline text-lg font-bold">One flagship project</h3>
              <p className="text-sm text-muted-foreground">
                Every module adds to the same real application — an LMS in Software Engineering,
                an AI assistant in Applied AI — instead of a fresh throwaway demo each month.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
              <Target className="h-6 w-6 text-primary" />
              <h3 className="font-headline text-lg font-bold">Milestone checkpoints</h3>
              <p className="text-sm text-muted-foreground">
                A named milestone ladder (Frontend Developer, then Full-Stack Developer, then
                System Designer) marks concrete, job-ready checkpoints instead of vague progress.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
              <Trophy className="h-6 w-6 text-primary" />
              <h3 className="font-headline text-lg font-bold">Present and defend</h3>
              <p className="text-sm text-muted-foreground">
                Capstones are argued with evidence — a design doc, an eval scorecard, a security
                review — not just demoed. Prove it works with numbers, not vibes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight">
              Ready to see the full curriculum?
            </h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Every month, project, and milestone is laid out in detail on each track page.
            </p>
          </div>
          <Link
            href={whatsappHref("Hi! I'd like to know more about Techicious Education.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
