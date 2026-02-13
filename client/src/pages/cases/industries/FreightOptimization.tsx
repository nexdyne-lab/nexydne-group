import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Truck, DollarSign, TrendingUp, Target, Clock, Leaf, BarChart3, Zap } from "lucide-react";

export default function FreightOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Freight Network Optimization | Logistics Case Study"
      seoDescription="How a logistics company reduced transportation costs by 18% through AI-powered network optimization and dynamic routing."
      canonical="/cases/freight-optimization"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="Logistics Company Reduces Freight Costs 18% with AI Optimization"
      subtitle="How machine learning models optimize routing, consolidation, and mode selection across a complex freight network."
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
      metrics={[
        { value: "18%", label: "Cost Reduction" },
        { value: "95%", label: "On-Time Delivery" },
        { value: "$75M", label: "Annual Savings" },
        { value: "20%", label: "Less Emissions" }
      ]}
      clientContextTitle="A Shipper Fighting Rising Freight Costs"
      clientContextIntro="A major consumer goods company shipped $400M in freight annually across a complex network: 50 distribution centers, 10,000 delivery points, and multiple transportation modes. Freight costs had risen 25% in three years while service levels declined. The company was leaving money on the table through suboptimal routing and mode selection."
      clientContextBody="Transportation planning was manual and reactive. Planners made routing decisions based on experience and simple rules. Consolidation opportunities were missed. Mode selection defaulted to truck even when rail or intermodal was cheaper. The company needed AI to optimize decisions across the network."
      clientProfile={{
        industry: "Consumer Goods",
        companySize: "$400M Annual Freight",
        projectDuration: "12 Months",
        additionalInfo: "50 DCs, 10K Destinations",
        additionalLabel: "Network Size"
      }}
      challengeTitle="Complexity Beyond Human Optimization"
      challenges={[
        {
          icon: DollarSign,
          title: "Rising Costs",
          description: "Freight costs up 25% in 3 years—eroding margins and competitive position."
        },
        {
          icon: Target,
          title: "Suboptimal Routing",
          description: "Manual planning missing consolidation and routing optimization opportunities."
        },
        {
          icon: Truck,
          title: "Mode Selection",
          description: "Defaulting to truck when slower, cheaper modes would meet service requirements."
        },
        {
          icon: Clock,
          title: "Service Decline",
          description: "On-time delivery falling to 88%—customer complaints increasing."
        }
      ]}
      approachTitle="AI-Powered Network Optimization"
      approachIntro="NexDyne implemented an AI-powered transportation management platform that optimized routing, consolidation, and mode selection across the entire network in real-time."
      steps={[
        {
          step: "01",
          title: "Network Modeling",
          description: "Built a digital twin of the transportation network: all lanes, rates, transit times, and constraints. Created the foundation for optimization by making the network visible and analyzable."
        },
        {
          step: "02",
          title: "Demand Forecasting",
          description: "Developed ML models that predicted shipment volumes by lane and timing. Accurate forecasts enabled proactive planning and carrier capacity reservation."
        },
        {
          step: "03",
          title: "Route Optimization",
          description: "Implemented optimization algorithms that selected optimal routes, consolidated shipments, and chose transportation modes based on cost, service, and constraints. Decisions made in seconds, not hours."
        },
        {
          step: "04",
          title: "Dynamic Execution",
          description: "Built real-time execution capabilities that adapted to disruptions: rerouting around delays, finding backup capacity, and adjusting plans as conditions changed."
        }
      ]}
      resultsTitle="Transportation Excellence"
      results={[
        {
          icon: DollarSign,
          value: "18%",
          label: "Cost reduction",
          detail: "From optimized routing and mode selection"
        },
        {
          icon: Clock,
          value: "95%",
          label: "On-time delivery",
          detail: "Up from 88%—service restored"
        },
        {
          icon: TrendingUp,
          value: "$75M",
          label: "Annual savings",
          detail: "Across the freight network"
        },
        {
          icon: Leaf,
          value: "20%",
          label: "Emissions reduction",
          detail: "From mode shift and efficiency"
        }
      ]}
      quote="AI optimization transformed our transportation. We went from planners making decisions based on gut feel to algorithms optimizing millions of possibilities. We're spending less, delivering better, and reducing our environmental footprint. The ROI was immediate and substantial."
      quoteAuthor="Michael Torres"
      quoteRole="VP of Supply Chain"
      relatedStudies={[
        {
          title: "Warehouse Automation",
          metric: "45%",
          label: "productivity improvement",
          link: "/cases/warehouse-automation",
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80"
        },
        {
          title: "Last-Mile Delivery Optimization",
          metric: "30%",
          label: "cost reduction",
          link: "/cases/last-mile-optimization",
          image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Optimize Your Network?"
      ctaDescription="Let's discuss how AI can reduce your transportation costs."
    />
  );
}
