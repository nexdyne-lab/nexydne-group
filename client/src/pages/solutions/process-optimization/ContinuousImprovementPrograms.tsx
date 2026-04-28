import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import { SEO } from "@/components/SEO";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContinuousImprovementPrograms() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  // ── Methodology phases (SLOT 3) ──────────────────────────────────────────────
  const phases = [
    {
      name: "CI maturity assessment",
      description:
        "We start by diagnosing the current state of continuous improvement across the enterprise — operating model, governance, idea pipeline health, recognition mechanics, capability depth, and measurement discipline. The diagnostic is benchmarked against a CI maturity framework so leadership can see where the organization actually sits versus the lane it competes in, not where the corporate poster says it sits.",
    },
    {
      name: "Operating model design",
      description:
        "From the diagnostic we design the CI operating model: where CI sits in the org, how it intersects with operations, what cadence it runs on, who owns intake and prioritization, and how funding flows. The model is sized for the organization's ambition — not every enterprise needs a 200-person CoE, but every enterprise needs a model that survives a leadership change.",
    },
    {
      name: "Idea-to-impact pipeline build",
      description:
        "CI dies when ideas hit a dead-end. We build the pipeline that takes ideas from frontline submission through triage, business-case sizing, prioritization, execution, and benefits-realization tracking — with the platform spec, the cadence, and the governance roles that keep it flowing. The number that matters is throughput, not submission volume.",
    },
    {
      name: "Governance and cadence establishment",
      description:
        "Continuous improvement holds when the governance is real: monthly steering reviews with named owners, quarterly business-case approvals, annual ambition setting, and an escalation path for cross-functional ideas that no single function will champion. We stand up the cadence and the playbook so the program runs on rails, not on heroics.",
    },
    {
      name: "Capability scaling",
      description:
        "The final phase scales CI capability across the workforce — green-belt and yellow-belt training, kaizen event facilitation skills, problem-solving discipline embedded in daily management, and the recognition mechanics that make contribution visible. The goal is not certification volume; it is a workforce that runs improvement work as part of the day job.",
    },
  ];

  // ── Deliverables (SLOT 4) ────────────────────────────────────────────────────
  const deliverables = [
    {
      name: "CI maturity assessment",
      description:
        "Benchmarked diagnostic across operating model, governance, idea pipeline, recognition, capability, and measurement — with current-state evidence and gap quantification.",
    },
    {
      name: "Operating model blueprint",
      description:
        "Designed CI operating model — placement in the org, intersection with operations, cadence, intake and prioritization roles, and funding flow.",
    },
    {
      name: "Governance and cadence playbook",
      description:
        "Steering committee design, review cadence, business-case approval gates, escalation paths, and the playbook that operates the program on rails.",
    },
    {
      name: "Idea pipeline platform specification",
      description:
        "Platform specification for the idea-to-impact pipeline — submission, triage, sizing, prioritization, execution tracking, and benefits-realization measurement.",
    },
    {
      name: "Recognition and reinforcement framework",
      description:
        "Recognition mechanics — financial, non-financial, and visibility-based — designed to make contribution visible and reinforcement intrinsic to the operating cadence.",
    },
    {
      name: "CI program scorecard",
      description:
        "Live scorecard tracking throughput, benefits realized, capability depth, and cadence health — the report the steering committee actually uses, not the slide it ignores.",
    },
  ];

  // ── Sibling sub-offerings (SLOT 7) ───────────────────────────────────────────
  const siblings = [
    {
      title: "Process Discovery & Mining",
      link: "/solutions/process-optimization/process-discovery-mining",
    },
    {
      title: "Intelligent Automation Design",
      link: "/solutions/process-optimization/intelligent-automation-design",
    },
    {
      title: "Workflow Optimization",
      link: "/solutions/process-optimization/workflow-optimization",
    },
    {
      title: "AI-Powered Decision Support",
      link: "/solutions/process-optimization/ai-powered-decision-support",
    },
    {
      title: "Change Management & Training",
      link: "/solutions/process-optimization/change-management-training",
    },
  ];

  // ── Case studies (SLOT 6) ────────────────────────────────────────────────────
  const cases = [
    {
      industry: "Aerospace Manufacturing",
      // TODO: replace with real stat
      title:
        "CI program redesign moves idea throughput from 8 to 71 closures per quarter",
      description:
        "An aerospace manufacturer's CI program had stalled at single-digit idea closures per quarter despite a healthy submission rate. The redesign rebuilt the intake, sizing, and prioritization pipeline; clarified governance ownership; and replaced the legacy recognition program with a visibility-based mechanic. Idea closures moved from 8 to 71 per quarter within twelve months, with realized benefits exceeding the program's annual cost in the second quarter.",
      link: "/cases/aerospace-ci-pipeline-rebuild",
    },
    {
      industry: "Retail Banking",
      // TODO: replace with real stat
      title:
        "Bank-wide CI capability scales from 22 to 380 trained practitioners in 18 months",
      description:
        "A retail bank's CI capability had concentrated in a small CoE and never scaled into the operating teams. The capability-scaling program trained 380 practitioners across yellow- and green-belt levels in 18 months, embedded daily-management problem-solving in branch operations, and the steering committee reported sustained run-rate benefits at 4.2x the prior year by month fifteen.",
      link: "/cases/retail-banking-ci-capability-scaling",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Continuous Improvement Programs"
        description="Build durable kaizen and continuous improvement capabilities — operating model, governance, idea pipeline, recognition, and measurement."
        canonical="/solutions/process-optimization/continuous-improvement-programs"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal hero (downshifted H1, ~25% shorter container per Cat 6 entry) */}
      <SolutionHero
        eyebrow="SOLUTION · PROCESS OPTIMIZATION · CONTINUOUS IMPROVEMENT PROGRAMS"
        title="Continuous Improvement Programs"
        subtitle="Most enterprise CI programs hit a ceiling because the operating model was never designed for scale. We build the operating model, the governance cadence, the idea pipeline, and the capability layer that turn improvement into a habit, not a campaign."
        backgroundImage="/images/solution-process.a945b529.webp"
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "See Client Results", href: "/cases" }}
        h1ClassName="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6"
        containerClassName="h-[70vh] min-h-[500px] sm:min-h-[560px] lg:min-h-[640px]"
      />

      {/* SLOT 2 — White lead / editorial intro */}
      <section className="bg-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[72ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Our Perspective
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-10"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Continuous improvement is an operating model question, not a poster on the wall.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                The enterprises that have CI working at scale share a small set of structural choices: improvement is owned somewhere, governance runs on a real cadence, the idea pipeline is instrumented end-to-end, recognition is built into the operating rhythm, and capability is distributed into the workforce rather than concentrated in a CoE that becomes a bottleneck. The enterprises where CI has stalled have made the opposite choices, usually without realizing it.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                Our work is to design the structural choices for the ambition the organization actually has — not to overbuild a program a mid-market industrial does not need, and not to underbuild a program a Fortune 500 cannot run on. The diagnostic is honest, the operating model is sized to fit, and the program is handed over with the cadence and the scorecard the steering committee will actually use.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 3 — Light-grey methodology / phased approach (5 numbered phase cards) */}
      <section className="bg-grey py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              How We Deliver
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              A five-phase approach from maturity diagnostic to scaled capability.
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              Each phase is timeboxed and produces a tangible artifact. Most engagements run six to nine months for the design and pipeline build; capability scaling extends across a multi-year program with quarterly governance checkpoints.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <div className="h-full p-8 lg:p-10 flex flex-col">
                  <span className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl text-charcoal font-medium mb-4 leading-[1.25]">
                    {phase.name}
                  </h3>
                  <p className="text-base text-charcoal/75 leading-[1.55] flex-1">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 4 — White deliverables / what you get (flat hairline-bordered list) */}
      <section className="bg-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              What You Get
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Six concrete artifacts every engagement leaves behind.
            </h3>
          </motion.div>

          <div className="border-t border-charcoal/10">
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-b border-charcoal/10 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
              >
                <div className="lg:col-span-1">
                  <span className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h4 className="text-xl text-charcoal font-medium leading-[1.25]">
                    {item.name}
                  </h4>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base text-charcoal/75 leading-[1.55]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 5 — ORANGE-RED SIGNAL SECTION (the single bg-primary moment, Pattern 2) */}
      <section className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
              The Outcome
            </span>
            {/* TODO: replace with real stat */}
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              CI programs rebuilt around a real operating model and an instrumented idea pipeline typically deliver 3 to 5x the run-rate benefit of the prior program — on the same headcount footprint.
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
              The leverage is not in adding people. It is in fixing the structural choices that throttle throughput today. When the operating model is right and the cadence is real, the same workforce produces a different program.
            </p>
            <Link href="/cases">
              <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-white pb-1 cursor-pointer">
                See How We Help Leaders Win
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SLOT 6 — White case studies / proof (1-2 cards, narrower than Cat 5) */}
      <section className="bg-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Client Results
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              When the operating model is right, improvement compounds.
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {cases.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={result.link} className="group block cursor-pointer">
                  <div className="border border-charcoal/10 bg-white p-8 lg:p-10 h-full flex flex-col">
                    <span className="block text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-4">
                      {result.industry}
                    </span>
                    {/* TODO: replace with real stat */}
                    <h3 className="text-xl text-charcoal font-medium leading-[1.25] mb-4 group-hover:text-primary transition-colors">
                      {result.title}
                    </h3>
                    <p className="text-base text-charcoal/75 leading-[1.55] mb-6 flex-1">
                      {result.description}
                    </p>
                    <span className="text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Read Case
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 7 — White intra-cluster sibling sub-offerings (5 links inside Process Optimization) */}
      <section className="bg-white py-24 md:py-32 border-t border-charcoal/10">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-[60ch]"
          >
            <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Other Ways We Help in Process Optimization
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Sibling offerings inside this cluster.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {siblings.map((offering, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <Link href={offering.link} className="block h-full group cursor-pointer">
                  <div className="h-full p-8 lg:p-10 flex flex-col justify-between min-h-[200px]">
                    <h3 className="text-xl text-charcoal font-medium leading-[1.25] group-hover:text-primary transition-colors">
                      {offering.title}
                    </h3>
                    <span className="mt-8 text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Read More
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 8 — Charcoal closing CTA "Ready to Talk?" */}
      <section className="bg-charcoal text-white py-24 md:py-32">
        <div className="container px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="block text-[14px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
                  Ready to Talk?
                </span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-10"
                  style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
                >
                  Bring our continuous improvement team into your next operating-model conversation.
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-6 max-w-[52ch]">
                  I want to talk to your experts in:
                </p>
                <Select
                  value={selectedIndustry}
                  onValueChange={setSelectedIndustry}
                >
                  <SelectTrigger className="w-full bg-transparent border-0 border-b border-white/40 rounded-none text-base text-white py-6 focus:ring-0 focus:border-white">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="professional-services">
                      Professional Services
                    </SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="financial-services">
                      Financial Services
                    </SelectItem>
                    <SelectItem value="retail">Retail & Consumer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-base md:text-lg text-white/80 leading-[1.65] mb-8 max-w-[52ch]">
                  We work with leaders who want continuous improvement to be a capability, not a campaign. The conversation starts with the structural choices throttling your program today.
                </p>
                <div className="space-y-5">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border border-white/30 px-4 py-4 text-base text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                  />
                  <Link href="/contact">
                    <span className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer">
                      Contact us
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
