import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, DollarSign, Blocks, RefreshCw, Code2, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function LowCodeDevelopment() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/capabilities/technology' },
    { label: 'Low-Code Development' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative py-16 sm:py-20 md:py-24 lg:py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight">
              Low-Code Development
            </h1>
            <p className="text-2xl leading-relaxed opacity-90 max-w-3xl">
              Build unique applications that differentiate your business in weeks, not months. Lightning-fast go-to-market, agile iteration, and flexible evolution—empowering both business users and developers.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-[#2D5BFF] rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">10x faster delivery</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Visual development accelerates application creation dramatically. Launch in weeks instead of months, capturing market opportunities before competitors.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-[#2D5BFF] rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lower development costs</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Reduce development expenses by 50-70% compared to traditional coding. Reusable components and visual builders eliminate redundant work.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-[#2D5BFF] rounded-full flex items-center justify-center mb-6">
                <Blocks className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Perfect business fit</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Build applications that precisely match your unique processes and requirements—no compromises, no workarounds, no unused features.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-[#2D5BFF] rounded-full flex items-center justify-center mb-6">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Effortless evolution</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Adapt applications as business needs change. Updates and enhancements happen in days, keeping pace with market dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Low-Code Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Understanding Low-Code</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              The development paradigm shift
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Low-code development platforms revolutionize how organizations build software by replacing manual coding with visual development environments. Instead of writing thousands of lines of code, developers and business users assemble applications using drag-and-drop components, pre-built templates, and declarative logic—accelerating development by an order of magnitude while maintaining enterprise-grade quality and security.
            </p>
            <p>
              The platform handles the heavy lifting—database management, user authentication, API integration, responsive design, security protocols, and deployment infrastructure. Development teams focus on business logic and user experience rather than reinventing technical foundations. The result: applications that would traditionally require six months of custom development launch in four to six weeks, at a fraction of the cost.
            </p>
            <p>
              Low-code isn't about dumbing down development—it's about eliminating undifferentiated heavy lifting so talented developers can focus on solving business problems rather than wrestling with boilerplate code. For organizations facing talent shortages, budget constraints, and relentless pressure to deliver digital solutions faster, low-code provides a pragmatic path to sustainable application development at scale.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-12 border-l-4 border-[#2D5BFF] pl-8 py-6 bg-white">
            <p className="text-xl italic text-gray-800 mb-4">
              "We needed a custom CRM that integrated with our existing systems, but quotes for traditional development came in at $300K and 9 months. Low-code let us build exactly what we needed for under $50K in 6 weeks. The ROI was immediate."
            </p>
            <p className="text-lg font-semibold text-gray-900">VP of Operations, Manufacturing Company</p>
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
                From concept to production in weeks
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                Traditional software development is too slow and expensive for today's business environment. You can't wait nine months for a solution to a problem that's costing you money today. Low-code enables rapid iteration—build, test, refine, and deploy in compressed timeframes that keep pace with business needs.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                We start by understanding your business process and desired outcomes. Then we rapidly prototype a working application—not mockups or wireframes, but functional software you can click through and evaluate. We iterate based on your feedback, refining workflows and user experience until the application perfectly fits your needs. Finally, we deploy to production and train your team, ensuring smooth adoption and immediate value realization.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Our low-code expertise spans multiple platforms—Mendix, OutSystems, Microsoft Power Apps, and others—allowing us to select the optimal technology for your specific requirements, existing IT landscape, and long-term strategic direction. You get applications that integrate seamlessly with your systems and scale as your business grows.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-slate-900">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Discovery & Design</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Map business processes, define requirements, and design user experience. Identify integration points and data sources.
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
                      Build working application using visual development tools. Iterate based on stakeholder feedback in weekly sprint cycles.
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
                    <h3 className="text-2xl font-bold mb-3">Deploy & Evolve</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Launch to production, train users, and monitor adoption. Continuously enhance based on usage data and changing business needs.
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
              Where low-code accelerates delivery
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <Code2 className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Custom CRM Systems</h3>
              <p className="text-gray-700 leading-relaxed">
                Build customer relationship management applications tailored to your sales process, industry requirements, and integration needs.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <Users className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Employee Portals</h3>
              <p className="text-gray-700 leading-relaxed">
                Create self-service portals for HR requests, expense management, time tracking, and internal communications.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <Blocks className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Workflow Automation</h3>
              <p className="text-gray-700 leading-relaxed">
                Digitize manual processes—approval workflows, document management, compliance tracking, and cross-departmental coordination.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <DollarSign className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Field Service Apps</h3>
              <p className="text-gray-700 leading-relaxed">
                Equip field teams with mobile applications for work orders, inventory management, customer data access, and real-time updates.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <RefreshCw className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Partner Portals</h3>
              <p className="text-gray-700 leading-relaxed">
                Enable partners, vendors, and distributors to access information, submit orders, track shipments, and collaborate seamlessly.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300">
              <Zap className="w-12 h-12 text-[#2D5BFF] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Operational Dashboards</h3>
              <p className="text-gray-700 leading-relaxed">
                Aggregate data from multiple systems into unified dashboards that provide real-time visibility into business performance.
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
              Comprehensive development solutions
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
            <Link href="/solutions/intelligent-process-optimization/app-development/custom-software" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  Custom Software
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  For complex requirements beyond low-code capabilities, we build fully custom solutions tailored to your exact specifications.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/app-development/service-portals" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  Service Portals
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Deploy 24/7 self-service portals that improve customer satisfaction while reducing support burden on your team.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/app-development/it-modernization" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  IT Modernization
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Replace legacy systems with modern, cloud-native architectures that accelerate innovation and reduce technical debt.
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
            Ready to accelerate application delivery?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12">
            Schedule a complimentary consultation to explore how low-code development can help you build custom applications faster and more cost-effectively.
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
