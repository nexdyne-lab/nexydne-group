import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function PersonalizationStrategy() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · CUSTOMER INTELLIGENCE · PERSONALIZATION STRATEGY"
      title="Personalization Strategy"
      subtitle="Most personalization programs personalize what the platform makes easy and miss the moments that actually move revenue. We design the strategy above the tactics — where to personalize, how, the tech stack, the content, and the ROI model that defends the investment."
      heroImage="/images/ai-team-consulting.jpg"
      heroFocal="70% 40%"
      seoTitle="Personalization Strategy"
      seoDescription="Design the strategy layer above personalization tactics — where to personalize, how, the tech stack, the content and data strategy, and the ROI model that defends the investment."
      canonical="/solutions/customer-intelligence/personalization-strategy"
      perspective={{
        heading:
          "Personalization is a strategy decision before it is a platform decision.",
        image: "/images/data-driven-culture.png",
        paragraphs: [
          "Most personalization programs we audit have the same shape: the platform was selected first, the content team scrambled to feed it, the decisioning logic accreted in three different places, and the results are quietly disappointing. The leaders we work with start one level higher — with where personalization earns its keep, what content the program actually needs, what the data layer must do, and how decisions get made when brand, legal, and marketing each have a vote.",
          "The strategy answers four questions the platform vendor cannot: which moments matter, what content modularization the team can sustain, what the decisioning logic should optimize for, and how the program proves its return on a CFO timeline. The tactical layer — the rules, the variants, the channels — drops out of the strategy. Without it, the platform is decoration.",
        ],
      }}
      deliverHeading="A five-phase approach from opportunity audit to ROI measurement."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run ten to sixteen weeks from assessment to a production-ready strategy and governance model."
      phases={[
        {
          name: "Personalization opportunity assessment",
          description:
            "Most personalization programs personalize whatever the platform makes easy — usually email subject lines and a homepage hero — and ignore the moments where personalization actually moves revenue. We start with a moment-by-moment opportunity audit across the journey, scoring each candidate moment on value at stake, decision cadence, and content feasibility. The output is a prioritized map of where personalization earns its keep.",
        },
        {
          name: "Technology stack design",
          description:
            "Every personalization stack we inherit is overbought in one tier and underbuilt in another — a CDP without a decisioning engine, a real-time engine without a content service, four overlapping tools no one can sequence. We design the target stack the program actually needs: data layer, decisioning, content service, delivery channels, measurement — sized to your existing estate and the moments you have prioritized.",
        },
        {
          name: "Content and data strategy",
          description:
            "Personalization at scale is a content-supply problem before it is a delivery problem. We design the content strategy — modularization, variant logic, asset taxonomy, governance — and the data strategy that feeds it: identity resolution, signal hierarchy, audience definition, real-time event coverage. Without this layer the rest of the stack is decorating an empty room.",
        },
        {
          name: "Deployment governance",
          description:
            "Personalization decisions touch brand, legal, marketing, product, and engineering at the same time. We stand up the decision-rights framework — what gets personalized, by whom, with what content, at what risk threshold — and the operating cadence that turns the framework into actual decisions made on a known timeline. Governance is what lets the program move fast without breaking the brand.",
        },
        {
          name: "Performance measurement",
          description:
            "Personalization programs typically over-claim and under-attribute. We design the measurement model — incrementality testing, holdout management, contribution margin tracking, and the ROI framework that survives a CFO conversation. The measurement layer is wired into the executive dashboard so the personalization investment defends itself in the planning cycle.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Personalization maturity assessment",
          description:
            "Honest read of the program against a five-stage maturity model — capability, content, data, governance, measurement — with the explicit gaps that block the next stage of value.",
        },
        {
          name: "Opportunity prioritization roadmap",
          description:
            "Moment-by-moment map of where personalization earns its keep, scored on value at stake, decision cadence, and content feasibility — sequenced into a defensible roadmap.",
        },
        {
          name: "Tech stack recommendation",
          description:
            "Vendor-neutral target architecture across data layer, decisioning, content service, delivery, and measurement — sized to your existing estate, not bolted on top of it.",
        },
        {
          name: "Content and data strategy",
          description:
            "Operating model for content modularization, variant logic, asset taxonomy, and the data strategy — identity, signals, audiences, real-time events — that feeds the decisioning layer.",
        },
        {
          name: "Governance and decision-rights framework",
          description:
            "End-to-end framework covering what gets personalized, by whom, with what content, at what risk threshold — and the operating cadence that turns the framework into decisions.",
        },
        {
          name: "ROI measurement model",
          description:
            "Incrementality-led measurement model, holdout discipline, and contribution-margin tracking — wired into an executive dashboard the CFO will read.",
        },
      ]}
      outcome={{
        heading:
          "Programs that move from platform-led personalization to strategy-led personalization typically retire 30 to 50 percent of their tooling and lift incremental revenue per personalized impression by a multiple.",
        body: "The economics work because the strategy decides what the platform should do — not the other way around. We do not implement another tool; we redesign the program around the moments, the content, and the governance the leaders we work with actually need.",
      }}
      casesHeading="When the strategy comes first, the stack stops bloating."
      cases={[
        {
          industry: "Consumer Finance",
          title:
            "Personalization strategy reroutes investment from email subject lines to in-app moments, lifting product attach 22 percent",
          description:
            "A consumer-finance app was personalizing email subject lines and a homepage hero — neither of which was where customers actually decided. We rebuilt the strategy around three high-stakes in-app moments and reallocated the existing budget against them. Product attach on the priority cohort lifted 22 percent within two quarters, on a smaller marketing tech footprint.",
          link: "/cases/finance-personalization-strategy-reroute",
        },
        {
          industry: "Direct-to-Consumer Retail",
          title:
            "Tech stack redesign retires three tools and lifts personalization throughput from one to nine releases per month",
          description:
            "A DTC retailer's personalization program was bottlenecked on a stack with four overlapping tools and no clear decisioning layer. We designed the target stack, retired three of the four, and stood up the content modularization and governance cadence that the program actually needed. Throughput moved from one personalization release per month to nine, with no incremental headcount.",
          link: "/cases/dtc-personalization-stack-redesign",
        },
      ]}
      siblingsHeading="Sibling offerings inside this cluster."
      siblings={[
        {
          title: "Personalization",
          link: "/solutions/customer-intelligence/personalization",
        },
        {
          title: "AI-Powered Recommendations",
          link: "/solutions/customer-intelligence/ai-powered-recommendations",
        },
        {
          title: "Customer Data Platform",
          link: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Behavioral Segmentation",
          link: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Journey Analytics & Optimization",
          link: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
      ]}
      cta={{
        heading:
          "Bring our personalization strategists into your next operating-model conversation.",
        body: "We work with leaders who want their personalization investment defended on incrementality, not impressions. Strategy is how that conversation begins.",
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
