import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Share2, Bookmark, Linkedin, Twitter } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function DigitalVenturePlaybook() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="The Digital Venture Playbook for Mid-Size Companies" 
        description="A practical framework for launching new digital businesses within established mid-market organizations."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-20">
        <div className="container max-w-4xl">
          <Link href="/capabilities/business-building/insights" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Business Building Insights
          </Link>
          
          <div className="mb-6">
            <span className="text-sm font-semibold text-[#00d4ff] uppercase tracking-wider">
              BUSINESS BUILDING
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight eb-garamond">
            The Digital Venture Playbook for Mid-Size Companies
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            A practical framework for launching new digital businesses within established mid-market organizations.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>January 2026</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </div>
      </section>
      
      {/* Author Section */}
      <section className="border-b border-gray-200 py-8">
        <div className="container max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold">
                  MR
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                  <div className="text-sm text-gray-500">Partner, Business Building</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">
                  SK
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Kim</div>
                  <div className="text-sm text-gray-500">Senior Manager, Ventures</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bookmark className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Twitter className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-serif">
              Mid-size companies are uniquely positioned to launch digital ventures. They have the resources and market knowledge of established businesses, combined with the agility that larger enterprises often lack. Yet most mid-market digital ventures fail—not because of bad ideas, but because of flawed execution approaches.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">The Mid-Market Venture Advantage</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Our research across 120+ mid-market digital ventures reveals that successful companies leverage three distinct advantages that larger and smaller competitors cannot easily replicate:
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Customer Intimacy:</strong> Mid-size companies often have deeper relationships with their customers than large enterprises. They understand specific pain points, buying behaviors, and unmet needs in ways that inform better venture design.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Operational Expertise:</strong> Years of industry experience translate into domain knowledge that pure-play startups must acquire through costly trial and error. This expertise accelerates product-market fit.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Resource Flexibility:</strong> Unlike large corporations bound by complex approval processes, mid-size companies can allocate resources quickly when opportunities emerge. Unlike startups, they have resources to allocate.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">The Four-Phase Venture Framework</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Successful mid-market digital ventures follow a structured approach that balances speed with rigor. Our framework consists of four phases, each with specific objectives and decision gates.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 1: Opportunity Discovery (4-6 Weeks)</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The goal is to identify and validate a venture opportunity worth pursuing. This phase combines market analysis with customer research to find opportunities at the intersection of customer need, market potential, and organizational capability.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Key activities include customer interviews (minimum 30), competitive landscape mapping, technology feasibility assessment, and preliminary business model design. The phase concludes with a go/no-go decision based on opportunity attractiveness and strategic fit.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 2: Concept Development (6-8 Weeks)</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              With a validated opportunity, the focus shifts to designing the venture concept in detail. This includes defining the value proposition, designing the customer experience, specifying the technology architecture, and building the financial model.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Critical to this phase is testing key assumptions through rapid experiments. Rather than building a full product, create targeted tests that validate the riskiest assumptions in your business model.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 3: MVP Launch (8-12 Weeks)</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Build and launch a minimum viable product to real customers. The MVP should be good enough to deliver value but minimal enough to launch quickly. The goal is learning, not perfection.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Success metrics at this stage focus on engagement and retention rather than revenue. Are customers using the product? Are they coming back? Are they recommending it to others? These leading indicators predict future commercial success.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 4: Scale or Pivot (Ongoing)</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Based on MVP results, make a clear decision: scale the venture, pivot to a new approach, or shut it down. Each path requires different resources and governance structures.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Scaling ventures need dedicated teams, increased investment, and integration with core business operations. Pivoting ventures need time and space to experiment with new approaches. Shutting down ventures requires honest assessment and graceful wind-down.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">Common Failure Patterns</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding why ventures fail is as important as knowing how they succeed. Our analysis identifies five common failure patterns in mid-market digital ventures:
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The Perfectionism Trap:</strong> Spending too long building the "perfect" product before launching. By the time the product reaches market, customer needs have evolved or competitors have moved.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The Orphan Venture:</strong> Launching without clear executive sponsorship or organizational commitment. These ventures struggle to secure resources and attention when challenges arise.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The Cannibal Fear:</strong> Avoiding opportunities that might compete with existing business, even when those opportunities represent significant growth potential.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The Talent Mismatch:</strong> Staffing ventures with people who excel in core business operations but lack the entrepreneurial mindset needed for venture building.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>The Metric Confusion:</strong> Measuring venture success with traditional business metrics (revenue, profit) rather than venture-appropriate metrics (engagement, retention, growth rate).
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">Building Venture Capability</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The most successful mid-market companies don't just launch individual ventures—they build organizational capability for continuous venture creation. This requires investment in three areas:
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Process:</strong> Establish repeatable frameworks for identifying, validating, and launching ventures. Document learnings from each venture to improve future efforts.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>People:</strong> Develop internal talent with venture-building skills. Create career paths that reward entrepreneurial risk-taking alongside traditional advancement.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Governance:</strong> Design decision-making structures that provide appropriate oversight without slowing venture speed. Balance accountability with autonomy.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Companies that invest in these capabilities create a sustainable competitive advantage. They can launch new ventures faster, with higher success rates, and at lower cost than competitors who approach each venture as a one-off initiative.
            </p>
          </div>
        </div>
      </article>
      
      {/* Related Insights */}
      <section className="py-16 bg-[#f8f8f7]">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 eb-garamond">Related Insights</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/insights/from-mvp-to-scale" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">SCALING</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-[#0077B5] transition-colors">
                  From MVP to Scale: The Growth Inflection Point
                </h3>
                <p className="text-sm text-gray-600">
                  How to recognize when your venture is ready to scale and what changes are needed.
                </p>
              </div>
            </Link>
            
            <Link href="/insights/corporate-venture-advantage" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">STRATEGY</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-[#0077B5] transition-colors">
                  The Corporate Venture Advantage
                </h3>
                <p className="text-sm text-gray-600">
                  Why established companies can outperform startups in certain venture categories.
                </p>
              </div>
            </Link>
            
            <Link href="/insights/hiring-for-builders" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">TALENT</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-[#0077B5] transition-colors">
                  Hiring for Builders: The Venture Talent Playbook
                </h3>
                <p className="text-sm text-gray-600">
                  How to identify and attract the entrepreneurial talent your ventures need.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 eb-garamond">Ready to Apply These Insights?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our experts can help you implement these strategies for your business.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-[#0077B5] text-white font-semibold hover:bg-[#005885] transition-colors">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
