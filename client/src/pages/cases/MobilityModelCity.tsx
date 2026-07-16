import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Car, Wind, Train, Route, Users, Layers, Gauge } from "lucide-react";

export default function MobilityModelCity() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Optimizing City Traffic with a Mobility Digital Twin | Public Sector Case Study"
      seoDescription="A growing European capital faced gridlock and poor air quality. A mobility digital twin let planners test changes before building them — cutting peak congestion 15% and CO2 10%."
      canonical="/case-studies/mobility-model-city"
      industry="Public Sector"
      industryLink="/industries/public-sector"
      title="How a European Capital Optimizes Traffic with a Mobility Digital Twin"
      subtitle="Real-time, multi-modal traffic simulation informed urban-planning decisions — reducing congestion and emissions while letting citizens see the benefits of change before a single lane closed."
      heroImage="/images/industries/auto-robotics-team.jpg"
      metrics={[
        { value: "15%", label: "Less Peak Congestion" },
        { value: "10%", label: "Lower CO2 Emissions" },
        { value: "20%", label: "More Transit Usage" }
      ]}
      clientContextTitle="Ambitious Sustainability Goals, Fear of Gridlock"
      clientContextIntro="A rapidly growing European capital faced severe congestion, poor air quality, and frustrated citizens. Its traffic systems were reactive — adjusting signal timing only after jams had already formed — and planners wanted bolder sustainability moves like bike lanes, pedestrian zones, and low-emission zones."
      clientContextBody="But they feared gridlock if they disrupted existing flows without proper planning. To move forward, the city needed to model the complex interactions of cars, transit, cyclists, and pedestrians — and make infrastructure decisions on data rather than hope."
      clientProfile={{
        industry: "European Capital City Government",
        companySize: "Metropolitan Area",
        projectDuration: "City-Wide Model",
        additionalInfo: "Multi-Modal Twin",
        additionalLabel: "Simulation Scope"
      }}
      challengeTitle="Why Planning Was a Gamble"
      challenges={[
        {
          icon: Car,
          title: "Reactive traffic management",
          description: "Signal timing only adjusted after jams formed, so the city was always a step behind congestion."
        },
        {
          icon: Route,
          title: "No way to test changes safely",
          description: "Bold moves — pedestrian zones, new bus lines, low-emission zones — risked gridlock with no way to model the impact first."
        },
        {
          icon: Layers,
          title: "A complex, non-linear system",
          description: "Cars, transit, cyclists, and pedestrians interacted in ways no traditional model could capture across the whole city."
        },
        {
          icon: Users,
          title: "Winning public support",
          description: "Residents resisted disruptive changes when they couldn't see the benefit — slowing the city's sustainability agenda."
        }
      ]}
      approachTitle="A Digital Twin of the Whole City"
      approachIntro="NEXDYNE co-created a comprehensive mobility digital twin of the entire metropolitan area — a simulation planners and citizens could both use to see the future before building it."
      steps={[
        {
          step: "01",
          title: "Simulate every mode of travel",
          description: "We aggregated GPS, traffic cameras, transit sensors, and mobile-network data to simulate millions of commuters moving across all modes of transport."
        },
        {
          step: "02",
          title: "Test scenarios before committing capital",
          description: "Planners could model closing a street for a pedestrian zone, adding a bus line, or changing signal logic — and see the outcome before touching the real world."
        },
        {
          step: "03",
          title: "Bring citizens into the model",
          description: "An interactive public portal let residents visualize proposed changes — for example, how a new bike lane would cut commute times by reducing car traffic."
        },
        {
          step: "04",
          title: "Validate, then build",
          description: "Optimized signal timing and infrastructure changes were validated in the twin before implementation, reducing costly real-world mistakes."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Gauge,
          value: "15%",
          label: "Less peak congestion",
          detail: "From twin-validated signal and infrastructure changes"
        },
        {
          icon: Wind,
          value: "10%",
          label: "Lower CO2 emissions",
          detail: "As traffic flowed more efficiently"
        },
        {
          icon: Train,
          value: "20%",
          label: "More public-transit use",
          detail: "As residents shifted from cars to transit and cycling"
        }
      ]}
      quote="The digital twin took the guesswork out of urban planning. We could show the public exactly why we were making changes and prove that the outcome would be better for everyone."
      quoteAuthor="Chief Urban Planner"
      quoteRole="European Capital City Government"
      relatedStudies={[
        {
          title: "Preventing Blackouts with Predictive Grid Maintenance",
          metric: "95%",
          label: "ignition sources caught",
          link: "/case-studies/energy-grid-security",
          image: "/images/industries/energy-wind.jpg"
        },
        {
          title: "Accelerating Chip Design with Digital Twins",
          metric: "25%",
          label: "more first-time-right designs",
          link: "/case-studies/semiconductor-design-twin",
          image: "/images/industries/mfg-robotics.jpg"
        }
      ]}
      ctaTitle="Ready to plan your city on data, not guesswork?"
      ctaDescription="Let's talk about what a mobility digital twin could prove before you break ground."
    />
  );
}
