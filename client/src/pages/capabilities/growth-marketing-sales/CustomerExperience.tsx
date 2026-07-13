
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function CustomerExperience() {
  return (
    <CapabilityHubTemplate
      hubName="Customer Experience"
      slug="customer-experience"
      insightsTopic="growth"
      heroSubtitle="Design and deliver exceptional customer experiences. We help you build CX capabilities that drive loyalty, reduce churn, and create sustainable competitive advantage."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      heroFocal="45% 50%"
      experienceStats={[
        { number: "250+", label: "customer experience transformations delivered" },
        { number: "40%", label: "average improvement in customer satisfaction" },
        { number: "25%", label: "typical reduction in customer churn" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      ambitions={[
        {
          title: "Sharpen the customer experience thesis",
          description:
            "Make clear, evidence-based choices about where customer experience can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn customer experience ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every customer experience touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument customer experience so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the customer experience tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect customer experience investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "CX Strategy",
          description:
            "Define your customer experience vision and strategy. Align CX investments with business objectives and competitive positioning.",
          href: "/capabilities/growth-marketing-sales/customer-experience/cx-strategy",
        },
        {
          title: "Journey Design",
          description:
            "Design end-to-end customer journeys that deliver value. Optimize touchpoints and eliminate friction across channels.",
          href: "/capabilities/growth-marketing-sales/customer-experience/journey-design",
        },
        {
          title: "Service Design",
          description:
            "Design service experiences that delight customers. Create service blueprints that align front-stage and back-stage operations.",
          href: "/capabilities/growth-marketing-sales/customer-experience/service-design",
        },
        {
          title: "CX Measurement",
          description:
            "Build measurement systems that drive action. Implement NPS, CSAT, and other metrics with closed-loop feedback processes.",
          href: "/capabilities/growth-marketing-sales/customer-experience/cx-measurement",
        },
        {
          title: "Voice of Customer",
          description:
            "Capture and act on customer feedback at scale. Build VoC programs that surface insights and drive improvement.",
          href: "/capabilities/growth-marketing-sales/customer-experience/voice-of-customer",
        },
        {
          title: "CX Culture",
          description:
            "Build a customer-centric culture that sustains improvement. Develop employee engagement and empowerment programs.",
          href: "/capabilities/growth-marketing-sales/customer-experience/cx-culture",
        },
      ]}
      ambitionsCTAText="Talk to us about your Customer Experience ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Understand the journey",
          body: "We map customer journeys from the customer's perspective, identifying moments that matter and pain points that drive churn. We quantify the impact of experience gaps on business outcomes.",
        },
        {
          step: "02",
          title: "Design the experience",
          body: "We design target experiences that balance customer needs with operational feasibility. We prioritize improvements based on impact and effort, creating a roadmap for transformation.",
        },
        {
          step: "03",
          title: "Deliver and sustain",
          body: "We implement changes across people, process, and technology. We build measurement systems and governance structures that sustain improvement over time.",
        },
      ]}
      featuredCases={[
        { slug: "insurance-digital-distribution", title: "Turning a call-center insurer into a digital one", industry: "Insurance", metric: "50%", image: "/images/industries/fin-handshake-city.jpg" },
        { slug: "wealth-onboarding", title: "Cutting wealth onboarding from weeks to days", industry: "Financial Services", metric: "60%", image: "/images/industries/fin-handshake-city.jpg" },
        { slug: "insurance-claims-automation", title: "Settling straightforward claims in hours, not weeks", industry: "Insurance", metric: "60%", image: "/case-insurance-claims.399e5d4b.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Customer Experience lead"
    />
  );
}
