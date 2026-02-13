import InsightsListing from "@/components/InsightsListing";

const insights = [
  {
    title: "Lean Operations for Mid-Size Companies: Beyond the Basics",
    excerpt:
      "Advanced lean techniques adapted for companies without dedicated continuous improvement teams.",
    href: "/capabilities/operations/insights/lean-operations",
    date: "January 2026",
    readTime: "9 min",
    category: "Lean",
  },
  {
    title: "Supply Chain Resilience: Lessons from Recent Disruptions",
    excerpt:
      "How mid-size companies can build supply chain resilience without the resources of global enterprises.",
    href: "/capabilities/operations/insights/supply-chain-resilience",
    date: "January 2026",
    readTime: "10 min",
    category: "Supply Chain",
  },
  {
    title: "The Automation ROI Calculator: Where to Invest First",
    excerpt:
      "A practical framework for prioritizing automation investments based on impact and feasibility.",
    href: "/capabilities/operations/insights/automation-roi",
    date: "December 2025",
    readTime: "8 min",
    category: "Automation",
  },
  {
    title: "Quality Management Systems That Scale",
    excerpt:
      "Building quality processes that maintain standards as your company grows.",
    href: "/capabilities/operations/insights/quality-systems",
    date: "December 2025",
    readTime: "7 min",
    category: "Quality",
  },
  {
    title: "Workforce Planning in an Uncertain Economy",
    excerpt:
      "Strategies for right-sizing your workforce while maintaining capability for growth.",
    href: "/capabilities/operations/insights/workforce-planning",
    date: "November 2025",
    readTime: "8 min",
    category: "Workforce",
  },
  {
    title: "Operational Metrics That Matter: A Mid-Market Guide",
    excerpt:
      "The KPIs that actually drive performance, and how to implement them without overwhelming your team.",
    href: "/capabilities/operations/insights/operational-metrics",
    date: "November 2025",
    readTime: "6 min",
    category: "Performance",
  },
];

export default function OperationsInsights() {
  return (
    <InsightsListing
      title="Operations Insights"
      subtitle="Expert perspectives on operational excellence, supply chain management, and process optimization for mid-size companies."
      parentTitle="Operations"
      parentHref="/capabilities/operations"
      insights={insights}
    />
  );
}
