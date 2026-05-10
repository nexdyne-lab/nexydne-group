// TODO: confirm Brand Scalability Systems content with Brand & Storytelling practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function BrandScalabilitySystems() {
  return (
    <ServiceDetailTemplate
      hubName="Brand & Storytelling"
      hubSlug="brand-storytelling"
      hubHref="/capabilities/growth-marketing-sales/brand-storytelling"
      serviceName="Brand Scalability Systems"
      serviceSlug="brand-scalability-systems"
      heroSubtitle="Hyper-growth breaks rigid brands. We build modular design systems and messaging frameworks that evolve with your product roadmap. This ensures consistency across rapid deployments, new market entries, and product expansions without accruing design debt."
      heroImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=80"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "Brand Scalability Systems engagements delivered" },
        // TODO: confirm with practice lead before publish
        { number: "8 wks", label: "Median time to first measurable result" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Average lift on the primary outcome metric" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      // TODO: confirm challenge framing with practice lead before publish
      challenge="Most mid-market teams underestimate how hard it is to translate brand scalability systems from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      // TODO: confirm opportunity framing with practice lead before publish
      opportunity="Done well, brand scalability systems compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Brand & Storytelling team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where brand scalability systems earns its keep.",
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
        "A clear, prioritized roadmap that ties brand scalability systems to specific business outcomes leadership has signed off on.",
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
          slug: "healthcare-patient-engagement",
          title: "Provider boosts patient engagement with omnichannel touch",
          industry: "Healthcare · Brand & Storytelling",
          metric: "60%",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80",
        },
        {
          slug: "telehealth-platform",
          title: "Telehealth provider scales virtual care platform",
          industry: "Healthcare · Brand & Storytelling",
          metric: "5x",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "positioning-for-the-api-economy", name: "Positioning for the API Economy", href: "/capabilities/growth-marketing-sales/brand-storytelling/positioning-for-the-api-economy" },
        { slug: "humanizing-complex-architectures", name: "Humanizing Complex Architectures", href: "/capabilities/growth-marketing-sales/brand-storytelling/humanizing-complex-architectures" },
        { slug: "data-driven-brand-performance", name: "Data-Driven Brand Performance", href: "/capabilities/growth-marketing-sales/brand-storytelling/data-driven-brand-performance" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Brand & Storytelling lead"
    />
  );
}
