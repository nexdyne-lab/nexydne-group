
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function PlaybookSelection() {
  return (
    <ServiceDetailTemplate
      hubName="Distinctive Expertise & Proven Methodologies"
      hubSlug="distinctive-expertise"
      hubHref="/capabilities/business-building/distinctive-expertise"
      serviceName="Playbook Selection"
      serviceSlug="playbook-selection"
      heroSubtitle="We match your business challenge to our library of 200+ proven playbooks, selecting the frameworks most relevant to your industry and growth stage."
      heroImage="/images/capabilities/cap-diverse-team.jpg"
      heroFocal="45% 50%"
      experienceStats={[
        { number: "40+", label: "Playbook Selection engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate playbook selection from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, playbook selection compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Distinctive Expertise & Proven Methodologies team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where playbook selection earns its keep.",
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
        "A clear, prioritized roadmap that ties playbook selection to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/cases/pe-industrial-transformation-hero.jpg" },
        { slug: "aerospace-digital-engineering", title: "How a global aircraft maker brought new programs to market 40% faster", industry: "Aerospace & Defense", metric: "40%", image: "/images/industries/aero-rocket.jpg" },
        { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", industry: "Manufacturing", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg" },
      ]}
      relatedServices={[
        { slug: "framework-customization", name: "Framework Customization", href: "/capabilities/business-building/distinctive-expertise/framework-customization" },
        { slug: "implementation-support", name: "Implementation Support", href: "/capabilities/business-building/distinctive-expertise/implementation-support" },
        { slug: "knowledge-transfer", name: "Knowledge Transfer", href: "/capabilities/business-building/distinctive-expertise/knowledge-transfer" },
      ]}
      ctaLeadName="Talk to our Distinctive Expertise lead"
    />
  );
}
