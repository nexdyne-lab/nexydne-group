import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Zap, Shield, TrendingUp, Users, Leaf, Clock, BarChart3, DollarSign } from "lucide-react";

export default function UtilityGridModernization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Grid Modernization | Energy & Utilities Case Study"
      seoDescription="How an electric utility achieved 45% reduction in outage duration through smart grid technology and AI-powered grid management."
      canonical="/cases/utility-grid-modernization"
      industry="Energy & Utilities"
      industryLink="/industries/energy-utilities"
      title="Electric Utility Modernizes Grid, Reduces Outages 45%"
      subtitle="How smart grid technology, advanced sensors, and AI-powered analytics transformed grid reliability and enabled renewable integration."
      heroImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
      metrics={[
        { value: "45%", label: "Shorter Outages" },
        { value: "99.98%", label: "Grid Reliability" },
        { value: "$85M", label: "Annual Savings" },
        { value: "30%", label: "Renewable Integration" }
      ]}
      clientContextTitle="An Aging Grid Facing Modern Demands"
      clientContextIntro="A large investor-owned utility serving 4 million customers operated a grid built for one-way power flow from central plants to consumers. But the world had changed: distributed solar was creating two-way flows, electric vehicles were adding load, and customers expected Amazon-level visibility into outages."
      clientContextBody="The grid was flying blind. Operators knew about outages only when customers called. Restoration was slow because crews had to patrol lines to find faults. Voltage fluctuations from rooftop solar caused power quality issues. The utility faced $200M in annual outage costs while regulators demanded reliability improvements."
      clientProfile={{
        industry: "Electric Utility",
        companySize: "4 Million Customers",
        projectDuration: "36 Months",
        additionalInfo: "50,000 Miles of Lines",
        additionalLabel: "Distribution Network"
      }}
      challengeTitle="A 20th Century Grid in a 21st Century World"
      challenges={[
        {
          icon: Zap,
          title: "Outage Blindness",
          description: "No real-time visibility into grid status—outages discovered only when customers reported them."
        },
        {
          icon: Clock,
          title: "Slow Restoration",
          description: "Average 90-minute outage duration—crews patrolling to find faults instead of fixing them."
        },
        {
          icon: Leaf,
          title: "Renewable Challenges",
          description: "Distributed solar causing voltage issues—grid not designed for two-way power flow."
        },
        {
          icon: Shield,
          title: "Aging Infrastructure",
          description: "Equipment failures increasing as assets aged—reactive replacement instead of proactive."
        }
      ]}
      approachTitle="Building the Intelligent Grid"
      approachIntro="NexDyne designed and implemented a comprehensive grid modernization program: smart sensors for visibility, advanced analytics for prediction, and automated systems for rapid response."
      steps={[
        {
          step: "01",
          title: "Sensor Deployment",
          description: "Installed 50,000 smart sensors across the distribution network: fault indicators, voltage monitors, and smart switches. Created real-time visibility into grid status at every point—operators could see problems as they occurred."
        },
        {
          step: "02",
          title: "Advanced Distribution Management",
          description: "Deployed an ADMS platform that integrated sensor data, SCADA, and outage management. Automated fault location, isolation, and service restoration (FLISR) reduced outage duration by 60% for automated circuits."
        },
        {
          step: "03",
          title: "Predictive Analytics",
          description: "Built ML models that predicted equipment failures before they occurred based on sensor data, weather, and asset age. Enabled proactive replacement—fixing problems before they caused outages."
        },
        {
          step: "04",
          title: "Renewable Integration",
          description: "Implemented advanced volt/VAR optimization that managed voltage fluctuations from distributed solar. Enabled 30% renewable penetration without power quality issues—up from 10% before modernization."
        }
      ]}
      resultsTitle="A Smarter, More Reliable Grid"
      results={[
        {
          icon: Clock,
          value: "45%",
          label: "Reduction in outage duration",
          detail: "From 90 to 50 minutes average"
        },
        {
          icon: Shield,
          value: "99.98%",
          label: "Grid reliability",
          detail: "Up from 99.95%—industry leading"
        },
        {
          icon: DollarSign,
          value: "$85M",
          label: "Annual savings",
          detail: "From reduced outage costs and O&M efficiency"
        },
        {
          icon: Leaf,
          value: "30%",
          label: "Renewable penetration",
          detail: "Up from 10%—enabling clean energy transition"
        }
      ]}
      quote="We transformed from a utility that learned about outages from customer calls to one that often restores power before customers know it was out. The smart grid gives us visibility we never had—and the analytics help us prevent problems instead of just reacting to them."
      quoteAuthor="Robert Johnson"
      quoteRole="VP of Grid Operations"
      relatedStudies={[
        {
          title: "AI Forecasting for Renewable Energy",
          metric: "25%",
          label: "improvement in forecast accuracy",
          link: "/cases/renewable-energy-forecasting",
          image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80"
        },
        {
          title: "Digital Transformation for Oil & Gas",
          metric: "$150M",
          label: "operational savings",
          link: "/cases/oil-gas-digital-transformation",
          image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Modernize Your Grid?"
      ctaDescription="Let's discuss how smart grid technology can improve reliability and enable the energy transition."
    />
  );
}
