// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Quality Strategy & Governance.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsQualityManagementQualityStrategyGovernance() {
  return (
    <ServiceDetailTemplate
      hubName="Quality Management"
      hubSlug="operations/quality-management"
      hubHref="/capabilities/operations/quality-management"
      serviceName="Quality Strategy & Governance"
      serviceSlug="quality-strategy-governance"
      heroSubtitle="Define your quality vision and management system. Establish governance structures, metrics, and accountability frameworks that drive results."
      heroImage="https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Quality Management engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know quality strategy & governance can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused quality strategy & governance program — grounded in quality management fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing quality strategy & governance approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for quality strategy & governance — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for quality strategy & governance aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Quality Management capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "accounting-audit-automation",
          title: "Big Four Firm Modernizes Audit with End-to-End Automation",
          industry: "Professional Services · Operations",
          metric: "40%",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80",
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
        { slug: "process-quality-improvement", name: "Process Quality Improvement", href: "/capabilities/operations/quality-management/process-quality-improvement" },
        { slug: "supplier-quality-management", name: "Supplier Quality Management", href: "/capabilities/operations/quality-management/supplier-quality-management" },
        { slug: "quality-culture-development", name: "Quality Culture Development", href: "/capabilities/operations/quality-management/quality-culture-development" },
      ]}
      ctaLeadName="Talk to our Quality Strategy & Governance lead"
    />
  );
}
