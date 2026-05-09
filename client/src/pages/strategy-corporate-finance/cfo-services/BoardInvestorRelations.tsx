// TODO: confirm with practice lead before publish — experience stats, challenge, opportunity, approach pillars, outcomes, related services, and CTA lead name for Board & Investor Relations.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinanceCfoServicesBoardInvestorRelations() {
  return (
    <ServiceDetailTemplate
      hubName="Fractional CFO Services"
      hubSlug="strategy-corporate-finance/cfo-services"
      hubHref="/capabilities/strategy-corporate-finance/cfo-services"
      serviceName="Board & Investor Relations"
      serviceSlug="board-investor-relations"
      heroSubtitle="Professional board presentations, investor updates, and stakeholder communication that builds confidence."
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Fractional CFO Services engagements delivered for mid-market and growth companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know board & investor relations can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused board & investor relations program — grounded in Fractional CFO Services fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current board & investor relations state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for board & investor relations — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Fractional CFO Services capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for board & investor relations aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Fractional CFO Services capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "wealth-management-automation",
          title: "Wealth Manager Automates Portfolio Reporting And Client Onboarding",
          industry: "Financial Services · Strategy",
          metric: "3x",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
        },
        {
          slug: "fintech-payment-automation",
          title: "Fintech Scales Cross-Border Payments With Intelligent Automation",
          industry: "Financial Services · Strategy",
          metric: "5x",
          image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1600&q=80",
        },
        {
          slug: "consulting-knowledge-management",
          title: "Top-5 Consulting Firm Builds AI Knowledge Platform",
          industry: "Professional Services · Strategy",
          metric: "60%",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "strategic-financial-planning", name: "Strategic Financial Planning", href: "/capabilities/strategy-corporate-finance/cfo-services/strategic-financial-planning" },
        { slug: "cash-flow-management", name: "Cash Flow Management", href: "/capabilities/strategy-corporate-finance/cfo-services/cash-flow-management" },
        { slug: "financial-reporting-kpis", name: "Financial Reporting & KPIs", href: "/capabilities/strategy-corporate-finance/cfo-services/financial-reporting-kpis" },
      ]}
      ctaLeadName="Talk to our Board & Investor Relations lead"
    />
  );
}
