// Refactored to ServiceDetailTemplate (Cat 2-4f Phase 1 v2). Source content preserved.

import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";

export default function APIIntegration() {
  return (
    <ServiceDetailTemplate
      hubName="Modernization"
      hubSlug="modernization-hub"
      hubHref="/capabilities/technology/modernization-hub"
      serviceName="API Integration"
      serviceSlug="api-integration"
      heroSubtitle="API-first integration architecture. Connect systems, partners, and products via well-designed REST, GraphQL, and gRPC APIs — governed, secured, and built for the long arc."
      heroImage="/solution-enterprise-transformation.0a0f2624.webp"
      experienceStats={[
        { number: "250+", label: "Production APIs designed, deployed, and governed for growing companies" },
        { number: "70%", label: "Average reduction in partner onboarding time after gateway and portal rollout" },
        { number: "New", label: "recurring revenue line from API monetization" },
        { number: "OAuth", label: "Hardened against the threats that matter — pass review on the first try" },
      ]}
      challenge="Every business is now an API business — whether it knows it yet or not. The contracts you ship today define the partnerships you can have tomorrow, and most teams treat APIs as plumbing instead of products."
      opportunity="NexDyne's API consultants build API estates as products: REST or GraphQL by deliberate choice, gateway-governed by default, OAuth-secured for the partner integrations you have not signed yet, and documented well enough that the integrations actually happen."
      approachPillars={[
        {
          step: "01",
          title: "Strategy Before Endpoints",
          body: "Decide what kind of API estate you are building — internal, partner, public, or monetized. The strategy drives every later decision, and we then design the contract: REST or GraphQL, resource-oriented or domain-oriented, with pagination, errors, and idempotency rendered as a product surface, not a guess.",
        },
        {
          step: "02",
          title: "Operate Through a Gateway",
          body: "Authentication, rate limits, observability, versioning — all centralized. Apigee, Kong, AWS API Gateway, or Azure APIM stand up gateways with throttling, OAuth, mTLS, and the developer console that turns API governance from a wiki into a runtime.",
        },
        {
          step: "03",
          title: "Document and Evolve",
          body: "OpenAPI specs, interactive sandboxes, SDKs, and a deprecation policy. Documentation is not the last step — it is the product surface. Wrap COBOL, AS/400, and aging on-prem systems with modern APIs to modernize access without the multi-year replatform.",
        },
      ]}
      outcomes={[
        "API Strategy & Design: REST, GraphQL, or gRPC — the right paradigm for the consumer, the data, and the latency budget.",
        "API Gateway implementation on Apigee, Kong, AWS API Gateway, or Azure APIM with versioning, throttling, observability, and developer console.",
        "API Security & OAuth — OAuth 2.0, OIDC, JWT, and mTLS hardened against the threats that matter and audit-ready on the first review.",
        "API Monetization: pricing tiers, metering, contracts, and billing integration that turn an internal API into a revenue-bearing product line.",
        "Developer portal with OpenAPI specs, interactive docs, sandboxes, and SDKs — turning external integrators into willing customers.",
        "Legacy System API Enablement — modern API wrappers for COBOL, AS/400, and aging on-prem systems without the multi-year replatform.",
      ]}
      featuredCases={[
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "insurance-digital-distribution", title: "Turning a call-center insurer into a digital one", industry: "Insurance", metric: "50%", image: "/images/industries/fin-handshake-city.jpg" },
      ]}
      relatedServices={[
        { slug: "legacy-modernization", name: "Legacy Modernization", href: "/capabilities/technology/legacy-modernization" },
        { slug: "platform-engineering", name: "Platform Engineering", href: "/capabilities/technology/platform-engineering" },
        { slug: "cloud-infrastructure", name: "Cloud Infrastructure", href: "/capabilities/technology/cloud-infrastructure" },
      ]}
      ctaLeadName="Talk to our Modernization lead"
    />
  );
}
