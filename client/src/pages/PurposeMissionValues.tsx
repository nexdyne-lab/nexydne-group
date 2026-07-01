import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function PurposeMissionValues() {
  const missionPillars = [
    { title: "Predictive Insights", body: "Intelligence that surfaces the hidden patterns inside business operations." },
    { title: "Adaptive Systems", body: "Solutions that evolve with our clients' growth trajectories, not against them." },
    { title: "Knowledge Transfer", body: "Capabilities that outlast the engagement and compound in our clients' hands." },
    { title: "Excellence Culture", body: "An environment where curiosity, rigour, and collaboration drive the work." },
  ];

  const values = [
    { no: "01", title: "Intelligence with Purpose", lead: "We don't pursue technology for its own sake. Every model we build and every system we deploy must create measurable business value—we ask not just \"Can we?\" but \"Should we?\"", sub: "AI should augment human judgement, never replace it." },
    { no: "02", title: "Clarity Through Complexity", lead: "The most valuable insights hide inside the most tangled data. We bring structure to chaos and translate technical possibility into business language.", sub: "Clients don't need the mathematics—they need to know what to decide on Monday morning." },
    { no: "03", title: "Partnership Over Transactions", lead: "We measure success by clients transformed, not projects closed. We invest deeply in each organisation's context, constraints, and ambitions.", sub: "Long after an engagement ends, the capabilities we build keep compounding value." },
    { no: "04", title: "Relentless Curiosity", lead: "The frontier of strategy and AI moves daily. We stay ahead through disciplined study and rigorous experimentation—not trend-chasing.", sub: "We learn from every engagement and approach each new challenge with a beginner's mind." },
    { no: "05", title: "Integrity in Every Interaction", lead: "We tell clients what they need to hear, acknowledge the limits of our expertise, and protect confidentiality as a sacred trust.", sub: "Our reputation is built one honest conversation at a time." },
    { no: "06", title: "Excellence Through Diversity", lead: "The best solutions emerge when diverse perspectives collide. We seek different backgrounds and make space for productive, idea-sharpening friction.", sub: "Diversity isn't only ethical—it's how we see blind spots others miss." },
  ];

  return (
    <div className="min-h-screen bg-subtle text-charcoal">
      <SEO
        title="Purpose, Mission & Values | NexDyne Consulting Group"
        description="The purpose, mission, and values that guide NexDyne—and the doctrine of Human Intelligence Governance (HIG™) that governs how we deploy AI and agentic systems."
        canonical="/about/values"
      />
      <Navigation />

      {/* Hero — full-width editorial */}
      <section className="bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12 pt-24 md:pt-28 lg:pt-32 pb-14 md:pb-16">
          <motion.div {...fadeUp} className="max-w-4xl">
            <span className="nx-eyebrow text-charcoal/55">Purpose, Mission &amp; Values</span>
            <h1 className="nx-h1 text-charcoal mt-5 mb-6">The principles that govern our work.</h1>
            <p className="nx-lead text-muted-foreground max-w-2xl">
              What drives us, the mission we hold ourselves to, and the values that shape every
              engagement—governed by a single discipline: we design the human system before we
              deploy the machine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Purpose */}
      <section className="nx-section bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">Our purpose</span>
              <h2 className="nx-h2 text-charcoal mt-4 lg:sticky lg:top-28">Complexity into clarity.</h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="lg:col-span-8">
              <p className="text-[1.5rem] md:text-[1.9rem] leading-[1.35] tracking-[-0.01em] text-charcoal font-medium mb-8">
                To transform complexity into clarity—enabling mid-market leaders and the enterprises
                they partner with to make decisions with confidence.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-5 max-w-2xl">
                In an era where data overwhelms and technology accelerates faster than strategy can
                keep pace, we exist to bridge the gap between what businesses know and what they need
                to do. Every ambitious organisation deserves the caliber of strategic intelligence
                once reserved for the Fortune 500.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
                Our purpose is to democratise that capability—bringing the rigour of top-tier advisory,
                and the discipline to govern it, to the organisations building the future of their
                industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="nx-section bg-subtle border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">Our mission</span>
              <h2 className="nx-h2 text-charcoal mt-4 lg:sticky lg:top-28">Turn challenge into advantage.</h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="lg:col-span-8">
              <p className="nx-lead text-charcoal mb-10">
                To empower growth-stage and mid-market companies with AI and agentic systems that turn
                operational challenges into competitive advantage—while building a firm where
                exceptional talent thrives through continuous learning and meaningful impact.
              </p>
              <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                {missionPillars.map((p, i) => (
                  <div key={i} className="group bg-white p-6 lg:p-7 hover:bg-subtle transition-colors">
                    <div className="h-[3px] w-8 bg-primary mb-4 transition-all duration-300 group-hover:w-12" />
                    <h3 className="nx-h3 text-charcoal mb-2">{p.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIG doctrine — the differentiator (purple framework accent) */}
      <section className="nx-section bg-charcoal text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50 mb-6">
                <span className="h-2 w-2" style={{ background: "var(--color-purple)" }} />
                Our doctrine — Human Intelligence Governance
              </span>
              <h2 className="nx-h2 text-white mb-6">
                We implement technology only after we design the human system it operates within.
              </h2>
              <p className="nx-lead text-white/70 mb-6 max-w-3xl">
                HIG™ is the framework that governs everything we do. Before a model ships or an agent
                is switched on, we define the people, decisions, and accountability it serves—then we
                deploy, govern, and scale inside that structure.
              </p>
              <p className="text-[15px] text-white/55 leading-relaxed max-w-3xl">
                It is why our transformations stay controlled, auditable, and durable as they grow—and
                why clients trust us to put AI and agentic systems to work across the enterprise, not
                just in a proof of concept.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="nx-section bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14">
            <div className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">Our values</span>
              <h2 className="nx-h2 text-charcoal mt-4">How we show up</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="nx-lead text-muted-foreground">
                Six principles guide every decision we make and every partnership we build. They define
                who we are and how we work.
              </p>
            </div>
          </motion.div>

          <div className="border-t border-border">
            {values.map((v, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 2) * 0.08 }}
                className="group grid lg:grid-cols-12 gap-6 lg:gap-16 py-10 lg:py-12 border-b border-border"
              >
                <div className="lg:col-span-4">
                  <span className="text-[13px] font-semibold text-primary tracking-[0.1em]">{v.no}</span>
                  <h3 className="text-xl md:text-2xl font-medium text-charcoal mt-2 group-hover:text-primary transition-colors">{v.title}</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[15px] text-charcoal/80 leading-relaxed mb-4">{v.lead}</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{v.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nx-section bg-subtle border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="nx-h2 text-charcoal mb-5">Work with a team that shares your standards.</h2>
            <p className="nx-lead text-muted-foreground mb-10 max-w-2xl">
              Let's discuss how we can transform your organisation with intelligence, discipline, and
              integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contact">
                <span className="inline-block px-8 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">
                  Start a conversation
                </span>
              </Link>
              <Link href="/about">
                <span className="inline-block px-8 py-4 border border-border text-charcoal text-[13px] font-semibold uppercase tracking-[0.12em] hover:border-charcoal hover:bg-white transition-colors cursor-pointer">
                  More about us
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
