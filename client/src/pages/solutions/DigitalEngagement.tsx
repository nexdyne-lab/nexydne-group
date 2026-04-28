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

export default function DigitalEngagement() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  const services = [
    {
      title: "Marketing Automation",
      description:
        "Implement and optimize Marketo, HubSpot, Braze, or Iterable. We design programs that move customers down the funnel without burning the list.",
      link: "/solutions/digital-engagement/marketing-automation",
    },
    {
      title: "Lifecycle Messaging",
      description:
        "Onboarding, activation, retention, win-back. We design the full customer lifecycle so each message earns the next one.",
      link: "/solutions/digital-engagement/lifecycle-messaging",
    },
    {
      title: "Personalization",
      description:
        "From rules-based segmentation to ML-driven recommendations. We deploy personalization that materially moves conversion, not just open rates.",
      link: "/solutions/digital-engagement/personalization",
    },
    {
      title: "Loyalty Programs",
      description:
        "Design loyalty mechanics that create durable repeat behavior—not just discount addiction. Earn margin, not erode it.",
      link: "/solutions/digital-engagement/loyalty-programs",
    },
    {
      title: "Web & Mobile Experience",
      description:
        "Conversion-focused web and mobile experiences. We optimize the moments where intent meets product—and revenue follows.",
      link: "/solutions/digital-engagement/web-mobile-experience",
    },
    {
      title: "A/B Testing & Optimization",
      description:
        "Stand up a real experimentation program: governance, statistical rigor, executive reporting. Decisions get faster and the wins compound.",
      link: "/solutions/digital-engagement/ab-testing",
    },
  ];

  const outcomes = [
    {
      stat: "200+",
      label: "engagement programs delivered for B2C and B2B clients",
    },
    {
      stat: "41%",
      label: "median lift in lifecycle revenue across our engagements",
    },
    {
      stat: "2.7x",
      label: "average return on incremental marketing technology spend",
    },
  ];

  const approach = [
    {
      title: "Map the Customer Lifecycle",
      description:
        "We chart the actual journey from first impression to repeat purchase—and find the moments where engagement actually moves revenue.",
      link: "/solutions/digital-engagement/lifecycle-messaging",
    },
    {
      title: "Wire the Stack",
      description:
        "CDP, ESP, automation, analytics, web, mobile. We connect the systems so a single customer view drives every channel in real time.",
      link: "/solutions/digital-engagement/marketing-automation",
    },
    {
      title: "Design Programs That Earn",
      description:
        "Onboarding, retention, reactivation. We design programs measured on incremental revenue, not vanity engagement metrics.",
      link: "/solutions/digital-engagement/personalization",
    },
    {
      title: "Test, Learn, Compound",
      description:
        "Stand up a disciplined experimentation cadence so the program improves every quarter—not every reorg.",
      link: "/solutions/digital-engagement/ab-testing",
    },
  ];

  const cases = [
    {
      industry: "Retail & E-commerce",
      title: "Specialty Retailer Lifts Lifecycle Revenue 38% in Two Quarters",
      description:
        "End-to-end automation rebuild plus personalized lifecycle programs unlocked durable repeat-purchase behavior across email and SMS.",
      image: "/images/case-engage-retail.jpg",
      link: "/cases/retail-engagement",
    },
    {
      industry: "SaaS",
      title: "B2B SaaS Cuts Trial-to-Paid Lag by 44%",
      description:
        "Behavior-triggered onboarding journeys replaced static drip sequences and pulled forward revenue recognition by weeks per cohort.",
      image: "/images/case-engage-saas.jpg",
      link: "/cases/saas-onboarding",
    },
  ];

  const relatedOfferings = [
    {
      title: "Customer Intelligence",
      link: "/solutions/customer-intelligence",
    },
    {
      title: "Customer Portal",
      link: "/solutions/customer-portal",
    },
    {
      title: "Conversational AI",
      link: "/solutions/conversational-ai",
    },
    {
      title: "App Development",
      link: "/solutions/app-development",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Digital Engagement"
        description="Customer engagement across email, web, mobile, and in-app. Drive retention, conversion, and lifecycle revenue at scale."
        canonical="/solutions/digital-engagement"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal hero */}
      <SolutionHero
        eyebrow="SOLUTION · DIGITAL ENGAGEMENT"
        title="Digital Engagement"
        subtitle="Customer engagement across email, web, mobile, and in-app—designed to compound retention, conversion, and lifecycle revenue."
        backgroundImage="/images/solution-digital-engagement.jpg"
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
              Most engagement programs measure activity. Few measure
              incremental revenue. The gap is where margin disappears.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                Open rates climb. Click rates climb. Sends climb. And revenue
                stays flat—because the program is optimizing for the
                wrong outcome. The engagement industry has produced more
                tooling than discipline, and the cost shows up in CAC and
                churn.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                NexDyne's{" "}
                <Link
                  href="/insights/lifecycle-economics"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  digital engagement consultants
                </Link>{" "}
                build programs measured on incremental revenue—designed
                across the full lifecycle, instrumented end-to-end, and tied
                directly to P&L outcomes the CFO will defend.
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
              Six ways we turn engagement into revenue.
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              We combine martech depth with disciplined program design to
              deliver lifecycle engagement that compounds in value rather than
              fatigues the customer.
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
              Measurable outcomes from engagement programs in market.
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
              The Engagement-to-Revenue Framework
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              Four integrated phases that turn fragmented activity into
              compounding lifecycle revenue.
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
              Engagement that earns its keep. NexDyne clients have lifted
              lifecycle revenue by 41% on median—measured by incremental
              dollars, not opens or clicks.
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
              We've rebuilt engagement programs across retail, SaaS,
              financial services, and consumer subscription—tying every
              touchpoint to P&L the CFO will defend.
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
              Engagement, proved in outcomes.
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
              Adjacent capabilities for a complete engagement program.
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
                  Stop measuring opens. Start compounding revenue.
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
                    <SelectItem value="retail">Retail & E-commerce</SelectItem>
                    <SelectItem value="saas">SaaS & Subscription</SelectItem>
                    <SelectItem value="financial-services">
                      Financial Services
                    </SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="travel">Travel & Hospitality</SelectItem>
                    <SelectItem value="b2b">B2B</SelectItem>
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
                  We work with leaders who want lifecycle programs measured on
                  the same yardstick as the rest of the business—
                  incremental margin and durable customer value.
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
