import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Building2, Target, BarChart3, ChevronRight, Globe, Briefcase, PieChart, LineChart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivateEquityIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Private Equity & Investments" 
        description="Digital transformation for private equity. NexDyne helps PE firms and portfolio companies accelerate value creation through operational improvement, digital transformation, and data-driven decision making."
        canonical="/industries/private-equity"
      />
      <Navigation />
      
      {/* Editorial Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-8 block">
              Private Equity & Investments
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-[#051C2C] leading-[1.1] mb-5">
              Private Equity & Investments
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/70 leading-relaxed max-w-4xl">
              In an era of compressed multiples and increased competition, operational value creation has become the primary driver of private equity returns. NexDyne partners with PE firms and their portfolio companies to accelerate transformation, improve operations, and create sustainable competitive advantage that drives superior exits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-Width Hero Image */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" 
            alt="Private Equity Digital Transformation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* Editorial Introduction */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/80 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0077B5]">
                The private equity playbook is evolving. Financial engineering alone no longer delivers the returns investors expect. Today's top-performing funds are those that can identify operational improvement opportunities during diligence and execute transformational change during the hold period. The firms that master this capability will outperform; those that don't will struggle to compete for deals and capital.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with private equity firms at every stage of the investment lifecycle. During diligence, we help identify value creation opportunities and assess execution risk. Post-acquisition, we work alongside management teams to implement transformational initiatives that drive EBITDA growth and multiple expansion. And at exit, we help position companies to maximize valuation.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Our approach combines deep operational expertise with digital capabilities that accelerate transformation. From revenue growth and cost optimization to digital transformation and organizational effectiveness, we bring the skills and experience needed to create value in complex, time-constrained environments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics Strip */}
      <section className="py-16 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "2.5x", label: "Average EBITDA improvement" },
              { value: "18mo", label: "Typical value creation timeline" },
              { value: "$500M+", label: "Value created for portfolio companies" },
              { value: "85%", label: "Initiatives delivered on time" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#0077B5] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help PE Firms - Editorial Two-Column */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-8 leading-tight">
                How We Help PE Firms Create Value
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Value creation in private equity requires a disciplined approach that identifies high-impact opportunities, mobilizes resources quickly, and delivers results within compressed timelines. We bring the operational expertise, digital capabilities, and execution discipline needed to succeed in this demanding environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Due Diligence */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Commercial & Operational Due Diligence
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Identify value creation opportunities and assess execution risk before you invest. Our diligence teams evaluate market position, operational efficiency, technology capabilities, and management strength—providing the insights needed to make confident investment decisions.
                </p>
              </div>

              {/* Value Creation Planning */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Value Creation Planning
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Develop actionable value creation plans that prioritize high-impact initiatives. We work with deal teams and management to quantify opportunities, sequence initiatives, and build the roadmaps that guide transformation during the hold period.
                </p>
              </div>

              {/* Operational Improvement */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Operational Transformation
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Execute transformational initiatives that drive EBITDA growth. From cost optimization and revenue acceleration to digital transformation and organizational effectiveness, we bring the expertise and resources needed to deliver results.
                </p>
              </div>

              {/* Exit Preparation */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Exit Preparation & Positioning
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Maximize exit value with strategic positioning and operational excellence. We help portfolio companies tell compelling equity stories, demonstrate sustainable performance, and address buyer concerns—driving premium valuations at exit.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Full Width */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077B5] mb-4 block">
              Featured Case Study
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80" 
                alt="PE Value Creation" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="text-6xl md:text-7xl eb-garamond font-bold text-[#0077B5] mb-4">
                3.2x
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                EBITDA growth over 24 months
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A leading PE firm engaged us to transform a mid-market industrial services company. We led a comprehensive operational improvement program that included pricing optimization, route efficiency, and back-office automation. The result: 3.2x EBITDA growth over 24 months, positioning the company for a successful exit at 12x multiple—up from 8x at acquisition.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed mb-8">
                Beyond financial results, we built sustainable capabilities that continue to drive performance, including a pricing analytics function, operational excellence program, and digital customer portal.
              </p>
              <Link href="/cases/pe-industrial-transformation" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our PE Capabilities - Editorial Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Our Private Equity Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Revenue Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Revenue Growth & Pricing
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Accelerate top-line growth with commercial excellence. Our solutions help portfolio companies optimize pricing, improve sales effectiveness, and identify new growth opportunities—driving revenue expansion that supports multiple growth.
              </p>
            </motion.div>

            {/* Cost Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Cost Optimization & Efficiency
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Improve margins with operational efficiency. We help portfolio companies reduce costs through procurement optimization, process improvement, and organizational redesign—delivering sustainable savings that flow to EBITDA.
              </p>
            </motion.div>

            {/* Digital Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Digital Transformation
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build digital capabilities that create competitive advantage. From customer-facing digital platforms to AI-powered operations, we help portfolio companies leverage technology to drive growth and efficiency.
              </p>
            </motion.div>

            {/* Carve-outs & Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Carve-outs & Integration
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Execute complex transactions with confidence. Our teams help PE firms navigate carve-outs, stand-ups, and integrations—ensuring operational continuity while capturing synergies and building standalone capabilities.
              </p>
            </motion.div>

            {/* Technology Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Technology Due Diligence
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Assess technology capabilities and risks before you invest. Our technology diligence evaluates architecture, technical debt, cybersecurity, and IT organization—identifying both risks and opportunities for value creation.
              </p>
            </motion.div>

            {/* Portfolio Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Portfolio Analytics & Monitoring
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Track portfolio performance with real-time analytics. Our platforms provide visibility into operational KPIs, value creation progress, and early warning indicators—enabling proactive portfolio management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 md:py-28 bg-[#051C2C] text-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-white mb-6">
              Our Clients' Success in Private Equity
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Success Story 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 p-8 md:p-10 rounded-lg"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#0077B5] mb-2">
                $75M
              </div>
              <div className="text-lg font-medium text-white mb-6">
                EBITDA improvement identified in diligence
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A PE firm engaged us to conduct operational diligence on a healthcare services platform. We identified $75M in EBITDA improvement opportunities across pricing, labor optimization, and procurement—providing the conviction to pursue the deal and the roadmap to execute post-close.
              </p>
              <Link href="/cases/pe-healthcare-diligence" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Success Story 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 p-8 md:p-10 rounded-lg"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-[#0077B5] mb-2">
                40%
              </div>
              <div className="text-lg font-medium text-white mb-6">
                margin improvement through digital transformation
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A portfolio company in distribution engaged us to lead a digital transformation. We implemented a modern ERP, built a customer self-service portal, and deployed AI-powered demand forecasting—improving margins by 40% while positioning the company for accelerated growth.
              </p>
              <Link href="/cases/pe-distribution-digital" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-[#051C2C] mb-6">
              Related Industries
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Financial Services", link: "/industries/financial-services" },
              { title: "Insurance", link: "/industries/insurance" },
              { title: "Healthcare", link: "/industries/healthcare" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={industry.link} className="group block bg-white p-6 hover:bg-[#051C2C] transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0077B5] group-hover:text-white/60 transition-colors">
                        Industry
                      </span>
                      <h3 className="text-lg font-serif font-bold text-[#051C2C] group-hover:text-white transition-colors mt-1">
                        {industry.title}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#051C2C]/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#051C2C]">
        <div className="container px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6">
                Ready to accelerate value creation?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you identify opportunities, execute transformation, and create sustainable value in your portfolio companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-8 py-6 text-base font-semibold">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent">
                    View All Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
