import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Plane, Cog, Shield, Clock, DollarSign, Target, Activity, TrendingUp } from "lucide-react";

export default function AviationPredictiveMaintenance() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Predictive Maintenance for Aviation | Aerospace Case Study"
      seoDescription="How an airline reduced unscheduled maintenance by 50% through AI-powered predictive maintenance and real-time aircraft health monitoring."
      canonical="/cases/aviation-predictive-maintenance"
      industry="Aerospace & Defense"
      industryLink="/industries/aerospace-defense"
      title="Airline Reduces Unscheduled Maintenance 50% with Predictive AI"
      subtitle="How real-time aircraft health monitoring and machine learning predict failures before they ground aircraft, maximizing fleet availability."
      heroImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
      metrics={[
        { value: "50%", label: "Less Unscheduled Mx" },
        { value: "99.2%", label: "Dispatch Reliability" },
        { value: "$95M", label: "Annual Savings" },
        { value: "30 Days", label: "Advance Warning" }
      ]}
      clientContextTitle="An Airline Fighting Unscheduled Maintenance"
      clientContextIntro="A major airline operated a fleet of 400 aircraft, flying 2,500 daily departures. Unscheduled maintenance was the enemy—each aircraft-on-ground (AOG) event cost $150K+ in delays, rebookings, and customer compensation. The airline averaged 200 AOG events annually, costing $300M and damaging customer trust."
      clientContextBody="Maintenance was scheduled based on flight hours and cycles, not actual component condition. Aircraft systems generated terabytes of data, but it sat unused. Mechanics discovered problems during inspections or when something broke. The airline needed to predict failures before they disrupted operations."
      clientProfile={{
        industry: "Commercial Aviation",
        companySize: "400 Aircraft Fleet",
        projectDuration: "24 Months",
        additionalInfo: "2,500 Daily Departures",
        additionalLabel: "Operations Scale"
      }}
      challengeTitle="The Cost of Unscheduled Maintenance"
      challenges={[
        {
          icon: Plane,
          title: "AOG Events",
          description: "200 aircraft-on-ground events annually—$300M in direct costs and customer impact."
        },
        {
          icon: Clock,
          title: "Time-Based Maintenance",
          description: "Maintenance scheduled by hours/cycles, not condition—missing actual degradation."
        },
        {
          icon: Activity,
          title: "Unused Data",
          description: "Terabytes of aircraft data generated but not analyzed—insights sitting unused."
        },
        {
          icon: Target,
          title: "Reactive Discovery",
          description: "Problems found during inspections or failures—too late to prevent disruption."
        }
      ]}
      approachTitle="Predictive Aircraft Health"
      approachIntro="NexDyne implemented an AI-powered predictive maintenance platform that monitored aircraft health in real-time, predicted failures weeks in advance, and enabled proactive maintenance that prevented disruptions."
      steps={[
        {
          step: "01",
          title: "Data Integration",
          description: "Built a platform that ingested real-time data from aircraft systems: engine parameters, flight control data, environmental systems, and maintenance records. Created a complete digital picture of each aircraft's health."
        },
        {
          step: "02",
          title: "Failure Pattern Learning",
          description: "Analyzed 10 years of maintenance history to identify patterns that preceded failures. ML models learned the signatures of component degradation across 50+ failure modes—from engine issues to avionics faults."
        },
        {
          step: "03",
          title: "Real-Time Monitoring",
          description: "Deployed models that continuously scored aircraft health during flight. Alerts triggered when degradation patterns emerged—30 days average advance warning for most failure modes."
        },
        {
          step: "04",
          title: "Maintenance Integration",
          description: "Integrated predictions with maintenance planning. Proactive repairs scheduled during planned maintenance windows. Parts pre-positioned at destination stations. No more surprises."
        }
      ]}
      resultsTitle="Fleet Reliability Transformed"
      results={[
        {
          icon: Cog,
          value: "50%",
          label: "Reduction in unscheduled maintenance",
          detail: "From 200 to 100 AOG events annually"
        },
        {
          icon: Shield,
          value: "99.2%",
          label: "Dispatch reliability",
          detail: "Up from 98.5%—industry leading"
        },
        {
          icon: DollarSign,
          value: "$95M",
          label: "Annual savings",
          detail: "From avoided disruptions and optimized maintenance"
        },
        {
          icon: Clock,
          value: "30 Days",
          label: "Average advance warning",
          detail: "Time to plan and execute repairs"
        }
      ]}
      quote="Predictive maintenance changed how we think about reliability. We used to wait for things to break—now we fix them before they do. Our mechanics aren't heroes responding to emergencies; they're professionals executing planned maintenance. Our passengers get where they're going, on time."
      quoteAuthor="Captain James Rodriguez"
      quoteRole="VP of Technical Operations"
      relatedStudies={[
        {
          title: "Supply Chain Optimization for Defense",
          metric: "35%",
          label: "better parts availability",
          link: "/cases/defense-supply-chain",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
        },
        {
          title: "Digital Engineering for Aerospace",
          metric: "40%",
          label: "faster development cycles",
          link: "/cases/aerospace-digital-engineering",
          image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Predict Aircraft Failures?"
      ctaDescription="Let's discuss how predictive maintenance can maximize your fleet availability."
    />
  );
}
