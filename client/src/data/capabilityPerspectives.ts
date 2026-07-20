// Curated "Latest perspectives" fallback cards for capability hub subpages.
// Every `link` is a verified /insights/* route and every `image` exists in
// client/public/images/. Grouped by capability family; the hub template picks
// a set via its `insightsTopic` prop when a page ships no thoughtLeadership.

export interface PerspectiveCard {
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  link: string;
}

export type PerspectiveTopic = "ai" | "growth" | "business";

export const capabilityPerspectives: Record<PerspectiveTopic, PerspectiveCard[]> = {
  ai: [
    {
      title: "Agentic AI just got a budget line. Most of it will be wasted.",
      description:
        "Autonomous agents moved from demo to P&L in a single planning cycle. The firms that see a return fund workflows, not pilots — and govern agents like employees, not software.",
      category: "The AI Agenda",
      readTime: "8 min read",
      image: "/images/insights/agentic-ai-budget-line-hero.jpg",
      link: "/insights/agentic-ai-budget-line",
    },
    {
      title: "How growing companies are winning with AI",
      description:
        "A practical guide to how growing businesses use artificial intelligence to compete with larger enterprises — without the enterprise budget.",
      category: "Featured",
      readTime: "8 min read",
      image: "/images/insights/practical-ai-guide-hero.jpg",
      link: "/insights/practical-ai-guide",
    },
    {
      title: "The EU AI Act is enforcing in stages — August 2026 is the big one.",
      description:
        "You don't have to build AI to be covered; deploying it is enough. A 90-day compliance posture for growing firms that use AI in hiring, credit, or customer decisions.",
      category: "Governance",
      readTime: "12 min read",
      image: "/images/insights/eu-ai-act-playbook-hero.jpg",
      link: "/insights/eu-ai-act-playbook",
    },
  ],
  growth: [
    {
      title: "Hyper-personalization at scale",
      description:
        "Moving beyond the persona deck to real-time, behavior-led experiences — and the data and decisioning architecture required to run them profitably.",
      category: "Customer Experience",
      readTime: "7 min read",
      image: "/images/insights/hyper-personalization-at-scale-hero.jpg",
      link: "/insights/hyper-personalization-at-scale",
    },
    {
      title: "The churn prediction playbook",
      description:
        "Most retention programs react to churn. Predictive models intervene before the customer has decided to leave — and the math behind that gap is where margin lives.",
      category: "Customer Intelligence",
      readTime: "9 min read",
      image: "/images/insights/churn-prediction-playbook-hero.jpg",
      link: "/insights/churn-prediction-playbook",
    },
    {
      title: "The future of performance marketing",
      description:
        "As signal loss reshapes acquisition, the winning teams rebuild around first-party data, incrementality, and creative that earns attention — not just impressions.",
      category: "Marketing",
      readTime: "8 min read",
      image: "/images/insights/future-of-performance-marketing-hero.jpg",
      link: "/insights/future-of-performance-marketing",
    },
  ],
  business: [
    {
      title: "From MVP to scale: navigating the valley of death",
      description:
        "Building a minimum viable product is the easy part. Turning it into a scalable, revenue-generating business is where most corporate ventures fail — here is the operating playbook.",
      category: "Guide",
      readTime: "10 min read",
      image: "/images/insights/from-mvp-to-scale-hero.jpg",
      link: "/insights/from-mvp-to-scale",
    },
    {
      title: "The corporate venture advantage",
      description:
        "Incumbents fear they are too slow. When they learn to leverage their unfair advantages — data, distribution, and domain expertise — they don't just compete with startups; they win.",
      category: "Strategy",
      readTime: "6 min read",
      image: "/images/insights/corporate-venture-advantage-hero.jpg",
      link: "/insights/corporate-venture-advantage",
    },
    {
      title: "Market-entry architecture",
      description:
        "The difference between a new market that compounds and one that stalls is designed up front — in the sequencing, the operating model, and the first three bets you place.",
      category: "Growth",
      readTime: "8 min read",
      image: "/images/insights/market-entry-architecture-hero.jpg",
      link: "/insights/market-entry-architecture",
    },
  ],
};
