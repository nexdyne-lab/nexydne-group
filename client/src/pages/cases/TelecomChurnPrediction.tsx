import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Clock, Filter, TrendingDown, Users, BrainCircuit, Target, Workflow, DollarSign } from "lucide-react";

export function TelecomChurnPrediction() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Cutting Churn 22% With a Predictive Model | Telecom Case Study"
      seoDescription="A telecom's manual rules caught churn too late and wasted retention budget. A nightly ML model scoring 2.8M subscribers cut churn 22% and saved $12M in annual recurring revenue."
      canonical="/cases/telecom-churn-prediction"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Telecom Provider Cut Churn 22% With a Predictive Model"
      subtitle="Real-time churn scoring identified at-risk customers 60 days before cancellation — enabling targeted retention that cut churn 22% and saved $12M in annual recurring revenue."
      heroImage="/images/cases/telecom-churn-prediction-hero.jpg"
      metrics={[
        { value: "22%", label: "Churn Reduction" },
        { value: "$12M", label: "Annual Revenue Saved" },
        { value: "60 days", label: "Early Warning Window" },
        { value: "2.8M", label: "Customers Scored Daily" }
      ]}
      clientContextTitle="Warning Signs Seen Too Late"
      clientContextIntro="A regional telecom provider with 2.8M subscribers faced escalating churn in a competitive market. By the time customer service noticed warning signs — support tickets, billing disputes, plan downgrades — it was often too late to prevent cancellation, and retention offers went to customers who weren't actually at risk."
      clientContextBody="The existing approach relied on manual rules like “flag customers who call support 3+ times a month.” These generated too many false positives — frustrated but loyal customers — and missed the subtle patterns that actually predict churn: gradual usage decline, competitor price shopping, and life events like relocation. The provider needed a system that scored every customer daily, explained the drivers of each individual's risk, and integrated with the CRM to trigger personalized retention automatically — balancing precision with recall."
      clientProfile={{
        industry: "Regional Telecom Provider",
        companySize: "2.8M Subscribers",
        projectDuration: "Nightly Scoring",
        additionalInfo: "LightGBM + SHAP",
        additionalLabel: "Model"
      }}
      challengeTitle="Why Retention Missed the Mark"
      challenges={[
        {
          icon: Clock,
          title: "Warning signs seen too late",
          description: "By the time service noticed tickets or downgrades, cancellation was often unavoidable."
        },
        {
          icon: Filter,
          title: "Too many false positives",
          description: "Manual rules flagged frustrated-but-loyal customers, wasting retention budget on discounts."
        },
        {
          icon: TrendingDown,
          title: "Missed subtle patterns",
          description: "Gradual usage decline and competitor shopping slipped past rigid rules."
        },
        {
          icon: Users,
          title: "No per-customer insight",
          description: "The team couldn't see what was driving each individual's risk to tailor an offer."
        }
      ]}
      approachTitle="Daily Scoring With Explainable Drivers"
      approachIntro="NEXDYNE deployed a gradient-boosting classifier (LightGBM) that predicts 90-day churn probability for every subscriber, updated nightly — combining behavioral, demographic, and external signals with SHAP-based driver explanations."
      steps={[
        {
          step: "01",
          title: "Combine every signal",
          description: "The model fused usage, payment history, and support interactions with tenure, device age, and competitor promotions."
        },
        {
          step: "02",
          title: "Engineer early warning features",
          description: "Declining data usage, competitor site visits, plan comparisons, and social effects from churned friends surfaced risk early."
        },
        {
          step: "03",
          title: "Explain each customer's risk",
          description: "SHAP values output the top three churn drivers per customer, enabling personalized retention tactics."
        },
        {
          step: "04",
          title: "Trigger retention automatically",
          description: "High-risk scores drove Salesforce workflows — prioritized tasks, outbound queues, and offers matched to each driver."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Target,
          value: "22%",
          label: "Lower churn",
          detail: "At 78% precision and 65% recall, focusing spend on real risk"
        },
        {
          icon: Workflow,
          value: "41%",
          label: "Win-back rate",
          detail: "Up from 23% by addressing specific pain points"
        },
        {
          icon: DollarSign,
          value: "$12M",
          label: "Annual revenue saved",
          detail: "With customer lifetime value up 18%"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Driving a 34% Revenue Lift With AI Personalization",
          metric: "42%",
          label: "higher conversion",
          link: "/cases/retail-personalization",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        },
        {
          title: "Cutting Stockouts 35% With ML Demand Forecasting",
          metric: "35%",
          label: "fewer stockouts",
          link: "/cases/retail-demand-forecasting",
          image: "/images/cases/retail-demand-forecasting-hero.jpg"
        }
      ]}
      ctaTitle="Ready to get ahead of churn?"
      ctaDescription="Let's talk about what predictive scoring could do for your retention and lifetime value."
    />
  );
}

export default TelecomChurnPrediction;
