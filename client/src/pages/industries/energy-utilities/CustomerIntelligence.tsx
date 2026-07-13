import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "utility-grid-modernization",
    title: "Cutting outage time nearly in half for a regional utility",
    industry: "Energy & Utilities",
    metric: "45%",
    image: "/images/industries/energy-solar.jpg",
  },
  {
    slug: "renewable-energy-forecasting",
    title: "Sharper generation forecasts for a renewables developer",
    industry: "Energy & Utilities",
    metric: "25%",
    image: "/images/industries/energy-wind.jpg",
  },
  {
    slug: "power-generation-predictive-maintenance",
    title: "Halving unplanned outages at a power generator",
    industry: "Energy & Utilities",
    metric: "60%",
    image: "/images/industries/energy-powerplant.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/energy-utilities/operations-excellence" },
  { name: "Data Transformation", href: "/industries/energy-utilities/data-transformation" },
  { name: "Risk & Resilience", href: "/industries/energy-utilities/risk-resilience" },
];

export default function EnergyUtilitiesCustomerIntelligence() {
  return (
    <IndustryCapabilityTemplate
      industry="Energy & Utilities"
      industrySlug="energy-utilities"
      capability="Customer Intelligence"
      capabilitySlug="customer-intelligence"
      heroSubtitle="A utility customer used to be a meter and a monthly bill. Now they want app-grade self-service, they judge you by every outage and every rate increase, and they're the ones deciding whether to enroll in demand response or put solar on the roof. We help utilities turn billing, usage, and program data into engagement that lifts satisfaction, recruits DER, and stands up in a rate case."
      heroImage="/images/industries/energy-renewable-team.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "The ratepayer became a customer — and a grid resource — while the CIS stayed a billing system.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "Satisfaction scores now move on the things a monopoly used to ignore: how the app feels, how fast an outage gets acknowledged, whether a high bill comes with an explanation instead of a surprise. And the same customer is now a grid asset — the load you need to shift, the rooftop solar you need to see, the EV you'd rather charge at 2am than 6pm.",
          "We unify billing, AMI usage, outage, and program data into one customer view and put it to work on both fronts: proactive, personalized communication that raises J.D. Power and lowers call volume, and targeted enrollment that fills demand-response and DER programs with the customers who'll actually stay in them — engagement you can point to when the rate case asks what customers got for the money.",
        ],
      }}
      offeringsHeading="How we build customer intelligence for energy and utilities."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Customer Data Platform",
          description:
            "Unify CIS billing, AMI usage, outage history, and program enrollment into one trusted view of every account.",
          href: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Personalization Strategy",
          description:
            "Deliver proactive outage alerts, high-bill explanations, and usage insights across app, web, and IVR that cut calls and raise satisfaction.",
          href: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Behavioral Segmentation",
          description:
            "Segment on real usage and load shape to target demand-response, efficiency, and DER programs at the customers who'll enroll and stay.",
          href: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Predictive Analytics & Modeling",
          description:
            "Model bill shock, program churn, and DER-adoption propensity to reach customers before the complaint or the opt-out.",
          href: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Journey Analytics & Optimization",
          description:
            "Map move-in, outage, and billing-dispute journeys to fix the friction that drives calls and drags down satisfaction scores.",
          href: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
        {
          title: "Voice of Customer",
          description:
            "Turn call-center, survey, and complaint data into a live signal on the experiences that shape rate-case sentiment.",
          href: "/solutions/customer-intelligence/voice-of-customer",
        },
      ]}
      stats={[
        { number: "10–20%", label: "reduction in call-center volume from proactive engagement" },
        { number: "2–3x", label: "lift in demand-response and DER program enrollment" },
        { number: "Double-digit", label: "gains in J.D. Power residential satisfaction" },
      ]}
      casesHeading="Customer intelligence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Energy & Utilities leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Customer Intelligence practice",
        href: "/solutions/data-driven-customer-intelligence",
      }}
      cta={{
        heading: "Turn ratepayers into engaged customers and grid resources.",
        body: "Tell us where the customer relationship strains — call volume after storms, thin demand-response enrollment, satisfaction scores ahead of a rate case. Our Energy & Utilities data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
