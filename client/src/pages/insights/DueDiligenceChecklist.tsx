import { motion } from "framer-motion";
import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, CheckCircle2, FileText, Shield, Code, Users, Briefcase } from "lucide-react";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function DueDiligenceChecklist() {
  return (
    <div className="min-h-screen bg-[#051C2C] text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="The Investor Due Diligence Checklist: What to Prepare | NexDyne Technologies" 
        description="Due diligence can make or break fundraising momentum. Learn what to prepare for comprehensive investor evaluation."
        canonical="/insights/due-diligence-checklist"
      />
      <ReadingProgress />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#051C2C] via-[#051C2C]/60 to-[#051C2C]"></div>
        
        <div className="container relative z-10 px-4 md:px-12 max-w-4xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-[#0077B5] hover:text-[#0077B5]/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center gap-2 text-sm text-white/60">
                <Tag className="w-4 h-4 text-[#0077B5]" />
                Capital Raising
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-white/60">
                <Calendar className="w-4 h-4 text-[#0077B5]" />
                December 14, 2025
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-white/60">
                <Clock className="w-4 h-4 text-[#0077B5]" />
                13 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-4">
              The Investor <span className="text-[#0077B5]">Due Diligence</span> Checklist
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              Due diligence can make or break fundraising momentum. Companies that prepare comprehensive documentation before starting conversations close rounds faster and maintain better negotiating positions throughout the process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="w-full h-96 bg-[#051C2C] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" 
          alt="Due Diligence Preparation" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Article Content */}
      <article className="py-16 bg-white text-[#051C2C]">
        <div className="container max-w-3xl px-4 md:px-12">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Investor due diligence has evolved from a formality into a comprehensive examination of every aspect of your business. The process typically takes 4-8 weeks and involves multiple workstreams: financial, legal, technical, commercial, and organizational. Companies that anticipate these requests and prepare documentation proactively move through diligence faster and avoid the momentum-killing delays that cause deals to fall apart.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#0077B5]" />
              Financial Due Diligence: The Foundation
            </h2>
            
            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Financial diligence forms the foundation of investor evaluation. Investors will scrutinize every aspect of your financial performance, from revenue recognition policies to expense categorization. The goal is to verify that your reported metrics are accurate, sustainable, and calculated consistently with industry standards.
            </p>

            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Prepare comprehensive financial statements for the past three years, including income statements, balance sheets, and cash flow statements. Include monthly detail for the most recent 12-24 months. Ensure your revenue recognition policies comply with ASC 606 or IFRS 15 standards. Document any non-recurring expenses or revenue items that might distort your underlying performance.
            </p>

            <div className="bg-[#0077B5]/10 border-l-4 border-[#0077B5] p-6 my-8 rounded-r-xl">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Financial Documents Investors Will Request</h3>
              <ul className="space-y-3 text-[#051C2C]/80">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong>Historical financials:</strong> 3 years of audited or reviewed statements</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong>Monthly management accounts:</strong> P&L, balance sheet, cash flow for 12-24 months</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong>Revenue details:</strong> Customer-level revenue, cohort analysis, churn metrics</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong>Expense breakdown:</strong> Detailed categorization with headcount allocation</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong>Financial projections:</strong> 3-5 year model with detailed assumptions</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong>Cap table:</strong> Complete ownership structure with all option grants</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-[#0077B5] flex-shrink-0 mt-0.5" /><span><strong>Banking relationships:</strong> Credit facilities, loan agreements, bank statements</span></li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
              Customer and Revenue Verification
            </h2>
            
            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Investors will verify your customer relationships and revenue quality through multiple lenses. They'll examine customer contracts to understand terms, payment schedules, and renewal provisions. They'll analyze cohort retention to assess whether your growth is sustainable or driven by unsustainable acquisition spending. They'll often request customer references to validate that your value proposition resonates as strongly as you claim.
            </p>

            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Prepare a customer list with contract values, start dates, renewal dates, and current status. Create cohort retention analyses that show how different customer vintages perform over time. Document your top 10-20 customers with details on how you acquired them, what value you deliver, and why they're likely to renew. Identify reference customers who can speak credibly about your impact.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#0077B5]" />
              Legal and Compliance Documentation
            </h2>
            
            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Legal diligence uncovers potential liabilities that could affect company value or create post-investment complications. Investors want assurance that you own your intellectual property, have proper employment agreements in place, maintain necessary licenses and permits, and comply with relevant regulations.
            </p>

            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Organize all formation documents, including articles of incorporation, bylaws, and board resolutions. Compile all financing documents from previous rounds with associated rights and preferences. Gather employment agreements for all team members, with particular attention to IP assignment clauses. Document any outstanding litigation, regulatory inquiries, or compliance issues.
            </p>

            <div className="bg-[#051C2C]/5 border-l-4 border-[#051C2C]/30 p-6 my-8 rounded-r-xl">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Legal Documents to Prepare</h3>
              <ul className="space-y-3 text-[#051C2C]/80">
                <li><strong>Corporate formation:</strong> Certificate of incorporation, bylaws, board minutes</li>
                <li><strong>Financing history:</strong> All prior investment documents, SAFEs, convertible notes</li>
                <li><strong>Intellectual property:</strong> Patents, trademarks, IP assignments from founders/employees</li>
                <li><strong>Material contracts:</strong> Customer agreements, vendor contracts, partnership deals</li>
                <li><strong>Employment documentation:</strong> Offer letters, IP agreements, option grants</li>
                <li><strong>Compliance records:</strong> Licenses, permits, regulatory filings</li>
                <li><strong>Litigation history:</strong> Any current or past legal disputes</li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6 flex items-center gap-3">
              <Code className="w-8 h-8 text-[#0077B5]" />
              Technical and Product Diligence
            </h2>
            
            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              For technology companies, technical diligence assesses whether your product is built on solid foundations and can scale to support growth. Investors often engage third-party technical experts to review your architecture, codebase, security practices, and development processes. They're looking for technical debt that could require expensive remediation or architectural limitations that could constrain growth.
            </p>

            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Prepare documentation of your technical architecture with diagrams showing system components and data flows. Create a technology stack overview listing all major technologies, frameworks, and third-party services. Document your security practices, including penetration testing results, compliance certifications (SOC 2, ISO 27001), and incident response procedures. Provide your product roadmap with planned features and technical initiatives.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-[#0077B5]" />
              Commercial Due Diligence: Market Validation
            </h2>
            
            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Commercial diligence validates your market opportunity, competitive positioning, and go-to-market effectiveness. Investors want to understand whether your target market is as large as you claim, whether customers truly value your differentiation, and whether your sales and marketing approach can scale efficiently.
            </p>

            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Prepare detailed market sizing analysis with bottoms-up calculations based on your addressable customer universe. Document your competitive landscape with honest assessment of strengths and weaknesses relative to alternatives. Provide sales and marketing metrics including CAC by channel, sales cycle length, win rates, and pipeline conversion rates. Include case studies demonstrating customer outcomes and ROI.
            </p>

            <div className="bg-[#0077B5]/10 border-l-4 border-[#0077B5] p-6 my-8 rounded-r-xl">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Commercial Diligence Focus Areas</h3>
              <ul className="space-y-3 text-[#051C2C]/80">
                <li><strong>Market opportunity:</strong> TAM/SAM/SOM with supporting data and assumptions</li>
                <li><strong>Customer acquisition:</strong> CAC by channel, payback period, scaling potential</li>
                <li><strong>Sales process:</strong> Pipeline stages, conversion rates, average deal size</li>
                <li><strong>Customer retention:</strong> Churn rates, NRR, expansion revenue patterns</li>
                <li><strong>Competitive positioning:</strong> Win/loss analysis, competitive differentiators</li>
                <li><strong>Product-market fit:</strong> NPS scores, customer testimonials, usage metrics</li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-[#0077B5]" />
              Organizational and Team Assessment
            </h2>
            
            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Investors invest in teams as much as businesses. Organizational diligence examines whether you have the leadership depth and talent density required to execute your growth plans. They'll assess team composition, compensation structures, retention rates, and recruiting capabilities.
            </p>

            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Prepare an organizational chart showing reporting structures and key roles. Create team bios highlighting relevant experience and accomplishments. Document your compensation philosophy with salary bands, equity guidelines, and benefit structures. Provide turnover data and explanations for any significant departures. Outline your recruiting plan with target hires, required skills, and timeline.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
              Building Your Data Room
            </h2>
            
            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              A well-organized data room demonstrates operational excellence and accelerates diligence. Create a logical folder structure that makes information easy to find. Use consistent naming conventions. Include table of contents documents in each section. Provide executive summaries for complex documents.
            </p>

            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Set up your data room using a professional virtual data room provider like DocSend, Carta, or Datasite. These platforms provide access controls, tracking analytics, and professional presentation. Avoid using Dropbox or Google Drive for sensitive diligence materials—they lack the security and professionalism investors expect.
            </p>

            <div className="bg-[#051C2C]/5 border-l-4 border-[#051C2C]/30 p-6 my-8 rounded-r-xl">
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Data Room Organization Structure</h3>
              <ul className="space-y-3 text-[#051C2C]/80">
                <li><strong>1. Company Overview:</strong> Pitch deck, executive summary, company history</li>
                <li><strong>2. Financial Information:</strong> Statements, projections, metrics, cap table</li>
                <li><strong>3. Legal Documents:</strong> Formation docs, contracts, IP, compliance</li>
                <li><strong>4. Product & Technology:</strong> Architecture, roadmap, security, technical docs</li>
                <li><strong>5. Commercial:</strong> Customer data, market analysis, sales metrics</li>
                <li><strong>6. Team & Organization:</strong> Org chart, bios, compensation, recruiting</li>
                <li><strong>7. Operations:</strong> Processes, systems, vendor relationships</li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
              Managing the Diligence Process
            </h2>
            
            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Due diligence is a two-way process. While investors are evaluating your company, you should be evaluating them as potential partners. Pay attention to how they conduct diligence—it reveals their values, decision-making process, and how they'll behave as board members.
            </p>

            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Respond to information requests promptly and completely. Track all requests in a shared spreadsheet to ensure nothing falls through the cracks. Be transparent about issues rather than trying to hide them—investors will find problems eventually, and honesty builds trust. Use diligence conversations to build relationships with the investment team and demonstrate your operational sophistication.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
              Red Flags That Kill Deals
            </h2>
            
            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Certain discoveries during diligence can derail otherwise promising fundraises. The most common deal-killers include revenue recognition issues that inflate reported performance, IP ownership problems where key technology isn't properly assigned to the company, undisclosed litigation or regulatory issues, customer concentration where top customers represent excessive revenue percentage, and team issues like undisclosed conflicts or pending departures.
            </p>

            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Address potential red flags proactively. If you know about issues, disclose them early with context and remediation plans. Investors can work through most problems if they're disclosed transparently. What kills deals is discovering material issues late in the process that weren't disclosed earlier.
            </p>

            <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
              How NexDyne Prepares Companies for Diligence
            </h2>
            
            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              At NexDyne, we help companies build comprehensive due diligence readiness before they start fundraising conversations. Our approach includes organizing financial records and creating investor-ready reporting packages, building data rooms with professional structure and documentation, identifying and remediating potential red flags before investors discover them, and preparing management teams for diligence conversations and presentations.
            </p>

            <p className="text-lg text-[#051C2C]/80 leading-relaxed mb-6">
              Our clients move through diligence 40-50% faster than typical companies because they've anticipated investor questions and prepared thorough responses. This speed creates competitive tension, strengthens negotiating positions, and increases the probability of successful closes.
            </p>
          </div>
        </div>
      </article>

      {/* Newsletter Subscribe */}
      <div className="bg-[#051C2C] py-16 border-t border-white/10">
        <div className="container max-w-3xl px-4 md:px-12">
          <NewsletterSubscribe />
        </div>
      </div>

      {/* Related Insights */}
      <section className="py-24 md:py-32 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Related Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Continue reading</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              {
                title: "The Complete Guide to Series A Fundraising Preparation",
                category: "Capital Raising",
                description: "Series A fundraising represents a critical inflection point for growth-stage companies.",
                link: "/insights/series-a-fundraising-guide"
              },
              {
                title: "Five Valuation Mistakes That Cost Founders Millions",
                category: "Capital Raising",
                description: "Understanding common valuation errors can save founders from dilution disasters.",
                link: "/insights/valuation-mistakes"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <span className="text-xs font-bold text-[#0077B5] uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-xl font-serif font-bold text-white mt-2 group-hover:text-[#0077B5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                  <span className="text-[#0077B5] text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
