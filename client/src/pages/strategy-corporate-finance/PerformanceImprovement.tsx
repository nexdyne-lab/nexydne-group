
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function PerformanceImprovement() {
  return (
    <CapabilityHubTemplate
      hubName="Performance Improvement"
      slug="performance-improvement"
      heroSubtitle="Unlock hidden value in your operations. Cost-saving opportunities, working capital optimization, and process streamlining that improve margins and cash flow — without compromising the capabilities that drive growth."
      heroImage="/images/capabilities/cap-chess.jpg"
      experienceStats={[
        { number: "25%", label: "Average cost reduction achieved across client engagements through systematic optimization" },
        { number: "15-30%", label: "average cost reduction from performance programs" },
        { number: "6 months", label: "Typical payback period for performance improvement programs we implement" },
        { number: "Sustained", label: "Capability transfer that keeps gains in place after we leave" },
      ]}
      ambitions={[
        {
          title: "Take real cost out of the P&L",
          description:
            "Systematic cost diagnostic across the org that distinguishes structural savings from one-time cuts — and protects the capabilities you actually need to compete.",
        },
        {
          title: "Free working capital trapped in the business",
          description:
            "Compress the cash conversion cycle through inventory, receivables, and payables work — turning balance sheet drag into liquidity for the next investment.",
        },
        {
          title: "Streamline how work gets done",
          description:
            "Apply lean principles to the processes that matter most. Reduce waste, cut handoffs, and build throughput your operators can sustain after the consultants leave.",
        },
        {
          title: "Get more from procurement",
          description:
            "Strategic sourcing, category strategy, supplier consolidation, and contract renegotiation that reduce spend without compromising service or quality.",
        },
        {
          title: "Stop leaving money on the table",
          description:
            "Pricing diagnostic that surfaces leakage, mix opportunities, and discount discipline gaps — and translates them into sustained margin lift.",
        },
        {
          title: "Right-size the organization",
          description:
            "Eliminate redundant layers, fix spans of control, and clarify decision rights so the org chart matches the strategy and the speed the business actually needs.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Cost Optimization",
          description:
            "Systematic review of cost structure across the organization. Identify savings opportunities without compromising capability or quality.",
          href: "/capabilities/strategy-corporate-finance/performance-improvement/cost-optimization",
        },
        {
          title: "Working Capital Management",
          description:
            "Optimize inventory, receivables, and payables to free up cash. Improve cash conversion cycle and reduce financing needs.",
          href: "/capabilities/strategy-corporate-finance/performance-improvement/working-capital-management",
        },
        {
          title: "Process Efficiency",
          description:
            "Streamline operations to reduce waste and improve throughput. Lean principles applied to your specific context.",
          href: "/capabilities/strategy-corporate-finance/performance-improvement/process-efficiency",
        },
        {
          title: "Procurement Excellence",
          description:
            "Strategic sourcing, supplier consolidation, and contract renegotiation. Reduce spend while maintaining quality.",
          href: "/capabilities/strategy-corporate-finance/performance-improvement/procurement-excellence",
        },
        {
          title: "Pricing Optimization",
          description:
            "Review pricing strategy and execution. Capture value through better price realization and mix management.",
          href: "/capabilities/strategy-corporate-finance/performance-improvement/pricing-optimization",
        },
        {
          title: "Organizational Efficiency",
          description:
            "Right-size the organization and eliminate redundancy. Improve spans of control and decision-making speed.",
          href: "/capabilities/strategy-corporate-finance/performance-improvement/organizational-efficiency",
        },
      ]}
      ambitionsCTAText="Talk to us about your Performance Improvement ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and quantify",
          body: "Rapid assessment of performance across key value levers. Benchmark against best practices, identify gaps, and size the prize for each opportunity.",
        },
        {
          step: "02",
          title: "Plan and prioritize",
          body: "Develop detailed action plans with clear owners, timelines, and milestones. Prioritize based on impact, feasibility, and speed to value.",
        },
        {
          step: "03",
          title: "Implement and sustain",
          body: "Work alongside your team to implement changes. Track progress, remove obstacles, and build capabilities to ensure benefits are realized and sustained.",
        },
      ]}
      featuredCases={[
        { slug: "pe-industrial-transformation", title: "How a Fund Added Seven Points of EBITDA Margin at an Industrial Manufacturer", industry: "Private Equity", metric: "7 pts EBITDA margin", image: "/images/cases/pe-industrial-transformation-hero.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "45% fewer rejected claims", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "automotive-smart-factory", title: "Lifting plant productivity by 40% at a vehicle maker", industry: "Manufacturing", metric: "40%", image: "/images/industries/mfg-robotics.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance/business-strategy", name: "Business Strategy & Transformation" },
        { href: "/capabilities/strategy-corporate-finance/cfo-services", name: "Fractional CFO Services" },
        { href: "/capabilities/strategy-corporate-finance/financial-planning-analysis", name: "Financial Planning & Analysis" },
      ]}
      ctaLeadName="Talk to our Performance Improvement lead"
    />
  );
}
