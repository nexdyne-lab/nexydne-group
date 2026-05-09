// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Field Service Excellence.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsServiceOperationsFieldServiceExcellence() {
  return (
    <ServiceDetailTemplate
      hubName="Service Operations"
      hubSlug="operations/service-operations"
      hubHref="/capabilities/operations/service-operations"
      serviceName="Field Service Excellence"
      serviceSlug="field-service-excellence"
      heroSubtitle="Optimize field service operations including scheduling, routing, technician productivity, and mobile enablement."
      heroImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Service Operations engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know field service excellence can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused field service excellence program — grounded in service operations fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing field service excellence approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for field service excellence — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for field service excellence aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Service Operations capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "healthcare-patient-engagement",
          title: "Provider Network Lifts Patient Engagement with Digital Operations",
          industry: "Healthcare · Operations",
          metric: "3x",
          image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1600&q=80",
        },
        {
          slug: "telehealth-platform",
          title: "National Telehealth Provider Scales Operations 10x",
          industry: "Healthcare · Operations",
          metric: "10x",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "service-delivery-optimization", name: "Service Delivery Optimization", href: "/capabilities/operations/service-operations/service-delivery-optimization" },
        { slug: "customer-experience-design", name: "Customer Experience Design", href: "/capabilities/operations/service-operations/customer-experience-design" },
        { slug: "contact-center-transformation", name: "Contact Center Transformation", href: "/capabilities/operations/service-operations/contact-center-transformation" },
      ]}
      ctaLeadName="Talk to our Field Service Excellence lead"
    />
  );
}
