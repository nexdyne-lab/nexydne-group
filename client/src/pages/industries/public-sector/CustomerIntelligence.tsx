import IndustryCapabilityTemplate from "@/components/IndustryCapabilityTemplate";

const cases = [
  {
    slug: "city-digital-services",
    title: "Making everyday services simple for a county's residents",
    industry: "Public Sector",
    metric: "40%",
    image: "/images/industries/city-digital.jpg",
  },
  {
    slug: "smart-city-platform",
    title: "Getting traffic moving again for a growing city",
    industry: "Public Sector",
    metric: "30%",
    image: "/images/industries/transport-traffic.jpg",
  },
  {
    slug: "government-benefits-modernization",
    title: "Getting benefits to residents weeks sooner at a county agency",
    industry: "Public Sector",
    metric: "50%",
    image: "/images/cases/government-benefits-modernization-hero.jpg",
  },
];

const related = [
  { name: "Operations Excellence", href: "/industries/public-sector/operations-excellence" },
  { name: "Data Transformation", href: "/industries/public-sector/data-transformation" },
  { name: "Risk & Resilience", href: "/industries/public-sector/risk-resilience" },
];

export default function PublicSectorCustomerIntelligence() {
  return (
    <IndustryCapabilityTemplate
      industry="Public Sector"
      industrySlug="public-sector"
      capability="Customer Intelligence"
      capabilitySlug="customer-intelligence"
      heroSubtitle="A resident does not think in agencies — they think in life events: a new baby, a lost job, a move, a permit. Yet most governments meet them with a dozen disconnected portals and no shared memory. We help federal, state, and local agencies build one respectful, accessible view of the constituent, and turn it into digital services people can actually finish on their own."
      heroImage="/images/industries/people-commute.jpg"
      heroFocal="60% 50%"
      perspective={{
        heading: "Every agency holds a piece of the resident. None of them holds the person.",
        image: "/images/insight-data-culture.jpg",
        paragraphs: [
          "The same family shows up in your benefits system, your housing office, your health program, and your tax rolls — as four different records that never reconcile. So residents re-prove who they are at every door, the hardest-to-reach never make it through, and staff spend their day re-collecting information the government already had. The relationship is real; the data just doesn't behave like it.",
          "We help you build a governed, privacy-respecting view of the constituent and design the digital services around it: self-service that people can complete without a phone call, journeys mapped to real life events rather than org charts, and analytics that show which communities are being served and which are being left behind. Done right, self-service adoption goes up, trust goes up, and equitable access stops being a slogan and starts being measurable.",
        ],
      }}
      offeringsHeading="How we build customer intelligence for the public sector."
      offeringsIntro="Each capability is a working system, delivered by the team that will help you run it."
      offerings={[
        {
          title: "Customer Data Platform",
          description:
            "Resolve the resident across benefits, licensing, health, and tax into one governed, consent-aware record — without another surveillance database.",
          href: "/solutions/customer-intelligence/customer-data-platform",
        },
        {
          title: "Journey Analytics & Optimization",
          description:
            "Map the real path through a life event — apply, renew, appeal — and fix the drop-off points where residents abandon and call the center instead.",
          href: "/solutions/customer-intelligence/journey-analytics-optimization",
        },
        {
          title: "Behavioral Segmentation",
          description:
            "Understand which communities use which channels so outreach and service design reach the people a mailer never will.",
          href: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Personalization Strategy",
          description:
            "Guide each resident to the benefits and services they are actually eligible for — proactively, in plain language, in their channel.",
          href: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Predictive Analytics & Modeling",
          description:
            "Anticipate demand surges and identify eligible-but-unenrolled populations so programs reach people before a crisis does.",
          href: "/solutions/customer-intelligence/predictive-analytics-modeling",
        },
        {
          title: "Voice of Customer",
          description:
            "Turn 311 calls, service feedback, and complaints into a live signal on where the constituent experience is failing.",
          href: "/solutions/customer-intelligence/voice-of-customer",
        },
      ]}
      stats={[
        { number: "One resident view", label: "across agencies, instead of a record in every silo" },
        { number: "Self-service", label: "more constituents finishing online, fewer forced into the call queue" },
        { number: "Equitable access", label: "service gaps made visible by community, not left to assumption" },
      ]}
      casesHeading="Customer intelligence, proved in outcomes."
      cases={cases}
      relatedHeading="Adjacent work for Public Sector leaders."
      related={related}
      generalPractice={{
        label: "Explore our firm-wide Customer Intelligence practice",
        href: "/solutions/data-driven-customer-intelligence",
      }}
      cta={{
        heading: "Serve the resident, not the org chart.",
        body: "Tell us where the constituent experience breaks down — a portal, a life event, a program with low uptake. Our Public Sector team will read your note and come back within two business days with a concrete first move, not a sales pitch.",
      }}
    />
  );
}
