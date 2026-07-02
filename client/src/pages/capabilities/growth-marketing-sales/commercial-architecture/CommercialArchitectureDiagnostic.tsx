// TODO: confirm Commercial Architecture Diagnostic content with Commercial Architecture practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CommercialArchitectureDiagnostic() {
  return (
    <ServiceDetailTemplate
      hubName="Commercial Architecture"
      hubSlug="commercial-architecture"
      hubHref="/capabilities/growth-marketing-sales/commercial-architecture"
      serviceName="Commercial Architecture Diagnostic"
      serviceSlug="commercial-architecture-diagnostic"
      heroSubtitle="A focused two-week diagnostic that surfaces the highest-leverage opportunities in your commercial architecture system and builds the case for action."
      heroImage="/images/capabilities/cap-aerial-grid.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "Commercial Architecture Diagnostic engagements delivered" },
        // TODO: confirm with practice lead before publish
        { number: "8 wks", label: "Median time to first measurable result" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Average lift on the primary outcome metric" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      // TODO: confirm challenge framing with practice lead before publish
      challenge="Most mid-market teams underestimate how hard it is to translate commercial architecture diagnostic from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      // TODO: confirm opportunity framing with practice lead before publish
      opportunity="Done well, commercial architecture diagnostic compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Commercial Architecture team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where commercial architecture diagnostic earns its keep.",
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
        "A clear, prioritized roadmap that ties commercial architecture diagnostic to specific business outcomes leadership has signed off on.",
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
          image: "/images/capabilities/cap-dome-blue.jpg",
        },
        {
          slug: "fintech-payment-automation",
          title: "Fintech scales payment ops with intelligent automation",
          industry: "Fintech · Commercial Architecture",
          metric: "5x",
          image: "/images/capabilities/cap-data-bars.jpg",
        },
      ]}
      relatedServices={[
        { slug: "data-layer-the-single-source-of-truth", name: "Data Layer: The Single Source of Truth", href: "/capabilities/growth-marketing-sales/commercial-architecture/data-layer-the-single-source-of-truth" },
        { slug: "process-layer-frictionless-workflows", name: "Process Layer: Frictionless Workflows", href: "/capabilities/growth-marketing-sales/commercial-architecture/process-layer-frictionless-workflows" },
        { slug: "incentive-layer-aligned-motivations", name: "Incentive Layer: Aligned Motivations", href: "/capabilities/growth-marketing-sales/commercial-architecture/incentive-layer-aligned-motivations" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Commercial Architecture lead"
    />
  );
}
