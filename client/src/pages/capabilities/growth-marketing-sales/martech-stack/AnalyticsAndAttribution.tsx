
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function AnalyticsAndAttribution() {
  return (
    <ServiceDetailTemplate
      hubName="MarTech Stack"
      hubSlug="martech-stack"
      hubHref="/capabilities/growth-marketing-sales/martech-stack"
      serviceName="Analytics & Attribution"
      serviceSlug="analytics-and-attribution"
      heroSubtitle="Build measurement infrastructure that tracks marketing performance. Implement attribution models that inform investment decisions."
      heroImage="/images/capabilities/cap-iot-network.jpg"
      heroFocal="55% 45%"
      experienceStats={[
        { number: "40+", label: "Analytics & Attribution engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate analytics & attribution from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, analytics & attribution compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our MarTech Stack team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where analytics & attribution earns its keep.",
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
        "A clear, prioritized roadmap that ties analytics & attribution to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
        { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/industries/tech-datacenter.jpg" },
      ]}
      relatedServices={[
        { slug: "martech-strategy", name: "MarTech Strategy", href: "/capabilities/growth-marketing-sales/martech-stack/martech-strategy" },
        { slug: "customer-data-platforms", name: "Customer Data Platforms", href: "/capabilities/growth-marketing-sales/martech-stack/customer-data-platforms" },
        { slug: "marketing-automation", name: "Marketing Automation", href: "/capabilities/growth-marketing-sales/martech-stack/marketing-automation" },
      ]}
      ctaLeadName="Talk to our MarTech Stack lead"
    />
  );
}
