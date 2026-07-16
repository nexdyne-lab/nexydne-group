import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { LineChart, ThumbsDown, Users, Database, Zap, FlaskConical, TrendingUp, ShoppingCart } from "lucide-react";

export function RetailPersonalization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Driving a 34% Revenue Lift With AI Personalization | Retail Case Study"
      seoDescription="A 450-store, $2.8B retailer's online conversion trailed benchmarks by 35%. A real-time recommendation engine lifted revenue 34%, conversion 42%, and average order value 27%."
      canonical="/cases/retail-personalization"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a National Retailer Drove a 34% Revenue Lift With AI Personalization"
      subtitle="A real-time recommendation engine delivering sub-50ms product suggestions lifted online revenue 34% — improving conversion 42% and average order value 27% across digital channels."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "34%", label: "Revenue Increase" },
        { value: "42%", label: "Higher Conversion" },
        { value: "27%", label: "Larger Average Order" }
      ]}
      clientContextTitle="One Experience for Everyone"
      clientContextIntro="A national specialty retailer with 450 stores and $2.8B in revenue faced a critical digital-commerce challenge. Despite heavy e-commerce investment, online conversion trailed benchmarks by 35% and average order value stayed flat — the result of a one-size-fits-all experience that ignored individual preferences and behavior."
      clientContextBody="The existing recommendation system used basic collaborative filtering — showing “products others bought” with no individual context, seasonality, or real-time signal. The generic suggestions were ignored, driving abandoned carts and missed cross-sell. Competitors with sophisticated personalization captured share, while marketing lacked customer insight, planners couldn't predict demand, and service fielded complaints about irrelevant promotions."
      clientProfile={{
        industry: "Specialty Retailer",
        companySize: "450 Stores",
        projectDuration: "Real-Time Engine",
        additionalInfo: "$2.8B Revenue",
        additionalLabel: "Scale"
      }}
      challengeTitle="Why the Old Engine Fell Flat"
      challenges={[
        {
          icon: LineChart,
          title: "Conversion 35% below benchmark",
          description: "A generic digital experience left online conversion trailing peers and order value flat."
        },
        {
          icon: ThumbsDown,
          title: "Ignored recommendations",
          description: "Basic collaborative filtering produced irrelevant suggestions customers scrolled past."
        },
        {
          icon: ShoppingCart,
          title: "Abandoned carts, missed cross-sell",
          description: "Without individual context, the system surfaced the wrong products at the wrong moments."
        },
        {
          icon: Users,
          title: "No shared customer insight",
          description: "Marketing, planning, and service all lacked the granular signals to do their jobs well."
        }
      ]}
      approachTitle="Real-Time Recommendations at Scale"
      approachIntro="NEXDYNE built an enterprise AI personalization platform that unified data from every touchpoint and served recommendations in under 50 milliseconds — fast enough for live website personalization without degrading performance."
      steps={[
        {
          step: "01",
          title: "Unify every touchpoint",
          description: "The platform merged e-commerce, POS, app, email, and service data, training models on 18 months of transactions."
        },
        {
          step: "02",
          title: "Blend recommendation strategies",
          description: "Collaborative filtering, content-based filtering, and deep-learning models processed 500+ signals per customer in real time."
        },
        {
          step: "03",
          title: "Personalize the whole journey",
          description: "Distinct strategies optimized homepage discovery, category browsing, product pages, cart, and post-purchase cross-sell."
        },
        {
          step: "04",
          title: "Let merchandisers experiment",
          description: "An A/B testing framework and automated retraining let teams tune strategies without engineering support."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: TrendingUp,
          value: "34%",
          label: "Online revenue growth",
          detail: "With 3.2x higher lifetime value among engaged customers"
        },
        {
          icon: Zap,
          value: "42%",
          label: "Higher conversion",
          detail: "Alongside a 27% larger average order value"
        },
        {
          icon: FlaskConical,
          value: "23%",
          label: "Less cart abandonment",
          detail: "With email CTR up 58% and acquisition cost down 22%"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Increasing Customer Engagement 156% With Omnichannel",
          metric: "156%",
          label: "higher engagement",
          link: "/cases/retail-omnichannel",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        },
        {
          title: "Scaling E-Commerce Revenue 40% With AI Personalization",
          metric: "40%",
          label: "revenue growth",
          link: "/cases/global-retailer-ecommerce",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to personalize every session?"
      ctaDescription="Let's talk about what a real-time recommendation engine could do for your digital revenue."
    />
  );
}

export default RetailPersonalization;
