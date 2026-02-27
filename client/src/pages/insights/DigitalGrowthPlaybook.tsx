import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, TrendingUp, Target, Rocket, BarChart3, CheckCircle2, Layers, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import SocialShare from "@/components/SocialShare";

export default function DigitalGrowthPlaybook() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="The Digital Growth Playbook for Mid-Market Companies" 
        description="How leading mid-market companies are building digital channels that compete with well-funded startups and enterprise incumbents."
        canonical="/insights/digital-growth-playbook"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-base">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" 
            alt="Digital Growth Analytics" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
        </div>
        
        <div className="container px-4 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/solutions/accelerating-business-growth">
              <span className="inline-flex items-center text-sm text-white/60 hover:text-primary transition-colors mb-6 cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Accelerating Business Growth
              </span>
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-primary font-semibold mb-6">
              <span className="uppercase tracking-wider">Article</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-white/60">8 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-4">
              The digital growth playbook for mid-market companies
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              How leading mid-market companies are building digital channels that compete with well-funded startups and enterprise incumbents.
            </p>
            
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Growth Strategy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 15, 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-12">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-3 hidden md:block">
              <div className="sticky top-32">
                <h4 className="font-bold text-charcoal mb-4">Table of Contents</h4>
                <ul className="space-y-3 text-sm text-charcoal/60 border-l border-base/10 pl-4">
                  <li className="hover:text-primary cursor-pointer">The Mid-Market Advantage</li>
                  <li className="hover:text-primary cursor-pointer">Digital Channel Strategy</li>
                  <li className="hover:text-primary cursor-pointer">The Growth Framework</li>
                  <li className="hover:text-primary cursor-pointer">Technology Choices</li>
                  <li className="hover:text-primary cursor-pointer">Measuring Success</li>
                  <li className="hover:text-primary cursor-pointer">Case Examples</li>
                </ul>
                
                <div className="mt-12">
                  <h4 className="font-bold text-charcoal mb-4">Share this insight</h4>
                  <SocialShare 
                    title="The Digital Growth Playbook for Mid-Market Companies" 
                    url="https://nexdyne.com/insights/digital-growth-playbook" 
                  />
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="md:col-span-7">
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-charcoal/70 mb-8">
                  Mid-market companies face a unique challenge: they're too large to ignore digital transformation, but often lack the resources of enterprise competitors or the agility of startups. Yet this position can be an advantage—if you know how to leverage it.
                </p>
                
                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">The Mid-Market Advantage</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Companies with 100-500 employees occupy a strategic sweet spot. Unlike startups, you have established customer relationships, proven products, and operational infrastructure. Unlike enterprises, you can make decisions quickly, implement changes without bureaucratic overhead, and pivot when market conditions demand it.
                </p>
                <p className="text-charcoal/70 leading-relaxed mb-8">
                  The most successful mid-market digital transformations leverage this position by combining startup-like speed with enterprise-grade execution. They don't try to out-spend larger competitors—they out-maneuver them.
                </p>

                <div className="bg-subtle p-8 rounded-xl border border-base/10 my-10">
                  <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Mid-Market Digital Growth Statistics
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-serif font-bold text-primary">67%</div>
                      <div className="text-sm text-charcoal/60">of mid-market companies plan to increase digital investment</div>
                    </div>
                    <div>
                      <div className="text-3xl font-serif font-bold text-primary">3.2x</div>
                      <div className="text-sm text-charcoal/60">faster growth for digitally mature mid-market firms</div>
                    </div>
                    <div>
                      <div className="text-3xl font-serif font-bold text-primary">42%</div>
                      <div className="text-sm text-charcoal/60">report digital channels as primary growth driver</div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Digital Channel Strategy</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  The first step in any digital growth initiative is choosing the right channels. Not every business needs a mobile app, and not every product sells well through e-commerce. The key is matching channel investment to customer behavior and competitive dynamics.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "Direct-to-Consumer E-commerce",
                      description: "Ideal for product companies with strong brands and repeat purchase potential. Requires investment in logistics, customer service, and digital marketing."
                    },
                    {
                      title: "B2B Digital Ordering",
                      description: "Perfect for distributors and manufacturers with existing customer relationships. Focus on self-service, integration with customer systems, and personalized pricing."
                    },
                    {
                      title: "Marketplace Participation",
                      description: "Lower barrier to entry for companies testing digital channels. Amazon, industry-specific marketplaces, or building your own platform."
                    },
                    {
                      title: "Subscription/Recurring Revenue",
                      description: "Transform one-time transactions into ongoing relationships. Works for services, consumables, and software-enabled products."
                    }
                  ].map((channel, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-subtle rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{channel.title}</h4>
                        <p className="text-charcoal/60 text-sm">{channel.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">The Growth Framework</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Successful digital growth follows a predictable pattern. We've codified this into a framework that guides investment decisions and resource allocation:
                </p>

                <div className="bg-base p-8 rounded-xl my-10 text-white">
                  <h4 className="font-bold mb-6 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary" />
                    The SCALE Framework
                  </h4>
                  <div className="space-y-6">
                    {[
                      { letter: "S", title: "Strategy", description: "Define your digital value proposition and competitive positioning" },
                      { letter: "C", title: "Capabilities", description: "Build or acquire the technology, talent, and processes needed" },
                      { letter: "A", title: "Acquisition", description: "Drive traffic and convert visitors into customers" },
                      { letter: "L", title: "Loyalty", description: "Retain customers and maximize lifetime value" },
                      { letter: "E", title: "Expansion", description: "Scale what works and enter new markets or channels" }
                    ].map((step, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {step.letter}
                        </div>
                        <div>
                          <h5 className="font-bold text-white">{step.title}</h5>
                          <p className="text-white/60 text-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Technology Choices That Matter</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  The technology landscape for digital commerce has never been more complex—or more powerful. Mid-market companies need to make strategic choices about platforms, architecture, and build-vs-buy decisions.
                </p>
                <p className="text-charcoal/70 leading-relaxed mb-8">
                  Our recommendation: start with composable, API-first platforms that allow you to add capabilities incrementally. Avoid monolithic suites that lock you into a single vendor's roadmap. The goal is flexibility—the ability to swap out components as your needs evolve.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <div className="p-6 bg-subtle rounded-xl">
                    <Rocket className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold text-charcoal mb-2">Quick Wins (0-6 months)</h4>
                    <ul className="text-sm text-charcoal/60 space-y-2">
                      <li>• Launch basic e-commerce on Shopify/BigCommerce</li>
                      <li>• Implement marketing automation</li>
                      <li>• Set up analytics and tracking</li>
                      <li>• Create customer self-service portal</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-subtle rounded-xl">
                    <Globe className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold text-charcoal mb-2">Strategic Investments (6-18 months)</h4>
                    <ul className="text-sm text-charcoal/60 space-y-2">
                      <li>• Migrate to headless commerce architecture</li>
                      <li>• Build custom integrations with ERP/CRM</li>
                      <li>• Implement personalization engine</li>
                      <li>• Develop mobile app or PWA</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Measuring Success</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Digital growth initiatives fail when companies focus on vanity metrics instead of business outcomes. We recommend tracking a balanced scorecard of leading and lagging indicators:
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-base/10">
                        <th className="text-left py-3 font-bold text-charcoal">Metric Category</th>
                        <th className="text-left py-3 font-bold text-charcoal">Leading Indicators</th>
                        <th className="text-left py-3 font-bold text-charcoal">Lagging Indicators</th>
                      </tr>
                    </thead>
                    <tbody className="text-charcoal/70">
                      <tr className="border-b border-base/10">
                        <td className="py-3">Acquisition</td>
                        <td className="py-3">Traffic, CAC, Conversion Rate</td>
                        <td className="py-3">New Customer Revenue</td>
                      </tr>
                      <tr className="border-b border-base/10">
                        <td className="py-3">Engagement</td>
                        <td className="py-3">Session Duration, Pages/Visit</td>
                        <td className="py-3">Repeat Purchase Rate</td>
                      </tr>
                      <tr className="border-b border-base/10">
                        <td className="py-3">Retention</td>
                        <td className="py-3">NPS, Support Tickets</td>
                        <td className="py-3">Customer Lifetime Value</td>
                      </tr>
                      <tr>
                        <td className="py-3">Profitability</td>
                        <td className="py-3">Gross Margin, AOV</td>
                        <td className="py-3">Digital Channel Contribution</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Real-World Examples</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  The principles in this playbook aren't theoretical—they're drawn from dozens of mid-market digital transformations we've led. Here are three examples that illustrate different paths to digital growth:
                </p>

                <div className="space-y-6 my-8">
                  <div className="p-6 border border-base/10 rounded-xl">
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                      <Target className="w-4 h-4" />
                      SPECIALTY RETAIL
                    </div>
                    <h4 className="font-bold text-charcoal mb-2">Outdoor Gear Retailer: 180% Online Revenue Growth</h4>
                    <p className="text-charcoal/60 text-sm">
                      A 135-employee retailer launched e-commerce in 10 weeks, growing from $0 to $3.2M in digital revenue within 18 months. Key success factors: omnichannel inventory, personalized recommendations, and buy-online-pickup-in-store.
                    </p>
                  </div>
                  <div className="p-6 border border-base/10 rounded-xl">
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                      <Target className="w-4 h-4" />
                      B2B DISTRIBUTION
                    </div>
                    <h4 className="font-bold text-charcoal mb-2">Industrial Supplier: $4.5M New Revenue</h4>
                    <p className="text-charcoal/60 text-sm">
                      A 220-employee distributor built a B2B ordering platform with customer-specific pricing and real-time inventory. 58% of orders now come through self-service, freeing sales reps to focus on new business.
                    </p>
                  </div>
                  <div className="p-6 border border-base/10 rounded-xl">
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                      <Target className="w-4 h-4" />
                      PROFESSIONAL SERVICES
                    </div>
                    <h4 className="font-bold text-charcoal mb-2">Training Company: $1.8M ARR Subscription Platform</h4>
                    <p className="text-charcoal/60 text-sm">
                      A training company transformed from one-time workshops to a subscription model with 2,400 active members. The platform now generates predictable recurring revenue and has tripled company valuation.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Getting Started</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Digital growth doesn't require a massive upfront investment. The most successful mid-market companies start with a focused pilot, prove the model, and then scale. Here's how to begin:
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-charcoal/70 mb-8">
                  <li><strong>Audit your current state:</strong> Where are customers already trying to engage digitally? What are competitors doing?</li>
                  <li><strong>Identify your wedge:</strong> What's the smallest viable digital initiative that could prove the business case?</li>
                  <li><strong>Build the team:</strong> You need a product owner, technical lead, and executive sponsor at minimum.</li>
                  <li><strong>Set 90-day goals:</strong> Define success metrics and commit to a rapid learning cycle.</li>
                  <li><strong>Launch and iterate:</strong> Get something live quickly, then improve based on real customer feedback.</li>
                </ol>

                <div className="bg-primary/10 p-8 rounded-xl my-10">
                  <h4 className="font-bold text-charcoal mb-4">Ready to accelerate your digital growth?</h4>
                  <p className="text-charcoal/70 mb-6">
                    NEXDYNE helps mid-market companies build digital channels that drive measurable revenue growth. Let's discuss your specific situation.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="md:col-span-2 hidden lg:block">
              <div className="sticky top-32">
                <div className="p-6 bg-subtle rounded-xl">
                  <h4 className="font-bold text-charcoal mb-4">Related Case Studies</h4>
                  <div className="space-y-4">
                    <Link href="/cases/retail-ecommerce-growth">
                      <div className="group cursor-pointer">
                        <p className="text-sm font-semibold text-charcoal group-hover:text-primary transition-colors">Outdoor Gear E-commerce</p>
                        <p className="text-xs text-charcoal/60">180% revenue growth</p>
                      </div>
                    </Link>
                    <Link href="/cases/b2b-digital-ordering">
                      <div className="group cursor-pointer">
                        <p className="text-sm font-semibold text-charcoal group-hover:text-primary transition-colors">B2B Digital Ordering</p>
                        <p className="text-xs text-charcoal/60">$4.5M new revenue</p>
                      </div>
                    </Link>
                    <Link href="/cases/training-subscription-platform">
                      <div className="group cursor-pointer">
                        <p className="text-sm font-semibold text-charcoal group-hover:text-primary transition-colors">Subscription Platform</p>
                        <p className="text-xs text-charcoal/60">$1.8M ARR</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Insights */}
      <RelatedContent
        title="Related Insights"
        items={[
          {
            type: "Article",
            title: "E-commerce economics: Building profitable D2C channels",
            description: "The unit economics, technology choices, and operational considerations that determine D2C success.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
            link: "/insights/ecommerce-economics"
          },
          {
            type: "Whitepaper",
            title: "The marketplace playbook: Building network effects",
            description: "A comprehensive guide to launching and scaling two-sided marketplaces.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            link: "/insights/marketplace-playbook"
          },
          {
            type: "Article",
            title: "From MVP to scale: The startup growth journey",
            description: "How to navigate the critical transitions from product-market fit to sustainable growth.",
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
            link: "/insights/from-mvp-to-scale"
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to accelerate your growth?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's build a digital growth strategy that creates new revenue streams and competitive advantages.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold transition-all">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
