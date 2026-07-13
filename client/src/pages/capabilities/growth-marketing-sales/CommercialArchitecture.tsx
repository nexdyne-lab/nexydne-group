// TODO: David — confirm Commercial Architecture experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Commercial Architecture hub.
// TODO: brand fix — original DZ10 hub carried legacy brand string in SEO title; now uses default brand from template.
// TODO: confirm ambition copy with practice lead before publish
// TODO: confirm authored howWeCanHelp cards (3) with practice lead before publish

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function CommercialArchitecture() {
  return (
    <CapabilityHubTemplate
      hubName="Commercial Architecture"
      slug="commercial-architecture"
      insightsTopic="growth"
      heroSubtitle='Designing the blueprints for scalable revenue generation. We align your sales, marketing, and product teams around a unified "commercial stack" that maximizes throughput and minimizes friction.'
      heroImage="/images/capabilities/cap-celebrate.jpg"
      heroFocal="50% 45%"
      experienceStats={[
        { number: "End-to-end", label: "Commercial Architecture engagements from diagnostic through execution" },
        { number: "Mid-market", label: "Sized for ambitious mid-market companies — not Fortune 500 only" },
        { number: "90 days", label: "From kickoff to first measurable outcome on most engagements" },
        { number: "Senior-led", label: "Every engagement led by a partner with 15+ years of practitioner experience" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Sharpen the commercial architecture thesis",
          description:
            "Make clear, evidence-based choices about where commercial architecture can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn commercial architecture ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every commercial architecture touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument commercial architecture so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the commercial architecture tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect commercial architecture investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Data Layer: The Single Source of Truth",
          description:
            'Just as a software application relies on a consistent database, your commercial organization needs a unified data model. We help you define shared definitions for key metrics (MQLs, SQLs, ARR) and implement the infrastructure to track them across the customer lifecycle. This eliminates "data drift" between departments and ensures every decision is based on the same reality.',
          href: "/capabilities/growth-marketing-sales/commercial-architecture/data-layer-the-single-source-of-truth",
        },
        {
          title: "Process Layer: Frictionless Workflows",
          description:
            'We analyze the "handoffs" between teams—marketing to sales, sales to success—as API calls. Where is information lost? Where is latency introduced? We redesign these workflows to minimize friction, automating routine tasks and ensuring that high-value human capital is focused on high-leverage activities.',
          href: "/capabilities/growth-marketing-sales/commercial-architecture/process-layer-frictionless-workflows",
        },
        {
          title: "Incentive Layer: Aligned Motivations",
          description:
            `In a distributed system, individual nodes must optimize for the system's health. We help you design compensation and incentive structures that align individual behaviors with organizational goals. Whether it's shifting sales comp to focus on retention or aligning marketing KPIs with revenue quality, we ensure your "human stack" is programmed for growth.`,
          href: "/capabilities/growth-marketing-sales/commercial-architecture/incentive-layer-aligned-motivations",
        },
        {
          title: "Commercial Architecture Diagnostic",
          description:
            "A focused two-week diagnostic that surfaces the highest-leverage opportunities in your commercial architecture system and builds the case for action.",
          href: "/capabilities/growth-marketing-sales/commercial-architecture/commercial-architecture-diagnostic",
        },
        {
          title: "Commercial Architecture Operating Model Design",
          description:
            "Translate commercial architecture ambition into the team structure, governance cadence, and KPIs that make execution repeatable rather than heroic.",
          href: "/capabilities/growth-marketing-sales/commercial-architecture/commercial-architecture-operating-model-design",
        },
        {
          title: "Commercial Architecture Performance Acceleration",
          description:
            "A 90-day sprint that retunes your existing commercial architecture engine on the metrics that matter most — without a rip-and-replace.",
          href: "/capabilities/growth-marketing-sales/commercial-architecture/commercial-architecture-performance-acceleration",
        },
      ]}
      ambitionsCTAText="Talk to us about your Commercial Architecture ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose what's actually blocking growth",
          body: "Build a clear picture of where the friction lives in your commercial architecture system — across data, process, talent, and incentives — before prescribing solutions.",
        },
        {
          step: "02",
          title: "Design the next-stage operating model",
          body: "Translate strategic intent into the playbooks, governance, and capabilities that turn ambition into a repeatable commercial architecture motion.",
        },
        {
          step: "03",
          title: "Embed and prove the system",
          body: "Deploy with your team, instrument the metrics that matter, and prove the impact in the first two reporting cycles — not the first two years.",
        },
      ]}
      featuredCases={[
        { slug: "financial-fraud-detection", title: "Catching card fraud before the money moves", industry: "Financial Services", metric: "73%", image: "/images/industries/fin-monitors.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
        { slug: "healthcare-revenue-cycle", title: "Recovering revenue the system had already earned", industry: "Healthcare", metric: "$32M", image: "/case-healthcare-team.5797392b.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Commercial Architecture lead"
    />
  );
}
