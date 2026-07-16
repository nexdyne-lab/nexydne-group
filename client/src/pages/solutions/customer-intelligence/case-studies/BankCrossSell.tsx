import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingUp, Users, Sparkles, Database, DollarSign, Layers } from "lucide-react";

export function BankCrossSell() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Doubling Cross-Sell for a Community Bank | Financial Services Case Study"
      seoDescription="A $1.2B community bank was stuck at 2.1 products per customer. Next-best-action models doubled cross-sell conversion and added $640K in first-year revenue."
      canonical="/solutions/data-driven-customer-intelligence/case-studies/bank-cross-sell"
      industry="Financial Services"
      industryLink="/industries/financial-services"
      title="How a Community Bank Doubled Cross-Sell and Added $640K in Revenue"
      subtitle="A 120-employee community bank with $1.2B in assets implemented next-best-action models to personalize product recommendations — doubling cross-sell conversion and generating $640K in new revenue."
      heroImage="/images/capabilities/cap-mobile-woman.jpg"
      metrics={[
        { value: "2.1x", label: "Cross-Sell Conversion" },
        { value: "$640K", label: "New Revenue" },
        { value: "45%", label: "Engagement Increase" },
        { value: "2.8", label: "Products per Customer" }
      ]}
      clientContextTitle="A Loyal Customer Base It Couldn't Fully Serve"
      clientContextIntro="A regional community bank with 120 employees and $1.2B in assets was struggling to deepen relationships with its existing customers. Despite a loyal base with an average tenure of eight years or more, its cross-sell ratio of 2.1 products per customer lagged well behind the industry benchmark of 3.5."
      clientContextBody="The bank's approach to cross-selling was fundamentally broken. Branch staff made generic product recommendations based on intuition rather than data, and marketing campaigns promoted the same products to everyone regardless of individual needs or financial situations. Customers felt marketed to rather than understood — and the bank had no view of which product each customer was actually most likely to need."
      clientProfile={{
        industry: "Regional Community Bank",
        companySize: "$1.2B in Assets",
        projectDuration: "First-Year Impact",
        additionalInfo: "120 Employees",
        additionalLabel: "Team Size"
      }}
      challengeTitle="Why Cross-Sell Stalled"
      challenges={[
        {
          icon: Target,
          title: "No propensity insight",
          description: "The bank had no visibility into which products each customer was most likely to need next."
        },
        {
          icon: Users,
          title: "Overwhelmed branch staff",
          description: "Frontline teams faced a wall of product options with no guidance on what to prioritize, or for whom."
        },
        {
          icon: TrendingUp,
          title: "Generic campaigns",
          description: "One-size-fits-all marketing produced sub-1% response rates and slowly eroded customer trust."
        },
        {
          icon: Database,
          title: "Siloed customer data",
          description: "Records were scattered across core banking, CRM, and digital channels, so no team ever saw the whole customer."
        }
      ]}
      approachTitle="The Right Product, Customer, Moment and Channel"
      approachIntro="NEXDYNE implemented a next-best-action recommendation system that put the right product in front of the right customer at the right time — through the right channel."
      steps={[
        {
          step: "01",
          title: "A unified 360° customer profile",
          description: "We brought customer data together from core banking, CRM, digital banking, and external sources into comprehensive financial profiles — complete with life-event detection signals and channel-preference mapping."
        },
        {
          step: "02",
          title: "Twelve product-propensity models",
          description: "Machine-learning models predicted the likelihood of purchase for each product category, layered with life-stage segmentation and timing-optimization signals."
        },
        {
          step: "03",
          title: "A ranked recommendation engine",
          description: "The engine ranked products by propensity, profitability, and customer value to surface the single best offer, with real-time recommendations and channel-specific messaging."
        },
        {
          step: "04",
          title: "Deployed across every channel",
          description: "Recommendations reached branch staff, the call center, digital banking, and marketing automation — with training and playbooks that made omnichannel personalization consistent."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingUp,
          value: "2.1x",
          label: "Cross-sell conversion",
          detail: "More than double the previous generic-pitch approach"
        },
        {
          icon: DollarSign,
          value: "$640K",
          label: "New first-year revenue",
          detail: "Generated from personalized recommendations"
        },
        {
          icon: Sparkles,
          value: "45%",
          label: "Customer engagement increase",
          detail: "Through higher recommendation acceptance"
        },
        {
          icon: Layers,
          value: "2.8",
          label: "Products per customer",
          detail: "Up from 2.1, moving toward the 3.5 benchmark"
        }
      ]}
      quote="The next-best-action engine NEXDYNE built transformed our cross-sell strategy. We went from generic product pitches to personalized recommendations that doubled our conversion rate. Our customers feel understood, not marketed to."
      quoteAuthor="Robert Thompson"
      quoteRole="Chief Digital Officer"
      relatedStudies={[
        {
          title: "Cutting SaaS Churn 38% with Predictive Intelligence",
          metric: "38%",
          label: "lower annual churn",
          link: "/solutions/data-driven-customer-intelligence/case-studies/saas-churn-reduction",
          image: "/images/capabilities/cap-mobile-woman.jpg"
        },
        {
          title: "Lifting Repeat Purchase 42% for an E-commerce Brand",
          metric: "42%",
          label: "more repeat purchases",
          link: "/solutions/data-driven-customer-intelligence/case-studies/ecommerce-repeat-purchase",
          image: "/images/capabilities/cap-celebrate.jpg"
        }
      ]}
      ctaTitle="Ready to turn customer data into deeper relationships?"
      ctaDescription="Let's talk about what next-best-action could be worth for your customers."
    />
  );
}

export default BankCrossSell;
