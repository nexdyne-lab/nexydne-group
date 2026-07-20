import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  { slug: "automotive-smart-factory", title: "Lifting plant productivity by 40% at a vehicle maker", industry: "Manufacturing", metric: "40%", image: "/images/industries/mfg-robotics.jpg" },
  { slug: "semiconductor-quality-prediction", title: "Catching chip defects weeks before they appear", industry: "Manufacturing", metric: "92%", image: "/images/cases/semiconductor-quality-prediction-hero.jpg" },
  { slug: "industrial-connected-products", title: "Building a Recurring Services Business on Machines Already Sold", industry: "Manufacturing", metric: "2,700 machines on connected services", image: "/images/capabilities/cap-battery-factory.jpg" },
];

const related = [
  { name: "Operations Excellence", href: "/industries/manufacturing/operations-excellence" },
  { name: "Data Transformation", href: "/industries/manufacturing/data-transformation" },
  { name: "Risk & Resilience", href: "/industries/manufacturing/risk-resilience" },
];

export default function ManufacturingStrategyGrowth() {
  return (
    <IndustryCapabilityTemplate
      industry="Manufacturing"
      industrySlug="manufacturing"
      capability="Strategy & Growth"
      capabilitySlug="strategy-growth"
      heroSubtitle="Reshoring, portfolio pressure, and the shift to services and software are redrawing the manufacturing map. We help manufacturers make the hard strategic calls — footprint, portfolio, new business models — and build the growth engine to fund and scale them."
      heroImage="/images/industries/eng-designers.jpg"
      heroFocal="60% 40%"
      perspective={{
        heading: "The next decade of manufacturing growth won't look like the last.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "For a generation, manufacturing strategy meant efficiency: optimize the footprint, squeeze the cost, protect the core. That game is not over, but it is no longer enough. Reshoring economics, servitization, and software-defined products are opening — and closing — growth pools faster than annual planning can track.",
          "We help you make the calls and build the engine: where to compete across the portfolio and footprint, which new business models and services to build, and the growth and transformation capability to fund and scale them. The goal is a strategy that moves the enterprise, not a deck that ages on the shelf.",
        ],
      }}
      offeringsHeading="How we build strategy and growth for manufacturing."
      offeringsIntro="From portfolio and footprint to new business models, each capability ties strategy to the P&L."
      offerings={[
        { title: "Growth Strategy", description: "Define where to play and how to win across products, segments, and geographies.", href: "/capabilities/strategy-corporate-finance/business-strategy/growth-strategy" },
        { title: "Business Model Innovation", description: "Design servitization, software, and aftermarket models that open new growth pools.", href: "/capabilities/strategy-corporate-finance/business-strategy/business-model-innovation" },
        { title: "Strategic Planning", description: "Turn the strategy into a funded, sequenced plan the enterprise can actually execute.", href: "/capabilities/strategy-corporate-finance/business-strategy/strategic-planning" },
        { title: "Organizational Transformation", description: "Reshape the operating model and org to deliver the strategy, not fight it.", href: "/capabilities/strategy-corporate-finance/business-strategy/organizational-transformation" },
        { title: "Digital Strategy", description: "Build the digital and software proposition that a modern manufacturer competes on.", href: "/capabilities/strategy-corporate-finance/business-strategy/digital-strategy" },
        { title: "Turnaround & Restructuring", description: "Stabilize, refocus, and rebuild margin where the core needs a reset.", href: "/capabilities/strategy-corporate-finance/business-strategy/turnaround-restructuring" },
      ]}
      stats={[
        { number: "New", label: "services, software, and aftermarket revenue pools" },
        { number: "End to end", label: "footprint and portfolio decisions modeled to the P&L" },
        { number: "Funded", label: "growth strategy the enterprise can execute" },
      ]}
      casesHeading="Strategy and growth, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Manufacturing leaders."
      related={related}
      generalPractice={{ label: "Explore our firm-wide Strategy & Corporate Finance practice", href: "/capabilities/strategy-corporate-finance" }}
      cta={{ heading: "Make the strategic call, then build the engine.", body: "Tell us the decision in front of you — a footprint, a portfolio, a new business model. Our Manufacturing team will read your note and come back within two business days with a concrete first move, not a sales pitch." }}
    />
  );
}
