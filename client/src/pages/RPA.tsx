import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Clock, Cog, TrendingUp, Shield, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RPA() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container py-4 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/intelligent-process-optimization" className="hover:text-gray-900">Intelligent Process Optimization</Link>
        <span className="mx-2">/</span>
        <Link href="/solutions/intelligent-process-optimization/process-automation" className="hover:text-gray-900">Process Automation</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">RPA</span>
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
              Robotic Process Automation (RPA)
            </h1>
            <p className="text-2xl leading-relaxed opacity-90 max-w-3xl">
              Stop wasting human talent on repetitive tasks. Deploy intelligent software robots that work 24/7, freeing your team to focus on strategic, high-value work that drives growth.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-[#2D5BFF] rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Tireless digital workers</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Software robots execute processes rapidly and flawlessly around the clock—no breaks, no errors, no downtime. They work while you sleep.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-[#2D5BFF] rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Rapid deployment</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                From concept to production in weeks, not months. Start seeing ROI within 6-9 months as robots eliminate time-consuming manual processes.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-[#2D5BFF] rounded-full flex items-center justify-center mb-6">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Seamless integration</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Robots work with your existing systems exactly as humans do—no expensive IT overhauls, no custom APIs, no infrastructure changes required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is RPA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Understanding RPA</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              What is Robotic Process Automation?
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Robotic Process Automation uses intelligent software robots to automate repetitive, rule-based business processes. These digital workers handle everything from data entry and invoice processing to quote generation and system updates—performing tasks faster, more accurately, and more consistently than human workers ever could.
            </p>
            <p>
              The transformative power of RPA lies in its simplicity. Unlike traditional automation that requires complex system integration and custom development, RPA robots interact with applications through the user interface—just like humans do. They log into systems, copy and paste data, fill out forms, and execute workflows across multiple applications without requiring changes to your existing IT infrastructure.
            </p>
            <p>
              Organizations implementing RPA typically see dramatic improvements in operational efficiency, cost reduction, and employee satisfaction. By eliminating tedious manual work, you free your team to focus on judgment-intensive activities that create real business value—strategic analysis, customer relationships, innovation, and problem-solving that requires human creativity and expertise.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-12 border-l-4 border-[#2D5BFF] pl-8 py-6 bg-white">
            <p className="text-xl italic text-gray-800 mb-4">
              "We were spending countless hours on manual data entry, and mistakes were inevitable. RPA robots have transformed our operations—what used to take days now happens in minutes, with zero errors."
            </p>
            <p className="text-lg font-semibold text-gray-900">Operations Director, Financial Services Firm</p>
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
                Rapid deployment that delivers results
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                We reject long implementation timelines. Our proven methodology gets your first robot into production within weeks, delivering immediate value while building toward comprehensive automation.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                We start by analyzing your processes to identify the highest-impact automation opportunities—tasks that consume significant time, are prone to errors, or create bottlenecks. Then we rapidly deploy intelligent robots to eliminate these pain points, measuring results and iterating based on real-world performance.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Because we automate processes that drain your team's time and introduce costly errors, most organizations achieve full ROI within 6-9 months. But the benefits extend far beyond cost savings—improved accuracy, faster cycle times, enhanced compliance, and liberated human talent that can focus on strategic priorities.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-slate-900">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Process Discovery</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Map current workflows, identify automation candidates, and prioritize based on business impact and implementation complexity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-slate-900">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Rapid Development</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Build, test, and deploy your first robot in weeks using proven frameworks and best practices from hundreds of implementations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-slate-900">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Scale & Optimize</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Monitor performance, measure ROI, and systematically expand automation across departments to maximize organizational impact.
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
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Applications</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Where RPA creates impact
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Finance & Accounting</h3>
              <p className="text-gray-700 leading-relaxed">
                Invoice processing, accounts payable/receivable, reconciliation, financial reporting, and compliance documentation.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <Users className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Human Resources</h3>
              <p className="text-gray-700 leading-relaxed">
                Employee onboarding, payroll processing, benefits administration, compliance reporting, and data management.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <Shield className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Customer Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Order processing, customer data updates, ticket routing, response automation, and service request fulfillment.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <Cog className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Supply Chain</h3>
              <p className="text-gray-700 leading-relaxed">
                Order management, inventory updates, shipment tracking, vendor communications, and procurement workflows.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <Shield className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Compliance & Risk</h3>
              <p className="text-gray-700 leading-relaxed">
                Regulatory reporting, audit preparation, data validation, policy enforcement, and documentation management.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">IT Operations</h3>
              <p className="text-gray-700 leading-relaxed">
                System monitoring, data migration, user provisioning, backup management, and routine maintenance tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Related Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Complementary automation technologies
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
            <Link href="/solutions/intelligent-process-optimization/process-automation/ipaas" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  iPaaS (Integration Platform)
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Connect disparate systems seamlessly through integration platforms that orchestrate data flow and synchronize business processes.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/process-automation/process-orchestration" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  Process Orchestration
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Coordinate complex, multi-step workflows across teams, departments, and systems to ensure flawless end-to-end execution.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
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
            Ready to deploy intelligent automation?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12">
            Schedule a complimentary consultation to explore how RPA can eliminate repetitive work, reduce errors, and free your team to focus on strategic priorities.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#2D5BFF] hover:bg-[#1e40af] text-white text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
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
