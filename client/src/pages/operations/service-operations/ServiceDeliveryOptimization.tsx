
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsServiceOperationsServiceDeliveryOptimization() {
  return (
    <ServiceDetailTemplate
      hubName="Service Operations"
      hubSlug="operations/service-operations"
      hubHref="/capabilities/operations/service-operations"
      serviceName="Service Delivery Optimization"
      serviceSlug="service-delivery-optimization"
      heroSubtitle="Streamline service processes to reduce cycle times, eliminate waste, and improve first-time resolution rates across all service channels."
      heroImage="/images/capabilities/cap-office-women.jpg"
      experienceStats={[
        { number: "100+", label: "Service Operations engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know service delivery optimization can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused service delivery optimization program — grounded in service operations fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing service delivery optimization approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for service delivery optimization — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for service delivery optimization aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Service Operations capability uplift that compounds value beyond the engagement",
      ]}
            featuredCases={[
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/images/cases/insurance-claims-automation-hero.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
        { slug: "agentic-ai-service-resolution", title: "Resolving service requests end to end with AI agents", industry: "Financial Services", metric: "60%", image: "/images/cases/agentic-ai-service-resolution-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "customer-experience-design", name: "Customer Experience Design", href: "/capabilities/operations/service-operations/customer-experience-design" },
        { slug: "field-service-excellence", name: "Field Service Excellence", href: "/capabilities/operations/service-operations/field-service-excellence" },
        { slug: "contact-center-transformation", name: "Contact Center Transformation", href: "/capabilities/operations/service-operations/contact-center-transformation" },
      ]}
      ctaLeadName="Talk to our Service Delivery Optimization lead"
    />
  );
}
