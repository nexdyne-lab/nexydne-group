// TODO: David — confirm Product Strategy & Design experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Product Strategy & Design hub.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function ProductStrategyDesign() {
  return (
    <CapabilityHubTemplate
      hubName="Product Strategy & Design"
      slug="product-strategy-design"
      insightsTopic="business"
      heroSubtitle="Build products users love. We combine strategic thinking with human-centered design to create experiences that win in the market — from vision to pixel-perfect interface."
      heroImage="/images/product-strategy-abstract.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        // TODO: confirm with practice lead before publish
        { number: "85+", label: "Products designed and launched across B2B, B2C, and marketplace models" },
        // TODO: confirm with practice lead before publish
        { number: "3.2x", label: "Average improvement in user engagement after redesign projects" },
        // TODO: confirm with practice lead before publish
        { number: "92%", label: "Of strategies achieve product-market fit within 12 months" },
      ]}
      ambitions={[
        {
          title: "Find product-market fit faster",
          description:
            "Cut through the noise to focus on what matters: building something customers will actually pay for. Disciplined hypothesis testing in place of months of internal debate.",
        },
        {
          title: "Redesign a product users love",
          description:
            "Turn a product that's stalled or confusing into one that converts. Research-led redesigns that lift activation, retention, and trial-to-paid in measurable ways.",
        },
        {
          title: "Build a real product strategy",
          description:
            "Replace the wish-list roadmap with a strategy tied to business goals — a clear point of view on where the product is going, what to ship, and what to cut.",
        },
        {
          title: "Stand up a design system",
          description:
            "Create the components, tokens, and patterns that let your team ship consistent, on-brand experiences fast — without re-deciding every button along the way.",
        },
        {
          title: "Pressure-test before you build",
          description:
            "Validate concepts with prototypes and real users before development burns capital. Fail fast, learn faster, and ship the version that actually works.",
        },
        {
          title: "Bring strategy and design together",
          description:
            "End the strategy-document-vs-design-deliverable handoff. One integrated team takes the business problem all the way through to the working interface.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Product Strategy & Design ambition →"
      howWeCanHelp={[
        {
          title: "Product Vision & Roadmap",
          description:
            "Define where your product is going and how it will get there. We create product strategies that align with business goals and market opportunities.",
          href: "/capabilities/business-building/product-strategy-design/product-vision-roadmap",
        },
        {
          title: "User Research & Insights",
          description:
            "Understand what your customers actually need — not what they say they want. Deep qualitative and quantitative research that reveals unmet needs and opportunities.",
          href: "/capabilities/business-building/product-strategy-design/user-research-insights",
        },
        {
          title: "UX/UI Design",
          description:
            "Design experiences that users love and that drive business results. From wireframes to high-fidelity prototypes, we create interfaces that convert.",
          href: "/capabilities/business-building/product-strategy-design/ux-ui-design",
        },
        {
          title: "Product-Market Fit Analysis",
          description:
            "Know whether your product truly fits the market before scaling. We assess fit across value proposition, target segment, and competitive positioning.",
          href: "/capabilities/business-building/product-strategy-design/product-market-fit-analysis",
        },
        {
          title: "Feature Prioritization",
          description:
            "Build the right things in the right order. Our prioritization frameworks balance customer value, business impact, and development effort.",
          href: "/capabilities/business-building/product-strategy-design/feature-prioritization",
        },
        {
          title: "Design System Development",
          description:
            "Create consistent, scalable design foundations. Component libraries and design tokens that accelerate development and ensure brand consistency.",
          href: "/capabilities/business-building/product-strategy-design/design-system-development",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Discover & define",
          body: "We start by understanding your business, your customers, and your market. Research, interviews, and analysis that reveal the real opportunities and constraints.",
        },
        {
          step: "02",
          title: "Design & validate",
          body: "We create concepts, prototypes, and designs — then test them with real users before you invest in development. Fail fast, learn faster.",
        },
        {
          step: "03",
          title: "Deliver & iterate",
          body: "We work with your team to ship the product, then help you establish the processes for continuous improvement based on real user feedback.",
        },
      ]}
      featuredCases={[
        {
          slug: "consulting-saas",
          title: "Professional Services Firm Builds SaaS Product",
          industry: "Professional Services · Business Building",
          metric: "$3.2M",
          image: "/images/capabilities/cap-venturing.jpg",
        },
        {
          slug: "manufacturer-dtc",
          title: "Manufacturer Creates Direct-to-Consumer Channel",
          industry: "Manufacturing · Business Building",
          metric: "3x",
          image: "/images/capabilities/cap-lightbulb-idea.jpg",
        },
        {
          slug: "ecommerce-platform-launch",
          title: "Industrial Distributor Launches B2B E-commerce Platform",
          industry: "Industrial Distribution · Business Building",
          metric: "47%",
          image: "/images/capabilities/cap-celebrate.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/growth-marketing-sales", name: "Growth, Marketing & Sales" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Product Strategy & Design lead"
    />
  );
}
