import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function MedicalPracticeCaseStudy() {
  return (
    <CaseStudyTemplate
      client="Regional Medical Practice Network"
      industry="Healthcare · Operations"
      title="35% Reduction in Patient Wait Times"
      subtitle="A network of 12 primary care and specialty clinics with 180 staff members implements AI-powered scheduling optimization, reducing patient wait times by 35% while increasing appointment utilization across the network."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
      challenge={`This physician-owned practice network had grown through acquisition over 15 years, bringing together primary care, internal medicine, and specialty clinics under unified management. But each clinic had retained its own scheduling practices, creating inconsistent patient experiences and operational inefficiencies.

Patients complained about long wait times, while providers felt rushed or underutilized depending on the day. No-show rates averaged 18% across the network, with some clinics experiencing rates as high as 25%. Front desk staff spent hours each day making reminder calls and managing schedule changes.

The practice's leadership calculated that scheduling inefficiency was costing the network the equivalent of two full-time providers in lost capacity—capacity they desperately needed as the region's population grew.`}
      solution={`NEXDYNE deployed a predictive scheduling system that transforms how the practice manages patient flow. The system analyzes historical patterns to predict no-show probability for each appointment, recommend optimal scheduling sequences, and dynamically adjust appointment durations based on visit type and patient history.

For patients likely to no-show, the system triggers automated outreach through their preferred channel—text, email, or phone call. High-risk appointments are strategically overbooked, while complex cases receive appropriate time buffers.

Real-time dashboards give clinic managers visibility into the day's schedule, highlighting potential bottlenecks before they occur. The system was trained on historical data from over 200,000 appointments and integrated with the practice's existing EHR and practice management software. A phased rollout began with three pilot clinics, followed by network-wide deployment.`}
      impact={`Within three months of network-wide deployment, the practice achieved measurable improvements in patient experience, operational efficiency, and financial performance. Average wait time reduced from 23 minutes to 15 minutes—a 35% improvement—and patient satisfaction scores increased by 18%. Same-day appointment availability improved by 40%.

Provider utilization increased from 72% to 88%, and the no-show rate dropped from 18% to 11%. Revenue per provider increased by 15%, and staff overtime was reduced by 25%. Annual capacity equivalent to adding two providers was captured. The 22% increase in appointment utilization across the network enabled growth without proportional staffing increases.`}
      metrics={[
        { value: "35%", label: "Wait time reduction" },
        { value: "180", label: "Staff across 12 clinics" },
        { value: "10wks", label: "To full deployment" },
        { value: "22%", label: "Appointment utilization increase" }
      ]}
      quote={{
        text: "Our providers used to dread looking at their schedules—some days were impossibly packed, others had gaps that cost us revenue. Now the schedule flows naturally, patients wait less, and our team goes home on time. It's transformed how we practice medicine.",
        author: "Chief Medical Officer",
        role: "Regional Medical Practice Network"
      }}
      tags={["Healthcare", "AI", "Operations", "Scheduling"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}

export default MedicalPracticeCaseStudy;
