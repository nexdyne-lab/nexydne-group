import SolutionCat6Template from "@/components/SolutionCat6Template";

export default function IntelligentAutomationDesign() {
  return (
    <SolutionCat6Template
      eyebrow="SOLUTION · PROCESS OPTIMIZATION · INTELLIGENT AUTOMATION DESIGN"
      title="Intelligent Automation Design"
      subtitle="Most enterprise automation programs stall because they were sold a single tool for a multi-pattern problem. We design the architecture — RPA, BPM, ML, and human-in-the-loop combined — and the governance model that lets it scale past the pilot."
      heroImage="/images/insight-automation.jpg"
      heroFocal="70% 50%"
      seoTitle="Intelligent Automation Design"
      seoDescription="Design enterprise automation programs that combine RPA, BPM, ML, and human-in-the-loop into a governed, scalable operating model."
      canonical="/solutions/process-optimization/intelligent-automation-design"
      perspective={{
        heading:
          "Automation is an architecture problem. Treat it like one and the program scales.",
        image: "/images/devops-automation-hub-abstract.jpg",
        paragraphs: [
          "The automation conversations that hit a wall almost always share the same pattern: a tool was selected before the problem was sized, and the program is now bending real workflows to fit the tool's strengths. Pure-RPA shops hit a ceiling when the work turns judgmental. Pure-ML programs stall when the rules are stable but the integration is brittle. The leaders who get past the ceiling treat automation as an architecture decision — multi-pattern, governed, observable.",
          "We design the architecture and the operating model that makes it stick. RPA, BPM, ML, and human-in-the-loop are not competing categories on a Gartner quadrant — they are components in a system, and the design decision is which combination earns its keep on each opportunity. The governance, the controls, the CoE charter, and the benefits discipline come with it, because at scale the program is only as good as the controls behind it.",
        ],
      }}
      deliverHeading="A five-phase approach from opportunity to scaled operating model."
      deliverIntro="Each phase is timeboxed and produces a tangible artifact. Strategy and design typically run ten to sixteen weeks; the rollout phase extends through the first two waves of production automations."
      phases={[
        {
          name: "Opportunity assessment",
          description:
            "We start by inventorying candidate processes across the enterprise — not as a wish list, but as a triaged portfolio. Each candidate is sized on annualized labor cost, exception rate, error impact, and downstream system effects, and screened for the automation pattern most likely to win.",
        },
        {
          name: "Automation pattern selection",
          description:
            "Most enterprise automation programs fail because they default to a single technology for problems that needed BPM, ML, or a combination. We map each prioritized opportunity to the right pattern — pattern fit drives technology selection, not the reverse.",
        },
        {
          name: "Hybrid orchestration design",
          description:
            "Real automation is rarely one tool — it is RPA bots feeding ML models, BPM platforms routing exceptions to humans, agents calling APIs across the ERP and CRM. We design the orchestration layer that makes those components behave as one system.",
        },
        {
          name: "Governance & control framework",
          description:
            "Automation at scale is a controls problem before it is a tooling problem. We stand up the governance model — bot identity, segregation of duties, change management, audit logging, and model risk controls — so risk and audit see the same surface engineers do.",
        },
        {
          name: "Scaled automation rollout",
          description:
            "The pilot is the easy part. We design the operating model that takes the program from ten bots to hundreds — a Center of Excellence charter, intake cadence, reusable component library, and benefits-tracking discipline. The goal is a program that compounds.",
        },
      ]}
      getHeading="Six concrete artifacts every engagement leaves behind."
      deliverables={[
        {
          name: "Enterprise automation strategy",
          description:
            "Three-year strategy document covering ambition, scope, value pools, technology principles, and the operating model required to deliver them.",
        },
        {
          name: "Technology stack recommendation",
          description:
            "Vendor-neutral recommendation across RPA, BPM, ML, agent, and orchestration platforms — sized to your existing estate, not bolted on top of it.",
        },
        {
          name: "Hybrid orchestration blueprint",
          description:
            "Reference architecture showing how RPA, BPM, ML, and human review combine — including event contracts, hand-off semantics, and observability surface.",
        },
        {
          name: "Automation governance model",
          description:
            "End-to-end controls framework covering bot identity, segregation of duties, model risk, audit logging, and change management — signed off by risk and audit.",
        },
        {
          name: "ROI baseline and monitoring framework",
          description:
            "Bottom-up benefits model per opportunity, with the live dashboard and tracking discipline that survives the move from pilot to production.",
        },
        {
          name: "Automation Center of Excellence charter",
          description:
            "Operating model for the CoE — roles, intake cadence, prioritization scoring, reusable component library, and the funding model that lets the program compound.",
        },
      ]}
      outcome={{
        heading:
          "Programs that move from single-tool RPA to a hybrid architecture typically see automation throughput triple within twelve months — and a CoE charter is what keeps the gain.",
        body: "The leaders who scale automation past the pilot do not buy a different platform — they redesign the program around the architecture, the governance, and the operating cadence the work actually requires. That is the difference between an automation pilot and an automation capability.",
      }}
      casesHeading="When the architecture is right, the program compounds."
      cases={[
        {
          industry: "Insurance",
          title:
            "Hybrid orchestration design moves 38 percent of claims to straight-through processing",
          description:
            "A national P&C carrier had stalled at low single-digit straight-through rates because every prior automation push was pure RPA. We re-architected the program around a hybrid pattern — ML for unstructured intake, BPM for orchestration, RPA for deterministic system actions, human review for high-severity exceptions. Straight-through processing moved from 4 percent to 38 percent within nine months.",
          link: "/cases/insurance-hybrid-claims-automation",
        },
        {
          industry: "Healthcare Payer",
          title:
            "Automation CoE charter compounds from 12 to 140 automations in 18 months",
          description:
            "A regional health plan had a stalled automation portfolio of 12 RPA bots with unclear ownership and no shared component library. We designed the CoE operating model — intake, prioritization, reusable components, citizen-developer guardrails, benefits tracking — and the program scaled to 140 production automations on the same headcount footprint.",
          link: "/cases/payer-automation-coe-scale",
        },
      ]}
      siblingsHeading="Other ways we help in Process Optimization."
      siblings={[
        {
          title: "Process Discovery & Mining",
          link: "/solutions/process-optimization/process-discovery-mining",
        },
        {
          title: "Workflow Optimization",
          link: "/solutions/process-optimization/workflow-optimization",
        },
        {
          title: "AI-Powered Decision Support",
          link: "/solutions/process-optimization/ai-powered-decision-support",
        },
        {
          title: "Change Management & Training",
          link: "/solutions/process-optimization/change-management-training",
        },
        {
          title: "Continuous Improvement Programs",
          link: "/solutions/process-optimization/continuous-improvement-programs",
        },
      ]}
      cta={{
        heading:
          "Bring our automation architects into your next operating-model conversation.",
        body: "We work with leaders who want their automation program to compound, not pile up. The conversation starts with the architecture, not the tool.",
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
