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

export default function OurImpact() {
  const pillars = [
    { title: "People & Talent", body: "Capabilities that outlast the engagement", href: "#people" },
    { title: "Community", body: "Enterprise-grade intelligence, widened access", href: "#community" },
    { title: "Responsible AI", body: "Governed, transparent, accountable systems", href: "#responsible-ai" },
    { title: "Social Good", body: "Expertise for mission-driven organisations", href: "#social-good" },
  ];

  return (
    <div className="min-h-screen bg-subtle text-charcoal">
      <SEO
        title="Our Impact | NexDyne Consulting Group"
        description="How NexDyne creates lasting impact—capabilities that outlast our engagements, wider access to enterprise-grade intelligence, responsible AI, and work for mission-driven organisations."
        canonical="/about/impact"
      />
      <Navigation />

      {/* Hero */}
      <section className="bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12 pt-24 md:pt-28 lg:pt-32 pb-14 md:pb-16">
          <motion.div {...fadeUp} className="max-w-4xl">
            <span className="nx-eyebrow text-charcoal/55">Our impact</span>
            <h1 className="nx-h1 text-charcoal mt-5 mb-6">Impact measured in capability—not slideware.</h1>
            <p className="nx-lead text-muted-foreground max-w-2xl">
              We measure success by the lasting capabilities we build, the communities we strengthen,
              and the discipline we bring to deploying AI and agentic systems responsibly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars nav */}
      <section className="bg-white border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12 py-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {pillars.map((p, i) => (
              <a key={i} href={p.href} className="group relative block px-5 py-7 hover:bg-subtle transition-colors">
                <span className="absolute left-0 top-0 h-full w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <div className="text-[13px] font-semibold text-primary tracking-[0.08em] mb-2">0{i + 1}</div>
                <h3 className="text-[15px] font-semibold text-charcoal mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-[12px] text-muted-foreground leading-relaxed">{p.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* People & Talent */}
      <section id="people" className="nx-section bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">People &amp; Talent</span>
              <h2 className="nx-h2 text-charcoal mt-4 lg:sticky lg:top-28">Capabilities, not dependencies.</h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="lg:col-span-8">
              <p className="nx-lead text-charcoal mb-10">
                Our engagements are designed to make us obsolete. We succeed when client teams can
                independently run the systems we build, apply the methods we introduce, and extend the
                insight we uncover—so the capability stays with them long after we've gone.
              </p>
              <figure className="border-l-2 border-primary pl-6 md:pl-8">
                <blockquote className="text-[1.3rem] md:text-[1.6rem] leading-[1.4] tracking-[-0.01em] text-charcoal font-medium">
                  "Before NexDyne, our finance team was intimidated by predictive modelling. Now they
                  build their own forecasts and challenge assumptions we'd held for years."
                </blockquote>
                <figcaption className="mt-5 text-[14px] text-muted-foreground">
                  <span className="font-semibold text-charcoal">Chief Financial Officer</span> · Mid-market SaaS company
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="nx-section bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-14">
            <span className="nx-eyebrow text-charcoal/55">Community</span>
            <h2 className="nx-h2 text-charcoal mt-4">Democratising advanced intelligence</h2>
            <p className="nx-lead text-muted-foreground mt-5">
              Sophisticated AI and analytics were historically reserved for the Fortune 500. We bring
              enterprise-grade capability to growth-stage and mid-market organisations.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { t: "Levelling the field", b: "Smaller organisations compete with industry giants through data-driven decisions." },
              { t: "Fuelling growth", b: "Better decisions help our clients scale—and create new roles as they grow." },
              { t: "Market expansion", b: "Organisations enter new markets with data-backed confidence and strategic clarity." },
            ].map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="group bg-white p-8 lg:p-10 hover:bg-subtle transition-colors">
                <div className="h-[3px] w-8 bg-primary mb-5 transition-all duration-300 group-hover:w-12" />
                <h3 className="nx-h3 text-charcoal mb-3">{c.t}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{c.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section id="responsible-ai" className="nx-section bg-subtle border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">Responsible AI</span>
              <h2 className="nx-h2 text-charcoal mt-4 lg:sticky lg:top-28">Governed by design.</h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="lg:col-span-8">
              <p className="nx-lead text-charcoal mb-8">
                Under Human Intelligence Governance (HIG™), every system we deploy is transparent, fair,
                and accountable—and efficient. We prioritise model efficiency, cloud optimisation, and
                carbon-aware deployment so intelligence scales responsibly.
              </p>
              <div className="border-t border-border">
                {[
                  "Bias detection, explainability, and privacy protection built into every deployment.",
                  "Efficient, carbon-aware model deployment that keeps compute and cost in check.",
                  "Clear accountability for every automated decision—no black boxes handed to clients.",
                ].map((t, i) => (
                  <div key={i} className="flex gap-5 py-5 border-b border-border">
                    <span className="text-[13px] font-semibold text-primary tracking-[0.08em] pt-1">0{i + 1}</span>
                    <p className="text-[15px] text-charcoal/80 leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Good — charcoal */}
      <section id="social-good" className="nx-section bg-charcoal text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <span className="nx-eyebrow text-white/45">Social good</span>
            <h2 className="nx-h2 text-white mt-4">Giving our expertise where it counts</h2>
            <p className="nx-lead text-white/70 mt-5">
              We dedicate a share of our consulting capacity to mission-driven organisations working on
              education access, healthcare equity, and sustainability.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 border-t border-white/10">
            {[
              { t: "Education access", l: "Helping mission-driven organisations widen access to learning and opportunity." },
              { t: "Healthcare equity", l: "Applying data and AI to close gaps in how care is planned and delivered." },
              { t: "Sustainability", l: "Backing organisations working toward a more sustainable, resilient future." },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="py-8 sm:py-10 sm:px-8 border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0">
                <div className="h-[3px] w-8 bg-amber mb-5" />
                <h3 className="text-lg font-medium text-white mb-2">{s.t}</h3>
                <p className="text-[14px] text-white/60 leading-relaxed">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment / CTA */}
      <section className="nx-section bg-subtle border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="nx-h2 text-charcoal mb-5">Impact is a commitment, not a milestone.</h2>
            <p className="nx-lead text-muted-foreground mb-10 max-w-2xl">
              We keep widening access to advanced intelligence, deepening the capabilities we transfer,
              and raising the bar on how responsibly AI is deployed.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/about/values">
                <span className="inline-block px-8 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">
                  Our values
                </span>
              </Link>
              <Link href="/case-studies">
                <span className="inline-block px-8 py-4 border border-border text-charcoal text-[13px] font-semibold uppercase tracking-[0.12em] hover:border-charcoal hover:bg-white transition-colors cursor-pointer">
                  See client results
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
