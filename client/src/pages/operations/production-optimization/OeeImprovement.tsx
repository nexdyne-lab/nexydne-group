// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for OEE Improvement.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsProductionOptimizationOeeImprovement() {
  return (
    <ServiceDetailTemplate
      hubName="Production Optimization"
      hubSlug="operations/production-optimization"
      hubHref="/capabilities/operations/production-optimization"
      serviceName="OEE Improvement"
      serviceSlug="oee-improvement"
      heroSubtitle="Systematic approach to improving Overall Equipment Effectiveness. Address availability, performance, and quality losses with data-driven interventions."
      heroImage="/images/industries/mfg-robotics.jpg"
      experienceStats={[
        { number: "100+", label: "Production Optimization engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know oee improvement can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused oee improvement program — grounded in production optimization fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing oee improvement approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for oee improvement — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for oee improvement aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Production Optimization capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "healthcare-readmission", title: "Cutting avoidable readmissions with better prediction", industry: "Healthcare", metric: "42%", image: "/case-doctor-consultation.799c1562.jpg" },
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg" },
      ]}
      relatedServices={[
        { slug: "predictive-maintenance", name: "Predictive Maintenance", href: "/capabilities/operations/production-optimization/predictive-maintenance" },
        { slug: "production-scheduling", name: "Production Scheduling", href: "/capabilities/operations/production-optimization/production-scheduling" },
        { slug: "lean-manufacturing", name: "Lean Manufacturing", href: "/capabilities/operations/production-optimization/lean-manufacturing" },
      ]}
      ctaLeadName="Talk to our OEE Improvement lead"
    />
  );
}
