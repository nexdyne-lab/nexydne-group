import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function LenderAIUnderwriting() {
  return (
    <CaseStudyTemplate
      client="Specialty Lending Firm"
      industry="Financial Services · Artificial Intelligence"
      title="AI-Driven Underwriting Accelerates Growth for Specialty Lender"
      subtitle="How a specialty lending firm implemented AI to process 5x more applications while reducing default rates."
      heroImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80"
      challenge={`Manual underwriting limited the company to processing 200 applications per month. Underwriter capacity was the bottleneck to growth. Inconsistent decision-making led to higher-than-expected default rates. The company needed to scale while maintaining or improving credit quality.

A specialty lending firm with 100 employees provides working capital loans from $25,000 to $500,000 to small businesses with 2–10 years of operating history. Analysis of five years of loan performance data revealed patterns that human underwriters couldn't consistently identify—certain combinations of financial metrics predicted default better than traditional credit scores, industry-specific factors significantly influenced repayment probability, and cash flow patterns were more predictive than balance sheet metrics for small businesses.`}
      solution={`NEXDYNE developed a machine learning credit model using historical loan performance that incorporated traditional financial metrics alongside alternative data sources. Explainable AI techniques ensured decisions could be understood and justified for regulatory compliance. Model monitoring was built in to detect drift and maintain accuracy over time.

Document processing was automated through OCR and NLP extraction from bank statements and tax returns, validation rules flagging inconsistencies for human review, automated financial spreading that standardized data across applications, and fraud detection capabilities that identified suspicious patterns.

A tiered decision workflow balanced automation with human oversight: low-risk applications received automated approval within hours, medium-risk applications were pre-scored with recommendations for underwriter review, and high-risk applications received full manual underwriting with AI-provided insights. Rigorous compliance and fairness testing included adverse action analysis, disparate impact testing across protected classes, and documentation for regulatory examination.`}
      impact={`Application throughput increased 5x, from 200 to 1,000+ applications per month, without adding underwriting headcount. Decision time dropped to 4 hours for most applications, creating a significant competitive advantage in a market where borrowers often choose the lender that responds fastest. Default rates decreased 22% as the ML model identified risk factors that manual underwriters missed or applied inconsistently.

The expanded capacity enabled $45 million in new loan volume in the first year. Credit quality improved simultaneously with volume—demonstrating that AI-driven underwriting enhanced rather than compromised credit discipline. The compliance infrastructure built into the model from day one positioned the company favorably for regulatory examination and fair lending audits.`}
      metrics={[
        { value: "5x", label: "Application throughput" },
        { value: "22%", label: "Default rate reduction" },
        { value: "4 hrs", label: "Decision time" },
        { value: "$45M", label: "New loan volume" }
      ]}
      tags={["Financial Services", "AI", "Underwriting", "Lending"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}

export default LenderAIUnderwriting;
