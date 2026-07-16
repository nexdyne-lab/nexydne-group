import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { TrendingUp, ShoppingCart, Users, Database, Sparkles, Layers, DollarSign, Boxes } from "lucide-react";

function GlobalRetailerEcommerce() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Scaling E-Commerce Revenue 40% with AI Personalization | Retail Case Study"
      seoDescription="A Fortune 500 retailer's online growth stalled at 12% with 78% cart abandonment. AI personalization across 2M+ SKUs lifted e-commerce revenue 40% and added $180M a year."
      canonical="/cases/global-retailer-ecommerce"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Global Retailer Scaled E-Commerce Revenue 40% with AI Personalization"
      subtitle="A Fortune 500 retailer unified 12 data sources and deployed AI personalization across 2M+ SKUs and five channels — lifting revenue 40% and generating $180M in additional annual revenue within 12 months."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "40%", label: "Revenue Growth" },
        { value: "3.2x", label: "Conversion Rate Lift" },
        { value: "65%", label: "Higher Retention" },
        { value: "$180M", label: "Added Annual Revenue" }
      ]}
      clientContextTitle="Growth That Plateaued"
      clientContextIntro="A global retailer with annual revenues exceeding $15 billion faced a fundamental shift in consumer behavior. Its physical stores stayed profitable, but e-commerce growth had plateaued at 12% year-over-year — well below the 25–30% industry benchmark."
      clientContextBody="Generic product recommendations failed to engage customers, driving cart-abandonment rates averaging 78%. Limited visibility into customer-journey touchpoints and data siloed across marketing, sales, and operations blocked growth. With millions of SKUs, the inability to personalize at scale had become an existential threat as digital-native competitors captured share. The board set an ambitious target: 35% e-commerce revenue growth within 18 months, while maintaining profitability."
      clientProfile={{
        industry: "Fortune 500 Retailer",
        companySize: "$15B+ Revenue",
        projectDuration: "16-Week Program",
        additionalInfo: "45M Active Customers",
        additionalLabel: "Scale"
      }}
      challengeTitle="Why Online Growth Stalled"
      challenges={[
        {
          icon: TrendingUp,
          title: "Growth stuck at 12%",
          description: "E-commerce growth plateaued at less than half the 25–30% industry benchmark."
        },
        {
          icon: ShoppingCart,
          title: "78% cart abandonment",
          description: "Generic recommendations failed to engage customers, driving abandonment to 78%."
        },
        {
          icon: Boxes,
          title: "Siloed data, millions of SKUs",
          description: "Data split across marketing, sales, and operations made personalization at scale impossible."
        },
        {
          icon: Users,
          title: "Losing to digital natives",
          description: "Digital-first competitors kept capturing share while the plateau persisted."
        }
      ]}
      approachTitle="A Three-Phase Personalization Program"
      approachIntro="NEXDYNE deployed a three-phase transformation combining advanced AI with deep retail expertise — delivering measurable results at each stage rather than one big-bang launch."
      steps={[
        {
          step: "01",
          title: "Unify the customer data",
          description: "In weeks 1–4, we consolidated 12 data sources into a real-time CDP — 360-degree profiles for 45M+ customers with 200+ attributes at sub-100ms latency."
        },
        {
          step: "02",
          title: "Build the recommendation engine",
          description: "In weeks 5–10, a machine-learning engine analyzed browsing, purchase history, and context across 2M+ SKUs — reaching 94% purchase-prediction accuracy with real-time A/B testing."
        },
        {
          step: "03",
          title: "Personalize every channel",
          description: "In weeks 11–16, we extended personalization across web, mobile, email, and in-store displays — dynamic email hit 45% open rates and store associates got real-time customer preferences."
        },
        {
          step: "04",
          title: "Connect online to in-store",
          description: "The engine linked online behavior to the in-store experience, giving associates live access to customer history for a seamless, consistent journey."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingUp,
          value: "40%",
          label: "E-commerce revenue growth",
          detail: "Surpassing the 35% board target"
        },
        {
          icon: Sparkles,
          value: "3.2x",
          label: "Conversion rate lift",
          detail: "From personalized vs. generic recommendations"
        },
        {
          icon: DollarSign,
          value: "$180M",
          label: "Additional annual revenue",
          detail: "A 4.2x ROI, with cart abandonment down 52%"
        }
      ]}
      quote="NEXDYNE didn't just implement technology — they transformed how we think about customer relationships. The AI personalization engine has become a core competitive advantage that continues to drive growth quarter after quarter."
      quoteAuthor="Sarah Chen"
      quoteRole="Chief Digital Officer"
      relatedStudies={[
        {
          title: "Automating a Retailer's Supply Chain with RPA",
          metric: "45%",
          label: "faster processing",
          link: "/cases/global-retailer",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        },
        {
          title: "Migrating a Retailer to Snowflake",
          metric: "85%",
          label: "faster queries",
          link: "/cases/ecommerce-data-warehouse",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to personalize at scale?"
      ctaDescription="Let's talk about what AI-driven personalization could do for your digital revenue."
    />
  );
}

export default GlobalRetailerEcommerce;
