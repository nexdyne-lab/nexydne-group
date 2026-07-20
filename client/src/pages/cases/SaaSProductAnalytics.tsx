import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingDown, EyeOff, Clock, MessageSquare, Filter, Flame, Users, DollarSign } from "lucide-react";

export function SaaSProductAnalytics() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Lifting Trial-to-Paid Conversion 28% With Product Analytics | SaaS Case Study"
      seoDescription="A B2B SaaS company converted only 18% of trials, blind to user behavior. A product-analytics dashboard found the onboarding friction, lifting conversion to 23% and adding 50 paying customers a month."
      canonical="/cases/saas-product-analytics"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a SaaS Company Lifted Trial-to-Paid Conversion 28%"
      subtitle="Usage analytics identified friction points in the onboarding flow — driving targeted improvements that raised trial-to-paid conversion from 18% to 23% and added 50 paying customers a month."
      heroImage="/images/cases/saas-product-analytics-hero.jpg"
      metrics={[
        { value: "28%", label: "Higher Trial-to-Paid Conversion" },
        { value: "23%", label: "Conversion Rate Achieved" },
        { value: "+50", label: "Paying Customers Added Monthly" }
      ]}
      clientContextTitle="Flying Blind Through the Trial"
      clientContextIntro="A B2B SaaS company offering project-management software struggled with low trial-to-paid conversion — only 18% of trial users converted, well below the 25–30% industry benchmark. The product team had no visibility into user behavior during the trial."
      clientContextBody="They didn't know which features drove conversion, where users got stuck, or why most trials ended without purchase. The VP of Product relied on anecdotal sales and support feedback, and quantitative analysis happened quarterly through manual SQL queries that took days. By the time insights emerged, the roadmap was already set. The team needed real-time visibility into behavior to find friction and validate improvements."
      clientProfile={{
        industry: "B2B SaaS Company",
        companySize: "1,000 Trials/Month",
        projectDuration: "Mixpanel + Tableau",
        additionalInfo: "50+ Events Tracked",
        additionalLabel: "Instrumentation"
      }}
      challengeTitle="Why Trials Weren't Converting"
      challenges={[
        {
          icon: TrendingDown,
          title: "18% conversion",
          description: "Trial-to-paid ran well below the 25–30% SaaS benchmark."
        },
        {
          icon: EyeOff,
          title: "No behavior visibility",
          description: "The team couldn't see which features drove conversion or where users stalled."
        },
        {
          icon: Clock,
          title: "Quarterly, manual analysis",
          description: "SQL queries took days, so insights arrived after the roadmap was set."
        },
        {
          icon: MessageSquare,
          title: "Anecdote-driven decisions",
          description: "Product choices leaned on sales and support hearsay, not data."
        }
      ]}
      approachTitle="Instrument, Analyze, Then Fix"
      approachIntro="NEXDYNE built a product-analytics dashboard with Mixpanel and Tableau — tracking 50+ user actions and correlating them with trial outcomes to pinpoint exactly where conversion broke."
      steps={[
        {
          step: "01",
          title: "Track the whole journey",
          description: "50+ actions — feature usage, time in product, collaboration, support tickets — were correlated with converted, churned, or extended outcomes."
        },
        {
          step: "02",
          title: "Find the drop-off",
          description: "Funnel analysis revealed 42% of users never completed onboarding — they signed up but never created a first project."
        },
        {
          step: "03",
          title: "Learn what converts",
          description: "A feature heatmap showed converters were 3x more likely to use collaboration; enterprise users converted at 35% vs. 12% for SMBs."
        },
        {
          step: "04",
          title: "Redesign on the data",
          description: "Interactive onboarding with sample data and teammate-invite prompts lifted completion and conversion sharply."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Users,
          value: "82%",
          label: "Onboarding completion",
          detail: "Up from 58%; completers converted at 32% vs. 5%"
        },
        {
          icon: DollarSign,
          value: "+50",
          label: "Paying customers a month",
          detail: "With the dashboard paying for itself in the first quarter"
        },
        {
          icon: Filter,
          value: "3x",
          label: "Enterprise conversion vs. SMB",
          detail: "Refocusing go-to-market and lifting sales efficiency 40%"
        }
      ]}
      quote="We were flying blind during the trial period. The analytics dashboard showed us exactly where users got stuck and which features drove conversion. We redesigned onboarding based on the data — completion rates jumped from 58% to 82%. Trial-to-paid conversion increased from 18% to 23%, adding roughly fifty new paying customers a month. The dashboard paid for itself in the first quarter."
      quoteAuthor="David Chen"
      quoteRole="VP of Product"
      relatedStudies={[
        {
          title: "Cutting Customer Onboarding Time 78% With AI",
          metric: "78%",
          label: "faster onboarding",
          link: "/cases/saas-platform-optimization",
          image: "/images/capabilities/cap-conference-data.jpg"
        },
        {
          title: "A Retention Program That Cut Churn 40%",
          metric: "40%",
          label: "churn reduction",
          link: "/capabilities/growth-marketing-sales/case-studies/subscription-retention",
          image: "/images/capabilities/cap-colleagues-smile.jpg"
        }
      ]}
      ctaTitle="Ready to see what drives conversion?"
      ctaDescription="Let's talk about what product analytics could do for your trial-to-paid rate."
    />
  );
}

export default SaaSProductAnalytics;
