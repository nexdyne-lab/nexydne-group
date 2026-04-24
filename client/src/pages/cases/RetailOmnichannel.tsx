import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function RetailOmnichannel() {
  return (
    <CaseStudyTemplate
      client="National Specialty Retailer"
      industry="Retail · Digital Engagement"
      title="Retailer Increases Customer Engagement by 156% with Omnichannel Platform"
      subtitle="Mobile-first engagement strategy drives 43% increase in app usage and 31% boost in customer lifetime value through personalized experiences across all touchpoints."
      heroImage="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1600&q=80"
      challenge={`A national specialty retailer with 380 stores and $1.9 billion in annual revenue faced a critical customer engagement problem. Despite having a mobile app, email marketing platform, and loyalty program, these channels operated in silos—creating disjointed experiences that frustrated customers and limited marketing effectiveness. App engagement rates lagged industry benchmarks by 45%, email open rates had declined 22% year-over-year, and loyalty program participation stagnated at just 28% of the customer base.

The core issue: customers received generic, untargeted communications that ignored their preferences, purchase history, and real-time context. A customer browsing winter coats online would receive an email promoting summer dresses the next day. In-store shoppers had no way to access their loyalty points or personalized offers via mobile. The fragmented experience drove customers to competitors who delivered seamless, personalized engagement across every touchpoint.

Beyond lost sales, the siloed approach created operational inefficiencies. Marketing teams spent excessive time manually coordinating campaigns across channels. Customer service struggled to resolve issues without unified customer histories. Store associates couldn't access digital engagement data to personalize in-store interactions.`}
      solution={`NEXDYNE designed and implemented an enterprise omnichannel engagement platform that unified customer data and orchestrated personalized interactions across mobile app, email, SMS, push notifications, and in-store touchpoints. The solution centered on a CDP that consolidated behavioral data, purchase history, loyalty status, and real-time context into unified customer profiles accessible across all channels.

The mobile app became the engagement hub, rebuilt with React Native to deliver native iOS and Android experiences. NEXDYNE implemented intelligent push notifications triggered by behavioral signals—cart abandonment, price drops on saved items, back-in-stock alerts, and location-based offers when customers entered store proximity. Email and SMS campaigns leveraged predictive analytics to optimize send times, content, and offers for individual customers. Dynamic content templates automatically personalized product recommendations, imagery, and messaging based on customer segments and purchase patterns.

For in-store experiences, associates were equipped with tablet apps that surfaced customer engagement histories, preferences, and personalized recommendations during interactions. Geofencing capabilities triggered welcome messages and exclusive in-store offers when loyalty members entered stores. All engagement touchpoints fed data back into the CDP, creating a continuous learning loop that improved personalization over time.`}
      impact={`Overall customer engagement increased by 156% as personalized, contextually relevant communications replaced generic mass messaging. Mobile app usage surged 43%, with daily active users growing from 12% to 34% of the loyalty member base. Email open rates increased 38% and click-through rates doubled as dynamic content personalization delivered more relevant product suggestions. SMS campaigns achieved 62% open rates and 18% conversion rates. Push notification opt-in rates reached 67%, with 24% of recipients taking action within 30 minutes of receiving location-based offers.

Customer lifetime value increased by 31% as personalized experiences drove higher purchase frequency and average order values. Loyalty program participation grew from 28% to 58% as the mobile app made enrollment and reward redemption frictionless. Store associates reported 25% faster checkout times. Marketing team productivity improved by 40% through automated campaign orchestration.`}
      metrics={[
        { value: "156%", label: "Engagement increase" },
        { value: "43%", label: "Higher app usage" },
        { value: "31%", label: "Increased customer lifetime value" }
      ]}
      tags={["Retail", "Omnichannel", "Digital Engagement", "Growth Marketing"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}
