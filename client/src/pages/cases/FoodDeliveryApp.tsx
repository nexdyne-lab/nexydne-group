import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function FoodDeliveryApp() {
  return (
    <CaseStudyTemplate
      client="Regional Food Delivery Service"
      industry="Food & Beverage · Mobile App"
      title="Regional Food Delivery Service Scales to 500K Orders/Month with Real-Time Tracking"
      subtitle="Cross-platform mobile app with live driver tracking, route optimization, and POS integrations achieves 4.6★ rating and cuts average delivery time from 32 to 18 minutes."
      heroImage="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1600&q=80"
      challenge={`A regional food delivery service operating in 15 cities needed to rebuild their mobile app to compete with national players like DoorDash and Uber Eats. Their existing app suffered from slow performance, unreliable GPS tracking, and frequent crashes during peak hours. Customer complaints centered on inaccurate delivery estimates, inability to track drivers in real-time, and a clunky ordering interface that made menu browsing frustrating.

The company needed a scalable platform that could handle 500,000+ orders per month while providing real-time driver tracking, accurate ETAs, and seamless payment processing. The app had to support three user types (customers, drivers, and restaurant partners) with different interfaces and workflows. Integration with existing restaurant POS systems and payment gateways was critical, as was offline functionality for drivers in areas with poor connectivity.`}
      solution={`NEXDYNE built separate native apps for customers (iOS/Android), drivers (iOS/Android), and restaurant partners (tablet-optimized). The customer app featured an intuitive menu browsing experience with high-quality food photos, customization options, and saved favorites. We implemented real-time order tracking with live map views showing driver location and estimated arrival times, updated every 10 seconds via WebSocket connections.

The driver app used GPS optimization algorithms to suggest efficient routes and batch multiple orders for the same area. Offline functionality allowed drivers to accept orders and navigate even when connectivity was poor, with automatic sync when connection was restored. We integrated with Stripe for payment processing and built custom APIs to connect with various restaurant POS systems. The backend leveraged AWS Lambda for serverless scaling during peak hours, handling traffic spikes without performance degradation.`}
      impact={`The new app launched successfully and immediately improved operational metrics. Order volume increased 156% in the first three months as the improved user experience attracted new customers and increased order frequency. Average delivery time decreased from 32 minutes to 18 minutes thanks to the driver app's route optimization and batch order features. Customer satisfaction ratings improved from 3.8★ to 4.6★, with particular praise for the accurate ETAs and real-time tracking.

The app handled peak loads of 15,000 concurrent users without performance issues, compared to frequent crashes with the old system. Driver efficiency improved 34% through better route planning and batch order capabilities. Restaurant partners reported 42% fewer order errors due to the improved POS integration and clearer order displays. The company expanded to 10 additional cities within six months, enabled by the scalable platform architecture.`}
      metrics={[
        { value: "500K", label: "Monthly orders processed" },
        { value: "18min", label: "Average delivery time" },
        { value: "4.6★", label: "Customer satisfaction rating" }
      ]}
      tags={["Mobile App", "Food Delivery", "Real-Time Systems", "Consumer Tech"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
