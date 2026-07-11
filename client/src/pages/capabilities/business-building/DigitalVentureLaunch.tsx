// TODO: David — confirm Digital Venture Launch experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Digital Venture Launch hub.

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
        // TODO: confirm with practice lead before publish
        { number: "40+", label: "Digital ventures launched with mid-market clients" },
        // TODO: confirm with practice lead before publish
        { number: "78%", label: "Of ventures profitable within 18 months" },
        // TODO: confirm with practice lead before publish
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
        {
          slug: "ecommerce-platform-launch",
          title: "Industrial Distributor Launches B2B E-commerce Platform",
          industry: "Industrial Distribution · Business Building",
          metric: "35%",
          image: "/images/capabilities/cap-venturing.jpg",
        },
        {
          slug: "healthcare-telehealth",
          title: "Healthcare Provider Launches Telehealth Venture",
          industry: "Healthcare · Business Building",
          metric: "5 Mo",
          image: "/images/capabilities/cap-lightbulb-idea.jpg",
        },
        {
          slug: "logistics-tech-spinoff",
          title: "Logistics Company Builds Technology Spin-Off",
          industry: "Logistics · Business Building",
          metric: "$28M",
          image: "/images/capabilities/cap-celebrate.jpg",
        },
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
