
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function EmployeeExperienceExDesign() {
  return (
    <ServiceDetailTemplate
      hubName="Service Design"
      hubSlug="service-design"
      hubHref="/capabilities/growth-marketing-sales/service-design"
      serviceName="Employee Experience (EX) Design"
      serviceSlug="employee-experience-ex-design"
      heroSubtitle="Your employees are the delivery mechanism of your service. We design tools, workflows, and environments that empower your team to deliver excellence."
      heroImage="/images/capabilities/cap-office-women.jpg"
      heroFocal="55% 45%"
      experienceStats={[
        { number: "40+", label: "Employee Experience (EX) Design engagements delivered" },
        { number: "8 wks", label: "Median time to first measurable result" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate employee experience (ex) design from a one-off project into a repeatable, production-grade capability the rest of the business actually trusts. Pilots stall in isolation, ownership scatters, and the value case quietly drifts back to the slide deck it started from."
      opportunity="Done well, employee experience (ex) design compounds — every iteration sharpens the operating model, lowers cost, and unlocks the next set of decisions leadership has been deferring. Our Service Design team brings the strategy, design, data, and change-management muscle needed to move from one-off project to durable capability your team can keep evolving."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where employee experience (ex) design earns its keep.",
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
        "A clear, prioritized roadmap that ties employee experience (ex) design to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
            featuredCases={[
        { slug: "hotel-guest-experience", title: "Restoring personal service across a hotel group", industry: "Travel & Hospitality", metric: "+25pts", image: "/images/industries/city-night.jpg" },
        { slug: "telecom-customer-experience", title: "Cutting a regional carrier's churn by 40%", industry: "Technology, Media & Telecom", metric: "40%", image: "/images/capabilities/cap-iot-network.jpg" },
        { slug: "insurance-digital-distribution", title: "Turning a call-center insurer into a digital one", industry: "Insurance", metric: "50%", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedServices={[
        { slug: "service-blueprinting", name: "Service Blueprinting", href: "/capabilities/growth-marketing-sales/service-design/service-blueprinting" },
        { slug: "physical-digital-integration", name: "Physical-Digital Integration", href: "/capabilities/growth-marketing-sales/service-design/physical-digital-integration" },
        { slug: "service-prototyping-and-piloting", name: "Service Prototyping & Piloting", href: "/capabilities/growth-marketing-sales/service-design/service-prototyping-and-piloting" },
      ]}
      ctaLeadName="Talk to our Service Design lead"
    />
  );
}
