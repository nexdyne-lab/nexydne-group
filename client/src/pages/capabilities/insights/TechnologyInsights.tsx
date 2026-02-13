import InsightsListing from "@/components/InsightsListing";

const insights = [
  {
    title: "Cloud Migration for Mid-Size Companies: A Practical Guide",
    excerpt:
      "How to plan and execute cloud migration without enterprise-level budgets or dedicated IT teams.",
    href: "/capabilities/technology/insights/cloud-migration-guide",
    date: "January 2026",
    readTime: "12 min",
    category: "Cloud",
  },
  {
    title: "Technical Debt: When to Pay It Down and When to Live With It",
    excerpt:
      "A framework for prioritizing technical debt reduction based on business impact and opportunity cost.",
    href: "/capabilities/technology/insights/technical-debt",
    date: "January 2026",
    readTime: "8 min",
    category: "Architecture",
  },
  {
    title: "The Build vs. Buy Decision in 2026",
    excerpt:
      "Updated guidance on when to build custom solutions versus adopting SaaS platforms, with cost models.",
    href: "/capabilities/technology/insights/build-vs-buy",
    date: "December 2025",
    readTime: "10 min",
    category: "Strategy",
  },
  {
    title: "Cybersecurity Essentials for Growing Companies",
    excerpt:
      "The security investments that matter most for mid-size companies, prioritized by risk and cost.",
    href: "/capabilities/technology/insights/cybersecurity-essentials",
    date: "December 2025",
    readTime: "9 min",
    category: "Security",
  },
  {
    title: "API-First Architecture: Enabling Future Growth",
    excerpt:
      "How API-first design enables faster integration, better partnerships, and more agile operations.",
    href: "/capabilities/technology/insights/api-first",
    date: "November 2025",
    readTime: "7 min",
    category: "Architecture",
  },
  {
    title: "Managing Technology Vendors: A Mid-Market Playbook",
    excerpt:
      "Strategies for getting enterprise-quality service from technology vendors without enterprise budgets.",
    href: "/capabilities/technology/insights/vendor-management",
    date: "November 2025",
    readTime: "8 min",
    category: "Operations",
  },
];

export default function TechnologyInsights() {
  return (
    <InsightsListing
      title="Technology Insights"
      subtitle="Expert perspectives on technology strategy, architecture, and operations for mid-size companies navigating digital transformation."
      parentTitle="Technology"
      parentHref="/capabilities/technology"
      insights={insights}
    />
  );
}
