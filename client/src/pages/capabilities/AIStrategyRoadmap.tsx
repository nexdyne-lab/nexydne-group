// TODO: David — confirm AI Strategy & Roadmap experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the AI Strategy & Roadmap hub.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function AIStrategyRoadmap() {
  return (
    <CapabilityHubTemplate
      hubName="AI Strategy & Roadmap"
      slug="ai-strategy-roadmap"
      heroSubtitle="Define your AI vision and build a prioritized implementation plan. Chart a path from experimentation to enterprise-scale AI — anchored to business outcomes, not headlines."
      // TODO: confirm hero image asset matches AI Strategy & Roadmap theme
      heroImage="/images/industries/team-strategy-board.jpg"
      heroFocal="60% 45%"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "120+", label: "AI strategies developed for enterprise clients" },
        // TODO: confirm with practice lead before publish
        { number: "5x", label: "Average ROI on prioritized AI portfolios" },
        // TODO: confirm with practice lead before publish
        { number: "90-day", label: "Typical roadmap to first measurable outcome" },
        // TODO: confirm with practice lead before publish
        { number: "$300M+", label: "Estimated annual value identified across clients" },
      ]}
      ambitions={[
        {
          title: "Build a prioritized AI roadmap",
          description:
            "Cut through the noise. Identify the few AI initiatives that will move your business — and sequence them so each one funds and de-risks the next.",
        },
        {
          title: "Make the business case to your board",
          description:
            "Translate AI ambition into a defensible investment case with realistic ROI, risk assessments, and resource plans your CFO and audit committee can sign off on.",
        },
        {
          title: "Pick the right vendors and platforms",
          description:
            "Navigate a crowded landscape of foundation models, ML platforms, and point solutions — and choose stacks that fit your data, security, and economic constraints.",
        },
        {
          title: "Stand up an AI operating model",
          description:
            "Decide where AI lives in the org, how it’s funded, and how it’s governed. Build the structure that lets dozens of use cases ship without chaos.",
        },
        {
          title: "Get your data ready for AI",
          description:
            "Honestly assess data quality, access, and governance — and put a credible plan in place to close the gaps that would otherwise stall every model you build.",
        },
        {
          title: "Bring your workforce along",
          description:
            "Plan the change, training, and incentives that turn AI from a top-down mandate into something your front-line teams actually adopt and improve.",
        },
      ]}
      ambitionsCTAText="Talk to us about your AI Strategy & Roadmap ambition →"
      howWeCanHelp={[
        {
          title: "AI Opportunity Assessment",
          description:
            "Systematic evaluation of AI use cases across your value chain. We identify where AI can drive the most impact based on feasibility, value, and strategic fit.",
          href: "/capabilities/artificial-intelligence/ai-strategy-roadmap/opportunity-assessment",
        },
        {
          title: "Business Case Development",
          description:
            "Build compelling investment cases with realistic ROI projections, risk assessments, and resource requirements that get executive buy-in.",
          href: "/capabilities/artificial-intelligence/ai-strategy-roadmap/business-case",
        },
        {
          title: "Technology & Vendor Selection",
          description:
            "Navigate the complex AI vendor landscape. We help you choose the right platforms, tools, and partners for your specific needs and constraints.",
          href: "/capabilities/artificial-intelligence/ai-strategy-roadmap/vendor-selection",
        },
        {
          title: "Operating Model Design",
          description:
            "Define how AI will be governed, developed, and deployed across your organization. Build the organizational capabilities needed for AI success.",
          href: "/capabilities/artificial-intelligence/ai-strategy-roadmap/operating-model",
        },
        {
          title: "Data Readiness Assessment",
          description:
            "Evaluate your data assets, quality, and infrastructure. Identify gaps and create a plan to build the data foundation AI requires.",
          href: "/capabilities/artificial-intelligence/ai-strategy-roadmap/data-readiness",
        },
        {
          title: "Change Management Planning",
          description:
            "Develop strategies for workforce adoption, skill building, and cultural change. AI success depends on people, not just technology.",
          href: "/capabilities/artificial-intelligence/ai-strategy-roadmap/change-management",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Start with business outcomes",
          body: "We don’t start with technology — we start with your strategic priorities. What problems are you trying to solve, what opportunities are you trying to capture? AI is a means, not an end.",
        },
        {
          step: "02",
          title: "Prioritize ruthlessly",
          body: "Not every AI use case is worth pursuing. We help you focus on the vital few initiatives that drive the most value, balancing quick wins with long-term transformation bets.",
        },
        {
          step: "03",
          title: "Plan for execution",
          body: "A strategy is only as good as its execution. We create implementation roadmaps with clear milestones, resource plans, and governance structures that ensure follow-through.",
        },
      ]}
      featuredCases={[
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "insurance-digital-distribution", title: "Turning a call-center insurer into a digital one", industry: "Insurance", metric: "50%", image: "/images/industries/fin-handshake-city.jpg" },
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/artificial-intelligence/generative-ai", name: "Generative AI" },
        { href: "/capabilities/data-transformation", name: "Data Transformation" },
        { href: "/capabilities/artificial-intelligence/process-automation", name: "Process Automation" },
      ]}
      ctaLeadName="Talk to our AI Strategy & Roadmap lead"
    />
  );
}

