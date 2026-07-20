
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function AgenticAI() {
  return (
    <CapabilityHubTemplate
      hubName="Agentic AI"
      slug="agentic-ai"
      heroSubtitle="Deploy autonomous AI agents that reason, plan, and execute complex multi-step tasks — transforming how your organization operates, scales, and serves customers without adding headcount."
      heroImage="/images/industries/tech-glasses.jpg"
      heroFocal="62% 45%"
      experienceStats={[
        { number: "60+", label: "Production agent systems shipped" },
        { number: "70%", label: "Average task completion lift vs. manual workflows" },
        { number: "24/7", label: "Always-on coverage for repetitive workflows" },
        { number: "6-week", label: "Median time to first agent in production" },
      ]}
      ambitions={[
        {
          title: "Automate complex multi-step workflows",
          description:
            "Move beyond single-task bots to agents that plan, decide, and execute across systems — finishing work that used to bounce between five tools and three teams.",
        },
        {
          title: "Build AI assistants that take real action",
          description:
            "Stand up agents that don’t just answer questions, but file tickets, update records, place orders, and close loops in your real systems of record.",
        },
        {
          title: "Scale operations without scaling headcount",
          description:
            "Use agentic capacity to absorb growth, seasonality, and new product launches without proportionally adding people in the back office.",
        },
        {
          title: "Augment expert teams, not replace them",
          description:
            "Free your senior people from rote work so they spend their time on judgment calls — with agents handling research, drafting, and reconciliation alongside them.",
        },
        {
          title: "Run agents safely in regulated environments",
          description:
            "Earn the right to autonomy. Build the guardrails, escalation paths, and audit trails that let you deploy agents in finance, healthcare, and legal contexts with confidence.",
        },
        {
          title: "Compound learning across the agent fleet",
          description:
            "Capture every interaction as training signal. Improve prompts, tools, and policies continuously so the system you ship in Q1 is meaningfully better by Q4.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Agentic AI ambition →"
      howWeCanHelp={[
        {
          title: "Agent Architecture Design",
          description:
            "Design multi-agent systems with clear roles, communication protocols, and orchestration patterns that scale with your business complexity.",
          href: "/capabilities/artificial-intelligence/agentic-ai/agent-architecture",
        },
        {
          title: "Tool & API Integration",
          description:
            "Connect agents to your existing systems — CRMs, ERPs, databases, and APIs — enabling them to take real action in your business environment.",
          href: "/capabilities/artificial-intelligence/agentic-ai/tool-api-integration",
        },
        {
          title: "Reasoning & Planning Frameworks",
          description:
            "Implement advanced reasoning capabilities using chain-of-thought, tree-of-thought, and ReAct patterns for complex decision-making.",
          href: "/capabilities/artificial-intelligence/agentic-ai/reasoning-planning",
        },
        {
          title: "Guardrails & Safety Systems",
          description:
            "Build robust safety mechanisms including input validation, output filtering, and human-in-the-loop checkpoints for high-stakes decisions.",
          href: "/capabilities/artificial-intelligence/agentic-ai/guardrails-safety",
        },
        {
          title: "Memory & Context Management",
          description:
            "Design persistent memory systems that allow agents to learn from past interactions and maintain context across long-running tasks.",
          href: "/capabilities/artificial-intelligence/agentic-ai/memory-context",
        },
        {
          title: "Monitoring & Observability",
          description:
            "Implement comprehensive logging, tracing, and analytics to understand agent behavior, identify issues, and continuously improve performance.",
          href: "/capabilities/artificial-intelligence/agentic-ai/monitoring-observability",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Define the agent’s purpose",
          body: "We start by identifying high-value use cases where autonomous agents can have the most impact — focusing on repetitive, complex tasks that currently bottleneck your operations.",
        },
        {
          step: "02",
          title: "Design with guardrails",
          body: "We architect agent systems with clear boundaries, escalation paths, and human oversight mechanisms. Autonomy is earned through demonstrated reliability, not assumed.",
        },
        {
          step: "03",
          title: "Deploy and iterate",
          body: "We launch with controlled pilots, monitor agent behavior closely, and continuously refine based on real-world performance. Agents improve over time through feedback loops.",
        },
      ]}
      featuredCases={[
        { slug: "agentic-ai-service-resolution", title: "Resolving service requests end to end with AI agents", industry: "Financial Services", metric: "60%", image: "/images/cases/agentic-ai-service-resolution-hero.jpg" },
        { slug: "generative-ai-document-automation", title: "Drafting policy documents in minutes with generative AI", industry: "Insurance", metric: "85%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/artificial-intelligence/generative-ai", name: "Generative AI" },
        { href: "/capabilities/artificial-intelligence/custom-model-development", name: "Custom Model Development" },
        { href: "/capabilities/artificial-intelligence/process-automation", name: "Process Automation" },
      ]}
      ctaLeadName="Talk to our Agentic AI lead"
    />
  );
}

