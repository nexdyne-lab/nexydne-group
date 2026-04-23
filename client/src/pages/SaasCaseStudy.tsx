import { Link } from 'wouter';
import Navigation from '../components/Navigation';
import Footer from "@/components/Footer";
import { ArrowLeft, TrendingUp, Clock, DollarSign, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export default function SaasCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'SaaS Customer Onboarding' }
      ]} />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-5 sm:mb-6 md:mb-8">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            <p className="text-blue-400 font-semibold mb-4 uppercase tracking-wide">Software & Technology</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              78% faster customer onboarding
            </h1>
            <p className="text-xl text-white/80">
              Fast-growing B2B SaaS platform automates onboarding and provisioning, reducing setup time from 5 days to 26 hours while scaling to 400+ new customers quarterly.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:p-6 md:p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">78%</div>
              <div className="text-muted-foreground">Faster onboarding</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">26hrs</div>
              <div className="text-muted-foreground">Setup time</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">$420K</div>
              <div className="text-muted-foreground">Annual savings</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <CheckCircle2 className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">400+</div>
              <div className="text-muted-foreground">Quarterly customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Company Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                A rapidly scaling B2B SaaS company providing project management and collaboration software for mid-market professional services firms. With 85-110 employees and 2,400+ active customers, the platform processes millions of tasks, documents, and communications monthly for consulting, legal, and accounting firms.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                After securing Series B funding and expanding their sales team from 8 to 35 reps, new customer acquisition accelerated from 80 to 400+ customers quarterly. However, the manual onboarding process—designed for slower growth—became a critical bottleneck that threatened customer satisfaction and revenue recognition timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-6">The Challenge</h2>
            <div className="space-y-6">
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Manual account provisioning delays</h3>
                <p className="text-muted-foreground">
                  Customer success managers manually created accounts, configured permissions, and set up integrations through a series of admin panels. Each new customer required 8-12 hours of setup work spread across 5 days, creating a 3-week backlog during peak quarters.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Inconsistent onboarding experiences</h3>
                <p className="text-muted-foreground">
                  With 12 different customer success managers handling onboarding, configuration quality varied significantly. Some customers received comprehensive training and optimization, while others got minimal setup, leading to wildly different adoption rates and satisfaction scores.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Data migration bottlenecks</h3>
                <p className="text-muted-foreground">
                  Customers switching from competing platforms needed historical data migrated. The manual process—extracting CSVs, transforming formats, and importing—took 15-20 hours per customer and frequently resulted in data quality issues that required rework.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Revenue recognition delays</h3>
                <p className="text-muted-foreground">
                  The company couldn't recognize revenue until customers were fully onboarded and actively using the platform. Slow onboarding meant revenue from Q1 sales often wasn't recognized until Q2, complicating financial reporting and investor communications.
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground mb-5 sm:mb-6 md:mb-8">
              NEXDYNE built an intelligent onboarding automation platform that provisions accounts, migrates data, and delivers personalized training—all orchestrated by AI agents with minimal human intervention.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Automated account provisioning</h3>
                <p className="text-muted-foreground">
                  When a sales contract is signed, AI agents automatically create customer accounts, configure role-based permissions based on organization size and industry, and set up integrations with Slack, Microsoft Teams, and Google Workspace. The entire process completes in under 2 hours without human intervention.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Intelligent data migration engine</h3>
                <p className="text-muted-foreground">
                  Machine learning models analyze data from legacy systems, automatically map fields to the new platform's schema, and flag potential quality issues before import. The system handles 95% of migrations autonomously, escalating only complex edge cases to human review.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Personalized onboarding workflows</h3>
                <p className="text-muted-foreground">
                  AI-driven onboarding sequences adapt to customer industry, team size, and use case. The system automatically delivers role-specific training videos, schedules check-in calls, and monitors adoption metrics—escalating to customer success only when engagement drops below thresholds.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Real-time onboarding analytics</h3>
                <p className="text-muted-foreground">
                  Leadership dashboards show onboarding progress, time-to-value metrics, and early warning signals for at-risk customers. Predictive models identify customers likely to churn during onboarding, triggering proactive outreach from customer success teams.
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">The Results</h2>
            <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-primary mb-2">78%</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Faster onboarding</div>
                <p className="text-muted-foreground">
                  Customer onboarding time reduced from 5 days (120 hours) to 26 hours, accelerating time-to-value and revenue recognition.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-primary mb-2">26hrs</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Setup time</div>
                <p className="text-muted-foreground">
                  Average time from contract signature to fully operational account, including data migration and initial training.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-secondary mb-2">$420K</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Annual savings</div>
                <p className="text-muted-foreground">
                  Combined savings from reduced customer success labor, faster revenue recognition, and improved retention during onboarding.
                </p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-slate-200">
                <div className="text-5xl font-bold text-purple-600 mb-2">400+</div>
                <div className="text-lg font-semibold text-charcoal mb-2">Quarterly customers</div>
                <p className="text-muted-foreground">
                  Onboarding capacity scaled to handle 400+ new customers per quarter without proportional customer success team growth.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Business Impact</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Customer satisfaction scores during onboarding increased from 3.9 to 4.8 out of 5</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>First-90-day churn rate decreased from 12% to 3%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Revenue recognition timeline accelerated by 35 days on average</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Customer success team capacity increased 5x without headcount growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Ready to transform your SaaS onboarding?
            </h2>
            <p className="text-xl text-white/80 mb-5 sm:mb-6 md:mb-8">
              Discover how NEXDYNE can help you accelerate time-to-value, scale customer success operations, and improve retention during the critical onboarding phase.
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
