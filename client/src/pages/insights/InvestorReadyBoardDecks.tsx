import InsightArticleV2 from "@/components/InsightArticleV2";

export default function InvestorReadyBoardDecks() {
  const sections = [
    { id: "board-deck-signal", label: "The board deck as a signal" },
    { id: "deck-structure", label: "Essential structure" },
    { id: "financial-reporting", label: "Financial reporting" },
    { id: "key-metrics", label: "Key metrics" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "bottom-line", label: "The bottom line" },
  ];

  const relatedInsights = [
    { title: "Financial Discipline as a Growth Enabler", category: "Fractional CFO Services", link: "/insights/financial-discipline-growth", image: "/images/capabilities/cap-data-bars.jpg" },
    { title: "The CFO's Guide to Cash Flow", category: "Fractional CFO Services", link: "/insights/cfo-cash-flow-guide", image: "/images/capabilities/cap-hands-data.jpg" },
    { title: "Rolling Forecasts", category: "Fractional CFO Services", link: "/insights/rolling-forecasts", image: "/images/insights/rolling-forecasts-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Fractional CFO Services"
      categoryHref="/insights"
      title="Building Investor-Ready Board Decks"
      subtitle="How to create board materials that impress investors, drive productive discussions, and demonstrate financial sophistication."
      heroImage="/images/capabilities/cap-presenting-graphs.jpg"
      publishDate="December 2024"
      readTime="10 min"
      sections={sections}
      keyTakeaways={[
        "Your board deck is a signal of operational maturity—investors judge whether a company has its act together by its quality.",
        "A strong deck follows a clear structure: executive summary, financial performance, operational highlights, strategic initiatives, and discussion topics.",
        "Show trends, not just numbers; explain the drivers behind the results; and surface issues proactively to build trust.",
        "Avoid too much detail, missing narrative, and late distribution—send materials three to five days before the meeting.",
      ]}
      relatedInsights={relatedInsights}
    >
      <h2 id="board-deck-signal">The Board Deck as a Signal</h2>
      <p>
        Your board deck is more than a meeting document—it's a signal of your company's operational maturity. Sophisticated investors can tell within minutes whether a company has its act together based on the quality of its board materials.
      </p>
      <p>
        Great board decks don't just report what happened. They tell a story, highlight what matters, surface issues proactively, and enable productive discussion. This guide provides a framework for building board materials that impress.
      </p>

      <h2 id="deck-structure">The Essential Board Deck Structure</h2>
      <ol>
        <li><strong>Executive Summary (1-2 slides):</strong> Key highlights, critical issues, and decisions needed. Board members should understand the state of the business in 2 minutes.</li>
        <li><strong>Financial Performance (3-5 slides):</strong> P&amp;L, cash flow, key metrics vs. plan and prior year. Focus on trends and drivers, not just numbers.</li>
        <li><strong>Operational Highlights (2-3 slides):</strong> Product, sales, marketing, and team updates. Focus on what moved the needle.</li>
        <li><strong>Strategic Initiatives (2-3 slides):</strong> Progress on key initiatives, milestones achieved, and roadblocks encountered.</li>
        <li><strong>Discussion Topics (1-2 slides):</strong> Specific questions or decisions requiring board input.</li>
      </ol>

      <h2 id="financial-reporting">Financial Reporting Best Practices</h2>
      <h3>Show Trends, Not Just Numbers</h3>
      <p>
        A single month's numbers mean little without context. Show 12-month trends, year-over-year comparisons, and performance vs. plan. Make it easy to see whether things are getting better or worse.
      </p>
      <h3>Explain the Drivers</h3>
      <p>
        Don't just report that revenue was up 15%—explain why. Was it new customers, expansion, pricing, or mix? Understanding drivers enables better discussion and decision-making.
      </p>
      <h3>Surface Issues Proactively</h3>
      <p>
        Nothing erodes board trust faster than surprises. If something is going wrong, surface it early with a clear explanation of what happened, what you're doing about it, and what help you need.
      </p>

      <h2 id="key-metrics">Key Metrics to Include</h2>
      <ul>
        <li><strong>Revenue metrics:</strong> ARR/MRR, growth rate, net revenue retention, new vs. expansion revenue.</li>
        <li><strong>Unit economics:</strong> CAC, LTV, LTV/CAC ratio, payback period.</li>
        <li><strong>Cash metrics:</strong> Cash balance, burn rate, runway, cash flow from operations.</li>
        <li><strong>Operational metrics:</strong> Customer count, churn rate, NPS, employee headcount.</li>
      </ul>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
      <h3>Too Much Detail</h3>
      <p>
        Board decks should be strategic, not operational. Resist the urge to include every metric and update. Focus on what matters most and put details in an appendix.
      </p>
      <h3>No Clear Narrative</h3>
      <p>
        Data without narrative is confusing. Your deck should tell a coherent story about where the business is, where it's going, and what's needed to get there.
      </p>
      <h3>Late Distribution</h3>
      <p>
        Send materials at least 3-5 days before the meeting. Board members need time to review and come prepared with thoughtful questions.
      </p>

      <h2 id="bottom-line">The Bottom Line</h2>
      <p>
        Great board decks are a competitive advantage. They build trust with investors, enable productive discussions, and demonstrate operational maturity. Invest the time to get them right—the payoff in board effectiveness and investor confidence is substantial.
      </p>
    </InsightArticleV2>
  );
}
