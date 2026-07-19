import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
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

const ease = [0.22, 1, 0.36, 1] as const;

/** Red-rule eyebrow for light surfaces */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block h-[3px] w-9 bg-primary" />
      <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}

export default function IntelligentProcessOptimization() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  // ── Data arrays preserved verbatim from prior source ─────────────────────────
  const services = [
    {
      title: "Process Discovery & Mining",
      description:
        "Uncover hidden inefficiencies and bottlenecks through advanced process mining, creating a data-driven foundation for transformation.",
      link: "/solutions/process-optimization/process-discovery-mining",
    },
    {
      title: "Intelligent Automation Design",
      description:
        "Design and implement automation solutions that combine RPA, AI, and workflow orchestration for maximum impact.",
      link: "/solutions/process-optimization/intelligent-automation-design",
    },
    {
      title: "Workflow Optimization",
      description:
        "Streamline end-to-end workflows to eliminate handoffs, reduce cycle times, and improve quality at every step.",
      link: "/solutions/process-optimization/workflow-optimization",
    },
    {
      title: "AI-Powered Decision Support",
      description:
        "Deploy machine learning models that augment human decision-making with predictive insights and recommendations.",
      link: "/solutions/process-optimization/ai-powered-decision-support",
    },
    {
      title: "Change Management & Training",
      description:
        "Ensure successful adoption through comprehensive change management, training programs, and ongoing support.",
      link: "/solutions/process-optimization/change-management-training",
    },
    {
      title: "Continuous Improvement Programs",
      description:
        "Establish frameworks for ongoing optimization, measurement, and iteration to sustain and extend initial gains.",
      link: "/solutions/process-optimization/continuous-improvement-programs",
    },
  ];

  const outcomes = [
    {
      stat: "150+",
      label: "process optimization programs delivered in the last five years",
    },
    {
      stat: "4.2x",
      label: "faster end-to-end cycle times for our clients",
    },
    {
      stat: "1.5–3x",
      label: "ROI achieved within the first 12 months",
    },
  ];

  const approach = [
    {
      title: "Accelerated Performance Transformation",
      description:
        "Firm-wide performance, rebuilt around capability, sustainable change, and value delivery within 12–18 months.",
      image: "/images/approach-strategy.jpg",
      link: "/solutions/intelligent-process-optimization",
    },
    {
      title: "Digital Process Transformation",
      description:
        "The technical capabilities you need to compete in a rapidly evolving market.",
      image: "/images/digital-transformation-abstract.jpg",
      link: "/capabilities/business-building/digital-transformation-accelerator",
    },
    {
      title: "People and Organization",
      description:
        "Better results, delivered through your people and the way your teams work.",
      image: "/images/ai-team-collaboration.jpg",
      link: "/about/team",
    },
    {
      title: "Earned Growth Optimization",
      description:
        "Profitable, durable growth built on a customer-centric strategy.",
      image: "/images/abstract-growth.jpg",
      link: "/solutions/customer-intelligence",
    },
    {
      title: "Sustainability Integration",
      description:
        "Sustainability connected to your purpose and your strategy.",
      image: "/images/green-strategy.jpg",
      link: "/solutions/enterprise-transformation",
    },
  ];

  const cases = [
    {
      industry: "Manufacturing & Services",
      title: "Regional Manufacturer Cuts Order Processing Time by 78%",
      description:
        "CEO discusses how a multifaceted transformation culminated in a stunning operational turnaround.",
      image: "/images/case-logistics.jpg",
      link: "/cases/logistics-shipment-automation",
    },
    {
      industry: "Professional Services",
      title:
        "A Bold New Strategy Restores a Firm to a Leadership Position",
      description:
        "Its holistic approach to simplification, execution discipline, and digitalization has proved transformational.",
      image: "/images/case-saas.jpg",
      link: "/cases/saas-customer-onboarding",
    },
  ];

  const relatedOfferings = [
    {
      title: "Change Management and Implementation",
      link: "/solutions/enterprise-transformation",
    },
    {
      title: "Chief Transformation Officer Advisory",
      link: "/services/fractional-cfo",
    },
    {
      title: "NexDyne Accelerator",
      link: "/capabilities/generative-ai",
    },
    {
      title: "NexDyne Academy",
      link: "/about/team",
    },
    {
      title: "Accelerated Performance Transformation",
      link: "/solutions/intelligent-process-optimization",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE] font-sans text-black selection:bg-primary selection:text-white">
      <SEO
        title="Intelligent Process Optimization"
        description="Transform manual operations into autonomous systems. Eliminate bottlenecks and accelerate execution with intelligent automation."
        canonical="/solutions/intelligent-process-optimization"
      />
      <Navigation />

      {/* SLOT 1 — Hero with real image */}
      <SolutionHero
        eyebrow="SOLUTION · INTELLIGENT PROCESS OPTIMIZATION"
        title="Intelligent Process Optimization"
        subtitle="Automate complexity. Accelerate execution. We help growing companies break through operational ceilings with intelligent, adaptive systems built for how work actually gets done."
        heroImage="/images/hero-process-mining.jpg"
        heroFocal="65% 45%"
        containerClassName="min-h-[64vh]"
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "See Client Results", href: "/cases" }}
      />

      {/* SLOT 2 — Our Perspective: editorial intro + image right */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="lg:col-span-7"
            >
              <Eyebrow>Our Perspective</Eyebrow>
              <h2 className="nx-h2 text-black mb-8 max-w-[20ch]">
                Growth creates complexity. Complexity creates friction. We break
                the ceiling.
              </h2>
              <div className="space-y-6 max-w-[60ch]">
                <p className="text-[1.05rem] md:text-[1.15rem] text-black/80 leading-[1.7]">
                  For growing companies, growth carries a hidden cost: the
                  systems that carried you to $10M quietly become the bottleneck
                  at $50M. Handoffs multiply, decisions slow, and the
                  organization spends its energy fighting its own operations
                  instead of the market.
                </p>
                <p className="text-[1.05rem] md:text-[1.15rem] text-black/80 leading-[1.7]">
                  AI, low-code platforms, and cloud infrastructure have changed
                  what a lean team can run. Our{" "}
                  <Link
                    href="/insights/process-mining-guide"
                    className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors"
                  >
                    process optimization consultants
                  </Link>{" "}
                  work alongside your people to redesign how work actually flows —
                  turning operational drag into a durable, compounding advantage.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="lg:col-span-5"
            >
              {/* Fills the height of the text column on lg (items-stretch);
                  fixed height on smaller screens so it never runs long. */}
              <div className="h-64 sm:h-80 lg:h-full min-h-[340px] overflow-hidden ring-1 ring-black/10">
                <img
                  src="/images/insight-ai-powered-operations.jpg"
                  alt="An operator monitoring a live production line"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SLOT 3 — How We Help: EY flat hairline cards */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>How We Help Clients</Eyebrow>
            <h2 className="nx-h2 text-black mb-6">
              Six ways we turn friction into flow.
            </h2>
            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
              We combine deep operational expertise with cutting-edge technology
              to transform how you work — eliminating friction, accelerating
              execution, and building sustainable competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={service.link}
                  className="group block bg-white p-8 lg:p-9 ring-1 ring-black/10 hover:ring-black/30 transition-shadow cursor-pointer h-full"
                >
                  <h3 className="nx-h3 text-black mb-3 leading-[1.25]">
                    {service.title}
                  </h3>
                  <p className="text-base text-black/75 leading-[1.6] mb-6">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-black">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 4 — Experience & Impact: 3 centered metrics */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <Eyebrow>Our Experience &amp; Impact</Eyebrow>
          </motion.div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
            {outcomes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="border-t border-black/15 pt-7 text-center"
              >
                <div className="text-[2.7rem] md:text-[3.6rem] text-black font-bold tracking-[-0.025em] leading-[1]">
                  {item.stat}
                </div>
                <div className="text-[0.95rem] text-black/65 mt-4 leading-[1.5] max-w-[30ch] mx-auto">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 5 — Full Potential Optimization: image cards, one row */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>How We Think About It</Eyebrow>
            <h2 className="nx-h2 text-black mb-6">Full Potential Optimization</h2>
            <p className="text-[1.05rem] md:text-[1.1rem] leading-[1.7] text-black/75 max-w-[62ch]">
              Alter your organization's trajectory in pursuit of extraordinary
              results — through five integrated lenses.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {approach.map((lens, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              >
                <Link href={lens.link} className="group block cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden mb-5">
                    <img
                      src={lens.image}
                      alt=""
                      aria-hidden
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="text-[1.05rem] font-semibold text-black leading-[1.3] tracking-[-0.01em] mb-2 group-hover:text-primary transition-colors">
                    {lens.title}
                  </h3>
                  <p className="text-[0.9rem] text-black/65 leading-[1.55]">
                    {lens.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 6 — The Outcome (dark signal band) */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-16 md:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-4xl"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
              The Outcome
            </span>
            <h2 className="nx-h2 text-white mb-8 leading-[1.15]">
              Real outcomes, faster. NexDyne clients have achieved double-digit
              improvements in productivity and time-to-market through intelligent
              process optimization.
            </h2>
            <p className="text-[1.05rem] md:text-[1.12rem] text-white/85 leading-[1.7] max-w-[62ch] mb-9">
              We've worked with leading retailers, manufacturers, and
              professional services firms to test and scale AI-driven process
              change — then move it from pilot to enterprise standard.
            </p>
            <Link href="/cases">
              <span className="group inline-flex items-center gap-2 bg-primary text-primary-foreground text-[13px] font-semibold uppercase tracking-[0.1em] px-7 py-4 hover:bg-primary-hover transition-colors cursor-pointer">
                See How We Help Leaders Win
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SLOT 7 — Client Results: EY open cards */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Client Results</Eyebrow>
            <h2 className="nx-h2 text-black">Transformation, proved in outcomes.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {cases.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              >
                {/* EY open card — flush image, text directly on the canvas */}
                <Link href={result.link} className="group block cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden mb-6">
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.1em] text-black/60 mb-3">
                    {result.industry}
                  </p>
                  <h3 className="text-[1.35rem] font-semibold text-black tracking-[-0.015em] leading-[1.3] mb-3 group-hover:text-primary transition-colors">
                    {result.title}
                  </h3>
                  <p className="text-[0.98rem] text-black/70 leading-[1.6] mb-4 max-w-[52ch]">
                    {result.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-black">
                    Read the case
                    <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/cases">
              <span className="group inline-flex items-center gap-2 border border-black/40 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-black transition-colors hover:border-black hover:bg-black hover:text-white cursor-pointer">
                See All Case Studies
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SLOT 8 — Related Offerings: hairline cards */}
      <section className="bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-12 md:py-16 lg:py-20 border-t border-black/10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 md:mb-14 max-w-4xl"
          >
            <Eyebrow>Related Offerings</Eyebrow>
            <h2 className="nx-h2 text-black">
              Adjacent capabilities for a complete transformation.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedOfferings.map((offering, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={offering.link}
                  className="group flex items-center justify-between gap-3 ring-1 ring-black/10 hover:ring-black/40 px-6 py-6 min-h-[104px] transition-shadow cursor-pointer h-full"
                >
                  <span className="text-[1.05rem] font-semibold text-black leading-[1.3] tracking-[-0.01em] group-hover:text-primary transition-colors">
                    {offering.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLOT 9 — Closing CTA (dark) */}
      <section className="bg-black text-white">
        <div className="mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 py-16 md:py-20 lg:py-24">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-6">
                  Ready to Talk?
                </span>
                <h2 className="nx-h2 text-white mb-10 leading-[1.12]">
                  Bring our experts into your next operating-model conversation.
                </h2>
                <p className="text-[1.05rem] md:text-[1.12rem] text-white/80 leading-[1.7] mb-6 max-w-[52ch]">
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
                    <SelectItem value="retail">Retail &amp; Consumer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
              >
                <p className="text-[1.05rem] md:text-[1.12rem] text-white/80 leading-[1.7] mb-8 max-w-[52ch]">
                  We work with ambitious leaders who want to define the future,
                  not hide from it. Together, we achieve extraordinary outcomes.
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
                    <span className="group inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover transition-colors text-[13px] uppercase tracking-[0.1em] font-semibold px-7 py-4 cursor-pointer">
                      Contact us
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
