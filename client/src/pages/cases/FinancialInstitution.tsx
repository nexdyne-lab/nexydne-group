import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function FinancialInstitution() {
  return (
    <CaseStudyTemplate
      client="Regional Bank"
      industry="Banking · Compliance Automation"
      title="Financial Institution: Compliance Automation"
      subtitle="Deployed RPA to automate KYC document processing and regulatory reporting, reducing manual compliance work by 80% while improving accuracy to 99.9%."
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      challenge={`A regional bank processing 10,000+ KYC (Know Your Customer) applications monthly was struggling with compliance bottlenecks. Their compliance team manually reviewed identity documents, verified information across multiple databases, and generated regulatory reports—a process consuming 200+ hours weekly and creating 5-7 day application approval delays.

Manual document review introduced inconsistencies that triggered regulatory audit findings. The bank faced potential fines and reputational risk from compliance gaps. Additionally, the slow KYC process was costing them new customer acquisitions—30% of applicants abandoned the process before completion due to lengthy wait times.`}
      solution={`NEXDYNE implemented an intelligent automation solution combining RPA with document AI. Bots extracted data from identity documents using OCR, cross-referenced information against sanctions lists and credit bureaus, flagged high-risk applications for human review, and generated compliance reports automatically.

We conducted compliance workflow analysis and risk assessment, trained Document AI on 50,000+ historical applications, ran a pilot with 1,000 applications for accuracy validation, then deployed to full production with human-in-the-loop oversight for complex cases. The solution used UiPath Document Understanding for OCR, API integration with sanctions screening services, and machine learning models for fraud detection.`}
      impact={`The automation transformed the bank's compliance operations. Application processing time dropped from 5-7 days to 24 hours, improving customer experience and conversion rates. The compliance team was freed of 160 hours weekly of manual work—redirecting that capacity to complex case reviews and regulatory strategy.

Zero audit findings occurred in the first 12 months post-implementation, demonstrating the accuracy and consistency of automated review. Customer acquisition improved with a 25% increase in application completion rate due to faster processing. The bank can now process 10,000+ applications monthly at 99.9% accuracy—consistently exceeding what manual review could achieve.`}
      metrics={[
        { value: "80%", label: "Reduction in manual compliance work" },
        { value: "10K+", label: "Applications processed monthly" },
        { value: "99.9%", label: "Accuracy rate" }
      ]}
      tags={["RPA", "Compliance Automation", "Banking", "Document AI"]}
      relatedCapability={{
        title: "Operations",
        link: "/capabilities/operations"
      }}
    />
  );
}
