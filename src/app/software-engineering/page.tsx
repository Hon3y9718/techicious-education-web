import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { Chip } from '@/components/chip';
import { MilestoneLadder } from '@/components/milestone-ladder';
import { CurriculumTable, type CurriculumColumn, type CurriculumRow } from '@/components/curriculum-table';
import { CONTACT, whatsappHref } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Software Engineering Track | Techicious Education',
  description:
    'Zero to Software Engineer — a 6-month job-ready program with an optional 12-month Mastery extension, built around one flagship LMS application.',
};

function monthLabel(month: string, title: string) {
  return (
    <span className="flex flex-col gap-0.5">
      <span className="font-mono text-xs text-primary">{month}</span>
      <span className="font-semibold text-foreground">{title}</span>
    </span>
  );
}

const phaseColumns: CurriculumColumn[] = [
  { key: 'month', label: 'Month', widthClassName: 'w-40' },
  { key: 'core', label: 'Core topics' },
  { key: 'refinements', label: 'Refinements added' },
  { key: 'projects', label: 'Projects' },
  { key: 'milestone', label: 'Milestone', widthClassName: 'w-56' },
];

const challengeColumns: CurriculumColumn[] = [
  { key: 'month', label: 'Month', widthClassName: 'w-48' },
  { key: 'core', label: 'Core topics' },
  { key: 'refinements', label: 'Refinements added' },
  { key: 'challenge', label: 'Challenge', widthClassName: 'w-64' },
];

const phase1a: CurriculumRow[] = [
  {
    month: monthLabel('Month 1', 'Fundamentals'),
    core: 'Variables, loops, functions, arrays, objects, problem-solving, Git.',
    refinements: 'Reading error stack traces, console debugging workflow, VS Code debugger basics, not just print-debugging.',
    projects: 'Calculator, Quiz App, Student Management System, Expense Tracker.',
    milestone: 'Can write and debug a small program from a blank file.',
  },
  {
    month: monthLabel('Month 2', 'Web Dev'),
    core: 'Semantic HTML, CSS Flexbox/Grid, DOM, Fetch API, async JS.',
    refinements: 'Accessibility basics (semantic tags, alt text, keyboard nav), Chrome DevTools network/performance tabs, a basic Lighthouse audit.',
    projects: 'Portfolio Website, E-Commerce UI, Admin Dashboard, Movie App.',
    milestone: 'Can ship a responsive, accessible static site.',
  },
  {
    month: monthLabel('Month 3', 'React + TS'),
    core: 'Components, state, hooks, routing, Context API, TypeScript fundamentals.',
    refinements: 'React Query / TanStack Query for server state, which separates "UI state" from "server state" early, a common junior-dev confusion. Basic component testing with Vitest + React Testing Library.',
    projects: 'LMS Frontend, E-Commerce App, Analytics Dashboard.',
    milestone: 'Can build a professional, tested frontend application.',
  },
];

const phase1b: CurriculumRow[] = [
  {
    month: monthLabel('Month 4', 'Node.js'),
    core: 'Express, REST APIs, JWT auth, middleware, API design.',
    refinements: 'Input validation with Zod, structured logging (pino/winston), rate limiting on auth routes.',
    projects: 'Authentication API, User Management API, Course Management API.',
    milestone: 'A hardened, documented REST API.',
  },
  {
    month: monthLabel('Month 5', 'PostgreSQL'),
    core: 'SQL, joins, normalization, indexing, transactions.',
    refinements: 'Connection pooling, seed/migration tooling (Prisma or Knex), EXPLAIN ANALYZE reading practice on the LMS’s own slow queries.',
    projects: 'LMS Database, Complete LMS Backend, Progress Tracking System.',
    milestone: 'Can design a normalized schema and diagnose a slow query.',
  },
  {
    month: monthLabel('Month 6', 'Docker + AWS'),
    core: 'Docker, Docker Compose, Nginx, AWS EC2/S3/RDS/IAM, CI/CD.',
    refinements: 'Secrets management (never commit .env), a minimal GitHub Actions pipeline (lint, test, build, deploy), basic uptime/error monitoring (UptimeRobot or free-tier Sentry).',
    projects: 'Deploy the complete LMS, Dockerized Full-Stack App, Cloud Deployment Pipeline.',
    milestone: 'Can build and deploy a complete full-stack application, and know when it’s on fire.',
  },
];

const phase2a: CurriculumRow[] = [
  {
    month: monthLabel('Month 7', 'Software Engineering'),
    core: 'Clean Code, SOLID, design patterns, refactoring, testing, code reviews.',
    refinements: 'A fixed test-coverage bar on the refactor (e.g. 70%+ on core modules) so "refactor" has a checkable definition of done.',
    challenge: 'Refactor the LMS using professional engineering practices.',
  },
  {
    month: monthLabel('Month 8', 'Advanced Backend'),
    core: 'Redis caching, rate limiting, background jobs, RabbitMQ, WebSockets, Elasticsearch.',
    refinements: 'A cache-invalidation strategy write-up (the actual hard part of caching), idempotency keys for background jobs.',
    challenge: 'Add caching, async processing, and search to the LMS.',
  },
  {
    month: monthLabel('Month 9', 'System Design'),
    core: 'Scalability, availability, load balancing, caching, replication, sharding, CAP theorem, CDN, event-driven architecture.',
    refinements: 'A written design doc per case study, not just a diagram, which forces students to argue tradeoffs rather than just draw boxes.',
    challenge: 'Design systems inspired by YouTube, Netflix, Amazon, Uber, WhatsApp.',
  },
];

const phase2b: CurriculumRow[] = [
  {
    month: monthLabel('Month 10', 'High-Scale Engineering'),
    core: 'Distributed systems, microservices, API gateways, distributed caching, database scaling, fault tolerance, monitoring/logging/metrics, high availability, disaster recovery.',
    refinements: 'Prometheus + Grafana as the concrete monitoring stack, plus a deliberate chaos test: kill a service, verify the system degrades gracefully.',
    challenge: 'Design a platform capable of handling 1 million users.',
  },
  {
    month: monthLabel('Month 11', 'Team Workflow'),
    core: 'Agile, Scrum, Jira, Git branching, PRs, code reviews, testing, bug tracking, documentation, team communication.',
    refinements: 'Weekly peer PR review starts in practice back in Month 4; this month formalizes it into sprint ceremonies.',
    challenge: 'Build a production-style product in teams.',
  },
  {
    month: monthLabel('Month 12', 'Mastery + Career'),
    core: 'Advanced system design, architecture discussions, performance optimization, production debugging, security, resume, GitHub portfolio, mock interviews, machine coding, behavioral interviews.',
    refinements: 'An OWASP Top 10 walkthrough against the LMS itself (SQLi, auth bypass, XSS) as the security module’s hands-on project, not just a lecture.',
    challenge: 'Present, defend, and explain the final system like a software engineer.',
  },
];

const whatChanged = [
  'Testing and code review moved earlier. A light version starts Month 3 (component tests, weekly PR reviews) instead of Month 7, so it becomes a habit rather than a Month 7 lecture.',
  'Every month has a named toolchain, not a category. "CI/CD fundamentals" becomes "one working GitHub Actions pipeline"; "monitoring" becomes "Prometheus + Grafana."',
  'System design case studies now require a written design doc, not just a whiteboard diagram, so the skill transfers directly to interview performance.',
  'Security gets a hands-on project: OWASP Top 10 against the students’ own LMS, instead of living only in the Month 12 topic list.',
  'One flagship project (the LMS) threads the entire 12 months instead of a fresh capstone in Month 12.',
  'A weekly rhythm was added inside each month (build, independent build, review) so pacing is explicit rather than left to the instructor.',
];

export default function SoftwareEngineeringPage() {
  return (
    <>
      <section className="border-b border-border bg-grid">
        <div className="container flex flex-col gap-6 py-16 sm:py-20">
          <span className="text-sm text-muted-foreground">Track 01</span>
          <h1 className="max-w-3xl text-balance font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Zero to Software Engineer
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A 6-month job-ready program with an optional 12-month Mastery extension. Project-first:
            one flagship application (an LMS) is built incrementally across every module, so
            students carry one real system from a to-do app to a deployed, cached, search-enabled,
            horizontally-scalable platform.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-4">
            <Fact label="Duration" value="6–12 mo" />
            <Fact label="Commitment" value="20–25 hrs/wk" />
            <Fact label="Audience" value="No experience needed" />
            <Fact label="Format" value="Project-first, one flagship app" />
          </div>

          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'System Design'].map(
              (s) => (
                <Chip key={s}>{s}</Chip>
              )
            )}
          </div>

          <Link
            href={CONTACT.applicationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Apply for this track
          </Link>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading title="Prerequisites" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <PrereqCard title="Hardware" body="Laptop, 8GB+ RAM, stable internet." />
          <PrereqCard title="Math" body="Basic logic and arithmetic only." />
          <PrereqCard title="Time" body="20–25 hrs/week — 3+ months minimum to see Phase 1 through." />
          <PrereqCard title="Mindset" body="Comfortable debugging and researching independently by Month 3." />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Open to BCA, MCA, B.Tech, diploma students, and career switchers — no prior coding
          experience required.
        </p>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16">
          <SectionHeading title="Milestone ladder" />
          <MilestoneLadder
            milestones={[
              { mark: 'M3', label: 'Frontend Developer' },
              { mark: 'M6', label: 'Production Full-Stack Developer' },
              { mark: 'M9', label: 'System Designer' },
              { mark: 'M12', label: 'Job-Ready Senior-Track Engineer' },
            ]}
          />
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          title="Frontend Mastery"
          dek="Months 1 through 3. The goal is to take you from zero to React developer."
        />
        <CurriculumTable columns={phaseColumns} rows={phase1a} />
        <p className="mt-4 text-sm text-muted-foreground">
          <strong className="text-foreground/90">Weekly rhythm inside each month:</strong> weeks
          1–2 are concept + guided build, week 3 is an independent build on a fresh spec, week 4 is
          code review + a refactor pass — introducing review culture early instead of saving it for
          Month 11.
        </p>
      </section>

      <section className="container pb-16">
        <SectionHeading
          title="Backend & Production"
          dek="Months 4 through 6. The goal is to take you from React developer to production developer."
        />
        <CurriculumTable columns={phaseColumns} rows={phase1b} />
        <p className="mt-4 text-sm text-muted-foreground">
          The original brochure lists Docker, AWS, Nginx, and CI/CD together in one month; CI/CD is
          scoped down to one working GitHub Actions pipeline the student can point to, not a
          general DevOps deep-dive — that returns properly in Months 10–11.
        </p>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16">
          <SectionHeading
            title="System Thinking"
            dek="Months 7 through 9. The goal is to take you from application developer to system designer."
          />
          <CurriculumTable columns={challengeColumns} rows={phase2a} />
          <p className="mt-4 text-sm text-muted-foreground">
            System design case studies now each produce a 1–2 page design doc — context,
            constraints, tradeoffs, what you&apos;d change at 10x scale — mirroring what real
            system-design interviews actually ask for.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          title="High-Scale & Career"
          dek="Months 10 through 12. This is where mastery and career readiness come together."
        />
        <CurriculumTable columns={challengeColumns} rows={phase2b} />
        <p className="mt-4 text-sm text-muted-foreground">
          <strong className="text-foreground/90">Capstone:</strong> the LMS built since Month 1 is
          the spine of the final portfolio piece — by graduation it is tested, cached, searchable,
          containerized, monitored, and has survived a security review, which is a stronger story
          than a fresh capstone project built from scratch in Month 12.
        </p>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16">
          <SectionHeading title="What changed from the original brochure, and why" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {whatChanged.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-card p-5 text-sm leading-relaxed text-foreground/90"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Everything else in the original brochure — module order, project list, milestone
            language, phase structure — is preserved as-is. These are additions and sharpenings,
            not a restructure.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight">
              Ready for Software Engineering?
            </h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              No prior experience required — just the time commitment and a working laptop.
            </p>
          </div>
          <Link
            href={whatsappHref("Hi! I have a question about the Software Engineering track.")}
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

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-lg font-semibold sm:text-xl">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

function PrereqCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-1 text-sm font-semibold text-foreground">{title}</div>
      <p className="text-sm text-foreground/90">{body}</p>
    </div>
  );
}
