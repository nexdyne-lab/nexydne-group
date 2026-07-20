import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, BarChart3, Users, Target, TrendingDown, CheckCircle, Zap } from "lucide-react";

export default function IndustrialIotAnomalyDetection() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Anomaly Detection on Plant Telemetry Halves Unplanned Downtime | Manufacturing Case Study"
      seoDescription="A heavy-industry manufacturer added anomaly detection on equipment telemetry into a maintenance-planner workflow with confidence bands and override notes. Unplanned-downtime hours fell 51% across pilot lines in a year."
      canonical="/cases/industrial-iot-anomaly-detection"
      industry="Industrial IoT"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Cut Unplanned Downtime in Half by Listening to Its Machines"
      subtitle="Equipment was failing without warning, and the maintenance team was always reacting. Anomaly detection on plant telemetry — delivered into the planner's workflow, not around it — turned surprises into scheduled work."
      heroImage="/images/industries/mfg-robot-arm.jpg"
      metrics={[
        { value: "51%", label: "Less Unplanned Downtime" },
        { value: "12 Mo", label: "To the Result" },
        { value: "Pilot", label: "Lines Proven First" },
        { value: "Retrained", label: "On Operator Feedback" }
      ]}
      clientContextTitle="Always Reacting, Never Ready"
      clientContextIntro="A heavy-industry manufacturer was losing expensive hours to equipment that failed without warning. The maintenance team was skilled but perpetually reactive — the first sign of trouble was usually a line already down, and every unplanned stop cascaded into missed schedules and overtime."
      clientContextBody="The plant was already instrumented; telemetry poured off the equipment continuously. But that data flowed into dashboards nobody had time to watch, not into the maintenance-planning workflow where it could change what got scheduled. The team did not need another screen of charts; it needed the machines' early warning signs to arrive as actionable work in the planner's queue, with enough context that a planner could trust it — and with a way to feed back what turned out to be a false alarm so the system got smarter."
      clientProfile={{
        industry: "Heavy-Industry Manufacturer",
        companySize: "~$540M Annual Revenue",
        projectDuration: "12 Months",
        additionalInfo: "Multiple Production Lines",
        additionalLabel: "Operating Footprint"
      }}
      challengeTitle="Why the Telemetry Wasn't Helping"
      challenges={[
        { icon: AlertTriangle, title: "Failures Without Warning", description: "Equipment broke down unexpectedly, so the maintenance team was always reacting to a line that was already stopped." },
        { icon: BarChart3, title: "Data on Dashboards No One Watched", description: "Telemetry fed charts that sat unmonitored rather than reaching the workflow where it could drive action." },
        { icon: Users, title: "No Trust Without Context", description: "Planners would not act on a raw alert without confidence in it and a record of why it fired." },
        { icon: Target, title: "No Way to Learn", description: "There was no mechanism for operators to flag false alarms and improve the detection over time." }
      ]}
      approachTitle="Detection That Lands in the Planner's Queue"
      approachIntro="We added anomaly detection on the equipment telemetry and fed it directly into the maintenance-planner workflow — with confidence bands and override notes — so early warnings became scheduled work, and operator feedback became training data."
      steps={[
        { step: "01", title: "Modeling Normal, Then the Deviations", description: "We built anomaly detection that learned each machine's normal signature from its telemetry and flagged the deviations that precede failure." },
        { step: "02", title: "Feeding the Maintenance Workflow", description: "Rather than another dashboard, we routed flags straight into the maintenance-planner's queue as proposed work, where they could actually change the schedule." },
        { step: "03", title: "Adding Confidence Bands and Override Notes", description: "Each flag arrived with a confidence band and a place for the planner to record an override, giving the team the context it needed to trust and act." },
        { step: "04", title: "Retraining on What Operators Flagged", description: "The override audit trail captured the failure modes operators identified, and we retrained the model on them so detection improved with use." }
      ]}
      resultsTitle="Surprises Turned Into Scheduled Work"
      results={[
        { icon: TrendingDown, value: "51%", label: "Less unplanned downtime", detail: "Hours across the pilot lines in twelve months" },
        { icon: CheckCircle, value: "Planner", label: "Workflow-native", detail: "Flags arrive as work, not charts" },
        { icon: Target, value: "Bands", label: "Confidence attached", detail: "Planners trust and act on each flag" },
        { icon: Zap, value: "Retrained", label: "On feedback", detail: "Operator overrides improved the model" }
      ]}
      quote="We had all the sensor data in the world sitting on dashboards nobody had time to read. The change was putting the early warnings straight into the planner's queue, with a confidence level attached, and letting our operators tell the model when it was wrong. Unplanned downtime dropped by half because we were finally scheduling the work instead of scrambling."
      quoteAuthor="Director of Maintenance & Reliability"
      quoteRole="Heavy-industry manufacturer"
      relatedStudies={[
        { title: "How a Global Firm Got 92% of 38 Countries Using a New ERP in 60 Days", metric: "92%", label: "adoption in 60 days", link: "/cases/global-professional-services-erp-adoption", image: "/images/capabilities/cap-conference-data.jpg" },
        { title: "How a Federal Agency Made Its Process Gains Actually Stick", metric: "88%", label: "of gains sustained", link: "/cases/public-sector-sustained-adoption", image: "/images/cases/public-sector-sustained-adoption-hero.jpg" }
      ]}
      ctaTitle="Is your plant data sitting on dashboards no one watches?"
      ctaDescription="Let's turn your equipment telemetry into scheduled work in the maintenance queue."
    />
  );
}
