
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function ContinuousRefinement() {
  return (
    <ServiceDetailTemplate
      hubName="Distinctive Expertise & Proven Methodologies"
      hubSlug="distinctive-expertise"
      hubHref="/capabilities/business-building/distinctive-expertise"
      serviceName="Continuous Refinement"
      serviceSlug="continuous-refinement"
      heroSubtitle="We update your playbooks based on implementation learnings, ensuring methodologies evolve with your business."
      heroImage="/images/capabilities/cap-women-meeting.jpg"
      heroFocal="55% 45%"
      experienceStats={[
        { number: "40+", label: "Continuous Refinement engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate continuous refinement from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, continuous refinement compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Distinctive Expertise & Proven Methodologies team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where continuous refinement earns its keep.",
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
        "A clear, prioritized roadmap that ties continuous refinement to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      relatedServices={[
        { slug: "playbook-selection", name: "Playbook Selection", href: "/capabilities/business-building/distinctive-expertise/playbook-selection" },
        { slug: "framework-customization", name: "Framework Customization", href: "/capabilities/business-building/distinctive-expertise/framework-customization" },
        { slug: "implementation-support", name: "Implementation Support", href: "/capabilities/business-building/distinctive-expertise/implementation-support" },
      ]}
      ctaLeadName="Talk to our Distinctive Expertise lead"
    />
  );
}
