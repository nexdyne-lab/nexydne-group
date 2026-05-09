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
      heroImage="https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?auto=format&fit=crop&q=80&w=2400"
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
        {
          slug: "healthcare-data-analytics",
          title: "Health System Builds Population Health Analytics Platform",
          industry: "Healthcare · Operations",
          metric: "$18M",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
        },
        {
          slug: "insurance-claims-processing",
          title: "P&C Insurer Cuts Claims Cycle Time with Intelligent Automation",
          industry: "Financial Services · Operations",
          metric: "55%",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
        },
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
