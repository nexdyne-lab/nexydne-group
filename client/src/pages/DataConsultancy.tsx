import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Zap, Award, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function DataConsultancy() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/capabilities/technology' },
    { label: 'Data Consultancy' }
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
            <h1 className="text-6xl md:text-7xl font-bold mb-5 sm:mb-3 md:mb-4 leading-tight eb-garamond">
              Data Consultancy
            </h1>
            <p className="text-2xl leading-relaxed opacity-90">
              Cut your time to market and strengthen your data team with experienced, certified professionals who help you and your organization grow your data maturity.
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
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal">Accelerate delivery</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Slash development times and get value out of your data initiatives faster, thanks to our specialist data professionals.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal">Certified expertise</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Leverage the years of experience of our certified professionals across all top data technologies and cloud platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal">Flexible scaling</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Strengthen your team whenever you want with experts who will ramp up your data capabilities right away.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-charcoal">Knowledge transfer</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Our consultants work closely with your team and actively share their knowledge, so your organization can stand on its own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container max-w-5xl">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Understanding Data Consultancy</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Expertise when you need it
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-charcoal/80 leading-relaxed space-y-6 mb-6 sm:mb-8 md:mb-12">
            <p>
              Building and maintaining data capabilities requires specialized skills that are in high demand. Whether you need to call on expertise for a particular project or want to scale your engineering capacity, we'll make sure you have the talent you need. Our data consultants bring deep technical expertise combined with business acumen—they understand not just how to build data solutions, but why they matter to your organization.
            </p>
            <p>
              We always start with a thorough analysis of your current data architecture and processes. We then use that to design solutions that fit in with your goals. Our consultants will deploy the infrastructure, integrations, and pipelines you need, so your teams can get to work with them straight away. Sharing our knowledge is a crucial part of this. By working closely with your team, we ensure that you're at ease using and developing the solution yourself. Together we'll build a solid foundation for all your data initiatives.
            </p>
            <p>
              From infrastructure to data quality, from pipeline development to analytics implementation, we'll support you in all your data challenges. Our consultants integrate seamlessly with your team, adopting your processes and culture while bringing best practices from across industries. The goal is always to leave your organization stronger—with better capabilities, more knowledge, and greater confidence in your data operations.
            </p>
          </div>

          <div className="bg-white border-l-4 border-primary p-4 sm:p-6 md:p-8">
            <p className="text-lg italic text-charcoal/80 mb-4">
              "We needed to build a data platform but didn't have the in-house expertise. NexDyne's consultants joined our team for six months, built the platform, and trained our staff along the way. Now we have both a working platform and the knowledge to maintain and extend it ourselves. They didn't just deliver a solution—they built our capability."
            </p>
            <p className="font-semibold text-charcoal">CTO, SaaS Company</p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Our Methodology</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-5 sm:mb-6 md:mb-8">
              Embedded expertise
            </h2>
            <p className="text-xl text-charcoal/80 leading-relaxed">
              Our consultants don't just advise—they roll up their sleeves and deliver. They work as part of your team, building solutions while transferring knowledge that makes your organization stronger.
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
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Understand & Plan</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  We start by understanding your objectives, current capabilities, and constraints. What are you trying to achieve? What skills do you have internally? What gaps need to be filled? We assess your data landscape, technical infrastructure, and team structure. Then we develop a plan that defines the scope of work, identifies the right consultants for your needs, and establishes success criteria. We ensure alignment on deliverables, timelines, and how our consultants will integrate with your team.
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
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Execute & Deliver</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  Our consultants join your team and get to work. They participate in your standups, use your tools, and follow your processes. They build the data pipelines, platforms, analytics, or other solutions you need—delivering working code, documentation, and tested implementations. Throughout the engagement, they collaborate closely with your staff, explaining decisions, reviewing code together, and ensuring your team understands the solutions being built. The focus is on sustainable solutions that your team can maintain and extend.
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
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Transfer & Enable</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  Knowledge transfer happens throughout the engagement, not just at the end. Our consultants document their work, conduct training sessions, and pair with your staff on complex tasks. As the engagement concludes, we ensure your team is confident operating and evolving the solutions independently. We provide reference documentation, runbooks, and ongoing support during the transition period. The goal is for your team to be fully self-sufficient—with new capabilities, deeper knowledge, and the confidence to tackle future data challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-subtle">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-muted-foreground">Areas of Expertise</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              Comprehensive data capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Data Architecture & Strategy</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Design scalable data architectures that support your business objectives. Define data strategies, select appropriate technologies, and plan implementation roadmaps.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Data Engineering & Pipelines</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Build robust data pipelines, ETL/ELT processes, and data integration solutions. Implement data quality monitoring and automated data workflows.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Cloud Data Platforms</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Implement data warehouses, data lakes, and lakehouses on AWS, Azure, or GCP. Migrate legacy systems to modern cloud-native architectures.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Analytics & Business Intelligence</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Build dashboards, reports, and analytics solutions that drive business decisions. Implement self-service analytics and data visualization platforms.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Data Science & Machine Learning</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Develop predictive models, recommendation systems, and ML pipelines. Implement MLOps practices for model deployment and monitoring.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-border">
              <h3 className="text-2xl font-bold mb-4 text-charcoal">Data Governance & Quality</h3>
              <p className="text-charcoal/80 leading-relaxed">
                Establish data governance frameworks, quality standards, and metadata management. Implement data cataloging and lineage tracking solutions.
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
            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-training" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-charcoal group-hover:text-primary transition-colors">
                  Data Training
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  Complement consulting engagements with structured training that builds long-term data capabilities across your organization.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-platform" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-border hover:border-primary transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-charcoal group-hover:text-primary transition-colors">
                  Data Platform
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  Our consultants can build your data platform—designing architecture, implementing infrastructure, and enabling your team to operate it.
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
            Ready to strengthen your data team?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            Schedule a complimentary consultation to explore how our data consultants can accelerate your initiatives and build your organization's capabilities.
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
