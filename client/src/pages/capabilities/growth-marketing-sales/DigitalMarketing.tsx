
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function DigitalMarketing() {
  return (
    <CapabilityHubTemplate
      hubName="Digital Marketing"
      slug="digital-marketing"
      insightsTopic="growth"
      heroSubtitle="Performance marketing, brand strategy, and analytics attribution for measurable growth. We leverage data analytics and AI to optimize spend, personalize messaging, and drive conversion."
      heroImage="/images/capabilities/cap-telescope.jpg"
      heroFocal="50% 50%"
      experienceStats={[
        { number: "300+", label: "digital marketing transformations delivered across industries" },
        { number: "45%", label: "average improvement in marketing ROI within 6 months" },
        { number: "3.2x", label: "typical increase in qualified lead generation" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      ambitions={[
        {
          title: "Sharpen the digital marketing thesis",
          description:
            "Make clear, evidence-based choices about where digital marketing can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn digital marketing ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every digital marketing touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument digital marketing so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernise the digital marketing tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect digital marketing investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Performance Marketing",
          description:
            "Drive higher sales productivity through optimized paid media, search, and programmatic advertising. Build multichannel strategies that maximize ROI and scale efficiently.",
          href: "/capabilities/growth-marketing-sales/digital-marketing/performance-marketing",
        },
        {
          title: "Marketing Analytics & Attribution",
          description:
            "Integrate customer data across channels to build a complete view of the customer journey. Develop attribution models that accurately measure marketing impact.",
          href: "/capabilities/growth-marketing-sales/digital-marketing/marketing-analytics-and-attribution",
        },
        {
          title: "Brand Strategy & Positioning",
          description:
            "Build distinctive brand positioning that resonates in digital channels. Create content strategies and creative frameworks that drive engagement and conversion.",
          href: "/capabilities/growth-marketing-sales/digital-marketing/brand-strategy-and-positioning",
        },
        {
          title: "Consumer Marketing Analytics",
          description:
            "Leverage advanced analytics to understand customer behavior, predict intent, and personalize experiences. Build segmentation and targeting capabilities.",
          href: "/capabilities/growth-marketing-sales/digital-marketing/consumer-marketing-analytics",
        },
        {
          title: "Marketing Technology",
          description:
            "Design and implement marketing technology stacks that enable automation, personalization, and measurement. Integrate tools for seamless data flow.",
          href: "/capabilities/growth-marketing-sales/digital-marketing/marketing-technology",
        },
        {
          title: "Digital Transformation",
          description:
            "Transform marketing operations for the digital age. Build agile processes, upskill teams, and establish governance for sustainable excellence.",
          href: "/capabilities/growth-marketing-sales/digital-marketing/digital-transformation",
        },
      ]}
      ambitionsCTAText="Talk to us about your Digital Marketing ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose and prioritize",
          body: "We start by assessing your current digital marketing capabilities, identifying gaps, and benchmarking against best-in-class. We prioritize initiatives based on impact and feasibility to build a clear roadmap.",
        },
        {
          step: "02",
          title: "Design and build",
          body: "We design the target operating model—processes, technology, organization, and governance. We build the capabilities needed to execute, from analytics infrastructure to creative operations.",
        },
        {
          step: "03",
          title: "Execute and optimize",
          body: "We help you launch and scale digital marketing programs, establishing measurement frameworks and optimization processes that drive continuous improvement.",
        },
      ]}
      featuredCases={[
        { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", industry: "Retail", metric: "85%", image: "/images/capabilities/cap-retail-apparel.jpg" },
        { slug: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", industry: "Retail", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg" },
        { slug: "bank-cross-sell", title: "Turning single accounts into real relationships", industry: "Financial Services", metric: "$24M", image: "/images/industries/fin-trader.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Digital Marketing lead"
    />
  );
}
