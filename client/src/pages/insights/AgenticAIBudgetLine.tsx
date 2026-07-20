import InsightArticleV2 from "@/components/InsightArticleV2";

const Cite = ({ n }: { n: number }) => (
  <sup>
    <a href={`#ref-${n}`} className="text-primary no-underline hover:underline">{n}</a>
  </sup>
);

export default function AgenticAIBudgetLine() {
  const references = [
    { label: "McKinsey & Company — “The state of AI.”", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
    { label: "Deloitte — “State of Generative AI in the Enterprise.”", url: "https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-generative-ai-in-enterprise.html" },
    { label: "Stanford HAI — “Artificial Intelligence Index Report 2025.”", url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" },
    { label: "Gartner — Newsroom: agentic AI forecasts and cancellation risk.", url: "https://www.gartner.com/en/newsroom" },
  ];

  const relatedInsights = [
    { title: "The AI Adoption Outlook 2026", category: "Featured Insight", link: "/insights/ai-adoption-outlook-2026", image: "/images/insights/ai-adoption-outlook-2026-hero.jpg" },
    { title: "How AI Agents Are Reshaping Enterprise Operations", category: "AI in Enterprise", link: "/insights/ai-agents-transform-operations", image: "/images/insights/ai-agents-transform-operations-hero.jpg" },
    { title: "AI in the CFO's Office", category: "Strategy & Finance", link: "/insights/strategy-finance", image: "/images/ai-powered-finance-abstract.jpg" },
  ];

  const sections = [
    { id: "uncomfortable-forecast", label: "The uncomfortable forecast" },
    { id: "funded-and-working", label: "What works in common" },
    { id: "growth-stage-advantage", label: "Growth-stage advantage" },
    { id: "where-to-start", label: "Where to start" },
  ];

  return (
    <InsightArticleV2
      category="The AI Agenda"
      categoryHref="/insights"
      title="Agentic AI Just Got a Budget Line. Most of It Will Be Wasted."
      subtitle="Autonomous agents have moved from demo to P&L in a single planning cycle. The firms that get a return will be the ones that fund workflows, not pilots — and govern agents like employees, not software."
      heroImage="/images/insights/agentic-ai-budget-line-hero.jpg"
      publishDate="July 6, 2026"
      readTime="8 min"
      sections={sections}
      keyTakeaways={[
        "Agentic AI has crossed from experimentation into formal budgets: a large share of enterprises are now piloting or scaling agents, and boards expect a visible return this cycle.",
        "Analysts have warned that a large fraction of agentic projects will be cancelled — mostly for unclear business cases and immature controls, not model quality.",
        "The winning pattern is consistent: pick one end-to-end workflow, redesign it around the agent, and hold it to the same performance reviews you would give a new hire.",
        "Agents that act need governance that acts too — permissions, audit trails, escalation rules, and a named human owner for every autonomous decision path.",
      ]}
      references={references}
      relatedInsights={relatedInsights}
    >
      <p>
        Something changed in the last twelve months of enterprise AI: <strong>agents stopped being a research
        story and became a line item.</strong> Where 2024 budgets funded copilots and 2025 budgets funded
        experiments, 2026 planning cycles are funding autonomous workflows — software that doesn't just draft
        the email but works the queue, reconciles the invoice, chases the exception, and closes the ticket.
      </p>

      <p>
        Surveys of enterprise adoption show the shift clearly: most large organizations now use AI in at least one
        function, and a fast-growing share report piloting or scaling agentic systems specifically<Cite n={1} />.
        Deloitte's enterprise research finds the same pattern — investment concentrating on a smaller number of
        higher-stakes use cases, with autonomy as the differentiator<Cite n={2} />.
      </p>

      <h2 id="uncomfortable-forecast">The uncomfortable forecast nobody puts on the board slide</h2>

      <p>
        Alongside the funding wave sits a colder projection. Industry analysts have repeatedly warned that a large
        fraction of agentic AI projects will be cancelled before delivering value — undone by fuzzy business cases,
        underestimated integration cost, and controls that weren't designed for software that acts on its own
        <Cite n={4} />. The failure mode isn't the model. It's the management system around it.
      </p>

      <blockquote>
        An agent is not a feature you ship. It is capacity you hire. Firms that fund agents like software licenses —
        and skip the onboarding, supervision, and performance review — get exactly what that approach deserves.
      </blockquote>

      <h2 id="funded-and-working">What the funded-and-working deployments have in common</h2>

      <p>
        Across the deployments that survive contact with production, we see four repeating decisions:
      </p>

      <h3>1. They fund a workflow, not a technology</h3>
      <p>
        The budget line reads "order-to-cash exception handling," not "agentic AI platform." The agent owns a
        measurable slice of work with a before/after baseline — cycle time, cost per case, first-pass yield. If the
        baseline doesn't move, the funding stops. That discipline alone filters out most of the waste.
      </p>

      <h3>2. They redesign the workflow around the agent</h3>
      <p>
        Bolting an agent onto a process designed for humans preserves every handoff and approval the process
        accumulated over a decade. The deployments that pay back re-sequence the work: the agent runs the routine
        path end-to-end, and humans move to the exception path — where their judgment is actually scarce.
      </p>

      <h3>3. They give the agent an employment contract</h3>
      <p>
        Scoped permissions instead of admin keys. An audit trail for every action. Explicit escalation rules for
        low-confidence situations. A named human owner accountable for what the agent does. This is what we mean by
        governing agents like employees — and it is the operational core of Human Intelligence Governance (HIG™).
      </p>

      <h3>4. They measure trust, not just throughput</h3>
      <p>
        The metric that predicts whether an agentic rollout scales is the rate at which humans stop re-checking the
        agent's work — earned autonomy, expanded deliberately as evidence accumulates. Stanford's AI Index notes the
        persistent gap between AI capability and organizational trust<Cite n={3} />; closing that gap is a
        management task, not a model upgrade.
      </p>

      <h2 id="growth-stage-advantage">The growth-stage advantage nobody talks about</h2>

      <p>
        Growing firms hold an underrated edge here. They have fewer legacy approval layers to re-engineer,
        shorter distances between the P&L owner and the process, and the ability to move one workflow to
        agent-first operation in a quarter rather than a fiscal year. The constraint is not capital — agent
        economics are consumption-based — it is governance capacity: knowing what to delegate, how to supervise it,
        and when to expand its authority.
      </p>

      <p>
        That is a solvable problem, and solving it now is materially cheaper than buying back control after an
        ungoverned agent has spent six months making quiet decisions in your revenue engine.
      </p>

      <h2 id="where-to-start">Where to start this quarter</h2>

      <p>
        Pick the one workflow where exceptions eat the most skilled time. Baseline it honestly. Deploy an agent on
        the routine path with scoped permissions and a human owner. Review it weekly like a new hire. Expand its
        authority only on evidence. Then — and only then — pick the second workflow.
      </p>

      <p>
        The budget line is already written. Whether it becomes capacity or a cancellation statistic is decided by
        the operating discipline around it.
      </p>
    </InsightArticleV2>
  );
}
