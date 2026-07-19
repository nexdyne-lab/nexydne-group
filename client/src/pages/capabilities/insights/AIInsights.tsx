import InsightsListing from "@/components/InsightsListing";

const insights = [
  {
    title: "The ROI of AI: What Mid-Size Companies Need to Know",
    excerpt:
      "A practical framework for measuring AI investment returns, with benchmarks from more than 50 implementations at growing companies.",
    href: "/capabilities/artificial-intelligence/insights/ai-roi-framework",
    date: "January 15, 2026",
    readTime: "8 min",
    category: "Strategy",
  },
  {
    title: "Building Your First AI Use Case: A Step-by-Step Guide",
    excerpt:
      "How to identify, validate, and implement your organization's first AI initiative without enterprise-level resources.",
    href: "/capabilities/artificial-intelligence/insights/practical-ai-guide",
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
    title: "The AI Adoption Outlook 2026: Why the Winners Will Govern First",
    excerpt:
      "AI is now everywhere and delivering almost nowhere at scale. As the agentic era arrives, the organizations that pull ahead will be the ones that govern first.",
    href: "/insights/ai-adoption-outlook-2026",
    date: "July 1, 2026",
    readTime: "11 min",
    category: "AI Strategy",
  },
  {
    title: "Why Intelligent Automation Isn't Optional Anymore",
    excerpt:
      "What was once positioned as a competitive advantage has become table stakes. Intelligent automation is now essential to survival in modern business.",
    href: "/insights/why-intelligent-automation",
    date: "November 30, 2025",
    readTime: "5 min",
    category: "Automation",
  },
  {
    title: "Why Change Management Determines AI Project Success",
    excerpt:
      "Technology is the easy part. Adoption, behavior change, and cultural alignment determine whether AI investments deliver returns or become expensive shelfware.",
    href: "/insights/change-management-ai-success",
    date: "January 2026",
    readTime: "10 min",
    category: "Change Management",
  },
];

export default function AIInsights() {
  return (
    <InsightsListing
      title="Artificial Intelligence Insights"
      subtitle="Expert perspectives on AI strategy, implementation, and governance for growing companies navigating the AI transformation."
      parentTitle="Artificial Intelligence"
      parentHref="/capabilities/artificial-intelligence"
      insights={insights}
    />
  );
}
