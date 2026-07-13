
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsStrategicProcurementProcurementTransformation() {
  return (
    <ServiceDetailTemplate
      hubName="Strategic Procurement"
      hubSlug="operations/strategic-procurement"
      hubHref="/capabilities/operations/strategic-procurement"
      serviceName="Procurement Transformation"
      serviceSlug="procurement-transformation"
      heroSubtitle="Design and implement end-to-end procurement operating models including organization, processes, and technology enablement."
      heroImage="/images/industries/retail-warehouse.jpg"
      experienceStats={[
        { number: "100+", label: "Strategic Procurement engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know procurement transformation can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused procurement transformation program — grounded in strategic procurement fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing procurement transformation approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for procurement transformation — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for procurement transformation aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Strategic Procurement capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "strategic-sourcing-savings", title: "Cutting materials cost with strategic sourcing", industry: "Manufacturing", metric: "12%", image: "/images/industries/ops-gears.jpg" },
        { slug: "freight-optimization", title: "Cutting freight costs 18% for a consumer-goods shipper", industry: "Transportation & Logistics", metric: "18%", image: "/images/industries/transport-traffic.jpg" },
        { slug: "automotive-smart-factory", title: "Lifting plant productivity by 40% at a vehicle maker", industry: "Manufacturing", metric: "40%", image: "/images/industries/mfg-robotics.jpg" },
      ]}
      relatedServices={[
        { slug: "strategic-sourcing", name: "Strategic Sourcing", href: "/capabilities/operations/strategic-procurement/strategic-sourcing" },
        { slug: "supplier-management", name: "Supplier Management", href: "/capabilities/operations/strategic-procurement/supplier-management" },
        { slug: "spend-analytics", name: "Spend Analytics", href: "/capabilities/operations/strategic-procurement/spend-analytics" },
      ]}
      ctaLeadName="Talk to our Procurement Transformation lead"
    />
  );
}
