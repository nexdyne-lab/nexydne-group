import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CommercialDueDiligence() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container max-w-4xl">
          <Link href="/capabilities/growth-marketing-sales/growth-strategy" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Growth Strategy
          </Link>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Tag className="w-4 h-4" />
              M&A
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Calendar className="w-4 h-4" />
              December 15, 2025
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Commercial Due Diligence: Debugging the Business Model
          </h1>
          
          <p className="text-xl text-slate-300">
            Moving beyond financial audits to stress-test the underlying commercial code of a target acquisition.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Traditional due diligence is like a code review that only checks for syntax errors (financials) but ignores the logic errors (commercial viability). You can have a company with perfect books that is structurally doomed because its market is shrinking, its customers are churning, or its value proposition is deprecated.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We approach Commercial Due Diligence (CDD) as a debugging exercise. We are looking for the bugs in the business model—the hidden dependencies, the race conditions, and the scalability bottlenecks that don't show up on a balance sheet.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Stress-Testing the Revenue Engine
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A target's revenue growth is often a lagging indicator. To understand future performance, we need to inspect the engine itself.
            </p>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">The CDD Debugging Checklist</h3>
              <ul className="space-y-3 text-slate-700">
                <li><strong>Customer Unit Economics:</strong> Is the LTV/CAC ratio sustainable, or is growth being subsidized by venture capital?</li>
                <li><strong>Churn Analysis:</strong> Is the churn structural (product failure) or cyclical? We look for "silent churn"—customers who are paying but not using.</li>
                <li><strong>Market Depth:</strong> Is the Total Addressable Market (TAM) real, or is it a hallucination based on optimistic assumptions?</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Integration API
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The biggest destroyer of value in M&A is failed integration. Two companies might look compatible on paper, but their "APIs" are incompatible. Their cultures, sales motions, and technology stacks cannot talk to each other.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our diligence process includes an "Integration Compatibility Check." We assess the technical and cultural debt of the target to estimate the true cost of integration. Sometimes, the best move is to not merge the codebases at all, but to run them as separate microservices.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Buying the Future, Not the Past
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Ultimately, CDD is about validating the future state. It's about answering the question: "If we inject capital and capabilities into this system, will it scale?" By applying rigorous analytical frameworks, we turn M&A from a gamble into a calculated engineering decision.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Validate your investment</h3>
            <p className="text-slate-300 mb-6">
              NexDyne provides data-driven commercial due diligence to help private equity and corporate acquirers make confident decisions.
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
                Schedule a Consultation
              </button>
            </Link>
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                N
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">NEXDYNE TECHNOLOGIES</h4>
                <p className="text-slate-600 mt-1">
                  Engineering intelligent systems that transform enterprise operations through AI-driven automation and data intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16">
            <NewsletterSubscribe />
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
