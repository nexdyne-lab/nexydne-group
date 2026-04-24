import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function ManufacturingPredictiveMaintenance() {
  return (
    <CaseStudyTemplate
      client="Precision Metal Fabrication Company"
      industry="Manufacturing · Artificial Intelligence"
      title="Predictive Maintenance Reduces Downtime for Manufacturing SMB"
      subtitle="How a mid-size manufacturing company with 150 employees achieved 45% reduction in unplanned downtime and 28% savings in maintenance costs through AI-powered predictive maintenance."
      heroImage="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&q=80"
      challenge={`Unplanned equipment failures were causing production delays, quality issues, and costly emergency repairs. The company was spending 40% of maintenance budget on reactive repairs.

A precision metal fabrication company with 150 employees and 3 production facilities serves automotive and aerospace customers with tight quality and delivery requirements. With 45 major pieces of equipment across three facilities, the company experienced an average of 8 unplanned breakdowns per month. Each breakdown meant production delays, expedited shipping costs, and occasionally quality issues from rushed restarts. The maintenance team was stuck in reactive mode, spending most of their time on emergency repairs rather than preventive work.

Traditional preventive maintenance schedules—based on manufacturer recommendations and calendar intervals—weren't working. Some equipment was being over-maintained while other machines failed between scheduled services.`}
      solution={`NEXDYNE implemented a phased predictive maintenance program leveraging existing equipment data and adding targeted sensors where needed. Many of the company's newer machines had built-in sensors and data logging capabilities that weren't being utilized—these were connected to a central data platform, and low-cost sensors were added to older equipment for vibration, temperature, and power consumption monitoring. Two years of maintenance records were digitized to create historical training data.

Machine learning models were developed for each critical failure mode—spindle bearing failures in CNC machines, hydraulic system issues in press brakes, laser source degradation, and coolant system failures—trained on historical data and validated against known failure events. The models learned to recognize patterns that preceded failures, often detecting issues days or weeks in advance.

The predictive system was integrated with the company's maintenance workflow through dashboards showing equipment health status across all facilities, automated alerts when predicted failures approached maintenance windows, work order generation with predicted parts and labor requirements, and integration with parts inventory to ensure availability.`}
      impact={`After six months of operation, unplanned downtime incidents dropped from 8 per month to 4.4—a 45% reduction. Mean time between failures improved 62%, and overall equipment effectiveness (OEE) rose from 78% to 86%. Prediction accuracy reached 92%.

Annual financial benefits totaled $680,000: $320,000 from maintenance cost reduction (28% savings), $280,000 in avoided production losses, and $80,000 in quality cost reduction. The maintenance team shifted from reactive to proactive work—70% of maintenance is now planned compared to 40% before. Spare parts inventory decreased 15% while parts availability improved. A real-world example from three months post-deployment: the system detected an unusual vibration pattern in a critical CNC machining center, predicted failure within 2–3 weeks, and the maintenance team scheduled the repair for a planned weekend shutdown, completing it in 3 hours with no production impact.`}
      metrics={[
        { value: "45%", label: "Downtime reduction" },
        { value: "28%", label: "Maintenance cost savings" },
        { value: "92%", label: "Prediction accuracy" },
        { value: "$680K", label: "Annual savings" }
      ]}
      tags={["Manufacturing", "AI", "Predictive Maintenance", "Operations"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}

export default ManufacturingPredictiveMaintenance;
