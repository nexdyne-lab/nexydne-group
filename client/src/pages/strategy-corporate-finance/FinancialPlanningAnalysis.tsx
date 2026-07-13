// TODO: David — confirm Financial Planning & Analysis experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Financial Planning & Analysis hub.
// TODO: confirm hero image asset — using fallback Unsplash URL until /images/fpa-abstract.jpg lands.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function FinancialPlanningAnalysis() {
  return (
    <CapabilityHubTemplate
      hubName="Financial Planning & Analysis"
      slug="fpa"
      heroSubtitle="Turn data into decisions. Robust budgeting, forecasting, and variance analysis processes that give you clear visibility into performance and confidence in your numbers."
      heroImage="/images/capabilities/cap-chess.jpg"
      experienceStats={[
        { number: "85%", label: "Improvement in forecast accuracy for clients implementing our FP&A frameworks" },
        { number: "50%", label: "Reduction in month-end close time through streamlined reporting processes" },
        { number: "120+", label: "FP&A transformation projects delivered across diverse industries" },
        // TODO: confirm with practice lead before publish
        { number: "Driver-based", label: "Planning models that connect operational levers to financial outcomes" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Build a forecast you can trust",
          description:
            "Move from annual budget theatre to rolling forecasts that update on the data and reflect real operational drivers — not last year's wish list adjusted by 5%.",
        },
        {
          title: "Close the books faster",
          description:
            "Compress month-end from weeks to days. Streamlined consolidation, fewer manual reconciliations, and reporting that reaches leaders while it still matters.",
        },
        {
          title: "Explain the variance, not just report it",
          description:
            "Variance analysis that connects results to operational decisions, surfaces root causes, and tells your leadership team what to do next.",
        },
        {
          title: "Model the strategic question",
          description:
            "Stand up business cases, scenario models, and valuation frameworks that survive board scrutiny and inform decisions on real capital, hiring, and pricing.",
        },
        {
          title: "Define the metrics that matter",
          description:
            "Build balanced scorecards and KPI hierarchies that align finance with the business, with clear owners and a stable definition of success.",
        },
        {
          title: "Make data self-serve",
          description:
            "Deploy BI dashboards that put real-time performance in front of operators — and free FP&A from being the spreadsheet helpdesk for the rest of the org.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Budgeting & Forecasting",
          description:
            "Build robust annual budgets and rolling forecasts that adapt to changing conditions. Scenario modeling for strategic decision-making.",
          href: "/capabilities/strategy-corporate-finance/fpa/budgeting-forecasting",
        },
        {
          title: "Variance Analysis",
          description:
            "Understand the drivers behind performance gaps. Actionable insights that connect financial results to operational decisions.",
          href: "/capabilities/strategy-corporate-finance/fpa/variance-analysis",
        },
        {
          title: "Financial Modeling",
          description:
            "Build sophisticated models for business cases, valuations, and strategic scenarios. Excel and BI-based solutions tailored to your needs.",
          href: "/capabilities/strategy-corporate-finance/fpa/financial-modeling",
        },
        {
          title: "KPI Development",
          description:
            "Define and track the metrics that matter. Create balanced scorecards that align financial and operational performance.",
          href: "/capabilities/strategy-corporate-finance/fpa/kpi-development",
        },
        {
          title: "Management Reporting",
          description:
            "Transform data into insights. Clear, visual reports that enable faster, better-informed decisions at every level.",
          href: "/capabilities/strategy-corporate-finance/fpa/management-reporting",
        },
        {
          title: "Business Intelligence",
          description:
            "Deploy dashboards and analytics tools that provide real-time visibility into performance across the organization.",
          href: "/capabilities/strategy-corporate-finance/fpa/business-intelligence",
        },
      ]}
      ambitionsCTAText="Talk to us about your Financial Planning & Analysis ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Assess and design",
          body: "We evaluate your current FP&A maturity, identify gaps, and design a target operating model that aligns with your business needs and growth trajectory.",
        },
        {
          step: "02",
          title: "Build the foundation",
          body: "We implement the processes, tools, and governance structures needed for effective planning and analysis — from chart of accounts to reporting hierarchies.",
        },
        {
          step: "03",
          title: "Enable and embed",
          body: "We train your team, establish rhythms and routines, and ensure the new capabilities become embedded in how your organization operates.",
        },
      ]}
      featuredCases={[
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance/cfo-services", name: "Fractional CFO Services" },
        { href: "/capabilities/strategy-corporate-finance/ai-powered-finance", name: "AI-Powered Finance" },
        { href: "/capabilities/strategy-corporate-finance/performance-improvement", name: "Performance Improvement" },
      ]}
      ctaLeadName="Talk to our Financial Planning & Analysis lead"
    />
  );
}
