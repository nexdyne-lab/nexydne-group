import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, BarChart3, Users, TrendingUp, Zap, CheckCircle } from "lucide-react";

export default function GlobalRetailerAiPersonalizationFeature() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Scaling E-Commerce Revenue 40% With AI Personalization | Case Study"
      seoDescription="A global retailer's digital experience was generic and underperforming. An AI personalization program scaled e-commerce revenue 40% by tailoring the experience to each shopper."
      canonical="/case-studies/global-retailer-ai-personalization"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Global Retailer Scaled E-Commerce Revenue 40% With AI Personalization"
      subtitle="A generic digital experience left revenue on the table across a huge customer base. AI personalization tailored the experience at scale and transformed the results."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "40%", label: "E-Commerce Revenue Growth" },
        { value: "AI", label: "Personalization" },
        { value: "At Scale", label: "Every Shopper" },
        { value: "Transformed", label: "Digital Experience" }
      ]}
      clientContextTitle="A Generic Experience at Global Scale"
      clientContextIntro="A global retailer ran a digital experience that treated its enormous, diverse customer base as one. Every shopper saw broadly the same merchandising and recommendations, and at global scale that generic approach left an enormous amount of revenue uncaptured."
      clientContextBody="The retailer had abundant data and traffic but was not translating either into a tailored experience. At its scale, even small per-visit improvements in relevance compound into very large revenue, yet the same-for-everyone experience meant conversion and order value ran well below potential across every market. The retailer needed AI personalization that could tailor the experience to each shopper in real time and operate reliably at global scale — turning its data advantage into revenue."
      clientProfile={{
        industry: "Global Retailer",
        companySize: "Large Enterprise Retailer",
        projectDuration: "7 Months",
        additionalInfo: "AI Personalization",
        additionalLabel: "Digital Transformation"
      }}
      challengeTitle="Why the Experience Underperformed"
      challenges={[
        { icon: Target, title: "One Experience for All", description: "A diverse global base saw broadly the same merchandising and recommendations." },
        { icon: TrendingDown, title: "Revenue Left Uncaptured", description: "Generic relevance meant conversion and order value ran below potential in every market." },
        { icon: BarChart3, title: "Data Advantage Unused", description: "Abundant data and traffic were not translated into a tailored experience." },
        { icon: Users, title: "Compounding Lost Value", description: "At global scale, small relevance gaps compounded into large lost revenue." }
      ]}
      approachTitle="Personalize With AI at Scale"
      approachIntro="We built an AI personalization program that tailored the digital experience to each shopper in real time and operated reliably at global scale — scaling e-commerce revenue 40 percent."
      steps={[
        { step: "01", title: "Activating the Data Advantage", description: "We put the retailer's rich shopper data to work driving a personalized experience." },
        { step: "02", title: "Building AI Personalization", description: "We built AI that tailored merchandising and recommendations to each shopper in real time." },
        { step: "03", title: "Operating at Global Scale", description: "We engineered the program to run reliably across markets and enormous traffic volumes." },
        { step: "04", title: "Scaling the Revenue", description: "We tuned personalization to lift conversion and order value, scaling e-commerce revenue 40 percent." }
      ]}
      resultsTitle="Relevance That Compounds Into Revenue"
      results={[
        { icon: TrendingUp, value: "40%", label: "Revenue growth", detail: "E-commerce, from personalization" },
        { icon: Zap, value: "Real-Time", label: "AI", detail: "Tailored to each shopper" },
        { icon: CheckCircle, value: "Global", label: "Scale", detail: "Reliable across markets" },
        { icon: Target, value: "Transformed", label: "Experience", detail: "From generic to personal" }
      ]}
      quote="At our scale, showing every shopper the same store was leaving an enormous amount of revenue on the table across every market. AI personalization that tailors the experience to each customer, reliably and in real time, scaled our e-commerce revenue forty percent. We finally turned our data advantage into results."
      quoteAuthor="Chief Digital Officer"
      quoteRole="Global retailer"
      relatedStudies={[
        { title: "How a Financial Institution Automated 90% of Its Loan Processing", metric: "90%", label: "of loan workflow automated", link: "/case-studies/financial-institution-loan-automation", image: "/images/industries/fin-trader.jpg" },
        { title: "How Predictive Analytics Cut Patient Wait Times by 35%", metric: "35%", label: "shorter patient wait times", link: "/case-studies/healthcare-predictive-analytics", image: "/case-medical-collaboration.9602cc8c.jpg" }
      ]}
      ctaTitle="Is a generic experience capping your digital revenue?"
      ctaDescription="Let's build AI personalization that tailors the experience at scale."
    />
  );
}
