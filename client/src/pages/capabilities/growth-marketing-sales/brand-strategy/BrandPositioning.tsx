
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function BrandPositioning() {
  return (
    <ServiceDetailTemplate
      hubName="Brand Strategy"
      hubSlug="brand-strategy"
      hubHref="/capabilities/growth-marketing-sales/brand-strategy"
      serviceName="Brand Positioning"
      serviceSlug="brand-positioning"
      heroSubtitle="Define a distinctive market position that resonates with customers and differentiates from competitors. Build positioning platforms that guide all brand decisions."
      heroImage="/images/capabilities/cap-presenting-graphs.jpg"
      heroFocal="60% 50%"
      experienceStats={[
        { number: "40+", label: "Brand Positioning engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate brand positioning from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, brand positioning compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Brand Strategy team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where brand positioning earns its keep.",
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
        "A clear, prioritized roadmap that ties brand positioning to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", industry: "Retail", metric: "85%", image: "/images/cases/fashion-retail-digital-transformation-hero.jpg" },
        { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
        { slug: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", industry: "Retail", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg" },
      ]}
      relatedServices={[
        { slug: "visual-identity", name: "Visual Identity", href: "/capabilities/growth-marketing-sales/brand-strategy/visual-identity" },
        { slug: "messaging-and-voice", name: "Messaging & Voice", href: "/capabilities/growth-marketing-sales/brand-strategy/messaging-and-voice" },
        { slug: "brand-architecture", name: "Brand Architecture", href: "/capabilities/growth-marketing-sales/brand-strategy/brand-architecture" },
      ]}
      ctaLeadName="Talk to our Brand Strategy lead"
    />
  );
}
