
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function PricingOperations() {
  return (
    <ServiceDetailTemplate
      hubName="Pricing & Monetization"
      hubSlug="pricing-monetization"
      hubHref="/capabilities/growth-marketing-sales/pricing-monetization"
      serviceName="Pricing Operations"
      serviceSlug="pricing-operations"
      heroSubtitle="Build pricing operations that ensure consistent execution. Implement pricing tools, governance, and performance management."
      heroImage="/images/capabilities/cap-hands-data.jpg"
      heroFocal="45% 50%"
      experienceStats={[
        { number: "40+", label: "Pricing Operations engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate pricing operations from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, pricing operations compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Pricing & Monetization team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where pricing operations earns its keep.",
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
        "A clear, prioritized roadmap that ties pricing operations to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
      ]}
      relatedServices={[
        { slug: "pricing-strategy", name: "Pricing Strategy", href: "/capabilities/growth-marketing-sales/pricing-monetization/pricing-strategy" },
        { slug: "value-based-pricing", name: "Value-Based Pricing", href: "/capabilities/growth-marketing-sales/pricing-monetization/value-based-pricing" },
        { slug: "dynamic-pricing", name: "Dynamic Pricing", href: "/capabilities/growth-marketing-sales/pricing-monetization/dynamic-pricing" },
      ]}
      ctaLeadName="Talk to our Pricing & Monetization lead"
    />
  );
}
