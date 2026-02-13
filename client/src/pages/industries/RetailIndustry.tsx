import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Store, TrendingUp, Users, Package, Sparkles, BarChart3, ChevronRight, Globe, Zap, Truck, CreditCard } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function RetailIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Retail & E-commerce Industry" 
        description="Digital transformation for retail and e-commerce. NexDyne helps retailers create seamless omnichannel experiences, optimize operations, and build customer loyalty in the digital age."
        canonical="/industries/retail"
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
              Retail & E-commerce Industry
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl eb-garamond font-bold tracking-tight text-[#051C2C] leading-[1.1] mb-5">
              Retail & E-commerce Industry
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#051C2C]/70 leading-relaxed max-w-4xl">
              Retail is being reinvented. The boundaries between physical and digital are dissolving, customer expectations are rising, and new competitors are emerging from every direction. NexDyne helps retailers navigate this transformation—building the capabilities needed to win in the new retail landscape.
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
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80" 
            alt="Retail Digital Transformation" 
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
                The retail industry is experiencing its most significant transformation in decades. The pandemic accelerated digital adoption by years, fundamentally changing how consumers discover, evaluate, and purchase products. Retailers that can meet customers wherever they are—with personalized experiences across every touchpoint—will thrive. Those that can't will struggle to survive.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-8">
                We partner with retailers to build the capabilities needed for this new era: unified commerce platforms that create seamless customer experiences, AI-powered personalization that drives conversion and loyalty, and intelligent supply chains that deliver speed and efficiency. Our approach combines deep retail expertise with cutting-edge technology to create sustainable competitive advantage.
              </p>
              
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                From grocery to fashion, from specialty retail to mass merchants, we've helped retailers of all types transform their businesses. We understand the unique challenges of retail—the thin margins, the seasonal volatility, the complexity of managing thousands of SKUs across hundreds of locations—and we bring that understanding to every engagement.
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
              { value: "35%", label: "Increase in online conversion rates" },
              { value: "28%", label: "Improvement in inventory turns" },
              { value: "45%", label: "Reduction in stockouts" },
              { value: "3x", label: "Faster fulfillment speed" }
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

      {/* How We Help Retailers - Editorial Two-Column */}
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
                How We Help Retailers Win in the Digital Age
              </h2>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed">
                Success in retail requires excellence across multiple dimensions: customer experience, operational efficiency, and organizational agility. We help retailers build capabilities in each area—creating integrated solutions that work together to drive profitable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Unified Commerce */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Unified Commerce & Omnichannel
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Create seamless customer experiences across all channels—online, mobile, and in-store. Our unified commerce solutions integrate inventory, orders, and customer data to enable capabilities like buy-online-pickup-in-store, endless aisle, and ship-from-store.
                </p>
              </div>

              {/* Customer Intelligence */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Customer Intelligence & Personalization
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Build 360-degree customer views that power personalized experiences at scale. From product recommendations to targeted promotions, our AI-powered solutions help retailers deliver relevance that drives conversion and loyalty.
                </p>
              </div>

              {/* Supply Chain */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Intelligent Supply Chain & Fulfillment
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Optimize inventory placement, automate replenishment, and enable flexible fulfillment. Our solutions use AI and machine learning to predict demand, reduce stockouts, and minimize carrying costs—while meeting customer expectations for speed.
                </p>
              </div>

              {/* Store Operations */}
              <div className="border-l-4 border-[#0077B5] pl-6">
                <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-3">
                  Store Operations & Associate Enablement
                </h3>
                <p className="text-[#051C2C]/70 leading-relaxed">
                  Transform store operations with digital tools that empower associates and enhance the customer experience. From mobile POS to clienteling apps, we help retailers reimagine the role of the store in an omnichannel world.
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
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" 
                alt="Retail Transformation" 
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
              <div className="text-6xl md:text-7xl font-serif font-bold text-[#0077B5] mb-4">
                40%
              </div>
              <div className="text-xl font-medium text-[#051C2C] mb-6">
                increase in e-commerce revenue
              </div>
              <p className="text-lg text-[#051C2C]/70 leading-relaxed mb-6">
                A leading fashion retailer partnered with us to transform their digital commerce capabilities. We implemented a headless commerce platform, integrated AI-powered personalization, and enabled real-time inventory visibility across 500+ stores. The result: a 40% increase in e-commerce revenue, 25% improvement in conversion rates, and a unified customer experience across all channels.
              </p>
              <p className="text-[#051C2C]/70 leading-relaxed mb-8">
                Beyond the technology, we helped the retailer build new organizational capabilities—training associates on digital tools, establishing agile product teams, and creating a culture of continuous experimentation that drives ongoing innovation.
              </p>
              <Link href="/cases/fashion-retail-digital-transformation" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Retail Capabilities - Editorial Grid */}
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
              Our Retail Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* E-commerce & Digital */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                E-commerce & Digital Platforms
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build modern e-commerce platforms that deliver exceptional customer experiences. From headless commerce architectures to progressive web apps, we help retailers create fast, flexible digital storefronts that drive conversion and enable rapid innovation.
              </p>
            </motion.div>

            {/* Merchandising & Assortment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Merchandising & Assortment Optimization
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Optimize product assortments with AI-powered demand forecasting and localization. Our solutions help retailers stock the right products in the right locations—maximizing sales while minimizing markdowns and inventory costs.
              </p>
            </motion.div>

            {/* Pricing & Promotions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Pricing & Promotions
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Optimize pricing and promotional strategies with AI-driven analytics. Our solutions help retailers set competitive prices, design effective promotions, and manage markdowns—maximizing margin while maintaining price perception.
              </p>
            </motion.div>

            {/* Loyalty & CRM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Loyalty & Customer Engagement
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Build loyalty programs that drive engagement and lifetime value. From points-based programs to experiential rewards, we help retailers create emotional connections with customers that translate into repeat purchases and advocacy.
              </p>
            </motion.div>

            {/* Last Mile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Last-Mile & Fulfillment
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Optimize last-mile delivery and fulfillment operations. From micro-fulfillment centers to crowd-sourced delivery, we help retailers meet customer expectations for speed and convenience while managing costs.
              </p>
            </motion.div>

            {/* Store Technology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-[#051C2C]/10 pt-8"
            >
              <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4 underline decoration-[#0077B5] decoration-2 underline-offset-4">
                Store Technology & Innovation
              </h3>
              <p className="text-[#051C2C]/70 leading-relaxed">
                Reimagine the store experience with innovative technology. From checkout-free stores to augmented reality fitting rooms, we help retailers create differentiated in-store experiences that drive traffic and conversion.
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
              Our Clients' Success in Retail
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
                25%
              </div>
              <div className="text-lg font-medium text-white mb-6">
                reduction in inventory carrying costs
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A national grocery chain deployed our AI-powered demand forecasting solution across 800 stores. The system predicts demand at the SKU-store level, automatically generates replenishment orders, and optimizes safety stock—reducing inventory costs while virtually eliminating stockouts on key items.
              </p>
              <Link href="/cases/grocery-demand-forecasting" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
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
                60%
              </div>
              <div className="text-lg font-medium text-white mb-6">
                increase in loyalty program engagement
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                A specialty retailer reimagined their loyalty program with our help. We built a unified customer data platform, implemented AI-powered personalization, and created a mobile-first engagement experience. The result: 60% more active loyalty members and a 20% increase in customer lifetime value.
              </p>
              <Link href="/cases/retail-loyalty-transformation" className="inline-flex items-center text-[#0077B5] font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
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
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Grocery & Supermarkets",
                description: "Transform grocery operations with demand forecasting, fresh optimization, and omnichannel fulfillment.",
                link: "/cases/grocery-demand-forecasting",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"
              },
              {
                title: "Fashion & Apparel",
                description: "Build agile fashion supply chains and create personalized shopping experiences across channels.",
                link: "/cases/fashion-retail-digital-transformation",
                image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80"
              },
              {
                title: "Specialty Retail",
                description: "Create differentiated customer experiences and build loyalty in competitive specialty segments.",
                link: "/cases/retail-loyalty-transformation",
                image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80"
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
                title: "Consumer Products",
                link: "/industries/consumer-products"
              },
              {
                title: "Transportation & Logistics",
                link: "/industries/transportation-logistics"
              },
              {
                title: "Travel & Hospitality",
                link: "/industries/travel-hospitality"
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
                Ready to transform your retail business?
              </h2>
              <p className="text-lg text-white/70 mb-10">
                Let's discuss how we can help you create seamless omnichannel experiences, optimize operations, and build customer loyalty in the digital age.
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
