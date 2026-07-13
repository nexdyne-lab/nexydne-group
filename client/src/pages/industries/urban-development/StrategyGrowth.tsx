import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "urban-master-planning",
    title: "Phasing a mixed-use district for stronger returns",
    industry: "Urban Development",
    metric: "18%",
    image: "/images/industries/skyscraper.jpg",
  },
  {
    slug: "urban-smart-buildings",
    title: "Cutting building operating costs with connected data",
    industry: "Urban Development",
    metric: "22%",
    image: "/images/industries/arch-glass-sphere.jpg",
  },
  {
    slug: "urban-capital-projects",
    title: "Delivering capital projects on time and on budget",
    industry: "Urban Development",
    metric: "95%",
    image: "/images/industries/city-digital.jpg",
  },
];

const related = [
  { name: "Data Transformation", href: "/industries/urban-development/data-transformation" },
  { name: "Operations Excellence", href: "/industries/urban-development/operations-excellence" },
  { name: "Risk & Resilience", href: "/industries/urban-development/risk-resilience" },
];

export default function UrbanDevelopmentStrategyGrowth() {
  return (
    <IndustryCapabilityTemplate
      industry="Urban Development"
      industrySlug="urban-development"
      capability="Strategy & Growth"
      capabilitySlug="strategy-growth"
      heroSubtitle="A master plan commits a city or developer to a bet that will not fully pay out for twenty or thirty years — and the districts that win are rarely the ones with the boldest renderings. We help cities, developers, and infrastructure providers set mixed-use strategy, phase capital across long horizons, and structure the public-private partnerships that make ambitious ground actually get built."
      heroImage="/images/industries/skyscraper.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Great districts are won in the phasing plan, not the master plan.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "Every stalled megaproject started as a beautiful master plan. What separates the districts that fill up from the ones that sit half-built is the discipline underneath the vision: a defensible read on absorption, a capital plan that survives a rate cycle, and a phasing sequence where each stage funds and de-risks the next rather than betting everything on a single anchor tenant that may never sign.",
          "We help you set the strategy and the sequence together — where the growth is, which uses to mix and in what order, how to structure land value capture, TIF, and public-private partnership so public and private balance sheets each carry the risk they are built to carry, and how to keep a multi-decade program adaptable as demand, policy, and capital markets move underneath it.",
        ],
      }}
      offeringsHeading="How we build strategy and growth for urban development."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Growth Strategy",
          description:
            "Define where to build, which uses to mix, and how to win a district against the metro's other sites and submarkets.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy",
        },
        {
          title: "Strategic Planning",
          description:
            "Phase capital and construction across long horizons so each stage funds and de-risks the next rather than the whole.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/strategic-planning",
        },
        {
          title: "Business Model Innovation",
          description:
            "Structure land value capture, TIF, ground leases, and public-private partnerships that share risk the right way.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/business-model-innovation",
        },
        {
          title: "Digital Strategy",
          description:
            "Build the smart-infrastructure and connected-community proposition into the plan before the concrete is poured.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/digital-strategy",
        },
        {
          title: "Organizational Transformation",
          description:
            "Stand up the development entity, governance, and decision rights a multi-partner, multi-decade program needs.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/organizational-transformation",
        },
        {
          title: "Turnaround & Restructuring",
          description:
            "Reposition a stalled district or distressed asset — re-underwrite the mix, recapitalize, and get delivery moving again.",
          href: "/capabilities/strategy-corporate-finance/business-strategy/turnaround-restructuring",
        },
      ]}
      stats={[
        { number: "20–30 yr", label: "horizon our phasing and capital plans are built to survive" },
        { number: "15–25%", label: "improvement in blended returns from resequencing the phasing plan" },
        { number: "2–3x", label: "faster path to first vertical when P3 structure is set up front" },
      ]}
      casesHeading="Urban strategy, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Urban Development leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Strategy & Corporate Finance practice",
        href: "/capabilities/strategy-corporate-finance",
      }}
      cta={{
        heading: "Build the phasing plan the vision deserves.",
        body: "Tell us where the plan is stuck — an absorption assumption, a capital gap, a partnership that won't close. Our Urban Development team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
