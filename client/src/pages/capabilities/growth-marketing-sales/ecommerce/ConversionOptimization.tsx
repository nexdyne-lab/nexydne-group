
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function ConversionOptimization() {
  return (
    <ServiceDetailTemplate
      hubName="E-commerce"
      hubSlug="ecommerce"
      hubHref="/capabilities/growth-marketing-sales/ecommerce"
      serviceName="Conversion Optimization"
      serviceSlug="conversion-optimization"
      heroSubtitle="Increase conversion rates through systematic testing and optimization. Improve checkout flows, product pages, and user experience to maximize revenue."
      heroImage="/images/capabilities/cap-tablet-woman.jpg"
      heroFocal="60% 50%"
      experienceStats={[
        { number: "40+", label: "Conversion Optimization engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate conversion optimization from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, conversion optimization compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our E-commerce team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where conversion optimization earns its keep.",
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
        "A clear, prioritized roadmap that ties conversion optimization to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
      ]}
      relatedServices={[
        { slug: "platform-strategy", name: "Platform Strategy", href: "/capabilities/growth-marketing-sales/ecommerce/platform-strategy" },
        { slug: "marketplace-management", name: "Marketplace Management", href: "/capabilities/growth-marketing-sales/ecommerce/marketplace-management" },
        { slug: "headless-commerce", name: "Headless Commerce", href: "/capabilities/growth-marketing-sales/ecommerce/headless-commerce" },
      ]}
      ctaLeadName="Talk to our E-commerce lead"
    />
  );
}
