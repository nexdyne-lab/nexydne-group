import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function About() {
  const aboutLinks = [
    { title: "Purpose, Mission & Values", description: "What drives us and the principles that guide our work", href: "/about/values" },
    { title: "Our Impact", description: "How we create lasting value for clients and communities", href: "/about/impact" },
    { title: "Leadership Team", description: "Meet the people leading our firm", href: "/about/team" },
    { title: "Our Offices", description: "Where we work across the globe", href: "/offices" },
    { title: "Case Studies", description: "Real results from our client partnerships", href: "/case-studies" },
    { title: "Contact Us", description: "Get in touch with our team", href: "/contact" },
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
      body: "We put artificial intelligence and agentic workflows to work across the enterprise—automating judgement-heavy tasks and compounding capability, not just cost savings.",
    },
    {
      no: "03",
      title: "Govern, then scale",
      body: "Every deployment operates inside a governance layer—Human Intelligence Governance (HIG™)—so transformation stays controlled, auditable, and durable as it grows.",
    },
  ];

  const values = [
    { title: "Our People", description: "We are defined by our people and committed to a culture where diverse talent does the best work of their careers.", image: "/images/ai-team-collaboration.jpg" },
    { title: "Client Impact", description: "We measure success by the lasting capabilities we build—not the size of the deck we leave behind.", image: "/images/ai-team-consulting.jpg" },
    { title: "Intelligent Innovation", description: "We pair frontier technology with disciplined strategy to solve problems that matter, responsibly.", image: "/images/ai-abstract-visualization.jpg" },
    { title: "Governed Growth", description: "We help organisations grow with control—scaling AI and agentic systems without losing the human system that governs them.", image: "/images/hero-team-2.webp" },
  ];

  const stats = [
    { value: "62+", label: "Projects delivered" },
    { value: "2", label: "Founding partners" },
    { value: "HIG™", label: "Our governing doctrine" },
  ];

  return (
    <div className="min-h-screen bg-subtle text-charcoal">
      <SEO
        title="About Us | NexDyne Consulting Group"
        description="NexDyne helps small and mid-sized businesses and enterprises turn AI and agentic systems into enterprise-wide transformation and growth—governed by Human Intelligence Governance (HIG™)."
        canonical="/about"
      />
      <Navigation />

      {/* ── Hero — full-width editorial (no split) ─────────────────────────── */}
      <section className="bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12 pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20">
          <motion.div {...fadeUp} className="max-w-4xl">
            <span className="nx-eyebrow text-charcoal/55">About NexDyne</span>
            <h1 className="nx-h1 text-charcoal mt-5 mb-7">
              Human intelligence,
              <br className="hidden sm:block" /> governed and scaled.
            </h1>
            <p className="nx-lead text-muted-foreground max-w-2xl">
              We help small and mid-sized businesses and enterprises harness AI and agentic
              systems for enterprise-wide transformation and growth—implementing technology only
              after we design the human system it operates within.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <Link href="/contact">
                <span className="inline-block px-8 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">
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
        </div>

        {/* full-bleed image band */}
        <motion.div {...fadeUp} className="w-full">
          <div className="relative h-[300px] md:h-[420px] lg:h-[480px] overflow-hidden">
            <img src="/images/hero-team.jpg" alt="NexDyne consultants at work" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/15" />
          </div>
        </motion.div>
      </section>

      {/* ── Quick links to sub-pages ───────────────────────────────────────── */}
      <section className="bg-white border-b border-border">
        <div className="container px-4 sm:px-6 md:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-border">
            {aboutLinks.map((link, i) => (
              <Link key={i} href={link.href} className="group relative block px-5 py-5 h-full transition-colors hover:bg-subtle">
                <span className="absolute left-0 top-0 h-full w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <h3 className="text-[13px] font-semibold text-charcoal mb-1 group-hover:text-primary transition-colors leading-snug">
                  {link.title}
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Positioning statement (replaces the split mission block) ───────── */}
      <section className="nx-section bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-4xl">
            <p className="text-[1.6rem] md:text-[2rem] lg:text-[2.4rem] leading-[1.3] tracking-[-0.02em] text-charcoal font-medium">
              Businesses are pushing forward—testing, challenging, striving for the change that
              transforms everything. We partner with bold leaders to pinpoint strategy, harness{" "}
              <span className="text-primary">AI and agentic systems</span>, and build capabilities
              that compound.
            </p>
            <p className="nx-lead text-muted-foreground mt-8 max-w-3xl">
              Every technology we deploy sits inside a human system we design first. That
              discipline—Human Intelligence Governance (HIG™)—is how we turn ambition into
              enterprise-wide transformation and durable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── How we work — 3 principles (grid, not split) ───────────────────── */}
      <section className="nx-section bg-white border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-14">
            <span className="nx-eyebrow text-charcoal/55">How we work</span>
            <h2 className="nx-h2 text-charcoal mt-4">Technology follows the human system—never the other way around.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="group bg-white p-8 lg:p-10 hover:bg-subtle transition-colors"
              >
                <div className="text-primary text-sm font-semibold tracking-[0.1em] mb-5">{p.no}</div>
                <h3 className="nx-h3 text-charcoal mb-3">{p.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we are — editorial (label left, prose right) ───────────────── */}
      <section className="nx-section bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">Who we are</span>
              <h2 className="nx-h2 text-charcoal mt-4">One firm, one partnership.</h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="lg:col-span-8">
              <p className="nx-lead text-charcoal mb-6">
                NexDyne operates as one—a unified partnership committed to business transformation
                for growth-stage and mid-market organisations, and the enterprises that partner with
                them.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                We were founded on a simple belief: world-class strategy, AI, and data capability
                should not be reserved for the Fortune 500. Ambitious organisations everywhere deserve
                the same caliber of expertise and the same discipline in how it is governed.
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

      {/* ── Values — card grid ─────────────────────────────────────────────── */}
      <section className="nx-section bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-14">
            <span className="nx-eyebrow text-charcoal/55">Our values</span>
            <h2 className="nx-h2 text-charcoal mt-4">What defines us</h2>
            <p className="nx-lead text-muted-foreground mt-5">
              Four commitments that shape every engagement and every partnership we build.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative bg-white border border-border h-full overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_40px_-20px_rgba(36,36,36,0.28)]">
                  <span className="absolute top-0 left-0 z-10 h-[3px] w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg text-charcoal mb-3 font-medium group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats — restrained, charcoal + amber ───────────────────────────── */}
      <section className="nx-section bg-charcoal text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <span className="nx-eyebrow text-white/45">The measure of our work</span>
            <h2 className="nx-h2 text-white mt-4">Focused. Governed. Accountable.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="py-8 sm:py-10 sm:px-8 border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0"
              >
                <div className="text-[2.5rem] md:text-[3rem] leading-none font-semibold text-amber mb-3">{s.value}</div>
                <p className="text-[15px] text-white/60">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="text-[13px] text-white/40 mt-8 max-w-2xl">
            We report outcomes, not vanity metrics. Engagement figures reflect delivered work across
            our practice.
          </motion.p>
        </div>
      </section>

      {/* ── Our story ──────────────────────────────────────────────────────── */}
      <section className="nx-section bg-subtle">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="nx-eyebrow text-charcoal/55">Our story</span>
            <h2 className="nx-h2 text-charcoal mt-4 mb-8">Founded on a simple belief</h2>
            <div className="space-y-6">
              <p className="nx-lead text-charcoal">
                Sophisticated AI, data analytics, and strategic consulting were traditionally reserved
                for the world's largest companies. We believed ambitious organisations everywhere
                deserved the same caliber of expertise—and a more disciplined way to apply it.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                So we built NexDyne to democratise access to world-class capability for growth-stage
                and mid-market organisations, and to govern that capability with the same rigour an
                elite firm brings to the enterprise. We deploy AI and agentic systems where they
                create real advantage, always inside a human system we design and govern first.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                Today we continue to push boundaries—combining deep expertise with frontier technology
                to help our clients not just compete, but lead.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────────────────────── */}
      <section className="nx-section bg-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="nx-h2 text-charcoal mb-5">Ready to transform your business?</h2>
            <p className="nx-lead text-muted-foreground mb-10 max-w-2xl">
              Let's discuss where AI and agentic systems can create durable advantage—and how we'll
              govern the change end to end.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contact">
                <span className="inline-block px-8 py-4 bg-primary text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-primary-hover transition-colors cursor-pointer">
                  Contact us
                </span>
              </Link>
              <Link href="/careers">
                <span className="inline-block px-8 py-4 border border-border text-charcoal text-[13px] font-semibold uppercase tracking-[0.12em] hover:border-charcoal hover:bg-subtle transition-colors cursor-pointer">
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
