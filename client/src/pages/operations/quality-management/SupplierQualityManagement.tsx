
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsQualityManagementSupplierQualityManagement() {
  return (
    <ServiceDetailTemplate
      hubName="Quality Management"
      hubSlug="operations/quality-management"
      hubHref="/capabilities/operations/quality-management"
      serviceName="Supplier Quality Management"
      serviceSlug="supplier-quality-management"
      heroSubtitle="Extend quality standards to your supply base. Develop supplier qualification, monitoring, and development programs."
      heroImage="/images/industries/mfg-robotics.jpg"
      experienceStats={[
        { number: "100+", label: "Quality Management engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know supplier quality management can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused supplier quality management program — grounded in quality management fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing supplier quality management approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for supplier quality management — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for supplier quality management aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Quality Management capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "semiconductor-quality-prediction", title: "Catching chip defects weeks before they appear", industry: "Manufacturing", metric: "92%", image: "/images/cases/semiconductor-quality-prediction-hero.jpg" },
        { slug: "automotive-smart-factory", title: "Lifting plant productivity by 40% at a vehicle maker", industry: "Manufacturing", metric: "40%", image: "/images/industries/mfg-robotics.jpg" },
        { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", industry: "Manufacturing", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg" },
      ]}
      relatedServices={[
        { slug: "quality-strategy-governance", name: "Quality Strategy & Governance", href: "/capabilities/operations/quality-management/quality-strategy-governance" },
        { slug: "process-quality-improvement", name: "Process Quality Improvement", href: "/capabilities/operations/quality-management/process-quality-improvement" },
        { slug: "quality-culture-development", name: "Quality Culture Development", href: "/capabilities/operations/quality-management/quality-culture-development" },
      ]}
      ctaLeadName="Talk to our Supplier Quality Management lead"
    />
  );
}
