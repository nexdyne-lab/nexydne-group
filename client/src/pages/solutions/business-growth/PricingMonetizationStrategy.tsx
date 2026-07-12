import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function PricingMonetizationStrategy() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · BUSINESS GROWTH · PRICING & MONETIZATION STRATEGY"
      title="Pricing & Monetization Strategy"
      subtitle="Most pricing decisions are made on competitive screenshots and deal anecdotes. We anchor pricing in willingness-to-pay evidence, design the model and packaging against customer economics, and engineer the rollout so the change actually reaches the P&L."
      heroImage="/images/business-strategy-abstract.jpg"
      heroFocal="60% 50%"
      seoTitle="Pricing & Monetization Strategy"
      seoDescription="Pricing architecture, packaging, and monetization models — anchored in willingness-to-pay evidence, engineered for rollout, and instrumented for the ongoing pricing discipline that compounds."
      canonical="/solutions/business-growth/pricing-monetization-strategy"
      perspective={{
        heading:
          "Pricing is not a screenshot of competitors. It is a position on customer economics.",
        image: "/images/insight-cfo-strategic-growth.jpg",
        paragraphs: [
          "Most pricing decisions we are brought in to fix were made the same way: someone looked at a competitor's published price page, the team rounded down a couple of percent, and the discount authority quietly drifted into the deal desk over the next six quarters. By the time leadership notices, realized ASP is 30 percent below list and the team treats the discount as part of the product.",
          "The leaders we work with treat pricing as a discipline, not a project. They anchor every change in willingness-to-pay evidence, design the package against the buyer's job-to-be-done, engineer the rollout so the change reaches the P&L, and instrument the pricing surface so drift gets caught in the monthly review, not the next strategic offsite.",
        ],
      }}
      deliverHeading="A five-phase approach from willingness-to-pay evidence to operating pricing discipline."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run sixteen to twenty-four weeks from research to a rolled-out pricing surface running under the in-house team."
      phases={[
        {
          name: "Customer and competitive insight",
          description:
            "We anchor the program in evidence: willingness-to-pay research with the actual buyers, transactional analysis on the existing customer base, win-loss interviews on the pipeline, and a structured read on competitive pricing and packaging. The output is a written customer-economic memo, not a pricing benchmark deck.",
        },
        {
          name: "Pricing model design",
          description:
            "From the insight we design the pricing model — flat, tiered, usage-based, value-based, hybrid — that aligns price to the customer's economic outcome. Trade-offs around predictability, expansion behavior, and procurement friction are decided in writing so the rollout does not relitigate the choice in week ten.",
        },
        {
          name: "Packaging architecture",
          description:
            "We design the package architecture: which features sit in which tier, what the upsell triggers are, how add-ons are priced, where the discount authority sits. Packaging is engineered against the buyer's job-to-be-done and the seller's negotiation reality — not picked from a comparison spreadsheet.",
        },
        {
          name: "Rollout strategy",
          description:
            "Pricing changes that look correct in a deck destroy revenue when rolled out badly. We design the rollout: customer migration logic, grandfathering policy, sales enablement, finance reforecasting, customer-success scripts, and the comms plan that gets the change through procurement without re-papering every account.",
        },
        {
          name: "Ongoing measurement",
          description:
            "We stand up the pricing performance surface: realized ASP, discount distribution, attach rates, expansion velocity, win rate by tier — refreshed monthly and reviewed quarterly. The pricing function becomes a discipline that compounds, not a project the company runs every three years.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Customer willingness-to-pay analysis",
          description:
            "Quantified WTP study covering the buyers who matter — with the underlying transactional, qualitative, and competitive evidence supporting the curve.",
        },
        {
          name: "Pricing model recommendation",
          description:
            "Written pricing-model recommendation — flat, tiered, usage, value, hybrid — with the trade-offs around predictability, expansion, and procurement friction decided up-front.",
        },
        {
          name: "Packaging architecture",
          description:
            "Documented package architecture covering tier design, feature placement, upsell triggers, add-on pricing, and discount authority.",
        },
        {
          name: "Rollout playbook",
          description:
            "End-to-end rollout playbook covering customer migration, grandfathering, sales enablement, finance reforecasting, customer-success scripts, and the comms plan.",
        },
        {
          name: "Pricing performance dashboard",
          description:
            "Production dashboard tracking realized ASP, discount distribution, attach rates, expansion velocity, and win rate by tier — refreshed monthly with the executive review cadence pre-loaded.",
        },
        {
          name: "Governance model",
          description:
            "Pricing governance charter covering decision rights, change cadence, exception handling, and the cross-functional committee that owns the pricing surface into year two.",
        },
      ]}
      outcome={{
        heading:
          "A pricing rebuild anchored in willingness-to-pay evidence and engineered through rollout typically lifts realized ASP by 8 to 20 percent — without measurable impact on win rate or renewal.",
        body: "The economics work because the change reaches the P&L. We do not hand off a pricing recommendation and walk away — we engineer the rollout, the sales enablement, and the customer-success migration so the new model actually shows up on the financial review.",
      }}
      casesHeading="When pricing is engineered, the lift reaches the P&L."
      cases={[
        {
          industry: "Enterprise Software",
          title:
            "Tier rebuild lifts realized ASP by 19 percent without losing a single renewal",
          description:
            "An enterprise software operator was leaving margin in the discount field on every deal. We rebuilt the tier architecture, repackaged the value-anchored features, and engineered the rollout so the customer-success team could migrate the existing base without renewal risk. Realized ASP rose 19 percent inside three quarters; renewal rate held flat.",
          link: "/cases/enterprise-software-pricing-rebuild",
        },
        {
          industry: "B2B Marketplace",
          title:
            "Move from flat to usage-based pricing expands net revenue retention to 134 percent",
          description:
            "A category-leading B2B marketplace was capturing only a fraction of the value its largest customers extracted. We re-engineered the pricing model from flat-rate to usage-based, redesigned the package architecture, and rolled out across two cohorts. Net revenue retention moved from 108 percent to 134 percent within a year, with no impact on logo retention.",
          link: "/cases/marketplace-usage-pricing",
        },
      ]}
      siblingsHeading="Sibling offerings inside this cluster."
      siblings={[
        {
          title: "Revenue Operations & Analytics",
          link: "/solutions/business-growth/revenue-operations-analytics",
        },
        {
          title: "Go-to-Market Acceleration",
          link: "/solutions/business-growth/go-to-market-acceleration",
        },
        {
          title: "Growth Marketing & Acquisition",
          link: "/solutions/business-growth/growth-marketing-acquisition",
        },
        {
          title: "Digital Product Development",
          link: "/solutions/business-growth/digital-product-development",
        },
        {
          title: "Conversion Optimization",
          link: "/solutions/business-growth/conversion-optimization",
        },
      ]}
      cta={{
        heading:
          "Bring our pricing team into your next monetization conversation.",
        body: "We work with leaders who treat pricing as a discipline rather than a project. The conversation starts with willingness-to-pay evidence, not a competitor screenshot.",
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
