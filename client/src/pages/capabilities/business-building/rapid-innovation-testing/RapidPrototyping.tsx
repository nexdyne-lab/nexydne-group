
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function RapidPrototyping() {
  return (
    <ServiceDetailTemplate
      hubName="Rapid Innovation & Testing"
      hubSlug="rapid-innovation-testing"
      hubHref="/capabilities/business-building/rapid-innovation-testing"
      serviceName="Rapid Prototyping"
      serviceSlug="rapid-prototyping"
      heroSubtitle="We build and deploy minimum viable products designed to test specific hypotheses. Prototypes range from landing pages and mockups to functional applications, depending on what's required to generate valid evidence."
      heroImage="/images/capabilities/cap-coder.jpg"
      heroFocal="50% 45%"
      experienceStats={[
        { number: "40+", label: "Rapid Prototyping engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate rapid prototyping from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, rapid prototyping compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Rapid Innovation & Testing team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where rapid prototyping earns its keep.",
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
        "A clear, prioritized roadmap that ties rapid prototyping to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "tech-engineering-transformation", title: "Tripling a software company's release speed", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "platform-engineering-developer-velocity", title: "Shipping faster with an internal developer platform", industry: "Technology, Media & Telecom", metric: "3x", image: "/images/capabilities/cap-coder.jpg" },
        { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
      ]}
      relatedServices={[
        { slug: "hypothesis-development", name: "Hypothesis Development", href: "/capabilities/business-building/rapid-innovation-testing/hypothesis-development" },
        { slug: "market-validation", name: "Market Validation", href: "/capabilities/business-building/rapid-innovation-testing/market-validation" },
        { slug: "decision-framework", name: "Decision Framework", href: "/capabilities/business-building/rapid-innovation-testing/decision-framework" },
      ]}
      ctaLeadName="Talk to our Rapid Innovation & Testing lead"
    />
  );
}
