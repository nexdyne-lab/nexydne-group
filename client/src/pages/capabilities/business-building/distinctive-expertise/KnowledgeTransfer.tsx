
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function KnowledgeTransfer() {
  return (
    <ServiceDetailTemplate
      hubName="Distinctive Expertise & Proven Methodologies"
      hubSlug="distinctive-expertise"
      hubHref="/capabilities/business-building/distinctive-expertise"
      serviceName="Knowledge Transfer"
      serviceSlug="knowledge-transfer"
      heroSubtitle="We train your team to use and adapt our methodologies independently, building internal capability for future initiatives."
      heroImage="/images/industries/meeting-topview.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "40+", label: "Knowledge Transfer engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate knowledge transfer from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, knowledge transfer compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Distinctive Expertise & Proven Methodologies team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where knowledge transfer earns its keep.",
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
        "A clear, prioritized roadmap that ties knowledge transfer to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "pe-industrial-transformation", title: "How a Fund Added Seven Points of EBITDA Margin at an Industrial Manufacturer", industry: "Private Equity", metric: "7 pts EBITDA margin", image: "/images/cases/pe-industrial-transformation-hero.jpg" },
        { slug: "aerospace-digital-engineering", title: "How a global aircraft maker brought new programs to market 40% faster", industry: "Aerospace & Defense", metric: "40%", image: "/images/industries/aero-rocket.jpg" },
        { slug: "industrial-connected-products", title: "Building a Recurring Services Business on Machines Already Sold", industry: "Manufacturing", metric: "2,700 machines on connected services", image: "/images/capabilities/cap-battery-factory.jpg" },
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
