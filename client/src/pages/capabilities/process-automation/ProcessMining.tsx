
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function ProcessMining() {
  return (
    <ServiceDetailTemplate
      hubName="Process Automation"
      hubSlug="process-automation"
      hubHref="/capabilities/artificial-intelligence/process-automation"
      serviceName="Process Mining & Discovery"
      serviceSlug="process-mining"
      heroSubtitle="Analyze your existing workflows using process mining tools to identify automation opportunities, bottlenecks, and optimization potential. Our team brings engineering depth, design sensibility, and operating-model rigor to make this capability durable, measurable, and trusted across your business."
      heroImage="/blog-process-mining.50313a07.jpg"
      experienceStats={[
        { number: "40+", label: "Process Mining & Discovery engagements delivered" },
        { number: "8 wks", label: "Median time to first production milestone" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate process mining & discovery from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, process mining & discovery compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our Process Automation team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where process mining & discovery earns its keep.",
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
        "A clear, prioritized roadmap that ties process mining & discovery to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "45% fewer rejected claims", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/images/cases/insurance-claims-automation-hero.jpg" },
        { slug: "agentic-ai-service-resolution", title: "Resolving service requests end to end with AI agents", industry: "Financial Services", metric: "60%", image: "/images/cases/agentic-ai-service-resolution-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "rpa-implementation", name: "RPA Implementation", href: "/capabilities/artificial-intelligence/process-automation/rpa-implementation" },
        { slug: "intelligent-document-processing", name: "Intelligent Document Processing", href: "/capabilities/artificial-intelligence/process-automation/intelligent-document-processing" },
        { slug: "workflow-orchestration", name: "Workflow Orchestration", href: "/capabilities/artificial-intelligence/process-automation/workflow-orchestration" },
      ]}
      ctaLeadName="Talk to our Process Automation lead"
    />
  );
}
