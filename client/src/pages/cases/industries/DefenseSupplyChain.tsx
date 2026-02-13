import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Plane, Package, Shield, Clock, DollarSign, Target, Truck, BarChart3 } from "lucide-react";

export default function DefenseSupplyChain() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Supply Chain Optimization | Defense Case Study"
      seoDescription="How a defense contractor improved parts availability by 35% through AI-powered supply chain optimization and predictive logistics."
      canonical="/cases/defense-supply-chain"
      industry="Aerospace & Defense"
      industryLink="/industries/aerospace-defense"
      title="Defense Contractor Improves Parts Availability 35%"
      subtitle="How AI-powered supply chain optimization and predictive logistics transformed mission readiness while reducing inventory costs."
      heroImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
      metrics={[
        { value: "35%", label: "Better Availability" },
        { value: "25%", label: "Less Inventory" },
        { value: "98%", label: "Mission Readiness" },
        { value: "$180M", label: "Annual Savings" }
      ]}
      clientContextTitle="A Defense Giant Fighting Supply Chain Complexity"
      clientContextIntro="A major defense contractor supported 5,000+ aircraft across 200 global locations. Parts availability was critical—a grounded aircraft meant a failed mission. But the supply chain was struggling: 15% of aircraft were grounded waiting for parts, while $2B in inventory sat unused in warehouses."
      clientContextBody="The supply chain was reactive—ordering parts after failures occurred. Demand forecasting was poor for low-volume, high-criticality parts. Inventory was positioned based on historical patterns, not predicted needs. The contractor needed to predict demand, position inventory proactively, and ensure the right part was in the right place at the right time."
      clientProfile={{
        industry: "Defense Contractor",
        companySize: "$25B Annual Revenue",
        projectDuration: "24 Months",
        additionalInfo: "5,000+ Aircraft",
        additionalLabel: "Fleet Supported"
      }}
      challengeTitle="Mission Readiness at Risk"
      challenges={[
        {
          icon: Plane,
          title: "Aircraft Groundings",
          description: "15% of aircraft grounded waiting for parts—mission capability compromised."
        },
        {
          icon: Package,
          title: "Excess Inventory",
          description: "$2B in inventory sitting unused—capital tied up in wrong parts, wrong places."
        },
        {
          icon: Target,
          title: "Poor Forecasting",
          description: "Demand forecasting failed for low-volume, high-criticality parts—the ones that matter most."
        },
        {
          icon: Truck,
          title: "Reactive Positioning",
          description: "Inventory positioned based on history, not predicted needs—always behind."
        }
      ]}
      approachTitle="Predictive Supply Chain"
      approachIntro="NexDyne built an AI-powered supply chain platform that predicted part failures, optimized inventory positioning, and enabled proactive logistics—transforming from reactive to predictive supply chain management."
      steps={[
        {
          step: "01",
          title: "Failure Prediction",
          description: "Developed ML models that predicted part failures based on aircraft usage, operating conditions, and maintenance history. Models predicted 80% of failures 30+ days in advance—time to position parts."
        },
        {
          step: "02",
          title: "Demand Sensing",
          description: "Built demand sensing that combined failure predictions with maintenance schedules, mission plans, and historical patterns. Created accurate demand forecasts even for low-volume parts."
        },
        {
          step: "03",
          title: "Inventory Optimization",
          description: "Implemented optimization algorithms that positioned inventory across 200 locations based on predicted demand and criticality. Right parts moved to right places before they were needed."
        },
        {
          step: "04",
          title: "Logistics Orchestration",
          description: "Built a logistics platform that orchestrated shipments across commercial and military transport. Automated expediting for critical parts, optimized routing for cost efficiency."
        }
      ]}
      resultsTitle="Mission-Ready Supply Chain"
      results={[
        {
          icon: Shield,
          value: "35%",
          label: "Improvement in availability",
          detail: "Parts available when and where needed"
        },
        {
          icon: Package,
          value: "25%",
          label: "Inventory reduction",
          detail: "$500M freed from excess inventory"
        },
        {
          icon: Plane,
          value: "98%",
          label: "Mission readiness",
          detail: "Up from 85%—aircraft ready to fly"
        },
        {
          icon: DollarSign,
          value: "$180M",
          label: "Annual savings",
          detail: "From inventory and logistics optimization"
        }
      ]}
      quote="We transformed from a supply chain that reacted to failures to one that predicts and prevents them. When we know a part will fail in 30 days, we can have the replacement waiting. Mission readiness isn't about having more inventory—it's about having the right inventory in the right place."
      quoteAuthor="General (Ret.) Michael Thompson"
      quoteRole="VP of Global Logistics"
      relatedStudies={[
        {
          title: "Digital Engineering for Aerospace",
          metric: "40%",
          label: "faster development cycles",
          link: "/cases/aerospace-digital-engineering",
          image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600&q=80"
        },
        {
          title: "Predictive Maintenance for Aviation",
          metric: "50%",
          label: "reduction in unscheduled maintenance",
          link: "/cases/aviation-predictive-maintenance",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Optimize Your Supply Chain?"
      ctaDescription="Let's discuss how predictive logistics can improve mission readiness."
    />
  );
}
