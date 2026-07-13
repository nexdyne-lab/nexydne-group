
import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function RapidInnovationTesting() {
  return (
    <CapabilityHubTemplate
      hubName="Rapid Innovation & Testing"
      slug="rapid-innovation-testing"
      insightsTopic="business"
      heroSubtitle="Test and validate new growth initiatives with minimal risk using structured rapid prototyping, customer-discovery programs, and pilot frameworks designed for evidence-based go/no-go decisions."
      heroImage="/images/rapid-innovation-abstract.jpg"
      heroFocal="55% 50%"
      experienceStats={[
        { number: "80%", label: "Reduction in wasted investment by killing bad ideas early" },
        { number: "10-12 wk", label: "From initial concept to evidence-based go/no-go" },
        { number: "3-5x", label: "Innovation success rate vs. traditional product development" },
      ]}
      ambitions={[
        {
          title: "Test ideas before betting on them",
          description:
            "Replace big-bang launches with structured experiments that prove demand and feasibility before significant capital is committed — fail cheap, scale what wins.",
        },
        {
          title: "Run customer discovery that actually informs decisions",
          description:
            "Design interview programs and behavioral experiments that produce statistically meaningful evidence about real customer behavior — not survey opinions.",
        },
        {
          title: "Get a real signal from a pilot",
          description:
            "Structure pilots with control groups, success metrics, and feedback mechanisms so go/no-go decisions are based on data, not stakeholder vibes.",
        },
        {
          title: "Move fast without losing governance",
          description:
            "Install stage-gate frameworks that balance entrepreneurial speed with corporate accountability — clear evidence thresholds for each stage of investment.",
        },
        {
          title: "Build an innovation portfolio, not one bet",
          description:
            "Run multiple structured experiments in parallel so the company always has validated growth options ahead — instead of staking the year on one big idea.",
        },
        {
          title: "Make it OK to kill projects early",
          description:
            "Reframe terminations as wins. Establish the language, rituals, and metrics that reward learning and capital discipline over sunk-cost momentum.",
        },
      ]}
      ambitionsCTAText="Talk to us about your Rapid Innovation & Testing ambition →"
      howWeCanHelp={[
        {
          title: "Hypothesis Development",
          description:
            "We work with your team to articulate clear hypotheses about customer needs, solution viability, and business model sustainability. This phase identifies the riskiest assumptions that must be tested first.",
          href: "/capabilities/business-building/rapid-innovation-testing/hypothesis-development",
        },
        {
          title: "Rapid Prototyping",
          description:
            "We build and deploy minimum viable products designed to test specific hypotheses. Prototypes range from landing pages and mockups to functional applications, depending on what's required to generate valid evidence.",
          href: "/capabilities/business-building/rapid-innovation-testing/rapid-prototyping",
        },
        {
          title: "Market Validation",
          description:
            "We execute structured customer-discovery and pilot programs that test prototypes with real users in real contexts. This phase generates quantitative and qualitative evidence about demand, usability, and willingness to pay.",
          href: "/capabilities/business-building/rapid-innovation-testing/market-validation",
        },
        {
          title: "Decision Framework",
          description:
            "We synthesize learning into clear recommendations about whether to proceed, pivot, or terminate. This includes financial modeling, risk assessment, and roadmap development for validated opportunities.",
          href: "/capabilities/business-building/rapid-innovation-testing/decision-framework",
        },
        {
          title: "Innovation Stage-Gate Governance",
          description:
            "Design the portfolio review cadence, evidence standards, and funding gates that let your leadership team kill, hold, or scale experiments with confidence and consistency.",
          href: "/capabilities/business-building/rapid-innovation-testing/stage-gate-governance",
        },
        {
          title: "Scale-Up Transition Planning",
          description:
            "Bridge validated pilots into production — operating model, hiring plan, and integration with the core P&L — so winning experiments don't stall in the gap between proof and scale.",
          href: "/capabilities/business-building/rapid-innovation-testing/scale-up-transition",
        },
      ]}
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Hypothesize",
          body: "We work with your team to articulate clear, testable hypotheses about customer needs, solution viability, and business-model sustainability — and identify the riskiest assumptions to attack first.",
        },
        {
          step: "02",
          title: "Prototype & Validate",
          body: "We build the minimum thing that can generate valid evidence — landing pages, mockups, or functional MVPs — and run structured customer discovery and pilots to test it with real users in real contexts.",
        },
        {
          step: "03",
          title: "Decide",
          body: "We synthesize the learning into a clear go/pivot/terminate recommendation backed by financial modeling and risk assessment, plus the next-stage roadmap for whatever survives the gate.",
        },
      ]}
      featuredCases={[
        {
          slug: "healthcare-telehealth",
          title: "Healthcare Provider Launches Telehealth Venture",
          industry: "Healthcare · Business Building",
          metric: "10-12 wk",
          image: "/images/capabilities/cap-venturing.jpg",
        },
        {
          slug: "wealth-adjacent",
          title: "Financial Services Firm Enters Adjacent Market",
          industry: "Financial Services · Business Building",
          metric: "3-5x",
          image: "/images/capabilities/cap-lightbulb-idea.jpg",
        },
        {
          slug: "manufacturer-dtc",
          title: "Manufacturer Creates Direct-to-Consumer Channel",
          industry: "Manufacturing · Business Building",
          metric: "80%",
          image: "/images/capabilities/cap-celebrate.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/growth-marketing-sales", name: "Growth, Marketing & Sales" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Rapid Innovation & Testing lead"
    />
  );
}
