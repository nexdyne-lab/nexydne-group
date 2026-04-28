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

export default function IPaaS() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  const services = [
    {
      title: "Integration Platform Implementation",
      description:
        "Stand up Mulesoft, Boomi, or Informatica with the right architecture, naming conventions, and reusable patterns. Built to scale, not just to work.",
      link: "/solutions/ipaas/platform-implementation",
    },
    {
      title: "API Management",
      description:
        "Gateways, developer portals, throttling, versioning. We turn ad-hoc endpoints into a managed API estate your partners can actually consume.",
      link: "/solutions/ipaas/api-management",
    },
    {
      title: "Event-Driven Architecture",
      description:
        "Kafka, EventBridge, Pub/Sub. We design event backbones that decouple systems and let your enterprise react in milliseconds, not minutes.",
      link: "/solutions/ipaas/event-driven",
    },
    {
      title: "B2B / EDI Integration",
      description:
        "Trading partner onboarding, EDI mapping, AS2 and SFTP. We modernize legacy B2B exchange while keeping the partner ecosystem unbroken.",
      link: "/solutions/ipaas/b2b-edi",
    },
    {
      title: "Data Sync & ETL",
      description:
        "Bulk and real-time data movement between SaaS, on-prem, and the warehouse. We build pipelines that survive schema drift and partial failure.",
      link: "/solutions/ipaas/data-sync-etl",
    },
    {
      title: "Integration Governance",
      description:
        "Patterns, standards, security review, lifecycle management. The governance model that keeps the integration estate from collapsing under its own weight.",
      link: "/solutions/ipaas/governance",
    },
  ];

  const outcomes = [
    {
      stat: "300+",
      label: "integrations delivered across mid-market and enterprise platforms",
    },
    {
      stat: "55%",
      label: "average reduction in cost per new integration after platform standardization",
    },
    {
      stat: "4x",
      label: "typical acceleration in partner-onboarding cycle time",
    },
  ];

  const approach = [
    {
      title: "Map the Integration Estate",
      description:
        "Inventory every connector, every interface, every data flow. You can't modernize what you can't see.",
      link: "/solutions/ipaas/governance",
    },
    {
      title: "Choose the Right Patterns",
      description:
        "Point-to-point, hub-and-spoke, event-driven, API-led. We pick the patterns that fit your data, latency, and team shape.",
      link: "/solutions/ipaas/event-driven",
    },
    {
      title: "Implement with Reusability",
      description:
        "Every interface a building block. We design assets that the next team can compose, not just inherit.",
      link: "/solutions/ipaas/platform-implementation",
    },
    {
      title: "Govern from Day One",
      description:
        "Standards, security, monitoring, deprecation. Integration is a living estate—we treat it that way.",
      link: "/solutions/ipaas/governance",
    },
  ];

  const cases = [
    {
      industry: "Manufacturing",
      title: "Industrial Manufacturer Replaces 47 Point-to-Point Integrations with Mulesoft",
      description:
        "An API-led architecture cut new integration build time from twelve weeks to three and unlocked real-time supply-chain visibility.",
      image: "/images/case-ipaas-manufacturing.jpg",
      link: "/cases/manufacturer-mulesoft",
    },
    {
      industry: "Healthcare",
      title: "Health System Connects Twelve Systems Behind a Unified API Layer",
      description:
        "Boomi-based integration platform now powers patient registration, claims, and analytics from a single source of orchestrated truth.",
      image: "/images/case-ipaas-health.jpg",
      link: "/cases/health-system-boomi",
    },
  ];

  const relatedOfferings = [
    {
      title: "API Integration",
      link: "/solutions/api-integration",
    },
    {
      title: "Process Orchestration",
      link: "/solutions/process-orchestration",
    },
    {
      title: "Data Platform",
      link: "/solutions/data-platform",
    },
    {
      title: "Cloud Infrastructure",
      link: "/solutions/cloud-infrastructure",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <SEO
        title="Integration Platform as a Service"
        description="Connect SaaS, on-prem, data, and APIs into a coherent enterprise. Mulesoft, Boomi, Informatica—implemented, governed, and scaled."
        canonical="/solutions/ipaas"
      />
      <Navigation />

      {/* SLOT 1 — Charcoal hero */}
      <SolutionHero
        eyebrow="SOLUTION · INTEGRATION PLATFORM AS A SERVICE"
        title="Integration Platform as a Service"
        subtitle="Connect SaaS, on-prem systems, data warehouses, and APIs into a coherent enterprise. We implement, govern, and scale the integration estate that the rest of your strategy depends on."
        backgroundImage="/images/solution-ipaas.jpg"
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
              Integration is the silent infrastructure of every digital strategy.
              When it works, no one notices. When it doesn't, nothing else
              ships.
            </h3>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                Most mid-market companies have accumulated dozens of point-to-point
                integrations over the last decade—each one written by a
                different team, in a different style, with a different failure
                mode. The cost shows up in two ways: every new system takes longer
                than the last to connect, and the existing connections break in
                ways nobody can predict.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch]">
                NexDyne's{" "}
                <Link
                  href="/insights/ipaas-modernization-playbook"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  integration consultants
                </Link>{" "}
                replace that sprawl with a managed platform—Mulesoft, Boomi,
                or Informatica—designed around reusable assets, governed
                APIs, and an event backbone that lets the rest of your enterprise
                actually move.
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
              Six ways we turn integration sprawl into a platform.
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              We combine deep platform expertise with disciplined architecture to
              deliver integration estates that scale, fail gracefully, and
              accelerate every project that touches them.
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
              Measurable outcomes from integration platforms in production.
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
              The Platform Integration Framework
            </h3>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] max-w-[60ch] mt-6">
              Four integrated phases that move integration from a tactical cost
              center to a strategic platform.
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
              Integration that accelerates everything else. NexDyne clients have
              cut new-integration cost in half and shipped enterprise-wide
              programs in months instead of years.
            </h2>
            <p className="text-base md:text-lg text-white/85 leading-[1.65] max-w-[60ch] mb-8">
              We've replaced point-to-point sprawl with API-led platforms,
              stood up event backbones for real-time enterprises, and modernized
              B2B exchange without breaking a single trading partner.
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
              Integration platforms, proved in outcomes.
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
              Adjacent capabilities for a complete integration program.
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
                  Bring our integration team into your next architecture review.
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
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="financial-services">
                      Financial Services
                    </SelectItem>
                    <SelectItem value="retail">Retail & Consumer</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
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
                  We work with leaders ready to retire integration sprawl and
                  invest in a platform that compounds across every project that
                  follows.
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
