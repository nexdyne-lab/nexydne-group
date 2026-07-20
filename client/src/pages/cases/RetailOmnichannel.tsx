import IndustryCaseStudyTemplate from "@/components/IndustryCaseStudyTemplate";
import { Split, MailX, Users, Store, Database, Smartphone, MapPin, TrendingUp } from "lucide-react";

export function RetailOmnichannel() {
  return (
    <IndustryCaseStudyTemplate
      seoTitle="Increasing Customer Engagement 156% With an Omnichannel Platform | Retail Case Study"
      seoDescription="A 380-store, $1.9B specialty retailer ran mobile, email, and loyalty in silos. A unified omnichannel platform lifted engagement 156%, app usage 43%, and lifetime value 31%."
      canonical="/cases/retail-omnichannel"
      industry="Retail"
      industryLink="/industries/retail"
      title="How a Specialty Retailer Increased Customer Engagement 156% With Omnichannel"
      subtitle="A mobile-first engagement platform unified app, email, SMS, push, and in-store touchpoints — driving a 43% rise in app usage and a 31% lift in customer lifetime value."
      heroImage="/images/cases/retail-omnichannel-hero.jpg"
      metrics={[
        { value: "156%", label: "Engagement Increase" },
        { value: "43%", label: "Higher App Usage" },
        { value: "31%", label: "Higher Lifetime Value" }
      ]}
      clientContextTitle="Channels That Didn't Talk"
      clientContextIntro="A national specialty retailer with 380 stores and $1.9B in revenue faced a critical engagement problem. Despite having a mobile app, email platform, and loyalty program, these channels operated in silos — creating disjointed experiences that frustrated customers and limited marketing effectiveness."
      clientContextBody="App engagement lagged benchmarks by 45%, email open rates had fallen 22% year-over-year, and loyalty participation stalled at 28% of customers. A shopper browsing winter coats online would get a summer-dress email the next day; in-store shoppers couldn't reach loyalty points or offers on mobile. The fragmentation drove customers to competitors with seamless engagement — and created operational drag as teams manually coordinated campaigns across channels."
      clientProfile={{
        industry: "Specialty Retailer",
        companySize: "380 Stores",
        projectDuration: "Unified CDP",
        additionalInfo: "$1.9B Revenue",
        additionalLabel: "Scale"
      }}
      challengeTitle="Why Engagement Stalled"
      challenges={[
        {
          icon: Split,
          title: "Siloed channels",
          description: "App, email, and loyalty operated separately, producing disjointed, contradictory customer experiences."
        },
        {
          icon: MailX,
          title: "Declining email and app metrics",
          description: "Open rates fell 22% and app engagement trailed benchmarks by 45% as messaging stayed generic."
        },
        {
          icon: Users,
          title: "Stalled loyalty at 28%",
          description: "A clunky enrollment and redemption experience kept loyalty participation flat."
        },
        {
          icon: Store,
          title: "Disconnected in-store experience",
          description: "Associates had no access to digital engagement data to personalize in-person interactions."
        }
      ]}
      approachTitle="One Platform, Every Touchpoint"
      approachIntro="NEXDYNE built an enterprise omnichannel platform that unified customer data and orchestrated personalized interactions across app, email, SMS, push, and in-store — centered on a CDP feeding every channel."
      steps={[
        {
          step: "01",
          title: "Make the app the hub",
          description: "Rebuilt in React Native, the app delivered native iOS and Android experiences with intelligent, behavior-triggered push notifications."
        },
        {
          step: "02",
          title: "Trigger on real signals",
          description: "Cart abandonment, price drops on saved items, back-in-stock alerts, and store-proximity offers drove timely, relevant outreach."
        },
        {
          step: "03",
          title: "Personalize email and SMS",
          description: "Predictive analytics optimized send times and content, with dynamic templates tailoring recommendations by segment and pattern."
        },
        {
          step: "04",
          title: "Arm store associates",
          description: "Tablet apps surfaced engagement history and recommendations in-store, while geofencing triggered welcome messages and exclusive offers."
        }
      ]}
      resultsTitle="The Payoff"
      results={[
        {
          icon: Smartphone,
          value: "43%",
          label: "Higher app usage",
          detail: "Daily active users grew from 12% to 34% of loyalty members"
        },
        {
          icon: TrendingUp,
          value: "31%",
          label: "Higher lifetime value",
          detail: "From higher purchase frequency and order values"
        },
        {
          icon: MapPin,
          value: "58%",
          label: "Loyalty participation",
          detail: "Up from 28% as the app made enrollment frictionless"
        }
      ]}
      quote=""
      quoteAuthor=""
      quoteRole=""
      relatedStudies={[
        {
          title: "Unlocking 34% Revenue Growth With AI Personalization",
          metric: "34%",
          label: "revenue growth",
          link: "/cases/retail-modernization-personalization",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        },
        {
          title: "Driving a 34% Revenue Lift With AI Personalization",
          metric: "42%",
          label: "higher conversion",
          link: "/cases/retail-personalization",
          image: "/images/capabilities/cap-retail-apparel.jpg"
        }
      ]}
      ctaTitle="Ready to unify your channels?"
      ctaDescription="Let's talk about what an omnichannel platform could do for your engagement and retention."
    />
  );
}

export default RetailOmnichannel;
