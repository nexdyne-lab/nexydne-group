import CaseStudyArticle from "@/components/CaseStudyArticle";

export default function InsuranceDocumentAI() {
  return (
    <CaseStudyArticle
      title="AI-Powered Document Processing Transforms Regional Insurance Firm"
      subtitle="How a 200-employee insurance company reduced claims processing time by 73% and saved $1.2M annually through intelligent document automation."
      industry="Insurance"
      industryHref="/industries/financial-services"
      client="A regional property and casualty insurance company with 200 employees, processing over 50,000 claims annually across personal and commercial lines."
      challenge="Manual claims processing was creating bottlenecks, with adjusters spending 60% of their time on document review rather than customer service and complex claim decisions."
      metrics={[
        { value: "73%", label: "Faster Processing" },
        { value: "$1.2M", label: "Annual Savings" },
        { value: "50K+", label: "Claims Automated" },
        { value: "94%", label: "Accuracy Rate" },
      ]}
      relatedCaseStudies={[
        {
          title: "Predictive Maintenance for Manufacturing",
          href: "/capabilities/artificial-intelligence/case-studies/manufacturing-predictive-maintenance",
          industry: "Manufacturing",
        },
        {
          title: "Customer Service AI for SaaS",
          href: "/capabilities/artificial-intelligence/case-studies/saas-customer-service-ai",
          industry: "Technology",
        },
        {
          title: "AI Underwriting for Specialty Lender",
          href: "/capabilities/artificial-intelligence/case-studies/lender-ai-underwriting",
          industry: "Financial Services",
        },
      ]}
    >
      <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4 eb-garamond">
        The Situation
      </h2>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Midwest Mutual Insurance (name changed for confidentiality) had built a
        strong regional presence over three decades, known for personalized
        service and fair claims handling. But as the company grew to 200
        employees and 50,000+ annual claims, their paper-based processes were
        becoming a liability.
      </p>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Claims adjusters were spending the majority of their time on document
        intake and data entry rather than the high-value work they were trained
        for: assessing damage, negotiating with vendors, and supporting
        policyholders through difficult situations. Average claims processing
        time had stretched to 12 days, and customer satisfaction scores were
        declining.
      </p>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        The company had explored traditional automation solutions but found them
        too rigid for the variety of documents they received—everything from
        handwritten repair estimates to complex medical records. They needed a
        solution that could handle ambiguity and learn from their experienced
        adjusters.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-4 eb-garamond">
        Our Approach
      </h2>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        We began with a four-week assessment phase, working alongside claims
        adjusters to understand their workflow in detail. This wasn't just about
        mapping processes—it was about understanding the judgment calls that
        experienced adjusters make when reviewing documents.
      </p>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-3">
        Phase 1: Document Intelligence Foundation
      </h3>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        We implemented an intelligent document processing platform capable of:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-charcoal/80">
        <li>Automatically classifying incoming documents by type (police reports, medical records, repair estimates, photos, etc.)</li>
        <li>Extracting key data fields with confidence scoring</li>
        <li>Identifying missing information and automatically requesting it from policyholders</li>
        <li>Routing documents to appropriate adjusters based on claim type and complexity</li>
      </ul>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-3">
        Phase 2: Claims Triage and Prioritization
      </h3>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Beyond document processing, we built an AI-powered triage system that
        analyzed incoming claims to:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-charcoal/80">
        <li>Identify straightforward claims that could be fast-tracked</li>
        <li>Flag potentially complex or high-value claims for senior adjuster review</li>
        <li>Detect patterns that might indicate fraud or subrogation opportunities</li>
        <li>Predict likely claim outcomes to support reserve setting</li>
      </ul>

      <h3 className="text-xl font-semibold text-charcoal mt-8 mb-3">
        Phase 3: Adjuster Augmentation
      </h3>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Rather than replacing adjusters, we focused on augmenting their
        capabilities. The system now provides adjusters with:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-charcoal/80">
        <li>Pre-populated claim summaries with all relevant information extracted and organized</li>
        <li>Suggested next steps based on similar historical claims</li>
        <li>Automated vendor and policyholder communications for routine updates</li>
        <li>Real-time alerts when new information arrives on their claims</li>
      </ul>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-4 eb-garamond">
        Implementation Journey
      </h2>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        The implementation took 16 weeks from kickoff to full production. We
        started with a pilot on auto claims—the highest volume category—before
        expanding to property and commercial lines.
      </p>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        A critical success factor was involving adjusters throughout the
        process. We established a "feedback loop" where adjusters could flag
        incorrect extractions or classifications, and these corrections were
        used to continuously improve the AI models. Within three months, accuracy
        had improved from 87% to 94%.
      </p>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        We also invested heavily in change management. Many adjusters were
        initially skeptical of AI, concerned it would either replace their jobs
        or create more work correcting errors. By demonstrating early wins and
        involving them in system refinement, we converted skeptics into
        advocates.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-4 eb-garamond">
        The Results
      </h2>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Twelve months after full deployment, the results exceeded initial
        projections:
      </p>

      <div className="bg-subtle p-6 rounded-lg my-8">
        <h3 className="font-semibold text-charcoal mb-4">Operational Improvements</h3>
        <ul className="space-y-3 text-charcoal/80">
          <li className="flex justify-between border-b border-border pb-2">
            <span>Average claims processing time</span>
            <span className="font-semibold">12 days → 3.2 days (73% reduction)</span>
          </li>
          <li className="flex justify-between border-b border-border pb-2">
            <span>Document processing time per claim</span>
            <span className="font-semibold">45 minutes → 8 minutes</span>
          </li>
          <li className="flex justify-between border-b border-border pb-2">
            <span>First-touch resolution rate</span>
            <span className="font-semibold">23% → 41%</span>
          </li>
          <li className="flex justify-between">
            <span>Customer satisfaction (NPS)</span>
            <span className="font-semibold">+18 points</span>
          </li>
        </ul>
      </div>

      <div className="bg-subtle p-6 rounded-lg my-8">
        <h3 className="font-semibold text-charcoal mb-4">Financial Impact</h3>
        <ul className="space-y-3 text-charcoal/80">
          <li className="flex justify-between border-b border-border pb-2">
            <span>Annual labor savings</span>
            <span className="font-semibold">$850,000</span>
          </li>
          <li className="flex justify-between border-b border-border pb-2">
            <span>Fraud detection savings</span>
            <span className="font-semibold">$280,000</span>
          </li>
          <li className="flex justify-between border-b border-border pb-2">
            <span>Subrogation recovery improvement</span>
            <span className="font-semibold">$120,000</span>
          </li>
          <li className="flex justify-between">
            <span>Total annual benefit</span>
            <span className="font-semibold text-primary">$1,250,000</span>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-4 eb-garamond">
        Beyond the Numbers
      </h2>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Perhaps more importantly than the financial results, the transformation
        changed how adjusters viewed their work. Freed from document drudgery,
        they could focus on what they did best: helping policyholders navigate
        difficult situations.
      </p>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        "I became an adjuster because I wanted to help people, not shuffle
        papers," said one senior claims specialist. "Now I actually have time to
        talk to policyholders, understand their situations, and find solutions.
        The AI handles the paperwork so I can do my real job."
      </p>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        The company has since expanded the platform to support underwriting
        document review and is exploring applications in policy servicing. The
        initial investment has become a foundation for ongoing digital
        transformation.
      </p>

      <h2 className="text-2xl font-bold text-charcoal mt-12 mb-4 eb-garamond">
        Lessons Learned
      </h2>
      <p className="text-charcoal/80 leading-relaxed mb-6">
        Several factors contributed to this project's success:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-charcoal/80">
        <li><strong>Start with high-volume, well-defined processes.</strong> Auto claims provided enough volume to train effective models and enough structure to achieve high accuracy quickly.</li>
        <li><strong>Invest in change management.</strong> Technical implementation was only half the battle. Getting adjusters to trust and use the system required sustained effort.</li>
        <li><strong>Build feedback loops.</strong> The system improved dramatically because adjusters could easily flag errors and see their feedback incorporated.</li>
        <li><strong>Measure what matters.</strong> We tracked not just efficiency metrics but customer satisfaction and adjuster engagement to ensure the transformation was truly successful.</li>
      </ul>
    </CaseStudyArticle>
  );
}
