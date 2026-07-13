
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function AIPoweredAcceleration() {
  return (
    <CapabilityHubTemplate
      hubName="AI-Powered Acceleration"
      slug="ai-powered-acceleration"
      insightsTopic="business"
      heroSubtitle="Leverage enterprise-grade AI for strategic planning, predictive market intelligence, automated financial modeling, and customer intelligence — capabilities typically reserved for Fortune 500 companies."
      heroImage="/images/ai-acceleration-abstract.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "60+", label: "AI implementations across finance, ops, and customer experience" },
        { number: "45%", label: "Average productivity improvement from AI automation" },
        { number: "8 Mo", label: "Typical AI strategy to production deployment" },
      ]}
      ambitions={[
        {
          title: "Find where AI actually pays off",
          description:
            "Cut through the hype to identify the small set of use cases where AI moves the P&L — and build the pragmatic roadmap to get them into production.",
        },
        {
          title: "Bring generative AI into the workflow",
          description:
            "Stand up GPT, Claude, and other foundation models inside the tools your teams already use — drafting, summarizing, classifying, and answering with your own data.",
        },
        {
          title: "Automate work that used to require humans",
          description:
            "Combine LLMs, OCR, and rules engines to handle document processing, decision support, and exception workflows that have resisted automation for years.",
        },
        {
          title: "Make your product AI-native",
          description:
            "Build AI directly into customer-facing experiences — recommendations, conversational interfaces, personalization — so the product gets smarter with every user.",
        },
        {
          title: "Stand up the data foundation",
          description:
            "Get the pipelines, feature stores, and MLOps practice in place so AI projects don't keep stalling on the same plumbing problems.",
        },
        {
          title: "Get the org ready for AI",
          description:
            "Train teams, set the governance guardrails, and run the change program that turns a few pilots into a durable, organization-wide AI capability.",
        },
      ]}
      ambitionsCTAText="Talk to us about your AI-Powered Acceleration ambition →"
      howWeCanHelp={[
        {
          title: "AI Strategy & Roadmap",
          description:
            "Define where AI can create the most value in your business. We identify high-impact use cases and build practical implementation roadmaps.",
          href: "/capabilities/business-building/ai-powered-acceleration/ai-strategy-roadmap",
        },
        {
          title: "Generative AI Integration",
          description:
            "Harness the power of GPT, Claude, and other foundation models. We build custom AI applications that automate workflows and augment your team.",
          href: "/capabilities/business-building/ai-powered-acceleration/generative-ai-integration",
        },
        {
          title: "Intelligent Automation",
          description:
            "Automate complex processes that were previously impossible. Document processing, decision support, and workflow automation powered by AI.",
          href: "/capabilities/business-building/ai-powered-acceleration/intelligent-automation",
        },
        {
          title: "AI-Powered Products",
          description:
            "Build AI into your product offering. From recommendation engines to conversational interfaces, we help you create AI-native experiences.",
          href: "/capabilities/business-building/ai-powered-acceleration/ai-powered-products",
        },
        {
          title: "Data & ML Infrastructure",
          description:
            "Build the foundation for AI success. Data pipelines, model training infrastructure, and MLOps practices that scale with your ambition.",
          href: "/capabilities/business-building/ai-powered-acceleration/data-ml-infrastructure",
        },
        {
          title: "AI Change Management",
          description:
            "Ensure your team adopts AI effectively. Training, governance frameworks, and organizational change programs for AI transformation.",
          href: "/capabilities/business-building/ai-powered-acceleration/ai-change-management",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Intelligence Foundation",
          body: "We establish your AI infrastructure by integrating data sources, implementing data pipelines, and deploying core machine learning models. This phase focuses on data quality, model training, and establishing the foundation for AI-powered insights.",
        },
        {
          step: "02",
          title: "Predictive Deployment",
          body: "We activate predictive capabilities across strategic planning, market intelligence, and financial forecasting. Models begin generating insights, and we train your team to interpret and act on AI-generated recommendations.",
        },
        {
          step: "03",
          title: "Optimization & Scale",
          body: "We refine models based on real-world performance, expand AI capabilities to additional business functions, and establish continuous improvement processes. Your team operates independently with AI-augmented workflows.",
        },
      ]}
      featuredCases={[
        {
          slug: "consulting-saas",
          title: "Professional Services Firm Builds SaaS Product",
          industry: "Professional Services · Business Building",
          metric: "45%",
          image: "/images/capabilities/cap-venturing.jpg",
        },
        {
          slug: "logistics-tech-spinoff",
          title: "Logistics Company Builds Technology Spin-Off",
          industry: "Logistics · Business Building",
          metric: "60+",
          image: "/images/capabilities/cap-lightbulb-idea.jpg",
        },
        {
          slug: "healthcare-telehealth",
          title: "Healthcare Provider Launches Telehealth Venture",
          industry: "Healthcare · Business Building",
          metric: "8 Mo",
          image: "/images/capabilities/cap-celebrate.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/growth-marketing-sales", name: "Growth, Marketing & Sales" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our AI-Powered Acceleration lead"
    />
  );
}
