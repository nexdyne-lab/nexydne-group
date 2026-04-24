import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function HealthcareDashboardTraining() {
  return (
    <CaseStudyTemplate
      client="Regional Healthcare Network"
      industry="Healthcare · Data Training"
      title="Healthcare Network Trains 200 Clinicians to Build Custom Dashboards"
      subtitle="Half-day workshops taught clinical staff to create Tableau dashboards for patient outcomes, improving visibility 45% and reducing manual reporting 30 hours/week."
      heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80"
      challenge={`A regional healthcare network with 12 hospitals and 45 outpatient clinics struggled with patient outcome visibility. Clinicians wanted to track readmission rates, infection rates, length of stay, and other quality metrics—but relied on IT to generate reports that arrived weeks after the data was collected.

The IT team maintained a Tableau server with pre-built dashboards, but they were generic and didn't answer specific clinical questions. Physicians wanted to drill down by department, diagnosis, or physician—capabilities that existed in the tool but required technical knowledge to configure.

Clinical staff resorted to manual workarounds: exporting data to Excel, creating pivot tables, and emailing spreadsheets to colleagues. This consumed 30+ hours/week across the organization and introduced errors when formulas broke or data got stale.

Leadership recognized the opportunity: Tableau was already deployed and licensed for 500 users, but only 20 people (all in IT) knew how to use it. If clinical staff could build their own dashboards, they'd get faster insights and free IT to focus on infrastructure.`}
      solution={`NEXDYNE designed a half-day "Tableau for Clinicians" workshop tailored to healthcare use cases. Rather than teaching generic BI concepts, we focused on patient outcome dashboards using real (de-identified) clinical data from the network's EHR system.

Morning Session (3 hours): Participants learned to connect to data sources, create visualizations (bar charts, line graphs, heat maps), and apply filters. We used familiar clinical scenarios: "Show readmission rates by department," "Compare infection rates across hospitals," "Track length of stay trends over time."

Afternoon Session (2 hours): Participants learned calculated fields, parameters, and dashboard actions. Final project: build a custom dashboard answering a specific clinical question relevant to their role. Cardiologists built heart failure readmission dashboards, orthopedic surgeons tracked surgical site infection rates, primary care physicians monitored chronic disease management metrics.

In-person workshops were held at each hospital (12 sessions total), limited to 15-20 participants per session to ensure hands-on support. We trained 5 internal "Tableau Champions" (clinical informatics staff) who could provide ongoing support after our engagement ended. Champions held monthly office hours, maintained a Slack channel for Q&A, and curated a library of reusable dashboard templates.`}
      impact={`Six months post-training, Tableau usage skyrocketed: 420 active users (up from 20), 180+ custom dashboards created, and 15,000+ dashboard views per month. Clinical staff built dashboards for use cases IT never anticipated—OR utilization tracking, physician productivity metrics, patient satisfaction trends by unit.

Physicians identified a 12% readmission spike in heart failure patients at one hospital, traced it to discharge medication errors, and implemented process changes that reduced readmissions 18% within 3 months. The infection control team built real-time dashboards that flagged outbreaks 5 days earlier than manual surveillance. The IT data request backlog dropped 70% as clinical staff answered their own questions, freeing IT to focus on integrating new data sources and building predictive models for patient risk stratification.`}
      metrics={[
        { value: "200", label: "Clinicians trained across 12 hospitals" },
        { value: "45%", label: "Improvement in patient outcome visibility" },
        { value: "180+", label: "Custom dashboards built in 6 months" },
        { value: "30 hrs/wk", label: "Reduction in manual Excel reporting" }
      ]}
      tags={["Data Training", "Healthcare", "Analytics", "Tableau"]}
      relatedCapability={{
        title: "Data Transformation",
        link: "/capabilities/data-transformation"
      }}
    />
  );
}

export default HealthcareDashboardTraining;
