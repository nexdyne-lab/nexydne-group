// TODO: confirm Data Layer: The Single Source of Truth content with Commercial Architecture practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function DataLayerTheSingleSourceOfTruth() {
  return (
    <ServiceDetailTemplate
      hubName="Commercial Architecture"
      hubSlug="commercial-architecture"
      hubHref="/capabilities/growth-marketing-sales/commercial-architecture"
      serviceName="Data Layer: The Single Source of Truth"
      serviceSlug="data-layer-the-single-source-of-truth"
      heroSubtitle="Just as a software application relies on a consistent database, your commercial organization needs a unified data model."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "Data Layer: The Single Source of Truth engagements delivered" },
        // TODO: confirm with practice lead before publish
        { number: "8 wks", label: "Median time to first measurable result" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Average lift on the primary outcome metric" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      // TODO: confirm challenge framing with practice lead before publish
      challenge="Most mid-market teams underestimate how hard it is to translate data layer: the single source of truth from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      // TODO: confirm opportunity framing with practice lead before publish
      opportunity="Done well, data layer: the single source of truth compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Commercial Architecture team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where data layer: the single source of truth earns its keep.",
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
        "A clear, prioritized roadmap that ties data layer: the single source of truth to specific business outcomes leadership has signed off on.",
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
          slug: "accounting-audit-automation",
          title: "Accounting firm modernizes audit workflows",
          industry: "Professional Services · Commercial Architecture",
          metric: "40%",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
        },
        {
          slug: "law-firm-contract-automation",
          title: "Law firm slashes contract review with secure GenAI",
          industry: "Legal Services · Commercial Architecture",
          metric: "50%",
          image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "process-layer-frictionless-workflows", name: "Process Layer: Frictionless Workflows", href: "/capabilities/growth-marketing-sales/commercial-architecture/process-layer-frictionless-workflows" },
        { slug: "incentive-layer-aligned-motivations", name: "Incentive Layer: Aligned Motivations", href: "/capabilities/growth-marketing-sales/commercial-architecture/incentive-layer-aligned-motivations" },
        { slug: "commercial-architecture-diagnostic", name: "Commercial Architecture Diagnostic", href: "/capabilities/growth-marketing-sales/commercial-architecture/commercial-architecture-diagnostic" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Commercial Architecture lead"
    />
  );
}
