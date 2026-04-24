import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function HealthcareWorkforce() {
  return (
    <CaseStudyTemplate
      client="Healthcare Services Company"
      industry="Healthcare · Operations"
      title="Workforce Optimization Improves Productivity by 28%"
      subtitle="How a healthcare services company optimized staffing to improve productivity while reducing overtime costs."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
      challenge={`Labor costs were consuming 72% of revenue, well above industry benchmarks. Overtime had become chronic, with some staff working 50+ hours weekly. Scheduling was manual and reactive, leading to inefficient routing and missed visits. Staff turnover was 35% annually, driven partly by unpredictable schedules.

A 190-employee healthcare services company with $48M in annual revenue provides home health, hospice, and personal care services across a three-state region, employing 150 field clinicians and caregivers. The workforce diagnostic revealed multiple sources of productivity loss: schedulers assigning visits manually without considering geographic proximity, clinicians spending 35% of their time driving between visits, paper-based documentation entered into systems at the end of the day, and no-shows and cancellations leaving gaps in schedules rather than being systematically backfilled.`}
      solution={`NEXDYNE deployed a scheduling optimization system considering clinician skills, patient needs, and geographic proximity—automatically optimizing routes to minimize drive time, providing real-time visibility into schedule changes and gaps, and enabling patients to self-schedule within defined parameters.

Service territories were redesigned to balance workload and minimize travel by analyzing patient density and visit patterns, creating territories grouping patients geographically while balancing caseloads, establishing primary and backup clinician assignments for continuity, and building flexibility for growth and seasonal variation.

Mobile technology deployment included mobile devices for real-time schedule access and documentation, point-of-care documentation eliminating end-of-day data entry, electronic visit verification automating compliance requirements, and GPS navigation integrated with the scheduling system. Workforce engagement improved through schedule preferences giving staff input into assignments, transparent productivity metrics enabling self-management, recognition programs for high performers, and improved communication through regular team huddles.`}
      impact={`Clinician productivity improved 28% as geographic routing optimization reduced drive time from 35% to under 20% of the workday, allowing more patient visits per shift with less exhaustion. Overtime decreased 15% as smarter scheduling eliminated the schedule gaps and reactive over-staffing that had driven chronic overtime. Annual savings of $1.4 million came from labor efficiency improvements and overtime reduction.

Staff turnover dropped 22% as schedule predictability improved—a high-value outcome that compounds over time by reducing the recruiting, onboarding, and training costs associated with 35% annual turnover in a skilled clinical workforce. The mobile documentation capability was particularly valued by clinicians, who regained personal time previously consumed by end-of-day data entry and improved the quality of their documentation by completing it at point of care.`}
      metrics={[
        { value: "28%", label: "Productivity gain" },
        { value: "15%", label: "Overtime reduction" },
        { value: "$1.4M", label: "Annual savings" },
        { value: "22%", label: "Turnover reduction" }
      ]}
      tags={["Healthcare", "Workforce Optimization", "Operations", "Scheduling"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
