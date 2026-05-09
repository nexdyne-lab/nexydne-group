// TODO: David — confirm Foundation Build content with Digital Transformation Accelerator practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function FoundationBuild() {
  return (
    <ServiceDetailTemplate
      hubName="Digital Transformation Accelerator"
      hubSlug="digital-transformation-accelerator"
      hubHref="/capabilities/business-building/digital-transformation-accelerator"
      serviceName="Foundation Build"
      serviceSlug="foundation-build"
      heroSubtitle="We establish core architecture components including cloud infrastructure, data platforms, and integration frameworks. This phase focuses on building stable foundations that support subsequent business migrations."
      heroImage="/images/digital-transformation-abstract.jpg"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "Foundation Build engagements delivered" },
        // TODO: confirm with practice lead before publish
        { number: "8 wks", label: "Median time to first measurable result" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Average lift on the primary outcome metric" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      // TODO: confirm challenge framing with practice lead before publish
      challenge="Most mid-market teams underestimate how hard it is to translate foundation build from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      // TODO: confirm opportunity framing with practice lead before publish
      opportunity="Done well, foundation build compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Digital Transformation Accelerator team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where foundation build earns its keep.",
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
        "A clear, prioritized roadmap that ties foundation build to specific business outcomes leadership has signed off on.",
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
          slug: "logistics-tech-spinoff",
          title: "Logistics Company Builds Technology Spin-Off",
          industry: "Logistics · Business Building",
          metric: "$28M",
          image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80",
        },
        {
          slug: "ecommerce-platform-launch",
          title: "Industrial Distributor Launches B2B E-commerce Platform",
          industry: "Industrial Distribution · Business Building",
          metric: "35%",
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "architecture-assessment", name: "Architecture Assessment", href: "/capabilities/business-building/digital-transformation-accelerator/architecture-assessment" },
        { slug: "capability-migration", name: "Capability Migration", href: "/capabilities/business-building/digital-transformation-accelerator/capability-migration" },
        { slug: "optimization-governance", name: "Optimization & Governance", href: "/capabilities/business-building/digital-transformation-accelerator/optimization-governance" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Digital Transformation Accelerator lead"
    />
  );
}
