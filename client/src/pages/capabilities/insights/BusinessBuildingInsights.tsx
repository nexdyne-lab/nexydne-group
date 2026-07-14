import InsightsListing from "@/components/InsightsListing";

const insights = [
  {
    title: "The Digital Venture Playbook for Growing Companies",
    excerpt:
      "A practical framework for launching new digital businesses within established growing organizations.",
    href: "/capabilities/business-building/insights/digital-venture-playbook",
    date: "June 2026",
    readTime: "15 min",
    category: "Business Building",
  },
  {
    title: "The Corporate Venture Advantage: Why Established Assets + Startup Speed Wins",
    excerpt:
      "When incumbents learn to leverage their unfair advantages—data, distribution, and domain expertise—they don't just compete with startups.",
    href: "/insights/corporate-venture-advantage",
    date: "May 2026",
    readTime: "6 min",
    category: "Strategy",
  },
  {
    title: "From MVP to scale: navigating the 'Valley of Death'",
    excerpt:
      "Building an MVP is easy. Turning it into a scalable, revenue-generating business is where 90% of corporate ventures fail.",
    href: "/insights/from-mvp-to-scale",
    date: "April 2026",
    readTime: "10 min",
    category: "Guide",
  },
  {
    title: "Market Entry Architecture: Designing for Scalability from Day One",
    excerpt:
      "Why most market entries fail due to strategic debt, and how to architect a go-to-market motion that scales like software.",
    href: "/insights/market-entry-architecture",
    date: "March 2026",
    readTime: "6 min",
    category: "Strategy",
  },
  {
    title: "The marketplace playbook: Building network effects",
    excerpt:
      "A comprehensive guide to launching and scaling two-sided marketplaces that create sustainable competitive advantages.",
    href: "/insights/marketplace-playbook",
    date: "February 2026",
    readTime: "15 min",
    category: "Whitepaper",
  },
  {
    title: "The Complete Guide to Series A Fundraising Preparation",
    excerpt:
      "The gap between seed funding and institutional capital is wider than most founders anticipate, and preparation determines outcomes.",
    href: "/insights/series-a-fundraising-guide",
    date: "January 2026",
    readTime: "12 min",
    category: "Capital Raising",
  },
];

export default function BusinessBuildingInsights() {
  return (
    <InsightsListing
      title="Business Building Insights"
      subtitle="Expert perspectives on launching new ventures, corporate innovation, and building sustainable growth engines for growing companies."
      parentTitle="Business Building"
      parentHref="/capabilities/business-building"
      insights={insights}
    />
  );
}
