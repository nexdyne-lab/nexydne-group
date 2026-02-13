import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, User, Share2, Linkedin, Twitter, Facebook, BookOpen, TrendingUp, Target, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function InsightDigitalChannelsGrowth() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051C2C] selection:bg-[#0077B5] selection:text-white">
      <SEO 
        title="Digital Channels Driving Revenue Growth | Insights" 
        description="How mid-market companies are leveraging digital channels to drive 2-5x revenue growth through e-commerce, subscriptions, and platform businesses."
        canonical="/insights/digital-channels-growth"
      />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#051C2C] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#051C2C] via-[#0a2940] to-[#051C2C]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0077B5]/10 to-transparent" />
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
              <span className="px-3 py-1 bg-[#0077B5]/20 text-[#00A3E0] text-xs font-bold uppercase tracking-wider rounded-full">
                Digital Growth
              </span>
              <span className="px-3 py-1 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-wider rounded-full">
                Strategy
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-5 sm:mb-3 md:mb-4 eb-garamond">
              Digital channels driving revenue growth: A playbook for mid-market companies
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 sm:p-5 md:p-6 text-white/60 text-sm mb-5 sm:mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>NEXDYNE Growth Practice</span>
              </div>
              <span>January 2026</span>
            </div>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
              Mid-market companies are discovering that digital channels aren't just a nice-to-have—they're essential for sustainable growth. Here's how leading companies are achieving 2-5x revenue growth through strategic digital initiatives.
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
                    The digital transformation of commerce is no longer a future trend—it's the present reality. Mid-market companies that embrace digital channels are consistently outperforming their peers, achieving 2-5x revenue growth while reducing customer acquisition costs by 30-50%.
                  </p>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    The digital imperative for mid-market companies
                  </h2>
                  
                  <p>
                    For decades, mid-market companies competed on relationships, local presence, and service quality. These advantages haven't disappeared, but they're no longer sufficient. Today's buyers—whether consumers or business purchasers—expect digital convenience alongside traditional strengths.
                  </p>
                  
                  <p>
                    Our research across 200+ mid-market companies reveals a stark divide: companies with mature digital channels are growing revenue 3.2x faster than those without. More importantly, they're building sustainable competitive advantages that compound over time.
                  </p>

                  <div className="bg-[#F8F9FA] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl my-10">
                    <h3 className="text-xl font-serif font-bold text-[#051C2C] mb-4">Key Finding</h3>
                    <p className="text-[#051C2C]/70 mb-0">
                      Companies with mature digital channels grow revenue 3.2x faster than peers and achieve 40% higher customer lifetime value through improved retention and cross-sell opportunities.
                    </p>
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    Three digital channel strategies driving growth
                  </h2>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    1. E-commerce and direct-to-customer channels
                  </h3>
                  
                  <p>
                    The most immediate opportunity for most mid-market companies is launching or optimizing e-commerce capabilities. Whether B2C or B2B, digital ordering channels offer multiple benefits:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>24/7 availability:</strong> Customers can research, compare, and purchase on their schedule</li>
                    <li><strong>Geographic expansion:</strong> Reach customers beyond your physical footprint without opening new locations</li>
                    <li><strong>Data capture:</strong> Every interaction generates insights for personalization and optimization</li>
                    <li><strong>Margin improvement:</strong> Self-service ordering reduces cost-to-serve while maintaining or improving customer satisfaction</li>
                  </ul>

                  <p>
                    A specialty retailer we worked with launched e-commerce in 10 weeks and grew online revenue 180% in 18 months—adding $3.2M in incremental revenue while their physical stores continued to perform well.
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    2. Subscription and recurring revenue models
                  </h3>
                  
                  <p>
                    The subscription economy has expanded far beyond software. Companies across industries are transforming one-time transactions into ongoing relationships:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Predictable revenue:</strong> Monthly recurring revenue (MRR) enables better planning and investment</li>
                    <li><strong>Higher lifetime value:</strong> Subscribers typically generate 3-5x more revenue than one-time buyers</li>
                    <li><strong>Reduced acquisition costs:</strong> Retention is cheaper than acquisition, and subscriptions incentivize retention</li>
                    <li><strong>Valuation premium:</strong> Investors value recurring revenue businesses at 2-3x higher multiples</li>
                  </ul>

                  <p>
                    A professional training company we partnered with transformed from one-time workshops to a subscription learning platform. Within 12 months, they had 2,400 active members generating $1.8M in annual recurring revenue with 92% retention.
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    3. Platform and marketplace businesses
                  </h3>
                  
                  <p>
                    The most ambitious digital strategy involves building platforms that connect buyers and sellers, creating network effects that compound over time:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Network effects:</strong> Each new participant makes the platform more valuable for everyone</li>
                    <li><strong>Asset-light scaling:</strong> Grow transaction volume without proportional increases in inventory or headcount</li>
                    <li><strong>Data advantages:</strong> Platform operators see both sides of transactions, enabling superior matching and pricing</li>
                    <li><strong>Switching costs:</strong> Once integrated into workflows, platforms become difficult to replace</li>
                  </ul>

                  <div className="bg-[#051C2C] text-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl my-10">
                    <h3 className="text-xl font-serif font-bold mb-4">The Platform Opportunity</h3>
                    <p className="text-white/80 mb-0">
                      Companies that successfully build platform businesses often achieve valuations 5-10x higher than traditional businesses in the same industry, due to the scalability and defensibility of network effects.
                    </p>
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    Implementation: From strategy to execution
                  </h2>
                  
                  <p>
                    The biggest challenge isn't identifying the opportunity—it's executing effectively. Based on our experience with dozens of digital growth initiatives, here are the critical success factors:
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    Start with customer value, not technology
                  </h3>
                  
                  <p>
                    Too many digital initiatives fail because they start with technology decisions rather than customer needs. Before selecting platforms or building features, answer these questions:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>What friction exists in how customers currently buy from us?</li>
                    <li>What would make their experience significantly better?</li>
                    <li>What would make them choose us over alternatives?</li>
                    <li>How can we deliver more value more efficiently?</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    Launch fast, iterate faster
                  </h3>
                  
                  <p>
                    The companies achieving the best results launch minimum viable products in 8-12 weeks, then iterate based on real customer feedback. Perfectionism is the enemy of progress in digital initiatives.
                  </p>
                  
                  <p>
                    Our Growth Acceleration Framework emphasizes rapid validation: identify opportunities, build MVPs, test with real customers, and iterate to product-market fit before scaling. This approach minimizes risk while maximizing learning.
                  </p>

                  <h3 className="text-2xl font-serif font-bold text-[#051C2C] mt-8 mb-4">
                    Invest in growth capabilities
                  </h3>
                  
                  <p>
                    Building the digital channel is only half the battle. You also need capabilities to drive customer acquisition and retention:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Performance marketing:</strong> Paid search, social advertising, and retargeting to acquire customers efficiently</li>
                    <li><strong>Conversion optimization:</strong> A/B testing, user research, and analytics to maximize conversion rates</li>
                    <li><strong>Customer success:</strong> Onboarding, engagement, and retention programs to maximize lifetime value</li>
                    <li><strong>Data and analytics:</strong> Dashboards, attribution, and insights to guide decision-making</li>
                  </ul>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    Getting started: A practical roadmap
                  </h2>
                  
                  <p>
                    For mid-market companies ready to accelerate digital growth, we recommend a phased approach:
                  </p>

                  <div className="bg-[#F8F9FA] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl my-10">
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-bold text-[#051C2C] mb-1">Assess (2-4 weeks)</h4>
                          <p className="text-[#051C2C]/70 text-sm mb-0">Evaluate current digital capabilities, identify customer needs, and prioritize opportunities based on impact and feasibility.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-bold text-[#051C2C] mb-1">Design (4-6 weeks)</h4>
                          <p className="text-[#051C2C]/70 text-sm mb-0">Define the target customer experience, select technology platforms, and create a detailed implementation roadmap.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-bold text-[#051C2C] mb-1">Build (8-12 weeks)</h4>
                          <p className="text-[#051C2C]/70 text-sm mb-0">Develop MVP, integrate with existing systems, and prepare for launch with initial customer cohort.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-[#0077B5] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                        <div>
                          <h4 className="font-bold text-[#051C2C] mb-1">Scale (Ongoing)</h4>
                          <p className="text-[#051C2C]/70 text-sm mb-0">Iterate based on feedback, expand customer base, and continuously optimize for growth and efficiency.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-[#051C2C] mt-12 mb-6">
                    Conclusion
                  </h2>
                  
                  <p>
                    Digital channels are no longer optional for mid-market companies seeking sustainable growth. The companies that move decisively—launching e-commerce, building subscription offerings, or creating platform businesses—are pulling ahead of competitors who wait.
                  </p>
                  
                  <p>
                    The good news: it's never been easier to launch digital initiatives. Modern platforms, proven playbooks, and experienced partners can compress years of learning into months of execution. The question isn't whether to pursue digital growth, but how quickly you can get started.
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
                  <div className="w-16 h-16 bg-[#0077B5] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    NG
                  </div>
                  <div>
                    <p className="font-bold text-[#051C2C]">NEXDYNE Growth Practice</p>
                    <p className="text-[#051C2C]/60 text-sm mb-3">Digital Growth & E-Commerce</p>
                    <p className="text-[#051C2C]/70 text-sm">
                      Our Growth Practice helps mid-market companies launch and scale digital channels that drive sustainable revenue growth.
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

                {/* Key Takeaways */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-[#051C2C] text-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">Key Takeaways</h3>
                  <ul className="space-y-3">
                    {[
                      "Digital channels drive 3.2x faster revenue growth",
                      "E-commerce can launch in 8-12 weeks",
                      "Subscriptions increase LTV by 3-5x",
                      "Start with customer value, not technology"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-white/80">
                        <div className="w-1.5 h-1.5 bg-[#0077B5] rounded-full mt-2 flex-shrink-0" />
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
                    <Link href="/insights/subscription-economy-playbook">
                      <div className="group cursor-pointer">
                        <p className="font-semibold text-[#051C2C] group-hover:text-[#0077B5] transition-colors text-sm">
                          The subscription economy playbook for traditional businesses
                        </p>
                        <p className="text-xs text-[#051C2C]/60 mt-1">8 min read</p>
                      </div>
                    </Link>
                    <Link href="/insights/ecommerce-launch-guide">
                      <div className="group cursor-pointer">
                        <p className="font-semibold text-[#051C2C] group-hover:text-[#0077B5] transition-colors text-sm">
                          E-commerce launch guide: From zero to revenue in 90 days
                        </p>
                        <p className="text-xs text-[#051C2C]/60 mt-1">10 min read</p>
                      </div>
                    </Link>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-br from-[#0077B5] to-[#005a8c] text-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl"
                >
                  <h3 className="font-serif font-bold text-lg mb-3">Ready to accelerate your digital growth?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Schedule a consultation to discuss your digital growth opportunities.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-white text-[#0077B5] hover:bg-white/90 font-semibold">
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
