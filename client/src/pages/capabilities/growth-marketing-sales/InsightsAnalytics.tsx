
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function InsightsAnalytics() {
  return (
    <CapabilityHubTemplate
      hubName="Insights & Analytics"
      slug="insights-analytics"
      insightsTopic="growth"
      heroSubtitle="Marketing analytics, customer insights, and data-driven decision making. We help you turn data into actionable insights that drive marketing performance."
      heroImage="/images/capabilities/cap-peacock.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "250+", label: "analytics transformations delivered across industries" },
        { number: "30%", label: "average improvement in marketing ROI through better measurement" },
        { number: "5x", label: "faster time to insight with modern analytics infrastructure" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      ambitions={[
        {
          title: "Sharpen the insights & analytics thesis",
          description:
            "Make clear, evidence-based choices about where insights & analytics can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn insights & analytics ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every insights & analytics touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument insights & analytics so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the insights & analytics tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect insights & analytics investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Marketing Measurement",
          description:
            "Build measurement frameworks that track marketing performance across channels. Implement dashboards and reporting that drive accountability.",
          href: "/capabilities/growth-marketing-sales/insights-analytics/marketing-measurement",
        },
        {
          title: "Attribution Modeling",
          description:
            "Implement attribution models that reveal true marketing impact. Move beyond last-click to multi-touch and algorithmic attribution.",
          href: "/capabilities/growth-marketing-sales/insights-analytics/attribution-modeling",
        },
        {
          title: "Customer Analytics",
          description:
            "Analyze customer behavior, preferences, and value. Build segmentation models and customer lifetime value frameworks.",
          href: "/capabilities/growth-marketing-sales/insights-analytics/customer-analytics",
        },
        {
          title: "Data Infrastructure",
          description:
            "Design and implement analytics infrastructure. Build data warehouses, integrate sources, and enable self-service analytics.",
          href: "/capabilities/growth-marketing-sales/insights-analytics/data-infrastructure",
        },
        {
          title: "Predictive Analytics",
          description:
            "Build predictive models that forecast customer behavior. Implement propensity models, churn prediction, and demand forecasting.",
          href: "/capabilities/growth-marketing-sales/insights-analytics/predictive-analytics",
        },
        {
          title: "Marketing Mix Modeling",
          description:
            "Optimize marketing spend allocation across channels. Build econometric models that quantify marketing ROI and guide investment.",
          href: "/capabilities/growth-marketing-sales/insights-analytics/marketing-mix-modeling",
        },
      ]}
      ambitionsCTAText="Talk to us about your Insights & Analytics ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Assess and prioritize",
          body: "We evaluate your analytics maturity and identify high-impact opportunities. We prioritize use cases based on business value and feasibility, creating a roadmap for analytics transformation.",
        },
        {
          step: "02",
          title: "Build infrastructure",
          body: "We design and implement analytics infrastructure that enables self-service insights. We integrate data sources, build data models, and create dashboards that drive action.",
        },
        {
          step: "03",
          title: "Activate and embed",
          body: "We embed analytics into business processes and decision-making. We train teams, establish governance, and build a culture of data-driven marketing.",
        },
      ]}
      featuredCases={[
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/industries/tech-datacenter.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Insights & Analytics lead"
    />
  );
}
