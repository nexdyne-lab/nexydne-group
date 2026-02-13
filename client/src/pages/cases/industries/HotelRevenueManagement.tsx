import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Hotel, DollarSign, TrendingUp, Target, BarChart3, Users, Calendar, Sparkles } from "lucide-react";

export default function HotelRevenueManagement() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="AI Revenue Management for Hotels | Hospitality Case Study"
      seoDescription="How a hotel chain increased RevPAR by 18% through AI-powered dynamic pricing and demand forecasting across 500 properties."
      canonical="/cases/hotel-revenue-management"
      industry="Travel & Hospitality"
      industryLink="/industries/travel-hospitality"
      title="Hotel Chain Increases RevPAR 18% with AI Revenue Management"
      subtitle="How machine learning models optimize pricing in real-time, maximizing revenue across 500 properties and 100,000 rooms."
      heroImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
      metrics={[
        { value: "18%", label: "RevPAR Increase" },
        { value: "$120M", label: "Revenue Gain" },
        { value: "95%", label: "Forecast Accuracy" },
        { value: "500", label: "Properties Optimized" }
      ]}
      clientContextTitle="A Hotel Chain Leaving Money on the Table"
      clientContextIntro="A global hotel chain with 500 properties and 100,000 rooms struggled with pricing. Revenue managers set rates manually based on experience and simple rules. They couldn't react fast enough to demand changes, and pricing varied wildly across similar properties. The chain was leaving $100M+ on the table annually."
      clientContextBody="Competitors with sophisticated revenue management systems were capturing market share. The chain's revenue managers were overwhelmed—each managing 10+ properties with thousands of rate decisions daily. They needed AI to augment human judgment and optimize pricing at scale."
      clientProfile={{
        industry: "Hospitality",
        companySize: "500 Properties",
        projectDuration: "18 Months",
        additionalInfo: "100,000 Rooms",
        additionalLabel: "Portfolio Size"
      }}
      challengeTitle="Manual Pricing at Scale"
      challenges={[
        {
          icon: DollarSign,
          title: "Suboptimal Pricing",
          description: "Manual rate-setting leaving $100M+ annually on the table—can't optimize at scale."
        },
        {
          icon: Target,
          title: "Slow Reaction",
          description: "Demand changes faster than humans can respond—missing revenue opportunities."
        },
        {
          icon: Users,
          title: "Overwhelmed Teams",
          description: "Revenue managers handling 10+ properties each—thousands of decisions daily."
        },
        {
          icon: BarChart3,
          title: "Inconsistent Pricing",
          description: "Similar properties priced differently—no systematic optimization approach."
        }
      ]}
      approachTitle="AI-Powered Revenue Optimization"
      approachIntro="NexDyne implemented an AI-powered revenue management system that forecasted demand, optimized pricing in real-time, and enabled revenue managers to focus on strategy rather than rate-setting."
      steps={[
        {
          step: "01",
          title: "Demand Forecasting",
          description: "Built ML models that predicted demand at the property-room type-day level. Models incorporated historical patterns, events, competitor rates, and market signals. Achieved 95% forecast accuracy."
        },
        {
          step: "02",
          title: "Dynamic Pricing Engine",
          description: "Developed optimization algorithms that set rates in real-time based on demand forecasts, inventory, and business rules. Prices adjusted automatically as conditions changed—no manual intervention required."
        },
        {
          step: "03",
          title: "Competitive Intelligence",
          description: "Integrated real-time competitor rate monitoring. Models learned how demand responded to competitive positioning and optimized rates to maximize revenue share."
        },
        {
          step: "04",
          title: "Revenue Manager Workbench",
          description: "Built tools that let revenue managers set strategy, review recommendations, and override when needed. AI handled routine optimization; humans focused on events, groups, and strategic decisions."
        }
      ]}
      resultsTitle="Revenue Excellence"
      results={[
        {
          icon: TrendingUp,
          value: "18%",
          label: "RevPAR increase",
          detail: "Across the portfolio"
        },
        {
          icon: DollarSign,
          value: "$120M",
          label: "Annual revenue gain",
          detail: "From optimized pricing"
        },
        {
          icon: Target,
          value: "95%",
          label: "Forecast accuracy",
          detail: "Enabling confident pricing decisions"
        },
        {
          icon: Sparkles,
          value: "80%",
          label: "Time savings",
          detail: "Revenue managers focus on strategy"
        }
      ]}
      quote="AI revenue management transformed our business. We went from revenue managers setting rates in spreadsheets to an intelligent system that optimizes millions of rate decisions automatically. Our team now focuses on strategy and relationships—the AI handles the math."
      quoteAuthor="Michael Chen"
      quoteRole="Chief Revenue Officer"
      relatedStudies={[
        {
          title: "Guest Experience Transformation",
          metric: "25pts",
          label: "NPS improvement",
          link: "/cases/hotel-guest-experience",
          image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80"
        },
        {
          title: "Airline Loyalty Program Redesign",
          metric: "40%",
          label: "increase in engagement",
          link: "/cases/airline-loyalty-redesign",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Optimize Revenue?"
      ctaDescription="Let's discuss how AI can maximize your hospitality revenue."
    />
  );
}
