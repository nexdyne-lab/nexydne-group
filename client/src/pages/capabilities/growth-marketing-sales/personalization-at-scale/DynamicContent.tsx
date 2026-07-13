
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function DynamicContent() {
  return (
    <ServiceDetailTemplate
      hubName="Personalization at Scale"
      hubSlug="personalization-at-scale"
      hubHref="/capabilities/growth-marketing-sales/personalization-at-scale"
      serviceName="Dynamic Content"
      serviceSlug="dynamic-content"
      heroSubtitle="Create content systems that enable personalization at scale. Develop modular content, dynamic templates, and automated assembly."
      heroImage="/images/capabilities/cap-mobile-woman.jpg"
      heroFocal="60% 50%"
      experienceStats={[
        { number: "40+", label: "Dynamic Content engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate dynamic content from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, dynamic content compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Personalization at Scale team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where dynamic content earns its keep.",
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
        "A clear, prioritized roadmap that ties dynamic content to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "insurance-digital-distribution", title: "Turning a call-center insurer into a digital one", industry: "Insurance", metric: "50%", image: "/images/industries/fin-handshake-city.jpg" },
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
      ]}
      relatedServices={[
        { slug: "personalization-strategy", name: "Personalization Strategy", href: "/capabilities/growth-marketing-sales/personalization-at-scale/personalization-strategy" },
        { slug: "ai-powered-recommendations", name: "AI-Powered Recommendations", href: "/capabilities/growth-marketing-sales/personalization-at-scale/ai-powered-recommendations" },
        { slug: "customer-data-activation", name: "Customer Data Activation", href: "/capabilities/growth-marketing-sales/personalization-at-scale/customer-data-activation" },
      ]}
      ctaLeadName="Talk to our Personalization at Scale lead"
    />
  );
}
