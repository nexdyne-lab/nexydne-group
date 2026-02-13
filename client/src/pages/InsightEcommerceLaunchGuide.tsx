import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, User, Linkedin, Twitter, Facebook, ShoppingCart, Package, CreditCard, BarChart3, CheckCircle, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function InsightEcommerceLaunchGuide() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="E-commerce Launch Guide: Zero to Revenue in 90 Days | Insights" 
        description="A practical guide for launching e-commerce capabilities quickly and effectively, from platform selection to first revenue."
        canonical="/insights/ecommerce-launch-guide"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#051C2C] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#051C2C] via-[#0a2940] to-[#051C2C]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent" />
        </div>
        
        <div className="container px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/solutions/accelerating-business-growth">
              <span className="inline-flex items-center text-sm text-white/60 hover:text-[#0077B5] transition-colors mb-6 cursor-pointer">
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Back to Accelerating Business Growth
              </span>
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider rounded-full">
                E-Commerce
              </span>
              <span className="px-3 py-1 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-wider rounded-full">
                Implementation
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-white leading-[1.1] mb-5 sm:mb-3 md:mb-4 eb-garamond">
              E-commerce launch guide: From zero to revenue in 90 days
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 sm:p-5 md:p-6 text-white/60 text-sm mb-5 sm:mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>NEXDYNE Growth Practice</span>
              </div>
              <span>January 2026</span>
            </div>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
              A practical, week-by-week guide for launching e-commerce capabilities quickly and effectively. Learn how to go from zero to generating revenue in just 90 days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-12 sm:py-16 md:py-20 lg:py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <div className="text-[#051C2C]/80 leading-relaxed space-y-6">
                  <p className="text-xl font-medium text-[#051C2C]">
                    Launching e-commerce doesn't have to take years or cost millions. With the right approach, you can go from zero to generating revenue in 90 days. This guide provides a practical, week-by-week roadmap based on our experience launching dozens of e-commerce initiatives.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    The 90-day framework
                  </h2>
                  
                  <p>
                    Our approach divides the launch into three phases: Foundation (weeks 1-4), Build (weeks 5-10), and Launch (weeks 11-12). Each phase has specific deliverables and decision points that keep the project on track.
                  </p>

                  <div className="bg-[#F8F9FA] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl my-10">
                    <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Why 90 Days?</h3>
                    <p className="text-[#051C2C]/70 mb-0">
                      90 days is long enough to build something meaningful but short enough to maintain momentum and urgency. Longer timelines often lead to scope creep, analysis paralysis, and lost market opportunity. The constraint forces focus on what truly matters for launch.
                    </p>
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    Phase 1: Foundation (Weeks 1-4)
                  </h2>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    Week 1: Strategy and requirements
                  </h3>
                  
                  <p>
                    Start by answering the fundamental questions that will guide every subsequent decision:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Who are your target customers?</strong> Define your ideal customer profile and their buying behavior</li>
                    <li><strong>What products will you sell online?</strong> Start focused—you can expand later</li>
                    <li><strong>How will you fulfill orders?</strong> Ship from warehouse, drop-ship, or hybrid?</li>
                    <li><strong>What's your pricing strategy?</strong> Same as retail, different, or dynamic?</li>
                    <li><strong>What are your success metrics?</strong> Revenue target, conversion rate, average order value?</li>
                  </ul>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 sm:p-5 md:p-6 my-8">
                    <h4 className="font-bold text-[#051C2C] mb-2">Pro Tip</h4>
                    <p className="text-[#051C2C]/70 mb-0 text-sm">
                      Don't try to replicate your entire product catalog online. Start with your top 20% of products that drive 80% of revenue. You can expand the catalog after launch based on customer demand.
                    </p>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    Week 2: Platform selection
                  </h3>
                  
                  <p>
                    Choose your e-commerce platform based on your specific needs. Here's a decision framework:
                  </p>

                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#051C2C] text-white">
                          <th className="p-4 text-left font-semibold">Platform</th>
                          <th className="p-4 text-left font-semibold">Best For</th>
                          <th className="p-4 text-left font-semibold">Timeline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="p-4 font-semibold">Shopify</td>
                          <td className="p-4 text-[#051C2C]/70">B2C, simple catalog, fast launch</td>
                          <td className="p-4 text-[#051C2C]/70">4-8 weeks</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <td className="p-4 font-semibold">Shopify Plus</td>
                          <td className="p-4 text-[#051C2C]/70">High-volume B2C, customization needs</td>
                          <td className="p-4 text-[#051C2C]/70">6-10 weeks</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="p-4 font-semibold">BigCommerce</td>
                          <td className="p-4 text-[#051C2C]/70">B2B features, complex pricing</td>
                          <td className="p-4 text-[#051C2C]/70">8-12 weeks</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <td className="p-4 font-semibold">WooCommerce</td>
                          <td className="p-4 text-[#051C2C]/70">WordPress integration, flexibility</td>
                          <td className="p-4 text-[#051C2C]/70">6-10 weeks</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold">Custom</td>
                          <td className="p-4 text-[#051C2C]/70">Unique requirements, full control</td>
                          <td className="p-4 text-[#051C2C]/70">12-20+ weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    Weeks 3-4: Design and planning
                  </h3>
                  
                  <p>
                    With strategy and platform decided, focus on design and detailed planning:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Create wireframes for key pages (home, category, product, cart, checkout)</li>
                    <li>Define the customer journey from discovery to purchase</li>
                    <li>Plan integrations (ERP, inventory, shipping, payment)</li>
                    <li>Prepare product data (images, descriptions, pricing, inventory)</li>
                    <li>Set up project management and communication tools</li>
                  </ul>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    Phase 2: Build (Weeks 5-10)
                  </h2>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    Weeks 5-6: Core platform setup
                  </h3>
                  
                  <p>
                    Get the foundation in place:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Set up the e-commerce platform and hosting</li>
                    <li>Install and configure the theme/design</li>
                    <li>Configure payment processing (Stripe, PayPal, etc.)</li>
                    <li>Set up shipping rules and carriers</li>
                    <li>Configure tax calculation</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    Weeks 7-8: Product catalog and content
                  </h3>
                  
                  <p>
                    Populate the store with products and content:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Import/create product listings with images and descriptions</li>
                    <li>Set up categories and navigation</li>
                    <li>Create essential pages (About, Contact, FAQ, Policies)</li>
                    <li>Implement search and filtering</li>
                    <li>Add trust signals (reviews, security badges, guarantees)</li>
                  </ul>

                  <div className="bg-[#051C2C] text-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl my-10">
                    <h3 className="text-xl font-serif font-bold mb-4">Content That Converts</h3>
                    <p className="text-white/80 mb-4">
                      Product pages are your sales team online. Invest in:
                    </p>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        High-quality images from multiple angles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        Detailed, benefit-focused descriptions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        Clear pricing and availability
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        Customer reviews and ratings
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    Weeks 9-10: Integrations and testing
                  </h3>
                  
                  <p>
                    Connect systems and ensure everything works:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Integrate with inventory/ERP systems</li>
                    <li>Set up email marketing (welcome, abandoned cart, order confirmation)</li>
                    <li>Configure analytics (Google Analytics, conversion tracking)</li>
                    <li>Test the complete purchase flow multiple times</li>
                    <li>Test on mobile devices (50%+ of traffic will be mobile)</li>
                    <li>Load testing if expecting significant traffic</li>
                  </ul>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    Phase 3: Launch (Weeks 11-12)
                  </h2>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    Week 11: Soft launch
                  </h3>
                  
                  <p>
                    Launch to a limited audience first:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Invite employees and close customers to test</li>
                    <li>Process real orders and fulfill them</li>
                    <li>Gather feedback and fix issues</li>
                    <li>Train customer service team</li>
                    <li>Finalize launch marketing materials</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    Week 12: Public launch
                  </h3>
                  
                  <p>
                    Go live to the world:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Announce to your customer base via email</li>
                    <li>Activate paid advertising campaigns</li>
                    <li>Promote on social media</li>
                    <li>Monitor performance closely</li>
                    <li>Be ready to respond quickly to issues</li>
                  </ul>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    Post-launch: The first 30 days
                  </h2>
                  
                  <p>
                    Launch is just the beginning. In the first 30 days after launch, focus on:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 sm:p-5 md:p-6 my-10">
                    {[
                      { icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Monitor Metrics", desc: "Track conversion rate, average order value, and traffic sources daily" },
                      { icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Fix Issues Fast", desc: "Address any technical issues or customer complaints immediately" },
                      { icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Optimize Conversion", desc: "A/B test headlines, images, and CTAs to improve conversion" },
                      { icon: <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Reduce Abandonment", desc: "Implement abandoned cart emails and exit-intent offers" }
                    ].map((item, index) => (
                      <div key={index} className="bg-[#F8F9FA] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl">
                        <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-lg flex items-center justify-center mb-4">
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-[#051C2C] mb-2">{item.title}</h4>
                        <p className="text-sm text-[#051C2C]/60 mb-0">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    Common pitfalls to avoid
                  </h2>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Perfectionism:</strong> Launch with "good enough" and iterate. Perfect is the enemy of done.</li>
                    <li><strong>Scope creep:</strong> Stick to the 90-day plan. Add features after launch.</li>
                    <li><strong>Ignoring mobile:</strong> Design mobile-first. Most traffic will be mobile.</li>
                    <li><strong>Weak product content:</strong> Invest in quality images and descriptions.</li>
                    <li><strong>No marketing plan:</strong> Build it and they won't come. Plan your launch marketing.</li>
                    <li><strong>Underestimating fulfillment:</strong> Test your fulfillment process before launch.</li>
                  </ul>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    Conclusion
                  </h2>
                  
                  <p>
                    Launching e-commerce in 90 days is ambitious but achievable. The key is maintaining focus, making decisions quickly, and accepting that you'll continue improving after launch. The companies that succeed are those that launch, learn, and iterate—not those that wait for perfection.
                  </p>
                  
                  <p>
                    Start with a clear strategy, choose the right platform for your needs, build systematically, and launch with confidence. Your first sale is just 90 days away.
                  </p>
                </div>
              </motion.article>

              {/* Author Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 p-4 sm:p-6 md:p-8 bg-[#F8F9FA] rounded-lg sm:rounded-xl"
              >
                <h3 className="text-lg font-serif font-bold mb-4">About the Author</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    NG
                  </div>
                  <div>
                    <p className="font-bold text-[#051C2C]">NEXDYNE Growth Practice</p>
                    <p className="text-[#051C2C]/60 text-sm mb-3">E-Commerce & Digital Growth</p>
                    <p className="text-[#051C2C]/70 text-sm">
                      Our Growth Practice has launched dozens of e-commerce initiatives for mid-market companies, consistently delivering results in 90 days or less.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Share */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-[#F8F9FA] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#051C2C]/60 mb-4">Share this article</h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-[#0077B5] text-white rounded-lg flex items-center justify-center hover:bg-[#005a8c] transition-colors">
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button className="w-10 h-10 bg-[#1DA1F2] text-white rounded-lg flex items-center justify-center hover:bg-[#0d8bd9] transition-colors">
                      <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button className="w-10 h-10 bg-[#4267B2] text-white rounded-lg flex items-center justify-center hover:bg-[#365899] transition-colors">
                      <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </motion.div>

                {/* 90-Day Checklist */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-[#051C2C] text-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">90-Day Timeline</h3>
                  <ul className="space-y-3">
                    {[
                      "Weeks 1-4: Foundation",
                      "Weeks 5-10: Build",
                      "Week 11: Soft Launch",
                      "Week 12: Public Launch"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-white/80">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Related Articles */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-[#F8F9FA] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#051C2C]/60 mb-4">Related Reading</h3>
                  <div className="space-y-4">
                    <Link href="/insights/digital-channels-growth">
                      <div className="group cursor-pointer">
                        <p className="font-semibold text-[#051C2C] group-hover:text-[#0077B5] transition-colors text-sm">
                          Digital channels driving revenue growth
                        </p>
                        <p className="text-xs text-[#051C2C]/60 mt-1">12 min read</p>
                      </div>
                    </Link>
                    <Link href="/insights/subscription-economy-playbook">
                      <div className="group cursor-pointer">
                        <p className="font-semibold text-[#051C2C] group-hover:text-[#0077B5] transition-colors text-sm">
                          The subscription economy playbook
                        </p>
                        <p className="text-xs text-[#051C2C]/60 mt-1">8 min read</p>
                      </div>
                    </Link>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl"
                >
                  <h3 className="font-serif font-bold text-lg mb-3">Ready to launch your e-commerce?</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Let's discuss how we can help you go from zero to revenue in 90 days.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-white text-amber-600 hover:bg-white/90 font-semibold">
                      Get Started
                      <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
