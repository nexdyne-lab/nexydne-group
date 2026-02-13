import { Link } from 'wouter';
import Navigation from '../components/Navigation';
import Footer from "@/components/Footer";
import { ArrowLeft, TrendingUp, Clock, DollarSign, CheckCircle2, Server, Zap } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function TechnologyCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Technology Infrastructure Optimization' }
      ]} />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-5 sm:mb-6 md:mb-8">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide">Technology & Software</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              82% reduction in deployment time
            </h1>
            <p className="text-xl text-white/80">
              Fast-growing B2B software company transforms DevOps practices, reducing deployment cycles from 2 weeks to 2.5 days while achieving 99.95% uptime and 40% infrastructure cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">82%</div>
              <div className="text-slate-600">Faster deployments</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">99.95%</div>
              <div className="text-slate-600">System uptime</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">40%</div>
              <div className="text-slate-600">Cost reduction</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">12x</div>
              <div className="text-slate-600">Deployment frequency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed">
                A B2B SaaS company providing workflow automation tools to mid-market enterprises. With 145 employees, $28M ARR, and over 400 enterprise customers, the company had grown 3x in two years but was struggling to scale its technology infrastructure to match business growth.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                The engineering team of 45 developers was spending more time on infrastructure maintenance than feature development. Manual deployment processes, inconsistent environments, and reactive incident response were creating bottlenecks that threatened the company's ability to compete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
            <div className="space-y-6">
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Manual deployment bottlenecks</h3>
                <p className="text-slate-600">
                  Each production deployment required 3-4 days of manual configuration, testing, and coordination across teams. Only 2 senior engineers were authorized to deploy, creating a critical bottleneck that limited releases to twice monthly.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Environment inconsistencies</h3>
                <p className="text-slate-600">
                  Development, staging, and production environments had drifted significantly over time. Features that worked in development frequently failed in production, requiring emergency fixes and rollbacks that consumed 30% of engineering time.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Reactive incident management</h3>
                <p className="text-slate-600">
                  The team learned about outages from customer complaints rather than monitoring systems. Average incident detection time was 23 minutes, with resolution taking 2-4 hours. Monthly downtime averaged 4.2 hours, impacting customer SLAs.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Infrastructure cost sprawl</h3>
                <p className="text-slate-600">
                  Cloud costs had grown 180% year-over-year despite only 60% customer growth. Unused resources, over-provisioned instances, and lack of auto-scaling meant the company was paying for capacity it didn't need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Solution</h2>
            <p className="text-lg text-slate-600 mb-5 sm:mb-6 md:mb-8">
              NEXDYNE implemented a comprehensive DevOps transformation including infrastructure-as-code, CI/CD automation, observability platform, and cloud cost optimization.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Infrastructure as Code</h3>
                <p className="text-slate-600">
                  Complete infrastructure codification using Terraform and Kubernetes. All environments are now defined in version-controlled templates, ensuring consistency and enabling any engineer to provision identical environments in minutes.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Automated CI/CD pipeline</h3>
                <p className="text-slate-600">
                  End-to-end automation from code commit to production deployment. Automated testing, security scanning, and staged rollouts enable multiple daily deployments with zero-downtime releases and automatic rollback on failure detection.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Unified observability platform</h3>
                <p className="text-slate-600">
                  Integrated monitoring, logging, and tracing across all services. AI-powered anomaly detection identifies issues before they impact customers, with automated alerting and runbook execution for common incident types.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Cloud cost optimization</h3>
                <p className="text-slate-600">
                  Right-sizing analysis, reserved instance planning, and auto-scaling implementation. Continuous cost monitoring with automated recommendations and governance policies prevent resource sprawl.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Results</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6 sm:mb-8 md:mb-12">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">82%</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Faster deployments</div>
                <p className="text-slate-600">
                  Deployment cycle reduced from 14 days to 2.5 days, with simple changes deployed same-day through automated pipelines.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">99.95%</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">System uptime</div>
                <p className="text-slate-600">
                  Monthly uptime improved from 99.5% to 99.95%, exceeding enterprise SLA requirements and eliminating customer penalties.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-green-600 mb-2">40%</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Infrastructure cost reduction</div>
                <p className="text-slate-600">
                  Monthly cloud spend reduced from $180K to $108K through right-sizing, reserved instances, and auto-scaling optimization.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-purple-600 mb-2">12x</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">Deployment frequency</div>
                <p className="text-slate-600">
                  From 2 deployments per month to 24+, enabling rapid feature iteration and faster response to customer feedback.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Impact</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Engineering time on infrastructure reduced from 35% to 8%, freeing capacity for feature development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Mean time to incident detection reduced from 23 minutes to under 2 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>All 45 engineers can now deploy safely, eliminating the 2-person bottleneck</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Feature velocity increased 3x, accelerating product roadmap delivery by 6 months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border border-slate-200">
              <svg className="w-12 h-12 text-blue-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed mb-6">
                "NEXDYNE didn't just fix our infrastructure—they transformed how our engineering team operates. We went from dreading deployments to shipping features multiple times a day with confidence. The ROI was evident within the first quarter."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-300 rounded-full flex items-center justify-center text-slate-600 font-bold text-lg">
                  JC
                </div>
                <div>
                  <div className="font-semibold text-slate-900">James Chen</div>
                  <div className="text-slate-600">CTO, WorkflowPro Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Ready to accelerate your technology operations?
            </h2>
            <p className="text-xl text-white/80 mb-5 sm:mb-6 md:mb-8">
              Discover how NEXDYNE can help you modernize infrastructure, automate deployments, and free your engineering team to focus on innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Schedule consultation
              </button>
              <Link href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors inline-block">
                View more case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
