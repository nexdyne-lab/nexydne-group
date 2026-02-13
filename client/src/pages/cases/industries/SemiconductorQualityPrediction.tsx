import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Cpu, Target, TrendingUp, Zap, Shield, Database, BarChart3, DollarSign } from "lucide-react";

export default function SemiconductorQualityPrediction() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="AI Quality Prediction for Semiconductor | Manufacturing Case Study"
      seoDescription="How a semiconductor fab achieved 92% defect prediction accuracy using machine learning, reducing scrap by $25M annually."
      canonical="/cases/semiconductor-quality-prediction"
      industry="Manufacturing"
      industryLink="/industries/manufacturing"
      title="Semiconductor Fab Achieves 92% Defect Prediction Accuracy"
      subtitle="How machine learning models analyze process data to predict wafer defects before they occur, reducing scrap costs by $25M annually."
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
      metrics={[
        { value: "92%", label: "Prediction Accuracy" },
        { value: "$25M", label: "Annual Scrap Reduction" },
        { value: "15%", label: "Yield Improvement" },
        { value: "2hrs", label: "Early Detection" }
      ]}
      clientContextTitle="A Fab Fighting Invisible Defects"
      clientContextIntro="A leading semiconductor manufacturer operated a 300mm wafer fab producing advanced logic chips. With wafers worth $10,000+ each and 500+ process steps, even small yield losses translated to massive financial impact. The fab's yield was 3% below target—a $100M annual gap."
      clientContextBody="Defects were detected at final test, days or weeks after the root cause occurred. By then, thousands of defective wafers had been processed through expensive downstream steps. Engineers spent weeks analyzing data to find root causes, while the same defects continued to occur. The fab needed to predict defects in real-time, not detect them after the fact."
      clientProfile={{
        industry: "Semiconductor Manufacturing",
        companySize: "300mm Wafer Fab",
        projectDuration: "12 Months",
        additionalInfo: "500+ Process Steps",
        additionalLabel: "Process Complexity"
      }}
      challengeTitle="The Yield Gap Challenge"
      challenges={[
        {
          icon: Target,
          title: "Late Detection",
          description: "Defects discovered at final test, days after root cause—thousands of wafers already impacted."
        },
        {
          icon: Database,
          title: "Data Overload",
          description: "10TB of process data per day across 500+ steps—impossible for engineers to analyze manually."
        },
        {
          icon: DollarSign,
          title: "Costly Scrap",
          description: "$10,000+ per wafer scrapped, with 3% yield gap costing $100M annually."
        },
        {
          icon: Cpu,
          title: "Complex Interactions",
          description: "Defects caused by subtle interactions between process steps—invisible to traditional SPC."
        }
      ]}
      approachTitle="Predictive Quality at the Speed of Manufacturing"
      approachIntro="NexDyne built an AI-powered quality prediction system that analyzed process data in real-time, predicted defects before they occurred, and guided engineers to root causes—transforming quality from reactive to predictive."
      steps={[
        {
          step: "01",
          title: "Data Integration Platform",
          description: "Built a unified data platform that ingested data from 200+ process tools, metrology systems, and test equipment. Normalized data across tool types and created a complete process genealogy for every wafer."
        },
        {
          step: "02",
          title: "Feature Engineering",
          description: "Engineered 5,000+ features from raw process data: tool-to-tool variations, temporal patterns, recipe deviations, and cross-step correlations. Domain experts validated feature relevance for defect mechanisms."
        },
        {
          step: "03",
          title: "Predictive Models",
          description: "Developed ensemble ML models that predicted defect probability after each critical process step. Models achieved 92% accuracy in predicting yield-impacting defects 2+ hours before traditional detection."
        },
        {
          step: "04",
          title: "Root Cause Analysis",
          description: "Built explainable AI that identified which process parameters drove each prediction. Engineers received actionable insights—not just alerts—enabling rapid root cause identification and correction."
        }
      ]}
      resultsTitle="Transforming Yield Management"
      results={[
        {
          icon: Target,
          value: "92%",
          label: "Defect prediction accuracy",
          detail: "For yield-impacting defect types"
        },
        {
          icon: DollarSign,
          value: "$25M",
          label: "Annual scrap reduction",
          detail: "Early detection prevents downstream processing"
        },
        {
          icon: TrendingUp,
          value: "15%",
          label: "Yield improvement",
          detail: "Closed 50% of the yield gap to target"
        },
        {
          icon: Zap,
          value: "2hrs",
          label: "Earlier detection",
          detail: "Defects caught before downstream processing"
        }
      ]}
      quote="We went from detecting defects at final test to predicting them in real-time. The models see patterns in process data that our best engineers couldn't find in months of analysis. We're not just catching defects earlier—we're preventing them."
      quoteAuthor="Dr. Lisa Chang"
      quoteRole="VP of Manufacturing Technology"
      relatedStudies={[
        {
          title: "Smart Factory Transformation for Automotive",
          metric: "40%",
          label: "OEE improvement",
          link: "/cases/automotive-smart-factory",
          image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80"
        },
        {
          title: "Connected Products for Industrial Equipment",
          metric: "$45M",
          label: "new service revenue",
          link: "/cases/industrial-connected-products",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Your Yield Management?"
      ctaDescription="Let's discuss how predictive quality can improve your manufacturing performance."
    />
  );
}
