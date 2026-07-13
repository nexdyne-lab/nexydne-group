
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function CustomerExperience() {
  return (
    <ServiceDetailTemplate
      hubName="Service Design"
      hubSlug="service-design"
      hubHref="/capabilities/growth-marketing-sales/service-design"
      serviceName="Customer Experience"
      serviceSlug="customer-experience"
      heroSubtitle="Turn customers into advocates. We map journeys, identify friction points, and design seamless experiences that drive loyalty and retention."
      heroImage="/images/capabilities/cap-colleagues-smile.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "40+", label: "Customer Experience engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate customer experience from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, customer experience compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Service Design team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where customer experience earns its keep.",
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
        "A clear, prioritized roadmap that ties customer experience to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
        { slug: "healthcare-readmission", title: "Cutting avoidable readmissions with better prediction", industry: "Healthcare", metric: "42%", image: "/case-doctor-consultation.799c1562.jpg" },
      ]}
      relatedServices={[
        { slug: "service-blueprinting", name: "Service Blueprinting", href: "/capabilities/growth-marketing-sales/service-design/service-blueprinting" },
        { slug: "employee-experience-ex-design", name: "Employee Experience (EX) Design", href: "/capabilities/growth-marketing-sales/service-design/employee-experience-ex-design" },
        { slug: "physical-digital-integration", name: "Physical-Digital Integration", href: "/capabilities/growth-marketing-sales/service-design/physical-digital-integration" },
      ]}
      ctaLeadName="Talk to our Service Design lead"
    />
  );
}
