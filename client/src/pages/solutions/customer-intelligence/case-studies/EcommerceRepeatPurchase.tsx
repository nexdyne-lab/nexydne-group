import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, DollarSign, Repeat, Mail, Database, Layers, Sparkles } from "lucide-react";

export function EcommerceRepeatPurchase() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Lifting Repeat Purchase 42% for an E-commerce Brand | Retail Case Study"
      seoDescription="A $45M specialty retailer was sitting on rich customer data it couldn't activate. A customer data platform and ML personalization lifted repeat purchase 42% and added $1.2M a year."
      canonical="/solutions/data-driven-customer-intelligence/case-studies/ecommerce-repeat-purchase"
      industry="E-commerce & Retail"
      industryLink="/industries/retail-consumer"
      title="How a Specialty Retailer Lifted Repeat Purchase 42% and Added $1.2M a Year"
      subtitle="A 150-employee specialty online retailer with $45M in revenue deployed predictive analytics and personalized recommendations — raising its repeat-purchase rate from 18% to 25.6% and generating $1.2M in annual revenue lift."
      heroImage="/images/capabilities/cap-celebrate.jpg"
      metrics={[
        { value: "42%", label: "Repeat-Purchase Lift" },
        { value: "$1.2M", label: "Annual Revenue Lift" },
        { value: "3.2x", label: "Campaign ROI" },
        { value: "28%", label: "Email Engagement" }
      ]}
      clientContextTitle="Rich Data It Couldn't Turn Into Growth"
      clientContextIntro="A specialty e-commerce retailer with 150 employees and $45M in annual revenue was struggling to turn its customer data into growth. Despite collecting extensive transaction histories, browsing behavior, and customer feedback, its marketing team relied on generic batch-and-blast campaigns that treated every customer the same."
      clientContextBody="The company's repeat-purchase rate had stagnated at 18% — well below the 27% industry benchmark. Acquisition costs were rising, but lifetime value wasn't keeping pace. The team knew it was sitting on valuable data, but that data was siloed across the e-commerce platform, email system, and customer-service tools, with no view of customer lifetime value or purchase propensity."
      clientProfile={{
        industry: "Specialty E-commerce Retailer",
        companySize: "$45M Revenue",
        projectDuration: "First-Year Impact",
        additionalInfo: "150 Employees",
        additionalLabel: "Team Size"
      }}
      challengeTitle="Why the Data Wasn't Working"
      challenges={[
        {
          icon: Database,
          title: "Siloed customer data",
          description: "Data was scattered across the e-commerce platform, email system, and customer-service tools, with no single view of the customer."
        },
        {
          icon: Repeat,
          title: "Stagnant repeat purchase",
          description: "The repeat-purchase rate had flatlined at 18% — nine points below the industry benchmark of 27%."
        },
        {
          icon: Sparkles,
          title: "Generic recommendations",
          description: "Product recommendations didn't reflect individual preferences, so they rarely felt relevant to the shopper."
        },
        {
          icon: Mail,
          title: "Declining engagement",
          description: "Batch-and-blast campaigns showed falling open, click, and conversion rates as customers tuned them out."
        }
      ]}
      approachTitle="Turning Fragmented Data into Personal Experiences"
      approachIntro="NEXDYNE implemented a comprehensive customer-intelligence solution that transformed fragmented data into personalized experiences, delivered across four phases."
      steps={[
        {
          step: "01",
          title: "A unified customer data platform",
          description: "We unified data from Shopify, Klaviyo, Zendesk, and Google Analytics into a single 360-degree customer view with real-time synchronization."
        },
        {
          step: "02",
          title: "Predictive customer models",
          description: "Machine-learning models predicted customer lifetime value with 85% accuracy, along with next-purchase timing and product-affinity scoring."
        },
        {
          step: "03",
          title: "Segments and real-time recommendations",
          description: "Twelve behavioral segments and a real-time recommendation engine powered personalized email content and website experiences for every shopper."
        },
        {
          step: "04",
          title: "Automated, always-improving journeys",
          description: "Fifteen automated journeys triggered by behavioral signals were optimized through continuous A/B testing and send-time optimization, improving through feedback loops over time."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Repeat,
          value: "42%",
          label: "Repeat-purchase increase",
          detail: "From 18% up to 25.6%"
        },
        {
          icon: DollarSign,
          value: "$1.2M",
          label: "Annual revenue lift",
          detail: "Incremental revenue from higher retention"
        },
        {
          icon: TrendingUp,
          value: "3.2x",
          label: "Campaign ROI improvement",
          detail: "Versus the previous generic campaigns"
        },
        {
          icon: Mail,
          value: "28%",
          label: "Email engagement increase",
          detail: "Higher open and click-through rates"
        }
      ]}
      quote="We were drowning in customer data but had no way to act on it. NEXDYNE built our CDP, unified our customer view, and deployed ML models that increased repeat purchases by 42%. The ROI was immediate and measurable."
      quoteAuthor="Lisa Martinez"
      quoteRole="VP of Marketing"
      relatedStudies={[
        {
          title: "Doubling Cross-Sell for a Community Bank",
          metric: "2.1x",
          label: "cross-sell conversion",
          link: "/solutions/data-driven-customer-intelligence/case-studies/bank-cross-sell",
          image: "/images/capabilities/cap-mobile-woman.jpg"
        },
        {
          title: "Cutting SaaS Churn 38% with Predictive Intelligence",
          metric: "38%",
          label: "lower annual churn",
          link: "/solutions/data-driven-customer-intelligence/case-studies/saas-churn-reduction",
          image: "/images/capabilities/cap-mobile-woman.jpg"
        }
      ]}
      ctaTitle="Ready to turn your customer data into repeat revenue?"
      ctaDescription="Let's talk about what a unified customer view and ML personalization could add to your bottom line."
    />
  );
}

export default EcommerceRepeatPurchase;
