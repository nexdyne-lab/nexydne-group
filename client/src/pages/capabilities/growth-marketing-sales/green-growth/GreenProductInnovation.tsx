
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function GreenProductInnovation() {
  return (
    <ServiceDetailTemplate
      hubName="Green Growth"
      hubSlug="green-growth"
      hubHref="/capabilities/growth-marketing-sales/green-growth"
      serviceName="Green Product Innovation"
      serviceSlug="green-product-innovation"
      heroSubtitle="Design sustainable products and services that meet customer needs. Develop go-to-market strategies for green offerings."
      heroImage="/images/industries/energy-solar.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "40+", label: "Green Product Innovation engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate green product innovation from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, green product innovation compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Green Growth team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where green product innovation earns its keep.",
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
        "A clear, prioritized roadmap that ties green product innovation to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "insurance-ai-underwriting", title: "Quoting commercial business in a day, not a week", industry: "Insurance", metric: "40%", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedServices={[
        { slug: "sustainable-growth-strategy", name: "Sustainable Growth Strategy", href: "/capabilities/growth-marketing-sales/green-growth/sustainable-growth-strategy" },
        { slug: "esg-brand-positioning", name: "ESG Brand Positioning", href: "/capabilities/growth-marketing-sales/green-growth/esg-brand-positioning" },
        { slug: "circular-economy-models", name: "Circular Economy Models", href: "/capabilities/growth-marketing-sales/green-growth/circular-economy-models" },
      ]}
      ctaLeadName="Talk to our Green Growth lead"
    />
  );
}
