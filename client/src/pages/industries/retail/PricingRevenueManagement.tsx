import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/retail-shelves.jpg",
  },
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/team-workshop.jpg",
  },
  {
    slug: "accounting-audit-automation",
    title: "How audit automation helped an accounting firm scale 2x without hiring",
    industry: "Professional Services",
    metric: "2x",
    image: "/images/industries/women-laptops.jpg",
  },
];

const related = [
  { name: "Customer Intelligence", href: "/industries/retail/customer-intelligence" },
  { name: "Operations Excellence", href: "/industries/retail/operations-excellence" },
  { name: "Data Transformation", href: "/industries/retail/data-transformation" },
];

export default function RetailPricingRevenueManagement() {
  return (
    <IndustryCapabilityTemplate
      industry="Retail"
      industrySlug="retail"
      capability="Pricing & Revenue Management"
      capabilitySlug="pricing-revenue-management"
      heroSubtitle="Pricing, promotion, and markdown are the three levers that decide retail margin — and most retailers still run them on spreadsheets and last year's calendar. We help you price, promote, and mark down with the analytics to protect margin in a volatile, comparison-shopped market."
      heroImage="/images/industries/advisor-charts.jpg"
      heroFocal="60% 40%"
      perspective={{
        heading: "Markdown is where retail margin goes to die.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "In retail, the difference between a good season and a bad one is rarely the buy — it is what happens to price after. Blanket promotions, reactive markdowns, and prices set to match a competitor who is already wrong: each one quietly hands margin back on inventory you already own.",
          "We bring pricing, promotion, and markdown under one analytics-driven engine: elasticity-aware base pricing, promotion effectiveness, and markdown optimization that clears inventory at the highest recoverable margin. The point is a pricing capability your merchants run every week — not a markdown panic at the end of the season.",
        ],
      }}
      offeringsHeading="How we build pricing and revenue management for retail."
      offeringsIntro="From elasticity-aware pricing to markdown optimization, each capability protects margin every week."
      offerings={[
        {
          title: "Pricing & Monetization Strategy",
          description:
            "Elasticity-aware base and promotional pricing that protects margin as demand shifts.",
          href: "/solutions/business-growth/pricing-monetization-strategy",
        },
        {
          title: "Revenue Operations & Analytics",
          description:
            "See margin by SKU, store, and channel — and act on it every week, not every season.",
          href: "/solutions/business-growth/revenue-operations-analytics",
        },
        {
          title: "Conversion Optimization",
          description:
            "Lift site and app conversion so promotion is not the only way to move volume.",
          href: "/solutions/business-growth/conversion-optimization",
        },
        {
          title: "Growth Marketing & Acquisition",
          description:
            "Acquire and retain profitably so pricing power is not spent on blanket discounts.",
          href: "/solutions/business-growth/growth-marketing-acquisition",
        },
        {
          title: "Go-to-Market Acceleration",
          description:
            "Launch categories, formats, and channels faster, with the commercial model to scale.",
          href: "/solutions/business-growth/go-to-market-acceleration",
        },
        {
          title: "E-Commerce Strategy & Launch",
          description:
            "Build direct and marketplace channels that improve mix and give you pricing control.",
          href: "/solutions/business-growth/ecommerce-strategy-launch",
        },
      ]}
      stats={[
        { number: "3–5 pts", label: "of gross margin recovered through pricing and markdown discipline" },
        { number: "20%+", label: "improvement in promotion ROI" },
        { number: "Higher", label: "full-price sell-through, less end-of-season markdown" },
      ]}
      casesHeading="Pricing and revenue, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Retail leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Growth, Marketing & Sales practice",
        href: "/capabilities/growth-marketing-sales",
      }}
      cta={{
        heading: "Protect margin, promotion by promotion.",
        body: "Tell us where margin is leaking — a category, a promotion calendar, an end-of-season markdown. Our Retail team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
