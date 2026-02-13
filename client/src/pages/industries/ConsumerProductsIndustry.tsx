import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, TrendingUp, Users, Package, Sparkles, BarChart3, ChevronRight, Globe, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ConsumerProductsIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Consumer Products Industry" 
        description="Digital transformation for consumer products companies. NexDyne helps CPG brands navigate changing consumer expectations, build direct relationships, and create data-driven growth strategies."
        canonical="/industries/consumer-products"
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
              Consumer Products Industry
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-[#051C2C] leading-[1.1] mb-5">
              Consumer Products Industry
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/70 leading-relaxed max-w-4xl">
              Digital transformation, once a necessary journey, is now an urgent priority for consumer products brands. Starting with a deep understanding of your business, NexDyne's consumer products consultants help clients find the right use cases to develop the digital capabilities that power consumer-centric innovation.
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
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80" 
            alt="Consumer Products Digital Transformation" 
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
                We begin our consumer products consulting services by partnering with you to define, test, and prove how advanced data collection and analysis, AI, digital supply chain, and other enhancements will create value—<em>before</em> expanding or embedding these capabilities in your operating model. We automate what's transactional and create cross-functional teams to harness the ingenuity and innovation you'll need to meet consumers' changing demands.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                The consumer products landscape is being reshaped by shifting consumer behaviors, the rise of direct-to-consumer channels, and the explosion of data from connected products and digital touchpoints. Companies that can harness these forces will build lasting competitive advantage; those that can't will find themselves increasingly commoditized.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Our consumer products practice combines deep industry expertise with cutting-edge technology capabilities. We help brands navigate the complexities of omnichannel commerce, build direct consumer relationships, and create the data infrastructure needed to deliver personalized experiences at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Consumer Products Capabilities - Editorial List */}
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
              Our Consumer Products Capabilities
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
                From the food industry to consumer durable goods, managing a portfolio of products requires new methods of acting on customer insights. To guide brand investment and redraw segmentations, our Demand Centric Growth approach maps what is driving consumers' choices in each category or niche so you can build advantaged positions with strong growth potential.
              </p>
            </motion.div>

            {/* Digital Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Digital Marketing
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Achieving digital marketing maturity is an industry-wide challenge for the consumer products industry. Our consumer products consulting experts help CPG companies integrate digital tools, collaborate with agencies and martech providers, and blend new talent with current staff and external creatives to drive results.
              </p>
            </motion.div>

            {/* Supply Chain Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Supply Chain Management
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                The CPG industry was once dominated by companies that owned their value chain, but now winners are positioned to tap into a broad ecosystem of external partners. To help CPG companies make this fundamental shift to an external orientation, we start with a clean sheet to determine the functions that partners can do as well or better, and which functions are critical to keep in-house.
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
                Personalization
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                To reach your consumers, you need to know where they're looking, how they purchase—and even precisely when they're ready to buy. Using 360° consumer profiles, enhanced by AI systems, and retail partnerships, we can help you create "segment of one" targeting, tailored to specific channels and capable of being scaled up to capture massive market share.
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
                Pricing and Net Revenue Management
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Pricing optimizations drive significant impact for CPG companies. We help you fund your own EBIT improvement through brand portfolio pricing, trade terms management, and dynamic pricing that answers the demands of shoppers and ecosystem supply chains alike.
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
                Climate Change and Sustainability
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                There's a significant opportunity to make sustainability a source of competitive advantage across the value chain. Our consumer products consulting experts help CPG companies rewire decision making to embed sustainability as a core corporate value, linking it to shareholder return.
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
              Our Clients' Success in Consumer Products
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
                50%
              </div>
              <div className="text-lg font-medium text-[#051C2C] mb-6">
                reduction in planning time
              </div>
              <p className="text-[#051C2C]/70 leading-relaxed mb-6">
                A multinational food and beverage retailer, with supply chain organizations across more than 20 markets, engaged us to build a machine-learning algorithm to improve its demand forecast. The project increased accuracy by 4 to 18 percentage points, reduced demand planners' time by 50%, and returned an additional 0.4% to 0.8% points EBIT.
              </p>
              <Link href="/cases/retail-demand-forecasting" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
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
                increase in sales
              </div>
              <p className="text-[#051C2C]/70 leading-relaxed mb-6">
                A South American electronics and furniture retailer worked with us to create a localized demand forecaster to optimize assortment at more than 1,000 stores. Our machine learning approach leveraged multiple data sets, including geolocational data, to generate demand estimates, creating potential increases of $200 million in sales and $50 million in cash margin.
              </p>
              <Link href="/cases/retail-assortment-optimization" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
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
                The Future of Direct-to-Consumer: Building Sustainable D2C Channels
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Direct-to-consumer channels offer CPG companies unprecedented access to consumer data and relationships. But building a profitable D2C business requires more than launching an e-commerce site. Our latest research explores the strategies that separate D2C winners from those struggling to achieve scale and profitability.
              </p>
              <Link href="/insights/headless-commerce-guide">
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                alt="D2C Strategy" 
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
              Purpose-built solutions that address the unique challenges of consumer products companies.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Fast-Moving Consumer Goods",
                description: "Transform FMCG operations with demand forecasting, supply chain optimization, and consumer intelligence platforms.",
                link: "/solutions/data-driven-customer-intelligence",
                image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80"
              },
              {
                title: "Consumer Electronics",
                description: "Build connected product ecosystems, optimize product launches, and create data-driven customer experiences.",
                link: "/cases/consumer-electronics-demand-optimization",
                image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&q=80"
              },
              {
                title: "Food & Beverage",
                description: "Navigate changing consumer preferences with demand sensing, portfolio optimization, and sustainable supply chains.",
                link: "/cases/food-beverage-demand-forecasting",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"
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
                title: "Retail Industry",
                link: "/industries/retail"
              },
              {
                title: "Manufacturing",
                link: "/industries/manufacturing"
              },
              {
                title: "Transportation & Logistics",
                link: "/industries/transportation-logistics"
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
                Ready to transform your consumer products business?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you build direct consumer relationships, optimize your supply chain, and create data-driven growth strategies.
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
