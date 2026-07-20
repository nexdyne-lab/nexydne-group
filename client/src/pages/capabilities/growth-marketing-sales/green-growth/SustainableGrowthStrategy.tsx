
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function SustainableGrowthStrategy() {
  return (
    <ServiceDetailTemplate
      hubName="Green Growth"
      hubSlug="green-growth"
      hubHref="/capabilities/growth-marketing-sales/green-growth"
      serviceName="Sustainable Growth Strategy"
      serviceSlug="sustainable-growth-strategy"
      heroSubtitle="Develop growth strategies that integrate sustainability into your core business. Identify green market opportunities and build sustainable competitive advantage."
      heroImage="/images/industries/energy-renewable-team.jpg"
      heroFocal="60% 50%"
      experienceStats={[
        { number: "40+", label: "Sustainable Growth Strategy engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate sustainable growth strategy from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, sustainable growth strategy compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Green Growth team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where sustainable growth strategy earns its keep.",
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
        "A clear, prioritized roadmap that ties sustainable growth strategy to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "40% more products per customer", image: "/images/cases/bank-cross-sell-hero.jpg" },
        { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
        { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/cases/telecom-customer-experience-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "esg-brand-positioning", name: "ESG Brand Positioning", href: "/capabilities/growth-marketing-sales/green-growth/esg-brand-positioning" },
        { slug: "green-product-innovation", name: "Green Product Innovation", href: "/capabilities/growth-marketing-sales/green-growth/green-product-innovation" },
        { slug: "circular-economy-models", name: "Circular Economy Models", href: "/capabilities/growth-marketing-sales/green-growth/circular-economy-models" },
      ]}
      ctaLeadName="Talk to our Green Growth lead"
    />
  );
}
