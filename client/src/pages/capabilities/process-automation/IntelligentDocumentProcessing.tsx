
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function IntelligentDocumentProcessing() {
  return (
    <ServiceDetailTemplate
      hubName="Process Automation"
      hubSlug="process-automation"
      hubHref="/capabilities/artificial-intelligence/process-automation"
      serviceName="Intelligent Document Processing"
      serviceSlug="intelligent-document-processing"
      heroSubtitle="Extract data from invoices, contracts, and forms using AI-powered document understanding. Handle unstructured data at scale. Our team brings engineering depth, design sensibility, and operating-model rigor to make this capability durable, measurable, and trusted across your business."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "40+", label: "Intelligent Document Processing engagements delivered" },
        { number: "8 wks", label: "Median time to first production milestone" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate intelligent document processing from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, intelligent document processing compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our Process Automation team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where intelligent document processing earns its keep.",
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
        "A clear, prioritized roadmap that ties intelligent document processing to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
        { slug: "agentic-ai-service-resolution", title: "Resolving service requests end to end with AI agents", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-trader.jpg" },
      ]}
      relatedServices={[
        { slug: "process-mining", name: "Process Mining & Discovery", href: "/capabilities/artificial-intelligence/process-automation/process-mining" },
        { slug: "rpa-implementation", name: "RPA Implementation", href: "/capabilities/artificial-intelligence/process-automation/rpa-implementation" },
        { slug: "workflow-orchestration", name: "Workflow Orchestration", href: "/capabilities/artificial-intelligence/process-automation/workflow-orchestration" },
      ]}
      ctaLeadName="Talk to our Process Automation lead"
    />
  );
}
