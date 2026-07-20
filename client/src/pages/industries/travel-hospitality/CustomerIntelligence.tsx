import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "hotel-revenue-transformation",
    title: "Lifting hotel revenue per room by 18%",
    industry: "Travel & Hospitality",
    metric: "18%",
    image: "/images/cases/hotel-revenue-transformation-hero.jpg",
  },
  {
    slug: "airline-loyalty-redesign",
    title: "Reviving a regional airline's loyalty program",
    industry: "Travel & Hospitality",
    metric: "40%",
    image: "/images/cases/airline-loyalty-redesign-hero.jpg",
  },
  {
    slug: "hotel-guest-experience",
    title: "Restoring personal service across a hotel group",
    industry: "Travel & Hospitality",
    metric: "+25pts",
    image: "/images/cases/hotel-guest-experience-hero.jpg",
  },
];

const related = [
  { name: "Pricing & Revenue Management", href: "/industries/travel-hospitality/pricing-revenue-management" },
  { name: "Operations Excellence", href: "/industries/travel-hospitality/operations-excellence" },
  { name: "Data Transformation", href: "/industries/travel-hospitality/data-transformation" },
];

export default function TravelHospitalityCustomerIntelligence() {
  return (
    <IndustryCapabilityTemplate
      industry="Travel & Hospitality"
      industrySlug="travel-hospitality"
      capability="Customer Intelligence"
      capabilitySlug="customer-intelligence"
      heroSubtitle="A guest touches your brand a dozen times before check-in and a dozen times after — search, booking, pre-arrival, the stay or the flight, the loyalty statement, the next trip. We help hotels, airlines, and cruise lines stitch those fragments into one traveler view and turn it into personalization, loyalty, and direct-booking share that survive the next OTA promotion."
      heroImage="/images/industries/city-night.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "You serve the guest for days. You should know them for a lifetime.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "Few businesses spend as much time in the customer's physical presence as a hotel or an airline — nights under your roof, hours in your cabin, a loyalty relationship that can span decades. Yet the reservation system, the PMS, the loyalty program, the app, and the on-property spend each hold a different sliver of that guest, and no single record knows that the anniversary booker, the weekly corporate flyer, and the lapsed elite member are the same person.",
          "We unify those signals into one traveler 360 and put it to work: personalization that follows the guest across search, pre-arrival, the stay, and the win-back, loyalty and repeat-booking programs built on real trip behavior rather than tier tables, and journey analytics that show exactly where a would-be direct booking slipped away to a third-party channel — so you can earn it back.",
        ],
      }}
      offeringsHeading="How we build customer intelligence for travel and hospitality."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Customer Data Platform",
          description:
            "Resolve reservation, PMS, loyalty, app, and on-property data into one real-time guest profile across every property and touchpoint.",
          href: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Personalization Strategy",
          description:
            "Personalize the whole trip — offers, room and seat, upgrades, pre-arrival, recovery — across web, app, email, and the front desk.",
          href: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Behavioral Segmentation",
          description:
            "Segment on real travel behavior — trip purpose, cadence, spend, channel — to target loyalty and offers that actually fit the guest.",
          href: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Predictive Analytics & Modeling",
          description:
            "Model booking propensity, lifetime value, and lapse risk to win the repeat trip before a competitor or OTA does.",
          href: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Journey Analytics & Optimization",
          description:
            "Map the look-to-book-to-return path and fix the friction that pushes direct demand to third-party channels.",
          href: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
        {
          title: "Voice of Customer",
          description:
            "Turn reviews, guest surveys, and service recovery into a live read on experience quality and loyalty risk.",
          href: "/solutions/customer-intelligence/voice-of-customer",
        },
      ]}
      stats={[
        { number: "3–5 pts", label: "increase in direct-booking share from a unified guest view" },
        { number: "20%+", label: "lift in loyalty-member repeat booking and stay frequency" },
        { number: "15–30%", label: "higher conversion on personalized offers and upgrades" },
      ]}
      casesHeading="Customer intelligence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Travel & Hospitality leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Customer Intelligence practice",
        href: "/solutions/data-driven-customer-intelligence",
      }}
      cta={{
        heading: "Turn a fragmented guest into one you can act on.",
        body: "Tell us where the traveler view breaks down — a loyalty program, the direct channel, a stalled personalization effort. Our Travel & Hospitality data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
