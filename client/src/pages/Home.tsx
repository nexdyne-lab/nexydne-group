import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { BainHeroCarousel } from "@/components/BainHeroCarousel";
import { SpotlightStories } from "@/components/SpotlightStories";
import { OperationalExcellence } from "@/components/OperationalExcellence";

// Our Perspective category nav — preserved verbatim
const perspectiveCategories = [
  { label: "NexDyne Spotlight", href: "/insights", active: true },
  { label: "Artificial Intelligence", href: "/capabilities/artificial-intelligence", active: false },
  { label: "Technology", href: "/capabilities/technology", active: false },
  { label: "Growth & Marketing", href: "/capabilities/growth-marketing-sales", active: false },
  { label: "CEO Agenda", href: "/insights/ceo-guide-data-modernization", active: false },
];

// Capabilities + Industries (preserved verbatim from CapabilitiesExplorer)
const capabilities = [
  { id: "artificial-intelligence", title: "Artificial Intelligence", link: "/capabilities/artificial-intelligence" },
  { id: "business-building", title: "Business and Organizational Purpose", link: "/capabilities/business-building" },
  { id: "business-transformation", title: "Business Transformation", link: "/capabilities/business-transformation" },
  { id: "digital-technology", title: "Digital, Technology & Data", link: "/capabilities/digital-technology" },
  { id: "marketing-sales", title: "Marketing, Sales & Pricing", link: "/capabilities/growth-marketing-sales" },
  { id: "operations", title: "Operations", link: "/capabilities/operations" },
  { id: "strategy", title: "Strategy", link: "/capabilities/strategy-corporate-finance" },
  { id: "sustainability", title: "Climate Change and Sustainability", link: "/capabilities/sustainability" },
];

const industries = [
  { id: "aerospace-defense", title: "Aerospace and Defense", link: "/industries/aerospace-defense" },
  { id: "automotive", title: "Automotive Industry", link: "/industries/automotive" },
  { id: "consumer-products", title: "Consumer Products Industry", link: "/industries/consumer-products" },
  { id: "education", title: "Education", link: "/industries/education" },
  { id: "energy", title: "Energy", link: "/industries/energy" },
  { id: "financial-institutions", title: "Financial Institutions", link: "/industries/financial-services" },
  { id: "healthcare", title: "Healthcare", link: "/industries/healthcare" },
  { id: "technology", title: "Technology, Media & Telecommunications", link: "/industries/technology" },
];

// Latest insights — preserved verbatim
const featuredInsight = {
  title: "How Mid-Market Companies Are Winning with AI: A Practical Guide",
  description: "Discover how growing businesses are leveraging artificial intelligence to compete with larger enterprises — without the enterprise budget.",
  category: "Featured",
  link: "/insights/mid-market-ai-guide",
  image: "/images/insight-ai-midmarket.jpg",
  date: "",
};

const insightArticles = [
  {
    title: "5 Signs Your Business Is Ready for Digital Transformation",
    description: "Key indicators that signal it's time to modernize your operations and technology stack.",
    category: "Digital Strategy",
    link: "/insights/digital-transformation-readiness",
    image: "/images/insight-digital-transform.jpg",
  },
  {
    title: "Scaling Operations Without Breaking the Bank",
    description: "Cost-effective strategies for mid-market companies looking to grow efficiently.",
    category: "Operations",
    link: "/insights/scaling-operations",
    image: "/images/insight-scaling-ops.jpg",
  },
  {
    title: "Customer Intelligence for Growing Businesses",
    description: "How to build data-driven customer insights that drive retention and revenue.",
    category: "Customer Strategy",
    link: "/insights/customer-intelligence",
    image: "/images/insight-customer-intel.jpg",
  },
];

// Button primitive — single source of truth for CTA styling
const PrimaryButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span
    className={`inline-block px-6 py-3 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-primary-hover transition-colors cursor-pointer ${className}`}
  >
    {children}
  </span>
);

export default function Home() {
  const [solutionsTab, setSolutionsTab] = useState<"capabilities" | "industries">("capabilities");

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SEO
        title="Home"
        description="NexDyne Consulting Group combines Human Intelligence, AI, and Governance to deliver controlled, scalable transformation for mid-market leaders."
        canonical="/"
      />

      <Navigation />

      {/* 1. Homepage Hero — full-bleed rotating carousel (Bain-style) */}
      <BainHeroCarousel />

      {/* 1b. NexDyne Spotlight — featured perspectives (BCG stories pattern) */}
      <SpotlightStories />

      {/* 2. Our Perspective — asymmetric 5/7 grid, warm brand wash */}
      <section className="relative nx-surface-charcoal pt-16 pb-14 lg:pt-20 lg:pb-16 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(48% 62% at 100% 0%, rgba(255,180,29,0.08) 0%, transparent 56%)," +
              "radial-gradient(44% 56% at 0% 100%, rgba(224,76,44,0.07) 0%, transparent 56%)",
          }}
        />
        <div className="nx-band relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left (5/12) — statement + CTA: where the journey starts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-6">
                Our Perspective
              </span>
              <h2 className="text-[1.9rem] md:text-[2.3rem] lg:text-[2.6rem] font-bold tracking-[-0.02em] leading-[1.12] text-white">
                Governing intelligence.
                <br />
                Scaling judgment.
              </h2>
              <p className="mt-5 text-[1.02rem] md:text-[1.08rem] leading-[1.65] text-white/70 max-w-[42ch]">
                The next decade belongs to organizations that govern intelligence
                as deliberately as they deploy it.
              </p>
              <div className="mt-8">
                <Link href="/insights/ai-adoption-outlook-2026">
                  <PrimaryButton>Read our perspective</PrimaryButton>
                </Link>
              </div>
            </motion.div>

            {/* Right (7/12) — three pillars: the wall of text, made scannable */}
            <div className="lg:col-span-7">
              {[
                {
                  n: "01",
                  title: "Govern",
                  copy: "Structured intelligence governance — HIG™ — keeps human judgment, accountability, and trust at the center of every AI decision.",
                },
                {
                  n: "02",
                  title: "Scale",
                  copy: "From modernizing legacy systems to AI-enabled operating models, we build transformations that perform, endure, and scale.",
                },
                {
                  n: "03",
                  title: "Lead",
                  copy: "Deep industry expertise for ambitious leaders who intend to define the decade — not react to it.",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className={`flex gap-6 md:gap-8 py-6 md:py-7 ${i > 0 ? "border-t border-white/12" : "lg:pt-2"}`}
                >
                  <span className="text-[13px] font-semibold text-amber tracking-[0.08em] pt-1 shrink-0 w-7">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-[1.15rem] md:text-[1.25rem] font-semibold text-white tracking-[-0.01em]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[0.98rem] leading-[1.6] text-white/65 max-w-[58ch]">
                      {p.copy}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Explore-by-topic chips — a visible next step, not orphaned labels */}
          <div className="mt-10 lg:mt-12 pt-8 border-t border-white/12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 mr-2">
                Explore by topic
              </span>
              {perspectiveCategories.map((cat) => (
                <Link key={cat.label} href={cat.href}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-[12.5px] font-medium text-white/80 hover:border-amber hover:text-amber focus-visible:border-amber transition-colors duration-200 cursor-pointer">
                    {cat.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI and Technology Consulting — split, polished typography */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px] lg:min-h-[400px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[350px] lg:min-h-0 overflow-hidden"
          >
            <img
              src="/images/ai-technology-consulting.jpg"
              alt="AI and Technology Consulting"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-14 md:py-16"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 font-semibold mb-6 block">
              AI & Technology
            </span>
            <h2 className="nx-h2-split text-charcoal mb-6">
              AI and Technology Consulting
            </h2>
            <p className="text-base md:text-[1.05rem] text-charcoal/80 leading-[1.7] mb-9 max-w-[58ch]">
              Learn how our AI and Technology consulting is helping clients to outcompete and deliver value at scale through the latest trends in tech. From intelligent automation and machine learning to cloud-native architecture and data strategy, we partner with organizations to build resilient, future-ready technology foundations.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <Link href="/capabilities/ai-technology-consulting">
                <PrimaryButton>Explore Our AI Solutions</PrimaryButton>
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

      {/* 4. Our Solutions — expertise tabs, subtle brand wash */}
      <section className="relative nx-surface-ember nx-section overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(46% 60% at 100% 0%, rgba(255,255,255,0.07) 0%, transparent 55%)," +
              "radial-gradient(44% 58% at 0% 100%, rgba(58,16,6,0.22) 0%, transparent 58%)",
          }}
        />
        <div className="nx-band relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left — 40% */}
            <div className="lg:col-span-5">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFE3D8] mb-6">
                How Can We Assist You Today?
              </span>
              <h2 className="nx-h2 text-white mb-6">
                Explore our core areas of expertise.
              </h2>
              <p className="text-base md:text-lg text-[#FFE3D8] leading-[1.7] max-w-[48ch]">
                Learn more about our capabilities across industries and disciplines by selecting your topic of interest.
              </p>
            </div>

            {/* Right — 60% */}
            <div className="lg:col-span-7">
              {/* Flat underline tab bar */}
              <div className="flex items-end gap-8 border-b border-white/25 mb-10">
                <button
                  onClick={() => setSolutionsTab("capabilities")}
                  className={`pb-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    solutionsTab === "capabilities"
                      ? "text-white border-b-2 border-white -mb-px"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Capabilities
                </button>
                <button
                  onClick={() => setSolutionsTab("industries")}
                  className={`pb-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    solutionsTab === "industries"
                      ? "text-white border-b-2 border-white -mb-px"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Industries
                </button>
              </div>

              {/* Dense 2-col list */}
              <motion.div
                key={solutionsTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-10"
              >
                {(solutionsTab === "capabilities" ? capabilities : industries).map((item) => (
                  <Link key={item.id} href={item.link}>
                    <span className="flex items-center justify-between text-base text-white border-b border-white/20 py-4 cursor-pointer group">
                      <span className="group-hover:underline underline-offset-4">{item.title}</span>
                      <span className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-transform duration-300 text-sm">
                        →
                      </span>
                    </span>
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Operational Excellence — BCG-style feature card grid */}
      <OperationalExcellence />

      {/* 6. Latest Insights — flat cards with hairline borders */}
      <section className="nx-section nx-surface-charcoal">
        <div className="nx-band">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 md:mb-16">
            <div className="max-w-3xl">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-amber mb-5">
                Insights
              </span>
              <h2 className="nx-h2 text-white">
                Latest Insights
              </h2>
              <p className="text-base md:text-lg text-white/75 mt-5 max-w-[58ch] leading-[1.7]">
                Practical perspectives for mid-market leaders navigating growth and transformation.
              </p>
            </div>
            <Link href="/insights">
              <span className="inline-block text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-amber hover:text-amber transition-colors cursor-pointer pb-1">
                View All Insights
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {/* Featured card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link href={featuredInsight.link}>
                <div className="cursor-pointer border border-charcoal/10 bg-white h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden bg-white">
                    <img
                      src={featuredInsight.image}
                      alt={featuredInsight.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7 md:p-8 flex-1 flex flex-col">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {featuredInsight.category}
                    </span>
                    <h3
                      className="mt-4 text-xl md:text-2xl lg:text-[1.75rem] text-charcoal leading-[1.2] group-hover:text-primary transition-colors"
                      style={{ fontWeight: 500, letterSpacing: "-0.015em" }}
                    >
                      {featuredInsight.title}
                    </h3>
                    <p className="mt-4 text-base text-charcoal/75 leading-[1.65] max-w-xl">
                      {featuredInsight.description}
                    </p>
                    <span className="mt-6 inline-block text-[13px] font-semibold uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Article stack */}
            <div className="flex flex-col gap-6 md:gap-7">
              {insightArticles.map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group"
                >
                  <Link href={article.link}>
                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 cursor-pointer border border-charcoal/10 bg-white p-5 sm:p-6">
                      <div className="w-full aspect-[16/9] sm:w-2/5 sm:aspect-[4/3] shrink-0 overflow-hidden bg-off-white">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                          {article.category}
                        </span>
                        <h3
                          className="mt-2 text-base sm:text-lg md:text-xl text-charcoal leading-[1.25] group-hover:text-primary transition-colors"
                          style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                        >
                          {article.title}
                        </h3>
                        <p className="mt-2 text-sm text-charcoal/70 leading-[1.55] hidden sm:block">
                          {article.description}
                        </p>
                        <span className="mt-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary group-hover:text-primary-hover transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Careers — preserved split-grid, polished */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px] md:min-h-[520px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-off-white flex flex-col justify-center px-4 sm:px-8 md:pl-[76px] md:pr-16 lg:pl-[100px] lg:pr-20 py-20 md:py-24"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 font-semibold mb-6 block">
              NexDyne Careers
            </span>
            <h2 className="nx-h2-split text-charcoal mb-6">
              Where Human Intelligence Leads
            </h2>
            <p className="text-base md:text-[1.05rem] text-charcoal/80 leading-[1.7] mb-9 max-w-[58ch]">
              We help organizations govern intelligence and lead with judgment in the age of AI. If you bring ambition, clarity, and the will to shape what comes next — this is where you belong.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <Link href="/careers">
                <PrimaryButton>Explore NexDyne Careers</PrimaryButton>
              </Link>
              <Link href="/careers">
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  Apply Today
                </span>
              </Link>
            </div>
          </motion.div>

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
