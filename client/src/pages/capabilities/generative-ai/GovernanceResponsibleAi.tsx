
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function GovernanceResponsibleAi() {
  return (
    <ServiceDetailTemplate
      hubName="Generative AI"
      hubSlug="generative-ai"
      hubHref="/capabilities/artificial-intelligence/generative-ai"
      serviceName="Governance & Responsible AI"
      serviceSlug="governance-responsible-ai"
      heroSubtitle="Establish guardrails, monitoring systems, and governance frameworks to ensure your GenAI deployments are safe, compliant, and aligned with your values. Our team brings engineering depth, design sensibility, and operating-model rigor to make this capability durable, measurable, and trusted across your business."
      heroImage="/images/capabilities/cap-colonnade.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "40+", label: "Governance & Responsible AI engagements delivered" },
        { number: "8 wks", label: "Median time to first production milestone" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate governance & responsible ai from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, governance & responsible ai compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our Generative AI team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where governance & responsible ai earns its keep.",
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
        "A clear, prioritized roadmap that ties governance & responsible ai to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
      ]}
      relatedServices={[
        { slug: "strategy-roadmap", name: "GenAI Strategy & Roadmap", href: "/capabilities/artificial-intelligence/generative-ai/strategy-roadmap" },
        { slug: "technical-architecture", name: "Technical Architecture", href: "/capabilities/artificial-intelligence/generative-ai/technical-architecture" },
        { slug: "custom-agents", name: "Custom Agent Development", href: "/capabilities/artificial-intelligence/generative-ai/custom-agents" },
      ]}
      ctaLeadName="Talk to our Generative AI lead"
    />
  );
}
