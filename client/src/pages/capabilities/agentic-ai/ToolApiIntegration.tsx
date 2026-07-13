
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function ToolApiIntegration() {
  return (
    <ServiceDetailTemplate
      hubName="Agentic AI"
      hubSlug="agentic-ai"
      hubHref="/capabilities/artificial-intelligence/agentic-ai"
      serviceName="Tool & API Integration"
      serviceSlug="tool-api-integration"
      heroSubtitle="Connect agents to your existing systems — CRMs, ERPs, databases, and APIs — enabling them to take real action in your business environment. Our team brings engineering depth, design sensibility, and operating-model rigor to make this capability durable, measurable, and trusted across your business."
      heroImage="/images/capabilities/cap-iot-network.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "40+", label: "Tool & API Integration engagements delivered" },
        { number: "8 wks", label: "Median time to first production milestone" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate tool & api integration from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, tool & api integration compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our Agentic AI team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where tool & api integration earns its keep.",
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
        "A clear, prioritized roadmap that ties tool & api integration to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
      ]}
      relatedServices={[
        { slug: "agent-architecture", name: "Agent Architecture Design", href: "/capabilities/artificial-intelligence/agentic-ai/agent-architecture" },
        { slug: "reasoning-planning", name: "Reasoning & Planning Frameworks", href: "/capabilities/artificial-intelligence/agentic-ai/reasoning-planning" },
        { slug: "guardrails-safety", name: "Guardrails & Safety Systems", href: "/capabilities/artificial-intelligence/agentic-ai/guardrails-safety" },
      ]}
      ctaLeadName="Talk to our Agentic AI lead"
    />
  );
}
