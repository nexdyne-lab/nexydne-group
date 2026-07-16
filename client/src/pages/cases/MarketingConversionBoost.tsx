import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Filter, Megaphone, TrendingUp, Database, Brain, MousePointerClick, Gauge, DollarSign } from "lucide-react";

export function MarketingConversionBoost() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Predictive Lead Scoring That Lifted Conversion 20% | B2B SaaS Case Study"
      seoDescription="A growing B2B SaaS company drowned its sales team in low-quality leads as CAC rose. An ML lead-scoring and personalization engine lifted conversion 20% and cut acquisition cost 15%."
      canonical="/cases/marketing-conversion-boost"
      industry="Technology, Media & Telecom"
      industryLink="/industries/technology-media-telecom"
      title="How a B2B SaaS Company Lifted Conversion 20% With Predictive Lead Scoring"
      subtitle="Machine learning identified high-intent prospects and personalized outreach in real time — boosting conversion 20%, lifting sales velocity 30%, and cutting customer acquisition cost 15%."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "20%", label: "Higher Conversion" },
        { value: "30%", label: "Faster Sales Velocity" },
        { value: "15%", label: "Lower Acquisition Cost" }
      ]}
      clientContextTitle="More Traffic, Worse Leads"
      clientContextIntro="A rapidly growing B2B SaaS company was struggling with lead quality despite rising traffic. Its sales team was overwhelmed with low-quality leads, wasting time on prospects unlikely to convert."
      clientContextBody="The marketing approach was broad and generic, treating every visitor with the same messaging. The company lacked the data infrastructure to segment its audience or predict which leads had the highest propensity to buy. As a result, customer acquisition costs rose while conversion stayed flat. It needed to leverage its data to prioritize sales effort and deliver targeted, relevant offers to the right prospects at the right time."
      clientProfile={{
        industry: "B2B SaaS Company",
        companySize: "High-Growth",
        projectDuration: "CDP + ML Scoring",
        additionalInfo: "Real-Time Scoring",
        additionalLabel: "Engine"
      }}
      challengeTitle="Why the Funnel Underperformed"
      challenges={[
        {
          icon: Filter,
          title: "Sales buried in weak leads",
          description: "The team wasted time on prospects unlikely to convert, with no way to prioritize."
        },
        {
          icon: Megaphone,
          title: "Generic, broad messaging",
          description: "Every visitor got the same message, ignoring industry, role, and intent."
        },
        {
          icon: Database,
          title: "No segmentation infrastructure",
          description: "The company couldn't segment its audience or predict propensity to buy."
        },
        {
          icon: DollarSign,
          title: "Rising CAC, flat conversion",
          description: "Acquisition costs climbed while conversion rates refused to move."
        }
      ]}
      approachTitle="AI Lead Scoring and Personalization"
      approachIntro="NEXDYNE built an AI-driven lead-scoring and personalization engine — unifying web, mobile, and CRM data in a CDP and training models to predict conversion probability from behavioral signals."
      steps={[
        {
          step: "01",
          title: "Score leads in real time",
          description: "A proprietary ML model scored every lead live, identifying the behavioral triggers that signal purchase intent."
        },
        {
          step: "02",
          title: "Route the best to sales",
          description: "Automated routing prioritized high-score prospects so reps focused only on high-intent leads."
        },
        {
          step: "03",
          title: "Personalize every touch",
          description: "A real-time engine tailored web and email content by industry and role with dynamic content blocks."
        },
        {
          step: "04",
          title: "Nurture on score changes",
          description: "Automated sequences adapted as lead scores shifted, keeping outreach relevant through the funnel."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: MousePointerClick,
          value: "20%",
          label: "Higher conversion",
          detail: "As sales focused on high-intent prospects"
        },
        {
          icon: Gauge,
          value: "30%",
          label: "Faster sales velocity",
          detail: "With better-qualified opportunities moving through the funnel"
        },
        {
          icon: TrendingUp,
          value: "15%",
          label: "Lower acquisition cost",
          detail: "By suppressing low-quality audiences and scaling high-converting segments"
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
          title: "Enabling 3.2x Faster Product Access With Personalized Search",
          metric: "3.2x",
          label: "faster discovery",
          link: "/cases/logistics-product-access",
          image: "/images/industries/retail-warehouse.jpg"
        }
      ]}
      ctaTitle="Ready to focus your sales team on the right leads?"
      ctaDescription="Let's talk about what predictive lead scoring could do for your conversion and CAC."
    />
  );
}

export default MarketingConversionBoost;
