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

export default function ProcessOrchestration() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  const services = [
    {
      title: "BPMN Modeling & Design",
      description:
        "Capture how work actually happens in BPMN 2.0—decision tables, gateways, sub-processes. The model becomes the executable, not just the diagram.",
      link: "/solutions/process-orchestration/bpmn-design",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate the long-running, multi-step processes that span humans, systems, and partners. We handle the wait states, retries, and exception paths.",
      link: "/solutions/process-orchestration/workflow-automation",
    },
    {
      title: "BPM Platform Implementation",
      description:
        "Camunda, IBM BPM, Pega. We stand up the workflow engine, the developer tooling, and the operations model that runs the platform in production.",
      link: "/solutions/process-orchestration/bpm-platform",
    },
    {
      title: "Human-in-the-Loop Processes",
      description:
        "Approval gates, exception queues, escalation rules. We design the human moments inside automated processes so people stay in control of consequence.",
      link: "/solutions/process-orchestration/human-in-the-loop",
    },
    {
      title: "Process Intelligence & Mining",
      description:
        "Discover the real process from event logs, not the diagram in the binder. Process mining shows you where the actual time and rework lives.",
      link: "/solutions/process-orchestration/process-mining",
    },
    {
      title: "Orchestration Governance",
      description:
        "Versioning, deployment, model ownership, KPIs. We build the governance layer that keeps a hundred process models from becoming a hundred problems.",
      link: "/solutions/process-orchestration/governance",
    },
  ];

  const outcomes = [
    {
      stat: "200+",
      label: "long-running business processes orchestrated for mid-market and enterprise clients",
    },
    {
      stat: "50%",
      label: "average reduction in end-to-end cycle time on orchestrated processes",
    },
    {
      stat: "$8M+",
      label: "annual savings unlocked on a single insurer's claims-orchestration program",
    },
  ];

  const approach = [
    {
      title: "Mine the Real Process",
      description:
        "Start with event-log evidence, not anecdote. Process mining tells the truth about how work actually moves.",
      link: "/solutions/process-orchestration/process-mining",
    },
    {
      title: "Model the Target State",
      description:
        "BPMN models that are precise enough to execute and clear enough to socialize with the business.",
      link: "/solutions/process-orchestration/bpmn-design",
    },
    {
      title: "Implement on a Real Engine",
      description:
        "Camunda, IBM BPM, or Pega. We pick the engine that fits your team, your scale, and your operational reality.",
      link: "/solutions/process-orchestration/bpm-platform",
    },
    {
      title: "Operate and Improve",
      description:
        "Process KPIs, model versioning, continuous mining. The orchestration platform is a living capability, not a project deliverable.",
      link: "/solutions/process-orchestration/governance",
    },
  ];

  const cases = [
    {
      industry: "Insurance",
      title: "National Insurer Orchestrates Claims End-to-End and Cuts Cycle Time by 47%",
      description:
        "A Camunda-based orchestration layer replaced six disconnected tools with a single executable model spanning intake to payout.",
      image: "/images/case-orchestration-claims.jpg",
      link: "/cases/insurer-claims-orchestration",
    },
    {
      industry: "Financial Services",
      title: "Bank Automates Loan Origination Workflow Across Twelve Systems",
      description:
        "Human-in-the-loop orchestration with policy gates and audit trails turned a fourteen-day origination process into three.",
      image: "/images/case-orchestration-loan.jpg",
      link: "/cases/bank-loan-orchestration",
    },
  ];

  const relatedOfferings = [
    {
      title: "Intelligent Process Optimization",
      link: "/solutions/intelligent-process-optimization",
    },
    {
      title: "RPA",
      link: "/solutions/rpa",
    },
    {
      title: "IPaaS",
      link: "/solutions/ipaas",
    },
    {
      title: "Conversational AI",
      link: "/solutions/conversational-ai",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Process Orchestration"
        description="Orchestrate long-running, multi-step business processes across humans, systems, and partners. BPMN, workflow engines, and process intelligence."
        canonical="/solutions/process-orchestration"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal hero */}
      <SolutionHero
        eyebrow="SOLUTION · PROCESS ORCHESTRATION"
        title="Process Orchestration"
        subtitle="Long-running business processes that span people, systems, and partners—modeled in BPMN, executed on a real engine, and governed as a living enterprise capability."
        backgroundImage="/images/solution-process-orchestration.jpg"
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "See Client Results", href: "/cases" }}
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
              The work that defines a company isn't in any one
              system—it's in the orchestration that connects them.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                Most enterprise processes don't live inside a single
                application. Claims, loan origination, customer onboarding, order
                fulfillment—these are long-running flows that cross a dozen
                systems, several human approval points, and at least one external
                partner. When something goes wrong, no single tool can tell you
                where the work is stuck.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                NexDyne's{" "}
                <Link
                  href="/insights/orchestration-vs-automation"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  orchestration consultants
                </Link>{" "}
                treat the process itself as the system of record. We model it in
                BPMN, execute it on Camunda or IBM BPM, and instrument it so
                process intelligence becomes a permanent capability—not a
                quarterly consulting study.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SLOT 3 — Light grey service grid (six sub-offerings) */}
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
              How We Help Clients
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Six ways we orchestrate work that spans systems and people.
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              We combine deep BPM platform expertise with disciplined modeling
              and process intelligence to deliver orchestration that scales
              across the enterprise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <Link href={service.link} className="block h-full group cursor-pointer">
                  <div className="h-full p-8 lg:p-10 flex flex-col">
                    <h3 className="text-xl text-charcoal font-medium mb-4 leading-[1.25] group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-base text-charcoal/75 leading-[1.55] flex-1">
                      {service.description}
                    </p>
                    <span className="mt-8 text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Learn more
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 4 — White Outcome / Real Results stat cluster */}
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
              Our Experience & Impact
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Measurable outcomes from orchestrated processes in production.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {outcomes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${
                  i > 0 ? "md:border-l md:border-charcoal/10 md:pl-10" : ""
                }`}
              >
                <div
                  className="text-5xl md:text-6xl lg:text-7xl text-charcoal mb-5"
                  style={{ fontWeight: 500, letterSpacing: "-0.03em" }}
                >
                  {item.stat}
                </div>
                <div className="text-base text-charcoal/75 leading-[1.55] max-w-[30ch]">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 5 — Light grey Approach / Methodology framework */}
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
              How We Think About It
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              The Executable Process Framework
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              Four integrated phases that move orchestration from process diagram
              to executable, measurable enterprise capability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
            {approach.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white"
              >
                <Link href={step.link} className="block h-full group cursor-pointer">
                  <div className="h-full p-8 flex flex-col">
                    <span className="text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base text-charcoal font-medium mb-4 leading-[1.25] group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-charcoal/75 leading-[1.55] flex-1">
                      {step.description}
                    </p>
                    <span className="mt-6 text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Explore
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 6 — ORANGE-RED SIGNAL SECTION (the single bg-primary moment) */}
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
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-8"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Orchestration that makes the process the system. NexDyne clients
              have cut multi-week processes to days and unlocked eight-figure
              operating savings.
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
              We've orchestrated claims, loan origination, customer
              onboarding, and order-to-cash flows—always with executable
              BPMN, real audit trails, and process KPIs the operating committee
              actually trusts.
            </p>
            <Link href="/cases">
              <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-white pb-1 cursor-pointer">
                See How We Help Leaders Win
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SLOT 7 — White Case studies / proof */}
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
              Process orchestration, proved in outcomes.
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
                  <div className="border border-charcoal/10 bg-white">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={result.image}
                        alt={result.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-8 lg:p-10">
                      <span className="block text-[13px] uppercase tracking-[0.1em] text-charcoal/60 mb-4">
                        {result.industry}
                      </span>
                      <h3 className="text-xl text-charcoal font-medium leading-[1.25] mb-4 group-hover:text-primary transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-base text-charcoal/75 leading-[1.55] mb-6">
                        {result.description}
                      </p>
                      <span className="text-[13px] uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                        Read Case
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/cases">
              <span className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold cursor-pointer">
                See All Case Studies
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SLOT 8 — White Related capabilities / cross-sell */}
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
              Related Offerings
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1]"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Adjacent capabilities for a complete orchestration program.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
            {relatedOfferings.map((offering, i) => (
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

      {/* SLOT 9 — Charcoal closing CTA "Ready to Talk?" */}
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
                  Bring our orchestration team into your next operating-model
                  conversation.
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
                    <SelectItem value="insurance">Insurance</SelectItem>
                    <SelectItem value="financial-services">
                      Financial Services
                    </SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="retail">Retail & Consumer</SelectItem>
                    <SelectItem value="professional-services">
                      Professional Services
                    </SelectItem>
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
                  We work with leaders ready to make the process itself the
                  system of record—and treat orchestration as a permanent
                  operating capability.
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
