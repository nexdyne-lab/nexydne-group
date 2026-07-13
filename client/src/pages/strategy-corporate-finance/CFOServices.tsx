
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function FractionalCFO() {
  return (
    <CapabilityHubTemplate
      hubName="Fractional CFO Services"
      slug="cfo-services"
      heroSubtitle="Access high-level financial leadership without the full-time cost. Strategic financial planning, cash flow management, and board-level reporting for growing companies."
      heroImage="/images/industries/advisor-charts.jpg"
      experienceStats={[
        { number: "60%", label: "Cost savings vs full-time CFO while maintaining executive-level expertise" },
        { number: "100+", label: "growing companies supported with fractional CFO services across diverse industries" },
        { number: "30%", label: "Average improvement in cash flow management and working capital" },
        { number: "Three models", label: "Advisory, operational, and interim engagements scaled to your stage" },
      ]}
      ambitions={[
        {
          title: "Bring CFO discipline without the overhead",
          description:
            "Get senior financial judgment, board-grade reporting, and strategic advisory at a fraction of full-time CFO cost — sized to where your business actually is today.",
        },
        {
          title: "Take control of cash and runway",
          description:
            "Move from spreadsheet anxiety to a clear weekly cash picture with collections discipline, working capital levers, and scenario planning your CEO can rely on.",
        },
        {
          title: "Be ready when investors call",
          description:
            "Stand up the financial models, KPI definitions, and diligence-ready data room a serious raise demands — before the term sheet conversation, not after.",
        },
        {
          title: "Make the board room productive",
          description:
            "Replace messy decks with a clean monthly board package — the right metrics, plain narrative, and the strategic asks that move decisions forward.",
        },
        {
          title: "Build the finance function you need",
          description:
            "Systems, controls, policies, and team — the operational chassis that lets finance scale without becoming the bottleneck in every commercial decision.",
        },
        {
          title: "Bridge a leadership gap",
          description:
            "Cover an interim period — exit, transition, special project — with a senior operator who hits the ground running and hands off cleanly when the time comes.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Strategic Financial Planning",
          description:
            "Long-term financial roadmaps aligned with your business strategy. Scenario planning, goal setting, and resource allocation.",
          href: "/capabilities/strategy-corporate-finance/cfo-services/strategic-financial-planning",
        },
        {
          title: "Cash Flow Management",
          description:
            "Optimize working capital, improve collections, and ensure you always have runway. Real-time visibility into cash position.",
          href: "/capabilities/strategy-corporate-finance/cfo-services/cash-flow-management",
        },
        {
          title: "Board & Investor Relations",
          description:
            "Professional board presentations, investor updates, and stakeholder communication that builds confidence.",
          href: "/capabilities/strategy-corporate-finance/cfo-services/board-investor-relations",
        },
        {
          title: "Financial Reporting & KPIs",
          description:
            "Clear, actionable financial reports and dashboards. Track the metrics that matter for your business.",
          href: "/capabilities/strategy-corporate-finance/cfo-services/financial-reporting-kpis",
        },
        {
          title: "Fundraising Support",
          description:
            "Prepare for funding rounds with financial models, due diligence packages, and investor pitch support.",
          href: "/capabilities/strategy-corporate-finance/cfo-services/fundraising-support",
        },
        {
          title: "Financial Systems & Processes",
          description:
            "Build scalable financial infrastructure. Implement controls, policies, and systems that grow with you.",
          href: "/capabilities/strategy-corporate-finance/cfo-services/financial-systems-processes",
        },
      ]}
      ambitionsCTAText="Talk to us about your Fractional CFO Services ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Advisory Model",
          body: "8-16 hours/month of strategic guidance and oversight. Ideal for businesses with capable finance teams needing senior leadership for key decisions and board support.",
        },
        {
          step: "02",
          title: "Operational Model",
          body: "20-40 hours/month of hands-on financial leadership. Perfect for businesses building or strengthening their finance function with active management oversight.",
        },
        {
          step: "03",
          title: "Interim Model",
          body: "Full-time coverage for 3-6 months. For transitions, special projects, or critical periods requiring dedicated executive presence and change management.",
        },
      ]}
      featuredCases={[
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance/financial-planning-analysis", name: "Financial Planning & Analysis" },
        { href: "/capabilities/strategy-corporate-finance/capital-raising", name: "Capital Raising & Investment" },
        { href: "/capabilities/strategy-corporate-finance/performance-improvement", name: "Performance Improvement" },
      ]}
      ctaLeadName="Talk to our Fractional CFO Services lead"
    />
  );
}
