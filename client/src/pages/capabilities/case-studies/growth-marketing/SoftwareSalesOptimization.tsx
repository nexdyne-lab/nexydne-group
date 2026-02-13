import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function SoftwareSalesOptimization() {
  return (
    <CaseStudyArticle
      industry="Growth, Marketing & Sales"
      industryHref="/capabilities/growth-marketing-sales"
      title="Sales Process Optimization Increases Win Rate"
      subtitle="How a software company transformed their sales process to improve win rates and shorten sales cycles"
      client="A 180-employee software company with $52M in annual revenue, selling enterprise software to mid-size businesses. The company had grown rapidly but sales productivity was declining as the team scaled."
      challenge="Sales performance was inconsistent across the team. Top performers closed at 35% while others struggled at 15%. Sales cycles had lengthened from 60 to 90 days as deals stalled in evaluation. The CRM was poorly adopted, making pipeline visibility unreliable. New hire ramp time had stretched to 9 months."
      metrics={[
        { value: "45%", label: "Win Rate Improvement" },
        { value: "28%", label: "Shorter Sales Cycle" },
        { value: "$8.2M", label: "Revenue Impact" },
        { value: "4 mo", label: "New Hire Ramp" },
      ]}
      relatedCaseStudies={[
        {
          title: "Digital Marketing Transformation Doubles Lead Generation",
          href: "/capabilities/growth-marketing-sales/case-studies/b2b-digital-marketing",
          industry: "Professional Services"
        },
        {
          title: "Account-Based Marketing Lands Enterprise Clients",
          href: "/capabilities/growth-marketing-sales/case-studies/tech-abm",
          industry: "Technology"
        },
        {
          title: "Pricing Optimization Improves Margins by 8 Points",
          href: "/capabilities/growth-marketing-sales/case-studies/distribution-pricing",
          industry: "Distribution"
        }
      ]}
    >
      <h2>Diagnosing Sales Performance</h2>
      <p>
        Our analysis revealed that top performers followed a fundamentally different approach than the rest of the team. They spent more time on discovery and qualification. They engaged multiple stakeholders early in the process. They used customer success stories and ROI models effectively. They also maintained disciplined follow-up cadences.
      </p>

      <h2>Codifying the Winning Approach</h2>
      <p>
        We worked with top performers to document their approach in a repeatable sales playbook. We defined clear stages with specific exit criteria and required activities. We created discovery frameworks that uncovered business pain and buying criteria. We developed stakeholder mapping tools that identified decision-makers and influencers. We also built objection handling guides based on common competitive situations.
      </p>

      <h2>Implementing Sales Enablement</h2>
      <p>
        The playbook was brought to life through comprehensive enablement. We created training programs that taught the methodology through role-play and coaching. We developed sales tools including ROI calculators and competitive battlecards. We built email templates and call scripts for key conversation types. We also established a content library organized by buyer persona and journey stage.
      </p>

      <h2>Optimizing CRM and Pipeline Management</h2>
      <p>
        We transformed the CRM from a reporting burden into a selling tool. We simplified data entry by eliminating unnecessary fields and automating where possible. We implemented pipeline inspection processes that identified stuck deals early. We created dashboards that gave reps visibility into their own performance. We also established forecasting disciplines that improved accuracy to 90%.
      </p>

      <h2>Building Coaching Culture</h2>
      <p>
        Sustainable improvement required ongoing coaching and development. We trained managers on coaching techniques and deal review best practices. We implemented weekly pipeline reviews focused on deal strategy, not just status. We established peer learning programs where top performers shared techniques. We also created certification programs that validated methodology adoption.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Top performer analysis reveals the winning approach to codify</li>
        <li>Sales methodology must be reinforced through tools and coaching</li>
        <li>CRM adoption improves when it helps reps sell, not just report</li>
        <li>Manager coaching is the key to sustainable performance improvement</li>
      </ul>
    </CaseStudyArticle>
  );
}
