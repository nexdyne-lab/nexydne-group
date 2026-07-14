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
    { title: "Our people", description: "We are defined by our people and a culture where diverse talent does the best work of their careers.", image: "/images/hero-team.jpg" },
    { title: "Client impact", description: "We measure success by the lasting capabilities we build — not the size of the deck we leave behind.", image: "/images/ai-team-consulting.jpg" },
    { title: "Intelligent innovation", description: "We pair frontier technology with disciplined strategy to solve problems that matter, responsibly.", image: "/images/ai-technology-consulting.jpg" },
    { title: "Governed growth", description: "We help organisations scale AI and agentic systems without losing the human system that governs them.", image: "/images/case-professional-services.jpg" },
  ];

  const explore = [
    { no: "01", title: "Purpose, Mission & Values", description: "What drives us and the principles that guide every engagement.", href: "/about/values", image: "/images/approach-strategy.jpg" },
    { no: "02", title: "Our Impact", description: "How we create lasting value for clients and communities.", href: "/about/impact", image: "/images/case-professional-services.jpg" },
    { no: "03", title: "Leadership Team", description: "The people leading the firm, and the partnership behind it.", href: "/about/team", image: "/images/hero-team-2.webp" },
    { no: "04", title: "Our Offices", description: "Where we work, and how to reach the team nearest you.", href: "/offices", image: "/images/office-grand-rapids.jpg" },
    { no: "05", title: "Case Studies", description: "Real results from real client partnerships.", href: "/cases", image: "/images/case-consulting-knowledge-management.jpg" },
    { no: "06", title: "Contact Us", description: "Start a conversation about the change you want to make.", href: "/contact", image: "/images/ai-team-consulting.jpg" },
  ];

  const capabilities = [
    { title: "Artificial Intelligence", desc: "Generative and agentic systems, built for production.", href: "/capabilities/artificial-intelligence" },
    { title: "Operations", desc: "Supply chain, quality, and performance, re-engineered.", href: "/capabilities/operations" },
    { title: "Technology", desc: "Cloud, data, and platform modernisation that scales.", href: "/capabilities/technology" },
    { title: "Strategy & Corporate Finance", desc: "Strategy, planning, and the numbers behind the plan.", href: "/capabilities/strategy-corporate-finance" },
    { title: "Business Building", desc: "New digital ventures and revenue streams, launched.", href: "/capabilities/business-building" },
    { title: "Growth, Marketing & Sales", desc: "Demand, pricing, and commercial engines that compound.", href: "/capabilities/growth-marketing-sales" },
  ];

  const founders = [
    { name: "David Seyaker", initials: "DS", role: "Co-Founder & Chief Executive", focus: "Sets the firm's direction and its governing doctrine, HIG™ — leading strategy and enterprise-wide transformation for clients." },
    { name: "Raphaelyn CN Bomosy-Forkpa", initials: "RB", role: "Co-Founder & Managing Partner", focus: "Leads client delivery and the standards behind every engagement — turning strategy into governed, durable outcomes." },
  ];

  const partners = ["OpenAI", "Anthropic", "AWS", "Google Cloud", "Microsoft Azure", "Databricks"];

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
                  src="/images/hero-team-2.webp"
                  alt="NexDyne consultants in a working session"
                  className="w-full aspect-[3/2] object-cover"
                />
                <span aria-hidden className="absolute bottom-0 left-0 h-1 w-24 bg-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ Firm at a glance — charcoal stat band ═════════════════════════════ */}
      <section className="bg-charcoal text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-white/10 lg:divide-y-0">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="px-6 py-10 md:py-12"
              >
                <div className={`text-[2.4rem] md:text-[2.9rem] leading-none font-semibold tracking-[-0.02em] mb-3 ${i === 2 ? "text-amber" : "text-white"}`}>
                  {s.value}
                </div>
                <p className="text-[13px] md:text-[14px] text-white/55 leading-snug">{s.label}</p>
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

      {/* ══ HIG™ — the governing doctrine, explained ══════════════════════════ */}
      <section className="nx-section bg-white border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12 md:mb-16">
            <span className="nx-eyebrow text-charcoal/55">Our doctrine</span>
            <h2 className="nx-h2 text-charcoal mt-4">Human Intelligence Governance (HIG™)</h2>
            <p className="nx-lead text-muted-foreground mt-6">
              Every engagement runs inside one discipline. HIG™ insists that technology serve a human
              system we design first, operate within explicit controls, and stay accountable as it
              scales — so transformation is durable, not just impressive. Three layers make it work.
            </p>
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

      {/* ══ What we do — capability breadth ═══════════════════════════════════ */}
      <section className="nx-section bg-off-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12 md:mb-14">
            <span className="nx-eyebrow text-charcoal/55">What we do</span>
            <h2 className="nx-h2 text-charcoal mt-4">
              The full range — strategy, technology, and the governance to make it stick.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {capabilities.map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}>
                <Link href={c.href}>
                  <div className="group h-full bg-white p-7 lg:p-8 hover:bg-off-white transition-colors cursor-pointer">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="nx-h3 text-charcoal group-hover:text-primary transition-colors">{c.title}</h3>
                      <span className="text-primary text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                    <p className="text-[14px] text-muted-foreground leading-relaxed mt-3">{c.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-9">
            <Link href="/capabilities">
              <span className="group inline-flex items-center gap-2 text-[15px] font-medium text-charcoal cursor-pointer">
                <span className="border-b border-charcoal/30 group-hover:border-primary group-hover:text-primary transition-colors pb-0.5">Explore all capabilities</span>
                <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
            <Link href="/industries">
              <span className="group inline-flex items-center gap-2 text-[15px] font-medium text-charcoal cursor-pointer">
                <span className="border-b border-charcoal/30 group-hover:border-primary group-hover:text-primary transition-colors pb-0.5">18 industries served</span>
                <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ Who we are + pull quote ═══════════════════════════════════════════ */}
      <section className="nx-section bg-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">Who we are</span>
              <h2 className="nx-h2 text-charcoal mt-4">One firm, one partnership.</h2>
              <div className="mt-8 hidden lg:block overflow-hidden">
                <img
                  src="/images/ai-team-collaboration.jpg"
                  alt="NexDyne consultants collaborating"
                  className="w-full aspect-[4/3] object-cover"
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

      {/* ══ Leadership & founders ═════════════════════════════════════════════ */}
      <section className="nx-section bg-off-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12 md:mb-14">
            <span className="nx-eyebrow text-charcoal/55">Leadership</span>
            <h2 className="nx-h2 text-charcoal mt-4">The partnership behind the firm.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {founders.map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <div className="group bg-white border border-border p-7 lg:p-9 h-full transition-shadow duration-300 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.22)]">
                  <div className="flex items-center gap-5">
                    <div className="shrink-0 h-16 w-16 rounded-full bg-charcoal text-white flex items-center justify-center text-[1.05rem] font-semibold tracking-[0.02em]">
                      {f.initials}
                    </div>
                    <div>
                      <h3 className="text-[1.2rem] font-semibold text-charcoal leading-tight">{f.name}</h3>
                      <p className="text-[13px] text-primary font-medium mt-1 uppercase tracking-[0.06em]">{f.role}</p>
                    </div>
                  </div>
                  <p className="text-[15px] text-muted-foreground leading-[1.7] mt-6">{f.focus}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-8">
            <Link href="/about/team">
              <span className="group inline-flex items-center gap-2 text-[15px] font-medium text-charcoal cursor-pointer">
                <span className="border-b border-charcoal/30 group-hover:border-primary group-hover:text-primary transition-colors pb-0.5">Meet the full leadership team</span>
                <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </motion.div>
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

      {/* ══ Partners & ecosystem ══════════════════════════════════════════════ */}
      <section className="nx-section bg-off-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-charcoal/55">Ecosystem</span>
              <h2 className="nx-h2 text-charcoal mt-4">Built on frontier platforms.</h2>
              <p className="text-[15px] text-muted-foreground leading-[1.7] mt-5 max-w-md">
                We deploy real technology, not slideware — building on the AI and cloud platforms our
                clients can trust and scale.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border">
                {partners.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white flex items-center justify-center px-4 py-8 md:py-10 text-[15px] md:text-[17px] font-semibold text-charcoal/80 tracking-[-0.01em] hover:text-primary hover:bg-off-white transition-colors"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ Explore the firm — image-tile navigation ══════════════════════════ */}
      <section className="nx-section bg-off-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-10 md:mb-12">
            <span className="nx-eyebrow text-charcoal/55">Explore the firm</span>
            <h2 className="nx-h2 text-charcoal mt-4">Go deeper into who we are.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {explore.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="group">
                <Link href={item.href}>
                  <div className="relative overflow-hidden aspect-[4/3] cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/45 to-charcoal/10" />
                    <span aria-hidden className="absolute top-0 left-0 h-1 w-full bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    <div className="relative h-full flex flex-col justify-between p-6 lg:p-7">
                      <span className="text-[13px] font-semibold text-white/60 tabular-nums">{item.no}</span>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h3 className="text-[1.3rem] md:text-[1.55rem] font-semibold text-white leading-tight tracking-[-0.01em]">{item.title}</h3>
                          <span className="text-primary text-xl transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                        </div>
                        <p className="text-[13px] md:text-[14px] text-white/75 mt-2 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Closing CTA — orange band ═════════════════════════════════════════ */}
      <section className="nx-section bg-primary text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="nx-h2 text-white mb-5">Ready to transform your business?</h2>
            <p className="nx-lead text-white/85 mb-10 max-w-2xl">
              Let's discuss where AI and agentic systems can create durable advantage — and how we'll
              govern the change end to end.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contact">
                <span className="inline-block px-9 py-4 bg-white text-charcoal text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-white/90 transition-colors cursor-pointer">
                  Contact us
                </span>
              </Link>
              <Link href="/careers">
                <span className="inline-block px-9 py-4 border border-white/50 text-white text-[13px] font-semibold uppercase tracking-[0.12em] hover:bg-white/10 hover:border-white transition-colors cursor-pointer">
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
