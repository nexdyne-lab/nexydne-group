
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function PositioningForTheApiEconomy() {
  return (
    <ServiceDetailTemplate
      hubName="Brand & Storytelling"
      hubSlug="brand-storytelling"
      hubHref="/capabilities/growth-marketing-sales/brand-storytelling"
      serviceName="Positioning for the API Economy"
      serviceSlug="positioning-for-the-api-economy"
      heroSubtitle="We help platforms define their role in the modern tech stack. By clarifying the interoperability and unique value of your technology, we move the conversation from 'features' to 'strategic advantage,' enabling you to compete on value rather than price."
      heroImage="/images/capabilities/cap-telescope.jpg"
      heroFocal="45% 50%"
      experienceStats={[
        { number: "40+", label: "Positioning for the API Economy engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate positioning for the api economy from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, positioning for the api economy compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Brand & Storytelling team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where positioning for the api economy earns its keep.",
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
        "A clear, prioritized roadmap that ties positioning for the api economy to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", industry: "Retail", metric: "85%", image: "/images/capabilities/cap-retail-apparel.jpg" },
        { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
        { slug: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", industry: "Retail", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg" },
      ]}
      relatedServices={[
        { slug: "humanizing-complex-architectures", name: "Humanizing Complex Architectures", href: "/capabilities/growth-marketing-sales/brand-storytelling/humanizing-complex-architectures" },
        { slug: "brand-scalability-systems", name: "Brand Scalability Systems", href: "/capabilities/growth-marketing-sales/brand-storytelling/brand-scalability-systems" },
        { slug: "data-driven-brand-performance", name: "Data-Driven Brand Performance", href: "/capabilities/growth-marketing-sales/brand-storytelling/data-driven-brand-performance" },
      ]}
      ctaLeadName="Talk to our Brand & Storytelling lead"
    />
  );
}
