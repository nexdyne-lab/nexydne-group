import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, PhoneOff, Activity, UserX, HeartPulse, Rocket, MessagesSquare, DollarSign } from "lucide-react";

export function SubscriptionRetention() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="A Retention Program That Cut Churn 40% | Subscription Case Study"
      seoDescription="A $38M subscription business saw churn creep to 4.5% with reactive, complaint-driven success. A health-score model and proactive engagement cut churn 40% and retained $2.4M in ARR."
      canonical="/capabilities/growth-marketing-sales/case-studies/subscription-retention"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a Subscription Business Cut Churn 40%"
      subtitle="A digital-content subscription company shifted from reactive support to proactive customer success — using a health-score model and redesigned onboarding to cut monthly churn 40% and retain $2.4M in ARR."
      heroImage="/images/capabilities/cap-colleagues-smile.jpg"
      metrics={[
        { value: "40%", label: "Churn Reduction" },
        { value: "$2.4M", label: "Retained Revenue" },
        { value: "2.7%", label: "New Monthly Churn" },
        { value: "18 mo", label: "Avg Customer Lifetime" }
      ]}
      clientContextTitle="Churning Before Anyone Noticed"
      clientContextIntro="A 120-employee subscription business with $38M in ARR provides digital content and tools to creative professionals. Monthly churn had crept up to 4.5%, threatening growth, while customer success was reactive — engaging only when customers complained or cancelled."
      clientContextBody="There was no systematic way to identify at-risk customers, and inconsistent onboarding left many never fully adopting the product. Analysis of exit surveys and behavior revealed that most churned customers had disengaged weeks before cancelling, that low product usage was the strongest churn predictor, and that customers who didn't complete onboarding churned at 3x the rate — while price was rarely the primary reason."
      clientProfile={{
        industry: "Digital Content Subscription",
        companySize: "$38M ARR",
        projectDuration: "Health-Score Model",
        additionalInfo: "Proactive Success",
        additionalLabel: "Shift"
      }}
      challengeTitle="Why Customers Slipped Away"
      challenges={[
        {
          icon: TrendingUp,
          title: "Churn crept to 4.5%",
          description: "Rising monthly churn threatened the company's growth trajectory."
        },
        {
          icon: PhoneOff,
          title: "Reactive customer success",
          description: "The team engaged only when customers complained or had already cancelled."
        },
        {
          icon: Activity,
          title: "No at-risk signal",
          description: "Nothing flagged the low usage that reliably preceded cancellation by weeks."
        },
        {
          icon: UserX,
          title: "Inconsistent onboarding",
          description: "Customers who didn't complete onboarding churned at three times the rate."
        }
      ]}
      approachTitle="From Reactive Support to Proactive Success"
      approachIntro="NEXDYNE built a customer-health-score model and redesigned onboarding — shifting customer success from firefighting to proactive engagement that prevented churn before it happened."
      steps={[
        {
          step: "01",
          title: "Score customer health",
          description: "A model combining usage, support sentiment, and engagement triggered proactive outreach and flagged sudden behavior changes."
        },
        {
          step: "02",
          title: "Redesign onboarding",
          description: "A structured journey with milestones, in-app guidance, and 30-day check-ins tailored to personas drove adoption."
        },
        {
          step: "03",
          title: "Engage proactively",
          description: "Playbooks by health scenario, business reviews for high-value accounts, and at-risk interventions replaced reactive support."
        },
        {
          step: "04",
          title: "Close the feedback loop",
          description: "NPS at key moments, cancellation analysis, voice-of-customer, and win-back campaigns fed product and service improvements."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: HeartPulse,
          value: "2.7%",
          label: "Monthly churn",
          detail: "Down from 4.5%, retaining $2.4M in ARR"
        },
        {
          icon: Rocket,
          value: "18 mo",
          label: "Average customer lifetime",
          detail: "As onboarding and proactive success kept customers engaged"
        },
        {
          icon: MessagesSquare,
          value: "VOC",
          label: "Into the product roadmap",
          detail: "Churn-driver analysis surfaced feature gaps to fix"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Cutting Telecom Churn 22% With a Predictive Model",
          metric: "22%",
          label: "lower churn",
          link: "/cases/telecom-churn-prediction",
          image: "/images/industries/tech-datacenter.jpg"
        },
        {
          title: "Scaling Support With AI, Deflecting 60% of Tickets",
          metric: "60%",
          label: "ticket deflection",
          link: "/capabilities/artificial-intelligence/case-studies/saas-customer-service-ai",
          image: "/images/capabilities/cap-office-women.jpg"
        }
      ]}
      ctaTitle="Ready to get ahead of churn?"
      ctaDescription="Let's talk about what proactive customer success could do for your retention and LTV."
    />
  );
}

export default SubscriptionRetention;
