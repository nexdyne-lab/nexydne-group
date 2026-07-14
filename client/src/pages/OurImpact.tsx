import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease },
};

const sectionTabs = [
  { id: "mission", label: "Our mission" },
  { id: "focus", label: "Focus areas" },
  { id: "practice", label: "In practice" },
  { id: "further", label: "Going further" },
  { id: "related", label: "Related" },
];

const focusAreas = [
  {
    title: "People & Talent",
    body: "Capabilities that outlast the engagement. We build client teams that can run, extend, and improve the systems we deliver.",
    img: "/images/ai-team-collaboration.jpg",
  },
  {
    title: "Community",
    body: "Enterprise-grade intelligence, widened. We bring capability once reserved for the Fortune 500 to growing organizations.",
    img: "/images/growth-motion.jpg",
  },
  {
    title: "Responsible AI",
    body: "Governed, transparent, accountable systems—deployed under Human Intelligence Governance (HIG™) by design.",
    img: "/images/hero-ai-global-economy.jpg",
  },
  {
    title: "Social Good",
    body: "Expertise directed where it counts—education access, healthcare equity, and sustainability for mission-driven work.",
    img: "/images/green-impact-bg.jpg",
  },
];

const related = [
  { t: "Our values", b: "The principles behind how we work and who we work with.", href: "/about/values" },
  { t: "What we do", b: "Capabilities and solutions built to transfer, not to retain.", href: "/capabilities" },
  { t: "Client results", b: "Outcomes we've delivered for organizations like yours.", href: "/case-studies" },
];

const industries = [
  "Financial Services",
  "Healthcare & Life Sciences",
  "Manufacturing",
  "Retail & Consumer",
  "Technology & Software",
  "Logistics & Supply Chain",
  "Energy & Utilities",
  "Public Sector",
];

export default function OurImpact() {
  const [activeTab, setActiveTab] = useState("mission");
  const [industry, setIndustry] = useState("");

  useEffect(() => {
    const ids = sectionTabs.map((t) => t.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const contactHref = `/contact${industry ? `?industry=${encodeURIComponent(industry)}` : ""}`;

  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      <SEO
        title="Our Impact | NexDyne Consulting Group"
        description="How NexDyne creates lasting impact—capabilities that outlast our engagements, wider access to enterprise-grade intelligence, responsible AI under HIG™, and expertise for mission-driven organizations."
        canonical="/about/impact"
      />
      <Navigation />

      {/* ── Hero — full-bleed photo + light card panel ────────────────────── */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/hero-team.jpg"
            alt="NexDyne team collaborating"
            className="w-full h-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>
        <div className="relative container px-4 sm:px-6 md:px-12 min-h-[78vh] flex items-center pt-28 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="w-full max-w-xl bg-off-white/95 backdrop-blur-sm border-t-[3px] border-primary p-8 sm:p-10 lg:p-12 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]"
          >
            <span className="nx-eyebrow text-primary">Our impact</span>
            <h1 className="nx-h1 text-charcoal mt-4">Impact that outlasts the engagement.</h1>
            <p className="nx-lead text-muted-foreground mt-5">
              We measure success by the capabilities we leave behind, the communities we widen
              access for, and the discipline we bring to deploying AI responsibly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Sticky sub-nav ────────────────────────────────────────────────── */}
      <div className="sticky top-14 md:top-20 z-30 bg-off-white/90 backdrop-blur-md border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <nav className="flex gap-1 overflow-x-auto no-scrollbar">
            {sectionTabs.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`relative whitespace-nowrap px-4 py-4 text-[13px] font-medium tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:text-primary ${
                  activeTab === t.id ? "text-charcoal" : "text-muted-foreground hover:text-charcoal"
                }`}
              >
                {t.label}
                <span
                  className={`absolute left-4 right-4 bottom-0 h-[2px] bg-primary transition-transform origin-left ${
                    activeTab === t.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Our mission — single statement ────────────────────────────────── */}
      <section id="mission" className="nx-section bg-off-white scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto lg:ml-[16%]">
            <motion.span {...fadeUp} className="nx-eyebrow text-charcoal/55 block mb-5">
              Our mission
            </motion.span>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="text-[1.35rem] md:text-[1.7rem] leading-[1.5] tracking-[-0.01em] text-charcoal"
            >
              We exist to put enterprise-grade AI and analytics to work for organizations that were
              never meant to be priced out of it—and to leave every client stronger than we found
              them. Impact, to us, is measured in capability transferred, not hours billed.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Featured commitment — split card ──────────────────────────────── */}
      <section className="pb-16 md:pb-20 bg-off-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 border border-border bg-white overflow-hidden">
            <div className="p-9 sm:p-12 lg:p-14 flex flex-col justify-center">
              <h2 className="text-[1.7rem] md:text-[2.1rem] font-semibold tracking-[-0.02em] leading-[1.15] text-charcoal">
                Built to hand over, not to hold on to.
              </h2>
              <p className="text-[15px] md:text-base text-muted-foreground leading-[1.7] mt-5 max-w-md">
                Every engagement is designed to make us obsolete. We succeed when client teams can
                independently run the systems we build and extend the insight we uncover—so the
                capability stays with them long after we've gone.
              </p>
              <Link href="/case-studies">
                <span className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  See client results <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
            <div className="relative min-h-[280px] md:min-h-0 order-first md:order-last">
              <img
                src="/images/ai-team-consulting.jpg"
                alt="NexDyne consultants with a client team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Focus areas — centered divider + image cards ──────────────────── */}
      <section id="focus" className="nx-section bg-white border-t border-border scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="flex items-center gap-6 mb-6">
            <span className="hidden sm:block flex-1 h-px bg-border" />
            <h2 className="nx-h2 text-charcoal text-center">Our focus areas</h2>
            <span className="hidden sm:block flex-1 h-px bg-border" />
          </motion.div>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="nx-lead text-muted-foreground text-center max-w-2xl mx-auto mb-14"
          >
            Where we put our expertise, our capacity, and our conviction to work.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {focusAreas.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 2) * 0.1 }}
                className="bg-white p-8 lg:p-12 flex flex-col items-center text-center"
              >
                <div className="w-full overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    loading="lazy"
                    className="w-full aspect-[3/2] object-cover"
                  />
                </div>
                <h3 className="text-[1.35rem] lg:text-[1.5rem] font-semibold tracking-[-0.01em] text-charcoal mt-7">
                  {f.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mt-4 max-w-[42ch]">
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── In practice — testimonial band ────────────────────────────────── */}
      <section id="practice" className="nx-section bg-off-white border-t border-border scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
            <span className="nx-eyebrow text-charcoal/55">In practice</span>
            <blockquote className="text-[1.5rem] md:text-[2rem] leading-[1.35] tracking-[-0.01em] text-charcoal font-medium mt-6">
              "Before NexDyne, our finance team was intimidated by predictive modeling. Now they
              build their own forecasts and challenge assumptions we'd held for years."
            </blockquote>
            <div className="flex items-center justify-center gap-3 mt-8">
              <span className="h-px w-8 bg-primary" />
              <p className="text-[14px] text-muted-foreground">
                <span className="font-semibold text-charcoal">Chief Financial Officer</span> · Growth-stage SaaS company
              </p>
              <span className="h-px w-8 bg-primary" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Going further — social good split card ────────────────────────── */}
      <section id="further" className="pb-20 md:pb-24 pt-4 bg-off-white scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 border border-border overflow-hidden">
            <div className="relative min-h-[300px] md:min-h-0">
              <img
                src="/images/green-finance.jpg"
                alt="Sustainable, mission-driven work"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="bg-charcoal text-white p-9 sm:p-12 lg:p-14 flex flex-col justify-center">
              <span className="nx-eyebrow text-amber">Going further</span>
              <h2 className="text-[1.7rem] md:text-[2.1rem] font-semibold tracking-[-0.02em] leading-[1.15] mt-4">
                Expertise, where it counts most.
              </h2>
              <p className="text-[15px] md:text-base text-white/70 leading-[1.7] mt-5 max-w-md">
                We dedicate a share of our consulting capacity to mission-driven organizations
                working on education access, healthcare equity, and sustainability—applying the same
                rigor we bring to every client.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-charcoal text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-amber transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber">
                  Partner with us <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Related ───────────────────────────────────────────────────────── */}
      <section id="related" className="nx-section bg-white border-t border-border scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="flex items-center gap-6 mb-12">
            <span className="hidden sm:block flex-1 h-px bg-border" />
            <h2 className="nx-h2 text-charcoal text-center">Related</h2>
            <span className="hidden sm:block flex-1 h-px bg-border" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r, i) => (
              <motion.div key={r.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <Link href={r.href}>
                  <div className="group h-full bg-white border border-border p-8 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.22)] transition-shadow cursor-pointer">
                    <h3 className="nx-h3 text-charcoal group-hover:text-primary transition-colors">{r.t}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mt-3 mb-6">{r.b}</p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-primary">
                      Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready to talk? — Bain-style contact row ───────────────────────── */}
      <section className="bg-off-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12 py-16 md:py-20">
          <motion.div {...fadeUp} className="border border-border bg-white p-8 sm:p-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-[1.7rem] md:text-[2.1rem] font-semibold tracking-[-0.02em] text-charcoal">
                  Ready to talk?
                </h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed mt-3">
                  We work with ambitious leaders who want to define what comes next. Together, we
                  achieve lasting outcomes.
                </p>
              </div>
              <div className="lg:col-span-7">
                <label className="block text-[13px] font-semibold text-charcoal mb-2">
                  I want to talk to your experts in:
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="flex-1 border border-border bg-white px-4 py-4 text-[15px] text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary"
                  >
                    <option value="">Select an industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                  <Link href={contactHref}>
                    <span className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      Contact us <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
