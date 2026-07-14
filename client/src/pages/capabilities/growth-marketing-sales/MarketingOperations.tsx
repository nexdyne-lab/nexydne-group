
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function MarketingOperations() {
  return (
    <CapabilityHubTemplate
      hubName="Marketing Operations"
      slug="marketing-operations"
      insightsTopic="growth"
      heroSubtitle="Transform your marketing operations into a competitive advantage. We help you build scalable processes, optimize technology, and drive efficiency across your marketing organization."
      heroImage="/images/capabilities/cap-celebrate.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "150+", label: "marketing operations transformations delivered" },
        { number: "30%", label: "average reduction in marketing operational costs" },
        { number: "2x", label: "typical improvement in campaign velocity" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      ambitions={[
        {
          title: "Sharpen the marketing operations thesis",
          description:
            "Make clear, evidence-based choices about where marketing operations can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn marketing operations ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every marketing operations touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument marketing operations so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernize the marketing operations tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect marketing operations investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "MarTech Strategy",
          description:
            "Define your marketing technology strategy and roadmap. Select, implement, and integrate tools that enable your marketing vision.",
          href: "/capabilities/growth-marketing-sales/marketing-operations/martech-strategy",
        },
        {
          title: "Process Optimization",
          description:
            "Streamline marketing workflows and eliminate bottlenecks. Design processes that accelerate time-to-market and improve quality.",
          href: "/capabilities/growth-marketing-sales/marketing-operations/process-optimization",
        },
        {
          title: "Data Management",
          description:
            "Build data infrastructure that enables personalization and measurement. Integrate data sources and ensure data quality across systems.",
          href: "/capabilities/growth-marketing-sales/marketing-operations/data-management",
        },
        {
          title: "Marketing Automation",
          description:
            "Implement automation that scales your marketing efforts. Build nurture programs, trigger campaigns, and automated workflows.",
          href: "/capabilities/growth-marketing-sales/marketing-operations/marketing-automation",
        },
        {
          title: "Performance Analytics",
          description:
            "Build analytics capabilities that drive optimization. Create dashboards, attribution models, and reporting frameworks.",
          href: "/capabilities/growth-marketing-sales/marketing-operations/performance-analytics",
        },
        {
          title: "Team & Governance",
          description:
            "Design marketing operations team structures and governance models. Define roles, processes, and decision rights.",
          href: "/capabilities/growth-marketing-sales/marketing-operations/team-and-governance",
        },
      ]}
      ambitionsCTAText="Talk to us about your Marketing Operations ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Assess and diagnose",
          body: "We evaluate your current marketing operations maturity across technology, process, data, and people. We identify gaps and prioritize improvements based on business impact.",
        },
        {
          step: "02",
          title: "Design the target state",
          body: "We design a marketing operations model that supports your growth ambitions. We define technology architecture, process flows, and organizational structure.",
        },
        {
          step: "03",
          title: "Implement and optimize",
          body: "We implement changes in phases, building capabilities while maintaining business continuity. We establish metrics and continuous improvement processes.",
        },
      ]}
      featuredCases={[
        { slug: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", industry: "Retail", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/capabilities/cap-iot-network.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Marketing Operations lead"
    />
  );
}
