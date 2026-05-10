// TODO: confirm Brand Strategy & Positioning content with Digital Marketing practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function BrandStrategyAndPositioning() {
  return (
    <ServiceDetailTemplate
      hubName="Digital Marketing"
      hubSlug="digital-marketing"
      hubHref="/capabilities/growth-marketing-sales/digital-marketing"
      serviceName="Brand Strategy & Positioning"
      serviceSlug="brand-strategy-and-positioning"
      heroSubtitle="Build distinctive brand positioning that resonates in digital channels. Create content strategies and creative frameworks that drive engagement and conversion."
      heroImage="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1600&q=80"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "Brand Strategy & Positioning engagements delivered" },
        // TODO: confirm with practice lead before publish
        { number: "8 wks", label: "Median time to first measurable result" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Average lift on the primary outcome metric" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      // TODO: confirm challenge framing with practice lead before publish
      challenge="Most mid-market teams underestimate how hard it is to translate brand strategy & positioning from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      // TODO: confirm opportunity framing with practice lead before publish
      opportunity="Done well, brand strategy & positioning compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Digital Marketing team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where brand strategy & positioning earns its keep.",
        },
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "02",
          title: "Design for production from day one",
          body: "We build with deployment, governance, and change management in mind from the first sprint — so the proof of concept is the v1, not a discardable demo.",
        },
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "03",
          title: "Run, learn, scale",
          body: "We instrument every release, capture feedback from real users, and lock in what is working. The system you ship in month three is meaningfully better by month nine.",
        },
      ]}
      outcomes={[
        // TODO: confirm outcomes with practice lead before publish
        "A clear, prioritized roadmap that ties brand strategy & positioning to specific business outcomes leadership has signed off on.",
        // TODO: confirm outcomes with practice lead before publish
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        // TODO: confirm outcomes with practice lead before publish
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        // TODO: confirm outcomes with practice lead before publish
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        // TODO: confirm outcomes with practice lead before publish
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        // TODO: confirm outcomes with practice lead before publish
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        {
          slug: "fintech-payment-automation",
          title: "Fintech scales payment ops with intelligent automation",
          industry: "Fintech · Digital Marketing",
          metric: "5x",
          image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1600&q=80",
        },
        {
          slug: "telehealth-platform",
          title: "Telehealth provider scales virtual care platform",
          industry: "Healthcare · Digital Marketing",
          metric: "5x",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "performance-marketing", name: "Performance Marketing", href: "/capabilities/growth-marketing-sales/digital-marketing/performance-marketing" },
        { slug: "marketing-analytics-and-attribution", name: "Marketing Analytics & Attribution", href: "/capabilities/growth-marketing-sales/digital-marketing/marketing-analytics-and-attribution" },
        { slug: "consumer-marketing-analytics", name: "Consumer Marketing Analytics", href: "/capabilities/growth-marketing-sales/digital-marketing/consumer-marketing-analytics" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Digital Marketing lead"
    />
  );
}
