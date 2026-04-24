import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function HospitalityGuestExperience() {
  return (
    <CaseStudyTemplate
      client="Boutique Hotel Chain"
      industry="Hospitality · Digital Engagement"
      title="Hotel Chain Elevates Guest Experience Through Digital Engagement"
      subtitle="Personalized mobile concierge service increases guest satisfaction by 34% and drives 52% growth in ancillary revenue per stay through intelligent, context-aware engagement."
      heroImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80"
      challenge={`A boutique hotel chain with 42 properties across major US cities faced a critical guest experience challenge. Despite premium positioning and high room rates, guest satisfaction scores had declined 18 points over three years as travelers increasingly expected seamless digital experiences comparable to leading hospitality brands. The chain's mobile app functioned primarily as a booking tool, offering minimal value during guest stays. Concierge services remained phone-based and reactive, creating friction for guests seeking recommendations, reservations, or assistance.

The core problem: disconnected guest touchpoints created inconsistent experiences that failed to leverage guest preferences, stay history, or real-time context. A returning guest who previously requested late checkout had to repeat the request each visit. Guests interested in spa services received no proactive recommendations or special offers. The hotel lacked visibility into guest needs until problems escalated to front desk complaints.

Beyond guest satisfaction, the fragmented experience created revenue leakage. Ancillary services—spa treatments, dining reservations, room upgrades, local experiences—remained underutilized because guests didn't discover offerings or found booking processes cumbersome. Staff spent excessive time handling routine requests that could be automated, limiting their ability to deliver high-touch service during critical moments.`}
      solution={`NEXDYNE designed and implemented a comprehensive digital engagement platform centered on a mobile concierge app that transformed the guest experience from check-in through post-stay follow-up. The solution unified guest data from the property management system, CRM, loyalty program, and third-party services into a single customer profile that powered personalized interactions across every touchpoint.

The mobile concierge featured intelligent recommendations powered by collaborative filtering and guest preference modeling. Upon check-in, guests received personalized suggestions for dining, spa treatments, and local experiences based on their profile, previous stays, and real-time context. NEXDYNE implemented one-tap booking for all hotel services—room service, spa appointments, restaurant reservations, housekeeping requests—eliminating phone calls for routine needs.

For pre-arrival engagement, the platform sent personalized welcome messages with property highlights, weather forecasts, and curated local recommendations three days before check-in. During stays, the app enabled digital key access, real-time service request tracking, and proactive notifications about relevant offerings. NEXDYNE integrated conversational AI for instant guest support, handling common inquiries without staff intervention. For complex requests, the system routed inquiries to appropriate staff members with full context.`}
      impact={`The digital engagement platform transformed guest experiences and business performance within five months of launch. Guest satisfaction scores increased by 34% as personalized, frictionless service replaced generic, reactive interactions. Mobile app adoption reached 81% of guests within three months, with 92% of adopters actively using the app during their stays. Guests particularly valued digital key access (94% adoption among app users) and one-tap service requests, which reduced average response times from 12 minutes to 3 minutes.

Ancillary revenue per stay increased by 52% as personalized recommendations surfaced relevant services at optimal moments. Spa bookings grew 67%, restaurant reservations increased 43%, and room upgrade acceptance rates doubled. Front desk call volume decreased by 41% as guests self-served routine requests. Guest loyalty program enrollment increased from 34% to 72%. Net Promoter Score increased by 26 points, and the hotel chain's direct booking rate increased by 23%.`}
      metrics={[
        { value: "34%", label: "Guest satisfaction increase" },
        { value: "52%", label: "Ancillary revenue growth per stay" },
        { value: "81%", label: "Mobile app adoption rate" }
      ]}
      tags={["Hospitality", "Digital Engagement", "Mobile App", "AI"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}
