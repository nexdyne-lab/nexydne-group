import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function TechABM() {
  return (
    <CaseStudyTemplate
      client="Workflow Automation Software Company"
      industry="Technology · Growth Marketing"
      title="Account-Based Marketing Lands Enterprise Clients"
      subtitle="How a technology company implemented ABM to successfully move upmarket and win enterprise deals."
      heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
      challenge={`The company's inbound marketing approach wasn't reaching enterprise decision-makers. Larger companies had longer, more complex buying cycles. Multiple stakeholders needed to be engaged and aligned. The sales team lacked the relationships and credibility to access C-suite executives.

A 140-employee technology company with $42M in annual revenue sells workflow automation software to mid-size businesses and wanted to expand into enterprise accounts. The company's inbound-heavy go-to-market worked well for mid-market buyers who self-educated and requested demos, but enterprise buying processes were fundamentally different: longer timelines, committee decisions, and an expectation of proactive outreach rather than passive content consumption.`}
      solution={`NEXDYNE developed a rigorous target account selection process analyzing firmographic and technographic data to identify ideal enterprise profiles, scoring accounts based on fit, intent signals, and relationship strength, creating tiered account lists with differentiated investment levels, and aligning sales and marketing on coverage strategy.

Deep account intelligence was built for each target: organizational structure mapping, stakeholder identification, research on business priorities and strategic initiatives, intent signal monitoring, and account plans documenting insights and engagement strategies.

Personalized content addressed enterprise buyer concerns through industry-specific use cases and ROI models, executive-level content addressing strategic priorities, and personalized landing pages for top-tier accounts. Multi-channel orchestration coordinated targeted advertising reaching stakeholders at target accounts, personalized email sequences for different personas, sales outreach with marketing air cover, and exclusive executive events and roundtables. Account engagement was tracked across all touchpoints with pipeline creation and velocity measured by account tier.`}
      impact={`The ABM program generated $18 million in enterprise pipeline and closed 12 enterprise wins in the first year. Average deal size increased 4x compared to the company's mid-market baseline, fundamentally improving unit economics. Target account engagement reached 65%—meaning nearly two-thirds of the priority account list had meaningful interactions with the company within the program year.

The enterprise wins validated the upmarket strategy and created reference accounts that accelerated subsequent enterprise sales. The account intelligence built through the ABM program also benefited the sales team beyond targeted accounts, as the competitive battlecards and executive messaging developed for ABM improved sales conversations across all deal sizes.`}
      metrics={[
        { value: "12", label: "Enterprise wins" },
        { value: "4x", label: "Deal size increase" },
        { value: "$18M", label: "Pipeline created" },
        { value: "65%", label: "Target account engagement" }
      ]}
      tags={["Technology", "ABM", "Enterprise Sales", "Growth"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}
