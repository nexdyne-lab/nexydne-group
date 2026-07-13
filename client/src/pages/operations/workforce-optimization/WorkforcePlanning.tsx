// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Workforce Planning.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsWorkforceOptimizationWorkforcePlanning() {
  return (
    <ServiceDetailTemplate
      hubName="Workforce Optimization"
      hubSlug="operations/workforce-optimization"
      hubHref="/capabilities/operations/workforce-optimization"
      serviceName="Workforce Planning"
      serviceSlug="workforce-planning"
      heroSubtitle="Align workforce capacity with business needs. Demand forecasting, skills mapping, and strategic workforce planning that ensures you have the right people in the right roles."
      heroImage="/images/capabilities/cap-diverse-team.jpg"
      experienceStats={[
        { number: "100+", label: "Workforce Optimization engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know workforce planning can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused workforce planning program — grounded in workforce optimization fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing workforce planning approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for workforce planning — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for workforce planning aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Workforce Optimization capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
      ]}
      relatedServices={[
        { slug: "capability-building", name: "Capability Building", href: "/capabilities/operations/workforce-optimization/capability-building" },
        { slug: "performance-management", name: "Performance Management", href: "/capabilities/operations/workforce-optimization/performance-management" },
        { slug: "labor-productivity", name: "Labor Productivity", href: "/capabilities/operations/workforce-optimization/labor-productivity" },
      ]}
      ctaLeadName="Talk to our Workforce Planning lead"
    />
  );
}
