import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function LenderAIUnderwriting() {
  return (
    <CaseStudyArticle
      industry="Artificial Intelligence"
      industryHref="/capabilities/artificial-intelligence"
      title="AI-Driven Underwriting Accelerates Growth for Specialty Lender"
      subtitle="How a specialty lending firm implemented AI to process 5x more applications while reducing default rates"
      client="A specialty lending firm with 100 employees focused on small business loans. The company provides working capital loans from $25K to $500K to businesses with 2-10 years of operating history."
      challenge="Manual underwriting limited the company to processing 200 applications per month. Underwriter capacity was the bottleneck to growth. Inconsistent decision-making led to higher-than-expected default rates. The company needed to scale while maintaining or improving credit quality."
      metrics={[
        { value: "5x", label: "Application Throughput" },
        { value: "22%", label: "Default Rate Reduction" },
        { value: "4 hrs", label: "Decision Time" },
        { value: "$45M", label: "New Loan Volume" },
      ]}
      relatedCaseStudies={[
        {
          title: "AI-Powered Document Processing Transforms Regional Insurance Firm",
          href: "/capabilities/artificial-intelligence/case-studies/insurance-document-ai",
          industry: "Insurance"
        },
        {
          title: "Demand Forecasting AI Optimizes Inventory for Regional Distributor",
          href: "/capabilities/artificial-intelligence/case-studies/distributor-demand-forecasting",
          industry: "Distribution"
        },
        {
          title: "Quality Inspection AI Improves Yield for Food Processor",
          href: "/capabilities/artificial-intelligence/case-studies/food-quality-ai",
          industry: "Food & Beverage"
        }
      ]}
    >
      <h2>Analyzing Historical Performance</h2>
      <p>
        Our analysis of 5 years of loan performance data revealed patterns that human underwriters couldn't consistently identify. Certain combinations of financial metrics predicted default better than traditional credit scores. Industry-specific factors significantly influenced repayment probability. Cash flow patterns were more predictive than balance sheet metrics for small businesses.
      </p>

      <h2>Building the Credit Model</h2>
      <p>
        We developed a machine learning credit model using historical loan performance. The model incorporated traditional financial metrics alongside alternative data sources. We implemented explainable AI techniques to ensure decisions could be understood and justified. We built in regulatory compliance requirements from the start. We also created model monitoring to detect drift and maintain accuracy.
      </p>

      <h2>Automating Document Processing</h2>
      <p>
        We automated the extraction and analysis of application documents. We implemented OCR and NLP to extract data from bank statements and tax returns. We built validation rules that flagged inconsistencies for human review. We created automated financial spreading that standardized data across applications. We also developed fraud detection capabilities that identified suspicious patterns.
      </p>

      <h2>Designing the Decision Workflow</h2>
      <p>
        We created a tiered decision workflow that balanced automation with human oversight. Low-risk applications received automated approval within hours. Medium-risk applications were pre-scored with recommendations for underwriter review. High-risk applications received full manual underwriting with AI-provided insights. We also built exception handling for unusual situations.
      </p>

      <h2>Ensuring Compliance and Fairness</h2>
      <p>
        We implemented rigorous compliance and fairness testing. We conducted adverse action analysis to ensure explainable decisions. We tested for disparate impact across protected classes. We documented model development for regulatory examination. We also established ongoing monitoring for fair lending compliance.
      </p>

      <h2>Key Lessons</h2>
      <ul>
        <li>Alternative data improves credit decisions for small businesses</li>
        <li>Explainability is essential for lending AI</li>
        <li>Tiered workflows balance automation with appropriate oversight</li>
        <li>Compliance must be built in from the start, not added later</li>
      </ul>
    </CaseStudyArticle>
  );
}
