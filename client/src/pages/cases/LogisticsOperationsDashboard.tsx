import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function LogisticsOperationsDashboard() {
  return (
    <CaseStudyTemplate
      client="Regional Logistics Company"
      industry="Logistics · Data Visualization"
      title="Logistics Company Reduces Delivery Delays 40% with Real-Time Operations Dashboard"
      subtitle="Custom dashboard surfaced capacity bottlenecks and route inefficiencies, enabling proactive intervention before delays occurred—improving on-time delivery from 78% to 92%."
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
      challenge={`A regional logistics company managing 200 trucks and 50 distribution centers struggled with delivery delays that damaged customer relationships and increased operational costs. On-time delivery rate hovered at 78%—below the industry standard of 90%+. Delays cascaded through the network: a late pickup at one location caused missed delivery windows at three downstream stops.

The operations team lacked visibility into real-time performance. Dispatchers discovered delays only when customers called to complain. By then, the opportunity to reroute shipments or reallocate capacity had passed. Post-mortem analysis happened days later through Excel reports—too late to prevent recurring issues.

The COO needed a real-time operations dashboard that surfaced bottlenecks as they emerged, enabling proactive intervention before delays impacted customers. The dashboard had to integrate data from TMS (transportation management system), GPS tracking, and customer delivery schedules to provide a unified view of network performance.`}
      solution={`NEXDYNE built a custom real-time operations dashboard using React and D3.js, pulling data from the TMS via API integration and GPS tracking systems. The dashboard refreshed every 60 seconds, surfacing critical metrics and alerting dispatchers to emerging issues before they cascaded into customer-facing delays.

The network health map gave a geographic visualization showing all active deliveries, color-coded by status (on-time: green, at-risk: yellow, delayed: red). Dispatchers clicked on at-risk shipments to see root cause—traffic delays, equipment failures, or capacity constraints. A capacity utilization heatmap displayed distribution center capacity hour-by-hour for the next 48 hours, enabling dispatchers to reroute shipments to underutilized centers before overloads caused delays. Route efficiency metrics flagged routes performing 20%+ slower than historical baseline, and a customer impact forecast predicted how many customers would experience delayed deliveries based on current network status.

A working prototype was built in 3 weeks using sample data, validated with 5 dispatchers, and iterated before connecting to production systems. Automated SMS alerts notified dispatchers when critical thresholds breached.`}
      impact={`The dashboard paid for itself in 4 months through reduced expedited shipping costs and penalty fees. Delivery delays decreased 40%, and on-time delivery improved from 78% to 92%—exceeding the industry benchmark. Dispatchers intervened proactively on 150+ at-risk shipments per week, preventing customer-facing delays.

Annual savings reached $1.8M: $1.2M from reduced expedited shipping costs and $600K in avoided customer penalty fees for missed delivery windows. Customer satisfaction scores increased 25%, complaints decreased 60%, and contract renewal rates improved 12%. The capacity utilization heatmap also identified 3 underutilized distribution centers, enabling 18% capacity increase through rerouting without adding facilities.`}
      metrics={[
        { value: "40%", label: "Reduction in delivery delays" },
        { value: "92%", label: "On-time delivery rate achieved" },
        { value: "$1.8M", label: "Annual savings from reduced delays" }
      ]}
      quote={{
        text: "Before the dashboard, we discovered delays when customers called to complain—too late to fix the problem. Now we see at-risk shipments 2-3 hours in advance and intervene before they miss delivery windows. On-time delivery improved from 78% to 92%. Customer satisfaction scores increased 25%. The dashboard paid for itself in 4 months.",
        author: "Sarah Mitchell",
        role: "Chief Operations Officer"
      }}
      tags={["Logistics", "Data Visualization", "Operations", "Real-Time Systems"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
