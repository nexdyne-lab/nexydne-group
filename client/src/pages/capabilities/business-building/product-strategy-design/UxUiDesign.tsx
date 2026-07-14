
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function UxUiDesign() {
  return (
    <ServiceDetailTemplate
      hubName="Product Strategy & Design"
      hubSlug="product-strategy-design"
      hubHref="/capabilities/business-building/product-strategy-design"
      serviceName="UX/UI Design"
      serviceSlug="ux-ui-design"
      heroSubtitle="Design experiences that users love and that drive business results. From wireframes to high-fidelity prototypes, we create interfaces that convert."
      heroImage="/images/capabilities/cap-hologram.jpg"
      heroFocal="45% 50%"
      experienceStats={[
        { number: "40+", label: "UX/UI Design engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate ux/ui design from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, ux/ui design compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Product Strategy & Design team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where ux/ui design earns its keep.",
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
        "A clear, prioritized roadmap that ties ux/ui design to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "automotive-ev-transition", title: "Retooling a supplier line for electric-vehicle parts", industry: "Automotive", metric: "45%", image: "/images/industries/auto-robotics-team.jpg" },
        { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "generative-ai-document-automation", title: "Drafting policy documents in minutes with generative AI", industry: "Insurance", metric: "85%", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedServices={[
        { slug: "product-vision-roadmap", name: "Product Vision & Roadmap", href: "/capabilities/business-building/product-strategy-design/product-vision-roadmap" },
        { slug: "user-research-insights", name: "User Research & Insights", href: "/capabilities/business-building/product-strategy-design/user-research-insights" },
        { slug: "product-market-fit-analysis", name: "Product-Market Fit Analysis", href: "/capabilities/business-building/product-strategy-design/product-market-fit-analysis" },
      ]}
      ctaLeadName="Talk to our Product Strategy & Design lead"
    />
  );
}
