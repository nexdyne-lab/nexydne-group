import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, Landmark, Eye, CloudRain, MapPin, Layers, Gauge } from "lucide-react";

export default function InsuranceClimateRisk() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Modeling Climate Risk to Protect Insurance Portfolios | Insurance Case Study"
      seoDescription="A global P&C insurer faced losses as historical data stopped predicting the future. A climate-risk engine improved its loss ratio 15% and cut capital requirements 20%."
      canonical="/case-studies/insurance-climate-risk"
      industry="Insurance"
      industryLink="/industries/insurance"
      title="How a Global Insurer Models Climate Risk to Protect Its Portfolios"
      subtitle="Advanced geospatial analytics and climate modeling enabled more accurate underwriting and portfolio diversification — improving loss ratio 15% and reducing capital requirements 20%."
      heroImage="/case-insurance-office.f039a4a1.jpg"
      metrics={[
        { value: "15%", label: "Better Loss Ratio" },
        { value: "20%", label: "Lower Capital Requirements" },
        { value: "100%", label: "Climate-Exposure Visibility" }
      ]}
      clientContextTitle="When History Stops Predicting the Future"
      clientContextIntro="A global property and casualty insurer faced mounting losses from increasingly frequent and severe weather. Historical loss data was no longer a reliable predictor of future risk, and the insurer's existing models failed to capture granular, localized threats like flash flooding or urban heat islands."
      clientContextBody="To stay solvent and competitive, the insurer needed a forward-looking model that could quantify climate change's impact on its property portfolio over 5-, 10-, and 20-year horizons. Without it, underwriting rested on outdated assumptions and portfolio concentration risks went undetected until catastrophic losses materialized."
      clientProfile={{
        industry: "Global P&C Insurer",
        companySize: "International Portfolio",
        projectDuration: "5–20 Year Horizons",
        additionalInfo: "Property-Level Scoring",
        additionalLabel: "Risk Granularity"
      }}
      challengeTitle="Why the Old Models Fell Short"
      challenges={[
        {
          icon: CloudRain,
          title: "History no longer predicted risk",
          description: "Climate change broke the assumption that past losses forecast future ones, leaving models systematically behind reality."
        },
        {
          icon: MapPin,
          title: "Risk assessed too coarsely",
          description: "Existing models worked at the zip-code level, missing localized threats like flash flooding and urban heat islands."
        },
        {
          icon: Eye,
          title: "Hidden concentration risk",
          description: "Without forward-looking stress testing, dangerous portfolio concentrations went undetected until a catastrophe exposed them."
        },
        {
          icon: Gauge,
          title: "Underwriting on stale assumptions",
          description: "Pricing decisions were based on outdated exposure data, leaving the insurer mispricing risk in both directions."
        }
      ]}
      approachTitle="Risk Scored Property by Property"
      approachIntro="NEXDYNE built a next-generation climate-risk engine that integrated terabytes of geospatial and environmental data — bringing risk assessment down from the zip code to the individual property."
      steps={[
        {
          step: "01",
          title: "Hyper-local risk scoring",
          description: "We combined satellite elevation data, soil-permeability maps, and climate projections to score flood and fire risk at each individual property — not just by zip code."
        },
        {
          step: "02",
          title: "Stress-test the whole portfolio",
          description: "The platform simulated thousands of climate scenarios — a '1-in-100-year storm becoming 1-in-20' — to surface concentration risks and true capital requirements."
        },
        {
          step: "03",
          title: "Price with dynamic risk models",
          description: "Underwriters got real-time risk adjustments for new policies, pricing coverage accurately against current and future climate exposure."
        },
        {
          step: "04",
          title: "Write what competitors couldn't",
          description: "With property-level granularity, the insurer could confidently write business rivals avoided — and reject exposures rivals blindly accepted."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingDown,
          value: "15%",
          label: "Better loss ratio",
          detail: "Through more accurate risk selection and pricing"
        },
        {
          icon: Landmark,
          value: "20%",
          label: "Lower capital requirements",
          detail: "As stress testing revealed diversification opportunities"
        },
        {
          icon: Layers,
          value: "100%",
          label: "Climate-exposure visibility",
          detail: "Across the portfolio, for the first time"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Automating Regulatory Compliance with Fine-Tuned LLMs",
          metric: "60%",
          label: "fewer false positives",
          link: "/case-studies/financial-compliance-automation",
          image: "/images/industries/fin-monitors.jpg"
        },
        {
          title: "Preventing Blackouts with Predictive Grid Maintenance",
          metric: "95%",
          label: "ignition sources caught",
          link: "/case-studies/energy-grid-security",
          image: "/images/industries/energy-wind.jpg"
        }
      ]}
      ctaTitle="Ready to underwrite the climate you'll actually face?"
      ctaDescription="Let's talk about what property-level climate modeling could do for your loss ratio."
    />
  );
}
