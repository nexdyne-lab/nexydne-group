import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

export default function ConsumerProductsCustomerIntelligence() {
  return (
    <IndustryCapabilityTemplate
      industry="Consumer Products"
      industrySlug="consumer-products"
      capability="Customer Intelligence"
      capabilitySlug="customer-intelligence"
      heroSubtitle="In consumer products you rarely own the shopper — retailers and marketplaces sit in between. We help CPG brands build the first-party data, consumer identity, and AI to know consumers directly, anticipate what they will do next, and turn that into measurable growth across brand, channel, and category."
      heroImage="/images/industries/retail-shelves.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Own the consumer relationship, not just the shelf.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "For most CPG companies the consumer has always been someone else's data — the retailer's, the marketplace's, the platform's. That was survivable when shelf position and trade spend decided the category. It is not survivable when a DTC challenger can out-target you on your own buyer, and when the retailers you depend on are building media networks off your consumers and selling the audience back to you.",
          "We help you close that gap. We build the first-party data foundation, the consumer identity graph, and the predictive models that let you see demand before it shows up in shipment data — and act on it across brand, e-commerce, retail media, and category management without breaking the retailer relationships that still move most of your volume.",
        ],
      }}
      offeringsHeading="How we build consumer intelligence for CPG."
      offeringsIntro="Each capability is a working system, not a slideware framework — and each is delivered by the same team that will help you run it."
      offerings={[
        {
          title: "Customer Data Platform",
          description:
            "Stand up the first-party data foundation that unifies loyalty, DTC, and retail-media signals into one trusted consumer view.",
          href: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Predictive Analytics & Modeling",
          description:
            "Forecast demand, churn, and household lifetime value so brand and category decisions get ahead of the shipment data.",
          href: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Behavioral Segmentation",
          description:
            "Move past demographic personas to segments built on real purchase and consumption behavior across channels.",
          href: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Personalization Strategy",
          description:
            "Deploy personalization across DTC, CRM, and retail media that lifts conversion without eroding gross margin.",
          href: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Journey Analytics & Optimization",
          description:
            "Map the omnichannel path to purchase and fix the friction that quietly costs you the basket.",
          href: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
        {
          title: "Voice of Customer",
          description:
            "Turn reviews, service, and social into a live signal on product, pack, claim, and the next launch.",
          href: "/solutions/customer-intelligence/voice-of-customer",
        },
      ]}
      stats={[
        {
          number: "3.2x",
          label: "average ROI on consumer-data investments within 18 months",
        },
        {
          number: "47%",
          label: "average lift in consumer lifetime value across engagements",
        },
        {
          number: "45 days",
          label: "earlier detection of at-risk consumers before churn",
        },
      ]}
      casesHeading="Consumer intelligence, proved in outcomes."
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
        {
          name: "Pricing & Revenue Management",
          href: "/solutions/business-growth/pricing-monetization-strategy",
        },
        { name: "Operations Excellence", href: "/capabilities/operations" },
        {
          name: "Data Transformation",
          href: "/capabilities/data-transformation",
        },
      ]}
      generalPractice={{
        label: "Explore our firm-wide Customer Intelligence practice",
        href: "/solutions/data-driven-customer-intelligence",
      }}
      cta={{
        heading: "Ready to know your consumer directly?",
        body: "Tell us where you're flying blind — a category, a channel, a launch. Our Consumer Products data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
