import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Factory, TrendingUp, Target, Cog, Leaf, Shield, Zap } from "lucide-react";

export default function ChemicalPlantOptimization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Plant Optimization | Chemicals Case Study"
      seoDescription="How a chemical manufacturer improved plant yield by 12% through AI-powered process optimization and predictive quality control."
      canonical="/cases/chemical-plant-optimization"
      industry="Chemicals"
      industryLink="/industries/manufacturing"
      title="Chemical Manufacturer Improves Yield 12% with AI Optimization"
      subtitle="How machine learning models optimize process parameters in real-time, maximizing yield while maintaining quality and safety."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "12%", label: "Yield Improvement" },
        { value: "95%", label: "Final Yield" },
        { value: "40%", label: "Less Off-Spec" },
        { value: "99.5%", label: "Quality Rate" }
      ]}
      clientContextTitle="A Chemical Plant Leaving Yield on the Table"
      clientContextIntro="A specialty chemicals manufacturer operated a complex continuous process at industrial scale. Yield averaged 85%—industry benchmarks suggested 92% was achievable. That 7-point gap represented a heavy annual value loss. Operators ran the plant conservatively, leaving optimization potential untapped."
      clientContextBody="The process had thousands of variables interacting in complex ways. Operators relied on experience and standard operating procedures. When conditions changed, they adjusted based on intuition. The plant generated terabytes of data, but it sat unused. The manufacturer needed AI to unlock the optimization potential."
      clientProfile={{
        industry: "Specialty Chemicals",
        companySize: "24/7 Continuous Process",
        projectDuration: "18 Months",
        additionalInfo: "85% Starting Yield",
        additionalLabel: "Baseline Performance"
      }}
      challengeTitle="Optimization Beyond Human Capability"
      challenges={[
        {
          icon: TrendingUp,
          title: "Suboptimal Yield",
          description: "85% yield vs. 92% benchmark—a seven-point value gap, year after year."
        },
        {
          icon: Cog,
          title: "Process Complexity",
          description: "Thousands of interacting variables—too complex for human optimization."
        },
        {
          icon: Target,
          title: "Conservative Operation",
          description: "Operators running safe, not optimal—leaving performance on the table."
        },
        {
          icon: Shield,
          title: "Quality Variability",
          description: "5% off-spec production requiring rework or downgrade."
        }
      ]}
      approachTitle="AI-Powered Process Optimization"
      approachIntro="NexDyne implemented an AI-powered optimization platform that modeled process behavior, recommended optimal setpoints, and enabled operators to push performance while maintaining safety."
      steps={[
        {
          step: "01",
          title: "Process Digital Twin",
          description: "Built a digital twin that modeled process behavior from historical data. ML models learned relationships between inputs, conditions, and outputs that weren't captured in first-principles models."
        },
        {
          step: "02",
          title: "Real-Time Optimization",
          description: "Deployed optimization algorithms that recommended setpoints in real-time based on current conditions and objectives. Operators received guidance on how to maximize yield while maintaining quality."
        },
        {
          step: "03",
          title: "Predictive Quality",
          description: "Implemented soft sensors that predicted product quality in real-time from process data. Operators could adjust before quality drifted out of spec, not after."
        },
        {
          step: "04",
          title: "Operator Augmentation",
          description: "Created operator interfaces that explained recommendations and built trust. Operators remained in control but had AI assistance. Adoption was high because value was clear."
        }
      ]}
      resultsTitle="Yield Excellence"
      results={[
        {
          icon: TrendingUp,
          value: "12%",
          label: "Yield improvement",
          detail: "From 85% to 95%—exceeding benchmark"
        },
        {
          icon: Zap,
          value: "95%",
          label: "Final yield",
          detail: "Up from 85%—above the 92% benchmark"
        },
        {
          icon: Target,
          value: "40%",
          label: "Less off-spec production",
          detail: "From predictive quality control"
        },
        {
          icon: Shield,
          value: "99.5%",
          label: "Quality rate",
          detail: "Consistent, on-spec production"
        }
      ]}
      quote="AI optimization unlocked performance we didn't know was possible. Our operators are still in control, but now they have AI assistance that sees patterns they can't. We're producing more product, higher quality, with the same equipment. The ROI was extraordinary."
      quoteAuthor="Dr. Michael Chen"
      quoteRole="VP of Manufacturing"
      relatedStudies={[
        {
          title: "Supply Chain Resilience",
          metric: "30%",
          label: "reduction in disruptions",
          link: "/cases/chemical-supply-chain",
          image: "/images/industries/meeting-topview.jpg"
        },
        {
          title: "Sustainability Transformation",
          metric: "25%",
          label: "emissions reduction",
          link: "/cases/chemical-sustainability",
          image: "/images/capabilities/cap-data-bars.jpg"
        }
      ]}
      ctaTitle="Ready to Optimize Your Plant?"
      ctaDescription="Let's discuss how AI can unlock your yield potential."
    />
  );
}
