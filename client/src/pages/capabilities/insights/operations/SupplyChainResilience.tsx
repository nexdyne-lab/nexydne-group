import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Share2, Bookmark, Linkedin, Twitter } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function SupplyChainResilience() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Building Supply Chain Resilience Without Breaking the Bank" 
        description="Practical strategies for mid-size companies to strengthen supply chain resilience while managing costs."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-20">
        <div className="container max-w-4xl">
          <Link href="/capabilities/operations/insights" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Operations Insights
          </Link>
          
          <div className="mb-6">
            <span className="text-sm font-semibold text-[#00d4ff] uppercase tracking-wider">
              OPERATIONS
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight eb-garamond">
            Building Supply Chain Resilience Without Breaking the Bank
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Practical strategies for mid-size companies to strengthen supply chain resilience while managing costs.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>January 2026</span>
            <span>•</span>
            <span>11 min read</span>
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
                  MW
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Marcus Williams</div>
                  <div className="text-sm text-gray-500">Partner, Operations</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">
                  EP
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Elena Petrova</div>
                  <div className="text-sm text-gray-500">Senior Manager, Supply Chain</div>
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-serif">
              The past few years have taught every company the importance of supply chain resilience. But for mid-size companies, building resilience often seems like a luxury—something that requires the deep pockets and sophisticated systems of larger enterprises. This doesn't have to be the case.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">The Resilience Imperative</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Supply chain disruptions are no longer rare events. Our analysis shows that mid-size companies experience an average of 4-6 significant supply disruptions per year, each costing 2-5% of annual revenue in lost sales, expedited shipping, and customer penalties.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The companies that weather these disruptions best aren't necessarily those with the most inventory or the most suppliers. They're the ones with the best visibility, the fastest response capabilities, and the strongest relationships across their supply network.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">Five Pillars of Cost-Effective Resilience</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Visibility Before Inventory</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The traditional response to supply uncertainty is more inventory. But inventory is expensive and doesn't address root causes. Better visibility often provides more resilience at lower cost.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Start by mapping your supply chain beyond tier-one suppliers. Understand where your suppliers source their materials and where concentration risks exist. Modern supply chain visibility platforms make this mapping feasible even for mid-size companies.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Implement early warning systems that monitor supplier health, geopolitical risks, and logistics disruptions. Even simple Google Alerts for key suppliers and regions can provide valuable advance notice.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Strategic Supplier Relationships</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              When disruptions hit, companies with strong supplier relationships get priority treatment. This doesn't require being the biggest customer—it requires being a good partner.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Pay on time, every time. Communicate forecasts accurately and update them promptly when things change. Share information about your business that helps suppliers plan. These behaviors cost nothing but create significant goodwill.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              For critical suppliers, consider deeper partnerships: joint planning sessions, shared improvement initiatives, or even minority investments. These relationships provide resilience that no amount of inventory can match.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Flexible Sourcing Strategies</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Dual-sourcing everything is expensive and often impractical. Instead, develop a tiered approach based on criticality and risk:
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Critical items:</strong> Maintain qualified alternative suppliers, even if you don't use them regularly. The qualification cost is insurance against disruption.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Important items:</strong> Split volume between 2-3 suppliers, with the ability to shift share quickly if needed.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Standard items:</strong> Single-source for efficiency, but maintain market knowledge to switch if necessary.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Demand-Side Flexibility</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Resilience isn't just about supply—it's also about your ability to adapt demand. Companies that can shift customer orders, substitute products, or adjust pricing have more options when supply is constrained.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Design products with common components where possible. This creates flexibility to shift production between products based on component availability.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Develop customer relationships that allow honest conversations about constraints. Customers who understand your situation are more likely to accept alternatives or adjusted timelines.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Response Playbooks</h3>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              When disruptions occur, speed matters. Companies with pre-developed response playbooks react faster and more effectively than those making decisions in crisis mode.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Develop playbooks for common disruption scenarios: supplier failure, logistics disruption, demand spike, quality issue. Each playbook should specify: who makes decisions, what options are available, how to communicate with customers, and what triggers escalation.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Practice these playbooks through tabletop exercises. The learning from simulation is invaluable when real disruptions occur.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">Technology Enablers</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Several technologies can accelerate resilience building without massive investment:
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Cloud-based supply chain platforms:</strong> Modern SaaS solutions provide enterprise-grade visibility and planning capabilities at mid-market price points.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>AI-powered demand sensing:</strong> Machine learning can detect demand shifts earlier than traditional forecasting, providing more time to respond.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Digital supplier networks:</strong> Platforms that connect buyers and suppliers enable faster identification of alternative sources when disruptions occur.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 eb-garamond">Getting Started</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Building resilience is a journey, not a project. Start with these immediate actions:
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Week 1-2:</strong> Map your top 20 suppliers and their key sub-suppliers. Identify concentration risks.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Week 3-4:</strong> Assess your top 10 items by criticality and supply risk. Prioritize resilience investments.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Month 2:</strong> Develop response playbooks for your top 3 disruption scenarios.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Month 3:</strong> Begin qualifying alternative suppliers for your highest-risk items.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Each of these steps improves your resilience incrementally, without requiring massive upfront investment. Over time, these incremental improvements compound into significant competitive advantage.
            </p>
          </div>
        </div>
      </article>
      
      {/* Related Insights */}
      <section className="py-16 bg-[#f8f8f7]">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 eb-garamond">Related Insights</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/insights/generative-supply-chain" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">AI</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-[#0077B5] transition-colors">
                  Generative AI in Supply Chain
                </h3>
                <p className="text-sm text-gray-600">
                  How AI is transforming supply chain planning and execution.
                </p>
              </div>
            </Link>
            
            <Link href="/insights/digital-twin-manufacturing" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">TECHNOLOGY</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-[#0077B5] transition-colors">
                  Digital Twins in Manufacturing
                </h3>
                <p className="text-sm text-gray-600">
                  Using digital twins to optimize production and supply chains.
                </p>
              </div>
            </Link>
            
            <Link href="/insights/lean-operations-scale" className="group">
              <div className="bg-white p-6 h-full hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">OPERATIONS</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-[#0077B5] transition-colors">
                  Lean Operations at Scale
                </h3>
                <p className="text-sm text-gray-600">
                  Applying lean principles as your organization grows.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 eb-garamond">Ready to Strengthen Your Supply Chain?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our experts can help you build resilience tailored to your specific supply chain challenges.
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
