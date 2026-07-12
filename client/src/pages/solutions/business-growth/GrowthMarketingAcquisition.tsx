import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function GrowthMarketingAcquisition() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · BUSINESS GROWTH · GROWTH MARKETING & ACQUISITION"
      title="Growth Marketing & Acquisition"
      subtitle="Most acquisition programs are spending against last-click dashboards and tenure rather than economics. We rebuild the channel model, the creative engine, the attribution spine, and the optimization rhythm that lets the marketing function reallocate capital on evidence."
      heroImage="/images/abstract-growth.jpg"
      heroFocal="55% 50%"
      seoTitle="Growth Marketing & Acquisition"
      seoDescription="Performance marketing programs that scale customer acquisition profitably — channel inventory, economics modeling, creative system, attribution architecture, and the optimization rhythm that compounds."
      canonical="/solutions/business-growth/growth-marketing-acquisition"
      perspective={{
        heading:
          "Stop reading agency dashboards. Start reallocating capital on channel economics.",
        image: "/images/insight-marketing-operations.jpg",
        paragraphs: [
          "Most growth marketing programs we are brought in to fix have the same shape: the team is reading agency dashboards every Monday, the channels never seem to underperform, and yet the CAC keeps drifting up while the CFO keeps asking the same question. The problem is not the team. The problem is that nobody has rebuilt the channel economics in two years, and the reallocation conversation never reaches the table.",
          "We come in with a single thesis: every channel has a marginal cost curve, every campaign has a saturation point, and every acquisition program needs a measurement spine that survives a CFO question. We rebuild the model, the creative engine, the attribution architecture, and the optimization rhythm — and then we hand it to the operating team that runs it from there.",
        ],
      }}
      deliverHeading="A five-phase approach from channel audit to compounding optimization rhythm."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run twelve to twenty weeks from inventory to a measurement-grade program operating under the in-house team."
      phases={[
        {
          name: "Acquisition channel inventory",
          description:
            "We map every channel currently spending against acquisition — paid search, paid social, programmatic display, affiliate, influencer, partnerships, organic, email — and audit the actual reach, conversion, and cost the team is producing today. The output is a written channel inventory with the underlying data sources, not a spreadsheet exported from the agency.",
        },
        {
          name: "Channel economics modeling",
          description:
            "Each channel gets a unit-economics model: incremental conversion rate, payback period, marginal cost curve, saturation point. Channels are ranked on contribution margin per dollar at the current spend tier and at the next two scaling tiers. The model surfaces which channels can absorb more capital and which ones are already past their efficient frontier.",
        },
        {
          name: "Creative and content build",
          description:
            "Most acquisition programs are bottlenecked on creative, not capital. We design the creative-and-content production system — concept generation, briefing template, asset library, channel-specific variants, testing cadence — that keeps the funnel fed at the volume the channel economics demand.",
        },
        {
          name: "Attribution and measurement architecture",
          description:
            "We design the measurement spine — first-party event capture, server-side tagging, attribution model, lift testing, MMM pulses — that lets the team trust the channel reads. Without this, the optimization loop is running on agency dashboards and last-click attribution, neither of which survives a CFO question.",
        },
        {
          name: "Ongoing optimization",
          description:
            "We stand up the optimization rhythm: weekly channel reviews, monthly creative refreshes, quarterly portfolio reallocation, semi-annual incrementality tests. The output is a marketing function that reallocates capital on evidence rather than tenure or vendor relationships.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Acquisition channel map",
          description:
            "Documented inventory of every channel currently spending against acquisition — with the reach, conversion, and cost the data actually shows, not the version the agency reports.",
        },
        {
          name: "Channel economics model",
          description:
            "Bottom-up unit-economics model per channel covering incremental conversion, payback, marginal cost, and saturation — at current spend and the next two scaling tiers.",
        },
        {
          name: "Creative and content library",
          description:
            "Production-grade creative system — concept generation, briefing template, asset library, channel-specific variants, and the testing cadence that keeps the funnel fed.",
        },
        {
          name: "Attribution architecture",
          description:
            "First-party event capture, server-side tagging, attribution model, lift-testing framework, and MMM pulse cadence — designed against the team's actual stack and skills.",
        },
        {
          name: "Performance dashboard",
          description:
            "Production dashboard the marketing leadership team uses weekly to steer channel spend — with the alerts, segments, and reviews already wired in.",
        },
        {
          name: "Optimization playbook",
          description:
            "Written playbook covering weekly, monthly, quarterly, and semi-annual optimization rituals — with the reallocation decision rights named and the test calendar pre-loaded.",
        },
      ]}
      outcome={{
        heading:
          "Programs that rebuild the channel economics and attribution spine typically lift contribution margin per acquired customer by 20 to 40 percent inside two quarters — usually on flat or lower total spend.",
        body: "The economics work because the dollars are getting reallocated against an evidence-based channel model rather than tenure, agency politics, or last-click attribution. We do not run more campaigns — we run better campaigns at the spend tier the unit economics actually justify.",
      }}
      casesHeading="When the channel model is honest, the reallocation pays."
      cases={[
        {
          industry: "Direct-to-Consumer",
          title:
            "Channel reallocation lifts new-customer contribution margin by 38 percent on flat budget",
          description:
            "A DTC operator was spending 70 percent of its acquisition budget on two channels that had passed their efficient frontier eighteen months earlier. We rebuilt the channel economics model, identified two underfunded channels with intact unit economics, and ran the reallocation across two quarters. New-customer contribution margin rose 38 percent on flat total spend, with payback inside the first thirty days.",
          link: "/cases/dtc-channel-reallocation",
        },
        {
          industry: "B2B SaaS",
          title:
            "Attribution rebuild cuts wasted spend by 24 percent inside one quarter",
          description:
            "A growth-stage SaaS team was operating on last-click attribution that systematically underweighted the top of the funnel. We rebuilt the attribution architecture on first-party event capture and incrementality testing, and used the cleaner read to retire the campaigns the model exposed as cannibalistic. Wasted spend fell 24 percent in a single quarter; pipeline was unchanged.",
          link: "/cases/saas-attribution-rebuild",
        },
      ]}
      siblingsHeading="Sibling offerings inside this cluster."
      siblings={[
        {
          title: "Conversion Optimization",
          link: "/solutions/business-growth/conversion-optimization",
        },
        {
          title: "Go-to-Market Acceleration",
          link: "/solutions/business-growth/go-to-market-acceleration",
        },
        {
          title: "Revenue Operations & Analytics",
          link: "/solutions/business-growth/revenue-operations-analytics",
        },
        {
          title: "Pricing & Monetization Strategy",
          link: "/solutions/business-growth/pricing-monetization-strategy",
        },
        {
          title: "Ecommerce Strategy & Launch",
          link: "/solutions/business-growth/ecommerce-strategy-launch",
        },
      ]}
      cta={{
        heading:
          "Bring our growth marketing team into your next acquisition-spend conversation.",
        body: "We work with leaders who want their acquisition program reallocating capital on channel economics rather than agency tenure. The conversation starts with the model, not the campaign.",
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
