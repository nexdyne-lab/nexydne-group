import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Building2, Car, Leaf, DollarSign, Wifi, Target, Shield, TrendingUp } from "lucide-react";

export default function SmartCityInfrastructure() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Smart City Infrastructure | Government Case Study"
      seoDescription="How a major city reduced traffic congestion by 30% through smart infrastructure, IoT sensors, and AI-powered traffic management."
      canonical="/cases/smart-city-infrastructure"
      industry="Public Sector"
      industryLink="/industries/public-sector"
      title="City Reduces Traffic Congestion 30% with Smart Infrastructure"
      subtitle="How IoT sensors, AI-powered traffic management, and connected infrastructure transformed urban mobility and quality of life."
      heroImage="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80"
      metrics={[
        { value: "30%", label: "Less Congestion" },
        { value: "25%", label: "Emissions Reduction" },
        { value: "40%", label: "Faster Response" },
        { value: "$120M", label: "Economic Benefit" }
      ]}
      clientContextTitle="A City Gridlocked"
      clientContextIntro="A major metropolitan area of 3 million residents faced a mobility crisis. Traffic congestion cost the economy $2B annually in lost productivity. Average commute times had increased 40% in a decade. Air quality was declining, and residents were frustrated with a transportation system that couldn't keep pace with growth."
      clientContextBody="Traffic signals operated on fixed timing regardless of actual traffic. The city had no real-time visibility into congestion patterns. Emergency vehicles struggled through traffic. Parking searches added 30% to downtown trips. The city needed to get smarter about managing its infrastructure."
      clientProfile={{
        industry: "City Government",
        companySize: "3 Million Residents",
        projectDuration: "48 Months",
        additionalInfo: "2,500 Intersections",
        additionalLabel: "Traffic Network"
      }}
      challengeTitle="Infrastructure That Can't Keep Up"
      challenges={[
        {
          icon: Car,
          title: "Severe Congestion",
          description: "$2B annual economic cost from traffic—commute times up 40% in a decade."
        },
        {
          icon: Target,
          title: "Fixed Timing",
          description: "Traffic signals on fixed schedules regardless of actual conditions—inefficient."
        },
        {
          icon: Shield,
          title: "Emergency Delays",
          description: "Emergency vehicles stuck in traffic—response times increasing, lives at risk."
        },
        {
          icon: Leaf,
          title: "Air Quality",
          description: "Vehicle emissions degrading air quality—health impacts and climate concerns."
        }
      ]}
      approachTitle="Building the Smart City"
      approachIntro="NexDyne designed and implemented a comprehensive smart city platform: IoT sensors for real-time visibility, AI-powered traffic optimization, and connected infrastructure that responded dynamically to conditions."
      steps={[
        {
          step: "01",
          title: "Sensor Network",
          description: "Deployed 10,000+ IoT sensors across the city: traffic cameras with computer vision, road sensors, air quality monitors, and parking sensors. Created real-time visibility into city conditions that didn't exist before."
        },
        {
          step: "02",
          title: "AI Traffic Management",
          description: "Built AI models that optimized traffic signal timing in real-time based on actual conditions. Signals adapted to traffic patterns, special events, and incidents—no more fixed timing ignoring reality."
        },
        {
          step: "03",
          title: "Emergency Preemption",
          description: "Implemented connected vehicle technology for emergency vehicles. Traffic signals automatically cleared paths for ambulances and fire trucks—reducing response times and saving lives."
        },
        {
          step: "04",
          title: "Citizen Applications",
          description: "Launched citizen-facing apps for real-time parking availability, transit information, and traffic conditions. Residents could make smarter travel decisions with accurate, real-time information."
        }
      ]}
      resultsTitle="A City That Works"
      results={[
        {
          icon: Car,
          value: "30%",
          label: "Reduction in congestion",
          detail: "Average commute times down 12 minutes"
        },
        {
          icon: Leaf,
          value: "25%",
          label: "Emissions reduction",
          detail: "From reduced idling and smoother flow"
        },
        {
          icon: Shield,
          value: "40%",
          label: "Faster emergency response",
          detail: "Signal preemption clears paths"
        },
        {
          icon: DollarSign,
          value: "$120M",
          label: "Annual economic benefit",
          detail: "From reduced congestion costs"
        }
      ]}
      quote="Smart infrastructure changed how our city moves. Traffic signals that adapt to conditions, emergency vehicles that get through traffic, citizens who know where to park—it all adds up to a city that works better. We're not just managing traffic; we're improving quality of life."
      quoteAuthor="Mayor Jennifer Williams"
      quoteRole="City of Metropolitan"
      relatedStudies={[
        {
          title: "Digital Services Transformation",
          metric: "40%",
          label: "higher citizen satisfaction",
          link: "/cases/government-digital-services",
          image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=600&q=80"
        },
        {
          title: "AI for Benefits Administration",
          metric: "50%",
          label: "faster eligibility determination",
          link: "/cases/government-benefits-ai",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Build a Smarter City?"
      ctaDescription="Let's discuss how smart infrastructure can transform urban life."
    />
  );
}
