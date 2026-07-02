// TODO: David — confirm Retail-specific Experience & Impact numbers with practice lead before publish.
//   Placeholders below are plausible-but-unverified directional figures inferred from the existing prose context;
//   do NOT publish until practice-lead confirms.
// TODO: David — confirm practice-lead name + title for the POV pull quote attribution before publish.

import IndustryDetailTemplate from "@/components/IndustryDetailTemplate";

export default function RetailIndustry() {
  return (
    <IndustryDetailTemplate
      industry="Retail"
      slug="retail"
      heroSubtitle="We help retailers win the unified-commerce era — using AI-powered personalization, intelligent supply chains, and modernized merchandising to protect margin, lift conversion, and meet customers wherever they choose to shop."
      heroImage="/images/industries/retail-warehouse.jpg"
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
          href: "/capabilities/customer-intelligence",
          blurb: "The customer-data foundation, journey analytics, and AI personalization that turn first-party data into measurable lift."
        },
        {
          name: "Pricing & Revenue Management",
          href: "/capabilities/pricing-revenue",
          blurb: "Pricing, promotion, and markdown decisions with the tooling needed to protect margin in a volatile market."
        },
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Transform store, fulfillment, and supply-chain operations with intelligent allocation and last-mile redesign."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify commerce, marketing, and supply-chain data into one platform for the next generation of AI use cases."
        }
      ]}
      experienceStats={[
        // TODO: confirm with practice lead before publish.
        {number: "$50B+", label: "In client revenue impacted"},
        {number: "Top 5", label: "US grocer + Top-10 specialty retailer served"},
        {number: "30%", label: "Average margin improvement on optimized categories"},
        {number: "Quarterly", label: "Cycle on which most retail engagements compound"}
      ]}
      povQuote={{
        // TODO: confirm practice-lead name + title before publish.
        text: "The retailers separating from the pack are the ones who treat first-party data like a P&L line — measured, owned, and optimized — rather than a marketing campaign that ends when the season does.",
        author: "Priya Iyer",
        role: "Partner, Retail Practice"
      }}
      featuredCases={[
        {
          slug: "consulting-knowledge-management",
          title: "Transforming knowledge management for a global consulting firm",
          industry: "Professional Services",
          metric: "3x",
          image: "/images/industries/retail-shelves.jpg"
        },
        {
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+ hrs",
          image: "/images/industries/team-workshop.jpg"
        },
        {
          slug: "accounting-audit-automation",
          title: "How audit automation helped an accounting firm scale 2x without hiring",
          industry: "Professional Services",
          metric: "2x",
          image: "/images/industries/women-laptops.jpg"
        }
      ]}
    />
  );
}
