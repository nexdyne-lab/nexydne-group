import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Boxes, Clock, TrendingDown, Users, Database, Sparkles, Mail, DollarSign } from "lucide-react";

export function RetailModernizationPersonalization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Unlocking 34% Revenue Growth With AI Personalization | Retail Case Study"
      seoDescription="A 150-store home-goods retailer's batch systems made real-time personalization impossible. A Bloomreach CDP drove $18M in incremental revenue and a 47% conversion lift."
      canonical="/cases/retail-modernization-personalization"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Home-Goods Retailer Modernized Legacy Systems for 34% Revenue Growth"
      subtitle="A national home-goods retailer deployed a Bloomreach CDP for individualized recommendations and personalized email — driving $18M in incremental annual revenue and a 47% conversion lift."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "34%", label: "Revenue Increase" },
        { value: "$18M", label: "Incremental Revenue" },
        { value: "2.8x", label: "Email CTR Improvement" },
        { value: "47%", label: "Conversion Lift" }
      ]}
      clientContextTitle="Batch Systems in a Real-Time World"
      clientContextIntro="A national home-goods retailer with 150+ stores and a growing e-commerce presence faced mounting pressure from digital-native competitors offering personalized shopping. Its legacy stack — monolithic systems and overnight batch processing — made real-time personalization impossible across channels."
      clientContextBody="Customer data sat siloed across e-commerce, POS, email, and loyalty systems, so unified profiles couldn't be built. Generic recommendations and one-size-fits-all email drove declining conversion and stagnant lifetime value. Because data processed overnight, recommendations reflected yesterday's behavior, not current intent — a fatal gap against competitors personalizing in the moment."
      clientProfile={{
        industry: "Home-Goods Retailer",
        companySize: "150+ Stores",
        projectDuration: "Multi-Channel CDP",
        additionalInfo: "Bloomreach",
        additionalLabel: "Platform"
      }}
      challengeTitle="Why Personalization Was Impossible"
      challenges={[
        {
          icon: Boxes,
          title: "Siloed customer data",
          description: "Data split across e-commerce, POS, email, and loyalty prevented any unified customer profile."
        },
        {
          icon: Clock,
          title: "Overnight batch processing",
          description: "Recommendations reflected yesterday's behavior, never current intent signals."
        },
        {
          icon: TrendingDown,
          title: "Declining conversion",
          description: "Generic recommendations and mass email drove falling conversion and flat lifetime value."
        },
        {
          icon: Users,
          title: "Losing to digital natives",
          description: "Competitors personalizing in real time were steadily capturing market share."
        }
      ]}
      approachTitle="A Real-Time Personalization Platform"
      approachIntro="NEXDYNE architected a personalization platform on Bloomreach CDP — consolidating every touchpoint into unified, real-time profiles that update instantly as behavior occurs."
      steps={[
        {
          step: "01",
          title: "Unify the data in real time",
          description: "The CDP merged e-commerce, POS, email, loyalty, and service data into profiles that updated the instant behavior happened."
        },
        {
          step: "02",
          title: "Recommend on live intent",
          description: "Bloomreach's ML engine ran across web and app, adapting to current-session behavior — browse bedroom furniture, and the homepage featured complementary items."
        },
        {
          step: "03",
          title: "Rebuild the email program",
          description: "Abandoned-cart and browse-abandonment campaigns featured exact products with send-time optimization and predictive win-back segmentation."
        },
        {
          step: "04",
          title: "Empower marketing directly",
          description: "Training on Bloomreach's visual campaign builder let marketers launch personalized campaigns without waiting on IT."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: DollarSign,
          value: "$18M",
          label: "Incremental annual revenue",
          detail: "A 34% year-over-year increase from personalization"
        },
        {
          icon: Sparkles,
          value: "47%",
          label: "Conversion lift",
          detail: "Web from 2.1% to 3.1%, with mobile up 61%"
        },
        {
          icon: Mail,
          value: "23%",
          label: "Abandoned-cart recovery",
          detail: "Up from 8%, recovering $4.2M in lost revenue"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Scaling E-Commerce Revenue 40% With AI Personalization",
          metric: "40%",
          label: "revenue growth",
          link: "/cases/global-retailer-ecommerce",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        },
        {
          title: "Increasing Customer Engagement 156% With Omnichannel",
          metric: "156%",
          label: "higher engagement",
          link: "/cases/retail-omnichannel",
          image: "/images/cases/retail-omnichannel-hero.jpg"
        }
      ]}
      ctaTitle="Ready to personalize in real time?"
      ctaDescription="Let's talk about what a modern CDP could do for your conversion and lifetime value."
    />
  );
}

export default RetailModernizationPersonalization;
