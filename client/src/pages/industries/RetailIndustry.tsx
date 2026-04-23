import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Store, TrendingUp, Users, Package, Sparkles, BarChart3, ChevronRight, Globe, Zap, Truck, CreditCard, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function RetailIndustry() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="Retail & E-commerce Industry" 
        description="Digital transformation for retail and e-commerce. NexDyne helps retailers create seamless omnichannel experiences, optimize operations, and build customer loyalty in the digital age."
        canonical="/industries/retail"
      />
      <Navigation />
      
      {/* Hero Section - Consulting standard: hierarchy, CTA, split with image */}
      <section className="relative min-h-0 flex flex-col lg:flex-row lg:min-h-[68vh] lg:items-center overflow-hidden bg-subtle border-b border-base/10 pt-8">
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
              alt="Retail and e-commerce"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="container relative z-10 px-4 md:px-12 py-14 md:py-20 lg:py-24 flex-shrink-0">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary" aria-hidden>
                Industries
              </p>
              <h1 className="eb-garamond font-bold text-charcoal text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl tracking-tight leading-[1.12]">
                Retail & E-commerce Industry
              </h1>
              <p className="text-base md:text-lg text-charcoal/75 leading-relaxed max-w-lg">
                Win in the new retail landscape.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="lg:hidden relative w-full aspect-[16/10] min-h-[200px] flex-shrink-0">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="Retail and e-commerce"
            className="w-full h-full object-cover object-center"
          />
        </div>
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
              <p className="text-lg sm:text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-8">
                The retail industry is experiencing its most significant transformation in decades. The pandemic accelerated digital adoption by years, fundamentally changing how consumers discover, evaluate, and purchase products. Retailers that can meet customers wherever they are—with personalized experiences across every touchpoint—will thrive. Those that can't will struggle to survive.
              </p>
              
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                We partner with retailers to build the capabilities needed for this new era: unified commerce platforms that create seamless customer experiences, AI-powered personalization that drives conversion and loyalty, and intelligent supply chains that deliver speed and efficiency. Our approach combines deep retail expertise with cutting-edge technology to create sustainable competitive advantage.
              </p>
              
              <p className="text-lg text-charcoal/70 leading-relaxed">
                From grocery to fashion, from specialty retail to mass merchants, we've helped retailers of all types transform their businesses. We understand the unique challenges of retail—the thin margins, the seasonal volatility, the complexity of managing thousands of SKUs across hundreds of locations—and we bring that understanding to every engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Experience & Impact - Metrics */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eb-garamond font-bold text-base text-2xl md:text-3xl mb-12 md:mb-16"
          >
            Our Experience & Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { value: "40+", label: "Ventures launched with clients across industries" },
              { value: "78%", label: "Reach profitability within 18 months" },
              { value: "4-6 Mo", label: "Typical time from concept to market launch" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-left"
              >
                <div className="text-4xl md:text-5xl font-bold text-base mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help - Grid style with header and separators */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              How We Help Clients
            </h2>
            <div className="border-t border-border" aria-hidden />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12 mt-8">
            {[
              { title: "Unified Commerce & Omnichannel", desc: "Create seamless customer experiences across all channels—online, mobile, and in-store. Our unified commerce solutions integrate inventory, orders, and customer data to enable capabilities like buy-online-pickup-in-store, endless aisle, and ship-from-store." },
              { title: "Customer Intelligence & Personalization", desc: "Build 360-degree customer views that power personalized experiences at scale. From product recommendations to targeted promotions, our AI-powered solutions help retailers deliver relevance that drives conversion and loyalty." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-charcoal mb-2 flex items-center gap-2">
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-border my-10 md:my-12" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12">
            {[
              { title: "Intelligent Supply Chain & Fulfillment", desc: "Optimize inventory placement, automate replenishment, and enable flexible fulfillment. Our solutions use AI and machine learning to predict demand, reduce stockouts, and minimize carrying costs—while meeting customer expectations for speed." },
              { title: "Store Operations & Associate Enablement", desc: "Transform store operations with digital tools that empower associates and enhance the customer experience. From mobile POS to clienteling apps, we help retailers reimagine the role of the store in an omnichannel world." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-charcoal mb-2 flex items-center gap-2">
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study - Full Width */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
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
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                40%
              </div>
              <div className="text-xl font-medium text-charcoal mb-6">
                increase in e-commerce revenue
              </div>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                A leading fashion retailer partnered with us to transform their digital commerce capabilities. We implemented a headless commerce platform, integrated AI-powered personalization, and enabled real-time inventory visibility across 500+ stores. The result: a 40% increase in e-commerce revenue, 25% improvement in conversion rates, and a unified customer experience across all channels.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                Beyond the technology, we helped the retailer build new organizational capabilities—training associates on digital tools, establishing agile product teams, and creating a culture of continuous experimentation that drives ongoing innovation.
              </p>
              <Link href="/cases/fashion-retail-digital-transformation" className="inline-flex items-center text-primary font-semibold hover:underline">
                Read the full case study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal mb-10 md:mb-12"
          >
            Featured Insights
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-0 border border-border mb-10 md:mb-12 overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 bg-white">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Collection</span>
              <Link href="/insights/retail-future" className="group inline-flex items-start gap-2 text-left mb-3">
                <h3 className="text-xl md:text-2xl lg:text-3xl eb-garamond font-bold text-charcoal leading-tight group-hover:text-primary transition-colors">
                  The Next Normal – The future of retail: Omnichannel, experiential, and resilient
                </h3>
                <span className="text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
              </Link>
              <span className="text-sm text-muted-foreground mb-4">November 3, 2025 —</span>
              <p className="text-charcoal/70 text-base leading-relaxed">
                Retail is being redefined by unified commerce, store reinvention, and supply chain resilience. This collection explores how retailers can deliver seamless experiences, leverage data for personalization, and build the operations that support growth in an omnichannel world.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { category: "Article", title: "The case for a clear ROI framework for omnichannel investments", link: "/insights/omnichannel-roi", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", alt: "Omnichannel retail" },
              { category: "Article", title: "Finding a route to profitability for store networks", link: "/insights/retail-profitability", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80", alt: "Retail stores" },
              { category: "Article", title: "The journey toward AI-enabled merchandising and demand", link: "/insights/ai-merchandising", image: "https://images.unsplash.com/photo-1556742111-301c43f8c686?w=600&q=80", alt: "Merchandising" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={item.link} className="group block">
                  <div className="overflow-hidden mb-4">
                    <img src={item.image} alt={item.alt} className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-2">{item.category}</span>
                  <h3 className="text-lg font-bold text-charcoal leading-snug group-hover:text-primary transition-colors flex items-start gap-2">
                    <span>{item.title}</span>
                    <span className="text-primary shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden>&gt;</span>
                  </h3>
                </Link>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
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
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                E-commerce & Digital Platforms
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Build modern e-commerce platforms that deliver exceptional customer experiences. From headless commerce architectures to progressive web apps, we help retailers create fast, flexible digital storefronts that drive conversion and enable rapid innovation.
              </p>
            </motion.div>

            {/* Merchandising & Assortment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                Merchandising & Assortment Optimization
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Optimize product assortments with AI-powered demand forecasting and localization. Our solutions help retailers stock the right products in the right locations—maximizing sales while minimizing markdowns and inventory costs.
              </p>
            </motion.div>

            {/* Pricing & Promotions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                Pricing & Promotions
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Optimize pricing and promotional strategies with AI-driven analytics. Our solutions help retailers set competitive prices, design effective promotions, and manage markdowns—maximizing margin while maintaining price perception.
              </p>
            </motion.div>

            {/* Loyalty & CRM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                Loyalty & Customer Engagement
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Build loyalty programs that drive engagement and lifetime value. From points-based programs to experiential rewards, we help retailers create emotional connections with customers that translate into repeat purchases and advocacy.
              </p>
            </motion.div>

            {/* Last Mile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                Last-Mile & Fulfillment
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Optimize last-mile delivery and fulfillment operations. From micro-fulfillment centers to crowd-sourced delivery, we help retailers meet customer expectations for speed and convenience while managing costs.
              </p>
            </motion.div>

            {/* Store Technology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t-2 border-base/10 pt-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4 decoration-primary decoration-2 underline-offset-4">
                Store Technology & Innovation
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Reimagine the store experience with innovative technology. From checkout-free stores to augmented reality fitting rooms, we help retailers create differentiated in-store experiences that drive traffic and conversion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Stories - Examples of our work style */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-12 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-xl md:text-2xl font-semibold uppercase tracking-wide text-charcoal mb-10 md:mb-14"
          >
            Examples of Our Work
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-[21/9] min-h-[200px] mb-10 md:mb-14 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
              alt=""
              className="w-full h-full object-cover grayscale"
              aria-hidden
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { title: "Reducing inventory costs", body: "A national grocery chain deployed our AI-powered demand forecasting solution across 800 stores. The system predicts demand at the SKU-store level, automatically generates replenishment orders, and optimizes safety stock—reducing inventory costs while virtually eliminating stockouts on key items." },
              { title: "Driving loyalty engagement", body: "A specialty retailer reimagined their loyalty program with our help. We built a unified customer data platform, implemented AI-powered personalization, and created a mobile-first engagement experience that significantly increased active members and customer lifetime value." },
              { title: "Optimizing assortment and space", body: "We helped a retailer use machine learning to optimize assortment and space at store level. The approach leveraged multiple data sets including geolocation to generate demand estimates and improve sales and margin performance." },
              { title: "Unifying omnichannel experience", body: "A department store chain unified online and in-store inventory and fulfillment. Customers can buy anywhere and fulfill anywhere; the result was higher conversion, fewer lost sales, and a seamless brand experience." },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-base md:text-lg font-bold text-charcoal mb-3">
                  {story.title}
                </h3>
                <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">
                  {story.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured experts */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eb-garamond font-bold text-charcoal text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16"
          >
            Featured experts
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "Alastair Green",
                title: "Senior Partner, Washington DC",
                description: "Leads our retail and consumer practice, with deep expertise in omnichannel strategy, digital commerce, and customer experience transformation.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
              },
              {
                name: "Ishaan Nangia",
                title: "Senior Partner, Melbourne",
                description: "Specializes in retail operations, supply chain optimization, and store network strategy for global retailers and e-commerce leaders.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
              },
              {
                name: "Nicola Sandri",
                title: "Senior Partner, Milan",
                description: "Focuses on fashion and luxury retail, merchandising excellence, and international expansion for premium and lifestyle brands.",
                image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80"
              }
            ].map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-border p-6 md:p-8 flex flex-col items-center text-center"
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="eb-garamond font-bold text-charcoal text-xl md:text-2xl mb-1">
                  {expert.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {expert.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-4">
                  {expert.description}
                </p>
                <a
                  href={`mailto:contact@nexdyne.com?subject=Contact ${expert.name}`}
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-200 ease-in-out"
                  aria-label={`Email ${expert.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-12 md:mt-16"
          >
            <Link href="/our-people">
              <button
                type="button"
                className="px-6 py-3 bg-white border border-primary text-primary font-semibold rounded-md hover:bg-primary/10 transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                More experts
              </button>
            </Link>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
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
                  <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-semibold">
                    Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-20 md:py-28 bg-subtle">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl eb-garamond font-bold text-charcoal mb-6">
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
                <Link href={industry.link} className="group block bg-white p-6 hover:bg-base transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary group-hover:text-white/60 transition-colors">
                        Industry
                      </span>
                      <h3 className="text-lg font-bold text-charcoal group-hover:text-white transition-colors mt-1">
                        {industry.title}
                      </h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-charcoal/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-base">
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
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold bg-transparent transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
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
