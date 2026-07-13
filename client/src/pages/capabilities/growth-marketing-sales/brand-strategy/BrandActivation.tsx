
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function BrandActivation() {
  return (
    <ServiceDetailTemplate
      hubName="Brand Strategy"
      hubSlug="brand-strategy"
      hubHref="/capabilities/growth-marketing-sales/brand-strategy"
      serviceName="Brand Activation"
      serviceSlug="brand-activation"
      heroSubtitle="Bring your brand to life across marketing, sales, and customer experience. Build launch plans and ongoing activation programs."
      heroImage="/images/capabilities/cap-peacock.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "40+", label: "Brand Activation engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate brand activation from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, brand activation compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Brand Strategy team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where brand activation earns its keep.",
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
        "A clear, prioritized roadmap that ties brand activation to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedServices={[
        { slug: "brand-positioning", name: "Brand Positioning", href: "/capabilities/growth-marketing-sales/brand-strategy/brand-positioning" },
        { slug: "visual-identity", name: "Visual Identity", href: "/capabilities/growth-marketing-sales/brand-strategy/visual-identity" },
        { slug: "messaging-and-voice", name: "Messaging & Voice", href: "/capabilities/growth-marketing-sales/brand-strategy/messaging-and-voice" },
      ]}
      ctaLeadName="Talk to our Brand Strategy lead"
    />
  );
}
