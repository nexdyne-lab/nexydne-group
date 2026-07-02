// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Quality Culture Development.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsQualityManagementQualityCultureDevelopment() {
  return (
    <ServiceDetailTemplate
      hubName="Quality Management"
      hubSlug="operations/quality-management"
      hubHref="/capabilities/operations/quality-management"
      serviceName="Quality Culture Development"
      serviceSlug="quality-culture-development"
      heroSubtitle="Build a culture where quality is everyone's responsibility. Training, recognition, and engagement programs that drive behavior change."
      heroImage="/images/industries/mfg-robotics.jpg"
      experienceStats={[
        { number: "100+", label: "Quality Management engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know quality culture development can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused quality culture development program — grounded in quality management fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing quality culture development approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for quality culture development — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for quality culture development aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Quality Management capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "consulting-knowledge-management",
          title: "Top-5 Consulting Firm Builds AI Knowledge Platform",
          industry: "Professional Services · Operations",
          metric: "60%",
          image: "/images/capabilities/cap-battery-factory.jpg",
        },
        {
          slug: "hospital-clinical-workflow",
          title: "Academic Medical Center Streamlines Clinical Workflows",
          industry: "Healthcare · Operations",
          metric: "30%",
          image: "/images/industries/mfg-robot-arm.jpg",
        },
      ]}
      relatedServices={[
        { slug: "quality-strategy-governance", name: "Quality Strategy & Governance", href: "/capabilities/operations/quality-management/quality-strategy-governance" },
        { slug: "process-quality-improvement", name: "Process Quality Improvement", href: "/capabilities/operations/quality-management/process-quality-improvement" },
        { slug: "supplier-quality-management", name: "Supplier Quality Management", href: "/capabilities/operations/quality-management/supplier-quality-management" },
      ]}
      ctaLeadName="Talk to our Quality Culture Development lead"
    />
  );
}
