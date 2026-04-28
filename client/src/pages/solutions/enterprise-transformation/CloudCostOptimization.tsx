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

export default function CloudCostOptimization() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  // ── Methodology phases (SLOT 3) ──────────────────────────────────────────────
  const phases = [
    {
      name: "Cost baseline and waste identification",
      description:
        "We connect to your AWS, Azure, and GCP billing accounts and reconstruct twelve months of true unit economics — by service, environment, team, and product. Idle resources, orphaned volumes, oversized instances, untagged spend, and unused commitments are surfaced with named owners. The output is the first honest spend report most leadership teams have ever seen on their cloud estate.",
    },
    {
      name: "Optimization strategy",
      description:
        "From the baseline we build a prioritized optimization portfolio — right-sizing, reserved instance and savings plan coverage, storage tiering, network egress reduction, license consolidation, and architecture-level changes that compound. Each move is sized in dollars, sequenced by risk, and scored against the workload teams that need to sign on before anything changes.",
    },
    {
      name: "Automation and tooling deployment",
      description:
        "Manual cost reviews never survive contact with a release calendar. We deploy the FinOps tooling stack — CloudHealth, Apptio Cloudability, native cost dashboards, custom anomaly detection — and wire automated guardrails into the pipelines so wasteful provisioning is caught before it bills, not after.",
    },
    {
      name: "FinOps program operation",
      description:
        "FinOps is a discipline, not a project. We stand up the operating cadence — weekly cost reviews, monthly forecasts versus actuals, quarterly commitment reauthorization, executive cost-performance reporting — and embed the FinOps role into the engineering and finance org so accountability has a permanent home.",
    },
    {
      name: "Scaling and governance",
      description:
        "Once the operating model is proven on the first business unit, we extend it across the enterprise — central policy, federated execution, tagging governance, chargeback or showback models, and architecture review gates that price-test designs before they ship. Cloud cost stops being a quarterly fire drill and becomes a managed line on the operating P&L.",
    },
  ];

  // ── Deliverables (SLOT 4) ────────────────────────────────────────────────────
  const deliverables = [
    {
      name: "Cost baseline and spend report",
      description:
        "Twelve-month reconstructed unit economics by service, environment, team, and product — with the data lineage that makes every number defensible to finance.",
    },
    {
      name: "Waste identification analysis",
      description:
        "Inventory of idle resources, oversized instances, orphaned storage, untagged spend, and underused commitments — each line tied to a named owner and a remediation owner.",
    },
    {
      name: "Prioritized optimization roadmap",
      description:
        "Sequenced portfolio of right-sizing, commitment, architecture, and policy moves — sized in annualized dollars and scored against execution risk and cross-team dependencies.",
    },
    {
      name: "FinOps tooling architecture",
      description:
        "Deployed and integrated FinOps stack — cost analytics, anomaly detection, automated guardrails, and dashboards wired to the source-of-truth billing accounts.",
    },
    {
      name: "Governance and accountability framework",
      description:
        "Operating cadence, RACI, tagging policy, commitment reauthorization process, and the chargeback or showback model that makes cost a co-owned engineering metric.",
    },
    {
      name: "Executive cost performance dashboard",
      description:
        "Production-grade dashboard for the executive team — spend versus forecast, optimization realized, commitment coverage, and the leading indicators that catch drift before it lands on the bill.",
    },
  ];

  // ── Sibling sub-offerings (SLOT 7) ───────────────────────────────────────────
  const siblings = [
    {
      title: "Cloud Migration Architecture",
      link: "/solutions/enterprise-transformation/cloud-migration-architecture",
    },
    {
      title: "Infrastructure Modernization",
      link: "/solutions/enterprise-transformation/infrastructure-modernization",
    },
    {
      title: "DevOps & CI/CD",
      link: "/solutions/enterprise-transformation/devops-cicd",
    },
    {
      title: "Platform Engineering",
      link: "/solutions/enterprise-transformation/platform-engineering",
    },
    {
      title: "Cost Optimization",
      link: "/solutions/enterprise-transformation/cost-optimization",
    },
  ];

  // ── Case studies (SLOT 6) ────────────────────────────────────────────────────
  const cases = [
    {
      industry: "SaaS Platform",
      // TODO: replace with real stat
      title:
        "FinOps program retires 32 percent of annual cloud spend without a single workload migration",
      description:
        "A growth-stage SaaS platform was watching cloud spend outpace revenue for three quarters running. We rebuilt the cost baseline, surfaced 1,400 idle resources finance had been billed for monthly, restructured commitment coverage across two regions, and wired anomaly detection into every account. Twelve months in the program had retired 32 percent of annual run-rate spend without touching a workload.",
      link: "/cases/saas-finops-program",
    },
    {
      industry: "Financial Services",
      // TODO: replace with real stat
      title:
        "Multi-cloud governance lands $14M of annualized savings across 47 product teams",
      description:
        "A diversified financial services group ran AWS, Azure, and GCP across 47 product teams with no shared cost discipline. We deployed a federated FinOps operating model, established the tagging governance, and ran the first three quarters of optimization waves alongside the engineering teams. Annualized savings cleared $14M and the operating cadence carried into year two without consultant presence.",
      link: "/cases/finserv-multi-cloud-finops",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Cloud Cost Optimization"
        description="FinOps for cloud spend — right-sizing, commitment optimization, waste elimination, and the governance cadence that turns cloud cost from a quarterly fire drill into a managed line on the operating P&L."
        canonical="/solutions/enterprise-transformation/cloud-cost-optimization"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal hero (downshifted H1, ~25% shorter container per Cat 6 entry) */}
      <SolutionHero
        eyebrow="SOLUTION · ENTERPRISE TRANSFORMATION · CLOUD COST OPTIMIZATION"
        title="Cloud Cost Optimization"
        subtitle="Cloud bills do not get smaller because someone reads a cost dashboard. We rebuild the baseline, surface the waste, restructure commitments, deploy the FinOps operating model, and embed the discipline so cost stops being the quarterly surprise it has been."
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
              Stop chasing cloud bills after the fact. Start running cloud as a managed line on the operating P&L.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                The leadership teams we get called into already know cloud spend is too high. What they cannot answer is the next question — by how much, on what, owned by whom, and what they are willing to give up to take it down. Without that answer, every optimization wave runs on opinion, the engineering teams pick the path of least resistance, and the bill compounds quietly between quarters.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                FinOps done well is a permanent operating discipline, not a one-off audit. We rebuild the cost baseline against a real unit-economic model, deploy the tooling and guardrails that make waste expensive to ship, and stand up the cadence that keeps engineering and finance on the same page every week. The result is a cloud estate where spend tracks workload, forecasts hold, and architectural decisions are priced before they get committed.
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
              A five-phase approach from cost baseline to a permanent FinOps practice.
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              Each phase is timeboxed and produces a tangible artifact. Most engagements run sixteen to twenty-eight weeks from baseline to a federated operating model running across multiple business units.
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
              Mature FinOps programs typically retire 20 to 35 percent of annualized cloud spend in the first twelve months — and hold the gain because the operating cadence, not a one-time audit, is what produced it.
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
              The economics work because every optimization move is owned, sized, and tracked against forecast. We do not run a four-week audit and hand over a deck — we build the operating discipline that compounds the savings into year two and beyond.
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
              When the operating model owns the spend, the savings compound.
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
                  Bring our FinOps team into your next cloud cost conversation.
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
                  We work with leaders who want their cloud bill to track workload rather than surprise. FinOps is how that conversation starts.
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
