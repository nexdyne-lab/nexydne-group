import { motion } from "framer-motion";
import { Link } from "wouter";
import ReadingProgress from "@/components/ReadingProgress";
import InlineTableOfContents from "@/components/InlineTableOfContents";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, Target, Users, TrendingUp, Scale } from "lucide-react";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { SEO } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function MACommercialDueDiligence() {
  return (
    <div className="min-h-screen bg-base text-white selection:bg-primary selection:text-white">
      <SEO 
        title="Commercial Due Diligence: The Questions That Matter Most | NexDyne Technologies" 
        description="Financial due diligence tells you what happened. Commercial due diligence tells you what will happen. Learn the critical questions for M&A success."
        canonical="/insights/ma-commercial-due-diligence"
      />
      <ReadingProgress />
      <Navigation />
      
      {/* DZ10 Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-base via-base/60 to-base"></div>
        
        <div className="container relative z-10 px-4 md:px-12 max-w-4xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center gap-2 text-sm text-white/60">
                <Tag className="w-4 h-4 text-primary" />
                M&A Strategy
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-white/60">
                <Calendar className="w-4 h-4 text-primary" />
                December 8, 2025
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-white/60">
                <Clock className="w-4 h-4 text-primary" />
                13 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
              Commercial Due Diligence: <span className="text-primary">The Questions That Matter Most</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              Financial due diligence tells you what happened. Commercial due diligence tells you what will happen. Understanding market dynamics, competitive positioning, and customer relationships determines whether projected growth is achievable or aspirational.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="w-full h-96 bg-base overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
          alt="Commercial Due Diligence" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Article Content */}
      <article className="py-16 bg-white text-charcoal">
        <div className="container max-w-3xl px-4 md:px-12">
          <div className="prose prose-lg max-w-none">
            <InlineTableOfContents />
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Commercial due diligence is where acquisition theses are validated or destroyed. While financial diligence confirms historical performance, commercial diligence assesses whether that performance can continue and grow. It examines market dynamics, competitive positioning, customer relationships, and growth potential with a skeptical eye toward management projections.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Market Validation: Is the Opportunity Real?
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Management teams always present attractive market opportunities in their pitch materials. Commercial diligence validates whether these opportunities are real, accessible, and as large as claimed. Start by independently sizing the market using bottoms-up analysis rather than accepting top-down analyst reports. Identify the specific customer segments the target serves and count the addressable universe.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Assess market growth drivers and headwinds. Are the trends that drove historical growth sustainable? What regulatory, technological, or competitive changes could accelerate or decelerate growth? Talk to industry experts, customers, and competitors to triangulate market dynamics. The goal is to develop an independent view of market opportunity that either confirms or challenges management's thesis.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-xl">
              <h3 className="text-xl font-bold text-charcoal mb-4">Critical Market Assessment Questions</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li><strong>Market size:</strong> What's the addressable customer universe? How did you calculate it?</li>
                <li><strong>Growth drivers:</strong> What's driving market growth? Are these trends sustainable?</li>
                <li><strong>Market maturity:</strong> Is this an emerging, growing, or mature market?</li>
                <li><strong>Regulatory environment:</strong> What regulatory changes could impact the market?</li>
                <li><strong>Technology disruption:</strong> What technologies could disrupt current solutions?</li>
                <li><strong>Customer needs evolution:</strong> How are customer requirements changing?</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              Competitive Positioning: Why Do Customers Choose This Company?
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Understanding competitive positioning requires going beyond the target company's claims to understand how customers actually make purchase decisions. Conduct win/loss analysis by talking to customers who chose the target and those who chose competitors. What factors drove their decisions? How differentiated is the target's offering in reality versus perception?
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Map the competitive landscape comprehensively. Who are the direct competitors? What about indirect alternatives or substitute solutions? How do competitors' capabilities, pricing, and go-to-market approaches compare? What competitive moves are likely in the next 2-3 years? The goal is to assess whether the target's competitive position is sustainable or vulnerable to erosion.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Customer Relationship Quality: Will They Stay?
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Revenue quality matters as much as revenue quantity. Assess customer relationships through multiple lenses: concentration risk, contract terms, switching costs, and satisfaction levels. High customer concentration creates vulnerability—if the top three customers represent 40% of revenue, their departure would be catastrophic. Understand what keeps them loyal and what might cause them to leave.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Conduct customer reference calls that go beyond scripted testimonials. Ask about the buying process, implementation experience, ongoing support quality, and likelihood to renew. Probe for concerns or frustrations. Talk to customers who've churned to understand why they left. This unfiltered feedback reveals relationship quality that financial metrics can't capture.
            </p>

            <div className="bg-base/5 border-l-4 border-base/30 p-6 my-8 rounded-r-xl">
              <h3 className="text-xl font-bold text-charcoal mb-4">Customer Relationship Assessment Framework</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li><strong>Concentration analysis:</strong> Revenue distribution across customer base</li>
                <li><strong>Contract terms:</strong> Length, renewal provisions, termination rights</li>
                <li><strong>Switching costs:</strong> How difficult/expensive is it for customers to leave?</li>
                <li><strong>Satisfaction metrics:</strong> NPS scores, renewal rates, expansion revenue</li>
                <li><strong>Relationship depth:</strong> Single vs. multiple stakeholder relationships</li>
                <li><strong>Churn analysis:</strong> Why do customers leave? What patterns exist?</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Product-Market Fit: Is This Truly Solving Customer Problems?
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Product-market fit determines whether growth can scale efficiently or requires constant founder-led selling. Strong product-market fit manifests in organic growth, high retention, enthusiastic customer advocacy, and repeatable sales processes. Weak fit shows up as high customer acquisition costs, long sales cycles, extensive customization requirements, and high churn.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Assess product-market fit by examining usage metrics, feature adoption, and customer outcomes. Are customers using the product extensively or minimally? Which features drive value? Can customers quantify the ROI they're achieving? Strong product-market fit means customers can't imagine going back to their previous solution. Weak fit means they're using it because they've already paid for it.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              Go-to-Market Effectiveness: Can This Scale?
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Scalable growth requires repeatable, efficient go-to-market processes. Analyze customer acquisition by channel to understand what's working and what's not. Calculate customer acquisition cost (CAC) by channel and customer segment. Assess sales cycle length, win rates, and average deal size. Map the customer journey from awareness to purchase to understand conversion dynamics.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Evaluate the sales organization's capabilities and capacity. Are they order-takers benefiting from strong inbound demand, or skilled sellers creating opportunities? What happens when you add more sales capacity—does revenue scale proportionally? Understanding go-to-market scalability determines whether projected growth requires heroic execution or systematic process execution.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-xl">
              <h3 className="text-xl font-bold text-charcoal mb-4">Go-to-Market Assessment Areas</h3>
              <ul className="space-y-3 text-charcoal/80">
                <li><strong>Channel effectiveness:</strong> CAC, conversion rates, and ROI by channel</li>
                <li><strong>Sales process:</strong> Pipeline stages, conversion rates, cycle time</li>
                <li><strong>Sales capacity:</strong> Quota attainment, ramp time, productivity metrics</li>
                <li><strong>Marketing efficiency:</strong> Lead generation cost, lead quality, conversion rates</li>
                <li><strong>Customer acquisition:</strong> Organic vs. paid growth, referral rates</li>
                <li><strong>Expansion motion:</strong> Land-and-expand effectiveness, upsell rates</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Growth Projections: Achievable or Aspirational?
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Management projections are almost always optimistic. Commercial diligence stress-tests these projections against market reality, competitive dynamics, and operational capacity. Build your own bottoms-up forecast based on current pipeline, historical conversion rates, and planned capacity additions. Compare this to management's projections to identify gaps and assess achievability.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Pay particular attention to inflection points in the forecast where growth accelerates. What specific initiatives or market changes drive these inflections? Are they realistic given competitive dynamics and organizational capabilities? Conservative projections that you can defend are far more valuable than aggressive projections that collapse under scrutiny.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              Synergy Validation: Can We Actually Capture This Value?
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Projected synergies often justify premium valuations, but most synergies prove harder to capture than anticipated. Validate revenue synergies by assessing customer overlap, product complementarity, and cross-selling feasibility. Talk to customers about their interest in combined offerings. Understand competitive responses that might limit synergy capture.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Cost synergies are more predictable but still require careful assessment. Identify specific cost reduction opportunities with detailed implementation plans. Understand one-time costs required to achieve synergies. Model the timing of synergy realization realistically—most synergies take 12-24 months to fully capture, not the 6-12 months often assumed in deal models.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mt-12 mb-6">
              How NexDyne Conducts Commercial Diligence
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              At NexDyne, we bring deep industry expertise and rigorous frameworks to commercial due diligence. Our approach includes independent market sizing and growth analysis, comprehensive competitive assessment with win/loss analysis, extensive customer interviews across diverse segments, go-to-market effectiveness evaluation, and realistic synergy validation with implementation planning.
            </p>

            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Our clients make better acquisition decisions because we provide objective, evidence-based assessment of commercial viability. We're not afraid to challenge management projections or recommend walking away from deals that don't meet strategic or commercial criteria. Our goal is to help you avoid value-destroying acquisitions and maximize returns on deals you do complete.
            </p>
          </div>
        </div>
      </article>

      {/* Newsletter Subscribe */}
      <div className="bg-base py-16 border-t border-white/10">
        <div className="container max-w-3xl px-4 md:px-12">
          <NewsletterSubscribe />
        </div>
      </div>

      {/* Related Insights */}
      <section className="py-24 md:py-32 bg-base">
        <div className="container px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-6 block">
              Related Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Continue reading</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {[
              {
                title: "Why M&A Deals Fail: Lessons from Integration Disasters",
                category: "M&A Strategy",
                description: "Understanding the common failure modes that destroy acquisition value.",
                link: "/insights/ma-failure-analysis"
              },
              {
                title: "The Integration Playbook: First 100 Days",
                category: "M&A Strategy",
                description: "A comprehensive guide to post-merger integration success.",
                link: "/insights/integration-playbook"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.link} className="group block h-full p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
}
