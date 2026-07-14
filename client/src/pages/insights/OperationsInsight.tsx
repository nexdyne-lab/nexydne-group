import InsightArticle from "@/components/InsightArticle";

const Cite = ({ n }: { n: number }) => (
  <sup>
    <a href={`#ref-${n}`} className="text-primary no-underline hover:underline">{n}</a>
  </sup>
);

export default function OperationsInsight() {
  const references = [
    { label: "Stanford HAI — “Artificial Intelligence Index Report 2025.”", url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" },
    { label: "PwC — “2026 Digital Trends in Operations Survey.”", url: "https://www.pwc.com/us/en/services/consulting/supply-chain-operations/library/digital-trends-operations-survey.html" },
    { label: "Deloitte — “State of AI in the Enterprise.”", url: "https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html" },
    { label: "Gartner, via IBM — “AI adoption challenges” (agentic AI in enterprise software forecast).", url: "https://www.ibm.com/think/insights/ai-adoption-challenges" },
    { label: "McKinsey & Company — “The state of AI.”", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
    { label: "OECD — “Artificial intelligence” (productivity analysis).", url: "https://www.oecd.org/en/topics/artificial-intelligence.html" },
    { label: "Eurostat — “Artificial intelligence in enterprises” (2025).", url: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Artificial_intelligence_in_enterprises" },
  ];

  const relatedInsights = [
    { title: "The Complete Guide to Process Mining", category: "Technology Strategy", link: "/insights/process-mining-guide", image: "/images/hero-process-mining.jpg" },
    { title: "AI in the CFO's Office", category: "Strategy & Finance", link: "/insights/strategy-finance", image: "/images/ai-powered-finance-abstract.jpg" },
    { title: "The Pragmatic CEO's Guide to AI", category: "AI Executive Guide", link: "/insights/ceo-guide-data-modernization", image: "/images/hero-ceo-ai-guide.jpg" },
  ];

  return (
    <InsightArticle
      category="Operations"
      categoryHref="/insights"
      title="From Automation to Agentic Operations: Turning Adoption into Advantage"
      subtitle="Operations is the number-one destination for enterprise AI investment. But the gap between running pilots and running a genuinely intelligent operation comes down to something unglamorous: governance."
      heroImage="/images/ai-acceleration-abstract.jpg"
      publishDate="July 1, 2026"
      readTime="10 min"
      keyTakeaways={[
        "Operations is now the leading target for enterprise AI, yet only about 12% of leaders report capturing both revenue growth and cost reduction from it.",
        "Agentic AI is shifting from novelty to default—Gartner expects roughly a third of enterprise software to embed AI agents by 2028, up from under 1% in 2024.",
        "The real blockers are mundane and human: data quality, skills, and governance. Only about one in five firms can properly govern autonomous agents.",
        "HIG™ closes the gap: design the operating process and its accountability first, then deploy, govern, and scale the agents inside it.",
      ]}
      references={references}
      relatedInsights={relatedInsights}
    >
      <p>
        If you want to know where enterprises are really betting on AI, look at operations. AI adoption has gone
        broad-based—78% of organizations reported using AI in at least one business function in 2024, up from 55% a
        year earlier<Cite n={1} />—and operations is where much of that investment lands. In PwC's 2026 survey, 72%
        of leaders rank automating operations among their top three AI priorities, ahead of many customer-facing
        uses<Cite n={2} />.
      </p>

      <p>
        This is no longer experimental. AI-enabled tools are already applied to planning and forecasting by 66% of
        respondents and to sourcing and procurement by 64%<Cite n={2} />, and two-thirds of enterprises say
        improving productivity and efficiency is the benefit they have actually achieved from AI<Cite n={3} />. The
        question has moved on from "should we?" to "why aren't we getting more?"
      </p>

      <h2>Broad adoption, narrow value</h2>

      <p>
        Because here is the paradox at the heart of operational AI: usage is everywhere, but transformative impact is
        rare. Only 12% of CEOs report seeing <strong>both</strong> revenue growth and cost reduction from their AI
        investments<Cite n={5} />. The macroeconomic prize is real—the OECD estimates AI could lift labour
        productivity growth by 1.5 percentage points over the next decade<Cite n={6} />—but that potential is, so
        far, mostly unrealised.
      </p>

      <blockquote>
        The difference between an operation that runs pilots and one that runs on intelligence is not the model. It
        is whether the process around the model was redesigned to use it.
      </blockquote>

      <h2>The agentic shift is already underway</h2>

      <p>
        The next wave is agentic: AI that doesn't just analyze but <em>acts</em>, executing multi-step work across
        systems. Gartner forecasts that by 2028, 33% of enterprise software applications will include agentic AI, up
        from less than 1% in 2024<Cite n={4} />. Operations leaders expect this to reshape how work is
        organized—83% say AI agents and automation will accelerate the breakdown of traditional functional silos,
        rising to 93% among health-services operations and supply-chain leaders<Cite n={2} />.
      </p>

      <p>
        Agentic operations promise something automation never could: not just faster execution of a fixed process,
        but dynamic coordination across the messy seams where most operational value leaks away. That promise is also
        precisely where the risk concentrates.
      </p>

      <h2>The governance gap</h2>

      <p>
        Agent adoption is sprinting ahead of the ability to govern it. Only about one in five companies has a mature
        model for governing autonomous AI agents<Cite n={3} />. Meanwhile the unglamorous blockers persist: 87% of
        operations leaders say poor data quality has hampered their progress toward value from digital
        initiatives<Cite n={2} />, and among European firms that considered AI but chose not to adopt, 71% cited a
        lack of relevant expertise as the barrier<Cite n={7} />.
      </p>

      <p>
        This gap falls hardest on smaller organizations. In 2025, 55% of large EU enterprises used AI, versus just
        17% of small ones—a 38-point divide<Cite n={7} />. Scale, for now, still buys access. That is exactly the
        imbalance NexDyne exists to correct.
      </p>

      <h2>The NexDyne view: design the operation, then deploy the agent</h2>

      <p>
        Our discipline is Human Intelligence Governance—HIG™—and in operations it is deceptively simple: <strong>we
        implement technology only after we design the human system it operates within.</strong> Before an agent is
        switched on, we make three things explicit:
      </p>

      <p>
        <strong>The process.</strong> What is the end-to-end flow, where does value actually leak, and what should
        the agent change? Automating a broken hand-off just produces faster defects.
      </p>

      <p>
        <strong>The accountability.</strong> When an agent acts—reorders stock, reroutes a shipment, closes a
        ticket—who owns the outcome, and where does a human stay in the loop? Autonomy without ownership is
        unmanaged risk, not efficiency.
      </p>

      <p>
        <strong>The controls.</strong> What are the limits, escalation paths, and audit trails? These are what let
        you move from a trusted pilot to production—the step most organizations never take at scale<Cite n={3} />.
      </p>

      <h2>A practical path for operations leaders</h2>

      <h3>1. Fix the data foundation you'll actually use</h3>
      <p>
        Don't boil the ocean—clean the specific data the target process depends on. Data quality is the single most
        cited blocker to operational AI value<Cite n={2} />, and it is tractable when scoped to one workflow at a
        time.
      </p>

      <h3>2. Map the process before you automate it</h3>
      <p>
        Use process mining and direct observation to see how work really flows—not how the SOP says it does. Redesign
        the hand-offs, then decide where an agent adds leverage.
      </p>

      <h3>3. Put agents on a leash before you let them run</h3>
      <p>
        Define ownership, limits, and escalation up front. With only one in five firms able to govern agents
        today<Cite n={3} />, disciplined governance is a genuine competitive edge, not a compliance chore.
      </p>

      <h3>4. Instrument the outcome, then scale what works</h3>
      <p>
        Measure throughput, cost-to-serve, and error rates against a baseline. Scaling is a decision you earn with
        evidence, not a leap you take on faith.
      </p>

      <h2>The bottom line</h2>

      <p>
        The agentic operation is coming fast<Cite n={4} />, and the winners won't be those who deploy the most
        agents—they'll be those who govern them best. For growing operators especially, that is liberating: you
        don't need the largest AI budget to build an intelligent operation. You need the discipline to design the
        human system first, and the governance to scale it with confidence. That is the work NexDyne was built to do.
      </p>
    </InsightArticle>
  );
}
