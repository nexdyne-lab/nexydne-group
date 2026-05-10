// TODO: confirm CX Culture content with Customer Experience practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CxCulture() {
  return (
    <ServiceDetailTemplate
      hubName="Customer Experience"
      hubSlug="customer-experience"
      hubHref="/capabilities/growth-marketing-sales/customer-experience"
      serviceName="CX Culture"
      serviceSlug="cx-culture"
      heroSubtitle="Build a customer-centric culture that sustains improvement. Develop employee engagement and empowerment programs."
      heroImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1600&q=80"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "CX Culture engagements delivered" },
        // TODO: confirm with practice lead before publish
        { number: "8 wks", label: "Median time to first measurable result" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Average lift on the primary outcome metric" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      // TODO: confirm challenge framing with practice lead before publish
      challenge="Most mid-market teams underestimate how hard it is to translate cx culture from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      // TODO: confirm opportunity framing with practice lead before publish
      opportunity="Done well, cx culture compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Customer Experience team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where cx culture earns its keep.",
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
        "A clear, prioritized roadmap that ties cx culture to specific business outcomes leadership has signed off on.",
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
          industry: "Healthcare · Customer Experience",
          metric: "60%",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80",
        },
        {
          slug: "hospital-clinical-workflow",
          title: "Hospital system rebuilds clinical workflows with low-code",
          industry: "Healthcare · Customer Experience",
          metric: "45%",
          image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "cx-strategy", name: "CX Strategy", href: "/capabilities/growth-marketing-sales/customer-experience/cx-strategy" },
        { slug: "journey-design", name: "Journey Design", href: "/capabilities/growth-marketing-sales/customer-experience/journey-design" },
        { slug: "service-design", name: "Service Design", href: "/capabilities/growth-marketing-sales/customer-experience/service-design" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Customer Experience lead"
    />
  );
}
