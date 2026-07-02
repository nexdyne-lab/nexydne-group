// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Contact Center Transformation.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsServiceOperationsContactCenterTransformation() {
  return (
    <ServiceDetailTemplate
      hubName="Service Operations"
      hubSlug="operations/service-operations"
      hubHref="/capabilities/operations/service-operations"
      serviceName="Contact Center Transformation"
      serviceSlug="contact-center-transformation"
      heroSubtitle="Redesign contact center operations to improve customer satisfaction, reduce costs, and enable omnichannel service delivery."
      heroImage="/images/capabilities/cap-office-women.jpg"
      experienceStats={[
        { number: "100+", label: "Service Operations engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know contact center transformation can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused contact center transformation program — grounded in service operations fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing contact center transformation approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for contact center transformation — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for contact center transformation aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Service Operations capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "telehealth-platform",
          title: "National Telehealth Provider Scales Operations 10x",
          industry: "Healthcare · Operations",
          metric: "10x",
          image: "/images/capabilities/cap-colleagues-smile.jpg",
        },
        {
          slug: "healthcare-patient-engagement",
          title: "Provider Network Lifts Patient Engagement with Digital Operations",
          industry: "Healthcare · Operations",
          metric: "3x",
          image: "/images/capabilities/cap-conference-data.jpg",
        },
      ]}
      relatedServices={[
        { slug: "service-delivery-optimization", name: "Service Delivery Optimization", href: "/capabilities/operations/service-operations/service-delivery-optimization" },
        { slug: "customer-experience-design", name: "Customer Experience Design", href: "/capabilities/operations/service-operations/customer-experience-design" },
        { slug: "field-service-excellence", name: "Field Service Excellence", href: "/capabilities/operations/service-operations/field-service-excellence" },
      ]}
      ctaLeadName="Talk to our Contact Center Transformation lead"
    />
  );
}
