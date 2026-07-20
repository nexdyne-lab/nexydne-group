
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function ProcessAutomation() {
  return (
    <CapabilityHubTemplate
      hubName="Process Automation"
      slug="process-automation"
      heroSubtitle="Transform manual workflows into intelligent automated systems. Combine RPA, AI, and workflow orchestration to eliminate bottlenecks, scale operations, and free your people to focus on judgment work."
      heroImage="/hero-automation.079f584b.jpg"
      experienceStats={[
        { number: "300+", label: "Automations shipped to production" },
        { number: "1M+", label: "Hours of manual work eliminated annually" },
        { number: "60%", label: "Average cycle-time reduction on automated processes" },
        { number: "8-week", label: "Median time from process discovery to live bot" },
      ]}
      ambitions={[
        {
          title: "Eliminate repetitive manual work",
          description:
            "Take the high-volume, rule-based tasks off your team’s plate so they spend their time on customers, judgment calls, and exceptions — not copy-paste.",
        },
        {
          title: "Scale operations without scaling headcount",
          description:
            "Absorb growth, peak seasons, and new product launches with a digital workforce that flexes up and down without hiring cycles.",
        },
        {
          title: "Connect systems end-to-end",
          description:
            "Stitch ERP, CRM, billing, and case-management tools into a single workflow so work moves automatically — instead of getting stuck in someone’s inbox.",
        },
        {
          title: "Read and act on unstructured documents",
          description:
            "Pull data from invoices, contracts, claims, and forms with intelligent document processing — and feed it straight into the next step of the process.",
        },
        {
          title: "Make automation handle exceptions intelligently",
          description:
            "Combine RPA with AI so workflows learn from edge cases, escalate sensibly, and don’t collapse the moment something doesn’t match the happy path.",
        },
        {
          title: "Build a sustainable automation capability",
          description:
            "Stand up the center of excellence, governance, and reusable components that turn one-off bots into a compounding portfolio of impact.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Process Automation ambition →"
      howWeCanHelp={[
        {
          title: "Process Mining & Discovery",
          description:
            "Analyze your existing workflows using process mining tools to identify automation opportunities, bottlenecks, and optimization potential.",
          href: "/capabilities/artificial-intelligence/process-automation/process-mining",
        },
        {
          title: "RPA Implementation",
          description:
            "Deploy robotic process automation using UiPath, Automation Anywhere, or Power Automate. We build bots that are maintainable, scalable, and resilient.",
          href: "/capabilities/artificial-intelligence/process-automation/rpa-implementation",
        },
        {
          title: "Intelligent Document Processing",
          description:
            "Extract data from invoices, contracts, and forms using AI-powered document understanding. Handle unstructured data at scale.",
          href: "/capabilities/artificial-intelligence/process-automation/intelligent-document-processing",
        },
        {
          title: "Workflow Orchestration",
          description:
            "Design and implement end-to-end workflow automation that coordinates across systems, people, and bots using platforms like Camunda or Temporal.",
          href: "/capabilities/artificial-intelligence/process-automation/workflow-orchestration",
        },
        {
          title: "AI-Enhanced Automation",
          description:
            "Combine RPA with machine learning for intelligent automation that handles exceptions, makes decisions, and improves over time.",
          href: "/capabilities/artificial-intelligence/process-automation/ai-enhanced-automation",
        },
        {
          title: "Center of Excellence",
          description:
            "Build internal automation capabilities with governance frameworks, training programs, and reusable component libraries.",
          href: "/capabilities/artificial-intelligence/process-automation/center-of-excellence",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Discover high-value opportunities",
          body: "We use process mining and stakeholder interviews to identify the processes with the highest automation ROI — balancing quick wins with strategic transformation work.",
        },
        {
          step: "02",
          title: "Design for resilience",
          body: "We build automations that handle exceptions gracefully, recover from failures automatically, and adapt to system changes without breaking on the next platform update.",
        },
        {
          step: "03",
          title: "Scale with governance",
          body: "We establish automation centers of excellence with reusable components, monitoring dashboards, and governance frameworks that enable sustainable growth, not bot sprawl.",
        },
      ]}
      featuredCases={[
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "45% fewer rejected claims", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/images/cases/insurance-claims-automation-hero.jpg" },
        { slug: "agentic-ai-service-resolution", title: "Resolving service requests end to end with AI agents", industry: "Financial Services", metric: "60%", image: "/images/cases/agentic-ai-service-resolution-hero.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/artificial-intelligence/agentic-ai", name: "Agentic AI" },
        { href: "/capabilities/artificial-intelligence/generative-ai", name: "Generative AI" },
        { href: "/capabilities/data-transformation", name: "Data Transformation" },
      ]}
      ctaLeadName="Talk to our Process Automation lead"
    />
  );
}

