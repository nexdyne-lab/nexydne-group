
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function AiChangeManagement() {
  return (
    <ServiceDetailTemplate
      hubName="AI-Powered Acceleration"
      hubSlug="ai-powered-acceleration"
      hubHref="/capabilities/business-building/ai-powered-acceleration"
      serviceName="AI Change Management"
      serviceSlug="ai-change-management"
      heroSubtitle="Ensure your team adopts AI effectively. Training, governance frameworks, and organizational change programs for AI transformation."
      heroImage="/images/capabilities/cap-circuit-green.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "40+", label: "AI Change Management engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate ai change management from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, ai change management compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our AI-Powered Acceleration team brings the engineering rigor, design sensibility, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where ai change management earns its keep.",
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
        "A clear, prioritized roadmap that ties ai change management to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
        { slug: "automotive-ev-transition", title: "Retooling a supplier line for electric-vehicle parts", industry: "Automotive", metric: "45%", image: "/images/industries/auto-robotics-team.jpg" },
      ]}
      relatedServices={[
        { slug: "ai-strategy-roadmap", name: "AI Strategy & Roadmap", href: "/capabilities/business-building/ai-powered-acceleration/ai-strategy-roadmap" },
        { slug: "generative-ai-integration", name: "Generative AI Integration", href: "/capabilities/business-building/ai-powered-acceleration/generative-ai-integration" },
        { slug: "intelligent-automation", name: "Intelligent Automation", href: "/capabilities/business-building/ai-powered-acceleration/intelligent-automation" },
      ]}
      ctaLeadName="Talk to our AI-Powered Acceleration lead"
    />
  );
}
