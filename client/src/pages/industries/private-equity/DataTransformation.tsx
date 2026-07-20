import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "pe-industrial-transformation",
    title: "Adding $18M in EBITDA at an industrial manufacturer",
    industry: "Private Equity",
    metric: "$18M",
    image: "/images/cases/pe-industrial-transformation-hero.jpg",
  },
  {
    slug: "pe-healthcare-diligence",
    title: "Cutting healthcare diligence time by 40%",
    industry: "Private Equity",
    metric: "40%",
    image: "/images/cases/pe-healthcare-diligence-hero.jpg",
  },
  {
    slug: "pe-distribution-digital",
    title: "Standing up a carved-out distributor in six months",
    industry: "Private Equity",
    metric: "6 Months",
    image: "/images/cases/pe-distribution-digital-hero.jpg",
  },
];

const related = [
  { name: "Strategy & Growth", href: "/industries/private-equity/strategy-growth" },
  { name: "Operations Excellence", href: "/industries/private-equity/operations-excellence" },
  { name: "Risk & Resilience", href: "/industries/private-equity/risk-resilience" },
];

export default function PrivateEquityDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Private Equity"
      industrySlug="private-equity"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="Funds run on data they can't fully trust — portfolio numbers arrive late, in different shapes, from portcos on different systems. We build the diligence analytics that sharpen the underwrite and the data foundation inside each portco that turns value creation into something you can measure, benchmark, and prove at exit."
      heroImage="/images/industries/biz-meeting.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "You can't create value you can't measure — or prove at exit.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "Diligence lives on data rooms and management decks, and the hold lives on monthly numbers that arrive late and rarely reconcile across a portfolio built by acquisition. Without a trustworthy data layer, the value-creation plan is run on instinct and the exit story is narrated rather than evidenced.",
          "We work the data agenda at two altitudes. Across the portfolio, we build the diligence analytics and cross-portfolio benchmarking that let the fund see which levers are working and where the next dollar of value sits. Inside each portco, we stand up the data strategy, platform, and engineering that instrument the value-creation plan and make the lift diligenceable when the next buyer runs their own analytics.",
        ],
      }}
      offeringsHeading="How we build data transformation for private equity."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Set the data agenda for the value-creation plan — the metrics, sources, and priorities that the underwrite and the exit story both depend on.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up a portco data foundation fast and repeatably, so each new acquisition reports on a trusted, comparable footing.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Wire the pipelines that pull portfolio data into one reliable, timely picture instead of a monthly spreadsheet reconciliation exercise.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Give the fund and management a single trusted set of numbers to run the hold and to hand a buyer with confidence at exit.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Put value-creation KPIs and cross-portfolio benchmarks in front of deal partners and boards without waiting on the finance close.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Ship the analytics and AI use cases — pricing, demand, churn — that turn the portco's own data into EBITDA in the hold.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "1 view", label: "of every portco reporting on comparable, trusted metrics" },
        { number: "Weeks", label: "to a portco data foundation rather than a hold-long rebuild" },
        { number: "Exit-ready", label: "value-creation lift instrumented and diligenceable, not narrated" },
      ]}
      casesHeading="Portfolio data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Private Equity leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Make the value creation measurable.",
        body: "Tell us where the data breaks down — a diligence you're running, a portfolio you can't see across, a portco whose numbers you don't trust. Our Private Equity data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
