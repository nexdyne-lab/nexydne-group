import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function EcommercePlatforms() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · BUSINESS GROWTH · ECOMMERCE PLATFORMS"
      title="Ecommerce Platforms"
      subtitle="Most platform projects fail in the requirements phase, lose six months to integration surprises, and hand off to an operations team that was never designed. We run the selection, the integration, the cutover, and the operating handoff as a single program."
      heroImage="/images/insight-digital-transform.jpg"
      heroFocal="60% 50%"
      seoTitle="Ecommerce Platforms"
      seoDescription="Selection and implementation of ecommerce platforms — Shopify, Magento, Salesforce Commerce, custom headless — anchored in written requirements, engineered for integration, and operated through a deliberate handoff."
      canonical="/solutions/business-growth/ecommerce-platforms"
      perspective={{
        heading:
          "The platform is not the program. The integration and the handoff are.",
        image: "/images/case-study-retail.8af31c13.jpg",
        paragraphs: [
          "Most ecommerce platform projects we are brought in to recover did not fail because the team picked Shopify when they should have picked Salesforce, or chose Magento when they should have gone headless. They failed because nobody owned the integration architecture, the data migration relitigated the catalog model in week eighteen, and the operations function was an afterthought that the SI gave back to the in-house team on go-live morning.",
          "We run platform programs as a single sequence: written requirements, structured selection, engineered integration, governed cutover, deliberate operating handoff. Whether the answer is Shopify Plus, Salesforce Commerce, BigCommerce, Magento, custom headless, or a composable architecture, the rigor is the same — the platform is just one node in a system that has to keep working past go-live.",
        ],
      }}
      deliverHeading="A five-phase approach from requirements to operated platform."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run twenty to thirty-two weeks from requirements to a live platform running under the in-house operations team."
      phases={[
        {
          name: "Requirements and use-case definition",
          description:
            "Most platform projects fail in the requirements phase. We document the actual commerce use-cases, traffic profile, catalog complexity, integration surface, and operational realities — including the customer-service and fulfillment workflows the platform must accommodate. The output is a written requirements doc the steering committee signs, not a vendor wishlist.",
        },
        {
          name: "Platform selection",
          description:
            "We run the structured selection across the relevant candidates — Shopify, Magento, Salesforce Commerce, BigCommerce, custom headless, or composable architectures — scored against the documented requirements, total cost of ownership, time-to-launch, and integration burden. The selection memo is defensible in writing, not a recap of the vendor's pitch deck.",
        },
        {
          name: "Integration architecture",
          description:
            "An ecommerce platform is one node in a system of OMS, ERP, PIM, CDP, payment, tax, fraud, fulfillment, returns, and customer service. We design the integration architecture — APIs, event flows, data contracts, error-handling — that lets the platform interoperate without duct tape. The architecture is documented to the field, not the diagram.",
        },
        {
          name: "Deployment and go-live",
          description:
            "Deployment is where unrealistic timelines collide with production reality. We design the cutover plan: data migration, redirect strategy, SEO preservation, performance benchmarks, soft-launch and hard-launch readiness gates, and the war-room runbook for the first seventy-two hours. Go-live happens when it is ready, not when the calendar runs out.",
        },
        {
          name: "Ongoing operations",
          description:
            "Most platform implementations get handed off and immediately start drifting. We design the operations function — release cadence, performance monitoring, incident response, change management, vendor relationship — and stand up the dashboards and runbooks the in-house team uses to operate the platform into year two.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Requirements document",
          description:
            "Written requirements doc covering commerce use-cases, traffic profile, catalog complexity, integration surface, and the operational realities the platform must accommodate.",
        },
        {
          name: "Platform selection memo",
          description:
            "Defensible selection memo across the relevant candidates — Shopify, Magento, Salesforce Commerce, BigCommerce, custom headless, composable — scored on requirements, TCO, time-to-launch, and integration burden.",
        },
        {
          name: "Integration architecture",
          description:
            "End-to-end integration architecture covering APIs, event flows, data contracts, and error handling across OMS, ERP, PIM, CDP, payment, tax, fraud, fulfillment, returns, and customer service.",
        },
        {
          name: "Deployment plan and runbook",
          description:
            "Cutover plan covering data migration, redirect strategy, SEO preservation, performance benchmarks, readiness gates, and the war-room runbook for the first seventy-two hours of go-live.",
        },
        {
          name: "Operations playbook",
          description:
            "Operations playbook covering release cadence, performance monitoring, incident response, change management, and the vendor governance the in-house team uses past go-live.",
        },
        {
          name: "Performance dashboard",
          description:
            "Production dashboard tracking site performance, conversion, error rates, and integration health — wired to the operating cadence the platform team uses to steer.",
        },
      ]}
      outcome={{
        heading:
          "Platform programs that lock requirements before selection and design the operating handoff before go-live ship 30 to 50 percent faster — and survive the first ninety days without rework that resets the program clock.",
        body: "The economics work because the program runs as one sequence rather than three workstreams that find each other in week eighteen. We do not hand off the platform on go-live morning — we run the selection, the integration, the cutover, and the handoff against a single plan.",
      }}
      casesHeading="When the program runs as one sequence, the platform earns its license cost."
      cases={[
        {
          industry: "Specialty Retail",
          title:
            "Headless replatform compresses time-to-publish by 67 percent across 14 brand sites",
          description:
            "A specialty retailer was running fourteen brand sites on a legacy monolith and spending six weeks to push any cross-brand change. We selected the composable headless architecture, designed the integration spine, and ran the migration in waves over five months. Time-to-publish for cross-brand changes compressed by 67 percent and the brand-marketing team finally regained the operating tempo it had been promised three years earlier.",
          link: "/cases/specialty-retail-headless",
        },
        {
          industry: "Direct-to-Consumer",
          title:
            "Salesforce Commerce migration goes live with zero customer-visible incidents over launch weekend",
          description:
            "A DTC brand was migrating off a custom platform that had become unmaintainable. We owned the requirements, the selection, the integration architecture across OMS and CDP, and the cutover plan. Go-live cleared the launch weekend with zero customer-visible incidents, the redirect strategy preserved organic traffic within two percent of pre-launch baseline, and the operations function was running under the in-house team within thirty days.",
          link: "/cases/dtc-salesforce-commerce-migration",
        },
      ]}
      siblingsHeading="Sibling offerings inside this cluster."
      siblings={[
        {
          title: "Ecommerce Strategy & Launch",
          link: "/solutions/business-growth/ecommerce-strategy-launch",
        },
        {
          title: "Conversion Optimization",
          link: "/solutions/business-growth/conversion-optimization",
        },
        {
          title: "Digital Product Development",
          link: "/solutions/business-growth/digital-product-development",
        },
        {
          title: "Native Apps",
          link: "/solutions/business-growth/native-apps",
        },
        {
          title: "Revenue Operations & Analytics",
          link: "/solutions/business-growth/revenue-operations-analytics",
        },
      ]}
      cta={{
        heading:
          "Bring our platforms team into your next replatform conversation.",
        body: "We work with leaders who want their next platform program run as one sequence rather than three workstreams. The conversation starts with the requirements, not the vendor pitch.",
        industries: [
          { value: "manufacturing", label: "Manufacturing" },
          { value: "professional-services", label: "Professional Services" },
          { value: "technology", label: "Technology" },
          { value: "healthcare", label: "Healthcare" },
          { value: "financial-services", label: "Financial Services" },
          { value: "retail", label: "Retail & Consumer" },
          { value: "other", label: "Other" },
        ],
      }}
    />
  );
}
