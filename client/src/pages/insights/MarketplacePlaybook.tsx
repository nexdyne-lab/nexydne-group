import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Users, Network, TrendingUp, Shield, CheckCircle2, Layers, Zap, Target, BarChart3, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RelatedContent } from "@/components/RelatedContent";
import SocialShare from "@/components/SocialShare";

export default function MarketplacePlaybook() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-primary selection:text-white">
      <SEO 
        title="The Marketplace Playbook: Building Network Effects" 
        description="A comprehensive guide to launching and scaling two-sided marketplaces that create sustainable competitive advantages."
        canonical="/insights/marketplace-playbook"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden bg-base">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80" 
            alt="Marketplace Analytics Dashboard" 
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
            
            <div className="flex items-center gap-4 text-sm text-violet-400 font-semibold mb-6">
              <span className="uppercase tracking-wider">Whitepaper</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-white/60">15 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              The marketplace playbook: Building network effects
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mb-10">
              A comprehensive guide to launching and scaling two-sided marketplaces that create sustainable competitive advantages.
            </p>
            
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Platform Strategy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>October 15, 2025</span>
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
                  <li className="hover:text-primary cursor-pointer">Why Marketplaces Win</li>
                  <li className="hover:text-primary cursor-pointer">The Chicken-and-Egg Problem</li>
                  <li className="hover:text-primary cursor-pointer">Network Effects Explained</li>
                  <li className="hover:text-primary cursor-pointer">Marketplace Business Models</li>
                  <li className="hover:text-primary cursor-pointer">Launch Strategies</li>
                  <li className="hover:text-primary cursor-pointer">Scaling the Platform</li>
                  <li className="hover:text-primary cursor-pointer">Governance & Trust</li>
                  <li className="hover:text-primary cursor-pointer">Metrics That Matter</li>
                </ul>
                
                <div className="mt-12">
                  <h4 className="font-bold text-charcoal mb-4">Share this insight</h4>
                  <SocialShare 
                    title="The Marketplace Playbook: Building Network Effects" 
                    url="https://nexdyne.com/insights/marketplace-playbook" 
                  />
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="md:col-span-7">
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="lead text-xl text-charcoal/70 mb-8">
                  Marketplaces are among the most valuable business models in the digital economy. Amazon, Airbnb, Uber, and Alibaba have created trillions in value by connecting buyers and sellers at scale. But for every successful marketplace, hundreds have failed. This playbook distills the strategies that separate winners from losers.
                </p>
                
                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Why Marketplaces Win</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Marketplaces create value by reducing friction between supply and demand. They aggregate fragmented markets, provide trust mechanisms, and enable transactions that wouldn't otherwise occur. When they work, they create powerful competitive moats through network effects.
                </p>
                <p className="text-charcoal/70 leading-relaxed mb-8">
                  The most successful marketplaces share common characteristics: they solve a genuine matching problem, they create value for both sides, and they become more valuable as they grow. Understanding these dynamics is essential before building.
                </p>

                <div className="bg-subtle p-8 rounded-xl border border-base/10 my-10">
                  <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                    <Network className="w-5 h-5 text-violet-500" />
                    Marketplace Value Creation
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-violet-500">$4.5T</div>
                      <div className="text-sm text-charcoal/60">Combined market cap of top 10 marketplaces</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-violet-500">70%</div>
                      <div className="text-sm text-charcoal/60">of unicorns are platform businesses</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-violet-500">2.5x</div>
                      <div className="text-sm text-charcoal/60">higher valuation multiples vs. linear businesses</div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">The Chicken-and-Egg Problem</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Every marketplace faces the same fundamental challenge: buyers won't come without sellers, and sellers won't come without buyers. Solving this "cold start" problem is the first and often most difficult hurdle.
                </p>

                <div className="bg-base p-8 rounded-xl my-10 text-white">
                  <h4 className="font-bold mb-6 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-violet-400" />
                    Cold Start Strategies
                  </h4>
                  <div className="space-y-6">
                    {[
                      { 
                        title: "Single-Player Mode", 
                        description: "Provide value to one side even without the other. Yelp started as a review site before becoming a marketplace." 
                      },
                      { 
                        title: "Subsidize the Hard Side", 
                        description: "Pay or incentivize the side that's harder to acquire. Uber subsidized drivers heavily in new markets." 
                      },
                      { 
                        title: "Seed Supply", 
                        description: "Create initial supply yourself. Amazon sold books directly before opening to third-party sellers." 
                      },
                      { 
                        title: "Constrain Geography", 
                        description: "Launch in a single market to achieve density. Airbnb started in San Francisco during conferences." 
                      },
                      { 
                        title: "Leverage Existing Networks", 
                        description: "Tap into communities that already exist. LinkedIn grew through professional networks." 
                      }
                    ].map((strategy, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="font-bold text-white">{strategy.title}</h5>
                          <p className="text-white/60 text-sm">{strategy.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Network Effects Explained</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Network effects occur when a product becomes more valuable as more people use it. In marketplaces, this typically manifests as cross-side network effects: more sellers attract more buyers, which attracts more sellers, creating a virtuous cycle.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  {[
                    {
                      icon: <Users className="w-6 h-6 text-violet-500" />,
                      title: "Direct Network Effects",
                      description: "Value increases with users on the same side. Social networks, communication tools."
                    },
                    {
                      icon: <Network className="w-6 h-6 text-violet-500" />,
                      title: "Cross-Side Network Effects",
                      description: "Value increases with users on the opposite side. Marketplaces, platforms."
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6 text-violet-500" />,
                      title: "Data Network Effects",
                      description: "More usage generates better data, improving the product. Search, recommendations."
                    },
                    {
                      icon: <Layers className="w-6 h-6 text-violet-500" />,
                      title: "Platform Network Effects",
                      description: "Third-party developers create additional value. App stores, APIs."
                    }
                  ].map((effect, index) => (
                    <div key={index} className="p-6 bg-subtle rounded-xl">
                      <div className="mb-4">{effect.icon}</div>
                      <h4 className="font-bold text-charcoal mb-2">{effect.title}</h4>
                      <p className="text-charcoal/60 text-sm">{effect.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Marketplace Business Models</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  How you monetize determines your incentives and growth trajectory. The most common models:
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-base/10">
                        <th className="text-left py-3 font-bold text-charcoal">Model</th>
                        <th className="text-left py-3 font-bold text-charcoal">How It Works</th>
                        <th className="text-left py-3 font-bold text-charcoal">Examples</th>
                        <th className="text-left py-3 font-bold text-charcoal">Take Rate</th>
                      </tr>
                    </thead>
                    <tbody className="text-charcoal/70">
                      <tr className="border-b border-base/10">
                        <td className="py-3 font-semibold">Transaction Fee</td>
                        <td className="py-3">Percentage of each transaction</td>
                        <td className="py-3">eBay, Airbnb, Uber</td>
                        <td className="py-3">5-30%</td>
                      </tr>
                      <tr className="border-b border-base/10">
                        <td className="py-3 font-semibold">Subscription</td>
                        <td className="py-3">Monthly/annual fee for access</td>
                        <td className="py-3">LinkedIn, Alibaba</td>
                        <td className="py-3">Fixed</td>
                      </tr>
                      <tr className="border-b border-base/10">
                        <td className="py-3 font-semibold">Listing Fee</td>
                        <td className="py-3">Fee to list products/services</td>
                        <td className="py-3">Etsy, Craigslist</td>
                        <td className="py-3">$0.20-$5</td>
                      </tr>
                      <tr className="border-b border-base/10">
                        <td className="py-3 font-semibold">Lead Generation</td>
                        <td className="py-3">Fee for qualified leads</td>
                        <td className="py-3">Thumbtack, Houzz</td>
                        <td className="py-3">$5-$100</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">Freemium</td>
                        <td className="py-3">Free basic, paid premium</td>
                        <td className="py-3">Indeed, Glassdoor</td>
                        <td className="py-3">Varies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Launch Strategies by Market Type</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  The right launch strategy depends on your market characteristics. Here's how to approach different scenarios:
                </p>

                <div className="space-y-6 my-8">
                  <div className="p-6 border border-base/10 rounded-xl">
                    <div className="flex items-center gap-2 text-violet-500 text-sm font-semibold mb-2">
                      <Target className="w-4 h-4" />
                      HIGH FRAGMENTATION
                    </div>
                    <h4 className="font-bold text-charcoal mb-2">Many Small Suppliers</h4>
                    <p className="text-charcoal/60 text-sm mb-4">
                      Markets with thousands of small suppliers (restaurants, contractors, freelancers) benefit from aggregation. Focus on making it easy for suppliers to join and manage their presence.
                    </p>
                    <div className="text-sm text-charcoal/70">
                      <strong>Strategy:</strong> Self-service onboarding, automated tools, mobile-first experience
                    </div>
                  </div>
                  <div className="p-6 border border-base/10 rounded-xl">
                    <div className="flex items-center gap-2 text-violet-500 text-sm font-semibold mb-2">
                      <Target className="w-4 h-4" />
                      HIGH VALUE TRANSACTIONS
                    </div>
                    <h4 className="font-bold text-charcoal mb-2">B2B or Enterprise</h4>
                    <p className="text-charcoal/60 text-sm mb-4">
                      Large transactions justify high-touch sales and white-glove service. Focus on trust, compliance, and integration with existing workflows.
                    </p>
                    <div className="text-sm text-charcoal/70">
                      <strong>Strategy:</strong> Direct sales, account management, enterprise features
                    </div>
                  </div>
                  <div className="p-6 border border-base/10 rounded-xl">
                    <div className="flex items-center gap-2 text-violet-500 text-sm font-semibold mb-2">
                      <Target className="w-4 h-4" />
                      LOCAL/GEOGRAPHIC
                    </div>
                    <h4 className="font-bold text-charcoal mb-2">Location-Dependent Services</h4>
                    <p className="text-charcoal/60 text-sm mb-4">
                      Services that require physical proximity need density in each market. Launch city-by-city and achieve critical mass before expanding.
                    </p>
                    <div className="text-sm text-charcoal/70">
                      <strong>Strategy:</strong> Hyper-local marketing, city launchers, geographic expansion playbook
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Scaling the Platform</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Once you've achieved product-market fit in your initial market, scaling requires different capabilities. The key challenges at scale:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "Quality Control",
                      description: "As supply grows, maintaining quality becomes harder. Implement ratings, reviews, and algorithmic quality scoring."
                    },
                    {
                      title: "Trust & Safety",
                      description: "Fraud, abuse, and bad actors increase with scale. Build robust verification, dispute resolution, and enforcement systems."
                    },
                    {
                      title: "Liquidity Management",
                      description: "Balance supply and demand across categories and geographies. Use pricing, incentives, and matching algorithms."
                    },
                    {
                      title: "Platform Leakage",
                      description: "Users may try to transact off-platform. Create enough value (payments, insurance, support) to keep transactions on-platform."
                    },
                    {
                      title: "Multi-Homing",
                      description: "Suppliers and buyers may use multiple platforms. Differentiate through unique features, better economics, or exclusive supply."
                    }
                  ].map((challenge, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-subtle rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-violet-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{challenge.title}</h4>
                        <p className="text-charcoal/60 text-sm">{challenge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Governance & Trust</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Marketplaces are mini-economies that require governance. The rules you set—and how you enforce them—determine the health of your ecosystem.
                </p>

                <div className="bg-base p-8 rounded-xl my-10 text-white">
                  <h4 className="font-bold mb-6 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-violet-400" />
                    Trust Architecture
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-violet-400 mb-3">Pre-Transaction Trust</h5>
                      <ul className="space-y-2 text-sm text-white/70">
                        <li>• Identity verification</li>
                        <li>• Background checks</li>
                        <li>• Portfolio/credential review</li>
                        <li>• Social proof (reviews, ratings)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-violet-400 mb-3">Post-Transaction Trust</h5>
                      <ul className="space-y-2 text-sm text-white/70">
                        <li>• Escrow/payment protection</li>
                        <li>• Dispute resolution</li>
                        <li>• Insurance/guarantees</li>
                        <li>• Feedback systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Metrics That Matter</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  Marketplace metrics differ from traditional SaaS or e-commerce. Focus on these key indicators:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  {[
                    {
                      metric: "GMV (Gross Merchandise Value)",
                      description: "Total value of transactions on the platform",
                      benchmark: "Growing 50%+ YoY in early stage"
                    },
                    {
                      metric: "Take Rate",
                      description: "Revenue as percentage of GMV",
                      benchmark: "5-30% depending on category"
                    },
                    {
                      metric: "Liquidity",
                      description: "Percentage of listings that result in transactions",
                      benchmark: "30%+ for healthy marketplace"
                    },
                    {
                      metric: "Time to Transaction",
                      description: "How quickly buyers find what they need",
                      benchmark: "Decreasing over time"
                    },
                    {
                      metric: "Repeat Rate",
                      description: "Percentage of users who transact again",
                      benchmark: "40%+ within 90 days"
                    },
                    {
                      metric: "NPS by Side",
                      description: "Satisfaction of buyers and sellers separately",
                      benchmark: "50+ for both sides"
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-4 border border-base/10 rounded-lg">
                      <h4 className="font-bold text-charcoal mb-1">{item.metric}</h4>
                      <p className="text-charcoal/60 text-sm mb-2">{item.description}</p>
                      <p className="text-xs text-violet-500 font-semibold">{item.benchmark}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Case Example: B2B Industrial Marketplace</h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  A NEXDYNE client built a B2B marketplace connecting industrial manufacturers with distributors across Africa. Here's how they applied these principles:
                </p>

                <div className="bg-subtle p-8 rounded-xl my-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-charcoal mb-4">Launch Strategy</h4>
                      <ul className="space-y-2 text-sm text-charcoal/70">
                        <li>• Started with single product category (industrial fasteners)</li>
                        <li>• Seeded supply by onboarding 50 manufacturers directly</li>
                        <li>• Offered free listings for first year to build catalog</li>
                        <li>• Focused on one geographic region initially</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal mb-4">Results (18 months)</h4>
                      <ul className="space-y-2 text-sm text-charcoal/70">
                        <li>• $10M GMV achieved</li>
                        <li>• 2,500+ active users</li>
                        <li>• 15% take rate on transactions</li>
                        <li>• 45% repeat purchase rate</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-violet-500/10 p-8 rounded-xl my-10">
                  <h4 className="font-bold text-charcoal mb-4">Ready to build your marketplace?</h4>
                  <p className="text-charcoal/70 mb-6">
                    NEXDYNE helps companies design, build, and scale marketplace platforms. From strategy to technology to growth, we've helped launch marketplaces across industries.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-violet-500 hover:bg-violet-600 text-white">
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
            type: "Article",
            title: "E-commerce economics: Building profitable D2C channels",
            description: "The unit economics, technology choices, and operational considerations that determine D2C success.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
            link: "/insights/ecommerce-economics"
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to build your marketplace?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Let's design a platform strategy that creates network effects and sustainable competitive advantages.
            </p>
            <Link href="/contact">
              <Button className="bg-violet-500 hover:bg-violet-600 text-white px-10 py-6 text-lg font-semibold transition-all">
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
