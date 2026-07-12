import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function CustomerDataPlatform() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · CUSTOMER INTELLIGENCE · CUSTOMER DATA PLATFORM"
      title="Customer Data Platform"
      subtitle="A CDP without a use-case discipline is a data lake with a marketing budget. We select the platform, design the identity graph, and ship the first wave of activation use-cases that earn the program its place in the stack — and stand up the operating model that keeps it compounding."
      heroImage="/images/cloud-data-abstract.jpg"
      heroFocal="60% 50%"
      seoTitle="Customer Data Platform"
      seoDescription="Select, implement, and operate a CDP that unifies customer data across CRM, web, mobile, support, and ad platforms — with the identity graph and use-case discipline that earns its budget."
      canonical="/solutions/customer-intelligence/customer-data-platform"
      perspective={{
        heading:
          "The CDP is not the win. The activation use-cases are the win.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "Most CDP programs we are brought into start with a tool already chosen and a strategy that reads 'unify the customer view.' Twelve months in, the platform is technically live, the data is mostly flowing, and no operator is actually doing anything different. The CDP without a use-case discipline becomes a data lake with a higher SaaS bill. The win is not the unification — it is the three or four activation use-cases shipped end-to-end inside the first six months that prove the platform earns its budget.",
          "We build CDP programs use-case-first. The platform selection — Segment, Tealium, Treasure Data, Adobe Real-Time CDP, Salesforce Data Cloud, mParticle, build-on-warehouse — is a function of the use-cases, the existing stack, and the identity strategy, not the other way around. The identity graph is proven against a real cohort before the first audience ships. The operating model is designed in from day one. A CDP that compounds is a CDP whose first quarter has a measurable impact statement attached.",
        ],
      }}
      deliverHeading="A five-phase approach from data audit to operating model."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run sixteen to twenty-six weeks from audit to first-wave activation use-cases live in production."
      phases={[
        {
          name: "Data inventory and use-case definition",
          description:
            "Most CDP programs fail because they were sold a tool before anyone agreed what it was for. We start by inventorying every customer-data source in flight — CRM, web, mobile, support, ad platforms, transactional systems, third-party enrichment — and converging the marketing, product, and analytics teams on the activation use-cases the CDP is actually expected to serve. The output is a use-case-driven brief, not a vendor wishlist.",
        },
        {
          name: "Platform selection",
          description:
            "Segment, Tealium, Treasure Data, Adobe Real-Time CDP, Salesforce Data Cloud, Bloomreach, mParticle — and the build-on-warehouse alternative — each win in different conditions. We run a structured selection against your use-case brief, current stack, identity strategy, and procurement realities. The selection memo names the platform, the trade-offs accepted, and the conditions under which the choice would change.",
        },
        {
          name: "Identity resolution architecture",
          description:
            "The CDP is only as good as its identity graph. We design the resolution architecture — deterministic match keys, probabilistic supplements, household and B2B account hierarchies, consent-aware merges — and prove it on a representative cohort before the first activation use-case ships. A CDP whose identity graph is wrong is worse than no CDP at all.",
        },
        {
          name: "Activation use-case build",
          description:
            "We build the first wave of activation use-cases end-to-end: the segment definition, the audience push to ad platforms or CRM, the suppression logic, the measurement hookup. Three or four well-instrumented activation use-cases shipped in the first six months earn the program its budget; twenty in flight at thirty percent completion lose it.",
        },
        {
          name: "Operations and ongoing use-case management",
          description:
            "A CDP without a use-case operating model becomes a data lake with extra steps. We stand up the segment governance, the activation request intake, the measurement cadence, and the cross-functional council that decides which use-cases earn investment. The platform compounds because the operating model around it does.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Customer data audit",
          description:
            "Inventory of every customer-data source in flight — system, ownership, schema, refresh cadence, identity coverage, and the activation use-cases each source is expected to serve.",
        },
        {
          name: "CDP selection memo",
          description:
            "Structured platform recommendation across Segment, Tealium, Treasure Data, Adobe, Salesforce, mParticle, and build-on-warehouse — with the trade-offs accepted and the conditions under which the choice would change.",
        },
        {
          name: "Identity resolution architecture",
          description:
            "Reference architecture for deterministic and probabilistic matching, household and account hierarchies, consent enforcement, and the validation cohort the graph is benchmarked against.",
        },
        {
          name: "Activation use-case library",
          description:
            "Catalogued first-wave activation use-cases — segment definition, audience destination, suppression logic, measurement hookup — sequenced for the first two quarters of the program.",
        },
        {
          name: "Segment and audience playbook",
          description:
            "Operating playbook for segment naming, governance, lifecycle, and reuse — with the council charter that decides which segments earn promotion to a reusable audience.",
        },
        {
          name: "CDP operating model",
          description:
            "End-to-end operating model covering activation request intake, prioritization, build cadence, measurement, and the cross-functional council that owns the platform's roadmap.",
        },
      ]}
      outcome={{
        heading:
          "CDP programs that ship four activation use-cases in their first six months earn their three-year budget twice over — and identity is what makes the difference between activation and aspiration.",
        body: "The economics work because the platform is bought against the use-cases, not the use-cases bought against the platform. We do not ship a unified-customer-view brochure and walk away. We engineer the identity graph, ship the first activation wave, and hand off the operating model that keeps the program earning.",
      }}
      casesHeading="When the use-cases lead, the platform earns its place in the stack."
      cases={[
        {
          industry: "Multi-Brand Retail",
          title:
            "CDP unifies 14 source systems and lifts paid-media efficiency by 28 percent",
          description:
            "A multi-brand retailer was running four loyalty programs, three e-commerce platforms, and seven ad-tech destinations on disconnected identity. We selected Treasure Data, designed the deterministic-plus-probabilistic resolution graph, and shipped six activation use-cases inside the first quarter. Paid-media efficiency rose 28 percent on flat budget once suppression of existing customers was finally enforced cleanly across destinations.",
          link: "/cases/retail-cdp-unification",
        },
        {
          industry: "Subscription Services",
          title:
            "Identity resolution recovers 22 percent of cross-channel customer journeys previously lost",
          description:
            "A subscription operator's CDP project had stalled inside identity. Anonymous web traffic, app sessions, and customer-service interactions were resolving to three separate IDs for the same customer. We rebuilt the identity architecture on a deterministic-first model with probabilistic supplements, validated against a 200K-customer cohort. Cross-channel journey reconstruction recovered 22 percent of sessions that had been invisible to the existing analytics stack.",
          link: "/cases/subscription-cdp-identity",
        },
      ]}
      siblingsHeading="Sibling offerings inside this cluster."
      siblings={[
        {
          title: "Customer Insights",
          link: "/solutions/customer-intelligence/customer-insights",
        },
        {
          title: "Behavioral Segmentation",
          link: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Predictive Analytics & Modeling",
          link: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Personalization",
          link: "/solutions/customer-intelligence/personalization",
        },
        {
          title: "Journey Analytics & Optimization",
          link: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
      ]}
      cta={{
        heading:
          "Bring our CDP team into your next customer-data conversation.",
        body: "We work with leaders who want their customer-data investment delivering measurable activation, not unification slides. CDP is how that conversation begins.",
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
