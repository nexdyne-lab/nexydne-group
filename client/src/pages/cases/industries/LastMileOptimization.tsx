import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Truck, Clock, DollarSign, Target, Users, Leaf, MapPin, Zap } from "lucide-react";

export default function LastMileOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Last-Mile Delivery Optimization | Logistics Case Study"
      seoDescription="How a delivery company reduced last-mile costs by 30% through AI-powered route optimization and dynamic delivery scheduling."
      canonical="/cases/last-mile-optimization"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="Delivery Company Reduces Last-Mile Costs 30% with AI"
      subtitle="How machine learning models optimize routes, schedules, and capacity in real-time, transforming the economics of last-mile delivery."
      heroImage="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920&q=80"
      metrics={[
        { value: "30%", label: "Cost Reduction" },
        { value: "98%", label: "On-Time Delivery" },
        { value: "25%", label: "More Stops/Route" },
        { value: "35%", label: "Less Emissions" }
      ]}
      clientContextTitle="A Delivery Company Fighting Last-Mile Economics"
      clientContextIntro="A regional delivery company made 50,000 deliveries daily across a dense urban market. Last-mile costs were crushing margins—$8 per delivery against $10 revenue. Customers demanded narrow delivery windows while drivers sat in traffic. The company needed to fundamentally change the economics of last-mile delivery."
      clientContextBody="Route planning was done the night before based on static assumptions. When traffic, weather, or customer changes occurred, routes were already locked. Drivers followed suboptimal paths while dispatchers scrambled to handle exceptions. The company needed dynamic optimization that adapted in real-time."
      clientProfile={{
        industry: "Last-Mile Delivery",
        companySize: "50K Deliveries/Day",
        projectDuration: "12 Months",
        additionalInfo: "500 Vehicles",
        additionalLabel: "Fleet Size"
      }}
      challengeTitle="The Last-Mile Cost Crisis"
      challenges={[
        {
          icon: DollarSign,
          title: "Crushing Costs",
          description: "$8 per delivery against $10 revenue—margins unsustainable."
        },
        {
          icon: Clock,
          title: "Static Planning",
          description: "Routes locked night before—can't adapt to real-time conditions."
        },
        {
          icon: Target,
          title: "Narrow Windows",
          description: "Customers want 2-hour windows—hard to achieve efficiently."
        },
        {
          icon: MapPin,
          title: "Urban Complexity",
          description: "Traffic, parking, building access—countless variables to optimize."
        }
      ]}
      approachTitle="Dynamic Last-Mile Optimization"
      approachIntro="NexDyne implemented an AI-powered last-mile platform that optimized routes dynamically, predicted delivery times accurately, and adapted to real-time conditions."
      steps={[
        {
          step: "01",
          title: "Predictive Travel Times",
          description: "Built ML models that predicted travel times based on time of day, weather, events, and historical patterns. Accurate predictions enabled realistic route planning and customer promises."
        },
        {
          step: "02",
          title: "Dynamic Route Optimization",
          description: "Implemented continuous route optimization that adapted to real-time conditions. As traffic changed, orders were added, or drivers ran ahead/behind, routes automatically reoptimized."
        },
        {
          step: "03",
          title: "Smart Delivery Windows",
          description: "Developed algorithms that offered customers delivery windows based on route efficiency, not arbitrary time slots. Customers got convenience; the company got density."
        },
        {
          step: "04",
          title: "Driver Experience",
          description: "Created a driver app with turn-by-turn navigation, real-time updates, and delivery instructions. Drivers followed optimal paths with all information at their fingertips."
        }
      ]}
      resultsTitle="Last-Mile Excellence"
      results={[
        {
          icon: DollarSign,
          value: "30%",
          label: "Cost reduction",
          detail: "From $8 to $5.60 per delivery"
        },
        {
          icon: Clock,
          value: "98%",
          label: "On-time delivery",
          detail: "Within promised windows"
        },
        {
          icon: Truck,
          value: "25%",
          label: "More stops per route",
          detail: "From optimized sequencing"
        },
        {
          icon: Leaf,
          value: "35%",
          label: "Emissions reduction",
          detail: "From fewer miles driven"
        }
      ]}
      quote="AI optimization changed our business model. We went from losing money on every delivery to building a sustainable business. Routes that used to be planned once are now optimized continuously. Our drivers make more stops in less time, customers get accurate ETAs, and we're finally profitable."
      quoteAuthor="David Chen"
      quoteRole="CEO"
      relatedStudies={[
        {
          title: "Freight Network Optimization",
          metric: "18%",
          label: "cost reduction",
          link: "/cases/freight-optimization",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
        },
        {
          title: "Warehouse Automation",
          metric: "45%",
          label: "productivity improvement",
          link: "/cases/warehouse-automation",
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Optimize Last-Mile?"
      ctaDescription="Let's discuss how AI can transform your delivery economics."
    />
  );
}
