import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function ConstructionProjectManagement() {
  return (
    <CaseStudyTemplate
      client="Regional Construction Firm"
      industry="Construction · Project Management"
      title="Construction Firm Replaces 5 Tools with Unified Project Management Platform"
      subtitle="Custom web and mobile app consolidated scheduling, resource allocation, and financial tracking—saving $180K annually in software costs."
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
      challenge={`A regional construction firm managing $120 million in annual projects was juggling five separate software platforms: one for scheduling, another for resource allocation, a third for financial tracking, a fourth for document management, and a fifth for field reporting. Project managers spent hours each week manually reconciling data between systems, leading to errors, delays, and frustrated teams.

The fragmented toolset created visibility gaps. Executives couldn't get real-time project status without requesting custom reports from multiple systems. Field crews used paper forms because the mobile apps were clunky and required internet connectivity. Budget overruns weren't discovered until monthly financial reviews—too late to course-correct.

Software licensing costs were escalating at $180,000 annually for tools that didn't talk to each other and didn't match their workflows. They needed a unified platform accessible from both office and job sites.`}
      solution={`NEXDYNE built a comprehensive project management platform with a React web application for office users and a React Native mobile app for field crews. The system consolidates scheduling (Gantt charts, critical path analysis), resource allocation (equipment, labor, materials), financial tracking (budgets, change orders, invoicing), and field reporting (daily logs, safety inspections, photo documentation) into one unified interface.

The mobile app works offline, syncing data when connectivity is available—critical for remote job sites. Field crews can submit daily reports, log equipment hours, capture photos with GPS coordinates, and flag issues that automatically create tasks for project managers. Real-time dashboards give executives instant visibility into project health, budget status, and resource utilization across all active jobs.

We integrated the platform with their existing accounting system (QuickBooks) and document storage (SharePoint), ensuring seamless data flow without manual re-entry.`}
      impact={`The unified platform transformed project management operations. Project managers saved 8-10 hours per week previously spent reconciling data between systems. Real-time dashboards eliminated the need for manual status reports—executives now have instant visibility into every project's schedule, budget, and resource allocation.

Field crews achieved 88% adoption within the first month. The firm reduced budget overruns by 34% in the first year by catching issues early. The $180,000 in annual software savings paid for the custom platform development within 18 months. The firm has since grown from $120M to $165M in annual revenue while maintaining the same project management team size.`}
      metrics={[
        { value: "$180K", label: "Annual software cost savings" },
        { value: "5→1", label: "Tools consolidated" },
        { value: "88%", label: "Field crew adoption rate" },
        { value: "34%", label: "Reduction in budget overruns" }
      ]}
      tags={["Custom Software", "Construction", "Mobile App", "Operations"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
