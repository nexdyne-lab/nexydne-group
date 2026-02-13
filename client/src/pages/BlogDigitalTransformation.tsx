import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Breadcrumb from "@/components/Breadcrumb";
import { BackToTop } from '@/components/BackToTop';

export default function BlogDigitalTransformation() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Insights', href: '/insights' },
        { label: '5 signs your business is ready for digital transformation' }
      ]} />
      
      {/* Hero Section - Split layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase mb-4 text-[#2D5BFF]">NEXDYNE INSIGHTS</p>
              <h1 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 leading-tight">
                5 signs your business is ready for digital transformation
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-5 sm:mb-6 md:mb-8">
                <span>November 18, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Not every business needs automation right now. But if you're seeing these five indicators, it's time to seriously evaluate how technology can accelerate your growth.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/blog-strategy-meeting.2402f79c.jpg" 
                alt="Strategy meeting" 
                className="w-full h-[400px] object-cover rounded-lg shadow-xl sm:shadow-xl sm:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content - Checklist style */}
      <article className="py-16">
        <div className="container max-w-5xl">
          <div className="prose prose-lg max-w-none mb-6 sm:mb-8 md:mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Over the past three years, we've conducted automation readiness assessments for more than 100 mid-sized businesses. The companies that achieve the best results share common characteristics that signal they're ready to invest in digital transformation. Here are the five most reliable indicators we've identified.
            </p>
          </div>

          {/* Sign 1 */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-start gap-4 sm:p-5 md:p-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Your team is drowning in repetitive work
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  When skilled professionals spend 40-60% of their time on routine data entry, document processing, or status updates, you have a clear automation opportunity. We recently worked with a 95-employee insurance company where claims adjusters spent 25 hours per week on data entry and document verification—work that automation now handles in minutes.
                </p>
              </div>
            </div>
            <div className="ml-22 bg-blue-50 border-l-4 border-[#2D5BFF] p-4 sm:p-5 md:p-6">
              <p className="font-semibold text-gray-900 mb-2">What to look for:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Staff working evenings or weekends to keep up with routine tasks</li>
                <li>• High-value employees spending time on low-value activities</li>
                <li>• Backlogs growing despite hiring additional staff</li>
                <li>• Complaints about "busy work" in employee surveys</li>
              </ul>
            </div>
          </div>

          {/* Sign 2 */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-start gap-4 sm:p-5 md:p-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Growth is constrained by operational capacity
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You're turning down new business or delaying client work because you don't have enough people to handle the volume. Adding headcount isn't economically viable or you can't find qualified candidates fast enough. This is the classic scenario where automation creates immediate value by expanding capacity without proportional cost increases.
                </p>
              </div>
            </div>
            <div className="ml-22 bg-blue-50 border-l-4 border-[#2D5BFF] p-4 sm:p-5 md:p-6">
              <p className="font-semibold text-gray-900 mb-2">What to look for:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Revenue growth limited by staff capacity, not market demand</li>
                <li>• Long hiring cycles for specialized roles</li>
                <li>• Client complaints about turnaround times</li>
                <li>• Declining profit margins as you add headcount</li>
              </ul>
            </div>
          </div>

          {/* Sign 3 */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-start gap-4 sm:p-5 md:p-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Errors are costing you money or credibility
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Manual processes inevitably produce errors, especially when staff are rushing to keep up with volume. A 180-employee community bank we worked with was spending $240K annually on compliance review and error correction. Automation reduced error rates from 2.3% to 0.1% while cutting review time by 80%.
                </p>
              </div>
            </div>
            <div className="ml-22 bg-blue-50 border-l-4 border-[#2D5BFF] p-4 sm:p-5 md:p-6">
              <p className="font-semibold text-gray-900 mb-2">What to look for:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Significant time spent on quality control and rework</li>
                <li>• Client complaints about accuracy or consistency</li>
                <li>• Regulatory findings or audit issues</li>
                <li>• High variance in output quality across team members</li>
              </ul>
            </div>
          </div>

          {/* Sign 4 */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-start gap-4 sm:p-5 md:p-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-white text-2xl font-bold">
                4
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Data exists but insights don't
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You're collecting information across multiple systems but can't easily answer basic business questions. Reporting requires manual data extraction and spreadsheet manipulation. Leadership makes decisions based on intuition rather than data because getting accurate information takes too long. This signals an opportunity for intelligent automation that connects systems and delivers real-time insights.
                </p>
              </div>
            </div>
            <div className="ml-22 bg-blue-50 border-l-4 border-[#2D5BFF] p-4 sm:p-5 md:p-6">
              <p className="font-semibold text-gray-900 mb-2">What to look for:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Monthly reporting takes days to produce</li>
                <li>• Different departments have conflicting numbers</li>
                <li>• Staff maintain shadow systems in Excel</li>
                <li>• Can't quickly answer "how are we performing?" questions</li>
              </ul>
            </div>
          </div>

          {/* Sign 5 */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-start gap-4 sm:p-5 md:p-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-white text-2xl font-bold">
                5
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Competitors are pulling ahead on service delivery
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You're losing deals to competitors who can deliver faster turnaround or lower prices. Clients are asking why your processes take longer than industry benchmarks. This often indicates that competitors have already automated and you're competing with manual processes against their technology-enabled operations.
                </p>
              </div>
            </div>
            <div className="ml-22 bg-blue-50 border-l-4 border-[#2D5BFF] p-4 sm:p-5 md:p-6">
              <p className="font-semibold text-gray-900 mb-2">What to look for:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Losing competitive bids on price or timeline</li>
                <li>• Clients asking about automation or digital capabilities</li>
                <li>• Industry benchmarks showing faster service delivery elsewhere</li>
                <li>• Difficulty recruiting because competitors offer better tools</li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-gray-900 to-slate-800 text-white p-6 sm:p-6 sm:p-8 md:p-12 rounded-lg mt-16">
            <h2 className="text-3xl font-bold mb-6">What if you checked multiple boxes?</h2>
            <p className="text-lg leading-relaxed mb-6">
              If you identified with three or more of these indicators, your business is likely ready for automation. The good news is that you don't need to transform everything at once. The most successful implementations start with a focused pilot project that delivers measurable results in 90-120 days, then expand based on proven value.
            </p>
            <p className="text-lg leading-relaxed mb-5 sm:mb-6 md:mb-8">
              We recommend starting with a complimentary automation readiness assessment. Our team will analyze your current processes, identify high-impact opportunities, and provide a realistic roadmap with expected ROI for each phase.
            </p>
            <a href="/contact" className="inline-block bg-cyan-400 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-cyan-300 transition-colors">
              Schedule Your Assessment
            </a>
          </div>

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4 sm:p-5 md:p-6">
              <img src="/author-male-1.f0aef13a.jpg" alt="Michael Torres" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-lg">Michael Torres</p>
                <p className="text-gray-600 mb-3">Senior Consultant, Digital Transformation</p>
                <p className="text-gray-700 leading-relaxed">
                  Michael specializes in automation readiness assessments and implementation planning for mid-sized businesses. He has conducted over 150 assessments across professional services, healthcare, and financial services industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Case Studies */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white border-t border-gray-200">
        <div className="container max-w-6xl">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <p className="text-sm font-semibold tracking-wider uppercase mb-3 text-[#2D5BFF]">RELATED CASE STUDIES</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Companies that recognized the signs and took action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {/* Case Study 1 - Healthcare */}
            <a href="/cases/healthcare-patient-engagement" className="group">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/case-healthcare.jpg"
                    alt="Healthcare case study"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <p className="text-xs font-semibold tracking-wider uppercase mb-2 text-gray-500">HEALTHCARE</p>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#2D5BFF] group-hover:underline transition-colors">
                    Building an AI-powered patient engagement platform for better outcomes ›
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Multi-specialty practice improved patient satisfaction by 42% and reduced no-shows by 35%.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>$72K investment</span>
                    <span>•</span>
                    <span>320% ROI</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Case Study 2 - Consulting */}
            <a href="/cases/consulting-knowledge-management" className="group">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/case-consulting.jpg"
                    alt="Consulting case study"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <p className="text-xs font-semibold tracking-wider uppercase mb-2 text-gray-500">PROFESSIONAL SERVICES</p>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#2D5BFF] group-hover:underline transition-colors">
                    Transforming knowledge management for a global consulting firm ›
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    65-consultant firm reduced research time by 70% with AI-powered knowledge platform.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>$58K investment</span>
                    <span>•</span>
                    <span>315% ROI</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Case Study 3 - Fintech */}
            <a href="/cases/fintech-payment-automation" className="group">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/case-fintech.jpg"
                    alt="Fintech case study"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <p className="text-xs font-semibold tracking-wider uppercase mb-2 text-gray-500">FINANCIAL SERVICES</p>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#2D5BFF] group-hover:underline transition-colors">
                    How payment automation accelerated growth for a fintech startup ›
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Fast-growing fintech scaled from 50K to 200K monthly transactions with 99.8% accuracy.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>$82K investment</span>
                    <span>•</span>
                    <span>335% ROI</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-10 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container max-w-5xl">
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
