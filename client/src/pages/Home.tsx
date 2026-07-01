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
      <section className="relative bg-off-white pt-6 pb-10 lg:pt-8 lg:pb-12 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(48% 62% at 100% 0%, rgba(255,180,29,0.13) 0%, transparent 56%)," +
              "radial-gradient(44% 56% at 0% 100%, rgba(224,76,44,0.09) 0%, transparent 56%)",
          }}
        />
        <div className="relative px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            {/* Left (5/12) — eyebrow + headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-6">
                Our Perspective
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-[3.75rem] text-charcoal leading-[1.04] font-bold"
                style={{ letterSpacing: "-0.03em" }}
              >
                Governing intelligence. Scaling judgment. Leading in the age of{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(100deg, #E04C2C 0%, #FF7A2F 50%, #FFB41D 100%)" }}
                >
                  intelligent machines.
                </span>
              </h2>
            </motion.div>

            {/* Right (7/12) — body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <p className="text-lg md:text-xl text-charcoal/80 leading-[1.65] max-w-[58ch]">
                The organizations that will define the next decade will be the ones that govern intelligence as deliberately as they deploy it. NexDyne combines deep industry expertise with structured intelligence governance to help ambitious leaders harness AI, data, and operational power — while strengthening the human judgment, accountability, and trust that no machine can provide. From modernizing legacy systems to designing AI-enabled operating models, we build transformations that perform, endure, and scale. NexDyne is where governance meets growth.
              </p>
            </motion.div>
          </div>

          {/* Editorial category strip — spread across, box-highlight on hover/active */}
          <div className="mt-10 lg:mt-12 pt-6 border-t border-charcoal/15">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-4 gap-y-3">
              {perspectiveCategories.map((cat) => (
                <Link key={cat.label} href={cat.href}>
                  <span
                    className="inline-block px-3 py-2 text-[14px] md:text-[15px] font-semibold uppercase tracking-[0.18em] text-charcoal/65 hover:text-amber transition-colors duration-200 cursor-pointer"
                  >
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
              src="/images/ai-abstract-visualization.jpg"
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
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.08] mb-7 font-bold"
              style={{ letterSpacing: "-0.03em" }}
            >
              AI and Technology Consulting
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] mb-10 max-w-[58ch]">
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
      <section className="relative bg-white py-20 lg:py-28 border-t border-charcoal/10 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 55% at 0% 0%, rgba(224,76,44,0.07) 0%, transparent 55%)," +
              "radial-gradient(38% 50% at 100% 100%, rgba(255,180,29,0.09) 0%, transparent 55%)",
          }}
        />
        <div className="relative px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left — 40% */}
            <div className="lg:col-span-5">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-6">
                How Can We Assist You Today?
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-[3.5rem] text-charcoal leading-[1.04] mb-6 font-bold"
                style={{ letterSpacing: "-0.03em" }}
              >
                Explore our core areas of expertise.
              </h2>
              <p className="text-base md:text-lg text-charcoal/75 leading-[1.65] max-w-[48ch]">
                Learn more about our capabilities across industries and disciplines by selecting your topic of interest.
              </p>
            </div>

            {/* Right — 60% */}
            <div className="lg:col-span-7">
              {/* Flat underline tab bar */}
              <div className="flex items-end gap-8 border-b border-charcoal/15 mb-10">
                <button
                  onClick={() => setSolutionsTab("capabilities")}
                  className={`pb-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    solutionsTab === "capabilities"
                      ? "text-charcoal border-b-2 border-primary -mb-px"
                      : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  Capabilities
                </button>
                <button
                  onClick={() => setSolutionsTab("industries")}
                  className={`pb-4 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    solutionsTab === "industries"
                      ? "text-charcoal border-b-2 border-primary -mb-px"
                      : "text-charcoal/60 hover:text-charcoal"
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
                    <span className="flex items-center justify-between text-base text-charcoal hover:text-primary border-b border-charcoal/10 py-4 transition-colors cursor-pointer group">
                      <span>{item.title}</span>
                      <span className="text-charcoal/30 group-hover:text-primary transition-colors text-sm">
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
      <section className="py-20 lg:py-28 bg-subtle">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 md:mb-16">
            <div className="max-w-3xl">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 mb-5">
                Insights
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-[3.5rem] text-charcoal leading-[1.04] font-bold"
                style={{ letterSpacing: "-0.03em" }}
              >
                Latest Insights
              </h2>
              <p className="text-base md:text-lg text-charcoal/75 mt-5 max-w-[58ch] leading-[1.65]">
                Practical perspectives for mid-market leaders navigating growth and transformation.
              </p>
            </div>
            <Link href="/insights">
              <span className="inline-block text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal border-b border-charcoal/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
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
                    <div className="flex gap-5 sm:gap-6 cursor-pointer border border-charcoal/10 bg-white p-5 sm:p-6">
                      <div className="w-1/3 sm:w-2/5 shrink-0 aspect-[4/3] overflow-hidden bg-off-white">
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
            className="bg-off-white flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-20 md:py-24"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-charcoal/60 font-semibold mb-6 block">
              NexDyne Careers
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.1] mb-7"
              style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              Where Human Intelligence Leads
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 leading-[1.65] mb-10 max-w-[58ch]">
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
