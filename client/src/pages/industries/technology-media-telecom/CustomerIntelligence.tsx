import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "media-streaming-launch",
    title: "Launching a streaming service that won 750K subscribers",
    industry: "Technology, Media & Telecom",
    metric: "750K",
    image: "/images/industries/tech-datacenter.jpg",
  },
  {
    slug: "tech-engineering-transformation",
    title: "Tripling a software company's release speed",
    industry: "Technology, Media & Telecom",
    metric: "3x",
    image: "/images/capabilities/cap-conference-data.jpg",
  },
  {
    slug: "telecom-customer-experience",
    title: "Cutting a regional carrier's churn by 40%",
    industry: "Technology, Media & Telecom",
    metric: "40%",
    image: "/images/cases/telecom-customer-experience-hero.jpg",
  },
];

const related = [
  { name: "Strategy & Growth", href: "/industries/technology-media-telecom/strategy-growth" },
  { name: "Data Transformation", href: "/industries/technology-media-telecom/data-transformation" },
  { name: "Operations Excellence", href: "/industries/technology-media-telecom/operations-excellence" },
];

export default function TechnologyMediaTelecomCustomerIntelligence() {
  return (
    <IndustryCapabilityTemplate
      industry="Technology, Media & Telecom"
      industrySlug="technology-media-telecom"
      capability="Customer Intelligence"
      capabilitySlug="customer-intelligence"
      heroSubtitle="In TMT the subscriber can leave on the last day of the month with a tap, and acquiring the replacement costs more than the margin you just lost. We help carriers, streamers, and platforms see churn before it happens, personalize the experience across every bundle, and grow lifetime value instead of renting attention one promotion at a time."
      heroImage="/images/industries/biz-team-bright.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Retention is the whole game — and it is decided long before the cancel button.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "TMT economics live and die on the subscriber base. Acquisition is expensive, contracts are shorter and softer than they have ever been, and a single frustrating billing event or a competitor's promo can trigger a port-out or a cancellation the same day. Yet most operators still find out a subscriber is unhappy when the churn report lands — weeks after the signals were sitting in usage, care contacts, and payment behavior.",
          "We help you get ahead of it. We unify mobile, broadband, and content signals into one subscriber view, model churn and lifetime value so retention teams act on the right accounts before they are lost, and drive personalization and recommendation that make the bundle stickier — cross-selling the second line, the streaming add-on, the device upgrade to the households that actually want them. The result is a base you grow through relevance and engagement, not a base you rent back with discounts.",
        ],
      }}
      offeringsHeading="How we build customer intelligence for TMT."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Customer Data Platform",
          description:
            "Unify mobile, broadband, streaming, and care data into one real-time subscriber and household profile.",
          href: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Personalization Strategy",
          description:
            "Deploy personalization and recommendation across app, portal, and content that lift engagement and reduce the reasons to leave.",
          href: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Behavioral Segmentation",
          description:
            "Segment on real usage, tenure, and household behavior to target retention offers and cross-sell where they will actually land.",
          href: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Predictive Analytics & Modeling",
          description:
            "Model churn, port-out risk, and lifetime value across bundles so retention teams reach the right subscriber before the cancel.",
          href: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Journey Analytics & Optimization",
          description:
            "Map the onboarding, billing, and upgrade journeys and fix the friction — the failed activation, the bill-shock — that quietly drives churn.",
          href: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
        {
          title: "Voice of Customer",
          description:
            "Turn care contacts, NPS, and cancellation reasons into a live signal on where the experience is losing subscribers.",
          href: "/solutions/customer-intelligence/voice-of-customer",
        },
      ]}
      stats={[
        { number: "15–30%", label: "reduction in churn among high-value subscribers" },
        { number: "20%+", label: "lift in cross-sell and upgrade conversion from next-best-offer" },
        { number: "45 days", label: "earlier detection of at-risk accounts before they port out" },
      ]}
      casesHeading="Customer intelligence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Technology, Media & Telecom leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Customer Intelligence practice",
        href: "/solutions/data-driven-customer-intelligence",
      }}
      cta={{
        heading: "See the churn before the cancel.",
        body: "Tell us where the subscriber relationship breaks down — a churn spike, a bundle that will not cross-sell, an onboarding drop-off. Our TMT data team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
