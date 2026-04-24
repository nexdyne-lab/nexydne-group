import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function SoftwareSalesOptimization() {
  return (
    <CaseStudyTemplate
      client="Enterprise Software Company"
      industry="Technology · Growth Marketing"
      title="Sales Process Optimization Increases Win Rate"
      subtitle="How a software company transformed their sales process to improve win rates and shorten sales cycles."
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
      challenge={`Sales performance was inconsistent across the team. Top performers closed at 35% while others struggled at 15%. Sales cycles had lengthened from 60 to 90 days as deals stalled in evaluation. The CRM was poorly adopted, making pipeline visibility unreliable. New hire ramp time had stretched to 9 months.

A 180-employee software company with $52M in annual revenue sells enterprise software to mid-size businesses. The company had grown rapidly but sales productivity was declining as the team scaled. Analysis of top performer behavior revealed they followed a fundamentally different approach than the rest of the team: more time on discovery and qualification, earlier engagement of multiple stakeholders, effective use of customer success stories and ROI models, and disciplined follow-up cadences.`}
      solution={`NEXDYNE worked with top performers to document their approach in a repeatable sales playbook, defining clear stages with specific exit criteria, creating discovery frameworks uncovering business pain and buying criteria, developing stakeholder mapping tools identifying decision-makers and influencers, and building objection handling guides for common competitive situations.

The playbook was brought to life through training programs teaching the methodology via role-play and coaching, sales tools including ROI calculators and competitive battlecards, email templates and call scripts for key conversation types, and a content library organized by buyer persona and journey stage.

CRM was transformed from a reporting burden into a selling tool by simplifying data entry, implementing pipeline inspection processes identifying stuck deals early, and creating dashboards giving reps visibility into their own performance. Manager coaching capabilities were built through pipeline review training, weekly deal strategy sessions, peer learning programs, and certification programs validating methodology adoption.`}
      impact={`Win rate improved 45%, driven by earlier qualification, better multi-stakeholder engagement, and more effective competitive differentiation. Average sales cycle shortened 28% as the new methodology identified and resolved deal blockers earlier in the process. Revenue impact from improved win rate and cycle time totaled $8.2 million in the first year.

New hire ramp time cut from 9 months to 4 months as the codified sales playbook gave new reps a clear path to productivity rather than requiring them to reverse-engineer success independently. CRM adoption improved markedly when reps discovered it helped them sell rather than merely report to management—pipeline forecast accuracy reached 90%, enabling better resource allocation and financial planning.`}
      metrics={[
        { value: "45%", label: "Win rate improvement" },
        { value: "28%", label: "Shorter sales cycle" },
        { value: "$8.2M", label: "Revenue impact" },
        { value: "4 mo", label: "New hire ramp time" }
      ]}
      tags={["Technology", "Sales Optimization", "Growth", "Operations"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}
