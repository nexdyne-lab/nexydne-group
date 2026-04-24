import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function ManufacturingPredictiveMaintenance() {
  return (
    <CaseStudyTemplate
      client="Food Processing Plant"
      industry="Manufacturing · Data Visualization"
      title="Manufacturing Plant Cuts Downtime 35% with Predictive Maintenance Dashboard"
      subtitle="Equipment health dashboard predicted failures 2 weeks in advance, enabling scheduled maintenance instead of emergency repairs."
      heroImage="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1600&q=80"
      challenge={`A food processing plant operating 24/7 with 150 pieces of critical equipment struggled with unplanned downtime that disrupted production schedules and increased maintenance costs. Equipment failures occurred without warning—a conveyor belt motor burned out during peak production, a refrigeration compressor failed overnight, a packaging line jammed due to worn components.

Unplanned downtime averaged 12 hours per week, costing $15K per hour in lost production. Maintenance operated reactively—fixing equipment after it broke instead of preventing failures. The maintenance team lacked visibility into equipment health. Sensors captured vibration, temperature, and pressure data, but no one analyzed it until after failures occurred.

The plant manager needed a predictive maintenance dashboard that surfaced early warning signs of equipment degradation, enabling scheduled maintenance during planned downtime instead of emergency repairs during production runs. The dashboard had to integrate sensor data from 150 assets and predict failures weeks in advance with sufficient accuracy to justify maintenance interventions.`}
      solution={`NEXDYNE built a predictive maintenance dashboard using IoT sensor data and machine learning models to forecast equipment failures. The dashboard integrated data from 150 assets (motors, compressors, conveyors, pumps) and displayed real-time health scores, failure predictions, and maintenance recommendations.

An equipment health heatmap provided a visual overview of all 150 assets color-coded by health score (green: healthy, yellow: degrading, red: critical), enabling maintenance teams to prioritize inspections on red/yellow assets instead of following fixed schedules. A failure prediction timeline used ML models to predict equipment failures 2-4 weeks in advance based on sensor patterns (vibration anomalies, temperature spikes, pressure fluctuations), showing predicted failure date with confidence interval for proactive maintenance scheduling. Time-series charts displayed vibration, temperature, and pressure trends for each asset so engineers could investigate anomalies—a motor showing gradual temperature increase over 3 weeks indicated bearing degradation requiring replacement.

The dashboard automatically generated work orders for predicted failures, assigning them to maintenance technicians with recommended actions and mobile notifications with asset location and repair instructions. The ML model was trained on 18 months of historical sensor data and failure records, learning failure signatures—vibration patterns that preceded motor failures, temperature trends that indicated compressor issues.`}
      impact={`The predictive maintenance dashboard achieved 85% failure prediction accuracy with a 2-week lead time, sufficient for scheduling maintenance during planned downtime. Unplanned downtime decreased 35% (from 12 hours per week to 7.8 hours per week). With downtime costing $15K per hour, this saved $2.4M annually. Production output increased 4% due to improved equipment availability.

Emergency repair costs decreased 40% as maintenance shifted from reactive to proactive. Scheduled maintenance during planned downtime avoided overtime labor costs and expedited parts shipping. Maintenance budget decreased 18% while equipment reliability improved. The model caught critical failures before they occurred—conveyor motor bearing degradation, compressor refrigerant leak, packaging line belt wear.

The maintenance team shifted from fixed schedules to condition-based maintenance, reducing unnecessary preventive maintenance on healthy equipment and freeing technician time for value-added work. Equipment lifespan extended 15% through proactive interventions.`}
      metrics={[
        { value: "35%", label: "Reduction in unplanned downtime" },
        { value: "85%", label: "Failure prediction accuracy" },
        { value: "$2.4M", label: "Annual savings from reduced downtime" }
      ]}
      quote={{
        text: "Before the dashboard, we fixed equipment after it broke—always during production runs, always costing us $15K per hour in lost output. The predictive maintenance dashboard gave us 2-4 weeks warning before failures. We scheduled maintenance during planned downtime instead of emergency repairs during production. Unplanned downtime dropped 35%, saving $2.4M annually. The model predicted 85% of failures accurately—a conveyor motor, two compressors, and a packaging line all flagged weeks before they would have failed. We caught issues early and fixed them on our schedule, not the equipment's.",
        author: "James Rodriguez",
        role: "Plant Manager"
      }}
      tags={["Manufacturing", "Predictive Maintenance", "Data Visualization", "Operations"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
