// TODO: confirm GenAI Strategy & Roadmap content with Generative AI practice lead before publish.
// TODO: confirm hero copy with content lead.
// TODO: confirm Experience & Impact stats with practice lead before publish.
// TODO: confirm outcomes list with practice lead before publish.
// TODO: confirm CTA lead name + role + photo placeholder before publish.

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
      heroImage="/blog-ai-agents.eba3d75f.jpg"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "GenAI Strategy & Roadmap engagements delivered" },
        // TODO: confirm with practice lead before publish
        { number: "8 wks", label: "Median time to first production milestone" },
        // TODO: confirm with practice lead before publish
        { number: "3x", label: "Average lift on the primary outcome metric" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate genai strategy & roadmap from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, genai strategy & roadmap compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our Generative AI team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        // TODO: confirm pillar copy with practice lead before publish
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where genai strategy & roadmap earns its keep.",
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
        "A clear, prioritized roadmap that ties genai strategy & roadmap to specific business outcomes leadership has signed off on.",
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
          slug: "consulting-knowledge-management",
          title: "Transforming knowledge management for a global consulting firm",
          industry: "Professional Services",
          metric: "3x",
          image: "/case-strategy-consulting.dfdd1294.jpg",
        },
        {
          slug: "law-firm-contract-automation",
          title: "How contract automation transformed a leading law firm’s operations",
          industry: "Professional Services",
          metric: "65%",
          image: "/case-law-firm-meeting.401c96db.jpg",
        },
      ]}
      relatedServices={[
        { slug: "technical-architecture", name: "Technical Architecture", href: "/capabilities/artificial-intelligence/generative-ai/technical-architecture" },
        { slug: "custom-agents", name: "Custom Agent Development", href: "/capabilities/artificial-intelligence/generative-ai/custom-agents" },
        { slug: "rag-knowledge-systems", name: "RAG & Knowledge Systems", href: "/capabilities/artificial-intelligence/generative-ai/rag-knowledge-systems" },
      ]}
      // TODO: confirm CTA lead name + title + photo before publish
      ctaLeadName="Talk to our Generative AI lead"
    />
  );
}
