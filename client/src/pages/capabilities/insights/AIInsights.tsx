import InsightsListing from "@/components/InsightsListing";

const insights = [
  {
    title: "The ROI of AI: What Mid-Size Companies Need to Know",
    excerpt:
      "A practical framework for measuring AI investment returns, with benchmarks from 50+ mid-market implementations.",
    href: "/capabilities/artificial-intelligence/insights/ai-roi-framework",
    date: "January 2026",
    readTime: "8 min",
    category: "Strategy",
  },
  {
    title: "Building Your First AI Use Case: A Step-by-Step Guide",
    excerpt:
      "How to identify, validate, and implement your organization's first AI initiative without enterprise-level resources.",
    href: "/capabilities/artificial-intelligence/insights/first-ai-use-case",
    date: "January 2026",
    readTime: "12 min",
    category: "Implementation",
  },
  {
    title: "AI Governance for Growing Companies",
    excerpt:
      "Establishing responsible AI practices that scale with your business, from data privacy to algorithmic transparency.",
    href: "/capabilities/artificial-intelligence/insights/ai-governance",
    date: "December 2025",
    readTime: "10 min",
    category: "Governance",
  },
  {
    title: "Generative AI in Operations: Beyond the Hype",
    excerpt:
      "Practical applications of generative AI for mid-size operations, from document processing to customer service.",
    href: "/capabilities/artificial-intelligence/insights/generative-ai-operations",
    date: "December 2025",
    readTime: "9 min",
    category: "Operations",
  },
  {
    title: "The AI Talent Gap: Strategies for Mid-Market Companies",
    excerpt:
      "How to build AI capabilities when you can't compete with Big Tech salaries, including partnerships and upskilling approaches.",
    href: "/capabilities/artificial-intelligence/insights/ai-talent-strategy",
    date: "November 2025",
    readTime: "7 min",
    category: "Talent",
  },
  {
    title: "Machine Learning vs. Rule-Based Automation: When to Use Each",
    excerpt:
      "A decision framework for choosing the right automation approach based on your data, complexity, and business goals.",
    href: "/capabilities/artificial-intelligence/insights/ml-vs-rules",
    date: "November 2025",
    readTime: "6 min",
    category: "Technology",
  },
];

export default function AIInsights() {
  return (
    <InsightsListing
      title="Artificial Intelligence Insights"
      subtitle="Expert perspectives on AI strategy, implementation, and governance for mid-size companies navigating the AI transformation."
      parentTitle="Artificial Intelligence"
      parentHref="/capabilities/artificial-intelligence"
      insights={insights}
    />
  );
}
