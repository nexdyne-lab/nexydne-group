
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function JourneyMapping() {
  return (
    <ServiceDetailTemplate
      hubName="Consumer & Shopper Insights"
      hubSlug="consumer-shopper-insights"
      hubHref="/capabilities/growth-marketing-sales/consumer-shopper-insights"
      serviceName="Journey Mapping"
      serviceSlug="journey-mapping"
      heroSubtitle="Map customer journeys across touchpoints and channels. Identify pain points and opportunities to improve the customer experience."
      heroImage="/images/capabilities/cap-office-women.jpg"
      heroFocal="50% 45%"
      experienceStats={[
        { number: "40+", label: "Journey Mapping engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate journey mapping from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, journey mapping compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Consumer & Shopper Insights team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where journey mapping earns its keep.",
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
        "A clear, prioritized roadmap that ties journey mapping to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "consumer-electronics-demand-optimization", title: "Cutting excess stock for a consumer electronics brand", industry: "Consumer Products", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "grocery-demand-forecasting", title: "Cutting a grocer's fresh-food waste by a third", industry: "Retail", metric: "35%", image: "/images/capabilities/cap-food.jpg" },
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedServices={[
        { slug: "customer-segmentation", name: "Customer Segmentation", href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/customer-segmentation" },
        { slug: "qualitative-research", name: "Qualitative Research", href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/qualitative-research" },
        { slug: "quantitative-research", name: "Quantitative Research", href: "/capabilities/growth-marketing-sales/consumer-shopper-insights/quantitative-research" },
      ]}
      ctaLeadName="Talk to our Consumer & Shopper Insights lead"
    />
  );
}
