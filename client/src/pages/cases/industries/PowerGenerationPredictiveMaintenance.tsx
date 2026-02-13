import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Zap, Cog, TrendingUp, Shield, DollarSign, Clock, Target, Activity } from "lucide-react";

export default function PowerGenerationPredictiveMaintenance() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Predictive Maintenance for Power Generation | Energy Case Study"
      seoDescription="How a power generation company reduced unplanned outages by 60% through AI-powered predictive maintenance across its fleet of gas turbines."
      canonical="/cases/power-generation-predictive-maintenance"
      industry="Energy & Utilities"
      industryLink="/industries/energy-utilities"
      title="Power Generator Reduces Unplanned Outages 60% with Predictive AI"
      subtitle="How machine learning models predict equipment failures weeks in advance, enabling proactive maintenance and maximizing generation availability."
      heroImage="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1920&q=80"
      metrics={[
        { value: "60%", label: "Fewer Unplanned Outages" },
        { value: "95%", label: "Availability Rate" },
        { value: "$42M", label: "Annual Savings" },
        { value: "3 Weeks", label: "Advance Warning" }
      ]}
      clientContextTitle="A Generator Fighting Unplanned Downtime"
      clientContextIntro="A major power generation company operated a fleet of 40 gas turbines across 15 plants, representing 12GW of capacity. Unplanned outages were costly—each turbine trip meant $500K+ in lost revenue plus emergency repair costs. The fleet averaged 15 unplanned outages per year, costing $75M annually."
      clientContextBody="Maintenance was time-based, not condition-based. Turbines were overhauled on fixed schedules regardless of actual condition—sometimes too early (wasting useful life), sometimes too late (after failures occurred). Engineers monitored thousands of sensor readings manually, unable to detect the subtle patterns that preceded failures."
      clientProfile={{
        industry: "Power Generation",
        companySize: "12GW Fleet Capacity",
        projectDuration: "18 Months",
        additionalInfo: "40 Gas Turbines",
        additionalLabel: "Fleet Size"
      }}
      challengeTitle="The Cost of Unplanned Downtime"
      challenges={[
        {
          icon: Zap,
          title: "Costly Outages",
          description: "$75M annual cost from 15 unplanned outages—lost revenue plus emergency repairs."
        },
        {
          icon: Clock,
          title: "Time-Based Maintenance",
          description: "Fixed overhaul schedules ignored actual equipment condition—suboptimal timing."
        },
        {
          icon: Activity,
          title: "Data Overload",
          description: "Thousands of sensor readings per turbine—impossible for humans to detect failure patterns."
        },
        {
          icon: Shield,
          title: "Reactive Culture",
          description: "Organization responded to failures rather than preventing them—firefighting mode."
        }
      ]}
      approachTitle="From Reactive to Predictive"
      approachIntro="NexDyne implemented an AI-powered predictive maintenance platform that monitored turbine health in real-time, predicted failures weeks in advance, and optimized maintenance scheduling."
      steps={[
        {
          step: "01",
          title: "Data Infrastructure",
          description: "Built a centralized platform that ingested real-time data from all 40 turbines: 2,000+ sensors per unit covering temperatures, pressures, vibrations, and performance parameters. Created a unified view of fleet health."
        },
        {
          step: "02",
          title: "Failure Pattern Learning",
          description: "Analyzed 10 years of historical data to identify patterns that preceded failures. ML models learned the signatures of bearing degradation, combustion issues, compressor fouling, and other failure modes."
        },
        {
          step: "03",
          title: "Real-Time Monitoring",
          description: "Deployed models that continuously scored each turbine's health and predicted remaining useful life for critical components. Alerts triggered when degradation patterns emerged—3 weeks average advance warning."
        },
        {
          step: "04",
          title: "Maintenance Optimization",
          description: "Integrated predictions with maintenance planning. Shifted from time-based to condition-based maintenance—performing work when needed, not on arbitrary schedules. Optimized outage timing for market conditions."
        }
      ]}
      resultsTitle="Reliability Transformed"
      results={[
        {
          icon: Shield,
          value: "60%",
          label: "Fewer unplanned outages",
          detail: "From 15 to 6 per year across fleet"
        },
        {
          icon: TrendingUp,
          value: "95%",
          label: "Fleet availability",
          detail: "Up from 91%—industry leading"
        },
        {
          icon: DollarSign,
          value: "$42M",
          label: "Annual savings",
          detail: "From avoided outages and optimized maintenance"
        },
        {
          icon: Clock,
          value: "3 Weeks",
          label: "Average advance warning",
          detail: "Time to plan and execute repairs"
        }
      ]}
      quote="Predictive maintenance changed our culture from reactive to proactive. We used to celebrate heroic responses to failures—now we celebrate preventing them. The AI sees patterns in sensor data that our best engineers couldn't detect. We're not just maintaining turbines better—we're operating them better."
      quoteAuthor="Thomas Anderson"
      quoteRole="VP of Asset Management"
      relatedStudies={[
        {
          title: "Grid Modernization for Electric Utility",
          metric: "45%",
          label: "reduction in outage duration",
          link: "/cases/utility-grid-modernization",
          image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80"
        },
        {
          title: "AI Forecasting for Renewable Energy",
          metric: "25%",
          label: "improvement in forecast accuracy",
          link: "/cases/renewable-energy-forecasting",
          image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Predict Equipment Failures?"
      ctaDescription="Let's discuss how predictive maintenance can maximize your asset availability."
    />
  );
}
