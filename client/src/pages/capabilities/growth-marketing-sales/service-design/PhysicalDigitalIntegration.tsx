// TODO: confirm Physical-Digital Integration content with Service Design practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function PhysicalDigitalIntegration() {
  return (
    <ServiceDetailTemplate
      hubName="Service Design"
      hubSlug="service-design"
      hubHref="/capabilities/growth-marketing-sales/service-design"
      serviceName="Physical-Digital Integration"
      serviceSlug="physical-digital-integration"
      heroSubtitle="The boundary between online and offline is dissolving. We design hybrid experiences where digital intelligence enhances physical interactions. From smart retail spaces to connected field services, we ensure continuity and context across the physical-digital divide."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      heroFocal="50% 45%"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "Physical-Digital Integration engagements delivered" },
        // TODO: confirm with practice lead before publish
        { number: "8 wks", label: "Median time to first measurable result" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Average lift on the primary outcome metric" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      // TODO: confirm challenge framing with practice lead before publish
      challenge="Most mid-market teams underestimate how hard it is to translate physical-digital integration from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      // TODO: confirm opportunity framing with practice lead before publish
      opportunity="Done well, physical-digital integration compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Service Design team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where physical-digital integration earns its keep.",
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
        "A clear, prioritized roadmap that ties physical-digital integration to specific business outcomes leadership has signed off on.",
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
          slug: "telehealth-platform",
          title: "Telehealth provider scales virtual care platform",
          industry: "Healthcare · Service Design",
          metric: "5x",
          image: "/images/capabilities/cap-diverse-team.jpg",
        },
        {
          slug: "healthcare-patient-engagement",
          title: "Provider boosts patient engagement with omnichannel touch",
          industry: "Healthcare · Service Design",
          metric: "60%",
          image: "/images/capabilities/cap-mobile-woman.jpg",
        },
      ]}
      relatedServices={[
        { slug: "service-blueprinting", name: "Service Blueprinting", href: "/capabilities/growth-marketing-sales/service-design/service-blueprinting" },
        { slug: "employee-experience-ex-design", name: "Employee Experience (EX) Design", href: "/capabilities/growth-marketing-sales/service-design/employee-experience-ex-design" },
        { slug: "service-prototyping-and-piloting", name: "Service Prototyping & Piloting", href: "/capabilities/growth-marketing-sales/service-design/service-prototyping-and-piloting" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Service Design lead"
    />
  );
}
