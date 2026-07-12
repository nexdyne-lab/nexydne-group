import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function JourneyAnalyticsOptimization() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · CUSTOMER INTELLIGENCE · JOURNEY ANALYTICS & OPTIMIZATION"
      title="Journey Analytics & Optimization"
      subtitle="Most journey maps describe the journey the brand intends. We rebuild the journey from the event data, quantify the friction in revenue terms, and run the test program that turns the backlog into compounding wins."
      heroImage="/images/insight-marketing-operations.jpg"
      heroFocal="60% 50%"
      seoTitle="Journey Analytics & Optimization"
      seoDescription="Map and optimize end-to-end customer journeys — quantify friction, prioritize fixes by revenue impact, and run the A/B test program that compounds the gain."
      canonical="/solutions/customer-intelligence/journey-analytics-optimization"
      perspective={{
        heading:
          "Map the journey that runs — not the one the workshop drew.",
        image: "/images/business-strategy-abstract.jpg",
        paragraphs: [
          "Most journey maps we are handed describe the journey leadership intended. They are clean, they are defensible in a steering committee, and they are quietly disconnected from the journey customers are actually running. The conversion data, the call-volume data, and the support-ticket data tell a different story — one with three failure points the workshop never named.",
          "Journey analytics rebuilds the map from the event stream and quantifies the friction in dollars, not in adjectives. From there the optimization conversation has fuel: a prioritized backlog, an A/B test framework, and a governance cadence that turns one-off wins into a continuous improvement program. The teams that get this right do not redesign journeys every two years — they optimize them every quarter.",
        ],
      }}
      deliverHeading="A five-phase approach from journey map to continuous optimization."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Most engagements run twelve to eighteen weeks from mapping to the first wave of test wins, with monitoring and cadence extending into a quarterly operating rhythm."
      phases={[
        {
          name: "Journey mapping (multi-channel)",
          description:
            "Most journey maps we inherit are workshop output — sticky notes turned into Visio, accurate to the channel that ran the workshop, blind to the rest. We rebuild the map from the data: web, app, email, paid, contact-center, retail, and product-usage events stitched at customer level into the actual sequence of interactions, not the one the deck described.",
        },
        {
          name: "Friction analysis and quantification",
          description:
            "Every journey leaks revenue at specific moments. We instrument each step on conversion, drop-off, time-to-next, repeat-contact, and downstream value, then quantify the cost of friction — in lost revenue, increased contact-center load, and expansion suppression. The friction inventory is ranked, not described, because the optimization conversation needs dollars.",
        },
        {
          name: "Opportunity prioritization",
          description:
            "From the friction inventory we build a portfolio of optimization candidates — UX changes, content rewrites, automation moves, channel re-routing, policy adjustments — each scored on revenue impact, implementation complexity, and feasibility against the existing tech estate. The output is a defensible backlog the product, marketing, and operations teams can fund together.",
        },
        {
          name: "A/B testing and implementation",
          description:
            "We design the test framework that turns the backlog into evidence: hypothesis, primary and guardrail metrics, sample-size logic, holdout management, and the reporting cadence the steering committee will read. Wins are operationalized into the journey, losses are documented so the team learns, and the framework outlives the engagement.",
        },
        {
          name: "Continuous journey monitoring",
          description:
            "Customer journeys are not static. New channels launch, legacy steps drift, competitors raise the bar, and what was friction-free six months ago suddenly leaks. We stand up the live journey-performance dashboard and the governance cadence — quarterly review, drift alerts, re-prioritization triggers — that keeps the program optimizing instead of expiring.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Complete journey map (multi-channel)",
          description:
            "Data-driven, customer-level journey map stitched across web, app, email, paid, contact-center, retail, and product-usage events — replacing the workshop artifact.",
        },
        {
          name: "Friction quantification report",
          description:
            "Step-by-step inventory of journey friction with revenue cost, contact-center load, and downstream value impact — ranked, sourced, and defensible.",
        },
        {
          name: "Prioritized optimization backlog",
          description:
            "Portfolio of UX, content, automation, and policy candidates scored on revenue impact, implementation complexity, and tech-estate feasibility.",
        },
        {
          name: "A/B test framework",
          description:
            "Test design playbook covering hypothesis structure, primary and guardrail metrics, sample sizing, holdout logic, and the reporting cadence the steering committee reads.",
        },
        {
          name: "Journey performance dashboard",
          description:
            "Live, role-specific dashboard showing journey-level KPIs, friction drift, and test-program throughput — the surface product, marketing, and operations meet on.",
        },
        {
          name: "Governance and cadence model",
          description:
            "Operating model covering quarterly review, drift alerts, re-prioritization triggers, and the cross-functional roles that keep the program compounding.",
        },
      ]}
      outcome={{
        heading:
          "Programs that move from one-off journey redesigns to a quarterly optimization cadence typically compound 15 to 25 percent revenue gain on the priority journey within twelve months.",
        body: "The economics work because the discipline survives the engagement. We do not hand off a journey deck and walk away — we leave a test framework, a dashboard, and the operating cadence that keeps the gains compounding instead of decaying.",
      }}
      casesHeading="When the friction is quantified, the backlog gets funded."
      cases={[
        {
          industry: "Travel and Hospitality",
          title:
            "Booking-journey optimization recovers 18 percent of cart abandonment within two quarters",
          description:
            "A global hotel brand's booking funnel was leaking at three specific moments — none of which the existing journey deck identified. We rebuilt the journey from event data, quantified each friction point in lost revenue, and ran a six-test program against the top three. Cart abandonment recovery moved 18 percent on flat traffic, with the test framework continuing to ship two wins per quarter after handover.",
          link: "/cases/hospitality-booking-journey-optimization",
        },
        {
          industry: "Telecommunications",
          title:
            "Service-activation friction redesign cuts repeat contact-center calls by 27 percent",
          description:
            "A national telecom carrier's new-customer activation journey was generating an avoidable 1.4 calls per activation to the contact center. Journey analytics traced 73 percent of those calls to two specific friction points in the digital flow. The redesign and a four-test program cut repeat calls 27 percent within two quarters and is the primary contributor to the digital-channel cost-to-serve target for the year.",
          link: "/cases/telecom-activation-journey-redesign",
        },
      ]}
      siblingsHeading="Sibling offerings inside this cluster."
      siblings={[
        {
          title: "Customer Journey Map",
          link: "/solutions/customer-intelligence/customer-journey-map",
        },
        {
          title: "Personalization Strategy",
          link: "/solutions/customer-intelligence/personalization-strategy",
        },
        {
          title: "Voice of Customer",
          link: "/solutions/customer-intelligence/voice-of-customer",
        },
        {
          title: "Behavioral Segmentation",
          link: "/solutions/customer-intelligence/behavioral-segmentation",
        },
        {
          title: "Customer Insights",
          link: "/solutions/customer-intelligence/customer-insights",
        },
      ]}
      cta={{
        heading:
          "Bring our journey-analytics team into your next experience-strategy conversation.",
        body: "We work with leaders who want their journey backlog funded on evidence, not anecdote. Quantified friction is how that conversation starts.",
        industries: [
          { value: "manufacturing", label: "Manufacturing" },
          { value: "professional-services", label: "Professional Services" },
          { value: "technology", label: "Technology" },
          { value: "healthcare", label: "Healthcare" },
          { value: "financial-services", label: "Financial Services" },
          { value: "retail", label: "Retail & Consumer" },
          { value: "other", label: "Other" },
        ],
      }}
    />
  );
}
