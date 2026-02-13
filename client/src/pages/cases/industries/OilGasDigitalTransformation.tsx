import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Droplet, TrendingUp, Shield, DollarSign, Cog, Database, Target, Zap } from "lucide-react";

export default function OilGasDigitalTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Digital Transformation for Oil & Gas | Energy Case Study"
      seoDescription="How an oil and gas company achieved $150M in operational savings through digital oilfield technology and AI-powered production optimization."
      canonical="/cases/oil-gas-digital-transformation"
      industry="Energy & Utilities"
      industryLink="/industries/energy-utilities"
      title="Oil & Gas Company Saves $150M Through Digital Transformation"
      subtitle="How digital oilfield technology, AI-powered optimization, and predictive maintenance transformed upstream operations."
      heroImage="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80"
      metrics={[
        { value: "$150M", label: "Annual Savings" },
        { value: "8%", label: "Production Increase" },
        { value: "40%", label: "Less Downtime" },
        { value: "25%", label: "Lower Lifting Costs" }
      ]}
      clientContextTitle="An Operator Seeking Efficiency in a Low-Price World"
      clientContextIntro="A major independent oil and gas company operated 15,000 wells across multiple basins. With commodity prices volatile and margins compressed, the company needed to reduce operating costs while maintaining production. Traditional approaches—cutting headcount, deferring maintenance—had reached their limits."
      clientContextBody="Operations were data-rich but insight-poor. Wells generated terabytes of sensor data, but engineers analyzed spreadsheets manually. Production optimization was reactive—responding to problems rather than preventing them. The company knew digital technology could help but struggled to move beyond pilots to enterprise-scale impact."
      clientProfile={{
        industry: "Oil & Gas E&P",
        companySize: "15,000 Wells",
        projectDuration: "24 Months",
        additionalInfo: "500,000 BOE/Day",
        additionalLabel: "Production"
      }}
      challengeTitle="Margin Pressure in a Volatile Market"
      challenges={[
        {
          icon: DollarSign,
          title: "High Lifting Costs",
          description: "$12/BOE lifting costs—20% above efficient operators, eroding margins in low-price environment."
        },
        {
          icon: Cog,
          title: "Reactive Operations",
          description: "Equipment failures discovered after production loss—no predictive capability to prevent downtime."
        },
        {
          icon: Database,
          title: "Data Silos",
          description: "Production, maintenance, and reservoir data in separate systems—no integrated view of well performance."
        },
        {
          icon: Target,
          title: "Suboptimal Production",
          description: "Wells not producing at potential—manual optimization couldn't keep pace with changing conditions."
        }
      ]}
      approachTitle="The Digital Oilfield"
      approachIntro="NexDyne designed and implemented a comprehensive digital transformation: connected wells, integrated data platform, AI-powered optimization, and predictive maintenance—creating a digital oilfield that optimized every barrel."
      steps={[
        {
          step: "01",
          title: "Connected Wells",
          description: "Deployed IoT sensors and edge computing across 15,000 wells. Real-time data on pressures, temperatures, flow rates, and equipment status streamed to cloud platform. Created visibility that didn't exist before."
        },
        {
          step: "02",
          title: "Integrated Data Platform",
          description: "Built a unified data platform that combined production, maintenance, reservoir, and financial data. Engineers could see complete well performance in one view—from reservoir to revenue."
        },
        {
          step: "03",
          title: "AI Production Optimization",
          description: "Deployed ML models that continuously optimized well settings—artificial lift parameters, choke positions, chemical injection rates. Models learned optimal settings for each well's unique characteristics."
        },
        {
          step: "04",
          title: "Predictive Maintenance",
          description: "Built models that predicted equipment failures 2-4 weeks in advance based on sensor patterns. Enabled proactive maintenance—fixing problems before they caused production loss."
        }
      ]}
      resultsTitle="Operational Excellence Achieved"
      results={[
        {
          icon: DollarSign,
          value: "$150M",
          label: "Annual savings",
          detail: "From reduced costs and increased production"
        },
        {
          icon: TrendingUp,
          value: "8%",
          label: "Production increase",
          detail: "From AI-powered optimization"
        },
        {
          icon: Cog,
          value: "40%",
          label: "Reduction in downtime",
          detail: "Predictive maintenance prevents failures"
        },
        {
          icon: Target,
          value: "25%",
          label: "Lower lifting costs",
          detail: "From $12 to $9/BOE"
        }
      ]}
      quote="Digital transformation changed how we operate. We went from engineers analyzing spreadsheets to AI optimizing 15,000 wells in real-time. We're producing more oil with less cost, and our teams focus on high-value decisions instead of data gathering. This is what modern oil and gas operations look like."
      quoteAuthor="James Mitchell"
      quoteRole="Chief Operating Officer"
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
      ctaTitle="Ready to Digitize Your Operations?"
      ctaDescription="Let's discuss how digital oilfield technology can transform your performance."
    />
  );
}
