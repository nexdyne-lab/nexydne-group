import InsightsListing from "@/components/InsightsListing";

const insights = [
  {
    title: "The Mid-Market Venture Playbook: Building New Businesses Without VC",
    excerpt:
      "How established mid-size companies can launch new ventures using internal resources and strategic partnerships.",
    href: "/capabilities/business-building/insights/venture-playbook",
    date: "January 2026",
    readTime: "10 min",
    category: "Strategy",
  },
  {
    title: "Corporate Innovation That Actually Works",
    excerpt:
      "Lessons from 30 mid-market innovation initiatives: what separates successful ventures from expensive experiments.",
    href: "/capabilities/business-building/insights/corporate-innovation",
    date: "January 2026",
    readTime: "8 min",
    category: "Innovation",
  },
  {
    title: "From Service to Product: The Productization Journey",
    excerpt:
      "A framework for service companies looking to build scalable product offerings without losing their service DNA.",
    href: "/capabilities/business-building/insights/productization",
    date: "December 2025",
    readTime: "9 min",
    category: "Business Model",
  },
  {
    title: "Building Adjacent Businesses: When to Expand Your Core",
    excerpt:
      "How to identify and evaluate adjacent market opportunities that leverage your existing capabilities.",
    href: "/capabilities/business-building/insights/adjacent-expansion",
    date: "December 2025",
    readTime: "7 min",
    category: "Growth",
  },
  {
    title: "The Partnership Advantage: Accelerating Growth Through Alliances",
    excerpt:
      "Strategic partnership models that help mid-size companies compete with larger players.",
    href: "/capabilities/business-building/insights/partnership-models",
    date: "November 2025",
    readTime: "8 min",
    category: "Partnerships",
  },
  {
    title: "Digital Business Models for Traditional Industries",
    excerpt:
      "How companies in manufacturing, distribution, and services are building digital revenue streams.",
    href: "/capabilities/business-building/insights/digital-business-models",
    date: "November 2025",
    readTime: "11 min",
    category: "Digital",
  },
];

export default function BusinessBuildingInsights() {
  return (
    <InsightsListing
      title="Business Building Insights"
      subtitle="Expert perspectives on launching new ventures, corporate innovation, and building sustainable growth engines for mid-size companies."
      parentTitle="Business Building"
      parentHref="/capabilities/business-building"
      insights={insights}
    />
  );
}
