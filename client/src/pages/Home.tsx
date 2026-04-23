import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { BainHero } from "@/components/BainHero";
import { CapabilitiesExplorer } from "@/components/CapabilitiesExplorer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SEO
        title="Home"
        description="NexDyne Consulting Group combines Human Intelligence, AI, and Governance to deliver controlled, scalable transformation for mid-market leaders."
        canonical="/"
      />

      {/* Navigation */}
      <Navigation />

      {/* Homepage Hero (full-screen editorial carousel) */}
      <BainHero />

      {/* Our Perspective — left-aligned intro + featured topics bar */}
      <section className="py-20 md:py-24 bg-white">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                Our Perspective
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] text-charcoal leading-[1.1]" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>
                Governing Intelligence. Scaling Judgment. Leading in the Age of Intelligent Machines.
              </h2>
              <p className="mt-6 md:mt-8 text-[17px] md:text-lg text-charcoal/80 leading-[1.7] max-w-3xl">
                The organizations that will define the next decade will be the ones that govern intelligence as deliberately as they deploy it. NexDyne combines deep industry expertise with structured intelligence governance to help ambitious leaders harness AI, data, and operational power — while strengthening the human judgment, accountability, and trust that no machine can provide. From modernizing legacy systems to designing AI-enabled operating models, we build transformations that perform, endure, and scale. NexDyne is where governance meets growth.
              </p>
            </motion.div>
          </div>

          {/* Featured topics row — single thin top rule, no double border */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-charcoal/15">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-6 sm:gap-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/50 shrink-0">
                NexDyne Spotlight
              </span>
              <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 sm:gap-x-10">
                <Link href="/capabilities/artificial-intelligence">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                    Artificial Intelligence
                  </span>
                </Link>
                <Link href="/capabilities/technology">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                    Technology
                  </span>
                </Link>
                <Link href="/capabilities/growth-marketing-sales">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                    Growth &amp; Marketing
                  </span>
                </Link>
                <Link href="/insights/ceo-guide-data-modernization">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                    CEO Agenda
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI and Technology Consulting — edge-to-edge 2-column, no overlay gauze */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px] md:min-h-[560px]">
          {/* Left — photograph, full fidelity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[350px] lg:min-h-0 overflow-hidden"
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/URgwZkCckpcISJKD.jpg"
              alt="AI and Technology Consulting"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Right — text column, unified inner padding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-20 md:py-24"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5 block">
              AI &amp; Technology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] text-charcoal leading-[1.15] mb-6" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>
              AI and Technology Consulting
            </h2>
            <p className="text-base sm:text-lg text-charcoal/80 leading-[1.7] mb-10 max-w-xl">
              Learn how our AI and Technology consulting is helping clients to outcompete and deliver value at scale through the latest trends in tech. From intelligent automation and machine learning to cloud-native architecture and data strategy, we partner with organizations to build resilient, future-ready technology foundations.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <Link href="/capabilities/ai-technology-consulting">
                <span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer">
                  Explore Our AI Solutions
                </span>
              </Link>
              <Link href="/capabilities">
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  Our Capabilities
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Explorer */}
      <CapabilitiesExplorer />

      {/* Our Solutions — flat cards, image + title + description always visible */}
      <section className="py-20 md:py-24 bg-white">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl mb-14 md:mb-16">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
              Our Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] text-charcoal leading-[1.15]" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>
              Our Operational Excellence Services and Tools
            </h2>
            <p className="text-base sm:text-lg text-charcoal/70 leading-[1.7] mt-6 max-w-3xl">
              The following services and tools provide a glimpse into the level of sophistication and rigor our operational excellence consulting experts bring to every client engagement.
            </p>
          </div>

          {/* Flat 2x2 grid — no border, no shadow, image on top, text below, always visible */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 lg:gap-14">
            {[
              {
                title: "Intelligent Process Optimization",
                description: "We help organizations transform manual operations into autonomous systems, eliminating bottlenecks and accelerating execution.",
                link: "/solutions/intelligent-process-optimization",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/aPMHiULHxWrZFekS.png"
              },
              {
                title: "Data-Driven Customer Intelligence",
                description: "We help organizations unlock deep customer insights through advanced analytics, predicting behavior and driving loyalty at scale.",
                link: "/solutions/data-driven-customer-intelligence",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/TZWlVXiZjPvjowkn.png"
              },
              {
                title: "Scalable Enterprise Transformation",
                description: "We help organizations modernize their core technology stack, building cloud-native infrastructure that scales with ambition.",
                link: "/solutions/scalable-enterprise-transformation",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/bHjSZiUFqOwbpAdw.png"
              },
              {
                title: "Accelerating Business Growth",
                description: "We help organizations launch new digital products and channels, driving revenue through e-commerce and digital innovation.",
                link: "/solutions/accelerating-business-growth",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663032212491/sgqzveAkMmuHhDhb.png"
              }
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group"
              >
                <Link
                  href={solution.link}
                  className="block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <div className="cursor-pointer">
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden bg-subtle">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                    {/* Title + description below image, always visible */}
                    <div className="pt-6 md:pt-7">
                      <h3 className="text-xl sm:text-2xl md:text-[1.625rem] text-charcoal leading-[1.2] group-hover:text-primary transition-colors duration-200" style={{ fontWeight: 500, letterSpacing: "-0.015em" }}>
                        {solution.title}
                      </h3>
                      <p className="mt-3 text-[15px] text-charcoal/70 leading-[1.65] max-w-md">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights — keep editorial grid, strip icons & gauzes, text-link CTAs */}
      <section className="py-20 md:py-24 bg-subtle">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 md:mb-16">
            <div className="max-w-3xl">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                Insights
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] text-charcoal leading-[1.15]" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>
                Latest Insights
              </h2>
              <p className="text-base sm:text-lg text-charcoal/70 mt-5 max-w-2xl leading-[1.7]">
                Practical perspectives for mid-market leaders navigating growth and transformation.
              </p>
            </div>
            <Link href="/insights">
              <span className="inline-block text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                View All Insights
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
            {/* Featured article — large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link href="/insights/mid-market-ai-guide">
                <div className="cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden bg-white">
                    <img
                      src="/images/insight-ai-midmarket.jpg"
                      alt="How Mid-Market Companies Are Winning with AI"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-6 md:pt-7">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">Featured</span>
                    <h3 className="mt-3 text-2xl sm:text-[1.75rem] md:text-[2rem] text-charcoal leading-[1.2] group-hover:text-primary transition-colors" style={{ fontWeight: 500, letterSpacing: "-0.015em" }}>
                      How Mid-Market Companies Are Winning with AI: A Practical Guide
                    </h3>
                    <p className="mt-4 text-[15px] md:text-base text-charcoal/70 leading-[1.7] max-w-xl">
                      Discover how growing businesses are leveraging artificial intelligence to compete with larger enterprises — without the enterprise budget.
                    </p>
                    <span className="mt-5 inline-block text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 group-hover:border-primary group-hover:text-primary transition-colors pb-1">
                      Read Article
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Secondary articles — stacked */}
            <div className="flex flex-col gap-8 md:gap-10">
              {[
                {
                  title: "5 Signs Your Business Is Ready for Digital Transformation",
                  description: "Key indicators that signal it's time to modernize your operations and technology stack.",
                  category: "Digital Strategy",
                  link: "/insights/digital-transformation-readiness",
                  image: "/images/insight-digital-transform.jpg"
                },
                {
                  title: "Scaling Operations Without Breaking the Bank",
                  description: "Cost-effective strategies for mid-market companies looking to grow efficiently.",
                  category: "Operations",
                  link: "/insights/scaling-operations",
                  image: "/images/insight-scaling-ops.jpg"
                },
                {
                  title: "Customer Intelligence for Growing Businesses",
                  description: "How to build data-driven customer insights that drive retention and revenue.",
                  category: "Customer Strategy",
                  link: "/insights/customer-intelligence",
                  image: "/images/insight-customer-intel.jpg"
                }
              ].map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group"
                >
                  <Link href={article.link}>
                    <div className="flex gap-5 sm:gap-6 cursor-pointer">
                      <div className="w-1/3 sm:w-2/5 shrink-0 aspect-[4/3] overflow-hidden bg-white">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">{article.category}</span>
                        <h3 className="mt-2 text-base sm:text-lg md:text-xl text-charcoal leading-[1.25] group-hover:text-primary transition-colors" style={{ fontWeight: 500, letterSpacing: "-0.01em" }}>
                          {article.title}
                        </h3>
                        <p className="mt-2 text-[14px] text-charcoal/70 leading-[1.65] hidden sm:block">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Start the Conversation — clean form, no decorative chevron SVG */}
      <section className="py-20 md:py-24 bg-white border-t border-charcoal/10">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — interest selector */}
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                Contact
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] text-charcoal leading-[1.15] mb-10" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>
                Start the Conversation.
              </h2>

              <div className="space-y-5">
                <label className="block text-sm text-charcoal/70">
                  I would like to speak with your team about:
                </label>
                <select
                  className="w-full appearance-none bg-white border-b border-charcoal/30 text-lg md:text-xl text-charcoal py-3 pr-8 focus:outline-none focus:border-primary transition-colors"
                  defaultValue="ai-intelligent-systems"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23242424' stroke-opacity='0.6' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.25rem center",
                    backgroundSize: "10px 6px"
                  }}
                >
                  <option value="ai-intelligent-systems">AI &amp; Intelligent Systems</option>
                  <option value="strategy-corporate-finance">Strategy &amp; Corporate Finance</option>
                  <option value="operations-transformation">Operations Transformation</option>
                  <option value="growth-marketing-sales">Growth, Marketing &amp; Sales</option>
                  <option value="data-transformation">Data Transformation</option>
                  <option value="business-building-ventures">Business Building &amp; Ventures</option>
                  <option value="technology-infrastructure">Technology &amp; Infrastructure</option>
                  <option value="risk-resilience">Risk &amp; Resilience</option>
                  <option value="digital-twins-iot">Digital Twins &amp; IoT</option>
                </select>
              </div>
            </div>

            {/* Right — email + CTA */}
            <div>
              <p className="text-base sm:text-lg text-charcoal/80 mb-10 leading-[1.7] max-w-xl">
                We work with leaders who believe governance comes before automation — and that the organizations built to last will be the ones where human judgment scales with the technology around it.
              </p>

              <div className="mb-8">
                <label htmlFor="contact-email" className="block text-sm text-charcoal/70 mb-2">
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-0 py-3 text-lg border-b border-charcoal/30 focus:border-primary focus:outline-none transition-colors bg-transparent placeholder:text-charcoal/40"
                />
              </div>

              <Link href="/contact">
                <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Careers — edge-to-edge 2-column */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px] md:min-h-[520px]">
          {/* Left — text card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-subtle flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-20 md:py-24"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5 block">
              NexDyne Careers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] text-charcoal leading-[1.15] mb-6" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>
              Where Human Intelligence Leads
            </h2>
            <p className="text-base sm:text-lg text-charcoal/80 leading-[1.7] mb-10 max-w-lg">
              We help organizations govern intelligence and lead with judgment in the age of AI. If you bring ambition, clarity, and the will to shape what comes next — this is where you belong.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <Link href="/careers">
                <span className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold text-[13px] tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors cursor-pointer">
                  Explore NexDyne Careers
                </span>
              </Link>
              <Link href="/careers">
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  Apply Today
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right — full image, no gauze overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative min-h-[320px] lg:min-h-0"
          >
            <img
              src="/images/hero-team.jpg"
              alt="NexDyne team collaborating"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
