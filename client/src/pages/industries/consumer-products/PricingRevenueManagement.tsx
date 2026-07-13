import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

export default function ConsumerProductsPricingRevenueManagement() {
  return (
    <IndustryCapabilityTemplate
      industry="Consumer Products"
      industrySlug="consumer-products"
      capability="Pricing & Revenue Management"
      capabilitySlug="pricing-revenue-management"
      heroSubtitle="In consumer products, price is the fastest lever you have — and the easiest to give away. We help CPG companies protect list-to-net, get trade spend working, and price with the discipline that turns inflation and retailer pressure into margin, not erosion."
      heroImage="/images/industries/advisor-charts.jpg"
      heroFocal="60% 40%"
      perspective={{
        heading: "Revenue growth management is a system, not an annual price increase.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "Every point of list price you win can vanish in trade spend, off-invoice deals, and unmanaged promotions before it reaches the P&L. Most CPG companies still run pricing, promotion, and trade as three disconnected motions — which is exactly why net revenue rarely moves the way the price deck promised.",
          "We wire them into one revenue-growth-management engine: price-pack architecture, promotion effectiveness, trade-spend optimization, and the analytics to defend list-to-net in every line review. The goal is a pricing capability your commercial team can run every cycle — not a one-off study that ages the moment costs move again.",
        ],
      }}
      offeringsHeading="How we build revenue-growth management for CPG."
      offeringsIntro="From price-pack architecture to trade-spend analytics, each capability is a working system your commercial team can run."
      offerings={[
        {
          title: "Pricing & Monetization Strategy",
          description:
            "Design price-pack architecture and monetization models that hold margin as costs, packs, and channels shift.",
          href: "/solutions/business-growth/pricing-monetization-strategy",
        },
        {
          title: "Revenue Operations & Analytics",
          description:
            "Build the data to see net revenue by pack, channel, and customer — and the discipline to act on it every cycle.",
          href: "/solutions/business-growth/revenue-operations-analytics",
        },
        {
          title: "Growth Marketing & Acquisition",
          description:
            "Make demand generation efficient so promotion is not the only lever you have to move volume.",
          href: "/solutions/business-growth/growth-marketing-acquisition",
        },
        {
          title: "Conversion Optimization",
          description:
            "Lift DTC and marketplace conversion so every media and promo dollar returns more revenue.",
          href: "/solutions/business-growth/conversion-optimization",
        },
        {
          title: "Go-to-Market Acceleration",
          description:
            "Launch new packs, price tiers, and channels faster, with the commercial model to scale them.",
          href: "/solutions/business-growth/go-to-market-acceleration",
        },
        {
          title: "E-Commerce Strategy & Launch",
          description:
            "Stand up direct and marketplace channels that improve mix and give you real pricing control.",
          href: "/solutions/business-growth/ecommerce-strategy-launch",
        },
      ]}
      stats={[
        { number: "3–5 pts", label: "of margin recovered through revenue-growth management" },
        { number: "20%+", label: "improvement in trade-spend ROI" },
        { number: "90 days", label: "to a defensible list-to-net pricing baseline" },
      ]}
      casesHeading="Pricing and revenue, proved in outcomes."
      cases={[
        {
          slug: "consumer-electronics-demand-optimization",
          title: "Cutting Excess Stock for a Consumer Electronics Brand",
          industry: "Consumer Products",
          metric: "40%",
          image: "/images/capabilities/cap-conference-data.jpg",
        },
        {
          slug: "food-beverage-demand-forecasting",
          title: "Sharper Demand Forecasting for a Food and Beverage Maker",
          industry: "Consumer Products",
          metric: "30%",
          image: "/images/capabilities/cap-food.jpg",
        },
        {
          slug: "retail-assortment-optimization",
          title: "Tailoring Store Assortments Lifts a Retailer's Sales",
          industry: "Consumer Products",
          metric: "12%",
          image: "/images/capabilities/cap-retail-apparel.jpg",
        },
      ]}
      relatedHeading="Adjacent work for Consumer Products leaders."
      related={[
        { name: "Customer Intelligence", href: "/industries/consumer-products/customer-intelligence" },
        { name: "Operations Excellence", href: "/industries/consumer-products/operations-excellence" },
        { name: "Data Transformation", href: "/industries/consumer-products/data-transformation" },
      ]}
      generalPractice={{
        label: "Explore our firm-wide Growth, Marketing & Sales practice",
        href: "/capabilities/growth-marketing-sales",
      }}
      cta={{
        heading: "Stop giving margin away at the shelf.",
        body: "Tell us where net revenue is leaking — a brand, a pack, a promotion calendar. Our Consumer Products team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
