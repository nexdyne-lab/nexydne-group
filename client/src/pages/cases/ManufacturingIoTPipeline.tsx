import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function ManufacturingIoTPipeline() {
  return (
    <CaseStudyTemplate
      client="Mid-Sized Industrial Equipment Manufacturer"
      industry="Manufacturing · Data Engineering"
      title="Manufacturer Builds IoT Sensor Data Platform"
      subtitle="Industrial equipment company ingests 2 million sensor events per hour, enabling predictive maintenance and 30% downtime reduction."
      heroImage="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1600&q=80"
      challenge={`A mid-sized industrial equipment manufacturer operating 8 production facilities across the United States faced mounting maintenance costs and unplanned equipment downtime. Their 450 CNC machines, robotic arms, and conveyor systems generated sensor data (temperature, vibration, pressure, runtime metrics) that was logged locally but never analyzed. Maintenance teams relied on reactive repairs and fixed schedules, leading to unexpected failures that cost $85K per hour in lost production and emergency service calls averaging $15K per incident.

The company's IT team of 6 people had no experience building IoT data pipelines or implementing machine learning for predictive maintenance. They needed to centralize sensor data from 1,200+ connected devices, build real-time monitoring dashboards for plant managers, and develop predictive models to forecast equipment failures 48-72 hours in advance. Leadership wanted to build an in-house solution using cloud infrastructure, but lacked the specialized engineering talent to execute.`}
      solution={`NEXDYNE deployed a 3-person data engineering team with expertise in IoT architectures and time-series data processing. We started with a 2-week pilot at one facility, instrumenting 50 machines with AWS IoT Core agents that streamed sensor data to the cloud. Our team designed a scalable architecture using AWS IoT Core for device connectivity, Kinesis Data Streams for ingestion, TimescaleDB for time-series storage, and Apache Spark for batch analytics and ML model training.

We built real-time monitoring dashboards in Grafana that displayed equipment health metrics, anomaly detection alerts, and predictive maintenance recommendations. Our engineers worked closely with the client's maintenance team to understand failure patterns and calibrate alert thresholds. We implemented a CI/CD pipeline using Terraform for infrastructure-as-code and GitHub Actions for automated testing and deployment. Throughout the 8-month engagement, we conducted weekly training sessions teaching the client's IT team IoT architecture patterns, time-series database optimization, and ML model deployment workflows.`}
      impact={`The IoT sensor data platform rolled out across all 8 facilities over 6 months, with the final 2 months dedicated to ML model training and alert threshold tuning. Unplanned equipment downtime dropped 30% in the first year as maintenance teams shifted from reactive repairs to proactive interventions based on predictive alerts. The system accurately predicted 88% of equipment failures 48-72 hours in advance, giving maintenance teams time to schedule repairs during planned downtime windows.

Maintenance costs decreased $1.8M annually by reducing emergency service calls, optimizing spare parts inventory, and extending equipment lifespan through condition-based maintenance. Plant managers gained real-time visibility into equipment health across all facilities through Grafana dashboards accessible on mobile devices. The client's IT team now independently manages the IoT platform, adds new device types, and trains updated ML models using historical data.`}
      metrics={[
        { value: "30%", label: "Unplanned downtime reduction" },
        { value: "$1.8M", label: "Annual maintenance cost savings" },
        { value: "88%", label: "Failure prediction accuracy" }
      ]}
      tags={["Manufacturing", "IoT", "Data Engineering", "Predictive Maintenance"]}
      relatedCapability={{
        title: "Data Transformation",
        link: "/capabilities/data-transformation"
      }}
    />
  );
}
