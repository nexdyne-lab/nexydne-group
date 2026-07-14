
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyRoadmap() {
  return (
    <ServiceDetailTemplate
      hubName="Generative AI"
      hubSlug="generative-ai"
      hubHref="/capabilities/artificial-intelligence/generative-ai"
      serviceName="GenAI Strategy & Roadmap"
      serviceSlug="strategy-roadmap"
      heroSubtitle="Define a high-impact Generative AI roadmap with specific goals, quantified ROI, and detailed execution plans including feasibility studies and risk assessments. Our team brings engineering depth, design sensibility, and operating-model rigor to make this capability durable, measurable, and trusted across your business."
      heroImage="/images/capabilities/cap-telescope.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "40+", label: "GenAI Strategy & Roadmap engagements delivered" },
        { number: "8 wks", label: "Median time to first production milestone" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate genai strategy & roadmap from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, genai strategy & roadmap compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our Generative AI team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where genai strategy & roadmap earns its keep.",
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
        "A clear, prioritized roadmap that ties genai strategy & roadmap to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "generative-ai-document-automation", title: "Drafting policy documents in minutes with generative AI", industry: "Insurance", metric: "85%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "agentic-ai-service-resolution", title: "Resolving service requests end to end with AI agents", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-trader.jpg" },
        { slug: "insurance-ai-underwriting", title: "Quoting commercial business in a day, not a week", industry: "Insurance", metric: "40%", image: "/images/industries/fin-handshake-city.jpg" },
      ]}
      relatedServices={[
        { slug: "technical-architecture", name: "Technical Architecture", href: "/capabilities/artificial-intelligence/generative-ai/technical-architecture" },
        { slug: "custom-agents", name: "Custom Agent Development", href: "/capabilities/artificial-intelligence/generative-ai/custom-agents" },
        { slug: "rag-knowledge-systems", name: "RAG & Knowledge Systems", href: "/capabilities/artificial-intelligence/generative-ai/rag-knowledge-systems" },
      ]}
      ctaLeadName="Talk to our Generative AI lead"
    />
  );
}
