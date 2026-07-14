
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function BrandStrategy() {
  return (
    <CapabilityHubTemplate
      hubName="Brand Strategy"
      slug="brand-strategy"
      insightsTopic="growth"
      heroSubtitle="Build brands that drive business results. We help companies develop distinctive brand positioning, identity systems, and go-to-market strategies that create lasting competitive advantage."
      heroImage="/images/capabilities/cap-data-bars.jpg"
      heroFocal="60% 50%"
      experienceStats={[
        { number: "200+", label: "brand strategy engagements across B2B and B2C sectors" },
        { number: "35%", label: "average increase in brand awareness within 12 months" },
        { number: "2.5x", label: "typical improvement in brand consideration scores" },
        { number: "Senior-led", label: "Every engagement led by a partner with deep practitioner experience" },
      ]}
      ambitions={[
        {
          title: "Sharpen the brand strategy thesis",
          description:
            "Make clear, evidence-based choices about where brand strategy can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn brand strategy ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every brand strategy touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument brand strategy so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernize the brand strategy tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect brand strategy investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Brand Positioning",
          description:
            "Define a distinctive market position that resonates with customers and differentiates from competitors. Build positioning platforms that guide all brand decisions.",
          href: "/capabilities/growth-marketing-sales/brand-strategy/brand-positioning",
        },
        {
          title: "Visual Identity",
          description:
            "Create identity systems that bring your brand to life. Logo, color, typography, imagery—every element designed to reinforce your positioning.",
          href: "/capabilities/growth-marketing-sales/brand-strategy/visual-identity",
        },
        {
          title: "Messaging & Voice",
          description:
            "Develop messaging frameworks and brand voice guidelines that ensure consistency across every touchpoint and communication channel.",
          href: "/capabilities/growth-marketing-sales/brand-strategy/messaging-and-voice",
        },
        {
          title: "Brand Architecture",
          description:
            "Organize your portfolio of brands, products, and services. Create clear hierarchies and relationships that maximize brand equity.",
          href: "/capabilities/growth-marketing-sales/brand-strategy/brand-architecture",
        },
        {
          title: "Customer Research",
          description:
            "Understand what drives customer decisions through qualitative and quantitative research. Build segmentation and persona frameworks.",
          href: "/capabilities/growth-marketing-sales/brand-strategy/customer-research",
        },
        {
          title: "Brand Activation",
          description:
            "Bring your brand to life across marketing, sales, and customer experience. Build launch plans and ongoing activation programs.",
          href: "/capabilities/growth-marketing-sales/brand-strategy/brand-activation",
        },
      ]}
      ambitionsCTAText="Talk to us about your Brand Strategy ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Discover the opportunity",
          body: "We start with deep customer research and competitive analysis. We uncover what your target audience truly values, where competitors are vulnerable, and where your brand can own a distinctive position.",
        },
        {
          step: "02",
          title: "Define the strategy",
          body: "We develop a brand platform that articulates your positioning, personality, and promise. We create messaging frameworks and visual identity systems that bring your strategy to life consistently.",
        },
        {
          step: "03",
          title: "Activate and measure",
          body: "We build activation plans that deploy your brand across every touchpoint. We establish measurement frameworks to track brand health and optimize performance over time.",
        },
      ]}
      featuredCases={[
        { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", industry: "Retail", metric: "85%", image: "/images/capabilities/cap-retail-apparel.jpg" },
        { slug: "media-streaming-launch", title: "Launching a streaming service that won 750K subscribers", industry: "Technology, Media & Telecom", metric: "750K", image: "/images/industries/tech-datacenter.jpg" },
        { slug: "retail-loyalty-transformation", title: "Turning a stale loyalty program into 45% more spend", industry: "Retail", metric: "45%", image: "/images/capabilities/cap-retail-data.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/operations", name: "Operations" },
      ]}
      ctaLeadName="Talk to our Brand Strategy lead"
    />
  );
}
