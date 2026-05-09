// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Labor Productivity.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsWorkforceOptimizationLaborProductivity() {
  return (
    <ServiceDetailTemplate
      hubName="Workforce Optimization"
      hubSlug="operations/workforce-optimization"
      hubHref="/capabilities/operations/workforce-optimization"
      serviceName="Labor Productivity"
      serviceSlug="labor-productivity"
      heroSubtitle="Optimize labor utilization and efficiency. Work measurement, scheduling optimization, and productivity improvement programs that maximize output."
      heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Workforce Optimization engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know labor productivity can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused labor productivity program — grounded in workforce optimization fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing labor productivity approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for labor productivity — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for labor productivity aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Workforce Optimization capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "bank-process-automation",
          title: "Regional Bank Automates Loan Origination End-to-End",
          industry: "Financial Services · Operations",
          metric: "70%",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
        },
        {
          slug: "insurance-claims-processing",
          title: "P&C Insurer Cuts Claims Cycle Time with Intelligent Automation",
          industry: "Financial Services · Operations",
          metric: "55%",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
        },
        {
          slug: "hospital-clinical-workflow",
          title: "Academic Medical Center Streamlines Clinical Workflows",
          industry: "Healthcare · Operations",
          metric: "30%",
          image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "workforce-planning", name: "Workforce Planning", href: "/capabilities/operations/workforce-optimization/workforce-planning" },
        { slug: "capability-building", name: "Capability Building", href: "/capabilities/operations/workforce-optimization/capability-building" },
        { slug: "performance-management", name: "Performance Management", href: "/capabilities/operations/workforce-optimization/performance-management" },
      ]}
      ctaLeadName="Talk to our Labor Productivity lead"
    />
  );
}
