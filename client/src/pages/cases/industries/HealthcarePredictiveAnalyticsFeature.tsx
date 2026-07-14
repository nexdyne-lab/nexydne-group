import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Target, TrendingDown, Users, Zap, CheckCircle } from "lucide-react";

export default function HealthcarePredictiveAnalyticsFeature() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Reducing Patient Wait Times 35% With Predictive Analytics | Case Study"
      seoDescription="A healthcare provider's patients faced long waits that limited access. Predictive analytics that forecast demand and optimized capacity cut patient wait times 35% and improved access across the region."
      canonical="/case-studies/healthcare-predictive-analytics"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="How Predictive Analytics Cut Patient Wait Times by 35%"
      subtitle="Long waits were limiting access to care across the region. Predictive analytics that anticipated demand let the provider match capacity to need and cut the waits substantially."
      heroImage="/case-medical-collaboration.9602cc8c.jpg"
      metrics={[
        { value: "35%", label: "Shorter Wait Times" },
        { value: "Predicted", label: "Demand" },
        { value: "Optimized", label: "Capacity" },
        { value: "Improved", label: "Regional Access" }
      ]}
      clientContextTitle="Waits That Limited Access"
      clientContextIntro="A healthcare provider serving a broad region struggled with patient wait times long enough to genuinely limit access to care. Appointments and capacity were planned reactively, so demand routinely outran available capacity and patients waited far longer than was clinically ideal."
      clientContextBody="The provider was scheduling and staffing without any reliable forecast of demand, so it was always responding to surges after they arrived rather than preparing for them. Capacity sat idle at some times and was overwhelmed at others, and the mismatch showed up as waits that pushed care out of reach for some patients. The provider needed predictive analytics that could forecast demand and let it optimize capacity ahead of time — matching supply to need so waits fell and access improved across the region."
      clientProfile={{
        industry: "Healthcare Provider",
        companySize: "Regional Care Network",
        projectDuration: "6 Months",
        additionalInfo: "Predictive Analytics",
        additionalLabel: "Access & Capacity"
      }}
      challengeTitle="Why Waits Were So Long"
      challenges={[
        { icon: Clock, title: "Reactive Capacity Planning", description: "Scheduling and staffing responded to demand after it arrived, not before." },
        { icon: Target, title: "No Demand Forecast", description: "Without a reliable forecast, the provider could not prepare for surges." },
        { icon: TrendingDown, title: "Supply-Demand Mismatch", description: "Capacity sat idle at times and was overwhelmed at others." },
        { icon: Users, title: "Access Limited", description: "Long waits pushed care out of reach for some patients across the region." }
      ]}
      approachTitle="Forecast Demand, Optimize Capacity"
      approachIntro="We built predictive analytics that forecast patient demand and let the provider optimize capacity ahead of time — cutting patient wait times 35 percent and improving access across the region."
      steps={[
        { step: "01", title: "Modeling Demand", description: "We built models that forecast patient demand so the provider could see surges before they arrived." },
        { step: "02", title: "Optimizing Capacity Ahead of Time", description: "We used the forecasts to match scheduling and staffing to expected demand proactively." },
        { step: "03", title: "Closing the Mismatch", description: "We reduced the supply-demand mismatch so capacity was neither idle nor overwhelmed." },
        { step: "04", title: "Improving Access", description: "We cut wait times 35 percent, extending timely access to care across the region." }
      ]}
      resultsTitle="Shorter Waits, Wider Access"
      results={[
        { icon: TrendingDown, value: "35%", label: "Shorter waits", detail: "For patients" },
        { icon: Zap, value: "Forecast", label: "Demand", detail: "Surges seen in advance" },
        { icon: CheckCircle, value: "Optimized", label: "Capacity", detail: "Matched to need" },
        { icon: Users, value: "Improved", label: "Access", detail: "Across the region" }
      ]}
      quote="Our patients were waiting too long, and long waits mean some people simply do not get care. Predicting demand let us plan capacity ahead of the surges instead of scrambling after them, and wait times fell thirty-five percent. That is not just an efficiency number — it is more people across our region getting care when they need it."
      quoteAuthor="Chief Operating Officer"
      quoteRole="Healthcare provider"
      relatedStudies={[
        { title: "How a Regional Logistics Provider Cut Shipment Errors by 92%", metric: "92%", label: "fewer shipment errors", link: "/case-studies/logistics-shipment-automation", image: "/images/capabilities/cap-robot-factory.jpg" },
        { title: "How a Multi-Channel Retailer Scaled to 12,000+ Daily Orders", metric: "12,000+", label: "daily orders handled", link: "/case-studies/ecommerce-order-fulfillment", image: "/images/industries/retail-shelves.jpg" }
      ]}
      ctaTitle="Are long waits limiting access to your services?"
      ctaDescription="Let's forecast demand and optimize capacity to cut waits and widen access."
    />
  );
}
