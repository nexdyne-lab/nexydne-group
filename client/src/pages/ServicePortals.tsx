import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, TrendingUp, Clock, Users, Shield, BarChart3 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function ServicePortals() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/capabilities/technology' },
    { label: 'Service Portals' }
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
              Self-Service Portals
            </h1>
            <p className="text-2xl leading-relaxed opacity-90 max-w-3xl">
              A 24/7 self-service portal for your customers means better customer interactions and happier employees. Automate routine requests, reduce support burden, and deliver instant gratification.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Efficiency boost</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Automate routine tasks through self-service, freeing your customer service team to focus on what truly matters: personal interaction and complex problem-solving.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Customer insights</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Turn your portal into a goldmine of customer data. Every interaction collects valuable insights, enabling better service and boosting conversions.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Always available</h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Create a portal that's accessible anytime, anywhere. No waiting times, no business hours restrictions—just pure freedom for customers to self-serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What are Service Portals Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container max-w-5xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Understanding Service Portals</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Empowering customers, liberating teams
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-charcoal/80 leading-relaxed space-y-6">
            <p>
              Customer portals are the best way to improve customer experience while simultaneously supporting your customer service team. A well-designed self-service portal lets customers access the data they need—anytime, anywhere—without waiting on hold, sending emails, or scheduling calls. They can check order status, update account information, download invoices, submit support tickets, purchase add-ons, and manage subscriptions entirely on their own schedule.
            </p>
            <p>
              This isn't just convenient for customers—it's transformative for your operations. When customers can handle routine requests themselves, your support team stops wasting time on repetitive tasks like changing addresses, resetting passwords, or providing order status updates. Instead, they focus on complex customer queries that require human judgment, relationship-building conversations, and high-value problem-solving that actually differentiates your service.
            </p>
            <p>
              Modern customers expect self-service options. They don't want to wait on hold to perform simple tasks—they want instant access and immediate results. A bespoke portal not only meets these expectations but exceeds them by providing exactly the information and capabilities your specific customers need, presented in a way that makes sense for your business model. The result: higher customer satisfaction, lower support costs, and a team that focuses on what truly matters.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-12 border-l-4 border-primary pl-8 py-6 bg-white">
            <p className="text-xl italic text-gray-800 mb-4">
              "Our support team was drowning in routine requests—password resets, invoice downloads, address changes. The self-service portal eliminated 60% of support tickets overnight. Our team now focuses on helping customers solve real problems, and satisfaction scores have never been higher."
            </p>
            <p className="text-lg font-semibold text-charcoal">Director of Customer Success, SaaS Company</p>
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
                Build or buy? We choose build.
              </h2>
              <p className="text-xl leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                Fundamentally, it's a choice between flexibility versus speed and functionality versus budget. While standard software packages are quick to deploy, we know that one size does not fit all. Your customers have unique needs, your business has specific processes, and your brand deserves a distinctive experience.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-5 sm:mb-6 md:mb-8">
                We build individual portals using the approach that best fits your requirements and timeline. Low-code platforms reduce time-to-market with visual builders and pre-built components. High-code development provides maximum control to address complex needs and deliver award-winning user experiences. Best-of-breed approaches combine multiple solutions to achieve optimal outcomes.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Our multidisciplinary team works in sprints on each project. We gain insights from data, optimize continuously, and ensure your portal evolves in step with your users' needs. The result is a portal that doesn't just meet requirements—it delights users and drives measurable business outcomes.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-800 p-4 sm:p-6 md:p-8 rounded-lg border border-slate-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-charcoal">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">User Research</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Understand customer needs, map user journeys, and identify high-value self-service opportunities that reduce support burden.
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
                    <h3 className="text-2xl font-bold mb-3">Design & Build</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Create intuitive user experiences and develop portal functionality using the optimal technology approach for your requirements.
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
                    <h3 className="text-2xl font-bold mb-3">Launch & Optimize</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Deploy portal, monitor usage patterns, gather feedback, and continuously enhance based on real-world customer behavior.
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
              Where service portals drive value
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Customer Self-Service</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Let customers manage accounts, update information, download documents, track orders, and submit requests without contacting support.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Partner Portals</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Enable partners, distributors, and resellers to access resources, submit orders, track commissions, and collaborate effectively.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Employee Portals</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Provide employees with self-service access to HR information, benefits, time-off requests, expense submissions, and internal resources.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Vendor Management</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Streamline vendor interactions with portals for invoice submission, purchase order tracking, compliance documentation, and performance metrics.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Support Ticketing</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Allow customers to submit, track, and manage support tickets with knowledge base access, status updates, and resolution history.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-charcoal">Subscription Management</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Enable customers to upgrade, downgrade, pause, or cancel subscriptions, manage billing information, and view usage analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Related Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Comprehensive development solutions
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
            <Link href="/solutions/intelligent-process-optimization/app-development/low-code" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-primary transition-colors">
                  Low-Code Development
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed">
                  Build applications rapidly using visual development platforms that accelerate delivery and reduce costs.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/app-development/custom-software" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-primary transition-colors">
                  Custom Software
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed">
                  Build fully custom solutions tailored to your exact specifications when off-the-shelf software doesn't fit.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/app-development/it-modernization" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 h-full bg-white">
                <h3 className="text-xl font-bold mb-3 text-charcoal group-hover:text-primary transition-colors">
                  IT Modernization
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed">
                  Replace legacy systems with modern, cloud-native architectures that accelerate innovation.
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
            Ready to empower customers with self-service?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12">
            Schedule a complimentary consultation to explore how a custom service portal can improve customer satisfaction while reducing support costs.
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
