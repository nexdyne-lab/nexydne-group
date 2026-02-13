import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Factory, Cog, TrendingUp, Zap, Shield, Clock, BarChart3, Target } from "lucide-react";

export default function AutomotiveSmartFactory() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Smart Factory Transformation | Manufacturing Case Study"
      seoDescription="How an automotive OEM achieved 40% improvement in OEE through IoT-enabled smart factory transformation and predictive maintenance."
      canonical="/cases/automotive-smart-factory"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="Automotive OEM Transforms Assembly Plant into Smart Factory"
      subtitle="How IoT sensors, real-time analytics, and predictive maintenance improved overall equipment effectiveness by 40% while reducing unplanned downtime."
      heroImage="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80"
      metrics={[
        { value: "40%", label: "OEE Improvement" },
        { value: "65%", label: "Less Unplanned Downtime" },
        { value: "$18M", label: "Annual Savings" },
        { value: "99.2%", label: "Quality Rate" }
      ]}
      clientContextTitle="A Legacy Plant Facing Modern Challenges"
      clientContextIntro="A major automotive OEM operated a 30-year-old assembly plant producing 1,200 vehicles per day. Despite continuous improvement efforts, overall equipment effectiveness (OEE) had plateaued at 62%—well below the 85% world-class benchmark. Unplanned downtime cost $50,000 per hour in lost production."
      clientContextBody="Equipment failures were unpredictable. Maintenance was reactive—fix it when it breaks. Quality issues were detected late in the process, requiring costly rework. The plant manager knew modernization was essential but struggled to build a business case for the investment required."
      clientProfile={{
        industry: "Automotive Manufacturing",
        companySize: "1,200 Vehicles/Day",
        projectDuration: "18 Months",
        additionalInfo: "30-Year-Old Facility",
        additionalLabel: "Plant Age"
      }}
      challengeTitle="The Productivity Plateau"
      challenges={[
        {
          icon: Factory,
          title: "Low OEE",
          description: "62% overall equipment effectiveness vs. 85% world-class benchmark—23% productivity gap."
        },
        {
          icon: Clock,
          title: "Unplanned Downtime",
          description: "Equipment failures caused 180 hours of unplanned downtime monthly, costing $9M annually."
        },
        {
          icon: Shield,
          title: "Quality Escapes",
          description: "Defects detected late in process required costly rework—3.2% of vehicles needed repair."
        },
        {
          icon: Cog,
          title: "Reactive Maintenance",
          description: "No visibility into equipment health until failure occurred—maintenance was firefighting."
        }
      ]}
      approachTitle="Building the Connected Factory"
      approachIntro="NexDyne designed and implemented a comprehensive smart factory transformation, connecting legacy equipment with IoT sensors, building a real-time analytics platform, and deploying AI-powered predictive maintenance."
      steps={[
        {
          step: "01",
          title: "IoT Sensor Deployment",
          description: "Installed 2,500 sensors across critical equipment: vibration monitors on motors, temperature sensors on bearings, current monitors on drives, and vision systems at quality checkpoints. Edge computing processed data locally for real-time response."
        },
        {
          step: "02",
          title: "Digital Twin Platform",
          description: "Built a real-time digital twin of the production line that visualized equipment status, production flow, and quality metrics. Operators could see bottlenecks forming and respond before they impacted throughput."
        },
        {
          step: "03",
          title: "Predictive Maintenance",
          description: "Developed ML models that predicted equipment failures 2-3 weeks in advance based on sensor patterns. Maintenance shifted from reactive to predictive—fixing issues during planned downtime before they caused failures."
        },
        {
          step: "04",
          title: "Quality Intelligence",
          description: "Deployed computer vision systems that detected defects in real-time at each station. When quality issues emerged, the system traced root causes to upstream processes and alerted operators immediately."
        }
      ]}
      resultsTitle="World-Class Performance Achieved"
      results={[
        {
          icon: TrendingUp,
          value: "40%",
          label: "OEE improvement",
          detail: "From 62% to 87%—exceeding world-class benchmark"
        },
        {
          icon: Zap,
          value: "65%",
          label: "Reduction in unplanned downtime",
          detail: "From 180 to 63 hours monthly"
        },
        {
          icon: BarChart3,
          value: "$18M",
          label: "Annual savings",
          detail: "From increased throughput and reduced maintenance"
        },
        {
          icon: Shield,
          value: "99.2%",
          label: "First-pass quality rate",
          detail: "Up from 96.8%—80% fewer defects"
        }
      ]}
      quote="We transformed a 30-year-old plant into one of the most advanced factories in our network. The ROI was clear within 6 months—we're producing more vehicles, with higher quality, at lower cost. But the real win is the culture change: our teams now use data to drive decisions."
      quoteAuthor="James Morrison"
      quoteRole="Plant Manager"
      relatedStudies={[
        {
          title: "AI Quality Prediction for Semiconductor Fab",
          metric: "92%",
          label: "defect prediction accuracy",
          link: "/cases/semiconductor-quality-prediction",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
        },
        {
          title: "Connected Products for Industrial Equipment",
          metric: "$45M",
          label: "new service revenue",
          link: "/cases/industrial-connected-products",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Your Factory?"
      ctaDescription="Let's discuss how smart factory technologies can improve your operational performance."
    />
  );
}
