import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FinancialComplianceAI() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8 text-muted-foreground/50">
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/capabilities/custom-model-tuning" className="hover:text-white transition-colors">Custom Model Tuning</Link>
            <span>/</span>
            <span className="text-white">Financial Compliance Automation</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-3 max-w-4xl">
            Global Bank Automates Regulatory Compliance with Fine-Tuned LLMs
          </h1>
          <p className="text-xl text-muted-foreground/50 max-w-3xl">
            Custom language models analyzed millions of transactions and communications, reducing false positives by 60% and ensuring adherence to evolving regulations.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-6">
              A multinational bank was struggling to keep up with the volume of regulatory requirements across different jurisdictions. Their existing rule-based monitoring systems generated thousands of false positive alerts daily, overwhelming their compliance teams. Furthermore, monitoring employee communications for insider trading and misconduct was a manual, sampling-based process that left significant gaps in coverage.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              They needed a more intelligent, scalable solution that could understand the nuance of financial regulations and human communication to identify genuine risks without drowning analysts in noise.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-6">The Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/80 mb-8">
              NEXDYNE fine-tuned open-source Large Language Models (LLMs) on the bank's historical data and specific regulatory frameworks to create a specialized compliance engine.
            </p>

            <h3 className="text-2xl font-bold text-charcoal mb-4">Key Capabilities</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Communication Surveillance.</strong> The model analyzed emails, chats, and voice transcripts to detect subtle indicators of collusion, market manipulation, or bribery, understanding context and slang that keyword filters missed.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">Regulatory Change Management.</strong> The system automatically ingested new regulatory documents from global bodies, summarized the changes, and flagged internal policies that needed updating.
                </div>
              </li>
              <li className="flex gap-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-charcoal">KYC/AML Automation.</strong> The AI reviewed customer onboarding documents and transaction histories, automatically clearing low-risk cases and preparing detailed investigation dossiers for high-risk ones.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-charcoal mb-12">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">60%</div>
              <div className="text-muted-foreground">Reduction in false positive alerts</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Decrease in compliance costs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Coverage of employee communications</div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mb-12">
            <p className="text-lg text-charcoal/80 italic mb-4">
              "The AI doesn't just find more needles in the haystack; it removes the hay. Our analysts can now focus on investigating real financial crimes instead of clearing false alarms."
            </p>
            <p className="text-charcoal font-semibold">
              Global Head of Compliance
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-slate-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Automate your compliance
          </h2>
          <p className="text-xl text-muted-foreground/50 mb-8">
            Leverage custom AI to stay ahead of regulatory risks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-charcoal rounded-full hover:bg-slate-100 transition-colors font-semibold">
              Contact us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
