import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease },
};

export default function About() {
  const stats = [
    { value: "62+", label: "Client engagements delivered" },
    { value: "18", label: "Industries served" },
    { value: "HIG™", label: "Our governing doctrine" },
    { value: "2", label: "Founding partners, one firm" },
  ];

  const principles = [
    {
      no: "01",
      title: "Design the human system first",
      body: "Before a single tool is deployed, we map the people, decisions, and accountability the technology will serve. Adoption is engineered, not hoped for.",
    },
    {
      no: "02",
      title: "Deploy AI and agentic systems",
      body: "We put artificial intelligence and agentic workflows to work across the enterprise — automating judgement-heavy tasks and compounding capability, not just cost.",
    },
    {
      no: "03",
      title: "Govern, then scale",
      body: "Every deployment operates inside a governance layer — Human Intelligence Governance (HIG™) — so transformation stays controlled, auditable, and durable as it grows.",
    },
  ];

  const values = [
    { title: "Our people", description: "We are defined by our people and a culture where diverse talent does the best work of their careers.", image: "/images/ai-team-collaboration.jpg" },
    { title: "Client impact", description: "We measure success by the lasting capabilities we build — not the size of the deck we leave behind.", image: "/images/ai-team-consulting.jpg" },
    { title: "Intelligent innovation", description: "We pair frontier technology with disciplined strategy to solve problems that matter, responsibly.", image: "/images/ai-abstract-visualization.jpg" },
    { title: "Governed growth", description: "We help organisations scale AI and agentic systems without losing the human system that governs them.", image: "/images/hero-team-2.webp" },
  ];

  const explore = [
    { no: "01", title: "Purpose, Mission & Values", description: "What drives us and the principles that guide every engagement.", href: "/about/values" },
    { no: "02", title: "Our Impact", description: "How we create lasting value for clients and the communities around them.", href: "/about/impact" },
    { no: "03", title: "Leadership Team", description: "The people leading the firm, and the partnership behind it.", href: "/about/team" },
    { no: "04", title: "Our Offices", description: "Where we work, and how to reach the team nearest you.", href: "/offices" },
    { no: "05", title: "Case Studies", description: "Real results from real client partnerships across every industry.", href: "/cases" },
    { no: "06", title: "Contact Us", description: "Start a conversation about the change you want to make.", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-off-white text-charcoal">
      <SEO
        title="About Us | NexDyne Consulting Group"
        description="NexDyne helps growing companies and enterprises turn AI and agentic systems into enterprise-wide transformation and growth — governed by Human Intelligence Governance (HIG™)."
        canonical="/about"
      />
      <Navigation />

      {/* ══ Hero — light editorial split ══════════════════════════════════════ */}
      <section className="bg-off-white">
        <div className="container px-4 sm:px-6 md:px-12 pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-7">
                <span className="h-px w-10 bg-primary" />
                <span className="nx-eyebrow text-charcoal/55">About NexDyne Consulting Group</span>
              </div>
              <h1 className="nx-h1 text-charcoal">
                Human intelligence,
                <br className="hidden sm:block" /> governed and scaled.
              </h1>
              <p className="nx-lead text-muted-foreground mt-7 max-w-xl">
                We help growing companies and the enterprises that partner with them harness AI and
                agentic systems for enterprise-wide transformation — implementing technology only
                after we design the human system it operates within.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                <Link href="/contact">
                  <span className="inline-block px-9 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">
                    Start a conversation
                  </span>
                </Link>
                <Link href="/capabilities">
                  <span className="group inline-flex items-center gap-2 text-[15px] font-medium text-charcoal cursor-pointer">
                    <span className="border-b border-charcoal/30 group-hover:border-primary group-hover:text-primary transition-colors pb-0.5">
                      Explore our capabilities
                    </span>
                    <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="lg:col-span-5">
              <div className="relative overflow-hidden">
                <img
                  src="/images/hero-team.jpg"
                  alt="NexDyne consultants at work"
                  className="w-full aspect-[4/3] lg:aspect-[4/5] object-cover"
                />
                <span aria-hidden className="absolute bottom-0 left-0 h-1 w-24 bg-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ Firm at a glance — stat band ══════════════════════════════════════ */}
      <section className="bg-white border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-border border-x border-border sm:border-x-0 lg:divide-y-0">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="px-6 py-9 md:py-11"
              >
                <div className={`text-[2.4rem] md:text-[2.9rem] leading-none font-semibold tracking-[-0.02em] mb-3 ${i === 2 ? "text-primary" : "text-charcoal"}`}>
                  {s.value}
                </div>
                <p className="text-[13px] md:text-[14px] text-muted-foreground leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Positioning statement ═════════════════════════════════════════════ */}
      <section className="nx-section bg-off-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-primary" />
              <span className="nx-eyebrow text-charcoal/55">Our purpose</span>
            </div>
            <p className="text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.28] tracking-[-0.02em] text-charcoal font-medium">
              Ambitious organisations are testing, challenging, striving for the change that
              transforms everything. We partner with bold leaders to pinpoint strategy, harness{" "}
              <span className="text-primary">AI and agentic systems</span>, and build capabilities
              that compound.
            </p>
            <p className="mt-9 nx-lead text-muted-foreground max-w-3xl">
              Every technology we deploy sits inside a human system we design first. That discipline —
              Human Intelligence Governance (HIG™) — is how we turn ambition into enterprise-wide
              transformation and durable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ How we work — numbered principles ═════════════════════════════════ */}
      <section className="nx-section bg-white border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12 md:mb-16">
            <span className="nx-eyebrow text-charcoal/55">How we work</span>
            <h2 className="nx-h2 text-charcoal mt-4">
              Technology follows the human system — never the other way around.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="group relative pt-8"
              >
                <span className="absolute top-0 left-0 h-px w-full bg-border" />
                <span className="absolute top-0 left-0 h-px w-16 bg-primary scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="text-[2.4rem] leading-none font-semibold text-charcoal/15 mb-6">{p.no}</div>
                <h3 className="nx-h3 text-charcoal mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-[1.7]">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Who we are + pull quote ═══════════════════════════════════════════ */}
      <section className="nx-section bg-off-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">Who we are</span>
              <h2 className="nx-h2 text-charcoal mt-4">One firm, one partnership.</h2>
              <div className="mt-8 hidden lg:block overflow-hidden">
                <img
                  src="/images/ai-team-collaboration.jpg"
                  alt="NexDyne consultants collaborating"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="lg:col-span-8">
              <p className="nx-lead text-charcoal mb-8 max-w-2xl">
                NexDyne operates as one — a unified partnership committed to business transformation
                for growing organisations and the enterprises that partner with them.
              </p>

              <figure className="border-l-2 border-primary pl-7 md:pl-9 my-10">
                <blockquote className="text-[1.5rem] md:text-[1.95rem] leading-[1.35] tracking-[-0.01em] text-charcoal font-medium">
                  World-class strategy, AI, and data capability should not be reserved for the
                  Fortune 500. Ambitious organisations everywhere deserve the same caliber of
                  expertise — and the same discipline in how it is governed.
                </blockquote>
              </figure>

              <p className="text-[15px] text-muted-foreground leading-[1.75] mb-9 max-w-2xl">
                We deploy AI and agentic systems where they create real advantage, always inside a
                human system we design and govern first. Today we continue to push boundaries —
                combining deep expertise with frontier technology to help our clients not just
                compete, but lead.
              </p>
              <Link href="/about/team">
                <span className="group inline-flex items-center gap-2 text-[15px] font-medium text-charcoal cursor-pointer">
                  <span className="border-b border-charcoal/30 group-hover:border-primary group-hover:text-primary transition-colors pb-0.5">
                    Meet our leadership team
                  </span>
                  <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ Values — refined editorial grid ═══════════════════════════════════ */}
      <section className="nx-section bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12 md:mb-14">
            <span className="nx-eyebrow text-charcoal/55">Our values</span>
            <h2 className="nx-h2 text-charcoal mt-4">What defines us</h2>
            <p className="nx-lead text-muted-foreground mt-5">
              Four commitments that shape every engagement and every partnership we build.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="group">
                <div className="relative h-full border border-border overflow-hidden bg-white transition-shadow duration-300 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.22)]">
                  <span className="absolute top-0 left-0 z-10 h-[3px] w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="aspect-[16/11] overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-[700ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="nx-h3 text-charcoal mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.7]">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Explore the firm — neighbor navigation, editorial rows ════════════ */}
      <section className="nx-section bg-off-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-10 md:mb-12">
            <span className="nx-eyebrow text-charcoal/55">Explore the firm</span>
            <h2 className="nx-h2 text-charcoal mt-4">Go deeper into who we are.</h2>
          </motion.div>

          <div className="border-t border-border">
            {explore.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}>
                <Link href={item.href}>
                  <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-10 py-6 md:py-7 border-b border-border cursor-pointer transition-colors hover:bg-white -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-12 md:px-12">
                    <span className="text-[13px] md:text-[14px] font-semibold text-charcoal/35 tabular-nums w-7">{item.no}</span>
                    <div>
                      <h3 className="text-[1.35rem] md:text-[1.7rem] leading-tight font-semibold tracking-[-0.01em] text-charcoal group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[14px] md:text-[15px] text-muted-foreground mt-1.5 leading-relaxed max-w-xl">{item.description}</p>
                    </div>
                    <span className="text-primary text-xl md:text-2xl transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Closing CTA ═══════════════════════════════════════════════════════ */}
      <section className="nx-section bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="nx-h2 text-charcoal mb-5">Ready to transform your business?</h2>
            <p className="nx-lead text-muted-foreground mb-10 max-w-2xl">
              Let's discuss where AI and agentic systems can create durable advantage — and how we'll
              govern the change end to end.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contact">
                <span className="inline-block px-9 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">
                  Contact us
                </span>
              </Link>
              <Link href="/careers">
                <span className="inline-block px-9 py-4 border border-charcoal/25 text-charcoal text-[13px] font-semibold uppercase tracking-[0.12em] hover:border-charcoal hover:bg-off-white transition-colors cursor-pointer">
                  Join our team
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
