import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Target, Users, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function DataStrategy() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/capabilities/technology' },
    { label: 'Data Strategy' }
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
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight">
              Data Strategy
            </h1>
            <p className="text-2xl leading-relaxed opacity-90">
              Organizations that leverage data achieve success. We help you plot a winning strategy that aligns data initiatives with business objectives and delivers measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              The benefits
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-6 md:p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal">Actionable roadmap</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Translate data-driven ambitions into action. Forget endless reports—embrace our pragmatic approach that gets everyone on board.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal">Clear maturity assessment</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Our Data Maturity Model gives you clear insight into your current state and guides you toward meaningful improvements.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal">Stakeholder alignment</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Engage with stakeholders from day one to craft a strategy that everyone supports and actively champions.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal">Quick wins identified</h3>
              <p className="text-charcoal/80 leading-relaxed">
                We identify immediate opportunities for value creation while building toward long-term strategic objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container max-w-5xl">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Understanding Data Strategy</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              From ambition to execution
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-charcoal/80 leading-relaxed space-y-6 mb-6 sm:mb-8 md:mb-12">
            <p>
              A data strategy links your business goals to the opportunities unlocked by data. The challenge? So many opportunities exist that businesses often don't know where to begin. Without a clear strategy, data initiatives become scattered, disconnected projects that fail to deliver meaningful business value. Investments are made in tools and platforms that don't align with strategic priorities. Teams work in silos, duplicating effort and creating conflicting versions of truth.
            </p>
            <p>
              Our Data Strategy engagement introduces you to every stage of our proven approach over four to eight weeks. We analyze your current situation, determine your ambition, and produce a roadmap with quick wins and long-term goals. We examine five crucial aspects of successful, data-driven organizations: your data maturity, the available data, your processes, people and culture, and—fundamentally—the underlying technology.
            </p>
            <p>
              We streamline alignment across your organization, from executive management to IT leadership and business stakeholders, researching how data can become an integral part of your business processes. In a clear data strategy document, we set out all the agreements, procedures, knowledge, skills, and technology you need to make that happen. You can be confident you're doing the right things to achieve your data ambitions—with a roadmap that prioritizes initiatives based on business impact and feasibility.
            </p>
          </div>

          <div className="bg-white border-l-4 border-primary p-4 sm:p-6 md:p-8">
            <p className="text-lg italic text-charcoal/80 mb-4">
              "We had invested heavily in data tools but weren't seeing the returns we expected. NexDyne's data strategy engagement helped us understand why—we were solving technical problems without clear business objectives. Their roadmap gave us focus, and within six months we had measurable improvements in customer retention and operational efficiency."
            </p>
            <p className="font-semibold text-charcoal">VP of Analytics, Financial Services Company</p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Our Methodology</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-5 sm:mb-6 md:mb-8">
              The Data Strategy Basecamp
            </h2>
            <p className="text-xl text-charcoal/80 leading-relaxed">
              Data strategy isn't about creating a document that sits on a shelf. It's about building organizational alignment around how data will drive business outcomes. Our engagement is designed to be collaborative, pragmatic, and action-oriented—delivering a roadmap you can execute immediately.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Assess Current State</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  We evaluate your data maturity across five dimensions: available data assets, existing processes and workflows, people and culture, technology infrastructure, and organizational structure. Through stakeholder interviews and technical assessments, we identify strengths to leverage and gaps to address. This assessment provides the baseline for measuring progress and prioritizing initiatives.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Define Target Vision</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  Working with leadership and key stakeholders, we define what success looks like for your organization. What business outcomes do you want data to enable? What decisions will be improved? What processes will be optimized? We translate these ambitions into concrete objectives with measurable success criteria, ensuring the strategy aligns with broader business goals and creates accountability for results.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Build Executable Roadmap</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  We develop a phased roadmap that balances quick wins with strategic initiatives. Each initiative is assessed for business impact, technical feasibility, resource requirements, and dependencies. The roadmap includes specific milestones, success metrics, and governance structures to ensure accountability. We identify the skills, technology, and organizational changes needed to execute successfully—and provide recommendations for building internal capability over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Strategic Focus Areas</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Five dimensions of data maturity
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Data Assets</h3>
              <p className="text-charcoal/80 leading-relaxed">
                What data do you have? Where does it live? What's its quality and completeness? We inventory your data landscape and assess the value of each asset for business decision-making.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Processes & Workflows</h3>
              <p className="text-charcoal/80 leading-relaxed">
                How does data flow through your organization? Where are the bottlenecks and manual handoffs? We map current processes and identify opportunities for data-driven optimization.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">People & Culture</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Does your organization have a data-driven culture? What skills exist and what gaps need to be filled? We assess data literacy and change readiness across the organization.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Technology Infrastructure</h3>
              <p className="text-charcoal/80 leading-relaxed">
                What platforms and tools are in place? Are they fit for purpose or holding you back? We evaluate your technology stack and recommend modernization where needed.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-border md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Organizational Structure & Governance</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Who owns data? How are decisions made about data investments? We design governance structures that balance centralized oversight with distributed ownership, ensuring data initiatives have clear accountability and executive sponsorship.
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
              Complete data solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-platform" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-charcoal group-hover:text-primary transition-colors">
                  Data Platform
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  Build the scalable, secure foundation that turns your data strategy into reality—a single source of truth for the entire organization.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-analytics" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-charcoal group-hover:text-primary transition-colors">
                  Data Analytics
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  Transform data into actionable insights with dashboards and analytics that drive better decisions across your organization.
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
            Ready to build your data strategy?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            Schedule a complimentary consultation to explore how a clear data strategy can align your organization and accelerate value from data investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-white">
                Schedule consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
