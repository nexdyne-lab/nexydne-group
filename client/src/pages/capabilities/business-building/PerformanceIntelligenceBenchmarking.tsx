// TODO: David — confirm Performance Intelligence & Benchmarking experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Performance Intelligence & Benchmarking hub.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function PerformanceIntelligenceBenchmarking() {
  return (
    <CapabilityHubTemplate
      hubName="Performance Intelligence & Benchmarking"
      slug="performance-intelligence-benchmarking"
      heroSubtitle="Make informed decisions with industry benchmarking, maturity assessments, ROI modeling, and KPI frameworks validated against peer companies — the performance-intelligence systems that guide strategic decisions at leading enterprises."
      heroImage="/images/performance-intelligence-abstract.jpg"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "25-40%", label: "Performance improvement across benchmarked metrics in 12-18 mo" },
        // TODO: confirm with practice lead before publish
        { number: "60%", label: "Faster decision cycles with real-time visibility" },
        // TODO: confirm with practice lead before publish
        { number: "3-5x", label: "Investment ROI accuracy via benchmark-validated modeling" },
      ]}
      ambitions={[
        {
          title: "See where you really stand",
          description:
            "Replace internal-only metrics with benchmark data from peer companies — so leadership knows whether good is good, and what's possible at the next level.",
        },
        {
          title: "Assess capability maturity honestly",
          description:
            "Map your organization against capability maturity frameworks across functions like data, sales ops, and customer service — and use the gaps to focus investment.",
        },
        {
          title: "Build ROI models the board trusts",
          description:
            "Quantify expected returns on strategic initiatives with risk-adjusted projections, sensitivity analysis, and benchmark-validated assumptions — not optimistic spreadsheet math.",
        },
        {
          title: "Cascade KPIs that actually drive behavior",
          description:
            "Design balanced metrics that connect executive objectives to departmental and individual work — leading and lagging indicators that change what people do day-to-day.",
        },
        {
          title: "Get to real-time performance visibility",
          description:
            "Stand up dashboards and review rhythms that surface performance trends as they happen — instead of debating last quarter's numbers two months after the fact.",
        },
        {
          title: "Make benchmarking a continuous practice",
          description:
            "Establish quarterly benchmark refreshes, annual maturity reassessments, and KPI evolution so performance intelligence stays sharp as the business and market change.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Performance Intelligence ambition →"
      howWeCanHelp={[
        {
          title: "Baseline Assessment",
          description:
            "We establish current state performance across key business dimensions and compare against industry benchmarks. This phase identifies performance gaps, quantifies improvement opportunities, and establishes the diagnostic foundation.",
          href: "/capabilities/business-building/performance-intelligence-benchmarking/baseline-assessment",
        },
        {
          title: "Framework Development",
          description:
            "We design comprehensive KPI frameworks, develop ROI models for prioritized initiatives, and establish performance dashboards. This phase creates the measurement infrastructure that will guide ongoing decisions.",
          href: "/capabilities/business-building/performance-intelligence-benchmarking/framework-development",
        },
        {
          title: "Deployment & Training",
          description:
            "We deploy performance-intelligence systems, train teams on interpretation and usage, and establish governance processes for ongoing measurement and reporting.",
          href: "/capabilities/business-building/performance-intelligence-benchmarking/deployment-training",
        },
        {
          title: "Continuous Improvement",
          description:
            "We establish quarterly benchmark updates, annual maturity reassessments, and continuous KPI refinement processes that ensure performance intelligence evolves with your business.",
          href: "/capabilities/business-building/performance-intelligence-benchmarking/continuous-improvement",
        },
        {
          // TODO: confirm with practice lead before publish
          title: "Predictive Analytics & Forecasting",
          description:
            "Layer machine-learning forecasts and scenario models on top of your KPI framework so leadership debates next-quarter trade-offs with probabilistic ranges, not best-guess point estimates.",
          href: "/capabilities/business-building/performance-intelligence-benchmarking/predictive-analytics",
        },
        {
          // TODO: confirm with practice lead before publish
          title: "Executive Dashboard Design",
          description:
            "Design role-specific executive dashboards — board, CEO, functional leaders — that surface the right ten metrics for each audience and make exception-based management the default.",
          href: "/capabilities/business-building/performance-intelligence-benchmarking/executive-dashboards",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Baseline & Benchmark",
          body: "We establish current-state performance across key business dimensions and compare against industry benchmarks — quantifying gaps and surfacing the highest-value improvement opportunities.",
        },
        {
          step: "02",
          title: "Frameworks & Models",
          body: "We design balanced KPI frameworks, build ROI models for prioritized initiatives, and stand up the dashboards and review rhythms that turn measurement into decision rights.",
        },
        {
          step: "03",
          title: "Run & Refine",
          body: "We deploy systems, train teams, and install the quarterly benchmark refresh and annual maturity reassessment cycles that keep performance intelligence evolving with the business.",
        },
      ]}
      featuredCases={[
        {
          slug: "consulting-saas",
          title: "Professional Services Firm Builds SaaS Product",
          industry: "Professional Services · Business Building",
          metric: "60%",
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
        },
        {
          slug: "wealth-adjacent",
          title: "Financial Services Firm Enters Adjacent Market",
          industry: "Financial Services · Business Building",
          metric: "3-5x",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80",
        },
        {
          slug: "manufacturer-dtc",
          title: "Manufacturer Creates Direct-to-Consumer Channel",
          industry: "Manufacturing · Business Building",
          metric: "25-40%",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=80",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/growth-marketing-sales", name: "Growth, Marketing & Sales" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Performance Intelligence & Benchmarking lead"
    />
  );
}
