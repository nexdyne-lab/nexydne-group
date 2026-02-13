import InsightsListing from "@/components/InsightsListing";

const insights = [
  {
    title: "Customer Acquisition Cost: Benchmarks and Optimization Strategies",
    excerpt:
      "Industry benchmarks for CAC and proven strategies to reduce acquisition costs while maintaining quality.",
    href: "/capabilities/growth-marketing-sales/insights/cac-optimization",
    date: "January 2026",
    readTime: "9 min",
    category: "Marketing",
  },
  {
    title: "Building a Sales Engine That Scales",
    excerpt:
      "How to structure sales teams, processes, and technology for sustainable growth.",
    href: "/capabilities/growth-marketing-sales/insights/sales-engine",
    date: "January 2026",
    readTime: "11 min",
    category: "Sales",
  },
  {
    title: "The Mid-Market Guide to Marketing Technology",
    excerpt:
      "Which marketing technologies deliver ROI for mid-size companies, and which are enterprise overkill.",
    href: "/capabilities/growth-marketing-sales/insights/martech-guide",
    date: "December 2025",
    readTime: "10 min",
    category: "Technology",
  },
  {
    title: "Customer Retention: The Hidden Growth Lever",
    excerpt:
      "Why improving retention by 5% can increase profits by 25-95%, and how to do it.",
    href: "/capabilities/growth-marketing-sales/insights/customer-retention",
    date: "December 2025",
    readTime: "8 min",
    category: "Retention",
  },
  {
    title: "Pricing for Growth: Strategies Beyond Cost-Plus",
    excerpt:
      "Value-based pricing approaches that capture more value without losing customers.",
    href: "/capabilities/growth-marketing-sales/insights/pricing-growth",
    date: "November 2025",
    readTime: "7 min",
    category: "Pricing",
  },
  {
    title: "Digital Marketing ROI: What Actually Works in 2026",
    excerpt:
      "Channel-by-channel analysis of digital marketing effectiveness for mid-size B2B and B2C companies.",
    href: "/capabilities/growth-marketing-sales/insights/digital-marketing-roi",
    date: "November 2025",
    readTime: "12 min",
    category: "Digital",
  },
];

export default function GrowthMarketingInsights() {
  return (
    <InsightsListing
      title="Growth, Marketing & Sales Insights"
      subtitle="Expert perspectives on customer acquisition, sales effectiveness, and marketing strategy for mid-size companies pursuing growth."
      parentTitle="Growth, Marketing & Sales"
      parentHref="/capabilities/growth-marketing-sales"
      insights={insights}
    />
  );
}
