//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function RetailIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Retail"
      slug="retail"
      heroSubtitle="We help retailers win the unified-commerce era — using AI-powered personalization, intelligent supply chains, and modernized merchandising to protect margin, lift conversion, and meet customers wherever they choose to shop."
      heroImage="/images/industries2/retail-hero.jpg"
      perspectiveImage="/images/industries2/retail-pov.jpg"
      quoteImage="/images/industries/women-laptops.jpg"
      heroFocal="58% 50%"
      povParagraphs={[
        "Retail is in the middle of its most consequential transformation in decades. The pandemic compressed years of digital adoption into months, fundamentally changing how consumers discover, evaluate, and purchase. Retailers that can meet customers wherever they are — with personalized, frictionless experiences — will win disproportionate share of wallet and loyalty.",
        "We partner with retailers to build the capabilities the next era requires: unified commerce platforms that erase the line between digital and store, AI-powered personalization that lifts conversion and lifetime value, and intelligent supply chains that deliver speed without sacrificing margin.",
        "From grocery to fashion, from specialty to mass, we have helped retailers of every shape transform. We understand the operating realities — thin margins, seasonal volatility, thousands of SKUs across hundreds of locations — and we bring practical solutions that pay back inside a planning cycle, not after one."
      ]}
      challenges={[
        {
          title: "Margin under siege",
          body: "Promotional pressure, freight, and labor cost are compressing margins — pricing, markdown, and assortment are now core capabilities."
        },
        {
          title: "Unified commerce gaps",
          body: "Customers expect consistency across digital and store, but most retailers still run those journeys on disconnected systems."
        },
        {
          title: "Personalization at scale",
          body: "First-party data is more valuable than ever, yet most retailers under-monetize the signal they already collect."
        },
        {
          title: "Supply-chain agility",
          body: "Long lead times and reactive replenishment leave sales on the floor; real-time visibility and AI allocation fix it fastest."
        }
      ]}
      capabilities={[
        {
          name: "Customer Intelligence",
          href: "/industries/retail/customer-intelligence",
          blurb: "The customer-data foundation, journey analytics, and AI personalization that turn first-party data into measurable lift."
        },
        {
          name: "Pricing & Revenue Management",
          href: "/industries/retail/pricing-revenue-management",
          blurb: "Pricing, promotion, and markdown decisions with the tooling needed to protect margin in a volatile market."
        },
        {
          name: "Operations Excellence",
          href: "/industries/retail/operations-excellence",
          blurb: "Transform store, fulfillment, and supply-chain operations with intelligent allocation and last-mile redesign."
        },
        {
          name: "Data Transformation",
          href: "/industries/retail/data-transformation",
          blurb: "Unify commerce, marketing, and supply-chain data into one platform for the next generation of AI use cases."
        }
      ]}
      experienceStats={[
        {number: "12%", label: "Average sales lift on optimized assortments"},
        {number: "Top 5", label: "US grocer + Top-10 specialty retailer served"},
        {number: "30%", label: "Average margin improvement on optimized categories"},
        {number: "Quarterly", label: "Cycle on which most retail engagements compound"}
      ]}
      povQuote={{
        text: "The retailers separating from the pack are the ones who treat first-party data like a P&L line — measured, owned, and optimized — rather than a marketing campaign that ends when the season does.",
        author: "Retail Practice",
        role: "NexDyne Consulting Group"
      }}
      featuredCases={[
        {
          slug: "fashion-retail-digital-transformation",
          title: "Growing a fashion retailer's online sales by 85%",
          industry: "Retail",
          metric: "85%",
          image: "/images/cases/fashion-retail-digital-transformation-hero.jpg"
        },
        {
          slug: "grocery-demand-forecasting",
          title: "Cutting a grocer's fresh-food waste by a third",
          industry: "Retail",
          metric: "35%",
          image: "/images/cases/grocery-demand-forecasting-hero.jpg"
        },
        {
          slug: "retail-loyalty-transformation",
          title: "Turning a stale loyalty program into 45% more spend",
          industry: "Retail",
          metric: "45%",
          image: "/images/capabilities/cap-retail-data.jpg"
        }
      ]}
    />
  );
}
