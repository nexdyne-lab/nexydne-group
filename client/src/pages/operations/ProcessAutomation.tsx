// TODO: David — confirm Process Automation & Digitization experience & impact numbers with practice lead before publish.
// TODO: David — populate 2-3 thought-leadership insights for the Process Automation hub.

import CapabilityHubTemplate from "@/components/CapabilityHubTemplate";

export default function ProcessAutomation() {
  return (
    <CapabilityHubTemplate
      hubName="Process Automation & Digitization"
      slug="operations/process-automation"
      heroSubtitle="Eliminate manual bottlenecks with intelligent automation. From order processing to quality control, accelerate workflows and reduce errors."
      heroImage="/images/processflow-abstract.jpg"
      experienceStats={[
        { number: "100+", label: "Automation programs delivered across industries" },
        { number: "60-80%", label: "Typical reduction in process cycle time" },
        { number: "85-95%", label: "Error reduction through intelligent automation" },
        // TODO: confirm with practice lead before publish
        { number: "Center of Excellence", label: "Reusable automation operating model" },
      ]}
      // TODO: confirm ambition copy with practice lead before publish
      ambitions={[
        {
          title: "Push hands-off processing past 80%",
          description:
            "Re-engineer processes end-to-end — not just bolt RPA on top — so the share of transactions completed without human touch climbs into best-in-class territory.",
        },
        {
          title: "Scale RPA beyond pilots",
          description:
            "Most RPA programs stall at 20-30 bots. Build the operating model, governance, and pipeline that turn automation into an enterprise capability, not a curiosity.",
        },
        {
          title: "Move up the intelligent-automation curve",
          description:
            "Combine RPA with AI, IDP, and process orchestration to automate work that was previously considered too judgment-heavy or unstructured.",
        },
        {
          title: "Bake compliance into every process",
          description:
            "Automated processes have perfect audit trails — use that to harden controls, eliminate workarounds, and pass audits without the usual scramble.",
        },
        {
          title: "Take cost out of cost-to-serve",
          description:
            "Aim automation at the highest-volume, highest-cost processes first. Typical programs deliver 30-50% cost reduction in targeted operations within 18 months.",
        },
        {
          title: "Empower citizen developers safely",
          description:
            "Equip business users with low-code and AI tools to automate their own work — within a governance frame that keeps risk, security, and IT happy.",
        },
      ]}
      howWeCanHelp={[
        {
          title: "Process Assessment & Prioritization",
          description:
            "Identify automation opportunities across your operations. Prioritize by impact, feasibility, and strategic value to build a compelling business case.",
          href: "/capabilities/operations/process-automation/process-assessment-prioritization",
        },
        {
          title: "Workflow Automation",
          description:
            "Digitize and automate business workflows. Approvals, notifications, escalations, and handoffs — all orchestrated seamlessly.",
          href: "/capabilities/operations/process-automation/workflow-automation",
        },
        {
          title: "Robotic Process Automation",
          description:
            "Deploy software robots to handle repetitive tasks. Data entry, reconciliation, report generation, and cross-system updates.",
          href: "/capabilities/operations/process-automation/robotic-process-automation",
        },
        {
          title: "Intelligent Document Processing",
          description:
            "Extract and process information from documents using AI. Invoices, contracts, forms, and correspondence — automated end-to-end.",
          href: "/capabilities/operations/process-automation/intelligent-document-processing",
        },
        {
          title: "Integration & APIs",
          description:
            "Connect systems to enable seamless data flow. Eliminate manual data transfer between applications and create unified processes.",
          href: "/capabilities/operations/process-automation/integration-apis",
        },
        {
          title: "Automation Center of Excellence",
          description:
            "Build sustainable automation capabilities. Governance frameworks, training programs, and operating models that scale.",
          href: "/capabilities/operations/process-automation/automation-center-of-excellence",
        },
      ]}
      ambitionsCTAText="Talk to us about your Process Automation ambition →"
      thoughtLeadership={[]}
      approachPillars={[
        {
          step: "01",
          title: "Discover opportunities",
          body: "We map your processes end-to-end, identifying automation candidates based on volume, complexity, and strategic value. We quantify the opportunity and build a prioritized roadmap.",
        },
        {
          step: "02",
          title: "Design & build",
          body: "We design automation solutions that balance quick wins with long-term scalability. We build using best-practice architectures and ensure seamless integration with existing systems.",
        },
        {
          step: "03",
          title: "Deploy & scale",
          body: "We implement automation in agile sprints, measuring impact and iterating based on results. We build internal capabilities to ensure your automation program is sustainable and self-reinforcing.",
        },
      ]}
      featuredCases={[
        {
          slug: "bank-process-automation",
          title: "Regional Bank Automates Loan Origination End-to-End",
          industry: "Financial Services · Operations",
          metric: "70%",
          image: "/images/capabilities/cap-robot-factory.jpg",
        },
        {
          slug: "law-firm-contract-automation",
          title: "Law Firm Automates Contract Lifecycle Across Practice Groups",
          industry: "Professional Services · Operations",
          metric: "65%",
          image: "/images/capabilities/cap-warehouse-robot.jpg",
        },
        {
          slug: "insurance-claims-processing",
          title: "Insurer Cuts Claims Cycle Time and Improves Decision Accuracy",
          industry: "Insurance · Operations",
          metric: "60%",
          image: "/images/industries/ops-gears.jpg",
        },
      ]}
      relatedCapabilities={[
        { href: "/capabilities/strategy-corporate-finance", name: "Strategy & Corporate Finance" },
        { href: "/capabilities/business-building", name: "Business Building" },
        { href: "/capabilities/ai-technology-consulting", name: "AI Technology Consulting" },
      ]}
      ctaLeadName="Talk to our Process Automation lead"
    />
  );
}
