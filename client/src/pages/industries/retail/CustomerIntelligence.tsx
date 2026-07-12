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
  { name: "Pricing & Revenue Management", href: "/industries/retail/pricing-revenue-management" },
  { name: "Operations Excellence", href: "/industries/retail/operations-excellence" },
  { name: "Data Transformation", href: "/industries/retail/data-transformation" },
];

export default function RetailCustomerIntelligence() {
  return (
    <IndustryCapabilityTemplate
      industry="Retail"
      industrySlug="retail"
      capability="Customer Intelligence"
      capabilitySlug="customer-intelligence"
      heroSubtitle="Retailers sit on more first-party data than almost anyone — loyalty, point-of-sale, e-commerce, app — and most of it is still trapped in channel silos. We help retailers unify it into one shopper view and turn it into personalization, assortment, and loyalty that lift basket, frequency, and margin."
      heroImage="/images/industries/retail-shelves.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "You already own the shopper. Now make the data act like it.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "Unlike the brands on your shelves, you actually own the shopper relationship — every transaction, every loyalty scan, every session runs through you. The problem is that the store, the site, the app, and the loyalty program each keep their own version of that shopper, and none of them add up to a person you can act on.",
          "We unify those signals into one shopper view and put it to work: personalization that lifts conversion and basket, segmentation that drives assortment and loyalty, and predictive models that see churn and demand before the POS does — across every channel a shopper actually uses.",
        ],
      }}
      offeringsHeading="How we build customer intelligence for retail."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Customer Data Platform",
          description:
            "Unify loyalty, POS, e-commerce, and app into one trusted, real-time shopper profile.",
          href: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Personalization Strategy",
          description:
            "Deploy personalization across site, app, email, and store that lifts conversion and basket.",
          href: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Behavioral Segmentation",
          description:
            "Segment on real shopping behavior to drive assortment, loyalty, and targeted offers.",
          href: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Predictive Analytics & Modeling",
          description:
            "Forecast demand, churn, and lifetime value to get ahead of the shopper, not chase them.",
          href: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Journey Analytics & Optimization",
          description:
            "Map the omnichannel path to purchase and fix the friction that quietly loses the basket.",
          href: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
        {
          title: "Voice of Customer",
          description:
            "Turn reviews, service, and returns into a live signal on product and experience.",
          href: "/solutions/customer-intelligence/voice-of-customer",
        },
      ]}
      stats={[
        { number: "20%+", label: "lift in conversion from personalization" },
        { number: "10–15%", label: "increase in loyalty-member frequency" },
        { number: "45 days", label: "earlier detection of at-risk shoppers before churn" },
      ]}
      casesHeading="Customer intelligence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Retail leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Customer Intelligence practice",
        href: "/solutions/data-driven-customer-intelligence",
      }}
      cta={{
        heading: "Turn your shopper data into lift.",
        body: "Tell us where the shopper view breaks down — a channel, a loyalty program, a launch. Our Retail data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
