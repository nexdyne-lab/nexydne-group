import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Users, FileCheck, Zap, Building2, ChevronRight, Quote } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function FinancialServicesIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Financial Services Industry" 
        description="Digital transformation for financial services. NexDyne helps banks, insurers, and fintech companies navigate regulatory complexity while delivering superior customer experiences."
        canonical="/industries/financial-services"
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
              Financial Services Industry
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-[#051C2C] leading-[1.1] mb-5">
              Financial Services Industry
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/70 leading-relaxed max-w-4xl">
              Digital transformation, once a necessary journey, is now an urgent priority for financial services institutions. Starting with a deep understanding of your business, NexDyne's financial services consultants help clients find the right use cases to develop the digital capabilities that power customer-centric innovation.
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80" 
            alt="Financial Services Digital Transformation" 
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
                We begin our financial services consulting by partnering with you to define, test, and prove how advanced data collection and analysis, AI, digital channels, and other enhancements will create value—<em>before</em> expanding or embedding these capabilities in your operating model. We automate what's transactional and create cross-functional teams to harness the ingenuity and innovation you'll need to meet customers' changing demands.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                The financial services landscape is undergoing unprecedented transformation. Traditional institutions face pressure from fintech disruptors, evolving customer expectations, and an increasingly complex regulatory environment. Success requires not just adopting new technologies, but fundamentally rethinking how value is created and delivered.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Our approach combines deep industry expertise with cutting-edge technology capabilities. We help financial institutions navigate the complexities of digital transformation—from core system modernization to AI-powered risk management—while maintaining the security, compliance, and trust that define the industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Financial Services Capabilities - Editorial List */}
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
              Our Financial Services Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Customer Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Customer Insights
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                From retail banking to wealth management, understanding customer behavior requires new methods of acting on data insights. To guide product investment and redraw segmentations, our Demand Centric Growth approach maps what is driving customers' choices in each category so you can build advantaged positions with strong growth potential.
              </p>
            </motion.div>

            {/* Digital Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Digital Transformation
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Achieving digital maturity is an industry-wide challenge for financial services. Our consultants help banks and insurers integrate digital tools, collaborate with fintech partners, and blend new talent with current staff and external expertise to drive results across channels.
              </p>
            </motion.div>

            {/* Risk & Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Risk & Compliance Management
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                The financial services industry was once dominated by institutions that owned their value chain, but now winners are positioned to tap into a broad ecosystem of external partners. To help financial institutions make this fundamental shift, we start with a clean sheet to determine the functions that partners can do as well or better, and which functions are critical to keep in-house.
              </p>
            </motion.div>

            {/* Personalization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Personalization at Scale
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                To reach your customers, you need to know where they're looking, how they make decisions—and even precisely when they're ready to act. Using 360° customer profiles, enhanced by AI systems and data partnerships, we can help you create "segment of one" targeting, tailored to specific channels and capable of being scaled up to capture massive market share.
              </p>
            </motion.div>

            {/* Pricing & Revenue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Pricing & Revenue Management
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Pricing optimizations drive significant impact for financial institutions. We help you fund your own margin improvement through product portfolio pricing, fee structure management, and dynamic pricing that answers the demands of customers and competitive pressures alike.
              </p>
            </motion.div>

            {/* Sustainability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                ESG & Sustainable Finance
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                There's a significant opportunity to make sustainability a source of competitive advantage across the value chain. Our financial services consulting experts help institutions rewire decision making to embed ESG as a core value, linking it to shareholder return and long-term resilience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Stories - Editorial Format */}
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
              Our Clients' Success in Financial Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Success Story 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#f8f9fa] p-8 md:p-10"
            >
              <div className="text-6xl md:text-7xl font-serif font-bold text-[#0077B5] mb-2">
                73%
              </div>
              <div className="text-lg font-medium text-[#051C2C] mb-6">
                reduction in fraud losses
              </div>
              <p className="text-[#051C2C]/70 leading-relaxed mb-6">
                A regional bank with $15B in assets deployed our AI-powered fraud detection system across all channels. Machine learning models analyze transaction patterns in real-time, catching sophisticated fraud schemes while reducing false positives by 85%—improving both security and customer experience.
              </p>
              <Link href="/cases/financial-fraud-detection" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Success Story 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#f8f9fa] p-8 md:p-10"
            >
              <div className="text-6xl md:text-7xl font-serif font-bold text-[#0077B5] mb-2">
                $200M
              </div>
              <div className="text-lg font-medium text-[#051C2C] mb-6">
                increase in cross-sell revenue
              </div>
              <p className="text-[#051C2C]/70 leading-relaxed mb-6">
                A multinational bank worked with us to create a unified customer data platform and AI-powered recommendation engine. By analyzing transaction patterns, life events, and behavioral signals, the system identifies optimal moments for personalized offers—driving a 40% increase in product attachment rates.
              </p>
              <Link href="/cases/bank-cross-sell" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Insight - Full Width Editorial */}
      <section className="py-20 md:py-28 bg-[#051C2C] text-white">
        <div className="container px-4 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
                Featured Insight
              </span>
              <h2 className="text-3xl md:text-4xl eb-garamond font-bold text-white mb-6 leading-tight">
                The Future of Banking: How AI is Reshaping Financial Services
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Artificial intelligence is no longer a future consideration for financial institutions—it's a present imperative. From fraud detection to personalized advisory services, AI is fundamentally changing how banks create value and serve customers. Our latest research explores the key trends shaping the industry and the strategic choices leaders must make.
              </p>
              <Link href="/insights/enterprise-transformation-ai">
                <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-8 py-6 text-base font-semibold">
                  Read the Full Report <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80" 
                alt="AI in Banking" 
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services - Card Grid */}
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
              Related Services
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-3xl">
              Purpose-built solutions that address the unique challenges of banks, insurers, and fintech companies.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Retail Banking",
                description: "Transform retail banking with digital-first experiences, personalized products, and seamless omnichannel journeys.",
                link: "/solutions/accelerating-business-growth",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
              },
              {
                title: "Wealth Management",
                description: "Enable advisors with AI-powered insights, automate compliance, and deliver personalized client experiences at scale.",
                link: "/cases/wealth-onboarding",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
              },
              {
                title: "Insurance",
                description: "Modernize underwriting, claims processing, and customer engagement with intelligent automation and data analytics.",
                link: "/industries/insurance",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link} className="group block">
                  <div className="relative overflow-hidden mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-2 group-hover:text-[#0077B5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#051C2C]/60 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[#0077B5] text-sm font-semibold">
                    Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
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
              {
                title: "Insurance",
                link: "/industries/insurance"
              },
              {
                title: "Private Equity & Investments",
                link: "/industries/private-equity"
              },
              {
                title: "Public Sector",
                link: "/industries/public-sector"
              }
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
                Ready to transform your financial services organization?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you navigate digital transformation, manage risk, and deliver exceptional customer experiences.
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
