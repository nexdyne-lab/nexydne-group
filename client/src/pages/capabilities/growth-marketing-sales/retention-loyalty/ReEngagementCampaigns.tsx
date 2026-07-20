
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function ReEngagementCampaigns() {
  return (
    <ServiceDetailTemplate
      hubName="Retention & Loyalty"
      hubSlug="retention-loyalty"
      hubHref="/capabilities/growth-marketing-sales/retention-loyalty"
      serviceName="Re-engagement Campaigns"
      serviceSlug="re-engagement-campaigns"
      heroSubtitle="Win back lapsed customers with targeted campaigns. Design offers and messaging that reactivate dormant relationships."
      heroImage="/images/capabilities/cap-colleagues-smile.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "40+", label: "Re-engagement Campaigns engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate re-engagement campaigns from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, re-engagement campaigns compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Retention & Loyalty team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where re-engagement campaigns earns its keep.",
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
        "A clear, prioritized roadmap that ties re-engagement campaigns to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", industry: "Retail", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg" },
        { slug: "airline-loyalty-redesign", title: "Reviving a regional airline's loyalty program", industry: "Travel & Hospitality", metric: "40%", image: "/images/cases/airline-loyalty-redesign-hero.jpg" },
        { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/cases/telecom-customer-experience-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "loyalty-program-design", name: "Loyalty Program Design", href: "/capabilities/growth-marketing-sales/retention-loyalty/loyalty-program-design" },
        { slug: "customer-lifecycle-marketing", name: "Customer Lifecycle Marketing", href: "/capabilities/growth-marketing-sales/retention-loyalty/customer-lifecycle-marketing" },
        { slug: "churn-prevention", name: "Churn Prevention", href: "/capabilities/growth-marketing-sales/retention-loyalty/churn-prevention" },
      ]}
      ctaLeadName="Talk to our Retention & Loyalty lead"
    />
  );
}
