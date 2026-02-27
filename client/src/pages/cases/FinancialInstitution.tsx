import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FinancialInstitution() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-white py-20">
        <div className="container">
          <Link href="/cases">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cases
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-sm font-semibold mb-4 tracking-wide uppercase text-cyan-200">
              Case Study
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Financial Institution: Compliance Automation
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Deployed RPA to automate KYC document processing and regulatory reporting, reducing manual compliance work by 80% while improving accuracy to 99.9%.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            A regional bank processing 10,000+ KYC (Know Your Customer) applications monthly was struggling with compliance bottlenecks. Their compliance team manually reviewed identity documents, verified information across multiple databases, and generated regulatory reports—a process consuming 200+ hours weekly and creating 5-7 day application approval delays.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            Manual document review introduced inconsistencies that triggered regulatory audit findings. The bank faced potential fines and reputational risk from compliance gaps. Additionally, the slow KYC process was costing them new customer acquisitions—30% of applicants abandoned the process before completion due to lengthy wait times.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">The Solution</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            NEXDYNE implemented an intelligent automation solution combining RPA with document AI. Bots extracted data from identity documents using OCR, cross-referenced information against sanctions lists and credit bureaus, flagged high-risk applications for human review, and generated compliance reports automatically.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Implementation Approach</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Compliance workflow analysis and risk assessment</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Document AI training on 50,000+ historical applications</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Pilot with 1,000 applications for accuracy validation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Full production deployment with human-in-the-loop oversight</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold mb-4">Technical Details</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>UiPath Document Understanding for OCR</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>API integration with sanctions screening services</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Machine learning models for fraud detection</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Automated regulatory report generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">The Results</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">80%</div>
              <div className="text-lg text-muted-foreground">Reduction in manual work</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">10K+</div>
              <div className="text-lg text-muted-foreground">Applications processed monthly</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">99.9%</div>
              <div className="text-lg text-muted-foreground">Accuracy rate</div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Business Impact</h3>
            <ul className="space-y-3 text-charcoal/80">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Application processing time:</strong> Reduced from 5-7 days to 24 hours, improving customer experience and conversion rates</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Compliance team productivity:</strong> Freed 160 hours weekly for complex case reviews and regulatory strategy</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Regulatory confidence:</strong> Zero audit findings in first 12 months post-implementation</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Customer acquisition:</strong> 25% increase in application completion rate due to faster processing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your operations?</h2>
          <p className="text-xl text-muted-foreground/50 mb-8 max-w-2xl mx-auto">
            Let's discuss how intelligent automation can streamline compliance and accelerate customer onboarding.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Get in touch
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              View more cases <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
