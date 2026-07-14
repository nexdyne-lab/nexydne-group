import InsightsListing from "@/components/InsightsListing";

const insights = [
  {
    title: "The Cloud Migration Roadmap for Growing Companies",
    excerpt:
      "A practical guide to planning and executing cloud migration without enterprise-level budgets or teams.",
    href: "/capabilities/technology/insights/cloud-migration-roadmap",
    date: "January 2026",
    readTime: "14 min",
    category: "Cloud",
  },
  {
    title: "Cloud-Native Architecture for Scale",
    excerpt:
      "The principles of building resilient, scalable cloud-native systems that grow with your ambition.",
    href: "/insights/cloud-native-architecture",
    date: "August 2025",
    readTime: "18 min",
    category: "Architecture",
  },
  {
    title: "The Modern Enterprise Integration Playbook",
    excerpt:
      "A guide to connecting legacy systems with modern cloud platforms while maintaining security and compliance.",
    href: "/insights/enterprise-integration-playbook",
    date: "August 2025",
    readTime: "15 min",
    category: "Integration",
  },
  {
    title: "Building Scalable Data Architectures",
    excerpt:
      "The architectural patterns and technology choices that scale data operations from millions to billions of events.",
    href: "/insights/scalable-data-architecture",
    date: "September 2025",
    readTime: "8 min",
    category: "Data",
  },
  {
    title: "The Millisecond Imperative: Real-Time Decision Architectures",
    excerpt:
      "The technical stack required to process user signals and serve personalized recommendations in under 50ms.",
    href: "/insights/real-time-decision-architectures",
    date: "March 2026",
    readTime: "10 min",
    category: "Engineering",
  },
  {
    title: "Privacy by Design: Building Trust in the Age of AI",
    excerpt:
      "How to deliver hyper-relevant experiences while adhering to the strictest data privacy standards.",
    href: "/insights/privacy-by-design",
    date: "January 2026",
    readTime: "8 min",
    category: "Security",
  },
];

export default function TechnologyInsights() {
  return (
    <InsightsListing
      title="Technology Insights"
      subtitle="Expert perspectives on technology strategy, architecture, and operations for growing companies navigating digital transformation."
      parentTitle="Technology"
      parentHref="/capabilities/technology"
      insights={insights}
    />
  );
}
