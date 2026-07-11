import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { BainHeroCarousel } from "@/components/BainHeroCarousel";
import { SpotlightStories } from "@/components/SpotlightStories";
import { OperationalExcellence } from "@/components/OperationalExcellence";

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

      {/* 2. AI and Technology Consulting — human-led editorial split:
          real people deciding, floating charcoal statement card for depth,
          scannable capability list. */}
      <section className="w-full nx-surface-white">
        <div className="nx-band nx-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
            {/* Photo + floating statement card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="overflow-hidden ring-1 ring-charcoal/10">
                <img
                  src="/images/adoption-suite.jpg"
                  alt="Consultants working through a technology decision together"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Floating card — the brand voice, layered above the photo */}
              <div className="relative -mt-12 mx-5 lg:absolute lg:-right-10 lg:bottom-10 lg:mx-0 lg:mt-0 lg:max-w-[300px] bg-charcoal p-6 lg:p-7 shadow-[0_28px_64px_-28px_rgba(36,36,36,0.55)]">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber">
                  HIG&trade;
                </span>
                <p className="mt-2 text-[1.08rem] leading-[1.45] font-semibold text-white tracking-[-0.01em]">
                  Technology performs.
                  <br />
                  Humans govern.
                </p>
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 lg:pl-24"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="block h-[3px] w-9 bg-primary" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  AI &amp; Technology
                </span>
              </div>
              <h2 className="nx-h2-split text-charcoal mb-5">
                AI and Technology Consulting
              </h2>
              <p className="text-base md:text-[1.05rem] text-charcoal/75 leading-[1.7] mb-8 max-w-[52ch]">
                We help clients outcompete with technology that is governed as
                well as it is engineered — resilient foundations, run with
                human judgment.
              </p>

              {/* Capability list — scannable, amber markers */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {[
                  "Intelligent automation & ML",
                  "Cloud-native architecture",
                  "Data strategy & platforms",
                  "AI governance & controls",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-[7px] block h-2 w-2 shrink-0 bg-amber" />
                    <span className="text-[0.98rem] leading-[1.5] text-charcoal">{c}</span>
                  </li>
                ))}
              </ul>

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
        </div>
      </section>

      {/* 3. Operational Excellence — the offer: BCG-style solution cards
          come BEFORE the directory (show the product, then the catalog) */}
      <OperationalExcellence />

      {/* 4. Explore our expertise — wayfinding directory + talk-to-expert,
          placed after the offer so it serves visitors ready to self-direct */}
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
            {/* Left — 40%: statement + tab-aware CTA (the journey endpoint) */}
            <div className="lg:col-span-5">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFE3D8] mb-6">
                How Can We Assist You Today?
              </span>
              <h2 className="nx-h2 text-white mb-6">
                Explore our core areas of expertise.
              </h2>
              <p className="text-base md:text-lg text-[#FFE3D8] leading-[1.7] max-w-[48ch]">
                Pick a topic on the right — or start from the full picture.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                <Link href={solutionsTab === "capabilities" ? "/capabilities" : "/industries"}>
                  <span className="inline-block px-6 py-3 bg-white text-[#CC2A1E] text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-[#FFE3D8] transition-colors cursor-pointer">
                    {solutionsTab === "capabilities" ? "All capabilities" : "All industries"}
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white border-b border-white/50 hover:border-white pb-1 transition-colors cursor-pointer">
                    Talk to an expert
                  </span>
                </Link>
              </div>
            </div>

            {/* Right — 60% */}
            <div className="lg:col-span-7">
              {/* Flat underline tab bar — bigger targets, unmissable active state */}
              <div role="tablist" className="flex items-end gap-9 border-b border-white/25 mb-10">
                {(["capabilities", "industries"] as const).map((tab) => (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={solutionsTab === tab}
                    onClick={() => setSolutionsTab(tab)}
                    className={`relative pb-4 text-[14px] font-semibold uppercase tracking-[0.1em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                      solutionsTab === tab
                        ? "text-white"
                        : "text-[#FFE3D8]/75 hover:text-white"
                    }`}
                  >
                    {tab === "capabilities" ? "Capabilities" : "Industries"}
                    {solutionsTab === tab && (
                      <span className="absolute left-0 right-0 -bottom-px h-[3px] bg-white" />
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

      {/* 5. Careers — preserved split-grid, polished */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[440px] md:min-h-[520px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 80px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-off-white flex flex-col justify-center px-4 sm:px-8 md:pl-[76px] md:pr-16 lg:pl-[100px] lg:pr-20 py-20 md:py-24"
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
            <p className="text-base md:text-[1.05rem] text-charcoal/80 leading-[1.7] mb-7 max-w-[58ch]">
              We help organizations govern intelligence and lead with judgment in the age of AI. If you bring ambition, clarity, and the will to shape what comes next — this is where you belong.
            </p>
            <ul className="mb-9 space-y-3">
              {[
                "Real client ownership from your first engagement",
                "Work at the AI frontier — with judgment as the craft",
                "Mid-market impact you can see, measure, and name",
              ].map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="mt-[7px] block h-2 w-2 shrink-0 bg-amber" />
                  <span className="text-[0.98rem] leading-[1.5] text-charcoal/85">{v}</span>
                </li>
              ))}
            </ul>
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
