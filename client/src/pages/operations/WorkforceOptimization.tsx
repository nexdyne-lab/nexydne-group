// TODO: David — confirm Workforce Optimization experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Workforce Optimization hub.
// TODO: confirm hero image asset — using fallback Unsplash URL until /images/workforce-optimization-abstract.jpg lands.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function WorkforceOptimization() {
  return (
    <CapabilityHubTemplate
      hubName="Workforce Optimization"
      slug="operations/workforce-optimization"
      heroSubtitle="Empower your team with the right skills and tools. Design workforce strategies, training programs, and performance management systems that drive operational excellence."
      heroImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2400"
      experienceStats={[
        { number: "60+", label: "Workforce transformation programs across industries" },
        { number: "20-35%", label: "Typical improvement in labor productivity" },
        { number: "40-50%", label: "Reduction in employee turnover through engagement programs" },
        // TODO: confirm with practice lead before publish
        { number: "Frontline-up", label: "Capability building from operator to leader" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Plan capacity with precision",
          description:
            "Match workforce supply to demand at the SKU, shift, and skill level — eliminating both overtime burnout and idle-time waste in operations and back office.",
        },
        {
          title: "Build the skills the future demands",
          description:
            "Map current capabilities against future-of-work requirements — then build targeted academies, role redesigns, and partnerships that close the gap fast.",
        },
        {
          title: "Win the retention war",
          description:
            "Turn engagement, manager quality, and career pathing into measurable business levers. Cut regrettable attrition and the recruiting tax that comes with it.",
        },
        {
          title: "Lift productivity per FTE",
          description:
            "Combine work design, automation, and performance management to raise output per employee — without burning out the people doing the work.",
        },
        {
          title: "Optimize scheduling and labor mix",
          description:
            "Deploy AI-powered scheduling, flex labor pools, and the right balance of full-time, part-time, and contingent workers for your operating model.",
        },
        {
          title: "Make change actually stick",
          description:
            "Most operational change fails on the people side. Embed change management, frontline coaching, and reinforcement so transformations deliver the value on the slide.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Workforce Planning",
          description:
            "Align workforce capacity with business needs. Demand forecasting, skills mapping, and strategic workforce planning that ensures you have the right people in the right roles.",
          href: "/capabilities/operations/workforce-optimization/workforce-planning",
        },
        {
          title: "Capability Building",
          description:
            "Develop the skills your operations need. Training program design, competency frameworks, and learning pathways that accelerate skill development.",
          href: "/capabilities/operations/workforce-optimization/capability-building",
        },
        {
          title: "Performance Management",
          description:
            "Drive accountability and continuous improvement. KPI frameworks, performance reviews, and incentive design that align individual and organizational goals.",
          href: "/capabilities/operations/workforce-optimization/performance-management",
        },
        {
          title: "Labor Productivity",
          description:
            "Optimize labor utilization and efficiency. Work measurement, scheduling optimization, and productivity improvement programs that maximize output.",
          href: "/capabilities/operations/workforce-optimization/labor-productivity",
        },
        {
          title: "Change Management",
          description:
            "Enable successful transformation. Communication, engagement, and adoption strategies that ensure operational changes stick.",
          href: "/capabilities/operations/workforce-optimization/change-management",
        },
        {
          title: "Organizational Design",
          description:
            "Structure your organization for operational excellence. Roles, responsibilities, and reporting relationships that enable effective execution.",
          href: "/capabilities/operations/workforce-optimization/organizational-design",
        },
      ]}
      ambitionsCTAText="Talk to us about your Workforce Optimization ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Assess capabilities",
          body: "We analyze your current workforce capabilities, gaps, and opportunities. We benchmark against best practices and quantify the productivity opportunity to build a compelling case for investment.",
        },
        {
          step: "02",
          title: "Design the strategy",
          body: "We develop workforce strategies aligned with operational objectives. We define target capabilities, create development roadmaps, and design performance management systems that drive accountability.",
        },
        {
          step: "03",
          title: "Build & sustain",
          body: "We implement training, development, and engagement programs while building internal capabilities. We create sustainable systems that continue to develop talent and drive improvement over time.",
        },
      ]}
      featuredCases={[
        {
          slug: "consulting-knowledge-management",
          title: "Consulting Firm Builds AI-Powered Knowledge Platform",
          industry: "Professional Services · Operations",
          metric: "3x",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
        },
        {
          slug: "healthcare-patient-engagement",
          title: "Healthcare Network Boosts Patient Engagement Through Digital Tools",
          industry: "Healthcare · Operations",
          metric: "48%",
          image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1600&q=80",
        },
        {
          slug: "wealth-management-automation",
          title: "Wealth Manager Automates Onboarding and Client Servicing",
          industry: "Financial Services · Operations",
          metric: "55%",
          image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600&q=80",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Workforce Optimization lead"
    />
  );
}
