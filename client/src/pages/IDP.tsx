import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Brain, Zap, Shield, TrendingUp, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function IDP() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-charcoal">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/intelligent-process-optimization" className="hover:text-charcoal">Intelligent Process Optimization</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/intelligent-process-optimization/process-automation" className="hover:text-charcoal">Process Automation</Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">Intelligent Document Processing</span>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight">
              Intelligent Document Processing
            </h1>
            <p className="text-2xl leading-relaxed opacity-90 max-w-3xl">
              Extract data from invoices, purchase orders, contracts, and forms automatically. AI reads, validates, and routes documents without human intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">AI-powered extraction</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Advanced machine learning models understand document context, extracting structured data from unstructured documents with exceptional accuracy.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Instant processing</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Process thousands of documents in minutes instead of days. Eliminate manual data entry bottlenecks and accelerate business workflows.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Continuous validation</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Built-in validation rules ensure data accuracy and compliance. Flag exceptions automatically and route for human review only when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is IDP Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Understanding IDP</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              What is Intelligent Document Processing?
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-charcoal/80 leading-relaxed space-y-6">
            <p>
              Intelligent Document Processing combines artificial intelligence, machine learning, and optical character recognition to automatically extract, classify, and validate information from business documents. Unlike traditional OCR that simply converts images to text, IDP understands document context, recognizes patterns, and extracts meaningful structured data that flows directly into your business systems.
            </p>
            <p>
              Organizations process countless documents daily—invoices from suppliers, purchase orders from customers, contracts requiring review, forms needing data entry, receipts demanding reconciliation. Traditional approaches require humans to manually read each document, identify relevant information, and type data into systems. This manual processing is slow, expensive, error-prone, and prevents employees from focusing on higher-value work.
            </p>
            <p>
              IDP transforms document-intensive processes by automating the entire workflow. The system receives documents through email, file uploads, or scanned images, automatically classifies document types, extracts relevant data fields, validates information against business rules, and routes data to appropriate systems or stakeholders. Accuracy rates exceed manual processing, cycle times drop from days to minutes, and your team focuses on exceptions and strategic decisions rather than repetitive data entry.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-12 border-l-4 border-primary pl-8 py-6 bg-white">
            <p className="text-xl italic text-gray-800 mb-4">
              "We were drowning in invoice processing—our team spent 40 hours per week on manual data entry. IDP reduced that to 2 hours of exception handling. The ROI was immediate and transformative."
            </p>
            <p className="text-lg font-semibold text-charcoal">Finance Director, Distribution Company</p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-16 items-start max-w-7xl mx-auto">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-cyan-400">Our Methodology</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8">
                From manual chaos to automated precision
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                We don't believe in lengthy proof-of-concept phases. Our approach starts with your highest-volume, most error-prone document types and delivers measurable results within weeks.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                First, we analyze your document landscape—volumes, formats, current processing times, error rates, and downstream system requirements. We identify quick wins where automation delivers immediate impact while building toward comprehensive document processing capabilities.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Then we deploy pre-trained AI models customized for your specific document types and business rules. The system learns from corrections, continuously improving accuracy. Most organizations achieve full ROI within 6-12 months through eliminated labor costs, reduced errors, and accelerated cycle times.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-charcoal">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Document Analysis</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Catalog document types, volumes, and processing requirements. Identify high-impact automation opportunities and define success metrics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-charcoal">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Model Training & Deployment</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Configure AI models for your document types, establish validation rules, integrate with downstream systems, and deploy to production.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-charcoal">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Continuous Improvement</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Monitor accuracy, process exceptions, refine models based on feedback, and expand to additional document types as capabilities mature.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Applications</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Document types we automate
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Invoices & Bills</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Extract vendor information, line items, amounts, and payment terms. Validate against purchase orders and route for approval automatically.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Purchase Orders</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Process customer orders automatically, extracting product details, quantities, pricing, and shipping information for order fulfillment.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Contracts & Agreements</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Identify key terms, obligations, dates, and parties. Extract metadata for contract management systems and compliance tracking.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Forms & Applications</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Process customer applications, employee forms, and intake documents. Extract structured data and route to appropriate workflows.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Receipts & Expense Reports</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Automate expense processing by extracting merchant, date, amount, and category information from receipts for reimbursement workflows.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Shipping & Logistics</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Process bills of lading, packing slips, and shipping documents. Extract tracking information and update inventory systems automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Technology Stack</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Comprehensive document intelligence
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
            <div className="p-4 sm:p-6 md:p-8 bg-white border-2 border-border">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Document Classification</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Automatically identify document types from mixed batches. Route each document to appropriate processing workflows without manual sorting.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 bg-white border-2 border-border">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Data Extraction</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Extract structured data from unstructured documents using AI models trained on millions of documents across industries.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 bg-white border-2 border-border">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Validation & Verification</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Apply business rules to validate extracted data. Cross-reference with master data, check calculations, and flag anomalies for review.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 bg-white border-2 border-border">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Continuous Learning</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Models improve over time as they process more documents and learn from corrections. Accuracy increases without manual retraining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Related Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Complementary automation technologies
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
            <Link href="/solutions/intelligent-process-optimization/process-automation/rpa" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-primary transition-colors">
                  Robotic Process Automation (RPA)
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed">
                  Deploy intelligent software robots to handle repetitive, rule-based tasks across systems—freeing your team for strategic work.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/process-automation/ipaas" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-primary transition-colors">
                  iPaaS (Integration Platform)
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed">
                  Connect disparate systems seamlessly through integration platforms that orchestrate data flow and synchronize business processes.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8">
            Ready to automate document processing?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12">
            Schedule a complimentary consultation to explore how Intelligent Document Processing can eliminate manual data entry, reduce errors, and accelerate your document workflows.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
              Schedule consultation
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
