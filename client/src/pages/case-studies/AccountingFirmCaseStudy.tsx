import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function AccountingFirmCaseStudy() {
  return (
    <CaseStudyTemplate
      client="Regional Accounting Firm"
      industry="Professional Services · Operations"
      title="70% Reduction in Manual Document Processing"
      subtitle="A 120-employee accounting firm serving mid-market clients deploys ProcessFlow AI to streamline tax document processing and client onboarding workflows, achieving dramatic efficiency gains ahead of their busiest season."
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80"
      challenge={`For two decades, this regional accounting firm had built a reputation for personalized service and deep client relationships. But as their client base grew to over 800 businesses and high-net-worth individuals, their manual processes couldn't keep pace.

Each tax season brought the same challenges: mountains of documents arriving via email, mail, and client drop-offs. Staff spent hours scanning, naming, and organizing files. Partners lost visibility into workload distribution. Clients waited days for confirmation that their materials had been received and processed.

The firm's leadership recognized that their document handling bottleneck wasn't just an operational issue—it was limiting their ability to grow and threatening the client experience that had built their reputation.`}
      solution={`NEXDYNE deployed ProcessFlow AI to transform the firm's document handling from a manual, error-prone process into an intelligent, automated workflow. The solution combined AI-powered document recognition with smart routing and real-time tracking.

Documents arriving through any channel—email attachments, scanned mail, or the new client portal—are automatically classified, data-extracted, and routed to the appropriate team member. The system recognizes over 200 document types, from W-2s and 1099s to complex partnership agreements.

ProcessFlow AI connected to the firm's document management systems and accounting software, automatically mapping existing workflows across tax preparation, audit documentation, and client onboarding processes. An intelligent document processing pipeline using AI-powered OCR and classification, automated data extraction, and smart routing was implemented with phased rollout beginning with tax document processing, followed by audit workpapers and client onboarding.`}
      impact={`Within eight weeks of deployment, the firm experienced measurable improvements across every dimension of their document operations. Document processing time reduced from 45 minutes to 12 minutes per client file—a 70% reduction in manual processing work. Automatic categorization accuracy of 94% eliminated manual sorting, and real-time status visibility was provided for partners and managers.

Overtime hours during tax season reduced by 60%. Turnaround time for standard tax returns improved by 40%. A client portal enabled self-service document uploads with proactive notifications keeping clients informed of progress. Staff were redeployed to higher-value advisory services, enabling the firm to expand their consulting practice. The ROI was 3.5x in the first year of deployment.`}
      metrics={[
        { value: "70%", label: "Reduction in manual processing" },
        { value: "120", label: "Employees served" },
        { value: "8wks", label: "To implementation" },
        { value: "3.5x", label: "ROI in first year" }
      ]}
      quote={{
        text: "For the first time in years, we entered tax season feeling prepared rather than anxious. Our team can now focus on what they do best—advising clients—instead of shuffling paper. The ROI was evident within the first quarter.",
        author: "Managing Partner",
        role: "Regional Accounting Firm"
      }}
      tags={["Professional Services", "AI", "Automation", "Operations"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}
