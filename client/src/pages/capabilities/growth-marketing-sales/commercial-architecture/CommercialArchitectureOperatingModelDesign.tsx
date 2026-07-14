
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CommercialArchitectureOperatingModelDesign() {
  return (
    <ServiceDetailTemplate
      hubName="Commercial Architecture"
      hubSlug="commercial-architecture"
      hubHref="/capabilities/growth-marketing-sales/commercial-architecture"
      serviceName="Commercial Architecture Operating Model Design"
      serviceSlug="commercial-architecture-operating-model-design"
      heroSubtitle="Translate commercial architecture ambition into the team structure, governance cadence, and KPIs that make execution repeatable rather than heroic."
      heroImage="/images/capabilities/cap-dome-blue.jpg"
      heroFocal="55% 45%"
      experienceStats={[
        { number: "40+", label: "Commercial Architecture Operating Model Design engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate commercial architecture operating model design from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, commercial architecture operating model design compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Commercial Architecture team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where commercial architecture operating model design earns its keep.",
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
        "A clear, prioritized roadmap that ties commercial architecture operating model design to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "insurance-digital-distribution", title: "Turning a call-center insurer into a digital one", industry: "Insurance", metric: "50%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
      ]}
      relatedServices={[
        { slug: "data-layer-the-single-source-of-truth", name: "Data Layer: The Single Source of Truth", href: "/capabilities/growth-marketing-sales/commercial-architecture/data-layer-the-single-source-of-truth" },
        { slug: "process-layer-frictionless-workflows", name: "Process Layer: Frictionless Workflows", href: "/capabilities/growth-marketing-sales/commercial-architecture/process-layer-frictionless-workflows" },
        { slug: "incentive-layer-aligned-motivations", name: "Incentive Layer: Aligned Motivations", href: "/capabilities/growth-marketing-sales/commercial-architecture/incentive-layer-aligned-motivations" },
      ]}
      ctaLeadName="Talk to our Commercial Architecture lead"
    />
  );
}
