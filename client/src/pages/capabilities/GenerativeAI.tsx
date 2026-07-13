
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function GenerativeAI() {
  return (
    <CapabilityHubTemplate
      hubName="Generative AI"
      slug="generative-ai"
      heroSubtitle="Deploy intelligent assistants and content systems that handle complex inquiries, draft documentation, and accelerate every knowledge worker — freeing your workforce for higher-value strategic impact."
      heroImage="/images/capabilities/cap-ai-search.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "100+", label: "GenAI use cases shipped to production" },
        { number: "40%", label: "Average productivity lift on knowledge work" },
        { number: "50%", label: "Reduction in time spent drafting and researching" },
        { number: "12-week", label: "Typical strategy-to-production cycle" },
      ]}
      ambitions={[
        {
          title: "Deploy generative AI responsibly",
          description:
            "Move past pilots into production with the guardrails, evaluations, and human oversight your risk, legal, and customer-trust teams will sign off on.",
        },
        {
          title: "Build domain-specific AI assistants",
          description:
            "Stand up assistants for support, sales, legal, finance, and engineering that actually know your products, your policies, and your tone.",
        },
        {
          title: "Ground AI in your proprietary knowledge",
          description:
            "Use retrieval-augmented generation to anchor responses in your documents, policies, and data — so answers cite sources and reflect what you actually know.",
        },
        {
          title: "Lift productivity across the workforce",
          description:
            "Roll out generative AI to research, draft, summarize, and translate alongside your teams — giving every knowledge worker a force multiplier.",
        },
        {
          title: "Customize models without losing safety",
          description:
            "Fine-tune and prompt-engineer for your domain while keeping evaluation, monitoring, and content filters in place — so quality goes up and risk goes down.",
        },
        {
          title: "Govern GenAI as a real platform",
          description:
            "Build the access controls, usage policies, cost monitoring, and audit trails that make generative AI a managed enterprise capability, not a shadow-IT project.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Generative AI ambition →"
      howWeCanHelp={[
        {
          title: "GenAI Strategy & Roadmap",
          description:
            "Define a high-impact Generative AI roadmap with specific goals, quantified ROI, and detailed execution plans including feasibility studies and risk assessments.",
          href: "/capabilities/artificial-intelligence/generative-ai/strategy-roadmap",
        },
        {
          title: "Technical Architecture",
          description:
            "Design the data architecture and infrastructure required to support enterprise-grade LLMs, connecting foundation models with your proprietary data securely.",
          href: "/capabilities/artificial-intelligence/generative-ai/technical-architecture",
        },
        {
          title: "Custom Agent Development",
          description:
            "Build intelligent agents tailored to your specific use cases — from customer service bots to internal knowledge assistants and code generation tools.",
          href: "/capabilities/artificial-intelligence/generative-ai/custom-agents",
        },
        {
          title: "RAG & Knowledge Systems",
          description:
            "Implement retrieval-augmented generation systems that ground AI responses in your proprietary data, reducing hallucinations and improving accuracy.",
          href: "/capabilities/artificial-intelligence/generative-ai/rag-knowledge-systems",
        },
        {
          title: "Fine-Tuning & Optimization",
          description:
            "Customize foundation models for your domain through fine-tuning, prompt engineering, and continuous optimization based on real-world performance.",
          href: "/capabilities/artificial-intelligence/generative-ai/fine-tuning-optimization",
        },
        {
          title: "Governance & Responsible AI",
          description:
            "Establish guardrails, monitoring systems, and governance frameworks to ensure your GenAI deployments are safe, compliant, and aligned with your values.",
          href: "/capabilities/artificial-intelligence/generative-ai/governance-responsible-ai",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Identify high-impact use cases",
          body: "We start by mapping your value chain to identify where GenAI can drive the most impact. We prioritize ruthlessly — focusing on two or three use cases that will deliver measurable ROI.",
        },
        {
          step: "02",
          title: "Build for production",
          body: "We design systems that work in the real world — handling edge cases, ensuring security, and integrating with your existing infrastructure. No throwaway prototypes that can’t survive a security review.",
        },
        {
          step: "03",
          title: "Enable your workforce",
          body: "Technology alone doesn’t create value — your people do. We embed change management, training, and adoption support into every engagement to ensure sustained impact.",
        },
      ]}
      featuredCases={[
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "insurance-ai-underwriting", title: "Quoting commercial business in a day, not a week", industry: "Insurance", metric: "40%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/industries/tech-datacenter.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/artificial-intelligence/agentic-ai", name: "Agentic AI" },
        { href: "/capabilities/artificial-intelligence/custom-model-development", name: "Custom Model Development" },
        { href: "/capabilities/artificial-intelligence/ai-strategy-roadmap", name: "AI Strategy & Roadmap" },
      ]}
      ctaLeadName="Talk to our Generative AI lead"
    />
  );
}

