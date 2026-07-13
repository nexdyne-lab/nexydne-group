// TODO: confirm with practice lead before publish — experience stats, challenge, opportunity, approach pillars, outcomes, related services, and CTA lead name for Working Capital Management.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinancePerformanceImprovementWorkingCapitalManagement() {
  return (
    <ServiceDetailTemplate
      hubName="Performance Improvement"
      hubSlug="strategy-corporate-finance/performance-improvement"
      hubHref="/capabilities/strategy-corporate-finance/performance-improvement"
      serviceName="Working Capital Management"
      serviceSlug="working-capital-management"
      heroSubtitle="Optimize inventory, receivables, and payables to free up cash. Improve cash conversion cycle and reduce financing needs."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      experienceStats={[
        { number: "100+", label: "Performance Improvement engagements delivered for mid-market and growth companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know working capital management can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused working capital management program — grounded in Performance Improvement fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current working capital management state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for working capital management — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Performance Improvement capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for working capital management aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Performance Improvement capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
      ]}
      relatedServices={[
        { slug: "cost-optimization", name: "Cost Optimization", href: "/capabilities/strategy-corporate-finance/performance-improvement/cost-optimization" },
        { slug: "process-efficiency", name: "Process Efficiency", href: "/capabilities/strategy-corporate-finance/performance-improvement/process-efficiency" },
        { slug: "procurement-excellence", name: "Procurement Excellence", href: "/capabilities/strategy-corporate-finance/performance-improvement/procurement-excellence" },
      ]}
      ctaLeadName="Talk to our Working Capital Management lead"
    />
  );
}
