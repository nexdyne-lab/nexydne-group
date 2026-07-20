import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Flame, Clock, DollarSign, Eye, Satellite, Activity, ShieldCheck } from "lucide-react";

export default function EnergyGridSecurity() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Preventing Blackouts and Wildfires with Predictive Grid Maintenance | Energy Case Study"
      seoDescription="A major utility faced wildfire liability from aging infrastructure. AI-driven monitoring now catches 95% of ignition sources before they spark — at 30% lower inspection cost."
      canonical="/case-studies/energy-grid-security"
      industry="Energy & Utilities"
      industryLink="/industries/energy-utilities"
      title="How a Major Utility Prevents Blackouts and Wildfires with Predictive Maintenance"
      subtitle="An AI-driven monitoring system identifies 95% of potential ignition sources before they cause fires — protecting communities and infrastructure while moving the utility from reactive outage response to proactive prevention."
      heroImage="/images/industries/energy-wind.jpg"
      metrics={[
        { value: "95%", label: "Ignition Sources Caught" },
        { value: "40%", label: "Shorter Outages" },
        { value: "30%", label: "Lower Inspection Cost" },
        { value: "98%", label: "Hardware Detection Accuracy" }
      ]}
      clientContextTitle="Aging Infrastructure, Rising Stakes"
      clientContextIntro="A major energy utility faced mounting challenges from aging infrastructure and extreme weather. Wildfires caused by equipment failure were a massive liability and safety risk, yet traditional inspection — manual patrols and helicopter surveys — was slow, expensive, and often missed subtle degradation until it was too late."
      clientContextBody="The utility needed to monitor thousands of miles of transmission lines in real time, identifying failure points like vegetation encroachment, conductor damage, and insulator flashovers before they led to catastrophic events. Anything less meant continuing to discover problems only after they had already caused an outage — or a fire."
      clientProfile={{
        industry: "Major Energy Utility",
        companySize: "Thousands of Line-Miles",
        projectDuration: "Grid-Wide Deployment",
        additionalInfo: "Grid Digital Twin",
        additionalLabel: "Simulation Model"
      }}
      challengeTitle="Why Inspections Couldn't Keep Up"
      challenges={[
        {
          icon: Flame,
          title: "Wildfire liability",
          description: "Equipment failure could ignite fires — an enormous safety risk and financial exposure for the utility and the communities it served."
        },
        {
          icon: Eye,
          title: "Slow, incomplete inspection",
          description: "Manual patrols and helicopter surveys were expensive and often missed early signs of degradation until a failure was imminent."
        },
        {
          icon: Activity,
          title: "Invisible high-impedance faults",
          description: "Subtle 'high impedance' faults — frequent precursors to fires — slipped past traditional protection systems entirely."
        },
        {
          icon: Clock,
          title: "Reactive, not preventive",
          description: "Without real-time visibility, crews responded to outages after the fact instead of preventing them in advance."
        }
      ]}
      approachTitle="Seeing Risk Weeks in Advance"
      approachIntro="NEXDYNE deployed a grid-security and predictive-maintenance platform that unified the utility's data and turned thousands of line-miles into a monitored, simulate-able system."
      steps={[
        {
          step: "01",
          title: "One unified data lake",
          description: "We integrated smart meters, SCADA systems, weather stations, and satellite imagery into a single data lake for the whole grid."
        },
        {
          step: "02",
          title: "Computer vision on the lines",
          description: "Vision models analyzed drone and satellite imagery to detect vegetation encroaching on right-of-way zones and identify damaged hardware with 98% accuracy."
        },
        {
          step: "03",
          title: "Catch the faults others miss",
          description: "ML models monitored electrical waveforms to detect high-impedance faults — the fire precursors that traditional protection systems overlooked."
        },
        {
          step: "04",
          title: "A grid digital twin for storms",
          description: "A digital twin simulated stress under different weather conditions, letting operators pre-emptively de-energize high-risk lines during storms while keeping service on elsewhere."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Flame,
          value: "95%",
          label: "Ignition sources identified",
          detail: "Caught before they could cause a fire"
        },
        {
          icon: Clock,
          value: "40%",
          label: "Shorter outages",
          detail: "As crews prioritized by AI risk score"
        },
        {
          icon: DollarSign,
          value: "30%",
          label: "Lower inspection cost",
          detail: "Crews dispatched by risk score, not routine patrol"
        },
        {
          icon: Satellite,
          value: "98%",
          label: "Hardware detection accuracy",
          detail: "From drone and satellite imagery analysis"
        }
      ]}
      quote="This system has fundamentally changed how we operate. We're no longer reacting to outages; we're preventing them. The ability to see potential fire risks weeks in advance has undoubtedly saved lives and property."
      quoteAuthor="Director of Grid Operations"
      quoteRole="Major Energy Utility"
      relatedStudies={[
        {
          title: "Improving Fleet Maintenance with Digital Twins",
          metric: "20%",
          label: "higher availability",
          link: "/case-studies/airline-maintenance-analytics",
          image: "/images/industries/aero-rocket.jpg"
        },
        {
          title: "Modeling Climate Risk to Protect Insurance Portfolios",
          metric: "15%",
          label: "better loss ratio",
          link: "/case-studies/insurance-climate-risk",
          image: "/case-insurance-office.f039a4a1.jpg"
        }
      ]}
      ctaTitle="Ready to see grid risk before it becomes an outage?"
      ctaDescription="Let's talk about what predictive monitoring could prevent across your network."
    />
  );
}
