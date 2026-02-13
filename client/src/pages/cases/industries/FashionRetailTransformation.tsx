import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { ShoppingCart, Smartphone, TrendingUp, Users, Zap, Target, DollarSign, Star } from "lucide-react";

export default function FashionRetailTransformation() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Digital Transformation for Fashion Retailer | Retail Case Study"
      seoDescription="How a fashion retailer achieved 85% e-commerce growth through unified commerce platform, personalization engine, and omnichannel fulfillment."
      canonical="/cases/fashion-retail-digital-transformation"
      industry="Retail"
      industryLink="/industries/retail"
      title="Fashion Retailer Achieves 85% E-Commerce Growth Through Digital Transformation"
      subtitle="How a unified commerce platform, AI-powered personalization, and omnichannel fulfillment transformed a traditional retailer into a digital leader."
      heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
      metrics={[
        { value: "85%", label: "E-Commerce Growth" },
        { value: "32%", label: "Higher Conversion" },
        { value: "$120M", label: "Revenue Increase" },
        { value: "4.6/5", label: "Customer Rating" }
      ]}
      clientContextTitle="A Fashion Brand at a Digital Crossroads"
      clientContextIntro="A mid-market fashion retailer with 400 stores and a nascent e-commerce business faced an existential challenge. Online competitors were capturing market share while the company's digital experience lagged—slow website, generic recommendations, and disconnected inventory between online and stores."
      clientContextBody="E-commerce represented only 12% of revenue despite industry benchmarks of 25%+. The mobile app had a 2.1-star rating. Customers couldn't buy online and pick up in store, return online purchases to stores, or see real-time inventory. The brand was losing a generation of digital-native customers."
      clientProfile={{
        industry: "Fashion Retail",
        companySize: "400 Stores, $1.5B Revenue",
        projectDuration: "18 Months",
        additionalInfo: "12% E-Commerce Share",
        additionalLabel: "Starting Point"
      }}
      challengeTitle="Disconnected Commerce, Declining Relevance"
      challenges={[
        {
          icon: Smartphone,
          title: "Poor Digital Experience",
          description: "Slow website, 2.1-star mobile app, and generic product recommendations driving customers away."
        },
        {
          icon: ShoppingCart,
          title: "Channel Silos",
          description: "Online and store inventory disconnected—customers couldn't see what was available or shop seamlessly."
        },
        {
          icon: Target,
          title: "Low Conversion",
          description: "3.2% online conversion rate vs. 5%+ industry benchmark—leaving $50M+ on the table annually."
        },
        {
          icon: Users,
          title: "Customer Churn",
          description: "Digital-native customers defecting to online-first competitors with better experiences."
        }
      ]}
      approachTitle="Building Unified Commerce"
      approachIntro="NexDyne designed and implemented a comprehensive digital transformation: a unified commerce platform, AI-powered personalization engine, and omnichannel fulfillment capabilities that created seamless customer experiences."
      steps={[
        {
          step: "01",
          title: "Platform Modernization",
          description: "Replaced legacy e-commerce with a headless commerce platform. Built a new mobile app and responsive website with sub-2-second load times. Created a unified product catalog and real-time inventory visibility across all channels."
        },
        {
          step: "02",
          title: "Personalization Engine",
          description: "Deployed AI-powered personalization that analyzed browsing behavior, purchase history, and style preferences. Every customer saw a personalized homepage, product recommendations, and marketing messages—increasing relevance and conversion."
        },
        {
          step: "03",
          title: "Omnichannel Fulfillment",
          description: "Enabled buy-online-pickup-in-store (BOPIS), ship-from-store, and endless aisle capabilities. Stores became fulfillment nodes, reducing delivery times and shipping costs while increasing inventory productivity."
        },
        {
          step: "04",
          title: "Unified Customer Profile",
          description: "Built a single customer view that unified online and offline interactions. Store associates could see online browsing history; the website showed in-store purchases. Enabled truly personalized service across all touchpoints."
        }
      ]}
      resultsTitle="Digital Leadership Achieved"
      results={[
        {
          icon: TrendingUp,
          value: "85%",
          label: "E-commerce growth",
          detail: "From 12% to 22% of total revenue"
        },
        {
          icon: Target,
          value: "32%",
          label: "Higher conversion rate",
          detail: "From 3.2% to 4.2% online conversion"
        },
        {
          icon: DollarSign,
          value: "$120M",
          label: "Revenue increase",
          detail: "From digital channels and improved conversion"
        },
        {
          icon: Star,
          value: "4.6/5",
          label: "Mobile app rating",
          detail: "Up from 2.1 stars pre-transformation"
        }
      ]}
      quote="We went from digital laggard to digital leader in 18 months. Our customers can now shop however they want—browse on mobile, try on in store, buy online, pick up curbside. The personalization makes every interaction feel curated. We're not just competing with digital natives—we're winning."
      quoteAuthor="Rachel Kim"
      quoteRole="Chief Digital Officer"
      relatedStudies={[
        {
          title: "AI Demand Forecasting for Grocery Chain",
          metric: "35%",
          label: "reduction in waste",
          link: "/cases/grocery-demand-forecasting",
          image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"
        },
        {
          title: "Loyalty Program Transformation",
          metric: "45%",
          label: "increase in member spend",
          link: "/cases/retail-loyalty-transformation",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
        }
      ]}
      ctaTitle="Ready to Transform Your Retail Business?"
      ctaDescription="Let's discuss how unified commerce can accelerate your digital growth."
    />
  );
}
