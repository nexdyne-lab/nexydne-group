// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function PlatformEngineering() {
  return (
    <ServiceDetailTemplate
      hubName="Platform Engineering"
      hubSlug="platform-engineering-hub"
      hubHref="/capabilities/technology/platform-engineering-hub"
      serviceName="Platform Engineering"
      serviceSlug="platform-engineering"
      heroSubtitle="Platforms compound only when they are operated as products. We define the vision, design the IDP, build the paved paths, run the adoption, and embed the platform-team operating model that turns infrastructure into a managed developer experience."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "60-80%", label: "Cut in time-to-first-deploy after IDP rollout" },
        { number: "1 eng / 6", label: "Application-team capacity lift per six teams adopted" },
        { number: "Product-mode", label: "Platforms operated with SLAs, roadmaps, and customer feedback" },
        { number: "Golden paths", label: "Self-service replaces ticket-driven provisioning" },
      ]}
      challenge="Stop building tooling sprawl. Start running the platform like a product the application teams want to adopt. Tooling-led platforms accumulate options nobody adopts and headcount nobody can justify; product-mode platforms compound."
      opportunity="We start with the developer experience the platform is meant to produce, design the IDP, build the paved paths the application teams adopt, run adoption against named accounts, and embed the product-team operating model that keeps the platform compounding."
      approachPillars={[
        {
          step: "01",
          title: "Vision, Scope, and IDP Architecture",
          body: "We start with the developer experience the platform is meant to produce — what golden paths it offers, which application teams it serves, what self-service capabilities replace the ticket-driven model. From the vision we design the internal developer platform: capabilities catalog, integration model with cloud and identity, developer portal, and the abstractions the platform owns versus the ones it exposes.",
        },
        {
          step: "02",
          title: "Build & Onboard with Paved Paths",
          body: "We build the platform alongside the platform team — developer portal, self-service templates, policy guardrails, observability defaults, and integrations with existing CI/CD, identity, and security stacks. Onboarding waves run with documentation, paved-path tutorials, office hours, and internal advocacy — adoption is measured against named teams.",
        },
        {
          step: "03",
          title: "Operate the Platform as a Product",
          body: "Platforms compound only when they are operated as products. We embed the platform-team operating cadence — capability planning, deprecation policy, customer support, SLA reporting — and extend the platform across additional domains so the central investment scales with the application portfolio it serves.",
        },
      ]}
      outcomes={[
        "Written platform vision and product strategy covering golden paths, customer segments, self-service capabilities, scope boundaries, and a co-signed business case.",
        "Reference IDP architecture — capabilities catalog, integration model, developer portal, abstraction boundaries, and the standards the platform owns.",
        "Production-grade capabilities catalog — templates, infrastructure paved paths, deployment patterns, observability defaults, security guardrails.",
        "Developer onboarding playbook covering paved-path tutorials, office-hours model, internal advocacy program, and documentation standards that keep adoption ramps short.",
        "Adoption and satisfaction metrics dashboard — adoption rate, capability usage, deployment frequency on platform, developer satisfaction score.",
        "Platform operating model — org design, RACI, capability planning cadence, deprecation policy, customer support model, and the product-team operating standards.",
      ]}
      featuredCases={[
        { slug: "pe-healthcare-diligence", title: "Cutting healthcare diligence time by 40%", industry: "Private Equity", metric: "40%", image: "/images/capabilities/cap-conference-data.jpg" },
        { slug: "insurance-ai-underwriting", title: "Quoting commercial business in a day, not a week", industry: "Insurance", metric: "40%", image: "/images/industries/fin-monitors.jpg" },
      ]}
      relatedServices={[
        { slug: "devops-cicd", name: "DevOps & CI/CD", href: "/capabilities/technology/devops-cicd" },
        { slug: "data-platform-engineering", name: "Data Platform Engineering", href: "/capabilities/technology/data-platform-engineering" },
        { slug: "infrastructure-modernization", name: "Infrastructure Modernization", href: "/capabilities/technology/infrastructure-modernization" },
      ]}
      ctaLeadName="Talk to our Platform Engineering lead"
    />
  );
}
