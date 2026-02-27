import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ValuePropositionDesign() {
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
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Tag className="w-4 h-4" />
              Product Strategy
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Calendar className="w-4 h-4" />
              December 10, 2025
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Value Proposition Design: The API Between Product and Market
          </h1>
          
          <p className="text-xl text-muted-foreground/50">
            Why great products fail to find traction, and how to define a clear "interface contract" with your customers.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              In software engineering, an API (Application Programming Interface) defines how two systems interact. It specifies the inputs, the outputs, and the expected behavior. If the API is poorly documented or unstable, no one will build on it.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              A Value Proposition is the API between your product and the market. It defines the contract: "If you give us X (money/time), we will return Y (value/outcome)." Yet, most companies treat their value proposition as marketing fluff rather than a strict engineering specification.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              The "Feature" vs. "Outcome" Bug
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              The most common bug in value proposition design is returning a "Feature" when the customer requested an "Outcome."
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              <strong>Bad API Response:</strong> "We have an AI-powered recommendation engine with 99.9% uptime." (Feature)<br />
              <strong>Good API Response:</strong> "We reduce your customer churn by 15%." (Outcome)
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Customers don't care about your implementation details. They care about the return value. Your value proposition must be strictly typed to the customer's pain points.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Designing the Interface
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              We use a rigorous process to design value propositions that compile:
            </p>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-8">
              <ul className="space-y-3 text-charcoal/80">
                <li><strong>1. Customer Profiling (The Request):</strong> What is the customer trying to achieve? What are their jobs-to-be-done? What are the error codes (pains) they are currently hitting?</li>
                <li><strong>2. Value Mapping (The Response):</strong> How exactly does our product resolve those errors? Which specific features map to which specific pains?</li>
                <li><strong>3. Fit Testing (Integration Testing):</strong> We don't guess. We run A/B tests on messaging and positioning to see which "API call" returns the highest conversion rate.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Versioning Your Value Prop
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              Markets change. Competitors release updates. Customer expectations drift. A static value proposition is a deprecated API. You must version your value proposition, releasing updates as you learn more about the market. At NexDyne, we help you build the feedback loops to keep your value proposition in sync with reality.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-slate-900 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Refine your interface</h3>
            <p className="text-muted-foreground/50 mb-6">
              NexDyne helps product leaders define, test, and scale value propositions that resonate with the market.
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
                <h4 className="font-bold text-charcoal text-lg">NEXDYNE TECHNOLOGIES</h4>
                <p className="text-muted-foreground mt-1">
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
