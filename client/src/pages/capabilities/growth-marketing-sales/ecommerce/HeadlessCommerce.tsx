
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function HeadlessCommerce() {
  return (
    <ServiceDetailTemplate
      hubName="E-commerce"
      hubSlug="ecommerce"
      hubHref="/capabilities/growth-marketing-sales/ecommerce"
      serviceName="Headless Commerce"
      serviceSlug="headless-commerce"
      heroSubtitle="Build flexible, composable commerce architecture. Decouple frontend and backend to enable faster innovation and better customer experiences."
      heroImage="/images/capabilities/cap-mobile-woman.jpg"
      heroFocal="50% 45%"
      experienceStats={[
        { number: "40+", label: "Headless Commerce engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate headless commerce from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, headless commerce compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our E-commerce team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where headless commerce earns its keep.",
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
        "A clear, prioritized roadmap that ties headless commerce to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", industry: "Retail", metric: "85%", image: "/images/cases/fashion-retail-digital-transformation-hero.jpg" },
        { slug: "retail-assortment-optimization", title: "Tailoring store assortments to lift a retailer's sales", industry: "Retail", metric: "12%", image: "/images/cases/retail-assortment-optimization-hero.jpg" },
        { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
      ]}
      relatedServices={[
        { slug: "platform-strategy", name: "Platform Strategy", href: "/capabilities/growth-marketing-sales/ecommerce/platform-strategy" },
        { slug: "conversion-optimization", name: "Conversion Optimization", href: "/capabilities/growth-marketing-sales/ecommerce/conversion-optimization" },
        { slug: "marketplace-management", name: "Marketplace Management", href: "/capabilities/growth-marketing-sales/ecommerce/marketplace-management" },
      ]}
      ctaLeadName="Talk to our E-commerce lead"
    />
  );
}
