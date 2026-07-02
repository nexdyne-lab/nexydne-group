// TODO: confirm ESG Brand Positioning content with Green Growth practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function EsgBrandPositioning() {
  return (
    <ServiceDetailTemplate
      hubName="Green Growth"
      hubSlug="green-growth"
      hubHref="/capabilities/growth-marketing-sales/green-growth"
      serviceName="ESG Brand Positioning"
      serviceSlug="esg-brand-positioning"
      heroSubtitle="Build authentic sustainability narratives that resonate with stakeholders. Develop ESG communications that build trust and differentiate your brand."
      heroImage="/images/capabilities/cap-lightbulb-idea.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "ESG Brand Positioning engagements delivered" },
        // TODO: confirm with practice lead before publish
        { number: "8 wks", label: "Median time to first measurable result" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Average lift on the primary outcome metric" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      // TODO: confirm challenge framing with practice lead before publish
      challenge="Most mid-market teams underestimate how hard it is to translate esg brand positioning from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      // TODO: confirm opportunity framing with practice lead before publish
      opportunity="Done well, esg brand positioning compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Green Growth team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where esg brand positioning earns its keep.",
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
        "A clear, prioritized roadmap that ties esg brand positioning to specific business outcomes leadership has signed off on.",
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
          slug: "consulting-knowledge-management",
          title: "Consultancy unlocks 30 years of IP with AI knowledge graph",
          industry: "Professional Services · Green Growth",
          metric: "4x",
          image: "/images/capabilities/cap-wave.jpg",
        },
        {
          slug: "legal-document-intelligence",
          title: "In-house legal team builds doc intelligence platform",
          industry: "Legal Services · Green Growth",
          metric: "60%",
          image: "/images/industries/energy-solar.jpg",
        },
      ]}
      relatedServices={[
        { slug: "sustainable-growth-strategy", name: "Sustainable Growth Strategy", href: "/capabilities/growth-marketing-sales/green-growth/sustainable-growth-strategy" },
        { slug: "green-product-innovation", name: "Green Product Innovation", href: "/capabilities/growth-marketing-sales/green-growth/green-product-innovation" },
        { slug: "circular-economy-models", name: "Circular Economy Models", href: "/capabilities/growth-marketing-sales/green-growth/circular-economy-models" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Green Growth lead"
    />
  );
}
