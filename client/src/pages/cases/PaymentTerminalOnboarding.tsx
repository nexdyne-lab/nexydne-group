import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function PaymentTerminalOnboarding() {
  return (
    <CaseStudyTemplate
      client="Payment Processor"
      industry="Fintech · Personalization"
      title="Fintech Speeds Up Terminal Onboarding 52% with Personalized Merchant Workflows"
      subtitle="How a payment processor implemented Sitecore DXP and journey mapping to deliver personalized merchant onboarding experiences—reducing time-to-activation and increasing satisfaction scores."
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80"
      challenge={`A rapidly growing payment processor serving 45,000+ merchants across retail, restaurants, and professional services faced a critical challenge: their terminal onboarding process created friction that delayed merchant activation and drove support costs. New merchants received generic setup instructions regardless of business type, technical sophistication, or hardware configuration—resulting in confusion, errors, and abandoned onboarding.

Merchants took an average of 14 days from terminal delivery to first transaction. Generic setup guides forced merchants to wade through irrelevant instructions. 78% of new merchants contacted support during onboarding, overwhelming the support team with repetitive questions. Merchant satisfaction scores during onboarding averaged 2.9/5. 12% of merchants who received terminals never completed activation, representing lost revenue and wasted hardware investment. The company had no visibility into where merchants got stuck or why they abandoned the process.`}
      solution={`NEXDYNE designed and implemented a personalized onboarding platform built on Sitecore DXP that adapted content, workflows, and guidance based on merchant characteristics—business type, terminal model, technical experience, and real-time progress.

We began with in-depth merchant journey mapping across segments (retail, restaurant, professional services) and technical sophistication levels, identifying friction points where merchants abandoned onboarding. We then implemented Sitecore's personalization engine to dynamically adapt onboarding content: a restaurant owner with a countertop terminal saw a streamlined workflow focused on quick setup and tip configuration, while a retail merchant with an integrated POS received detailed inventory sync instructions. Content personalized in real-time—if merchants spent excessive time on network configuration, the system surfaced troubleshooting guides and offered proactive chat support.

We replaced static PDF manuals with interactive step-by-step workflows with progress tracking, video tutorials, and conditional logic that skipped irrelevant steps. Behavioral analytics integrated with the support platform to trigger proactive interventions for merchants showing signs of struggle, and automated email sequences kept merchants engaged between sessions.`}
      impact={`Average time from terminal delivery to first transaction dropped from 14 days to 6.7 days—a 52% improvement. The company activated 3,200 additional merchants per quarter compared to the previous year. Personalized, contextual guidance reduced support contacts during onboarding from 78% to 48% of merchants, decreasing support cost per onboarded merchant by $42 and freeing the team to handle revenue-generating activities.

Post-onboarding satisfaction scores increased from 2.9/5 to 4.7/5. Net Promoter Score for onboarding improved from -12 to +58. Onboarding abandonment dropped from 12% to 3%, recovering $2.4M in annual processing revenue from merchants who would have previously abandoned. Proactive interventions rescued 67% of at-risk onboarding sessions.`}
      metrics={[
        { value: "52%", label: "Faster onboarding" },
        { value: "38%", label: "Support ticket reduction" },
        { value: "4.7/5", label: "Merchant satisfaction score" },
        { value: "89%", label: "First-time completion rate" }
      ]}
      tags={["Fintech", "Personalization", "Customer Experience", "Technology"]}
      relatedCapability={{
        title: "Growth Marketing & Sales",
        link: "/capabilities/growth-marketing-sales"
      }}
    />
  );
}
