
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function StrategyCorporateFinancePerformanceImprovementProcessEfficiency() {
  return (
    <ServiceDetailTemplate
      hubName="Performance Improvement"
      hubSlug="strategy-corporate-finance/performance-improvement"
      hubHref="/capabilities/strategy-corporate-finance/performance-improvement"
      serviceName="Process Efficiency"
      serviceSlug="process-efficiency"
      heroSubtitle="Streamline operations to reduce waste and improve throughput. Lean principles applied to your specific context."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      experienceStats={[
        { number: "100+", label: "Performance Improvement engagements delivered for growing companies" },
        { number: "20-40%", label: "Typical performance improvement captured within the first 12 months" },
        { number: "8-16 wks", label: "Time to first measurable impact in a focused workstream" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Leaders know process efficiency can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused process efficiency program — grounded in Performance Improvement fundamentals and powered by modern analytics — can sharpen decisions, lift returns, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and discover",
          body:
            "We assess your current process efficiency state — mapping processes, capabilities, data, and gaps. We benchmark against best-in-class peers and quantify the value at stake.",
        },
        {
          step: "02",
          title: "Design and decide",
          body:
            "We co-design a target operating model for process efficiency — balancing speed, cost, risk, and impact. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal Performance Improvement capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for process efficiency aligned to enterprise priorities",
        "Measurable performance gains across cost, growth, risk, and resilience",
        "Stronger leadership ownership and cross-functional governance to sustain results",
        "Internal Performance Improvement capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "pe-industrial-transformation", title: "Adding $18M in EBITDA at an industrial manufacturer", industry: "Private Equity", metric: "$18M", image: "/images/industries/transport-traffic.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "automotive-smart-factory", title: "Lifting plant productivity by 40% at a vehicle maker", industry: "Manufacturing", metric: "40%", image: "/images/industries/mfg-robotics.jpg" },
      ]}
      relatedServices={[
        { slug: "cost-optimization", name: "Cost Optimization", href: "/capabilities/strategy-corporate-finance/performance-improvement/cost-optimization" },
        { slug: "working-capital-management", name: "Working Capital Management", href: "/capabilities/strategy-corporate-finance/performance-improvement/working-capital-management" },
        { slug: "procurement-excellence", name: "Procurement Excellence", href: "/capabilities/strategy-corporate-finance/performance-improvement/procurement-excellence" },
      ]}
      ctaLeadName="Talk to our Process Efficiency lead"
    />
  );
}
