import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "hotel-revenue-transformation",
    title: "Lifting hotel revenue per room by 18%",
    industry: "Travel & Hospitality",
    metric: "18%",
    image: "/images/industries/travel-city-twilight.jpg",
  },
  {
    slug: "airline-loyalty-redesign",
    title: "Reviving a regional airline's loyalty program",
    industry: "Travel & Hospitality",
    metric: "40%",
    image: "/images/industries/transport-bridge.jpg",
  },
  {
    slug: "hotel-guest-experience",
    title: "Restoring personal service across a hotel group",
    industry: "Travel & Hospitality",
    metric: "+25pts",
    image: "/images/industries/city-night.jpg",
  },
];

const related = [
  { name: "Customer Intelligence", href: "/industries/travel-hospitality/customer-intelligence" },
  { name: "Operations Excellence", href: "/industries/travel-hospitality/operations-excellence" },
  { name: "Data Transformation", href: "/industries/travel-hospitality/data-transformation" },
];

export default function TravelHospitalityPricingRevenueManagement() {
  return (
    <IndustryCapabilityTemplate
      industry="Travel & Hospitality"
      industrySlug="travel-hospitality"
      capability="Pricing & Revenue Management"
      capabilitySlug="pricing-revenue-management"
      heroSubtitle="A hotel room or an airline seat is the most perishable product there is — unsold at departure or check-in, its value is gone forever. We help hotels, airlines, and cruise lines price every unit of inventory to the demand in front of it, manage yield across channels, and grow ancillary revenue without eroding the rate integrity that protects the brand."
      heroImage="/images/industries/travel-city-twilight.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "RevPAR is won room by room, seat by seat, day by day.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "Demand in travel is never flat — it moves with the calendar, the compression from a citywide event, the fare a competitor just filed, the weather, and the pace of bookings on the books. Yet most properties and networks still set rates on last year's grid and a gut feel for the season, leaving RevPAR and yield on the table on the high-demand days and discounting into the floor on the soft ones.",
          "We build the pricing and revenue-management system that reads live demand and prices to it: dynamic rates and fares that respond to booking pace and willingness to pay, distribution and channel-mix decisions that shift volume toward the direct and lower-cost paths, and an ancillary strategy — upgrades, bundles, resort fees, seat and bag attributes — that lifts revenue per guest without cheapening the offer.",
        ],
      }}
      offeringsHeading="How we build pricing and revenue management for travel and hospitality."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Pricing & Monetization Strategy",
          description:
            "Set dynamic room rates, fares, and fences that price each unit of perishable inventory to real demand and willingness to pay.",
          href: "/solutions/business-growth/pricing-monetization-strategy",
        },
        {
          title: "Revenue Operations & Analytics",
          description:
            "Give revenue managers live RevPAR, ADR, load-factor, and booking-pace signals to yield inventory instead of reacting a week late.",
          href: "/solutions/business-growth/revenue-operations-analytics",
        },
        {
          title: "Conversion Optimization",
          description:
            "Fix the leaks in the booking path so more look-to-book traffic converts at the rate you intended to charge.",
          href: "/solutions/business-growth/conversion-optimization",
        },
        {
          title: "Growth Marketing & Acquisition",
          description:
            "Acquire high-value guests and flyers through the channels that protect margin, not the ones that hand the customer to an OTA.",
          href: "/solutions/business-growth/growth-marketing-acquisition",
        },
        {
          title: "Go-to-Market Acceleration",
          description:
            "Launch new properties, routes, and cabins with pricing and distribution ready on day one, not tuned after the ramp.",
          href: "/solutions/business-growth/go-to-market-acceleration",
        },
        {
          title: "E-Commerce Strategy & Launch",
          description:
            "Build the direct-booking storefront and merchandising that grows ancillary attach and reclaims share from third-party channels.",
          href: "/solutions/business-growth/ecommerce-strategy-launch",
        },
      ]}
      stats={[
        { number: "5–8%", label: "RevPAR uplift from dynamic pricing and demand-based yield" },
        { number: "15–25%", label: "growth in ancillary revenue per guest from bundles and upsell" },
        { number: "3–6 pts", label: "shift in mix toward lower-cost direct and owned channels" },
      ]}
      casesHeading="Revenue management, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Travel & Hospitality leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Growth, Marketing & Sales practice",
        href: "/capabilities/growth-marketing-sales",
      }}
      cta={{
        heading: "Price the demand in front of you.",
        body: "Tell us where yield is leaking — a soft shoulder season, a channel eating your margin, an ancillary line that never grew. Our Travel & Hospitality team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
