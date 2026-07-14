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
  { id: "responsible-ai", label: "Responsible AI" },
  { id: "community", label: "Community" },
  { id: "social-good", label: "Social good" },
];

const focusAreas = [
  {
    id: "people",
    n: "01",
    title: "People & Talent",
    body: "Capabilities that outlast the engagement. We build client teams that can run, extend, and improve the systems we deliver.",
  },
  {
    id: "community",
    n: "02",
    title: "Community",
    body: "Enterprise-grade intelligence, widened. We bring capability once reserved for the Fortune 500 to growing organizations.",
  },
  {
    id: "responsible-ai",
    n: "03",
    title: "Responsible AI",
    body: "Governed, transparent, accountable systems—deployed under Human Intelligence Governance (HIG™) by design.",
  },
  {
    id: "social-good",
    n: "04",
    title: "Social Good",
    body: "Expertise directed where it counts—education access, healthcare equity, and sustainability for mission-driven work.",
  },
];

export default function OurImpact() {
  const [activeTab, setActiveTab] = useState("mission");

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

  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      <SEO
        title="Our Impact | NexDyne Consulting Group"
        description="How NexDyne creates lasting impact—capabilities that outlast our engagements, wider access to enterprise-grade intelligence, responsible AI under HIG™, and expertise for mission-driven organizations."
        canonical="/about/impact"
      />
      <Navigation />

      {/* ── Hero — light, editorial with stat panel ───────────────────────── */}
      <section className="bg-off-white">
        <div className="container px-4 sm:px-6 md:px-12 pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <motion.div {...fadeUp} className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-primary" />
                <span className="nx-eyebrow text-charcoal/55">Our impact</span>
              </div>
              <h1 className="nx-h1 text-charcoal">Impact measured in capability—not slideware.</h1>
              <p className="nx-lead text-muted-foreground mt-6 max-w-2xl">
                We measure success by the lasting capabilities we build, the communities we
                strengthen, and the discipline we bring to deploying AI and agentic systems
                responsibly.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
              className="lg:col-span-5"
            >
              <div className="bg-white border border-border rounded-2xl p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                  {[
                    { k: "100%", v: "Engagements built to transfer capability" },
                    { k: "HIG™", v: "Governance on every system we deploy" },
                    { k: "4", v: "Focus areas guiding where we invest" },
                    { k: "Carbon-aware", v: "Efficient, responsible deployment" },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="text-[1.7rem] lg:text-[2rem] font-semibold tracking-[-0.02em] text-charcoal leading-none">
                        {s.k}
                      </div>
                      <div className="text-[13px] text-muted-foreground leading-snug mt-2">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sticky sub-nav ────────────────────────────────────────────────── */}
      <div className="sticky top-14 md:top-20 z-30 bg-off-white/90 backdrop-blur-md border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <nav className="flex gap-1 overflow-x-auto no-scrollbar">
            {sectionTabs.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`relative whitespace-nowrap px-4 py-4 text-[13px] font-medium tracking-[0.01em] transition-colors ${
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

      {/* ── Our Mission ───────────────────────────────────────────────────── */}
      <section id="mission" className="nx-section bg-off-white scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">Our mission</span>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="lg:col-span-8">
              <h2 className="nx-h2 text-charcoal">
                Advanced intelligence, deployed with a conscience.
              </h2>
              <p className="nx-lead text-muted-foreground mt-6 max-w-2xl">
                We exist to put enterprise-grade AI and analytics to work for organizations that
                were never meant to be priced out of it—and to leave every client stronger than we
                found them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Focus areas — centered divider grid ───────────────────────────── */}
      <section id="focus" className="nx-section bg-white border-t border-border scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="h-px w-8 bg-primary" />
              <span className="nx-eyebrow text-charcoal/55">Focus areas</span>
              <span className="h-px w-8 bg-primary" />
            </div>
            <h2 className="nx-h2 text-charcoal">Four commitments, one standard.</h2>
            <p className="nx-lead text-muted-foreground mt-5">
              Where we put our expertise, our capacity, and our conviction to work.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {focusAreas.map((f, i) => (
              <motion.a
                key={f.id}
                href={`#${f.id}`}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 2) * 0.08 }}
                className="group bg-white p-8 lg:p-10 hover:bg-off-white transition-colors"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-[13px] font-semibold text-primary tracking-[0.08em]">{f.n}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <h3 className="nx-h3 text-charcoal mt-4 group-hover:text-primary transition-colors">
                  {f.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mt-3">{f.body}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── People & Talent ───────────────────────────────────────────────── */}
      <section id="people" className="nx-section bg-off-white border-t border-border scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">People &amp; Talent</span>
              <h2 className="nx-h2 text-charcoal mt-4 lg:sticky lg:top-28">Capabilities, not dependencies.</h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="lg:col-span-8">
              <p className="nx-lead text-charcoal mb-10">
                Our engagements are designed to make us obsolete. We succeed when client teams can
                independently run the systems we build, apply the methods we introduce, and extend the
                insight we uncover—so the capability stays with them long after we've gone.
              </p>
              <figure className="border-l-2 border-primary pl-6 md:pl-8">
                <blockquote className="text-[1.3rem] md:text-[1.6rem] leading-[1.4] tracking-[-0.01em] text-charcoal font-medium">
                  "Before NexDyne, our finance team was intimidated by predictive modeling. Now they
                  build their own forecasts and challenge assumptions we'd held for years."
                </blockquote>
                <figcaption className="mt-5 text-[14px] text-muted-foreground">
                  <span className="font-semibold text-charcoal">Chief Financial Officer</span> · Growth-stage SaaS company
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Responsible AI ────────────────────────────────────────────────── */}
      <section id="responsible-ai" className="nx-section bg-white border-t border-border scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">Responsible AI</span>
              <h2 className="nx-h2 text-charcoal mt-4 lg:sticky lg:top-28">Governed by design.</h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="lg:col-span-8">
              <p className="nx-lead text-charcoal mb-8">
                Under Human Intelligence Governance (HIG™), every system we deploy is transparent, fair,
                and accountable—and efficient. We prioritize model efficiency, cloud optimization, and
                carbon-aware deployment so intelligence scales responsibly.
              </p>
              <div className="border-t border-border">
                {[
                  "Bias detection, explainability, and privacy protection built into every deployment.",
                  "Efficient, carbon-aware model deployment that keeps compute and cost in check.",
                  "Clear accountability for every automated decision—no black boxes handed to clients.",
                ].map((t, i) => (
                  <div key={i} className="flex gap-5 py-5 border-b border-border">
                    <span className="text-[13px] font-semibold text-primary tracking-[0.08em] pt-1">0{i + 1}</span>
                    <p className="text-[15px] text-charcoal/80 leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Community ─────────────────────────────────────────────────────── */}
      <section id="community" className="nx-section bg-off-white border-t border-border scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-14">
            <span className="nx-eyebrow text-charcoal/55">Community</span>
            <h2 className="nx-h2 text-charcoal mt-4">Democratizing advanced intelligence</h2>
            <p className="nx-lead text-muted-foreground mt-5">
              Sophisticated AI and analytics were historically reserved for the Fortune 500. We bring
              enterprise-grade capability to growth-stage and growing organizations.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { t: "Leveling the field", b: "Smaller organizations compete with industry giants through data-driven decisions." },
              { t: "Fueling growth", b: "Better decisions help our clients scale—and create new roles as they grow." },
              { t: "Market expansion", b: "Organizations enter new markets with data-backed confidence and strategic clarity." },
            ].map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="group bg-white p-8 lg:p-10 hover:bg-off-white transition-colors">
                <div className="h-[3px] w-8 bg-primary mb-5 transition-[width] duration-300 group-hover:w-12" />
                <h3 className="nx-h3 text-charcoal mb-3">{c.t}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{c.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Good — charcoal ────────────────────────────────────────── */}
      <section id="social-good" className="nx-section bg-charcoal text-white scroll-mt-32">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <span className="nx-eyebrow text-white/45">Social good</span>
            <h2 className="nx-h2 text-white mt-4">Giving our expertise where it counts</h2>
            <p className="nx-lead text-white/70 mt-5">
              We dedicate a share of our consulting capacity to mission-driven organizations working on
              education access, healthcare equity, and sustainability.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 border-t border-white/10">
            {[
              { t: "Education access", l: "Helping mission-driven organizations widen access to learning and opportunity." },
              { t: "Healthcare equity", l: "Applying data and AI to close gaps in how care is planned and delivered." },
              { t: "Sustainability", l: "Backing organizations working toward a more sustainable, resilient future." },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="py-8 sm:py-10 sm:px-8 border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0">
                <div className="h-[3px] w-8 bg-amber mb-5" />
                <h3 className="text-lg font-medium text-white mb-2">{s.t}</h3>
                <p className="text-[14px] text-white/60 leading-relaxed">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related — go further ──────────────────────────────────────────── */}
      <section className="nx-section bg-off-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <span className="nx-eyebrow text-charcoal/55">Go further</span>
            <h2 className="nx-h2 text-charcoal mt-4">Where the work continues.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Our values", b: "The principles behind how we work and who we work with.", href: "/about/values" },
              { t: "What we do", b: "Capabilities and solutions built to transfer, not to retain.", href: "/capabilities" },
              { t: "Client results", b: "Outcomes we've delivered for organizations like yours.", href: "/case-studies" },
            ].map((r, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <Link href={r.href}>
                  <div className="group h-full bg-white border border-border rounded-xl p-8 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.22)] transition-shadow cursor-pointer">
                    <h3 className="nx-h3 text-charcoal group-hover:text-primary transition-colors">{r.t}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mt-3 mb-6">{r.b}</p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-charcoal group-hover:text-primary transition-colors">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact block — orange ────────────────────────────────────────── */}
      <section className="bg-primary text-white">
        <div className="container px-4 sm:px-6 md:px-12 py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <motion.div {...fadeUp} className="lg:col-span-8">
              <h2 className="text-[1.8rem] md:text-[2.4rem] font-semibold tracking-[-0.02em] leading-[1.1]">
                Impact is a commitment, not a milestone.
              </h2>
              <p className="text-[15px] md:text-base text-white/80 leading-[1.7] mt-5 max-w-2xl">
                We keep widening access to advanced intelligence, deepening the capabilities we
                transfer, and raising the bar on how responsibly AI is deployed. Tell us what you're
                trying to build.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="lg:col-span-4 lg:text-right">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-9 py-4 bg-white text-charcoal text-[13px] font-semibold uppercase tracking-[0.12em] rounded-full hover:bg-charcoal hover:text-white transition-colors cursor-pointer">
                  Start a conversation <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
