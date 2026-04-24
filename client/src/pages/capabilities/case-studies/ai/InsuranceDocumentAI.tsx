import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export function InsuranceDocumentAI() {
  return (
    <CaseStudyTemplate
      client="Regional Property & Casualty Insurance Company"
      industry="Insurance · Artificial Intelligence"
      title="AI-Powered Document Processing Transforms Regional Insurance Firm"
      subtitle="How a 200-employee insurance company reduced claims processing time by 73% and saved $1.2M annually through intelligent document automation."
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
      challenge={`Manual claims processing was creating bottlenecks, with adjusters spending 60% of their time on document review rather than customer service and complex claim decisions. A regional property and casualty insurance company with 200 employees processing over 50,000 claims annually had built a strong regional presence known for personalized service and fair claims handling—but as the company grew, paper-based processes were becoming a liability.

Average claims processing time had stretched to 12 days, and customer satisfaction scores were declining. The company had explored traditional automation solutions but found them too rigid for the variety of documents they received—everything from handwritten repair estimates to complex medical records. They needed a solution that could handle ambiguity and learn from experienced adjusters.`}
      solution={`NEXDYNE implemented an intelligent document processing platform capable of automatically classifying incoming documents by type, extracting key data fields with confidence scoring, identifying missing information and automatically requesting it from policyholders, and routing documents to appropriate adjusters based on claim type and complexity.

Beyond document processing, an AI-powered triage system analyzed incoming claims to identify straightforward claims for fast-tracking, flag complex or high-value claims for senior adjuster review, detect patterns indicating fraud or subrogation opportunities, and predict likely claim outcomes to support reserve setting.

Rather than replacing adjusters, the system augmented their capabilities with pre-populated claim summaries, suggested next steps based on similar historical claims, automated vendor and policyholder communications for routine updates, and real-time alerts when new information arrived. Implementation took 16 weeks, starting with a pilot on auto claims before expanding to property and commercial lines. Adjusters participated throughout the process, flagging incorrect extractions to continuously improve model accuracy from 87% to 94%.`}
      impact={`Within twelve months of full deployment, average claims processing time dropped from 12 days to 3.2 days—a 73% reduction. Document processing time per claim fell from 45 minutes to 8 minutes. First-touch resolution rates improved from 23% to 41%, and customer satisfaction NPS increased by 18 points.

Annual financial benefits reached $1.25 million: $850,000 in labor savings, $280,000 in improved fraud detection, and $120,000 in subrogation recovery improvement. Over 50,000 claims per year are now processed with 94% accuracy. The transformation also changed how adjusters viewed their work—freed from document drudgery, they focused on helping policyholders navigate difficult situations. The platform has since expanded to underwriting document review with further applications in policy servicing under development.`}
      metrics={[
        { value: "73%", label: "Faster processing" },
        { value: "$1.2M", label: "Annual savings" },
        { value: "50K+", label: "Claims automated" },
        { value: "94%", label: "Accuracy rate" }
      ]}
      quote={{
        text: "I became an adjuster because I wanted to help people, not shuffle papers. Now I actually have time to talk to policyholders, understand their situations, and find solutions. The AI handles the paperwork so I can do my real job.",
        author: "Senior Claims Specialist",
        role: "Regional Property & Casualty Insurance Company"
      }}
      tags={["Insurance", "AI", "Document Processing", "Claims Automation"]}
      relatedCapability={{
        title: "AI & Machine Learning",
        link: "/capabilities/ai"
      }}
    />
  );
}

export default InsuranceDocumentAI;
