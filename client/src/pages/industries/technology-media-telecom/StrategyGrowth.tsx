import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "media-streaming-launch",
    title: "Launching a streaming service that won 750K subscribers",
    industry: "Technology, Media & Telecom",
    metric: "750K",
    image: "/images/industries/tech-datacenter.jpg",
  },
  {
    slug: "tech-engineering-transformation",
    title: "Tripling a software company's release speed",
    industry: "Technology, Media & Telecom",
    metric: "3x",
    image: "/images/capabilities/cap-conference-data.jpg",
  },
  {
    slug: "telecom-customer-experience",
    title: "Cutting a regional carrier's churn by 40%",
    industry: "Technology, Media & Telecom",
    metric: "40%",
    image: "/images/cases/telecom-customer-experience-hero.jpg",
  },
];

const related = [
  { name: "Data Transformation", href: "/industries/technology-media-telecom/data-transformation" },
  { name: "Customer Intelligence", href: "/industries/technology-media-telecom/customer-intelligence" },
  { name: "Operations Excellence", href: "/industries/technology-media-telecom/operations-excellence" },
];

export default function TechnologyMediaTelecomStrategyGrowth() {
  return (
    <IndustryCapabilityTemplate
      industry="Technology, Media & Telecom"
      industrySlug="technology-media-telecom"
      capability="Strategy & Growth"
      capabilitySlug="strategy-growth"
      heroSubtitle="Connectivity is a commodity, ARPU is under permanent pressure, and the platforms have already taken the content relationship. We help carriers, streamers, and platform businesses stop defending the old P&L and build the next one — new bundles, new business models, and the portfolio moves that turn network and content assets into fresh revenue."
      heroImage="/images/industries/tech-glasses.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The next dollar in TMT is not another gigabyte — it is a new business model.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "Every TMT category is watching its core proposition get commoditized. Data is metered by the gigabyte and priced to zero, linear audiences are migrating to platforms that own the ad relationship, and infrastructure players are being asked to justify fiber and 5G capex against monetization that has not yet arrived. Defending ARPU with promotions and retention discounts is a losing game — it protects the number this quarter and erodes the position that produces it.",
          "We help you shift from defense to design. That means finding the adjacent revenue your network, content, and customer base actually make possible — convergence bundles, wholesale and platform plays, advertising and data products, embedded connectivity — and building the strategy, business model, and portfolio moves to capture it. We work the M&A and divestiture questions alongside the organic ones, because in TMT the right acquisition or carve-out is often the fastest path to a new growth curve.",
        ],
      }}
      offeringsHeading="How we build strategy and growth for TMT."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Growth Strategy",
          description:
            "Find the next revenue pool your network, content, and subscriber base can actually win — beyond the connectivity or subscription your peers are already discounting.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy",
        },
        {
          title: "Business Model Innovation",
          description:
            "Design convergence bundles, wholesale and platform plays, and advertising or data products that turn commodity access into differentiated, recurring revenue.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/business-model-innovation",
        },
        {
          title: "Strategic Planning",
          description:
            "Sequence spectrum, fiber, and content investment against the monetization it unlocks, so capex decisions map to a defensible commercial roadmap.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/strategic-planning",
        },
        {
          title: "Organizational Transformation",
          description:
            "Restructure the operating model around products and platforms, not legacy network and channel silos, so new bundles ship at the pace the market moves.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/organizational-transformation",
        },
        {
          title: "Digital Strategy",
          description:
            "Build the direct digital proposition — app, self-serve, and D2C — that deepens the subscriber relationship instead of renting it back from the platforms.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/digital-strategy",
        },
        {
          title: "Turnaround & Restructuring",
          description:
            "Rebase cost and portfolio when legacy voice, linear, or wholesale lines decline faster than the new revenue can replace them.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/turnaround-restructuring",
        },
      ]}
      stats={[
        { number: "3–5 pts", label: "ARPU recovery from convergence and value-based bundling" },
        { number: "2–4x", label: "faster time-to-market on new product and pricing constructs" },
        { number: "15–25%", label: "of new revenue from adjacencies within three years" },
      ]}
      casesHeading="Growth strategy, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Technology, Media & Telecom leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Strategy & Corporate Finance practice",
        href: "/capabilities/strategy-corporate-finance",
      }}
      cta={{
        heading: "Stop defending ARPU. Start building the next revenue line.",
        body: "Tell us where growth has stalled — a saturating base, a bundle that will not convert, a portfolio question. Our TMT team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
