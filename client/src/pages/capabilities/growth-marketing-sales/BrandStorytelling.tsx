
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function BrandStorytelling() {
  return (
    <CapabilityHubTemplate
      hubName="Brand & Storytelling"
      slug="brand-storytelling"
      insightsTopic="growth"
      heroSubtitle="Translating complex innovation into clear market authority. We help digital leaders build brands that scale as fast as their technology."
      heroImage="/images/capabilities/cap-peacock.jpg"
      heroFocal="55% 45%"
      experienceStats={[
        { number: "End-to-end", label: "Brand & Storytelling engagements from diagnostic through execution" },
        { number: "Right-sized", label: "Sized for ambitious growing companies — not Fortune 500 only" },
        { number: "90 days", label: "From kickoff to first measurable outcome on most engagements" },
        { number: "Senior-led", label: "Every engagement led by a partner with 15+ years of practitioner experience" },
      ]}
      ambitions={[
        {
          title: "Sharpen the brand & storytelling thesis",
          description:
            "Make clear, evidence-based choices about where brand & storytelling can move the needle for the business — and where it cannot. Stop spreading effort across too many fronts.",
        },
        {
          title: "Translate intent into a measurable system",
          description:
            "Move beyond a deck. Build the operating model, KPIs, and cadence that turn brand & storytelling ambitions into quarterly outcomes you can actually defend.",
        },
        {
          title: "Reach the customer with one voice",
          description:
            "Align brand, product, and commercial teams around a single view of the customer so every brand & storytelling touchpoint reinforces the same value promise.",
        },
        {
          title: "Compound the data advantage",
          description:
            "Instrument brand & storytelling so each campaign, account, and decision feeds the next one — building a proprietary asset that competitors cannot copy from a vendor.",
        },
        {
          title: "Modernize the brand & storytelling tech and talent stack",
          description:
            "Invest in the platforms, partners, and people that match the next stage of the business — not the one you grew up in.",
        },
        {
          title: "Prove the ROI conversation in the boardroom",
          description:
            "Connect brand & storytelling investment to revenue, margin, and customer-equity outcomes the CEO and CFO will fund in the next planning cycle.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Positioning for the API Economy",
          description:
            'We help platforms define their role in the modern tech stack. By clarifying the interoperability and unique value of your technology, we move the conversation from "features" to "strategic advantage," enabling you to compete on value rather than price.',
          href: "/capabilities/growth-marketing-sales/brand-storytelling/positioning-for-the-api-economy",
        },
        {
          title: "Humanizing Complex Architectures",
          description:
            "B2B buyers are still people. We translate dense technical documentation into intuitive narratives and visual systems that reduce cognitive load, accelerating the sales cycle for enterprise software and complex SaaS solutions.",
          href: "/capabilities/growth-marketing-sales/brand-storytelling/humanizing-complex-architectures",
        },
        {
          title: "Brand Scalability Systems",
          description:
            "Hyper-growth breaks rigid brands. We build modular design systems and messaging frameworks that evolve with your product roadmap. This ensures consistency across rapid deployments, new market entries, and product expansions without accruing design debt.",
          href: "/capabilities/growth-marketing-sales/brand-storytelling/brand-scalability-systems",
        },
        {
          title: "Data-Driven Brand Performance",
          description:
            "We move branding beyond intuition. By implementing rigorous sentiment analysis and digital share-of-voice tracking, we quantify brand equity and correlate narrative adjustments directly with customer acquisition costs (CAC) and lifetime value (LTV).",
          href: "/capabilities/growth-marketing-sales/brand-storytelling/data-driven-brand-performance",
        },
        {
          title: "Narrative Engineering",
          description:
            "A structured methodology for extracting the core technical truth of a product and reconstructing it as a compelling market narrative. We align product truth with market need to create defensible positioning.",
          href: "/capabilities/growth-marketing-sales/brand-storytelling/narrative-engineering",
        },
        {
          title: "Digital Experience Design",
          description:
            "We design digital interfaces that embody the brand promise. From intuitive dashboards to immersive marketing sites, we ensure every pixel reinforces your strategic position.",
          href: "/capabilities/growth-marketing-sales/brand-storytelling/digital-experience-design",
        },
      ]}
      ambitionsCTAText="Talk to us about your Brand & Storytelling ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Diagnose what's actually blocking growth",
          body: "Build a clear picture of where the friction lives in your brand & storytelling system — across data, process, talent, and incentives — before prescribing solutions.",
        },
        {
          step: "02",
          title: "Design the next-stage operating model",
          body: "Translate strategic intent into the playbooks, governance, and capabilities that turn ambition into a repeatable brand & storytelling motion.",
        },
        {
          step: "03",
          title: "Embed and prove the system",
          body: "Deploy with your team, instrument the metrics that matter, and prove the impact in the first two reporting cycles — not the first two years.",
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
      ctaLeadName="Talk to our Brand & Storytelling lead"
    />
  );
}
