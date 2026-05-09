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
      heroImage="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=2400"
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
        {
          slug: "hospital-clinical-workflow",
          title: "Academic Medical Center Streamlines Clinical Workflows",
          industry: "Healthcare · Operations",
          metric: "30%",
          image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=80",
        },
        {
          slug: "healthcare-data-analytics",
          title: "Health System Builds Population Health Analytics Platform",
          industry: "Healthcare · Operations",
          metric: "$18M",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
        },
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
