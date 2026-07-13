
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function DataPipelines() {
  return (
    <ServiceDetailTemplate
      hubName="Custom Model Development"
      hubSlug="custom-model-development"
      hubHref="/capabilities/artificial-intelligence/custom-model-development"
      serviceName="Data Pipeline Engineering"
      serviceSlug="data-pipelines"
      heroSubtitle="Build robust data pipelines for model training. We handle data collection, cleaning, labeling, augmentation, and version control at scale. Our team brings engineering depth, design sensibility, and operating-model rigor to make this capability durable, measurable, and trusted across your business."
      heroImage="/images/capabilities/cap-hands-data.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "40+", label: "Data Pipeline Engineering engagements delivered" },
        { number: "8 wks", label: "Median time to first production milestone" },
        { number: "3x", label: "Average lift on the primary outcome metric" },
        { number: "92%", label: "Client renewal or extension rate" },
      ]}
      challenge="Most teams underestimate how hard it is to translate data pipeline engineering from a slide deck into a production-grade capability that other people in the business actually trust and use. The result is pilots that work in isolation, models that quietly drift, and roadmaps that never quite turn into operating reality."
      opportunity="Done well, data pipeline engineering compounds — every iteration improves accuracy, lowers cost, and unlocks new use cases that were previously out of reach. Our Custom Model Development team brings the engineering rigor, design sensibility, and change management muscle needed to move from one-off project to durable, scaling capability."
      approachPillars={[
        {
          step: "01",
          title: "Diagnose the real problem",
          body: "We start with the operating reality, not the technology. Where is value leaking, where is risk concentrated, where do your people lose hours? That is where data pipeline engineering earns its keep.",
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
        "A clear, prioritized roadmap that ties data pipeline engineering to specific business outcomes leadership has signed off on.",
        "A first production-grade release in market within a single quarter, not a multi-year programme.",
        "Measurable, attributable lift on the primary metric — speed, cost, quality, or revenue — within the first 90 days of deployment.",
        "Internal capability built alongside the work, so your teams can extend, govern, and operate the system without permanent vendor dependency.",
        "Documented guardrails, monitoring, and escalation paths that satisfy risk, security, and compliance reviewers.",
        "A repeatable pattern that travels — second and third use cases launch faster and cheaper than the first.",
      ]}
      featuredCases={[
        { slug: "custom-model-clinical-coding", title: "Coding claims with a model trained on its own records", industry: "Healthcare", metric: "40%", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { slug: "semiconductor-quality-prediction", title: "Catching chip defects weeks before they appear", industry: "Manufacturing", metric: "92%", image: "/images/industries/mfg-robot-arm.jpg" },
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedServices={[
        { slug: "foundation-fine-tuning", name: "Foundation Model Fine-Tuning", href: "/capabilities/artificial-intelligence/custom-model-development/foundation-fine-tuning" },
        { slug: "architecture-design", name: "Custom Architecture Design", href: "/capabilities/artificial-intelligence/custom-model-development/architecture-design" },
        { slug: "model-optimization", name: "Model Optimization", href: "/capabilities/artificial-intelligence/custom-model-development/model-optimization" },
      ]}
      ctaLeadName="Talk to our Custom Model Development lead"
    />
  );
}
