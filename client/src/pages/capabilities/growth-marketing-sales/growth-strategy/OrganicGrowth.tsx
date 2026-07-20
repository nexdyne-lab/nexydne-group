
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OrganicGrowth() {
  return (
    <ServiceDetailTemplate
      hubName="Growth Strategy"
      hubSlug="growth-strategy"
      hubHref="/capabilities/growth-marketing-sales/growth-strategy"
      serviceName="Organic Growth"
      serviceSlug="organic-growth"
      heroSubtitle="Accelerate organic growth through customer acquisition, retention, and expansion. Build sustainable growth engines that compound over time."
      heroImage="/images/industries/team-strategy-board.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "40+", label: "Organic Growth engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate organic growth from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, organic growth compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Growth Strategy team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where organic growth earns its keep.",
        },
        {
          step: "02",
          title: "Design for production from day one",
          body: "We build with deployment, governance, and change management in mind from the first sprint — so the proof of concept is the v1, not a discardable demo.",
        },
        {
          step: "03",
          title: "Run, learn, scale",
          body: "We instrument every release, capture feedback from real users, and lock in what is working. The system you ship in month three is meaningfully better by month nine.",
        },
      ]}
      outcomes={[
        "A clear, prioritized roadmap that ties organic growth to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/cases/bank-cross-sell-hero.jpg" },
        { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
        { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/cases/telecom-customer-experience-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "market-entry-strategy", name: "Market Entry Strategy", href: "/capabilities/growth-marketing-sales/growth-strategy/market-entry-strategy" },
        { slug: "go-to-market-strategy", name: "Go-to-Market Strategy", href: "/capabilities/growth-marketing-sales/growth-strategy/go-to-market-strategy" },
        { slug: "portfolio-optimization", name: "Portfolio Optimization", href: "/capabilities/growth-marketing-sales/growth-strategy/portfolio-optimization" },
      ]}
      ctaLeadName="Talk to our Growth Strategy lead"
    />
  );
}
