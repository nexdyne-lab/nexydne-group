import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, Plane, Clock, Boxes, Layers, Cpu, Gauge } from "lucide-react";

export default function AirlineMaintenance() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Optimizing Fleet Maintenance with Digital Twins | Travel & Hospitality Case Study"
      seoDescription="A global airline was grounding aircraft longer than necessary. A unified data platform and fleet digital twin cut maintenance costs 15% and lifted aircraft availability 20%."
      canonical="/case-studies/airline-maintenance-analytics"
      industry="Travel & Hospitality"
      industryLink="/industries/travel-hospitality"
      title="How a Global Airline Improved Maintenance Planning with Digital Twins"
      subtitle="A unified data platform and fleet digital-twin simulation optimized spare-parts allocation and maintenance intervals — increasing fleet availability while taking cost and downtime out of every check."
      heroImage="/images/industries/aero-rocket.jpg"
      metrics={[
        { value: "15%", label: "Lower Maintenance Costs" },
        { value: "20%", label: "Higher Aircraft Availability" },
        { value: "30%", label: "Less AOG Time" }
      ]}
      clientContextTitle="A Logistical Puzzle With Aircraft on the Line"
      clientContextIntro="A global airline struggled to optimize its maintenance schedules. Balancing safety requirements, flight schedules, and hangar availability was a complex logistical puzzle — and aircraft were often grounded longer than necessary because a spare part wasn't on hand or labor wasn't allocated efficiently."
      clientContextBody="The airline needed a way to predict maintenance needs more accurately and to simulate how different scheduling strategies would ripple through fleet availability and operational cost. Without it, planners were making high-stakes decisions on incomplete, retrospective information — and paying for it in idle aircraft and reactive parts ordering."
      clientProfile={{
        industry: "Global Airline",
        companySize: "Full Commercial Fleet",
        projectDuration: "Fleet-Wide Rollout",
        additionalInfo: "Digital Twin",
        additionalLabel: "Simulation Model"
      }}
      challengeTitle="Why Aircraft Sat on the Ground"
      challenges={[
        {
          icon: Plane,
          title: "Unnecessary groundings",
          description: "Aircraft were often out of service longer than needed because spare parts weren't available where and when the work happened."
        },
        {
          icon: Boxes,
          title: "Reactive parts allocation",
          description: "Inventory decisions were made after the fact, so the right components rarely sat at the right hub for the routes they served."
        },
        {
          icon: Clock,
          title: "No way to test strategies",
          description: "Planners couldn't safely explore 'what-if' scenarios — every change to a maintenance interval was a gamble against live operations."
        },
        {
          icon: Layers,
          title: "Fragmented aircraft data",
          description: "Flight logs, sensor telemetry, and maintenance records lived apart, so no one had a single, trustworthy history for any aircraft."
        }
      ]}
      approachTitle="A Single History and a Fleet Digital Twin"
      approachIntro="NEXDYNE built a comprehensive digital maintenance-history platform and a fleet digital twin — turning scattered records into a single source of truth planners could actually experiment against."
      steps={[
        {
          step: "01",
          title: "One source of truth per aircraft",
          description: "We integrated flight logs, sensor telemetry, and maintenance records into a unified history for every aircraft in the fleet."
        },
        {
          step: "02",
          title: "Run experiments without risking operations",
          description: "A simulation model let planners test scenarios — 'what happens to availability if we extend Check C by 50 flight hours?' — safely, on a screen instead of on the tarmac."
        },
        {
          step: "03",
          title: "Predict parts demand by hub",
          description: "ML algorithms forecast demand for specific spare parts at each hub based on flight routes and aircraft age, so components were stocked where they'd be needed."
        },
        {
          step: "04",
          title: "Plan proactively, not reactively",
          description: "With precise forecasts and simulation in place, maintenance shifted from reacting to failures to planning the most cost-effective, availability-preserving schedule."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: DollarSign,
          value: "15%",
          label: "Lower maintenance costs",
          detail: "As parts allocation became precise, not reactive"
        },
        {
          icon: Plane,
          value: "20%",
          label: "Higher aircraft availability",
          detail: "More of the fleet in the air, earning revenue"
        },
        {
          icon: Gauge,
          value: "30%",
          label: "Less AOG time",
          detail: "Aircraft-on-ground downtime cut, protecting schedules"
        }
      ]}
      quote="The digital twin allows us to run experiments without risking operations. We've optimized our spare-parts inventory and maintenance intervals in ways we never thought possible, saving millions while keeping our fleet in the air."
      quoteAuthor="VP of Engineering & Maintenance"
      quoteRole="Global Airline"
      relatedStudies={[
        {
          title: "Preventing Blackouts with Predictive Grid Maintenance",
          metric: "95%",
          label: "ignition sources caught",
          link: "/case-studies/energy-grid-security",
          image: "/images/industries/energy-wind.jpg"
        },
        {
          title: "Ensuring Vaccine Safety with IoT Cold Chain",
          metric: "90%",
          label: "less spoilage",
          link: "/case-studies/logistics-cold-chain",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to plan maintenance before it plans you?"
      ctaDescription="Let's talk about what a digital twin could return in availability and cost."
    />
  );
}
