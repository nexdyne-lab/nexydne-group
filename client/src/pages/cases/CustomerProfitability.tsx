import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, UserCheck, Landmark, Search, Target, Sparkles } from "lucide-react";

export default function CustomerProfitability() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Lifting Retail-Banking Profitability 30% with CLV Modeling | Financial Services Case Study"
      seoDescription="A regional bank wanted to migrate customers to value accounts without triggering an exodus. Deep-learning CLV modeling lifted profitability 30% while keeping attrition under 2%."
      canonical="/cases/customer-profitability"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Regional Bank Lifted Profitability 30% with AI Lifetime-Value Modeling"
      subtitle="Deep learning segmented customers and tailored product offerings — increasing profitability while improving retention, and turning fee conversations into value conversations."
      heroImage="/images/capabilities/cap-conference-data.jpg"
      metrics={[
        { value: "30%", label: "Higher Profitability" },
        { value: "<2%", label: "Customer Attrition" },
        { value: "15%", label: "More Primary-Bank Status" }
      ]}
      clientContextTitle="Big Base, Thin Margins"
      clientContextIntro="A regional bank faced declining margins in its retail division. It had a large customer base, but many sat on legacy fee-free checking accounts that were costly to maintain. The bank wanted to migrate customers to value-added accounts — but feared a mass exodus if it simply imposed new charges."
      clientContextBody="It lacked deep insight into which customers were truly profitable and what features they valued. Product design rested on assumptions, and sales teams struggled to articulate the value of premium accounts to the right people. The bank needed a data-driven way to identify high-potential customers and design personalized offers that maximized lifetime value without sacrificing retention."
      clientProfile={{
        industry: "Regional Bank",
        companySize: "Large Retail Base",
        projectDuration: "CLV Program",
        additionalInfo: "Deep-Learning Models",
        additionalLabel: "Method"
      }}
      challengeTitle="Why Margins Kept Slipping"
      challenges={[
        {
          icon: Landmark,
          title: "Costly legacy accounts",
          description: "Many customers sat on fee-free checking that was expensive to maintain, quietly eroding the retail division's economics."
        },
        {
          icon: Search,
          title: "No profitability insight",
          description: "The bank couldn't tell which customers were genuinely profitable or which features they actually valued."
        },
        {
          icon: Target,
          title: "Product design on assumptions",
          description: "Without data, premium accounts were designed on guesswork and pitched to the wrong people."
        },
        {
          icon: UserCheck,
          title: "Fear of an exodus",
          description: "Leadership worried that imposing new charges would drive a mass departure of customers."
        }
      ]}
      approachTitle="Modeling Lifetime Value, Then Acting on It"
      approachIntro="NEXDYNE used a deep-learning approach to model Customer Lifetime Value, analyzing millions of transactions to segment customers by potential profitability and feature preference — then turned those insights into personalized offers."
      steps={[
        {
          step: "01",
          title: "Predict future profitability",
          description: "A CLV model predicted each customer's future profitability from behavioral patterns across millions of transaction records."
        },
        {
          step: "02",
          title: "Find willingness-to-pay micro-segments",
          description: "We identified micro-segments with high willingness to pay for premium features, and simulated how pricing changes would affect retention."
        },
        {
          step: "03",
          title: "Design targeted migration offers",
          description: "We built tailored migration offers for each segment and a 'best fit' recommendation engine to guide branch staff."
        },
        {
          step: "04",
          title: "Automate premium onboarding",
          description: "Digital onboarding flows made moving to premium accounts frictionless, turning fee conversations into value conversations."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingUp,
          value: "30%",
          label: "Higher profitability",
          detail: "In the retail-banking division"
        },
        {
          icon: UserCheck,
          value: "<2%",
          label: "Customer attrition",
          detail: "Far better than expected for a pricing change"
        },
        {
          icon: Sparkles,
          value: "15%",
          label: "More primary-bank status",
          detail: "Deeper relationships and higher lifetime value"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Doubling Cross-Sell for a Community Bank",
          metric: "2.1x",
          label: "cross-sell conversion",
          link: "/solutions/data-driven-customer-intelligence/case-studies/bank-cross-sell",
          image: "/images/capabilities/cap-mobile-woman.jpg"
        },
        {
          title: "Lifting Member Satisfaction 45% at a Credit Union",
          metric: "45%",
          label: "higher satisfaction",
          link: "/capabilities/ai-technology-consulting/case-study/credit-union",
          image: "/images/industries/fin-monitors.jpg"
        }
      ]}
      ctaTitle="Ready to know which customers are truly worth more?"
      ctaDescription="Let's talk about what lifetime-value modeling could do for your margins and retention."
    />
  );
}
