import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

/**
 * Solutions overview (/solutions) — the four core, productised programs that
 * move from strategy to measurable outcomes. Mirrors the homepage
 * "Operational excellence" card language (clean photo + title + description
 * below, no overlay) and the site's PageHero pattern.
 */

interface Solution {
  category: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

const solutions: Solution[] = [
  {
    category: "Operations",
    title: "Intelligent Process Optimization",
    description:
      "We turn manual operations into governed, autonomous systems — removing bottlenecks and accelerating execution without losing oversight.",
    link: "/solutions/intelligent-process-optimization",
    image: "/images/intelligent-process.jpg",
  },
  {
    category: "Intelligence",
    title: "Data-Driven Customer Intelligence",
    description:
      "We turn data into governed customer insight — predicting behavior and compounding loyalty at scale.",
    link: "/solutions/data-driven-customer-intelligence",
    image: "/images/solution-customer-intelligence.jpg",
  },
  {
    category: "Technology",
    title: "Scalable Enterprise Transformation",
    description:
      "We modernize the core — cloud-native infrastructure and operating models built to scale with ambition.",
    link: "/solutions/scalable-enterprise-transformation",
    image: "/images/enterprise-architecture.jpg",
  },
  {
    category: "Growth",
    title: "Accelerating Business Growth",
    description:
      "We launch the digital products, platforms, and channels that turn capability into revenue.",
    link: "/solutions/accelerating-business-growth",
    image: "/images/growth-motion.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans">
      <SEO
        title="Solutions"
        description="Productised programs that move from strategy to measurable outcomes — governed automation, customer intelligence, enterprise transformation, and growth."
        canonical="/solutions"
      />
      <Navigation />

      {/* Full-bleed centered hero */}
      <section className="relative w-full overflow-hidden" style={{ height: "76vh", minHeight: 540 }}>
        <img
          src="/images/solutions-hero.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Legibility overlay + soft vignette (flat, no brand-colour wash) */}
        <div aria-hidden className="absolute inset-0 bg-charcoal/55" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "radial-gradient(120% 85% at 50% 42%, transparent 42%, rgba(0,0,0,0.4) 100%)" }}
        />

        {/* Centered content — sits low in the frame (reference composition) */}
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-[16vh] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="font-semibold leading-[1.04] tracking-[-0.02em] text-white text-[clamp(2.6rem,6vw,4.75rem)] drop-shadow-[0_2px_28px_rgba(0,0,0,0.5)]"
          >
            Solutions
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            <Link href="/contact">
              <span className="mt-9 inline-block bg-white px-9 py-4 text-[15px] font-semibold text-charcoal transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer">
                Get in touch
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue — bottom-left, matches reference */}
        <a
          href="#solutions"
          aria-label="Scroll to solutions"
          className="absolute bottom-8 left-6 z-10 hidden items-center justify-center text-white/85 transition-colors hover:text-white md:flex lg:left-10"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </a>
      </section>

      {/* Four core solutions */}
      <section id="solutions" className="scroll-mt-24 bg-[#FEFEFE]">
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-12 nx-section">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-10 max-w-3xl md:mb-14"
          >
            <span className="nx-eyebrow text-primary">Our Solutions</span>
            <h2 className="nx-h2 mt-4 text-charcoal">
              Four programs, engineered for scale.
            </h2>
            <p className="nx-lead mt-6 text-charcoal/70">
              From governed automation to compounding growth, each solution turns
              strategy into measurable execution — with human judgment kept in the loop.
            </p>
          </motion.div>

          {/* Card grid — clean photo + title/description below (homepage OE style) */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-14">
            {solutions.map((s, i) => (
              <motion.div
                key={s.link}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease, delay: (i % 2) * 0.08 }}
              >
                <Link href={s.link}>
                  <article className="group cursor-pointer">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={s.image}
                        alt=""
                        aria-hidden
                        className="aspect-[16/10] w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="pt-5">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/40">
                        {s.category}
                      </span>
                      <h3 className="mt-2 text-[1.35rem] font-semibold leading-[1.25] tracking-[-0.015em] text-charcoal transition-colors group-hover:text-primary lg:text-[1.5rem]">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-[46ch] text-[0.95rem] leading-[1.6] text-muted-foreground">
                        {s.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors group-hover:text-primary">
                        Explore
                        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1 text-primary">→</span>
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="nx-section bg-charcoal text-white">
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
          >
            <div className="max-w-2xl">
              <span aria-hidden className="mb-4 block h-[3px] w-10 bg-amber" />
              <h2 className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] md:text-[2.25rem]">
                Not sure which solution fits?
              </h2>
              <p className="mt-4 text-[1.05rem] leading-[1.6] text-white/70">
                Tell us where the friction is. We'll map the fastest path from strategy to measurable outcome.
              </p>
            </div>
            <Link href="/contact">
              <span className="inline-block whitespace-nowrap bg-primary px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/60 cursor-pointer">
                Start a conversation
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
