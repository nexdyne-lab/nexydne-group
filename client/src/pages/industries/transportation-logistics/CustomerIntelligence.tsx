import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "warehouse-optimization",
    title: "Lifting warehouse productivity 45% for a regional distributor",
    industry: "Transportation & Logistics",
    metric: "45%",
    image: "/images/cases/warehouse-optimization-hero.jpg",
  },
  {
    slug: "freight-optimization",
    title: "Cutting freight costs 18% for a consumer-goods shipper",
    industry: "Transportation & Logistics",
    metric: "18%",
    image: "/images/industries/transport-traffic.jpg",
  },
  {
    slug: "last-mile-optimization",
    title: "Cutting last-mile delivery costs 30% for a regional carrier",
    industry: "Transportation & Logistics",
    metric: "30%",
    image: "/images/industries/transport-bridge.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/transportation-logistics/operations-excellence" },
  { name: "Data Transformation", href: "/industries/transportation-logistics/data-transformation" },
  { name: "Strategy & Growth", href: "/industries/transportation-logistics/strategy-growth" },
];

export default function TransportationLogisticsCustomerIntelligence() {
  return (
    <IndustryCapabilityTemplate
      industry="Transportation & Logistics"
      industrySlug="transportation-logistics"
      capability="Customer Intelligence"
      capabilitySlug="customer-intelligence"
      heroSubtitle="In freight and transit the relationship used to end at pickup and delivery — now the shipper, the broker, and the passenger expect Amazon-grade tracking, proactive notice when plans change, and a reason to stay. We help carriers, 3PLs, and operators understand their customers deeply enough to protect retention and win the next award."
      heroImage="/images/industries/people-commute.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Service is a commodity until the customer can feel the difference. Data is how they feel it.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "Shippers and passengers now benchmark every carrier against the parcel and rideshare experiences they get as consumers: a live ETA, a heads-up before something slips, a self-service portal that actually answers the question. Most freight and transit operators can't meet that bar because the customer's data lives in the TMS, the CRM, the tracking tool, and the claims queue — never in one place, never as a person.",
          "We unify those signals into one customer view and put it to work: segmentation that separates the shippers worth defending from the ones bleeding margin, churn and demand models that flag an account before the volume walks, and dynamic ETA and notification programs that turn tracking into a reason to renew. The same intelligence that keeps a passenger loyal keeps a lane award from going to the next bid.",
        ],
      }}
      offeringsHeading="How we build customer intelligence for transportation and logistics."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Customer Data Platform",
          description:
            "Unify TMS, CRM, tracking, and claims data into one trusted view of each shipper, broker, and rider.",
          href: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Personalization Strategy",
          description:
            "Tailor portals, notifications, and service tiers to how each account actually ships or travels.",
          href: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Behavioral Segmentation",
          description:
            "Separate the high-value, defensible accounts from commodity volume so you invest service where it earns loyalty.",
          href: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Predictive Analytics & Modeling",
          description:
            "Model churn, demand, and lifetime value to see a shipper drifting or a lane softening before the volume moves.",
          href: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Journey Analytics & Optimization",
          description:
            "Map the shipper and passenger journey from quote to POD to fix the friction that quietly loses the renewal.",
          href: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
        {
          title: "Voice of Customer",
          description:
            "Turn claims, ratings, and service tickets into a live signal on where reliability and experience are slipping.",
          href: "/solutions/customer-intelligence/voice-of-customer",
        },
      ]}
      stats={[
        { number: "15–25%", label: "reduction in churn among high-value shipper accounts" },
        { number: "30%+", label: "drop in track-and-trace calls after proactive ETA notifications" },
        { number: "45 days", label: "earlier warning on at-risk accounts before volume moves" },
      ]}
      casesHeading="Customer intelligence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Transportation & Logistics leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Customer Intelligence practice",
        href: "/solutions/data-driven-customer-intelligence",
      }}
      cta={{
        heading: "Give shippers and riders a reason to stay.",
        body: "Tell us where the relationship frays — a churning account, a track-and-trace flood, a renewal you lost. Our Transportation & Logistics team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
