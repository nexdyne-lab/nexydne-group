import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease },
};

const sectionTabs = [
  { id: "purpose", label: "Our purpose" },
  { id: "mission", label: "Our mission" },
  { id: "doctrine", label: "Our doctrine" },
  { id: "values", label: "Our values" },
];

const missionPillars = [
  { title: "Predictive Insights", body: "Intelligence that surfaces the hidden patterns inside business operations." },
  { title: "Adaptive Systems", body: "Solutions that evolve with our clients' growth trajectories, not against them." },
  { title: "Knowledge Transfer", body: "Capabilities that outlast the engagement and compound in our clients' hands." },
  { title: "Excellence Culture", body: "An environment where curiosity, rigor, and collaboration drive the work." },
];

const values = [
  { no: "01", title: "Intelligence with Purpose", lead: "We don't pursue technology for its own sake. Every model we build and every system we deploy must create measurable business value—we ask not just \"Can we?\" but \"Should we?\"", sub: "AI should augment human judgment, never replace it." },
  { no: "02", title: "Clarity Through Complexity", lead: "The most valuable insights hide inside the most tangled data. We bring structure to chaos and translate technical possibility into business language.", sub: "Clients don't need the mathematics—they need to know what to decide on Monday morning." },
  { no: "03", title: "Partnership Over Transactions", lead: "We measure success by clients transformed, not projects closed. We invest deeply in each organization's context, constraints, and ambitions.", sub: "Long after an engagement ends, the capabilities we build keep compounding value." },
  { no: "04", title: "Relentless Curiosity", lead: "The frontier of strategy and AI moves daily. We stay ahead through disciplined study and rigorous experimentation—not trend-chasing.", sub: "We learn from every engagement and approach each new challenge with a beginner's mind." },
  { no: "05", title: "Integrity in Every Interaction", lead: "We tell clients what they need to hear, acknowledge the limits of our expertise, and protect confidentiality as a sacred trust.", sub: "Our reputation is built one honest conversation at a time." },
  { no: "06", title: "Excellence Through Diversity", lead: "The best solutions emerge when diverse perspectives collide. We seek different backgrounds and make space for productive, idea-sharpening friction.", sub: "Diversity isn't only ethical—it's how we see blind spots others miss." },
];

export default function PurposeMissionValues() {
  const [activeTab, setActiveTab] = useState("purpose");

  useEffect(() => {
    const ids = sectionTabs.map((t) => t.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      <SEO
        title="Purpose, Mission & Values | NexDyne Consulting Group"
        description="The purpose, mission, and values that guide NexDyne—and the doctrine of Human Intelligence Governance (HIG™) that governs how we deploy AI and agentic systems."
        canonical="/about/values"
      />
      <Navigation />

      {/* ── Hero — full-bleed photo + light card panel ────────────────────── */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/distinctive-expertise-abstract.jpg"
            alt="NexDyne consultants at work"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        </div>
        <div className="relative container px-4 sm:px-6 md:px-12 min-h-[72vh] flex items-center pt-28 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="w-full max-w-xl bg-off-white/95 backdrop-blur-sm border-t-[3px] border-primary p-8 sm:p-10 lg:p-12 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]"
          >
            <span className="nx-eyebrow text-primary">Purpose, Mission &amp; Values</span>
            <h1 className="nx-h1 text-charcoal mt-4">The principles that govern our work.</h1>
            <p className="nx-lead text-muted-foreground mt-5">
              What drives us, the mission we hold ourselves to, and the values that shape every
              engagement—governed by a single discipline: we design the human system before we
              deploy the machine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Sticky sub-nav ────────────────────────────────────────────────── */}
      <div className="sticky top-14 md:top-20 z-30 bg-off-white/90 backdrop-blur-md border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <nav className="flex gap-1 overflow-x-auto no-scrollbar">
            {sectionTabs.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`relative whitespace-nowrap px-4 py-4 text-[13px] font-medium tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:text-primary ${
                  activeTab === t.id ? "text-charcoal" : "text-muted-foreground hover:text-charcoal"
                }`}
              >
                {t.label}
                <span
                  className={`absolute left-4 right-4 bottom-0 h-[2px] bg-primary transition-transform origin-left ${
                    activeTab === t.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Purpose — split feature card ──────────────────────────────────── */}
      <section id="purpose" className="nx-section bg-off-white scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 border border-border bg-white overflow-hidden">
            <div className="relative min-h-[300px] md:min-h-0">
              <img
                src="/images/business-strategy-abstract.jpg"
                alt="Turning complexity into clarity"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-9 sm:p-12 lg:p-14 flex flex-col justify-center">
              <span className="nx-eyebrow text-charcoal/55">Our purpose</span>
              <h2 className="nx-h2 text-charcoal mt-4">
                Complexity into clarity.
              </h2>
              <p className="text-[15px] md:text-base text-charcoal leading-[1.7] mt-5">
                To transform complexity into clarity—enabling growth-stage leaders and the
                enterprises they partner with to make decisions with confidence.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.7] mt-4">
                Every ambitious organization deserves the caliber of strategic intelligence once
                reserved for the Fortune 500. Our purpose is to democratize that capability—bringing
                the rigor of top-tier advisory, and the discipline to govern it, to the organizations
                building the future of their industries.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission — split card + pillars ────────────────────────────────── */}
      <section id="mission" className="nx-section bg-white border-t border-border scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 border border-border overflow-hidden mb-12 lg:mb-14">
            <div className="p-9 sm:p-12 lg:p-14 flex flex-col justify-center bg-white">
              <span className="nx-eyebrow text-charcoal/55">Our mission</span>
              <h2 className="nx-h2 text-charcoal mt-4">
                Turn challenge into advantage.
              </h2>
              <p className="text-[15px] md:text-base text-charcoal leading-[1.7] mt-5">
                To empower growth-stage and growing companies with AI and agentic systems that turn
                operational challenges into competitive advantage—while building a firm where
                exceptional talent thrives through continuous learning and meaningful impact.
              </p>
            </div>
            <div className="relative min-h-[300px] md:min-h-0 order-first md:order-last">
              <img
                src="/images/data-driven-culture.png"
                alt="An intelligence-driven culture"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {missionPillars.map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 4) * 0.08 }}
                className="group bg-white p-7 lg:p-8 hover:bg-off-white transition-colors"
              >
                <div className="h-[3px] w-8 bg-primary mb-4 transition-[width] duration-300 group-hover:w-12" />
                <h3 className="nx-h3 text-charcoal mb-2">{p.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIG doctrine — charcoal band ──────────────────────────────────── */}
      <section id="doctrine" className="nx-section bg-charcoal text-white scroll-mt-32">
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

      {/* ── Values — numbered editorial list ──────────────────────────────── */}
      <section id="values" className="nx-section bg-white border-t border-border scroll-mt-32">
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

      {/* ── CTA — orange contact block ────────────────────────────────────── */}
      <section className="bg-primary text-white">
        <div className="container px-4 sm:px-6 md:px-12 py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <motion.div {...fadeUp} className="lg:col-span-8">
              <h2 className="nx-h2">
                Work with a team that shares your standards.
              </h2>
              <p className="text-[15px] md:text-base text-white/80 leading-[1.7] mt-5 max-w-2xl">
                Let's discuss how we can transform your organization with intelligence, discipline, and
                integrity.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="lg:col-span-4 lg:text-right flex flex-col sm:flex-row lg:justify-end gap-4">
              <Link href="/contact">
                <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-charcoal text-[13px] font-semibold uppercase tracking-[0.12em] rounded-full hover:bg-charcoal hover:text-white transition-colors cursor-pointer whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Start a conversation <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/about">
                <span className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white text-[13px] font-semibold uppercase tracking-[0.12em] rounded-full hover:bg-white hover:text-charcoal transition-colors cursor-pointer whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  More about us
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
