
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsWorkforceOptimizationPerformanceManagement() {
  return (
    <ServiceDetailTemplate
      hubName="Workforce Optimization"
      hubSlug="operations/workforce-optimization"
      hubHref="/capabilities/operations/workforce-optimization"
      serviceName="Performance Management"
      serviceSlug="performance-management"
      heroSubtitle="Drive accountability and continuous improvement. KPI frameworks, performance reviews, and incentive design that align individual and organizational goals."
      heroImage="/images/capabilities/cap-diverse-team.jpg"
      experienceStats={[
        { number: "100+", label: "Workforce Optimization engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know performance management can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused performance management program — grounded in workforce optimization fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing performance management approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for performance management — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for performance management aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Workforce Optimization capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "workforce-scheduling-optimization", title: "Matching staffing to demand, shift by shift", industry: "Transportation & Logistics", metric: "22%", image: "/images/cases/workforce-scheduling-optimization-hero.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "warehouse-optimization", title: "Lifting warehouse productivity 45% for a regional distributor", industry: "Transportation & Logistics", metric: "45%", image: "/images/cases/warehouse-optimization-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "workforce-planning", name: "Workforce Planning", href: "/capabilities/operations/workforce-optimization/workforce-planning" },
        { slug: "capability-building", name: "Capability Building", href: "/capabilities/operations/workforce-optimization/capability-building" },
        { slug: "labor-productivity", name: "Labor Productivity", href: "/capabilities/operations/workforce-optimization/labor-productivity" },
      ]}
      ctaLeadName="Talk to our Performance Management lead"
    />
  );
}
