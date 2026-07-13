
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function DigitalVentureLaunch() {
  return (
    <CapabilityHubTemplate
      hubName="Digital Venture Launch"
      slug="digital-venture-launch"
      insightsTopic="business"
      heroSubtitle="We turn ambitious ideas into market-ready digital businesses. From concept to revenue in months, not years — with validated unit economics, a working MVP, and the team to keep it growing."
      heroImage="/images/digital-venture-abstract.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "40+", label: "Digital ventures launched with growing companies" },
        { number: "78%", label: "Of ventures profitable within 18 months" },
        { number: "4-6 Mo", label: "Validated concept to market launch" },
      ]}
      ambitions={[
        {
          title: "Validate before you build",
          description:
            "Test your idea with real customers before writing a line of code — customer interviews, landing-page tests, and rapid prototypes that prove demand and refine the value proposition.",
        },
        {
          title: "Build lean and fast",
          description:
            "Ship a working MVP in weeks, not months. Modern tools, AI-assisted development, and a focus on the features that matter most to first paying customers.",
        },
        {
          title: "Launch and learn",
          description:
            "Execute the go-to-market, acquire initial customers, and establish the metrics and processes you need to scale — then build the team to run it.",
        },
        {
          title: "Open new revenue streams",
          description:
            "Stand up new digital businesses alongside your core operation. Adjacent products, marketplace plays, and platform extensions that add growth without distracting the core P&L.",
        },
        {
          title: "Move at venture speed",
          description:
            "Skip the build-a-team-first hurdle. Our embedded venture pod runs end-to-end so you ship in months, not the years it would take through traditional product hiring.",
        },
        {
          title: "Kill bad ideas early",
          description:
            "Apply the discipline of a venture investor — clear evidence thresholds at each stage so you double down on what works and stop spending on what doesn't.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Digital Venture Launch ambition →"
      howWeCanHelp={[
        {
          title: "Opportunity Identification",
          description:
            "We analyze your market position, customer insights, and competitive landscape to identify high-potential venture opportunities aligned with your strategic assets.",
          href: "/capabilities/business-building/digital-venture-launch/opportunity-identification",
        },
        {
          title: "Concept Validation",
          description:
            "Before building anything, we test your idea with real customers. Rapid prototyping, customer interviews, and market experiments that prove demand before you invest.",
          href: "/capabilities/business-building/digital-venture-launch/concept-validation",
        },
        {
          title: "Business Model Design",
          description:
            "Define how your venture will make money. Unit economics, pricing strategy, and go-to-market approach designed for sustainable profitability.",
          href: "/capabilities/business-building/digital-venture-launch/business-model-design",
        },
        {
          title: "MVP Development",
          description:
            "Our engineering team builds your minimum viable product — not a demo, but a real product that customers can use and pay for.",
          href: "/capabilities/business-building/digital-venture-launch/mvp-development",
        },
        {
          title: "Launch Execution",
          description:
            "From marketing campaigns to sales enablement, we execute your go-to-market strategy to acquire your first paying customers.",
          href: "/capabilities/business-building/digital-venture-launch/launch-execution",
        },
        {
          title: "Team & Process Setup",
          description:
            "We help you build the team and establish the processes needed to run and scale the venture independently.",
          href: "/capabilities/business-building/digital-venture-launch/team-process-setup",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Validate before you build",
          body: "We test your idea with real customers before writing a single line of code. Customer interviews, landing page tests, and rapid prototypes that prove demand and refine the value proposition.",
        },
        {
          step: "02",
          title: "Build lean and fast",
          body: "Our engineering team builds your MVP using modern tools and AI-assisted development. We ship working software in weeks, not months — focused on the features that matter most.",
        },
        {
          step: "03",
          title: "Launch and learn",
          body: "We execute your go-to-market strategy, acquire initial customers, and establish the metrics and processes you need to scale. Then we help you build the team to run it.",
        },
      ]}
      featuredCases={[
        { slug: "fashion-retail-digital-transformation", title: "Growing a fashion retailer's online sales by 85%", industry: "Retail", metric: "85%", image: "/images/capabilities/cap-retail-apparel.jpg" },
        { slug: "healthcare-transformation", title: "Unifying scattered patient data to improve outcomes", industry: "Healthcare", metric: "35%", image: "/case-medical-collaboration.9602cc8c.jpg" },
        { slug: "industrial-connected-products", title: "Building a $30M services business on installed machines", industry: "Manufacturing", metric: "$30M", image: "/images/capabilities/cap-battery-factory.jpg" },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/growth-marketing-sales", name: "Growth, Marketing & Sales" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Digital Venture Launch lead"
    />
  );
}
