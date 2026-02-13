import { motion } from "framer-motion";
import { ArrowRight, DollarSign, TrendingUp, FileText, Target, Users, BarChart3, PieChart, Briefcase, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RelatedContent } from "@/components/RelatedContent";

export default function CapitalRaising() {
  return (
    <div className="min-h-screen bg-[#051C2C] font-sans text-white selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Capital Raising & Investment Readiness" 
        description="Prepare for your next funding round with confidence. We help with valuation, pitch deck creation, financial modeling, and investor due diligence preparation."
        canonical="/capabilities/strategy-corporate-finance/capital-raising"
      />
      <Navbar />
      
      {/* DZ10 Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[75vh] md:min-h-[70vh] sm:min-h-[60vh] sm:min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] md:min-h-[75vh] md:min-h-[85vh] flex items-center pt-16 sm:pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80" 
            alt="Capital Raising" 
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
              Investment Readiness
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.05] mb-5 sm:mb-3 md:mb-4 eb-garamond">
              Capital Raising & <br />
              <span className="text-[#0077B5]">Investment Readiness</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Prepare for your next funding round with confidence. We help with valuation, pitch deck creation, financial modeling, and investor due diligence preparation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="bg-[#0077B5] hover:bg-[#005a8c] text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#0077B5]/20">
                  Start Your Fundraise
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
                Transform your growth story <br />
                <span className="text-[#0077B5]">into investor confidence.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-[#051C2C]/70 leading-relaxed">
                <p>
                  Most growing companies struggle to articulate their value proposition in the language investors understand. Financial models are incomplete, valuations are unsupported, and pitch decks fail to tell a compelling story.
                </p>
                <p>
                  NexDyne provides the <strong className="text-[#051C2C] font-semibold">Investment Readiness Infrastructure</strong> that positions your company for successful capital raises. We build the analytical foundation, narrative framework, and due diligence materials that institutional investors expect.
                </p>
              </div>

              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center text-[#0077B5] hover:text-[#005a8c] font-semibold text-base group transition-colors">
                  Discuss your funding strategy 
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                  alt="Investment Analysis" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
                  <div className="text-white">
                    <div className="font-serif font-bold text-2xl mb-2">Investment Ready</div>
                    <div className="text-white/80">Where preparation meets opportunity.</div>
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
              Comprehensive fundraising support
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              From valuation to close, we provide the expertise and materials you need to succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-4 sm:p-6 md:p-8 lg:gap-5 sm:p-7 md:p-5 sm:p-7 md:p-10">
            {[
              {
                icon: <BarChart3 className="w-7 h-7" />,
                title: "Valuation Analysis & Financial Modeling",
                description: "We build defensible valuation models using multiple methodologies—DCF, comparable company analysis, and precedent transactions. Our three-statement financial models project revenue, profitability, and cash flow with scenario analysis that stress-tests assumptions."
              },
              {
                icon: <FileText className="w-7 h-7" />,
                title: "Pitch Deck Creation & Storytelling",
                description: "We design investor presentations that balance narrative clarity with analytical depth. By distilling complex business models into compelling visual stories, we help you articulate your market opportunity, competitive advantage, and growth trajectory."
              },
              {
                icon: <Briefcase className="w-7 h-7" />,
                title: "Due Diligence Preparation",
                description: "We organize your financial records, contracts, and operational metrics into a structured data room that anticipates investor questions. By conducting pre-emptive diligence reviews, we identify and address potential red flags before they surface."
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: "Investor Targeting & Strategy",
                description: "We help you identify the right capital partners based on your industry, stage, and strategic objectives. Through market mapping and investor profiling, we ensure your outreach targets funds with relevant thesis alignment."
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

      {/* DZ10 Methodology Section */}
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
                Our Approach
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                The NexDyne <span className="text-[#0077B5]">Fundraising Process</span>
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-5 sm:mb-6 md:mb-8">
                We guide you through every stage of the fundraising journey, from initial preparation to successful close.
              </p>
              
              <div className="space-y-6">
                {[
                  { num: "01", title: "Assessment", desc: "Evaluate your current position, identify gaps, and define funding objectives." },
                  { num: "02", title: "Preparation", desc: "Build financial models, craft your narrative, and prepare data room materials." },
                  { num: "03", title: "Positioning", desc: "Identify target investors and develop tailored outreach strategies." },
                  { num: "04", title: "Execution", desc: "Support through investor meetings, negotiations, and due diligence." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="text-2xl font-serif font-bold text-[#0077B5]">{item.num}</div>
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
                { metric: "$2B+", label: "Capital Raised" },
                { metric: "40%", label: "Above Target Valuations" },
                { metric: "85%", label: "Success Rate" },
                { metric: "45", label: "Days Avg. Timeline" }
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
                Successful capital raises
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
                title: "Series B funding secured with 40% above target valuation",
                category: "B2B SaaS",
                image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80",
                link: "/case-studies/series-b-funding"
              },
              {
                title: "Healthcare tech startup closes $25M growth round in 6 weeks",
                category: "Healthcare Technology",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
                link: "/case-studies/healthcare-funding"
              },
              {
                title: "Manufacturing company secures growth equity for expansion",
                category: "Manufacturing",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
                link: "/case-studies/manufacturing-growth-equity"
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
              Explore other services that support your growth journey.
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
                title: "M&A & Strategic Partnerships",
                description: "Navigate complex transactions with expert guidance.",
                link: "/capabilities/strategy-corporate-finance/mergers-acquisitions"
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
            title: "Series A Fundraising Guide",
            category: "Capital Raising",
            link: "/insights/series-a-fundraising-guide",
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
          },
          {
            title: "Five Valuation Mistakes That Cost Founders Millions",
            category: "Valuation",
            link: "/insights/valuation-mistakes",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
          },
          {
            title: "The Investor Due Diligence Checklist",
            category: "Due Diligence",
            link: "/insights/due-diligence-checklist",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
          }
        ]}
      />

      <Footer />
    </div>
  );
}
