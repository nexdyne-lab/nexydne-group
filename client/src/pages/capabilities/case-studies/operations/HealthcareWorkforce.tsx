import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function HealthcareWorkforce() {
  return (
    <CaseStudyArticle
      industry="Operations"
      industryHref="/capabilities/operations"
      title="Workforce Optimization Improves Productivity by 28%"
      subtitle="How a healthcare services company optimized staffing to improve productivity while reducing overtime costs"
      client="A 190-employee healthcare services company with $48M in annual revenue, providing home health, hospice, and personal care services across a three-state region. The company employs 150 field clinicians and caregivers."
      challenge="Labor costs were consuming 72% of revenue, well above industry benchmarks. Overtime had become chronic, with some staff working 50+ hours weekly. Scheduling was manual and reactive, leading to inefficient routing and missed visits. Staff turnover was 35% annually, driven partly by unpredictable schedules."
      metrics={[
        { value: "28%", label: "Productivity Gain" },
        { value: "15%", label: "Overtime Reduction" },
        { value: "$1.4M", label: "Annual Savings" },
        { value: "22%", label: "Turnover Reduction" },
      ]}
      relatedCaseStudies={[
        {
          title: "Supply Chain Optimization Reduces Costs by 25%",
          href: "/capabilities/operations/case-studies/consumer-goods-supply-chain",
          industry: "Manufacturing"
        },
        {
          title: "Process Automation Transforms Order Fulfillment",
          href: "/capabilities/operations/case-studies/ecommerce-fulfillment",
          industry: "E-commerce"
        },
        {
          title: "Quality System Implementation Achieves ISO Certification",
          href: "/capabilities/operations/case-studies/aerospace-quality",
          industry: "Aerospace"
        }
      ]}
    >
      <h2>Diagnosing Workforce Inefficiency</h2>
      <p>
        Our analysis revealed multiple sources of productivity loss. Schedulers assigned visits manually, often without considering geographic proximity. Clinicians spent 35% of their time driving between visits. Documentation was done on paper and entered into systems at the end of the day. No-shows and cancellations weren't backfilled, leaving gaps in schedules.
      </p>

      <h2>Implementing Intelligent Scheduling</h2>
      <p>
        We deployed a scheduling optimization system that transformed how visits were assigned. The system considered clinician skills, patient needs, and geographic proximity. It automatically optimized routes to minimize drive time. It provided real-time visibility into schedule changes and gaps. It also enabled patients to self-schedule within defined parameters.
      </p>

      <h2>Optimizing Territory Design</h2>
      <p>
        We redesigned service territories to balance workload and minimize travel. We analyzed patient density and visit patterns across the service area. We created territories that grouped patients geographically while balancing caseloads. We established primary and backup clinician assignments for continuity. We also built flexibility for growth and seasonal variation.
      </p>

      <h2>Enabling Mobile Workforce</h2>
      <p>
        Technology investments enabled clinicians to work more efficiently in the field. We deployed mobile devices for real-time schedule access and documentation. We implemented point-of-care documentation that eliminated end-of-day data entry. We enabled electronic visit verification that automated compliance requirements. We also provided GPS navigation integrated with the scheduling system.
      </p>

      <h2>Building Workforce Engagement</h2>
      <p>
        Beyond efficiency, we focused on improving the clinician experience. We implemented schedule preferences that gave staff input into their assignments. We created transparent productivity metrics that enabled self-management. We established recognition programs for high performers. We also improved communication through regular team huddles and feedback channels.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Scheduling optimization delivers immediate productivity gains</li>
        <li>Territory design significantly impacts travel time and efficiency</li>
        <li>Mobile technology enables real-time visibility and documentation</li>
        <li>Workforce engagement is essential for sustainable improvement</li>
      </ul>
    </CaseStudyArticle>
  );
}
