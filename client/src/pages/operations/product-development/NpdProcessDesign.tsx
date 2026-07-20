
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsProductDevelopmentNpdProcessDesign() {
  return (
    <ServiceDetailTemplate
      hubName="Product Development"
      hubSlug="operations/product-development"
      hubHref="/capabilities/operations/product-development"
      serviceName="NPD Process Design"
      serviceSlug="npd-process-design"
      heroSubtitle="Design and implement new product development processes that balance speed with rigor, from ideation through launch."
      heroImage="/images/capabilities/cap-3d-printing.jpg"
      experienceStats={[
        { number: "100+", label: "Product Development engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know npd process design can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused npd process design program — grounded in product development fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing npd process design approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for npd process design — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for npd process design aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Product Development capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "automotive-ev-transition", title: "Retooling a supplier line for electric-vehicle parts", industry: "Automotive", metric: "45%", image: "/images/cases/automotive-ev-transition-hero.jpg" },
        { slug: "aerospace-digital-engineering", title: "How a global aircraft maker brought new programs to market 40% faster", industry: "Aerospace & Defense", metric: "40%", image: "/images/industries/aero-rocket.jpg" },
        { slug: "semiconductor-quality-prediction", title: "Catching chip defects weeks before they appear", industry: "Manufacturing", metric: "92%", image: "/images/cases/semiconductor-quality-prediction-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "stage-gate-optimization", name: "Stage-Gate Optimization", href: "/capabilities/operations/product-development/stage-gate-optimization" },
        { slug: "agile-product-development", name: "Agile Product Development", href: "/capabilities/operations/product-development/agile-product-development" },
        { slug: "portfolio-management", name: "Portfolio Management", href: "/capabilities/operations/product-development/portfolio-management" },
      ]}
      ctaLeadName="Talk to our NPD Process Design lead"
    />
  );
}
