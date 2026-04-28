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

export default function WorkflowOptimization() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  // ── Methodology phases (SLOT 3) ──────────────────────────────────────────────
  const phases = [
    {
      name: "As-is workflow capture",
      description:
        "We document the workflow as it actually executes — not the version in the SOP binder. BPMN modeling sessions with operators, supplemented by system telemetry where it exists, capture every hand-off, queue, approval, and rework loop. The product is a high-fidelity as-is model the team agrees represents reality, not a sanitized version that survives the steering committee.",
    },
    {
      name: "Bottleneck and waste analysis",
      description:
        "Using value-stream mapping and lean diagnostics, we quantify cycle time, queue time, defect rates, rework loops, and capacity utilization across each step. The seven wastes are not a poster on the wall — they are line items in a quantified diagnosis, ranked by annualized impact and addressability.",
    },
    {
      name: "Redesign workshops",
      description:
        "Workflow redesign is done with the operators, not to them. Structured workshops generate the to-be design — what the workflow looks like when the wastes are removed, the hand-offs simplified, the SLAs designed in rather than retrofitted. Each redesign decision carries a cost, complexity, and benefit estimate so trade-offs are explicit.",
    },
    {
      name: "Redesigned workflow validation",
      description:
        "Before deployment, the to-be workflow is validated end-to-end: simulation against historical volumes, table-top walkthroughs against exception scenarios, and a controlled pilot on a contained slice of the work. We do not deploy redesigns that have not been stress-tested against the real pattern of demand.",
    },
    {
      name: "Deployment and measurement",
      description:
        "Go-live is the start, not the end. We deploy with the KPI dashboard already wired — cycle time, first-pass yield, capacity utilization, SLA conformance — so the team sees the gain in real time and the business case is defended on data, not anecdote. The dashboard becomes the operating cadence for the workflow's owner.",
    },
  ];

  // ── Deliverables (SLOT 4) ────────────────────────────────────────────────────
  const deliverables = [
    {
      name: "As-is process maps in BPMN",
      description:
        "High-fidelity BPMN models of the current-state workflow, validated by operators and reflecting how the work actually executes — including every exception path.",
    },
    {
      name: "Value-stream analysis report",
      description:
        "End-to-end value-stream map with cycle, queue, and rework time quantified per step — and the seven wastes called out with annualized impact estimates.",
    },
    {
      name: "Bottleneck quantification report",
      description:
        "Ranked list of capacity-constrained steps with throughput math, cost-of-delay estimates, and the operating decisions each bottleneck is forcing today.",
    },
    {
      name: "Redesigned workflow specifications",
      description:
        "To-be BPMN models, role definitions, decision rules, and integration touch-points — at the fidelity needed to brief IT, training, and operations on day one.",
    },
    {
      name: "Change management plan",
      description:
        "Stakeholder-mapped change plan covering communications, training, role transitions, and the reinforcement cadence needed to make the redesign stick.",
    },
    {
      name: "KPI baseline and tracking dashboard",
      description:
        "Production-grade dashboard the workflow owner uses for daily and weekly cadence — cycle time, first-pass yield, SLA conformance, capacity utilization.",
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
      title: "AI-Powered Decision Support",
      link: "/solutions/process-optimization/ai-powered-decision-support",
    },
    {
      title: "Change Management & Training",
      link: "/solutions/process-optimization/change-management-training",
    },
    {
      title: "Continuous Improvement Programs",
      link: "/solutions/process-optimization/continuous-improvement-programs",
    },
  ];

  // ── Case studies (SLOT 6) ────────────────────────────────────────────────────
  const cases = [
    {
      industry: "Specialty Distribution",
      // TODO: replace with real stat
      title:
        "Order-fulfillment redesign cuts average cycle time by 41 percent in 14 weeks",
      description:
        "A specialty distributor's order-to-ship workflow had drifted to 9.2-day average cycle time across multiple distribution centers. Value-stream mapping surfaced 11 hand-offs with no SLA, three duplicate approval gates, and a credit-check loop that ran in series with picking. The redesign collapsed the workflow to 5.4 days end-to-end without adding headcount, with a published path to under four days at the second wave.",
      link: "/cases/distribution-order-fulfillment-redesign",
    },
    {
      industry: "Hospital System",
      // TODO: replace with real stat
      title:
        "Discharge workflow redesign frees 28 percent of bed-day capacity",
      description:
        "A regional hospital system's discharge workflow had length-of-stay drift driven by serialized approvals across pharmacy, transport, and case management. The redesigned workflow parallelized clearance steps and front-loaded the pharmacy review the prior afternoon, freeing 28 percent of bed-day capacity on the unit during the pilot — and the redesign was rolled out across the system over the following six months.",
      link: "/cases/hospital-discharge-workflow-redesign",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Workflow Optimization"
        description="Optimize existing workflows for cycle time, quality, and capacity using BPMN modeling, value-stream mapping, and lean methods."
        canonical="/solutions/process-optimization/workflow-optimization"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal hero (downshifted H1, ~25% shorter container per Cat 6 entry) */}
      <SolutionHero
        eyebrow="SOLUTION · PROCESS OPTIMIZATION · WORKFLOW OPTIMIZATION"
        title="Workflow Optimization"
        subtitle="Most workflows in operation today were designed for a volume, a system landscape, and a labor model that have all changed. We apply BPMN modeling, value-stream mapping, and lean methods to redesign them for the cycle time, quality, and capacity the business actually needs."
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
              Most workflows are not broken. They were designed for a business that no longer exists.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                When we walk into a workflow optimization engagement, the workflow itself is rarely the problem. The problem is that the workflow was designed for a volume, a regulatory regime, a system landscape, and a labor model that have all moved on — and the operators have absorbed the gap with a layer of workarounds that look like the process but cost the business cycle time, quality, and capacity every day.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                Our redesign work uses BPMN modeling and value-stream mapping not as deliverable formats but as diagnostic instruments. We quantify the waste, run the redesign workshops with the operators who own the work, validate the to-be model against historical demand patterns, and deploy with a KPI dashboard wired in. The output is a workflow that holds — and an owner who can defend it.
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
              A five-phase approach from as-is capture to measured deployment.
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              Each phase is timeboxed and produces a tangible artifact. Most engagements run ten to fourteen weeks end-to-end, with the KPI dashboard live the day the redesigned workflow goes into production.
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
              Workflow redesigns delivered through this approach typically take 25 to 45 percent out of cycle time and lift first-pass yield by ten to twenty points within the first quarter of go-live.
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
              The number is not the point. The point is that the gain is measured on a dashboard the operator owns, the dashboard was wired in before go-live, and the redesign therefore survives the first quarterly business review. That is what makes a workflow optimization stick.
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
              When the redesign holds, the gain compounds quarter on quarter.
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
                  Bring our workflow redesign team into your next operating-cadence conversation.
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
                  We work with operating leaders who want their workflow gains measured on a dashboard, not a slide. The conversation starts with the value stream you would change first.
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
