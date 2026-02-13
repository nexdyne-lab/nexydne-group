import { motion } from "framer-motion";
import { ArrowRight, Briefcase, TrendingUp, DollarSign, FileText, Users, BarChart3, PieChart, Target, Wallet } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function FractionalCFO() {
  return (
    <div className="min-h-screen bg-[#051C2C] font-sans text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Fractional CFO Services" 
        description="Access high-level financial leadership without the full-time cost. We provide strategic financial planning, cash flow management, and board-level reporting tailored for growing SMEs."
        canonical="/capabilities/strategy-corporate-finance/cfo-services"
      />
      <Navbar />
      
      {/* DZ10 Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[75vh] md:min-h-[70vh] sm:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[75vh] md:min-h-[85vh] flex items-center pt-16 sm:pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80" 
            alt="Fractional CFO Services" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#051C2C] via-[#051C2C]/80 to-[#051C2C]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/capabilities/strategy-corporate-finance" className="inline-flex items-center text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 rotate-180" />
              Strategy & Business Finance
            </Link>
            
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Executive Leadership
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.05] mb-5 sm:mb-3 md:mb-4 eb-garamond">
              Fractional <br />
              <span className="text-[#0077B5]">CFO Services</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Access high-level financial leadership without the full-time cost. We provide strategic financial planning, cash flow management, and board-level reporting tailored for growing SMEs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#0077B5]/20">
                  Engage a Fractional CFO
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 bg-transparent hover:scale-[1.02]">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DZ10 Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
                Our Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-5 sm:mb-6 md:mb-8">
                Transform finance <br />
                <span className="text-[#0077B5]">into a growth engine.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-[#051C2C]/70 leading-relaxed">
                <p>
                  Growth-stage companies often face a critical dilemma: they are too complex for a simple bookkeeper but cannot justify the cost of a full-time, high-caliber CFO. This "missing middle" creates a strategic void where financial data exists but isn't leveraged for decision-making.
                </p>
                <p>
                  NexDyne provides the <strong className="text-[#051C2C] font-semibold">Strategic Layer</strong> that sits on top of your existing finance function. We deliver the three pillars of modern financial leadership: Strategic Planning, Cash Flow Management, and Board-Level Reporting.
                </p>
              </div>

              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center text-[#0077B5] hover:text-[#005a8c] font-semibold text-base group transition-colors">
                  Discuss your CFO needs 
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-xl sm:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" 
                  alt="Executive Leadership" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
                  <div className="text-white">
                    <div className="font-serif font-bold text-2xl mb-2">Strategic Leadership</div>
                    <div className="text-white/80">We don't just report the news; we help you make it.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Offerings Grid */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Comprehensive CFO services
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              The foresight and governance required to scale, without the full-time commitment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Strategic Financial Planning",
                description: "We move beyond historical reporting to forward-looking strategy. By building dynamic financial models, we stress-test your assumptions and forecast capital requirements with precision. This process aligns your budget directly with your growth objectives."
              },
              {
                icon: <Wallet className="w-7 h-7" />,
                title: "Cash Flow Management",
                description: "Profit is opinion; cash is fact. We implement rigorous 13-week cash flow forecasting and working capital management disciplines. By optimizing your cash conversion cycle, we ensure you have capital availability to seize opportunities."
              },
              {
                icon: <FileText className="w-7 h-7" />,
                title: "Board-Level Reporting",
                description: "We professionalize your financial governance to instill confidence in stakeholders. Our team prepares investor-grade board decks that tell the story behind the numbers, highlighting KPIs, risks, and strategic initiatives."
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: "Exit & Fundraising Prep",
                description: "Whether you are raising Series A or preparing for an acquisition, the integrity of your data room is paramount. We manage the entire due diligence process and provide valuation support to maximize value."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 bg-white/5 rounded-lg sm:rounded-xl border border-white/10 hover:border-[#0077B5]/50 transition-all duration-300">
                  <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg text-[#0077B5] group-hover:bg-[#0077B5] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#0077B5] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DZ10 Engagement Models Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 sm:gap-6 sm:p-6 sm:p-8 md:p-12 lg:gap-8 sm:gap-6 sm:p-8 md:p-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
                Engagement Models
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                Flexible <span className="text-[#0077B5]">partnership</span>
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                We offer engagement models that scale with your needs, from project-based support to ongoing strategic partnership.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Strategic Advisory", desc: "Monthly retainer for ongoing CFO-level guidance and board support." },
                  { title: "Project-Based", desc: "Focused engagements for fundraising, M&A, or financial transformation." },
                  { title: "Interim Leadership", desc: "Full-time coverage during CFO transitions or rapid scaling phases." },
                  { title: "Team Augmentation", desc: "Supplement your existing finance team with specialized expertise." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#0077B5] mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-[#051C2C] mb-1">{item.title}</h3>
                      <p className="text-[#051C2C]/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { metric: "150+", label: "CFO Engagements" },
                { metric: "70%", label: "Cost Savings vs Full-Time" },
                { metric: "3x", label: "Avg. Revenue Growth" },
                { metric: "15+", label: "Years Experience" }
              ].map((item, index) => (
                <motion.div 
                  key={item.label} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 sm:p-5 md:p-6 bg-[#051C2C]/5 rounded-lg sm:rounded-xl"
                >
                  <div className="text-3xl font-serif font-bold text-[#0077B5] mb-2">{item.metric}</div>
                  <p className="text-sm text-[#051C2C]/60 uppercase tracking-wider">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* DZ10 Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 md:mb-16 gap-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 mb-4 sm:mb-6 block">
                Our Impact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
                Fractional CFO success stories
              </h2>
            </motion.div>
            <Link href="/cases">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent transition-all duration-300 hover:scale-[1.02]">
                View all case studies
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                title: "Identifying and capturing growth opportunities for medical device manufacturer",
                category: "Healthcare",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
                link: "/case-studies/medical-device-growth"
              },
              {
                title: "Regional retailer doubles market share through financial strategy",
                category: "Retail",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
                link: "/case-studies/retail-market-expansion"
              },
              {
                title: "B2B SaaS platform transitions from follower to category leader",
                category: "Technology",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
                link: "/case-studies/saas-category-leadership"
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={study.link}>
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-[4/3] mb-6">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="text-[#0077B5] text-xs font-bold uppercase tracking-[0.15em] mb-3">{study.category}</div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#0077B5] transition-colors leading-tight">
                    {study.title}
                  </h3>
                  <div className="flex items-center text-white text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read case study <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-[#051C2C]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0077B5] mb-4 sm:mb-6 block">
              Related Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#051C2C] mb-6">
              Complementary capabilities
            </h2>
            <p className="text-xl text-[#051C2C]/60 max-w-2xl mx-auto">
              Explore other services that support your financial leadership needs.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-6 md:p-8">
            {[
              {
                title: "Financial Planning & Analysis",
                description: "Build robust budgeting, forecasting, and variance analysis processes.",
                link: "/capabilities/strategy-corporate-finance/fpa"
              },
              {
                title: "Capital Raising & Investment",
                description: "Prepare for your next funding round with confidence.",
                link: "/capabilities/strategy-corporate-finance/capital-raising"
              },
              {
                title: "Business Strategy & Transformation",
                description: "Define your path to victory and restructure for scalability.",
                link: "/capabilities/strategy-corporate-finance/business-strategy"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.link} className="group block h-full">
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-[#051C2C]/5 hover:bg-[#051C2C] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                    <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#051C2C]/60 leading-relaxed text-sm mb-6 group-hover:text-white/70 transition-colors">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#0077B5] text-sm font-semibold group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      Learn more <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent 
        items={[
          {
            title: "How Top Performers Use Financial Discipline to Grow",
            category: "Strategy",
            link: "/insights/financial-discipline-growth",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
          },
          {
            title: "The CFO's Guide to Cash Flow Management",
            category: "Cash Flow",
            link: "/insights/cfo-cash-flow-guide",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
          },
          {
            title: "Building Investor-Ready Board Decks",
            category: "Governance",
            link: "/insights/investor-ready-board-decks",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
