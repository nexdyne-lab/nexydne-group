import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BainHeroCarousel } from "@/components/BainHeroCarousel";
import { SpotlightStories } from "@/components/SpotlightStories";
import { OperationalExcellence } from "@/components/OperationalExcellence";

// Capabilities + Industries (preserved verbatim from CapabilitiesExplorer)
const capabilities = [
  { id: "artificial-intelligence", title: "Artificial Intelligence", link: "/capabilities/artificial-intelligence" },
  { id: "business-building", title: "Business and Organizational Purpose", link: "/capabilities/business-building" },
  { id: "business-transformation", title: "Business Transformation", link: "/capabilities/business-building/digital-transformation-accelerator" },
  { id: "digital-technology", title: "Digital, Technology & Data", link: "/capabilities/growth-marketing-sales/digital-marketing/marketing-technology" },
  { id: "marketing-sales", title: "Marketing, Sales & Pricing", link: "/capabilities/growth-marketing-sales" },
  { id: "operations", title: "Operations", link: "/capabilities/operations" },
  { id: "strategy", title: "Strategy", link: "/capabilities/strategy-corporate-finance" },
  { id: "sustainability", title: "Climate Change and Sustainability", link: "/capabilities/growth-marketing-sales/green-growth/sustainability-measurement" },
];

const industries = [
  { id: "aerospace-defense", title: "Aerospace and Defense", link: "/industries/aerospace-defense" },
  { id: "automotive", title: "Automotive Industry", link: "/industries/automotive" },
  { id: "consumer-products", title: "Consumer Products Industry", link: "/industries/consumer-products" },
  { id: "education", title: "Education", link: "/industries/education" },
  { id: "energy", title: "Energy", link: "/industries/energy-utilities" },
  { id: "financial-institutions", title: "Financial Institutions", link: "/industries/financial-services" },
  { id: "healthcare", title: "Healthcare", link: "/industries/healthcare" },
  { id: "technology", title: "Technology, Media & Telecommunications", link: "/industries/technology-media-telecom" },
];

// The six major capabilities — links to their hub pages
const capabilityLinks = [
  { label: "Artificial Intelligence", href: "/capabilities/artificial-intelligence" },
  { label: "Business Building", href: "/capabilities/business-building" },
  { label: "Technology", href: "/capabilities/technology" },
  { label: "Growth, Marketing & Sales", href: "/capabilities/growth-marketing-sales" },
  { label: "Strategy & Corporate Finance", href: "/capabilities/strategy-corporate-finance" },
  { label: "Operations", href: "/capabilities/operations" },
];

const agendaFeatured = {
  tag: "Featured insight",
  title: "How AI agents are reshaping enterprise operations",
  image: "/images/capabilities-featured.jpg",
  href: "/insights/ai-agents-transform-operations",
};

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
        description="NexDyne Consulting Group combines Human Intelligence, AI, and Governance to deliver controlled, scalable transformation for growth-stage leaders."
        canonical="/"
      />

      <Navigation />

      {/* 1. Homepage Hero — full-bleed rotating carousel (Bain-style) */}
      <BainHeroCarousel />

      {/* 2. Executive agendas — EY-style dark wayfinding by role + featured story */}
      <section className="w-full bg-charcoal text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left — heading + agenda list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="px-6 sm:px-10 lg:pl-14 lg:pr-16 py-12 lg:py-16"
          >
            <div className="flex items-center gap-3 mb-7">
              <span className="block h-[3px] w-9 bg-amber" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Where to start
              </span>
            </div>
            <h2 className="font-bold tracking-[-0.02em] leading-[1.08] text-white text-[clamp(2rem,3.2vw,3rem)] max-w-[15ch]">
              Discover our capabilities.
            </h2>

            <ul className="mt-8 lg:mt-10 border-b border-white/15">
              {capabilityLinks.map((a) => (
                <li key={a.href}>
                  <Link href={a.href}>
                    <span className="group flex items-center justify-between gap-6 border-t border-white/15 py-[0.95rem] cursor-pointer">
                      <span className="text-[1.02rem] md:text-[1.08rem] font-semibold text-white/90 group-hover:text-white transition-colors">
                        {a.label}
                      </span>
                      <ArrowRight className="w-5 h-5 shrink-0 text-white/45 transition-all duration-300 group-hover:text-amber group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — featured story, full-bleed image */}
          <Link href={agendaFeatured.href}>
            <div className="group relative min-h-[360px] lg:min-h-full overflow-hidden cursor-pointer">
              <img
                src={agendaFeatured.image}
                alt={agendaFeatured.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 lg:p-12">
                <span className="mb-5 inline-flex items-center gap-2.5 self-start text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85">
                  <span className="block h-2 w-2 bg-amber" aria-hidden />
                  {agendaFeatured.tag}
                </span>
                <h3 className="max-w-[24ch] font-semibold tracking-[-0.015em] leading-[1.18] text-white text-[1.5rem] md:text-[2.1rem] drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]">
                  {agendaFeatured.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 self-start text-[13px] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors group-hover:text-amber">
                  Read the insight
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Operational Excellence — the offer: BCG-style solution cards
          come BEFORE the directory (show the product, then the catalog) */}
      <OperationalExcellence />

      {/* 4. Explore our expertise — wayfinding directory + talk-to-expert,
          placed after the offer so it serves visitors ready to self-direct */}
      <section className="relative bg-black text-white nx-section overflow-hidden">
        {/* Subtle warmth — a faint amber glow top-right, quiet white bottom-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(46% 60% at 100% 0%, rgba(255,180,29,0.08) 0%, transparent 55%)," +
              "radial-gradient(44% 58% at 0% 100%, rgba(255,255,255,0.03) 0%, transparent 58%)",
          }}
        />
        <div className="nx-band relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left — 40%: statement + tab-aware CTA (the journey endpoint) */}
            <div className="lg:col-span-5">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB41D] mb-6">
                How Can We Assist You Today?
              </span>
              <h2 className="nx-h2 text-white mb-6">
                Explore our core areas of expertise.
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-[1.7] max-w-[48ch]">
                Pick a topic on the right — or start from the full picture.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                <Link href={solutionsTab === "capabilities" ? "/capabilities" : "/industries"}>
                  <span className="inline-block px-6 py-3 bg-primary text-primary-foreground text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-primary-hover transition-colors cursor-pointer">
                    {solutionsTab === "capabilities" ? "All capabilities" : "All industries"}
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-[#FFB41D] hover:text-[#FFB41D] pb-1 transition-colors cursor-pointer">
                    Talk to an expert
                  </span>
                </Link>
              </div>
            </div>

            {/* Right — 60% */}
            <div className="lg:col-span-7">
              {/* Flat underline tab bar — active state gets the amber accent */}
              <div role="tablist" className="flex items-end gap-9 border-b border-white/20 mb-10">
                {(["capabilities", "industries"] as const).map((tab) => (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={solutionsTab === tab}
                    onClick={() => setSolutionsTab(tab)}
                    className={`relative pb-4 text-[14px] font-semibold uppercase tracking-[0.1em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFB41D] ${
                      solutionsTab === tab
                        ? "text-white"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    {tab === "capabilities" ? "Capabilities" : "Industries"}
                    {solutionsTab === tab && (
                      <span className="absolute left-0 right-0 -bottom-px h-[3px] bg-[#FFB41D]" />
                    )}
                  </button>
                ))}
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
                    <span className="flex items-center justify-between text-base text-white border-b border-white/15 py-4 cursor-pointer group">
                      <span className="transition-colors group-hover:text-[#FFB41D]">{item.title}</span>
                      <span className="text-white/40 group-hover:text-[#FFB41D] group-hover:translate-x-1 transition-all duration-300 text-sm">
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

      {/* 4b. NexDyne Spotlight — featured perspectives (BCG stories pattern) */}
      <SpotlightStories />

      {/* 4b. Free readiness tools — lead-magnet promo (dark authority band) */}
      <section className="w-full bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="px-4 sm:px-8 md:pl-[76px] md:pr-16 lg:pl-[100px] lg:pr-20 py-14 md:py-20"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-[3px] w-9 bg-primary" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Free Readiness Tools
              </span>
            </div>
            <h2 className="nx-h2-split text-white mb-6">
              Know whether you're ready — before you invest.
            </h2>
            <p className="text-base md:text-[1.05rem] text-white/70 leading-[1.7] mb-9 max-w-[56ch]">
              Two free, self-scored diagnostics for growing companies: evaluate
              your readiness for AI, and your readiness to scale operations —
              in about fifteen minutes each.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <Link href="/resources">
                <PrimaryButton>Get the free tools</PrimaryButton>
              </Link>
              <Link href="/resources/ai-readiness-guide">
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/40 hover:border-primary hover:text-primary transition-colors cursor-pointer pb-1">
                  The SMB AI Readiness Guide
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex items-center justify-center py-12 md:py-16 lg:py-0"
          >
            <div className="relative">
              <img
                src="/images/operations-readiness-checklist-cover.png"
                alt="The Operations Readiness Checklist — cover"
                className="absolute -right-16 top-8 w-44 border border-white/15 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] rotate-3 hidden sm:block"
              />
              <img
                src="/images/ai-readiness-guide-cover.png"
                alt="The SMB AI Readiness Guide — cover"
                className="relative w-52 border border-white/15 shadow-[0_30px_70px_-24px_rgba(0,0,0,0.85)] -rotate-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Careers — preserved split-grid, polished */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[300px] md:min-h-[360px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-off-white flex flex-col justify-center px-4 sm:px-8 md:pl-[76px] md:pr-16 lg:pl-[100px] lg:pr-20 py-12 md:py-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-[3px] w-9 bg-primary" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                NexDyne Careers
              </span>
            </div>
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
            className="relative min-h-[260px] lg:min-h-0"
          >
            <img
              src="/images/careers-hero.jpg"
              alt="Careers at NexDyne"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
