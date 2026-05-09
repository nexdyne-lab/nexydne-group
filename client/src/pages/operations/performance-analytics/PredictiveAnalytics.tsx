// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Predictive Analytics.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsPerformanceAnalyticsPredictiveAnalytics() {
  return (
    <ServiceDetailTemplate
      hubName="Performance Analytics"
      hubSlug="operations/performance-analytics"
      hubHref="/capabilities/operations/performance-analytics"
      serviceName="Predictive Analytics"
      serviceSlug="predictive-analytics"
      heroSubtitle="Anticipate problems before they occur. Demand forecasting, predictive maintenance, and anomaly detection that enable proactive management."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Performance Analytics engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know predictive analytics can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused predictive analytics program — grounded in performance analytics fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing predictive analytics approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for predictive analytics — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for predictive analytics aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Performance Analytics capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "healthcare-data-analytics",
          title: "Health System Builds Population Health Analytics Platform",
          industry: "Healthcare · Operations",
          metric: "$18M",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
        },
        {
          slug: "insurance-claims-processing",
          title: "P&C Insurer Cuts Claims Cycle Time with Intelligent Automation",
          industry: "Financial Services · Operations",
          metric: "55%",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "kpi-framework-design", name: "KPI Framework Design", href: "/capabilities/operations/performance-analytics/kpi-framework-design" },
        { slug: "operational-dashboards", name: "Operational Dashboards", href: "/capabilities/operations/performance-analytics/operational-dashboards" },
        { slug: "process-mining", name: "Process Mining", href: "/capabilities/operations/performance-analytics/process-mining" },
      ]}
      ctaLeadName="Talk to our Predictive Analytics lead"
    />
  );
}
