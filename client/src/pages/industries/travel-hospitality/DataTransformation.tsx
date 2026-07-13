import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "consulting-knowledge-management",
    title: "Transforming knowledge management for a global consulting firm",
    industry: "Professional Services",
    metric: "3x",
    image: "/images/industries/city-night.jpg",
  },
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/transport-bridge.jpg",
  },
  {
    slug: "fintech-payment-automation",
    title: "Building a scalable payment processing system for a fintech startup",
    industry: "Financial Services",
    metric: "100K+",
    image: "/images/industries/arch-glass-sphere.jpg",
  },
];

const related = [
  { name: "Pricing & Revenue Management", href: "/industries/travel-hospitality/pricing-revenue-management" },
  { name: "Customer Intelligence", href: "/industries/travel-hospitality/customer-intelligence" },
  { name: "Operations Excellence", href: "/industries/travel-hospitality/operations-excellence" },
];

export default function TravelHospitalityDataTransformation() {
  return (
    <IndustryCapabilityTemplate
      industry="Travel & Hospitality"
      industrySlug="travel-hospitality"
      capability="Data Transformation"
      capabilitySlug="data-transformation"
      heroSubtitle="Booking engine, PMS, CRS, loyalty, revenue management, ancillary, on-property spend — a travel company's guest lives across a dozen systems that were never built to talk. We help hotels, airlines, and cruise lines unify that estate into one governed data foundation and a real-time guest data platform, so revenue, personalization, and AI all run on one guest record instead of a dozen conflicting ones."
      heroImage="/images/industries/tech-datacenter.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "One guest record is the foundation everything else in travel is built on.",
        image: "/images/data-abstract.jpg",
        paragraphs: [
          "The travel and hospitality stack is a museum of systems — a decades-old PMS here, a CRS and GDS feed there, a loyalty platform, a revenue-management engine, a booking site, and the on-property point-of-sale, each with its own idea of who the guest is. When the same traveler shows up as three profiles, revenue management prices blind, personalization misfires, and every AI ambition stalls on data no one trusts.",
          "We build the foundation that makes it one estate: reservation, PMS, loyalty, and operations data engineered into a governed, real-time guest data platform, with the privacy and consent controls that global guest data demands built in from the start. The result is a single, trustworthy guest record that pricing, marketing, service, and AI can all draw on — and keep current as the trip happens.",
        ],
      }}
      offeringsHeading="How we build data transformation for travel and hospitality."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Data Strategy",
          description:
            "Set the roadmap to unify reservation, loyalty, and operations data into the one guest record every function needs.",
          href: "/solutions/data-strategy",
        },
        {
          title: "Data Platform",
          description:
            "Stand up the real-time guest data platform that keeps the profile current as the trip is searched, booked, and lived.",
          href: "/solutions/data-platform",
        },
        {
          title: "Data Engineering",
          description:
            "Build the pipelines that pull PMS, CRS, loyalty, and on-property data together reliably and at travel-peak scale.",
          href: "/solutions/data-engineering",
        },
        {
          title: "Data Governance",
          description:
            "Embed the privacy, consent, and cross-border controls that global guest data and loyalty programs require.",
          href: "/solutions/data-governance",
        },
        {
          title: "Data Visualization",
          description:
            "Give revenue, operations, and marketing leaders trusted, shared views of demand, guest, and property performance.",
          href: "/solutions/data-visualization",
        },
        {
          title: "Data Solutions",
          description:
            "Turn the unified foundation into working use cases — pricing, personalization, and forecasting on one guest record.",
          href: "/solutions/data-solutions",
        },
      ]}
      stats={[
        { number: "1", label: "unified guest record across booking, PMS, loyalty, and on-property systems" },
        { number: "40%+", label: "reduction in time to build new pricing, guest, and AI use cases" },
        { number: "real-time", label: "guest profile updated across the search, booking, and stay journey" },
      ]}
      casesHeading="Data transformation, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Travel & Hospitality leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Data Transformation practice",
        href: "/capabilities/data-transformation",
      }}
      cta={{
        heading: "Give the whole company one guest record.",
        body: "Tell us where the data estate holds you back — a legacy PMS, a loyalty system that won't reconcile, an AI effort stalled on trust. Our Travel & Hospitality data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
