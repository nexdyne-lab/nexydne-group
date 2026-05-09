// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Regulatory Compliance.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsQualityManagementRegulatoryCompliance() {
  return (
    <ServiceDetailTemplate
      hubName="Quality Management"
      hubSlug="operations/quality-management"
      hubHref="/capabilities/operations/quality-management"
      serviceName="Regulatory Compliance"
      serviceSlug="regulatory-compliance"
      heroSubtitle="Navigate complex regulatory requirements. ISO certification, industry-specific standards, and audit readiness programs."
      heroImage="https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Quality Management engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know regulatory compliance can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused regulatory compliance program — grounded in quality management fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing regulatory compliance approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for regulatory compliance — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for regulatory compliance aligned to enterprise priorities",
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
          slug: "wealth-management-automation",
          title: "Wealth Manager Automates Client Onboarding and Portfolio Reporting",
          industry: "Financial Services · Operations",
          metric: "75%",
          image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600&q=80",
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
      ctaLeadName="Talk to our Regulatory Compliance lead"
    />
  );
}
