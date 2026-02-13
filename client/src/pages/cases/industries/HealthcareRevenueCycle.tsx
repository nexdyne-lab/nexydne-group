import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { DollarSign, Clock, FileCheck, TrendingUp, Zap, BarChart3, Target, Shield } from "lucide-react";

export default function HealthcareRevenueCycle() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Revenue Cycle Optimization | Healthcare Case Study"
      seoDescription="How a health system recovered $32M in annual revenue through AI-powered coding optimization, denial prevention, and automated claims management."
      canonical="/cases/healthcare-revenue-cycle"
      industry="Healthcare"
      industryLink="/industries/healthcare"
      title="Health System Recovers $32M Through Revenue Cycle Transformation"
      subtitle="How AI-powered coding optimization, denial prevention, and automated claims management transformed financial performance."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      metrics={[
        { value: "$32M", label: "Recovered Revenue" },
        { value: "45%", label: "Denial Rate Reduction" },
        { value: "12 Days", label: "Faster Collections" },
        { value: "98.5%", label: "Clean Claim Rate" }
      ]}
      clientContextTitle="A Health System Leaving Money on the Table"
      clientContextIntro="A large academic health system with $4B in annual revenue struggled with revenue cycle performance. Denial rates exceeded 12%, days in A/R stretched to 52 days, and coding accuracy issues led to both undercoding (lost revenue) and overcoding (compliance risk)."
      clientContextBody="The revenue cycle team was drowning in manual work: reviewing denials, appealing claims, correcting coding errors, and chasing payments. Despite 400 FTEs dedicated to revenue cycle operations, performance metrics continued to decline. The system estimated it was leaving $50M+ on the table annually."
      clientProfile={{
        industry: "Academic Health System",
        companySize: "$4B Annual Revenue",
        projectDuration: "18 Months",
        additionalInfo: "400 Revenue Cycle FTEs",
        additionalLabel: "Team Size"
      }}
      challengeTitle="The Revenue Leakage Crisis"
      challenges={[
        {
          icon: DollarSign,
          title: "High Denial Rates",
          description: "12% of claims denied on first submission, requiring costly rework and appeals."
        },
        {
          icon: Clock,
          title: "Extended A/R",
          description: "52 days in accounts receivable vs. 38-day benchmark, tying up $200M in working capital."
        },
        {
          icon: FileCheck,
          title: "Coding Accuracy",
          description: "Undercoding lost revenue while overcoding created compliance risk—both stemming from manual processes."
        },
        {
          icon: Target,
          title: "Manual Burden",
          description: "400 FTEs spent 60% of time on manual tasks that could be automated."
        }
      ]}
      approachTitle="AI-Powered Revenue Cycle Excellence"
      approachIntro="NexDyne implemented an end-to-end revenue cycle transformation using AI to optimize coding, predict and prevent denials, automate claims management, and accelerate collections."
      steps={[
        {
          step: "01",
          title: "AI-Assisted Coding",
          description: "Deployed natural language processing to analyze clinical documentation and suggest appropriate codes. The system identified missed diagnoses, suggested specificity improvements, and flagged documentation gaps—improving coding accuracy while reducing coder workload."
        },
        {
          step: "02",
          title: "Denial Prediction Engine",
          description: "Built ML models that predicted denial probability for each claim before submission. High-risk claims were routed for pre-submission review, fixing issues before they became denials. Model achieved 87% accuracy in predicting denials."
        },
        {
          step: "03",
          title: "Automated Claims Management",
          description: "Implemented robotic process automation for claim submission, status checking, and payment posting. Automated 70% of routine claims tasks, freeing staff to focus on complex cases and appeals."
        },
        {
          step: "04",
          title: "Intelligent Worklists",
          description: "Created AI-prioritized worklists that directed staff to highest-value activities. Accounts ranked by collection probability, dollar value, and aging—ensuring resources focused on recoverable revenue."
        }
      ]}
      resultsTitle="Financial Performance Transformed"
      results={[
        {
          icon: DollarSign,
          value: "$32M",
          label: "Recovered annual revenue",
          detail: "From improved coding and reduced denials"
        },
        {
          icon: TrendingUp,
          value: "45%",
          label: "Denial rate reduction",
          detail: "From 12% to 6.6% first-pass denial rate"
        },
        {
          icon: Zap,
          value: "12 Days",
          label: "Faster collections",
          detail: "A/R days reduced from 52 to 40"
        },
        {
          icon: Shield,
          value: "98.5%",
          label: "Clean claim rate",
          detail: "Up from 89% pre-transformation"
        }
      ]}
      quote="We knew we were leaving money on the table, but we couldn't see where. The AI-powered revenue cycle platform gave us visibility we never had—predicting denials before they happen, identifying coding opportunities, and automating the manual work that was consuming our team."
      quoteAuthor="Patricia Rodriguez"
      quoteRole="Chief Financial Officer"
      relatedStudies={[
        {
          title: "Digital Transformation for Health System",
          metric: "35%",
          label: "improved patient outcomes",
          link: "/cases/healthcare-transformation",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
        },
        {
          title: "AI-Powered Readmission Prediction",
          metric: "42%",
          label: "reduction in preventable readmissions",
          link: "/cases/healthcare-readmission",
          image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Optimize Your Revenue Cycle?"
      ctaDescription="Let's discuss how AI can help you capture more revenue and reduce operational costs."
    />
  );
}
