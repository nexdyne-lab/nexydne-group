import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, DollarSign, Target, Eye, Users, Workflow, Gauge } from "lucide-react";

export default function FinancialChurnPrediction() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Customer Churn 28% with Predictive Analytics | Financial Services Case Study"
      seoDescription="A $12B financial services firm was losing customers to reactive retention. ML models flagged defection 90 days early, cut churn 28%, and saved $47M a year."
      canonical="/cases/financial-churn-prediction"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Financial Services Firm Cut Churn 28% with Predictive Analytics"
      subtitle="Machine-learning models identified at-risk customers 90 days before defection and triggered automated retention campaigns — saving $47M in annual revenue."
      heroImage="/images/industries/fin-monitors.jpg"
      metrics={[
        { value: "28%", label: "Lower Churn" },
        { value: "$47M", label: "Revenue Saved / Year" },
        { value: "87%", label: "Prediction Accuracy" }
      ]}
      clientContextTitle="Retention That Always Ran Late"
      clientContextIntro="A regional financial services firm managing $12 billion in assets faced escalating attrition that threatened long-term profitability. Annual churn had climbed to 14.2% — well above benchmark — costing roughly $168 million in lost revenue and forcing aggressive acquisition spending just to hold growth."
      clientContextBody="The core problem was reactive retention: the firm relied on lagging indicators like account-closure requests and complaint escalations — signals that appeared only after customers had already researched alternatives and decided to switch. Relationship managers had no visibility into early dissatisfaction, and retention offers were generic rather than tailored to each customer's needs and value."
      clientProfile={{
        industry: "Regional Financial Services Firm",
        companySize: "$12B in Assets",
        projectDuration: "First-Year Impact",
        additionalInfo: "200+ Signals Modeled",
        additionalLabel: "Data Depth"
      }}
      challengeTitle="Why Customers Left Before Anyone Noticed"
      challenges={[
        {
          icon: Eye,
          title: "Only lagging indicators",
          description: "The firm saw risk only after a customer requested closure — long after the switching decision had been made."
        },
        {
          icon: Users,
          title: "Managers flying blind",
          description: "Relationship managers had no early warning of dissatisfaction to act on before it was too late."
        },
        {
          icon: Target,
          title: "Generic retention offers",
          description: "One-size-fits-all offers ignored each customer's actual reasons for leaving and their value to the firm."
        },
        {
          icon: DollarSign,
          title: "Costly acquisition treadmill",
          description: "High churn forced aggressive, expensive acquisition just to maintain growth targets."
        }
      ]}
      approachTitle="Ninety Days of Warning, and a Plan to Act"
      approachIntro="NEXDYNE built a churn-prediction platform that analyzed 200+ behavioral, transactional, and demographic signals to flag customers at risk up to 90 days early — and wired the scores into every customer-facing team."
      steps={[
        {
          step: "01",
          title: "Detect subtle defection patterns",
          description: "Gradient boosting and deep learning caught early signals — declining transactions, reduced digital engagement, rising support contacts, competitive research."
        },
        {
          step: "02",
          title: "Score every customer daily",
          description: "The platform scored the whole portfolio 0–100 for churn risk each day, segmenting into tiers that triggered different interventions."
        },
        {
          step: "03",
          title: "Arm managers with the 'why'",
          description: "High-value at-risk customers got proactive outreach with personalized offers based on the predicted reasons for dissatisfaction."
        },
        {
          step: "04",
          title: "Wire it into every system",
          description: "Integration with CRM, marketing automation, and customer service gave every team real-time risk scores and recommended actions."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingDown,
          value: "28%",
          label: "Lower churn",
          detail: "From 14.2% down to 10.2%"
        },
        {
          icon: DollarSign,
          value: "$47M",
          label: "Revenue saved annually",
          detail: "By retaining customers who would have left"
        },
        {
          icon: Gauge,
          value: "62%",
          label: "Save rate on interventions",
          detail: "Versus just 23% for reactive retention"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting SaaS Churn 38% with Predictive Intelligence",
          metric: "38%",
          label: "lower annual churn",
          link: "/solutions/data-driven-customer-intelligence/case-studies/saas-churn-reduction",
          image: "/images/capabilities/cap-mobile-woman.jpg"
        },
        {
          title: "Detecting Fraud 40% Faster with ML",
          metric: "40%",
          label: "faster fraud detection",
          link: "/cases/financial-fraud-detection-ml",
          image: "/images/cases/financial-fraud-detection-ml-hero.jpg"
        }
      ]}
      ctaTitle="Ready to see churn 90 days before it happens?"
      ctaDescription="Let's talk about what predictive retention could protect across your book."
    />
  );
}
