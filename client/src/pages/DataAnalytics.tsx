import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Eye, TrendingUp, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function DataAnalytics() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/capabilities/technology' },
    { label: 'Data Analytics' }
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
              Data Analytics
            </h1>
            <p className="text-2xl leading-relaxed opacity-90">
              Build data analytics dashboards that add real value with the right insights, so you know exactly where to optimize your business for maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The benefits
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-6 md:p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Eye className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cut through the noise</h3>
              <p className="text-gray-700 leading-relaxed">
                No more scattered spreadsheets and cluttered dashboards. Bring valuable data together and see what's going on at a glance.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Zap className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Drive action</h3>
              <p className="text-gray-700 leading-relaxed">
                Turn data into a catalyst for action. Dashboards so reliable and easy to understand that everyone actually uses them.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <BarChart3 className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Make it measurable</h3>
              <p className="text-gray-700 leading-relaxed">
                If you want to improve something, you need to measure it. Our dashboards make KPIs visible and actionable.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <TrendingUp className="w-8 h-8 text-[#2D5BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Anticipate & act</h3>
              <p className="text-gray-700 leading-relaxed">
                See where opportunities lie and where problems might be occurring. No more nasty surprises at the end of the month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Understanding Data Analytics</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              From data to decisions
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-6 mb-6 sm:mb-8 md:mb-12">
            <p>
              Who needs pretty pictures when you have essential steering information? By linking smart dashboards to actions that impact your business processes, we finally get the value out of your data. From warehouses to boardrooms, from operations to executive leadership, everyone performs better when they have the right insights. A well-designed dashboard gives you firm focus on what really matters to your organization.
            </p>
            <p>
              Rather than starting with technology, or even with the available data, we start with your process: what do your people need to know to make better decisions? And what impact does that have? The answers tell us how to build dashboards that provide that insight. Forget standard software. These are tailor-made solutions that fit your way of working, without reinventing the wheel. Working closely with actual dashboard users allows us to ensure that the technology makes a real impact, because only then can you make better data-driven decisions.
            </p>
            <p>
              The best analytics solutions combine automated data refresh, intuitive visualizations, and contextual information that helps users interpret what they're seeing. We design dashboards that answer specific business questions, not generic displays of every available metric. Each visualization is purposeful—highlighting trends, exceptions, and opportunities that require attention. Drill-down capabilities let users investigate anomalies without overwhelming them with unnecessary detail.
            </p>
          </div>

          <div className="bg-white border-l-4 border-[#2D5BFF] p-4 sm:p-6 md:p-8">
            <p className="text-lg italic text-gray-700 mb-4">
              "We had dashboards, but nobody used them. They were too complex, too slow, and didn't answer the questions our managers actually had. NexDyne rebuilt our analytics from the ground up, starting with the decisions we needed to make. Now our operations team checks dashboards every morning, and we've cut waste by 18% because problems are visible immediately."
            </p>
            <p className="font-semibold text-gray-900">Operations Director, Distribution Company</p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Our Methodology</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 sm:mb-6 md:mb-8">
              Decision-driven analytics
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Analytics projects fail when they focus on technology or data availability instead of business outcomes. We start with the decisions you need to make and the actions you need to take—then build dashboards that enable those outcomes.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-[#2D5BFF] text-white rounded-full text-2xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Define Decision Requirements</h3>
                <p className="text-gray-700 leading-relaxed">
                  We start by understanding the decisions your teams make and the information they need to make them well. What questions do managers ask? What problems do they need to detect early? What opportunities do they need to identify? Through interviews and observation, we map the decision-making process and identify information gaps. This ensures the analytics we build directly support business outcomes rather than just displaying data.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-[#2D5BFF] text-white rounded-full text-2xl font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Design & Prototype</h3>
                <p className="text-gray-700 leading-relaxed">
                  We design dashboard layouts and visualizations that answer specific business questions. Prototypes are reviewed with actual users to validate that the information is clear, actionable, and answers their questions. We iterate based on feedback, refining the design until users can interpret insights quickly and confidently. The goal is intuitive dashboards that require minimal training—users should understand what they're seeing and what action to take within seconds.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:p-6 md:p-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-[#2D5BFF] text-white rounded-full text-2xl font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Build & Deploy</h3>
                <p className="text-gray-700 leading-relaxed">
                  We implement the dashboards using appropriate analytics tools (Tableau, Power BI, Looker, or custom solutions), connecting to your data platform and building automated refresh processes. Data transformations and calculations are documented and tested to ensure accuracy. We configure access controls so the right people see the right information. Training ensures users understand not just how to use the dashboards, but how to interpret insights and take action. We monitor usage and gather feedback for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Analytics Applications</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Insights that drive performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Executive Dashboards</h3>
              <p className="text-gray-700 leading-relaxed">
                High-level KPIs and trends that give leadership visibility into business performance. Revenue, profitability, customer metrics, and operational efficiency—all in one place.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Operational Analytics</h3>
              <p className="text-gray-700 leading-relaxed">
                Real-time visibility into operations—production output, quality metrics, inventory levels, fulfillment status. Detect issues immediately and optimize workflows.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sales Performance</h3>
              <p className="text-gray-700 leading-relaxed">
                Pipeline visibility, conversion rates, rep performance, and forecast accuracy. Identify which deals need attention and where coaching can improve results.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Customer Analytics</h3>
              <p className="text-gray-700 leading-relaxed">
                Customer behavior, retention rates, lifetime value, and satisfaction metrics. Understand which customers are at risk and where growth opportunities exist.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Financial Reporting</h3>
              <p className="text-gray-700 leading-relaxed">
                Automated financial dashboards that replace manual reporting. P&L analysis, cash flow tracking, budget variance, and cost center performance.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Marketing Attribution</h3>
              <p className="text-gray-700 leading-relaxed">
                Campaign performance, channel effectiveness, and ROI tracking. Understand which marketing investments drive results and optimize spend allocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">Related Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Complete data solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-platform" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  Data Platform
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Analytics requires a solid data foundation. Build the platform that brings your data together and makes it accessible for insights.
                </p>
                <div className="flex items-center text-[#2D5BFF] font-semibold">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/solutions/intelligent-process-optimization/data-solutions/data-training" className="group">
              <div className="p-4 sm:p-6 md:p-8 border-2 border-gray-200 hover:border-[#2D5BFF] transition-all duration-300 bg-white h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#2D5BFF] transition-colors">
                  Data Training
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Empower your teams to use analytics effectively. Training that builds data literacy and analytical skills across your organization.
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
            Ready to unlock insights from your data?
          </h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            Schedule a complimentary consultation to explore how data analytics can give your teams the visibility they need to drive better business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#2D5BFF] hover:bg-[#1e40af] text-white">
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
