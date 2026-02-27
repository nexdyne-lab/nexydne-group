import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, DollarSign, ShoppingCart, TrendingUp, Package, Truck, CheckCircle2, Calculator, BarChart3, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import SocialShare from "@/components/SocialShare";

export default function EcommerceEconomics() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="E-commerce Economics: Building Profitable D2C Channels" 
        description="The unit economics, technology choices, and operational considerations that determine D2C success."
        canonical="/insights/ecommerce-economics"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-base">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80" 
            alt="E-commerce Shopping" 
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
              <span className="text-white/60">10 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-4">
              E-commerce economics: Building profitable D2C channels
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              The unit economics, technology choices, and operational considerations that determine D2C success.
            </p>
            
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Commerce Strategy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>November 28, 2025</span>
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
                  <li className="hover:text-primary cursor-pointer">The D2C Opportunity</li>
                  <li className="hover:text-primary cursor-pointer">Unit Economics Fundamentals</li>
                  <li className="hover:text-primary cursor-pointer">Customer Acquisition</li>
                  <li className="hover:text-primary cursor-pointer">Fulfillment & Operations</li>
                  <li className="hover:text-primary cursor-pointer">Technology Stack</li>
                  <li className="hover:text-primary cursor-pointer">Path to Profitability</li>
                </ul>
                
                <div className="mt-12">
                  <h4 className="font-bold text-charcoal mb-4">Share this insight</h4>
                  <SocialShare 
                    title="E-commerce Economics: Building Profitable D2C Channels" 
                    url="https://nexdyne.com/insights/ecommerce-economics" 
                  />
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="md:col-span-7">
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-charcoal/70 mb-8">
                  Direct-to-consumer (D2C) e-commerce promises higher margins, direct customer relationships, and valuable first-party data. But the path to profitability is littered with companies that underestimated the complexity of building a sustainable D2C business.
                </p>
                
                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">The D2C Opportunity</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Traditional retail channels take 40-60% of the final sale price. Marketplaces like Amazon charge 15-45% in fees. D2C promises to capture that margin—but only if you can acquire customers efficiently and operate at scale.
                </p>
                <p className="text-charcoal/70 leading-relaxed mb-8">
                  The companies that succeed in D2C share common characteristics: strong brand identity, products with natural replenishment cycles, and the operational discipline to manage complex logistics. Those that fail typically underestimate customer acquisition costs or overestimate their ability to compete with established players.
                </p>

                <div className="bg-subtle p-8 rounded-xl border border-base/10 my-10">
                  <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    D2C vs. Traditional Retail Margin Comparison
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="w-32 text-sm text-charcoal/60">Traditional Retail</span>
                      <div className="flex-1 bg-base/10 rounded-full h-6 overflow-hidden">
                        <div className="bg-base/40 h-full rounded-full" style={{ width: '35%' }}></div>
                      </div>
                      <span className="w-16 text-sm font-semibold text-charcoal">35%</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-32 text-sm text-charcoal/60">Marketplace</span>
                      <div className="flex-1 bg-base/10 rounded-full h-6 overflow-hidden">
                        <div className="bg-primary/60 h-full rounded-full" style={{ width: '50%' }}></div>
                      </div>
                      <span className="w-16 text-sm font-semibold text-charcoal">50%</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-32 text-sm text-charcoal/60">D2C E-commerce</span>
                      <div className="flex-1 bg-base/10 rounded-full h-6 overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <span className="w-16 text-sm font-semibold text-primary">70%</span>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal/50 mt-4">*Gross margin before customer acquisition and fulfillment costs</p>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Unit Economics Fundamentals</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Before launching a D2C channel, you need to model the unit economics rigorously. The key metrics that determine profitability:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  {[
                    {
                      icon: <Calculator className="w-6 h-6 text-primary" />,
                      title: "Customer Acquisition Cost (CAC)",
                      description: "Total marketing spend divided by new customers acquired. Benchmark: $30-100 for most consumer products."
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6 text-primary" />,
                      title: "Customer Lifetime Value (LTV)",
                      description: "Total revenue from a customer over their relationship. Target: LTV:CAC ratio of 3:1 or higher."
                    },
                    {
                      icon: <ShoppingCart className="w-6 h-6 text-primary" />,
                      title: "Average Order Value (AOV)",
                      description: "Revenue per transaction. Higher AOV improves unit economics by spreading fixed costs."
                    },
                    {
                      icon: <Package className="w-6 h-6 text-primary" />,
                      title: "Contribution Margin",
                      description: "Revenue minus variable costs (COGS, shipping, payment processing). Target: 40%+ for sustainability."
                    }
                  ].map((metric, index) => (
                    <div key={index} className="p-6 bg-subtle rounded-xl">
                      <div className="mb-4">{metric.icon}</div>
                      <h4 className="font-bold text-charcoal mb-2">{metric.title}</h4>
                      <p className="text-charcoal/60 text-sm">{metric.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-base p-8 rounded-xl my-10 text-white">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Sample Unit Economics Model
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/70">Average Order Value</span>
                      <span className="font-semibold">$85.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/70">Cost of Goods Sold (35%)</span>
                      <span className="font-semibold">-$29.75</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/70">Shipping & Fulfillment</span>
                      <span className="font-semibold">-$8.50</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/70">Payment Processing (3%)</span>
                      <span className="font-semibold">-$2.55</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/70">Returns & Refunds (8%)</span>
                      <span className="font-semibold">-$6.80</span>
                    </div>
                    <div className="flex justify-between py-2 text-primary">
                      <span className="font-bold">Contribution Margin</span>
                      <span className="font-bold">$37.40 (44%)</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Customer Acquisition Strategy</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Customer acquisition is where most D2C businesses struggle. The days of cheap Facebook ads are over—CACs have increased 60% over the past three years. Successful D2C brands diversify their acquisition channels:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "Paid Social (Meta, TikTok)",
                      pros: "Scalable, precise targeting, measurable",
                      cons: "Expensive, increasing competition, privacy changes",
                      cac: "$40-80"
                    },
                    {
                      title: "Paid Search (Google, Bing)",
                      pros: "High intent, predictable, brand protection",
                      cons: "Limited scale, expensive for competitive terms",
                      cac: "$30-60"
                    },
                    {
                      title: "Influencer Marketing",
                      pros: "Authentic, builds brand, can be cost-effective",
                      cons: "Hard to scale, attribution challenges",
                      cac: "$20-50"
                    },
                    {
                      title: "Content/SEO",
                      pros: "Low marginal cost, compounds over time",
                      cons: "Slow to build, requires expertise",
                      cac: "$10-30"
                    },
                    {
                      title: "Referral Programs",
                      pros: "High quality customers, low cost",
                      cons: "Limited scale, requires existing base",
                      cac: "$15-25"
                    }
                  ].map((channel, index) => (
                    <div key={index} className="p-4 border border-base/10 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-charcoal">{channel.title}</h4>
                        <span className="text-sm font-semibold text-primary">CAC: {channel.cac}</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-secondary font-semibold">+</span>
                          <span className="text-charcoal/60 ml-2">{channel.pros}</span>
                        </div>
                        <div>
                          <span className="text-destructive font-semibold">-</span>
                          <span className="text-charcoal/60 ml-2">{channel.cons}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Fulfillment & Operations</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Fulfillment is often the hidden killer of D2C profitability. Customers expect Amazon-level speed and service, but few mid-market companies can match that infrastructure. Your options:
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-base/10">
                        <th className="text-left py-3 font-bold text-charcoal">Model</th>
                        <th className="text-left py-3 font-bold text-charcoal">Best For</th>
                        <th className="text-left py-3 font-bold text-charcoal">Cost/Order</th>
                        <th className="text-left py-3 font-bold text-charcoal">Control</th>
                      </tr>
                    </thead>
                    <tbody className="text-charcoal/70">
                      <tr className="border-b border-base/10">
                        <td className="py-3 font-semibold">In-house</td>
                        <td className="py-3">High volume, custom packaging</td>
                        <td className="py-3">$3-6</td>
                        <td className="py-3">High</td>
                      </tr>
                      <tr className="border-b border-base/10">
                        <td className="py-3 font-semibold">3PL</td>
                        <td className="py-3">Scaling businesses, variable demand</td>
                        <td className="py-3">$5-10</td>
                        <td className="py-3">Medium</td>
                      </tr>
                      <tr className="border-b border-base/10">
                        <td className="py-3 font-semibold">FBA</td>
                        <td className="py-3">Amazon-centric, Prime eligibility</td>
                        <td className="py-3">$8-15</td>
                        <td className="py-3">Low</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">Drop Ship</td>
                        <td className="py-3">Testing products, low capital</td>
                        <td className="py-3">Varies</td>
                        <td className="py-3">Very Low</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Technology Stack Decisions</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Your technology choices have long-term implications for scalability, cost, and flexibility. The key decision is between all-in-one platforms and composable commerce:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="p-6 border border-base/10 rounded-xl">
                    <h4 className="font-bold text-charcoal mb-4">All-in-One Platforms</h4>
                    <p className="text-sm text-charcoal/60 mb-4">Shopify, BigCommerce, Squarespace</p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" /> Fast time to market</li>
                      <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" /> Lower upfront cost</li>
                      <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" /> Built-in best practices</li>
                      <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-destructive flex-shrink-0" /> Limited customization</li>
                      <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-destructive flex-shrink-0" /> Transaction fees add up</li>
                    </ul>
                  </div>
                  <div className="p-6 border border-base/10 rounded-xl">
                    <h4 className="font-bold text-charcoal mb-4">Composable Commerce</h4>
                    <p className="text-sm text-charcoal/60 mb-4">Headless + best-of-breed components</p>
                    <ul className="space-y-2 text-sm text-charcoal/70">
                      <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" /> Maximum flexibility</li>
                      <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" /> Better performance</li>
                      <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" /> No vendor lock-in</li>
                      <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-destructive flex-shrink-0" /> Higher complexity</li>
                      <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-destructive flex-shrink-0" /> Requires technical team</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Path to Profitability</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Most D2C businesses lose money in year one. The path to profitability requires disciplined focus on a few key levers:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "Increase Repeat Purchase Rate",
                      description: "Subscription models, loyalty programs, and email marketing can increase LTV by 2-3x without increasing CAC."
                    },
                    {
                      title: "Optimize Conversion Rate",
                      description: "A/B testing, site speed improvements, and checkout optimization can improve conversion by 20-50%."
                    },
                    {
                      title: "Reduce Returns",
                      description: "Better product descriptions, sizing guides, and quality control can cut returns from 15% to 5%."
                    },
                    {
                      title: "Negotiate Shipping Rates",
                      description: "As volume grows, negotiate better rates with carriers. Consider zone-skipping and regional carriers."
                    },
                    {
                      title: "Diversify Acquisition",
                      description: "Reduce dependence on paid social by investing in content, SEO, and referral programs."
                    }
                  ].map((lever, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-subtle rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{lever.title}</h4>
                        <p className="text-charcoal/60 text-sm">{lever.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 p-8 rounded-xl my-10">
                  <h4 className="font-bold text-charcoal mb-4">Ready to build a profitable D2C channel?</h4>
                  <p className="text-charcoal/70 mb-6">
                    NEXDYNE helps companies launch and scale e-commerce operations with sustainable unit economics. Let's model your opportunity.
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
            title: "The digital growth playbook for mid-market companies",
            description: "How leading mid-market companies are building digital channels that compete with well-funded startups.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            link: "/insights/digital-growth-playbook"
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
            title: "Headless commerce: The engineering case",
            description: "Why decoupling your frontend from your backend is the key to agility and speed.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
            link: "/insights/headless-commerce-guide"
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
              Ready to launch your D2C channel?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's build an e-commerce operation with sustainable unit economics and a clear path to profitability.
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
