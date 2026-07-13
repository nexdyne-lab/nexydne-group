import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "insurance-claims-processing",
    title: "Accelerating insurance claims processing with intelligent automation",
    industry: "Financial Services",
    metric: "85%",
    image: "/case-insurance-office.f039a4a1.jpg",
  },
  {
    slug: "bank-process-automation",
    title: "How RPA eliminated 10,000+ hours of manual work at a major bank",
    industry: "Financial Services",
    metric: "10K+ hrs",
    image: "/images/industries/advisor-charts.jpg",
  },
  {
    slug: "fintech-payment-automation",
    title: "Building a scalable payment processing system for a fintech startup",
    industry: "Financial Services",
    metric: "100K+",
    image: "/images/industries/biz-team-bright.jpg",
  },
];

const related = [
  { name: "Risk & Resilience", href: "/industries/insurance/risk-resilience" },
  { name: "Data Transformation", href: "/industries/insurance/data-transformation" },
  { name: "Operations Excellence", href: "/industries/insurance/operations-excellence" },
];

export default function InsuranceCustomerIntelligence() {
  return (
    <IndustryCapabilityTemplate
      industry="Insurance"
      industrySlug="insurance"
      capability="Customer Intelligence"
      capabilitySlug="customer-intelligence"
      heroSubtitle="Most carriers only hear from a policyholder at renewal, at a claim, or when they cancel — three moments, years apart, mediated by an agent. That's a thin basis for retention in a market where a competitor's quote is one click away. We help insurers turn policy, claims, and interaction data into engagement, personalization, and cross-sell that lift retention and lifetime value across direct and agency channels."
      heroImage="/images/industries/advisor-charts.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Retention is an underwriting result — you just have to earn it before renewal.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "In insurance the customer is nearly invisible between transactions. A carrier writes the policy, then goes quiet until a renewal notice, a claim, or a cancellation — and by the time a policyholder is shopping, the relationship is already lost. Yet the economics are unforgiving: acquisition costs a multiple of retention, and a household with a home and two auto policies is worth far more than the sum of three monoline relationships nobody is managing as one.",
          "We help carriers act on the signals they already have. A unified policyholder view stitches policies, claims, quotes, and service contacts into one household; behavioral segmentation and predictive models flag non-renewal and cross-sell propensity before an agent could feel it; and personalization and journey work turn onboarding, claims, and renewals into moments that deepen loyalty — while giving agents the next-best-action they need to keep the book on the books.",
        ],
      }}
      offeringsHeading="How we build customer intelligence for insurers."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Customer Data Platform",
          description:
            "Unify policies, claims, quotes, and service contacts into one household view across direct and agency channels.",
          href: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Personalization Strategy",
          description:
            "Deliver relevant, compliant communications across app, portal, email, and agent so onboarding, renewals, and claims deepen the relationship.",
          href: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Behavioral Segmentation",
          description:
            "Segment on real coverage, life-event, and claims behavior — not zip and age — to target retention and cross-sell where it pays.",
          href: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Predictive Analytics & Modeling",
          description:
            "Model non-renewal, cross-sell propensity, and household lifetime value to act before a policyholder starts shopping the quote.",
          href: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Journey Analytics & Optimization",
          description:
            "Fix the friction in quote-to-bind, onboarding, and claims — the moments that quietly drive non-renewal and complaints.",
          href: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
        {
          title: "Voice of Customer",
          description:
            "Turn claims surveys, NPS, and service contacts into a live signal on which experiences win or lose the renewal.",
          href: "/solutions/customer-intelligence/voice-of-customer",
        },
      ]}
      stats={[
        { number: "10–20%", label: "reduction in non-renewal among high-value households" },
        { number: "25%+", label: "lift in cross-sell and multi-policy bundling from next-best-action" },
        { number: "2–3x", label: "return on targeted retention and personalization programs" },
      ]}
      casesHeading="Customer intelligence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Insurance leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Customer Intelligence practice",
        href: "/solutions/data-driven-customer-intelligence",
      }}
      cta={{
        heading: "Earn the renewal before the policyholder shops it.",
        body: "Tell us where the relationship leaks — a non-renewal spike, a monoline book that won't cross-sell, agents flying blind. Our Insurance team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
