import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, Linkedin } from "lucide-react";
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

// Bain-style in-page section jump-nav
const sectionTabs = [
  { id: "purpose", label: "Purpose" },
  { id: "hig", label: "HIG™" },
  { id: "what-we-do", label: "What we do" },
  { id: "leadership", label: "Leadership" },
  { id: "values", label: "Our values" },
  { id: "partners", label: "Ecosystem" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("purpose");
  const [capability, setCapability] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveTab(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionTabs.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const contactHref =
    "/contact" +
    (capability || email
      ? "?" +
        [capability && `capability=${encodeURIComponent(capability)}`, email && `email=${encodeURIComponent(email)}`]
          .filter(Boolean)
          .join("&")
      : "");
  const stats = [
    { value: "62+", label: "Client engagements delivered" },
    { value: "18", label: "Industries served" },
    { value: "HIG™", label: "Our governing doctrine" },
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
      body: "We put artificial intelligence and agentic workflows to work across the enterprise — automating judgment-heavy tasks and compounding capability, not just cost.",
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
    { title: "Governed growth", description: "We help organizations scale AI and agentic systems without losing the human system that governs them.", image: "/images/case-professional-services.jpg" },
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
    { title: "Technology", desc: "Cloud, data, and platform modernization that scales.", href: "/capabilities/technology" },
    { title: "Strategy & Corporate Finance", desc: "Strategy, planning, and the numbers behind the plan.", href: "/capabilities/strategy-corporate-finance" },
    { title: "Business Building", desc: "New digital ventures and revenue streams, launched.", href: "/capabilities/business-building" },
    { title: "Growth, Marketing & Sales", desc: "Demand, pricing, and commercial engines that compound.", href: "/capabilities/growth-marketing-sales" },
  ];

  const founders = [
    { name: "David Seyaker", initials: "DS", role: "Co-Founder & Chief Executive", focus: "Sets the firm's direction and its governing doctrine, HIG™ — leading strategy and enterprise-wide transformation for clients." },
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

      {/* ══ Sticky section jump-nav (Bain-style) ═════════════════════════════ */}
      <div className="sticky top-14 md:top-20 z-30 bg-white/95 backdrop-blur border-y border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="flex gap-6 md:gap-9 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {sectionTabs.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`shrink-0 py-4 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.08em] border-b-2 -mb-px transition-colors ${
                  activeTab === s.id ? "border-primary text-primary" : "border-transparent text-charcoal/55 hover:text-charcoal"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══ Firm at a glance — charcoal stat band ═════════════════════════════ */}
      <section className="bg-charcoal text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="px-6 py-10 md:py-12 text-center"
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
      <section id="purpose" className="nx-section bg-off-white scroll-mt-[130px]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-primary" />
              <span className="nx-eyebrow text-charcoal/55">Our purpose</span>
            </div>
            <p className="text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.28] tracking-[-0.02em] text-charcoal font-medium">
              Ambitious organizations are testing, challenging, striving for the change that
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

      {/* ══ HIG™ — the governing doctrine (charcoal) ══════════════════════════ */}
      <section id="hig" className="nx-section bg-charcoal text-white relative overflow-hidden scroll-mt-[130px]">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "radial-gradient(55% 60% at 88% 4%, rgba(222,47,35,0.14) 0%, transparent 60%)" }}
        />
        <div className="relative container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12 md:mb-16">
            <span className="nx-eyebrow text-white/45">Our doctrine</span>
            <h2 className="nx-h2 text-white mt-4">Human Intelligence Governance (HIG™)</h2>
            <p className="nx-lead text-white/65 mt-6">
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
                <span className="absolute top-0 left-0 h-px w-full bg-white/15" />
                <span className="absolute top-0 left-0 h-px w-16 bg-primary scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="text-[2.4rem] leading-none font-semibold text-white/20 mb-6">{p.no}</div>
                <h3 className="nx-h3 text-white mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-[15px] text-white/60 leading-[1.7]">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ What we do — capability breadth ═══════════════════════════════════ */}
      <section id="what-we-do" className="nx-section bg-off-white scroll-mt-[130px]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-12 md:mb-14">
            <div className="flex items-center gap-6">
              <span className="h-px flex-1 bg-border" />
              <h2 className="nx-h2 text-charcoal text-center">What We Do</h2>
              <span className="h-px flex-1 bg-border" />
            </div>
            <p className="text-center nx-lead text-muted-foreground max-w-2xl mx-auto mt-6">
              Strategy, technology, and the governance to make it stick — across six capability areas.
            </p>
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
                for growing organizations and the enterprises that partner with them.
              </p>

              <figure className="border-l-2 border-primary pl-7 md:pl-9 my-10">
                <blockquote className="text-[1.5rem] md:text-[1.95rem] leading-[1.35] tracking-[-0.01em] text-charcoal font-medium">
                  World-class strategy, AI, and data capability should not be reserved for the
                  Fortune 500. Ambitious organizations everywhere deserve the same caliber of
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
      <section id="leadership" className="nx-section bg-off-white border-t border-border scroll-mt-[130px]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12 md:mb-14">
            <span className="nx-eyebrow text-charcoal/55">Leadership</span>
            <h2 className="nx-h2 text-charcoal mt-4">The partnership behind the firm.</h2>
          </motion.div>
          <div className="max-w-2xl">
            {founders.map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <div className="group bg-white border border-border p-7 lg:p-9 h-full transition-shadow duration-300 hover:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.22)]">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 h-24 w-24 rounded-full bg-charcoal text-white flex items-center justify-center text-[1.5rem] font-semibold tracking-[0.02em] ring-4 ring-off-white">
                      {f.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[1.4rem] lg:text-[1.55rem] font-semibold text-charcoal leading-tight tracking-[-0.015em]">{f.name}</h3>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-charcoal/70 mt-2">{f.role}</p>
                      <span aria-hidden className="block h-[2px] w-9 bg-primary mt-3" />
                      <p className="text-[15px] text-muted-foreground leading-[1.7] mt-4">{f.focus}</p>
                      <div className="flex items-center gap-3 mt-6">
                        <Link href="/contact">
                          <span aria-label={`Contact ${f.name}`} className="h-10 w-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                            <Mail className="w-[18px] h-[18px]" />
                          </span>
                        </Link>
                        <a
                          href="https://www.linkedin.com/company/nexdyne"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${f.name} — firm LinkedIn`}
                          className="h-10 w-10 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <Linkedin className="w-[18px] h-[18px]" />
                        </a>
                      </div>
                    </div>
                  </div>
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
      <section id="values" className="nx-section bg-white border-t border-border scroll-mt-[130px]">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-12 md:mb-14">
            <div className="flex items-center gap-6">
              <span className="h-px flex-1 bg-border" />
              <h2 className="nx-h2 text-charcoal text-center">What Defines Us</h2>
              <span className="h-px flex-1 bg-border" />
            </div>
            <p className="text-center nx-lead text-muted-foreground max-w-2xl mx-auto mt-6">
              Four commitments that shape every engagement and every partnership we build.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {values.map((value, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <article className="group">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full aspect-[5/4] object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="pt-5">
                    <h3 className="text-charcoal font-semibold leading-[1.25] tracking-[-0.015em] text-[1.2rem] lg:text-[1.35rem]">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-[1.6] text-muted-foreground">{value.description}</p>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Statement-over-photo banner (Bain-style) ═════════════════════════ */}
      <section className="bg-white">
        <Link href="/careers">
          <div className="group relative overflow-hidden h-[300px] md:h-[400px] cursor-pointer">
            <img
              src="/images/ai-team-collaboration.jpg"
              alt="NexDyne team at work"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/55 to-charcoal/15" />
            <div className="relative h-full container px-4 sm:px-6 md:px-12 flex items-center">
              <div className="max-w-2xl">
                <h2 className="text-white text-[1.9rem] sm:text-[2.4rem] md:text-[3rem] font-semibold leading-[1.08] tracking-[-0.02em]">
                  Bold ambition. Governed outcomes.
                  <span className="text-primary transition-transform inline-block group-hover:translate-x-1"> →</span>
                </h2>
                <p className="text-white/75 text-[15px] md:text-[16px] mt-4 max-w-lg">
                  Build your career where human judgment leads the technology, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ══ Partners & ecosystem (charcoal) ═══════════════════════════════════ */}
      <section id="partners" className="nx-section bg-charcoal text-white relative overflow-hidden scroll-mt-[130px]">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "radial-gradient(50% 60% at 8% 100%, rgba(222,47,35,0.12) 0%, transparent 60%)" }}
        />
        <div className="relative container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <span className="nx-eyebrow text-white/45">Ecosystem</span>
              <h2 className="nx-h2 text-white mt-4">Built on frontier platforms.</h2>
              <p className="text-[15px] text-white/60 leading-[1.7] mt-5 max-w-md">
                We deploy real technology, not slideware — building on the AI and cloud platforms our
                clients can trust and scale.
              </p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
                {partners.map((p, i) => (
                  <div
                    key={i}
                    className="bg-charcoal flex items-center justify-center px-4 py-8 md:py-10 text-[15px] md:text-[17px] font-semibold text-white/80 tracking-[-0.01em] hover:text-primary hover:bg-white/[0.03] transition-colors"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ Explore the firm — typographic index ══════════════════════════════ */}
      <section className="nx-section bg-off-white border-t border-border">
        <div className="container px-4 sm:px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-10 md:mb-12">
            <div className="flex items-center gap-6">
              <span className="h-px flex-1 bg-border" />
              <h2 className="nx-h2 text-charcoal text-center whitespace-nowrap">Explore the Firm</h2>
              <span className="h-px flex-1 bg-border" />
            </div>
            <p className="text-center nx-lead text-muted-foreground max-w-2xl mx-auto mt-6">
              Go deeper into who we are.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 md:gap-x-14 lg:gap-x-20 border-t border-border">
            {explore.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}>
                <Link href={item.href}>
                  <div className="group relative flex items-start gap-5 md:gap-7 py-6 md:py-7 border-b border-border cursor-pointer">
                    <span aria-hidden className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 h-8 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />
                    <span className="text-[13px] font-semibold text-charcoal/30 tabular-nums pt-1.5">{item.no}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-[1.35rem] md:text-[1.65rem] font-semibold tracking-[-0.015em] text-charcoal group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <span className="shrink-0 text-primary text-xl transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                      </div>
                      <p className="text-[14px] md:text-[15px] text-muted-foreground mt-1.5 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Ready to talk — interactive contact block (Bain-style, orange) ════ */}
      <section className="nx-section bg-primary text-white">
        <div className="container px-4 sm:px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div {...fadeUp}>
              <span className="nx-eyebrow text-white/70">What's your ambition?</span>
              <h2 className="nx-h2 text-white mt-4 mb-8">Ready to talk?</h2>
              <label htmlFor="about-cap" className="block text-[12px] font-semibold uppercase tracking-[0.08em] text-white/80 mb-3">
                I want to talk to your experts in
              </label>
              <select
                id="about-cap"
                value={capability}
                onChange={(e) => setCapability(e.target.value)}
                className="w-full max-w-md bg-white text-charcoal text-[15px] px-4 py-3.5 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 cursor-pointer"
              >
                <option value="">Select a capability</option>
                {capabilities.map((c) => (
                  <option key={c.title} value={c.title}>{c.title}</option>
                ))}
              </select>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="lg:pt-14">
              <p className="nx-lead text-white/85 mb-6 max-w-md">
                We work with ambitious leaders who want to define the future — not hide from it.
                Let's build durable advantage together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-white text-charcoal text-[15px] px-4 py-3.5 border border-white/30 placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-white/60"
                />
                <Link href={contactHref}>
                  <span className="inline-flex items-center justify-center bg-charcoal text-white text-[13px] font-semibold uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-charcoal/85 transition-colors cursor-pointer whitespace-nowrap">
                    Contact us
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
