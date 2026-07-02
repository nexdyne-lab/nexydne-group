// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Capability Building.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsWorkforceOptimizationCapabilityBuilding() {
  return (
    <ServiceDetailTemplate
      hubName="Workforce Optimization"
      hubSlug="operations/workforce-optimization"
      hubHref="/capabilities/operations/workforce-optimization"
      serviceName="Capability Building"
      serviceSlug="capability-building"
      heroSubtitle="Develop the skills your operations need. Training program design, competency frameworks, and learning pathways that accelerate skill development."
      heroImage="/images/capabilities/cap-diverse-team.jpg"
      experienceStats={[
        { number: "100+", label: "Workforce Optimization engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know capability building can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused capability building program — grounded in workforce optimization fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing capability building approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for capability building — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for capability building aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Workforce Optimization capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "consulting-knowledge-management",
          title: "Top-5 Consulting Firm Builds AI Knowledge Platform",
          industry: "Professional Services · Operations",
          metric: "60%",
          image: "/images/capabilities/cap-colleagues.jpg",
        },
        {
          slug: "law-firm-contract-automation",
          title: "AmLaw 200 Firm Automates Contract Review Across 12 Practice Areas",
          industry: "Professional Services · Operations",
          metric: "85%",
          image: "/images/industries/biz-team-bright.jpg",
        },
      ]}
      relatedServices={[
        { slug: "workforce-planning", name: "Workforce Planning", href: "/capabilities/operations/workforce-optimization/workforce-planning" },
        { slug: "performance-management", name: "Performance Management", href: "/capabilities/operations/workforce-optimization/performance-management" },
        { slug: "labor-productivity", name: "Labor Productivity", href: "/capabilities/operations/workforce-optimization/labor-productivity" },
      ]}
      ctaLeadName="Talk to our Capability Building lead"
    />
  );
}
