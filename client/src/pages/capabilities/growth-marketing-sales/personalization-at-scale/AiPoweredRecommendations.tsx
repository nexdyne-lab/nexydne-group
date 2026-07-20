
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function AiPoweredRecommendations() {
  return (
    <ServiceDetailTemplate
      hubName="Personalization at Scale"
      hubSlug="personalization-at-scale"
      hubHref="/capabilities/growth-marketing-sales/personalization-at-scale"
      serviceName="AI-Powered Recommendations"
      serviceSlug="ai-powered-recommendations"
      heroSubtitle="Build recommendation engines that predict customer preferences. Implement product, content, and next-best-action recommendations."
      heroImage="/images/capabilities/cap-hologram.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "40+", label: "AI-Powered Recommendations engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate ai-powered recommendations from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, ai-powered recommendations compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Personalization at Scale team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where ai-powered recommendations earns its keep.",
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
        "A clear, prioritized roadmap that ties ai-powered recommendations to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "hotel-guest-experience", title: "Restoring personal service across a hotel group", industry: "Travel & Hospitality", metric: "+25pts", image: "/images/cases/hotel-guest-experience-hero.jpg" },
        { slug: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", industry: "Retail", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg" },
        { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/cases/telecom-customer-experience-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "personalization-strategy", name: "Personalization Strategy", href: "/capabilities/growth-marketing-sales/personalization-at-scale/personalization-strategy" },
        { slug: "dynamic-content", name: "Dynamic Content", href: "/capabilities/growth-marketing-sales/personalization-at-scale/dynamic-content" },
        { slug: "customer-data-activation", name: "Customer Data Activation", href: "/capabilities/growth-marketing-sales/personalization-at-scale/customer-data-activation" },
      ]}
      ctaLeadName="Talk to our Personalization at Scale lead"
    />
  );
}
