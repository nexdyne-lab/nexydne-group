import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/biz-meeting.jpg",
  },
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/meeting-topview.jpg",
  },
  {
    slug: "wealth-management-automation",
    title: "Automating wealth management operations for better client experiences",
    industry: "Financial Services",
    metric: "45%",
    image: "/images/industries/fin-handshake-city.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/private-equity/operations-excellence" },
  { name: "Data Transformation", href: "/industries/private-equity/data-transformation" },
  { name: "Risk & Resilience", href: "/industries/private-equity/risk-resilience" },
];

export default function PrivateEquityStrategyGrowth() {
  return (
    <IndustryCapabilityTemplate
      industry="Private Equity"
      industrySlug="private-equity"
      capability="Strategy & Growth"
      capabilitySlug="strategy-growth"
      heroSubtitle="The value-creation plan you underwrite at close decides the return you book at exit — yet most are a slide, not a system. We help funds and their portfolio companies turn the thesis into a sequenced growth agenda: 100-day plans, buy-and-build architecture, and a commercial engine that compounds through the hold."
      heroImage="/images/industries/deal-handshake.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Multiple expansion is earned in the hold, not assumed at close.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "Entry multiples are high and leverage does less of the work than it used to. The funds returning capital in this cycle are the ones that treat the value-creation plan as an operating discipline — pricing power, share gains, and add-on integration executed on a clock, not a thesis that sits in the data room and never touches the P&L.",
          "We work the plan from both sides of the deal. Pre-close we pressure-test the growth thesis and size where the value actually is; post-close we stand up the 100-day plan, sequence the buy-and-build, and build the strategic and digital agenda that lifts EBITDA and makes the equity story provable to the next buyer.",
        ],
      }}
      offeringsHeading="How we build strategy and growth for private equity."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Growth Strategy",
          description:
            "Turn the investment thesis into a where-to-play, how-to-win growth plan the management team can execute against a hold-period clock.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy",
        },
        {
          title: "Business Model Innovation",
          description:
            "Find the pricing, recurring-revenue, and platform plays that lift the multiple, not just the top line, before you go to market.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/business-model-innovation",
        },
        {
          title: "Strategic Planning",
          description:
            "Build the 100-day plan and value-creation roadmap that convert the deal model into owned initiatives with owners, milestones, and value.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/strategic-planning",
        },
        {
          title: "Organizational Transformation",
          description:
            "Get the operating model, leadership, and incentives aligned to the thesis so the portco can absorb add-ons without losing pace.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/organizational-transformation",
        },
        {
          title: "Digital Strategy",
          description:
            "Define the digital and product roadmap that becomes a diligenceable proof point of growth, not a cost line, at exit.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/digital-strategy",
        },
        {
          title: "Turnaround & Restructuring",
          description:
            "Stabilize an underperforming portco and re-base the value-creation plan when the hold isn't tracking to the deal model.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/turnaround-restructuring",
        },
      ]}
      stats={[
        { number: "First 100 days", label: "to a sequenced, owner-assigned value-creation plan" },
        { number: "2–4x", label: "add-on integrations run in parallel on buy-and-build platforms" },
        { number: "1–2 turns", label: "of multiple typically at stake in a provable growth story at exit" },
      ]}
      casesHeading="Value-creation strategy, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Private Equity leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Strategy & Corporate Finance practice",
        href: "/capabilities/strategy-corporate-finance",
      }}
      cta={{
        heading: "Turn the thesis into a value-creation plan that lands.",
        body: "Tell us about the asset — a platform you're underwriting, a portco whose hold has stalled, an exit you're preparing. Our Private Equity team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
