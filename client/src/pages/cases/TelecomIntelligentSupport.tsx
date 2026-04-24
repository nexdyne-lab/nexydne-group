import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function TelecomIntelligentSupport() {
  return (
    <CaseStudyTemplate
      client="Regional Telecommunications Provider"
      industry="Telecommunications · Conversational AI"
      title="Telecom Provider Improves CSAT by 38 Points Through Intelligent Support"
      subtitle="AI-powered virtual assistant resolves technical issues 4x faster while maintaining context across multiple interaction channels, transforming customer experience in a highly competitive market."
      heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
      challenge={`A regional telecommunications provider serving 4.2 million subscribers faced a customer experience crisis. NPS lagged competitors by 28 points, and churn rates exceeded industry averages by 34%. Post-interaction surveys revealed that technical support frustration—long wait times, repetitive troubleshooting, and inconsistent service quality—drove 62% of customer defections.

Customers contacted support through multiple channels (phone, web chat, mobile app, social media) but experienced fragmented, inconsistent service. A customer who started troubleshooting via web chat had to repeat their entire issue when escalating to phone support. Technical support agents lacked unified visibility into customer interaction histories, network diagnostics, and account details—forcing customers through redundant authentication and information gathering.

The company's existing IVR system and basic chatbot created more frustration than resolution. Customers navigated confusing menu trees only to reach agents who couldn't access conversation context. Technical troubleshooting required multiple interactions across days as agents manually escalated issues through siloed systems.`}
      solution={`NEXDYNE designed and implemented an omnichannel conversational AI platform that unified customer interactions across phone (voice AI), web chat, mobile app, SMS, and social media. The intelligent virtual assistant understood natural language, maintained context across channels, and integrated with network diagnostics, billing systems, and CRM to provide personalized, proactive support.

The AI assistant handled common technical issues autonomously—connectivity troubleshooting, device configuration, plan changes, billing inquiries, and service outage updates. Real-time integrations with network monitoring systems allowed the bot to proactively detect and resolve issues before customers even reported problems. When customers contacted support about slow internet speeds, the AI assistant automatically ran diagnostics, identified the issue, and guided customers through resolution steps.

For complex issues requiring human expertise, the platform used intelligent routing matching customers with specialized agents based on issue type, customer value, and agent skill sets. When escalating, the system provided agents with full conversation transcripts, diagnostic results, and recommended next steps. AI copilot capabilities suggested troubleshooting steps to human agents in real-time. The solution maintained conversation context across channels and time—customers could start troubleshooting via mobile app and seamlessly continue via phone without repeating information.`}
      impact={`Customer satisfaction scores increased by 38 points as instant, contextual support replaced fragmented, repetitive interactions. The AI assistant autonomously resolved 71% of technical support inquiries—handling 340,000 monthly interactions without human intervention. Average resolution time dropped from 18 minutes to 4.3 minutes. First-contact resolution rates improved from 54% to 87%.

Churn rates decreased by 29% as improved support experiences strengthened customer loyalty. Support costs dropped by $6.8 million annually through automation and efficiency gains. The telecom provider's NPS improved by 31 points, surpassing regional competitors for the first time in five years. The conversational AI platform now handles 4.1 million annual interactions, delivering $14.2 million in combined cost savings and churn reduction value.`}
      metrics={[
        { value: "38", label: "Point CSAT increase" },
        { value: "4x", label: "Faster issue resolution" },
        { value: "71%", label: "Autonomous handling rate" }
      ]}
      tags={["Telecommunications", "Conversational AI", "Customer Experience", "AI"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}
