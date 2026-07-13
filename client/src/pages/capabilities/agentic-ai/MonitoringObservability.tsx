
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function MonitoringObservability() {
  return (
    <ServiceDetailTemplate
      hubName="Agentic AI"
      hubSlug="agentic-ai"
      hubHref="/capabilities/artificial-intelligence/agentic-ai"
      serviceName="Monitoring & Observability"
      serviceSlug="monitoring-observability"
      heroSubtitle="Implement comprehensive logging, tracing, and analytics to understand agent behavior, identify issues, and continuously improve performance. Our team brings engineering depth, design sensibility, and operating-model rigor to make this capability durable, measurable, and trusted across your business."
      heroImage="/images/industries/fin-monitors.jpg"
      heroFocal="60% 45%"
      experienceStats={[
        { number: "40+", label: "Monitoring & Observability engagements delivered" },
        { number: "8 wks", label: "Median time to first production milestone" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate monitoring & observability from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, monitoring & observability compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our Agentic AI team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where monitoring & observability earns its keep.",
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
        "A clear, prioritized roadmap that ties monitoring & observability to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
      ]}
      relatedServices={[
        { slug: "agent-architecture", name: "Agent Architecture Design", href: "/capabilities/artificial-intelligence/agentic-ai/agent-architecture" },
        { slug: "tool-api-integration", name: "Tool & API Integration", href: "/capabilities/artificial-intelligence/agentic-ai/tool-api-integration" },
        { slug: "reasoning-planning", name: "Reasoning & Planning Frameworks", href: "/capabilities/artificial-intelligence/agentic-ai/reasoning-planning" },
      ]}
      ctaLeadName="Talk to our Agentic AI lead"
    />
  );
}
