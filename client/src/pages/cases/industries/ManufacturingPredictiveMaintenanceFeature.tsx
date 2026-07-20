import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, DollarSign, Clock, BarChart3, TrendingDown, Zap, CheckCircle } from "lucide-react";

export default function ManufacturingPredictiveMaintenanceFeature() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Predictive Maintenance for Manufacturing Excellence | Case Study"
      seoDescription="A manufacturer's unplanned equipment downtime disrupted production. Predictive maintenance that anticipated failures from equipment data reduced unplanned downtime 67%."
      canonical="/case-studies/manufacturing-predictive-maintenance"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How Predictive Maintenance Cut Unplanned Downtime by 67%"
      subtitle="Equipment failed without warning, and every unplanned stop rippled through production. Predictive maintenance turned surprise breakdowns into scheduled work."
      heroImage="/images/capabilities/cap-battery-factory.jpg"
      metrics={[
        { value: "67%", label: "Less Unplanned Downtime" },
        { value: "Predicted", label: "Failures" },
        { value: "Scheduled", label: "Not Surprise" },
        { value: "From Data", label: "Equipment Signals" }
      ]}
      clientContextTitle="Breakdowns Without Warning"
      clientContextIntro="A manufacturer lost significant production time to equipment that failed without warning. Maintenance was reactive — a machine broke, production stopped, and the team scrambled to fix it — and every unplanned stop rippled through schedules, causing missed commitments and overtime."
      clientContextBody="Reactive maintenance is expensive on every axis. Unplanned downtime halts production at the worst possible moments, emergency repairs cost more than planned ones, and the unpredictability makes scheduling and staffing difficult. The equipment generated data that carried early warning signs of impending failure, but that data was not being used to anticipate problems. The manufacturer needed predictive maintenance that read the equipment signals, anticipated failures before they happened, and converted surprise breakdowns into scheduled maintenance — dramatically reducing unplanned downtime."
      clientProfile={{
        industry: "Manufacturer",
        companySize: "9 Plants",
        projectDuration: "7 Months",
        additionalInfo: "Predictive Maintenance",
        additionalLabel: "Production Reliability"
      }}
      challengeTitle="Why Downtime Kept Disrupting Production"
      challenges={[
        { icon: AlertTriangle, title: "Failures Without Warning", description: "Equipment broke unexpectedly, halting production at the worst moments." },
        { icon: DollarSign, title: "Expensive Emergency Repairs", description: "Reactive fixes cost more than planned maintenance would have." },
        { icon: Clock, title: "Rippling Schedule Disruption", description: "Every unplanned stop caused missed commitments and overtime." },
        { icon: BarChart3, title: "Equipment Data Unused", description: "Early warning signs in the equipment data were not being read." }
      ]}
      approachTitle="Anticipate Failures From the Data"
      approachIntro="We built predictive maintenance that read equipment signals, anticipated failures before they happened, and turned surprise breakdowns into scheduled work — cutting unplanned downtime 67 percent."
      steps={[
        { step: "01", title: "Reading the Equipment Signals", description: "We put the equipment data to work, learning the signals that precede failure." },
        { step: "02", title: "Predicting Failures Early", description: "We built models that anticipated impending failures before they caused a breakdown." },
        { step: "03", title: "Scheduling Maintenance Proactively", description: "We converted predicted failures into planned maintenance, done on the manufacturer's schedule." },
        { step: "04", title: "Cutting Unplanned Downtime", description: "We reduced unplanned downtime 67 percent, stabilizing production and cutting emergency-repair cost." }
      ]}
      resultsTitle="Surprises Turned Into Schedule"
      results={[
        { icon: TrendingDown, value: "67%", label: "Less downtime", detail: "Unplanned, on production" },
        { icon: Zap, value: "Predicted", label: "Failures", detail: "Before they happen" },
        { icon: CheckCircle, value: "Scheduled", label: "Maintenance", detail: "On the manufacturer's terms" },
        { icon: DollarSign, value: "Lower", label: "Repair cost", detail: "Planned, not emergency" }
      ]}
      quote="Our equipment failed without warning, and every surprise breakdown rippled through our whole schedule with missed commitments and overtime. Reading the signals in the equipment data to predict failures let us turn those surprises into planned maintenance. Unplanned downtime dropped sixty-seven percent — we schedule the work now instead of scrambling."
      quoteAuthor="Director of Manufacturing Operations"
      quoteRole="Manufacturer"
      relatedStudies={[
        { title: "How a Hospital Gained 45% Clinical Efficiency by Automating Its Workflows", metric: "45%", label: "clinical efficiency gain", link: "/cases/hospital-workflow-automation", image: "/images/cases/hospital-workflow-automation-hero.jpg" },
        { title: "How a Logistics Company Scaled 10x in 18 Months", metric: "10x", label: "growth in 18 months", link: "/cases/logistics-scale", image: "/images/capabilities/cap-coder.jpg" }
      ]}
      ctaTitle="Is unplanned downtime disrupting your production?"
      ctaDescription="Let's use your equipment data to predict failures and schedule the work."
    />
  );
}
