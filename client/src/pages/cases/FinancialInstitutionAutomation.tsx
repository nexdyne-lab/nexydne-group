import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function FinancialInstitutionAutomation() {
  return (
    <CaseStudyTemplate
      client="Regional Bank"
      industry="Banking & Financial Services · Intelligent Automation"
      title="Automating 90% of Loan Processing Workflows"
      subtitle="A leading regional bank transformed their lending operations through intelligent document processing and workflow automation, dramatically reducing processing time while improving accuracy and compliance."
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      challenge={`A regional bank with $45 billion in assets was struggling with manual loan processing that took an average of 5-7 business days. With over 50,000 loan applications processed annually across consumer, commercial, and mortgage products, the manual review process was consuming substantial resources while creating customer dissatisfaction. Average processing time of 5-7 business days put the bank at a competitive disadvantage against digital-first lenders offering same-day decisions.

The existing process required loan officers to manually review dozens of documents per application, cross-reference information across multiple systems, and navigate complex compliance requirements. This manual approach resulted in inconsistent decisions, with error rates approaching 15% and significant variation in processing times depending on individual workloads. More than 200 full-time employees were dedicated solely to document processing tasks.

Regulatory pressure added another layer of complexity. Recent examinations had identified inconsistencies in documentation and decision-making that required remediation. The bank needed a solution that would not only improve efficiency but also strengthen compliance and create a complete audit trail for every decision.`}
      solution={`NexDyne designed and implemented an end-to-end intelligent automation platform that combined multiple AI technologies with human-in-the-loop oversight for complex cases.

We deployed advanced OCR and NLP models trained specifically on financial documents to automatically extract, classify, and validate data from over 40 document types including loan applications, tax returns, pay stubs, and bank statements. The system achieved 99.2% extraction accuracy while automatically flagging anomalies for human review—processing over 200 data fields per application with built-in confidence scoring for intelligent routing.

Our team implemented a flexible workflow engine that routes applications through automated and manual steps based on risk profiles, product types, and regulatory requirements. We created 15 automated workflow templates by product type, integrated with core banking and credit systems, and built real-time status tracking. We also implemented AI-powered decision support that pre-qualifies applications, flags compliance issues, and provides underwriters with risk assessments. Every decision is documented with complete rationale, creating comprehensive audit trails.`}
      impact={`The transformation delivered immediate and measurable impact across every dimension of the lending operation. Processing time dropped from 5-7 days to under 4 hours for standard applications. Accuracy improved dramatically, with document extraction accuracy reaching 99.2%—far exceeding the previous 85% manual accuracy rate.

90% of loan applications are now processed without manual intervention, freeing loan officers to focus on complex cases and building customer relationships. Annual cost savings of $12M were achieved through reduced manual processing, improved accuracy, and increased loan officer productivity. The bank is now positioned as a leader in digital lending within their market.`}
      metrics={[
        { value: "90%", label: "Process automation rate" },
        { value: "85%", label: "Reduction in processing time" },
        { value: "99.2%", label: "Document extraction accuracy" },
        { value: "$12M", label: "Annual savings" }
      ]}
      quote={{
        text: "The automation platform has fundamentally changed how we operate. Our loan officers now spend their time building relationships and solving complex problems, not shuffling paper. Customer satisfaction has never been higher.",
        author: "Michael Torres",
        role: "Chief Operating Officer"
      }}
      tags={["Intelligent Automation", "Banking", "Document AI", "Operations"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
