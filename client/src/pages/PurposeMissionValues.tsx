import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PurposeMissionValues() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Clean white background like Bain */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-200">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-normal text-charcoal mb-3 leading-tight eb-garamond">
              Purpose, Mission & Values
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              The guiding principles that inform our strategy and how we serve businesses globally.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Section - Two column layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-3xl md:text-4xl font-normal text-charcoal sticky top-32">
                  Our Purpose
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-2xl font-medium text-charcoal mb-8 leading-relaxed">
                  To transform complexity into clarity, enabling mid-market leaders to make decisions with confidence.
                </p>
                <div className="prose prose-lg prose-slate max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    In an era where data overwhelms and technology accelerates faster than strategy can keep pace, we exist to bridge the gap between what businesses know and what they need to do. We believe that every mid-market organization deserves access to the same caliber of strategic intelligence that has historically been reserved for the Fortune 500.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our purpose drives us to democratize access to world-class consulting capabilities, bringing the rigor and insight of top-tier advisory to organizations that are building the future of their industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <hr className="border-slate-200" />
        </div>
      </div>

      {/* Mission Section - Two column layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-3xl md:text-4xl font-normal text-charcoal sticky top-32">
                  Our Mission
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-xl font-medium text-charcoal mb-8 leading-relaxed">
                  To empower growth-stage and mid-market companies with AI-driven intelligence that turns operational challenges into competitive advantages, while building a firm where exceptional talent thrives through continuous learning and meaningful impact.
                </p>
                
                {/* Mission Pillars */}
                <div className="grid sm:grid-cols-2 gap-6 mt-12">
                  <div className="border-l-2 border-primary-hover pl-6">
                    <h3 className="font-semibold text-charcoal mb-2">Predictive Insights</h3>
                    <p className="text-muted-foreground">Delivering intelligence that illuminates hidden patterns in business operations</p>
                  </div>
                  <div className="border-l-2 border-primary-hover pl-6">
                    <h3 className="font-semibold text-charcoal mb-2">Adaptive Systems</h3>
                    <p className="text-muted-foreground">Building solutions that evolve with our clients' growth trajectories</p>
                  </div>
                  <div className="border-l-2 border-primary-hover pl-6">
                    <h3 className="font-semibold text-charcoal mb-2">Knowledge Transfer</h3>
                    <p className="text-muted-foreground">Transferring capabilities that outlast our engagements</p>
                  </div>
                  <div className="border-l-2 border-primary-hover pl-6">
                    <h3 className="font-semibold text-charcoal mb-2">Excellence Culture</h3>
                    <p className="text-muted-foreground">Cultivating an environment where curiosity, rigor, and collaboration drive success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <hr className="border-slate-200" />
        </div>
      </div>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
              <div className="lg:col-span-4">
                <h2 className="text-3xl md:text-4xl font-normal text-charcoal sticky top-32">
                  Our Values
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  These principles guide every decision we make and every partnership we build. They define who we are and how we work.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="space-y-0">
              {/* Value 1 */}
              <div className="grid lg:grid-cols-12 gap-8 py-12 border-t border-slate-200">
                <div className="lg:col-span-4">
                  <span className="text-sm font-semibold text-primary-hover uppercase tracking-wider">01</span>
                  <h3 className="text-2xl font-semibold text-charcoal mt-2">Intelligence with Purpose</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We don't pursue technology for its own sake. Every model we build, every system we deploy, and every insight we deliver must create measurable business value. We challenge ourselves to ask not just "Can we?" but "Should we?" and "What impact will this have?"
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our work is grounded in the belief that artificial intelligence should augment human judgment, not replace it.
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="grid lg:grid-cols-12 gap-8 py-12 border-t border-slate-200">
                <div className="lg:col-span-4">
                  <span className="text-sm font-semibold text-primary-hover uppercase tracking-wider">02</span>
                  <h3 className="text-2xl font-semibold text-charcoal mt-2">Clarity Through Complexity</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    The world's most valuable insights often hide within the most tangled data. We embrace complexity not as an obstacle but as an opportunity. We bring structure to chaos, translate technical possibilities into business language, and make the sophisticated accessible.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our clients don't need to understand the mathematics behind our models—they need to understand what decisions to make on Monday morning.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="grid lg:grid-cols-12 gap-8 py-12 border-t border-slate-200">
                <div className="lg:col-span-4">
                  <span className="text-sm font-semibold text-primary-hover uppercase tracking-wider">03</span>
                  <h3 className="text-2xl font-semibold text-charcoal mt-2">Partnership Over Transactions</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We measure success not by projects completed but by clients transformed. We invest deeply in understanding each organization's unique context, constraints, and aspirations. We challenge assumptions respectfully, share knowledge generously, and celebrate our clients' victories as our own.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Long after our engagement ends, the capabilities we've built and the mindsets we've shifted continue to compound value.
                  </p>
                </div>
              </div>

              {/* Value 4 */}
              <div className="grid lg:grid-cols-12 gap-8 py-12 border-t border-slate-200">
                <div className="lg:col-span-4">
                  <span className="text-sm font-semibold text-primary-hover uppercase tracking-wider">04</span>
                  <h3 className="text-2xl font-semibold text-charcoal mt-2">Relentless Curiosity</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    The intersection of business strategy and artificial intelligence evolves daily. We commit to staying at the frontier—not through superficial trend-chasing, but through disciplined study, rigorous experimentation, and honest reflection on what works and what doesn't.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We learn from every engagement, share insights across our team, and approach each new challenge with beginner's mind.
                  </p>
                </div>
              </div>

              {/* Value 5 */}
              <div className="grid lg:grid-cols-12 gap-8 py-12 border-t border-slate-200">
                <div className="lg:col-span-4">
                  <span className="text-sm font-semibold text-primary-hover uppercase tracking-wider">05</span>
                  <h3 className="text-2xl font-semibold text-charcoal mt-2">Integrity in Every Interaction</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    We tell clients what they need to hear, not what they want to hear. We acknowledge the limits of our expertise and the boundaries of what technology can solve. We protect client confidentiality as sacred trust.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We take accountability when our recommendations fall short and work tirelessly to make things right. Our reputation is built one honest conversation at a time.
                  </p>
                </div>
              </div>

              {/* Value 6 */}
              <div className="grid lg:grid-cols-12 gap-8 py-12 border-t border-slate-200">
                <div className="lg:col-span-4">
                  <span className="text-sm font-semibold text-primary-hover uppercase tracking-wider">06</span>
                  <h3 className="text-2xl font-semibold text-charcoal mt-2">Excellence Through Diversity</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    The most innovative solutions emerge when diverse perspectives collide. We actively seek team members and partners who bring different backgrounds, experiences, and ways of thinking. We create space for dissent, debate, and the productive friction that sharpens ideas.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our commitment to diversity isn't just ethical—it's strategic. Different viewpoints help us see blind spots, challenge assumptions, and build solutions that work for a broader range of contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-6">
              Ready to work with a team that shares your values?
            </h2>
            <p className="text-xl text-muted-foreground/50 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help transform your organization with intelligence and integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-primary-hover text-white font-semibold rounded hover:bg-primary transition-colors inline-flex items-center gap-2">
                  Start a Conversation <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-colors">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
