import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { FileText, PhoneCall, Route, TrendingDown, Smartphone, PlugZap, WifiOff, DollarSign } from "lucide-react";

export function LogisticsTrackingApp() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Building a Real-Time Tracking App for 500 Drivers | Logistics Case Study"
      seoDescription="A 3PL running 500 vehicles relied on paper manifests and phone check-ins, stuck at 82% on-time. An OutSystems mobile app lifted on-time delivery to 96% and cut daily miles driven 18%."
      canonical="/cases/logistics-tracking-app"
      industry="Transportation & Logistics"
      industryLink="/industries/transportation-logistics"
      title="How a 3PL Built a Real-Time Tracking App for 500 Drivers"
      subtitle="A third-party logistics provider deployed an OutSystems mobile app for package tracking and route optimization — improving on-time delivery from 82% to 96% and cutting daily miles driven 18%."
      heroImage="/images/industries/retail-warehouse.jpg"
      metrics={[
        { value: "96%", label: "On-Time Delivery (from 82%)" },
        { value: "18%", label: "Fewer Miles Driven" },
        { value: "78%", label: "Fewer Customer Calls" }
      ]}
      clientContextTitle="Paper Manifests in an Amazon World"
      clientContextIntro="A third-party logistics provider operating 500 delivery vehicles across the Southeast faced mounting pressure from e-commerce clients demanding Amazon-level visibility. Drivers relied on paper manifests and phone check-ins, making real-time tracking impossible."
      clientContextBody="Dispatchers spent 40% of their time answering “where is my package?” calls, while drivers wasted hours on inefficient routes with no dynamic routing. On-time performance had slipped to 82%, well below the 95% standard, driving SLA penalties and client churn. The legacy TMS lacked mobile, GPS tracking, and proof-of-delivery capture — and major clients were threatening to switch."
      clientProfile={{
        industry: "3PL Provider",
        companySize: "500 Vehicles",
        projectDuration: "10-Week Build",
        additionalInfo: "OutSystems Low-Code",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Delivery Was Falling Behind"
      challenges={[
        {
          icon: FileText,
          title: "Paper manifests, phone check-ins",
          description: "Manual processes made real-time package tracking impossible."
        },
        {
          icon: PhoneCall,
          title: "40% of dispatch time on 'where's my package?'",
          description: "Customer status calls consumed dispatchers who should have been optimizing routes."
        },
        {
          icon: Route,
          title: "No dynamic routing",
          description: "Drivers wasted hours on inefficient routes with no real-time adjustment."
        },
        {
          icon: TrendingDown,
          title: "82% on-time, clients leaving",
          description: "Performance below the 95% standard drove SLA penalties and churn threats."
        }
      ]}
      approachTitle="A Mobile-First Driver App"
      approachIntro="NEXDYNE built native iOS and Android driver apps on OutSystems — grounded in ride-alongs with 25 drivers — with digital manifests, GPS route optimization, and proof-of-delivery capture."
      steps={[
        {
          step: "01",
          title: "Ride along first",
          description: "Ride-alongs with 25 drivers across routes surfaced real workflows, pain points, and device preferences."
        },
        {
          step: "02",
          title: "Digitize the manifest",
          description: "Barcode scanning, GPS route optimization, photo proof-of-delivery, and signature capture replaced paper."
        },
        {
          step: "03",
          title: "Integrate and sync live",
          description: "REST APIs to the legacy TMS delivered real-time status and route assignments, with dispatcher GPS visibility."
        },
        {
          step: "04",
          title: "Work offline",
          description: "Offline mode let drivers keep working in poor-coverage areas, syncing automatically on reconnect."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Route,
          value: "96%",
          label: "On-time delivery",
          detail: "Up from 82%, eliminating SLA penalties"
        },
        {
          icon: DollarSign,
          value: "18%",
          label: "Fewer miles driven daily",
          detail: "Cutting fuel costs and vehicle wear across the fleet"
        },
        {
          icon: Smartphone,
          value: "78%",
          label: "Fewer customer calls",
          detail: "As clients gained real-time tracking, helping win a wave of new contracts"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting Delivery Delays 40% With a Real-Time Dashboard",
          metric: "40%",
          label: "fewer delays",
          link: "/cases/logistics-operations-dashboard",
          image: "/images/cases/logistics-operations-dashboard-hero.jpg"
        },
        {
          title: "Launching a Digital Claims Portal in 8 Weeks",
          metric: "2 hrs",
          label: "processing time",
          link: "/cases/insurance-claims-portal",
          image: "/images/cases/insurance-claims-portal-hero.jpg"
        }
      ]}
      ctaTitle="Ready to give clients real-time visibility?"
      ctaDescription="Let's talk about what a mobile driver app could do for your on-time delivery and costs."
    />
  );
}

export default LogisticsTrackingApp;
