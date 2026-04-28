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

export default function SecurityCompliance() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  // ── Methodology phases (SLOT 3) ──────────────────────────────────────────────
  const phases = [
    {
      name: "Security posture assessment",
      description:
        "We measure the current security posture against the frameworks that matter for your business — SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR — using actual control evidence rather than self-reported maturity. The assessment names the gaps at the control level, sizes the effort to close each one, and surfaces the operational drift the existing audit cycle has been quietly absorbing.",
    },
    {
      name: "Compliance framework selection and roadmap",
      description:
        "From the assessment we build the compliance roadmap — which frameworks to certify against, which to align with, and the sequencing that gets the highest-leverage control families in place first. The roadmap is sized in calendar time and audit cost, with the prerequisite engineering work explicitly named so the program does not run aground three quarters in.",
    },
    {
      name: "Security architecture design",
      description:
        "We design the target security architecture — identity, access, data protection, network segmentation, secrets management, vulnerability and threat management, incident response — against the control requirements. Each control has an owner, a measurable evidence stream, and an automation path so the audit cycle is a query against the source-of-truth, not a four-week scramble for screenshots.",
    },
    {
      name: "Control implementation and audit readiness",
      description:
        "We implement the controls alongside the engineering and security teams — IaC-enforced policy, logging baselines, vulnerability automation, access reviews, evidence collection — and run the audit-readiness rehearsal before the auditor arrives. By the time the audit window opens, every control has named ownership, current evidence, and a rehearsed narrative.",
    },
    {
      name: "Ongoing assurance and monitoring",
      description:
        "Compliance is a permanent practice, not a one-time certification. We embed the assurance operating cadence — quarterly control reviews, continuous monitoring dashboards, vendor risk reviews, incident exercises — and stand up the GRC tooling that turns the audit cycle into an always-on stream rather than an annual event.",
    },
  ];

  // ── Deliverables (SLOT 4) ────────────────────────────────────────────────────
  const deliverables = [
    {
      name: "Security posture assessment",
      description:
        "Control-level assessment against SOC 2, ISO 27001, HIPAA, PCI-DSS, or GDPR — measured against actual evidence with sized remediation effort per gap and the operational drift surfaced.",
    },
    {
      name: "Compliance roadmap",
      description:
        "Sequenced multi-framework roadmap with calendar, audit cost, prerequisite engineering work, and the certification cadence that aligns with the business case.",
    },
    {
      name: "Target security architecture",
      description:
        "Reference architecture covering identity, access, data protection, segmentation, secrets, vulnerability and threat management, and incident response — with each control mapped to a measurable evidence stream.",
    },
    {
      name: "Control implementation runbook",
      description:
        "Implementation plan with IaC-enforced policy, logging baselines, vulnerability automation, access review cadence, and the evidence-collection workflow that survives a personnel change.",
    },
    {
      name: "Audit readiness package",
      description:
        "Complete audit-readiness package — control narratives, evidence inventory, rehearsed walk-throughs, and the auditor liaison playbook — delivered before the audit window opens.",
    },
    {
      name: "Ongoing assurance program",
      description:
        "Permanent assurance operating model — quarterly control reviews, continuous monitoring dashboards, vendor risk cycle, incident exercise calendar, and the GRC tooling that keeps the audit always-on.",
    },
  ];

  // ── Sibling sub-offerings (SLOT 7) ───────────────────────────────────────────
  const siblings = [
    {
      title: "DevOps & CI/CD",
      link: "/solutions/enterprise-transformation/devops-cicd",
    },
    {
      title: "Infrastructure Modernization",
      link: "/solutions/enterprise-transformation/infrastructure-modernization",
    },
    {
      title: "Cloud Migration Architecture",
      link: "/solutions/enterprise-transformation/cloud-migration-architecture",
    },
    {
      title: "Technology Due Diligence",
      link: "/solutions/enterprise-transformation/technology-due-diligence",
    },
    {
      title: "Technology Strategy",
      link: "/solutions/enterprise-transformation/technology-strategy",
    },
  ];

  // ── Case studies (SLOT 6) ────────────────────────────────────────────────────
  const cases = [
    {
      industry: "B2B SaaS",
      // TODO: replace with real stat
      title:
        "SOC 2 Type II clean opinion landed in 9 months with zero deal-blocking findings",
      description:
        "A B2B SaaS scale-up needed SOC 2 Type II to clear a strategic enterprise contract. We rebuilt the control inventory, automated the evidence streams against the engineering systems, and ran the audit-readiness rehearsal before the auditor arrived. The Type II opinion landed clean nine months into the program with zero deal-blocking findings, and the audit cost in year two ran roughly forty percent below the original quote because the evidence was queryable rather than collected.",
      link: "/cases/saas-soc2-type-ii",
    },
    {
      industry: "Healthcare",
      // TODO: replace with real stat
      title:
        "HIPAA and HITRUST control implementation across 22 clinical applications under a regulated cutover",
      description:
        "A healthcare technology platform was migrating twenty-two clinical applications to cloud under HIPAA and HITRUST constraints simultaneously. We co-designed the security architecture with the migration architecture, embedded the controls into the IaC patterns the application teams built against, and ran the assurance program in parallel with the migration waves. Every application landed inside the regulated estate on the first audit pass.",
      link: "/cases/healthcare-hipaa-hitrust",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Security & Compliance"
        description="Enterprise security architecture and compliance frameworks — SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR — with the control implementation, audit readiness, and ongoing assurance program that turns compliance into an always-on stream."
        canonical="/solutions/enterprise-transformation/security-compliance"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal hero (downshifted H1, ~25% shorter container per Cat 6 entry) */}
      <SolutionHero
        eyebrow="SOLUTION · ENTERPRISE TRANSFORMATION · SECURITY & COMPLIANCE"
        title="Security & Compliance"
        subtitle="Compliance is a control discipline, not an audit event. We assess the posture, sequence the framework roadmap, design the architecture, implement the controls with measurable evidence streams, and embed the assurance program that runs always-on."
        backgroundImage="/enterprise-transformation-hero.jpg"
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
              Stop scrambling for evidence in audit week. Start running compliance as an always-on stream.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                The security and compliance programs we get called into all share the same pattern — a binder of control narratives written for an auditor, an annual scramble to collect evidence, and an engineering organization that treats security as a separate calendar from product. By year three the audit cost has compounded, the security team is a bottleneck on every release, and the controls only exist when somebody is checking. That model breaks the moment a real incident or a real customer-security review lands.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                Compliance done well is a control discipline embedded in the engineering systems. Identity is enforced in IaC. Logging is a default of every service. Access reviews query the source-of-truth, not a spreadsheet. Vulnerability remediation has SLAs and dashboards. Each control has an owner, a measurable evidence stream, and an automation path. The audit cycle becomes a query, not a project. That is the difference between a program that earns enterprise customer trust and one that survives the audit.
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
              A five-phase approach from posture assessment to a permanent assurance program.
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              Each phase is timeboxed and produces a tangible artifact. Most engagements run twenty to forty weeks from assessment to a clean audit opinion under a permanent assurance operating cadence.
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
              Programs that embed controls into the engineering systems typically cut annual audit effort by 40 to 70 percent — and clear audits with materially fewer findings because the evidence is queryable rather than collected.
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
              The economics work because controls live in code, not in a binder. We do not optimize the annual scramble — we engineer it out, so the audit becomes a query against the source-of-truth rather than a four-week project.
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
              When the controls live in code, the audit becomes a query.
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

      {/* SLOT 7 — White intra-cluster sibling sub-offerings (5 links inside Enterprise Transformation) */}
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
              Other Ways We Help in Enterprise Transformation
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
                  Bring our security team into your next compliance conversation.
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
                  We work with leaders who want their next audit to be a query against the source-of-truth rather than a four-week scramble. Security and compliance is how that conversation begins.
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
