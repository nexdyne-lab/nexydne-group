
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function ChangeManagement() {
  return (
    <ServiceDetailTemplate
      hubName="AI Strategy & Roadmap"
      hubSlug="ai-strategy-roadmap"
      hubHref="/capabilities/artificial-intelligence/ai-strategy-roadmap"
      serviceName="Change Management Planning"
      serviceSlug="change-management"
      heroSubtitle="Develop strategies for workforce adoption, skill building, and cultural change. AI success depends on people, not just technology. Our team brings engineering depth, design sensibility, and operating-model rigor to make this capability durable, measurable, and trusted across your business."
      heroImage="/images/industries/biz-team-bright.jpg"
      heroFocal="60% 40%"
      experienceStats={[
        { number: "40+", label: "Change Management Planning engagements delivered" },
        { number: "8 wks", label: "Median time to first production milestone" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate change management planning from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, change management planning compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our AI Strategy & Roadmap team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where change management planning earns its keep.",
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
        "A clear, prioritized roadmap that ties change management planning to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "generative-ai-document-automation", title: "Drafting policy documents in minutes with generative AI", industry: "Insurance", metric: "85%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "agentic-ai-service-resolution", title: "Resolving service requests end to end with AI agents", industry: "Financial Services", metric: "60%", image: "/images/cases/agentic-ai-service-resolution-hero.jpg" },
        { slug: "digital-twin-predictive-operations", title: "Cutting unplanned downtime with a digital twin", industry: "Manufacturing", metric: "45%", image: "/images/industries/mfg-robot-arm.jpg" },
      ]}
      relatedServices={[
        { slug: "opportunity-assessment", name: "AI Opportunity Assessment", href: "/capabilities/artificial-intelligence/ai-strategy-roadmap/opportunity-assessment" },
        { slug: "business-case", name: "Business Case Development", href: "/capabilities/artificial-intelligence/ai-strategy-roadmap/business-case" },
        { slug: "vendor-selection", name: "Technology & Vendor Selection", href: "/capabilities/artificial-intelligence/ai-strategy-roadmap/vendor-selection" },
      ]}
      ctaLeadName="Talk to our AI Strategy & Roadmap lead"
    />
  );
}
