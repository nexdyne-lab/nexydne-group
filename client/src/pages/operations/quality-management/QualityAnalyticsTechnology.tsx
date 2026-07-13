// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Quality Analytics & Technology.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsQualityManagementQualityAnalyticsTechnology() {
  return (
    <ServiceDetailTemplate
      hubName="Quality Management"
      hubSlug="operations/quality-management"
      hubHref="/capabilities/operations/quality-management"
      serviceName="Quality Analytics & Technology"
      serviceSlug="quality-analytics-technology"
      heroSubtitle="Deploy technology to enable quality excellence. Quality management systems, analytics platforms, and automation solutions."
      heroImage="/images/industries/mfg-robotics.jpg"
      experienceStats={[
        { number: "100+", label: "Quality Management engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know quality analytics & technology can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused quality analytics & technology program — grounded in quality management fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing quality analytics & technology approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for quality analytics & technology — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for quality analytics & technology aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Quality Management capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
      ]}
      relatedServices={[
        { slug: "quality-strategy-governance", name: "Quality Strategy & Governance", href: "/capabilities/operations/quality-management/quality-strategy-governance" },
        { slug: "process-quality-improvement", name: "Process Quality Improvement", href: "/capabilities/operations/quality-management/process-quality-improvement" },
        { slug: "supplier-quality-management", name: "Supplier Quality Management", href: "/capabilities/operations/quality-management/supplier-quality-management" },
      ]}
      ctaLeadName="Talk to our Quality Analytics & Technology lead"
    />
  );
}
