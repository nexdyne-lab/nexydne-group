import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function DigitalBankMobilePlatform() {
  return (
    <CaseStudyTemplate
      client="Digital-First Bank"
      industry="Fintech · Mobile Banking"
      title="Digital Bank Onboards 250K Users in 6 Months with Mobile-First Platform"
      subtitle="Native iOS and Android apps with AI-powered identity verification delivered a 2.8-minute account opening experience and 94% mobile transaction rate."
      heroImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80"
      challenge={`A digital-first bank launching in the US market needed a mobile banking app that could compete with established neobanks like Chime and Current. Their business model relied on mobile-only operations—no physical branches—so the app had to handle everything from account opening to loan applications. Security and regulatory compliance were paramount, requiring bank-grade encryption and adherence to FDIC guidelines.

The app needed to support complex financial features including instant payments, check deposits via camera, budgeting tools, and savings goals. User onboarding had to be frictionless (under 5 minutes) while meeting Know Your Customer (KYC) requirements. The bank also needed to integrate with legacy core banking systems and third-party services like Plaid for account linking.`}
      solution={`NEXDYNE built native iOS and Android apps using Swift and Kotlin to maximize security and performance for financial transactions. We implemented biometric authentication (Face ID, Touch ID, fingerprint) and end-to-end encryption for all sensitive data. The onboarding flow used AI-powered identity verification with document scanning and liveness detection, reducing fraud while maintaining a smooth user experience.

Our team integrated with the bank's core systems via secure APIs, implementing real-time transaction notifications and instant balance updates. We built a custom camera module for mobile check deposits with automatic edge detection and image quality validation. The app's budgeting features used machine learning to categorize transactions and provide spending insights.`}
      impact={`The app launched successfully and onboarded 250,000 users in the first six months, exceeding growth projections by 67%. The streamlined onboarding flow achieved an average completion time of 2.8 minutes, with a 92% completion rate—significantly higher than the industry average of 65-75%.

Mobile transactions accounted for 94% of all banking activity, validating the mobile-first strategy. Security audits confirmed the app met all regulatory requirements, with zero data breaches. The mobile check deposit feature processed $45 million in deposits during the first six months with a 98% success rate. User satisfaction scores averaged 4.7 stars on both App Stores.`}
      metrics={[
        { value: "250K", label: "Users onboarded in 6 months" },
        { value: "94%", label: "Mobile transaction rate" },
        { value: "2.8min", label: "Average account opening time" }
      ]}
      tags={["Mobile Banking", "Fintech", "Digital Transformation", "UX Design"]}
      relatedCapability={{
        title: "Technology",
        link: "/capabilities/technology"
      }}
    />
  );
}
