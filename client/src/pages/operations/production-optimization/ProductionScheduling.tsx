
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsProductionOptimizationProductionScheduling() {
  return (
    <ServiceDetailTemplate
      hubName="Production Optimization"
      hubSlug="operations/production-optimization"
      hubHref="/capabilities/operations/production-optimization"
      serviceName="Production Scheduling"
      serviceSlug="production-scheduling"
      heroSubtitle="Optimize production planning and scheduling. Balance demand, capacity, and constraints for maximum efficiency and customer service."
      heroImage="/images/industries/mfg-robotics.jpg"
      experienceStats={[
        { number: "100+", label: "Production Optimization engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know production scheduling can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused production scheduling program — grounded in production optimization fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing production scheduling approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for production scheduling — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for production scheduling aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Production Optimization capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "automotive-smart-factory", title: "Lifting plant productivity by 40% at a vehicle maker", industry: "Manufacturing", metric: "40%", image: "/images/industries/mfg-robotics.jpg" },
        { slug: "semiconductor-quality-prediction", title: "Catching chip defects weeks before they appear", industry: "Manufacturing", metric: "92%", image: "/images/cases/semiconductor-quality-prediction-hero.jpg" },
        { slug: "strategic-sourcing-savings", title: "Cutting materials cost with strategic sourcing", industry: "Manufacturing", metric: "12%", image: "/images/industries/ops-gears.jpg" },
      ]}
      relatedServices={[
        { slug: "oee-improvement", name: "OEE Improvement", href: "/capabilities/operations/production-optimization/oee-improvement" },
        { slug: "predictive-maintenance", name: "Predictive Maintenance", href: "/capabilities/operations/production-optimization/predictive-maintenance" },
        { slug: "lean-manufacturing", name: "Lean Manufacturing", href: "/capabilities/operations/production-optimization/lean-manufacturing" },
      ]}
      ctaLeadName="Talk to our Production Scheduling lead"
    />
  );
}
