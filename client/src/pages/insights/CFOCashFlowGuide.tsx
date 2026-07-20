import InsightArticleV2 from "@/components/InsightArticleV2";

export default function CFOCashFlowGuide() {
  const sections = [
    { id: "cash-is-king", label: "Cash is king" },
    { id: "building-forecast", label: "Building a forecast" },
    { id: "optimization-levers", label: "Optimization levers" },
    { id: "warning-signs", label: "Warning signs" },
    { id: "navigating-crunch", label: "Navigating a crunch" },
    { id: "bottom-line", label: "The bottom line" },
  ];

  const relatedInsights = [
    { title: "Financial Discipline as a Growth Enabler", category: "Fractional CFO Services", link: "/insights/financial-discipline-growth", image: "/images/insights/financial-discipline-growth-hero.jpg" },
    { title: "Investor-Ready Board Decks", category: "Fractional CFO Services", link: "/insights/investor-ready-board-decks", image: "/images/insights/investor-ready-board-decks-hero.jpg" },
    { title: "CFO Data Integration Strategies", category: "Financial Planning & Analysis", link: "/insights/cfo-data-integration", image: "/images/insights/cfo-data-integration-hero.jpg" },
  ];

  return (
    <InsightArticleV2
      category="Fractional CFO Services"
      title="The CFO's Guide to Cash Flow Management"
      subtitle="Master cash flow management with proven techniques for forecasting, working capital optimization, and navigating cash crunches."
      heroImage="/images/insights/cfo-cash-flow-guide-hero.jpg"
      publishDate="December 2024"
      readTime="12 min"
      sections={sections}
      keyTakeaways={[
        "Profitable companies go bankrupt every year—not for lack of revenue, but because they run out of cash.",
        "The 13-week rolling forecast is the gold standard: transaction-level detail up front, driver-based estimates further out.",
        "Working capital has three core levers—accelerate receivables, optimize inventory, and manage payables strategically.",
        "Cash flow management is a discipline, not a crisis response—build forecasting and liquidity buffers before you need them.",
      ]}
      relatedInsights={relatedInsights}
    >
      <h2 id="cash-is-king">Cash Is King—And Queen</h2>
      <p>
        Profitable companies go bankrupt every year. Not because they lack customers or revenue, but because they run
        out of cash. Cash flow management is perhaps the most critical responsibility of any CFO, yet it's often
        underappreciated until a crisis hits.
      </p>
      <p>
        This guide provides a comprehensive framework for managing cash flow—from building accurate forecasts to
        optimizing working capital to navigating cash crunches when they occur.
      </p>

      <h2 id="building-forecast">Building a Cash Flow Forecast</h2>
      <h3>The 13-Week Cash Flow Model</h3>
      <p>
        The gold standard for cash flow forecasting is the 13-week rolling forecast. This provides enough visibility to
        manage short-term liquidity while being detailed enough to be accurate.
      </p>
      <ul>
        <li><strong>Week 1-4:</strong> Detailed, transaction-level forecast based on known commitments.</li>
        <li><strong>Week 5-8:</strong> Category-level forecast based on patterns and expectations.</li>
        <li><strong>Week 9-13:</strong> High-level forecast based on business drivers.</li>
      </ul>

      <h2 id="optimization-levers">Cash Flow Optimization Levers</h2>
      <h3>Accelerate Receivables</h3>
      <p>
        Every day of DSO is cash you're lending to customers. Tighten credit terms, invoice promptly, follow up
        aggressively, and consider early payment discounts or factoring for large receivables.
      </p>
      <h3>Optimize Inventory</h3>
      <p>
        Inventory is cash sitting on shelves. Right-size safety stock, improve demand forecasting, and work with
        suppliers to reduce lead times. Consider consignment or vendor-managed inventory.
      </p>
      <h3>Manage Payables Strategically</h3>
      <p>
        Pay on time, not early—unless early payment discounts make economic sense. Negotiate extended terms with
        strategic suppliers, but never damage relationships by stretching payments unfairly.
      </p>

      <h2 id="warning-signs">Cash Flow Warning Signs</h2>
      <ul>
        <li><strong>Growing receivables:</strong> DSO increasing faster than revenue growth signals collection problems.</li>
        <li><strong>Inventory buildup:</strong> Rising inventory without corresponding sales growth ties up cash.</li>
        <li><strong>Declining margins:</strong> Shrinking gross margins mean less cash generated from operations.</li>
        <li><strong>Customer concentration:</strong> Heavy reliance on a few customers creates cash flow risk.</li>
      </ul>

      <h2 id="navigating-crunch">Navigating a Cash Crunch</h2>
      <h3>Immediate Actions (Days 1-7)</h3>
      <p>
        Freeze discretionary spending, accelerate collections, delay non-critical payables, and assess available credit
        lines. Get accurate visibility into your cash position.
      </p>
      <h3>Short-Term Actions (Weeks 2-4)</h3>
      <p>
        Negotiate payment terms with key suppliers, explore factoring or asset-based lending, consider sale-leaseback of
        equipment, and communicate proactively with stakeholders.
      </p>
      <h3>Medium-Term Actions (Month 2+)</h3>
      <p>
        Restructure operations to reduce cash burn, explore equity or debt financing, consider strategic alternatives,
        and build systems to prevent future crunches.
      </p>

      <h2 id="bottom-line">The Bottom Line</h2>
      <p>
        Cash flow management is a discipline, not a crisis response. The best CFOs build robust forecasting
        capabilities, optimize working capital continuously, and maintain the liquidity buffers needed to weather
        unexpected storms. Start building these capabilities before you need them—because by the time you need them, it
        may be too late.
      </p>
    </InsightArticleV2>
  );
}
