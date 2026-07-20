
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function Visualization() {
  return (
    <ServiceDetailTemplate
      hubName="Digital Twins"
      hubSlug="digital-twins"
      hubHref="/capabilities/artificial-intelligence/digital-twins"
      serviceName="Visualization & Dashboards"
      serviceSlug="visualization"
      heroSubtitle="Create intuitive 3D visualizations and dashboards that make digital twin insights accessible to operators, engineers, and executives. Our team brings engineering depth, design sensibility, and operating-model rigor to make this capability durable, measurable, and trusted across your business."
      heroImage="/images/capabilities/cap-hologram.jpg"
      heroFocal="55% 45%"
      experienceStats={[
        { number: "40+", label: "Visualization & Dashboards engagements delivered" },
        { number: "8 wks", label: "Median time to first production milestone" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate visualization & dashboards from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, visualization & dashboards compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our Digital Twins team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where visualization & dashboards earns its keep.",
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
        "A clear, prioritized roadmap that ties visualization & dashboards to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year program.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "digital-twin-predictive-operations", title: "Cutting unplanned downtime with a digital twin", industry: "Manufacturing", metric: "45%", image: "/images/industries/mfg-robot-arm.jpg" },
        { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", industry: "Manufacturing", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg" },
        { slug: "automotive-connected-vehicle", title: "Turning connected-vehicle data into fewer warranty claims", industry: "Automotive", metric: "30%", image: "/images/cases/automotive-connected-vehicle-hero.jpg" },
      ]}
      relatedServices={[
        { slug: "strategy", name: "Digital Twin Strategy", href: "/capabilities/artificial-intelligence/digital-twins/strategy" },
        { slug: "model-development", name: "Model Development", href: "/capabilities/artificial-intelligence/digital-twins/model-development" },
        { slug: "iot-integration", name: "IoT Integration", href: "/capabilities/artificial-intelligence/digital-twins/iot-integration" },
      ]}
      ctaLeadName="Talk to our Digital Twins lead"
    />
  );
}
