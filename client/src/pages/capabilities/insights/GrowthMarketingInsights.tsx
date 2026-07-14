import InsightsListing from "@/components/InsightsListing";

const insights = [
  {
    title: "The future of marketing operations: from support function to strategic engine",
    excerpt:
      "Marketing Operations is no longer just about managing tools. It's about orchestrating the entire customer lifecycle.",
    href: "/insights/future-of-marketing-ops",
    date: "June 2026",
    readTime: "6 min",
    category: "Marketing Operations",
  },
  {
    title: "The Future of Performance Marketing: Privacy, AI, and Precision",
    excerpt:
      "As third-party cookies vanish and privacy regulations tighten, performance marketing is undergoing a radical transformation.",
    href: "/insights/future-of-performance-marketing",
    date: "May 2026",
    readTime: "5 min",
    category: "Digital Marketing",
  },
  {
    title: "The ROI of Clean Data: Why Hygiene is Your Best Investment",
    excerpt:
      "Bad data costs U.S. businesses $3 trillion annually. Here's how to turn data quality into a competitive advantage.",
    href: "/insights/marketing-data-roi",
    date: "April 2026",
    readTime: "7 min",
    category: "Analytics & ROI",
  },
  {
    title: "Architecting the Modern Sales Stack: Consolidation is the New Innovation",
    excerpt:
      "The average sales organization uses 14 different tools. The result is data silos, context switching, and inefficiency.",
    href: "/insights/modern-sales-stack",
    date: "March 2026",
    readTime: "6 min",
    category: "Sales Technology",
  },
  {
    title: "The Economics of Loyalty: Why Points Programs Fail",
    excerpt:
      "Most loyalty programs are just disguised price cuts. We analyze the math behind behavioral rewards versus margin-killing discounts.",
    href: "/insights/economics-of-loyalty",
    date: "February 2026",
    readTime: "8 min",
    category: "Unit Economics",
  },
  {
    title: 'Hyper-Personalization at Scale: Beyond "Hi [First Name]"',
    excerpt:
      "True personalization is about anticipating a customer's needs, respecting their context, and delivering value in the moment.",
    href: "/insights/hyper-personalization-at-scale",
    date: "January 2026",
    readTime: "6 min",
    category: "Customer Experience",
  },
];

export default function GrowthMarketingInsights() {
  return (
    <InsightsListing
      title="Growth, Marketing & Sales Insights"
      subtitle="Expert perspectives on customer acquisition, sales effectiveness, and marketing strategy for companies pursuing growth."
      parentTitle="Growth, Marketing & Sales"
      parentHref="/capabilities/growth-marketing-sales"
      insights={insights}
    />
  );
}
