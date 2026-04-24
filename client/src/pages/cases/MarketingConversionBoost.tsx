import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function MarketingConversionBoost() {
  return (
    <CaseStudyTemplate
      client="B2B SaaS Company"
      industry="Technology · Growth Marketing & Sales"
      title="Predictive Lead Scoring & Conversion Optimization"
      subtitle="How a leading B2B SaaS platform leveraged machine learning to identify high-intent prospects, boosting conversion rates by 20% and reducing acquisition costs."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
      challenge={`A rapidly growing B2B SaaS company was struggling with lead quality despite increasing traffic. Their sales team was overwhelmed with low-quality leads, wasting valuable time on prospects who were unlikely to convert.

Their marketing approach was broad and generic, treating all visitors with the same messaging. They lacked the data infrastructure to segment their audience effectively or predict which leads had the highest propensity to buy.

As a result, customer acquisition costs (CAC) were rising while conversion rates remained stagnant. The company needed a way to leverage their data to prioritize sales efforts and deliver targeted, relevant offers to the right prospects at the right time.`}
      solution={`NEXDYNE implemented a comprehensive AI-driven lead scoring and personalization engine. We built a Customer Data Platform (CDP) to unify data from web, mobile, and CRM, and trained machine learning models to predict conversion probability based on behavioral signals.

For AI-powered scoring, we developed a proprietary ML model to score leads in real-time, identified key behavioral triggers indicating purchase intent, and automated lead routing to prioritize high-score prospects for sales.

For dynamic personalization, we deployed a real-time personalization engine for web and email, created dynamic content blocks tailored to industry and role, and set up automated nurture sequences based on lead score changes. Sales reps were equipped to focus only on high-intent leads, significantly increasing their close rates and morale.`}
      impact={`The AI-driven lead scoring system delivered measurable improvements across every key metric. Conversion rates increased 20% as sales teams focused on high-intent prospects rather than working through undifferentiated lead lists. Sales velocity increased 30% as the pipeline filled with better-qualified opportunities that moved faster through the funnel.

Customer acquisition costs decreased 15% as ad spend was optimized by suppressing low-quality audiences and doubling down on high-converting segments. Prospects received relevant content and offers, leading to higher engagement and brand perception. Marketing ROI improved substantially as every campaign dollar targeted the audiences most likely to convert.`}
      metrics={[
        { value: "20%", label: "Increase in conversion rate" },
        { value: "30%", label: "Increase in sales velocity" },
        { value: "15%", label: "Reduction in CAC" }
      ]}
      tags={["AI", "Growth Marketing", "B2B", "SaaS", "Lead Scoring"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}

export default MarketingConversionBoost;
