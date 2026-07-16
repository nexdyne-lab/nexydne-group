import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, Wrench, CalendarClock, Activity, Radio, Brain, Gauge, DollarSign } from "lucide-react";

export function ManufacturingPredictiveMaintenance() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Predictive Maintenance That Cut Downtime 45% | Manufacturing Case Study"
      seoDescription="A metal fabricator spent 40% of its maintenance budget on reactive repairs with 8 breakdowns a month. AI predictive maintenance cut unplanned downtime 45% and saved $680K a year."
      canonical="/capabilities/artificial-intelligence/case-studies/manufacturing-predictive-maintenance"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Metal Fabricator Cut Unplanned Downtime 45% With Predictive Maintenance"
      subtitle="A precision metal fabrication company used AI predictive maintenance across 45 machines and 3 facilities — cutting unplanned downtime 45%, saving 28% on maintenance, and $680K a year."
      heroImage="/images/industries/mfg-robotics.jpg"
      metrics={[
        { value: "45%", label: "Less Downtime" },
        { value: "28%", label: "Maintenance Cost Savings" },
        { value: "92%", label: "Prediction Accuracy" },
        { value: "$680K", label: "Annual Savings" }
      ]}
      clientContextTitle="Stuck in Reactive Mode"
      clientContextIntro="A precision metal fabrication company with 150 employees and 3 facilities serves automotive and aerospace customers with tight quality and delivery requirements. Across 45 major machines, it averaged 8 unplanned breakdowns a month — each meaning production delays, expedited shipping, and occasional quality issues from rushed restarts."
      clientContextBody="The company spent 40% of its maintenance budget on reactive repairs, with the team stuck firefighting rather than doing preventive work. Traditional calendar-based schedules weren't working: some equipment was over-maintained while other machines failed between scheduled services. It needed maintenance driven by the actual condition of each machine."
      clientProfile={{
        industry: "Metal Fabrication Company",
        companySize: "150 Employees",
        projectDuration: "3 Facilities",
        additionalInfo: "45 Machines",
        additionalLabel: "Monitored"
      }}
      challengeTitle="Why Maintenance Kept Failing"
      challenges={[
        {
          icon: AlertTriangle,
          title: "8 breakdowns a month",
          description: "Unplanned failures caused delays, expedited shipping, and quality issues from rushed restarts."
        },
        {
          icon: Wrench,
          title: "40% of budget reactive",
          description: "The team spent most of its time on emergency repairs, not preventive work."
        },
        {
          icon: CalendarClock,
          title: "Calendar schedules missed",
          description: "Fixed intervals over-maintained some machines while others failed between services."
        },
        {
          icon: Activity,
          title: "Unused sensor data",
          description: "Newer machines had built-in sensors and logging that weren't being utilized."
        }
      ]}
      approachTitle="Condition-Based Maintenance With ML"
      approachIntro="NEXDYNE implemented a phased predictive-maintenance program — connecting existing sensors, adding low-cost ones where needed, and training failure-mode models on two years of digitized maintenance history."
      steps={[
        {
          step: "01",
          title: "Instrument the equipment",
          description: "Built-in sensors were connected to a central platform and low-cost vibration, temperature, and power sensors added to older machines."
        },
        {
          step: "02",
          title: "Model each failure mode",
          description: "ML models targeted spindle-bearing, hydraulic, laser-source, and coolant failures, validated against known events."
        },
        {
          step: "03",
          title: "Predict days to weeks out",
          description: "The models learned the patterns preceding failure, often detecting issues weeks in advance."
        },
        {
          step: "04",
          title: "Wire into the workflow",
          description: "Health dashboards, automated alerts near maintenance windows, and work orders with predicted parts tied into inventory."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "45%",
          label: "Less unplanned downtime",
          detail: "Breakdowns from 8 a month to 4.4, OEE from 78% to 86%"
        },
        {
          icon: Brain,
          value: "70%",
          label: "Maintenance now planned",
          detail: "Up from 40%, with spare-parts inventory down 15%"
        },
        {
          icon: DollarSign,
          value: "$680K",
          label: "Annual savings",
          detail: "From maintenance, avoided losses, and quality costs"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Building an IoT Sensor Platform for Predictive Maintenance",
          metric: "30%",
          label: "less downtime",
          link: "/cases/manufacturing-iot-pipeline",
          image: "/images/industries/mfg-robotics.jpg"
        },
        {
          title: "Computer Vision Quality Inspection That Lifted Yield 18%",
          metric: "18%",
          label: "higher yield",
          link: "/capabilities/artificial-intelligence/case-studies/food-quality-ai",
          image: "/images/capabilities/cap-food.jpg"
        }
      ]}
      ctaTitle="Ready to get ahead of equipment failures?"
      ctaDescription="Let's talk about what predictive maintenance could do for your uptime and maintenance budget."
    />
  );
}

export default ManufacturingPredictiveMaintenance;
