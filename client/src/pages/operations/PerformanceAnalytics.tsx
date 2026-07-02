// TODO: David — confirm Performance Analytics experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Performance Analytics hub.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function PerformanceAnalytics() {
  return (
    <CapabilityHubTemplate
      hubName="Performance Analytics"
      slug="operations/performance-analytics"
      heroSubtitle="Make data-driven decisions with real-time operational intelligence. Build dashboards, KPI frameworks, and predictive analytics capabilities."
      heroImage="/images/performance-intelligence-abstract.jpg"
      experienceStats={[
        { number: "90+", label: "Analytics programs delivered across industries" },
        { number: "40-60%", label: "Typical improvement in decision-making speed" },
        { number: "85-95%", label: "Forecast accuracy achieved through predictive models" },
        // TODO: confirm with practice lead before publish
        { number: "Live", label: "Operational dashboards and control towers" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Decide faster",
          description:
            "Compress the time from question to answer — so leaders move on opportunities and risks in days, not the weeks it takes to wrangle the data manually.",
        },
        {
          title: "Standardize KPIs across the enterprise",
          description:
            "End the 'whose number is right' debate. One trusted KPI library, one definition of revenue, margin, and OTIF — used by every function and every BU.",
        },
        {
          title: "Give executives real visibility",
          description:
            "Replace 80-page monthly decks with live dashboards that show what matters, what's changing, and what to do about it — at the C-suite and board level.",
        },
        {
          title: "Move from hindsight to foresight",
          description:
            "Layer predictive and prescriptive models on top of reporting so analytics tells you what will happen and what to do — not just what happened last quarter.",
        },
        {
          title: "Benchmark with intelligence",
          description:
            "Combine internal data with external benchmarks — competitor, industry, geographic — so performance conversations are grounded in reality, not opinion.",
        },
        {
          title: "Build accountability through data",
          description:
            "Tie every metric to an owner and a cadence. Analytics that drive a culture where commitments are tracked, gaps are surfaced early, and recoveries are visible.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "KPI Framework Design",
          description:
            "Define the metrics that matter. Develop balanced scorecards, operational KPIs, and performance management frameworks that drive accountability.",
          href: "/capabilities/operations/performance-analytics/kpi-framework-design",
        },
        {
          title: "Operational Dashboards",
          description:
            "Build real-time visibility into operations. Executive dashboards, control towers, and performance monitoring systems that enable faster decisions.",
          href: "/capabilities/operations/performance-analytics/operational-dashboards",
        },
        {
          title: "Predictive Analytics",
          description:
            "Anticipate problems before they occur. Demand forecasting, predictive maintenance, and anomaly detection that enable proactive management.",
          href: "/capabilities/operations/performance-analytics/predictive-analytics",
        },
        {
          title: "Process Mining",
          description:
            "Discover how processes actually work. Analyze event logs to identify bottlenecks, deviations, and improvement opportunities.",
          href: "/capabilities/operations/performance-analytics/process-mining",
        },
        {
          title: "Data Integration",
          description:
            "Connect data across systems. Build unified data platforms that enable cross-functional analytics and eliminate data silos.",
          href: "/capabilities/operations/performance-analytics/data-integration",
        },
        {
          title: "Analytics Enablement",
          description:
            "Build internal analytics capabilities. Training, governance, and operating models for sustainable, self-service analytics.",
          href: "/capabilities/operations/performance-analytics/analytics-enablement",
        },
      ]}
      ambitionsCTAText="Talk to us about your Performance Analytics ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Define the decisions",
          body: "We start by identifying the critical decisions that drive operational performance. We map decision requirements to data needs and prioritize analytics investments by business impact.",
        },
        {
          step: "02",
          title: "Build the platform",
          body: "We design and implement analytics solutions that deliver insights where and when they're needed. We integrate data sources, build dashboards, and deploy predictive models.",
        },
        {
          step: "03",
          title: "Embed the capability",
          body: "We build internal analytics capabilities to ensure sustainability. We train teams, establish governance, and create feedback loops that drive continuous improvement.",
        },
      ]}
      featuredCases={[
        {
          slug: "healthcare-data-analytics",
          title: "Health System Builds Population Health Analytics Platform",
          industry: "Healthcare · Operations",
          metric: "$18M",
          image: "/images/capabilities/cap-data-bars.jpg",
        },
        {
          slug: "accounting-audit-automation",
          title: "Accounting Firm Automates Audit Workpapers Across Engagements",
          industry: "Professional Services · Operations",
          metric: "45%",
          image: "/images/capabilities/cap-data-presentation.jpg",
        },
        {
          slug: "wealth-management-automation",
          title: "Wealth Manager Automates Onboarding and Client Servicing",
          industry: "Financial Services · Operations",
          metric: "55%",
          image: "/images/industries/fin-monitors.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Performance Analytics lead"
    />
  );
}
