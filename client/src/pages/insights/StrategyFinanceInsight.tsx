import InsightArticle from "@/components/InsightArticle";

const Cite = ({ n }: { n: number }) => (
  <sup>
    <a href={`#ref-${n}`} className="text-primary no-underline hover:underline">{n}</a>
  </sup>
);

export default function StrategyFinanceInsight() {
  const references = [
    { label: "McKinsey & Company — “The state of AI” (global adoption survey).", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
    { label: "CFO Connect / General Atlantic — “State of AI in Finance 2026.”", url: "https://www.cfoconnect.eu/resources/reports/state-of-ai-in-finance-2026/" },
    { label: "KPMG — “2026: The Decision Advantage — How AI is producing value across the finance function.”", url: "https://kpmg.com/kpmg-us/content/dam/kpmg/pdf/2026/kpmg-ai-in-finance.pdf" },
    { label: "Cambridge Centre for Alternative Finance (Cambridge Judge Business School) — “2026 Global AI in Financial Services Report.”", url: "https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/2026-global-ai-in-financial-services-report/" },
    { label: "PwC — “2026 AI Business Predictions.”", url: "https://www.pwc.com/us/en/tech-effect/ai-analytics/ai-predictions.html" },
    { label: "Financial Executives International — “The evolution of the finance function: CFO strategy and AI.”", url: "https://www.financialexecutives.org/About-FEI/For-the-Press/2026/evolution-of-the-finance-function-cfo-strategy-ai.aspx" },
    { label: "Stanford HAI — “Artificial Intelligence Index Report 2025.”", url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" },
  ];

  const relatedInsights = [
    { title: "The Pragmatic CEO's Guide to AI", category: "AI Executive Guide", link: "/insights/ceo-guide-data-modernization", image: "/images/hero-ceo-ai-guide.jpg" },
    { title: "How AI Agents Transform Enterprise Operations", category: "Operations", link: "/insights/operations", image: "/images/ai-acceleration-abstract.jpg" },
    { title: "The Complete Guide to Process Mining", category: "Technology Strategy", link: "/insights/process-mining-guide", image: "/images/hero-process-mining.jpg" },
  ];

  return (
    <InsightArticle
      category="Strategy & Finance"
      categoryHref="/insights"
      title="AI in the CFO's Office: Closing the Gap Between Adoption and Advantage"
      subtitle="Finance has finally embraced AI—but adoption is not the same as advantage. The firms pulling ahead are not the ones spending the most on technology. They are the ones governing how decisions get made."
      heroImage="/images/ai-powered-finance-abstract.jpg"
      publishDate="July 1, 2026"
      readTime="10 min"
      keyTakeaways={[
        "AI use in finance has roughly doubled since 2023, yet finance still trails every other business function—and nearly half of teams remain stuck in pilots.",
        "Firms that deploy agentic AI in finance report materially stronger performance, including up to ~40 points higher forecast accuracy and ROI than peers.",
        "The binding constraint is no longer technology. It is measurement and governance: most institutions still cannot quantify the value their AI creates.",
        "NexDyne's answer is Human Intelligence Governance (HIG™): design the human decision system first, then deploy, govern, and scale the technology inside it.",
      ]}
      references={references}
      relatedInsights={relatedInsights}
    >
      <p>
        For most of the last decade, the finance function watched the AI wave from the shore. That has changed. The
        share of companies using AI in at least one business function jumped from 55% in 2023 to 72% in 2024, and
        finance is now firmly part of that story<Cite n={1} />. By 2026, 56% of finance leaders report using AI in
        their function—double the rate of 2023<Cite n={2} />.
      </p>

      <p>
        And yet, ask a CFO whether AI has changed how their organisation actually makes decisions, and the answer is
        usually a hesitant "not yet." That hesitation is the most important signal in the market. Adoption has
        arrived. Advantage has not. This piece is about the gap between the two—and how to close it.
      </p>

      <h2>Adoption is up. Depth is not.</h2>

      <p>
        The headline numbers flatter the reality. Even as usage doubles, finance still ranks <strong>last among all
        business functions</strong> in AI deployment<Cite n={2} />. Look beneath the surface and the picture is
        sobering: 45% of finance teams remain stuck in limited pilots, and only 17% have put AI into their core
        workflows<Cite n={2} />.
      </p>

      <blockquote>
        Most finance leaders don't lack ambition or budget. When asked why adoption is slow, 68% say the honest
        reason is that they "don't know where to start."<Cite n={2} />
      </blockquote>

      <p>
        This is a strategy and capability problem, not a technology problem. The tools are mature and increasingly
        commoditised. What is scarce is a clear view of <em>which decisions</em> AI should improve, and the
        discipline to redesign those decisions before automating them.
      </p>

      <h2>Where AI is already paying off</h2>

      <p>
        The organisations that get past the pilot trap are seeing real returns—concentrated, tellingly, in
        decision-heavy work. In a 2026 survey, more than three-quarters of organisations reported using AI in
        financial planning, reporting, and commercial analysis<Cite n={3} />. Among those actively using it, 70%
        report better decision quality, 71% report faster decisions, and 64% report improved forecasting
        accuracy<Cite n={3} />.
      </p>

      <p>
        The step-change comes from <strong>agentic AI</strong>—systems that don't just answer questions but carry out
        multi-step financial workflows. Organisations deploying agentic AI in finance report at least 32 percentage
        points stronger performance across key finance metrics, rising to nearly 40 points on forecast accuracy and
        ROI versus peers<Cite n={3} />. In financial services specifically, 40% of firms already report increased
        profitability from AI, and among those investing more than US$100,000 a year, 62% have reached advanced AI
        maturity<Cite n={4} />.
      </p>

      <h2>The gap almost no one talks about: value you can't measure</h2>

      <p>
        Here is the uncomfortable finding. Even among adopters, most institutions cannot prove the value they are
        creating. In financial services, 55% of firms say it is difficult to measure the value of their AI
        deployments—rising to 76% among the largest institutions<Cite n={4} />. And deployment remains
        overwhelmingly concentrated in internal, back-office functions rather than genuine business-model
        reinvention<Cite n={4} />.
      </p>

      <p>
        That combination—hard to measure, confined to the back office—is exactly what stalls an AI programme in year
        two. Without a measurement and governance frame, initiatives can't be defended at budget time, can't be
        scaled with confidence, and can't be trusted with anything that touches capital allocation or risk.
      </p>

      <h2>The NexDyne view: govern the human system first</h2>

      <p>
        At NexDyne we start from a simple conviction: <strong>we implement technology only after we design the human
        system it operates within.</strong> We call that discipline Human Intelligence Governance—HIG™. In a finance
        context, it means being explicit, before any model ships, about three things:
      </p>

      <p>
        <strong>The decision.</strong> Which specific decision are we improving—a forecast, a close, a capital
        allocation, a covenant test? "Use AI in FP&amp;A" is not a decision. "Cut forecast cycle time in half while
        improving accuracy" is.
      </p>

      <p>
        <strong>The accountability.</strong> Who owns the outcome of that decision, and who signs off when an agent
        acts? Agentic finance without clear ownership is not efficiency—it is unaudited risk.
      </p>

      <p>
        <strong>The measure.</strong> How will we know it worked—in the currency the CFO already reports? If value
        can't be expressed in cycle time, accuracy, cost-to-serve, or working capital, it won't survive the next
        budget review.
      </p>

      <p>
        Only once the human system is designed do we deploy, govern, and scale the technology inside it. This is the
        opposite of the tool-first approach that leaves finance teams with impressive pilots and no durable
        advantage.
      </p>

      <h2>A practical path for finance leaders</h2>

      <h3>1. Start where the decision is expensive and repeatable</h3>
      <p>
        Prioritise decisions that are made often, matter financially, and depend on data you already trust—forecasting,
        variance analysis, and reporting are natural first movers, which is why they lead adoption<Cite n={3} />.
      </p>

      <h3>2. Redesign the decision, then automate it</h3>
      <p>
        Map who decides, on what inputs, and with what sign-off—then remove the friction before you add the model.
        Automating a broken process only produces faster errors.
      </p>

      <h3>3. Instrument value from day one</h3>
      <p>
        Define the metric before the build. The institutions that can't measure AI value<Cite n={4} /> almost always
        skipped this step. NexDyne bakes the measure into the design so the CFO can report it, not estimate it.
      </p>

      <h3>4. Govern agents like you govern capital</h3>
      <p>
        Autonomous financial agents need the same controls as any material process: clear ownership, auditability,
        escalation paths, and limits. Governance is what lets you scale from a trusted pilot to the core of the
        function<Cite n={4} />.
      </p>

      <h2>The bottom line</h2>

      <p>
        The finance function has crossed the adoption threshold—the technology question is largely settled<Cite n={1} /><Cite n={2} />.
        The advantage question is not. It will be won by the CFOs who treat AI not as a tool to install but as a change
        to how the organisation decides—governed, measured, and owned. That is a management challenge before it is a
        technical one, and it is precisely the kind of work a firm built on Human Intelligence Governance exists to do.
      </p>

      <p>
        For growing companies, the opportunity is even sharper: the same caliber of AI-enabled
        finance capability once reserved for the largest institutions is now within reach<Cite n={5} /><Cite n={6} />—
        provided it is governed with the discipline the stakes demand.
      </p>
    </InsightArticle>
  );
}
