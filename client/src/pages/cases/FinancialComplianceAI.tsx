import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function FinancialComplianceAI() {
  return (
    <CaseStudyTemplate
      client="Multinational Bank"
      industry="Banking · Regulatory Compliance"
      title="Global Bank Automates Regulatory Compliance with Fine-Tuned LLMs"
      subtitle="Custom language models analyzed millions of transactions and communications, reducing false positives by 60% and ensuring adherence to evolving regulations."
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      challenge={`A multinational bank was struggling to keep up with the volume of regulatory requirements across different jurisdictions. Their existing rule-based monitoring systems generated thousands of false positive alerts daily, overwhelming their compliance teams. Furthermore, monitoring employee communications for insider trading and misconduct was a manual, sampling-based process that left significant gaps in coverage.

They needed a more intelligent, scalable solution that could understand the nuance of financial regulations and human communication to identify genuine risks without drowning analysts in noise.`}
      solution={`NEXDYNE fine-tuned open-source Large Language Models (LLMs) on the bank's historical data and specific regulatory frameworks to create a specialized compliance engine.

The model analyzed emails, chats, and voice transcripts to detect subtle indicators of collusion, market manipulation, or bribery, understanding context and slang that keyword filters missed. The system automatically ingested new regulatory documents from global bodies, summarized the changes, and flagged internal policies that needed updating. The AI also reviewed customer onboarding documents and transaction histories, automatically clearing low-risk cases and preparing detailed investigation dossiers for high-risk ones.`}
      impact={`By deploying fine-tuned LLMs tailored to financial compliance, the bank dramatically improved the signal-to-noise ratio in its monitoring programs. The AI doesn't just find more needles in the haystack—it removes the hay, allowing analysts to focus on investigating real financial crimes instead of clearing false alarms.

False positive alerts decreased 60%, enabling the compliance team to focus their attention on genuine risks. Compliance costs decreased 40% by automating routine review tasks. Most significantly, the bank achieved 100% coverage of employee communications—eliminating sampling gaps that previously created regulatory exposure.`}
      metrics={[
        { value: "60%", label: "Reduction in false positive alerts" },
        { value: "40%", label: "Decrease in compliance costs" },
        { value: "100%", label: "Coverage of employee communications" }
      ]}
      quote={{
        text: "The AI doesn't just find more needles in the haystack; it removes the hay. Our analysts can now focus on investigating real financial crimes instead of clearing false alarms.",
        author: "Global Head of Compliance",
        role: "Multinational Bank"
      }}
      tags={["Regulatory Compliance", "AI", "Banking", "Risk & Resilience"]}
      relatedCapability={{
        title: "Artificial Intelligence",
        link: "/capabilities/artificial-intelligence"
      }}
    />
  );
}

export default FinancialComplianceAI;
