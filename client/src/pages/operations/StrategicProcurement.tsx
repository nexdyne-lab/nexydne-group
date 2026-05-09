// TODO: David — confirm Strategic Procurement experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Strategic Procurement hub.
// TODO: confirm hero image asset — using fallback Unsplash URL until /images/strategic-procurement-abstract.jpg lands.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function StrategicProcurement() {
  return (
    <CapabilityHubTemplate
      hubName="Strategic Procurement"
      slug="operations/strategic-procurement"
      heroSubtitle="Transform procurement from a cost center to a strategic advantage. Optimize supplier relationships, reduce costs, and build resilient supply bases."
      heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "120+", label: "Procurement transformation engagements for midmarket companies" },
        { number: "15-25%", label: "Typical reduction in total procurement spend" },
        { number: "30-50%", label: "Improvement in supplier performance and reliability" },
        // TODO: confirm with practice lead before publish
        { number: "Category-led", label: "Sourcing strategies tailored by spend category" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Get true spend visibility",
          description:
            "Cleanse, classify, and connect spend across BUs and ERPs so category leaders finally see what's bought, from whom, on what terms — the foundation for every other gain.",
        },
        {
          title: "Consolidate the supplier base",
          description:
            "Most enterprises have 5-10x the suppliers they need. Rationalize the tail, deepen relationships with strategic partners, and unlock leverage on price and innovation.",
        },
        {
          title: "Mature category strategies",
          description:
            "Move every spend category from tactical buying to a written strategy — should-cost models, sourcing waves, supplier development — that compounds savings year on year.",
        },
        {
          title: "Make sustainability a sourcing criterion",
          description:
            "Embed ESG, scope-3 emissions, and supplier diversity into category and award decisions — turning procurement into a lever for the corporate sustainability agenda.",
        },
        {
          title: "Manage contracts as a portfolio",
          description:
            "Stop leaking value after award. Active contract performance management, leakage analytics, and renegotiation playbooks that protect promised savings.",
        },
        {
          title: "Drive total cost of ownership down",
          description:
            "Look past unit price to the full TCO — quality, logistics, working capital, lifecycle — and architect deals that lower the real cost of ownership.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Strategic Sourcing",
          description:
            "Develop category strategies and execute competitive sourcing events that capture savings while maintaining quality and service levels.",
          href: "/capabilities/operations/strategic-procurement/strategic-sourcing",
        },
        {
          title: "Supplier Management",
          description:
            "Build strategic supplier relationships through performance management, development programs, and collaborative improvement initiatives.",
          href: "/capabilities/operations/strategic-procurement/supplier-management",
        },
        {
          title: "Spend Analytics",
          description:
            "Gain visibility into your spend patterns with analytics tools that identify savings opportunities and track procurement performance.",
          href: "/capabilities/operations/strategic-procurement/spend-analytics",
        },
        {
          title: "Contract Management",
          description:
            "Optimize your contract portfolio through standardization, compliance monitoring, and renewal management processes.",
          href: "/capabilities/operations/strategic-procurement/contract-management",
        },
        {
          title: "Risk Management",
          description:
            "Assess and mitigate supply risk through supplier diversification, financial monitoring, and contingency planning.",
          href: "/capabilities/operations/strategic-procurement/risk-management",
        },
        {
          title: "Procurement Transformation",
          description:
            "Design and implement end-to-end procurement operating models including organization, processes, and technology enablement.",
          href: "/capabilities/operations/strategic-procurement/procurement-transformation",
        },
      ]}
      ambitionsCTAText="Talk to us about your Strategic Procurement ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Spend analysis & opportunity identification",
          body: "We start with a comprehensive analysis of your spend data to identify savings opportunities, consolidation potential, and strategic sourcing priorities across all categories.",
        },
        {
          step: "02",
          title: "Category strategy & execution",
          body: "We develop tailored sourcing strategies for each spend category, from competitive bidding to strategic partnerships, and support you through negotiation and implementation.",
        },
        {
          step: "03",
          title: "Capability building & sustainability",
          body: "We build your internal procurement capabilities through process design, tool implementation, and team development to ensure lasting impact beyond our engagement.",
        },
      ]}
      featuredCases={[
        {
          slug: "fintech-payment-automation",
          title: "Fintech Scales Payment Operations Without Headcount Growth",
          industry: "Financial Services · Operations",
          metric: "5x",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
        },
        {
          slug: "accounting-audit-automation",
          title: "Accounting Firm Automates Audit Workpapers Across Engagements",
          industry: "Professional Services · Operations",
          metric: "45%",
          image: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=1600&q=80",
        },
        {
          slug: "legal-document-intelligence",
          title: "Legal Team Deploys Document Intelligence Across Matter Lifecycle",
          industry: "Professional Services · Operations",
          metric: "75%",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Strategic Procurement lead"
    />
  );
}
