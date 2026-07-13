
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsPerformanceAnalyticsKpiFrameworkDesign() {
  return (
    <ServiceDetailTemplate
      hubName="Performance Analytics"
      hubSlug="operations/performance-analytics"
      hubHref="/capabilities/operations/performance-analytics"
      serviceName="KPI Framework Design"
      serviceSlug="kpi-framework-design"
      heroSubtitle="Define the metrics that matter. Develop balanced scorecards, operational KPIs, and performance management frameworks that drive accountability."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      experienceStats={[
        { number: "100+", label: "Performance Analytics engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know kpi framework design can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused kpi framework design program — grounded in performance analytics fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing kpi framework design approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for kpi framework design — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for kpi framework design aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Performance Analytics capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", industry: "Manufacturing", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "automotive-smart-factory", title: "Lifting plant productivity by 40% at a vehicle maker", industry: "Manufacturing", metric: "40%", image: "/images/industries/mfg-robotics.jpg" },
      ]}
      relatedServices={[
        { slug: "operational-dashboards", name: "Operational Dashboards", href: "/capabilities/operations/performance-analytics/operational-dashboards" },
        { slug: "predictive-analytics", name: "Predictive Analytics", href: "/capabilities/operations/performance-analytics/predictive-analytics" },
        { slug: "process-mining", name: "Process Mining", href: "/capabilities/operations/performance-analytics/process-mining" },
      ]}
      ctaLeadName="Talk to our KPI Framework Design lead"
    />
  );
}
