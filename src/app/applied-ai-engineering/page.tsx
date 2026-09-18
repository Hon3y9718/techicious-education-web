import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Chip } from '@/components/chip';
import { MilestoneLadder } from '@/components/milestone-ladder';
import { CurriculumTable, type CurriculumColumn, type CurriculumRow } from '@/components/curriculum-table';
import { CONTACT, whatsappHref } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Applied AI Engineering Track | Techicious Education',
  description:
    'Applied AI Engineer — a 6-month job-ready program with an optional 3-month Mastery extension: LLM foundations, RAG, agents, multi-agent systems, evaluation, and guardrails.',
};

const phase12Columns: CurriculumColumn[] = [
  { key: 'month', label: 'Month', widthClassName: 'w-48' },
  { key: 'core', label: 'Core curriculum' },
  { key: 'projects', label: 'Projects' },
  { key: 'milestone', label: 'Milestone', widthClassName: 'w-64' },
];

const phase3Columns: CurriculumColumn[] = [
  { key: 'month', label: 'Month', widthClassName: 'w-64' },
  { key: 'core', label: 'Core curriculum' },
  { key: 'challenge', label: 'Challenge', widthClassName: 'w-64' },
];

const phase1: CurriculumRow[] = [
  {
    month: 'M1 — LLM Foundations',
    core: 'How transformers/LLMs generate text (tokens, context windows, temperature/top-p); calling LLM APIs (OpenAI, Anthropic, open-source via Ollama); streaming responses; function/tool calling basics; structured output (JSON mode, Pydantic schemas); cost and latency tradeoffs across models.',
    projects: 'CLI chatbot, structured-data extractor from unstructured text, a streaming Q&A API.',
    milestone: 'Can call an LLM API correctly, reliably, and cheaply.',
  },
  {
    month: 'M2 — Prompt Engineering, Embeddings & Vector Search',
    core: 'Prompt patterns (few-shot, chain-of-thought, ReAct), system-prompt design, prompt-injection basics; embeddings and cosine similarity; vector databases (Pinecone, Qdrant, pgvector); chunking strategies; hybrid search (keyword + vector).',
    projects: 'Semantic search over a document set, a "chat with your PDF" app, a prompt-injection red-team exercise on their own app.',
    milestone: 'Understands why naive prompting breaks at scale and how retrieval fixes it.',
  },
  {
    month: 'M3 — RAG Systems In-Depth',
    core: 'Full RAG pipeline: ingestion, chunking, embedding, indexing, retrieval, reranking (cross-encoders), context assembly, citation/grounding; query transformation (HyDE, query rewriting, multi-query); multi-document and multi-format sources; RAG failure modes (lost-in-the-middle, retrieval gaps, stale indexes).',
    projects: 'A production-grade RAG assistant over a real document corpus, with citations and a re-indexing pipeline.',
    milestone: '"I can build a RAG system that retrieves the right context and tells you where it came from."',
  },
];

const phase2: CurriculumRow[] = [
  {
    month: 'M4 — AI Agents & Tool Use',
    core: 'Agent loop (plan, act, observe); function/tool calling in depth (schema design, parallel tool calls, error handling); ReAct and Plan-and-Execute patterns; memory (short-term/conversation, long-term/vector-backed); LangGraph, or a hand-rolled agent loop first.',
    projects: 'A research agent that searches, reads, and summarizes with citations; a task-automation agent with 3+ real tools.',
    milestone: 'Can build an agent that reliably picks and uses the right tool.',
  },
  {
    month: 'M5 — Multi-Agent Systems & Orchestration',
    core: 'Multi-agent patterns: supervisor/worker, hierarchical, peer-to-peer; agent communication protocols; orchestration frameworks (LangGraph, CrewAI, or AutoGen); shared vs. isolated state; handling agent disagreement and infinite loops; cost/latency of multi-agent systems.',
    projects: 'A multi-agent customer-support system (router + specialists + escalation); a research team of agents (planner, searcher, writer, critic).',
    milestone: 'Can design and debug a multi-agent system, and explain when NOT to use one.',
  },
  {
    month: 'M6 — Evaluation, Guardrails & Deployment',
    core: 'Eval frameworks (Ragas, DeepEval, custom harnesses); eval metrics for RAG (faithfulness, answer relevance, context precision/recall) and agents (task completion, tool-call accuracy); guardrails (input validation, output filtering, PII redaction, jailbreak defenses); human-in-the-loop review; deploying LLM apps (FastAPI, streaming, rate limiting, cost monitoring, caching).',
    projects: 'A full eval suite run against the flagship app with a scorecard; guardrails stress-tested with adversarial prompts; deployment to a cloud host with monitoring.',
    milestone: '"I can build it, evaluate it, guard it, and ship it — and prove it works with numbers, not vibes."',
  },
];

const phase3: CurriculumRow[] = [
  {
    month: 'M7 — Fine-Tuning & Model Customization',
    core: 'When to fine-tune vs. RAG vs. prompt engineering; supervised fine-tuning (LoRA/QLoRA on open-weight models); dataset curation and synthetic data generation; RLHF/DPO at a conceptual level; evaluating a fine-tuned model against the base model.',
    challenge: 'Fine-tune a small open-weight model on a domain-specific task and benchmark it against prompting alone.',
  },
  {
    month: 'M8 — Advanced RAG & Agentic Architectures at Scale',
    core: 'Agentic RAG (agents that decide when/what to retrieve); GraphRAG and knowledge-graph-backed retrieval; long-context vs. RAG tradeoffs; multi-tenant RAG (isolating customer data); RAG over structured data (SQL agents, text-to-SQL).',
    challenge: 'Rebuild the flagship RAG pipeline as agentic and multi-tenant, with a text-to-SQL fallback for structured queries.',
  },
  {
    month: 'M9 — Production AI Systems & Career',
    core: 'Observability for LLM apps (tracing with LangSmith/Langfuse, token-cost dashboards); A/B testing prompts and models in production; incident response for AI systems (hallucination reports, cost spikes); portfolio and interview prep specific to AI engineering roles.',
    challenge: 'Present a full observability + cost dashboard for the flagship app, plus a mock AI-systems-design interview.',
  },
];

const ragDeepDive = [
  {
    heading: 'Ingestion & chunking',
    items: [
      'Loaders per format: PDF (text + layout-aware), HTML, Markdown, DOCX, CSV/tables, images (OCR).',
      'Chunking strategies: fixed-size with overlap, recursive character splitting, semantic chunking, sentence-window chunking.',
      'Metadata enrichment: source, section headers, timestamps — for filtering and citation.',
    ],
  },
  {
    heading: 'Embedding & indexing',
    items: [
      'Choosing an embedding model (dimensionality, domain fit, cost).',
      'Vector index types: flat, HNSW, IVF — tradeoffs in recall vs. speed.',
      'Vector DB options: Pinecone, Qdrant, Weaviate, pgvector — managed vs. self-hosted.',
    ],
  },
  {
    heading: 'Retrieval',
    items: [
      'Dense (vector), sparse (BM25/keyword), and hybrid retrieval.',
      'Query transformation: HyDE, multi-query expansion, query rewriting for conversational context.',
      'Metadata filtering (date ranges, source type, permissions).',
    ],
  },
  {
    heading: 'Reranking & context assembly',
    items: [
      'Cross-encoder reranking — why bi-encoder retrieval alone isn’t enough.',
      'Context window budgeting: how many chunks, in what order (lost-in-the-middle mitigation).',
      'Citation and source attribution back to the original document.',
    ],
  },
  {
    heading: 'Failure modes & fixes',
    items: [
      'Retrieval gaps — the answer exists but wasn’t retrieved — diagnosed with retrieval-only eval.',
      'Hallucination despite retrieval — the model ignores context — diagnosed with faithfulness eval.',
      'Stale indexes — incremental re-indexing strategies.',
      'Multi-hop questions that need synthesis across chunks.',
    ],
  },
];

const agentsDeepDive = [
  {
    heading: 'Single-agent foundations',
    items: [
      'The agent loop: plan, act, observe, repeat, and when to stop.',
      'Tool/function calling: schema design, parallel vs. sequential calls, handling tool errors and retries.',
      'Reasoning patterns: ReAct, Plan-and-Execute, reflection/self-critique loops.',
      'Memory: short-term (conversation buffer), long-term (vector-backed), working memory/scratchpad.',
      'Building an agent loop by hand before using a framework, so the abstractions aren’t magic.',
    ],
  },
  {
    heading: 'Frameworks',
    items: [
      'LangGraph — graph-based agent orchestration, the primary framework taught.',
      'CrewAI — role-based multi-agent, survey-level.',
      'AutoGen — conversational multi-agent, survey-level.',
      'Choosing a framework on debuggability and state management, not just feature lists.',
    ],
  },
  {
    heading: 'Multi-agent patterns',
    items: [
      'Supervisor/worker: one router agent delegates to specialist agents.',
      'Hierarchical: supervisors of supervisors for complex workflows.',
      'Peer-to-peer: agents that negotiate or hand off directly.',
      'Shared vs. isolated state — why leaking full context to every agent is expensive and error-prone.',
    ],
  },
  {
    heading: 'Failure modes & operations',
    items: [
      'Infinite loops and circular hand-offs — timeout and max-turn guards.',
      'Agent disagreement — voting, arbitration agent, human escalation.',
      'Cost and latency — multi-agent systems multiply token spend fast.',
      'Debugging multi-agent traces — why observability matters so much for agents specifically.',
    ],
  },
];

const evalDeepDive = [
  {
    heading: 'Evaluation frameworks',
    items: [
      'Ragas, DeepEval, promptfoo — framework vs. custom harness.',
      'LLM-as-judge patterns — using a stronger model to score outputs, and the pitfalls (judge bias, cost, drift).',
      'Golden datasets — a labeled eval set from real user queries, versioned like code.',
    ],
  },
  {
    heading: 'RAG-specific metrics',
    items: [
      'Faithfulness — does the answer stick to the retrieved context.',
      'Answer relevance — does the answer address the question.',
      'Context precision/recall — did retrieval surface the right, and only the right, chunks.',
      'Retrieval-only eval vs. end-to-end eval — isolating where a failure actually happened.',
    ],
  },
  {
    heading: 'Agent-specific metrics',
    items: [
      'Task completion rate.',
      'Tool-call accuracy (right tool, right arguments).',
      'Trajectory evaluation — a sane path, not just a correct answer.',
      'Turn/step efficiency — fewer wasted loops is itself a quality signal.',
    ],
  },
  {
    heading: 'Guardrails',
    items: [
      'Input guardrails: schema validation, prompt-injection detection, PII detection.',
      'Output guardrails: PII redaction, toxicity/safety filtering, format validation, fact-checking.',
      'Jailbreak defenses: system-prompt hardening, delimiter strategies, dedicated guardrail models.',
      'Human-in-the-loop: confidence thresholds routing low-confidence outputs to a reviewer.',
    ],
  },
];

export default function AppliedAiEngineeringPage() {
  return (
    <>
      <section className="border-b border-border bg-grid">
        <div className="container flex flex-col gap-6 py-16 sm:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Track 02 · Applied AI Engineering
          </span>
          <h1 className="max-w-3xl text-balance font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Applied AI Engineer
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A 6-month job-ready program with an optional 3-month Mastery extension (Months 7–9).
            One flagship application is built across the program: an AI-powered support/research
            assistant that grows from a single prompt call to a multi-agent, evaluated,
            guardrailed, production-deployed system.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-4">
            <Fact label="Duration" value="6–9 mo" />
            <Fact label="Commitment" value="20–25 hrs/wk" />
            <Fact label="Language" value="Python-first" />
            <Fact label="Format" value="One flagship AI assistant" />
          </div>

          <div className="flex flex-wrap gap-2">
            {['Python', 'LangChain', 'LangGraph', 'CrewAI', 'LlamaIndex', 'Ragas', 'DSPy'].map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>

          <Link
            href={CONTACT.applicationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Apply for this track
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading eyebrow="Who it's for" title="Prerequisites" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <PrereqCard
            title="Programming"
            body="Comfortable with Python fundamentals (functions, classes, async/await) — or willing to pick it up in Week 1."
          />
          <PrereqCard title="Backend basics" body="REST APIs, JSON, environment variables, basic Docker." />
          <PrereqCard
            title="Math"
            body="No linear algebra required — this is applied engineering, not model training. Fine-tuning math is covered when it comes up in Month 7."
          />
          <PrereqCard
            title="Accounts needed"
            body="An LLM API key (OpenAI, Anthropic, or a free-tier alternative), a vector DB account (Pinecone/Qdrant free tier)."
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Designed for students who have completed (or placed out of) Months 1–4 of the Software
          Engineering track — working knowledge of REST APIs, basic backend, and comfort reading
          someone else&apos;s code.
        </p>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16">
          <SectionHeading eyebrow="The path" title="Milestone ladder" />
          <MilestoneLadder
            milestones={[
              { mark: 'M3', label: 'Prompt & RAG Engineer' },
              { mark: 'M6', label: 'Agentic AI Developer' },
              { mark: 'M9', label: 'AI Systems Specialist' },
            ]}
          />
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading
          eyebrow="Phase 1 · Months 1–3"
          title="Foundations, Prompting & RAG"
          dek="Goal: zero to RAG Engineer."
        />
        <CurriculumTable columns={phase12Columns} rows={phase1} />
        <p className="mt-4 text-sm text-muted-foreground">
          <strong className="text-foreground/90">Design note:</strong> RAG gets its own full month
          (M3) rather than being folded into general &quot;AI basics&quot; — it&apos;s the single
          most commonly shipped AI feature in production, and the one with the most subtle failure
          modes.
        </p>
      </section>

      <section className="container pb-16">
        <SectionHeading
          eyebrow="Phase 2 · Months 4–6"
          title="Agents, Multi-Agent Systems & Eval"
          dek="Goal: RAG Engineer to Agentic AI Developer."
        />
        <CurriculumTable columns={phase12Columns} rows={phase2} />
        <p className="mt-4 text-sm text-muted-foreground">
          <strong className="text-foreground/90">Capstone (end of Month 6):</strong> the flagship
          assistant is now multi-agent, retrieval-grounded, evaluated against a benchmark set,
          guarded against common attacks, and deployed — the job-ready checkpoint.
        </p>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16">
          <SectionHeading
            eyebrow="Phase 3 · Months 7–9 (optional)"
            title="Mastery Specialization"
            dek="Goal: Agentic AI Developer to AI Systems Specialist."
          />
          <CurriculumTable columns={phase3Columns} rows={phase3} />
          <p className="mt-4 text-sm text-muted-foreground">
            Mirrors the Software Engineering track&apos;s 12-month Mastery extension — for students
            who want to specialize beyond &quot;can ship an AI feature&quot; into &quot;can own AI
            infrastructure and make build/fine-tune/buy decisions.&quot;
          </p>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading eyebrow="Instructor reference" title="Deep dive: RAG architecture" dek="Taught across M3 (core) and M8 (agentic/at-scale)." />
        <DeepDiveGrid groups={ragDeepDive} />
      </section>

      <section className="container pb-16">
        <SectionHeading eyebrow="Instructor reference" title="Deep dive: agents & multi-agent systems" dek="Taught across M4–M5 (core) and M8 (at-scale)." />
        <DeepDiveGrid groups={agentsDeepDive} />
        <p className="mt-4 text-sm text-muted-foreground">
          <strong className="text-foreground/90">When NOT to use multi-agent:</strong> a running
          theme through M5 — many problems that look like they need multiple agents are better
          served by one agent with more tools, or a plain pipeline with no agent at all.
        </p>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16">
          <SectionHeading eyebrow="Instructor reference" title="Deep dive: evaluation & guardrails" dek="Taught in M6 (core), with observability extending into M9." />
          <DeepDiveGrid groups={evalDeepDive} />
          <p className="mt-4 text-sm text-muted-foreground">
            <strong className="text-foreground/90">Red-teaming:</strong> students red-team each
            other&apos;s flagship apps — adversarial prompts, injection attempts, jailbreak tries —
            then patch what breaks, and build a lightweight regression suite so a guardrail fix
            doesn&apos;t silently break next month.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <SectionHeading eyebrow="Outcomes" title="Capstone projects & career outcomes" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="font-headline text-lg font-bold">Capstone options at Month 6</h3>
            <ul className="flex flex-col gap-3 text-sm text-foreground/90">
              <li className="rounded-lg border border-border bg-card p-4">
                AI research/support assistant with citations (RAG-heavy).
              </li>
              <li className="rounded-lg border border-border bg-card p-4">
                Multi-agent workflow automation tool (agent-heavy).
              </li>
              <li className="rounded-lg border border-border bg-card p-4">
                Domain-specific assistant with a custom eval suite and guardrails (eval/safety-heavy).
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-headline text-lg font-bold">Career prep</h3>
            <ul className="flex flex-col gap-3 text-sm text-foreground/90">
              <li className="rounded-lg border border-border bg-card p-4">
                Portfolio: GitHub repo with architecture diagram, eval scorecard, and a short demo
                video per project.
              </li>
              <li className="rounded-lg border border-border bg-card p-4">
                Resume framing specific to AI engineering roles (RAG engineer, AI/ML engineer,
                applied AI engineer, agent developer).
              </li>
              <li className="rounded-lg border border-border bg-card p-4">
                Mock interviews: AI system design, take-home-style challenges, and behavioral
                rounds.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Target roles at completion
          </div>
          <div className="flex flex-wrap gap-2">
            {['RAG / AI Engineer', 'Applied AI Engineer', 'Agent Developer', 'AI Product Engineer'].map(
              (role) => (
                <Chip key={role} tone="accent">
                  {role}
                </Chip>
              )
            )}
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <div className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight">
              Ready for Applied AI Engineering?
            </h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Already comfortable with REST APIs and basic backend? This track picks up right
              where those skills leave off.
            </p>
          </div>
          <Link
            href={whatsappHref("Hi! I have a question about the Applied AI Engineering track.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-headline text-lg font-bold sm:text-xl">{value}</span>
      <span className="text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
    </div>
  );
}

function PrereqCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      <p className="text-sm text-foreground/90">{body}</p>
    </div>
  );
}

function DeepDiveGrid({ groups }: { groups: { heading: string; items: string[] }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <div key={group.heading} className="rounded-lg border border-border bg-card p-5">
          <h4 className="mb-3 font-headline text-sm font-bold">{group.heading}</h4>
          <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
            {group.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
