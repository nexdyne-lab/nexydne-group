import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "automotive-ev-transition",
    title: "Retooling a supplier line for electric-vehicle parts",
    industry: "Automotive",
    metric: "45%",
    image: "/images/industries/auto-robotics-team.jpg",
  },
  {
    slug: "automotive-connected-vehicle",
    title: "Turning connected-vehicle data into fewer warranty claims",
    industry: "Automotive",
    metric: "30%",
    image: "/images/industries/tech-datacenter.jpg",
  },
  {
    slug: "automotive-supply-resilience",
    title: "De-risking parts supply and recall traceability for a supplier",
    industry: "Automotive",
    metric: "80%",
    image: "/images/industries/mfg-robot-arm.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/automotive/operations-excellence" },
  { name: "Data Transformation", href: "/industries/automotive/data-transformation" },
  { name: "Risk & Resilience", href: "/industries/automotive/risk-resilience" },
];

export default function AutomotiveStrategyGrowth() {
  return (
    <IndustryCapabilityTemplate
      industry="Automotive"
      industrySlug="automotive"
      capability="Strategy & Growth"
      capabilitySlug="strategy-growth"
      heroSubtitle="The industry's profit pool is migrating from the metal to the software, the service, and the subscription — and the OEMs still organized around unit sales are the ones most exposed. We help automotive leaders place the EV, software-defined-vehicle, and mobility bets that define the next cycle, and reshape the portfolio and footprint to fund them."
      heroImage="/images/industries/mfg-robot-arm.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The next margin doesn't come off the line — it comes after the sale.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "For a century the automotive business model was simple: design it, build it, sell it once. The software-defined vehicle breaks that. Over-the-air features, usage-based insurance, charging, and subscription functionality create recurring revenue that keeps earning long after the vehicle leaves the lot — and they reward a completely different set of capabilities than stamping and assembly ever did.",
          "We help you decide where to play in that shift: which connected-services and mobility plays are real versus hype, how to price a feature you can now turn on and off remotely, and what the EV and software transition means for your plant footprint, platform strategy, and capital plan. Then we build the business-model and operating-model changes to actually capture it — not just a deck about it.",
        ],
      }}
      offeringsHeading="How we build strategy and growth for automotive."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Growth Strategy",
          description:
            "Choose where to win across EV, connected services, and mobility — and where to concede — with a clear read on the profit pools.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy",
        },
        {
          title: "Business Model Innovation",
          description:
            "Design the subscription, usage-based, and feature-on-demand models the software-defined vehicle now makes possible.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/business-model-innovation",
        },
        {
          title: "Strategic Planning",
          description:
            "Reshape platform, footprint, and capital plans around the EV transition and its uncertain demand curve.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/strategic-planning",
        },
        {
          title: "Organizational Transformation",
          description:
            "Rebuild the operating model so software, services, and hardware each get the roadmap and P&L they need to move.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/organizational-transformation",
        },
        {
          title: "Digital Strategy",
          description:
            "Define the connected-services and mobility proposition that keeps you in the customer relationship past the sale.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/digital-strategy",
        },
        {
          title: "Turnaround & Restructuring",
          description:
            "Restore program economics on a stressed EV or legacy-ICE portfolio while funding the shift to what earns next.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/turnaround-restructuring",
        },
      ]}
      stats={[
        { number: "2–3x", label: "lifetime margin on recurring services versus the one-time vehicle sale" },
        { number: "30%+", label: "of future OEM profit pool projected to sit in software and services" },
        { number: "18 mo", label: "average length of a platform and portfolio engagement" },
      ]}
      casesHeading="Strategy and growth, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Automotive leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Strategy & Corporate Finance practice",
        href: "/capabilities/strategy-corporate-finance",
      }}
      cta={{
        heading: "Place the bets the next cycle rewards.",
        body: "Tell us where the strategy is unresolved — an EV program's economics, a services play you can't size, a footprint decision that keeps slipping. Our Automotive strategy team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
