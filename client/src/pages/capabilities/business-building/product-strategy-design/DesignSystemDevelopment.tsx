
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function DesignSystemDevelopment() {
  return (
    <ServiceDetailTemplate
      hubName="Product Strategy & Design"
      hubSlug="product-strategy-design"
      hubHref="/capabilities/business-building/product-strategy-design"
      serviceName="Design System Development"
      serviceSlug="design-system-development"
      heroSubtitle="Create consistent, scalable design foundations. Component libraries and design tokens that accelerate development and ensure brand consistency."
      heroImage="/images/capabilities/cap-3d-printing.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "40+", label: "Design System Development engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate design system development from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, design system development compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Product Strategy & Design team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where design system development earns its keep.",
        },
        {
          step: "02",
          title: "Design for production from day one",
          body: "We build with deployment, governance, and change management in mind from the first sprint — so the proof of concept is the v1, not a discardable demo.",
        },
        {
          step: "03",
          title: "Run, learn, scale",
          body: "We instrument every release, capture feedback from real users, and lock in what is working. The system you ship in month three is meaningfully better by month nine.",
        },
      ]}
      outcomes={[
        "A clear, prioritized roadmap that ties design system development to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", industry: "Retail", metric: "85%", image: "/images/capabilities/cap-retail-apparel.jpg" },
      ]}
      relatedServices={[
        { slug: "product-vision-roadmap", name: "Product Vision & Roadmap", href: "/capabilities/business-building/product-strategy-design/product-vision-roadmap" },
        { slug: "user-research-insights", name: "User Research & Insights", href: "/capabilities/business-building/product-strategy-design/user-research-insights" },
        { slug: "ux-ui-design", name: "UX/UI Design", href: "/capabilities/business-building/product-strategy-design/ux-ui-design" },
      ]}
      ctaLeadName="Talk to our Product Strategy & Design lead"
    />
  );
}
