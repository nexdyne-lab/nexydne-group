import InsightsListing from "@/components/InsightsListing";

const insights = [
  {
    title: "The Mid-Market CFO's Guide to Strategic Finance",
    excerpt:
      "How CFOs at growing companies can shift from financial reporting to strategic business partnership.",
    href: "/capabilities/strategy-corporate-finance/insights/strategic-finance-guide",
    date: "January 2026",
    readTime: "10 min",
    category: "Leadership",
  },
  {
    title: "Capital Raising in 2026: What Mid-Size Companies Need to Know",
    excerpt:
      "Current market conditions, investor expectations, and strategies for successful fundraising.",
    href: "/capabilities/strategy-corporate-finance/insights/capital-raising-2026",
    date: "January 2026",
    readTime: "9 min",
    category: "Capital",
  },
  {
    title: "M&A for Growth: A Mid-Market Buyer's Playbook",
    excerpt:
      "How to identify, evaluate, and integrate acquisitions that accelerate your strategic objectives.",
    href: "/capabilities/strategy-corporate-finance/insights/ma-playbook",
    date: "December 2025",
    readTime: "12 min",
    category: "M&A",
  },
  {
    title: "Building a World-Class FP&A Function",
    excerpt:
      "The capabilities, tools, and processes that separate good FP&A from great FP&A.",
    href: "/capabilities/strategy-corporate-finance/insights/fpa-excellence",
    date: "December 2025",
    readTime: "8 min",
    category: "FP&A",
  },
  {
    title: "Pricing Strategy for Profitable Growth",
    excerpt:
      "How to optimize pricing without losing customers, with frameworks for different business models.",
    href: "/capabilities/strategy-corporate-finance/insights/pricing-strategy",
    date: "November 2025",
    readTime: "7 min",
    category: "Pricing",
  },
  {
    title: "Working Capital Optimization: Quick Wins and Long-Term Strategies",
    excerpt:
      "Practical approaches to improving cash flow without sacrificing growth or relationships.",
    href: "/capabilities/strategy-corporate-finance/insights/working-capital",
    date: "November 2025",
    readTime: "8 min",
    category: "Cash Flow",
  },
];

export default function StrategyFinanceInsights() {
  return (
    <InsightsListing
      title="Strategy & Corporate Finance Insights"
      subtitle="Expert perspectives on strategic finance, capital markets, and corporate development for mid-size companies pursuing growth."
      parentTitle="Strategy & Corporate Finance"
      parentHref="/capabilities/strategy-corporate-finance"
      insights={insights}
    />
  );
}
