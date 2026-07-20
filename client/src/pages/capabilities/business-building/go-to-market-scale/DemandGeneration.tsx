
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function DemandGeneration() {
  return (
    <ServiceDetailTemplate
      hubName="Go-To-Market at Scale"
      hubSlug="go-to-market-scale"
      hubHref="/capabilities/business-building/go-to-market-scale"
      serviceName="Demand Generation"
      serviceSlug="demand-generation"
      heroSubtitle="Integrated campaigns combining content marketing, digital advertising, ABM, and events to generate qualified pipeline at scale."
      heroImage="/images/industries/fin-handshake-city.jpg"
      heroFocal="55% 45%"
      experienceStats={[
        { number: "40+", label: "Demand Generation engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate demand generation from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, demand generation compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Go-To-Market at Scale team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where demand generation earns its keep.",
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
        "A clear, prioritized roadmap that ties demand generation to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", industry: "Retail", metric: "85%", image: "/images/cases/fashion-retail-digital-transformation-hero.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/cases/bank-cross-sell-hero.jpg" },
        { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/cases/telecom-customer-experience-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "partner-network-access", name: "Partner Network Access", href: "/capabilities/business-building/go-to-market-scale/partner-network-access" },
        { slug: "channel-strategy-design", name: "Channel Strategy Design", href: "/capabilities/business-building/go-to-market-scale/channel-strategy-design" },
        { slug: "partner-enablement", name: "Partner Enablement", href: "/capabilities/business-building/go-to-market-scale/partner-enablement" },
      ]}
      ctaLeadName="Talk to our Go-To-Market at Scale lead"
    />
  );
}
