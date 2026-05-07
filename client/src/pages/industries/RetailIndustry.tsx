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
      heroImage="/case-study-retail.webp"
      povParagraphs={[
        "Retail is in the middle of its most consequential transformation in decades. The pandemic compressed years of digital adoption into months, fundamentally changing how consumers discover, evaluate, and purchase. Retailers that can meet customers wherever they are — with personalized, frictionless experiences — will win disproportionate share of wallet and loyalty.",
        "We partner with retailers to build the capabilities the next era requires: unified commerce platforms that erase the line between digital and store, AI-powered personalization that lifts conversion and lifetime value, and intelligent supply chains that deliver speed without sacrificing margin.",
        "From grocery to fashion, from specialty to mass, we have helped retailers of every shape transform. We understand the operating realities — thin margins, seasonal volatility, thousands of SKUs across hundreds of locations — and we bring practical solutions that pay back inside a planning cycle, not after one."
      ]}
      challenges={[
        {
          title: "Margin under siege",
          body: "Promotional pressure, freight inflation, and labor cost are compressing margins faster than most retailers can re-price. Pricing optimization, markdown intelligence, and assortment rationalization are now core capabilities, not seasonal projects."
        },
        {
          title: "Unified commerce gaps",
          body: "Customers expect inventory, pricing, and service to feel consistent across digital and store. Most retailers still run those journeys on disconnected systems — and the gap is now visible to shoppers in basket abandonment and return rates."
        },
        {
          title: "Personalization at scale",
          body: "First-party data is more valuable than ever, yet most retailers under-monetize the signal they already collect. Modern customer-data platforms and AI-powered targeting can lift conversion without adding ad spend."
        },
        {
          title: "Supply-chain agility",
          body: "Long lead times, single-source dependencies, and reactive replenishment are leaving sales on the floor and capital in inventory. Real-time visibility and AI-driven allocation are the fastest paths to working-capital and service improvement."
        }
      ]}
      capabilities={[
        {
          name: "Customer Intelligence",
          href: "/capabilities/customer-intelligence",
          blurb: "Stand up the customer-data foundation, journey-level analytics, and AI-powered personalization that turn first-party data into measurable lift."
        },
        {
          name: "Pricing & Revenue Management",
          href: "/capabilities/pricing-revenue",
          blurb: "Engineer pricing, promotion, and markdown decisions with the data and decision tooling needed to protect margin in a high-volatility environment."
        },
        {
          name: "Operations Excellence",
          href: "/capabilities/operations-excellence",
          blurb: "Transform store, fulfillment, and supply-chain operations with intelligent allocation, labor optimization, and last-mile redesign."
        },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
          blurb: "Unify commerce, marketing, and supply-chain data into a single platform that supports the next generation of AI use cases across the business."
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
          image: "/case-strategy-consulting.dfdd1294.jpg"
        },
        {
          slug: "bank-process-automation",
          title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
          industry: "Financial Services",
          metric: "10K+ hrs",
          image: "/case-banker-meeting.c53f3999.jpg"
        },
        {
          slug: "accounting-audit-automation",
          title: "How audit automation helped an accounting firm scale 2x without hiring",
          industry: "Professional Services",
          metric: "2x",
          image: "/case-accountants-audit.1c87a151.jpg"
        }
      ]}
    />
  );
}
