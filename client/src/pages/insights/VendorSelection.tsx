import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function VendorSelection() {
  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Navigation />
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container max-w-4xl">
          <Link href="/solutions/martech-stack" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to MarTech & Stack Architecture
          </Link>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Tag className="w-4 h-4" />
              Strategy
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Calendar className="w-4 h-4" />
              June 18, 2026
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-slate-300">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            The Vendor Selection Matrix: How to Choose Tech That Actually Fits
          </h1>
          
          <p className="text-xl text-slate-300">
            Stop buying shelfware. A structured approach to evaluating software vendors ensures you buy what you need, not what the salesperson wants to sell.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The average enterprise wastes 30% of its software budget on unused licenses. This "shelfware" problem stems from a flawed buying process: falling in love with a demo before defining the requirements.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Step 1: Define the "Must-Haves" vs. "Nice-to-Haves"
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Before talking to a single vendor, gather stakeholders from marketing, sales, IT, and legal. Create a weighted scorecard.
            </p>

            <ul className="list-disc pl-6 space-y-4 text-slate-700 mb-8">
              <li><strong>Functional Requirements:</strong> "Must integrate natively with Salesforce." "Must support multi-currency."</li>
              <li><strong>Technical Requirements:</strong> "Must be SOC2 compliant." "Must have an open API with rate limits above 1000/min."</li>
              <li><strong>Usability Requirements:</strong> "Must be intuitive enough for non-technical staff to use with &lt;2 hours of training."</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Step 2: The Proof of Concept (POC)
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Never sign a multi-year contract based on a slide deck. Demand a paid POC. Pick a specific, difficult use case—one that your current tool failed at—and ask the vendor to prove they can handle it with <i>your</i> data.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              If they hesitate, walk away. A vendor confident in their product will welcome the chance to prove it.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Step 3: Total Cost of Ownership (TCO)
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The license fee is just the tip of the iceberg. A true TCO analysis includes:
            </p>

            <ul className="list-disc pl-6 space-y-4 text-slate-700 mb-8">
              <li><strong>Implementation Costs:</strong> Will you need an external agency to set it up?</li>
              <li><strong>Training Costs:</strong> How much downtime will your team experience while learning the new tool?</li>
              <li><strong>Maintenance Costs:</strong> Does it require a dedicated admin?</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="text-lg text-slate-900 font-semibold">
                "The most expensive software is the one that nobody uses."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Exit Strategy
            </h2>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Always plan for the divorce before the marriage. Ensure your contract includes clear terms on data ownership and exportability. If you leave, can you take your data with you in a usable format?
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              By adding rigor to the selection process, you transform technology from a cost center into a strategic enabler.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Need an unbiased audit?</h3>
            <p className="text-slate-300 mb-6">
              We provide vendor-agnostic advisory services to help you select, negotiate, and implement the right technology for your unique needs.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Contact our team
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
