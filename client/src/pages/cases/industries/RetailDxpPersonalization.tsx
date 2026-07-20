import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Target, TrendingDown, DollarSign, BarChart3, TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function RetailDxpPersonalization() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Specialty Retailer Lifts Conversion 31% With Adobe Personalization | DXP Case Study"
      seoDescription="A specialty retailer had the Adobe Experience Cloud but ran the same experience for everyone. An audience-driven personalization program delivered double-digit conversion lift across the top three segments."
      canonical="/cases/retail-dxp-personalization"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Specialty Retailer Lifted Conversion 31% With Audience-Driven Personalization"
      subtitle="The retailer owned a powerful experience platform and used almost none of it, showing every visitor the same page. Personalizing by audience unlocked the conversion the platform promised."
      heroImage="/images/capabilities/cap-retail-apparel.jpg"
      metrics={[
        { value: "31%", label: "Higher Conversion" },
        { value: "Top 3", label: "Segments Personalized" },
        { value: "Audience", label: "Driven" },
        { value: "Adobe", label: "Experience Cloud" }
      ]}
      clientContextTitle="A Powerful Platform, Barely Used"
      clientContextIntro="A specialty retailer had invested in Adobe Experience Cloud, a platform capable of sophisticated personalization, and was running it as a glorified content-management system. Every visitor — new or loyal, browsing or buying — saw the same generic experience."
      clientContextBody="The capability was sitting idle. The retailer had the audiences, the data, and the tools to tailor the experience to different customer segments, but no program to actually do it, so the investment delivered a fraction of its potential. The homepage, the merchandising, and the offers were identical for everyone, which meant the retailer was leaving conversion on the table with every visit. It needed an audience-driven personalization program on the platform it already owned — targeting its most valuable segments with tailored experiences — to finally realize the platform's promise."
      clientProfile={{
        industry: "Specialty Retailer",
        companySize: "~95 Stores",
        projectDuration: "5 Months",
        additionalInfo: "Adobe Experience Cloud",
        additionalLabel: "Experience Platform"
      }}
      challengeTitle="Why the Platform Underdelivered"
      challenges={[
        { icon: Target, title: "One Experience for Everyone", description: "Every visitor saw the same generic page regardless of who they were." },
        { icon: TrendingDown, title: "Capability Sitting Idle", description: "The retailer had the data and tools to personalize but no program to do it." },
        { icon: DollarSign, title: "An Under-Realized Investment", description: "A powerful platform delivered a fraction of its potential value." },
        { icon: BarChart3, title: "Conversion Left on the Table", description: "Identical experiences meant lost conversion on every visit." }
      ]}
      approachTitle="Personalize the Highest-Value Segments"
      approachIntro="We built an audience-driven personalization program on Adobe Experience Cloud, targeting the retailer's top three customer segments with tailored experiences — delivering double-digit conversion lift, 31 percent overall."
      steps={[
        { step: "01", title: "Defining the Priority Audiences", description: "We identified the retailer's most valuable customer segments as the highest-return targets for personalization." },
        { step: "02", title: "Building Tailored Experiences", description: "We designed distinct experiences for each priority segment, using the platform's targeting the retailer had never activated." },
        { step: "03", title: "Activating on the Platform", description: "We put the audience-driven personalization live on Adobe Experience Cloud, finally using its core capability." },
        { step: "04", title: "Measuring the Lift", description: "We tracked conversion by segment, confirming double-digit lift across the top three and 31 percent overall." }
      ]}
      resultsTitle="The Platform's Promise, Realized"
      results={[
        { icon: TrendingUp, value: "31%", label: "Higher conversion", detail: "Overall, from personalization" },
        { icon: CheckCircle, value: "Top 3", label: "Segments", detail: "Tailored experiences each" },
        { icon: Target, value: "Audience", label: "Driven", detail: "Not one page for all" },
        { icon: Zap, value: "Activated", label: "Adobe capability", detail: "Finally in use" }
      ]}
      quote="We were paying for a sophisticated experience platform and using it to show everyone the exact same page. Building a real personalization program on top of it — just for our three most valuable segments to start — lifted conversion thirty-one percent. We finally got what we had been paying for all along."
      quoteAuthor="VP of E-commerce"
      quoteRole="Specialty retailer"
      relatedStudies={[
        { title: "How a National Insurer Halved Publishing Time With a Composable Migration", metric: "50%+", label: "faster publishing", link: "/cases/insurer-sitecore-migration", image: "/images/cases/insurer-sitecore-migration-hero.jpg" },
        { title: "How a Global Law Firm Migrated 12M Documents Without Losing a Single Ethical Wall", metric: "12M", label: "documents migrated", link: "/cases/law-firm-csp-migration", image: "/images/capabilities/cap-conference-data.jpg" }
      ]}
      ctaTitle="Is your experience platform running as a glorified CMS?"
      ctaDescription="Let's build the audience-driven personalization program that realizes its value."
    />
  );
}
