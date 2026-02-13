import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Search, Clock, Target, Shield, DollarSign, BarChart3, FileCheck, Zap } from "lucide-react";

export default function PEDueDiligence() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Due Diligence Acceleration | Private Equity Case Study"
      seoDescription="How a PE firm accelerated deal evaluation by 50% through AI-powered due diligence and systematic commercial assessment."
      canonical="/cases/pe-due-diligence"
      industry="Private Equity & Principal Investors"
      industryLink="/industries/private-equity"
      title="PE Firm Accelerates Due Diligence 50% with AI-Powered Analysis"
      subtitle="How systematic commercial due diligence and AI-powered analysis enabled faster, more confident deal decisions."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
      metrics={[
        { value: "50%", label: "Faster Evaluation" },
        { value: "3x", label: "More Deals Reviewed" },
        { value: "90%", label: "Prediction Accuracy" },
        { value: "$500M", label: "Avoided Losses" }
      ]}
      clientContextTitle="A PE Firm Drowning in Deal Flow"
      clientContextIntro="A growth equity firm reviewed 500+ deals annually but could only conduct deep due diligence on 50. The bottleneck: commercial due diligence took 6-8 weeks and required expensive external consultants. Good deals were lost to faster competitors while resources were wasted on deals that should have been screened out earlier."
      clientContextBody="Due diligence was manual and inconsistent. Each deal team reinvented the wheel. Market sizing relied on expensive research reports. Customer references were ad hoc. The firm needed to systematize due diligence, accelerate timelines, and improve hit rates."
      clientProfile={{
        industry: "Growth Equity",
        companySize: "$8B AUM",
        projectDuration: "12 Months",
        additionalInfo: "500+ Deals/Year",
        additionalLabel: "Deal Flow"
      }}
      challengeTitle="Due Diligence Bottleneck"
      challenges={[
        {
          icon: Clock,
          title: "Slow Process",
          description: "6-8 weeks for commercial due diligence—losing deals to faster competitors."
        },
        {
          icon: Target,
          title: "Limited Capacity",
          description: "Could only deeply evaluate 50 of 500+ deals—missing good opportunities."
        },
        {
          icon: Search,
          title: "Inconsistent Approach",
          description: "Each deal team reinventing the wheel—no systematic methodology."
        },
        {
          icon: DollarSign,
          title: "Expensive Consultants",
          description: "$500K+ per deal for external due diligence—limiting how many deals could be evaluated."
        }
      ]}
      approachTitle="Systematic Due Diligence"
      approachIntro="NexDyne built an AI-powered due diligence platform that automated market analysis, systematized commercial assessment, and enabled the firm to evaluate more deals faster with higher confidence."
      steps={[
        {
          step: "01",
          title: "Automated Market Analysis",
          description: "Built AI tools that automatically sized markets, identified trends, and mapped competitive landscapes. What took consultants weeks was completed in days with higher accuracy and consistency."
        },
        {
          step: "02",
          title: "Deal Scoring Models",
          description: "Developed ML models that predicted deal success based on company characteristics, market dynamics, and historical outcomes. Models identified which deals deserved deep diligence and which should be passed."
        },
        {
          step: "03",
          title: "Systematic Customer Diligence",
          description: "Created a structured approach to customer references: standardized questions, sentiment analysis, and pattern recognition across deals. Consistent customer insights, not ad hoc conversations."
        },
        {
          step: "04",
          title: "Diligence Playbooks",
          description: "Developed sector-specific diligence playbooks that ensured consistent, comprehensive evaluation. Deal teams followed proven frameworks rather than starting from scratch."
        }
      ]}
      resultsTitle="Diligence Excellence"
      results={[
        {
          icon: Clock,
          value: "50%",
          label: "Faster evaluation",
          detail: "From 6-8 weeks to 3-4 weeks"
        },
        {
          icon: Search,
          value: "3x",
          label: "More deals reviewed",
          detail: "Deeper diligence on 150 vs. 50 deals"
        },
        {
          icon: Target,
          value: "90%",
          label: "Prediction accuracy",
          detail: "Deal scoring models highly predictive"
        },
        {
          icon: Shield,
          value: "$500M",
          label: "Avoided losses",
          detail: "From better deal selection"
        }
      ]}
      quote="AI-powered due diligence changed our competitive position. We can now move faster than competitors while doing deeper analysis. The deal scoring models help us focus on winners and avoid losers. We're not just doing more deals—we're doing better deals."
      quoteAuthor="Jennifer Park"
      quoteRole="Partner, Head of Diligence"
      relatedStudies={[
        {
          title: "Portfolio Operations Excellence",
          metric: "3.2x",
          label: "average returns",
          link: "/cases/pe-portfolio-operations",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
        },
        {
          title: "Carve-Out Execution",
          metric: "6 Months",
          label: "to standalone operations",
          link: "/cases/pe-carveout-execution",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Accelerate Due Diligence?"
      ctaDescription="Let's discuss how systematic diligence can improve your deal outcomes."
    />
  );
}
