// TODO: confirm with practice lead before publish — experience stats, approach pillars, outcomes, and CTA lead name for Agile Product Development.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function OperationsProductDevelopmentAgileProductDevelopment() {
  return (
    <ServiceDetailTemplate
      hubName="Product Development"
      hubSlug="operations/product-development"
      hubHref="/capabilities/operations/product-development"
      serviceName="Agile Product Development"
      serviceSlug="agile-product-development"
      heroSubtitle="Implement agile methodologies adapted for physical product development, enabling faster iteration and customer feedback."
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "100+", label: "Product Development engagements delivered globally" },
        { number: "20-40%", label: "Typical performance improvement captured" },
        { number: "8-16 wks", label: "Time to first measurable impact" },
        { number: "Embedded", label: "Capability transfer at every engagement" },
      ]}
      challenge="Operations leaders know agile product development can unlock material value, yet the gap between intent and execution is wide. Legacy processes, fragmented data, and unclear ownership keep performance well below potential — and small fixes rarely move the needle on their own."
      opportunity="A focused agile product development program — grounded in product development fundamentals and powered by modern analytics — can compress cycle times, lift quality, and free working capital. The teams that win treat this as a multi-year capability build, not a one-off project."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the current state",
          body:
            "We assess your existing agile product development approach — mapping flows, capabilities, and gaps. We benchmark against best-in-class performers and quantify the opportunity ahead.",
        },
        {
          step: "02",
          title: "Design the target state",
          body:
            "We co-design a target operating model for agile product development — balancing speed, cost, quality, and risk. The blueprint is grounded in your context and built to scale.",
        },
        {
          step: "03",
          title: "Deliver and embed",
          body:
            "We deploy in agile sprints, measuring impact at each step. We build internal capability alongside process change so the new way of working sticks long after we leave.",
        },
      ]}
      outcomes={[
        "Clear, executive-ready strategy for agile product development aligned to enterprise priorities",
        "Measurable performance gains across cost, quality, speed, and customer experience",
        "Stronger frontline ownership and cross-functional governance to sustain results",
        "Internal Product Development capability uplift that compounds value beyond the engagement",
      ]}
      featuredCases={[
        {
          slug: "legal-document-intelligence",
          title: "Global Legal Operations Team Deploys Document Intelligence at Scale",
          industry: "Professional Services · Operations",
          metric: "10x",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
        },
        {
          slug: "consulting-knowledge-management",
          title: "Top-5 Consulting Firm Builds AI Knowledge Platform",
          industry: "Professional Services · Operations",
          metric: "60%",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
        },
      ]}
      relatedServices={[
        { slug: "npd-process-design", name: "NPD Process Design", href: "/capabilities/operations/product-development/npd-process-design" },
        { slug: "stage-gate-optimization", name: "Stage-Gate Optimization", href: "/capabilities/operations/product-development/stage-gate-optimization" },
        { slug: "portfolio-management", name: "Portfolio Management", href: "/capabilities/operations/product-development/portfolio-management" },
      ]}
      ctaLeadName="Talk to our Agile Product Development lead"
    />
  );
}
