import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { AlertTriangle, DollarSign, UsersRound, Cpu, Radio, LineChart, Gauge, ShieldCheck } from "lucide-react";

export function ManufacturingIoTPipeline() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Building an IoT Sensor Platform for Predictive Maintenance | Manufacturing Case Study"
      seoDescription="A manufacturer's 450 machines logged sensor data nobody analyzed, while every hour of downtime halted production. An IoT platform ingesting 2M events/hour cut unplanned downtime 30%."
      canonical="/cases/manufacturing-iot-pipeline"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="How a Manufacturer Built an IoT Platform for Predictive Maintenance"
      subtitle="An industrial-equipment maker built a platform ingesting 2 million sensor events an hour across 8 facilities — enabling predictive maintenance, a 30% downtime reduction, and far fewer emergency repair calls."
      heroImage="/images/industries/mfg-robotics.jpg"
      metrics={[
        { value: "30%", label: "Less Unplanned Downtime" },
        { value: "48–72 hrs", label: "Advance Failure Warning" },
        { value: "88%", label: "Failure Prediction Accuracy" }
      ]}
      clientContextTitle="Data Logged, Never Used"
      clientContextIntro="A mid-sized industrial-equipment manufacturer running 8 US production facilities faced mounting maintenance costs and unplanned downtime. Its 450 CNC machines, robotic arms, and conveyors generated sensor data — temperature, vibration, pressure, runtime — that was logged locally but never analyzed."
      clientContextBody="Maintenance teams relied on reactive repairs and fixed schedules, so every unexpected failure halted production by the hour and triggered costly emergency service calls. The company's 6-person IT team had no experience building IoT pipelines or ML for predictive maintenance. Leadership wanted an in-house cloud solution to centralize data from 1,200+ devices, monitor plant health in real time, and forecast failures 48–72 hours ahead — but lacked the specialized engineering talent."
      clientProfile={{
        industry: "Industrial Equipment Manufacturer",
        companySize: "8 Facilities",
        projectDuration: "8-Month Engagement",
        additionalInfo: "2M Events/Hour",
        additionalLabel: "Scale"
      }}
      challengeTitle="Why Maintenance Stayed Reactive"
      challenges={[
        {
          icon: AlertTriangle,
          title: "Production-halting downtime",
          description: "Unexpected failures stopped lines for hours, each one triggering a costly emergency service call."
        },
        {
          icon: LineChart,
          title: "Data logged but ignored",
          description: "Sensor data from 450 machines sat locally, never analyzed for early warning signs."
        },
        {
          icon: UsersRound,
          title: "No in-house IoT expertise",
          description: "A 6-person IT team had never built IoT pipelines or ML for predictive maintenance."
        },
        {
          icon: Cpu,
          title: "1,200+ devices to unify",
          description: "Sensor data had to be centralized from over 1,200 connected devices across 8 plants."
        }
      ]}
      approachTitle="A Scalable IoT and ML Pipeline"
      approachIntro="NEXDYNE embedded a 3-person data-engineering team specializing in IoT and time-series data — starting with a 2-week pilot at one facility and building toward a platform the client's team could run itself."
      steps={[
        {
          step: "01",
          title: "Pilot, then architect",
          description: "A 2-week pilot instrumented 50 machines with AWS IoT Core, informing a scalable architecture with Kinesis, TimescaleDB, and Spark."
        },
        {
          step: "02",
          title: "Monitor in real time",
          description: "Grafana dashboards displayed equipment health, anomaly alerts, and predictive-maintenance recommendations for plant managers."
        },
        {
          step: "03",
          title: "Calibrate with the experts",
          description: "Engineers worked with maintenance staff to understand failure patterns and tune alert thresholds to real conditions."
        },
        {
          step: "04",
          title: "Transfer the knowledge",
          description: "Terraform and GitHub Actions delivered reproducible infrastructure, while weekly training left the IT team running the platform independently."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "30%",
          label: "Less unplanned downtime",
          detail: "As teams shifted from reactive to proactive maintenance"
        },
        {
          icon: ShieldCheck,
          value: "88%",
          label: "Failures predicted 48–72 hrs out",
          detail: "Letting repairs happen in planned windows"
        },
        {
          icon: DollarSign,
          value: "Year one",
          label: "Payback on the platform",
          detail: "From fewer emergencies and condition-based maintenance"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting Stockouts 35% With ML Demand Forecasting",
          metric: "35%",
          label: "fewer stockouts",
          link: "/cases/retail-demand-forecasting",
          image: "/images/cases/retail-demand-forecasting-hero.jpg"
        },
        {
          title: "Scaling Real-Time Payment Processing 10x",
          metric: "10x",
          label: "transaction capacity",
          link: "/cases/fintech-data-pipeline",
          image: "/images/cases/fintech-data-pipeline-hero.jpg"
        }
      ]}
      ctaTitle="Ready to predict failures before they happen?"
      ctaDescription="Let's talk about what an IoT and ML pipeline could do for your uptime and maintenance cost."
    />
  );
}

export default ManufacturingIoTPipeline;
